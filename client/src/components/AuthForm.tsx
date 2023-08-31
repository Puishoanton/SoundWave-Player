import { useAppDispatch } from '@/hooks/redux'
import { TCredentials } from '@/types/auth'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'

type AuthFormProps = {
  submitHandler: (credentials: TCredentials, e: React.FormEvent<HTMLFormElement>) => void
  HTMLData: { title: string; route: string; button: string }
}

const AuthForm: React.FC<AuthFormProps> = ({ submitHandler, HTMLData }) => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          {HTMLData.title}
        </Typography>
        <Box
          component='form'
          onSubmit={e => submitHandler({ email, password }, e)}
          noValidate
          sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            {HTMLData.title}
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={() => router.push(HTMLData.route)}>{HTMLData.button}</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default AuthForm
