import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar, Form, FormGroup, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as updateDataActions from '../../../actions/updateDataActions';

class ModalNewCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCategory: '',
        };

        this.handleNewCategory = this.handleNewCategory.bind(this);
    }

    handleNewCategory(e) { this.setState({newCategory: e.target.value}); }

    addNewCategory(e) {
        e.preventDefault();
        if (this.state.newCategory !== '') {
            this.props.addCategory(this.props.project.projectKey, this.state.newCategory);
            this.setState({newCategory: ''});
            this.props.onHide();
        }
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.addNewCategory.bind(this)}>
                        <FormGroup controlId="newCategory">
                            <FormControl type="text" placeholder="New Category"
                                         value={this.state.newCategory}
                                         onChange={this.handleNewCategory}/>
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button bsStyle="primary" type="submit">Add</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        project: state.project
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addCategory: (projectKey, data) => dispatch(updateDataActions.addCategory(projectKey, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalNewCategory);