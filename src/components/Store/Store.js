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

class Store extends Component {

    render() {
        return(
            <StyledTableRow
                        key={this.props.store.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <StyledTableCell  component="th" scope="row">{this.props.store.name}</StyledTableCell>
                <StyledTableCell align="left">{this.props.store.address1}</StyledTableCell>
                <StyledTableCell align="left">{this.props.store.type}</StyledTableCell>
                <StyledTableCell align="left">{this.props.store.active}</StyledTableCell>
            </StyledTableRow>
        )
    }

}

export default createFragmentContainer(Store, {
    store: graphql`
        fragment Store_store on Store {
            id
            name
            address1
            address2
            barangay
            city
            province
            country
            zipcode
            active
            type
    }`
})