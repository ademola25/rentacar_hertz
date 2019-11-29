import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// import View
import LoginView from './LoginView';

// import service class
import { authActions } from '../../actions';
import { css } from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';

const override = css`
    display: block;
    margin: 0 auto;
`;
class LoginContainer extends Component {

    state={
        email:'',
        password:'',
        submitted:false
    }

    componentDidMount(){
    
    }

    handleChange = (e) => {
        const { name } = e.target;
        this.setState({[name] : e.target.value})
    }
    login = async(e,user) => {
        const { email, password,submitted } = this.state;
        const { dispatch } = this.props;
        this.setState({ submitted: !submitted })
        e.preventDefault();
            if (email !== '' && password !== '') {
                dispatch(authActions.userLogin(user));
            }
      }
    render(){
        const { authentication } = this.props;
        let isSuccess, clicked;
        if (authentication !== undefined) {
            isSuccess = authentication.loggedIn;
            clicked = authentication.loggingIn
        }
    if(isSuccess){
     return   <Redirect to='/' />
    }
        // {isSuccess ? <Redirect to='/' />:null}
        return (
            <>
             <CircleLoader
                css={override}
                size={150} // or 150px
                color={'#123abc'}
                loading={authentication.loggingIn}
              />
                <LoginView
                state={this.state}
                handleChange={this.handleChange}
                submit={this.login}/>
                </>
        );
    }
}
function mapStateToProps(state) {
    return {
        authentication: state.authentication
    }
}
export default connect(mapStateToProps)(LoginContainer);