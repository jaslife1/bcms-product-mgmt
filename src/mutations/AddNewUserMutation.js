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
            username,
            access,
        }
    }
    `

// 3
export default (employeeId, username, access, onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        user: {
            employeeId,
            username,
            access,
        },
    }

    // 5
    commitMutation(environment,
                    {
                        mutation,
                        variables,
                        // 6
                        onCompleted: (response, errors) => {
                            onSuccessCallback(response, errors)
                            },
                        onError: err => {
                                onErrorCallback(err)
                            },
                    },)
}