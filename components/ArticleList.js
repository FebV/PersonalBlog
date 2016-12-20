import React from 'react';
import ArticleInfo from './ArticleInfo';
import ignitor from '../controllers/Ignitor';

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
                    return <ArticleInfo key={index} image={ele.image} title={ele.title} time={ele.time} />;
                })}
            </div>
        );
    }
}