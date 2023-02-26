import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch } from "@mui/material";
import AddNewProductionMutation from "../../mutations/AddNewProductionMutation";
import SimpleDialog from "../SimpleDialog";
import AddProductionProductList from "./AddProductionProductList";

class AddProduction extends Component {

    state = {
        productId: '',
        batchCode: '',
        quantity:'',
        showDialog: false,
        showErrorDialog: false,
    };

    setProductId = (val) => {
        this.setState({productId: val})
    }

    render() {
        return(
            <>
            <h1>Add New Production</h1>
            <Box 
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <AddProductionProductList productId={this.state.productId} onProductChange={this.setProductId} />
                </div>

                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Batch Code" 
                        variant="outlined" 
                        value={this.state.batchCode}
                        onChange={(e) => this.setState({ batchCode: e.target.value })} 
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
                    <Button variant="contained"
                        onClick={()=> this.addNewProduction()}
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


    addNewProduction = () => {
        const {
            productId, 
            batchCode, 
            quantity,} = this.state
        AddNewProductionMutation(productId, batchCode, quantity, 
            ()=>{
            console.log("Add new production successful.");
            // Prompt the user of successful addition of product
            this.setState({showDialog: true});
             // Clean up the form
            this.setState({
                productId:'',
                batchCode:'',
                quantity: '',
            })

        }, (err) => {
            console.log(err)
            this.setState({showErrorDialog: true, showErrorContent: err});
            
        })
    }

}

export default AddProduction;