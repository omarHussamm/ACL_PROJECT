import React from 'react'
import {
    Link
} from "react-router-dom";

class reservationResult extends React.Component {

    render() {
        return (
            <div class="loginform">
                {this.props.success &&
                    <>
                        <h1>
                            <Link to="/">Reservation Done Go back to Home Page</Link>
                        </h1>
                    </>
                }
                {!this.props.success &&
                    <>
                        <h1>
                            <Link to="/">Reservation Failed Go back to Home Page</Link>
                        </h1>
                    </>
                }
                
            </div>
        )
    }
}

export default reservationResult