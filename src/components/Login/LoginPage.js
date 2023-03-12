import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, Button, FormControl, 
    OutlinedInput, InputAdornment, IconButton, FormHelperText,
    InputLabel, Select, MenuItem,} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Switch from "@mui/material/Switch"
// import AddNewStoreMutation from "../../mutations/AddNewStoreMutation";
import LogInUserMutation from "../../mutations/LogInUserMutation"
import SimpleDialog from "../SimpleDialog";
import {BCMS_AUTH_TOKEN, BCMS_USER_ID} from "../../constants"

class LoginPage extends Component {

    state = {
        username: '',
        password: '',
        showPassword: false
    };

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword})
    }
    
    handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                        label="Username" 
                        variant="outlined" 
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })} 
                        />
                </div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.password}
                        onChange={(e)=> this.setState({ password: e.target.value })}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                            >
                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                
                <div>
                    <Button variant="contained"
                        onClick={()=> this.login()}
                    >Login</Button>
                </div>
            </Box>
        )
    }


    login = () => {
        const {username, password} = this.state
        LogInUserMutation(
            username,
            password,
            (id, token)=>{
                this.saveUserData(id, token)
                this.props.history.push("/")
            }, (err) => {
                // snackbar if the user is not authorized
                
            })
    }

    saveUserData = (id, token) => {
        localStorage.setItem(BCMS_USER_ID, id)
        localStorage.setItem(BCMS_AUTH_TOKEN, token)
    }

}

export default LoginPage;