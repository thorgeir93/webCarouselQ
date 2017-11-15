'use strict';
import React from 'react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import style from '../static/css/style.css'

// TODO
//      -   Register the username and get queueID back.
//      -   After register, go to the core webpage.

export default class Host extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { 
            "username" : '',
            "queueID": ''
        }
    }
   
    // TODO clear up inputs after submitting.
    //      i thing we can pass the event into
    //      the handleChange here below. and track
    //      the inputs elements. When submitting.
    //      we clear the event elements value.

    handleChange( name, value ) {
        this.setState({ [name]: value });
    }

    notValidUsername( username ){
        return !( /^[a-zA-Z]+[0-9]*$/.test(username) );
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log( this.state.username );
        if (this.notValidUsername( this.state.username )) {
            // TODO handle a valid username.
            alert( 'Invalid user name. Allowed letters '+
                         'are between a-z or A-Z.' )
            return;
        }

        var baseUrl = window.location.origin;        

        let promiseFetch = fetch( `${baseUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                'userName': this.state.username,
                'owner': true
            })
        }).then((response) => {
            console.log(response)
            if(response.ok){
                this.state.queueID = response.queueID;
                console.log(response.queueID);
                location = baseUrl + "/api/spotify/login";
            }
        }, (error) => {
            alert(error);
        })
    }

    render() {
        return (
            <div className={style.host}>
                <h1>Create a group</h1>
                <form> 
                    <InputField name='username' 
                                placeholder='Your name'
                                onChange={this.handleChange}/>

                    <input  
                        onClick={this.handleSubmit}
                        className={style.defaultButton}
                        type='button' 
                        value='Sumbit'/>
                </form>
            </div>
        );
  }
}
                   // <div className={style.inputfieldContainer}>
                   //     <input  name='groupName' 
                   //             className={style.defaultInput}
                   //             placeholder='Group name'
                   //             value={this.state.groupName}
                   //             onChange={this.handleChange}/>
                   // </div>

            //<p>Start the party by create a group for other members to join.</p>


