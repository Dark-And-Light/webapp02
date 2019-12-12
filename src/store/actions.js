import {ADD_CAR,UPDATE_CLICK,REMOVE_GOODS,UPDATE_NUM} from './mutations-type'
export default{
    addToCar(store,{data,num}){
        store.commit(ADD_CAR, {data,num})
    },
    updateClick(store,{id,status}){
        console.log('updateClick',id,status);
        store.commit(UPDATE_CLICK,{id,status})
    },
    removeCar(store,{id}){
        store.commit(REMOVE_GOODS,{id})
    },
    updateNum(store,{id,num}){
        store.commit(UPDATE_NUM,{id,num})
    }
}