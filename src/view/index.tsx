import { net } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'
import MainnetOnly from './mainnetOnly'

const {
  manifest: { appId },
} = configs

const View = () => {
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
