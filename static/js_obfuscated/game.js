const a0_0x3fab7b=a0_0x2e5c;(function(_0x20d467,_0x200069){const _0x4ac8da=a0_0x2e5c,_0x4a117d=_0x20d467();while(!![]){try{const _0x680ad8=-parseInt(_0x4ac8da(0x162))/0x1*(parseInt(_0x4ac8da(0x194))/0x2)+-parseInt(_0x4ac8da(0x17b))/0x3+parseInt(_0x4ac8da(0x196))/0x4*(parseInt(_0x4ac8da(0x186))/0x5)+-parseInt(_0x4ac8da(0x16f))/0x6+parseInt(_0x4ac8da(0x19d))/0x7+-parseInt(_0x4ac8da(0x165))/0x8+parseInt(_0x4ac8da(0x190))/0x9*(parseInt(_0x4ac8da(0x172))/0xa);if(_0x680ad8===_0x200069)break;else _0x4a117d['push'](_0x4a117d['shift']());}catch(_0x18cdc9){_0x4a117d['push'](_0x4a117d['shift']());}}}(a0_0x15a5,0xcbfe2));const a0_0x1bb4ba=(function(){let _0x43e258=!![];return function(_0x5205b8,_0x3fb4c8){const _0x2bae24=_0x43e258?function(){const _0x19e056=a0_0x2e5c;if(_0x3fb4c8){const _0x5683c9=_0x3fb4c8[_0x19e056(0x198)](_0x5205b8,arguments);return _0x3fb4c8=null,_0x5683c9;}}:function(){};return _0x43e258=![],_0x2bae24;};}()),a0_0x19bee7=a0_0x1bb4ba(this,function(){const _0x5f2002=a0_0x2e5c;return a0_0x19bee7[_0x5f2002(0x171)]()[_0x5f2002(0x16b)](_0x5f2002(0x160)+'+$')['toString']()[_0x5f2002(0x17a)+'r'](a0_0x19bee7)[_0x5f2002(0x16b)](_0x5f2002(0x160)+'+$');});a0_0x19bee7();const GAME_NAME='Arkanolf.c'+'om',GAME_NAME_HUD=a0_0x3fab7b(0x18a),GAME_AUTHOR=a0_0x3fab7b(0x18e)+a0_0x3fab7b(0x18c)+'a',GAME_VERSION=a0_0x3fab7b(0x17c),GAME_BASE_HIT_POINTS=0xa,GAME_POWERUP_HIT_POINTS=0x32,GAME_LIFELOSS_POINTS_PENALTY=0x64,GAME_LEVELCOMPLETE_POINTS=0xc8,GAME_OVER_EFFECT_DURATION=0x2,GAME_OVER_EFFECT_INITIAL_SHAKE_INTENSITY=0x3,VIBRATION_GAME_OVER=GAME_OVER_EFFECT_DURATION*0x3e8/0x2,VIBRATION_DESTROY_BRICK=0x14,VIBRATION_HIT_PADDLE=0x64,VIBRATE_LASER_SHOT=0xa,VIBRATE_BOMB_EXPLOSION=EXPLOSION_DURATION*0x3e8/0x2;let gameState=a0_0x3fab7b(0x19e),isPaused=![],levelCompletionTime,gameCompletionTime,selectedDifficulty;function a0_0x2e5c(_0x34e2d3,_0x428e49){const _0x209d21=a0_0x15a5();return a0_0x2e5c=function(_0x19bee7,_0x1bb4ba){_0x19bee7=_0x19bee7-0x160;let _0x15a55d=_0x209d21[_0x19bee7];if(a0_0x2e5c['Qpxute']===undefined){var _0x2e5c60=function(_0x53570c){const _0x687f2a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5efc61='',_0x43e258='',_0x5205b8=_0x5efc61+_0x2e5c60;for(let _0x3fb4c8=0x0,_0x2bae24,_0x5683c9,_0x46ec5e=0x0;_0x5683c9=_0x53570c['charAt'](_0x46ec5e++);~_0x5683c9&&(_0x2bae24=_0x3fb4c8%0x4?_0x2bae24*0x40+_0x5683c9:_0x5683c9,_0x3fb4c8++%0x4)?_0x5efc61+=_0x5205b8['charCodeAt'](_0x46ec5e+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x2bae24>>(-0x2*_0x3fb4c8&0x6)):_0x3fb4c8:0x0){_0x5683c9=_0x687f2a['indexOf'](_0x5683c9);}for(let _0x72759e=0x0,_0x31f0ff=_0x5efc61['length'];_0x72759e<_0x31f0ff;_0x72759e++){_0x43e258+='%'+('00'+_0x5efc61['charCodeAt'](_0x72759e)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x43e258);};a0_0x2e5c['JxheZM']=_0x2e5c60,_0x34e2d3=arguments,a0_0x2e5c['Qpxute']=!![];}const _0x3f493a=_0x209d21[0x0],_0x25d52a=_0x19bee7+_0x3f493a,_0x1a7b44=_0x34e2d3[_0x25d52a];if(!_0x1a7b44){const _0x46ebaa=function(_0x40c92f){this['xfoHVT']=_0x40c92f,this['uNdcsD']=[0x1,0x0,0x0],this['yEJRdI']=function(){return'newState';},this['pvuHcb']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['ThCCVS']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x46ebaa['prototype']['wuEmiz']=function(){const _0x747193=new RegExp(this['pvuHcb']+this['ThCCVS']),_0x35c631=_0x747193['test'](this['yEJRdI']['toString']())?--this['uNdcsD'][0x1]:--this['uNdcsD'][0x0];return this['zTbweq'](_0x35c631);},_0x46ebaa['prototype']['zTbweq']=function(_0x294497){if(!Boolean(~_0x294497))return _0x294497;return this['mDPsRl'](this['xfoHVT']);},_0x46ebaa['prototype']['mDPsRl']=function(_0x1ed62f){for(let _0x2cd30b=0x0,_0x536afe=this['uNdcsD']['length'];_0x2cd30b<_0x536afe;_0x2cd30b++){this['uNdcsD']['push'](Math['round'](Math['random']())),_0x536afe=this['uNdcsD']['length'];}return _0x1ed62f(this['uNdcsD'][0x0]);},new _0x46ebaa(a0_0x2e5c)['wuEmiz'](),_0x15a55d=a0_0x2e5c['JxheZM'](_0x15a55d),_0x34e2d3[_0x25d52a]=_0x15a55d;}else _0x15a55d=_0x1a7b44;return _0x15a55d;},a0_0x2e5c(_0x34e2d3,_0x428e49);}const levelCompletionDuration=0xbb8,gameCompletionDuration=0x1388;let introDuration=0x3,introElapsed=0x0,gameOverEffectElapsed=0x0,shakeIntensity=0x0,isGameOverTransition=![],paddle,bricks,balls=[],brickRowCount,brickColumnCount,score,lives,brickWidth,brickHeight,brickDiagonal,brickPadding,offsetTop,offsetLeft,paddleWidth,paddleHeight,lastFrameTime=Date[a0_0x3fab7b(0x197)](),speedMultiplierDelta=0x0,speedMultiplier=0x0,speedMultiplierActual=0x1,highestLevelCompleted={'Relax':0x0,'Normal':0x0,'Hard':0x0,'Insane':0x0},isRandomGame=![],shuffledLevels=[],currentLevel=0x1,actualLevel=0x1,levelMap,levelPalette;function gameLoop(){const _0x56063c=a0_0x3fab7b,_0x46ec5e=Date[_0x56063c(0x197)]();let _0x72759e=(_0x46ec5e-lastFrameTime)/0x3e8;lastFrameTime=_0x46ec5e,requestAnimationFrame(gameLoop),updateCursorStyle(),updateFPS(_0x72759e),clearCanvas();switch(gameState){case _0x56063c(0x19e):drawIntro(_0x72759e);break;case _0x56063c(0x170):drawStartMenu(_0x72759e);break;case'levelSelec'+_0x56063c(0x179):drawLevelSelectionMenu(_0x72759e);break;case _0x56063c(0x167):drawCreditsScreen(_0x72759e);break;case'playing':updateGamePlaying(_0x72759e),renderGamePlaying(_0x72759e);if(isGameOverTransition)drawGameOverTransition(_0x72759e);else{if(checkWin())doLevelCompleted();}break;case _0x56063c(0x173)+_0x56063c(0x19a):drawLevelCompletion(_0x72759e);break;case'gameComple'+'ted':drawGameCompletion(_0x72759e);break;case'gameOver':drawGameOverScreen(_0x72759e);break;default:console['warn']('Estado\x20de\x20'+_0x56063c(0x1a5)+_0x56063c(0x18d),gameState);break;}}function updateGamePlaying(_0x31f0ff){if(isPaused||isGameOverTransition)return;updatePowerUpEffects(_0x31f0ff),movePaddle(_0x31f0ff);if(!moveBalls(_0x31f0ff))return;ballCollisionDetection(),collisionDetection(),movePowerUps(_0x31f0ff),updateParticles(_0x31f0ff),updateEffects(_0x31f0ff);}function renderGamePlaying(_0x46ebaa){const _0x1f81d6=a0_0x3fab7b;drawLevelBackground(levelPalette[_0x1f81d6(0x18f)],_0x46ebaa,![]),drawBricks(_0x46ebaa),drawPaddle(),drawLaserShots(),drawFireParticles(),drawBalls(_0x46ebaa),drawBlockHitParticles(),drawPowerUps(_0x46ebaa),drawHUD(),drawEffects();if(isPaused&&gameState===_0x1f81d6(0x174))drawPauseScreen();}function checkWin(){const _0x5bf1a2=a0_0x3fab7b;if(explosionEffects&&explosionEffects[_0x5bf1a2(0x163)]>0x0)return![];for(let _0x40c92f=0x0;_0x40c92f<brickRowCount;_0x40c92f++){for(let _0x747193=0x0;_0x747193<brickColumnCount;_0x747193++){let _0x35c631=bricks[_0x40c92f][_0x747193];if(_0x35c631&&!_0x35c631[_0x5bf1a2(0x191)+'e']&&(_0x35c631[_0x5bf1a2(0x18b)]>0x0||_0x35c631[_0x5bf1a2(0x1a4)+'s']>0x0))return![];}}return!![];}function doGameOver(){isGameOverTransition=!![],gameOverEffectElapsed=0x0,shakeIntensity=GAME_OVER_EFFECT_INITIAL_SHAKE_INTENSITY*canvasDiagonal/0x320,isPaused=![],vibrate(VIBRATION_GAME_OVER),ctx['save']();}function doLevelCompleted(){const _0x30429f=a0_0x3fab7b;gameState=_0x30429f(0x173)+_0x30429f(0x19a),addScore(GAME_LEVELCOMPLETE_POINTS*difficultyConfig[_0x30429f(0x199)+_0x30429f(0x19f)]),levelCompletionTime=Date[_0x30429f(0x197)]();if(!isRandomGame){const _0x294497=difficultyConfig[_0x30429f(0x166)+_0x30429f(0x176)];currentLevel>highestLevelCompleted[_0x294497]&&(highestLevelCompleted[_0x294497]=currentLevel,saveProgress());}}function togglePause(){if(isGameOverTransition)return;if(gameState==='playing'){isPaused=!isPaused;if(isPaused)updatePauseMenuButtons();else{}}}function resumeGame(){isPaused=![];}function restartLevel(){isPaused=![],resetGame(currentLevel),init();}function backToMenu(){const _0x23128e=a0_0x3fab7b;isPaused=![],gameState=_0x23128e(0x170);}function startGame(_0x1ed62f,_0x2cd30b){const _0x5314e3=a0_0x3fab7b;difficultyConfig=gameDifficulties[_0x5314e3(0x181)](_0x536afe=>_0x536afe[_0x5314e3(0x166)+_0x5314e3(0x176)]===selectedDifficulty),!difficultyConfig&&(difficultyConfig=gameDifficulties[0x1]),resetGame(_0x1ed62f),isRandomGame=_0x2cd30b,init(),gameState=_0x5314e3(0x174);}function addScore(_0xdd1f6b){const _0x266801=a0_0x3fab7b;if(_0xdd1f6b<=0x0){score+=_0xdd1f6b;if(score<0x0)score=0x0;}else score+=_0xdd1f6b*speedMultiplierActual;score=Math[_0x266801(0x168)](score);}function saveProgress(){const _0x4d0dc6=a0_0x3fab7b;localStorage[_0x4d0dc6(0x187)](_0x4d0dc6(0x180)+'elComplete'+'d',JSON[_0x4d0dc6(0x1a0)](highestLevelCompleted)),localStorage[_0x4d0dc6(0x187)]('lastDiffic'+'ulty',selectedDifficulty),localStorage[_0x4d0dc6(0x187)](_0x4d0dc6(0x195),showFPS);}function loadProgress(){const _0xe0c767=a0_0x3fab7b,_0x33a3c3=localStorage[_0xe0c767(0x1a1)](_0xe0c767(0x180)+_0xe0c767(0x193)+'d');_0x33a3c3&&(highestLevelCompleted=JSON['parse'](_0x33a3c3));const _0x56e5f2=localStorage[_0xe0c767(0x1a1)](_0xe0c767(0x175)+_0xe0c767(0x185));_0x56e5f2?selectedDifficulty=_0x56e5f2:selectedDifficulty='Normal';const _0x1a0d97=localStorage[_0xe0c767(0x1a1)]('showFPS');_0x1a0d97!==null?showFPS=JSON[_0xe0c767(0x164)](_0x1a0d97):showFPS=![];}function startNewGame(){const _0x1cb963=a0_0x3fab7b,_0x328553=selectedDifficulty;highestLevelCompleted[_0x328553]===0x0?startGame(0x1,![]):gameState=_0x1cb963(0x17e)+_0x1cb963(0x179);}function continueGame(){const _0x48eac0=a0_0x3fab7b,_0x1e55b1=[_0x48eac0(0x17f),_0x48eac0(0x177),_0x48eac0(0x169),_0x48eac0(0x1a3)],_0x2a60fa=_0x1e55b1[_0x48eac0(0x19c)](selectedDifficulty),_0x998354=selectedDifficulty;if(highestLevelCompleted[_0x998354]>=levels[_0x48eac0(0x163)]){if(_0x2a60fa<_0x1e55b1[_0x48eac0(0x163)]-0x1)selectedDifficulty=_0x1e55b1[_0x2a60fa+0x1],difficultyConfig=gameDifficulties['find'](_0x5de460=>_0x5de460[_0x48eac0(0x166)+_0x48eac0(0x176)]===selectedDifficulty),startGame(0x1,![]);else return;}else startGame(highestLevelCompleted[_0x998354]+0x1,![]);}function startRandomGame(){const _0x37df72=a0_0x3fab7b,_0x4a73f5=Array['from']({'length':levels[_0x37df72(0x163)]},(_0x1c2647,_0x2e4e6d)=>_0x2e4e6d+0x1);shuffledLevels=shuffleArray(_0x4a73f5),startGame(0x1,!![]);}function showCredits(){const _0x59c81e=a0_0x3fab7b;gameState=_0x59c81e(0x167);}function initLevel(){const _0x4b3222=a0_0x3fab7b;paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight(),paddle?paddle['x']=canvas['width']/0x2-paddleWidth/0x2:paddle={'x':canvas[_0x4b3222(0x16c)]/0x2-paddleWidth/0x2,'previousX':canvas[_0x4b3222(0x16c)]/0x2-paddleWidth/0x2,'y':calcPaddleY(paddleHeight),'previousY':calcPaddleY(paddleHeight),'width':paddleWidth,'height':paddleHeight,'dx':0x0,'speed':calcPaddleSpeed()},clearGameParticles(),clearPowerUpEffects(),balls=[],createInitialBall();}function goToNextLevel(){const _0x593986=a0_0x3fab7b;isPaused=![],currentLevel++,isRandomGame?currentLevel>shuffledLevels[_0x593986(0x163)]?(isRandomGame=![],gameState=_0x593986(0x17d)+_0x593986(0x1a2)):(actualLevel=shuffledLevels[currentLevel-0x1],resetGame(currentLevel),init()):currentLevel>levels[_0x593986(0x163)]?gameState='gameComple'+_0x593986(0x1a2):(actualLevel=currentLevel,resetGame(currentLevel),init());}function a0_0x15a5(){const _0x9723ae=['BgfZDerPzMzPyW','tMfTzq','tM9YBwfS','ChvZAa','DgLVBG','y29UC3rYDwn0BW','ndq5ody1mhjmvKzptG','ms4XlJG','z2fTzunVBxbSzq','Bgv2zwXtzwXLyW','uMvSyxG','AgLNAgvZDeXLDG','zMLUza','Bwf4','C2XPy2u','CMvKDwnL','DwX0Eq','ntq3oda1ENjquuLk','C2v0sxrLBq','CMfKAxvZ','Bgv2zwXcCMLJAW','qxjRyw5VBgy','C3rHDhvZ','DhrHifnHCMfPDG','BMHLy2LKBZO','uM9KB2XMBYbnBW','yMfJA2DYB3vUza','nde1nta0ndrOyML5sfe','Dw5ICMvHA2fIBa','yNjPy2TdB2XVCG','zwXdB21WBgv0zq','otC3odCWsejfsKjY','C2HVD0zquW','ngr2rKz3qG','BM93','yxbWBhK','C2nVCMvnDwX0Aq','zxrLza','CMfUzg9T','Aw5KzxHpzG','nda3nJCWovL6sw9UqW','Aw50CM8','CgXPzxi','C3rYAw5NAwz5','z2v0sxrLBq','DgvK','sw5Zyw5L','C3rVBMvtDgf0Dq','AM9NBYbKzxnJBW','kcGOlISPkYKRkq','AgvPz2H0','m3vWCxLlBa','BgvUz3rO','CgfYC2u','mtaZnZC1mdrhrNrJAuu','zgLMzMLJDwX0Eq','y3jLzgL0CW','zMXVB3i','sgfYza','C3fYDa','C2vHCMnO','D2LKDgG','Bgv2zwXqywXLDa','Aw5PDgLHBeXPDG','mti1nZqWmNbirxngAq','C3rHCNrnzw51','Dg9tDhjPBMC','mtbHt2XyD0y','Bgv2zwXdB21WBa','CgXHEwLUzW'];a0_0x15a5=function(){return _0x9723ae;};return a0_0x15a5();}function createInitialBall(){const _0x3d0216=a0_0x3fab7b,_0x3a20ae=calcBallSize();let _0xb6b1db={'x':paddle['x']+paddle['width']/0x2,'y':paddle['y']-_0x3a20ae,'radius':_0x3a20ae,'speed':0x0,'dx':0x0,'dy':0x0,'isStuck':!![],'stuckRelativeX':0x0,'isInitialBall':!![]};resetBallSpeed(_0xb6b1db),balls[_0x3d0216(0x178)](_0xb6b1db);}function resetGame(_0x472b54){const _0x4e7a03=a0_0x3fab7b;if(!difficultyConfig)difficultyConfig=gameDifficulties[0x0];lives=difficultyConfig[_0x4e7a03(0x16e)+'es'],score=0x0,currentLevel=_0x472b54,isGameOverTransition=![];}function resetBall(){!hasActiveBallPowerUp()&&ballAbovePaddleHeight()&&(balls=[],createInitialBall(),isPaused=![]);}function hasActiveBallPowerUp(){return activeBallPowerup!==null;}function ballAbovePaddleHeight(){const _0x11ee83=a0_0x3fab7b;return balls['every'](_0x5dcd04=>_0x5dcd04['y']+_0x5dcd04[_0x11ee83(0x188)]<paddle['y']-paddle['height']*0x3&&_0x5dcd04['y']<canvas[_0x11ee83(0x161)]*0.8);}function shuffleArray(_0x1ab8d2){const _0x29560c=a0_0x3fab7b;let _0x524b15=_0x1ab8d2[_0x29560c(0x183)]();for(let _0x35080f=_0x524b15['length']-0x1;_0x35080f>0x0;_0x35080f--){const _0x12a2a2=Math[_0x29560c(0x168)](Math[_0x29560c(0x19b)]()*(_0x35080f+0x1));[_0x524b15[_0x35080f],_0x524b15[_0x12a2a2]]=[_0x524b15[_0x12a2a2],_0x524b15[_0x35080f]];}return _0x524b15;}function init(){const _0xd6e45d=a0_0x3fab7b;resizeCanvas(!![]),ballRadius=calcBallSize(),initLevel();isRandomGame?actualLevel=shuffledLevels[currentLevel-0x1]:actualLevel=currentLevel;levelMap=levels[actualLevel-0x1][_0xd6e45d(0x189)+'s'],levelPalette=levels[actualLevel-0x1][_0xd6e45d(0x16d)+'te'],brickRowCount=levelMap['length'],brickColumnCount=levelMap[_0xd6e45d(0x184)]((_0x808410,_0x4be9fc)=>Math[_0xd6e45d(0x182)](_0x808410,_0x4be9fc[_0xd6e45d(0x163)]),0x0),bricks=[],brickWidth=(canvas[_0xd6e45d(0x16c)]-(brickColumnCount+0x1)*brickPadding)/brickColumnCount,brickHeight=canvas[_0xd6e45d(0x161)]*0.05,brickDiagonal=Math[_0xd6e45d(0x16a)](brickWidth**0x2+brickHeight**0x2);for(let _0x39bc2f=0x0;_0x39bc2f<brickRowCount;_0x39bc2f++){bricks[_0x39bc2f]=[];for(let _0xbf1013=0x0;_0xbf1013<brickColumnCount;_0xbf1013++){let _0x1cb219=levelMap[_0x39bc2f][_0xbf1013]||'\x20',_0x193c8d=0x0,_0x51f7a4=![],_0x4f0a35=![];switch(_0x1cb219){case'1':_0x193c8d=0x1;break;case'2':_0x193c8d=0x2;break;case'3':_0x193c8d=0x3;break;case'P':_0x193c8d=0x1,_0x51f7a4=!![];break;case'U':_0x193c8d=-0x1,_0x4f0a35=!![];break;default:_0x193c8d=0x0;}if(_0x193c8d!==0x0){let _0x170fcd=levelPalette[_0xd6e45d(0x192)];typeof _0x170fcd==='object'&&!_0x4f0a35&&(_0x51f7a4?_0x170fcd=_0x170fcd[0x0]||_0x170fcd[0x1]:_0x170fcd=_0x170fcd[_0x193c8d]||_0x170fcd[0x1]),bricks[_0x39bc2f][_0xbf1013]={'x':0x0,'y':0x0,'width':brickWidth,'height':brickHeight,'status':_0x193c8d,'hasPowerUp':_0x51f7a4,'unbreakable':_0x4f0a35,'isFrozen':![],'stoneStatus':0x0,'color':_0x170fcd};}else bricks[_0x39bc2f][_0xbf1013]=null;}}speedMultiplier=0x1,speedMultiplierActual=0x1,speedMultiplierDelta=0x0,backgroundTime=0x0,gameState=_0xd6e45d(0x174),resizeCanvas(!![]);}(async function initializeGame(){await loadFonts(),resizeCanvas(!![]),addAllListeners(),createFixedParticles(),loadProgress(),await preloadTextures(),gameLoop();}());