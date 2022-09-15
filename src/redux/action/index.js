//for add item to cart expo
export const addCart =(product)=>{
    return{
        type : "ADDITEM",
        payload : product
    }
}
//for delete item to cart expo
export const delCart =(product)=>{
    return{
        type : "DELITEM",
        payload : product
    }
}