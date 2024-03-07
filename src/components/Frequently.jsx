import React from 'react';
import Ellipse1 from '../assets/images/png/frequentellipseimg.png'

const Frequently = () => {
    return (
        <div id='about' className='pb-md-5 pb-4 pt-md-4 mt-md-5 mt-5 position-relative'>
            <div id='faq' className='container position-relative z-3'>
                <h2 data-aos="fade-right" className='ff_outfit fw-semibold fs_lg text_boldblack text-center mb-0 lh_120'>Frequently Asked Questions</h2>
                <div data-aos="zoom-in-up" className='mt-4 pt-md-3 w-100'>
                    <div class="accordion acc2 mx-auto gap-3 d-flex flex-column w-100" id="accordionExample1">
                        <div class="accordion-item p-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button ff_outfit fw-medium fs_md text_boldblack me-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    What products can I scan?
                                </button>
                            </h2>
                            <div id="collapseOne1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                                <div class="accordion-body me-3">
                                    <p className='mw_758 ff_outfit fs_2sm fw-normal op_80'>You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item p-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed ff_outfit fw-medium fs_md text_boldblack" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                                    Where can I use my rewards?
                                </button>
                            </h2>
                            <div id="collapseTwo1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div class="accordion-body me-3">
                                    <p className='mw_758 ff_outfit fs_2sm fw-normal op_80'>You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item p-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed ff_outfit fw-medium fs_md text_boldblack" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                                    What kind of impact can I make?
                                </button>
                            </h2>
                            <div id="collapseThree1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div class="accordion-body me-3">
                                    <p className='mw_758 ff_outfit fs_2sm fw-normal op_80'>You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item p-3">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed ff_outfit fw-medium fs_md text_boldblack" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                                    Which brands do you partner with?
                                </button>
                            </h2>
                            <div id="collapseFour1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
                                <div class="accordion-body me-3">
                                    <p className='mw_758 ff_outfit fs_2sm fw-normal op_80'>You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-absolute end-0 ellipse_top'>
                <img src={Ellipse1} alt="Ellipse1" className='mw_286 w-100 opacity-50 op_xl_1' />
            </div>
        </div>
    )
}

export default Frequently;


