import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalDeleteOption extends Component {
    render() {
        return (
            <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Delete Option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Delete Option
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalDeleteOption;