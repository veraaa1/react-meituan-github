import axios from 'axios'
import * as foodsType from '../constants/choosefood';
import * as navType from '../constants/sidenav'
import * as commentsType from '../constants/Rating'
import * as cartsType from '../constants/footer'
export const getFoods =()=>{
    return dispatch=>axios.get(`http://129.204.120.66:3008/goods`).then(res=>{
     
        dispatch({
            type:foodsType.GET_FOODS,
            allfoods:res.data
        })
    })
}

//获取导航
export const getNav=()=>{
    return dispatch=>{
        axios.get(`http://129.204.120.66:3008/goods`).then(res=>{
            const allnav = res.data.map(e=>e.name)
            dispatch({
                type:navType.GET_NAV,
                nav:allnav
            })
        })
    }
}

//获取评论
export const getComments=()=>{
    return dispatch=>{
        axios.get(`http://129.204.120.66:3008/ratings`).then(res=>{
            dispatch({
                type:commentsType.GET_RATING,
                comments:res.data
            })
        })
    }
}
//获取购物车

export const getCart=()=>{
    return dispatch=>{
        axios.get(`http://129.204.120.66:3008/carts`).then(res=>{
            dispatch({
                type:cartsType.GET_CART,
                cart:res.data
            })
        })
    }
}

//加入购物车
export const addCart=(cart,name)=>{
    if(cart.product.indexOf(name)===-1){
        cart.product.push(name)
        cart.num[name]=1
    }
   else{
    cart.num[name]++
   }
    return dispatch=>{
        axios.patch(`http://129.204.120.66:3008/carts`,cart).then(res=>{
            dispatch({
                type:cartsType.ADD_CART,
                cart:res.data
            })
        })
    }
}
//减少数量
export const cutCart=(cart,name)=>{
    if(cart.num[name]>1){
        console.log(cart.num[name]);
        cart.num[name]--
    }
   else{
    cart.product.splice(cart.product.indexOf(name),1)
    delete cart.num[name]
   }
console.log(cart);

    return dispatch=>{
       console.log(222);
       
        axios.patch(`http://129.204.120.66:3008/carts`,cart).then(res=>{
            console.log(res.data);
            dispatch({
                type:cartsType.DEL_CART,
                cart:res.data
            })
        })
    }
}
//清空购物车
export const blankCart = ()=>{
    const cart = {
        product:[],
        num:{}
    }
    return dispatch=>{
        axios.patch(`http://129.204.120.66:3008/carts`,cart).then(()=>{
            dispatch({
                type:cartsType.BLANK_CART,
                cart:cart
            })
        })
    }
}