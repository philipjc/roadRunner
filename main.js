(function() {

  var btn = document.getElementById('btn');

  btn.addEventListener('click' , function() {
    var obj = roadRunner.getRunning('files/json/message.json');
    console.log(obj);
  });

})();
