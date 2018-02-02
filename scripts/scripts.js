//business logic





//ui logic

$(document).ready(function(){
  $("#decoder").click(function(event){
    event.preventDefault();

    function decryptor(){

      var tableLetters = [];

      $("table#cryptosquare tr").each(function(){
        var thisTableRow = [];
        var tableHeader = $(this).find('th');

        if(tableHeader.length > 0){
          tableHeader.each(function(){
            thisTableRow.push($(this).text());
            console.log(thisTableRow);
          });
            tableLetters.push(thisTableRow);
            console.log(tableLetters);
            return false;
          }//end if statment
      });

      //console.log(tableLetters);

    }//end decryptor

    decryptor();

  });
});
