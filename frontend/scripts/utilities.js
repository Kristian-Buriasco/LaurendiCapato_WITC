function handleShowHideMenu(){
    
    $("#imgUtente").mouseenter(function(){
        $("#tooltip").removeClass("d-none");
    });

    $("#tooltip").mouseleave(function(){
        $(this).addClass("d-none");
    });

    $("#tooltip").mouseenter(function(){
        $(this).removeClass("d-none");
    });
}