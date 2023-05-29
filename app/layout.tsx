'use client'

import './globals.css'
import { useEffect, useState } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  const [ supabase ] = useState(() => createPagesBrowserClient())

  const router = useRouter()

  useEffect(() => {
    const { data: { subscription } } =  supabase.auth.onAuthStateChange(() => {
      router.refresh()
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, router])


  const signUp = () => {
    supabase.auth.signUp({
    email: "lordsonmateleddi@gmail.com",
    password: 'fullstark'
  })
 }


 const signIn = () => {
  supabase.auth.signInWithPassword({
    email: 'lordsonmateleddi@gmail.com',
    password: 'fullstark'
  })
 }


 const signOut = () => {
  supabase.auth.signOut()
 }
        
    
    
  return (
    <html lang="en">
        <body>
          <button onClick={signUp}>sign up</button>
          <button onClick={signIn}>sign in</button>
          <button onClick={signOut}>sign out</button>
          {children}
        </body>
    </html>
  )
}