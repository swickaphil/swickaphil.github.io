
$( document ).ready(function() {

  var paramsString = decodeURIComponent(window.location.search).replace("?details=", "")
  var projectDetailsObj = JSON.parse(paramsString);
  
  console.log(projectDetailsObj);

  $(".title").text(projectDetailsObj.title)
  
  // $(".thumb").attr("src", projectDetailsObj.thumb)

  /*for (var i = 0; i < projectDetailsObj.images.length; i++) {
    $(".carousel-indicators").append('<li data-target="#carousel-example-generic" data-slide-to="' + i + '" class="active"></li>');
    
    var imgHTML = '';

    if (i == 0) {
      imgHTML = '<div class="item active">'
              + '<img src="' + projectDetailsObj.images[i] + '" alt="...">'
              + '<div class="carousel-caption">'
              +  '...'
              + '</div>'
            '</div>'
    }else{
      imgHTML + '<div class="item">'
              + '<img src="..." alt="...">'
              + '<div class="carousel-caption">'
              +  '...'
              + '</div>'
            '</div>'
    }
    
    $(".carousel-inner").append(imgHTML);

  }*/



  for (var i = 0; i < projectDetailsObj.links.length; i++) {
    $(".links").append("<a href='" + projectDetailsObj.links[i] + "'>LINK</a>");
    if (i != projectDetailsObj.links.length - 1) {
      $(".links").append(", ");
    }
  }

  $(".summary").text(projectDetailsObj.summary)
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
});
