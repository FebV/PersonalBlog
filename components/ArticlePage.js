import React from 'react';
import ArticleDetail from './ArticleDetail';
import BackToIndex from './BackToIndex';

const ArticlePage = ({match}) => {
    return (
    <div>
        <BackToIndex />
        <ArticleDetail params={match.params} />
    </div>
    )
}

export default ArticlePage;