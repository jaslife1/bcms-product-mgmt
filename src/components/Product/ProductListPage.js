import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import ProductList from "./ProductList";

const ProductListPageQuery = graphql`
    query ProductListPageQuery ($filter: ProductFilter){
        viewer{
            ...ProductList_viewer @arguments(filter: $filter)
        }
    }
`

class ProductListPage extends Component {
    render() {
        return(
            <QueryRenderer
                environment={environment}
                query={ProductListPageQuery}
                variables={{filter:{code: "Product", id: "some-id"}}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <ProductList viewer={props.viewer} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default ProductListPage