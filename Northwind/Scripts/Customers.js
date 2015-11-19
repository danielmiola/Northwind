// Customers table
$(document).ready(function () {

    $("#grid-data-customers").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getCustomerEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().customerDetails('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-customers-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getCustomerCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-customers").fadeIn('slow');

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

// Get customer details by AJAX
(function ($) {
    $.fn.customerDetails = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Customers/Details/" + id,
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
    $.fn.getCustomerCreate = function () {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Customers/Create",
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-customers-header').hide();
                $('#grid-data-customers').hide();
                $('#grid-data-customers-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getCustomerEdit = function (id) {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Customers/Edit/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-customers-header').hide();
                $('#grid-data-customers').hide();
                $('#grid-data-customers-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelCustomerForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-customers-header').fadeIn('slow');
        $('#grid-data-customers').fadeIn('slow');
        $('#grid-data-customers-footer').fadeIn('slow');
    };
})(jQuery);