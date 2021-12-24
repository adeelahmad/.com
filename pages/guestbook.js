/** @jsxImportSource theme-ui */

import { Box } from 'theme-ui'
import { MoralisProvider } from 'react-moralis'
import Link from 'next/link'
import GuestbookCTA from '../components/guestbookCTA'
import GuestbookList from '../components/guestbookList'

export default function Home() {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID}
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_ID}
    >
      <article>
        <GuestbookCTA />
        <br />
        <br />
        <p>
          Connect with your favorite wallet, and sign the Web3 Guestbook using a
          gasless meta-transaction.
        </p>
        <p>
          The source for this page can be found{' '}
          <Link href="https://github.com/iammatthias/.com/blob/master/pages/guestbook.js">
            here
          </Link>
          ,{' '}
          <Link href="https://github.com/iammatthias/.com/blob/master/components/guestbookList.js">
            here
          </Link>
          ,{' '}
          <Link href="hhttps://github.com/iammatthias/.com/blob/master/components/guestbookCTA.js">
            here
          </Link>
          , and{' '}
          <Link href="https://github.com/iammatthias/.com/blob/master/components/guestbookCapture.js">
            here
          </Link>
          .<br />
          It is built using <Link href="https://moralis.io">Moralis</Link>, and
          the web3 authentication is handled using{' '}
          <Link href="https://walletconnect.org">WalletConnect</Link>.
        </p>

        <GuestbookList />
      </article>
    </MoralisProvider>
  )
}

//////////////// PAGE CONTENT /////////////////////

export async function getStaticProps() {
  return {
    props: {
      metadata: {
        title: 'Guestbook',
      },
    },
  }
}
