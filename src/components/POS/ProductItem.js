import React, {Component} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import {Button} from '@mui/material'

class ProductItem extends Component {

    onButtonClick = (e) => {
        this.props.addProductToCart(this.props.product, this.props.inventory)
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

export default ProductItem