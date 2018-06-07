import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Messages from './Messages.jsx'
import EventsAttending from './EventsAttending.jsx'

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      image: 'fake image url',
      displayName: '',
      musician: null,
      upcomingGigs: [],
      bio: '',
      photos: [],
      messages: [],
      eventsAttending: [{name: 'a'}, {name: 'b'}, {name: 'c'}]
    };
  }

  componentDidMount() {
    axios.get('/users', {
      params: { 
        username: 'makm' // MICHAEL: please change this when you do routing
      }
    })
    .then(({data}) => {
      this.setState({
        name: data[0].username,
        image: data[0].imageUrl,
        displayName: data[0].display_name,
        musician: data[0].musician,
        bio: data[0].bio
      })
    })
  }

  render() {
    return(
    <div>
      <section className="hero is-warning is-bold">
        <div className="hero-body">
          <div className="container">
          <div className="level-left">
            <div className="level-item">
              <figure className="image is-128x128 is-square">
                <img src={this.state.image}/>
              </figure>
            </div>
            <div className="level-item">
              <div>
                <h1 className="title">
                  {this.state.displayName}
                </h1><p></p>
                <h2 className="subtitle">
                  @{this.state.name}
                </h2>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section>
          <h2><strong>About me</strong></h2>
          <p>{this.state.bio}</p>
          <div className="columns">
            <Messages username={this.state.username}/>
            <EventsAttending username={this.state.username}/>
          </div>
      </section>
    </div>
    )
  }
}


export default User;