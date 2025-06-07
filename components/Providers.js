"use client"
import React, { useEffect } from 'react'
import { Provider, useDispatch } from "react-redux";
import appStore from "@/utils/appStore";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { addUser, removeUser } from '@/utils/userSlice';

const AuthListener = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth), (user) => {
            if (user) {
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid, email, displayName }));
            } else {
                dispatch(removeUser())
            }
        })

        return () => unsubscribe()
    }, [dispatch])

    return children;
}

const Providers = ({ children }) => {

    return (
        <Provider store={appStore}>
            <AuthListener>
                {children}
            </AuthListener>
        </Provider>

    )
}

export default Providers
