// import React, {Component} from "react";
// import Product from "./Product";
// import {
//     createFragmentContainer,
//     graphql
// } from 'react-relay'

// class ProductList extends Component {

//     render() {
//         return(<>
//             {this.props.product.products.edges.map(({node})=>
//                 <Product key={node.__id} product={node} />
//             )}
//         </>)
//     }
// }

// export default createFragmentContainer(ProductList, graphql`
//     fragment ProductList_product on Product{
//         products @connection(key: "ProductList_products", filters: []) {
//             edges {
//                 node {
//                 ...Product_product
//                 }
//             }
//         }
//     }
// `)