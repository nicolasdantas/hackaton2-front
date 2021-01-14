import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Actu.scss'
import { useToasts } from 'react-toast-notifications';

export default function Actu() {
    const { addToast } = useToasts();
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

const handleSubmit = (data) => {
    axios.post('http://8ded0b75d1f4.ngrok.io/api/users', data)
    .then((res) => setPostRecipe(res.data))
    addToast('Votre contenu a bien été publier', {
        appearance: 'success',
        autoDismiss: true,
      });
}

    return (
        <div className="container-page-actu">
        <form className="container-form-actu" onSubmit={handleSubmit}>
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
                            <div className="profil-user">
                            <h3>{post.username}</h3>
                            <img className="image-avatar" src={post.avatar} alt={post.username} />
                            </div>
                            {post.lunches.length > 0 &&
                            <div className="infos-recipes">
                            <div className="name-date">
                                <h3>{post.lunches[0].name}</h3>
                                <p>{post.lunches[0].created_at}</p>
                            </div>
                            <img className="image-recipe" src={post.lunches[0].image} alt={post.lunches[0].name} />
                            <p>{post.lunches[0].content}</p>
                            <p>note: {post.lunches[0].rate}</p>
                            </div>}
                        </div>
                    )
                })
            }
        </div>
    )
}


