import React, {Component} from "react";
import Store from "./Store";
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

class StoreList extends Component {

    render() {
        return(
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <StyledTableRow>
                    <StyledTableCell>Store Name</StyledTableCell>
                    <StyledTableCell align="left">Address</StyledTableCell>
                    <StyledTableCell align="left">Type</StyledTableCell>
                    <StyledTableCell align="left">Active</StyledTableCell>
                </StyledTableRow>
                </TableHead>
                <TableBody>
                {this.props.viewer.allStores.edges.map(({node}) => {
                    return <Store key={node.__id} store={node} />}
                )}
                </TableBody>
            </Table>
            </TableContainer>
        )
    }
}

export default createFragmentContainer(StoreList, {
    viewer: graphql`
        fragment StoreList_viewer on Viewer @argumentDefinitions(filter: {type: StoreFilter}){
            allStores(filter: $filter, last:100) @connection(key: "StoreList_allStores", filters: []) {
                edges {
                    node {
                        ...Store_store
                    }
                }
            }
        }
    `}
)