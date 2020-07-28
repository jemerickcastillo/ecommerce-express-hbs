module.exports = {
    total : function (data){
        let totalPrice = 0;
        for( x of data){
            totalPrice = totalPrice + x.price;
            console.log(totalPrice);
        }
        return totalPrice.toFixed(2);
    }
}