import React from "react";
import SelectDep from "./selectDep";
import SelectArr from "./selectArr";
import NumOfSeats from "./numOfSeats";
import ArrivalSeats from "./arrivalSeats";
import DepartureSeats from "./departureSeats";
import ReservationSummary from "./reservationSummary";
import SummaryConfirmation from "./summaryConfirmation";
import NeedToLogIn from './needToLogIn'
import ReservationResult from "./reservationResult";
import axios from 'axios';
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
    depSeat: false,
    arrSeat: false,
    reservationSummary: false,
    reservationResult: false,
    reservationSuccess: false,
    numOfEconomySeats: "",
    numOfBusinessSeats: "",
    numOfFirstClassSeats: "",
    numOfEconomySeats2: "",
    numOfBusinessSeats2: "",
    numOfFirstClassSeats2: "",
    EconomySeats: "",
    BusinessSeats: "",
    FirstClassSeats: "",
    EconomySeats2: "",
    BusinessSeats2: "",
    FirstClassSeats2: "",
    bookingNumber: "#24366621",
    price:100
  };

  logged = () => {
    this.props.logged();
    this.setState({
      reservationSummary: false,
      depSeat: true
    })
  }

  onChangeFlightNumber = (e) => {
    this.setState({
      flightNumber: e.target.value,
    });
  };

  onChangeFlightNumber2 = (e) => {
    this.setState({
      flightNumber2: e.target.value,
    });
  };

  onSubmit = (e) => {
    // after choosing departure flight
    e.preventDefault();
    axios.post('http://localhost:5000/userGuest/selectDepFlight'
      , { flightNumber: this.state.flightNumber }).then(res => {
        this.setState({
          returnFlight: true,
          returnFlights: res.data.returnFlights,
          departureFlight: res.data.departureFlight
        });
      }
      )
  };


  onSubmit2 = (e) => {
    //after choosing return flight
    e.preventDefault();


    axios.post('http://localhost:5000/userGuest/selectArrFlight'
      , { flightNumber2: this.state.flightNumber2 }).then(res => {
        this.setState({
          arrivalFlight: res.data,
          chooseSeat: true,
          returnFlight: false,
          
        });
        console.log(res)
      }
      )
  };

  onSubmit3 = (
    numOfEconomySeats,
    numOfBusinessSeats,
    numOfFirstClassSeats,
    numOfEconomySeats2,
    numOfBusinessSeats2,
    numOfFirstClassSeats2
  ) => {
    // after choosing num of seats

    this.setState({
      numOfEconomySeats: numOfEconomySeats,
      numOfBusinessSeats: numOfBusinessSeats,
      numOfFirstClassSeats: numOfFirstClassSeats,
      numOfEconomySeats2: numOfEconomySeats2,
      numOfBusinessSeats2: numOfBusinessSeats2,
      numOfFirstClassSeats2: numOfFirstClassSeats2,
      // numOfEconomySeats: 3,
      // numOfBusinessSeats: 2,
      // numOfFirstClassSeats: 1,
      // numOfEconomySeats2: 3,
      // numOfBusinessSeats2: 2,
      // numOfFirstClassSeats2: 1,
      summary: true,
      returnFlight: false,
    });
  };

  onSubmit4 = (e,price) => {
    // after confirmation  --- must log in
    e.preventDefault();
    this.setState({
      depSeat: true,
      summary: false,
      price:price
    })
  };

  onSubmit5 = (eco, bus, first) => {

    this.setState({
      depSeat: false,
      arrSeat: true,
      EconomySeats: eco.split(','),
      BusinessSeats: bus.split(','),
      FirstClassSeats: first.split(','),
    })
  };

  onSubmit6 = (eco, bus, first) => {

    this.setState({
      arrSeat: false,
      reservationSummary: true,
      EconomySeats2: eco.split(','),
      BusinessSeats2: bus.split(','),
      FirstClassSeats2: first.split(','),
    })
  };

  onSubmit7 = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/user/booking'
      , { 
        depFlightNumber:this.state.flightNumber,
        arrFlightNumber:this.state.flightNumber2,
        userID:this.props.userToken,
        price:this.state.price,
        arrEconomySeats:this.state.EconomySeats,
        arrBusinessSeats:this.state.BusinessSeats,
        arrFirstClassSeats:this.state.FirstClassSeats,
        depEconomySeats:this.state.EconomySeats2,
        depFirstClassSeats:this.state.BusinessSeats2,
        depBusinessSeats:this.state.FirstClassSeats2
       }).then(res => {
        this.setState({
          arrivalFlight: res.data,
          chooseSeat: true,
          returnFlight: false,
          reservationResult:true
        });
      }
      )
  };

  render() {
    return (
      <div>
        {!this.state.returnFlight &&
          !this.state.chooseSeat &&
          !this.state.summary &&
          !this.state.depSeat &&
          !this.state.arrSeat &&
          !this.state.reservationSummary && (
            <div>
              {
                <SelectDep
                  userToken={this.props.userToken}
                  onChangeFlightNumber={this.onChangeFlightNumber}
                  onSubmit={this.onSubmit}
                  flightNumber={this.state.flightNumber}
                />
              }
            </div>
          )}
        {this.state.returnFlight &&
          !this.state.chooseSeat &&
          !this.state.summary &&
          !this.state.depSeat &&
          !this.state.arrSeat &&
          !this.state.reservationSummary && (
            <div>
              {
                <SelectArr
                  onChangeFlightNumber2={this.onChangeFlightNumber2}
                  onSubmit2={this.onSubmit2}
                  flight = {this.state.departureFlight}
                  flightNumber2={this.state.flightNumber2}
                  returnFlights={this.state.returnFlights}
                />
              }
            </div>
          )}
        {this.state.chooseSeat &&
          !this.state.summary &&
          !this.state.depSeat &&
          !this.state.arrSeat &&
          !this.state.reservationSummary && (
            <div>
              {
                <NumOfSeats
                  onSubmit3={this.onSubmit3}
                  departureFlight={this.state.departureFlight}
                  arrivalFlight={this.state.arrivalFlight}
                />
              }
            </div>
          )}

        {this.state.summary &&
          !this.state.depSeat &&
          !this.state.arrSeat &&
          !this.state.reservationSummary && (
            <div>
              {
                <SummaryConfirmation
                  onSubmit4={this.onSubmit4}
                  departureFlight={this.state.departureFlight}
                  arrivalFlight={this.state.arrivalFlight}
                  numOfEconomySeats={this.state.numOfEconomySeats}
                  numOfBusinessSeats={this.state.numOfBusinessSeats}
                  numOfFirstClassSeats={this.state.numOfFirstClassSeats}
                  numOfEconomySeats2={this.state.numOfEconomySeats2}
                  numOfBusinessSeats2={this.state.numOfBusinessSeats2}
                  numOfFirstClassSeats2={this.state.numOfFirstClassSeats2}
                />
              }
            </div>
          )}
        {this.state.depSeat &&
          !this.state.arrSeat &&
          !this.state.reservationSummary && this.props.userToken !== 0 &&
          <div>
            <DepartureSeats
              numOfEconomySeats={this.state.numOfEconomySeats}
              numOfBusinessSeats={this.state.numOfBusinessSeats}
              numOfFirstClassSeats={this.state.numOfFirstClassSeats}
              availableEconomySeats={this.state.departureFlight.economySeatsAvailable}
              availableBusinessSeats={this.state.departureFlight.businessSeatsAvailable}
              availableFirstClassSeats={this.state.departureFlight.firstClassSeatsAvailable}
              onSubmit5={this.onSubmit5}
            />
          </div>}

        {this.state.depSeat &&
          !this.state.arrSeat &&
          !this.state.reservationSummary && this.props.userToken === 0 &&
          <div>
            <NeedToLogIn logged={this.logged} />
          </div>}

        {this.state.arrSeat && !this.state.reservationSummary && <div>

          <ArrivalSeats
            numOfEconomySeats2={this.state.numOfEconomySeats2}
            numOfBusinessSeats2={this.state.numOfBusinessSeats2}
            numOfFirstClassSeats2={this.state.numOfFirstClassSeats2}
            availableEconomySeats2={this.state.arrivalFlight.economySeatsAvailable}
            availableBusinessSeats2={this.state.arrivalFlight.businessSeatsAvailable}
            availableFirstClassSeats2={this.state.arrivalFlight.firstClassSeatsAvailable}
            onSubmit6={this.onSubmit6} />
        </div>}

        {this.state.reservationSummary && !this.state.reservationResult && <div>
          <ReservationSummary
            onSubmit7={this.onSubmit7}
            departureFlight={this.state.departureFlight}
            arrivalFlight={this.state.arrivalFlight}
            numOfEconomySeats={this.state.numOfEconomySeats}
            numOfBusinessSeats={this.state.numOfBusinessSeats}
            numOfFirstClassSeats={this.state.numOfFirstClassSeats}
            numOfEconomySeats2={this.state.numOfEconomySeats2}
            numOfBusinessSeats2={this.state.numOfBusinessSeats2}
            numOfFirstClassSeats2={this.state.numOfFirstClassSeats2}
            EconomySeats={this.state.EconomySeats}
            BusinessSeats={this.state.BusinessSeats}
            FirstClassSeats={this.state.FirstClassSeats}
            EconomySeats2={this.state.EconomySeats2}
            BusinessSeats2={this.state.BusinessSeats2}
            FirstClassSeats2={this.state.FirstClassSeats2}
            bookingNumber={this.state.bookingNumber}
          />
        </div>}
        {this.state.reservationResult && <div>
          <ReservationResult success={this.state.reservationSuccess} />
        </div>}
      </div>
    );
  }
}
export default selectFlight;