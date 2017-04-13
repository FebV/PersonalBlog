import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import util from '../controllers/UtilController';
import ignitor from '../controllers/Ignitor';

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        addEventListener('postComment', e => {
            this.getCommentList();
        });
    }

    componentDidMount() {
        this.getCommentList();        
    }

    async getCommentList() {
        const result = await ignitor.data.getCommentByArticleId(this.props.params.articleId);
        this.setState({list: result});
    }

    render() {
        const list = this.state.list.map(ele => {
            return (
                <div key={ele._id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <MuiThemeProvider>
                <Card style={{width: '70%', fontFamily: 'Roboto, Microsoft Yahei'}}>
                    <CardHeader
                        title={util.unixToReadableTime(ele.time)}
                    />
                    <CardText>
                        {ele.content}
                    </CardText>
                </Card>
                </MuiThemeProvider>
                <br />
                </div>
            );
        })
        return (
            <div >
            {list}
            </div>
        );
    }
}