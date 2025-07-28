"use client"
import { setAlert } from '@/utils/variableSlice';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function WarningToast() {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.variables.alert);
    const [visible, setVisible] = useState(false);
    const prevAlertRef = useRef(alert);

    useEffect(() => {
        if (
            alert.type === 'warning' &&
            prevAlertRef.current.msg !== alert.msg &&
            visible
        ) {
            setVisible(false);
            const timeout = setTimeout(() => {
                setVisible(true);
                prevAlertRef.current = alert;
            }, 500); 
            return () => clearTimeout(timeout);
        }

        if (alert.type === 'warning') {
            setVisible(true);
            prevAlertRef.current = alert;
        } else {
            setVisible(false);
        }
    }, [alert]);

    useEffect(() => {
        if (visible && alert.type === 'warning') {
            const timeout = setTimeout(() => {
                setVisible(false);
                setTimeout(() => {
                    dispatch(setAlert({ type: null, msg: null }));
                }, 500); 
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [visible, alert, dispatch]);

    return (
        <div
            className={`flex items-center fixed z-50 top-5 right-6 ${
                visible
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-[calc(100%+30px)] opacity-0'
            } transition-all duration-500 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800`}
            role="alert"
        >
            <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
                <span className="sr-only">Warning icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{alert.msg}</div>
            <button
                type="button"
                onClick={() => {
                    setVisible(false);
                    setTimeout(() => {
                        dispatch(setAlert({ type: null, msg: null }));
                    }, 500);
                }}
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    );
}