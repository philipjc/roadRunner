var roadRunner = (function() {

  return {
    log: function () {
      console.log('logging');
    }

  }

})();



var events = (function() {

  return {

    click: function (ele) {
      ele.addEventListener('click', function() {
        console.log('clicked');
      })
    },
  };

})();
