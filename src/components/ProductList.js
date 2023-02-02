import React, {Component} from "react";
import Product from "./Product";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class ProductList extends Component {

    render() {
        return(<>
            {this.props.viewer.allProducts.edges.map(({node})=>{
                return <Product key={node.__id} product={node} />}
            )}
        </>)
    }
}

export default createFragmentContainer(ProductList, {
    viewer: graphql`
        fragment ProductList_viewer on Viewer{
            allProducts(last:100) @connection(key: "ProductList_allProducts", filters: []) {
                edges {
                    node {
                        ...Product_product
                    }
                }
            }
        }
    `}
)