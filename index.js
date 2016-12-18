import injectTapEventPlugin from 'react-tap-event-plugin';
import React from "react";
import ReactDOM from 'react-dom';
import PersonalInfo from './components/PersonalInfo';
import ArticleList from './components/ArticleList';
import ignitor from './controllers/Ignitor';

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


ReactDOM.render(<App />, document.getElementById('root'));