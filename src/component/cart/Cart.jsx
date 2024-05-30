import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addItemsToCart } from '../../redux/action/CartAction';

function Cart() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [quantityCounter, setQuantityCounter] = useState(1);
    const { cartItems } = useSelector((state) => state.cart);
    // Add to cart handler

    // console.log(cartItems);
    // console.log('Hello Cart');
    const checkOutHandler = () => {
        // alert('hello')
        if (isAuthenticated){
           navigate('/shipping')
        }
        else {
            navigate('/login')
        }
    };

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity -1
        if (1 >= quantity) {
            return
        }
        dispatch(addItemsToCart(id, newQty))
    }
    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    }
  return (
    <>
    <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="/">Home</a>
                            <a className="breadcrumb-item text-dark" href="/">Shop</a>
                            <span className="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {
                                    cartItems.map((c)=>(
                                        <tr>
                                    <td className="align-middle"><img src={c.image} alt="" style={{ width: '50px' }} /> {c.name}</td>
                                    <td className="align-middle">{c.price}</td>
                                    <td className="align-middle">
                                        <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-minus" onClick={()=>decreaseQuantity(c.product,c.quantity)} >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={c.quantity} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-primary btn-plus" onClick={()=>increaseQuantity(c.product,c.quantity,c.stock)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">{c.price * c.quantity}</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>
                                    ))
                                }
                                
                               
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-30" action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>
                                        {
                                            cartItems.reduce(
                                                (acc,c) => acc + Number(c.quantity),
                                                0
                                            )
                                        }{" "}
                                        (units)
                                    </h6>
                                </div>
                                {/* <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">$10</h6>
                                </div> */}
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h6 className="font-weight-medium">{`₹${cartItems.reduce(
                                        (acc, c) => acc + c.quantity * c.price,
                                        0
                                    )}`}</h6>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={checkOutHandler}>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Cart