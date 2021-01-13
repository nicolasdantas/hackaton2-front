import React from 'react';
import { useForm } from 'react-hook-form';
import '../style/Contact.scss'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& > *': {
      width: '25ch',
    },
  },
  formControl: {
    width: 200,
  },
  btn: {
    backgroundColor: '#6d071a',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#6d071a',
    },
  },
  input: {
    width: '100%',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#6d071a',
    },
    '& .MuiOutlinedInput-input': {
      color: '#6d071a',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#6d071a',
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  const { register, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  const { isSubmitting } = formState;

  const onSubmit = async (data, e) => {

  };

  return (
    <div className="container-contact-form">
      <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>Contactez-nous</h1>
        <div className="input-contact-form">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Nom"
            name="lastname"
            variant="outlined"
            inputRef={register({
              required: "Merci d'indiquer votre nom",
            })}
          />
        </div>

        <div className="input-contact-form">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Prénom"
            name="firstname"
            variant="outlined"
            inputRef={register({
              required: "Merci d'indiquer votre prénom",
            })}
          />
        </div>

        <div className="input-contact-form">
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            inputRef={register({
              required: "Merci d'indiquer votre adresse mail",
            })}
          />
        </div>
        <div className="input-contact-form">
          <TextField
            id="outlined-multiline-static"
            className={classes.input}
            label="Message"
            placeholder="Message"
            multiline
            rows={10}
            name="message"
            variant="outlined"
            inputRef={register({
              required: 'Merci de saisir un message',
            })}
          />
        </div>

        <div className="button-contact-form">
          <Button
            className={classes.btn}
            disableElevation={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;