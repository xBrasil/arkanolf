const a8_0x4c4d8f=a8_0x5cb7;(function(_0x366487,_0x87683f){const _0x4b5c89=a8_0x5cb7,_0x2a22a7=_0x366487();while(!![]){try{const _0x31c540=-parseInt(_0x4b5c89(0xb6))/0x1*(parseInt(_0x4b5c89(0xaa))/0x2)+-parseInt(_0x4b5c89(0xc6))/0x3+-parseInt(_0x4b5c89(0xe1))/0x4*(-parseInt(_0x4b5c89(0xd4))/0x5)+parseInt(_0x4b5c89(0xa4))/0x6+parseInt(_0x4b5c89(0xc4))/0x7*(parseInt(_0x4b5c89(0xc9))/0x8)+-parseInt(_0x4b5c89(0xdf))/0x9*(-parseInt(_0x4b5c89(0xb5))/0xa)+parseInt(_0x4b5c89(0xac))/0xb*(-parseInt(_0x4b5c89(0xcd))/0xc);if(_0x31c540===_0x87683f)break;else _0x2a22a7['push'](_0x2a22a7['shift']());}catch(_0x402ee4){_0x2a22a7['push'](_0x2a22a7['shift']());}}}(a8_0x4a0e,0x67a4e));function a8_0x4a0e(){const _0x3e40a5=['yxrH','C2L6zq','ndCWmtzTwePAsvm','C3rHCNrnzw51','ywn0Aw9U','ywrKrxzLBNrmAq','mtuXmdq0uM9osLLl','yMX1CG','z2v0rwXLBwvUDa','C3bLzwq','kcGOlISPkYKRkq','zM9JDxm','yxvSDa','nJyXnunjsKzPza','D2LKDgG','CMvXDwvZDfbVAq','Dg91y2HTB3zL','Dg9W','Dg9tDhjPBMC','Bw96uMvXDwvZDa','tg9JAW','y2XPzw50wa','DgvZDa','y3jLzgL0CW','mtuYmxrWBMj0za','A2nOyw5Nzq','mJuXmLjYEhfltG','u3bHy2u','DxnLCKfNzw50ra','BNrLCKXVy2S','AgLKzs1JDxjZBW','y2XHC3nmAxn0','A0vSzw1LBNq','ywrK','Bg9JA2nOyw5Nzq','z2fTzunHBNzHCW','DgvYBg9JA2nOyq','CMvTB3zL','DgLVBG','yxbWBhK','C3fYDa','zxn0ug9PBNrLCG','C3rLBMvY','DgvYtg9JA0vSzq','z2v0qM91BMrPBG','CKXVy2S','AxntDhvJAW','qNLjza','Bw91C2vTB3zL','Dg91y2HLCW','mtqXndu0mKL5yun3qG','z2fTzunVBxbSzq','z0nSAwvUDfjLyW','Bw96rxHPDfbVAq','BgvMDa','Bw9IAwXL','mM94EM9gBW','AgvPz2H0','mteZm3DItKHnwq','ChjLDMvUDerLzG','BMDL','Dg91y2HJyw5Jzq','rxnJyxbL','y29UC3rYDwn0BW','ug9PBNrLCKXVyW','DMLICMf0zq','y2XPzw50wq','mZuYodbPz3PtyNa','odmXmwzbrgHnDa','DxnLCKfNzw50','z2v0q29UDgv4Da','CgXHEwLUzW','Bgv2zwXtzwXLyW','B25dBgLJAW','A2v5','qxjYB3Dmzwz0','C2v0q29TCgXLDa','qxjYB3DsAwDODa','Bw96Cg9PBNrLCG','tg9JA0vSzw1LBG','Aw5UzxjxAwr0Aa','zxHPDfbVAw50zq','mZK5CwTbs0zy','D2vIA2L0rxHPDa','oda1ntCYugzHu0Lt'];a8_0x4a0e=function(){return _0x3e40a5;};return a8_0x4a0e();}const GAME_AREA_WIDTH_PERCENTAGE_DESKTOP=0.75,GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP=0.95,GAME_AREA_WIDTH_PERCENTAGE_MOBILE=0x1,GAME_AREA_HEIGHT_PERCENTAGE_MOBILE=0x1,canvas=document[a8_0x4c4d8f(0xcf)+a8_0x4c4d8f(0xa1)](a8_0x4c4d8f(0x95)),ctx=canvas[a8_0x4c4d8f(0xb8)]('2d');let previousCanvasWidth=0x0,previousCanvasHeight=0x0,widthRatio=0x1,heightRatio=0x1,oldCanvasWidth=0x0,oldCanvasHeight=0x0,canvasDiagonal=0x0,isTouching=![],touchX=0x0,lastTapTime=0x0,isMobile=isMobileUserAgent(),mouseX=0x0,mouseY=0x0,isCursorShown=!![],rightPressed=![],leftPressed=!![];function handleTouchStart(_0x2f581e){const _0x1e1b44=a8_0x4c4d8f;if(gameState==='playing'&&!isPaused){_0x2f581e[_0x1e1b44(0xad)+_0x1e1b44(0xd3)]();const _0x3e86d1=Date['now'](),_0xc4edf9=_0x3e86d1-lastTapTime;if(_0xc4edf9<0x12c&&_0xc4edf9>0x0)togglePause(),isTouching=![];else{isTouching=!![],isPaused=![];if(isThereStuckBall())releaseStuckBalls();handleTouchMove(_0x2f581e);}lastTapTime=_0x3e86d1;}}function handleTouchMove(_0x297a12){const _0x253653=a8_0x4c4d8f;if(!isTouching)return;const _0x5d1acb=_0x297a12[_0x253653(0xa3)][0x0];touchX=_0x5d1acb[_0x253653(0xdc)];const _0x128c57=canvas[_0x253653(0x9e)+_0x253653(0xa6)+'t'](),_0x5a00bc=(touchX-_0x128c57[_0x253653(0xa8)])/(_0x128c57[_0x253653(0xd5)]/canvas['width']);paddle['x']=_0x5a00bc-paddle[_0x253653(0xd5)]/0x2;}function handleTouchEnd(_0x2dec6d){isTouching=![];}function vibrate(_0xa11db5){const _0x42549e=a8_0x4c4d8f;try{navigator[_0x42549e(0xb3)]&&navigator['vibrate'](_0xa11db5);}finally{return;}}function toggleEsc(_0x2c504a){const _0x284f17=a8_0x4c4d8f;gameState===_0x284f17(0xb9)&&(_0x2c504a[_0x284f17(0xad)+'ault'](),togglePause());}function addAllListeners(){const _0x47409d=a8_0x4c4d8f;window[_0x47409d(0xcc)+_0x47409d(0x9c)]('resize',resizeCanvas),window[_0x47409d(0xcc)+_0x47409d(0x9c)](_0x47409d(0xce),onWindowBlur),window[_0x47409d(0xcc)+_0x47409d(0x9c)](_0x47409d(0xd2),onWindowFocus),addMouseEventsListeners(),addTouchEventsListeners(),addKeyboardEventsListeners();}function keyDownHandler(_0x47a3c8){const _0x5e7950=a8_0x4c4d8f;switch(_0x47a3c8[_0x5e7950(0xbc)]){case _0x5e7950(0xbf):paddle['dx']=paddle[_0x5e7950(0xd0)],rightPressed=!![];break;case _0x5e7950(0xbd):paddle['dx']=-paddle[_0x5e7950(0xd0)],leftPressed=!![];break;case'\x20':case _0x5e7950(0xe2):isThereStuckBall()?releaseStuckBalls():togglePause();break;case _0x5e7950(0xb0):togglePause();break;case'F':case'f':showFPS=!showFPS,saveProgress();break;default:break;}}function a8_0x5cb7(_0x59f9e4,_0x534c9e){const _0x5dfcc5=a8_0x4a0e();return a8_0x5cb7=function(_0x4cf9b0,_0x54a8a1){_0x4cf9b0=_0x4cf9b0-0x95;let _0x4a0eb9=_0x5dfcc5[_0x4cf9b0];if(a8_0x5cb7['nIWPdz']===undefined){var _0x5cb727=function(_0x1c069d){const _0x408e3b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5a0b13='',_0x2f581e='',_0x3e86d1=_0x5a0b13+_0x5cb727;for(let _0xc4edf9=0x0,_0x297a12,_0x5d1acb,_0x128c57=0x0;_0x5d1acb=_0x1c069d['charAt'](_0x128c57++);~_0x5d1acb&&(_0x297a12=_0xc4edf9%0x4?_0x297a12*0x40+_0x5d1acb:_0x5d1acb,_0xc4edf9++%0x4)?_0x5a0b13+=_0x3e86d1['charCodeAt'](_0x128c57+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x297a12>>(-0x2*_0xc4edf9&0x6)):_0xc4edf9:0x0){_0x5d1acb=_0x408e3b['indexOf'](_0x5d1acb);}for(let _0x5a00bc=0x0,_0x2dec6d=_0x5a0b13['length'];_0x5a00bc<_0x2dec6d;_0x5a00bc++){_0x2f581e+='%'+('00'+_0x5a0b13['charCodeAt'](_0x5a00bc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2f581e);};a8_0x5cb7['ccIVHJ']=_0x5cb727,_0x59f9e4=arguments,a8_0x5cb7['nIWPdz']=!![];}const _0x3d0f69=_0x5dfcc5[0x0],_0x39117d=_0x4cf9b0+_0x3d0f69,_0x5c2011=_0x59f9e4[_0x39117d];if(!_0x5c2011){const _0xa11db5=function(_0x2c504a){this['FpZRUk']=_0x2c504a,this['iFNiXY']=[0x1,0x0,0x0],this['rmHkKV']=function(){return'newState';},this['tPvsDf']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['WvaDSt']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xa11db5['prototype']['FBGjiA']=function(){const _0x47a3c8=new RegExp(this['tPvsDf']+this['WvaDSt']),_0x4814b8=_0x47a3c8['test'](this['rmHkKV']['toString']())?--this['iFNiXY'][0x1]:--this['iFNiXY'][0x0];return this['JwdvEb'](_0x4814b8);},_0xa11db5['prototype']['JwdvEb']=function(_0x259f6d){if(!Boolean(~_0x259f6d))return _0x259f6d;return this['CDZvQy'](this['FpZRUk']);},_0xa11db5['prototype']['CDZvQy']=function(_0x37a25b){for(let _0x3ff40b=0x0,_0x18f490=this['iFNiXY']['length'];_0x3ff40b<_0x18f490;_0x3ff40b++){this['iFNiXY']['push'](Math['round'](Math['random']())),_0x18f490=this['iFNiXY']['length'];}return _0x37a25b(this['iFNiXY'][0x0]);},new _0xa11db5(a8_0x5cb7)['FBGjiA'](),_0x4a0eb9=a8_0x5cb7['ccIVHJ'](_0x4a0eb9),_0x59f9e4[_0x39117d]=_0x4a0eb9;}else _0x4a0eb9=_0x5c2011;return _0x4a0eb9;},a8_0x5cb7(_0x59f9e4,_0x534c9e);}function keyUpHandler(_0x4814b8){const _0x2a5521=a8_0x4c4d8f;switch(_0x4814b8['key']){case _0x2a5521(0xbf):if(paddle['dx']>0x0)paddle['dx']=0x0;rightPressed=![];break;case _0x2a5521(0xbd):if(paddle['dx']<0x0)paddle['dx']=0x0;leftPressed=![];break;default:break;}}function isThereStuckBall(){const _0x7e28ad=a8_0x4c4d8f;if(!balls)return![];for(let _0x259f6d of balls){if(_0x259f6d[_0x7e28ad(0xa0)])return!![];}return![];}function addKeyboardEventsListeners(){const _0x252534=a8_0x4c4d8f;document['addEventLi'+'stener']('keydown',keyDownHandler),document['addEventLi'+_0x252534(0x9c)]('keyup',keyUpHandler);}function addTouchEventsListeners(){const _0x38713a=a8_0x4c4d8f;canvas[_0x38713a(0xcc)+'stener']('touchstart',handleTouchStart,![]),canvas['addEventLi'+_0x38713a(0x9c)](_0x38713a(0xd7),handleTouchMove,![]),canvas[_0x38713a(0xcc)+_0x38713a(0x9c)]('touchend',handleTouchEnd,![]),canvas[_0x38713a(0xcc)+'stener'](_0x38713a(0xaf)+'l',handleTouchEnd,![]);}function addMouseEventsListeners(){const _0x293079=a8_0x4c4d8f;document[_0x293079(0xcc)+_0x293079(0x9c)]('pointerloc'+_0x293079(0xe0),onPointerLockChange,![]),document[_0x293079(0xcc)+_0x293079(0x9c)](_0x293079(0xc0)+_0x293079(0xe9),onPointerLockChange,![]),document[_0x293079(0xcc)+_0x293079(0x9c)]('webkitpoin'+_0x293079(0x96)+_0x293079(0xae),onPointerLockChange,![]),document['addEventLi'+_0x293079(0x9c)](_0x293079(0xa2),onMouseMove),canvas['addEventLi'+_0x293079(0x9c)]('click',handleClick);}function handleClick(_0x37a25b){const _0xfb182=a8_0x4c4d8f;let _0x3ff40b=canvas[_0xfb182(0x9e)+'gClientRec'+'t'](),_0x18f490=_0x37a25b[_0xfb182(0xdc)]-_0x3ff40b['left'],_0x4ea7c3=_0x37a25b[_0xfb182(0xb4)]-_0x3ff40b[_0xfb182(0xd8)];switch(gameState){case _0xfb182(0xca):for(let _0x1a7ed9 of difficultyButtons){if(_0x18f490>=_0x1a7ed9['x']&&_0x18f490<=_0x1a7ed9['x']+_0x1a7ed9[_0xfb182(0xd5)]&&_0x4ea7c3>=_0x1a7ed9['y']&&_0x4ea7c3<=_0x1a7ed9['y']+_0x1a7ed9[_0xfb182(0xab)]){selectedDifficulty=_0x1a7ed9['difficulty'],saveProgress();return;}}for(let _0x3ddb9a of menuButtons){if(_0x18f490>=_0x3ddb9a['x']&&_0x18f490<=_0x3ddb9a['x']+_0x3ddb9a[_0xfb182(0xd5)]&&_0x4ea7c3>=_0x3ddb9a['y']&&_0x4ea7c3<=_0x3ddb9a['y']+_0x3ddb9a[_0xfb182(0xab)]){_0x3ddb9a[_0xfb182(0xcb)]();return;}}break;case _0xfb182(0xba)+_0xfb182(0x98):for(let _0x31c782 of levelButtons){if(_0x18f490>=_0x31c782['x']&&_0x18f490<=_0x31c782['x']+_0x31c782[_0xfb182(0xd5)]&&_0x4ea7c3>=_0x31c782['y']&&_0x4ea7c3<=_0x31c782['y']+_0x31c782[_0xfb182(0xab)]){_0x31c782[_0xfb182(0xcb)]();return;}}break;case _0xfb182(0xde):if(_0x18f490>=creditsBackButton['x']&&_0x18f490<=creditsBackButton['x']+creditsBackButton['width']&&_0x4ea7c3>=creditsBackButton['y']&&_0x4ea7c3<=creditsBackButton['y']+creditsBackButton['height']){creditsBackButton['action']();return;}break;case _0xfb182(0xb9):if(isPaused){let _0x32538f=![];for(let _0xfd7d96 of pauseMenuButtons){if(_0x18f490>=_0xfd7d96['x']&&_0x18f490<=_0xfd7d96['x']+_0xfd7d96['width']&&_0x4ea7c3>=_0xfd7d96['y']&&_0x4ea7c3<=_0xfd7d96['y']+_0xfd7d96[_0xfb182(0xab)]){_0xfd7d96[_0xfb182(0xbb)](),_0x32538f=!![];break;}}!_0x32538f&&resumeGame();}else isThereStuckBall()?releaseStuckBalls():togglePause();break;case'gameOver':for(let _0x2d283a of gameOverButtons){if(_0x18f490>=_0x2d283a['x']&&_0x18f490<=_0x2d283a['x']+_0x2d283a[_0xfb182(0xd5)]&&_0x4ea7c3>=_0x2d283a['y']&&_0x4ea7c3<=_0x2d283a['y']+_0x2d283a['height']){_0x2d283a[_0xfb182(0xcb)]();return;}}break;case _0xfb182(0xa5)+'ted':for(let _0x1bcdd1 of gameCompletedButtons){if(_0x18f490>=_0x1bcdd1['x']&&_0x18f490<=_0x1bcdd1['x']+_0x1bcdd1['width']&&_0x4ea7c3>=_0x1bcdd1['y']&&_0x4ea7c3<=_0x1bcdd1['y']+_0x1bcdd1['height']){_0x1bcdd1[_0xfb182(0xcb)]();return;}}break;case _0xfb182(0xbe)+'ed':for(let _0x8c7822 of setButtons){if(_0x18f490>=_0x8c7822['x']&&_0x18f490<=_0x8c7822['x']+_0x8c7822[_0xfb182(0xd5)]&&_0x4ea7c3>=_0x8c7822['y']&&_0x4ea7c3<=_0x8c7822['y']+_0x8c7822[_0xfb182(0xab)]){_0x8c7822['action']();return;}}break;default:break;}}function onMouseMove(_0x3c3366){const _0x550a53=a8_0x4c4d8f;let _0x5cbf3f=canvas[_0x550a53(0x9e)+'gClientRec'+'t']();mouseX=_0x3c3366[_0x550a53(0xdc)]-_0x5cbf3f[_0x550a53(0xa8)],mouseY=_0x3c3366['clientY']-_0x5cbf3f[_0x550a53(0xd8)];if(gameState===_0x550a53(0xb9)&&!isPaused&&paddle){if(!isCursorShown){let _0x3b675e=_0x3c3366['movementX']||_0x3c3366['mozMovemen'+'tX']||_0x3c3366['webkitMove'+'mentX']||0x0;paddle['x']+=_0x3b675e;}else paddle['x']=mouseX-paddle[_0x550a53(0xd5)]/0x2;}}function isMobileUserAgent(){const _0x1a69df=a8_0x4c4d8f,_0x4f97e2=(function(){let _0x20a2a1=!![];return function(_0x3d287a,_0x456642){const _0x5dceb5=_0x20a2a1?function(){const _0x2d2da8=a8_0x5cb7;if(_0x456642){const _0x5fd4cd=_0x456642[_0x2d2da8(0x99)](_0x3d287a,arguments);return _0x456642=null,_0x5fd4cd;}}:function(){};return _0x20a2a1=![],_0x5dceb5;};}()),_0x39963d=_0x4f97e2(this,function(){const _0x1bf38f=a8_0x5cb7;return _0x39963d[_0x1bf38f(0xd9)]()['search'](_0x1bf38f(0xd1)+'+$')[_0x1bf38f(0xd9)]()[_0x1bf38f(0xb1)+'r'](_0x39963d)['search'](_0x1bf38f(0xd1)+'+$');});_0x39963d();if(navigator[_0x1a69df(0xe3)+_0x1a69df(0xc7)]&&navigator[_0x1a69df(0xe3)+_0x1a69df(0xc7)][_0x1a69df(0xa9)]!==undefined)return navigator[_0x1a69df(0xe3)+'ata'][_0x1a69df(0xa9)];const _0x502a4c=navigator[_0x1a69df(0xb7)]||window['opera'],_0x3ebf4b=[/android/i,/webos/i,/iphone/i,/ipad/i,/ipod/i,/blackberry/i,/windows phone/i];return _0x3ebf4b['some'](_0x1b4d2c=>_0x1b4d2c[_0x1a69df(0xdd)](_0x502a4c));}function resizeCanvas(_0x326592=![]){const _0x26c97d=a8_0x4c4d8f;let _0x45278a=window[_0x26c97d(0xc2)],_0x2f1fce=window['innerHeigh'+'t'],_0x4a7a7f=_0x45278a/_0x2f1fce;if(_0x4a7a7f>0x3/0x2)_0x45278a=_0x2f1fce*(0x3/0x2);else _0x4a7a7f<0x2/0x3&&(_0x2f1fce=_0x45278a*(0x3/0x2));isMobile?(canvas[_0x26c97d(0xd5)]=_0x45278a*GAME_AREA_WIDTH_PERCENTAGE_MOBILE,canvas[_0x26c97d(0xab)]=_0x2f1fce*GAME_AREA_HEIGHT_PERCENTAGE_MOBILE,_0x4a7a7f>0x4/0x3&&(_0x45278a=_0x2f1fce*(0x4/0x3))):(canvas[_0x26c97d(0xd5)]=_0x45278a*GAME_AREA_WIDTH_PERCENTAGE_DESKTOP,canvas[_0x26c97d(0xab)]=_0x2f1fce*GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP);canvasDiagonal=Math['sqrt'](canvas['width']**0x2+canvas['height']**0x2);if(canvas[_0x26c97d(0xd5)]!=oldCanvasWidth||canvas['height']!=oldCanvasHeight||_0x326592)resizeAllElements();oldCanvasWidth=canvas[_0x26c97d(0xd5)],oldCanvasHeight=canvas['height'];}function resizeAllElements(){const _0x5ade49=a8_0x4c4d8f;previousCanvasWidth=oldCanvasWidth||canvas['width'],previousCanvasHeight=oldCanvasHeight||canvas['height'],widthRatio=canvas[_0x5ade49(0xd5)]/previousCanvasWidth,heightRatio=canvas['height']/previousCanvasHeight,paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight(),ballRadius=calcBallSize(),brickPadding=canvasDiagonal*0.006,brickHeight=canvas[_0x5ade49(0xab)]*0.05,brickWidth=(canvas[_0x5ade49(0xd5)]-(0x1+0x1)*brickPadding)/0x1;brickColumnCount&&(brickWidth=(canvas['width']-(brickColumnCount+0x1)*brickPadding)/brickColumnCount);if(paddle){activePaddlePowerup===POWERUP_TYPES['BIGPADDLE']&&(paddleWidth*=POWERUP_BIGPADDLE_MULTIPLIER);paddle[_0x5ade49(0xd5)]=paddleWidth,paddle[_0x5ade49(0xab)]=paddleHeight,paddle['y']=calcPaddleY(paddleHeight),paddle[_0x5ade49(0xd0)]=calcPaddleSpeed();if(paddle['x']<0x0)paddle['x']=0x0;else paddle['x']+paddle['width']>canvas[_0x5ade49(0xd5)]&&(paddle['x']=canvas[_0x5ade49(0xd5)]-paddle[_0x5ade49(0xd5)]);}for(let _0x20d6c0 of balls){applyBallSizeToAllBalls(0x1),applyBallSpeedToAllBalls(),applyBallPowerupEffects(),_0x20d6c0['x']=_0x20d6c0['x']/previousCanvasWidth*canvas['width'],_0x20d6c0['y']=_0x20d6c0['y']/previousCanvasHeight*canvas[_0x5ade49(0xab)];}offsetTop=canvas[_0x5ade49(0xab)]*0.1,offsetLeft=(canvas['width']-0x1*(brickWidth+brickPadding))/0x2;if(bricks&&brickColumnCount&&brickRowCount){offsetLeft=(canvas[_0x5ade49(0xd5)]-brickColumnCount*(brickWidth+brickPadding))/0x2;for(let _0x58a963=0x0;_0x58a963<brickRowCount;_0x58a963++){for(let _0x277c5c=0x0;_0x277c5c<brickColumnCount;_0x277c5c++){let _0x58733c=bricks[_0x58a963][_0x277c5c];_0x58733c&&(_0x58733c[_0x5ade49(0xd5)]=brickWidth,_0x58733c[_0x5ade49(0xab)]=brickHeight,_0x58733c['x']=_0x277c5c*(brickWidth+brickPadding)+offsetLeft,_0x58733c['y']=_0x58a963*(brickHeight+brickPadding)+offsetTop);}}}if(powerUps)for(let _0xe8ce82 of powerUps){_0xe8ce82[_0x5ade49(0xd5)]=canvas[_0x5ade49(0xd5)]*0.05,_0xe8ce82[_0x5ade49(0xab)]=canvas[_0x5ade49(0xab)]*0.02,_0xe8ce82['x']=_0xe8ce82['x']/previousCanvasWidth*canvas[_0x5ade49(0xd5)],_0xe8ce82['y']=_0xe8ce82['y']/previousCanvasHeight*canvas[_0x5ade49(0xab)];}if(effectMessages)for(let _0x7d1866 of effectMessages){_0x7d1866['x']=_0x7d1866['x']/previousCanvasWidth*canvas[_0x5ade49(0xd5)],_0x7d1866['y']=_0x7d1866['y']/previousCanvasHeight*canvas[_0x5ade49(0xab)];}resizeParticles(blockHitParticles),resizeParticles(fireParticles),resizeParticles(menuParticles),resizeParticles(introParticles),resizeParticles(sparkleParticles),createPatterns(),pauseMenuNeedsUpdate=!![],oldCanvasWidth=canvas[_0x5ade49(0xd5)],oldCanvasHeight=canvas[_0x5ade49(0xab)];}function resizeParticles(_0x5f1a34){const _0x534ee2=a8_0x4c4d8f;for(let _0x3cad1e of _0x5f1a34){_0x3cad1e['x']=_0x3cad1e['x']/previousCanvasWidth*canvas[_0x534ee2(0xd5)],_0x3cad1e['y']=_0x3cad1e['y']/previousCanvasHeight*canvas['height'];if(_0x3cad1e['dx'])_0x3cad1e['dx']=_0x3cad1e['dx']/previousCanvasWidth*canvas[_0x534ee2(0xd5)];if(_0x3cad1e['dy'])_0x3cad1e['dy']=_0x3cad1e['dy']/previousCanvasHeight*canvas[_0x534ee2(0xab)];if(_0x3cad1e['size'])_0x3cad1e[_0x534ee2(0xc8)]*=Math[_0x534ee2(0x9a)](widthRatio*heightRatio);}}function onWindowBlur(){gameState==='playing'&&!isPaused&&togglePause();}function onWindowFocus(){updateCursorStyle();}function updateCursorStyle(){const _0x33627d=a8_0x4c4d8f;try{if(gameState===_0x33627d(0xb9)&&!isPaused&&isCursorShown)canvas[_0x33627d(0xe6)][_0x33627d(0xe8)]('hide-curso'+'r'),isCursorShown=![],requestPointerLock();else(gameState!='playing'||isPaused)&&!isCursorShown&&(canvas['classList'][_0x33627d(0x97)](_0x33627d(0xe5)+'r'),isCursorShown=!![],exitPointerLock());}finally{return;}}function requestPointerLock(){const _0x418a7f=a8_0x4c4d8f;try{if(canvas[_0x418a7f(0xd6)+_0x418a7f(0xe4)])canvas['requestPoi'+'nterLock']();else{if(canvas[_0x418a7f(0xda)+_0x418a7f(0xb2)+'k'])canvas[_0x418a7f(0xda)+_0x418a7f(0xb2)+'k']();else canvas['webkitRequ'+_0x418a7f(0x9b)+_0x418a7f(0xdb)]&&canvas['webkitRequ'+_0x418a7f(0x9b)+_0x418a7f(0xdb)]();}}finally{return;}}function exitPointerLock(){const _0x221a55=a8_0x4c4d8f;try{if(document['exitPointe'+'rLock'])document[_0x221a55(0xc3)+_0x221a55(0x9f)]();else{if(document[_0x221a55(0xa7)+_0x221a55(0xe4)])document[_0x221a55(0xa7)+'nterLock']();else document[_0x221a55(0xc5)+_0x221a55(0xb2)+'k']&&document['webkitExit'+_0x221a55(0xb2)+'k']();}}finally{return;}}function onPointerLockChange(){const _0xd8c67=a8_0x4c4d8f,_0x12ae3b=document['pointerLoc'+_0xd8c67(0xe7)]===canvas||document['mozPointer'+_0xd8c67(0xc1)+'t']===canvas||document['webkitPoin'+_0xd8c67(0x9d)+'ment']===canvas;!isCursorShown&&!_0x12ae3b&&(gameState==='playing'&&!isPaused&&requestPointerLock());}