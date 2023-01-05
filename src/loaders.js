export const stockLoader = async ({ params }) => {
  const symbol = params.symbol

  const apiKey = "75cdbc56a07587473d3dbe73496a35b0"

  return (
    await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`)
  ).json()
}
