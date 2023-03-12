import React, {Component} from "react";
import PropTypes from 'prop-types';
// import Box from "@mui/material/Box"
// import { TextField, FormControl, InputLabel, OutlinedInput, Button, InputAdornment,
// FormLabel, FormGroup, FormControlLabel, FormHelperText, Switch, Select, MenuItem } from "@mui/material";
// import addNewSaleMutation from "../../mutations/addNewSaleMutation";
// import SimpleDialog from "../SimpleDialog";
// import Grid from '@mui/material/Unstable_Grid2';
import PayWithCash from "./PayWithCash";
import withAuth from "../../WithAuth";

class PayPage extends Component {

    render() {
        return <PayWithCash addNewSale={this.props.addNewSale} />
    }

}

PayPage.propTypes = {
    addNewSale: PropTypes.func.isRequired,
  };

export default withAuth(PayPage);