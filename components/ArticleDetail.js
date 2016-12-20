import React from 'react';
import ignitor from '../controllers/Ignitor';

export default class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getArticleDetail();
    }

    async getArticleDetail() {
        let article = null;
        article = await ignitor.data.getArticleDetail(1);
        this.setState({
            article
        });
    }

    render() {
        return <p>this.state.article.content</p>;
    }
}