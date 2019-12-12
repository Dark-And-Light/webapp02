
export default{
    total:state =>{//徽标
        var n = 0;
        state.carData.map(item => {
            n += item.count
        });
        return n||0;
    },
    clickTotal:state=>{//选中的商品数量
        let n = 0;
        state.carData.forEach(item => {
            if(item.click){
                n += item.count;
            }
        });
        return n ;
    },
    TotalPrice:state=>{//car中选中的商品总价
        let p = 0;
        state.carData.forEach(item=>{
            if(item.click){
                p += item.sell_price*item.count
            }
        })
        return p ;
    },
    clickState:state=>{//Car中switch的状态
        var o = {}
        state.carData.forEach(item=>{
           o[item.id] = item.click
        })
        return o;
    },
    carNumber:state=>{//car中numberBox的数量
        var o ={}
        state.carData.forEach(item=>{
            o[item.id] = item.count
        })
        return o;
    }
    
}