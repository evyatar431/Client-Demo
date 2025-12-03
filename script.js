$("#carForm").on("submit", function (e) {
  e.preventDefault();

  const brand = $("#brand").val();
  const model = $("#model").val();

  $.post(
    "http://localhost:3000/api/cars",
    { brand, model },
    function (response) {
      $("#response").text(response);
    }
  );
});
// Check woir
