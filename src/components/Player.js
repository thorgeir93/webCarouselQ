'use strict';
import React from 'react'
import style from '../static/css/style.css'
import InputField from './InputField'
import Controller from './Controller'

//
// This is where the player can start play the songs.
//

export default class Player extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = { 
            "search_input" : ''
            //"queueID": ''
        }
    }

    handleChange( search_input, value ) {
        this.setState({ [search_input]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log( this.state.search_input )

        // I was just testing the spotify authentication page.
        // ... remove when finish.
        //client_id = 'c8d2d84b530348969d1583a2da2bf4d8'
        //response_type = 'code'
        //redirect_uri = 'http://192.168.1.47:3333/player'
        //req_url = 'https://accounts.spotify.com/authorize/?'
        //req_url = req_url + `client_id=${client_id}`
        //req_url = req_url + `&response_type=${response_type}`



        // TODO handle dirty inputs.

        return ''
    }

    render() {
        return (
            <div className={style.host}>
                <form>
                    <InputField name='search_input'
                                placeholder='Song, album or artist'
                                onChange={this.handleChange}/>
                    <input  
                        onClick={this.handleSubmit}
                        className={style.defaultButton}
                        type='button' 
                        value='Search'/>
                </form>
            </div>
        );
  }
}
                //<Controller></Controller>
