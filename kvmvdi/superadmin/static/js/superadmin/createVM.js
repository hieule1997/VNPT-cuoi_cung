$(document).ready(function(){
    $("#i_submit").click(function() {
        var token = $("input[name=csrfmiddlewaretoken]").val();
        var svname = $("input[name=svname]").val();
        var description = $("input[name=description]").val();
        var image = document.getElementById("mySelect_image").value;
        var ops = $("input[name=svip]").val();
        var network = document.getElementById("mySelect").value;
        var ram = $("input[name=ram]").val();
        var vcpus = $("input[name=vcpus]").val();
        var disk = $("input[name=disk]").val();
        $.ajax({
            type:'POST',
            url:location.href,
            data: {'svname': svname, 'ops': ops, 'description': description, 'csrfmiddlewaretoken':token, 'image': image, 'network': network, 'ram': ram, 'vcpus': vcpus,'disk': disk},
            success: function(){
                document.getElementById("close_modal").click();
                setTimeout(function(){
                    $('#list_vm').DataTable().ajax.reload(null,false);
                }, 8000);
            }
        });
    });

    $("#ops_submit").click(function() {
        var token = $("input[name=csrfmiddlewaretoken]").val();
        var nameops = $("input[name=nameops]").val();
        var ipsv = $("input[name=ipsv]").val();
        var username = $("input[name=username]").val();
        var password = $("input[name=password]").val();
        var project = $("input[name=project]").val();
        var userid = $("input[name=userid]").val();
        var projectid = $("input[name=projectid]").val();
        $.ajax({
            type:'POST',
            url:location.href,
            data: {'nameops': nameops, 'ipsv': ipsv, 'csrfmiddlewaretoken':token, 'username': username, 'password': password, 'project': project, 'userid': userid, 'projectid': projectid},
            success: function(){
                document.getElementById("close_modal_ops").click();
                $('.list_vm').DataTable().ajax.reload(null,false);
            }
        });
    });

    $("#id02").on('show.bs.modal', function(event){
        var button = $(event.relatedTarget);
        var ip = button.data('title');
        $("input[name=svip]").val(ip);
        $("input[name=svname]").val("");
        $("input[name=description]").val("");
        $("input[name=ram]").val("0.5");
        $("input[name=vcpus]").val("1");
        $("input[name=disk]").val("20");
  });

    $("#id01").on('show.bs.modal', function(event){
        $("input[name=nameops]").val("");
        $("input[name=ipsv]").val("");
        $("input[name=username]").val("");
        $("input[name=password]").val("");
        $("input[name=project]").val("");
        $("input[name=userid]").val("");
        $("input[name=projectid]").val("");
});
});