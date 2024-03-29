import React, { useState } from 'react'
import Logo from '../assets/images/png/logo.png';
import Bottle from '../assets/images/png/bottle.png';
import Headerlayer from '../assets/images/png/header-layer.png';
import { Appstore, Playstore, Curlyarrow } from './Icons';
import Star from '../assets/images/png/star.png';

const Header = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("overflow_hidden")

    } else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div>
            <nav className='bg_nav py-2'>
                <div className='container py-1'>
                    <div className='d-flex align-items-center justify-content-between py-'>
                        <a href=''>
                            <img src={Logo} alt="Logo" className='mw_md_146 w-100 mw_120' />
                        </a>
                        <ul className={`${nav ? "" : "end-0"} d-flex mobile_veiw align-items-center mb-0 list-unstyled gap_md_36 gap-4`}>
                            <li onClick={() => setNav(!nav)}><a href="#work" className='text-white ff_outfit fs_2sm fw-normal lh_100 op_90 position-relative menu_link'>How It Works</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#brand" className='text-white ff_outfit fs_2sm fw-normal lh_100 op_90 position-relative menu_link'>For Brands</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#about" className='text-white ff_outfit fs_2sm fw-normal lh_100 op_90 position-relative menu_link'>About Us</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#career" className='text-white ff_outfit fs_2sm fw-normal lh_100 op_90 position-relative menu_link'>Careers</a></li>
                        </ul>
                        <div onClick={() => setNav(!nav)} className={`${nav ? "" : "cross"} menubtn d-flex justify-content-between flex-column d-lg-none`}>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                        </div>
                    </div>
                </div>
            </nav>
            <header id='work' className='position-relative'>
                <div className='container position-relative pb-lg-5'>
                    <div className='row mt-lg-5 pt-lg-4 pb-sm-4 pb-5 mt-5 justify-content-lg-between justify-content-center'>
                        <div data-aos="fade-right" className='col-xl-6 col-lg-7 col-12 pt-xl-5 mt-xl-4 position-relative z-1'>
                            <h2 className='ff_outfit fs_2xl fw-semibold text-white lh_125 mb-0'>Recycle. Reward.</h2>
                            <h2 className='ff_rainbow fs_xl fw-normal text-white lh_130 mb-3 pb-1'>with Cloopp</h2>
                            <p className='ff_outfit fs_2sm fw-normal text-white op_90 mb-0 lh_151 pb-lg-2 mb-4 mw_lg_448'>Get exclusive discounts and coupons from the hottest brands every time you recycle and track your environmental impact with the Cloopp App.</p>
                            <div className='d-flex gap-sm-3 gap-2 align-items-sm-center'>
                                <a href=''>
                                    <Appstore />
                                </a>
                                <a href=''>
                                    <Playstore />
                                </a>

                            </div>
                        </div>
                        <div data-aos="fade-up" className='col-lg-5 col-sm-10 col-12 position-relative mt-lg-0 mt-4'>
                            <img src={Bottle} alt="Bottle" className='w-100' />
                            <div className='position-absolute head_arrow d-lg-block d-none'>
                                <Curlyarrow />
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute star_img'>
                        <img src={Star} alt="Star" className='mw_97 w-100' />
                    </div>
                </div>
                <div className='position-absolute bottom_5 start-0 end-0'>
                    <img src={Headerlayer} alt="Headerlayer" className='w-100 object-fit-cover h-120 ob_top' />
                </div>
            </header>
        </div>
    )
}

export default Header;

