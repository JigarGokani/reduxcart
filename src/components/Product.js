import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cart from '../pages/Cart'
import { add,remove } from '../redux/Slices/CartSlice'
import { toast } from 'react-hot-toast'

const Product = ({post}) => {

    const {cart} = useSelector((state)=> state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item add to Cart");
    
    }

    const removedFromCart = () => {
        dispatch(remove(post.id));
        toast.success("Item Removed From Cart")
    }

  return (
    <div>
        <div>
            <p>{post.title}</p>
        </div>
        <div>
            <p>{post.description}</p>
        </div>
        <div>
            <img src = {post.image}/>
        </div>
        <div>
            <p>{post.price}</p>
        </div>
        {
            cart.some((p) => p.id == post.id) ? 
            (<button onClick={removedFromCart}>
                Remove Item
            </button>) :
            (<button onClick={addToCart}>
                Add To Cart
            </button>)
        }
    </div>
  )
}

export default Product