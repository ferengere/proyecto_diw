'use strict';
$(document).ready(function() {
    console.log('LET\'S GET BUSY!');
    var $bc = $('ol.breadcrumb');
    $bc.on('click', 'a', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
