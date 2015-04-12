var roadRunner = (function() {

  // private
  function request(verb, file) {

    var runner = new XMLHttpRequest();

    // handle the ready state change
    runner.onreadystatechange = function () {
      if ((runner.readyState === 4) && (runner.status === 200 || runner.status === 304)) {

        alert(runner.responseText);

      }
    };
    // open the request - true = async
    runner.open(verb, file, true);
    // send the request - null if no data to send
    runner.send(null)
  }

  // public
  return {

    get: function(file) {
      request('GET', file);
    }

  }

})();



var events = (function() {

  return {

    click: function (ele, file) {

      var element = ele;
      var file = file;

      element.addEventListener('click', function() {
        roadRunner.get(file);
      })
    },
  };

})();


var cbtn = document.getElementById('click-btn');

events.click(cbtn, 'files/text/message.txt');
