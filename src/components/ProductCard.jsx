import { ArrowRight } from '@mui/icons-material'
import {BiCart,BiArrowToRight} from 'react-icons/bi'

function ProductCard( {product,setProductDetails}) {

 const showProductDetails = () => {
   setProductDetails(true)
 }


  return (
    <div className='w-[min(100%,250px)] border p-2 shadow flex flex-col gap-1'>
        <div className='w-full flex justify-center items-center text-[3rem] p-2'>
           {product.product}
        </div>

        <div onClick={showProductDetails} className='flex justify-between items-center border hover:bg-black/10 duration-300'>
            <div className='flex flex-col p-2'>
               <p className='text-[1.1rem] font font-medium'>${product.price}</p> 
               <p className='uppercase text-DarkBlue/60 text-[0.8rem]'>{product.name}</p>
            </div>

             <ArrowRight />
        </div>
        

        <button className=' w-full flex border items-center p-2 rounded-md text-[0.8rem] gap-2 bg-blue-800 text-white shadow-lg'>
           <BiCart size={20}/>
           ADD TO BASKET      
        </button>
    </div>
  )
}

export default ProductCard
