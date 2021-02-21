
// 系统优化（手风琴）
(function (){
    $('#zhongjian7 ul li h3').click(function() {
        $('#zhongjian7 ul li.active').removeClass('active');
        $(this).parents('li').addClass('active');
    });
    
})();

// 新增场景
(function () {
    $('#zhongjian4 ul li').click(function () {
        $('#zhongjian4 ul li.active').removeClass('active');
        $(this).addClass('active').parents('#zhongjian4').css('background','url(./img/section4_big_0' + ($(this).index() + 1) + '.png) no-repeat center').find('.img').css('background','url(./img/section4_big_0' + ($(this).index() + 1) + '_bottom.png) no-repeat center top');
    });
})();

// 视频加载
(function () {
    var flag = false;
    var video = $('#zhongjian .beijing .video2 .move').html();
    $('#zhongjian .beijing .video a').click(function (e) {
        $('#zhongjian .beijing .video2').css('display' , 'block');
        flag = true
        if (flag) {
            $('#zhongjian .beijing .video2 .move').html(video);
        }
    });
    $('#zhongjian .beijing .video2 .ext').click(function () {
        
        $('#zhongjian .beijing .video2 .move').html('');
        $('#zhongjian .beijing .video2').css('display' , 'none');
    });

})();


// 版本咨询选项卡
(function () {
    // 最新活动/商城新品
    $('#zhongjian2 .demo .list').on('click','li',function () {
        $('#zhongjian2 .demo .list li.active').removeClass('active');
        $(this).addClass('active');
        if ($(this).index() == 0) {
            $('#zhongjian2 .demo .neirong .neirong1').css('display' , 'none');
            $('#zhongjian2 .demo .neirong .neirong2').css('display' , 'block');
        }else {
            $('#zhongjian2 .demo .neirong .neirong1').css('display' , 'block');
            $('#zhongjian2 .demo .neirong .neirong2').css('display' , 'none');
        }
    });

    //商城新品
    $('#zhongjian2 .demo .neirong .tab').on('click','li' , function () {
        var index = $(this).index();
        $('#zhongjian2 .demo .neirong1 .right .active').removeClass('active');
        $('#zhongjian2 .demo .neirong1 .right div').eq(index).addClass('active');
        
    });

    //最新活动
    $('#zhongjian2 .neirong .neirong2 ul').on('click' , 'li' , function () {
        var index = $(this).index();
        var len = $('#zhongjian2 .neirong .neirong2 .active').length;
        for (var i = 0 ; i < len ; i ++) {
            $('#zhongjian2 .neirong .neirong2 .active').eq(0).removeClass('active');
        }
        $('#zhongjian2 .neirong .neirong2 li').eq(index).addClass('active');
        $('#zhongjian2 .neirong .neirong2 .right div').eq(index).addClass('active');

    });
    

})();


// 新增玩法轮播图
(function () {
    var flag = true;
    var right = $('#zhongjian3 .neirong .btn .right');
    var left = $('#zhongjian3 .neirong .btn .left');
    var list = $('#zhongjian3 .neirong .bottom');
    var img = $('#zhongjian3 .neirong .img ul');
    var lang = 1200 ;
    var cn =0; //当前索引

    //左键
    left.click(function () {
        flag = false;
            if (cn == 0){
                cn = 4;
            }
        cn --;
        move();
        clearInterval(timer);
    });


    //右键
    right.on('click',function () {
        flag = false;
        cn ++; 
        if (cn == 4){
                cn = 0;
        }  
        move();
    });

    function move() {
        img.css({'transition':'0.3s' , 'transform' : 'translateX(' + -cn * lang + 'px)'});
        list.children('.active').removeClass('active');
        list.children('span:nth-of-type(' + (cn + 1) + ')').addClass('active');
    }

    var timer = setInterval(function () {
        cn ++; 
        if (cn == 4){
                cn = 0;
        }  
         move();
    },2000);


})();



//游戏特色
(function () {
    var li = $('#zhongjian8 .warper ul li');
    var left = $('#zhongjian8 .btn .left');
    var right = $('#zhongjian8 .btn .right');
    var span = $('#zhongjian8 .bottom span');
    var active = 1;
    var shang = 0;
    var xia = 2;


    left.click(function () {
        active --;
        shang = active -1 ;
        xia = active + 1;
        if (active == -1){active = 9}
        move();
    });
    right.click(function () {
        active ++;
        shang = active -1 ;
        xia = active + 1;
        if (active == 10) {
            active = 0;
            xia = active + 1;
        }
        if (shang == 10) {
            shang = 0;
        }
        if (xia == 10) {
            xia = 0;
        }
        move();
    });
    function move() {
        $('#zhongjian8 .warper ul li.active').removeClass('active');
        $('#zhongjian8 .warper ul li.shang').removeClass('shang')
        $('#zhongjian8 .warper ul li.xia').removeClass('xia');
        li.eq(active).addClass('active');
        li.eq(shang).addClass('shang');
        li.eq(xia).addClass('xia');
        $('#zhongjian8 .bottom span.active').removeClass('active');
        span.eq(active).addClass('active');
    }

        var timer1 = setInterval(function() {
            active ++;
            shang = active -1 ;
            xia = active + 1;
            if (active == 10) {
                active = 0;
                xia = active + 1;
            }
            if (shang == 10) {
                shang = 0;
            }
            if (xia == 10) {
                xia = 0;
            }
            move();
        },2000);
    
        
    

})();


//新增载具
(function () {
    var flag = true;
    var right = $('#zhongjian5  .btn .right');
    var left = $('#zhongjian5  .btn .left');
    var list = $('#zhongjian5  .bottom');
    var img = $('#zhongjian5 .img ul');
    var lang = 1200 ;
    var cn =0; //当前索引

    //左键
    left.click(function () {
        flag = false;
            if (cn == 0){
                cn = 4;
            }
        cn --;
        move();

    });


    //右键
    right.on('click',function () {
        flag = false;
        cn ++; 
        if (cn == 4){
                cn = 0;
        }  
        move();

    });

    function move() {
        img.css({'transition':'0.3s' , 'transform' : 'translateX(' + -cn * lang + 'px)'});
        list.children('.active').removeClass('active');
        list.children('span:nth-of-type(' + (cn + 1) + ')').addClass('active');
    }

        var timer = setInterval(function () {
            cn ++; 
            if (cn == 4){
                    cn = 0;
            }  
             move();
        },2000);
    
    


})();