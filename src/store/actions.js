import {ADD_CAR,UPDATE_CLICK,REMOVE_GOODS,UPDATE_NUM} from './mutations-type'
export default{
    addToCar(store,{data,num}){
        store.commit(ADD_CAR, {data,num})
    },
    updateClick(store,{id}){
        console.log('updateClick',id);
        store.commit(UPDATE_CLICK,{id})
    },
    removeCar(store,{id}){
        store.commit(REMOVE_GOODS,{id})
    },
    updateNum(store,{id,num}){
        store.commit(UPDATE_NUM,{id,num})
    }
}