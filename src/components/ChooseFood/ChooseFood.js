import React, { Component } from 'react';
import FoodLists from '../FoodLists/FoodLists'
import SideNav from '../SideNav/SideNav'
import { connect } from 'react-redux'
import { addCart,cutCart } from '../../actions';
import './choosefood.scss'
class ChooseFood extends Component {
    state={
        type:'热销榜',
        ref:null
    
    }
    
    componentDidMount() {
        console.log(this.foodLists);
        this.setState({
            ref:this.foodLists
        })
        
    }
    
 
    render() {
        const {foods,nav,footer,addCart,cutCart}=this.props
        const {type,ref}=this.state
        console.log(ref);
        
        return (
            <div className="choosefood">
            <SideNav nav={nav} type={type} changeType={this.changeType} foodsControl={ref?ref:null}/>
                <FoodLists ref={(wraper)=>{
                    this.foodLists = wraper
                }} foods={foods} footer={footer} addCart={addCart} cutCart={cutCart} type={type} changeType={this.changeType}/>
            </div>
        );
    }
    changeType=(type)=>{
        this.setState({
            type:type
        })
        }
}
const mapStateToProps = (state) => ({
    foods:state.choosefoods,
    nav:state.sidenav,
    footer:state.footer
})

export default connect(mapStateToProps,{addCart,cutCart})(ChooseFood);