import React from 'react';
import themes from './themes.json'

import Cart from './Cart.jsx';
function Themes(){
    return (
        <div className='my-20'>
            <h1 className='lg:px-36 px-14 my-10 text-4xl font-semibold'>Themes</h1>
            <div className='lg:px-36 px-14 flex flex-wrap gap-8 lg:justify-between justify-center'>
            {
                themes.map(function(item){
                    console.log(item);
                    return <Cart key={item.id} name={item.name} price={item.price} image={item.image}/>
                })
            }
            </div>

        </div>
    )
}
export default Themes