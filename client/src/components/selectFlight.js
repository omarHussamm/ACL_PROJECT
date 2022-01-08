import React from "react";
import SelectDep from "./selectDep";
import SelectArr from "./selectArr";
import NumOfSeats from "./numOfSeats";
import ArrivalSeats from "./arrivalSeats";
import DepartureSeats from "./departureSeats";
import ReservationSummary from "./reservationSummary";
import SummaryConfirmation from "./summaryConfirmation";
import NeedToLogIn from './needToLogIn'
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
    bookingNumber: "#24366621"
  };

  logged = () =>{
    this.props.logged();
    this.setState({
      reservationSummary:false,
      depSeat:true
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
    this.setState({
      returnFlight: true,
      returnFlights: [
        {
          flightNumber: 1213,
          from: "sad",
          to: "happy",
          departureDate: "2021-12-24T01:34:00.000Z",
          arrivalDate: "2021-12-24T13:34:00.000Z",
          numOfEconomySeatsAvailable: 12,
          numOfBusinessSeatsAvailable: 33,
          numOfFirstClassSeatsAvailable: 44,
          __v: 0,
          basePrice: 10,
        },
      ],
      departureFlight: {
        flightNumber: 1211,
        from: "happy",
        to: "sad",
        departureDate: "2021-12-18T01:34:57.000Z",
        arrivalDate: "2021-12-18T01:34:57.000Z",
        numOfEconomySeatsAvailable: 12,
        numOfBusinessSeatsAvailable: 33,
        numOfFirstClassSeatsAvailable: 44,
        __v: 0,
        basePrice: 12,
      },
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
  };
  onSubmit2 = (e) => {
    //after choosing return flight
    e.preventDefault();
    this.setState({
      arrivalFlight: {
        flightNumber: 1213,
        from: "happy",
        to: "sad",
        departureDate: "2021-12-24T01:34:00.000Z",
        arrivalDate: "2021-12-24T13:34:00.000Z",
        numOfEconomySeatsAvailable: 12,
        numOfBusinessSeatsAvailable: 33,
        numOfFirstClassSeatsAvailable: 44,
        __v: 0,
        basePrice: 10,
      },
      chooseSeat: true,
      returnFlight: false,
    });

    // axios.post('http://localhost:5000/flights/selectArrFlight'
    //     , { flightNumber: this.state.flightNumber }).then(res => {

    //     }
    //     )
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
      summary: true,
      returnFlight: false,
    });
  };

  onSubmit4 = (e) => {
    // after confirmation  --- must log in
    e.preventDefault();
    this.setState({
      depSeat: true,
      summary: false
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

  onSubmit7 = () => {

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
          !this.state.reservationSummary && this.props.userToken!==0 &&
          <div>
            <DepartureSeats
              numOfEconomySeats={this.state.numOfEconomySeats}
              numOfBusinessSeats={this.state.numOfBusinessSeats}
              numOfFirstClassSeats={this.state.numOfFirstClassSeats}
              availableEconomySeats={["34A", "34B", "34C", "30D", "30E"]}
              availableBusinessSeats={["07F", "07E", "08C", "22D"]}
              availableFirstClassSeats={["01A", "01E", "03B"]}
              onSubmit5={this.onSubmit5}
            />
          </div>}

        {this.state.depSeat &&
          !this.state.arrSeat &&
          !this.state.reservationSummary && this.props.userToken ===0 &&
          <div>
            <NeedToLogIn logged={this.logged}/>
          </div>}

        {this.state.arrSeat && !this.state.reservationSummary && <div>

          <ArrivalSeats
            numOfEconomySeats2={this.state.numOfEconomySeats2}
            numOfBusinessSeats2={this.state.numOfBusinessSeats2}
            numOfFirstClassSeats2={this.state.numOfFirstClassSeats2}
            availableEconomySeats2={["32A", "34B", "32C", "30D", "30E"]}
            availableBusinessSeats2={["09F", "23E", "08C", "22D"]}
            availableFirstClassSeats2={["02A", "01B", "03F"]}
            onSubmit6={this.onSubmit6} />
        </div>}

        {this.state.reservationSummary && <div>
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
            // EconomySeats={this.state.EconomySeats}
            // BusinessSeats={this.state.BusinessSeats}
            // FirstClassSeats={this.state.FirstClassSeats}
            // EconomySeats2={this.state.EconomySeats2}
            // BusinessSeats2={this.state.BusinessSeats2}
            // FirstClassSeats2={this.state.FirstClassSeats2}
            EconomySeats={["34A", "34B", "34C"]}
            BusinessSeats={["07F", "07E"]}
            FirstClassSeats={["01A"]}
            EconomySeats2={["32A", "34B", "32C"]}
            BusinessSeats2={["09F", "23E"]}
            FirstClassSeats2={["02A"]}
            bookingNumber={this.state.bookingNumber}
          />
        </div>}
      </div>
    );
  }
}
export default selectFlight;