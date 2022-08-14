$(document).ready(function(){
$("#list").submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let address = $("#address").val();
    let number = $("#number").val();
    let itm1 =  $("#item1").val();
    let itm2 =  $("#item2").val();
    let itm3 =  $("#item3").val();
    let itm4 =  $("#item4").val();
    let itm5 =  $("#item5").val();
    let itm6 =  $("#item6").val();

    let order = ["#itm1","#itm2","#itm3","#itm4","#itm5","#itm6"];
    let newOrder = order.sort();
    console.log(newOrder);

    $(".name1").append(name);
    $(".address1").append(address);
    $(".number1").append(number);
    $(".itm1").append(itm1);
    $(".itm2").append(itm2);
    $(".itm3").append(itm3);
    $(".itm4").append(itm4);
    $(".itm5").append(itm5);
    $(".itm6").append(itm6);
    $(".items").sort();
    


    $(".output").show();
});
});