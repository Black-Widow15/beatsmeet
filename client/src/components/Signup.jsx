import React from 'react'
import ReactDOM from 'react-dom'


const background = {
    'backgroundColor': 'white'
}

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }

        this.handlePassword = this.handlePassword.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
    }

    handleUsername(e){
        this.setState({
            username: e.target.value,
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        console.log('submitted')
        e.preventDefault()
        // grab username and password from state and send to user schema        
    }

    closeSignupModal () {
      let modal = document.getElementById('Signup');
      modal.classList.remove('is-active');
    }

    render() {
        return (
            <form onSubmit ={this.handleSubmit}>
            <div id="Signup" className="modal">        
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box">
                <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" value = {this.state.username} onChange = {this.handleUsername}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Text input"  onChange = {this.handlePassword}/>
                            </div>
                            </div>
                    
                    <button className="button is-link">Submit</button>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={(e) => {this.closeSignupModal()}}></button>
            </div>
            </form>
        )
    }
}
export default Signup