import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ignitor from '../controllers/Ignitor';

export default class PersonalInfo extends React.Component{
    constructor(props) {
        super(props);
        this.style = {};
        if(ignitor.responsiveController.direction === 'landscape') {
            this.style.width = '25%';
        }
    }

    render() {
        return (
            <MuiThemeProvider>
            <Card style={this.style}>
                <CardMedia>
                    <img src="images/selfie.jpg" />
                </CardMedia>
                <CardTitle
                    title="Personal Info"
                />
                <CardText>
                <p>Zhao Yifan</p>
                <p>1996 / 02</p>
                <p>Studying in <a href="http://www.sdu.edu.cn/">Shandong University</a></p>
                <p>Major in Software Engineering</p>
                </CardText>
            </Card>
            </MuiThemeProvider>
        );
    }
}