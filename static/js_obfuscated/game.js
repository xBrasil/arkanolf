const a0_0x1ee692=a0_0x1903;(function(_0x200b0f,_0x11b81f){const _0x164b76=a0_0x1903,_0x47c48f=_0x200b0f();while(!![]){try{const _0x32b9e2=parseInt(_0x164b76(0xec))/0x1+-parseInt(_0x164b76(0xbf))/0x2+parseInt(_0x164b76(0xf3))/0x3*(parseInt(_0x164b76(0xd6))/0x4)+parseInt(_0x164b76(0xc0))/0x5*(parseInt(_0x164b76(0xd7))/0x6)+-parseInt(_0x164b76(0xfc))/0x7+-parseInt(_0x164b76(0xc1))/0x8+parseInt(_0x164b76(0xca))/0x9*(parseInt(_0x164b76(0xeb))/0xa);if(_0x32b9e2===_0x11b81f)break;else _0x47c48f['push'](_0x47c48f['shift']());}catch(_0x3b9814){_0x47c48f['push'](_0x47c48f['shift']());}}}(a0_0x10a1,0xbae8f));const a0_0x4264ce=(function(){let _0x52b76b=!![];return function(_0x372d39,_0x2bcac9){const _0x1178e5=_0x52b76b?function(){if(_0x2bcac9){const _0x193033=_0x2bcac9['apply'](_0x372d39,arguments);return _0x2bcac9=null,_0x193033;}}:function(){};return _0x52b76b=![],_0x1178e5;};}()),a0_0x4ed184=a0_0x4264ce(this,function(){const _0x5f4001=a0_0x1903;return a0_0x4ed184[_0x5f4001(0xc5)]()[_0x5f4001(0xdc)](_0x5f4001(0xfa)+'+$')[_0x5f4001(0xc5)]()[_0x5f4001(0xde)+'r'](a0_0x4ed184)[_0x5f4001(0xdc)]('(((.+)+)+)'+'+$');});a0_0x4ed184();function a0_0x10a1(){const _0x2aee59=['sgfYza','Aw5PDgLHBeXPDG','mZyXmtCYCe5MELP5','mte1ode3nxPUzLHNAa','nti0nJC0nhPds2vKyG','ChvZAa','C3rHCNrnzw51','DgvK','Dg9tDhjPBMC','rxn0ywrVigrLia','Dw5ICMvHA2fIBa','zgLMzMLJDwX0Eq','zMXVB3i','mtm4nKjdzKLjra','qxjRyw5VBgyUyW','CMfUzg9T','z2fTzunVBxbSzq','CgXHEwLUzW','tM9YBwfS','y3jLzgL0CW','zxrLza','C2nVCMvnDwX0Aq','AgvPz2H0','C2v0sxrLBq','C2f2zq','ndeXnZm2nfDJvwz5wq','nMvZsNn1Ea','CgfYC2u','C3rYAw5NAwz5','Aw50CM8','Bgv2zwXcCMLJAW','C2vHCMnO','Bgv2zwXdB21WBa','y29UC3rYDwn0BW','z2v0sxrLBq','CMfKAxvZ','CgXPzxi','zMLUza','AgLNAgvZDeXLDG','C3rVBMvtDgf0Dq','uMvSyxG','DhrHifnHCMfPDG','z2fTzu92zxi','BgfZDerPzMzPyW','Bgv2zwXtzwXLyW','B2jQzwn0','mJiWmhPSCfrbEq','ndGZmJq0r2rOufPn','C2HVD0zquW','zwXdB21WBgv0zq','Bgv2zwXqywXLDa','zxzLCNK','Aw5KzxHpzG','tMfTzq','m0zLy1btqG','ms4YlJe','Bwf4','yMfJA2DYB3vUza','C3fYDa','BgvUz3rO','qxjRyw5VBgy','kcGOlISPkYKRkq','DwX0Eq','mtiZmJyXnKv4vu9hza','yNjPy2TdB2XVCG','BM93','D2LKDgG','AM9NBYbKzxnJBW','DgLVBG','sw5Zyw5L'];a0_0x10a1=function(){return _0x2aee59;};return a0_0x10a1();}const GAME_NAME=a0_0x1ee692(0xcb)+'om',GAME_NAME_HUD=a0_0x1ee692(0xf9),GAME_AUTHOR='Rodolfo\x20Mo'+a0_0x1ee692(0xe6)+'a',GAME_VERSION=a0_0x1ee692(0xf4),GAME_BASE_HIT_POINTS=0xa,GAME_POWERUP_HIT_POINTS=0x32,GAME_LIFELOSS_POINTS_PENALTY=0x64,GAME_LEVELCOMPLETE_POINTS=0xc8,GAME_OVER_EFFECT_DURATION=0x2,GAME_OVER_EFFECT_INITIAL_SHAKE_INTENSITY=0x3,VIBRATION_GAME_OVER=GAME_OVER_EFFECT_DURATION*0x3e8/0x2,VIBRATION_DESTROY_BRICK=0x14,VIBRATION_HIT_PADDLE=0x64,VIBRATE_LASER_SHOT=0xa,VIBRATE_BOMB_EXPLOSION=EXPLOSION_DURATION*0x3e8/0x2;let gameState='intro',isPaused=![],levelCompletionTime,gameCompletionTime,selectedDifficulty;const levelCompletionDuration=0xbb8,gameCompletionDuration=0x1388;let introDuration=0x3,introElapsed=0x0,gameOverEffectElapsed=0x0,shakeIntensity=0x0,isGameOverTransition=![],paddle,bricks,balls=[],brickRowCount,brickColumnCount,score,lives,brickWidth,brickHeight,brickDiagonal,brickPadding,offsetTop,offsetLeft,paddleWidth,paddleHeight,lastFrameTime=Date[a0_0x1ee692(0xfe)](),speedMultiplierDelta=0x0,speedMultiplier=0x0,speedMultiplierActual=0x1,highestLevelCompleted={'Relax':0x0,'Normal':0x0,'Hard':0x0,'Insane':0x0},isRandomGame=![],shuffledLevels=[],currentLevel=0x1,actualLevel=0x1,levelMap,levelPalette;function gameLoop(){const _0x1a5d3d=a0_0x1ee692,_0x455030=Date['now']();let _0x39b512=(_0x455030-lastFrameTime)/0x3e8;lastFrameTime=_0x455030,requestAnimationFrame(gameLoop),updateCursorStyle(),updateFPS(_0x39b512),clearCanvas();switch(gameState){case _0x1a5d3d(0xda):drawIntro(_0x39b512);break;case _0x1a5d3d(0xc3):drawStartMenu(_0x39b512);break;case _0x1a5d3d(0xe9)+_0x1a5d3d(0xbb):drawLevelSelectionMenu(_0x39b512);break;case _0x1a5d3d(0xd0):drawCreditsScreen(_0x39b512);break;case'playing':updateGamePlaying(_0x39b512),renderGamePlaying(_0x39b512);if(isGameOverTransition)drawGameOverTransition(_0x39b512);else{if(checkWin())doLevelCompleted();}break;case _0x1a5d3d(0xdd)+_0x1a5d3d(0xd1):drawLevelCompletion(_0x39b512);break;case'gameComple'+_0x1a5d3d(0xc4):drawGameCompletion(_0x39b512);break;case _0x1a5d3d(0xe7):drawGameOverScreen(_0x39b512);break;default:console['warn'](_0x1a5d3d(0xc6)+_0x1a5d3d(0xba)+'nhecido:',gameState);break;}}function updateGamePlaying(_0x560cf2){if(isPaused||isGameOverTransition)return;updatePowerUpEffects(_0x560cf2),movePaddle(_0x560cf2);if(!moveBalls(_0x560cf2))return;ballCollisionDetection(),collisionDetection(),movePowerUps(_0x560cf2),updateParticles(_0x560cf2),updateEffects(_0x560cf2);}function a0_0x1903(_0x47f62b,_0x452b67){const _0x9f4f36=a0_0x10a1();return a0_0x1903=function(_0x4ed184,_0x4264ce){_0x4ed184=_0x4ed184-0xb9;let _0x10a1e5=_0x9f4f36[_0x4ed184];if(a0_0x1903['JsduON']===undefined){var _0x1903ff=function(_0x15d952){const _0x35742d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x533b5d='',_0x52b76b='',_0x372d39=_0x533b5d+_0x1903ff;for(let _0x2bcac9=0x0,_0x1178e5,_0x193033,_0x455030=0x0;_0x193033=_0x15d952['charAt'](_0x455030++);~_0x193033&&(_0x1178e5=_0x2bcac9%0x4?_0x1178e5*0x40+_0x193033:_0x193033,_0x2bcac9++%0x4)?_0x533b5d+=_0x372d39['charCodeAt'](_0x455030+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x1178e5>>(-0x2*_0x2bcac9&0x6)):_0x2bcac9:0x0){_0x193033=_0x35742d['indexOf'](_0x193033);}for(let _0x39b512=0x0,_0x560cf2=_0x533b5d['length'];_0x39b512<_0x560cf2;_0x39b512++){_0x52b76b+='%'+('00'+_0x533b5d['charCodeAt'](_0x39b512)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x52b76b);};a0_0x1903['WPRoLC']=_0x1903ff,_0x47f62b=arguments,a0_0x1903['JsduON']=!![];}const _0x18413d=_0x9f4f36[0x0],_0x2a0d8e=_0x4ed184+_0x18413d,_0x3a6616=_0x47f62b[_0x2a0d8e];if(!_0x3a6616){const _0x107a31=function(_0x13292e){this['gmhmCd']=_0x13292e,this['OEugYD']=[0x1,0x0,0x0],this['LoAsDW']=function(){return'newState';},this['XdPyVn']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['AOQzpV']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x107a31['prototype']['RonrRJ']=function(){const _0x5875b4=new RegExp(this['XdPyVn']+this['AOQzpV']),_0x316a5f=_0x5875b4['test'](this['LoAsDW']['toString']())?--this['OEugYD'][0x1]:--this['OEugYD'][0x0];return this['bEBFdS'](_0x316a5f);},_0x107a31['prototype']['bEBFdS']=function(_0x29c001){if(!Boolean(~_0x29c001))return _0x29c001;return this['VMObVu'](this['gmhmCd']);},_0x107a31['prototype']['VMObVu']=function(_0x115a55){for(let _0x287ddd=0x0,_0x21bc74=this['OEugYD']['length'];_0x287ddd<_0x21bc74;_0x287ddd++){this['OEugYD']['push'](Math['round'](Math['random']())),_0x21bc74=this['OEugYD']['length'];}return _0x115a55(this['OEugYD'][0x0]);},new _0x107a31(a0_0x1903)['RonrRJ'](),_0x10a1e5=a0_0x1903['WPRoLC'](_0x10a1e5),_0x47f62b[_0x2a0d8e]=_0x10a1e5;}else _0x10a1e5=_0x3a6616;return _0x10a1e5;},a0_0x1903(_0x47f62b,_0x452b67);}function renderGamePlaying(_0x107a31){const _0x1bbd76=a0_0x1ee692;drawLevelBackground(levelPalette[_0x1bbd76(0xf6)],_0x107a31,![]),drawBricks(_0x107a31),drawPaddle(),drawLaserShots(),drawFireParticles(),drawBalls(_0x107a31),drawBlockHitParticles(),drawPowerUps(_0x107a31),drawHUD(),drawEffects();if(isPaused&&gameState===_0x1bbd76(0xce))drawPauseScreen();}function checkWin(){const _0x1c8022=a0_0x1ee692;if(explosionEffects&&explosionEffects[_0x1c8022(0xf8)]>0x0)return![];for(let _0x13292e=0x0;_0x13292e<brickRowCount;_0x13292e++){for(let _0x5875b4=0x0;_0x5875b4<brickColumnCount;_0x5875b4++){let _0x316a5f=bricks[_0x13292e][_0x5875b4];if(_0x316a5f&&!_0x316a5f[_0x1c8022(0xc7)+'e']&&(_0x316a5f['status']>0x0||_0x316a5f[_0x1c8022(0xe4)+'s']>0x0))return![];}}return!![];}function doGameOver(){const _0x47a8fb=a0_0x1ee692;isGameOverTransition=!![],gameOverEffectElapsed=0x0,shakeIntensity=GAME_OVER_EFFECT_INITIAL_SHAKE_INTENSITY*canvasDiagonal/0x320,isPaused=![],vibrate(VIBRATION_GAME_OVER),ctx[_0x47a8fb(0xd5)]();}function doLevelCompleted(){const _0x293d25=a0_0x1ee692;gameState=_0x293d25(0xdd)+_0x293d25(0xd1),addScore(GAME_LEVELCOMPLETE_POINTS*difficultyConfig[_0x293d25(0xd2)+_0x293d25(0xe1)]),levelCompletionTime=Date[_0x293d25(0xfe)]();if(!isRandomGame){const _0x29c001=difficultyConfig[_0x293d25(0xc8)+_0x293d25(0xf2)];currentLevel>highestLevelCompleted[_0x29c001]&&(highestLevelCompleted[_0x29c001]=currentLevel,saveProgress());}}function togglePause(){const _0xad8da0=a0_0x1ee692;if(isGameOverTransition)return;if(gameState===_0xad8da0(0xce)){isPaused=!isPaused;if(isPaused)updatePauseMenuButtons();else{}}}function resumeGame(){isPaused=![];}function restartLevel(){isPaused=![],resetGame(currentLevel),init();}function backToMenu(){const _0x322430=a0_0x1ee692;isPaused=![],gameState=_0x322430(0xc3);}function startGame(_0x115a55,_0x287ddd){const _0x119b4c=a0_0x1ee692;difficultyConfig=gameDifficulties['find'](_0x21bc74=>_0x21bc74['difficulty'+_0x119b4c(0xf2)]===selectedDifficulty),!difficultyConfig&&(difficultyConfig=gameDifficulties[0x1]),resetGame(_0x115a55),isRandomGame=_0x287ddd,init(),gameState=_0x119b4c(0xce);}function addScore(_0x58865e){if(_0x58865e<=0x0){score+=_0x58865e;if(score<0x0)score=0x0;}else score+=_0x58865e*speedMultiplierActual;score=Math['floor'](score);}function saveProgress(){const _0x39d820=a0_0x1ee692;localStorage[_0x39d820(0xd4)]('highestLev'+_0x39d820(0xee)+'d',JSON[_0x39d820(0xd9)](highestLevelCompleted)),localStorage[_0x39d820(0xd4)](_0x39d820(0xe8)+'ulty',selectedDifficulty),localStorage['setItem']('showFPS',showFPS);}function loadProgress(){const _0x5e9274=a0_0x1ee692,_0x30a6de=localStorage[_0x5e9274(0xdf)](_0x5e9274(0xe3)+_0x5e9274(0xee)+'d');_0x30a6de&&(highestLevelCompleted=JSON[_0x5e9274(0xd8)](_0x30a6de));const _0x3477b2=localStorage[_0x5e9274(0xdf)](_0x5e9274(0xe8)+_0x5e9274(0xfb));_0x3477b2?selectedDifficulty=_0x3477b2:selectedDifficulty=_0x5e9274(0xcf);const _0x492001=localStorage[_0x5e9274(0xdf)](_0x5e9274(0xed));_0x492001!==null?showFPS=JSON[_0x5e9274(0xd8)](_0x492001):showFPS=![];}function startNewGame(){const _0x24096a=a0_0x1ee692,_0x515a78=selectedDifficulty;highestLevelCompleted[_0x515a78]===0x0?startGame(0x1,![]):gameState=_0x24096a(0xe9)+'tion';}function continueGame(){const _0xae9ca2=a0_0x1ee692,_0x426f38=[_0xae9ca2(0xe5),_0xae9ca2(0xcf),_0xae9ca2(0xbd),_0xae9ca2(0xbc)],_0x595cd7=_0x426f38[_0xae9ca2(0xf1)](selectedDifficulty),_0x13771c=selectedDifficulty;if(highestLevelCompleted[_0x13771c]>=levels[_0xae9ca2(0xf8)]){if(_0x595cd7<_0x426f38[_0xae9ca2(0xf8)]-0x1)selectedDifficulty=_0x426f38[_0x595cd7+0x1],difficultyConfig=gameDifficulties[_0xae9ca2(0xe2)](_0x44122f=>_0x44122f[_0xae9ca2(0xc8)+_0xae9ca2(0xf2)]===selectedDifficulty),startGame(0x1,![]);else return;}else startGame(highestLevelCompleted[_0x13771c]+0x1,![]);}function startRandomGame(){const _0x2c0a4b=a0_0x1ee692,_0x15fc75=Array['from']({'length':levels[_0x2c0a4b(0xf8)]},(_0x52180c,_0x7ba410)=>_0x7ba410+0x1);shuffledLevels=shuffleArray(_0x15fc75),startGame(0x1,!![]);}function showCredits(){const _0x3669e1=a0_0x1ee692;gameState=_0x3669e1(0xd0);}function initLevel(){const _0x30913e=a0_0x1ee692;paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight(),paddle?paddle['x']=canvas[_0x30913e(0xb9)]/0x2-paddleWidth/0x2:paddle={'x':canvas[_0x30913e(0xb9)]/0x2-paddleWidth/0x2,'previousX':canvas['width']/0x2-paddleWidth/0x2,'y':calcPaddleY(paddleHeight),'previousY':calcPaddleY(paddleHeight),'width':paddleWidth,'height':paddleHeight,'dx':0x0,'speed':calcPaddleSpeed()},clearGameParticles(),clearPowerUpEffects(),balls=[],createInitialBall();}function goToNextLevel(){const _0x5af353=a0_0x1ee692;isPaused=![],currentLevel++,isRandomGame?currentLevel>shuffledLevels[_0x5af353(0xf8)]?(isRandomGame=![],gameState=_0x5af353(0xcd)+_0x5af353(0xc4)):(actualLevel=shuffledLevels[currentLevel-0x1],resetGame(currentLevel),init()):currentLevel>levels[_0x5af353(0xf8)]?gameState=_0x5af353(0xcd)+'ted':(actualLevel=currentLevel,resetGame(currentLevel),init());}function createInitialBall(){const _0x38bc70=a0_0x1ee692,_0x88dba2=calcBallSize();let _0x1955ab={'x':paddle['x']+paddle[_0x38bc70(0xb9)]/0x2,'y':paddle['y']-_0x88dba2,'radius':_0x88dba2,'speed':0x0,'dx':0x0,'dy':0x0,'isStuck':!![],'stuckRelativeX':0x0,'isInitialBall':!![]};resetBallSpeed(_0x1955ab),balls[_0x38bc70(0xc2)](_0x1955ab);}function resetGame(_0x35c254){const _0xc8cc5=a0_0x1ee692;if(!difficultyConfig)difficultyConfig=gameDifficulties[0x0];lives=difficultyConfig[_0xc8cc5(0xbe)+'es'],score=0x0,currentLevel=_0x35c254,isGameOverTransition=![];}function resetBall(){!hasActiveBallPowerUp()&&ballAbovePaddleHeight()&&(balls=[],createInitialBall(),isPaused=![]);}function hasActiveBallPowerUp(){return activeBallPowerup!==null;}function ballAbovePaddleHeight(){const _0x26371d=a0_0x1ee692;return balls[_0x26371d(0xf0)](_0x2a6ac7=>_0x2a6ac7['y']+_0x2a6ac7[_0x26371d(0xe0)]<paddle['y']-paddle[_0x26371d(0xd3)]*0x3&&_0x2a6ac7['y']<canvas[_0x26371d(0xd3)]*0.8);}function shuffleArray(_0x2a945f){const _0x324a1d=a0_0x1ee692;let _0x59da82=_0x2a945f['slice']();for(let _0x48c074=_0x59da82[_0x324a1d(0xf8)]-0x1;_0x48c074>0x0;_0x48c074--){const _0x5205ae=Math[_0x324a1d(0xc9)](Math[_0x324a1d(0xcc)]()*(_0x48c074+0x1));[_0x59da82[_0x48c074],_0x59da82[_0x5205ae]]=[_0x59da82[_0x5205ae],_0x59da82[_0x48c074]];}return _0x59da82;}function init(){const _0xedddaa=a0_0x1ee692;resizeCanvas(!![]),ballRadius=calcBallSize(),initLevel();isRandomGame?actualLevel=shuffledLevels[currentLevel-0x1]:actualLevel=currentLevel;levelMap=levels[actualLevel-0x1][_0xedddaa(0xdb)+'s'],levelPalette=levels[actualLevel-0x1][_0xedddaa(0xef)+'te'],brickRowCount=levelMap[_0xedddaa(0xf8)],brickColumnCount=levelMap['reduce']((_0x30b083,_0x7bec0b)=>Math[_0xedddaa(0xf5)](_0x30b083,_0x7bec0b['length']),0x0),bricks=[],brickWidth=(canvas[_0xedddaa(0xb9)]-(brickColumnCount+0x1)*brickPadding)/brickColumnCount,brickHeight=canvas[_0xedddaa(0xd3)]*0.05,brickDiagonal=Math[_0xedddaa(0xf7)](brickWidth**0x2+brickHeight**0x2);for(let _0x59198d=0x0;_0x59198d<brickRowCount;_0x59198d++){bricks[_0x59198d]=[];for(let _0x5c83ec=0x0;_0x5c83ec<brickColumnCount;_0x5c83ec++){let _0x564e26=levelMap[_0x59198d][_0x5c83ec]||'\x20',_0x15c44a=0x0,_0x1c71a1=![],_0x2b46cb=![];switch(_0x564e26){case'1':_0x15c44a=0x1;break;case'2':_0x15c44a=0x2;break;case'3':_0x15c44a=0x3;break;case'P':_0x15c44a=0x1,_0x1c71a1=!![];break;case'U':_0x15c44a=-0x1,_0x2b46cb=!![];break;default:_0x15c44a=0x0;}if(_0x15c44a!==0x0){let _0x4113f5=levelPalette[_0xedddaa(0xfd)];typeof _0x4113f5===_0xedddaa(0xea)&&!_0x2b46cb&&(_0x1c71a1?_0x4113f5=_0x4113f5[0x0]||_0x4113f5[0x1]:_0x4113f5=_0x4113f5[_0x15c44a]||_0x4113f5[0x1]),bricks[_0x59198d][_0x5c83ec]={'x':0x0,'y':0x0,'width':brickWidth,'height':brickHeight,'status':_0x15c44a,'hasPowerUp':_0x1c71a1,'unbreakable':_0x2b46cb,'isFrozen':![],'stoneStatus':0x0,'color':_0x4113f5};}else bricks[_0x59198d][_0x5c83ec]=null;}}speedMultiplier=0x1,speedMultiplierActual=0x1,speedMultiplierDelta=0x0,backgroundTime=0x0,gameState='playing',resizeCanvas(!![]);}(async function initializeGame(){await loadFonts(),resizeCanvas(!![]),addAllListeners(),createFixedParticles(),loadProgress(),await preloadTextures(),gameLoop();}());