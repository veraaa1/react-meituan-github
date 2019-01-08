import React, { Component } from 'react';
import { connect } from 'react-redux'
import Home from '../components/Home/Home'
import { getFoods,getNav,getComments,getCart} from '../actions';
const Container =(props)=> <Home {...props}/>
const mapStateToProps = (state) => {
    return({
    foods:state.choosefoods,
    comments:state.comments
})}
export default connect(mapStateToProps,{getFoods,getNav,getComments,getCart})(Container)