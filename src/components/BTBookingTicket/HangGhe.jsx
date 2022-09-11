import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
    render() {
        const { hangGhe, soHangGhe, datGhe } = this.props;
        const renderGhe = () => {
            return hangGhe.danhSachGhe.map((ghe, index) => {
                let cssGheDaDat = "";
                if (ghe.daDat) {
                    cssGheDaDat = "gheDuocChon";
                };

                let cssGheDangDat = "";
                let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
                if (indexGheDangDat !== -1) {
                    cssGheDangDat = "gheDangChon";
                };

                return (
                    <button onClick={() => { datGhe(ghe) }} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                        {index + 1}
                    </button>
                );
            });
        };

        const renderSoHang = () => {
            return hangGhe.danhSachGhe.map((hang, index) => {
                return <button className="rowNumber">{hang.soGhe}</button>;
            });
        };

        const renderHangGhe = () => {
            if (soHangGhe === 0) {
                return (
                    <div>
                        {hangGhe.hang}
                        {renderSoHang()}
                    </div>
                );
            } else {
                return (
                    <div>
                        {hangGhe.hang}
                        {renderGhe()}
                    </div>
                );
            }
        };
        return <div className="">{renderHangGhe()}</div>;
    }
}

const mapStateToProps = (rootReducers) => {
    return {
        danhSachGheDangDat: rootReducers.baiTapBookingTicket.danhSachGheDangDat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                payload: ghe,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
