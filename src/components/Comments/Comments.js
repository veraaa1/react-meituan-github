import React, { Component } from 'react';
import { connect } from 'react-redux'
import './comments.scss'
class Comments extends Component {
    state={
        type:'all'
    }
    render() {
        const {comments}=this.props
        const{type}=this.state
        const newCon =comments.filter(e=>type!=="all"?e.rateType===type:e.rateType!=="all") 
        const commentLists = comments.length?<ul className="comment-List">
            {newCon.map(e=><li key={e.rateTime}><div className="comment-con">
                <img src={e.avatar} alt=""/>
                <div className="txt">
                    <p><span>{e.username}</span>
                    <span>{e.rateTime}</span></p>
                    <span>{e.text===""?"默认评价":e.text}</span>
                </div>
                </div></li>)}
        </ul>:<></>
        return (
            <div className="comments">
                <div className="choose">
                    <a href="javascript:;" onClick={()=>{
                       
                        this.changeComments("all")
                    }} style={{backgroundColor:type==="all"?'orange':'#eee',color:type==="all"?'#000':'#ccc',borderColor:type==="all"?"orange":"#eee"}}>全部</a>
                    <a href="javascript:;" onClick={()=>{
                        this.changeComments(0)
                    }}>好评</a>
                    <a href="javascript:;" onClick={()=>{
                        this.changeComments(1)
                    }}>差评</a>
                </div>
                {commentLists}
            </div>
        );
    }
    changeComments=(type)=>{
       this.setState({
           type:type
       })
    }
}
const mapStateToProps = (state) => ({
    comments:state.comments
})

export default connect(mapStateToProps)(Comments);