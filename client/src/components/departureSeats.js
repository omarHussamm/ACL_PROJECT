import React from "react";
import logo from "../BongBoeing.png";
// import { Link } from "react-router-dom";

class departureSeats extends React.Component {
  onChangeFirstClassSeats = (e) => {
    this.setState({
      FirstClassSeats: e.target.value,
    });
  };
  onChangeBusinessSeats = (e) => {
    this.setState({
      BusinessSeats: e.target.value,
    });
  };
  onChangeEconomySeats = (e) => {
    this.setState({
      EconomySeats: e.target.value,
    });
  };

  state = {
    BusinessSeats: "",
    EconomySeats: "",
    FirstClassSeats: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    //choose dep seats
    this.props.onSubmit5(this.state.EconomySeats, this.state.BusinessSeats, this.state.FirstClassSeats);
  };

  render() {

    return (
      <>
        <div class="loginForm">
          <div>
            <br /> <br />
            <form class="signupForm bgwhite" onSubmit={this.onSubmit}>
              <fieldset>

                <h2 class="text-primary">Departure Seats</h2>
                write seats comma seperated ex: 01A,01B,01E
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label"> Economy Seats:</label>
                  <div class="col-sm-10">
                    <input type="text" value={this.state.EconomySeats} onChange={this.onChangeEconomySeats} class="form-control" placeholder="Economy Seats" />
                    choose {this.props.numOfEconomySeats} seat(s) from {this.props.availableEconomySeats.toString()}
                  </div>
                </div>
                <br />
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Business Seats:</label>
                  <div class="col-sm-10">
                    <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} class="form-control" placeholder="Business Seats" />
                    choose {this.props.numOfBusinessSeats} seat(s) from {this.props.availableBusinessSeats.toString()}
                  </div>
                </div>
                <br />
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">First-Class Seats:</label>
                  <div class="col-sm-10">
                    <input type="text" value={this.state.passport} onChange={this.onChangePassport} class="form-control" placeholder="First-Class Seats" />
                    choose {this.props.numOfFirstClassSeats} seat(s) from {this.props.availableFirstClassSeats.toString()}
                  </div>
                </div>
                <br />
                <button type="submit" class="btn btn-primary centre">Choose Seats</button>

              </fieldset>
            </form>
          </div>
          <hr />
        </div>
        <div class="loginForm">
          <img src={logo} alt="boeing seats" width="800" height="300" />
        </div>
      </>
    );
  }
}

export default departureSeats;