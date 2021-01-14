import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { dateParser, isEmpty } from './utils'

export default function Card({ post }) {
    const [isLoading, setIsLoading] = useState(true)
    const usersData = useSelector(state => state.usersReducer)
    const userData = useSelector(state => state.userReducer)

    useEffect(()=> {
        !isEmpty(usersData[0]) && setIsLoading(false)
    },[usersData])
    return (
        <div>
            <li className="card-container" key={post.id}>
                { isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>)
                    : (
                        <>
                        <div className="card-left">
                            <img src={
                                !isEmpty(usersData[0]) &&
                                usersData
                                .map((user) => {
                                    if (user.id === posterId) return user.picture; // changer selon les champs
                                }).join("")}
                                alt="poster-pic" />
                        </div>
                        <div className="card-right">
                            <div className="card-header">
                                <div className="pseudo">
                                    <h3>
                                    {
                                !isEmpty(usersData[0]) &&
                                usersData
                                .map((user) => {
                                    if (user.id === posterId) return user.pseudo; // changer selon les champs
                                }).join("")}
                                    </h3>
                                </div>
                                <span>{dateParser(post.createdAt)}</span>
                            </div>
                        </div>
                        </>
                    )
                }
            </li>
        </div>
    )
}
