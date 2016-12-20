import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ignitor from '../controllers/Ignitor';

export default class PersonalInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pi: {
                image: null,
                name: 'no name',
                birth: 'no birth',
                education: 'no education',
                email: 'no email'
            }
        };
        this.style = {};        
        this.tweakPage();
        this.getPersonalInfo();
    }

    tweakPage() {
        if(ignitor.page.direction === 'landscape') {
            this.style.width = '20%';
        }
    }

    async getPersonalInfo() {
        const pi = await ignitor.data.getPersonalInfo();
        this.setState({pi});
    }


    render() {
        return (
            <MuiThemeProvider>
            <Card style={this.style}>
                <CardMedia>
                    <img src={this.state.pi.image} />
                </CardMedia>
                <CardTitle
                    title="Personal Info"
                />
                <CardText>
                <p>{this.state.pi.name}</p>
                <p>{this.state.pi.birth}</p>
                <p>{this.state.pi.education}</p>
                <p>{this.state.pi.major}</p>
                <p>{this.state.pi.email}</p>
                </CardText>
            </Card>
            </MuiThemeProvider>
        );
    }
}