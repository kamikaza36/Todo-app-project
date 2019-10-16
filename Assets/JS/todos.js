//check off
$("ul").on("click", "li",(function(){
    $(this).toggleClass("completed");
}));

//click on x to delete
$("ul").on("click", "span", (function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
}));

//create todo
$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //spremamo input u varijablu
        var todoText = $(this).val();
        $(this).val("");
        //kreiranje novog li i dodavanje u ul
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
    }
});

//toggle todo
$(".fa-plus").click(function(){
    $("input[type=text").fadeToggle();
});
