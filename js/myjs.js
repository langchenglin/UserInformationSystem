/**
 * Created by 郎程林 on 2017/3/10.
 */

$(function(){

$('.edit').on('click',function(){
    if($(this).html()=='编辑'){
        $(this).html('完成');
        $('.closes').css({
            "display":"block"
        })
        //让文本框显示
             $('.textarea').css({"display":"block"})

        //添加按钮显示
        $('.myAdd').css({"display":"inline-block"}).on('click',function(){
            if($('.textarea').val()==''){
                alert('请输入内容后添加')
            }else{
             $('<p><em>'+$('.textarea').val()+'<i class="fa fa-close closes"></i></em></p>').appendTo($('.addFooter'));
                $('.textarea').val('');
                $('.addFooter').find('.closes').css({
                    "display":"block"
                })
                $('.textarea').css({"display":"none"})
                $('.myAdd').css({"display":"none"})
            }
        })
        //删除
        $('.addFooter').on('click','.closes',function(){
            $(this).parents('p').remove();
        })

    }else{
        $(this).html('编辑');
        $('.addFooter').find('.closes').css({
            "display":"none"
        })
        $('.myAdd').css({
            "display":'none'
        })
        $('.textarea').css({"display":"none"})
    }
})


})