$( document ).ready(function() {
    console.log( "shit!" );

    requirejs(["helper/util"], function(util) {
      console.log( "holy shit!" );
    });
});