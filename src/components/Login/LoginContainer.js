import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Form, FormControl,FormGroup, Col } from 'react-bootstrap';
import * as authActions from '../../actions/authActions';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }
    loginUser(e) {
        e.preventDefault();
        this.props.loginUser(this.state.email, this.state.password);
    }
    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handlePasswordChange (e) {
        this.setState({password: e.target.value});
    }
    render() {
        return (
            <Grid>
                <Col md={4} mdOffset={4}>
                    <Form horizontal onSubmit={this.loginUser}>
                        <FormGroup controlId="formHorizontalEmail">
                            <FormControl type="email" placeholder="Email" required onChange={this.handleEmailChange}/>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <FormControl type="password" placeholder="Password" required onChange={this.handlePasswordChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Grid>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loginUser: (email, password) => dispatch(authActions.loginUser(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);