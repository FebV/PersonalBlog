import injectTapEventPlugin from 'react-tap-event-plugin';
import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import PersonalInfo from './components/PersonalInfo';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import ignitor from './controllers/Ignitor';
import './static/main.css';
import './static/mui.css';

injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.style = {};
        this.tweakPage();
    }

    tweakPage() {
        this.style = {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    }

    render() {
        return (
            <div style={this.style}>
                <PersonalInfo/>
                <ArticleList />
            </div>
        );
    }
}

console.log(ignitor.page.direction);

const li = () => <Link to={`/articles/1`}>link</Link>

ReactDOM.render(
    (
        <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="articles/:articleId" component={ArticlePage} />
        </Router>
    ),
    document.getElementById('root')
);