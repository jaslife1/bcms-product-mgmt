import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, Button,Dialog, DialogContent, Typography } from "@mui/material";
import SimpleDialog from "../SimpleDialog";
import Grid from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductClassicPage from "./Classic/ProductClassicPage";
import ProductGuiltFreePage from "./Guilt-Free/ProductGuiltFreePage";
import PayPage from "./Pay/PayPage";
import AddNewSaleMutation from "../../mutations/AddNewSaleMutation";
import ChangePage from "./Pay/ChangePage";
import withAuth from "../WithAuth";
import TimeDate from "./TimeDate";
import ProductCreationPage from "./Creations/ProductCreationPage";
import UpdateQuantityPage from "./UpdateQuantityPage";
import BillSummaryPage from "./Bill/BillSummaryPage";
import { fetchQuery, graphql } from "react-relay";
import environment from "../../Environment";

const PointOfSalesQuery = graphql`
    query PointOfSalesQuery($filter: ProductFilter!) {
        viewer {
            getProduct(filter: $filter) {
                edges {
                        node {
                            product {
                                id
                                name
                                sku
                                price
                                barcode
                                weight
                                code
                            }
                            inventory {
                                quantity
                            }
                        }
                    }
            }
        }
    }
`

class PointOfSales extends Component {

    constructor(props) {
        super(props)
        this.addProductToCart = this.addProductToCart.bind(this)
        this.state = {
            products: new Map(),
            updateProduct: null,
            scanItemBarcode: '',
            customer: null,
            subtotal: 0,
            tax: 0,
            discount: 0,
            total: 0,
            change: 0,
            showClassicDialog: false,
            showGuiltFreeDialog: false,
            showCreationDialog: false,
            showPayDialog: false,
            showChangeDialog: false,
            showUpdateQuantityDialog: false,
            showDialog: false,
            showErrorDialog: false,
        };
    }

    productButtonStyle = {
        "minHeight": "150px",
        "minWidth": "180px",
    }

    optionButtonStyle = {
        "minWidth" : "150px",
        "minHeight" : "70px"
    }

   


    TAX_RATE = 0.07;

    ccyFormat(num) {
        //return `${num.toFixed(2)}`;
        return num.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
    }

    priceRow(qty, unit) {
        return qty * unit;
    }

    computeSubTotal(items) {
       return items.map(( product ) => product[1].rowPrice).reduce((sum, i) => sum + i, 0);
    }
    
    addProductToCart = (product, inventory) => {
        console.log("AddProductToCart: ", product, inventory)
        var qty =  1

        var curProducts = new Map(this.state.products)
        var curSubTotal = this.state.subtotal
        var curTotal = this.state.total
        var curTax =  this.state.tax
        var curDiscount = this.state.discount

        if (curProducts.has(product.id)) {
            // Then increase the quantity
            var temp = curProducts.get(product.id)
            if ((temp.quantity + qty) > inventory.quantity) {
                // TODO: Prompt the user that the quantity is at its limit. And do nothing

            } else {
                temp.quantity += qty
            }
            temp.rowPrice = this.priceRow(temp.quantity, temp.item.price)
            curProducts[product.id] = temp
        } else {
            //console.log("New:",product)
            curProducts.set(product.id, {item: product, quantity: qty, rowPrice: this.priceRow(qty, product.price)})
        }

        curSubTotal = this.computeSubTotal(Array.from(curProducts))
        curTotal = curSubTotal - curTax - curDiscount

        this.setState({products: curProducts,
                        subtotal: curSubTotal,
                        total: curTotal,
                        scanItemBarcode: '',
                        showClassicDialog: false,
                        showGuiltFreeDialog: false,
                        showCreationDialog: false,
                    })

    }

