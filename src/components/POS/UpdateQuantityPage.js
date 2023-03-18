import React, {Component} from "react";
import PropTypes from 'prop-types';
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch, Select, MenuItem } from "@mui/material";
//import addNewSaleMutation from "../../mutations/addNewSaleMutation";
import SimpleDialog from "../SimpleDialog";
import withAuth from "../WithAuth";

class UpdateQuantityPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: props.product.quantity,
        };
    }
    


    render() {
        return(
            <>
            <h1>Update Quantity</h1>
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
                        <TextField
                            fullWidth={true}
                            id="outlined-adornment-amount"
                            label="New Quantity"
                            type="number"
                            value={this.state.quantity}
                            onChange={(e) => this.setState({ quantity: e.target.value })}
                            />
                    </FormControl>
                </div>
                
                <div>
                    <Button variant="contained"
                        enabled={(this.state.quantity != '' && this.state.quantity > 0) ? 'true' : 'false'}
                        onClick={()=> this.props.updateQuantity(this.state.quantity == '' ? 0 : this.state.quantity)}
                    >Update</Button>
                </div>
            </Box>
            </>
        )
    }

}


UpdateQuantityPage.propTypes = {
    updateQuantity: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
    
  };

export default withAuth(UpdateQuantityPage);