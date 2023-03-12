import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch, Select, MenuItem } from "@mui/material";
import AddNewProductMutation from "../../mutations/AddNewProductMutation";
import SimpleDialog from "../SimpleDialog";
import Grid from '@mui/material/Unstable_Grid2';
import withAuth from "../WithAuth";

class AddProduct extends Component {

    state = {
        code: 'Classic', //default
        name: '',
        description: '',
        sku: '', 
        barcode: '',
        price: '',
        quantity:'',
        weight: '',
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
                // sx={{
                //     '& > :not(style)': { m: 1, width: '25ch' },
                // }}
                sx={{ flexGrow: 1 }}
                noValidate
                autoComplete="off"
            >
                <Grid container spacing={1}>
                    <Grid xs={2}>
                        <FormControl fullWidth>
                            <InputLabel id="code-select-label">Product Code</InputLabel>
                            <Select
                                labelId="code-select-label"
                                id="code-simple-select"
                                value={this.state.code}
                                label="Product Code"
                                onChange={(e) => this.setState({ code: e.target.value })}
                            >
                                <MenuItem value="Classic">Classic</MenuItem>
                                <MenuItem value="Creations">Creations</MenuItem>
                                <MenuItem value="Drinks">Drinks</MenuItem>
                                <MenuItem value="Food">Food</MenuItem>
                                <MenuItem value="Guilt-Free">Guilt-Free</MenuItem>
                                <MenuItem value="Premium">Premium</MenuItem>
                                <MenuItem value="Specialty">Specialty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid xs={3}>
                        <TextField 
                            fullWidth={true}
                            id="outlined-basic" 
                            label="Product Name" 
                            variant="outlined" 
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                            />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid xs={3}>
                        <TextField
                            fullWidth={true}
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={5}
                            value={this.state.description}
                            onChange={(e) => this.setState({ description: e.target.value })}
                            />
                    </Grid>
               </Grid>
               <Grid container spacing={2}>
                   <Grid xs={2}>
                        <TextField 
                            fullWidth={true}
                            id="outlined-basic" 
                            label="SKU" 
                            variant="outlined" 
                            value={this.state.sku}
                            onChange={(e) => this.setState({ sku: e.target.value })} 
                            />
                   </Grid>
                   <Grid xs={2}>
                    <TextField 
                            fullWidth={true}
                            id="outlined-basic" 
                            label="Barcode" 
                            variant="outlined" 
                            value={this.state.barcode}
                            onChange={(e) => this.setState({ barcode: e.target.value })}
                            />
                   </Grid>
               </Grid>
               <Grid container spacing={2}>
                    <Grid xs={2}>
                        <TextField 
                            fullWidth={true}
                            id="outlined-basic" 
                            label="Net weight" 
                            variant="outlined" 
                            type="number"
                            value={this.state.weight}
                            onChange={(e) => this.setState({ weight: e.target.value })}
                            />
                    </Grid>
                    <Grid xs={2}>
                        <TextField 
                            fullWidth={true}
                            id="outlined-basic" 
                            label="Initial Quantity" 
                            variant="outlined" 
                            type="number"
                            value={this.state.quantity}
                            onChange={(e) => this.setState({ quantity: e.target.value })}
                            />
                     </Grid>
                </Grid>
                <div>
                <FormControl fullWidth 
                    sx={{ m: 1, width:'25ch' }}
                >
                    <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                    <OutlinedInput
                        fullWidth={true}
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">₱</InputAdornment>}
                        label="Price"
                        type="number"
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
        const {code, description, name, sku, barcode, weight, quantity, price, active} = this.state
        AddNewProductMutation(code, name, description, sku, barcode, weight, quantity, price, active, ()=>{
            console.log("Add new product successful.");
            // Prompt the user of successful addition of product
            this.setState({showDialog: true});
             // Clean up the form
            this.setState({
                code:'Classic',
                name:'',
                description:'',
                sku:'',
                barcode:'',
                price:'',
                weight:'',
                quantity: '',
                active: true,
            })

        }, (err) => {
            console.log(err)
            this.setState({showErrorDialog: true, showErrorContent: err});
            
        })
    }

}

export default withAuth(AddProduct);