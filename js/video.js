
var userScrolled = false;

$(window).scroll(function () {
    userScrolled = true;
});
setInterval(function () {
    if (userScrolled) {
        playPauseVimeo();
        userScrolled = false;
    }
}, 300);

function playPauseVimeo() {
    document.querySelectorAll('.vimeo-item:not(.no-autoplay)').forEach(function (el, index) {
        var player = new Vimeo.Player(el.querySelector('iframe'));
        if ($(el).is(':in-viewport')) {
            //console.log('playing div:'+index )
            player.play();
        } else {
            //console.log('pausing div:'+index )
            player.pause();
        }
    })
}


$(document).ready(function () {
    playPauseVimeo()
    if ( document.getElementById('canv') ) {
        var c = document.getElementById('canv');
        var $ = c.getContext('2d');
        var col = function (x, y, r, g, b) {
            $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            $.fillRect(x, y, 1, 1);
        }
        var R = function (x, y, t) {
            return (Math.floor(192 + 99 * Math.cos((x * x - y * y) / 300 + t)));
        }
        var G = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 34)) / 300)));
        }
        var B = function (x, y, t) {
            return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
        }
        var t = 0;
        var run = function () {
            for (x = 0; x <= 35; x++) {
                for (y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.011;
            window.requestAnimationFrame(run);
        }
        run();
    }
})

    AOS.init({
        duration: 1000,
        mirror: false
    });
