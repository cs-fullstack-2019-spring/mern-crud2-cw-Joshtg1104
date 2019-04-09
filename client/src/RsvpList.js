import React, { Component } from 'react';
import RsvpAdd from './RsvpAdd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class RsvpList extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:[],
        };
        this.rsvpListUpdate();
    }

    rsvpListUpdate=()=>{
      fetch('/rsvp/list')
          .then(data=>data.json())
          .then(jsonData=>this.setState({list:jsonData}));
    };

    render() {
        return (
            <div>
                <Router>
                    <Link to="/rsvp">Home</Link>
                    <Link to="/rsvp/add">Add New RSVP</Link>
                    <Route path='/rsvp/add'/>
                </Router>
            </div>
        );
    }
}

export default RsvpList;
