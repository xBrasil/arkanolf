const a0_0x467f79=a0_0x3dda;(function(_0x301f14,_0x3d5752){const _0x41fcf9=a0_0x3dda,_0x5af65c=_0x301f14();while(!![]){try{const _0x267d75=parseInt(_0x41fcf9(0x13e))/0x1+parseInt(_0x41fcf9(0x133))/0x2*(-parseInt(_0x41fcf9(0x138))/0x3)+parseInt(_0x41fcf9(0x15d))/0x4*(-parseInt(_0x41fcf9(0x11a))/0x5)+-parseInt(_0x41fcf9(0x116))/0x6*(parseInt(_0x41fcf9(0x115))/0x7)+-parseInt(_0x41fcf9(0x129))/0x8*(parseInt(_0x41fcf9(0x14f))/0x9)+parseInt(_0x41fcf9(0x14b))/0xa+parseInt(_0x41fcf9(0x141))/0xb;if(_0x267d75===_0x3d5752)break;else _0x5af65c['push'](_0x5af65c['shift']());}catch(_0x44ad87){_0x5af65c['push'](_0x5af65c['shift']());}}}(a0_0xc99a,0x562c5));const a0_0x40bb71=(function(){let _0x4a31b7=!![];return function(_0x386eff,_0x5aea9d){const _0x456bdc=_0x4a31b7?function(){const _0x21ef9d=a0_0x3dda;if(_0x5aea9d){const _0x1efeaf=_0x5aea9d[_0x21ef9d(0x144)](_0x386eff,arguments);return _0x5aea9d=null,_0x1efeaf;}}:function(){};return _0x4a31b7=![],_0x456bdc;};}()),a0_0x342616=a0_0x40bb71(this,function(){const _0x2a65e3=a0_0x3dda;return a0_0x342616[_0x2a65e3(0x143)]()[_0x2a65e3(0x148)](_0x2a65e3(0x145))['toString']()[_0x2a65e3(0x15f)](a0_0x342616)[_0x2a65e3(0x148)](_0x2a65e3(0x145));});a0_0x342616();const GAME_NAME=a0_0x467f79(0x13b),GAME_NAME_HUD=a0_0x467f79(0x14c),GAME_AUTHOR=a0_0x467f79(0x128),GAME_VERSION='0.6',GAME_BASE_HIT_POINTS=0xa,GAME_POWERUP_HIT_POINTS=0x32,GAME_LIFELOSS_POINTS_PENALTY=0x64,GAME_LEVELCOMPLETE_POINTS=0xc8,BASE_BALL_SPEED_RATIO=0.45,POWERUP_DURATION=0x14,FIREBALL_DURATION=0xf,PLASMABALL_DURATION=0xc,POWERUP_FASTBALL_MULTIPLIER=1.5,POWERUP_SLOWBALL_MULTIPLIER=0.75;let powerupBigPaddleMultiplier=0x1;const POWERUP_TYPES=[FIREBALL=0x0,MULTIBALL=0x1,BIGPADDLE=0x2,FASTBALL=0x3,EXTRALIFE=0x4,SLOWBALL=0x5,PLASMABALL=0x6];let activePowerupBalspeedModifier=0x1,activePowerUps={'fastball':0x0,'slowball':0x0,'fireball':0x0,'bigPaddle':0x0,'plasmaball':0x0},gameState=a0_0x467f79(0x131),isPaused=![],isInitialBall=!![],levelCompletionTime,gameCompletionTime,startButtons=[],setSelectionButtons=[],startGameButton=null,selectedDifficulty=a0_0x467f79(0x11d),selectedSet='A',mouseX=0x0,mouseY=0x0,rightPressed=![],leftPressed=!![];const levelCompletionDuration=0xbb8,gameCompletionDuration=0x1388;let introDuration=0xbb8,introStartTime=Date[a0_0x467f79(0x13d)](),eventListenersAdded=![],paddle,bricks,powerUps,balls=[],brickRowCount,brickColumnCount,score,lives,effects=[],setButtons=[],brickWidth,brickHeight,brickPadding,paddleWidth,paddleHeight,offsetTop,offsetLeft,backgroundColorA,backgroundColorB,lastFrameTime=Date[a0_0x467f79(0x13d)](),backgroundTime=0x0,menuBackgroundTime=0x0,levelCompletionElapsedTime=0x0,speedMultiplierDelta=0x0,speedMultiplier=0x0,speedMultiplierActual=0x1;function calcBallSpeed(){const _0x4cee9b=a0_0x467f79;return speedMultiplier=0x1+speedMultiplierDelta/0x3e8/difficultyConfig[_0x4cee9b(0x11e)]*difficultyConfig[_0x4cee9b(0x140)],speedMultiplierActual=Math[_0x4cee9b(0x15a)](difficultyConfig['speedMultiplier']*activePowerupBalspeedModifier*speedMultiplier,difficultyConfig[_0x4cee9b(0x13a)]),speedMultiplierActual*canvas[_0x4cee9b(0x127)]*BASE_BALL_SPEED_RATIO;}function calcBallSize(){const _0x472bd6=a0_0x467f79;return canvasDiagonal*0.012*difficultyConfig[_0x472bd6(0x155)];}function calcPaddleWidth(){const _0xe31e5e=a0_0x467f79;if(powerupBigPaddleMultiplier<0x1)powerupBigPaddleMultiplier=0x1;return canvas[_0xe31e5e(0x15c)]*0.2*difficultyConfig[_0xe31e5e(0x156)]*powerupBigPaddleMultiplier;}function a0_0x3dda(_0x34ab8a,_0xe9a179){const _0x36a0ef=a0_0xc99a();return a0_0x3dda=function(_0x342616,_0x40bb71){_0x342616=_0x342616-0x115;let _0xc99ad8=_0x36a0ef[_0x342616];return _0xc99ad8;},a0_0x3dda(_0x34ab8a,_0xe9a179);}function calcPaddleHeight(){const _0x880a52=a0_0x467f79;return canvas[_0x880a52(0x127)]*0.02*difficultyConfig[_0x880a52(0x156)];}function calcPaddleY(_0x533d89){const _0x142e34=a0_0x467f79;return canvas[_0x142e34(0x127)]-_0x533d89*0x3;}function calcPaddleSpeed(){const _0x1ae5f0=a0_0x467f79;return canvas[_0x1ae5f0(0x15c)]*0.75*difficultyConfig[_0x1ae5f0(0x15e)];}function initLevel(){const _0x36fae9=a0_0x467f79;paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight();paddle?paddle['x']=canvas[_0x36fae9(0x15c)]/0x2-paddleWidth/0x2:paddle={'x':canvas[_0x36fae9(0x15c)]/0x2-paddleWidth/0x2,'previousX':canvas[_0x36fae9(0x15c)]/0x2-paddleWidth/0x2,'y':calcPaddleY(paddleHeight),'previousY':calcPaddleY(paddleHeight),'width':paddleWidth,'height':paddleHeight,'dx':0x0,'speed':calcPaddleSpeed()};const _0x575c99=calcBallSpeed(),_0x192207=calcBallSize();balls=[{'x':canvas[_0x36fae9(0x15c)]/0x2,'y':paddle['y']-_0x192207,'radius':_0x192207,'speed':_0x575c99,'dx':_0x575c99*(Math[_0x36fae9(0x12b)]()*0x2-0x1),'dy':-_0x575c99,'isFireball':![],'isPlasmaball':![]}],particles=[],fireParticles=[],plasmaParticles=[],powerUps=[],effects=[];for(let _0x11d4dc in activePowerUps){activePowerUps[_0x36fae9(0x137)](_0x11d4dc)&&(activePowerUps[_0x11d4dc]=0x0);}activePowerupBalspeedModifier=0x1,powerupBigPaddleMultiplier=0x1,isInitialBall=!![];}function resetGame(){const _0x2c2c29=a0_0x467f79;!difficultyConfig&&(difficultyConfig=gameDifficulties[0x0]),lives=difficultyConfig[_0x2c2c29(0x121)],score=0x0,currentSetIndex=SET_NAMES[_0x2c2c29(0x14e)](selectedSet),currentLevelInSet=0x1;}function init(){const _0x337886=a0_0x467f79;resizeCanvas(!![]),ballRadius=calcBallSize(),initLevel(),actualLevel=currentSetIndex*LEVELS_PER_SET+currentLevelInSet,levelMap=levelMaps[actualLevel-0x1],brickRowCount=levelMap[_0x337886(0x11b)],brickColumnCount=levelMap[_0x337886(0x146)]((_0x595ad7,_0x42b284)=>Math[_0x337886(0x151)](_0x595ad7,_0x42b284['length']),0x0),bricks=[],brickWidth=(canvas['width']-(brickColumnCount+0x1)*brickPadding)/brickColumnCount,brickHeight=canvas[_0x337886(0x127)]*0.05;for(let _0x2adf20=0x0;_0x2adf20<brickRowCount;_0x2adf20++){bricks[_0x2adf20]=[];for(let _0x4a9b02=0x0;_0x4a9b02<brickColumnCount;_0x4a9b02++){let _0x2c634c=levelMap[_0x2adf20][_0x4a9b02]||'\x20',_0x550096=0x0,_0x3962b8=![],_0x17f400=![];switch(_0x2c634c){case'1':_0x550096=0x1;break;case'2':_0x550096=0x2;break;case'3':_0x550096=0x3;break;case'P':_0x550096=0x1,_0x3962b8=!![];break;case'U':_0x550096=-0x1,_0x17f400=!![];break;default:_0x550096=0x0;}_0x550096!==0x0?bricks[_0x2adf20][_0x4a9b02]={'x':0x0,'y':0x0,'width':brickWidth,'height':brickHeight,'status':_0x550096,'hasPowerUp':_0x3962b8,'unbreakable':_0x17f400}:bricks[_0x2adf20][_0x4a9b02]=null;}}speedMultiplier=0x1,speedMultiplierActual=0x1,speedMultiplierDelta=0x0,backgroundTime=0x0,gameState=_0x337886(0x14a),resizeCanvas(!![]);}function gameLoop(){const _0x846574=a0_0x467f79,_0x1ed281=Date[_0x846574(0x13d)]();let _0x1f1c5b=(_0x1ed281-lastFrameTime)/0x3e8;lastFrameTime=_0x1ed281,requestAnimationFrame(gameLoop);switch(gameState){case _0x846574(0x131):drawIntro(_0x1f1c5b);if(Date['now']()-introStartTime>=introDuration)gameState=_0x846574(0x154);break;case'startMenu':!eventListenersAdded&&(document['addEventListener'](_0x846574(0x12c),keyDownHandler),document[_0x846574(0x117)](_0x846574(0x157),keyUpHandler),document[_0x846574(0x117)](_0x846574(0x12c),function(_0x3da533){const _0x47615a=_0x846574;_0x3da533[_0x47615a(0x13f)]===_0x47615a(0x11c)&&(isInitialBall?isInitialBall=![]:togglePause());}),addMouseEventsListeners(),addTouchEventsListerners(),eventListenersAdded=!![]);drawStartMenu(_0x1f1c5b);break;case _0x846574(0x14a):updateGamePlaying(_0x1f1c5b),renderGamePlaying(_0x1f1c5b);break;case _0x846574(0x134):drawLevelCompletion(_0x1f1c5b);Date[_0x846574(0x13d)]()-levelCompletionTime>=levelCompletionDuration&&(currentLevelInSet===LEVELS_PER_SET?currentSetIndex<TOTAL_SETS-0x1?(gameState='setCompleted',setCompletionTime=Date['now']()):(gameState=_0x846574(0x11f),gameCompletionTime=Date[_0x846574(0x13d)]()):(currentLevelInSet++,init()));break;case _0x846574(0x152):drawSetCompletion(_0x1f1c5b);break;case _0x846574(0x11f):drawGameCompletion(_0x1f1c5b);Date[_0x846574(0x13d)]()-gameCompletionTime>=gameCompletionDuration&&(gameState=_0x846574(0x131),introStartTime=Date[_0x846574(0x13d)]());break;case _0x846574(0x122):drawGameOverScreen(_0x1f1c5b);break;}}function updateGamePlaying(_0xb10441){if(isPaused)return;movePaddle(_0xb10441);if(!isInitialBall){updatePowerUpEffects(_0xb10441);if(!moveBalls(_0xb10441))return;ballCollisionDetection(),collisionDetection(),movePowerUps(_0xb10441);}updateParticles(_0xb10441),updateEffects(_0xb10441);}function renderGamePlaying(_0x3c1d7c){const _0x54da01=a0_0x467f79;drawPulsatingBackground(_0x3c1d7c),drawBricks(),drawPaddle(),drawFireParticles(),drawPlasmaParticles(),drawBalls(),drawParticles(),drawPowerUps(),drawHUD(),drawEffects();if(isPaused&&gameState===_0x54da01(0x14a))drawPauseScreen();}function checkWin(){const _0x4823f5=a0_0x467f79;for(let _0x3e1d2f=0x0;_0x3e1d2f<brickRowCount;_0x3e1d2f++){for(let _0x443eda=0x0;_0x443eda<brickColumnCount;_0x443eda++){let _0x447762=bricks[_0x3e1d2f][_0x443eda];if(_0x447762&&_0x447762[_0x4823f5(0x147)]>0x0&&!_0x447762[_0x4823f5(0x130)])return![];}}return!![];}function doLevelCompleted(){const _0x3e8445=a0_0x467f79;gameState=_0x3e8445(0x134),addScore(GAME_LEVELCOMPLETE_POINTS*difficultyConfig[_0x3e8445(0x15b)]),levelCompletionTime=Date[_0x3e8445(0x13d)](),levelCompletionElapsedTime=0x0;}function positionInitialBall(){const _0xed276d=a0_0x467f79;if(gameState!==_0xed276d(0x14a))return;if(!isInitialBall)return;if(isPaused)return;if(!balls||!balls[0x0]||!paddle)return;balls[0x0]['x']=paddle['x']+paddle[_0xed276d(0x15c)]/0x2,balls[0x0]['y']=paddle['y']-balls[0x0][_0xed276d(0x120)];}function generatePowerUp(_0x4b0e4f,_0x463beb){const _0x354ad2=a0_0x467f79;let _0xb8d901=POWERUP_TYPES[Math['floor'](Math[_0x354ad2(0x12b)]()*POWERUP_TYPES[_0x354ad2(0x11b)])];const _0x2fc0c7=canvas[_0x354ad2(0x15c)]*0.06,_0xd76c61=canvas[_0x354ad2(0x127)]*0.02;powerUps['push']({'x':_0x4b0e4f,'y':_0x463beb,'width':_0x2fc0c7,'height':_0xd76c61,'type':_0xb8d901,'active':!![],'previousX':_0x4b0e4f,'previousY':_0x463beb});}function activatePowerUp(_0x135693){const _0x4f6f25=a0_0x467f79;let _0x5481cb='';switch(_0x135693){case POWERUP_TYPES[FIREBALL]:_0x5481cb=_0x4f6f25(0x126),activePowerUps[_0x4f6f25(0x14d)]=0x0,activePowerUps[_0x4f6f25(0x158)]=0x0,activePowerUps[_0x4f6f25(0x136)]=FIREBALL_DURATION;for(let _0x17aaed of balls){_0x17aaed[_0x4f6f25(0x125)]=!![];}break;case POWERUP_TYPES[PLASMABALL]:_0x5481cb=_0x4f6f25(0x160),activePowerUps['fastball']=0x0,activePowerUps['slowball']=0x0,activePowerUps[_0x4f6f25(0x123)]=PLASMABALL_DURATION;for(let _0x5e0200 of balls){_0x5e0200[_0x4f6f25(0x132)]=!![];}break;case POWERUP_TYPES[MULTIBALL]:_0x5481cb=_0x4f6f25(0x12e),createMultipleBalls();break;case POWERUP_TYPES[BIGPADDLE]:_0x5481cb=_0x4f6f25(0x153);activePowerUps[_0x4f6f25(0x159)]<=0x0&&(powerupBigPaddleMultiplier*=0x2);activePowerUps[_0x4f6f25(0x159)]+=POWERUP_DURATION;break;case POWERUP_TYPES[SLOWBALL]:if(activePowerUps['fireball']>0x0||activePowerUps[_0x4f6f25(0x123)]>0x0)return;_0x5481cb=_0x4f6f25(0x124),activePowerUps[_0x4f6f25(0x14d)]=0x0,activePowerUps[_0x4f6f25(0x158)]+=POWERUP_DURATION;break;case POWERUP_TYPES[EXTRALIFE]:_0x5481cb='Extra\x20Life',lives++;break;case POWERUP_TYPES[FASTBALL]:if(activePowerUps['fireball']>0x0||activePowerUps[_0x4f6f25(0x123)]>0x0)return;_0x5481cb='Fast\x20Ball',activePowerUps[_0x4f6f25(0x158)]=0x0,activePowerUps[_0x4f6f25(0x14d)]+=POWERUP_DURATION;break;default:_0x5481cb=_0x4f6f25(0x118)+_0x135693+_0x4f6f25(0x142);break;}createEffectMessage(paddle['x']+paddle['width']/0x2,paddle['y'],_0x5481cb);}function updatePowerUpEffects(_0x11137c){const _0x19a7c4=a0_0x467f79;let _0x31202a=0x1;activePowerUps[_0x19a7c4(0x14d)]>0x0&&(activePowerUps[_0x19a7c4(0x14d)]-=_0x11137c,activePowerUps[_0x19a7c4(0x14d)]<=0x0&&(activePowerUps[_0x19a7c4(0x14d)]=0x0),_0x31202a=POWERUP_FASTBALL_MULTIPLIER);activePowerUps[_0x19a7c4(0x158)]>0x0&&(activePowerUps['slowball']-=_0x11137c,_0x31202a=POWERUP_SLOWBALL_MULTIPLIER,activePowerUps[_0x19a7c4(0x158)]<=0x0&&(activePowerUps[_0x19a7c4(0x158)]=0x0));if(activePowerUps[_0x19a7c4(0x136)]>0x0){activePowerUps['fireball']-=_0x11137c;if(activePowerUps[_0x19a7c4(0x136)]<=0x0){activePowerUps[_0x19a7c4(0x136)]=0x0;for(let _0x1cdc1d of balls){_0x1cdc1d[_0x19a7c4(0x125)]=![];}}else _0x31202a=POWERUP_SLOWBALL_MULTIPLIER;}if(activePowerUps[_0x19a7c4(0x123)]>0x0){activePowerUps[_0x19a7c4(0x123)]-=_0x11137c;if(activePowerUps[_0x19a7c4(0x123)]<=0x0){activePowerUps[_0x19a7c4(0x123)]=0x0;for(let _0x45632d of balls){_0x45632d[_0x19a7c4(0x132)]=![];}}else _0x31202a=POWERUP_FASTBALL_MULTIPLIER;}activePowerUps[_0x19a7c4(0x159)]>0x0&&(activePowerUps[_0x19a7c4(0x159)]-=_0x11137c,activePowerUps[_0x19a7c4(0x159)]<=0x0&&(powerupBigPaddleMultiplier/=0x2,activePowerUps[_0x19a7c4(0x159)]=0x0)),activePowerupBalspeedModifier=_0x31202a,applyBallSpeedToAllBalls();}function applyBallSpeedToAllBalls(){const _0x3c0c72=a0_0x467f79;for(let _0x49cae9 of balls){const _0x3cd5c5=calcBallSpeed();_0x49cae9['speed']=_0x3cd5c5;const _0x3f3026=Math[_0x3c0c72(0x139)](_0x49cae9['dy'],_0x49cae9['dx']);_0x49cae9['dx']=_0x3cd5c5*Math[_0x3c0c72(0x119)](_0x3f3026),_0x49cae9['dy']=_0x3cd5c5*Math[_0x3c0c72(0x12f)](_0x3f3026);}}function a0_0xc99a(){const _0x4e5c89=['7914AosnPu','levelCompleted','push','fireball','hasOwnProperty','111BruBNz','atan2','speedIncreaseMax','Arkanolf.com','floor','now','552291AkmbyU','code','speedIncreaseRate','10270238EKGCcX','\x20unknown','toString','apply','(((.+)+)+)+$','reduce','status','search','round','playing','218670jqLRqR','Arkanolf','fastball','indexOf','18LwaZCk','difficultyName','max','setCompleted','BIG\x20Paddle','startMenu','ballSizeMultiplier','padSizeMultiplier','keyup','slowball','bigPaddle','min','scoreMultiplier','width','108kQmMGO','speedMultiplier','constructor','Plasmaball','3233083ShLRTW','6oYIOlG','addEventListener','ERROR:\x20type\x20','cos','84965zTdRbn','length','Space','Normal','speedIncreaseInterval','gameCompleted','radius','initialLives','gameOver','plasmaball','Slow\x20Ball','isFireball','Fireball','height','Rodolfo\x20Motta\x20Saraiva','351048Ntbxnq','resize','random','keydown','speed','Multi\x20Ball','sin','unbreakable','intro','isPlasmaball'];a0_0xc99a=function(){return _0x4e5c89;};return a0_0xc99a();}function createMultipleBalls(){const _0x4c578d=a0_0x467f79,_0x4a8251=Math[_0x4c578d(0x13c)](Math[_0x4c578d(0x12b)]()*0x3)+0x1,_0x4b4b22=balls[0x0][_0x4c578d(0x12d)],_0x228628=balls[0x0]['radius'];for(let _0x3c2823=0x0;_0x3c2823<_0x4a8251;_0x3c2823++){const _0x1e0946=-Math['PI']/0x2+Math[_0x4c578d(0x12b)]()*Math['PI']/0x4-Math['PI']/0x8;balls[_0x4c578d(0x135)]({'x':paddle['x']+paddle[_0x4c578d(0x15c)]/0x2,'y':paddle['y']-_0x228628,'radius':_0x228628,'speed':_0x4b4b22,'dx':_0x4b4b22*Math[_0x4c578d(0x119)](_0x1e0946),'dy':_0x4b4b22*Math['sin'](_0x1e0946),'isFireball':balls[0x0]['isFireball'],'isPlasmaball':balls[0x0][_0x4c578d(0x132)]});}}function togglePause(){const _0x2c22b3=a0_0x467f79;if(gameState===_0x2c22b3(0x14a)){isPaused=!isPaused;if(isPaused)drawPauseScreen();else{}}}function startGame(){const _0x138a09=a0_0x467f79;difficultyConfig=gameDifficulties['find'](_0x3cfa45=>_0x3cfa45[_0x138a09(0x150)]===selectedDifficulty),!difficultyConfig&&(difficultyConfig=gameDifficulties[0x1]),resetGame(),init(),gameState='playing';}function addScore(_0x38c392){const _0x36da77=a0_0x467f79;if(_0x38c392<=0x0){score+=_0x38c392;if(score<0x0)score=0x0;}else score+=_0x38c392*speedMultiplierActual;score=Math[_0x36da77(0x149)](score);}(async function initializeGame(){const _0xd10725=a0_0x467f79;await loadFonts(),resizeCanvas(!![]),window[_0xd10725(0x117)](_0xd10725(0x12a),resizeCanvas),createMenuParticles(),createIntroParticles(),gameLoop();}());