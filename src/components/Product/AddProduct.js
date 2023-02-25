import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch } from "@mui/material";
import AddNewProductMutation from "../../mutations/AddNewProductMutation";
import SimpleDialog from "../SimpleDialog";

class AddProduct extends Component {

    state = {
        code: '',
        name: '',
        description: '',
        sku: '', 
        barcode: '',
        price: '',
        quantity:'',
        active: true,
        showDialog: false,
        showErrorDialog: false,
    };


    render() {
        return(
            <>
            <h1>Add New Product</h1>
            <Box 
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
            </Box>
            </>
        )
    }


    addNewProduct = () => {
        const {code, description, name, sku, barcode, quantity, price, active} = this.state
        AddNewProductMutation(code, name, description, sku, barcode, quantity, price, active, ()=>{
            console.log("Add new product successful.");
            // Prompt the user of successful addition of product
            this.setState({showDialog: true});
             // Clean up the form
            this.setState({
                code:'',
                name:'',
                description:'',
                sku:'',
                barcode:'',
                price:'',
                quantity: '',
                active: true,
            })

        }, (err) => {
            console.log(err)
            this.setState({showErrorDialog: true, showErrorContent: err});
            
        })
    }

}

export default AddProduct;