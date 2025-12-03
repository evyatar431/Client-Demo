$(document).ready(function () {
  
  $("#carForm").on("submit", function (e) {
    e.preventDefault();

    const brand = $("#brand").val().trim();
    const model = $("#model").val().trim();

    $("#response").text("Saving...");

    $.post(
      "http://localhost:3000/api/cars",
      { brand, model },
      function (response) {
        $("#response").text(response);
      }
    ).fail(function () {
      $("#response").text("Error: Could not connect to server.");
    });

  });

});
