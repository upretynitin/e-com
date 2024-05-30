import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllCategory} from '../redux/action/CategoryAction'
import { getAllProduct } from '../redux/action/ProductAction'
import Category from './category/Category'
import Product from './product/Product'
import Loading from './layouts/Loading'
import Message from './layouts/Message'
import MetaData from './layouts/MetaData'

function Home() {
    const dispatch = useDispatch()
    const { categories , loading , error } = useSelector((state)=>state.c)
    // console.log(categories);
    const { products } = useSelector((state) => state.p)
    // console.log(product)

    useEffect(()=>{
        dispatch (getAllCategory())
    },[dispatch])

    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])

  return (
    <>
    <MetaData title="Home | ecom" />
            <div className="container-fluid mb-3">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#header-carousel" data-slide-to="1"></li>
                                <li data-target="#header-carousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item position-relative active" style={{ height: '430px' }}>
                                    {/* <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} alt='' /> */}
                                    <img className="position-absolute w-100 h-100" src="img/c-1.jpg" style={{ objectFit: 'cover' }} alt='' />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: '700px' }}>
                                            {/* <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1> */}
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men's Watches</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: '430px' }}>
                                    {/* <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }} alt='' /> */}
                                    <img className="position-absolute w-100 h-100" src="img/c-4.jpg" style={{ objectFit: 'cover' }} alt='' />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: '700px' }}>
                                            {/* <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1> */}
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women's Watch</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item position-relative" style={{ height: '430px' }}>
                                    {/* <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{ objectFit: 'cover' }} alt='' /> */}
                                    <img className="position-absolute w-100 h-100" src="img/c-5.jpg" style={{ objectFit: 'cover' }} alt='' />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{ maxWidth: '700px' }}>
                                            {/* <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1> */}
                                            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kid's Watches</h1>
                                            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                            <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="product-offer mb-30" style={{ height: '200px' }}>
                            {/* <img className="img-fluid" src="img/offer-1.jpg" alt="" /> */}
                            <img className="img-fluid" src="img/o-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="/" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                        <div className="product-offer mb-30" style={{ height: '200px' }}>
                            {/* <img className="img-fluid" src="img/offer-2.jpg" alt="" /> */}
                            <img className="img-fluid" src="img/o-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="/" className="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-check text-primary m-0 mr-3">
                            </h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2">
                            </h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3">
                            </h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3">
                            </h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
                <div className="row px-xl-5 pb-3">

                    {
                        loading?(<Loading/>): error?(<Message variant={'danger'}>{error}</Message>)
                        :(
                           categories.map((p) => (

                            <Category category={p} />
                           )))
                    }
                </div>
            </div>

            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
                <div className="row px-xl-5">

                {
                    loading?(<Loading/>): error?(<Message variant={'danger'}>{error}</Message>)
                    :(
                        products.map((p) => (

                        <Product product={p} />

                    )))
                    }
                    
                </div>
            </div>

            <div className="container-fluid pt-5 pb-3">
                <div className="row px-xl-5">
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: '300px' }}>
                            <img className="img-fluid" src="img/offer-1.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="/" class="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-offer mb-30" style={{ height: '300px' }}>
                            <img className="img-fluid" src="img/offer-2.jpg" alt="" />
                            <div className="offer-text">
                                <h6 className="text-white text-uppercase">Save 20%</h6>
                                <h3 className="text-white mb-3">Special Offer</h3>
                                <a href="/" class="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-7.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star-half-alt text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="img/product-8.jpg" alt="" />
                                <div className="product-action">
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                    <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href="/">Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mb-1">
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="fa fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small className="far fa-star text-primary mr-1"></small>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="owl-carousel vendor-carousel">
                            <div className="bg-light p-4">
                                <img src="img/vendor-1.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-2.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-3.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-4.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-5.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-6.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-7.jpg" alt="" />
                            </div>
                            <div className="bg-light p-4">
                                <img src="img/vendor-8.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <a href="/" class="btn btn-primary back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </>
  )
}

export default Home