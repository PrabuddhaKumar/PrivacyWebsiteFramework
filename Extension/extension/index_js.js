latestId = 0;
firstCall = 0;

 loadCards(function(){
   
    card0 = document.getElementById('card0');
    // alert(typeof card0);
    button0 = null;
    // if(card0!=null){
      // alert(typeof card0);
      // button0 = card0.getElementsByClassName('saveButton')[0];
      // var clickHandler = button0.onclick;
      // button0.onclick = false;
      // clickHandler.call(this, storeData);

    // }
    // alert(button0==undefined);
      button0 = card0.getElementsByClassName('saveButton')[0];

    button0.onclick = storeData;

    
    // button0.addEventListener("click", storeData('card0'));
 });


 function loadJSON(callback, cb2) {
  
  var cardResponse = $.get( "http://localhost:4000/tasks", function() {
    // alert( "success" );
    // alert(jqxhr.file);
    // console.log(cardResponse.file);
  })
    .done(function() {
      // alert( "second success" );
      // alert("loading was successful");
      callback(cardResponse, cb2);
    })
    .fail(function() {
      alert( "loading error" );
    })
    .always(function() {
      // alert( "finished" );
      //  console.log("IN always ", cardResponse.responseJSON[0]);
      console.log(cardResponse);
        
    });

 
}

 function loadCards(callback){
    // cardResponse = 
     loadJSON(dispCards, callback);

 
}


 function dispCards(cardResponse, cb2){
   try{
    card = document.getElementById('card0');
    // alert(card.getElementsByClassName('card-title')==null);
    title = card.getElementsByClassName('card-title')[0].value;
    

    content = card.getElementsByClassName('card-content')[0].value;
    id = card.getElementsByClassName('id-label')[0].innerHTML;

    card.getElementsByClassName('card-title')[0].value = "Enter title ";
    card.getElementsByClassName('card-content')[0].value = "Enter new Note Desciption";
    // card.getElementsByClassName('card-content')[0].value = "En";
    

    // console.log("Here ", cardResponse.responseJSON);
    console.log(cardResponse.responseJSON.length);

    if(cardResponse.responseJSON.length==0){
      return;
    }
    var getCard = document.getElementById("card1");
    // console.log("Element, ",getFirstCard.getElementsByClassName("card-title")[0].innerHTML);

    // getCard.getElementsByClassName("card-title")[0].innerHTML = cardResponse.responseJSON[0].name;
    // getCard.getElementsByClassName("card-content")[0].innerHTML = cardResponse.responseJSON[0].status;

    i = cardResponse.responseJSON.length-1;
    for ( i = cardResponse.responseJSON.length - 1; i >=0; i--){
      var cardRow = document.getElementById("cardRow");
      var cardi = 'card'+(i+2);
      
      var cardToAdd = '<div class=\"col\" ><div class=\"card\" id=\"'+cardi+'\"><div class=\"card-contents\"><input type="text" class=\"card-title\">'
      +'<input type="text" class=\"card-content\"><p class="id-label"></p>'
          +'<div class="buttonHolder"><button type=\"button\" class=\"btn-success saveButton\"'
          +'>Update</button><button type="button" class="btn-primary deleteButton" ">Delete</button>'
          +'</div></div></div></div>';
      // console.log(cardToAdd);
      cardRow.insertAdjacentHTML('beforeend', cardToAdd);
      var getCard = document.getElementById(cardi);
      getCard.getElementsByClassName("card-title")[0].value = cardResponse.responseJSON[i].name;
      getCard.getElementsByClassName("card-content")[0].value = cardResponse.responseJSON[i].status;
      getCard.getElementsByClassName("id-label")[0].innerHTML = cardResponse.responseJSON[i]._id;
      getCard.getElementsByClassName("saveButton")[0].onclick = updateData;
      getCard.getElementsByClassName("deleteButton")[0].onclick = deleteData;
      // console.log(cardResponse.responseJSON[i]._id);
      console.log(i);
    }


    // while(i!=0){

    // }
    setTimeout(function(){
      if(i==-1){


        cb2();
      }else{
        console.log(i);
      }
    },0);
   }

   catch(err){
    //  console.log(err.message);
   }
  
      
      
      // if(i==0){
      //     alert('Here');
      //     cb2();
      // // cb2();
      // }
      
}

function storeData(element){
  // if(firstCall==0){
  //   alert("First call");
  //   firstCall = 1;
  //   return;
  // }
    console.log(element.target.parentNode);

    card = element.target.parentNode.parentNode;
    // el = document.getElementById(element);
    // card = el.parentNode.parentNode;

    title = card.getElementsByClassName('card-title')[0].value;
    content = card.getElementsByClassName('card-content')[0].value;
    var d = new Date();
    time = d.getTime();
    sendData = { "status": content,"name": title,
    "Created_date": "2014-11-20T09:11:00.000Z"};
    console.log("data to be send: ", sendData);
    $.ajax({
      url: "http://localhost:4000/tasks/",
      type: "POST",
      data: sendData,
      // dataType: "application/x-www-form-urlencoded",
      // contentType: "application/x-www-form-urlencoded",
      success: function (result) {

          switch (result) {
              case true:
                  processResponse(result);
                  console.log("Success! Yay!", result);
                  break;
              default:
                  console.log('Default', result);
                  processResponse(result);

          }
      },
      error: function (xhr, ajaxOptions, thrownError) {
      console.log(alert(xhr.status));
      console.log(thrownError);
      }
  });
    console.log(time);

}


function updateData(element){
  card = element.target.parentNode.parentNode;
  title = card.getElementsByClassName('card-title')[0].value;
  content = card.getElementsByClassName('card-content')[0].value;
  id = card.getElementsByClassName('id-label')[0].innerHTML;
  var d = new Date();
  time = d.getTime();
  sendData = { "status": content,"name": title,
  "Created_date": "2014-11-20T09:11:00.000Z"};
  console.log("data to be send: ", sendData);
  $.ajax({
    url: "http://localhost:4000/tasks/"+id,
    type: "PUT",
    data: sendData,
    // dataType: "application/x-www-form-urlencoded",
    // contentType: "application/x-www-form-urlencoded",
    success: function (result) {

        switch (result) {
            case true:
                processResponse(result);
                console.log("Success! Yay!", result);
                break;
            default:
                console.log('Default', result);
                processResponse(result);

        }
    },
    error: function (xhr, ajaxOptions, thrownError) {
    console.log(alert(xhr.status));
    console.log(thrownError);
    }
});
  console.log(time);

}


function deleteData(element){
  card = element.target.parentNode.parentNode;
  id = card.getElementsByClassName('id-label')[0].innerHTML;
  console.log("delete element id: ", id);
  $.ajax({
    url: "http://localhost:4000/tasks/"+id,
    type: "DELETE",
    success: function (result) {
        switch (result) {
            case true:
                processResponse(result);
                console.log("Success! Yay!");
                break;
            default:
                console.log('Default');
                processResponse(result)
        }
    },
    error: function (xhr, ajaxOptions, thrownError) {
    alert(xhr.status);
    alert(thrownError);
    }
  });
}

function processResponse(result){
  window.location.reload();
  card = document.getElementById('card0');
  title = card.getElementsByClassName('card-title')[0].value;
  content = card.getElementsByClassName('card-content')[0].value;
  id = card.getElementsByClassName('id-label')[0].innerHTML;

  card.getElementsByClassName('card-title')[0].value = "Enter title ";
  card.getElementsByClassName('card-content')[0].value = "Enter new Note Desciption";
}