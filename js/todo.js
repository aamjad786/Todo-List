$(".box").on("click",function() {
    $("body").toggleClass("light-theme");
});
$(document).ready(function(){

    $("input[type='text']").hide();
    
    $("ul").on("click","li",function()
            {
               $(this).toggleClass("completed"); 
            });

    $("ul").on("click","span",function(event){
                    $(this).parent().fadeOut(500,function(){
                        $(this).remove();
                    });
                    event.stopPropagation();
                });
    
    $("input[type='text']").keypress(function(event)
                    {
                        if(event.which===13)
                        {
                            var addText=$(this).val();
                            $(this).val("");
                            $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> "+addText+"</li>");                        }
                    });
    $(".fa-pencil-alt").click(function()
                    {
                        $("input[type='text']").fadeToggle();
                    });
       

});

