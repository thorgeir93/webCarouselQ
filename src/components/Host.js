'use strict';
import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import style from '../static/css/style.css'

export default class Host extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            "groupName": '',
            "yourName" : ''
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

    handleSubmit(event) {
        console.log( this.state.groupName );
        console.log( this.state.yourName );
        event.preventDefault();
        // Register (use the api) 
    }

    render() {
        return (
            <div className={style.host}>
                <h1>Create a group</h1>
                <form> 
                    <InputField name='groupName' 
                                placeholder='Group name'
                                onChange={this.handleChange}/>
                    
                    <InputField name='yourName' 
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
