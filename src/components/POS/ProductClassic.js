import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import Grid from '@mui/material/Unstable_Grid2';
import {Button} from '@mui/material'

class ProductClassic extends Component {

    render() {
        return(
            <Grid container spacing={3}>
                {this.props.viewer.allProducts.edges.map(({node}) => {
                    return <Grid xs={4} key={node.product.id}>
                             <Button variant="contained"
                                        fullWidth={true}
                                        onClick={this.button5Clicked}
                                        key={node.product.id}
                                    >
                                        {node.product.name}
                                    </Button>
                        </Grid>
                    }
                    //return <Product key={node.__id} product={node} />}
                )}
            </Grid>
        )
    }
}

export default createFragmentContainer(ProductClassic, {
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