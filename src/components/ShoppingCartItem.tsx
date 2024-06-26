import React, { useState } from 'react';

interface Props {
  title: string;
  img: string;
  price: number;
}

const ShoppingCartItem: React.FC<Props> = ({ title, img, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const totalPrice = quantity * price;

  return (
    <section className='flex flex-col md:flex-row items-center justify-center w-full h-100 gap-6 border-b-2 border-gray-400 pb-6'>
      <div className='flex flex-col items-center justify-center w-full'>
        <img src={img} alt='Product-Image' className='w-full' />
      </div>
      <div className='flex flex-col items-center md:items-center justify-center w-full'>
        <h3 className='text-center md:text-start font-semibold text-lg'>{title}</h3>
        <p className='text-center md:text-start text-base'>Color: Azul</p>
        <p className='text-center md:text-start text-base'>Talla: M</p>
      </div>
      <div className='flex flex-col items-center md:items-center justify-center w-full md:w-1/2'>
        <h4 className='text-center md:text-center font-semibold text-lg'>Cantidad</h4>
        <input
          type='number'
          className='w-full md:w-1/2 p-2 border rounded-lg text-center'
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className='flex flex-col items-center md:items-center justify-center w-full'>
        <h4 className='text-center md:text-start font-semibold text-lg'>Precio Total</h4>
        <span>s/.{totalPrice}</span>
      </div>
    </section>
  );
};

export default ShoppingCartItem;
