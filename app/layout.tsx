import { Footer, Navbar } from '@/components';
import './globals.scss';
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Help scout: shared inbox , help center , live chat , chat software',
  description: 'Manage all your customer conversations in one powerful platform that feels just like your inbox.',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
       
      <body className=''>
       
           <Navbar/>
        
        {children}
      
        <Footer/>
        
        
      </body>
    </html>
  )
}
