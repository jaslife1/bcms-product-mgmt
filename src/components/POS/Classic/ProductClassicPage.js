import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../../Environment";
import ProductClassic from "./ProductClassic";
import withAuth from "../../WithAuth";

const ProductClassicPageQuery = graphql`
    query ProductClassicPageQuery ($filter: ProductFilter) {
        viewer{
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
                variables={{filter:{code: "Product", subcode: "Classic", id: "some-id"}}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <ProductClassic viewer={props.viewer} addProductToCart={this.props.addProductToCart} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default withAuth(ProductClassicPage)