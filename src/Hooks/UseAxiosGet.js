import { useEffect, useState } from 'react'
import axios from 'axios'

export function useAxiosGet(url){
    const [request, setRequest] = useState({error: false, response: null})

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setRequest({error: false, response: res.data})
            })
            .catch(err => setRequest({error: true, response: null}))
    }, [url])

    return request
}