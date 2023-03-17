import React, {Component} from "react";
import {useQuery, graphql} from 'react-relay';
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
import {BCMS_AUTH_TOKEN, BCMS_USER_ID, BCMS_USER_EMPLOYEE_ID, BCMS_USER_ACCESS} from "../../constants"
import { useNavigate } from "react-router-dom";

function LoginPage (props){

    const navigate = useNavigate()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showPassword, setShowPassword] = React.useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const login = () => {
        LogInUserMutation(
            username,
            password,
            {code: "Employee", subcode: "by-id", id: "some-id"},
            (id, token, employeeId, access, defaultPassword)=>{
                console.log("defaultPassword: ", defaultPassword)
                saveUserData(id, token, employeeId, access)

                if (defaultPassword !== "") {
                    navigate("/changepassword")
                } else {
                    navigate("/")
                }
            }, (err) => {
                // snackbar if the user is not authorized
                console.log(err)
            })
    }

    const saveUserData = (id, token, employeeId, access) => {
        localStorage.setItem(BCMS_USER_ID, id)
        localStorage.setItem(BCMS_AUTH_TOKEN, token)
        localStorage.setItem(BCMS_USER_EMPLOYEE_ID, employeeId)
        localStorage.setItem(BCMS_USER_ACCESS, access)
   }

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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    />
            </div>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
            
            <div>
                <Button variant="contained"
                    onClick={()=> login()}
                >Login</Button>
            </div>
        </Box>
    )
}

export default LoginPage;