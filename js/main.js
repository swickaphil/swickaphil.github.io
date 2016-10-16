
$( document ).ready(function() {

  // PROJECTS //
  var projectList = [];

  $.ajax({
    url: "data/projects.json",
    cache: true,
    success: function(data) {
      projectList = data.projects;
      var injectString = '';
      for (var i = 0; i < projectList.length; i++) {
        console.log(i % 4);
        if (i % 4 == 0) {
          injectString += '<div class="row row-projects">'
        }
        injectString += '<div id="' + i + '" class="col-md-3 project">'
        + '<div class="img-responsive project-overlay">'
        + '</div>'
        + '<img src="' + projectList[i].thumb + '" class="img-responsive thumbnail" alt="' + projectList[i].title + ' project">'
        + '<h4>' + projectList[i].title + '</h4>'
        + '<p>' + projectList[i].subtitle + '</p>'
        + '</div>';

        if (i % 4 == 3 || i == projectList.length - 1){
          injectString += '</div>';
          if(i == projectList.length - 1){
            injectString += "<div class='btn-container'><a href='#connect' class='btn btn-default btn-lg btn-connect'>Let's Connect</a></div>";
          }
        }

      }
      $('.container-projects').append(injectString);

      $(".project").on("click", projectClick);
    }               
  });

  function projectClick(e){
    var projectDataString = JSON.stringify(projectList[e.currentTarget.id]);
    window.location.href = "project.html?details=" + encodeURIComponent(projectDataString);
  }

  // FORM //

  $("#form-btn-send").on("click", function(e){
    var nameFirst = $("#form-first-name").val();
    var nameLast = $("#form-last-name").val();
    var email = $("#form-email").val();
    var msg = $("#form-message").val();
    var gotcha = $("#form-gotcha").val();
    
    // Test Form
    var testFirstName = testForm("name", nameFirst);
    var testEmail = testForm("email", email);
    var testMsg = testForm("msg", msg);

    var modal = new VanillaModal({
      clickOutside : true
    });

    $(".form-icon").css('visibility', 'hidden');

    console.log(testFirstName, testEmail, testMsg);

    if(testFirstName && testEmail && testMsg){
      var name = nameFirst + " " + nameLast;
      var subject = "Email submission from " + name;
      $.ajax({
        url: "https://formspree.io/paswicka@gmail.com", 
        method: "POST",
        data: {
          message: msg,
          email: email,
          name: name,
          _subject: subject
        },
        dataType: "json",
        error: function(err){
          modal.open('#modal-error');
        },
        success: function(resp){
          modal.open('#modal-thanks');
        }
      });
    }else{
      if (!testFirstName) {
        $("#form-icon-name").css('visibility', 'visible')
      }
      if (!testEmail) {
        $("#form-icon-email").css('visibility', 'visible')
      }
      if (!testMsg) {
        $("#form-icon-message").css('visibility', 'visible')
      }
    }
  });

  function testForm(type, val){
    var result = true;

    if (!val || val.length < 1) {
      result = false;
    }

    return result;
  }
});
