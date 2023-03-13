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
               defaultPassword
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
                                const defaultPassword = response.loginUser.user.defaultPassword
                                onSuccessCallback(id, token, employeeId, access, defaultPassword)
                            } else {
                                onErrorCallback(err)
                            }
                        },
                        onError: err => {
                                onErrorCallback(err)
                            },
                    },)
}