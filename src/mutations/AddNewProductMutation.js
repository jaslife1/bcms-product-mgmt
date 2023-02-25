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
export default (code, name, description, sku, barcode, price, active, onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        product: {
            code,
            name,
            description,
            sku,
            barcode,
            price,
            active
        },
    }

    // 5
    commitMutation(environment,
                    {
                        mutation,
                        variables,
                        // 6
                        onCompleted: () => {
                            onSuccessCallback()
                            },
                        onError: err => {
                                onErrorCallback(err)
                            },
                    },)
}