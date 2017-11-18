import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
            <div className="col-md-3">
            <form>
            <div className="form-group">
            <h1>Login</h1>
            </div>
            <div className="form-group">
            <TextField
        className="form-control"
        type="text"
        id="username"
        label="username"
        placeholder="Enter Username"
        value={this.state.username}
        onChange={(event) => {
            this.setState({
                username: event.target.value
            });
        }}
        />
        </div>

        <div className="form-group">
            <TextField
        className="form-control"
        type="password"
        id="password"
        label="password"
        placeholder="Enter Password"
        value={this.state.password}
        onChange={(event) => {
            this.setState({
                password: event.target.value
            });
        }}
        />
        </div>
        <div className="form-group">
            <button
        className="btn btn-primary"
        type="button"
        onClick={() => this.props.handleSubmit(this.state)}>
        Submit
        </button>
        </div>
        </form>
        </div>
        </div>
    );
    }
}

export default Login;