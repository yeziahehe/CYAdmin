/**
 * Created by fanqifeng on 16-8-19.
 */

(function () {
    'use strict';

    $('.exit').click(function () {
        $('.exit-dialog').css('display', 'block');
        $('.exit-mask').css('display', 'block');
    });
    $('.close-dialog').click(function () {
        $('.exit-dialog').css('display', 'none');
        $('.exit-mask').css('display', 'none');
    });

})();