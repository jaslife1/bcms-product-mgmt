import React, {Component} from "react";
import Product from "./Product";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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

class ProductList extends Component {

    render() {
        return(
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <StyledTableRow>
                    <StyledTableCell>Barcode</StyledTableCell>
                    <StyledTableCell align="left">Product Name</StyledTableCell>
                    <StyledTableCell align="left">Quantity</StyledTableCell>
                    <StyledTableCell align="left">Price</StyledTableCell>
                </StyledTableRow>
                </TableHead>
                <TableBody>
                {this.props.viewer.allProducts.edges.map(({node}) => {
                    return <Product key={node.__id} product={node} />}
                )}
                </TableBody>
            </Table>
            </TableContainer>
        )
    }
}

export default createFragmentContainer(ProductList, {
    viewer: graphql`
        fragment ProductList_viewer on Viewer @argumentDefinitions(filter: {type: ProductFilter}){
            allProducts(filter: $filter, last:100) @connection(key: "ProductList_allProducts", filters: []) {
                edges {
                    node {
                        ...Product_productList
                    }
                }
            }
        }
    `}
)