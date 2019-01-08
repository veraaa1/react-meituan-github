import React, { Component } from 'react';
import './foodlist.scss'
import Bscroll from 'better-scroll'
import { getTopArr } from '../../selectors';
class FoodLists extends Component {
   state={
       showFood:null
   }
   componentDidUpdate(prevProps, prevState) {
    //    只要更新了 props 或者 state 下面的判断就重新执行，所以会重新生成滚动条
       const {foods,changeType}=this.props
      console.log(foods);
      
       if(foods.length&&!this.isScroll){
           console.log(111);
         this.isScroll=true
           this.Bscroll=new Bscroll(this.wraper,{mouseWheel:true,probeType:3})
           this.Bscroll.on('scroll',({x,y})=>{
            //    原生 js 的 offsetTop 获取 元素距离父级顶部的距离来计算什么时候更新 state
            //通过 foods 数组 创建一个新的数组，每个类别的div距离文档顶部的距离
           const newTop = getTopArr(foods)
           let types = newTop.length -1
               for(let i = 0;i<newTop.length -1 ;i++){
                   if(-y>=newTop[i]&&-y<newTop[i+1]){
                        types = i
                   }
               }
             console.log(types);
            changeType(types===0?'热销榜':types===1?'优惠榜':types===2?'精品榜':'')
           })
       }
   }
    render() {
      const{foods,footer}=this.props
      const{showFood}=this.state
      const foodlist=foods.length?foods.map((ele,index)=>
        <div className="foodlist" key={ele.name} ref={(single)=>{
            this[`elements${index}`]=single
        }}>
            <a id={ele.name}><p className="type">{ele.name}</p></a>
          <ul className="foods">
          {
              ele.foods.map(e=><li key={e.id} >
              <img src={e.icon} alt="" onClick={()=>{
                  this.showFood(e.id)
              }}/>
              <div>
                <span>{e.name}</span>
                <span>{e.price}元</span>
                <span>赞{e.rating}</span>
                <span>已售{e.sellCount}</span>
              </div>
              <div className="calc"> {footer.num[e.name]?<div className="blank"><button onClick={()=>{
                      this.cutCart(footer,e.name)
                  }}>-</button><span>{footer.num[e.name]}</span></div>:<div className="blank"></div>}<button onClick={()=>{
                      this.addCart(footer,e.name)
                  }}>+</button></div>
                  </li>)
          }
        </ul>
        </div>
      ):<></>
      
        return (
            <div className="all" ref={(wraper)=>{
                this.wraper = wraper
            }} >
                <div className="content">
                {
                    foodlist  
                }
                </div>
               {showFood?<div className=
               "show-Food">
                  <img src={showFood.image} alt=""/>
                  <p>{showFood.name}</p>
                  <p>{showFood.description}</p>
                  <p>{showFood.info}</p>
               </div>:<></>}
            </div>
        );
    }
    addCart=(cart,name)=>{
    const{addCart}=this.props
    addCart(cart,name)
    }
    cutCart=(cart,name)=>{
        const{cutCart}=this.props
        cutCart(cart,name)
        }
    showFood=(id)=>{
        const {foods}=this.props
        let newFood = []
        let all = []
        newFood = foods.map(e=>[...newFood,...e.foods])
        newFood.map(e=> {
            all=[...all,...e]
        })
        const showfood = all.find(e=>e.id===id)
    this.setState({
        showFood:showfood
    })
    }
}

export default FoodLists;