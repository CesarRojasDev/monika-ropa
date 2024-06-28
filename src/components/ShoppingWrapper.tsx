import { useState, useEffect } from 'react'
import { ROPA } from '../services/Ropa'
import ShoppingCartCheckout from './ShoppingCartCheckout'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingWrapper = () => {
  const [totalShopping, setTotalShopping] = useState(0)

  const handleTotal = (totalPrice: number) => {
    setTotalShopping(totalPrice)
  }

  useEffect(() => {
    setTotalShopping(totalShopping)
  }, [totalShopping])

  return (
    <section className="flex flex-col items-center justify-center p-4 bg-white shadow-md">
  <h2 className="text-center md:text-start font-semibold text-4xl my-6">
    Termina tu pedido
  </h2>
  <div className="flex flex-col md:flex-row items-center justify-center md:px-[80px] gap-3 w-full">
    <div className="flex flex-col items-center justify-center gap-6 w-full md:w-1/2">
      {ROPA.slice(0, 3).map((item, index) => (
        <ShoppingCartItem
          key={item.id}
          index={index}
          title={item.title}
          img={item.img}
          price={item.price}
          handleTotal={handleTotal}
        />
      ))}
    </div>
    <div className="flex justify-center w-full md:w-1/2">
      <ShoppingCartCheckout totalShopping={totalShopping} />
    </div>
  </div>
</section>

  )
}

export default ShoppingWrapper
