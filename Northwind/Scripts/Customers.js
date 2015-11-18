// Customers table
$(document).ready(function () {

    $("#grid-data-customers").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Customers\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().details('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-customers-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-customers").fadeIn('slow');
});

// Get customer details by AJAX
(function ($) {
    $.fn.details = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Customers/Details/" + id,
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
    $.fn.getEdit = function (id) {
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
    $.fn.cancelForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-customers-header').fadeIn('slow');
        $('#grid-data-customers').fadeIn('slow');
        $('#grid-data-customers-footer').fadeIn('slow');
    };
})(jQuery);