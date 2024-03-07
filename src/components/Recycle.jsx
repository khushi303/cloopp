import React from 'react';
import Accimg1 from '../assets/images/png/accimg1.png';
import Accimg2 from '../assets/images/png/accimg2.png';
import Accimg3 from '../assets/images/png/Accimg3.png';
import Recycleimg from '../assets/images/png/recyclingimg.png';
import BlueShadow from '../assets/images/png/blueshadow.png';
import WhiteLayer2 from '../assets/images/png/recyclelayer2.png';
import WhiteLayer1 from '../assets/images/png/recyclelayer.png';

const Recycle = () => {
    return (
        <div id='brand' className='pt_151 pt_180 bg_blue overflow-hidden pb_106 position-relative py-sm-5 pt-4 pb-5'>
            <div className='position-absolute start-0 end-0 z-3 top_layer'>
                <img src={WhiteLayer1} alt="WhiteLayer1" className='w-100 object-fit-cover' />
            </div>
            <div className='container py-lg-4 py-sm-5 py-4 my-lg-0 my-md-4'>
                <div className='row justify-content-between flex-lg-row flex-column-reverse'>
                    <div className='col-lg-6 col-12 position-relative z-2'>
                        <h3 data-aos="fade-right" className='ff_outfit fw-semibold fs_lg text-white lh_120 mb-4 pb-lg-3'>Recycling Has Never Been This Easy and Rewarding</h3>
                        <div data-aos="zoom-in-right" className='pe-xl-5 me-xxl-5'>
                            <div className="accordion acc1 gap-4 pe-xl-4 d-flex w-100 flex-column" id="accordionExample">
                                <div className="accordion-item d-flex gap-20 py-3 ">
                                    <div className='mw_40 w-100'>
                                        <img src={Accimg1} alt="Accimg1" className=' w-100' />
                                    </div>
                                    <div className='w-100'>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button ff_outfit text-white fs_md lh_130" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Exclusive Coupons & Rewards
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='ff_outfit fw-normal fs_2sm lh_151 text-white op_90 mb-0 mw_lg_402'>
                                                    Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item d-flex gap-20 py-3">
                                    <div className='mw_40 w-100'>
                                        <img src={Accimg2} alt="Accimg1" className=' w-100' />
                                    </div>
                                    <div className='w-100'>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed ff_outfit text-white fs_md lh_130" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Track Your Environmental Impact
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='ff_outfit fw-normal fs_2sm lh_151 text-white op_90 mb-0 mw_lg_402'>
                                                    Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="accordion-item d-flex align-items-center gap-20 py-3">
                                    <div className='mw_40 w-100'>
                                        <img src={Accimg3} alt="Accimg1" className=' w-100' />
                                    </div>
                                    <div className='w-100'>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed ff_outfit text-white fs_md lh_130" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Feel Good
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className='ff_outfit fw-normal fs_2sm lh_151 text-white op_90 mb-0 mw_lg_402'>
                                                    Cloopp partners with amazing brands to bring you coupons and deals you simply can’t get anywhere else.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-out" className='col-xl-5 col-lg-6 col-md-10 col-12 position-relative'>
                        <img src={Recycleimg} alt="Recycleimg" className='w-100 ' />
                        <img src={BlueShadow} alt="BlueShadow" className='mw_213 w-100 position-absolute blueshadow' />
                    </div>
                </div>
            </div>
            <div className='position-absolute start-0 end-0 z-3 bottom_layer'>
                <img src={WhiteLayer2} alt="WhiteLayer2" className='w-100 object-fit-cover' />
            </div>
        </div>
    )
}

export default Recycle
