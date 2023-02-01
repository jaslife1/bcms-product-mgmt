import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../Environment";
import Product from "./Product";

const ProductListPageQuery = graphql`
    query ProductListPageQuery {
        products {
            ...Product_product
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
                        console.log(props)
                        return <Product product={props} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default ProductListPage