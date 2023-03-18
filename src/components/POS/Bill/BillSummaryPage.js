import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import withAuth from "../../WithAuth";


class BillSummaryPage extends Component {
    ccyFormat(num) {
        //return `${num.toFixed(2)}`;
        return num.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });
    }


    render() {
        return(
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        <TableRow
                            key="subTotal"
                        >
                            <TableCell>SubTotal</TableCell>
                            <TableCell align="right">₱ {this.ccyFormat(this.props.subtotal)}</TableCell>

                        </TableRow>

                        <TableRow
                            key="discount"
                        >
                            <TableCell>Discount</TableCell>
                            <TableCell align="right">₱ {this.ccyFormat(this.props.discount)}</TableCell>

                        </TableRow>

                        <TableRow
                            key="tax"
                        >
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">₱ {this.ccyFormat(this.props.tax)}</TableCell>

                        </TableRow>

                        <TableRow
                            key="total"
                        >
                            <TableCell
                                style={{
                                "fontSize": "30px"
                            }}>Total</TableCell>
                            <TableCell align="right"
                                style={{
                                    "fontSize": "30px"
                                }}>₱ {this.ccyFormat(this.props.total)}</TableCell>

                        </TableRow>


                    {/* {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

BillSummaryPage.propTypes = {
    subtotal: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  };

export default withAuth(BillSummaryPage)