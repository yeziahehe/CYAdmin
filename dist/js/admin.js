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

    $("#user").DataTable({
        "info": false,
        "lengthChange": false,
        /*"sPaginationType": "full_numbers",*/
        "oLanguage": {
            "sLengthMenu": "每页显示 _MENU_ 条记录",
            "sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
            "sInfoEmpty": "没有数据",
            "sInfoFiltered": "(从 _MAX_ 条数据中检索)",
            "sZeroRecords": "没有检索到数据",
            "sSearch": "",
            "sSearchPlaceholder": "搜索",
            "oPaginate": {
                "sFirst": "首页",
                "sPrevious": "&laquo;",
                "sNext": "&raquo;",
                "sLast": "尾页"
            }
        }
    });

})();
