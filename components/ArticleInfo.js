import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class ArticleInfo extends React.Component {
    constructor(props) {
        super(props);
        this.image = null;
        if(this.props.image)
            this.image = <CardMedia>
                        <img src={this.props.image} />
                    </CardMedia>;
        this.style = {};
        this.tweakPage();
    }

    tweakPage() {

    }

    render() {
        return (
            <MuiThemeProvider>
            <Card style={this.style}>
                {this.image}
                <CardTitle title={this.props.title} />
                <CardText>
                    {this.props.content}
                </CardText>
            </Card>
            </MuiThemeProvider>
        );
    }
}