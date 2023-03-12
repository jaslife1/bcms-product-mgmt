import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation LogInUserMutation($user: UserLogin!) {
        loginUser(user: $user) {
           token,
           user {
               id
               employeeId
               access
           }
        }
    }
    `

// 3
export default (username, password, onSuccessCallback, onErrorCallback) => {
// 4
    const variables = {
        user: {
            username,
            password,
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
                                const id = response.loginUser.user.id
                                const token = response.loginUser.token
                                const employeeId = response.loginUser.user.employeeId
                                const access = response.loginUser.user.access
                                onSuccessCallback(id, token, employeeId, access)
                            } else {
                                onErrorCallback(err)
                            }
                        },
                        onError: err => {
                                onErrorCallback(err)
                            },
                    },)
}