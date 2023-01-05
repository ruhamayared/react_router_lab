import { useLoaderData } from "react-router-dom"

const Stock = (props) => {
  const stock = useLoaderData()

  return (
    <div>
      <h1>{stock.companyName}</h1>
      <h2>{stock.symbol}</h2>
      <h2>{stock.exchangeShortName}</h2>
      Price: <h2>{stock.price}</h2>
      Changes: <h2>{stock.changes}</h2>
    </div>
  )
}

export default Stock
