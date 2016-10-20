
$( document ).ready(function() {

  var paramsString = decodeURIComponent(window.location.search).replace("?details=", "")
  var projectDetailsObj = JSON.parse(paramsString);
  
  console.log(projectDetailsObj.thumb);

  $("#details-title .title").text(projectDetailsObj.title)
  
  /*$("#details-carousel").append(
    '<div class="col-md-6 col-md-offset-3">'
      + '<img src="' + projectDetailsObj.thumb + '" class="img-responsive center-block" alt="project image">'
    + '</div>'
  )*/

  for (var i = 0; i < projectDetailsObj.images.length; i++) {
    // $(".carousel-indicators").append('<li data-target="#carousel-example-generic" data-slide-to="' + i + '" class="active"></li>');
    
    var imgHTML = '';

    if (i == 0) {
      imgHTML = '<div class="item active">'
        + '<div class="col-md-6 col-md-offset-3">'
          + '<img src="' + projectDetailsObj.images[i] + '" class="img-responsive" alt="project image">'
        + '</div>'
        + '<div class="carousel-caption">'
        +  '...'
        + '</div>'
      + '</div>';
      if(projectDetailsObj.images.length > 1){
        $(".carousel-indicators").append('<li data-target="#carousel-project" data-slide-to="' + i + '" class="active"></li>');
      }else{
        $(".carousel-controls").css('visibility','hidden');
      }
    }else{
      imgHTML = '<div class="item">'
        + '<div class="col-md-6 col-md-offset-3">'
          + '<img src="' + projectDetailsObj.images[i] + '" class="img-responsive" alt="project image">'
        + '</div>'
        + '<div class="carousel-caption">'
        +  '...'
        + '</div>'
      + '</div>';
      $(".carousel-indicators").append('<li data-target="#carousel-project" data-slide-to="' + i + '"></li>');
    }
    $(".carousel-inner").append(imgHTML);
  }

  $(".summary").html(projectDetailsObj.summary)
  for (var i = 0; i < projectDetailsObj.roles.length; i++) {
    $(".roles").append(projectDetailsObj.roles[i]);
    if (i != projectDetailsObj.roles.length - 1) {
      $(".roles").append(", ");
    }
  }

  for (var i = 0; i < projectDetailsObj.tech.length; i++) {
    $(".tech").append(projectDetailsObj.tech[i]);
    if (i != projectDetailsObj.tech.length - 1) {
      $(".tech").append(", ");
    }
  }

  if(projectDetailsObj.links.length > 0){
    for (var i = 0; i < projectDetailsObj.links.length; i++) {
      $(".links").append("<a class='external-link' href='" + projectDetailsObj.links[i].url + "' target='_blank'>" + projectDetailsObj.links[i].caption + "</a>");
      if (i != projectDetailsObj.links.length - 1) {
        $(".links").append(", ");
      }
    }
  }else{
    $(".links").css("visibility", "hidden")
  }
});
