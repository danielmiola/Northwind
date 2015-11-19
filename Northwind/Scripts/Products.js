// Products table
$(document).ready(function () {

    $("#grid-data-products").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Products\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getProductEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().productDetails('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-products-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Product" onclick="$().getProductCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-products").fadeIn('slow');
});

// Get order details by AJAX
(function ($) {
    $.fn.productDetails = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Products/Details/" + id,
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
    $.fn.getProductCreate = function () {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Products/Create",
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-products-header').hide();
                $('#grid-data-products').hide();
                $('#grid-data-products-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getProductEdit = function (id) {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Products/Edit/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-products-header').hide();
                $('#grid-data-products').hide();
                $('#grid-data-products-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelProductForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-products-header').fadeIn('slow');
        $('#grid-data-products').fadeIn('slow');
        $('#grid-data-products-footer').fadeIn('slow');
    };
})(jQuery);