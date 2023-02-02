import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Product extends Component {

    render() {
        return(
            <>
                <div>Product:{this.props.product.name}</div>
            </>
        )
    }

}

export default createFragmentContainer(Product, {
    product: graphql`
        fragment Product_product on Product {
            id
            name
            description
            sku
            barcode
            dateAdded
    }`
})