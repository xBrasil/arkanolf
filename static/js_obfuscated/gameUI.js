const a7_0x3ccbdf=a7_0xf7d6;(function(_0xd82afd,_0x4457ad){const _0x27f284=a7_0xf7d6,_0x381e9c=_0xd82afd();while(!![]){try{const _0x3672a0=-parseInt(_0x27f284(0x1f7))/0x1*(parseInt(_0x27f284(0x1fa))/0x2)+parseInt(_0x27f284(0x1f1))/0x3+parseInt(_0x27f284(0x1f4))/0x4*(parseInt(_0x27f284(0x1ff))/0x5)+-parseInt(_0x27f284(0x1f3))/0x6*(parseInt(_0x27f284(0x1ed))/0x7)+-parseInt(_0x27f284(0x1eb))/0x8+-parseInt(_0x27f284(0x1fe))/0x9*(-parseInt(_0x27f284(0x202))/0xa)+-parseInt(_0x27f284(0x1f8))/0xb*(-parseInt(_0x27f284(0x1f0))/0xc);if(_0x3672a0===_0x4457ad)break;else _0x381e9c['push'](_0x381e9c['shift']());}catch(_0x1351f6){_0x381e9c['push'](_0x381e9c['shift']());}}}(a7_0x3bd4,0x96ad6));function a7_0x3bd4(){const _0x245005=['apply','(((.+)+)+)+$','radius','sqrt','levelCompleted','innerWidth','search','gameCanvas','toString','8361184ipGtvU','userAgent','997815atXMwV','getContext','test','1284ZAZQlH','3195558Ejwmsu','sin','18FEJzfV','308332dNtboI','speed','cos','4hvdVjH','35816CbJLSJ','vendor','196564awItdt','height','width','playing','18axttDT','25ZSdxZn','some','opera','3420460IRpunm'];a7_0x3bd4=function(){return _0x245005;};return a7_0x3bd4();}const a7_0x16d612=(function(){let _0x193211=!![];return function(_0x55b32b,_0x179769){const _0x429177=_0x193211?function(){const _0x107102=a7_0xf7d6;if(_0x179769){const _0x51f84f=_0x179769[_0x107102(0x203)](_0x55b32b,arguments);return _0x179769=null,_0x51f84f;}}:function(){};return _0x193211=![],_0x429177;};}()),a7_0x13fa95=a7_0x16d612(this,function(){const _0x41a296=a7_0xf7d6;return a7_0x13fa95[_0x41a296(0x1ea)]()[_0x41a296(0x1e8)](_0x41a296(0x204))['toString']()['constructor'](a7_0x13fa95)[_0x41a296(0x1e8)]('(((.+)+)+)+$');});a7_0x13fa95();const GAME_AREA_WIDTH_PERCENTAGE_DESKTOP=0.5,GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP=0.85,GAME_AREA_WIDTH_PERCENTAGE_MOBILE=0x1,GAME_AREA_HEIGHT_PERCENTAGE_MOBILE=0x1,canvas=document['getElementById'](a7_0x3ccbdf(0x1e9)),ctx=canvas[a7_0x3ccbdf(0x1ee)]('2d');let oldCanvasWidth=0x0,oldCanvasHeight=0x0,canvasDiagonal=0x0;function isMobileUserAgent(){const _0x446e34=a7_0x3ccbdf,_0x54b27f=navigator[_0x446e34(0x1ec)]||navigator[_0x446e34(0x1f9)]||window[_0x446e34(0x201)],_0x11f998=[/android/i,/webos/i,/iphone/i,/ipad/i,/ipod/i,/blackberry/i,/windows phone/i];return _0x11f998[_0x446e34(0x200)](_0x5184c5=>_0x5184c5[_0x446e34(0x1ef)](_0x54b27f));}function a7_0xf7d6(_0x18a508,_0x1122a6){const _0x3269b9=a7_0x3bd4();return a7_0xf7d6=function(_0x13fa95,_0x16d612){_0x13fa95=_0x13fa95-0x1e5;let _0x3bd49c=_0x3269b9[_0x13fa95];return _0x3bd49c;},a7_0xf7d6(_0x18a508,_0x1122a6);}function resizeCanvas(_0xfb6bad=![]){const _0x50a12b=a7_0x3ccbdf;let _0x1b8f08=window[_0x50a12b(0x1e7)],_0x35f12b=window['innerHeight'],_0x35f6d5=_0x1b8f08/_0x35f12b;if(_0x35f6d5>0x3/0x2)_0x1b8f08=_0x35f12b*(0x3/0x2);else _0x35f6d5<0x2/0x3&&(_0x35f12b=_0x1b8f08*(0x3/0x2));isMobileUserAgent()?(canvas['width']=_0x1b8f08*GAME_AREA_WIDTH_PERCENTAGE_MOBILE,canvas[_0x50a12b(0x1fb)]=_0x35f12b*GAME_AREA_HEIGHT_PERCENTAGE_MOBILE):(canvas['width']=_0x1b8f08*GAME_AREA_WIDTH_PERCENTAGE_DESKTOP,canvas[_0x50a12b(0x1fb)]=_0x35f12b*GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP),canvasDiagonal=Math[_0x50a12b(0x1e5)](canvas[_0x50a12b(0x1fc)]**0x2+canvas[_0x50a12b(0x1fb)]**0x2),(canvas[_0x50a12b(0x1fc)]!=oldCanvasWidth||canvas[_0x50a12b(0x1fb)]!=oldCanvasHeight||_0xfb6bad)&&(menuParticles&&(menuParticles=[],createMenuParticles()),introParticles&&(introParticles=[],createIntroParticles()),(gameState===_0x50a12b(0x1fd)||gameState===_0x50a12b(0x1e6)||gameState==='gameCompleted')&&resizeGameElements()),oldCanvasWidth=canvas[_0x50a12b(0x1fc)],oldCanvasHeight=canvas[_0x50a12b(0x1fb)];}function resizeGameElements(){const _0x53aca7=a7_0x3ccbdf;let _0x4e66fc=oldCanvasWidth||canvas['width'],_0x8d876e=oldCanvasHeight||canvas[_0x53aca7(0x1fb)];paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight(),ballRadius=calcBallSize(),brickPadding=canvasDiagonal*0.006,brickHeight=canvas[_0x53aca7(0x1fb)]*0.05,brickWidth=(canvas[_0x53aca7(0x1fc)]-(0x1+0x1)*brickPadding)/0x1;brickColumnCount&&(brickWidth=(canvas[_0x53aca7(0x1fc)]-(brickColumnCount+0x1)*brickPadding)/brickColumnCount);if(paddle){paddle['width']=paddleWidth,paddle[_0x53aca7(0x1fb)]=paddleHeight,paddle['y']=calcPaddleY(paddleHeight),paddle[_0x53aca7(0x1f5)]=calcPaddleSpeed();if(paddle['x']<0x0)paddle['x']=0x0;else paddle['x']+paddle['width']>canvas[_0x53aca7(0x1fc)]&&(paddle['x']=canvas[_0x53aca7(0x1fc)]-paddle[_0x53aca7(0x1fc)]);}fireParticles&&(fireParticles=[]);for(let _0xcf0f70 of balls){_0xcf0f70[_0x53aca7(0x205)]=ballRadius,ballSpeed=calcBallSpeed(),_0xcf0f70[_0x53aca7(0x1f5)]=ballSpeed;let _0x50919c=Math['atan2'](_0xcf0f70['dy'],_0xcf0f70['dx']);_0xcf0f70['dx']=ballSpeed*Math[_0x53aca7(0x1f6)](_0x50919c),_0xcf0f70['dy']=ballSpeed*Math[_0x53aca7(0x1f2)](_0x50919c),_0xcf0f70['x']=_0xcf0f70['x']/_0x4e66fc*canvas[_0x53aca7(0x1fc)],_0xcf0f70['y']=_0xcf0f70['y']/_0x8d876e*canvas['height'];}offsetTop=canvas[_0x53aca7(0x1fb)]*0.1,offsetLeft=(canvas[_0x53aca7(0x1fc)]-0x1*(brickWidth+brickPadding))/0x2;if(bricks&&brickColumnCount&&brickRowCount){offsetLeft=(canvas[_0x53aca7(0x1fc)]-brickColumnCount*(brickWidth+brickPadding))/0x2;for(let _0x4d9267=0x0;_0x4d9267<brickRowCount;_0x4d9267++){for(let _0x4a075c=0x0;_0x4a075c<brickColumnCount;_0x4a075c++){let _0x5f117b=bricks[_0x4d9267][_0x4a075c];_0x5f117b&&(_0x5f117b[_0x53aca7(0x1fc)]=brickWidth,_0x5f117b[_0x53aca7(0x1fb)]=brickHeight,_0x5f117b['x']=_0x4a075c*(brickWidth+brickPadding)+offsetLeft,_0x5f117b['y']=_0x4d9267*(brickHeight+brickPadding)+offsetTop);}}}if(powerUps)for(let _0x4adecf of powerUps){_0x4adecf[_0x53aca7(0x1fc)]=canvas[_0x53aca7(0x1fc)]*0.05,_0x4adecf[_0x53aca7(0x1fb)]=canvas[_0x53aca7(0x1fb)]*0.02,_0x4adecf['x']=_0x4adecf['x']/_0x4e66fc*canvas[_0x53aca7(0x1fc)],_0x4adecf['y']=_0x4adecf['y']/_0x8d876e*canvas[_0x53aca7(0x1fb)];}if(effects)for(let _0x2aced0 of effects){_0x2aced0['x']=_0x2aced0['x']/_0x4e66fc*canvas[_0x53aca7(0x1fc)],_0x2aced0['y']=_0x2aced0['y']/_0x8d876e*canvas[_0x53aca7(0x1fb)];}if(particles)for(let _0x3c3f07 of particles){_0x3c3f07['x']=_0x3c3f07['x']/_0x4e66fc*canvas[_0x53aca7(0x1fc)],_0x3c3f07['y']=_0x3c3f07['y']/_0x8d876e*canvas[_0x53aca7(0x1fb)],_0x3c3f07['dx']=_0x3c3f07['dx']/_0x4e66fc*canvas[_0x53aca7(0x1fc)],_0x3c3f07['dy']=_0x3c3f07['dy']/_0x8d876e*canvas[_0x53aca7(0x1fb)];}oldCanvasWidth=canvas[_0x53aca7(0x1fc)],oldCanvasHeight=canvas[_0x53aca7(0x1fb)];}