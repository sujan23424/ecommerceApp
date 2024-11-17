import Cart from './Cart.jsx';
import themes from './themes.json';

export default function Themes(){
    return <>
    <div className='my-20'>
       <h1 className='lg:px-36 px-14 my-10 text-4xl font-semibold'>Themes</h1>
      <div className='flex lg:px-36 px-14 flex-wrap gap-8 lg:justify-between justify-center'>
      {
        themes.map(function(item){
            return <Cart key={item.id} name={item.name} price={item.price} image={item.image}/>
        })
       }
      </div>
    </div>
    </>
}