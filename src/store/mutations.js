import {ADD_CAR,UPDATE_CLICK,REMOVE_GOODS,UPDATE_NUM} from './mutations-type'
import Vue from 'vue'
export default{
    [ADD_CAR](state,{data,num}){
        //假设商品在shoppingInfo中为找到
        let flag = false;
        state.carData.forEach((item,i) =>{
            if(item.id == data.id){
                item.click = true;//添加属性选中
                item.count += num;
                flag = true
                return
            }
        })
        //如果最终循环完 flag 还是false 则把商品push到购物车中
        if(!flag){
            console.log(data);
            
            data.click = true;//添加属性选中
            data.count = num;//添加数量属性
            state.carData.push(data)
        }
        localStorage.setItem('carData',JSON.stringify(state.carData));
    },
    [UPDATE_CLICK](state,{id}){//car状态更新
        state.carData =  state.carData.map(item=>{
            if(item.id == id ){
                // Vue.set(item,'click',!item.click)
                item.click = !item.click 
                localStorage.setItem('carData',JSON.stringify(state.carData));
                console.log("UPDATE_CLICK]",state.carData); 
            }
            return item
        })
        
    },
    [REMOVE_GOODS](state,{id}){
        state.carData.forEach((item,i)=>{
            if(item.id == id){
                state.carData.splice(i,1);
                localStorage.setItem('carData',JSON.stringify(state.carData));
                console.log('删除成功');
                return
            }
        })
    },
    [UPDATE_NUM](state,{id,num}){//更新数量
        state.carData.forEach((item,i) => {
            if(item.id == id){
                Vue.set(item,'count',num)
                state.carData.splice(i,1,item)
                localStorage.setItem('carData',JSON.stringify(state.carData));
                console.log('数量更新成功');
            }
        });
    }
}