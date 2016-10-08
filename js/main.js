
$( document ).ready(function() {
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
