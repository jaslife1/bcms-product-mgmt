import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import ProductClassic from "./ProductClassic";

const ProductClassicPageQuery = graphql`
    query ProductClassicPageQuery ($filter: ProductFilter, $type: String) {
        viewer(type: $type) {
            ...ProductClassic_viewer @arguments(filter: $filter)
            id
        }
    }
`

class ProductClassicPage extends Component {
    render() {
        
        return(
            <QueryRenderer
                environment={environment}
                query={ProductClassicPageQuery}
                variables={{filter:{code: "Classic"},
                            type: "Product"}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <ProductClassic viewer={props.viewer} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default ProductClassicPage