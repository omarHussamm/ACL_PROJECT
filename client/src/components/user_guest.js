import React from 'react'
import GuestUserLinks from './guestUserLinks';


class user_guest extends React.Component {

    render() {
        return (
            <div>
                <GuestUserLinks userToken={this.props.userToken} />
                <h1 class="text-primary"> Welcome to BongAirlines! </h1>
            </div>
        );
    }
}
export default user_guest
