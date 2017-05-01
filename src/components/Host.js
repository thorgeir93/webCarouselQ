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
        return !( /^[a-zA-Z]+$/.test(username) );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log( this.state.username );

        if (this.notValidUsername( this.state.username )) {
            // TODO handle a valid username.
            console.log( 'Invalid user name. Allowed letters '+
                         'are between a-z or A-Z.' )
        }

        // Register the user
        //
       
        // TODO     Use env variable for the url!
        //          It should be a heroku server.
        let url = 'http://192.168.1.47:3000'

        // TODO let this work. understand promises.
        let promiseFetch = fetch( `${url}/api/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                'userName': this.state.username,
                'owner': true
            })
        })

        console.log( 'promiseFetch' ) 
        console.log( promiseFetch ) 
        console.log( 'going to do resolve.' ) 
        
        // Throw error if the status code in not valid.
        promiseFetch.then( res => {
            console.log('TODO implement the status code check.')
            console.log(res)
            return res 
            if( res.status == 201 ){ 
                return res; 
            } 
            else {
                let e = new Error(res.statusText)
                e.response = res
                throw e
            }  
        })
      
        console.log('first then done')

        // Return a JSON result. 
        promiseFetch.then( res => res.json() )
        
        console.log('second then done')
    
        // Return the error if the promise rejects.
        promiseFetch.catch( e => e )

        console.log('the catch is done')
        console.log( promiseFetch )

        console.log( data )

        // queueID
        let queueID = 'test1'
        this.setState({'queueID': queueID})
        
        console.log( 'this.props.history' )
        console.log( this.props.history )

        // Go to next path
        // should it be '/queueID/player'?
        this.props.history.push('/player') 
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
