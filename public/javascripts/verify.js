$(function() {
  var sname = $("#sname")[0];
  var sid = $("#sid")[0];
  var sclass = $("#sclass")[0];
  $("form").submit(function() {
    if (snmae === '') {
      $('#myModal').modal('show');
    }
  });
});
