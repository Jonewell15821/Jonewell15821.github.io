$(document).ready(function() {
    $("#image1").sparkle({
        color: "#FFFFFF",
        count: 100,
        overlap: 0,
        speed: 1,
        minSize: 4,
        maxSize: 10,
        direction: "both"
    });


});

function image4(){

    window.location.href = "http://www.baidu.com";
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