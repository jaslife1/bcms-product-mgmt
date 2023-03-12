import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import { TextField, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon  from "@mui/icons-material/Save";
import SimpleDialog from "../SimpleDialog";
import AdjustProductQuantityMutation from "../../mutations/AdjustProductQuantityMutation";
import withAuth from "../WithAuth";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

class Product extends Component {

    state = {
      quantityDisabled: true,
      saveDisabled: true,
      editDisabled: false,
      quantity: this.props.product.inventory.quantity,
      showDialog: false,
      showErrorDialog: false,
    }

    updateQuantity = () => {
      this.setState({
        quantityDisabled: false,
        saveDisabled: false,
        editDisabled: true,
      })
    }

    saveQuantity = () => {
      const productId = this.props.product.product.id
      const {quantity} = this.state
      AdjustProductQuantityMutation(productId, quantity, ()=>{
            console.log("Update quantity successful");
            // Prompt the user of successful addition of product
            this.setState({showDialog: true});
             
             this.setState({
              quantityDisabled: true,
              saveDisabled: true,
              editDisabled: false,
            })

        }, (err) => {
            console.log(err)
            this.setState({showErrorDialog: true, showErrorContent: err});
            
        })
    }
    

    render() {
        return(
            <>
            <StyledTableRow
                        key={this.props.product.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <StyledTableCell  component="th" scope="row">{this.props.product.product.barcode}</StyledTableCell>
                <StyledTableCell align="left">{this.props.product.product.name}</StyledTableCell>
                <StyledTableCell align="left">
                  <TextField
                    id="outlined-number"
                    disabled={this.state.quantityDisabled}
                    type="number"
                    //value= {this.props.product.inventory.quantity}
                    value={this.state.quantity}
                    onChange={(e)=>{
                      this.setState({quantity: e.target.value})
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                   <IconButton 
                      color="primary" 
                      aria-label="update quantity" 
                      component="label"
                      disabled={this.state.editDisabled}
                      onClick={()=> this.updateQuantity()}
                    >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                      color="primary" 
                      aria-label="save quantity"
                      component="label"
                      disabled={this.state.saveDisabled}
                      onClick={()=> this.saveQuantity()}
                    >
                    <SaveIcon />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="left">{this.props.product.product.price}</StyledTableCell>
            </StyledTableRow>
            {/* <SimpleDialog
                open={this.state.showDialog}
                title="Add New Product"
                content="New product successfully added"
                onClose={()=>{
                    this.setState({showDialog: false})
                }}
            /> */}
            <SimpleDialog
                open={this.state.showErrorDialog}
                title="Update Product Quantity"
                content={"Failed to update product quantity." + this.state.showErrorContent}
                onClose={()=>{
                    this.setState({showErrorDialog: false})
                }}
            />
            </>
        )
    }

}

export default createFragmentContainer(withAuth(Product), {
    product: graphql`
        fragment Product_productList on ProductList {
              product {
                id
                name
                sku
                price
                barcode
              }
              inventory {
                quantity
              }
    }`
})