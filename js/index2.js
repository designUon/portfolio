$(function () {

    // var topBtn = $('.top-btn');
    // var delay = 1000;

    // topBtn.on('click', function() {

    //     $('html').stop().animate({scrollTop: 0}, delay);

    // });


    ////////////////////////// 리뉴얼 이미지 호버 ////////////////////////////


    $('.renewal_01').hover(function(){

        $('.renewal_01 img').stop().animate({
          top: -862,
        },3000)

        $('.renewal_01 img').css({
            opacity : '1',
        },1000)

        $('.click_btn').css({
            opacity : '0',
        })

    }, function(){

        $('.renewal_01 img').stop().animate({
            top: 0,
         },3000)

        $('.renewal_01 img').css({
            opacity : '0.3',
        },1000)

        $('.click_btn').css({
            opacity : '1',
        })

    })



    $('.renewal_02').hover(function(){

        $('.renewal_02 img').stop().animate({
          top: -880,
        },3000)

        $('.renewal_02 img').css({
            opacity : '1',
        },1000)

        $('.click_btn').css({
            opacity : '0',
        })

    }, function(){

        $('.renewal_02 img').stop().animate({
            top: 0,
         },3000)

        $('.renewal_02 img').css({
            opacity : '0.3',
        },1000)

        $('.click_btn').css({
            opacity : '1',
        })

    })


    $('.renewal_03').hover(function(){

        $('.renewal_03 img').stop().animate({
          top: -862,
        },3000)

        $('.renewal_03 img').css({
            opacity : '1',
        },1000)

        $('.click_btn').css({
            opacity : '0',
        })

    }, function(){

        $('.renewal_03 img').stop().animate({
            top: 0,
         },3000)

        $('.renewal_03 img').css({
            opacity : '0.3',
        },1000)

        $('.click_btn').css({
            opacity : '1',
        })

    })





    ////////////////////////////// 각각 팝업 띄우기 //////////////////////////////



    // each

    $('.design_in').each(function(index){

        $(this).attr('data-index',index);

    }).click(function(){
        i=$(this).attr('data-index');

        $('.portfolio_popup').show();
        $('body').css({
            overflowY: 'hidden',
        });

        $('.design_popup').css({
            display: 'none'
        });

        $('.design_popup').eq(i).css({
            display: 'block'
        });

    });


    // 일단 노가다로 한번..

    // $('.design_box03').click(function(){

    //     $('.portfolio_popup').show();
    //     $('body').css({
    //         overflowY: 'hidden',
    //     });

    //     $('.design_popup03').css({
    //         display: 'block'
    //     });

    //     $('.design_popup03').css({
    //         display: 'none'
    //     });

    // });

        
    ////////////////////////////// 팝업 닫기 //////////////////////////////


    $('.popup_close').click(function(){
        $('.portfolio_popup').hide();
       $('body').css({
        overflowY: 'auto',
        });
    });
















}); //end