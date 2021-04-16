export default function ({
  $axios,
  redirect
}) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('axios config', config)
  })

  // $axios.setHeader('Authorization', 'Bearer dw6PvQSYszn5GkAU27z7YH09nT85bet5m_SmNSGDfFCyS_qSLrSeNwSWBcCyRp27TAWpHu_Vxahl4tRGJqUsQ8doNk08SBT1asyYhW5DRK1BN9B-6Yugv2Dmel55YHYx')

  $axios.onError((error) => {
    // eslint-disable-next-line no-console
    console.log('error', error)
  })
}
