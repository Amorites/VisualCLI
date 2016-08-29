import React, {Component, PropTypes} from "react";
import {GridList} from "material-ui/GridList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import AddCommandDialog from "../components/AddCommandDialog";
import * as actions from "../actions/actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 850,
        height: 850,
        overflowY: 'auto',
        marginBottom: 24,
    },
    addButton: {
        width: 200,
        height: 200,
        margin: 'auto',
    },
    addButtonIcon: {
        fontSize: 90,
    },
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {openDialog: false};

        this.openAddCommandDialog = this.openAddCommandDialog.bind(this);
        this.closeAddCommandDialog = this.closeAddCommandDialog.bind(this);
    }

    openAddCommandDialog() {
        this.setState({openDialog: true});
    }

    closeAddCommandDialog() {
        this.setState({openDialog: false});
    }

    render() {
        const {dispatchActions} = this.props;
        return (
            <MuiThemeProvider>
                <div style={styles.root}>
                    <GridList
                        cellHeight={200}
                        cols={4}
                        padding={5}
                        style={styles.gridList}
                    >
                        <RaisedButton style={styles.addButton} primary={true} onTouchTap={this.openAddCommandDialog}
                                      icon={<i className="fa fa-plus" style={styles.addButtonIcon}></i>}/>
                        <AddCommandDialog open={this.state.openDialog} handleClose={this.closeAddCommandDialog}/>
                    </GridList>
                </div>
            </MuiThemeProvider>
        );
    }
}
function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchActions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
