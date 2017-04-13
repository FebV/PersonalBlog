import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CommentPoster from './CommentPoster';
import CommentList from './CommentList';

export default class ArticleComment extends React.Component {
    constructor(props) {
        super(props);
        this.style = {};
        this.tweak();
    }

    tweak() {
    }

    render() {
        return (
            <div>
                <CommentList params={this.props.params} />
                <CommentPoster params={this.props.params} />
            </div>
        );
    }
}