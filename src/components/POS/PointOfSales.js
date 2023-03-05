import React, {Component} from "react";
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
import ProductClassicPage from "./ProductClassicPage";
import ProductGuiltFreePage from "./ProductGuiltFreePage";

class PointOfSales extends Component {

    constructor(props) {
        super(props)
        this.addProductToCart = this.addProductToCart.bind(this)
    }

    state = {
        products: [],
        showClassicDialog: false,
        showGuiltFreeDialog: false,
        showDialog: false,
        showErrorDialog: false,
    };


    TAX_RATE = 0.07;

    ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    priceRow(qty, unit) {
        return qty * unit;
    }

    // createRow(desc, qty, unit) {
    //     const price = this.priceRow(qty, unit);
    //     return { desc, qty, unit, price };
    // }

    subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    rows = [
    // this.createRow('Paperclips (Box)', 100, 1.15),
    // this.createRow('Paper (Case)', 10, 45.99),
    // this.createRow('Waste Basket', 2, 17.99),
    ];

    invoiceSubtotal = this.subtotal(this.state.products);
    invoiceTaxes = this.TAX_RATE * this.invoiceSubtotal;
    invoiceTotal = this.invoiceTaxes + this.invoiceSubtotal;

    
    addProductToCart = (product, inventory) => {
        console.log("AddProductToCart: ", product, inventory)

        // TODO: Add a check that the purchase has still enough inventory quantity
        // TODO: Add a check if the item already exists in the list, just update the quantity
        var qty =  1

        this.setState({products:[...this.state.products, {item: product, quantity: qty, rowPrice: this.priceRow(qty, product.price)}],
                        showClassicDialog: false,
                        showGuiltFreeDialog: false,
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

    button4Clicked = (e) => {
        console.log("button 4 clicked")
    }

    classicButtonClicked = (e) => {
        console.log("Classic Button clicked")
        this.setState({showClassicDialog: true})
    }

    guiltfreeButtonClicked = (e) => {
        console.log("Guilt-Free Button clicked")
        this.setState({showGuiltFreeDialog: true})
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
            <h1>Point of Sales</h1>
            <Box 
                sx={{ flexGrow: 1 }}
                component="form"
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={6}>
                    <Grid xs={2}>
                        <Button variant="contained"
                            fullWidth={true}
                            onClick={this.button1Clicked}
                        >
                            Scan Item
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
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={3}>
                                    Details
                                    </TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Desc</TableCell>
                                    <TableCell align="right">Qty.</TableCell>
                                    <TableCell align="right">Unit</TableCell>
                                    <TableCell align="right">Sum</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {/* {this.rows.map((row) => (
                                    <TableRow key={row.desc}>
                                    <TableCell>{row.desc}</TableCell>
                                    <TableCell align="right">{row.qty}</TableCell>
                                    <TableCell align="right">{row.unit}</TableCell>
                                    <TableCell align="right">{this.ccyFormat(row.price)}</TableCell>
                                    </TableRow>
                                ))} */}

                                {this.state.products.map((product) => (
                                    <TableRow key={product.item.id}>
                                    <TableCell>{product.item.name}</TableCell>
                                    <TableCell align="right">{product.quantity}</TableCell>
                                    <TableCell align="right">{product.item.price}</TableCell>
                                    <TableCell align="right">{this.ccyFormat(product.rowPrice)}</TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="right">{this.ccyFormat(this.invoiceSubtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Discount</TableCell>
                                    <TableCell align="right">{`${(this.TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell align="right">{this.ccyFormat(this.invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Total</TableCell>
                                    <TableCell align="right">{this.ccyFormat(this.invoiceTotal)}</TableCell>
                                </TableRow>
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
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid xs={6}>
                        <Button variant="contained"
                            fullWidth={true}
                            onClick={this.button6Clicked}
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
                    <ProductGuiltFreePage />
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

export default PointOfSales;