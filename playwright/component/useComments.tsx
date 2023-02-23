import { useEffect } from "react"



export const useComments = () => {

    useEffect(() => { })


    return ({
        fetchComments: () => {
            console.log('fetching...')
        }
    })
}