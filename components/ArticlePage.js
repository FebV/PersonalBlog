import React from 'react';
import ArticleDetail from './ArticleDetail';
import BackToIndex from './BackToIndex';
import ArticleComment from './ArticleComment';

const ArticlePage = ({match}) => {
    return (
    <div>
        <BackToIndex />
        <ArticleDetail params={match.params} />
        <ArticleComment params={match.params} />
    </div>
    )
}

export default ArticlePage;