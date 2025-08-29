import useApi from '../hook/useApi'

const Product = () => {

  const { data } = useApi();

  return (
    <div>
      <h1>Product</h1>

      <ul className='grid grid-cols-5 gap-4'>
        {data.map((item, index) =>
          <li key={index} className='p-2 bg-blue-300 text-black'>
            <h2>{item.name}</h2>
            <p>{item.category}</p>
            <p>${item.price}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Product