/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useComments } from './useComments';
import { useEffect } from 'react';
import useAnalyticsEventTracker from '../../src/useAnalyticsEventTracker';

export const TestComponent = () => {
    const { fetchComments } = useComments();
    const gaEventTracker = useAnalyticsEventTracker();

    useEffect(() => {
        fetchComments()
    })

    return (
        <>
            <p>Component API Call Test</p>
            <div>
                <button onClick={() => fetchTodos()}>Component API Call Test</button>
                <br />
                <br />
                <br />
                <a href="#" onClick={() => gaEventTracker('call')}>Call Us</a>
            </div>
        </>
    )
}


function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
