import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment } from "@mui/material";
import AddNewProductMutation from "../mutations/AddNewProductMutation";

class AddProduct extends Component {

    state = {
        code: '',
        name: '',
        description: '',
        sku: '', 
        barcode: '',
        price: 0
    }


    render() {
        return(
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
                        onChange={(e) => this.setState({ code: e.target.value })} 
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        onChange={(e) => this.setState({ name: e.target.value })}
                        />
                </div>
                <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    onChange={(e) => this.setState({ description: e.target.value })}
                    />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="SKU" 
                        variant="outlined" 
                        onChange={(e) => this.setState({ sku: e.target.value })} 
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Barcode" 
                        variant="outlined" 
                        onChange={(e) => this.setState({ barcode: e.target.value })}
                        />
                </div>
                <div>
                <FormControl fullWidth sx={{ m: 1, width:'25ch' }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">₱</InputAdornment>}
                        label="Price"
                        onChange={(e) => this.setState({ price: e.target.value })}
                        />
                    </FormControl>
                </div>
                <div>
                    <Button variant="contained"
                        onClick={()=> this.addNewProduct()}
                    >Save</Button>
                </div>
            </Box>
        )
    }

    addNewProduct = () => {
        const {code, description, name, sku, barcode, price} = this.state
        AddNewProductMutation(code, name, description, sku, barcode, price, ()=>console.log("Add new product successful."))
    }

}

export default AddProduct;