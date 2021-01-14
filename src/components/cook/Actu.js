import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Actu.scss'

export default function Actu() {

    const [postRecipe, setPostRecipe] = useState([])

    const [cookName, setCookname] = useState()
    const [image, setImage] = useState(null)
    const [content, setContent] = useState()

useEffect(() => {
    axios.get('http://d6e9432fc7eb.ngrok.io/api/users')
    .then((res) => {
        setPostRecipe(res.data)
    })
},[])

/* const handleSubmit = () => {
    axios.post('http://8ded0b75d1f4.ngrok.io/api/users')
    .then((res) => setPostRecipe(res.data))
} */

    return (
        <div className="container-page-actu">
        <form className="container-form-actu" /* onSubmit={handleSubmit} */>
        <h2 className="title-recette">Publie ta Recette !</h2>
        <div className="form-post-actu">
        <input
        className="input-form-actu"
          type="text"
          value={cookName}
          onChange={(e) => setCookname(e.target.value)}
        />
        </div>
        <div className="form-post-actu">
        <input
        className="input-form-actu"
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
        />
        </div>
        <div className="form-post-actu">
        <textarea
        className="input-form-actu"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="div-button">
        <button className="button-actu" type="submit">Post</button>
        </div>
        </div>
            </form>
            {postRecipe.length >= 0 &&
                postRecipe.map((post) => {
                    return (
                        <div className="cards-container" key={post.id}>
                            <h3>{post.username}</h3>
                            <img className="image-recipe" src={post.avatar} alt={post.username} />
                            <p>{post.lunches.name}</p>
                            <img src={post.lunches.image} alt={post.lunches.name} />
                            <p>{post.lunches.rate}</p>
                            <p>{post.lunches.content}</p>
                            <p>{post.lunches.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}


