import React from 'react'
import Cart from './Cart.jsx'
import plugins from './plugins.json'

const Plugins = () => {

  return (
    <div className='my-20'>
    <h1 className='lg:px-36 px-14 my-10 text-4xl font-semibold'>Plugins</h1>
   <div className='flex lg:px-36 px-14 flex-wrap gap-8 lg:justify-between justify-center'>
   {
     plugins.map(function(item){
         return <Cart key={item._id} name={item.name} price={item.price} image={item.image}/>
     })
    }
   </div>
 </div>
  )
}

export default Plugins;