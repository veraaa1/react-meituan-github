import React, { Component } from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'
import { BrowserRouter as Router } from 'react-router-dom';
import Swipeable from 'react-swipeable'
class Home extends Component {
   state={
       isUp:false
   }
    
    componentDidMount() {
        const {getFoods,getNav,getComments,getCart} = this.props
        getFoods()
        getNav()
        getComments()
        getCart()
    }
    render() {
        const {foods}=this.props
        return (
            <Router>
                <>
               <Header isUp={this.state.isUp}/>
               <Swipeable onSwipedUp={()=>{this.Go(true)}} onSwipedDown={()=>{this.Go(false)}}>
                  <Main foods={foods} isUp={this.state.isUp}/>
               </Swipeable>
               </>
            </Router>
        );
    }
    Go=(type)=>{
                this.setState({
                    isUp:type
                  })
    }
}

export default Home;