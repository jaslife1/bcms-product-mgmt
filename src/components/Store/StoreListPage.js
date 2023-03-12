import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import StoreList from "./StoreList";
import withAuth from "../WithAuth";

const StoreListPageQuery = graphql`
    query StoreListPageQuery ($filter: StoreFilter){
        viewer {
            ...StoreList_viewer @arguments(filter: $filter)
        }
    }
`

class StoreListPage extends Component {
    render() {
        return(
            <QueryRenderer
                environment={environment}
                query={StoreListPageQuery}
                variables={{filter:{code: "Store", id: "some-id"}}}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <StoreList viewer={props.viewer} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default withAuth(StoreListPage)