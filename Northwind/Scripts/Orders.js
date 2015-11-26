// Orders table
$(document).ready(function () {

    $("#grid-data-orders").bootgrid({
        formatters: {
            "link": function (column, row) {
                var links = "";
                links += "<a class=\"btn btn-xs btn-danger edition-link\" title=\"Remove\" onclick=\"$().getOrderDelete('" + row.id + "');\"><span class=\"glyphicon glyphicon-remove\"></span></a>";
                links += "<a class=\"btn btn-xs btn-warning edition-link\" title=\"Edit\" onclick=\"$().getOrderEdit('" + row.id + "');\"><span class=\"glyphicon glyphicon-edit\"></span></a> ";
                links += "<a class=\"btn btn-xs btn-info edition-link\" title=\"Details\" onclick=\"$().orderDetails('" + row.id + "');\"><span class=\"glyphicon glyphicon-list\"></span></a> ";
                return links;
            }
        }
    });
    $('#grid-data-orders-header .actionBar').prepend('<a class="btn btn-default btn-success edition-link" title="New Order" onclick="$().getOrderCreate();"><span class="glyphicon glyphicon-pencil"></span> Create new</a>');
    $("#grid-data-orders").bootgrid("sort", { id: "asc" });
    $("#grid-data-orders").fadeIn('slow');

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
    };

});


// ------------------------------------------------------------
// Order Ations
// ------------------------------------------------------------

// Get order details by AJAX
(function ($) {
    $.fn.orderDetails = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Orders/Details/" + id,
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
    $.fn.getOrderCreate = function () {
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
                $('form').validator('validate');
                $('#bt-confirm-edit').addClass("disabled");
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// call post create operation
(function ($) {
    $.fn.postOrderCreate = function () {

        //get new order data
        var orderToSave = {
            CustomerID: $("#CustomerID").val(),
            EmployeeID: $("#EmployeeID").val(),
            OrderDate: $("#OrderDate").val(),
            RequiredDate: $("#RequiredDate").val(),
            ShippedDate: $("#ShippedDate").val(),
            ShipVia: $("#ShipVia").val(),
            Freight: $("#Freight").val(),
            ShipName: $("#ShipName").val(),
            ShipAddress: $("#ShipAddress").val(),
            ShipCity: $("#ShipCity").val(),
            ShipRegion: $("#ShipRegion").val(),
            ShipPostalCode: $("#ShipPostalCode").val(),
            ShipCountry: $("#ShipCountry").val()
        };

        // call ajax function
        $.ajax({
            url: "/Orders/Create",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(orderToSave),
            contentType: 'application/json',
            success: function (updatedOrder) {
                $("#form").html();
                $("#form").hide();

                // declares a row with the updated order data
                var newRow = {
                    "id": updatedOrder.OrderID,
                    "date": "" + updatedOrder.OrderDate,
                    "customer": "" + updatedOrder.Customer,
                    "employee": "" + updatedOrder.Employee,
                    "shipper": "" + updatedOrder.Shipper,
                    "shipaddress": "" + updatedOrder.ShipAddress,
                    "shipcity": "" + updatedOrder.ShipCity,
                    "shipcountry": "" + updatedOrder.ShipCountry,
                    "link": ""
                };

                // save the sort object
                var sort = $('#grid-data-orders').bootgrid("getSortDictionary");

                $('#grid-data-orders-header').fadeIn('slow');
                $('#grid-data-orders').fadeIn('slow');
                $('#grid-data-orders-footer').fadeIn('slow');

                // add the new order row and force to sort
                $('#grid-data-orders').bootgrid("append", [newRow]);
                $('#grid-data-orders').bootgrid("sort", sort);
                toastr.success('The order was successfully created.', 'Success');
            },
            error: function (data) {
                console.log(data);
                toastr.error('Something went wrong! Try again, and if continue failing please contact your system team.', 'Fail to update');
            }
        });

        return false;
    };
})(jQuery);

// get edit form by AJAX
(function ($) {
    $.fn.getOrderEdit = function (id) {
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
                $('form').validator('validate');

                if ($('#ShipVia').val() !== "") {
                    $('#Freight').attr('required', "true");
                    $('#ShipName').attr('required', "true");
                    $('#ShipAddress').attr('required', "true");
                    $('#ShipCity').attr('required', "true");
                    $('#ShipRegion').attr('required', "true");
                    $('#ShipPostalCode').attr('required', "true");
                    $('#ShipCountry').attr('required', "true");
                }

                $('#bt-confirm-edit').addClass("disabled");
                $("#form").fadeIn('slow');
            }
        });
    };
})(jQuery);

