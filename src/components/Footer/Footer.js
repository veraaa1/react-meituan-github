import React, { Component } from 'react';
import { connect } from 'react-redux'
import './footer.scss'
import { calcuCart,calcuNum } from '../../selectors';
import {addCart,cutCart,blankCart } from '../../actions';
class Footer extends Component {
    state={
        isOpen:false
    }
    render() {
        const {footer,foods}=this.props
        const{isOpen}=this.state
        let newFood = []
        let all = []
        newFood = foods?foods.map(e=>[...newFood,...e.foods]):[]
        newFood.map(e=> {
            all=[...all,...e]
        })
        const ul = footer.product.length?<ul className="cart-list">
            {footer.product.map(e=><li key={e}><span>{e}</span>
            <span>
                ￥{
                   all.length?all.find(ele=>ele.name===e).price:0
                    }
                </span> 
            
            <div className="calc"> 
             <button onClick={()=>{
                this.cutCart(footer,e)
                  }}>-</button>
                  <span>{footer.num[e]}</span>
                  <button onClick={()=>{
                      this.addCart(footer,e)
                  }}>+</button>
                  </div>
                  </li>)}
        </ul>:<></>
        return (
            <footer>
                {
                    isOpen?<div className="cart" >
                    <div onClick={this.blankCart}>{footer.product.length?'清空购物车':'空空的口袋'}</div>
                    <p>一号口袋</p>
                    {
                        ul
                    }
                    </div>:<></>
                }
               <div className="footer-con">
                        {calcuNum(footer)===0?<></>:<span className="num">{calcuNum(footer)}</span>}
                       <div className="footer-left" onClick={this.opens}>
                           <a href="javascript:;" style={{backgroundColor:footer.product.length?'yellow':'#eee'}}>
                           <svg className="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="40" height="40"  ><defs><style/></defs><path fill={footer.product.length?'#000':'#ccc'} d="M908.629 743.765H257.877c-19.285 0-37.376-7.51-50.859-21.163-13.482-13.653-20.992-31.573-20.821-50.858l2.39-479.232c0-19.115-6.657-31.915-39.766-37.206h-.17l-95.574-16.384c-9.216-1.536-15.53-10.41-13.995-19.626 1.536-9.216 10.411-15.531 19.627-13.995l95.403 16.384c45.397 7.168 68.437 31.061 68.437 70.997l-2.389 479.403c0 10.07 3.755 19.456 10.923 26.453 7.168 7.168 16.554 11.094 26.624 11.094h650.752c9.386 0 17.066 7.68 17.066 17.066s-7.509 17.067-16.896 17.067z"/><path fill={footer.product.length?'#000':'#ccc'} d="M859.989 645.803l-602.624-1.877c-18.944-.171-36.693-7.51-50.005-20.992-13.312-13.483-20.48-31.232-20.48-50.176l1.877-353.963 681.814 50.858c30.89 1.195 55.125 26.283 55.125 57.173v253.441c0 36.181-29.525 65.536-65.706 65.536zm-602.282-36.011l602.453 1.877c17.408 0 31.573-14.165 31.573-31.402v-253.44c0-12.459-9.898-22.699-22.357-23.04h-.683l-645.632-48.128-1.536 317.44c0 9.728 3.755 18.944 10.582 25.941 6.485 6.827 15.7 10.752 25.6 10.752zM260.437 800.085a63.659 63.659 0 1 0 127.317 0 63.659 63.659 0 1 0-127.317 0z"/><path fill={footer.product.length?'#000':'#ccc'} d="M324.096 880.811c-44.544 0-80.725-36.181-80.725-80.725s36.181-80.726 80.725-80.726 80.725 36.182 80.725 80.726-36.181 80.725-80.725 80.725zm0-127.317c-25.77 0-46.592 20.821-46.592 46.592s20.821 46.592 46.592 46.592 46.592-20.821 46.592-46.592-20.821-46.592-46.592-46.592zM749.056 800.085a63.659 63.659 0 1 0 127.317 0 63.659 63.659 0 1 0-127.317 0z"/><path fill={footer.product.length?'#000':'#ccc'} d="M812.715 880.811c-44.544 0-80.725-36.181-80.725-80.725s36.181-80.726 80.725-80.726 80.725 36.182 80.725 80.726-36.181 80.725-80.725 80.725zm0-127.317c-25.77 0-46.592 20.821-46.592 46.592s20.821 46.592 46.592 46.592 46.592-20.821 46.592-46.592-20.821-46.592-46.592-46.592zM710.315 417.963H362.496c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.066 17.067-17.066h347.819c9.387 0 17.067 7.68 17.067 17.066s-7.68 17.067-17.067 17.067zm0 98.133H362.496c-9.387 0-17.067-7.68-17.067-17.067s7.68-17.066 17.067-17.066h347.819c9.387 0 17.067 7.68 17.067 17.066s-7.68 17.067-17.067 17.067z"/></svg>
                           </a>
                           <span>￥{calcuCart(foods,footer)}</span>
                       </div>
                       <button style={{backgroundColor:footer.product.length?'yellow':'#eee'}} disabled={footer.product.length?false:true}>去结算</button>
                   </div>
               
            </footer>
        );
    }
    opens=()=>{
        const{isOpen}=this.state
        this.setState({
            isOpen:!isOpen
        })
    }
    addCart=(cart,name)=>{
        const{addCart}=this.props
        addCart(cart,name)
        }
        cutCart=(cart,name)=>{
            const{cutCart}=this.props
            cutCart(cart,name)
            if(cart.product.length===0){
                this.setState({
                    isOpen:false
                })
            }
            }
    blankCart=()=>{
    const {blankCart}=this.props
    blankCart()
    }
}
const mapStateToProps = (state) => ({
    footer :state.footer,
    foods:state.choosefoods
})

export default connect(mapStateToProps,{cutCart,addCart,blankCart})(Footer);