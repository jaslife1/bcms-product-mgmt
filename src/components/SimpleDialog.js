import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';


function BCMSDialog(props) {
  const { onClose, open, title, content} = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog 
        onClose={handleClose} 
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle 
            id="alert-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText  id="alert-dialog-description">
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
            
    </Dialog>
  );
}

BCMSDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,

};

export default function SimpleDialog(props) {
  const {open, title, content, onClose} = props;

  return (
    <BCMSDialog
        open={open}
        onClose={onClose}
        title={title}
        content={content}
    />
  );
}