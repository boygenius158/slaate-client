"use client"

// app/login/presenters/LoginFormPresenter.ts
import { useState } from 'react';
import { validateLogin } from '../validation/loginValidation'; // Import validation logic
import { loginUser } from '../services/authService';
// import loginUser from '../services/authService';

const useLoginPresenter = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validationErrors, setValidationErrors] = useState<{
        emailValid: boolean,
        passwordValid: boolean
    }>({
        emailValid: true,
        passwordValid: true,
    });

    // onChange handler for email
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    // onChange handler for password
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission
        const { emailValid, passwordValid, isValid } = validateLogin(email, password);

        setValidationErrors({
            emailValid,
            passwordValid,
        });

        if (isValid) {
            // Call your login service or API here (e.g., authService.loginUser())
            console.log('Logging in...');
            await loginUser(email, password);
        } else {
            console.log('Validation failed');
        }
    };

    return {
        email,
        password,
        validationErrors,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
    };
};

export default useLoginPresenter;
