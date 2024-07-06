import { useState, useEffect } from 'react';

interface Props {
  index: number;
  title: string;
  img: string;
  price: number;
  handleTotal: (totalPrice: number) => void;
}

const ShoppingCartItem = ({ title, img, price, handleTotal }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const totalPrice = quantity * price;

  useEffect(() => {
    handleTotal(totalPrice);
  }, [quantity, price, handleTotal, totalPrice]);

  return (
    <tr className='border-b border-gray-200'>
      <td className='px-4 py-4  md:py-6'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 h-24 w-24 md:h-40 md:w-40'>
            <img
              className='rounded-lg object-cover'
              src={img}
              alt='Product-Image'
            />
          </div>
          <div className='ml-4 md:ml-6'>
            <div className='text-sm md:text-base font-medium text-gray-900'>{title}</div>
          </div>
        </div>
      </td>
      <td className='px-4 py-4 md:px-6 md:py-6'>
        <div className='text-center'>
          <input
            type='number'
            className='w-16 p-2 border rounded-lg text-center'
            value={quantity}
            min={1}
            onChange={handleQuantityChange}
          />
        </div>
      </td>
      <td className='px-4 py-4 md:px-6 md:py-6'>
        <div className='text-center'>
          <span className='text-lg text-gray-900'>
            s/. {totalPrice.toFixed(2)}
          </span>
        </div>
      </td>
    </tr>
  );
};

export default ShoppingCartItem;
