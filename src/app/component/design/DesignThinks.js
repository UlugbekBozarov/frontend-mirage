import React from 'react'
import './designThinks.scss'

const DesignThinks = () => {
    return (
        <section id="design_thinks">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-md-6 p-0 p-sm-5 p-md-0 p-lg-5 order-2 order-md-1">
                        <div className="img_block">
                            <img src="/images/design_thinks.png" alt="design_thinks" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex aligin-items-center order-1 order-md-1" style={{marginBottom: "50px"}}>
                        <div className="title_body">
                            <h4 style={{marginBottom: "0"}}>Design Things </h4>
                            <h1>We Loves To Design Your Creative Ideas</h1>
                            <p>
                                A creative concept is an overarching “Big Idea” that captures audience interest, influences their emotional response and inspires them to take action.It is a unifying theme that can be used across all campaign messages
                            </p>
                            <button className="btn mirage_btn">
                                Learn more
                                <div>
                                    <svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 6.1579C0.447715 6.1579 0 6.60561 0 7.1579C0 7.71018 0.447715 8.1579 1 8.1579V6.1579ZM30 7.1579L30.6864 7.88516C30.8932 7.68999 31.0071 7.416 30.9997 7.13173C30.9922 6.84746 30.8641 6.57981 30.6474 6.39572L30 7.1579ZM22.0636 13.2727C21.662 13.6518 21.6437 14.2847 22.0227 14.6864C22.4018 15.088 23.0347 15.1063 23.4364 14.7273L22.0636 13.2727ZM23.3974 0.237822C22.9764 -0.119709 22.3454 -0.0683067 21.9878 0.352633C21.6303 0.773572 21.6817 1.40465 22.1026 1.76218L23.3974 0.237822ZM1 8.1579H30V6.1579H1V8.1579ZM29.3136 6.43063L22.0636 13.2727L23.4364 14.7273L30.6864 7.88516L29.3136 6.43063ZM30.6474 6.39572L23.3974 0.237822L22.1026 1.76218L29.3526 7.92007L30.6474 6.39572Z" fill="white" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesignThinks
