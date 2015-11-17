// Config links and calling bootgrid plugin for all tables

// Orders table
$(document).ready(function () {
    $("#grid-data-orders").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Orders\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Orders\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Orders\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-orders").fadeIn('slow');
});

// Customers table
$(document).ready(function () {
    $("#grid-data-customers").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Customers\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Customers\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Customers\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-customers").fadeIn('slow');
});

// Employees table
$(document).ready(function () {
    $("#grid-data-employees").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Employees\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Employees\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Employees\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-employees").fadeIn('slow');
});

// Territories table
$(document).ready(function () {
    $("#grid-data-territories").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Territories\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Territories\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Territories\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-territories").fadeIn('slow');
});

// Regions table
$(document).ready(function () {
    $("#grid-data-regions").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Region\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Region\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Region\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-regions").fadeIn('slow');
});

// Products table
$(document).ready(function () {
    $("#grid-data-products").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" href=\"\Products\\Delete\\" + row.id + "\" title=\"Remove\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-success edition-link\" href=\"\Products\\Edit\\" + row.id + "\" title=\"Edit\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" href=\"\Products\\Details\\" + row.id + "\" title=\"Details\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $("#grid-data-products").fadeIn('slow');
});

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

