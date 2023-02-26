import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'



class AddProductionProduct extends Component {

    render() {
        return(
            <FormControl fullWidth>
                <InputLabel id="product-select-label">Product</InputLabel>
                <Select
                    labelId="product-select-label"
                    id="product-simple-select"
                    label="Product"
                    value={this.props.productId}
                    onChange={(e)=>{this.props.onProductChange(e.target.value )}}
                >
                    {this.props.viewer.allProducts.edges.map(({node}) => {
                        return <MenuItem
                                    key={node.id}
                                    value={node.id}
                                >
                                    {node.name}
                                </MenuItem>}
                    )}
                </Select>
            </FormControl>
        )
    }
}

export default createFragmentContainer(AddProductionProduct, {
    viewer: graphql`
        fragment AddProductionProduct_viewer on Viewer{
            allProducts(last:100) @connection(key: "AddProductionProduct_allProducts", filters: []) {
                edges {
                    node {
                        product {
                            id
                            name
                        }
                    }
                }
            }
        }
    `}
)