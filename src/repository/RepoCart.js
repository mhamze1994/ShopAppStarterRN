
import * as RepoProduct from './RepoSample';

export let userCart = [];

export function isAdded(productId){
    return userCart.findIndex(item => item.pId === productId) >=0;
}

export function put(productId , count){
    const idx = userCart.findIndex(item => item.pId === productId);
    let obj = {
        pId :  productId,
        pCount : count
    };
    if (idx < 0){
        userCart.push(obj);
    }else{
        userCart[idx] = obj;
    }

}

export function remove(productId){
    const idx = userCart.findIndex(item => item.pId === productId);
    if (idx >= 0){
        userCart.splice([idx], 1);
    }   
}

export function getTotalCost(){
    let totalCost = 0;

    for (let i = 0 ; i < userCart.length ; i++){
        let item = userCart[i];
        totalCost += item.pCount * RepoProduct.getProduct(item.pId).price; 
    }

    return totalCost;
}