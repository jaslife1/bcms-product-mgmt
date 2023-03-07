import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import ProductGuiltFree from "./ProductGuiltFree";

const ProductGuiltFreePageQuery = graphql`
    query ProductGuiltFreePageQuery ($filter: ProductFilter) {
        viewer{
            ...ProductGuiltFree_viewer @arguments(filter: $filter)
            id
        }
    }
`

class ProductGuiltFreePage extends Component {
    render() {
        
        return(
            <QueryRenderer
                environment={environment}
                query={ProductGuiltFreePageQuery}
                variables={{filter:{code: "Product", subcode: "Guilt-Free", id: "some-id"}}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <ProductGuiltFree viewer={props.viewer} addProductToCart={this.props.addProductToCart} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default ProductGuiltFreePage