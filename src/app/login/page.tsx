"use client"

import useLoginPresenter from './presenters/LoginFormPresenter';
import LoginForm from './ui/LoginForm';


const LoginPage = () => {
    const { email, password, validationErrors, handleEmailChange, handlePasswordChange, handleSubmit } = useLoginPresenter();

    return (
        <div>
            <LoginForm
                email={email}
                password={password}
                validationErrors={validationErrors}
                onEmailChange={handleEmailChange}
                onPasswordChange={handlePasswordChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default LoginPage;
