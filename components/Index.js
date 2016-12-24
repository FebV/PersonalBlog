import React from 'react';
import PersonalInfo from './PersonalInfo';
import ArticleList from './ArticleList';
import ignitor from '../controllers/Ignitor';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.style = {};
        this.dir = null;
        this.tweakPage();
    }

    tweakPage() {
        const dir = ignitor.page.direction;
        this.dir = dir;
        if(dir === 'landscape') {
            this.style = {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
        }
    }

    render() {
        let result = null;
        if(this.dir === 'landscape')
            result =    <div style={this.style}>
                            <PersonalInfo/>
                            <ArticleList />
                        </div>;
        else
            result =    <div style={this.style}>
                            <ArticleList />
                            <br />                            
                            <PersonalInfo/>
                        </div>;
        return result;
    }
}