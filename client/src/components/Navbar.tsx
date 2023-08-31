import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { logout } from '@/store/reducers/authSlice'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import {
  AppBar,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Popper from '@mui/material/Popper'
import { useRouter } from 'next/router'
import * as React from 'react'
import styles from '../styles/Navbar.module.scss'

const menuItems = [
  { text: 'Main', href: '/' },
  { text: 'Track list', href: '/tracks' },
]

export default function Navbar() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)
  const [openAccount, setOpenAccount] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const accountHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpenAccount(previousOpen => !previousOpen)
  }
  const canBeOpen = open && Boolean(anchorEl)
  const id = canBeOpen ? 'transition-popper' : undefined
  const { isAuth } = useAppSelector(state => state.authSlice)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const logoutHandler = () => {
    dispatch(logout())
    localStorage.removeItem('access_token')
    router.push('/')
  }
  return (
    <div>
      <CssBaseline />
      <AppBar>
        <Toolbar className={styles.toolbar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            SoundWave Player
          </Typography>
          {isAuth ? (
            <>
              <button aria-describedby={id} type='button' onClick={accountHandleClick}>
                Account
              </button>
              <Popper
                id={id}
                open={openAccount}
                anchorEl={anchorEl}
                transition
                className={styles.popper}>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <div>
                      <Box sx={{ p: 1, bgcolor: 'background.paper' }}>
                        <Button onClick={() => router.push('/account')}>To account</Button>
                      </Box>
                      <Box sx={{ p: 1, bgcolor: 'background.paper' }}>
                        <Button onClick={logoutHandler}>Logout</Button>
                      </Box>
                    </div>
                  </Fade>
                )}
              </Popper>
            </>
          ) : (
            <IconButton
              color='inherit'
              aria-label='open auth'
              onClick={() => router.push('/account/register')}
              edge='start'>
              <AccountBoxIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant='persistent' anchor='left' open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          {menuItems.map(({ text, href }, index) => (
            <ListItem button key={href} onClick={() => router.push(href)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
}
