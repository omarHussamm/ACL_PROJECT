import React from 'react'
import SelectDep from './selectDep';
import SelectArr from './selectArr';
import NumOfSeats from './numOfSeats';
import SummaryConfirmation from './summaryConfirmation';
class selectFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
        this.onSubmit3 = this.onSubmit3.bind(this);
    }

    state = {
        flightNumber: "",
        flightNumber2: "",
        returnFlight: false,
        returnFlights: [],
        chooseSeat: false,
        departureFlight: "",
        arrivalFlight: "",
        summary: false,
        numOfEconomySeats: "",
        numOfBusinessSeats: "",
        numOfFirstClassSeats: "",
        numOfEconomySeats2: "",
        numOfBusinessSeats2: "",
        numOfFirstClassSeats2: ""
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
        // after choosing departure flight
        e.preventDefault();
        this.setState({
            returnFlight: true,
            returnFlights: [
                {
                    flightNumber: 1213,
                    from: 'sad',
                    to: 'happy',
                    departureDate: "2021-12-24T01:34:00.000Z",
                    arrivalDate: "2021-12-24T13:34:00.000Z",
                    numOfEconomySeatsAvailable: 12,
                    numOfBusinessSeatsAvailable: 33,
                    numOfFirstClassSeatsAvailable: 44,
                    __v: 0,
                    basePrice: 10
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
                __v: 0,
                basePrice: 12
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
        //after choosing return flight
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
                __v: 0,
                basePrice:10
            },
            chooseSeat: true,
            returnFlight: false
        });

        // axios.post('http://localhost:5000/flights/selectArrFlight'
        //     , { flightNumber: this.state.flightNumber }).then(res => {

        //     }
        //     )
    }

    onSubmit3 = ( numOfEconomySeats,
        numOfBusinessSeats,
        numOfFirstClassSeats,
        numOfEconomySeats2,
        numOfBusinessSeats2,
        numOfFirstClassSeats2) => {
        // after choosing num of seats

        this.setState({
            // numOfEconomySeats: numOfEconomySeats,
            // numOfBusinessSeats: numOfBusinessSeats,
            // numOfFirstClassSeats: numOfFirstClassSeats,
            // numOfEconomySeats2: numOfEconomySeats2,
            // numOfBusinessSeats2: numOfBusinessSeats2,
            // numOfFirstClassSeats2: numOfFirstClassSeats2
            numOfEconomySeats: 3,
            numOfBusinessSeats: 2,
            numOfFirstClassSeats: 1,
            numOfEconomySeats2: 3,
            numOfBusinessSeats2: 2,
            numOfFirstClassSeats2: 1,
            summary:true,
            returnFlight:false
        })
    }

    onSubmit4 = e => {
        // after confirmation  --- must log in
        e.preventDefault();
        this.props.switchToUser();
    }



    render() {
        return (
            <div>
                {!this.state.returnFlight && !this.state.chooseSeat && !this.state.summary &&

                    <div>
                        {<SelectDep
                            user={this.props.user}
                            onChangeFlightNumber={this.onChangeFlightNumber}
                            onSubmit={this.onSubmit}
                            flightNumber={this.state.flightNumber}
                        />}

                    </div>}
                {this.state.returnFlight && !this.state.chooseSeat && !this.state.summary &&
                    <div>
                        {<SelectArr
                            onChangeFlightNumber2={this.onChangeFlightNumber2}
                            onSubmit2={this.onSubmit2}
                            flightNumber2={this.state.flightNumber2}
                            returnFlights={this.state.returnFlights}
                        />}

                    </div>}
                {this.state.chooseSeat && !this.state.summary &&
                    <div>
                        {<NumOfSeats
                            onSubmit3={this.onSubmit3}
                            departureFlight={this.state.departureFlight}
                            arrivalFlight={this.state.arrivalFlight}
                        />}
                    </div>}

                {this.state.summary &&
                    <div>
                        {<SummaryConfirmation
                            onSubmit4={this.onSubmit4}
                            departureFlight={this.state.departureFlight}
                            arrivalFlight={this.state.arrivalFlight}
                            numOfEconomySeats={this.state.numOfEconomySeats}
                            numOfBusinessSeats={this.state.numOfBusinessSeats}
                            numOfFirstClassSeats={this.state.numOfFirstClassSeats}
                            numOfEconomySeats2={this.state.numOfEconomySeats2}
                            numOfBusinessSeats2={this.state.numOfBusinessSeats2}
                            numOfFirstClassSeats2={this.state.numOfFirstClassSeats2}
                        />}
                    </div>}

            </div>
        )
    }



}
export default selectFlight
