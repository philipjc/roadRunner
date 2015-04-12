(function() {

  var btn = document.getElementById('btn');

  btn.addEventListener('click' , function() {
    roadRunner.getRunning('files/json/message.json');
    
  });

})();
