const a7_0x59c016=a7_0x376d;function a7_0x3da5(){const _0x172b07=['1013285BqSFIW','cos','83876YYMbyG','test','innerWidth','10714923xPdDhS','2721600BmXRKj','getContext','atan2','263658XYBnqg','115zDLeKF','1fepAkp','17998puGTOK','constructor','sqrt','userAgent','11wxIRpH','height','search','width','levelCompleted','playing','171370kfsGjz','99owBxun','opera','gameCompleted','(((.+)+)+)+$','radius','speed','getElementById','some','sin','gameCanvas','vendor','toString','apply'];a7_0x3da5=function(){return _0x172b07;};return a7_0x3da5();}(function(_0x4bda7f,_0x386f62){const _0x2e65e3=a7_0x376d,_0x812fad=_0x4bda7f();while(!![]){try{const _0x3b85b3=parseInt(_0x2e65e3(0x1ab))/0x1*(parseInt(_0x2e65e3(0x1ac))/0x2)+-parseInt(_0x2e65e3(0x193))/0x3*(-parseInt(_0x2e65e3(0x1a2))/0x4)+parseInt(_0x2e65e3(0x1aa))/0x5*(parseInt(_0x2e65e3(0x1a9))/0x6)+-parseInt(_0x2e65e3(0x1a0))/0x7+parseInt(_0x2e65e3(0x1a6))/0x8+-parseInt(_0x2e65e3(0x1a5))/0x9+parseInt(_0x2e65e3(0x192))/0xa*(-parseInt(_0x2e65e3(0x1b0))/0xb);if(_0x3b85b3===_0x386f62)break;else _0x812fad['push'](_0x812fad['shift']());}catch(_0x423e99){_0x812fad['push'](_0x812fad['shift']());}}}(a7_0x3da5,0xaac22));const a7_0x42af45=(function(){let _0x4f0101=!![];return function(_0x25e149,_0x28ee49){const _0x3e7338=_0x4f0101?function(){const _0x3c505d=a7_0x376d;if(_0x28ee49){const _0x1238c1=_0x28ee49[_0x3c505d(0x19f)](_0x25e149,arguments);return _0x28ee49=null,_0x1238c1;}}:function(){};return _0x4f0101=![],_0x3e7338;};}()),a7_0x1e7a3e=a7_0x42af45(this,function(){const _0x37adbf=a7_0x376d;return a7_0x1e7a3e['toString']()[_0x37adbf(0x18e)]('(((.+)+)+)+$')[_0x37adbf(0x19e)]()[_0x37adbf(0x1ad)](a7_0x1e7a3e)[_0x37adbf(0x18e)](_0x37adbf(0x196));});a7_0x1e7a3e();function a7_0x376d(_0x144770,_0x46cb9d){const _0x323ddd=a7_0x3da5();return a7_0x376d=function(_0x1e7a3e,_0x42af45){_0x1e7a3e=_0x1e7a3e-0x18e;let _0x3da50d=_0x323ddd[_0x1e7a3e];return _0x3da50d;},a7_0x376d(_0x144770,_0x46cb9d);}const GAME_AREA_WIDTH_PERCENTAGE_DESKTOP=0.5,GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP=0.85,GAME_AREA_WIDTH_PERCENTAGE_MOBILE=0x1,GAME_AREA_HEIGHT_PERCENTAGE_MOBILE=0x1,canvas=document[a7_0x59c016(0x199)](a7_0x59c016(0x19c)),ctx=canvas[a7_0x59c016(0x1a7)]('2d');let oldCanvasWidth=0x0,oldCanvasHeight=0x0,canvasDiagonal=0x0;function isMobileUserAgent(){const _0x317e68=a7_0x59c016,_0x53140c=navigator[_0x317e68(0x1af)]||navigator[_0x317e68(0x19d)]||window[_0x317e68(0x194)],_0x2fcc97=[/android/i,/webos/i,/iphone/i,/ipad/i,/ipod/i,/blackberry/i,/windows phone/i];return _0x2fcc97[_0x317e68(0x19a)](_0x39838d=>_0x39838d[_0x317e68(0x1a3)](_0x53140c));}function resizeCanvas(_0x2d3650=![]){const _0x54908c=a7_0x59c016;let _0x18aa15=window[_0x54908c(0x1a4)],_0x3db78a=window['innerHeight'],_0x44077b=_0x18aa15/_0x3db78a;if(_0x44077b>0x3/0x2)_0x18aa15=_0x3db78a*(0x3/0x2);else _0x44077b<0x2/0x3&&(_0x3db78a=_0x18aa15*(0x3/0x2));isMobileUserAgent()?(canvas[_0x54908c(0x18f)]=_0x18aa15*GAME_AREA_WIDTH_PERCENTAGE_MOBILE,canvas['height']=_0x3db78a*GAME_AREA_HEIGHT_PERCENTAGE_MOBILE):(canvas[_0x54908c(0x18f)]=_0x18aa15*GAME_AREA_WIDTH_PERCENTAGE_DESKTOP,canvas['height']=_0x3db78a*GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP),canvasDiagonal=Math[_0x54908c(0x1ae)](canvas[_0x54908c(0x18f)]**0x2+canvas[_0x54908c(0x1b1)]**0x2),(canvas['width']!=oldCanvasWidth||canvas['height']!=oldCanvasHeight||_0x2d3650)&&(menuParticles&&(menuParticles=[],createMenuParticles()),introParticles&&(introParticles=[],createIntroParticles()),(gameState===_0x54908c(0x191)||gameState===_0x54908c(0x190)||gameState===_0x54908c(0x195))&&resizeGameElements()),oldCanvasWidth=canvas['width'],oldCanvasHeight=canvas[_0x54908c(0x1b1)];}function resizeGameElements(){const _0x472eef=a7_0x59c016;let _0x30da3c=oldCanvasWidth||canvas[_0x472eef(0x18f)],_0x2f4835=oldCanvasHeight||canvas[_0x472eef(0x1b1)];paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight(),ballRadius=calcBallSize(),brickPadding=canvasDiagonal*0.006,brickHeight=canvas[_0x472eef(0x1b1)]*0.05,brickWidth=(canvas['width']-(0x1+0x1)*brickPadding)/0x1;brickColumnCount&&(brickWidth=(canvas[_0x472eef(0x18f)]-(brickColumnCount+0x1)*brickPadding)/brickColumnCount);if(paddle){paddle[_0x472eef(0x18f)]=paddleWidth,paddle[_0x472eef(0x1b1)]=paddleHeight,paddle['y']=calcPaddleY(paddleHeight),paddle['speed']=calcPaddleSpeed();if(paddle['x']<0x0)paddle['x']=0x0;else paddle['x']+paddle['width']>canvas[_0x472eef(0x18f)]&&(paddle['x']=canvas[_0x472eef(0x18f)]-paddle[_0x472eef(0x18f)]);}fireParticles&&(fireParticles=[]);for(let _0x22ef96 of balls){_0x22ef96[_0x472eef(0x197)]=ballRadius,ballSpeed=calcBallSpeed(),_0x22ef96[_0x472eef(0x198)]=ballSpeed;let _0x1edf5e=Math[_0x472eef(0x1a8)](_0x22ef96['dy'],_0x22ef96['dx']);_0x22ef96['dx']=ballSpeed*Math[_0x472eef(0x1a1)](_0x1edf5e),_0x22ef96['dy']=ballSpeed*Math[_0x472eef(0x19b)](_0x1edf5e),_0x22ef96['x']=_0x22ef96['x']/_0x30da3c*canvas[_0x472eef(0x18f)],_0x22ef96['y']=_0x22ef96['y']/_0x2f4835*canvas[_0x472eef(0x1b1)];}offsetTop=canvas[_0x472eef(0x1b1)]*0.1,offsetLeft=(canvas['width']-0x1*(brickWidth+brickPadding))/0x2;if(bricks&&brickColumnCount&&brickRowCount){offsetLeft=(canvas[_0x472eef(0x18f)]-brickColumnCount*(brickWidth+brickPadding))/0x2;for(let _0x2a0740=0x0;_0x2a0740<brickRowCount;_0x2a0740++){for(let _0x91f851=0x0;_0x91f851<brickColumnCount;_0x91f851++){let _0x3400f7=bricks[_0x2a0740][_0x91f851];_0x3400f7&&(_0x3400f7[_0x472eef(0x18f)]=brickWidth,_0x3400f7['height']=brickHeight,_0x3400f7['x']=_0x91f851*(brickWidth+brickPadding)+offsetLeft,_0x3400f7['y']=_0x2a0740*(brickHeight+brickPadding)+offsetTop);}}}if(powerUps)for(let _0x18275b of powerUps){_0x18275b[_0x472eef(0x18f)]=canvas[_0x472eef(0x18f)]*0.05,_0x18275b[_0x472eef(0x1b1)]=canvas['height']*0.02,_0x18275b['x']=_0x18275b['x']/_0x30da3c*canvas['width'],_0x18275b['y']=_0x18275b['y']/_0x2f4835*canvas['height'];}if(effects)for(let _0x628586 of effects){_0x628586['x']=_0x628586['x']/_0x30da3c*canvas[_0x472eef(0x18f)],_0x628586['y']=_0x628586['y']/_0x2f4835*canvas['height'];}if(particles)for(let _0x536ced of particles){_0x536ced['x']=_0x536ced['x']/_0x30da3c*canvas[_0x472eef(0x18f)],_0x536ced['y']=_0x536ced['y']/_0x2f4835*canvas['height'],_0x536ced['dx']=_0x536ced['dx']/_0x30da3c*canvas['width'],_0x536ced['dy']=_0x536ced['dy']/_0x2f4835*canvas[_0x472eef(0x1b1)];}oldCanvasWidth=canvas[_0x472eef(0x18f)],oldCanvasHeight=canvas[_0x472eef(0x1b1)];}