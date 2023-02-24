import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, Button, FormControl, 
    FormControlLabel, FormGroup, FormLabel, FormHelperText,
    InputLabel, Select, MenuItem } from "@mui/material";
import Switch from "@mui/material/Switch"
import AddNewStoreMutation from "../../mutations/AddNewStoreMutation";
import SimpleDialog from "../SimpleDialog";

class AddUser extends Component {

    state = {
        employeeId: '',
        access: '',
        showDialog: false,
        showErrorDialog: false,
    };


    render() {
        return(
            <>
            <h1>Add New User</h1>
            <Box 
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                
                <div>
                    <FormControl fullWidth>
                        <InputLabel id="access-select-label">Access Level</InputLabel>
                        <Select
                            labelId="access-select-label"
                            id="access-simple-select"
                            value={this.state.access}
                            label="Access Level"
                            onChange={(e) => this.setState({ access: e.target.value })}
                        >
                            <MenuItem value="Staff">Staff</MenuItem>
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="Super Admin">Super Admin</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                
                <div>
                    <Button variant="contained"
                        onClick={()=> this.addNewUser()}
                    >Save</Button>
                </div>
                <SimpleDialog
                    open={this.state.showDialog}
                    title="Add New User"
                    content="New user successfully created"
                    onClose={()=>{
                        this.setState({showDialog: false})
                    }}
                />
                <SimpleDialog
                    open={this.state.showErrorDialog}
                    title="Add New User"
                    content={"Failed to add new user." + this.state.showErrorContent}
                    onClose={()=>{
                        this.setState({showErrorDialog: false})
                    }}
                />
            </Box>
            </>
        )
    }


    addNewUser = () => {
        const {employeeId, access} = this.state
        AddNewStoreMutation(
            employeeId,
            access, 
            ()=>{
                console.log("Add new user successful.");
                // Prompt the user of successful addition of product
                this.setState({showDialog: true});
                // Clean up the form
                this.setState({
                    employeeId: '',
                    access: '',
                })

            }, (err) => {
                console.log(err)
                this.setState({showErrorDialog: true, showErrorContent: err});
                
            })
    }

}

export default AddUser;