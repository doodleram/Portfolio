$(document).ready(function(){

    $(".webstandard").click(function(e){
        e.preventDefault();
        $(".w_modal").show();
    });
    $(".quit").click(function(){
        $(".w_modal").hide();
    });
    //w_modal

    $(".overflow").click(function(e){
        e.preventDefault();
        $(".o_modal").show();
    });
    $(".quit").click(function(){
        $(".o_modal").hide();
    });
    //o_modal

    $(".pilates").click(function(e){
        e.preventDefault();
        $(".p_modal").show();
    });
    $(".quit").click(function(){
        $(".p_modal").hide();
    });
    //p_modal

    $(".applemusic").click(function(e){
        e.preventDefault();
        $(".a_modal").show();
    });
    $(".quit").click(function(){
        $(".a_modal").hide();
    });
    //a_modal

    $(".parallax").click(function(e){
        e.preventDefault();
        $(".x_modal").show();
    });
    $(".quit").click(function(){
        $(".x_modal").hide();
    });
    //x_modal

});