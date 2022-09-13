import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'
import ThongTinDatVe from './ThongTinDatVe'

export default class BTBookingTicket extends Component {
    renderHangGhe = () => {
        return data.map((hangGhe, index) => {
            return (
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index} />
                </div>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-8 text-center'>
                        <h1 className='mt-3'>MOVIE SEAT SELECTION</h1>
                        {/* Seat illustration */}
                        <div className='d-flex mt-5'>
                            <div className='d-flex align-items-center me-5'>
                                <button className='gheDuocChon me-2'></button>
                                <span>Reserved Seat</span>
                            </div>
                            <div className='d-flex align-items-center me-5'>
                                <button className='gheDangChon me-2'></button>
                                <span>Selected Seat</span>
                            </div>
                            <div className='d-flex align-items-center me-5'>
                                <button className='ghe me-2' style={{ margin: '0px' }}></button>
                                <span>Empty Seat</span>
                            </div>
                        </div>
                        <div className='mt-5 d-flex flex-column'>
                            <div className='screen mb-3'></div>
                            <div>{this.renderHangGhe()}</div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <ThongTinDatVe />
                    </div>
                </div>
            </div>
        )
    }
}
