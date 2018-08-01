$(document).ready(function(){
    $('#tb_agent').dataTable( {
        "ajax": {
            "type": "GET",
            "url": "/admin/statistic_data_agent_12",
            "contentType": "application/json; charset=utf-8",
            "data": function(result){
                return JSON.stringify(result);
            }
        },
        dom: 'Bfrtip',
        buttons: ['excel', 'pdf', 'print'],
    } );

    $('#tb_call_center').dataTable( {
        "ajax": {
            "type": "GET",
            "url": "/admin/statistic_data_call_center_12",
            "contentType": "application/json; charset=utf-8",
            "data": function(result){
                return JSON.stringify(result);
            }
        },
        dom: 'Bfrtip',
        buttons: ['excel', 'pdf', 'print'],
    } );

    $('#tb_service').dataTable( {
        "ajax": {
            "type": "GET",
            "url": "/admin/statistic_data_service_12",
            "contentType": "application/json; charset=utf-8",
            "data": function(result){
                return JSON.stringify(result);
            }
        },
        dom: 'Bfrtip',
        buttons: ['excel', 'pdf', 'print'],
    } );

    $('body').on('click', '#update', function(){
        var token = $("input[name=csrfmiddlewaretoken]").val();
        var month = $("body input[name=month]").val();
        var year = $("body input[name=year]").val();
        var all;
        if ($('body input:checkbox').is(":checked")){
                all = 1;
            }else {
                all = 0;
            }
        location.href="/agent/admin/statistic";
    });

});