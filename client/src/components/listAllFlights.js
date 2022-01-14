import React from 'react'
import axios from 'axios'
import Flight from './flight'
import AdminLinks from './adminLinks'
import DeleteQuery from './deleteQuery'
import UpdateQuery from './updateQuery'
class deleteFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount = () => {
        axios.get("http://localhost:5000/flights").then(res => {
            const flights = res.data;
            this.setState({
                flights: flights,
                mounted: true
            });
        });
    }

    state = {
        flights: [],
        update: false,
        delete: false,
        flight: {},
        mounted: false
    }

    onUpdate = (e, flight) => {
        e.preventDefault();
        this.setState({
            flight: flight,
            update: true
        })

    }

    onDelete = (e, flight) => {
        e.preventDefault();
        this.setState({
            flight: flight,
            delete: true
        })

    }


    render() {
        return (
            <div>
                <AdminLinks />


                {this.state.update &&
                    <>
                        <UpdateQuery flight={this.state.flight} />
                    </>
                }

                {this.state.delete &&
                    <>
                        <DeleteQuery flight={this.state.flight} />
                    </>
                }

                {!this.state.delete && !this.state.update && <>

                    {!this.state.mounted &&
                        <h1>Loading...</h1>
                    }

                    {this.state.mounted &&
                        <>
                            <br />
                            <ul class="ulnodots ulcentre">
                                {this.state.flights.map(flight => {
                                    return (
                                        <li key={flight._id}>
                                            <Flight
                                                flight={flight}
                                                user={'admin'}
                                                onUpdate={this.onUpdate}
                                                onDelete={this.onDelete}
                                            />
                                        </li>
                                    );
                                })
                                }
                            </ul>
                        </>}
                </>}
            </div>
        )
    }
}

export default deleteFlight