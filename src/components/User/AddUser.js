import React, {Component} from "react";
import Box from "@mui/material/Box"
import { Button, FormControl, 
    InputLabel, Select, MenuItem } from "@mui/material";
import SimpleDialog from "../SimpleDialog";
import AddUserEmployeeListPage from "./AddUserEmployeeListPage";
import AddNewUserMutation from "../../mutations/AddNewUserMutation"

class AddUser extends Component {

    state = {
        employeeId: '',
        access: '',
        showDialog: false,
        showErrorDialog: false,
    };

    setEmployeeId=(val) => {
        console.log(val)
        this.setState({employeeId: val})
    }


    render() {
        return(
             <>
            <h1>Add User Access to Employee</h1>
            <Box 
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <AddUserEmployeeListPage employeeId={this.state.employeeId} onEmployeeChange={this.setEmployeeId} />
                </div>
                
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
        AddNewUserMutation(
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