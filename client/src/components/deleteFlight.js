import React from 'react'
import axios from 'axios'
class deleteFlight extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        id: ""
    };

    onChangeId = e => {
        this.setState({
            id: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("did we get here front end?", this.state.id);
        axios.post('http://localhost:5000/flights/deleteFlight'
            , {id:this.state.id}).then(res => {
                console.log('what about here?', res.data);
            }
            )
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            id:
                            <input type="text" name="name" value={this.state.id} onChange={this.onChangeId} />
                        </label>
                    </div>
                    <input type="submit" value="Delete" />
                </form>


            </div>
        )
    }


}

export default deleteFlight