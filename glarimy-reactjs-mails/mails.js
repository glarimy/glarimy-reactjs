import "./glarimy.css";
import React from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {createStore} from "redux";

function fetchMailsFromServer() {
    return fetch('mails.json').then(function(response){
            return response.json();
        }).then(function(mails){
            dispatch({
                type: 'fetched_mails',
                mails: mails
            });
        });
};

const store = createStore(reducer);
const { getState, dispatch } = store;

function reducer(state={folders:[], current:undefined}, action){
    switch(action.type){
        case 'fetched_mails':
            return action.mails;
        case "folder_changed":
            let newState = {};
            newState.folders = state.folders;
            newState.current = action.current;
            return newState;
        default:
            return {
                folders: [],
                current: undefined
            };
    }  
};

class Mail extends React.Component{
    render(){
        return(<tr><td>{this.props.mail.date}</td><td>{this.props.mail.from}</td><td>{this.props.mail.subject}</td></tr>);
    }
};

class MailList extends React.Component{
    render(){
        if(getState().current == undefined){
            return (<table><tr><td>Date</td><td>From</td><td>Subject</td></tr></table>);
        }
        return(
            <table>
                <tr><td>Date</td><td>From</td><td>Subject</td></tr>
                {
                    getState()
                    .folders
                    .find(folder => (folder.title === getState().current))
                    .mails.map(mail => (<Mail mail={ mail }></Mail>))
                }
            </table>);
    }
};

class Folder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "title": this.props.title
        }

        this.onClick = () => {
            console.log("Clicked on " + this.props.title);
            dispatch({
               "type": "folder_changed",
               "current": this.state.title
            })
        }
    }
    render(){
        return(<li onClick={this.onClick}>{ this.props.title }</li>);
    }
};

class FolderList extends React.Component{
    render(){
        return(<div><div>Folders</div><ul>{getState().folders.map(folder => (<Folder title={ folder.title } key={folder.isbn}></Folder>))}</ul></div>);
    }
};

class Mailer extends React.Component{
	constructor(props){
		super(props);
        store.subscribe( () => this.forceUpdate() );
        fetchMailsFromServer();
    }

	render(){
        return (
            <div>
                <h1>Glarimy Mailer</h1>
                <hr/>
                <table width='100%'>
                    <tr>
                        <td><FolderList/></td>
                        <td><MailList/></td>
                    </tr>
                </table>
            </div>
        );
	}
};

ReactDOM.render(<Mailer />, document.getElementById('mailer'));