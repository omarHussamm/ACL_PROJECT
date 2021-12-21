import React from "react";
import logo from "../BongBoeing.png";
import { Link } from "react-router-dom";

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
      <div>
        <h1>Departure Seats</h1>
        <div>
          <form onSubmit={this.onSubmit}>
            write seats comma seperated ex: 01A,01B,01E

            <div>
              <label>
                Economy Seats:
                <input type="text" name="name" value={this.state.EconomySeats} onChange={this.onChangeEconomySeats} />
                choose {this.props.numOfEconomySeats} seat(s) from {this.props.availableEconomySeats.map(res => res + " ,")}
              </label>
            </div>
            <div>
              <label>
                Business Seats:
                <input type="text" name="name" value={this.state.BusinessSeats} onChange={this.onChangeBusinessSeats} />
                choose {this.props.numOfBusinessSeats} seat(s) from {this.props.availableBusinessSeats.map(res => res + " ,")}
              </label>
            </div>
            <div>
              <label>
                First-Class Seats:
                <input type="text" name="name" value={this.state.FirstClassSeats} onChange={this.onChangeFirstClassSeats} />
                choose {this.props.numOfFirstClassSeats} seat(s) from {this.props.availableFirstClassSeats.map(res => res + " ,")}
              </label>
            </div>


            <input type="submit" value="Submit Seats" />
          </form>
        </div>
        <hr />
        <img src={logo} width="1600" height="550" />
      </div>
    );
  }
}

export default departureSeats;