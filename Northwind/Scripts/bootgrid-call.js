// Config links and calling bootgrid plugin for all tables

// Categories table
$(document).ready(function () {
    $("#grid-data-categories").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Categories\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Categories\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Categories\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-categories").fadeIn('slow');
});

// Suppliers table
$(document).ready(function () {
    $("#grid-data-suppliers").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Suppliers\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Suppliers\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Suppliers\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-suppliers").fadeIn('slow');
});

// Shippers table
$(document).ready(function () {
    $("#grid-data-shippers").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Shippers\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Shippers\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Shippers\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-shippers").fadeIn('slow');
});

