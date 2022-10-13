import { useEffect } from 'react'
import { net, useSetBackground } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'
import MainnetOnly from './mainnetOnly'

const {
  manifest: { appId },
} = configs

const BG = 'linear-gradient(135deg, #3d164c 0%, #191a44eb 22%, #21828c 100%)'

const View = () => {
  const setBackground = useSetBackground()

  useEffect(() => {
    setBackground({ light: BG, dark: BG })
  }, [setBackground])

  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      appId={appId}
      src={'https://francium.io/app/'}
      title="DeFi Yield Strategy Platform"
      wallet={window.sentre.solana}
    />
  )
}

export default View
