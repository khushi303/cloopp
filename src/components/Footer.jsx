import React from 'react';
import LogoFooter from '../assets/images/png/logo.png';
import { Instagram, Facebook, Tweet, Telegram } from './Icons'

const Footer = () => {
    return (
        <div className='bg-dblack'>
            <div className='container position-relative z-2'>
                <div className='row justify-content-between footer_pad'>
                    <div className='col-lg-6 col-12'>
                        <a href=''>
                            <img src={LogoFooter} alt="Logo" className='mw_md_146 w-100 mw_120' />
                        </a>
                        <p className='ff_outfit fs_2sm fw-normal text-white mw_345 mb-0 lh_151 mt-3 op_80'>Cloopp revolutionizes recycling for everyone. Join, earn, and support sustainability.</p>
                    </div>
                    <div className=' col-lg-6 col-12 mt-lg-0 mt-4'>
                        <div className='row justify-content-between'>
                            <ul className='list-unstyled d-flex flex-column gap-3 col-sm-3 col-6 mb-0'>
                                <li><a href="#about" className='ff_outfit fs_2sm fw-normal op_80 text-white lh_100 menu_link position-relative'>About Us</a></li>
                                <li><a href="#work" className='ff_outfit fs_2sm fw-normal op_80 text-white lh_100 menu_link position-relative'>How It Works</a></li>
                                <li><a href="#brand" className='ff_outfit fs_2sm fw-normal op_80 text-white lh_100 menu_link position-relative'>For Brands</a></li>
                                <li><a href="#faq" className='ff_outfit fs_2sm fw-normal op_80 text-white lh_100 menu_link position-relative'>FAQs</a></li>
                            </ul>
                            <ul className='list-unstyled d-flex flex-column gap-3 mb-0  col-sm-4 col-6'>
                                <li><a href="#" className='ff_outfit fs_2sm fw-normal op_80 text-white lh_100 menu_link position-relative'>Terms & Conditions</a></li>
                                <li><a href="#" className='ff_outfit fs_2sm fw-normal op_80 text-white lh_100 menu_link position-relative'>Privacy Policy</a></li>
                            </ul>
                            <div className=' col-sm-4 col-6 mt-sm-0 mt-4'>
                                <p className='ff_outfit fs_2sm fw-normal op_80 text-white mb-2 pb-1 lh_100'>Follow Us </p>
                                <div className='d-flex gap-2'>
                                    <a href='https://instagram.com/accounts/login/' target='blank' className='icon_box d-flex align-items-center justify-content-center'>
                                        <Instagram />
                                    </a>
                                    <a href='https://www.facebook.com/login/' target='blank' className='icon_box d-flex align-items-center justify-content-center'>
                                        <Facebook />
                                    </a>
                                    <a href='https://twitter.com/i/flow/login' target='blank' className='icon_box d-flex align-items-center justify-content-center'>
                                        <Tweet />
                                    </a>
                                    <a href='https://web.telegram.org/a/' target='blank' className='icon_box d-flex align-items-center justify-content-center'>
                                        <Telegram />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='br_footer'>
                <p className='ff_outfit fw-normal mb-0 fs_sm fw-normal text-white op_60 text-center'>© 2024 Cloopp</p>
            </div>
        </div>
    )
}

export default Footer