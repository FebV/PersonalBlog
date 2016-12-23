import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class BackToIndex extends React.Component{
    render() {
        return (
            <MuiThemeProvider>
            <IconButton tooltip="Back To Index">
                <FontIcon className="muidocs-icon-action-home back-to-index" />
            </IconButton>
            </MuiThemeProvider>
        );
    }
}