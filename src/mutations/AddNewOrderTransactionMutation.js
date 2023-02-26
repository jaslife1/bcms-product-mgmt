import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AddNewOrderTransactionMutation($newOrder: NewOrder!) {
        addNewOrderTransaction(newOrder: $newOrder) {
            id
        }
    }
    `

// 3
export default (
    products,
    totalAmountDue,
    discount,
    shippingFee,
    tax,
    customer,
    store,
    online,
    type,
    remarks,
    onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        newOrder: {
            products,
            totalAmountDue,
            discount,
            shippingFee,
            tax,
            customer,
            store,
            online,
            type,
            remarks
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