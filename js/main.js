
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
        console.log(i % 3);
        if (i % 3 == 0) {
          injectString += '<div class="row row-projects">'
        }
        injectString += '<div id="' + i + '" class="col-md-4 project">'
        + '<img src="' + projectList[i].thumb + '" class="img-responsive" alt="leadership image">'
        + '<h2>' + projectList[i].title + '</h2>'
        + '<p>' + projectList[i].subtitle + '</p>'
        + '</div>';

        if (i % 3 == 2 || i == projectList.length - 1){
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
    var name = $("#form-name").val();
    var email = $("#form-email").val();
    var msg = $("#form-message").val();
    var gotcha = $("#form-gotcha").val();
    
    // Test Form
    var testName = testForm("name", name);
    var testEmail = testForm("email", email);
    var testMsg = testForm("msg", msg);

    var modal = new VanillaModal({
      clickOutside : true
    });

    $(".form-icon").css('visibility', 'hidden');

    console.log(testName, testEmail, testMsg);

    if(testName && testEmail && testMsg){
      var subject = "Email submission from " + name;
      $.ajax({
        url: "https://formspree.io/paswicka@gmail.com", 
        method: "POST",
        data: {
          message: msg,
          email: email,
          name: name,
          _subject: subject,
          next: ""
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
      if (!testName) {
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

    if (val.length < 1) {
      result = false;
    }

    return result;
  }
});
