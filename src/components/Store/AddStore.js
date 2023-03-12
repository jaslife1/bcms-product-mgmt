import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, Button, FormControl, 
    FormControlLabel, FormGroup, FormLabel, FormHelperText,
    InputLabel, Select, MenuItem } from "@mui/material";
import Switch from "@mui/material/Switch"
import AddNewStoreMutation from "../../mutations/AddNewStoreMutation";
import SimpleDialog from "../SimpleDialog";
import withAuth from "../WithAuth";

class AddStore extends Component {

    state = {
        type: '',
        name: '',
        address1: '',
        address2: '', 
        barangay: '',
        city: '',
        province: '', 
        country: '',
        zipcode: '',
        active: true,
        showDialog: false,
        showErrorDialog: false,
    };


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
                        label="Store Name" 
                        variant="outlined" 
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })} 
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Address1" 
                        variant="outlined" 
                        value={this.state.address1}
                        onChange={(e) => this.setState({ address1: e.target.value })}
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Address2" 
                        variant="outlined" 
                        value={this.state.address2}
                        onChange={(e) => this.setState({ address2: e.target.value })}
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Barangay" 
                        variant="outlined" 
                        value={this.state.barangay}
                        onChange={(e) => this.setState({ barangay: e.target.value })} 
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="City / Municipality" 
                        variant="outlined" 
                        value={this.state.city}
                        onChange={(e) => this.setState({ city: e.target.value })}
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Province" 
                        variant="outlined" 
                        value={this.state.province}
                        onChange={(e) => this.setState({ province: e.target.value })}
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Country" 
                        variant="outlined" 
                        value={this.state.country}
                        onChange={(e) => this.setState({ country: e.target.value })}
                        />
                </div>
                <div>
                    <TextField 
                        id="outlined-basic" 
                        label="Zipcode" 
                        variant="outlined" 
                        value={this.state.zipcode}
                        onChange={(e) => this.setState({ zipcode: e.target.value })}
                        />
                </div>
                <div>
                    <FormControl fullWidth>
                        <InputLabel id="type-select-label">Type of Store</InputLabel>
                        <Select
                            labelId="type-select-label"
                            id="type-simple-select"
                            value={this.state.type}
                            label="type of store"
                            onChange={(e) => this.setState({ type: e.target.value })}
                        >
                            <MenuItem value="Main">Main</MenuItem>
                            <MenuItem value="Branch">Branch</MenuItem>
                            <MenuItem value="Bazaar">Bazaar</MenuItem>
                            <MenuItem value="Trade Fair">Trade Fair</MenuItem>
                        </Select>
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
                                label="Active store?"
                            />
                        </FormGroup>
                        <FormHelperText>Active store means that there is inventory that is available in that location.</FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <Button variant="contained"
                        onClick={()=> this.addNewStore()}
                    >Save</Button>
                </div>
                <SimpleDialog
                    open={this.state.showDialog}
                    title="Add New Store"
                    content="New store successfully added"
                    onClose={()=>{
                        this.setState({showDialog: false})
                    }}
                />
                <SimpleDialog
                    open={this.state.showErrorDialog}
                    title="Add New Store"
                    content={"Failed to add new store." + this.state.showErrorContent}
                    onClose={()=>{
                        this.setState({showErrorDialog: false})
                    }}
                />
            </Box>
        )
    }


    addNewStore = () => {
        const {type, name, address1, address2, barangay, city, province, country, zipcode, active} = this.state
        AddNewStoreMutation(
            type, 
            name, 
            address1, 
            address2, 
            barangay, 
            city, 
            province, 
            country, 
            zipcode, 
            active, 
            ()=>{
                console.log("Add new store successful.");
                // Prompt the user of successful addition of product
                this.setState({showDialog: true});
                // Clean up the form
                this.setState({
                    type:'',
                    name:'',
                    address1:'',
                    address2:'',
                    barangay:'',
                    city:'',
                    province:'',
                    country:'',
                    zipcode:'',
                    active:true,
                })

            }, (err) => {
                console.log(err)
                this.setState({showErrorDialog: true, showErrorContent: err});
                
            })
    }

}

export default withAuth(AddStore);