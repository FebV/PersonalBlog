import injectTapEventPlugin from 'react-tap-event-plugin';
import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Index from './components/Index';
import ArticlePage from './components/ArticlePage';
import ignitor from './controllers/Ignitor';
import './static/main.css';
import './static/mui.css';

injectTapEventPlugin();


console.log(ignitor.page.direction);

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Index} />
            <Route path="articles/:articleId" component={ArticlePage} />
        </Router>
    ),
    document.getElementById('root')
);