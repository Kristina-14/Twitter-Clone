import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
//import Modal from '../components/layout/Modal'

import '../styles/globals.css'
import Layout from '../components/Layout'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
return(
    <SessionProvider session={pageProps.session}>
        <Toaster />
    {/* <Modal actionLabel="Submit" isOpen title='Test Model'/> */}
    <RegisterModal />
    <LoginModal />
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </SessionProvider>
)
}
