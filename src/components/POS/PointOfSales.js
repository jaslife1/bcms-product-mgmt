import React, {Component, createRef} from "react";
import Box from "@mui/material/Box"
import { TextField, Button,Dialog, DialogContent } from "@mui/material";
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

class PointOfSales extends Component {

    constructor(props) {
        super(props)
        this.addProductToCart = this.addProductToCart.bind(this)
    }

    state = {
        products: new Map(),
        updateProduct: null,
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

        if (quantity != product.quantity) {

            if (quantity == 0) {
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

    button1Clicked = (e) => {
        console.log("button 1 clicked")
    }

    button2Clicked = (e) => {
        console.log("button 2 clicked")
    }

    button3Clicked = (e) => {
        console.log("button 3 clicked")
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

    button6Clicked = (e) => {
        console.log("button 6 clicked")
    }

    button7Clicked = (e) => {
        console.log("button 7 clicked")
    }

    button8Clicked = (e) => {
        console.log("button 8 clicked")
    }

    button9Clicked = (e) => {
        console.log("button 9 clicked")
    }

    button10Clicked = (e) => {
        console.log("button 10 clicked")
    }

    button11Clicked = (e) => {
        console.log("button 11 clicked")
    }

    button12Clicked = (e) => {
        console.log("button 12 clicked")
    }

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
                <Grid container spacing={6}>
                    <Grid xs={2}>
                        <Button variant="contained"
                            fullWidth={true}
                            onClick={this.button1Clicked}
                        >
                            Search Item
                        </Button>
                    </Grid>
                    <Grid xs={2}>
                        <Button variant="contained"
                            fullWidth={true}
                            onClick={this.button2Clicked}
                        >
                            Customer
                        </Button>
                    </Grid>
                    <Grid xs={2}>
                        <Button variant="contained"
                            fullWidth={true}
                            onClick={this.button3Clicked}
                        >
                            Apply Discount
                        </Button>
                    </Grid>
                </Grid>
               
                <Grid container spacing={2}>
                    <Grid xs={6}>
                    <TextField
                        fullWidth={true}
                        id="outlined-basic" 
                        variant="outlined" 
                        label="Scan Item"
                    />
                    </Grid>
                </Grid>
                
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <TableContainer component={Paper} style={{maxHeight: 500, minHeight: 500}}>
                            <Table sx={{ minWidth: 700 }} stickyHeader aria-label="spanning table sticky">
                                <TableHead>
                                {/* <TableRow>
                                    <TableCell align="center" colSpan={3}>
                                    Details
                                    </TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow> */}
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
                                {/* <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="right">{this.ccyFormat(this.state.subtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Discount</TableCell>
                                    {/* <TableCell align="right">{`${(this.TAX_RATE * 100).toFixed(0)} %`}</TableCell> 
                                    <TableCell align="right">{this.ccyFormat(this.state.discount)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Total</TableCell>
                                    <TableCell align="right">{this.ccyFormat(this.state.total)}</TableCell>
                                </TableRow> */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid xs={6}>
                            <Grid container spacing={2}>
                                <Grid xs={6}>
                                    <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.classicButtonClicked}
                                    >
                                        Classic
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.guiltfreeButtonClicked}
                                    >
                                        Guilt-Free
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.button5Clicked}
                                    >
                                        Premium
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.button6Clicked}
                                    >
                                        Specialty
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.creationButtonClicked}
                                    >
                                        Creations
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.button5Clicked}
                                    >
                                        Food
                                    </Button>
                                </Grid>
                                <Grid xs={6}>
                                    <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.button6Clicked}
                                    >
                                        Drinks
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid>
                                <BillSummaryPage 
                                    subtotal={this.state.subtotal}
                                    tax={this.state.tax}
                                    discount={this.state.discount}
                                    total={this.state.total} />
                            </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid xs={6}>
                        <Button variant="contained"
                            fullWidth={true}
                            onClick={this.payButton}
                        >
                            Pay
                        </Button>
                    </Grid>
                </Grid>
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