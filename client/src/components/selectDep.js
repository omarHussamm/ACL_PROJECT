import React from 'react'
import GuestUserLinks from "./guestUserLinks";
class selectDep extends React.Component {
    render() {
        return (
            <div>


                <GuestUserLinks userToken={this.props.userToken} />

                <div>
                    <form class="loginForm round2 bgwhite center" onSubmit={this.props.onSubmit}>
                        <fieldset>
                            <h2 class="text-primary">SELECT FLIGHT</h2>
                            <br />
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Flight Number:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={this.props.flightNumber} onChange={this.props.onChangeFlightNumber} class="form-control" placeholder="Flight number" />
                                </div>
                            </div>

                            <br />
                            <button type="submit" class="btn btn-primary centre">Select Flight</button>
                        </fieldset>
                    </form>
                </div>

            </div>
        )
    }
}
export default selectDep