    updateQuantityOfItem = (quantity) => {
        console.log("UpdateQuantityOfItem: ", quantity)

        var curProducts = new Map (this.state.products)
        var curSubTotal = this.state.subtotal
        var curTotal = this.state.total
        var curTax =  this.state.tax
        var curDiscount = this.state.discount

        var product = this.state.products.get(this.state.updateProduct.item.id)

        if (quantity !== product.quantity) {

            //TODO: Make sure taht we are not updating the quantity beyond the total inventory

            if (quantity === 0) {
                //delete the item from the list
                curProducts.delete(product.item.id)
            } else {
                product.quantity = quantity
                product.rowPrice = this.priceRow(product.quantity, product.item.price)
                curProducts[product.item.id] = product
            }
            
            curSubTotal = this.computeSubTotal(Array.from(curProducts))
            curTotal = curSubTotal - curTax - curDiscount
            
            this.setState({products: curProducts,
                subtotal: curSubTotal,
                total: curTotal,
            })

        } else {
            // do nothing since it is the same
        }

        this.setState({
            showUpdateQuantityDialog: false,
            updateProduct: null,
        })
    }

    payButton = (e) => {
        this.setState({
            showPayDialog: true
        })
    }

    productInTableClicked = (product) => {
        console.log("productInTableClicked: ", product)
        this.setState({
            showUpdateQuantityDialog: true,
            updateProduct: product
            })
    }

    classicButtonClicked = (e) => {
        console.log("Classic Button clicked")
        this.setState({showClassicDialog: true})
    }

    guiltfreeButtonClicked = (e) => {
        console.log("Guilt-Free Button clicked")
        this.setState({showGuiltFreeDialog: true})
    }

    creationButtonClicked = (e) => {
        console.log("Creation Button clicked")
        this.setState({showCreationDialog: true})
    }

    premiumButtonClicked = (e) => {
        console.log("Premium Button Clicked")
    }

    specialtyProductButtonClicked = (e) => {
        console.log("Specialty Product Button Clicked")
    }

    foodButtonClicked = (e) => {
        console.log("Food Button clicked")
    }

    drinksButtonClicked = (e) => {
        console.log("Drinks Button clicked")
    }

    searchProductButtonClicked = (e) => {
        console.log("Search Product Button clicked")
    }

    customerButtonClicked = (e) => {
        console.log("Customer Button clicked")
    }

    applyDiscountButtonClicked = (e) => {
        console.log("Apply Discount Button clicked")
    }

    scanItemKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            console.log(e.target.value)
            const barcode = e.target.value
            // query the database for this barcode
            const variables={filter:{code: "Product", barcode: barcode, id: "some-id"}}
            const query = PointOfSalesQuery
            //const envi = environment

