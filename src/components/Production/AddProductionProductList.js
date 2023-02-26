import React, {Component} from "react";
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from "../../Environment";
import AddProductionProduct from "./AddProductionProduct";

const AddProductionProductListQuery = graphql`
    query AddProductionProductListQuery {
        viewer {
            ...AddProductionProduct_viewer
        }
    }
`

class AddProductionProductList extends Component {
    render() {
        return(
            <QueryRenderer
                environment={environment}
                query={AddProductionProductListQuery}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props != null){
                        return <AddProductionProduct viewer={props.viewer} productId={this.props.productId} onProductChange={this.props.onProductChange} />
                    }
                    return <div>Loading</div>
                }}
            
            />
        )
    }
}

export default AddProductionProductList