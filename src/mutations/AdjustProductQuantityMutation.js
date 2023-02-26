import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AdjustProductQuantityMutation($adjustment: NewAdjustment!) {
        adjustProductQuantity(adjustment: $adjustment) {
            id,
            productId,
            quantity,
            dateAdded
        }
    }
    `

// 3
export default (productId, quantity, onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        adjustment: {
            productId,
            quantity,
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