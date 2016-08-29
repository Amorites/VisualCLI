/**
 * @file 添加按钮
 * @date 2016/08/25
 */

import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class AddCommandDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {open: isOpen, handleClose} = this.props;
        const actions = [
            <FlatButton
                label="ok"
            />,
            <FlatButton
                label="cancel"
                onTouchTap={handleClose}
            />,
        ];

        return (
            <Dialog
                title="Add Command"
                actions={actions}
                modal={true}
                open={isOpen}
                onRequestClose={handleClose}
            >
                <TextField
                    floatingLabelText="Path To Execute Command"
                />
                <TextField
                    floatingLabelText="COMMAND"
                />

            </Dialog>
        );
    }
}
