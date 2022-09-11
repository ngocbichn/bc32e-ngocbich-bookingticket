import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'

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
                        <h3 className='my-3'>CONFIRM SELECTION</h3>
                        {/* Selection Information */}
                        <table className="table table-lg table-bordered border border-3">
                            <thead>
                                <tr>
                                    <td className='text-warning'>Number</td>
                                    <td className='text-warning'>Price</td>
                                    <td className='text-warning'>Cancel</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A1</td>
                                    <td>100</td>
                                    <td>
                                        <button className="btn btn-danger">
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-warning'>Total</td>
                                    <td>100</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
