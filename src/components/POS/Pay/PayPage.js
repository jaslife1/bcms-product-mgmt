import React, {Component} from "react";
// import Box from "@mui/material/Box"
// import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
// FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch, Select, MenuItem } from "@mui/material";
// import addNewSaleMutation from "../../mutations/addNewSaleMutation";
// import SimpleDialog from "../SimpleDialog";
// import Grid from '@mui/material/Unstable_Grid2';
import PayWithCash from "./PayWithCash";

class PayPage extends Component {

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
                <PayWithCash addNewSale={this.addNewSale} />
            </>
        )
    }


    addNewSale = () => {
        console.log("addNewSale")
        // const {code, description, name, sku, barcode, weight, quantity, price, active} = this.state
        // addNewSaleMutation(code, name, description, sku, barcode, weight, quantity, price, active, ()=>{
        //     console.log("Add new product successful.");
        //     // Prompt the user of successful addition of product
        //     this.setState({showDialog: true});
        //      // Clean up the form
        //     this.setState({
        //         code:'Classic',
        //         name:'',
        //         description:'',
        //         sku:'',
        //         barcode:'',
        //         price:'',
        //         weight:'',
        //         quantity: '',
        //         active: true,
        //     })

        // }, (err) => {
        //     console.log(err)
        //     this.setState({showErrorDialog: true, showErrorContent: err});
            
        // })
    }

}

export default PayPage;