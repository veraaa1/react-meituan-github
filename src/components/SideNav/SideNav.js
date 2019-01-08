import React, { Component } from 'react';
import './sidenav.scss'

class SideNav extends Component {
    
    
    render() {
        const {nav,foodsControl}=this.props
       console.log(foodsControl);
       
        const {type,changeType}=this.props
        const side = nav.length?<ul className="sidenav">
            {
                nav.map((e,index)=><li key={e}><a href="javascript:;" onClick={()=>{ 
                    changeType(e)
                    console.log(foodsControl[`elements${index}`]);
                    
                   foodsControl.Bscroll.scrollToElement(foodsControl[`elements${index}`],500)
                }}  style={{backgroundColor:type===e?"#fff":"#eee"}}>{e}</a></li>)
            }
        </ul>:<></>
        return (
            <>
                {side}
            </>
        );
    }
}

export default SideNav;