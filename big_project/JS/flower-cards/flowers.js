$(".flower-cards").isotope({
    itemSelector: '.inner-card',
    layoutMode: 'fitRows'
})

$(".filter .filter-left li").on('click',function(){
    $(".filter-left li").removeClass("active");
    $(this).addClass("active");

    var filctg = $(this).attr("data-filter");
    $(".flower-cards").isotope({
        filter: filctg
    })

    if(filctg != "*"){
        $(".inner-card").addClass("space");
    }
    else if(filctg == "*"){
        $(".inner-card").removeClass("space");
    }
})