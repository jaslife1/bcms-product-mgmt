import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import AddUserEmployeeList from "./AddUserEmployeeList";
import withAuth from "../WithAuth";

const AddUserEmployeeListPageQuery = graphql`
    query AddUserEmployeeListPageQuery ($filter: EmployeeFilter) {
        viewer {
            ...AddUserEmployeeList_viewer @arguments (filter: $filter)
        }
    }
`

class AddUserEmployeeListPage extends Component {
    render() {
        return(
            <QueryRenderer
                environment={environment}
                query={AddUserEmployeeListPageQuery}
                variables={{filter: {code:"Employee", id:"some-id"}}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <AddUserEmployeeList viewer={props.viewer} employeeId={this.props.employeeId} onEmployeeChange={this.props.onEmployeeChange} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default withAuth(AddUserEmployeeListPage)