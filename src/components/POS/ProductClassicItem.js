import React, {Component} from "react";
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import Grid from '@mui/material/Unstable_Grid2';
import {Button} from '@mui/material'

class ProductClassicItem extends Component {

    onButtonClick = (e) => {
        this.props.addProductToCart(this.props.product)
    }

    render() {
        return(
           
                <Grid xs={4} key={this.props.product.id}>
                        <Button variant="contained"
                                fullWidth={true}
                                onClick={this.onButtonClick}
                                key={this.props.product.id}
                                id={this.props.product}
                            >
                                {this.props.product.name}
                            </Button>
                </Grid>
                    
                
        )
    }
}

export default ProductClassicItem