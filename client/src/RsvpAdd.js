import React, { Component } from 'react';

class RsvpAdd extends Component{
    addRsvpData=(e)=>{
        e.preventDefault();
        fetch('/rsvp/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rsvpID: e.target.value,
                rsvp_person: e.target.value,
                rsvp_going: e.target.value,
            }),
        })
            .then(this.props.rsvpListUpdate())
    };

    render() {
        return(
            <div>
                <form onSubmit={this.addRsvpData}>
                    <label htmlFor="rsvpID">RSVP ID:</label>
                    <input type="text" id="rsvpID" name="rsvpID"/>
                    <label htmlFor="rsvp_person">Name:</label>
                    <input type="text" id="rsvp_person" name="rsvp_person"/>
                    <label htmlFor="rsvp_going">Are They Going:</label>
                    <input type="checkbox" id="rsvp_going" name="rsvp_going"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default RsvpAdd;