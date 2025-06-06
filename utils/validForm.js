


const validForm = (form) => {
    const { email, password } = form;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return {
            isValid: false,
            input: 'email',
            message: "Please enter a valid email"
        };
    }


    if(!(/[A-Z]/.test(password))){
        return {
            isValid: false,
            input: 'password',
            message: "❌ Uppercase letter"
        }
    }

    if(!(/[a-z]/.test(password))){
        return {
            isValid: false,
            input: 'password',
            message: "❌ Lowercase letter"
        }
    }

    if(!(/\d/.test(password))){
        return {
            isValid: false,
            input: 'password',
            message: "❌ Number"
        }
    }

    if(!(password.length >= 6)){
        return {
            isValid: false,
            input: 'password',
            message: "< 6 character"
        }
    }


    return {
        isValid: true,
        input: '',
        message: ''
    }
}

export default validForm
