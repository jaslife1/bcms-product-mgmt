
import React, {Component} from "react";
import { BCMS_USER_EMPLOYEE_NAME } from "../constants";
import withAuth from "./WithAuth"

class Home extends Component {

    render() {
        return(
            <div>
                <h1>
                    Welcome {localStorage.getItem(BCMS_USER_EMPLOYEE_NAME)}
                </h1>
            </div>
        )
    }

}

export default withAuth(Home);