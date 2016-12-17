import injectTapEventPlugin from 'react-tap-event-plugin';
import React from "react";
import ReactDOM from 'react-dom';
import PersonalInfo from './components/PersonalInfo';
import ArticleList from './components/ArticleList';
import ignitor from './controllers/Ignitor';

injectTapEventPlugin();

class App extends React.Component {
    render() {
        return (
            <div>
                <PersonalInfo />
                <ArticleList />
            </div>
        );
    }
}

console.log(ignitor.responsiveController.direction);


ReactDOM.render(<App />, document.getElementById('root'));