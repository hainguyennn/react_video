import React, { Component } from 'react'

export default class DemoVongLap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
                { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
                { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
                { maSP: 3, tenSP: 'Vivo 850',hinhAnh:'./img/vivo850.png', gia: 3000 }
            ]
        }
    }

    //Viết phương thức render các sản phẩm thành các tag tr
    renderSanPham = () => {
        //Cách 2 sử dụng map để tạo động các tag jsx từ mảng 
       return this.state.mangSanPham.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.gia}</td>
                </tr>
            )
        })
    }

    render() {

        
        return (
            <div className="container">
                <h3 className="bg-dark p-5 text-center text-white">Demo vòng lặp React</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSanPham()}
                      
                    </tbody>
                </table>
            </div>
        )
    }
}
