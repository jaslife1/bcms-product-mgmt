import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch, Select, MenuItem } from "@mui/material";
//import addNewSaleMutation from "../../mutations/addNewSaleMutation";
import SimpleDialog from "../../SimpleDialog";
import Grid from '@mui/material/Unstable_Grid2';

class PayWithCash extends Component {

    state = {
        cashTendered: '',
        showDialog: false,
        showErrorDialog: false,
    };


    render() {
        return(
            <>
            <h1>Pay With Cash</h1>
            <Box 
                component="form"
                // sx={{
                //     '& > :not(style)': { m: 1, width: '25ch' },
                // }}
                sx={{ flexGrow: 1 }}
                noValidate
                autoComplete="off"
            >
                
                <div>
                <FormControl fullWidth 
                    sx={{ m: 1, width:'25ch' }}
                >
                    <InputLabel htmlFor="outlined-adornment-amount">Cash Tendered</InputLabel>
                    <OutlinedInput
                        fullWidth={true}
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">₱</InputAdornment>}
                        label="Cash Tendered"
                        type="number"
                        placeholder="0"
                        value={this.state.cashTendered}
                        onChange={(e) => this.setState({ cashTendered: e.target.value })}
                        />
                    </FormControl>
                </div>
                
                <div>
                    <Button variant="contained"
                        onClick={()=> this.props.addNewSale()}
                    >Pay</Button>
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

}

export default PayWithCash;