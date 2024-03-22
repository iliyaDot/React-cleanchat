import React, { Component } from 'react';
import Heading from './Heading';
import Body from './Body';
import Footer from './Footer';

export default class CleanChat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'chat',
            chatsList: [
                { type: 'sent', message: 'Good morning, sir. What can I do for you?', time: '11:37:08 am' },
                { type: 'receive', message: 'Well, I am just looking around.', time: '11:39:57 am' },
                { type: 'sent', message: 'If necessary, please ask me.', time: '11:40:10 am' },
            ],
            gravatar: {
                user1: "https://bootdey.com/img/Content/avatar/avatar1.png",
                user2: "https://bootdey.com/img/Content/avatar/avatar2.png",
            }
        };


        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(message) {
        console.log(message);
        // Implementation for handling the submit action
        this.setState(state => ({
            ...state,
            chatsList: [
                ...state.chatsList,
                { type: 'sent', message, time: new Date().toLocaleTimeString() } // Correctly formatted object
            ]
        }));
    }


    render() {
        return (
            <div className="container bootstrap snippets">
                <div className="col-md-7 col-xs-12 col-md-offset-2">
                    <div className="panel" id="chat">
                        <Heading title={this.state.title} />
                        <Body chatsList={this.state.chatsList} gravatar={this.state.gravatar} />
                        {/* Use your custom Footer component and pass the handlesubmit prop correctly */}
                        <Footer handleSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}
