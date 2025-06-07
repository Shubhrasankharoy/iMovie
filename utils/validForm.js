


const validForm = (form) => {
    const { isSignInForm, name, email, password } = form;

    if(!isSignInForm && (name.trim() == '' || /\d/.test(name))){
        return {
            invalid: true,
            input: 'name',
            message: "Please enter a valid name"
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return {
            invalid: true,
            input: 'email',
            message: "Please enter a valid email"
        };
    }


    if(!(/[A-Z]/.test(password))){
        return {
            invalid: true,
            input: 'password',
            message: "❌ Uppercase letter"
        }
    }

    if(!(/[a-z]/.test(password))){
        return {
            invalid: true,
            input: 'password',
            message: "❌ Lowercase letter"
        }
    }

    if(!(/\d/.test(password))){
        return {
            invalid: true,
            input: 'password',
            message: "❌ Number"
        }
    }

    if(!(password.length >= 6)){
        return {
            invalid: true,
            input: 'password',
            message: "< 6 character"
        }
    }


    return {
        invalid: false,
        input: '',
        message: ''
    }
}

export default validForm
