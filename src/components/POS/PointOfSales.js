import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch } from "@mui/material";
import AddNewProductMutation from "../../mutations/AddNewProductMutation";
import SimpleDialog from "../SimpleDialog";

import Grid from '@mui/material/Unstable_Grid2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class PointOfSales extends Component {

    state = {
        
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

    createRow(desc, qty, unit) {
    const price = this.priceRow(qty, unit);
    return { desc, qty, unit, price };
    }

     subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    rows = [
    this.createRow('Paperclips (Box)', 100, 1.15),
    this.createRow('Paper (Case)', 10, 45.99),
    this.createRow('Waste Basket', 2, 17.99),
    ];

    invoiceSubtotal = this.subtotal(this.rows);
    invoiceTaxes = this.TAX_RATE * this.invoiceSubtotal;
    invoiceTotal = this.invoiceTaxes + this.invoiceSubtotal;


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
                                {this.rows.map((row) => (
                                    <TableRow key={row.desc}>
                                    <TableCell>{row.desc}</TableCell>
                                    <TableCell align="right">{row.qty}</TableCell>
                                    <TableCell align="right">{row.unit}</TableCell>
                                    <TableCell align="right">{this.ccyFormat(row.price)}</TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="right">{this.ccyFormat(this.invoiceSubtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Tax</TableCell>
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
                            
                    </Grid>
                </Grid>
                
            </Box>
            {/* <Box 
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Code" 
                        variant="outlined" 
                        value={this.state.code}
                        onChange={(e) => this.setState({ code: e.target.value })} 
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Product Name" 
                        variant="outlined" 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                        />
                </div>
                <div>
                <TextField
                    fullWidth={true}
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    value={this.state.description}
                    onChange={(e) => this.setState({ description: e.target.value })}
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="SKU" 
                        variant="outlined" 
                        value={this.state.sku}
                        onChange={(e) => this.setState({ sku: e.target.value })} 
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Barcode" 
                        variant="outlined" 
                        value={this.state.barcode}
                        onChange={(e) => this.setState({ barcode: e.target.value })}
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Quantity" 
                        variant="outlined" 
                        value={this.state.quantity}
                        onChange={(e) => this.setState({ quantity: e.target.value })}
                        />
                </div>
                <div>
                <FormControl fullWidth sx={{ m: 1, width:'25ch' }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">₱</InputAdornment>}
                        label="Price"
                        value={this.state.price}
                        onChange={(e) => this.setState({ price: e.target.value })}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend">Active</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch 
                                        checked={this.state.active} 
                                        onChange={(e) => this.setState({ active: e.target.checked })}
                                        name="active" />
                                }
                                label="Active product?"
                            />
                        </FormGroup>
                        <FormHelperText>Active product means that this product is actively produced and sold</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <Button variant="contained"
                        onClick={()=> this.addNewProduct()}
                    >Save</Button>
                </div>
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
            </Box> */}
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