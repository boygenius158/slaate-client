// app/login/validation/loginValidation.ts

// Function to validate the email
export const validateEmail = (email: string): boolean => {
    // Example validation: Email should be at least 3 characters long
    return email.length >= 3;
  };
  
  // Function to validate the password
  export const validatePassword = (password: string): boolean => {
    // Example validation: Password should be at least 6 characters long
    return password.length >= 6;
  };
  
  // Combine all validation logic
  export const validateLogin = (email: string, password: string) => {
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
  
    return {
      emailValid,
      passwordValid,
      isValid: emailValid && passwordValid,
    };
  };
  