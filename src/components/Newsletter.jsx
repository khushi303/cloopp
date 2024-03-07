import React from 'react'
import Black_layer from '../assets/images/png/blacklayer.png';

const Newsletter = () => {
    return (
        <div className='bg_news position-relative'>
            <div data-aos="zoom-in-up" className='container'>
                <h2 className='ff_outfit fw-semibold fs_lg text-center text-white lh_120 mb-0'>Subscribe Newsletter</h2>
                <p className='ff_outfit fw-normal fs_2sm text-center text-white op_90 lh_151 mt-3 mb-38'>Subscribe to our newsletter for the latest news, offers, and eco-tips.</p>
                <div className='mt-4 bor_email mx-auto d-flex'>
                    <input type="text" placeholder='Enter your email' className='w-100 border-0 input_mail ff_outfit fw-normal fs_2sm op_80 bg-transparent pr_20 text-white' />
                    <button className='btn_mail border-0 bg-white ff_outfit fw-semibold fs_2sm text_blue'>Join</button>
                </div>
            </div>
            <div className='position-absolute bt_black start-0 end-0'>
                <img src={Black_layer} alt="Black_layer" className='w-100 h_layer object-fit-cover ob_center' />
            </div>
        </div>
    )
}

export default Newsletter