import React from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx'
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            loggedin: false,
            username: ''
        }

        this.launchLoginModal = this.launchLoginModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);
        this.launchSignupModal = this.launchSignupModal.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
        this.handleLoggedin = this.handleLoggedin.bind(this)
    }

    launchLoginModal () {
      let modal = document.getElementById('Login');
      modal.classList.add('is-active');
    }

    closeLoginModal () {
      let modal = document.getElementById('Login');
      modal.classList.remove('is-active');
    }

    launchSignupModal () {
        let modal = document.getElementById('Signup');
        modal.classList.add('is-active');
      }
  
    closeSignupModal () {
    let modal = document.getElementById('Signup');
    modal.classList.remove('is-active');
    }

    handleLoggedin (e) {
        this.setState({
            loggedin: !this.state.loggedin,
            username: e.username
        }, () => {
            this.props.handleLogin(this.state.username)
        })
  
    }



    render () {
        return (
        <nav className="navbar is-fixed-top">
            <div className="navbar-menu">
                <div className="navbar-start">
                <NavLink className = "navbar-link" to = '/'>
                    Home
                </NavLink>
                <div className="navbar-item has-dropdown is-hoverable">
                    <NavLink className="navbar-link" to = '/'>
                    Events
                    </NavLink>
                    <div className="navbar-dropdown is-boxed">
                    <NavLink className="navbar-link" to = '/create'>
                    Create an Event
                    </NavLink>
                    <NavLink className="navbar-link" to = '/user'>
                    Profiles
                    </NavLink>
                    <NavLink className="navbar-link" to = '/event'>
                    Event Page
                    </NavLink>
                    <hr className="navbar-divider"/>
                    <NavLink className="navbar-link" to = '/'>
                    Events
                    </NavLink>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    {this.state.loggedin ? 
                    (<div className = "navbar-item">{this.state.username}</div>)
                    :
                    (<div className="field is-grouped">
                    <a className="navbar-item" href="#" onClick={(e) => (this.launchLoginModal())}>
                        Login
                    </a>
                    <a className="navbar-item" href="#" onClick = {(e) => this.launchSignupModal()}>
                        Sign up
                    </a>
                    </div>)   
                    }
                </div>
                </div>
            </div>
            
            <Login handleLoggedin = {this.handleLoggedin} closeLoginModal={this.closeLoginModal} />
            <Signup handleLoggedin = {this.handleLoggedin}  closeSignupModal={this.closeSignupModal} />
            
            </nav>
        )
    }
}

export default NavBar