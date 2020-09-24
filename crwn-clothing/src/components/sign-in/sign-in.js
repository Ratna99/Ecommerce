import React, { Component } from 'react'

import FormInput from '../form-input/form-input'
import './sign-in.scss'
import CustomButton from '../custom-button/custom-button'

// import { signInWithGoogle } from '../../firebase/firebase.util'
import { auth, signInWithGoogle } from '../../firebase/firebase.util'

export default class SignIn extends Component {

    state ={
        email: '',
        password: ''
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

        this.setState({email: '', password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
