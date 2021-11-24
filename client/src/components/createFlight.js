import React from 'react'
import axios from 'axios'
class createFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        from: "",
        to: "",
        date: "",
        cabin: "",
        numOfSeatsAvailable: ""
    };

    onChangeFrom = e => {
        this.setState({
            from: e.target.value
        })
    };

    onChangeTo = e => {
        this.setState({
            to: e.target.value
        })
    };
    onChangeDate = e => {
        this.setState({
            date: e.target.value
        })
    };
    onChangeCabin = e => {
        this.setState({
            cabin: e.target.value
        })
    };
    onChangeSeats = e => {
        this.setState({
            numOfSeatsAvailable: e.target.value
        })
    };


    onSubmit = e => {
        e.preventDefault();
        console.log("did we get here front end?");
        const flight = {
            from: this.state.from,
            to: this.state.to,
            date: this.state.date,
            cabin: this.state.cabin,
            numOfSeatsAvailable: this.state.numOfSeatsAvailable
        };
        axios.post('http://localhost:5000/flights/createFlight'
            , flight)
           
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            from:
                            <input type="text" name="name" value={this.state.from} onChange={this.onChangeFrom} />
                        </label>
                    </div>
                    <div>
                        <label>
                            to:
                            <input type="text" name="name" value={this.state.to} onChange={this.onChangeTo} />
                        </label>
                    </div>
                    <div>
                        <label>
                            cabin:
                            <input type="text" name="name" value={this.state.cabin} onChange={this.onChangeCabin} />
                        </label>
                    </div>
                    <div>
                        <label>
                            date:
                            <input type="text" name="name" value={this.state.date} onChange={this.onChangeDate} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Number of seats available:
                            <input type="text" name="name" value={this.state.numOfSeatsAvailable} onChange={this.onChangeSeats} />
                        </label>
                    </div>
                    <input type="submit" value="Create Flight" />
                </form>
            </div>
        )
    }


}

export default createFlight