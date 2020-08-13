$(document).ready(function(){
  $("#form0ne").submit(function(event){
    const ageInput = parseInt($("#age").val());
    const hairInput = $("#hair").val();
    const genderInput = $("#gender").val();
    console.log(genderInput)

    if(ageInput >= 21 && hairInput === "black" && genderInput === "female" ) {
      
      $('#emily').show();
    
    }else if (ageInput <= 21 && hairInput === "black"){
      $("#billie").show();
    
    }else if (genderInput === "male" && hairInput === "brown" ) {
      $("#johnny").show();
    } else {
      alert("mistake")
    }

    event.preventDefault();
    
  });
});

