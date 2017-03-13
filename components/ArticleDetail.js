import React from 'react';
import ignitor from '../controllers/Ignitor';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {markdown} from 'markdown';
import BackToIndex from './BackToIndex';

export default class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article:{
                content: 'here should be content'
            },
            html:''
        };
        this.style;
        this.tweakPage();
        this.getArticleDetail(this.props.params.articleId);
    }

    tweakPage() {
        const dir = ignitor.page.direction;
        this.dir = dir;
        if(dir === 'landscape')
            this.style = {
                width: '70%',
            }
    }

    async getArticleDetail(articleId) {
        let article = null;
        article = await ignitor.data.getArticleDetail(articleId);
        this.setState({
            article
        });
        const html = markdown.toHTML(this.state.article.content);
        this.setState({
            html,
            time: ignitor.util.unixToReadableTime(this.state.article.time)
        });
        
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80%'}}>
            <MuiThemeProvider>
            <Card style={this.style}>
                <CardText dangerouslySetInnerHTML={{__html: this.state.html}}></CardText>
                <CardText>{this.state.time}</CardText>
            </Card>
            </MuiThemeProvider>
            </div>
        );
    }
}