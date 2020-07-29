/* reveal scroll */
$(document).scroll(function () {
    var vyskaOkna = $(window).height();
    var aktualniPozice = $(document).scrollTop();
    var hraniceZobrazeni = aktualniPozice + (vyskaOkna/2);

    //tento udaj potrebujeme k tomu abychom zjistili jestli jezste nejake invisible sekce existujou
    var delkaPoleInvisibleSekci = $(".invisible").length;

    //provadet tuto logiku pouze pokud existuje nejaka invisible sekce
    if (delkaPoleInvisibleSekci > 0) {
        var prvniInvisibleSekce = $(".invisible").first();
        var vyskaPrvniInvisibleSekce = prvniInvisibleSekce.height();
        var offsetPrvniInvisibleSekce = prvniInvisibleSekce.offset().top;

        //tyto v
        var konecOkna = aktualniPozice + vyskaOkna;
        var konecSekce = offsetPrvniInvisibleSekce + vyskaPrvniInvisibleSekce;

        if (hraniceZobrazeni > offsetPrvniInvisibleSekce || konecOkna > konecSekce) {
            prvniInvisibleSekce.removeClass("invisible");
        }
    }
    

});


/*
funkce ktera se stara of scrollovani na top
*/
$("#backToTop").click(function () {
    $("html").animate({
        scrollTop : 0
    }, 1000);
});

/*
funkce ktera se stara of scrollovani na sekce
*/
$(".menu ul li a").click(function (event) {
    //zabrani vychozimu chovani elementu
    event.preventDefault();

    //jquery
    var idCilovehoElementu = $(this).attr("href");
    //vanilla
    //console.log(this.hash);
    
    var poziceSekce = $(idCilovehoElementu).offset().top;
    var vyskaMenu = $(".headermenu").height();

    if ($(".headermenu").hasClass("sticky")) {
        $("html").animate({
            scrollTop : poziceSekce - vyskaMenu
        }, 1000);
    }else{
        $("html").animate({
            scrollTop : poziceSekce - vyskaMenu - vyskaMenu
        }, 1000);
    }
    


});


/* sticky menu */
function stickyOrNot () {
    var vyskaTopLine = $(".topline").height();
    var aktualniPozice = $(document).scrollTop();

    //console.log(vyskaTopLine);
    //console.log(aktualniPozice);

    if (aktualniPozice > vyskaTopLine) {
        $(".headermenu").addClass("sticky");
    }else {
        $(".headermenu").removeClass("sticky");
    }

}

//spustit tuto funkci jednou pri nacteni stranky
$(document).ready(function () {
    stickyOrNot();
});

//supustit tuto funkci pokazde kdyz dojde ke scrollu
//kdyz se funkce predava jako parametr, tak se nepisou kulate zavorky
$(document).scroll(stickyOrNot);



/*
    nabidka menu
*/
$("#normal-offer h2").click(function () {
    var idKategorie = $(this).data("kategorie");

    $(".kategorie h2").removeClass("active");
    $(this).addClass("active");


    $(".produkty div").removeClass("active");
    $(idKategorie).addClass("active");

});






