import React, {Component} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import { BCMS_USER_ID, BCMS_AUTH_TOKEN } from "../constants";

export default function NavigationBar() {
    const [prodEl, setProdEl] = React.useState(null);
    const [storeEl, setStoreEl] = React.useState(null);
    const [employeeEl, setEmployeeEl] = React.useState(null);

    const openProduct = Boolean(prodEl);
    const openStore = Boolean(storeEl);
    const openEmployee = Boolean(employeeEl);

    const navigate = useNavigate();

    const handleHomeClick = (event) => {
        navigate("/")
    };
    const handleProductClick = (event) => {
        setProdEl(event.currentTarget);
    };

    const handleStoreClick = (event) => {
        setStoreEl(event.currentTarget);
    }

    const handleEmployeeClick = (event)=> {
        setEmployeeEl(event.currentTarget);
    }

    const handleClose = () => {
        setProdEl(null);
        setStoreEl(null);
        setEmployeeEl(null);
    };

    const addNewProduct = () => {
        handleClose()
        navigate("/addproduct")
    }

    const listProducts = () => {
        handleClose()
        navigate("/products")
    }

    const newProduction = () => {
        handleClose()
        navigate("/addproduction")
    }

    const pointofsales = () => {
        handleClose()
        navigate("/pointofsales")
    }

    const reports = () => {
        handleClose()
        navigate("/reports")
    }

    const listEmployees = () => {
        handleClose()
        navigate("/listemployees")
    }

    const addNewEmployee = () => {
        handleClose()
        navigate("/addemployee")
    }

    const addEmployeeDepdendent = () => {
        handleClose()
        navigate("/adddependent")
    }

    const addEmployeeEmergencyContact = () => {
        handleClose()
        navigate("/addemergencycontact")
    }

    const listStores = () => {
        handleClose()
        navigate("/stores")
    }

    const addNewStore = () => {
        handleClose()
        navigate("/addstore")
    }

    const addNewUser = () => {
        handleClose()
        navigate("/adduser")
    }

    const loginUser = () => {
        handleClose()
        navigate("/login")
    }

    const logoutUser = () => {
        handleClose()
        localStorage.removeItem(BCMS_USER_ID)
        localStorage.removeItem(BCMS_AUTH_TOKEN)
        navigate("/logout")
    }

    const userId = localStorage.getItem(BCMS_USER_ID)
    const isAuthenticated = localStorage.getItem(BCMS_USER_ID) != null

    return (
        <div>
            <Button
                id="basic-button"
                onClick={handleHomeClick}
            >
                Home
            </Button>
            {isAuthenticated && 
            
                <Button
                    id="basic-button"
                    aria-controls={openProduct ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openProduct ? 'true' : undefined}
                    onClick={handleProductClick}
                >
                    Product
                </Button>
            }
            <Menu
                id="basic-menu"
                anchorEl={prodEl}
                open={openProduct}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={listProducts}>Product List</MenuItem>
                <MenuItem onClick={addNewProduct}>Add New Product</MenuItem>
                <MenuItem onClick={newProduction}>New Production</MenuItem>
            </Menu>
            
            {isAuthenticated &&
                <Button
                id="basic-button"
                onClick={pointofsales}
                >
                    Point-of-Sales
                </Button>
            }
            {isAuthenticated &&
                <Button
                    id="basic-button"
                    onClick={handleStoreClick}
                >
                    Stores
                </Button>
            }
            
            <Menu
                id="basic-menu"
                anchorEl={storeEl}
                open={openStore}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={listStores}>Store List</MenuItem>
                <MenuItem onClick={addNewStore}>Add New Store</MenuItem>
            </Menu>
            {isAuthenticated &&
                <Button
                    id="basic-button"
                    onClick={reports}
                >
                    Reports
                </Button>
            }
            {isAuthenticated &&
                <Button
                    id="basic-button"
                    onClick={handleEmployeeClick}
                >
                    Employee
                </Button>
            }
            <Menu
                id="basic-menu"
                anchorEl={employeeEl}
                open={openEmployee}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={listEmployees}>Employee List</MenuItem>
                <MenuItem onClick={addNewEmployee}>Add New Employee</MenuItem>
                <MenuItem onClick={addEmployeeDepdendent}>Add Employee Dependent</MenuItem>
                <MenuItem onClick={addEmployeeEmergencyContact}>Add Employee Emergency Contact</MenuItem>
                <MenuItem onClick={addNewUser}>Add New User</MenuItem>
            </Menu>
            {isAuthenticated ?
                <Button
                    id="basic-button"
                    onClick={logoutUser}
                >
                    Logout
                </Button>
                :
                <Button
                    id="basic-button"
                    onClick={loginUser}
                >
                    Login
                </Button>
            }
            
            

        </div>
    );
}