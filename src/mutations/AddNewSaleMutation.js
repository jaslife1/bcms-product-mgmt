import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AddNewSaleMutation($sale: NewSale!) {
        addNewSale(sale: $sale) {
            id
        }
    }
    `

// 3
export default (products, subtotal, tax, discount, total, amountTendered, change, onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        sale: {
            products,
            subtotal,
            tax,
            discount,
            total,
            amountTendered,
            change,
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