import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss'
class Header extends Component {
    
    render() {
    const{isUp}=this.props
        return (
            <header style={{marginTop:isUp?'-205px':0}}>
                <div className="public">
                    <ul >
                        <li><a href="javascript:;"><svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><style/></defs><path d="M710.4 838.4l-352-345.6c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l352 352c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-38.4 0-51.2z" fill="#fff"/><path d="M358.4 531.2l352-352c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-352 352c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0z" fill="#fff"/></svg></a></li>
                        <li><a href="javascript:;"><svg className="icon" viewBox="0 0 1059 1024" xmlns="http://www.w3.org/2000/svg" width="20.684" height="20"><defs><style/></defs><path d="M463.655 773.185a352.197 352.197 0 1 1 352.197-352.197 352.57 352.57 0 0 1-352.197 352.197zm0-641.951A289.817 289.817 0 1 0 753.472 421.05a290.129 290.129 0 0 0-289.817-289.817z" fill="#fff"/><path d="M952.65 912.48a31.19 31.19 0 0 1-21.77-8.859L679.614 657.97a31.19 31.19 0 0 1 43.666-44.601L974.546 859.02a31.19 31.19 0 0 1-21.833 53.522z" fill="#fff"/></svg></a></li>
                        <li><a href="javascript:;"><svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><style/></defs><path d="M791.2 1018.4c-8.8 0-16.8-2.4-24.8-6.4l-224-123.2c-9.6-4.8-20-8-30.4-8-10.4 0-20.8 2.4-30.4 8l-224 123.2c-8 4-16 6.4-24.8 6.4-15.2 0-30.4-7.2-40.8-19.2-11.2-12.8-15.2-29.6-12.8-47.2l43.2-260.8c4-21.6-3.2-44-18.4-59.2L21.6 446.4A57.6 57.6 0 0 1 8 387.2c6.4-20 23.2-34.4 43.2-37.6l250.4-38.4c20.8-3.2 39.2-16.8 48.8-36.8l112-237.6c9.6-20 27.2-31.2 48.8-31.2 20.8 0 39.2 12 48 31.2l112 237.6c9.6 20 28 33.6 48.8 36.8l250.4 38.4c20 3.2 36.8 16.8 43.2 37.6 7.2 20.8 1.6 44-13.6 59.2L818.4 631.2c-15.2 15.2-22.4 37.6-18.4 59.2l43.2 260.8c3.2 17.6-1.6 34.4-12.8 47.2-8.8 12.8-23.2 20-39.2 20zM512 831.2c19.2 0 37.6 4.8 54.4 13.6l236.8 130.4-6.4-14.4v-.8l-42.4-260.8c-6.4-37.6 5.6-76 32-102.4L968 412c2.4-2.4 3.2-6.4 1.6-9.6v-3.2l-256-39.2c-37.6-5.6-69.6-29.6-86.4-64.8L512 50.4 396 295.2c-16.8 35.2-48.8 59.2-86.4 64.8l-260 40 5.6 5.6c0 1.6.8 4 2.4 6.4l181.6 184.8c26.4 26.4 38.4 64.8 32 102.4L228 960v4l1.6 7.2 228.8-125.6c16-9.6 34.4-14.4 53.6-14.4z" fill="#fff"/></svg></a></li>
                        <li><a href="javascript:;"><svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><defs><style/></defs><path d="M200.753 408.251c-57.062 0-103.749 46.687-103.749 103.749s46.687 103.749 103.749 103.749S304.502 569.062 304.502 512s-46.687-103.749-103.749-103.749zm622.494 0c-57.062 0-103.749 46.687-103.749 103.749s46.687 103.749 103.749 103.749S926.996 569.062 926.996 512s-46.687-103.749-103.749-103.749zm-311.247 0c-57.062 0-103.749 46.687-103.749 103.749S454.938 615.749 512 615.749 615.749 569.062 615.749 512 569.062 408.251 512 408.251z" fill="#fff"/></svg></a></li>
                    </ul>
                </div>
                <div className="header-inner" style={{marginTop:isUp?'-205px':0}}>
                    <h1>一品粥铺</h1>
                    <div className="description">
                        <p>配送约30分钟</p>
                        <p>公告：本店是新店，欢迎小主品尝</p>
                        <div>
                            <span>10减9</span>
                            <span>25减13</span>
                        </div>
                    </div>
                    <img src="https://p1.meituan.net/waimaipoi/8e85c9190e0c218c1c2aac83154d7dbc148160.jpg" alt=""/>
                </div>
                <div className="nav-content">
                    <nav>
                        <NavLink to="/" exact>点菜</NavLink>
                        <NavLink to="/comments">评论</NavLink>
                        <NavLink to="/seller">商家</NavLink>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;