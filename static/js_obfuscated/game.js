const a0_0x567e4e=a0_0x1957;(function(_0x511535,_0x5ae02b){const _0x5253b3=a0_0x1957,_0x28462c=_0x511535();while(!![]){try{const _0xdcd0df=-parseInt(_0x5253b3(0x20b))/0x1*(parseInt(_0x5253b3(0x1e0))/0x2)+parseInt(_0x5253b3(0x1e7))/0x3*(parseInt(_0x5253b3(0x21f))/0x4)+-parseInt(_0x5253b3(0x210))/0x5*(-parseInt(_0x5253b3(0x215))/0x6)+-parseInt(_0x5253b3(0x1f9))/0x7+-parseInt(_0x5253b3(0x1ef))/0x8+-parseInt(_0x5253b3(0x1e2))/0x9+parseInt(_0x5253b3(0x1fc))/0xa;if(_0xdcd0df===_0x5ae02b)break;else _0x28462c['push'](_0x28462c['shift']());}catch(_0x44332b){_0x28462c['push'](_0x28462c['shift']());}}}(a0_0x91dd,0x436e4));const a0_0x4b4cfa=(function(){let _0x503393=!![];return function(_0x33ecbb,_0x4fa28e){const _0x1385f7=_0x503393?function(){const _0x4fedfb=a0_0x1957;if(_0x4fa28e){const _0x45daff=_0x4fa28e[_0x4fedfb(0x1e3)](_0x33ecbb,arguments);return _0x4fa28e=null,_0x45daff;}}:function(){};return _0x503393=![],_0x1385f7;};}()),a0_0x22b2bb=a0_0x4b4cfa(this,function(){const _0x264c22=a0_0x1957;return a0_0x22b2bb[_0x264c22(0x1f7)]()['search'](_0x264c22(0x1dc))['toString']()[_0x264c22(0x1e6)](a0_0x22b2bb)[_0x264c22(0x1eb)](_0x264c22(0x1dc));});a0_0x22b2bb();const GAME_NAME=a0_0x567e4e(0x1df),GAME_NAME_HUD=a0_0x567e4e(0x1e4),GAME_AUTHOR=a0_0x567e4e(0x200),GAME_VERSION=a0_0x567e4e(0x1ee),GAME_BASE_HIT_POINTS=0xa,GAME_POWERUP_HIT_POINTS=0x32,GAME_LIFELOSS_POINTS_PENALTY=0x64,GAME_LEVELCOMPLETE_POINTS=0xc8,BASE_BALL_SPEED_RATIO=0.45,POWERUP_DURATION=0x14,FIREBALL_DURATION=0xf,PLASMABALL_DURATION=0xf,POWERUP_FASTBALL_MULTIPLIER=1.5,POWERUP_SLOWBALL_MULTIPLIER=0.75,POWERUP_BIGPADDLE_MULTIPLIER=0x2;let powerupBigPaddleMultiplier=0x1;const POWERUP_TYPES=[FIREBALL=0x0,MULTIBALL=0x1,BIGPADDLE=0x2,FASTBALL=0x3,EXTRALIFE=0x4,SLOWBALL=0x5,PLASMABALL=0x6];function a0_0x91dd(){const _0x552bab=['highestLevelCompleted','reduce','radius','scoreMultiplier','Fire\x20Ball','find','slowball','stringify','41884QANJml','playing','initialLives','random','BIG\x20Paddle','fastball','blur','levelCompleted','gameCompleted','(((.+)+)+)+$','Plasma\x20Ball','intro','Arkanolf.com','14ShELEa','width','4340448tIIxXp','apply','Arkanolf','Slow\x20Ball','constructor','57dpkFMY','Fast\x20Ball','length','getItem','search','height','floor','0.7.1','879264gpfjuN','Insane','gameOver','isPlasmaball','sin','Relax','hasOwnProperty','levelSelection','toString','isFireball','2592751ABfAov','credits','Hard','7046790sjVmjd','status','plasmaball','setItem','Rodolfo\x20Motta\x20Saraiva','Normal','fireball','focus','difficultyName','slice','cos','unbreakable','round','now','atan2','28621rUYjII','startMenu','addEventListener','showFPS','Multi\x20Ball','334680OvzUPt','bigPaddle','speed','max','resize','48TvPjxV','Extra\x20Life'];a0_0x91dd=function(){return _0x552bab;};return a0_0x91dd();}let activePowerupBalspeedModifier=0x1,activePowerUps={'fastball':0x0,'slowball':0x0,'fireball':0x0,'bigPaddle':0x0,'plasmaball':0x0},gameState=a0_0x567e4e(0x1de),isPaused=![],isInitialBall=!![],levelCompletionTime,gameCompletionTime,startButtons=[],startGameButton=null,selectedDifficulty,rightPressed=![],leftPressed=!![];const levelCompletionDuration=0xbb8,gameCompletionDuration=0x1388;let introDuration=0xbb8,introStartTime=Date[a0_0x567e4e(0x209)](),paddle,bricks,powerUps,balls=[],brickRowCount,brickColumnCount,score,lives,effects=[],brickWidth,brickHeight,brickPadding,paddleWidth,paddleHeight,offsetTop,offsetLeft,backgroundColorA,backgroundColorB,lastFrameTime=Date['now'](),backgroundTime=0x0,menuBackgroundTime=0x0,levelCompletionElapsedTime=0x0,speedMultiplierDelta=0x0,speedMultiplier=0x0,speedMultiplierActual=0x1,highestLevelCompleted={'Relax':0x0,'Normal':0x0,'Hard':0x0,'Insane':0x0},isRandomGame=![],shuffledLevels=[],currentLevel=0x1,actualLevel=0x1,levelMap,levelPalette;function saveProgress(){const _0x37b8a3=a0_0x567e4e;localStorage[_0x37b8a3(0x1ff)]('highestLevelCompleted',JSON[_0x37b8a3(0x21e)](highestLevelCompleted)),localStorage[_0x37b8a3(0x1ff)]('lastDifficulty',selectedDifficulty),localStorage[_0x37b8a3(0x1ff)](_0x37b8a3(0x20e),showFPS);}function loadProgress(){const _0xe4fce0=a0_0x567e4e,_0xe6a135=localStorage[_0xe4fce0(0x1ea)](_0xe4fce0(0x217));_0xe6a135&&(highestLevelCompleted=JSON['parse'](_0xe6a135));const _0x4c0b01=localStorage[_0xe4fce0(0x1ea)]('lastDifficulty');_0x4c0b01?selectedDifficulty=_0x4c0b01:selectedDifficulty=_0xe4fce0(0x201);const _0x484142=localStorage[_0xe4fce0(0x1ea)]('showFPS');_0x484142!==null?showFPS=JSON['parse'](_0x484142):showFPS=![];}function startNewGame(){const _0x25459f=a0_0x567e4e,_0x2cb020=selectedDifficulty;highestLevelCompleted[_0x2cb020]===0x0?startGame(0x1):gameState=_0x25459f(0x1f6);}function continueGame(){const _0x446504=a0_0x567e4e,_0x3fac1a=[_0x446504(0x1f4),_0x446504(0x201),_0x446504(0x1fb),_0x446504(0x1f0)],_0x19579a=_0x3fac1a['indexOf'](selectedDifficulty),_0x330792=selectedDifficulty;if(highestLevelCompleted[_0x330792]>=levelMaps[_0x446504(0x1e9)]){if(_0x19579a<_0x3fac1a[_0x446504(0x1e9)]-0x1)selectedDifficulty=_0x3fac1a[_0x19579a+0x1],difficultyConfig=gameDifficulties[_0x446504(0x21c)](_0x33f2a5=>_0x33f2a5[_0x446504(0x204)]===selectedDifficulty),startGame(0x1);else return;}else startGame(highestLevelCompleted[_0x330792]+0x1);}function startRandomGame(){const _0xa0dc2=a0_0x567e4e,_0x1e4f85=Array['from']({'length':levelMaps[_0xa0dc2(0x1e9)]},(_0x75aae8,_0x512e92)=>_0x512e92+0x1);shuffledLevels=shuffleArray(_0x1e4f85),isRandomGame=!![],startGame(0x1);}function showCredits(){const _0x5b21aa=a0_0x567e4e;gameState=_0x5b21aa(0x1fa);}function initLevel(){const _0x117fc5=a0_0x567e4e;paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight();paddle?paddle['x']=canvas[_0x117fc5(0x1e1)]/0x2-paddleWidth/0x2:paddle={'x':canvas['width']/0x2-paddleWidth/0x2,'previousX':canvas[_0x117fc5(0x1e1)]/0x2-paddleWidth/0x2,'y':calcPaddleY(paddleHeight),'previousY':calcPaddleY(paddleHeight),'width':paddleWidth,'height':paddleHeight,'dx':0x0,'speed':calcPaddleSpeed()};const _0x57520f=calcBallSpeed(),_0x578292=calcBallSize();balls=[{'x':canvas['width']/0x2,'y':paddle['y']-_0x578292,'radius':_0x578292,'speed':_0x57520f,'dx':_0x57520f*(Math[_0x117fc5(0x1d6)]()*0x2-0x1),'dy':-_0x57520f,'isFireball':![],'isPlasmaball':![]}],particles=[],fireParticles=[],powerUps=[],effects=[];for(let _0x9130f6 in activePowerUps){activePowerUps[_0x117fc5(0x1f5)](_0x9130f6)&&(activePowerUps[_0x9130f6]=0x0);}activePowerupBalspeedModifier=0x1,powerupBigPaddleMultiplier=0x1,isInitialBall=!![];}function resetGame(_0x3c73c8){const _0x2294d4=a0_0x567e4e;!difficultyConfig&&(difficultyConfig=gameDifficulties[0x0]),lives=difficultyConfig[_0x2294d4(0x221)],score=0x0,currentLevel=_0x3c73c8;}function shuffleArray(_0x47457f){const _0xd92ef2=a0_0x567e4e;let _0x19ae4e=_0x47457f[_0xd92ef2(0x205)]();for(let _0x11e1b6=_0x19ae4e['length']-0x1;_0x11e1b6>0x0;_0x11e1b6--){const _0x9ea5c7=Math[_0xd92ef2(0x1ed)](Math[_0xd92ef2(0x1d6)]()*(_0x11e1b6+0x1));[_0x19ae4e[_0x11e1b6],_0x19ae4e[_0x9ea5c7]]=[_0x19ae4e[_0x9ea5c7],_0x19ae4e[_0x11e1b6]];}return _0x19ae4e;}function init(){const _0x74aa1=a0_0x567e4e;resizeCanvas(!![]),ballRadius=calcBallSize(),initLevel();isRandomGame?actualLevel=shuffledLevels[currentLevel-0x1]:actualLevel=currentLevel;levelMap=levelMaps[actualLevel-0x1],levelPalette=levelPalettes[actualLevel-0x1],brickRowCount=levelMap[_0x74aa1(0x1e9)],brickColumnCount=levelMap[_0x74aa1(0x218)]((_0x19a3e2,_0x1e1f1d)=>Math[_0x74aa1(0x213)](_0x19a3e2,_0x1e1f1d[_0x74aa1(0x1e9)]),0x0),bricks=[],brickWidth=(canvas[_0x74aa1(0x1e1)]-(brickColumnCount+0x1)*brickPadding)/brickColumnCount,brickHeight=canvas['height']*0.05;for(let _0x5e88ff=0x0;_0x5e88ff<brickRowCount;_0x5e88ff++){bricks[_0x5e88ff]=[];for(let _0x3cd9aa=0x0;_0x3cd9aa<brickColumnCount;_0x3cd9aa++){let _0x3f07b2=levelMap[_0x5e88ff][_0x3cd9aa]||'\x20',_0x49c5f6=0x0,_0x343113=![],_0x53c2f8=![];switch(_0x3f07b2){case'1':_0x49c5f6=0x1;break;case'2':_0x49c5f6=0x2;break;case'3':_0x49c5f6=0x3;break;case'P':_0x49c5f6=0x1,_0x343113=!![];break;case'U':_0x49c5f6=-0x1,_0x53c2f8=!![];break;default:_0x49c5f6=0x0;}_0x49c5f6!==0x0?bricks[_0x5e88ff][_0x3cd9aa]={'x':0x0,'y':0x0,'width':brickWidth,'height':brickHeight,'status':_0x49c5f6,'hasPowerUp':_0x343113,'unbreakable':_0x53c2f8}:bricks[_0x5e88ff][_0x3cd9aa]=null;}}speedMultiplier=0x1,speedMultiplierActual=0x1,speedMultiplierDelta=0x0,backgroundTime=0x0,gameState='playing',resizeCanvas(!![]);}function gameLoop(){const _0x15e02f=a0_0x567e4e,_0x32d8ca=Date[_0x15e02f(0x209)]();let _0x49fabf=(_0x32d8ca-lastFrameTime)/0x3e8;lastFrameTime=_0x32d8ca,requestAnimationFrame(gameLoop),updateCursorStyle(),updateFPS(_0x49fabf);switch(gameState){case _0x15e02f(0x1de):drawIntro(_0x49fabf);if(Date[_0x15e02f(0x209)]()-introStartTime>=introDuration)gameState=_0x15e02f(0x20c);break;case'startMenu':drawStartMenu(_0x49fabf);break;case _0x15e02f(0x1f6):drawLevelSelectionMenu(_0x49fabf);break;case _0x15e02f(0x1fa):drawCreditsScreen(_0x49fabf);break;case _0x15e02f(0x220):updateGamePlaying(_0x49fabf),renderGamePlaying(_0x49fabf);break;case'levelCompleted':drawLevelCompletion(_0x49fabf);Date[_0x15e02f(0x209)]()-levelCompletionTime>=levelCompletionDuration&&(currentLevel>=levelMaps[_0x15e02f(0x1e9)]?(gameState='gameCompleted',gameCompletionTime=Date[_0x15e02f(0x209)]()):(currentLevel++,init()));break;case _0x15e02f(0x1db):drawGameCompletion(_0x49fabf);Date[_0x15e02f(0x209)]()-gameCompletionTime>=gameCompletionDuration&&(gameState=_0x15e02f(0x1de),introStartTime=Date[_0x15e02f(0x209)]());break;case _0x15e02f(0x1f1):drawGameOverScreen(_0x49fabf);break;}}function updateGamePlaying(_0x1ab9aa){if(isPaused)return;movePaddle(_0x1ab9aa);if(!isInitialBall){updatePowerUpEffects(_0x1ab9aa);if(!moveBalls(_0x1ab9aa))return;ballCollisionDetection(),collisionDetection(),movePowerUps(_0x1ab9aa);}updateParticles(_0x1ab9aa),updateEffects(_0x1ab9aa);}function renderGamePlaying(_0x4e43c1){drawPulsatingBackground(_0x4e43c1),drawBricks(),drawPaddle(),drawFireParticles(),drawBalls(),drawParticles(),drawPowerUps(),drawHUD(),drawEffects();if(isPaused&&gameState==='playing')drawPauseScreen();}function checkWin(){const _0x3b8e73=a0_0x567e4e;for(let _0x52567e=0x0;_0x52567e<brickRowCount;_0x52567e++){for(let _0x4eb751=0x0;_0x4eb751<brickColumnCount;_0x4eb751++){let _0x5093ba=bricks[_0x52567e][_0x4eb751];if(_0x5093ba&&_0x5093ba[_0x3b8e73(0x1fd)]>0x0&&!_0x5093ba[_0x3b8e73(0x207)])return![];}}return!![];}function doLevelCompleted(){const _0x3dd93e=a0_0x567e4e;gameState=_0x3dd93e(0x1da),addScore(GAME_LEVELCOMPLETE_POINTS*difficultyConfig[_0x3dd93e(0x21a)]),levelCompletionTime=Date['now']();if(!isRandomGame){const _0x3a98ac=difficultyConfig[_0x3dd93e(0x204)];currentLevel>highestLevelCompleted[_0x3a98ac]&&(highestLevelCompleted[_0x3a98ac]=currentLevel,saveProgress());}}function generatePowerUp(_0x2d6029,_0x546aca){const _0x4c4f40=a0_0x567e4e;let _0x1ffb40=POWERUP_TYPES[Math[_0x4c4f40(0x1ed)](Math[_0x4c4f40(0x1d6)]()*POWERUP_TYPES[_0x4c4f40(0x1e9)])];const _0xe7c862=canvas[_0x4c4f40(0x1e1)]*0.06,_0xa89c25=canvas[_0x4c4f40(0x1ec)]*0.02;powerUps['push']({'x':_0x2d6029,'y':_0x546aca,'width':_0xe7c862,'height':_0xa89c25,'type':_0x1ffb40,'active':!![],'previousX':_0x2d6029,'previousY':_0x546aca});}function activatePowerUp(_0x505113){const _0x45d7bc=a0_0x567e4e;let _0xb11fd1='';switch(_0x505113){case POWERUP_TYPES[FIREBALL]:_0xb11fd1=_0x45d7bc(0x21b),activePowerUps['fastball']=0x0,activePowerUps[_0x45d7bc(0x21d)]=FIREBALL_DURATION,activePowerUps[_0x45d7bc(0x1fe)]=0x0,activePowerUps['fireball']=FIREBALL_DURATION;for(let _0x1ccaa0 of balls){_0x1ccaa0[_0x45d7bc(0x1f2)]=![],_0x1ccaa0[_0x45d7bc(0x1f8)]=!![];}break;case POWERUP_TYPES[PLASMABALL]:_0xb11fd1=_0x45d7bc(0x1dd),activePowerUps[_0x45d7bc(0x1d8)]=0x0,activePowerUps[_0x45d7bc(0x21d)]=PLASMABALL_DURATION,activePowerUps[_0x45d7bc(0x202)]=0x0,activePowerUps[_0x45d7bc(0x1fe)]=PLASMABALL_DURATION;for(let _0x3bfbe8 of balls){_0x3bfbe8[_0x45d7bc(0x1f8)]=![],_0x3bfbe8[_0x45d7bc(0x1f2)]=!![];}break;case POWERUP_TYPES[MULTIBALL]:_0xb11fd1=_0x45d7bc(0x20f),createMultipleBalls();break;case POWERUP_TYPES[BIGPADDLE]:_0xb11fd1=_0x45d7bc(0x1d7);activePowerUps[_0x45d7bc(0x211)]<=0x0&&(powerupBigPaddleMultiplier*=POWERUP_BIGPADDLE_MULTIPLIER);activePowerUps[_0x45d7bc(0x211)]+=POWERUP_DURATION;break;case POWERUP_TYPES[SLOWBALL]:_0xb11fd1=_0x45d7bc(0x1e5),activePowerUps[_0x45d7bc(0x1d8)]=0x0,activePowerUps['slowball']+=POWERUP_DURATION;break;case POWERUP_TYPES[EXTRALIFE]:_0xb11fd1=_0x45d7bc(0x216),lives++;break;case POWERUP_TYPES[FASTBALL]:_0xb11fd1=_0x45d7bc(0x1e8),activePowerUps[_0x45d7bc(0x21d)]=0x0,activePowerUps[_0x45d7bc(0x1d8)]+=POWERUP_DURATION;break;default:_0xb11fd1='ERROR:\x20type\x20'+_0x505113+'\x20unknown';break;}createEffectMessage(paddle['x']+paddle[_0x45d7bc(0x1e1)]/0x2,paddle['y'],_0xb11fd1);}function updatePowerUpEffects(_0x4d1be0){const _0x55f1e4=a0_0x567e4e;let _0x34db18=0x1;activePowerUps['fastball']>0x0&&(activePowerUps[_0x55f1e4(0x1d8)]-=_0x4d1be0,activePowerUps[_0x55f1e4(0x1d8)]<=0x0&&(activePowerUps[_0x55f1e4(0x1d8)]=0x0),_0x34db18=POWERUP_FASTBALL_MULTIPLIER);activePowerUps[_0x55f1e4(0x21d)]>0x0&&(activePowerUps['slowball']-=_0x4d1be0,_0x34db18=POWERUP_SLOWBALL_MULTIPLIER,activePowerUps[_0x55f1e4(0x21d)]<=0x0&&(activePowerUps[_0x55f1e4(0x21d)]=0x0));if(activePowerUps[_0x55f1e4(0x202)]>0x0){activePowerUps['fireball']-=_0x4d1be0;if(activePowerUps[_0x55f1e4(0x202)]<=0x0){activePowerUps[_0x55f1e4(0x202)]=0x0;for(let _0x3ef91a of balls){_0x3ef91a[_0x55f1e4(0x1f8)]=![];}}}if(activePowerUps[_0x55f1e4(0x1fe)]>0x0){activePowerUps[_0x55f1e4(0x1fe)]-=_0x4d1be0;if(activePowerUps[_0x55f1e4(0x1fe)]<=0x0){activePowerUps[_0x55f1e4(0x1fe)]=0x0;for(let _0x52b0cf of balls){_0x52b0cf[_0x55f1e4(0x1f2)]=![];}}}activePowerUps[_0x55f1e4(0x211)]>0x0&&(activePowerUps['bigPaddle']-=_0x4d1be0,activePowerUps[_0x55f1e4(0x211)]<=0x0&&(powerupBigPaddleMultiplier/=POWERUP_BIGPADDLE_MULTIPLIER,activePowerUps[_0x55f1e4(0x211)]=0x0)),activePowerupBalspeedModifier=_0x34db18,applyBallSpeedToAllBalls();}function a0_0x1957(_0x5d9992,_0xb2dbca){const _0x19ce91=a0_0x91dd();return a0_0x1957=function(_0x22b2bb,_0x4b4cfa){_0x22b2bb=_0x22b2bb-0x1d6;let _0x91dd9b=_0x19ce91[_0x22b2bb];return _0x91dd9b;},a0_0x1957(_0x5d9992,_0xb2dbca);}function applyBallSpeedToAllBalls(){const _0x5b7c67=a0_0x567e4e;for(let _0x2bbd89 of balls){const _0x9213e=calcBallSpeed();_0x2bbd89[_0x5b7c67(0x212)]=_0x9213e;const _0x38f60a=Math[_0x5b7c67(0x20a)](_0x2bbd89['dy'],_0x2bbd89['dx']);_0x2bbd89['dx']=_0x9213e*Math[_0x5b7c67(0x206)](_0x38f60a),_0x2bbd89['dy']=_0x9213e*Math[_0x5b7c67(0x1f3)](_0x38f60a);}}function createMultipleBalls(){const _0x3f7fbf=a0_0x567e4e,_0x4f66af=Math[_0x3f7fbf(0x1ed)](Math['random']()*0x3)+0x1,_0x517c09=balls[0x0][_0x3f7fbf(0x212)],_0x53268e=balls[0x0][_0x3f7fbf(0x219)];for(let _0x36d9af=0x0;_0x36d9af<_0x4f66af;_0x36d9af++){const _0xd097fe=-Math['PI']/0x2+Math[_0x3f7fbf(0x1d6)]()*Math['PI']/0x4-Math['PI']/0x8;balls['push']({'x':paddle['x']+paddle[_0x3f7fbf(0x1e1)]/0x2,'y':paddle['y']-_0x53268e,'radius':_0x53268e,'speed':_0x517c09,'dx':_0x517c09*Math[_0x3f7fbf(0x206)](_0xd097fe),'dy':_0x517c09*Math['sin'](_0xd097fe),'isFireball':balls[0x0][_0x3f7fbf(0x1f8)],'isPlasmaball':balls[0x0][_0x3f7fbf(0x1f2)]});}}function togglePause(){if(gameState==='playing'){isPaused=!isPaused;if(isPaused)drawPauseScreen();else{}}}function startGame(_0x21744f){const _0x3f7a0e=a0_0x567e4e;difficultyConfig=gameDifficulties[_0x3f7a0e(0x21c)](_0x341d03=>_0x341d03[_0x3f7a0e(0x204)]===selectedDifficulty),!difficultyConfig&&(difficultyConfig=gameDifficulties[0x1]),resetGame(_0x21744f),init(),gameState=_0x3f7a0e(0x220);}function addScore(_0x40d8f2){const _0xae4c0a=a0_0x567e4e;if(_0x40d8f2<=0x0){score+=_0x40d8f2;if(score<0x0)score=0x0;}else score+=_0x40d8f2*speedMultiplierActual;score=Math[_0xae4c0a(0x208)](score);}(async function initializeGame(){const _0x4ae125=a0_0x567e4e;await loadFonts(),resizeCanvas(!![]),window[_0x4ae125(0x20d)](_0x4ae125(0x214),resizeCanvas),window[_0x4ae125(0x20d)](_0x4ae125(0x1d9),onWindowBlur),window['addEventListener'](_0x4ae125(0x203),onWindowFocus),addMouseEventsListeners(),addTouchEventsListeners(),addKeyboardEventsListeners(),createMenuParticles(),createIntroParticles(),loadProgress(),gameLoop();}());