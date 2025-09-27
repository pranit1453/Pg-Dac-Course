  $(document).ready(function () {


            let counter = (function () {
                let cnt = 0;
                return function () {
                    return ++cnt; 
                }
            })();

          
            $("#employeeForm").submit(function (event) {
                event.preventDefault(); // Prevent the form from reloading the page

                let ufName = $("#fName").val().trim();
                let ulName = $("#lName").val().trim();
                let uemail = $("#email").val().trim();
                let umob = $("#mob").val().trim();

                let errorMsg = $("#errorMsg");
                let table = $("#employeeTable");
                let data = $("#p1");

                
                if (!ufName || !ulName || !uemail || !umob) {
                    errorMsg.text("All fields are required!");
                    table.hide();
                    return;
                }

              
                let newRow = $("<tr></tr>")
                    .append($("<td></td>").text(ufName))
                    .append($("<td></td>").text(ulName))
                    .append($("<td></td>").text(uemail))
                    .append($("<td></td>").text(umob));

              
                $("#employeeTable tbody").append(newRow);

              
                data.text("Employee count: " + counter());

                
                errorMsg.text("");
                table.show();
                data.css("visibility", "visible");

               
                clearInput();
            });

          
            function clearInput() {
                $("#fName").val("");
                $("#lName").val("");
                $("#email").val("");
                $("#mob").val("");
            }
        });