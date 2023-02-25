import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'



class AddUserEmployeeList extends Component {

    render() {
        return(
            <FormControl fullWidth>
                <InputLabel id="employee-select-label">Employee</InputLabel>
                <Select
                    labelId="employee-select-label"
                    id="employee-simple-select"
                    label="Employee"
                    value={this.props.employeeId}
                    onChange={(e)=>{this.props.onEmployeeChange(e.target.value )}}
                >
                    {this.props.viewer.allEmployees.edges.map(({node}) => {
                        var completeName = node.personalInformation.firstName + " " + 
                                            node.personalInformation.middleName + " " + 
                                            node.personalInformation.lastName + " " + 
                                            (node.personalInformation.extensionName != null ? node.personalInformation.extensionName : "")
                        return <MenuItem
                                    key={node.id}
                                    value={node.id}
                                >
                                    {completeName}
                                </MenuItem>}
                    )}
                </Select>
            </FormControl>
        )
    }
}

export default createFragmentContainer(AddUserEmployeeList, {
    viewer: graphql`
        fragment AddUserEmployeeList_viewer on Viewer{
            allEmployees(last:100) @connection(key: "AddUserEmployeeList_allEmployees", filters: []) {
                edges {
                    node {
                            id
                            personalInformation {
                                firstName
                                middleName
                                lastName
                                extensionName
                            }
                    }
                }
            }
        }
    `}
)