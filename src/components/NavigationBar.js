import React, {Component} from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

export default function NavigationBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openProduct = Boolean(anchorEl);

    const navigate = useNavigate();

    const handleHomeClick = (event) => {
        navigate("/")
    };
    const handleProductClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
        navigate("/newproduction")
    }

    const pointofsales = () => {
        handleClose()
        navigate("/pointofsales")
    }

    const reports = () => {
        handleClose()
        navigate("/reports")
    }

    const employee = () => {
        handleClose()
        navigate("/employee")
    }

    return (
        <div>
        <Button
            id="basic-button"
            onClick={handleHomeClick}
        >
            Home
        </Button>
        <Button
            id="basic-button"
            aria-controls={openProduct ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openProduct ? 'true' : undefined}
            onClick={handleProductClick}
        >
            Product
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
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
        <Button
            id="basic-button"
            onClick={pointofsales}
        >
            Point-of-Sales
        </Button>
        <Button
            id="basic-button"
            onClick={reports}
        >
            Reports
        </Button>
        <Button
            id="basic-button"
            onClick={employee}
        >
            Employee
        </Button>
        </div>
    );
}