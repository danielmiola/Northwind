// Orders table
$(document).ready(function () {

    $("#grid-data-employees").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Employees\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getEmployeeEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().employeeDetails('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-employees-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getEmployeeCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-employees").fadeIn('slow');
});

// Get order details by AJAX
(function ($) {
    $.fn.employeeDetails = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Employees/Details/" + id,
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
    $.fn.getEmployeeCreate = function () {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Employees/Create",
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-employees-header').hide();
                $('#grid-data-employees').hide();
                $('#grid-data-employees-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getEmployeeEdit = function (id) {
        $('#form').html();
        $.ajax({
            type: "GET",
            url: "/../Employees/Edit/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#grid-data-employees-header').hide();
                $('#grid-data-employees').hide();
                $('#grid-data-employees-footer').hide();
                $("#form").html(data);
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelEmployeeForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-employees-header').fadeIn('slow');
        $('#grid-data-employees').fadeIn('slow');
        $('#grid-data-employees-footer').fadeIn('slow');
    };
})(jQuery);