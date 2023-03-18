import React, {Component} from "react";
import PropTypes from 'prop-types';
import Box from "@mui/material/Box"
import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch, Select, MenuItem } from "@mui/material";
//import addNewSaleMutation from "../../mutations/addNewSaleMutation";
import SimpleDialog from "../../SimpleDialog";
import Grid from '@mui/material/Unstable_Grid2';
import withAuth from "../../WithAuth";

class ChangePage extends Component {
    ccyFormat(num) {
        //return `${num.toFixed(2)}`;
        return num.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
    }

    render() {
        return(
            <>
            <h1>Change</h1>
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
                    ₱ {this.ccyFormat(this.props.change)}
                </div>
            </Box>
            </>
        )
    }

}


ChangePage.propTypes = {
    change: PropTypes.number.isRequired,
    
  };

export default withAuth(ChangePage);