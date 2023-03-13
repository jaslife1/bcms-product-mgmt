import React, {Component} from "react";
import Box from "@mui/material/Box"
import { TextField, Button, FormControl, 
    OutlinedInput, InputAdornment, IconButton, FormHelperText,
    InputLabel, Select, MenuItem,} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ChangePasswordMutation from "../../mutations/ChangePasswordMutation";
import { BCMS_USER_ID } from "../../constants"
import { useNavigate } from "react-router-dom";
import withAuth from "../WithAuth";

function ChangePasswordPage (props){

    const navigate = useNavigate()
    const [newPassword, setNewPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [showNewPassword, setShowNewPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)
    const [helperText, setHelperText] = React.useState('')

    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword)
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    const updatePassword = () => {

        // compare both password
        if (newPassword !== confirmPassword) {
            setHelperText("Password does not match")
        } else {
            setHelperText('')
            ChangePasswordMutation(
                localStorage.getItem(BCMS_USER_ID),
                newPassword,
                (response, err)=>{
                    //saveUserData(id, token, employeeId, access)
                    navigate("/")
                }, (err) => {
                    // snackbar if the user is not authorized
                    console.log(err)
                })
        }
    }


    return(
        <div>
        <h1>Change Default Password</h1>
        <Box 
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-new-password">New Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e)=> setNewPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="New Password"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Confirm Password"
                />
                <FormHelperText id="outlined-confirm-password-helper-text">{helperText}</FormHelperText>
            </FormControl>
            
            <div>
                <Button variant="contained"
                    onClick={()=> updatePassword()}
                >Update Password</Button>
            </div>
        </Box>
        </div>
    )
}

export default withAuth(ChangePasswordPage);