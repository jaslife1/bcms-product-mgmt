
import React, {Component} from "react";
import withAuth from "./WithAuth"

class Home extends Component {

    render() {
        return(
            <div>
                Home
            </div>
        )
    }

}

export default withAuth(Home);