import React, {useState, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { getPosts } from './PostActions'

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (loadPost){
            dispatch(getPosts())
            setLoadPost(false)
        }
    },[loadPost, dispatch])

    return(
        <div>Thread</div>
    )
}

export default Thread;
