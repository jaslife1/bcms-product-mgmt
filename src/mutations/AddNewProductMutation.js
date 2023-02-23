import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AddNewProductMutation($product: NewProduct!) {
        addNewProduct(product: $product) {
            id,
            code,
            name,
            description,
            sku,
            barcode,
            price,
            dateAdded,
            dateCancelled,
            active,
        }
    }
    `

// 3
export default (code, name, description, sku, barcode, price, callback) => {
// 4
    const variables = {
        product: {
            code,
            name,
            description,
            sku,
            barcode,
            price
        },
    }

    // 5
    commitMutation(environment,
                    {
                        mutation,
                        variables,
                        // 6
                        onCompleted: () => {
                                callback()
                            },
                            onError: err => console.error(err),
                    },)
}