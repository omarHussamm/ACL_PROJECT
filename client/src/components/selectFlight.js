import React from 'react'
import SelectDep from './selectDep';
import SelectArr from './selectArr';
class selectFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
    }

    state = {
        flightNumber: "",
        flightNumber2: "",
        returnFlight: false,
        returnFlights: [],
        allChoosen: false,
        departureFlight: "",
        arrivalFlight: ""
    };

    onChangeFlightNumber = e => {
        this.setState({
            flightNumber: e.target.value
        })
    };

    onChangeFlightNumber2 = e => {
        this.setState({
            flightNumber2: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            returnFlight: true,
            returnFlights: [{
                flightNumber: 1211,
                from: 'happy',
                to: 'sad',
                departureDate: "2021-12-18T01:34:57.000Z",
                arrivalDate: "2021-12-18T01:34:57.000Z",
                numOfEconomySeatsAvailable: 12,
                numOfBusinessSeatsAvailable: 33,
                numOfFirstClassSeatsAvailable: 44,
                __v: 0
            },
            {
                flightNumber: 1213,
                from: 'happy',
                to: 'sad',
                departureDate: "2021-12-24T01:34:00.000Z",
                arrivalDate: "2021-12-24T13:34:00.000Z",
                numOfEconomySeatsAvailable: 12,
                numOfBusinessSeatsAvailable: 33,
                numOfFirstClassSeatsAvailable: 44,
                __v: 0
            }],
            departureFlight: {
                flightNumber: 1211,
                from: 'happy',
                to: 'sad',
                departureDate: "2021-12-18T01:34:57.000Z",
                arrivalDate: "2021-12-18T01:34:57.000Z",
                numOfEconomySeatsAvailable: 12,
                numOfBusinessSeatsAvailable: 33,
                numOfFirstClassSeatsAvailable: 44,
                __v: 0
            }
        });

        // axios.post('http://localhost:5000/flights/selectDepFlight'
        //     , { flightNumber: this.state.flightNumber }).then(res => {
        //         this.setState({
        //             returnFlight: true,
        //             returnFlights: res.data.returnFlights,
        //             departureFlight: res.data.departureFlight
        //         });
        //     }
        //     )
    }
    onSubmit2 = e => {
        e.preventDefault();
        this.setState({
            arrivalFlight: {
                flightNumber: 1213,
                from: 'happy',
                to: 'sad',
                departureDate: "2021-12-24T01:34:00.000Z",
                arrivalDate: "2021-12-24T13:34:00.000Z",
                numOfEconomySeatsAvailable: 12,
                numOfBusinessSeatsAvailable: 33,
                numOfFirstClassSeatsAvailable: 44,
                __v: 0
            },
            allChoosen: true,
            returnFlight: false
        });

        // axios.post('http://localhost:5000/flights/selectArrFlight'
        //     , { flightNumber: this.state.flightNumber }).then(res => {

        //     }
        //     )
    }



    render() {
        return (
            <div>
                {!this.state.returnFlight && !this.state.allChoosen &&

                    <div>
                        {<SelectDep
                            onChangeFlightNumber={this.onChangeFlightNumber}
                            onSubmit={this.onSubmit}
                            flightNumber={this.state.flightNumber}
                        />}

                    </div>}
                {this.state.returnFlight && !this.state.allChoosen &&
                    <div>
                        {<SelectArr
                            onChangeFlightNumber2={this.onChangeFlightNumber2}
                            onSubmit2={this.onSubmit2}
                            flightNumber2={this.state.flightNumber2}
                            returnFlights={this.state.returnFlights}
                        />}

                    </div>}
                {this.state.allChoosen &&
                    <div>
                        ha brebe2  rebe2 bga
                    </div>}

            </div>
        )
    }



}
export default selectFlight
