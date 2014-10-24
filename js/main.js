$(document).ready(function () {
    for (var i=1; i<=11; i++) {
        $(document.body).append('<a class="fancybox" rel="group" href="./image/full/image-0' + i + '-full.jpg"><img src="./image/full/image-0' + i + '-full.jpg" /></a>');
    }
    
    $(".fancybox").fancybox();
});