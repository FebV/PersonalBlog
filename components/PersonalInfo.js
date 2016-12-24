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
            },
        };
        this.img = null;
        this.dir = 'portrait';
        this.style = {};
        this.tweakPage();
        this.getPersonalInfo();
    }

    tweakPage() {
        const dir = ignitor.page.direction;
        this.dir = dir;
        if(dir === 'landscape') {
            this.style.width = '20%';
        }
        if(dir === 'portrait') {
        }
    }

    async getPersonalInfo() {
        const pi = await ignitor.data.getPersonalInfo();
        this.setState({pi});
    }


    render() {
        let result = null;
        if(this.dir === 'landscape')
            result =    <div>
                        <CardMedia>
                            <img src={this.state.pi.image} />
                        </CardMedia>
                        <CardTitle title="Personal Info" />
                        </div>;
        else
            result = <CardHeader avatar={this.state.pi.image} title="Personal Info"/>;
        return (
            <MuiThemeProvider>
            <Card >
                {result}
                <CardText>
                <p>{this.state.pi.name}</p>
                <p>{this.state.pi.birth}</p>
                <p>{this.state.pi.education}</p>
                <p>{this.state.pi.major}</p>
                <p>{this.state.pi.email}</p>
                <p>{this.state.pi.github}</p>
                </CardText>
            </Card>
            </MuiThemeProvider>
        );
    }
}