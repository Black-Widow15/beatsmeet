import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Attendee from './Comment.jsx';


class AttendeeList extends React.Component {
  constructor (props) {
  	super(props);
    // Props will include a array of attendee objects.
    // attendee object properties: username, avatarUrl

  }

  componentDidMount() {

  }

  render () {
    return (<div>
    {
      this.props.attendees.map( (attendee) => {
        return (
          <div>
          <Attendee 
            username={attendee.username}
            avatarUrl={attendee.avatarUrl}
          />
          </div>
        )
      })
    }
    </div>)
  }
}

export default AttendeeList
