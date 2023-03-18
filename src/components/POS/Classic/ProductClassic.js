import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import Grid from '@mui/material/Unstable_Grid2';
import ProductItem from "../ProductItem";
import withAuth from "../../WithAuth";

class ProductClassic extends Component {

    render() {
        return(
            <Grid container spacing={3}>
                {this.props.viewer.allProducts.edges.map(({node}) => {
                        return <ProductItem
                                        key={node.product.id} 
                                        addProductToCart={this.props.addProductToCart}
                                         product={node.product}
                                         inventory={node.inventory} />
                    }
                    //return <Product key={node.__id} product={node} />}
                )}
            </Grid>
        )
    }
}

export default createFragmentContainer(withAuth(ProductClassic), {
    viewer: graphql`
        fragment ProductClassic_viewer on Viewer @argumentDefinitions(filter: {type: ProductFilter}){
            allProducts(filter: $filter, last:100) @connection(key: "ProductClassic_allProducts", filters: []) {
                edges {
                    node {
                        product {
                            id
                            name
                            sku
                            price
                            barcode
                            weight
                            code
                        }
                        inventory {
                            quantity
                        }
                    }
                }
            }
        }
    `}
)