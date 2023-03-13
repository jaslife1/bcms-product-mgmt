import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation ChangePasswordMutation($newPassword: ChangePassword!) {
        changePassword(newPassword: $newPassword) {
               id
               employeeId
               access
        }
    }
    `

// 3
export default (userId, newPassword, onSuccessCallback, onErrorCallback) => {
// 4
    console.log("ChagnePasswordMutataion: ", userId, newPassword)
    const variables = {
        newPassword: {
            userId,
            newPassword,
        },
    }

    // 5
    commitMutation(environment,
                    {
                        mutation,
                        variables,
                        // 6
                        onCompleted: (response, err) => {
                            if (err == null) {
                                onSuccessCallback(response, err)
                            } else {
                                onErrorCallback(err)
                            }
                        },
                        onError: err => {
                                onErrorCallback(err)
                            },
                    },)
}