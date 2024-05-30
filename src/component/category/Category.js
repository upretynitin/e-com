import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({category}) {
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href="/">
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                                    <Link to={`shop/${category._id}`}>
                                    <img className="img-fluid" src={category.image.url} alt="" />
                                    </Link>
                                </div>
                                <div className="flex-fill pl-3">
                                <Link to={`shop/${category._id}`}>
                                    <h6>{category.cname}</h6>
                                    </Link>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
    </>
  )
}
