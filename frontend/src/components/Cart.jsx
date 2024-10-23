import React from 'react';


// props={
//     link:"",
//     name:"lotus",
//     price:"99"
// }
function Cart(props){
    return(
        <div>
            <img src={props.image} alt="img" width='full'/>
            <p className='text-center hover:text-indigo-600 cursor-pointer'>{props.name}</p>
            <p className='text-center'>${props.price}</p>
        </div>
    )
}

export default Cart;