           const promise = fetchQuery(environment, query, variables)
           promise.subscribe({
               start:() => {
                   console.log("start:")
               },
               complete: () => {
                   console.log("complete:")
               },
               error: (error) => {
                   console.error("error: ", error)
               },
               next: (data) => {
                   console.log("next: ", data)
                   const product = data.viewer.getProduct.edges[0].node.product
                   const inventory = data.viewer.getProduct.edges[0].node.inventory

                   this.addProductToCart(product, inventory)
               }
           })
        }
    }

    productButtons = [
        {"name":"Classic Chocolates", "action": this.classicButtonClicked},
        {"name":"Guilt-Free Chocolates", "action": this.guiltfreeButtonClicked},
        {"name":"Premium Chocolates", "action": this.premiumButtonClicked},
        {"name":"Specialty Products", "action": this.specialtyProductButtonClicked},
        {"name":"Buhay Creations", "action": this.creationButtonClicked},
        {"name":"Food", "action": this.foodButtonClicked},
        {"name":"Drinks", "action": this.drinksButtonClicked},
    ]

    render() {
        return(
            <>
            <Box 
                sx={{ flexGrow: 1 }}
                component="form"
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={12}>
                    <Grid xs={8}>
                        <h1>Point of Sales</h1>
                    </Grid>
                    <Grid xs={4}>
                        <TimeDate />
                    </Grid>
                </Grid>


                <Grid container spacing={2} disableEqualOverflow> {/** Outer container */}

                    <Grid xs={6}> {/**Main Left part */}
                        <Grid container spacing={12} rowSpacing={2}>
                            <Grid xs={4}>
                                <Button variant="contained"
                                    //fullWidth={true}
                                    style={this.optionButtonStyle}
                                    onClick={this.searchProductButtonClicked}
                                >
                                    Search Product
                                </Button>
                            </Grid>
                            <Grid xs={4}>
                                <Button variant="contained"
                                    //fullWidth={true}
                                    style={this.optionButtonStyle}
                                    onClick={this.customerButtonClicked}
                                >
                                    Customer
                                </Button>
                            </Grid>
                            <Grid xs={2}>
                                <Button variant="contained"
                                    //fullWidth={true}
                                    style={this.optionButtonStyle}
                                    onClick={this.applyDiscountButtonClicked}
                                >
                                    Apply Discount
                                </Button>
                            </Grid>

                            <Grid xs={12}>
                                <Typography>Customer: {(this.state.customer != null)? this.state.customer.name : "Walk-in"}</Typography>
                            </Grid>


                            <Grid xs={12}>
                                <TextField
                                    fullWidth={true}
                                    id="outlined-basic" 
                                    variant="outlined" 
                                    label="Scan Item"
                                    value={this.state.scanItemBarcode}
                                    onChange={(e) => this.setState({scanItemBarcode: e.target.value})}
                                    onKeyDown={this.scanItemKeyDown}
                                />
                                {/* <ScanItemContainer addProductToCart={this.addProductToCart} /> */}
                            </Grid>

                            <Grid xs={12}>
                                <TableContainer component={Paper} style={{height: 450}}>
                                    <Table sx={{ minWidth: 700 }} stickyHeader aria-label="spanning table sticky">
                                        <TableHead>
                                    
                                        <TableRow>
                                            <TableCell>Description</TableCell>
                                            <TableCell align="right">Qty.</TableCell>
                                            <TableCell align="right">Unit Price</TableCell>
                                            <TableCell align="right">Sum</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {Array.from(this.state.products).map((product) => (
                                                <TableRow
                                                    key={product[0]}
                                                    onClick={(e)=>{
                                                        e.stopPropagation()
                                                        this.productInTableClicked(product[1])
                                                    }}
                                                    >
                                                    <TableCell>{product[1].item.name}</TableCell>
                                                    <TableCell align="right">{product[1].quantity}</TableCell>
                                                    <TableCell align="right">₱ {this.ccyFormat(product[1].item.price)}</TableCell>
                                                    <TableCell align="right">₱ {this.ccyFormat(product[1].rowPrice)}</TableCell>
                                            </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>

                            <Grid xs={12}>
                                <Button variant="contained"
                                    fullWidth={true}
                                    style={this.optionButtonStyle}
                                    disabled={!(this.state.products.size > 0)}
                                    onClick={this.payButton}
                                >
                                    Pay
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid> {/**Main Left Part */}
                    <Grid xs={6}> {/**Main Right part */}
                    
                        <Grid container spacing={4}>
                            {this.productButtons.map((product) => {
                                return <Grid
                                         key={product.name}
                                         xs={3}>
                                    <Button variant="contained"
                                        style={this.productButtonStyle}
                                        onClick={product.action}
                                    >
                                        {product.name}
                                    </Button>
                                </Grid>
                            })}
                        </Grid>
                        <Grid>
                            <BillSummaryPage 
                                subtotal={this.state.subtotal}
                                tax={this.state.tax}
                                discount={this.state.discount}
                                total={this.state.total} />
                        </Grid>

                    </Grid> {/**Main Right Part */}

                </Grid> {/** Outer container */}
            </Box>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={this.state.showClassicDialog}
                onClose={(e)=>{
                    this.setState({showClassicDialog: false})
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <ProductClassicPage addProductToCart={this.addProductToCart} />
                </DialogContent>
            </Dialog>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={this.state.showGuiltFreeDialog}
                onClose={(e)=>{
                    this.setState({showGuiltFreeDialog: false})
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <ProductGuiltFreePage addProductToCart={this.addProductToCart} />
                </DialogContent>
            </Dialog>
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={this.state.showCreationDialog}
                onClose={(e)=>{
                    this.setState({showCreationDialog: false})
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <ProductCreationPage addProductToCart={this.addProductToCart} />
                </DialogContent>
            </Dialog>

            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={this.state.showPayDialog}
                onClose={(e)=>{
                    this.setState({showPayDialog: false})
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <PayPage 
                        addNewSale={this.addNewSale} />
                </DialogContent>
            </Dialog>

            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={this.state.showChangeDialog}
                onClose={(e)=>{
                    this.setState({showChangeDialog: false})
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <ChangePage 
                        change={this.state.change} />
                </DialogContent>
            </Dialog>

            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={this.state.showUpdateQuantityDialog}
                onClose={(e)=>{
                    this.setState({showUpdateQuantityDialog: false})
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <UpdateQuantityPage
                        updateQuantity={this.updateQuantityOfItem} 
                        product={this.state.updateProduct}
                     />
                </DialogContent>
            </Dialog>

            <SimpleDialog
                    open={this.state.showDialog}
                    title="Add New Product"
                    content="New product successfully added"
                    onClose={()=>{
                        this.setState({showDialog: false})
                    }}
                />
            <SimpleDialog
                open={this.state.showErrorDialog}
                title="Add New Product"
                content={"Failed to add new product." + this.state.showErrorContent}
                onClose={()=>{
                    this.setState({showErrorDialog: false})
                }}
            />
            </>
        )
    }

    addNewSale = (amountTendered) => {
        amountTendered = parseFloat(amountTendered)
        console.log("addNewSale amount tendered: ", amountTendered)

        const {products, subtotal, tax, discount, total} = this.state

        if (amountTendered >= total) {
            const change = amountTendered - total
            this.setState({change: change})

            //create an array based on the products
            var productList = []

            products.forEach((val, key)=>{
                console.log(key, val)
                var inventory = {
                    productId: key,
                    storeId: 1, // TODO: Get the correct storeID
                    quantity: val.quantity
                }

                var item = val.item
                var product = {
                    code: item.code,
                    name: item.name,
                    sku: item.sku,
                    barcode: item.barcode,
                    price: item.price,
                    weight: item.weight,
                    quantity: val.quantity,
                    active: true,
                }

                productList = [...productList, {product: product, inventory: inventory}]
            })

            AddNewSaleMutation(productList, subtotal, tax, discount, total, amountTendered, change,
                ()=>{
                    //success
                    // TODO: Print the receipt
                    this.setState({
                        products: new Map(),
                        updateProduct: null,
                        subtotal: 0,
                        tax: 0,
                        discount: 0,
                        total: 0,
                        showPayDialog: false,
                        showChangeDialog: true,
                    })
                },
                (err) =>{
                    //error
                    // Show snackbar
                });
        } else {
            // Error, show snackbar
            // Amount is less than total bill
        }

        

        
    }


    // addNewProduct = () => {
    //     const {code, description, name, sku, barcode, quantity, price, active} = this.state
    //     addNewOrderTransaction(code, name, description, sku, barcode, quantity, price, active, ()=>{
    //         console.log("Add new product successful.");
    //         // Prompt the user of successful addition of product
    //         this.setState({showDialog: true});
    //          // Clean up the form
    //         this.setState({
                
    //         })

    //     }, (err) => {
    //         console.log(err)
    //         this.setState({showErrorDialog: true, showErrorContent: err});
            
    //     })
    // }

}

export default withAuth(PointOfSales);