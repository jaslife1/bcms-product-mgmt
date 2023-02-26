import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

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

    render() {
        return(
            <StyledTableRow
                        key={this.props.product.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <StyledTableCell  component="th" scope="row">{this.props.product.product.barcode}</StyledTableCell>
                <StyledTableCell align="left">{this.props.product.product.name}</StyledTableCell>
                <StyledTableCell align="left">{this.props.product.inventory.quantity}</StyledTableCell>
                <StyledTableCell align="left">{this.props.product.product.price}</StyledTableCell>
            </StyledTableRow>
        )
    }

}

export default createFragmentContainer(Product, {
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