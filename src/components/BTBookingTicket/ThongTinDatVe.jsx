import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatVe extends Component {
    render() {
        const { danhSachGheDangDat, huyGhe } = this.props
        return (
            <div>
                <h3 className='my-3'>CONFIRM SELECTION</h3>
                {/* Selection Information */}
                <table className="table table-lg table-bordered border border-3">
                    <thead>
                        <tr>
                            <td className='text-warning fs-5'>Number</td>
                            <td className='text-warning fs-5'>Price</td>
                        </tr>
                    </thead>
                    <tbody className='text-warning'>
                        {danhSachGheDangDat.map((gheDangDat, index) => {
                            return <tr key={index}>
                                <td>{gheDangDat.soGhe}</td>
                                <td>{gheDangDat.gia.toLocaleString()}</td>
                                <td>
                                    <button onClick={() => { huyGhe(gheDangDat.soGhe) }} className='btn btn-warning'>Cancel</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='text-warning fs-5'>Total</td>
                            <td className='text-warning fs-5'>{danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                return tongTien += gheDangDat.gia
                            }, 0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div >
        )
    }
}

const mapStateToProps = (rootReducers) => {
    return {
        danhSachGheDangDat: rootReducers.baiTapBookingTicket.danhSachGheDangDat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soGhe) => {
            dispatch({
                type: 'HUY_GHE',
                soGhe,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe)