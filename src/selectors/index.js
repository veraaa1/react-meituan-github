
export const calcuCart= (foods,footer)=>{
    // let newFood = []
    // let all = []
    // newFood = foods.map(e=>[...newFood,...e.foods])
    // newFood.map(e=> {
    //     all=[...all,...e]
    // })
    const all = foods.reduce((arr,ele)=>{
        return [...arr,...ele.foods]
    },[])
    return footer.product.reduce((num,ele)=>{
        return num = num + all.find(e=>e.name===ele).price*footer.num[ele]
    },0)
    
}
export const calcuNum = (footer)=>{
    return footer.product.reduce((num,ele)=>{
        return num = num + footer.num[ele]
    },0)
}
export const getTopArr=(foods)=>{
    const arr = foods.map((e,index)=>{
        return document.querySelectorAll('.foodlist')[index].offsetTop
    })
    return arr
}