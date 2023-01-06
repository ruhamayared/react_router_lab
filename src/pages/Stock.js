import { useLoaderData } from "react-router-dom"

const Stock = (props) => {
  const stock = useLoaderData()

  return (
    <div className="stock">
      <h1>{stock[0].companyName}</h1>
      <h2>
        {stock[0].symbol} - {stock[0].exchangeShortName}
      </h2>
      <h2 className="span">Price:</h2> <h3>{stock[0].price}</h3>
      <h2 className="span">Change:</h2> <h3>{stock[0].changes}</h3>
    </div>
  )
}

export default Stock
