import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/action/UserAction'
import { useAlert } from 'react-alert'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()
    const { user, loading } = useSelector(state => state.auth)
    // console.log(user);
    const handleLogout = (()=>{
        dispatch(logout())
        navigate('/')
        alert.success('Logout Successfully')
    })
  return (
    <>
    <div className="container-fluid">
                <div className="row bg-secondary py-1 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center h-100">
                            <Link className="text-body mr-3" to="/">About</Link>
                            <Link className="text-body mr-3" to="/">Contact</Link>
                            <Link className="text-body mr-3" to="/">Help</Link>
                            <Link className="text-body mr-3" to="/">FAQs</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center" style={{ gap: "10px" }}>
                            {
                                user ? (
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">{user && user.name}</button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <div style={{ display: "flex", flexWrap: "nowrap", alignItems: "center", justifyContent: "center" }}>
                                                <img style={{ height: "18px", width: "18px", borderRadius: "100%", marginLeft: "20px" }} src={user.image && user.image.url} className='rounded-circle' alt={user && user.name} />
                                                <span className="dropdown-item">{user && user.name}</span>
                                            </div>
                                            {
                                                user && user.role !== 'admin' ? (
                                                    <Link className="dropdown-item" to='/orders/me'>Orders</Link>
                                                ) : (
                                                    <Link className="dropdown-item" to='/admin/dashboard'>Dashboard</Link>
                                                )
                                            }
                                            <Link className="dropdown-item" to='/profile'>Profile</Link>
                                            <Link className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                        </div>
                                    </div>
                                ) : !loading && <Link className="dropdown-item" to='/login'>Sign in</Link>
                            }

                        </div>
                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <Link to="/" className="btn px-0 ml-2">
                                <i className="fas fa-heart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle " style={{ paddingBottom: '2px' }}>0</span>
                            </Link>
                            <Link to="/" className="btn px-0 ml-2">
                                <i className="fas fa-shopping-cart text-dark"></i>
                                <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">

                    <div className="col-lg-4">
                        <Link to="/" className="text-decoration-none">
                            {/* <img src="img/colorlogo.png" alt=" " /> */}
                            <img src="img/w-t.jpg" style={{width: '150px'}} alt=" " />
                        </Link>
                        
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text form-control bg-transparent text-primary">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <p className="m-0">Customer Service</p>
                        <h5 className="m-0">+012 345 6789</h5>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" to="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
                            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </Link>
                        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: '999' }}>
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></Link>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <Link to="/" className="dropdown-item">Men's Dresses</Link>
                                        <Link to="/" className="dropdown-item">Women's Dresses</Link>
                                        <Link to="/" className="dropdown-item">Baby's Dresses</Link>
                                    </div>
                                </div>
                                <Link to="/" className="nav-item nav-link">Shirts</Link>
                                <Link to="/" className="nav-item nav-link">Jeans</Link>
                                <Link to="/" className="nav-item nav-link">Swimwear</Link>
                                <Link to="/" className="nav-item nav-link">Sleepwear</Link>
                                <Link to="/" className="nav-item nav-link">Sportswear</Link>
                                <Link to="/" className="nav-item nav-link">Jumpsuits</Link>
                                <Link to="/" className="nav-item nav-link">Blazers</Link>
                                <Link to="/" className="nav-item nav-link">Jackets</Link>
                                <Link to="/" className="nav-item nav-link">Shoes</Link>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <Link to="/" className="text-decoration-none d-block d-lg-none">
                                <span class="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                                <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                            </Link>
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <Link className='nav-item nav-link active' to='/'>Home</Link>
                                    <Link className='nav-item nav-link' to='shop'>Shop</Link>
                                    <Link className='nav-item nav-link' to='shopdetails'>Shop Detail</Link>
                                    <div className="nav-item dropdown">
                                        <Link to="pages" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i class="fa fa-angle-down mt-1"></i></Link>
                                        <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <Link class='dropdown-item' to='cart'>Shopping Cart</Link>
                                            <Link class='dropdown-item' to='checkout'>Checkout</Link>
                                        </div>
                                    </div>
                                    <Link class='nav-item nav-link' to='contact'>Contact</Link>
                                </div>
                                <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <Link to="/" className="btn px-0">
                                        <i class="fas fa-heart text-primary"></i>
                                        <span class="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                                    </Link>
                                    <Link to="/" className="btn px-0 ml-3">
                                        <i class="fas fa-shopping-cart text-primary"></i>
                                        <span class="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Header