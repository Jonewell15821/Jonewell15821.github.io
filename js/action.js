
function image4(){

    window.location.href = "./detail1.html";
}

function more(){
    var i = '    <div class="example">\n' +
        '        <a>\n' +
        '            <img src="./image/6.png">\n' +
        '        </a>\n' +
        '    </div>';
    debugger;
    var obj = $(i).html();

    $(".anli").append(obj);
}

$(function() {
    $('.ul1 li').click(function() {
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.tab-content').removeClass('show').eq(i).addClass('show');
    })
})