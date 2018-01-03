( function( window ) {

'use strict';

var BreathingHalftone = window.BreathingHalftone;

var isInited = false;

var halftone;

// options for each demo
var demoOptions = {
  'sarah': {
      dotSize: 1/100,
      initVelocity: 0.05,
      oscAmplitude: 0,
      friction: 0.05,
      channels: [ 'lum' ]
  },

  'ncsu': {
      dotSize: 1/100,
      initVelocity: 0.05,
      oscAmplitude: 0,
      friction: 0.05,
      channels: [ 'lum' ]
  },

  'the-look': {
        dotSize: 1/100,
        initVelocity: 0.05,
        oscAmplitude: 0,
        friction: 0.05,
        channels: [ 'lum' ]
    },
    'four': {
        dotSize: 1/100,
        initVelocity: 0.05,
        oscAmplitude: 0,
        friction: 0.05,
        channels: [ 'lum' ]
    },
    'five': {
        dotSize: 1/100,
        initVelocity: 0.05,
        oscAmplitude: 0,
        friction: 0.05,
        channels: [ 'lum' ]
    }
};

function init() {
  // init once
  if ( isInited ) {
    return;
  }
  isInited = true;

  // hide all demo images
  document.querySelector('.hero').className += ' is-active';


  var thumbnailRail = document.querySelector('.thumbnails');
  var activeName, activeDemo;

  function initHalftone( name ) {
    // do not re-init
    if ( name === activeName ) {
      return;
    }
    // hide active demo
    if ( activeDemo ) {
      activeDemo.style.display = 'none';
    }
    // stop previous halftone
    if ( halftone ) {
      halftone.destroy();
    }

    var demo = document.querySelector( '.demo.' + name );
    demo.style.display = 'block';
    var img = demo.querySelector('img');
    var opts = demoOptions[ name ];
    halftone = new BreathingHalftone( img, opts );
    window.halftone = halftone;
    activeName = name;
    activeDemo = demo;
  }

  initHalftone('sarah');

  thumbnailRail.addEventListener( 'click', onThumbnailClick, false );

  function onThumbnailClick( event ) {
    if ( event.target.nodeName !== 'IMG' ) {
      return;
    }
    var name = event.target.getAttribute('data-name');
    initHalftone( name );
    thumbnailRail.querySelector('.is-selected').className = '';
    event.target.className = 'is-selected';
  }


}

document.addEventListener( 'DOMContentLoaded', init, false );
window.onload = init;

})( window );