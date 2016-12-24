import React from 'react';
import ArticleInfo from './ArticleInfo';
import ignitor from '../controllers/Ignitor';
import { Link } from 'react-router';

export default class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.style = {};
        this.state = {
            articleList: []
        };
        this.tweakPage();
        this.getArticleList();
    }

    tweakPage() {
        const dir = ignitor.page.direction;
        if(dir === 'landscape')
        this.style = {
            width: '50%',
            height: '50%'
        }
    }

    async getArticleList() {
        const articleList = await ignitor.data.getArticleList();
        this.setState({articleList});
        console.log(this.state);
    }

    render() {
        return (
            <div style={this.style}>
                {this.state.articleList.map((ele, index) => {
                    return <Link key={1} to={`articles/1`}><ArticleInfo key={ele.id} image={ele.image} title={ele.title} time={ele.time}/></Link>;
                })}
            </div>
        );
    }
}