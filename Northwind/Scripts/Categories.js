// categories table
$(document).ready(function () {

    $("#grid-data-categories").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Categories\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getCategoriesEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().categoriesDetails('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-categories-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getCategoriesCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-categories").fadeIn('slow');
});

// Get categories details by AJAX
(function ($) {
    $.fn.categoriesDetails = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Categories/Details/" + id,
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
    $.fn.getCategoriesCreate = function () {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Categories/Create",
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-categories-header').hide();
                $('#grid-data-categories').hide();
                $('#grid-data-categories-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getCategoriesEdit = function (id) {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Categories/Edit/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-categories-header').hide();
                $('#grid-data-categories').hide();
                $('#grid-data-categories-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelCategoriesForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-categories-header').fadeIn('slow');
        $('#grid-data-categories').fadeIn('slow');
        $('#grid-data-categories-footer').fadeIn('slow');
    };
})(jQuery);