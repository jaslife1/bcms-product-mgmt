import React, {Component} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import { BCMS_USER_ID, BCMS_AUTH_TOKEN, BCMS_USER_EMPLOYEE_ID, BCMS_USER_ACCESS, BCMS_USER_EMPLOYEE_NAME } from "../constants";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';



export default function NavigationBar() {
    const [anchorProdEl, setAnchorProdEl] = React.useState(null);
    const [anchorStoreEl, setAnchorStoreEl] = React.useState(null);
    const [anchorEmployeeEl, setAnchorEmployeeEl] = React.useState(null);
    const [anchorUserEl, setAnchorUserEl] = React.useState(null);

    const openProduct = Boolean(anchorProdEl);
    const openStore = Boolean(anchorStoreEl);
    const openEmployee = Boolean(anchorEmployeeEl);
    const openUser = Boolean(anchorUserEl);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorUserEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorUserEl(null);
  };



    const navigate = useNavigate();

    const handleHomeClick = (event) => {
        navigate("/")
    };
    const handleProductClick = (event) => {
        setAnchorProdEl(event.currentTarget);
    };

    const handleStoreClick = (event) => {
        setAnchorStoreEl(event.currentTarget);
    }

    const handleEmployeeClick = (event)=> {
        setAnchorEmployeeEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorProdEl(null);
        setAnchorStoreEl(null);
        setAnchorEmployeeEl(null);
        setAnchorUserEl(null);
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

    const handlePointOfSalesClick = () => {
        handleClose()
        navigate("/pointofsales")
    }

    const handleReportsClick = () => {
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
        localStorage.removeItem(BCMS_USER_EMPLOYEE_ID)
        localStorage.removeItem(BCMS_USER_ACCESS)
        localStorage.removeItem(BCMS_USER_EMPLOYEE_NAME)
        navigate("/logout")
    }

    const isAuthenticated = localStorage.getItem(BCMS_USER_ID) != null
    const isUserAdmin = localStorage.getItem(BCMS_USER_ACCESS) != null && (localStorage.getItem(BCMS_USER_ACCESS) == "Admin" || localStorage.getItem(BCMS_USER_ACCESS) == "Super Admin")
    const employeeName = localStorage.getItem(BCMS_USER_EMPLOYEE_NAME)

    const adminMenu = [ {name: 'Home', action: handleHomeClick},
                    {name: 'Point Of Sales', action: handlePointOfSalesClick},
                    {name: 'Product', action: handleProductClick},
                    {name: 'Stores & Bazaars', action: handleStoreClick},
                    {name: 'Supplies', action: handleHomeClick},
                    {name: 'Employee', action: handleEmployeeClick},
                    {name: 'Reports', action: handleReportsClick}];
    const commonMenu = [ {name: 'Home', action: handleHomeClick},
                    {name: 'Point Of Sales', action: handlePointOfSalesClick}]
    const userSettings = [{name: 'Logout', action: logoutUser}];
    const productSubmenu = [{name: 'Product List', action: listProducts},
                        {name: 'Add New Product', action: addNewProduct},
                        {name: 'Add New Production', action: newProduction}]
    const storeSubMenu = [{name: 'Store List', action: listStores},
                        {name: 'Add New Store', action: addNewStore}]
    const employeeSubMenu = [{name: 'Employee List', action: listEmployees},
                        {name: 'Add New Employee', action: addNewEmployee},
                        {name: 'Add Employee Dependent', action: addEmployeeDepdendent},
                        {name: 'Add Employee Emergency Contact', action: addEmployeeEmergencyContact},
                        {name: 'Add New User', action: addNewUser}]


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        { (isAuthenticated && isUserAdmin) ? 
                            adminMenu.map((page) => (
                                <div key={page.name}>
                                    <Button
                                        key={page.name}
                                        //onClick={handleCloseNavMenu}
                                        onClick={page.action}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page.name}
                                    </Button>
                                    <Menu
                                        sx={{ mt: '35px' }}
                                        id="menu-productbar"
                                        anchorEl={anchorProdEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={openProduct}
                                        onClose={handleClose}
                                    >
                                        {productSubmenu.map((subMenu) => (
                                            <MenuItem
                                                key={subMenu.name} 
                                                onClick={subMenu.action}>
                                                    <Typography textAlign="center">
                                                        {subMenu.name}
                                                    </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                    <Menu
                                        sx={{ mt: '35px' }}
                                        id="menu-storebar"
                                        anchorEl={anchorStoreEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={openStore}
                                        onClose={handleClose}
                                    >
                                        {storeSubMenu.map((subMenu) => (
                                            <MenuItem
                                                key={subMenu.name} 
                                                onClick={subMenu.action}>
                                                    <Typography textAlign="center">
                                                        {subMenu.name}
                                                    </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                    <Menu
                                        sx={{ mt: '35px' }}
                                        id="menu-employeebar"
                                        anchorEl={anchorEmployeeEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={openEmployee}
                                        onClose={handleClose}
                                    >
                                        {employeeSubMenu.map((subMenu) => (
                                            <MenuItem
                                                key={subMenu.name} 
                                                onClick={subMenu.action}>
                                                    <Typography textAlign="center">
                                                        {subMenu.name}
                                                    </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </div>
                            ))
                        :
                            commonMenu.map((page) => (
                                <Button
                                    key={page.name}
                                    //onClick={handleCloseNavMenu}
                                    onClick={page.action}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))
                        } 
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {isAuthenticated ? 
                        <>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={employeeName} src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-userbar"
                                anchorEl={anchorUserEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={openUser}
                                onClose={handleClose}
                            >
                                {userSettings.map((setting) => (
                                    <MenuItem 
                                        key={setting.name} 
                                        onClick={setting.action}>
                                            <Typography textAlign="center">
                                                {setting.name}
                                            </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>
                            :
                        <>
                            <Tooltip title="Login">
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={loginUser}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            </Tooltip>
                        </>
                        }
                    </Box>
                    </Toolbar>
                </Container>
                </AppBar>
        </Box>
    );
}