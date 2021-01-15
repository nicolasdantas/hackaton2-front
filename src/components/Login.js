import React, { useState, useContext } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
/* import LockOutlinedIcon from '@material-ui/icons/LockOutlined'; */
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import '../style/Login.scss';
import { LoginContext } from '../components/contexts/LoginContext';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        SimOffice
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    '& .MuiInputLabel-outlined': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
  login: {
    color: 'white',
  },
  rememberMe: {
    color: 'white',
  },
}));

export default function Login() {
  const { userLogged, setUserLogged } = useContext(LoginContext);
  const classes = useStyles();
  const history = useHistory();
  const { addToast } = useToasts();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const symfonyLogin = `http://d6e9432fc7eb.ngrok.io/api/login?username=${username}&password=${password}`;

  const onSubmit = async () => {
    setUserLogged([]);
    try {
      setUserLogged({
        username: username,
        roles: ['ROLE_USER'],
        password: password,
        salt: null,
        coordX: 4,
        coordY: 8,
        avatar:
          'https://img.favpng.com/18/19/24/nyan-cat-youtube-png-favpng-G1cs1DiEzDQhHaAgXduVYB2Dp.jpg',
      });
      addToast('Vous êtes désormais connecté', {
        appearance: 'success',
        autoDismiss: true,
      });
      history.push('/board');
    } catch (err) {
      addToast('Identifiants non reconnus', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/*          <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component='h1' variant='h5'>
          <p className='login'>Connexion</p>
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            className={classes.input}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Utilisateur'
            name='email'
            autoComplete='email'
            autoFocus
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            className={classes.input}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Mot de passe'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            className={classes.rememberMe}
            control={<Checkbox value='remember' color='primary' />}
            label='Rester connecté'
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={() => {
              onSubmit();
            }}
          >
            Se connecter
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                <p className='signup'> Mot de passe oublié ?</p>
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                <p className='signup'>{'Pas de compte ? En créer un'}</p>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
