// Orders table
$(document).ready(function () {

    $("#grid-data-orders").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" title=\"Remove\" onclick=\"$().getOrderDelete('" + row.id + "');\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getOrderEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().orderDetails('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-orders-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getOrderCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-orders").fadeIn('slow');

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-left",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
});

// Get order details by AJAX
(function ($) {
    $.fn.orderDetails = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Orders/Details/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $("#modal-body-details").html(data);
                $("#modal-details").modal("show");
            }
        });
    };
})(jQuery);

// get create form by AJAX
(function ($) {
    $.fn.getOrderCreate = function () {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Orders/Create",
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-orders-header').hide();
                $('#grid-data-orders').hide();
                $('#grid-data-orders-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getOrderEdit = function (id) {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Orders/Edit/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-orders-header').hide();
                $('#grid-data-orders').hide();
                $('#grid-data-orders-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// call confirm delete operation
(function ($) {
    $.fn.getOrderDelete = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Orders/Delete/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#modal-body-delete').html(data);
                $('#bt-confirm-delete').remove();
                $('#modal-footer-delete').prepend("<button type=\"button\" class=\"btn btn-default btn-danger\" onclick=\"$().postOrderDelete(" + id + ")\" id=\"bt-confirm-delete\">Confirm</button>");
                $('#modal-delete').modal("show");
            }
        });
    };
})(jQuery);

// call post delete operation
(function ($) {
    $.fn.postOrderDelete = function (id) {
        $('#modal-delete').modal("hide");

        $.ajax({
            url: "/Orders/DeleteConfirmed",
            dataType: "json",
            type: "POST",
            data: JSON.stringify({ id: id }),
            contentType: 'application/json',
            success: function (data) {
                $('#grid-data-orders').bootgrid("remove", [data]);
                toastr.success('The order was removed successfully.', 'Success');
            },
            error: function (data) {
                toastr.error('Something went wrong! Try again, and if continue failing please contact your system team.', 'Fail to remove');
            }
        });

    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelOrderForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-orders-header').fadeIn('slow');
        $('#grid-data-orders').fadeIn('slow');
        $('#grid-data-orders-footer').fadeIn('slow');
    };
})(jQuery);