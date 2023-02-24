import {
    commitMutation,
    graphql,
  } from 'react-relay'
  import environment from '../Environment'

  // 2
const mutation = graphql`
    mutation AddNewEmployeeMutation($employee: NewEmployee!) {
        addNewEmployee(employee: $employee) {
            id,
            idNumber,
            personalInformation {
                firstName,
                lastName,
                middleName,
            },
            address {
                address1,
                address2,
                barangay,
                city,
                province,
                country,
                zipcode,
            }
        }
    }
    `

// 3
export default (
    firstName,
    lastName,
    middleName,
    extensionName,
    birthMonth,
    birthDate,
    birthYear,
    birthPlace,
    address1,
    address2,
    barangay,
    city,
    province,
    country,
    zipcode,
    telephoneNumber,
    mobileNumber,
    emailAddress,
    sssNumber,
    philHealthNumber,
    hdmfNumber,
    tinNumber,
    position,
    salary,
    storeId,
    type,
    active,
    dateHired,
    onSuccessCallback, 
    onErrorCallback) => {
// 4
    const variables = {
        employee: {
            personalInformation: {
                firstName,
                lastName,
                middleName,
                extensionName,
                birthMonth,
                birthDate,
                birthYear,
                birthPlace,
            },
            address: {
                address1,
                address2,
                barangay,
                city,
                province,
                country,
                zipcode,
            },
            contactInformation : {
                telephoneNumber,
                mobileNumber,
                emailAddress
            },
            statutoryInformation: {
                sssNumber,
                philHealthNumber,
                hdmfNumber,
                tinNumber
            },
            position,
            salary,
            storeId,
            active,
            type,
            dateHired,
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