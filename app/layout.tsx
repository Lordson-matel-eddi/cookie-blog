'use client'

import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


const signUp = () => {
    supabase.signUp({
    email: "lordsonmateleddi@gmail.com",
    password: 'fullsatrk'
  })
    
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