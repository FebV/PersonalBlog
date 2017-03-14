import injectTapEventPlugin from 'react-tap-event-plugin';
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './components/Index';
import ArticlePage from './components/ArticlePage';
import ignitor from './controllers/Ignitor';
import './static/main.css';
import './static/mui.css';
import 'whatwg-fetch';

injectTapEventPlugin();


ReactDOM.render(
    (
        <Router>
            <div>
                <Route exact path="/" component={Index} />
                <Route path="/articles/:articleId" component={ArticlePage} />
            </div>
        </Router>
    ),
    document.getElementById('root')
);