import Navbar from '@/components/Navbar'
import Player from '@/components/Player'
import { Container } from '@mui/material'
import React from 'react'

interface MainLayoutProps {
  children: any
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '90px', marginBottom: '90px' }}>{children}</Container>
      <Player />
    </>
  )
}

export default MainLayout
