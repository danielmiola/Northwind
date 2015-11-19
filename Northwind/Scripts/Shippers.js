// shippers table
$(document).ready(function () {

    $("#grid-data-shippers").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Shippers\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getShipperEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-shippers-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getShipperCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-shippers").fadeIn('slow');
});

// get create form by AJAX
(function ($) {
    $.fn.getShipperCreate = function () {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Shippers/Create",
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-shippers-header').hide();
                $('#grid-data-shippers').hide();
                $('#grid-data-shippers-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getShipperEdit = function (id) {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Shippers/Edit/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-shippers-header').hide();
                $('#grid-data-shippers').hide();
                $('#grid-data-shippers-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelShipperForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-shippers-header').fadeIn('slow');
        $('#grid-data-shippers').fadeIn('slow');
        $('#grid-data-shippers-footer').fadeIn('slow');
    };
})(jQuery);