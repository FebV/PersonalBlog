import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { greenA200, red500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';

export default class BackToIndex extends React.Component{
    render() {
        return (
            <Link to="/">
            <MuiThemeProvider>
            <IconButton
                iconClassName="muidocs-icon-action-home back-to-home-icon"
                iconStyle={{
                    color: red500,
                    hoverColor: greenA200,
                    fontSize: 40,
                    position: "relative",
                    right: 7,
                    bottom: 8,
                    hoverColor: greenA200
                }}
                className="back-to-home"
                touch={true}
                tooltip="Bact To Home"
                tooltipPosition="bottom-center"
            />
            </MuiThemeProvider>
            </Link>
        );
    }
}