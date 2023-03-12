import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, Button, FormControl, 
    FormControlLabel, FormGroup, FormLabel, FormHelperText,
    InputLabel, Select, MenuItem } from "@mui/material";
import Switch from "@mui/material/Switch"
import SimpleDialog from "../SimpleDialog";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import AddNewEmployeeMutation from "../../mutations/AddNewEmployeeMutation";
import withAuth from "../WithAuth";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

class AddNewEmployee extends Component {

    state = {
        firstName: '',
        lastName: '',
        middleName: '',
        extensionName: '',
        birthMonth: '',
        birthYear: '',
        birthDate: '',
        birthPlace:'',
        address1: '',
        address2: '',
        barangay: '',
        city: '',
        province: '',
        country: '',
        zipcode: '',
        telephoneNumber: '',
        mobileNumber: '',
        emailAddress: '',
        sssNumber: '',
        philHealthNumber: '',
        hdmfNumber: '',
        tinNumber: '',
        position: '',
        salary: '',
        storeId: '',
        active: true,
        type: '',
        dateHired: '',
        showDialog: false,
        showErrorDialog: false,
    };


    render() {
        return(
            <>
            <h1>Add New Employee</h1>
            <Box 
                sx={{ flexGrow: 1 }}
                component="form"
                noValidate
                autoComplete="off"
            >
                <h3>Personal Information</h3>
                <Grid container spacing={4}>
                    <Grid xs={3}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="First Name" 
                                variant="outlined" 
                                value={this.state.firstName}
                                onChange={(e) => this.setState({ firstName: e.target.value })} 
                                />
                    </Grid>
                    <Grid xs={3}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Middle Name" 
                                variant="outlined" 
                                value={this.state.middleName}
                                onChange={(e) => this.setState({ middleName: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Last Name" 
                                variant="outlined" 
                                value={this.state.lastName}
                                onChange={(e) => this.setState({ lastName: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={1}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Extension" 
                                variant="outlined" 
                                value={this.state.extensionName}
                                onChange={(e) => this.setState({ extensionName: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <h3>Birth Date and Place</h3>
                <Grid container spacing={4}>
                    <Grid>
                            <TextField 
                                id="outlined-basic" 
                                label="Birth Month" 
                                variant="outlined" 
                                value={this.state.birthMonth}
                                onChange={(e) => this.setState({ birthMonth: e.target.value })} 
                                />
                    </Grid>
                    <Grid>
                            <TextField 
                                id="outlined-basic" 
                                label="Birth Day" 
                                variant="outlined" 
                                value={this.state.birthDate}
                                onChange={(e) => this.setState({ birthDate: e.target.value })} 
                            />
                    </Grid>
                    <Grid>
                            <TextField 
                                id="outlined-basic" 
                                label="Birth Year" 
                                variant="outlined" 
                                value={this.state.birthYear}
                                onChange={(e) => this.setState({ birthYear: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={4}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Birth Place" 
                                variant="outlined"
                                placeholder="City" 
                                value={this.state.birthPlace}
                                onChange={(e) => this.setState({ birthPlace: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <h3>Address</h3>
                <Grid container spacing={2}>
                    <Grid xs={6} md={6}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Address 1" 
                                placeholder="House number and street name"
                                variant="outlined" 
                                value={this.state.address1}
                                onChange={(e) => this.setState({ address1: e.target.value })} 
                                />
                    </Grid>
                    <Grid xs={6} md={6}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Address 2" 
                                placeholder="Room number / Building Name"
                                variant="outlined" 
                                value={this.state.address2}
                                onChange={(e) => this.setState({ address2: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid xs={4}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Barangay" 
                                variant="outlined" 
                                value={this.state.barangay}
                                onChange={(e) => this.setState({ barangay: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={4}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="City / Municipality" 
                                variant="outlined" 
                                value={this.state.city}
                                onChange={(e) => this.setState({ city: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={4}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Province" 
                                variant="outlined" 
                                value={this.state.province}
                                onChange={(e) => this.setState({ province: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid xs={3}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Country" 
                                variant="outlined" 
                                value={this.state.country}
                                onChange={(e) => this.setState({ country: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={2}>
                            <TextField 
                                id="outlined-basic" 
                                label="Zip Code" 
                                variant="outlined" 
                                value={this.state.zipcode}
                                onChange={(e) => this.setState({ zipcode: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <h3>Contact Information</h3>
                <Grid container spacing={4}>
                    <Grid xs={3}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Telephone Number" 
                                variant="outlined" 
                                value={this.state.telephoneNumber}
                                onChange={(e) => this.setState({ telephoneNumber: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Mobile Number" 
                                variant="outlined" 
                                value={this.state.mobileNumber}
                                onChange={(e) => this.setState({ mobileNumber: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Email Address" 
                                variant="outlined" 
                                value={this.state.emailAddress}
                                onChange={(e) => this.setState({ emailAddress: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <h3>Statutory Information</h3>
                <Grid container spacing={4}>
                    <Grid xs={3}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="SSS Number" 
                                variant="outlined" 
                                value={this.state.sssNumber}
                                onChange={(e) => this.setState({ sssNumber: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="PhilHealth Number" 
                                variant="outlined" 
                                value={this.state.philHealthNumber}
                                onChange={(e) => this.setState({ philHealthNumber: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="HDMF (PAGIBIG) Number" 
                                variant="outlined" 
                                value={this.state.hdmfNumber}
                                onChange={(e) => this.setState({ hdmfNumber: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Tax Identification Number" 
                                variant="outlined" 
                                value={this.state.tinNumber}
                                onChange={(e) => this.setState({ tinNumber: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <h3>Employment Information</h3>
                <Grid container spacing={4}>
                    <Grid xs={3}>
                            <TextField 
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Job Position" 
                                variant="outlined" 
                                value={this.state.position}
                                onChange={(e) => this.setState({ position: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Salary" 
                                variant="outlined" 
                                value={this.state.salary}
                                onChange={(e) => this.setState({ salary: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Employment Type" 
                                variant="outlined" 
                                value={this.state.type}
                                onChange={(e) => this.setState({ type: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Store Location" 
                                variant="outlined" 
                                value={this.state.storeId}
                                onChange={(e) => this.setState({ storeId: e.target.value })} 
                            />
                    </Grid>
                    <Grid xs={3}>
                            <TextField
                                fullWidth={true}
                                id="outlined-basic" 
                                label="Hiring Date Placeholder" 
                                variant="outlined" 
                                //value={this.state.storeId}
                                //onChange={(e) => this.setState({ storeId: e.target.value })} 
                            />
                    </Grid>
                </Grid>
                <Grid xs={6}>
                    <Grid>
                        <Button variant="contained"
                            onClick={()=> {
                                this.addNewEmployee()
                            }}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
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
            </>
        )
    }


    addNewEmployee = () => {
        const {firstName,
            lastName,
            middleName,
            extensionName,
            birthMonth,
            birthDate,
            birthYear,
            birthPlace,
            address1,
            address2,
            barangay,
            city,
            province,
            country,
            zipcode,
            telephoneNumber,
            mobileNumber,
            emailAddress,
            sssNumber,
            philHealthNumber,
            hdmfNumber,
            tinNumber,
            position,
            salary,
            storeId,
            type,
            //dateHired,
            active,} = this.state
        const dateHired = new Date().toISOString();
        AddNewEmployeeMutation(
            firstName,
            lastName,
            middleName,
            extensionName,
            birthMonth,
            birthDate,
            birthYear,
            birthPlace,
            address1,
            address2,
            barangay,
            city,
            province,
            country,
            zipcode,
            telephoneNumber,
            mobileNumber,
            emailAddress,
            sssNumber,
            philHealthNumber,
            hdmfNumber,
            tinNumber,
            position,
            salary,
            storeId,
            type,
            active,
            dateHired,
            ()=>{
                console.log("Add new employee successful.");
                // Prompt the user of successful addition of product
                this.setState({showDialog: true});
                // Clean up the form
                this.setState({
                    firstName: '',
                    lastName: '',
                    middleName: '',
                    extensionName: '',
                    birthMonth: '',
                    birthYear: '',
                    birthDate: '',
                    birthPlace: '',
                    address1: '',
                    address2: '',
                    barangay: '',
                    city: '',
                    province: '',
                    country: '',
                    zipcode: '',
                    telephoneNumber: '',
                    mobileNumber: '',
                    emailAddress: '',
                    sssNumber: '',
                    philHealthNumber: '',
                    hdmfNumber: '',
                    tinNumber: '',
                    position: '',
                    salary: '',
                    storeId: '',
                    type: '',
                    dateHired: '',
                    active: true,
                })

            }, (err) => {
                console.log(err)
                this.setState({showErrorDialog: true, showErrorContent: err});
                
            })
    }

}

export default withAuth(AddNewEmployee);