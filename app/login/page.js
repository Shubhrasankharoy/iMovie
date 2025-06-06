"use client"
import Header from '@/components/Header'
import { BG_URL } from '@/utils/constants'
import validForm from '@/utils/validForm'
import React, { useState } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [form, setForm] = useState({
    isValid: true,
    errorInput: '',
    errorMessage: '',
    name: '',
    email: '',
    password: ''
  })


  // Functions
  const toggleform = () => {
    setForm({
      isValid: true,
      errorInput: '',
      errorMessage: '',
      name: '',
      email: '',
      password: ''
    })
    setIsSignInForm(!isSignInForm)
  }

  const handleSubmitForm = () => {
    const { isValid, input, message } = validForm(form);
    console.log(isValid, input, message);
    if (!isValid) {
      setForm({
        ...form,
        isValid: false,
        errorInput: input,
        errorMessage: message
      })
      return;
    }
    setForm({
      ...form,
      isValid: true,
      errorInput: '',
      errorMessage: ''
    })

  }

  return (
    <div className="relative min-h-screen flex justify-center">
      <img className="absolute w-full h-full pointer-events-none object-cover" src={BG_URL} alt="background" />
      <div className="absolute w-full h-full bg-gradient-to-b to-[#000000b7] from-[#0000009a]"></div>
      <div className="container flex flex-col mx-auto z-10">
        <Header />
        <div className="w-[500] bg-black/70 mx-auto p-10 my-20 rounded-md">
          <h1 className='text-3xl font-bold mb-7'>{isSignInForm ? 'Sign In' : 'Sign up'} </h1>

          {!isSignInForm &&
            <input
              className="py-4 px-3 bg-gray-900/70 border border-gray-900 w-full rounded-sm"
              value={form.name}
              onChange={(e) => { setForm({ ...form, name: e.target.value }) }}
              name='name'
              type="text"
              placeholder='Your Name'
            />
          }
          <input
            className="py-4 px-3 bg-gray-900/70 border border-gray-900 w-full rounded-sm mt-5"
            value={form.email}
            onChange={(e) => { setForm({ ...form, email: e.target.value }) }}
            name='email'
            type="text"
            placeholder='Email'
          />
          <p className="text-red-600 ms-1">{!form.isValid && form.errorInput == "email" && form.errorMessage} </p>
          <input
            className="py-4 px-3 bg-gray-900/70 border border-gray-900 w-full rounded-sm mt-5"
            value={form.password}
            onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
            name='password'
            type="password"
            placeholder='Password'
          />
          <p className="text-red-600 ms-1">{!form.isValid && form.errorInput == "password" && form.errorMessage} </p>

          <p className='py-3'>{isSignInForm ? 'New to iMovie?' : 'Already in iMovie?'}
            <span className='text-blue-500 hover:text-blue-600 hover:underline cursor-pointer ms-0.5' onClick={toggleform}>{isSignInForm ? 'Sign up now' : 'Sign in now'}</span>
          </p>

          <button
            className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm cursor-pointer w-full'
            onClick={handleSubmitForm}
          >
            {isSignInForm ? 'Sign In' : 'Sign up'}
          </button>

          <div className="flex gap-3 w-full items-center my-3">
            <div className="bg-gray-700 grow h-px"></div>
            <span>or</span>
            <div className="bg-gray-700 grow h-px"></div>
          </div>


          <button
            className="flex w-full items-center justify-center bg-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-md font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer mb-3">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48" version="1.1">

              <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1" fill="#FBBC05"> </path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2" fill="#EB4335"> </path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3" fill="#34A853"> </path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4" fill="#4285F4"> </path>
                  </g>
                </g>
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>

          <button
            className="flex w-full items-center justify-center bg-black border border-gray-300 rounded-lg shadow-md px-6 py-2 text-md font-bold text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer">
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48" version="1.1">
              <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
                  <path
                    d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                    id="Facebook">

                  </path>
                </g>
              </g>
            </svg>

            <span>Continue with Facebook</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Login
