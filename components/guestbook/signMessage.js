/** @jsxImportSource theme-ui */
import { Button, Box, Alert } from 'theme-ui'

import { useRef, useState, useMemo } from 'react'
import { verifyMessage } from 'ethers/lib/utils'
import { useSignMessage, useAccount } from 'wagmi'

import Ens from './ens'
import Squiggle from '../joy/squiggle'
import Sparkle from '../joy/sparkle'

// dynamic imports

import dynamic from 'next/dynamic'
const Write = dynamic(() => import('./write'))

export default function SignMessage() {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  })

  const previousMessage = useRef
  const [message, setMessage] = useState('')
  const [
    { data: signData, error: signError, loading: signLoading },
    signMessage,
  ] = useSignMessage()

  const recoveredAddress = useMemo(() => {
    if (!signData || !previousMessage.current) return undefined
    return verifyMessage(previousMessage.current, signData)
  }, [signData, previousMessage])

  return (
    <>
      {signData ? (
        <>
          <Box
            sx={{
              mb: 3,

              wordBreak: 'break-word',
            }}
          >
            <Sparkle>
              <p sx={{ m: 0, mb: 1 }}>
                <small>
                  <b>preview:</b>
                </small>
              </p>
              <p sx={{ m: 0, mb: 1 }}>
                <a
                  href={
                    process.env.NEXT_PUBLIC_ETHERSCAN_URL +
                    '/address/' +
                    recoveredAddress
                  }
                >
                  <Ens address={recoveredAddress} />
                </a>
              </p>
              <p sx={{ m: 0, mb: 1 }}>{previousMessage.current}</p>
              <Squiggle
                sx={{
                  mb: 0,
                }}
              />
            </Sparkle>
          </Box>
          <Write message={previousMessage.current} />
        </>
      ) : (
        <form
          onSubmit={event => {
            event.preventDefault()
            previousMessage.current = message
            signMessage({ message })
          }}
          sx={{ mb: 3, width: ['100%', '50%'], minWidth: '250px' }}
        >
          <input
            id="message"
            placeholder="Sign The Guest Book"
            onChange={event => setMessage(event.target.value)}
            sx={{
              minWidth: ['100%', '60%', '30%'],
              width: '100%',
              padding: '8px',
              border: 'solid 1px',
              borderColor: 'text',
              borderRadius: '4px',
              color: 'text',
              bg: 'background',
              display: 'block',
              mb: 3,
            }}
          />

          <Button
            disabled={signLoading || !message.length}
            sx={{ mr: 4, mb: 3 }}
          >
            {signLoading ? 'Check Wallet' : 'Sign Message'}
          </Button>

          {signError && (
            <Alert>{signError?.message ?? 'Error signing message'}</Alert>
          )}
        </form>
      )}
    </>
  )
}
