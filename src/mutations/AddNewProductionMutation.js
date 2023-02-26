import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AddNewProductionMutation($production: NewProduction!) {
        addNewProduction(production: $production) {
            id,
            productId,
            batchCode,
            dateAdded,
            quantity
        }
    }
    `

// 3
export default (
    productId, 
    batchCode,
    quantity, 
    onSuccessCallback, 
    onErrorCallback) => {
// 4
    const variables = {
        production: {
            productId,
            batchCode,
            quantity
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