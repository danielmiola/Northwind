﻿// Orders table
$(document).ready(function () {

    $("#grid-data-orders").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Orders\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().details('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-orders-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-orders").fadeIn('slow');
});

// Get order details by AJAX
(function ($) {
    $.fn.details = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Orders/Details/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $(".modal-body").html(data);
                $(".modal").modal("show");
            }
        });
    };
})(jQuery);

// get create form by AJAX
(function ($) {
    $.fn.getCreate = function () {
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
    $.fn.getEdit = function (id) {
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

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-orders-header').fadeIn('slow');
        $('#grid-data-orders').fadeIn('slow');
        $('#grid-data-orders-footer').fadeIn('slow');
    };
})(jQuery);