// call post edit operation
(function ($) {
    $.fn.postOrderEdit = function (id) {
        //get edited order data
        var orderToSave = {
            OrderID: id,
            CustomerID: $("#CustomerID").val(),
            EmployeeID: $("#EmployeeID").val(),
            OrderDate: $("#OrderDate").val(),
            RequiredDate: $("#RequiredDate").val(),
            ShippedDate: $("#ShippedDate").val(),
            ShipVia: $("#ShipVia").val(),
            Freight: $("#Freight").val(),
            ShipName: $("#ShipName").val(),
            ShipAddress: $("#ShipAddress").val(),
            ShipCity: $("#ShipCity").val(),
            ShipRegion: $("#ShipRegion").val(),
            ShipPostalCode: $("#ShipPostalCode").val(),
            ShipCountry: $("#ShipCountry").val()
        };

        // call ajax function
        $.ajax({
            url: "/Orders/Edit",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(orderToSave),
            contentType: 'application/json',
            success: function (updatedOrder) {
                $("#form").html();
                $("#form").hide();

                // declares a row with the updated order data
                var newRow =  {
                    "id": updatedOrder.OrderID,
                    "date": "" + updatedOrder.OrderDate,
                    "customer": "" + updatedOrder.Customer,
                    "employee": "" + updatedOrder.Employee,
                    "shipper": "" + updatedOrder.Shipper,
                    "shipaddress": "" + updatedOrder.ShipAddress,
                    "shipcity": "" + updatedOrder.ShipCity,
                    "shipcountry": "" + updatedOrder.ShipCountry,
                    "link": ""
                };

                // remove the old order and save the sort object
                var sort = $('#grid-data-orders').bootgrid("getSortDictionary");
                $('#grid-data-orders').bootgrid("remove", [updatedOrder.OrderID]);

                $('#grid-data-orders-header').fadeIn('slow');
                $('#grid-data-orders').fadeIn('slow');
                $('#grid-data-orders-footer').fadeIn('slow');

                // add the updated order row and force to sort
                $('#grid-data-orders').bootgrid("append", [newRow]);
                $('#grid-data-orders').bootgrid("sort", sort);
                toastr.success('The order was updated successfully.', 'Success');
            },
            error: function (data) {
                console.log(data);
                toastr.error('Something went wrong! Try again, and if continue failing please contact your system team.', 'Fail to update');
            }
        });
    };
})(jQuery);

// call confirm delete operation
(function ($) {
    $.fn.getOrderDelete = function (id) {
        $.ajax({
            type: "GET",
            url: "/../Orders/Delete/" + id,
            dataType: "html",
            cache: "false",
            async: "true",
            success: function (data) {
                $('#modal-body-delete').html(data);
                $('#bt-confirm-delete').remove();
                $('#modal-footer-delete').prepend("<button type=\"button\" class=\"btn btn-default btn-danger\" onclick=\"$().postOrderDelete(" + id + ")\" id=\"bt-confirm-delete\">Confirm</button>");
                $('#modal-delete').modal("show");
            }
        });
    };
})(jQuery);

// call post delete operation
(function ($) {
    $.fn.postOrderDelete = function (id) {
        $('#modal-delete').modal("hide");

        $.ajax({
            url: "/Orders/DeleteConfirmed",
            dataType: "json",
            type: "POST",
            data: JSON.stringify({ id: id }),
            contentType: 'application/json',
            success: function (data) {
                $('#grid-data-orders').bootgrid("remove", [data]);
                toastr.success('The order was removed successfully.', 'Success');
            },
            error: function (data) {
                toastr.error('Something went wrong! Try again, and if continue failing please contact your system team.', 'Fail to remove');
            }
        });

    };
})(jQuery);

// cancel and close create and edit forms
(function ($) {
    $.fn.cancelOrderForm = function () {
        $('#form').html();
        $('#form').hide();
        $('#grid-data-orders-header').fadeIn('slow');
        $('#grid-data-orders').fadeIn('slow');
        $('#grid-data-orders-footer').fadeIn('slow');
    };
})(jQuery);

// ------------------------------------------------------------
//  Some custom validations
// ------------------------------------------------------------
$(document).on("change", "#ShipVia", function () {
    if ($('#ShipVia').val() !== "") {
        $('#Freight').attr('required', "true");
        $('#ShipName').attr('required', "true");
        $('#ShipAddress').attr('required', "true");
        $('#ShipCity').attr('required', "true");
        $('#ShipRegion').attr('required', "true");
        $('#ShipPostalCode').attr('required', "true");
        $('#ShipCountry').attr('required', "true");
    } else {
        $('#Freight').removeAttr('required');
        $('#ShipName').removeAttr('required');
        $('#ShipAddress').removeAttr('required');
        $('#ShipCity').removeAttr('required');
        $('#ShipRegion').removeAttr('required');
        $('#ShipPostalCode').removeAttr('required');
        $('#ShipCountry').removeAttr('required');
    }
});