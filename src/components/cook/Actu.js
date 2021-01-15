import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Actu.scss'
import { useToasts } from 'react-toast-notifications';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';

export default function Actu({showRecipe, setShowRecipe}) {
    const { addToast } = useToasts();
    const [postRecipe, setPostRecipe] = useState([])

    const [name, setName] = useState()
    const [image, setImage] = useState(null)
    const [content, setContent] = useState()

useEffect(() => {
    axios.get('http://526037743aa4.ngrok.io/api/users/')
    .then((res) => {
        setPostRecipe(res.data)
    })
},[])

const handleSubmit = (e, data) => {
    axios.post('http://d5b70dbe70d0.ngrok.io/api/lunches/new',data)
    .then((res) => setPostRecipe(res.data))
    addToast('Votre contenu a bien été publier', {
        appearance: 'success',
        autoDismiss: true,
      });
      console.log(data)
      e.target.reset();
}

    return (
        <div className="container-page-actu">
        <CloseIcon onClick={() => setShowRecipe(false)} />
        <form className="container-form-actu" onSubmit={handleSubmit}>
        <h2 style={{color:'white'}} className="title-recette">Publie ta Recette !</h2>
        <div className="form-post-actu">
        <input
        className="input-form-actu"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom"
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
          placeholder="Message"
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
                            {post.lunches.length > 0 &&
                            <div className="infos-recipes">
                                <h3 style={{color:'white'}}>{post.lunches[0].name}</h3>
                                <h4 style={{color:'white'}}>par {post.username}</h4>
                                <p style={{color:'white'}}>{post.lunches[0].created_at}</p>
                                    <img className="image-recipe" src={post.lunches[0].image} alt={post.lunches[0].name} />
                                    <p style={{color:'white'}}>{post.lunches[0].content}</p>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Typography component="legend"></Typography>
                                    <Rating name="read-only" value={post.lunches[0].rate} readOnly />
                                </Box>
                            </div>}
                        </div>
                    )
                })
            }
        </div>
    )
}


