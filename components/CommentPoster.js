import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ignitor from '../controllers/Ignitor';

export default class CommentPoster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }

    async postComment() {
        this.setState({content: ''});    
        const result = await ignitor.data.postComment(this.props.params.articleId, this.state.content);
        dispatchEvent(new Event('postComment'));
    }

    handleContentChange(e, value) {
        this.setState({content: value});
    }


    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
            <MuiThemeProvider>
            <Card style={{width: '70%'}}>
                <CardHeader
                    title="Post My Comment"
                />
                <TextField
                onChange={this.handleContentChange.bind(this)}
                style={{marginLeft: '2.5%', width: "95%"}}
                hintText="Post My Comment"
                multiLine={true}
                fullWidth={true}
                value={this.state.content}
                /><br />
                <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <RaisedButton style={{right: '10px'}} primary={true} label="POST" onClick={this.postComment.bind(this)} />
                </CardActions>
            </Card>
            </MuiThemeProvider>
            </div>
        );
    }
}