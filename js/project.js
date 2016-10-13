
$( document ).ready(function() {

  var paramsString = decodeURIComponent(window.location.search).replace("?details=", "")
  var projectDetailsObj = JSON.parse(paramsString);
  
  console.log(projectDetailsObj);

  $(".title").text(projectDetailsObj.title)

});
