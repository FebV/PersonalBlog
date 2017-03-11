import React from 'react';
import ArticleDetail from './ArticleDetail';
import BackToIndex from './BackToIndex';

const ArticlePage = ({params}) => {
    return (
    <div>
        <BackToIndex />
        <ArticleDetail params={params} />
    </div>
    )
}

export default ArticlePage;