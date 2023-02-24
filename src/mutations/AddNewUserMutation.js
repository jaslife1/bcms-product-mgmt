import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AddNewUserMutation($user: NewUser!) {
        addNewUser(user: $user) {
            id,
            employeeId,
            access,
        }
    }
    `

// 3
export default (employeeId, access, onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        user: {
            employeeId,
            access,
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