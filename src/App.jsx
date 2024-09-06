import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)
  const {isLoaded,isSignedIn} = useUser();

  if (isLoaded && !isSignedIn) {
    return <Navigate to={"/auth/sign-in"} />;
  }

  return (
    <>
      <Header/>
      <Outlet/>
      <Toaster/>
    </>
  )
}

export default App


