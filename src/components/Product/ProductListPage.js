import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import ProductList from "./ProductList";

const ProductListPageQuery = graphql`
    query ProductListPageQuery {
        viewer {
            ...ProductList_viewer
        }
    }
`

class ProductListPage extends Component {
    render() {
        return(
            <QueryRenderer
                environment={environment}
                query={ProductListPageQuery}
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