const a8_0x2f5a0c=a8_0x469f;(function(_0x19f7f3,_0x204df7){const _0x10884d=a8_0x469f,_0x398c79=_0x19f7f3();while(!![]){try{const _0x26cbb2=-parseInt(_0x10884d(0x1bc))/0x1+parseInt(_0x10884d(0x1d9))/0x2+-parseInt(_0x10884d(0x1d6))/0x3+parseInt(_0x10884d(0x1c7))/0x4+-parseInt(_0x10884d(0x1f5))/0x5+-parseInt(_0x10884d(0x1ef))/0x6*(parseInt(_0x10884d(0x1f0))/0x7)+-parseInt(_0x10884d(0x1fb))/0x8*(-parseInt(_0x10884d(0x1c4))/0x9);if(_0x26cbb2===_0x204df7)break;else _0x398c79['push'](_0x398c79['shift']());}catch(_0x40bb8f){_0x398c79['push'](_0x398c79['shift']());}}}(a8_0x2814,0x543fa));const GAME_AREA_WIDTH_PERCENTAGE_DESKTOP=0.75,GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP=0.95,GAME_AREA_WIDTH_PERCENTAGE_MOBILE=0x1,GAME_AREA_HEIGHT_PERCENTAGE_MOBILE=0x1,canvas=document[a8_0x2f5a0c(0x1d5)+'ById']('gameCanvas'),ctx=canvas[a8_0x2f5a0c(0x1e7)]('2d');let previousCanvasWidth=0x0,previousCanvasHeight=0x0,widthRatio=0x1,heightRatio=0x1,oldCanvasWidth=0x0,oldCanvasHeight=0x0,canvasDiagonal=0x0,isTouching=![],touchX=0x0,lastTapTime=0x0,isMobile=isMobileUserAgent(),mouseX=0x0,mouseY=0x0,isCursorShown=!![],rightPressed=![],leftPressed=!![];function handleTouchStart(_0x2c881b){const _0x3f4d6c=a8_0x2f5a0c;if(gameState===_0x3f4d6c(0x1ba)&&!isPaused){_0x2c881b[_0x3f4d6c(0x211)+_0x3f4d6c(0x209)]();const _0x523fae=Date['now'](),_0x2f5c66=_0x523fae-lastTapTime;if(_0x2f5c66<0x12c&&_0x2f5c66>0x0)togglePause(),isTouching=![];else{isTouching=!![],isPaused=![];if(isThereStuckBall())releaseStuckBalls();handleTouchMove(_0x2c881b);}lastTapTime=_0x523fae;}}function handleTouchMove(_0x471ffb){const _0xcfe404=a8_0x2f5a0c;if(!isTouching)return;const _0x110d34=_0x471ffb[_0xcfe404(0x1e8)][0x0];touchX=_0x110d34[_0xcfe404(0x1bd)];const _0x56f20a=canvas[_0xcfe404(0x1e4)+_0xcfe404(0x1c0)+'t'](),_0x2ea59d=(touchX-_0x56f20a[_0xcfe404(0x202)])/(_0x56f20a[_0xcfe404(0x1dc)]/canvas[_0xcfe404(0x1dc)]);paddle['x']=_0x2ea59d-paddle[_0xcfe404(0x1dc)]/0x2;}function handleTouchEnd(_0x4c4ce0){isTouching=![];}function a8_0x469f(_0x25188d,_0x53662c){const _0x74d9bf=a8_0x2814();return a8_0x469f=function(_0x470474,_0x150d78){_0x470474=_0x470474-0x1ba;let _0x2814df=_0x74d9bf[_0x470474];if(a8_0x469f['ObMtpQ']===undefined){var _0x469fbc=function(_0x36b86b){const _0x9d3486='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x47d54a='',_0x2c881b='',_0x523fae=_0x47d54a+_0x469fbc;for(let _0x2f5c66=0x0,_0x471ffb,_0x110d34,_0x56f20a=0x0;_0x110d34=_0x36b86b['charAt'](_0x56f20a++);~_0x110d34&&(_0x471ffb=_0x2f5c66%0x4?_0x471ffb*0x40+_0x110d34:_0x110d34,_0x2f5c66++%0x4)?_0x47d54a+=_0x523fae['charCodeAt'](_0x56f20a+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x471ffb>>(-0x2*_0x2f5c66&0x6)):_0x2f5c66:0x0){_0x110d34=_0x9d3486['indexOf'](_0x110d34);}for(let _0x2ea59d=0x0,_0x4c4ce0=_0x47d54a['length'];_0x2ea59d<_0x4c4ce0;_0x2ea59d++){_0x2c881b+='%'+('00'+_0x47d54a['charCodeAt'](_0x2ea59d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2c881b);};a8_0x469f['uUHOxk']=_0x469fbc,_0x25188d=arguments,a8_0x469f['ObMtpQ']=!![];}const _0x45522b=_0x74d9bf[0x0],_0x28108c=_0x470474+_0x45522b,_0x3d53c2=_0x25188d[_0x28108c];if(!_0x3d53c2){const _0x3fa0a3=function(_0x503f87){this['AOWyUD']=_0x503f87,this['GNRHgs']=[0x1,0x0,0x0],this['dpoetJ']=function(){return'newState';},this['UAIVxo']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['XCRDuB']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3fa0a3['prototype']['kszgFc']=function(){const _0x17d70f=new RegExp(this['UAIVxo']+this['XCRDuB']),_0x32a70c=_0x17d70f['test'](this['dpoetJ']['toString']())?--this['GNRHgs'][0x1]:--this['GNRHgs'][0x0];return this['SyjfJC'](_0x32a70c);},_0x3fa0a3['prototype']['SyjfJC']=function(_0x4d2644){if(!Boolean(~_0x4d2644))return _0x4d2644;return this['RCawYP'](this['AOWyUD']);},_0x3fa0a3['prototype']['RCawYP']=function(_0x416c98){for(let _0x30894d=0x0,_0x3a3e78=this['GNRHgs']['length'];_0x30894d<_0x3a3e78;_0x30894d++){this['GNRHgs']['push'](Math['round'](Math['random']())),_0x3a3e78=this['GNRHgs']['length'];}return _0x416c98(this['GNRHgs'][0x0]);},new _0x3fa0a3(a8_0x469f)['kszgFc'](),_0x2814df=a8_0x469f['uUHOxk'](_0x2814df),_0x25188d[_0x28108c]=_0x2814df;}else _0x2814df=_0x3d53c2;return _0x2814df;},a8_0x469f(_0x25188d,_0x53662c);}function vibrate(_0x3fa0a3){const _0x1dd0ba=a8_0x2f5a0c;try{navigator[_0x1dd0ba(0x1e5)]&&navigator[_0x1dd0ba(0x1e5)](_0x3fa0a3);}finally{return;}}function toggleEsc(_0x503f87){const _0x40a7fa=a8_0x2f5a0c;gameState===_0x40a7fa(0x1ba)&&(_0x503f87[_0x40a7fa(0x211)+'ault'](),togglePause());}function addAllListeners(){const _0x1a20a5=a8_0x2f5a0c;window[_0x1a20a5(0x1db)+_0x1a20a5(0x1d1)](_0x1a20a5(0x214),resizeCanvas),window[_0x1a20a5(0x1db)+'stener'](_0x1a20a5(0x20f),onWindowBlur),window[_0x1a20a5(0x1db)+_0x1a20a5(0x1d1)](_0x1a20a5(0x1ff),onWindowFocus),addMouseEventsListeners(),addTouchEventsListeners(),addKeyboardEventsListeners();}function keyDownHandler(_0x17d70f){const _0x4722b9=a8_0x2f5a0c;switch(_0x17d70f['key']){case _0x4722b9(0x1ea):paddle['dx']=paddle['speed'],rightPressed=!![];break;case _0x4722b9(0x1c9):paddle['dx']=-paddle[_0x4722b9(0x1c3)],leftPressed=!![];break;case'\x20':case'Space':isThereStuckBall()?releaseStuckBalls():togglePause();break;case'Escape':togglePause();break;case'F':case'f':showFPS=!showFPS,saveProgress();break;default:break;}}function keyUpHandler(_0x32a70c){const _0x5af048=a8_0x2f5a0c;switch(_0x32a70c[_0x5af048(0x20c)]){case'ArrowRight':if(paddle['dx']>0x0)paddle['dx']=0x0;rightPressed=![];break;case _0x5af048(0x1c9):if(paddle['dx']<0x0)paddle['dx']=0x0;leftPressed=![];break;default:break;}}function isThereStuckBall(){const _0x2b1781=a8_0x2f5a0c;if(!balls)return![];for(let _0x4d2644 of balls){if(_0x4d2644[_0x2b1781(0x1ec)])return!![];}return![];}function addKeyboardEventsListeners(){const _0x1fe40b=a8_0x2f5a0c;document[_0x1fe40b(0x1db)+_0x1fe40b(0x1d1)](_0x1fe40b(0x1c8),keyDownHandler),document[_0x1fe40b(0x1db)+_0x1fe40b(0x1d1)](_0x1fe40b(0x207),keyUpHandler);}function addTouchEventsListeners(){const _0x5f0894=a8_0x2f5a0c;canvas['addEventLi'+_0x5f0894(0x1d1)](_0x5f0894(0x218),handleTouchStart,![]),canvas[_0x5f0894(0x1db)+'stener'](_0x5f0894(0x1ca),handleTouchMove,![]),canvas[_0x5f0894(0x1db)+'stener']('touchend',handleTouchEnd,![]),canvas[_0x5f0894(0x1db)+_0x5f0894(0x1d1)](_0x5f0894(0x1fd)+'l',handleTouchEnd,![]);}function addMouseEventsListeners(){const _0x257ce1=a8_0x2f5a0c;document[_0x257ce1(0x1db)+_0x257ce1(0x1d1)](_0x257ce1(0x203)+_0x257ce1(0x212),onPointerLockChange,![]),document['addEventLi'+_0x257ce1(0x1d1)](_0x257ce1(0x206)+_0x257ce1(0x20e),onPointerLockChange,![]),document[_0x257ce1(0x1db)+_0x257ce1(0x1d1)](_0x257ce1(0x1e6)+_0x257ce1(0x1d7)+_0x257ce1(0x1f1),onPointerLockChange,![]),document[_0x257ce1(0x1db)+_0x257ce1(0x1d1)](_0x257ce1(0x1fa),onMouseMove),canvas[_0x257ce1(0x1db)+_0x257ce1(0x1d1)](_0x257ce1(0x1d2),handleClick);}function handleClick(_0x416c98){const _0x2b35e6=a8_0x2f5a0c;let _0x30894d=canvas[_0x2b35e6(0x1e4)+'gClientRec'+'t'](),_0x3a3e78=_0x416c98[_0x2b35e6(0x1bd)]-_0x30894d['left'],_0x5baf79=_0x416c98[_0x2b35e6(0x213)]-_0x30894d[_0x2b35e6(0x1dd)];switch(gameState){case _0x2b35e6(0x1eb):for(let _0x304798 of difficultyButtons){if(_0x3a3e78>=_0x304798['x']&&_0x3a3e78<=_0x304798['x']+_0x304798[_0x2b35e6(0x1dc)]&&_0x5baf79>=_0x304798['y']&&_0x5baf79<=_0x304798['y']+_0x304798[_0x2b35e6(0x1e2)]){selectedDifficulty=_0x304798[_0x2b35e6(0x1c2)],saveProgress();return;}}for(let _0x8b9b5c of menuButtons){if(_0x3a3e78>=_0x8b9b5c['x']&&_0x3a3e78<=_0x8b9b5c['x']+_0x8b9b5c[_0x2b35e6(0x1dc)]&&_0x5baf79>=_0x8b9b5c['y']&&_0x5baf79<=_0x8b9b5c['y']+_0x8b9b5c[_0x2b35e6(0x1e2)]){_0x8b9b5c[_0x2b35e6(0x1fc)]();return;}}break;case _0x2b35e6(0x1d8)+_0x2b35e6(0x1cc):for(let _0xc4bf4e of levelButtons){if(_0x3a3e78>=_0xc4bf4e['x']&&_0x3a3e78<=_0xc4bf4e['x']+_0xc4bf4e[_0x2b35e6(0x1dc)]&&_0x5baf79>=_0xc4bf4e['y']&&_0x5baf79<=_0xc4bf4e['y']+_0xc4bf4e[_0x2b35e6(0x1e2)]){_0xc4bf4e[_0x2b35e6(0x1fc)]();return;}}break;case _0x2b35e6(0x1f7):if(_0x3a3e78>=creditsBackButton['x']&&_0x3a3e78<=creditsBackButton['x']+creditsBackButton[_0x2b35e6(0x1dc)]&&_0x5baf79>=creditsBackButton['y']&&_0x5baf79<=creditsBackButton['y']+creditsBackButton[_0x2b35e6(0x1e2)]){creditsBackButton['action']();return;}break;case'playing':if(isPaused){let _0x629f4f=![];for(let _0x12456c of pauseMenuButtons){if(_0x3a3e78>=_0x12456c['x']&&_0x3a3e78<=_0x12456c['x']+_0x12456c[_0x2b35e6(0x1dc)]&&_0x5baf79>=_0x12456c['y']&&_0x5baf79<=_0x12456c['y']+_0x12456c[_0x2b35e6(0x1e2)]){_0x12456c[_0x2b35e6(0x20d)](),_0x629f4f=!![];break;}}!_0x629f4f&&resumeGame();}else isThereStuckBall()?releaseStuckBalls():togglePause();break;case _0x2b35e6(0x1df):for(let _0x27bf60 of gameOverButtons){if(_0x3a3e78>=_0x27bf60['x']&&_0x3a3e78<=_0x27bf60['x']+_0x27bf60['width']&&_0x5baf79>=_0x27bf60['y']&&_0x5baf79<=_0x27bf60['y']+_0x27bf60[_0x2b35e6(0x1e2)]){_0x27bf60[_0x2b35e6(0x1fc)]();return;}}break;case'gameComple'+_0x2b35e6(0x1ee):for(let _0x38b185 of gameCompletedButtons){if(_0x3a3e78>=_0x38b185['x']&&_0x3a3e78<=_0x38b185['x']+_0x38b185[_0x2b35e6(0x1dc)]&&_0x5baf79>=_0x38b185['y']&&_0x5baf79<=_0x38b185['y']+_0x38b185[_0x2b35e6(0x1e2)]){_0x38b185['action']();return;}}break;case _0x2b35e6(0x1e9)+'ed':for(let _0x10cc63 of setButtons){if(_0x3a3e78>=_0x10cc63['x']&&_0x3a3e78<=_0x10cc63['x']+_0x10cc63[_0x2b35e6(0x1dc)]&&_0x5baf79>=_0x10cc63['y']&&_0x5baf79<=_0x10cc63['y']+_0x10cc63[_0x2b35e6(0x1e2)]){_0x10cc63['action']();return;}}break;default:break;}}function onMouseMove(_0x393663){const _0x2aab08=a8_0x2f5a0c;let _0x583d2e=canvas[_0x2aab08(0x1e4)+_0x2aab08(0x1c0)+'t']();mouseX=_0x393663[_0x2aab08(0x1bd)]-_0x583d2e[_0x2aab08(0x202)],mouseY=_0x393663[_0x2aab08(0x213)]-_0x583d2e[_0x2aab08(0x1dd)];if(gameState==='playing'&&!isPaused&&paddle){if(!isCursorShown){let _0x36518a=_0x393663[_0x2aab08(0x217)]||_0x393663['mozMovemen'+'tX']||_0x393663[_0x2aab08(0x1d3)+'mentX']||0x0;paddle['x']+=_0x36518a;}else paddle['x']=mouseX-paddle[_0x2aab08(0x1dc)]/0x2;}}function isMobileUserAgent(){const _0x27126d=a8_0x2f5a0c,_0x4edbe9=(function(){let _0x1d1f2c=!![];return function(_0x23f1ec,_0x26b1cf){const _0x187b57=_0x1d1f2c?function(){if(_0x26b1cf){const _0x10d1be=_0x26b1cf['apply'](_0x23f1ec,arguments);return _0x26b1cf=null,_0x10d1be;}}:function(){};return _0x1d1f2c=![],_0x187b57;};}()),_0x1b5a91=_0x4edbe9(this,function(){const _0xe5eb7b=a8_0x469f;return _0x1b5a91[_0xe5eb7b(0x1bb)]()[_0xe5eb7b(0x1f3)](_0xe5eb7b(0x1c5)+'+$')[_0xe5eb7b(0x1bb)]()[_0xe5eb7b(0x204)+'r'](_0x1b5a91)[_0xe5eb7b(0x1f3)]('(((.+)+)+)'+'+$');});_0x1b5a91();if(navigator[_0x27126d(0x1e3)+_0x27126d(0x1be)]&&navigator[_0x27126d(0x1e3)+_0x27126d(0x1be)][_0x27126d(0x1e1)]!==undefined)return navigator[_0x27126d(0x1e3)+'ata']['mobile'];const _0xa69b94=navigator[_0x27126d(0x1d4)]||window[_0x27126d(0x1f4)],_0xed65c7=[/android/i,/webos/i,/iphone/i,/ipad/i,/ipod/i,/blackberry/i,/windows phone/i];return _0xed65c7[_0x27126d(0x201)](_0x57cb1c=>_0x57cb1c[_0x27126d(0x1cd)](_0xa69b94));}function resizeCanvas(_0x4dbb0e=![]){const _0x5152ae=a8_0x2f5a0c;let _0x32cd4e=window[_0x5152ae(0x208)],_0xcf3f52=window[_0x5152ae(0x1d0)+'t'],_0x551181=_0x32cd4e/_0xcf3f52;if(_0x551181>0x3/0x2)_0x32cd4e=_0xcf3f52*(0x3/0x2);else _0x551181<0x2/0x3&&(_0xcf3f52=_0x32cd4e*(0x3/0x2));isMobile?(canvas[_0x5152ae(0x1dc)]=_0x32cd4e*GAME_AREA_WIDTH_PERCENTAGE_MOBILE,canvas[_0x5152ae(0x1e2)]=_0xcf3f52*GAME_AREA_HEIGHT_PERCENTAGE_MOBILE,_0x551181>0x4/0x3&&(_0x32cd4e=_0xcf3f52*(0x4/0x3))):(canvas[_0x5152ae(0x1dc)]=_0x32cd4e*GAME_AREA_WIDTH_PERCENTAGE_DESKTOP,canvas['height']=_0xcf3f52*GAME_AREA_HEIGHT_PERCENTAGE_DESKTOP);canvasDiagonal=Math[_0x5152ae(0x1fe)](canvas[_0x5152ae(0x1dc)]**0x2+canvas[_0x5152ae(0x1e2)]**0x2);if(canvas[_0x5152ae(0x1dc)]!=oldCanvasWidth||canvas[_0x5152ae(0x1e2)]!=oldCanvasHeight||_0x4dbb0e)resizeAllElements();oldCanvasWidth=canvas['width'],oldCanvasHeight=canvas['height'];}function resizeAllElements(){const _0x1120b6=a8_0x2f5a0c;previousCanvasWidth=oldCanvasWidth||canvas['width'],previousCanvasHeight=oldCanvasHeight||canvas['height'],widthRatio=canvas[_0x1120b6(0x1dc)]/previousCanvasWidth,heightRatio=canvas['height']/previousCanvasHeight,paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight(),ballRadius=calcBallSize(),brickPadding=canvasDiagonal*0.006,brickHeight=canvas[_0x1120b6(0x1e2)]*0.05,brickWidth=(canvas[_0x1120b6(0x1dc)]-(0x1+0x1)*brickPadding)/0x1;brickColumnCount&&(brickWidth=(canvas[_0x1120b6(0x1dc)]-(brickColumnCount+0x1)*brickPadding)/brickColumnCount);if(paddle){activePaddlePowerup===POWERUP_TYPES[_0x1120b6(0x1c1)]&&(paddleWidth*=POWERUP_BIGPADDLE_MULTIPLIER);paddle[_0x1120b6(0x1dc)]=paddleWidth,paddle[_0x1120b6(0x1e2)]=paddleHeight,paddle['y']=calcPaddleY(paddleHeight),paddle['speed']=calcPaddleSpeed();if(paddle['x']<0x0)paddle['x']=0x0;else paddle['x']+paddle['width']>canvas[_0x1120b6(0x1dc)]&&(paddle['x']=canvas[_0x1120b6(0x1dc)]-paddle[_0x1120b6(0x1dc)]);}for(let _0x39cbd1 of balls){applyBallSizeToAllBalls(0x1),applyBallSpeedToAllBalls(),applyBallPowerupEffects(),_0x39cbd1['x']=_0x39cbd1['x']/previousCanvasWidth*canvas[_0x1120b6(0x1dc)],_0x39cbd1['y']=_0x39cbd1['y']/previousCanvasHeight*canvas[_0x1120b6(0x1e2)];}offsetTop=canvas['height']*0.1,offsetLeft=(canvas[_0x1120b6(0x1dc)]-0x1*(brickWidth+brickPadding))/0x2;if(bricks&&brickColumnCount&&brickRowCount){offsetLeft=(canvas[_0x1120b6(0x1dc)]-brickColumnCount*(brickWidth+brickPadding))/0x2;for(let _0x2dc658=0x0;_0x2dc658<brickRowCount;_0x2dc658++){for(let _0x5f5c6a=0x0;_0x5f5c6a<brickColumnCount;_0x5f5c6a++){let _0x5c6bf1=bricks[_0x2dc658][_0x5f5c6a];_0x5c6bf1&&(_0x5c6bf1[_0x1120b6(0x1dc)]=brickWidth,_0x5c6bf1[_0x1120b6(0x1e2)]=brickHeight,_0x5c6bf1['x']=_0x5f5c6a*(brickWidth+brickPadding)+offsetLeft,_0x5c6bf1['y']=_0x2dc658*(brickHeight+brickPadding)+offsetTop);}}}if(powerUps)for(let _0x28a617 of powerUps){_0x28a617[_0x1120b6(0x1dc)]=canvas[_0x1120b6(0x1dc)]*0.05,_0x28a617[_0x1120b6(0x1e2)]=canvas[_0x1120b6(0x1e2)]*0.02,_0x28a617['x']=_0x28a617['x']/previousCanvasWidth*canvas['width'],_0x28a617['y']=_0x28a617['y']/previousCanvasHeight*canvas['height'];}if(effectMessages)for(let _0x4cd49a of effectMessages){_0x4cd49a['x']=_0x4cd49a['x']/previousCanvasWidth*canvas['width'],_0x4cd49a['y']=_0x4cd49a['y']/previousCanvasHeight*canvas[_0x1120b6(0x1e2)];}resizeParticles(blockHitParticles),resizeParticles(fireParticles),resizeParticles(menuParticles),resizeParticles(introParticles),resizeParticles(sparkleParticles),createPatterns(),pauseMenuNeedsUpdate=!![],oldCanvasWidth=canvas[_0x1120b6(0x1dc)],oldCanvasHeight=canvas[_0x1120b6(0x1e2)];}function resizeParticles(_0x563717){const _0x9d7ef9=a8_0x2f5a0c;for(let _0x505def of _0x563717){_0x505def['x']=_0x505def['x']/previousCanvasWidth*canvas['width'],_0x505def['y']=_0x505def['y']/previousCanvasHeight*canvas[_0x9d7ef9(0x1e2)];if(_0x505def['dx'])_0x505def['dx']=_0x505def['dx']/previousCanvasWidth*canvas[_0x9d7ef9(0x1dc)];if(_0x505def['dy'])_0x505def['dy']=_0x505def['dy']/previousCanvasHeight*canvas[_0x9d7ef9(0x1e2)];if(_0x505def[_0x9d7ef9(0x1cf)])_0x505def[_0x9d7ef9(0x1cf)]*=Math[_0x9d7ef9(0x1fe)](widthRatio*heightRatio);}}function a8_0x2814(){const _0x5073e7=['CMvZAxPL','ug9PBNrLCKXVyW','zxHPDfbVAw50zq','Bw92zw1LBNry','Dg91y2HZDgfYDa','CgXHEwLUzW','Dg9tDhjPBMC','mJm2ote2Ce14De9l','y2XPzw50wa','yxrH','zxn0ug9PBNrLCG','z0nSAwvUDfjLyW','qKLhuefereXf','zgLMzMLJDwX0Eq','C3bLzwq','mtHotvPyyxy','kcGOlISPkYKRkq','CKXVy2S','ntG0mJKYqKD6s0PY','A2v5zg93BG','qxjYB3Dmzwz0','Dg91y2HTB3zL','tg9JAW','DgLVBG','DgvZDa','Bw96rxHPDfbVAq','C2L6zq','Aw5UzxjizwLNAa','C3rLBMvY','y2XPy2S','D2vIA2L0tw92zq','DxnLCKfNzw50','z2v0rwXLBwvUDa','ndmYmJK3y0vOqMnj','DgvYBg9JA2nOyq','Bgv2zwXtzwXLyW','ntq3nde0uuTRB2Lb','CMvXDwvZDfbVAq','ywrKrxzLBNrmAq','D2LKDgG','Dg9W','D2vIA2L0rxHPDa','z2fTzu92zxi','D2vIA2L0ug9PBG','Bw9IAwXL','AgvPz2H0','DxnLCKfNzw50ra','z2v0qM91BMrPBG','DMLICMf0zq','D2vIA2L0Cg9PBG','z2v0q29UDgv4Da','Dg91y2HLCW','C2v0q29TCgXLDa','qxjYB3DsAwDODa','C3rHCNrnzw51','AxntDhvJAW','D2vIA2L0uMvXDq','DgvK','mta4rwHbuKHK','mtiWodjPC3Lsy2O','BMDL','BNrLCKXVy2S','C2vHCMnO','B3bLCMe','mZa4mZa0nvvethPSzW','CMvTB3zL','y3jLzgL0CW','A0vSzw1LBNq','AgLKzs1JDxjZBW','Bw91C2vTB3zL','mZGXntK3nKvXvKrJqq','ywn0Aw9U','Dg91y2HJyw5Jzq','C3fYDa','zM9JDxm','y2XHC3nmAxn0','C29Tzq','BgvMDa','Cg9PBNrLCMXVyW','y29UC3rYDwn0BW','Bw96uMvXDwvZDa','Bw96Cg9PBNrLCG','A2v5Dxa','Aw5UzxjxAwr0Aa','yxvSDa','Cg9PBNrLCKXVyW','BwvUDa','A2v5','B25dBgLJAW','Bg9JA2nOyw5Nzq','yMX1CG','Bw96ug9PBNrLCG','ChjLDMvUDerLzG','A2nOyw5Nzq','y2XPzw50wq'];a8_0x2814=function(){return _0x5073e7;};return a8_0x2814();}function onWindowBlur(){const _0x4546b7=a8_0x2f5a0c;gameState===_0x4546b7(0x1ba)&&!isPaused&&togglePause();}function onWindowFocus(){updateCursorStyle();}function updateCursorStyle(){const _0x1ff979=a8_0x2f5a0c;try{if(gameState===_0x1ff979(0x1ba)&&!isPaused&&isCursorShown)canvas[_0x1ff979(0x200)]['add'](_0x1ff979(0x1f9)+'r'),isCursorShown=![],requestPointerLock();else(gameState!=_0x1ff979(0x1ba)||isPaused)&&!isCursorShown&&(canvas[_0x1ff979(0x200)][_0x1ff979(0x1f6)]('hide-curso'+'r'),isCursorShown=!![],exitPointerLock());}finally{return;}}function requestPointerLock(){const _0x3a5832=a8_0x2f5a0c;try{if(canvas[_0x3a5832(0x1da)+_0x3a5832(0x1f2)])canvas[_0x3a5832(0x1da)+_0x3a5832(0x1f2)]();else{if(canvas[_0x3a5832(0x205)+'PointerLoc'+'k'])canvas['mozRequest'+'PointerLoc'+'k']();else canvas[_0x3a5832(0x1ed)+_0x3a5832(0x1bf)+_0x3a5832(0x1cb)]&&canvas[_0x3a5832(0x1ed)+_0x3a5832(0x1bf)+_0x3a5832(0x1cb)]();}}finally{return;}}function exitPointerLock(){const _0x456d5c=a8_0x2f5a0c;try{if(document[_0x456d5c(0x216)+_0x456d5c(0x1c6)])document[_0x456d5c(0x216)+_0x456d5c(0x1c6)]();else{if(document['mozExitPoi'+_0x456d5c(0x1f2)])document[_0x456d5c(0x1ce)+_0x456d5c(0x1f2)]();else document[_0x456d5c(0x1de)+'PointerLoc'+'k']&&document[_0x456d5c(0x1de)+_0x456d5c(0x215)+'k']();}}finally{return;}}function onPointerLockChange(){const _0x3d344b=a8_0x2f5a0c,_0x5f0d0d=document[_0x3d344b(0x20a)+_0x3d344b(0x1f8)]===canvas||document[_0x3d344b(0x210)+'LockElemen'+'t']===canvas||document[_0x3d344b(0x1e0)+'terLockEle'+_0x3d344b(0x20b)]===canvas;!isCursorShown&&!_0x5f0d0d&&(gameState===_0x3d344b(0x1ba)&&!isPaused&&requestPointerLock());}