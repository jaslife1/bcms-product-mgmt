import React, {Component} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import { BCMS_USER_ID, BCMS_AUTH_TOKEN, BCMS_USER_EMPLOYEE_ID, BCMS_USER_ACCESS } from "../constants";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';



export default function NavigationBar() {
    const [anchorProdEl, setAnchorProdEl] = React.useState(null);
    const [anchorStoreEl, setAnchorStoreEl] = React.useState(null);
    const [anchorEmployeeEl, setAnchorEmployeeEl] = React.useState(null);

    const openProduct = Boolean(anchorProdEl);
    const openStore = Boolean(anchorStoreEl);
    const openEmployee = Boolean(anchorEmployeeEl);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        navigate("/logout")
    }

    const isAuthenticated = localStorage.getItem(BCMS_USER_ID) != null
    const isUserAdmin = localStorage.getItem(BCMS_USER_ACCESS) != null && (localStorage.getItem(BCMS_USER_ACCESS) == "Admin" || localStorage.getItem(BCMS_USER_ACCESS) == "Super Admin")


    const adminMenu = [ {name: 'Home', action: handleHomeClick},
                    {name: 'Point Of Sales', action: handlePointOfSalesClick},
                    {name: 'Product', action: handleProductClick},
                    {name: 'Stores & Bazaars', action: handleStoreClick},
                    {name: 'Supplies', action: handleHomeClick},
                    {name: 'Employee', action: handleEmployeeClick},
                    {name: 'Reports', action: handleReportsClick}];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
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

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {pages.map((page) => (
                            <MenuItem key={page.name} 
                                // onClick={handleCloseNavMenu}
                                onClick={page.action}
                                >
                            <Typography textAlign="center">
                                {page.name}
                                </Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box> */}
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {adminMenu.map((page) => (
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
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem 
                                    key={setting} 
                                    onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    </Toolbar>
                </Container>
                </AppBar>
            {/* <Button
                id="basic-button"
                onClick={handleHomeClick}
            >
                Home
            </Button>
            {isAuthenticated && isUserAdmin &&
            
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
                anchorEl={anchorProdEl}
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
            {isAuthenticated && isUserAdmin &&
                <Button
                    id="basic-button"
                    onClick={handleStoreClick}
                >
                    Stores
                </Button>
            }
            
            <Menu
                id="basic-menu"
                anchorEl={anchorStoreEl}
                open={openStore}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={listStores}>Store List</MenuItem>
                <MenuItem onClick={addNewStore}>Add New Store</MenuItem>
            </Menu>
            {isAuthenticated && isUserAdmin &&
                <Button
                    id="basic-button"
                    onClick={reports}
                >
                    Reports
                </Button>
            }
            {isAuthenticated && isUserAdmin &&
                <Button
                    id="basic-button"
                    onClick={handleEmployeeClick}
                >
                    Employee
                </Button>
            }
            <Menu
                id="basic-menu"
                anchorEl={anchorEmployeeEl}
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
            } */}
        </Box>
    );
}