"use client"
import React, { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "@/utils/appStore";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { addUser, removeUser } from '@/utils/userSlice';
import { usePathname, useRouter } from 'next/navigation';

const AuthListener = ({ children }) => {
    const dispatch = useDispatch();
    const route = useRouter();
    const pathname = usePathname();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if(user){
            if (pathname === '/login' || pathname === '/') {
                route.push('/browse')
            } else {
                route.push(pathname + (window.location.search || ""));
            }
        }else{
            route.push('/login')
        }
    },[user, pathname, route])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth), (user) => {
            if (user) {
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid, email, displayName }));
            } else {
                // route.push('/login')
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
