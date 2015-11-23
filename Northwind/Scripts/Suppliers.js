// Suppliers table
$(document).ready(function () {

    $("#grid-data-suppliers").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Suppliers\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getSupplierEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().supplierDetails('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-suppliers-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getSupplierCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-suppliers").fadeIn('slow');
});

// Get suppliers details by AJAX
(function ($) {
    $.fn.supplierDetails = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Suppliers/Details/" + id,
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
    $.fn.getSupplierCreate = function () {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Suppliers/Create",
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-suppliers-header').hide();
                $('#grid-data-suppliers').hide();
                $('#grid-data-suppliers-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getSupplierEdit = function (id) {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Suppliers/Edit/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-suppliers-header').hide();
                $('#grid-data-suppliers').hide();
                $('#grid-data-suppliers-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelSupplierForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-suppliers-header').fadeIn('slow');
        $('#grid-data-suppliers').fadeIn('slow');
        $('#grid-data-suppliers-footer').fadeIn('slow');
    };
})(jQuery);