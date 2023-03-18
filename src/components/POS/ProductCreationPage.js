import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import ProductCreation from "./ProductCreation";
import withAuth from "../WithAuth";

const ProductCreationPageQuery = graphql`
    query ProductCreationPageQuery ($filter: ProductFilter) {
        viewer{
            ...ProductCreation_viewer @arguments(filter: $filter)
            id
        }
    }
`

class ProductCreationPage extends Component {
    render() {
        
        return(
            <QueryRenderer
                environment={environment}
                query={ProductCreationPageQuery}
                variables={{filter:{code: "Product", subcode: "Creations", id: "some-id"}}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <ProductCreation viewer={props.viewer} addProductToCart={this.props.addProductToCart} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default withAuth(ProductCreationPage)