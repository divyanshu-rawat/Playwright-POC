import React from 'react'
import { useComments } from './useComments';
import { useEffect } from 'react';

export const TestComponent = () => {
    console.log(process.env)
    const { fetchComments } = useComments();

    useEffect(() => {
        fetchComments()
    })

    return (
        <>
            <p>Component API Call Test</p>
            <div>
                <button onClick={() => fetchTodos()}>Component API Call Test</button>
            </div>
        </>
    )
}


function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
