var roadRunner = (function() {
  'use strict';

  // private
  function createRun(verb, url) {

    // new xhr object
    var run = new XMLHttpRequest();

    // handle the ready state change
    // 0 = uniitialized
    // 1 = loading
    // 2 = loaded
    // 3 = interactive
    // 4 = complete
    run.onreadystatechange = function () {

      if ((run.readyState === 4) && (run.status === 200 || run.status === 304)) {
        // responseText
        // response
        // responseType
        var thePackage = JSON.parse(run.responseText);
        console.log(thePackage);
      }
    };

    // open the request - true = async
    run.open(verb, url, true);

    // send the request - null if no data to send
    run.send(null)
  };

  return {
    getRunning: function(url) {
      createRun('GET', url);
    }
  }

})();
