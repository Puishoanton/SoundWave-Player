import AuthForm from '@/components/AuthForm'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import MainLayout from '@/layouts/MainLayout'
import { loginAction } from '@/store/asyncActions/AuthActions'
import { TCredentials } from '@/types/auth'
import { createHTMLData } from '@/utils/createHTMLData'
import { Alert, Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Login = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { errors, isAuth } = useAppSelector(state => state.authSlice)

  useEffect(() => {
    if (isAuth) {
      router.push('/tracks')
    }
  }, [isAuth])

  const loginHandler = async (credentials: TCredentials, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await dispatch(loginAction(credentials))
  }

  return (
    <MainLayout>
      {errors && (
        <Box display={'flex'} justifyContent={'center'}>
          <Alert severity='error'>{errors}</Alert>
        </Box>
      )}
      <AuthForm
        submitHandler={loginHandler}
        HTMLData={createHTMLData('Sign In', 'register', `Don't have an account?`)}
      />
    </MainLayout>
  )
}

export default Login
