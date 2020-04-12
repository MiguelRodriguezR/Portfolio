window.onload = function() {

    msieversion();

    function msieversion()
    {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
        {
            document.querySelector('.text-loader').innerHTML = 'Please use Chrome or Firefox'
        }
        else
        {
            init();
        }

        return false;
    }

    function init() {
        document.querySelector('.main-container').style.opacity = 1;
        document.querySelector('.loader').style.height = 0;
        document.querySelector('.text-loader').style.opacity = 0;
    }
};

