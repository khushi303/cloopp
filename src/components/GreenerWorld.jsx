import React from 'react';
import PhoneScreen from '../assets/images/png/phonescreen.png'
import Ellipse2 from '../assets/images/png/greenellipse.png';

const GreenerWorld = () => {
    return (
        <div id='career' className=' pt-md-4 pb-lg-5 pb-4 position-relative'>
            <h3 data-aos="fade-right" className='ff_outfit fs_lg fw-semibold text-center text_boldblack lh_120 mw_675 mx-auto mb-lg-5 mb-4 px-lg-0 px-4'>Creating a Greener World Is Now As Easy As 1-2-3</h3>
            <div className='container'>
                <div className='row justify-content-lg-between justify-content-center'>
                    <div data-aos="zoom-in" className='col-lg-6 col-10 d-flex align-items-center justify-content-center'>
                        <img src={PhoneScreen} alt="PhoneScreen" className='w-100 mw_357' />
                    </div>
                    <div data-aos="zoom-in" className='col-lg-6 col-12 mt-lg-0 mt-5'>
                        <div>
                            <div className='black_box d-flex align-items-center justify-content-center'>
                                <p className='ff_outfit fs_2md fw-semibold lh_110 text_yellow mb-0'>1</p>
                            </div>
                            <h3 className='mt_20 ff_outfit fs_md lh_125 fw-medium mb_10'>Scan The Barcode Before Recycling</h3>
                            <p className='ff_outfit fw-normal f_2sm lh_151 text_boldblack mw_lg_471 mb-0 op_80'>Open Cloopp, scan the product's barcode, and rack up points with every item you keep out of the landfill.</p>
                        </div>
                        <div className='mt-4'>
                            <div className='black_box d-flex align-items-center justify-content-center'>
                                <p className='ff_outfit fs_2md fw-semibold lh_110 text_yellow mb-0'>2</p>
                            </div>
                            <h3 className='mt_20 ff_outfit fs_md lh_125 fw-medium mb_10'>Get Paid For Products You Use</h3>
                            <p className='ff_outfit fw-normal f_2sm lh_151 text_boldblack mw_lg_501 mb-0 op_80'>Get rewarded for doing the right thing. Your daily items – from plastics to cardboard and beyond – are connected to the Cloopp App.</p>
                        </div>
                        <div className='mt-4'>
                            <div className='black_box d-flex align-items-center justify-content-center'>
                                <p className='ff_outfit fs_2md fw-semibold lh_110 text_yellow mb-0'>3</p>
                            </div>
                            <h3 className='mt_20 ff_outfit fs_md lh_125 fw-medium mb_10'>Get Paid For Products You Use</h3>
                            <p className='ff_outfit fw-normal f_2sm lh_151 text_boldblack mw_lg_501 mb-0 op_80'>Earn exclusive coupons, promo codes, and cashback from the hottest brands and track your environmental impact.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ellipse_green position-absolute bottom-50 start-0 d-lg-block d-none'>
                <img src={Ellipse2} alt="Ellipse2" className='w-100 mw_213' />
            </div>
        </div>
    )
}

export default GreenerWorld;


