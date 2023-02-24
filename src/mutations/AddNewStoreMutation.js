import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AddNewStoreMutation($store: NewStore!) {
        addNewStore(store: $store) {
            id,
            type,
            name,
            address1,
            address2,
            barangay,
            city,
            province,
            country,
            zipcode,
            dateAdded,
            active,
        }
    }
    `

// 3
export default (type, name, address1, address2, barangay, city, province, country, zipcode, active, onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        store: {
            type,
            name,
            address1,
            address2,
            barangay,
            city,
            province,
            country,
            zipcode,
            active,
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