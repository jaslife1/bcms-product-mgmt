import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import StoreList from "./StoreList";

const StoreListPageQuery = graphql`
    query StoreListPageQuery {
        viewer {
            ...StoreList_viewer
        }
    }
`

class StoreListPage extends Component {
    render() {
        return(
            <QueryRenderer
                environment={environment}
                query={StoreListPageQuery}
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

export default StoreListPage