$(document).ready(function() {

    $(".bt-plus").click(function(){
        var i = $(this).parent().find(".bl-label").val();
        i++;
        $(this).parent().find(".bl-label").val(i);
    });

    $(".bt-minus").click(function(){
        var i = $(this).parent().find(".bl-label").val();
        if(i>1){
            i--;
            $(this).parent().find(".bl-label").val(i);
        } else if(i<=1){
            alert("Неможливо виконати дію");
        }
    });

}