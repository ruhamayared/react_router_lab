import { Link } from "react-router-dom"
import stocks from "../data"
import { Flex, Card } from "../styles"

const Stocks = (props) => {
  return (
    <div className="stocks">
      <Flex>
        {stocks.map((stock) => {
          const { name, symbol } = stock

          return (
            <Card>
              <Link to={`/stocks/${symbol}`}>
                <h2>{name}</h2>
              </Link>
            </Card>
          )
        })}
      </Flex>
    </div>
  )
}

export default Stocks
