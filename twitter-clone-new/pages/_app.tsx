import type { AppProps } from 'next/app'
//import Modal from '../components/layout/Modal'

import '../styles/globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }: AppProps) {
return(
    <>
    {/* <Modal actionLabel="Submit" isOpen title='Test Model'/> */}
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
)
}
