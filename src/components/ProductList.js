import React, {Component} from "react";
import Product from "./Product";

class ProductList extends Component {

    render() {

        const products = [{
            id: '1',
            name: "90% Dark chocolate"
        },{
            id: "2",
            name: "80% Dark chocolate"
        }]
        return(<>
            {products.map(p =>(
                <Product key={p.id} product={p} />
            ))}
        </>)
    }
}

export default ProductList