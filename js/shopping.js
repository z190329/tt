/**
 * Created by zongjuan.wang on 2016/6/1.
 */

/*关闭窗口*/
function close_plan(){
    window.close();
}
function del(){
    var flag=confirm("您确定要删除商品吗?");
    if(flag==true){
        var parent=document.getElementById("cartList");
        var one=document.getElementById("price0").parentNode;
        one.parentNode.removeChild(one);
        total();
        alert("删除成功!");

    }
}
function del1(){
    var flag=confirm("您确定要删除商品吗?");
    if(flag==true){
        var parent=document.getElementById("cartList");
        var one=document.getElementById("price1").parentNode;
        one.parentNode.removeChild(one);
        total();
        alert("删除成功!");

    }
}
function collection(){
    var flag=confirm("移入收藏后，将不再购物车显示，是否继续操作?");
    if(flag==true){
        alert("移入收藏成功!");
    }
}
function minus(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)-1;
    if(count<1){
        alert("不能再减了，再减就没有啦！");
    }
    else{
        document.getElementsByName("amount")[num].value=count;
        var totals=parseInt(prices*count);
        document.getElementById("price"+num).innerHTML="¥" +totals;
        total();
    }
}
function plus(num){
    var prices=document.getElementsByName("price")[num].value;
    var count=parseInt(document.getElementsByName("amount")[num].value)+1;
    document.getElementsByName("amount")[num].value=count;
    var totals=parseInt(prices*count);
    document.getElementById("price"+num).innerHTML="¥" +totals;
    total();
}
function total(){
    var prices=document.getElementsByName("price");
    var count=document.getElementsByName("amount");
    var sum=0;
    for(var i=0; i<prices.length;i++){
       sum+=prices[i].value*count[i].value;
    }
    document.getElementById("totalPrice").getElementsByTagName("span")[0].innerHTML="¥" +parseInt(sum);
}
total();