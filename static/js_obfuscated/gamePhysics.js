(function(_0xd2b807,_0x53d674){const _0x4c5c54=a6_0x5a01,_0x1e5eca=_0xd2b807();while(!![]){try{const _0x17262=parseInt(_0x4c5c54(0x22a))/0x1*(parseInt(_0x4c5c54(0x203))/0x2)+parseInt(_0x4c5c54(0x211))/0x3*(-parseInt(_0x4c5c54(0x223))/0x4)+parseInt(_0x4c5c54(0x20d))/0x5+parseInt(_0x4c5c54(0x1f8))/0x6*(parseInt(_0x4c5c54(0x1fb))/0x7)+-parseInt(_0x4c5c54(0x1fd))/0x8*(parseInt(_0x4c5c54(0x1f5))/0x9)+-parseInt(_0x4c5c54(0x227))/0xa+parseInt(_0x4c5c54(0x206))/0xb;if(_0x17262===_0x53d674)break;else _0x1e5eca['push'](_0x1e5eca['shift']());}catch(_0x54e61d){_0x1e5eca['push'](_0x1e5eca['shift']());}}}(a6_0x4044,0x24201));const a6_0x306c82=(function(){let _0x26d828=!![];return function(_0x4b0c7a,_0xaf7a17){const _0x39cd42=_0x26d828?function(){const _0x525126=a6_0x5a01;if(_0xaf7a17){const _0x485158=_0xaf7a17[_0x525126(0x210)](_0x4b0c7a,arguments);return _0xaf7a17=null,_0x485158;}}:function(){};return _0x26d828=![],_0x39cd42;};}()),a6_0x396282=a6_0x306c82(this,function(){const _0x403d6c=a6_0x5a01;return a6_0x396282[_0x403d6c(0x1fc)]()[_0x403d6c(0x220)]('(((.+)+)+)'+'+$')['toString']()[_0x403d6c(0x229)+'r'](a6_0x396282)[_0x403d6c(0x220)]('(((.+)+)+)'+'+$');});a6_0x396282();const BASE_BALL_SPEED_RATIO=0.35;function lineIntersectsRect(_0x2c82f4,_0x13c2ed,_0x5b03d5,_0xf928dc,_0x4c127e,_0x10dbdc,_0x1a7b55,_0x254283){return lineIntersectsLine(_0x2c82f4,_0x13c2ed,_0x5b03d5,_0xf928dc,_0x4c127e,_0x10dbdc,_0x4c127e+_0x1a7b55,_0x10dbdc)||lineIntersectsLine(_0x2c82f4,_0x13c2ed,_0x5b03d5,_0xf928dc,_0x4c127e,_0x10dbdc,_0x4c127e,_0x10dbdc+_0x254283)||lineIntersectsLine(_0x2c82f4,_0x13c2ed,_0x5b03d5,_0xf928dc,_0x4c127e+_0x1a7b55,_0x10dbdc,_0x4c127e+_0x1a7b55,_0x10dbdc+_0x254283)||lineIntersectsLine(_0x2c82f4,_0x13c2ed,_0x5b03d5,_0xf928dc,_0x4c127e,_0x10dbdc+_0x254283,_0x4c127e+_0x1a7b55,_0x10dbdc+_0x254283);}function lineIntersectsLine(_0x5d9a1e,_0x45b38e,_0x814856,_0x268e06,_0x29a8bd,_0x352250,_0x2d902e,_0x1ee712){let _0x12b704=(_0x1ee712-_0x352250)*(_0x814856-_0x5d9a1e)-(_0x2d902e-_0x29a8bd)*(_0x268e06-_0x45b38e);if(_0x12b704===0x0)return![];let _0x334bfa=((_0x2d902e-_0x29a8bd)*(_0x45b38e-_0x352250)-(_0x1ee712-_0x352250)*(_0x5d9a1e-_0x29a8bd))/_0x12b704,_0x1ce1d4=((_0x814856-_0x5d9a1e)*(_0x45b38e-_0x352250)-(_0x268e06-_0x45b38e)*(_0x5d9a1e-_0x29a8bd))/_0x12b704;return _0x334bfa>=0x0&&_0x334bfa<=0x1&&_0x1ce1d4>=0x0&&_0x1ce1d4<=0x1;}function circleIntersectsRectangle(_0x3a5e4b,_0x232028,_0x5ed2d6,_0xc10291,_0x1000d1,_0x4e66fa,_0x251683,_0x26e2d9,_0x490813){const _0x4d3359=clamp(_0x5ed2d6,_0x4e66fa,_0x4e66fa+_0x26e2d9),_0x48bcce=clamp(_0xc10291,_0x251683,_0x251683+_0x490813),_0x5b0b5c=_0x5ed2d6-_0x4d3359,_0x328eaa=_0xc10291-_0x48bcce,_0x2dbfcc=_0x5b0b5c*_0x5b0b5c+_0x328eaa*_0x328eaa;return _0x2dbfcc<_0x1000d1*_0x1000d1;}function calcBallSpeed(){const _0x28cfd7=a6_0x5a01;return speedMultiplier=0x1+speedMultiplierDelta/difficultyConfig[_0x28cfd7(0x207)+_0x28cfd7(0x200)+'l']*difficultyConfig['speedIncre'+_0x28cfd7(0x1f7)],speedMultiplierActual=Math[_0x28cfd7(0x201)](difficultyConfig['speedMulti'+_0x28cfd7(0x222)]*speedMultiplier*getBallSpeedMultiplier(),difficultyConfig[_0x28cfd7(0x230)+_0x28cfd7(0x1fa)]),speedMultiplierActual*canvasDiagonal*BASE_BALL_SPEED_RATIO;}function calcBallSize(){const _0x2914cf=a6_0x5a01;return canvasDiagonal*0.012*difficultyConfig[_0x2914cf(0x22f)+'ltiplier'];}function calcPaddleWidth(){const _0x3c6146=a6_0x5a01;if(powerupBigPaddleMultiplier<0x1)powerupBigPaddleMultiplier=0x1;return canvas[_0x3c6146(0x212)]*0.2*difficultyConfig[_0x3c6146(0x22e)+_0x3c6146(0x21c)]*powerupBigPaddleMultiplier;}function calcPaddleHeight(){const _0x17607e=a6_0x5a01;return canvas[_0x17607e(0x232)]*0.02*difficultyConfig[_0x17607e(0x22e)+_0x17607e(0x21c)];}function calcPaddleY(_0x54928b){const _0x359d5f=a6_0x5a01;return canvas[_0x359d5f(0x232)]-_0x54928b*0x3;}function calcPaddleSpeed(){const _0xcba300=a6_0x5a01;return canvas[_0xcba300(0x212)]*0.75*difficultyConfig[_0xcba300(0x209)+'plier'];}function collisionDetection(){const _0x3d2045=a6_0x5a01;for(let _0x360da5 of balls){if(_0x360da5[_0x3d2045(0x1f9)])continue;let _0x382db0=_0x360da5[_0x3d2045(0x22d)],_0x1783be=_0x360da5[_0x3d2045(0x217)],_0x32c0da=_0x360da5[_0x3d2045(0x236)];for(let _0x43b96b=0x0;_0x43b96b<brickRowCount;_0x43b96b++){for(let _0x19855a=0x0;_0x19855a<brickColumnCount;_0x19855a++){let _0x32f66d=bricks[_0x43b96b][_0x19855a];if(_0x32f66d&&(_0x32f66d[_0x3d2045(0x218)]>0x0||_0x32f66d[_0x3d2045(0x214)+'e']||_0x32f66d[_0x3d2045(0x208)+'s']>0x0)){if(circleIntersectsRectangle(_0x382db0,_0x1783be,_0x360da5['x'],_0x360da5['y'],_0x32c0da,_0x32f66d['x'],_0x32f66d['y'],_0x32f66d['width'],_0x32f66d[_0x3d2045(0x232)])){let _0x29e26a=getCollisionSide(_0x360da5,_0x32f66d),_0x28caa6=calculateCollisionPoint(_0x360da5,_0x32f66d,_0x29e26a),_0x57a338=!![];if(activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x228)]||activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x204)]&&!_0x32f66d['unbreakabl'+'e'])_0x57a338=![];activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x226)]&&(_0x32f66d[_0x3d2045(0x1ff)]=!![],frozenBricks++);activeBallPowerup===POWERUP_TYPES['STONEBALL']&&(_0x32f66d[_0x3d2045(0x218)]=0x0,_0x32f66d[_0x3d2045(0x1ff)]=![],_0x32f66d[_0x3d2045(0x208)+'s']=0x4,_0x32f66d[_0x3d2045(0x214)+'e']=![]);if(_0x57a338){_0x360da5['x']=_0x382db0,_0x360da5['y']=_0x1783be;if(_0x29e26a==='top')_0x360da5['dy']=-Math[_0x3d2045(0x224)](_0x360da5['dy']),_0x360da5['y']=_0x32f66d['y']-_0x360da5[_0x3d2045(0x236)];else{if(_0x29e26a==='bottom')_0x360da5['dy']=Math[_0x3d2045(0x224)](_0x360da5['dy']),_0x360da5['y']=_0x32f66d['y']+_0x32f66d[_0x3d2045(0x232)]+_0x360da5[_0x3d2045(0x236)];else{if(_0x29e26a===_0x3d2045(0x21e))_0x360da5['dx']=-Math[_0x3d2045(0x224)](_0x360da5['dx']),_0x360da5['x']=_0x32f66d['x']-_0x360da5[_0x3d2045(0x236)];else _0x29e26a===_0x3d2045(0x20b)&&(_0x360da5['dx']=Math['abs'](_0x360da5['dx']),_0x360da5['x']=_0x32f66d['x']+_0x32f66d[_0x3d2045(0x212)]+_0x360da5[_0x3d2045(0x236)]);}}}if(activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x221)]){explodeBombs();return;}else{if(_0x32f66d[_0x3d2045(0x214)+'e']&&activeBallPowerup!==POWERUP_TYPES[_0x3d2045(0x228)]||activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x226)]||activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x21a)]){}else{if(_0x32f66d[_0x3d2045(0x208)+'s']>0x0){if(activeBallPowerup===POWERUP_TYPES['PLASMABALL'])destroyBrick(_0x32f66d,_0x28caa6['x'],_0x28caa6['y'],STONE_COLOR);else activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x1f6)]?_0x32f66d[_0x3d2045(0x208)+'s']<=0x2?destroyBrick(_0x32f66d,_0x28caa6['x'],_0x28caa6['y'],STONE_COLOR):(addScore(GAME_BASE_HIT_POINTS*difficultyConfig[_0x3d2045(0x234)+'plier']*Math[_0x3d2045(0x201)](_0x32f66d[_0x3d2045(0x208)+'s'],0x2)),_0x32f66d[_0x3d2045(0x208)+'s']=math[_0x3d2045(0x201)](_0x32f66d['stoneStatu'+'s']-0x2,0x0)):_0x32f66d[_0x3d2045(0x208)+'s']<=0x1?destroyBrick(_0x32f66d,_0x28caa6['x'],_0x28caa6['y'],STONE_COLOR):(addScore(GAME_BASE_HIT_POINTS*difficultyConfig[_0x3d2045(0x234)+_0x3d2045(0x222)]),_0x32f66d[_0x3d2045(0x208)+'s']-=0x1);}else activeBallPowerup===POWERUP_TYPES['FIREBALL']||activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x228)]||activeBallPowerup===POWERUP_TYPES[_0x3d2045(0x1f6)]?destroyBrick(_0x32f66d,_0x28caa6['x'],_0x28caa6['y'],_0x32f66d[_0x3d2045(0x233)]):_0x32f66d[_0x3d2045(0x218)]>0x1?(addScore(GAME_BASE_HIT_POINTS*difficultyConfig[_0x3d2045(0x234)+_0x3d2045(0x222)]),_0x32f66d[_0x3d2045(0x218)]-=0x1):destroyBrick(_0x32f66d,_0x28caa6['x'],_0x28caa6['y'],_0x32f66d['color']);}}break;}}}}if(_0x360da5['dy']>0x0&&circleIntersectsRectangle(_0x382db0,_0x1783be,_0x360da5['x'],_0x360da5['y'],_0x360da5[_0x3d2045(0x236)],paddle['x'],paddle['y'],paddle[_0x3d2045(0x212)],paddle['height'])){_0x360da5['x']=_0x382db0,_0x360da5['y']=_0x1783be;let _0x503598=(_0x360da5['x']-(paddle['x']+paddle[_0x3d2045(0x212)]/0x2))/(paddle[_0x3d2045(0x212)]/0x2);_0x503598=clamp(_0x503598,-0x1,0x1);let _0x19b051=_0x503598*(Math['PI']/0x3);_0x360da5['dx']=_0x360da5[_0x3d2045(0x1f4)]*Math[_0x3d2045(0x20a)](_0x19b051),_0x360da5['dy']=-Math[_0x3d2045(0x224)](_0x360da5[_0x3d2045(0x1f4)]*Math['cos'](_0x19b051)),_0x360da5['y']=paddle['y']-_0x360da5['radius'],vibrate(VIBRATION_HIT_PADDLE);if(activePaddlePowerup===POWERUP_TYPES['STICKYPADD'+'LE']){let _0x48dc95=(_0x360da5['x']-(paddle['x']+paddle[_0x3d2045(0x212)]/0x2))/(paddle['width']/0x2);_0x48dc95=clamp(_0x48dc95,-0x1,0x1),_0x360da5[_0x3d2045(0x1f9)]=!![],_0x360da5[_0x3d2045(0x213)+'iveX']=_0x48dc95*(paddle['width']/0x2),_0x360da5['x']=paddle['x']+paddle[_0x3d2045(0x212)]/0x2+_0x360da5[_0x3d2045(0x213)+_0x3d2045(0x20f)],_0x360da5['y']=paddle['y']-_0x360da5[_0x3d2045(0x236)];}}for(let _0x4307e6=0x0;_0x4307e6<brickRowCount;_0x4307e6++){for(let _0x13aba2=0x0;_0x13aba2<brickColumnCount;_0x13aba2++){let _0x234918=bricks[_0x4307e6][_0x13aba2];if(_0x234918&&(_0x234918[_0x3d2045(0x214)+'e']||_0x234918[_0x3d2045(0x208)+'s']>0x0)){if(circleIntersectsRectangle(_0x360da5['x'],_0x360da5['y'],_0x360da5[_0x3d2045(0x236)],_0x234918['x'],_0x234918['y'],_0x234918[_0x3d2045(0x212)],_0x234918[_0x3d2045(0x232)])){console[_0x3d2045(0x22c)](_0x3d2045(0x225)+_0x3d2045(0x202)+_0x3d2045(0x21d));let _0x4b759c=getCollisionSide(_0x360da5,_0x234918);if(_0x4b759c===_0x3d2045(0x1f2))_0x360da5['dy']=-Math['abs'](_0x360da5['dy']),_0x360da5['y']=_0x234918['y']-_0x360da5[_0x3d2045(0x236)];else{if(_0x4b759c===_0x3d2045(0x231))_0x360da5['dy']=Math[_0x3d2045(0x224)](_0x360da5['dy']),_0x360da5['y']=_0x234918['y']+_0x234918[_0x3d2045(0x232)]+_0x360da5[_0x3d2045(0x236)];else{if(_0x4b759c===_0x3d2045(0x21e))_0x360da5['dx']=-Math[_0x3d2045(0x224)](_0x360da5['dx']),_0x360da5['x']=_0x234918['x']-_0x360da5[_0x3d2045(0x236)];else _0x4b759c===_0x3d2045(0x20b)&&(_0x360da5['dx']=Math[_0x3d2045(0x224)](_0x360da5['dx']),_0x360da5['x']=_0x234918['x']+_0x234918[_0x3d2045(0x212)]+_0x360da5[_0x3d2045(0x236)]);}}}}}}}}function calculateCollisionPoint(_0x65de5b,_0x425788,_0x4a3c46){const _0x382725=a6_0x5a01;switch(_0x4a3c46){case _0x382725(0x1f2):return{'x':_0x65de5b['x'],'y':_0x425788['y']};case _0x382725(0x231):return{'x':_0x65de5b['x'],'y':_0x425788['y']+_0x425788[_0x382725(0x232)]};case _0x382725(0x21e):return{'x':_0x425788['x'],'y':_0x65de5b['y']};case _0x382725(0x20b):return{'x':_0x425788['x']+_0x425788[_0x382725(0x212)],'y':_0x65de5b['y']};}}function destroyBrick(_0x367a72,_0x28c780,_0x205661,_0x3abf74){const _0x5dec8d=a6_0x5a01;_0x367a72['hasPowerUp']?(generatePowerUp(_0x367a72['x']+_0x367a72['width']/0x2,_0x367a72['y']+_0x367a72[_0x5dec8d(0x232)]/0x2),addScore(GAME_POWERUP_HIT_POINTS*difficultyConfig[_0x5dec8d(0x234)+_0x5dec8d(0x222)]),_0x367a72[_0x5dec8d(0x20e)]=![]):addScore(GAME_BASE_HIT_POINTS*difficultyConfig[_0x5dec8d(0x234)+_0x5dec8d(0x222)]*Math[_0x5dec8d(0x22b)](_0x367a72[_0x5dec8d(0x218)]+_0x367a72[_0x5dec8d(0x208)+'s'],0x1));_0x367a72[_0x5dec8d(0x218)]=0x0,_0x367a72[_0x5dec8d(0x208)+'s']=0x0,_0x367a72['unbreakabl'+'e']=![],_0x367a72[_0x5dec8d(0x1ff)]=![];if(activeBallPowerup&&activeBallPowerup===POWERUP_TYPES[_0x5dec8d(0x204)]||activeBallPowerup===POWERUP_TYPES[_0x5dec8d(0x228)]){}else createBlockHitParticles(_0x28c780,_0x205661,_0x3abf74);vibrate(VIBRATION_DESTROY_BRICK);}function a6_0x5a01(_0x3c2a0e,_0x17802a){const _0x4952d8=a6_0x4044();return a6_0x5a01=function(_0x396282,_0x306c82){_0x396282=_0x396282-0x1f2;let _0x4044b6=_0x4952d8[_0x396282];if(a6_0x5a01['QcACeq']===undefined){var _0x5a01bf=function(_0x2b49b9){const _0x5594cd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e6013='',_0x26d828='',_0x4b0c7a=_0x2e6013+_0x5a01bf;for(let _0xaf7a17=0x0,_0x39cd42,_0x485158,_0x2c82f4=0x0;_0x485158=_0x2b49b9['charAt'](_0x2c82f4++);~_0x485158&&(_0x39cd42=_0xaf7a17%0x4?_0x39cd42*0x40+_0x485158:_0x485158,_0xaf7a17++%0x4)?_0x2e6013+=_0x4b0c7a['charCodeAt'](_0x2c82f4+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x39cd42>>(-0x2*_0xaf7a17&0x6)):_0xaf7a17:0x0){_0x485158=_0x5594cd['indexOf'](_0x485158);}for(let _0x13c2ed=0x0,_0x5b03d5=_0x2e6013['length'];_0x13c2ed<_0x5b03d5;_0x13c2ed++){_0x26d828+='%'+('00'+_0x2e6013['charCodeAt'](_0x13c2ed)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x26d828);};a6_0x5a01['NiwZRV']=_0x5a01bf,_0x3c2a0e=arguments,a6_0x5a01['QcACeq']=!![];}const _0x24d6d1=_0x4952d8[0x0],_0x4a9087=_0x396282+_0x24d6d1,_0x2adb3b=_0x3c2a0e[_0x4a9087];if(!_0x2adb3b){const _0xf928dc=function(_0x4c127e){this['GymjQG']=_0x4c127e,this['mXhkGY']=[0x1,0x0,0x0],this['urwcYx']=function(){return'newState';},this['LsHtaj']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['ZoKWlc']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xf928dc['prototype']['thyvXu']=function(){const _0x10dbdc=new RegExp(this['LsHtaj']+this['ZoKWlc']),_0x1a7b55=_0x10dbdc['test'](this['urwcYx']['toString']())?--this['mXhkGY'][0x1]:--this['mXhkGY'][0x0];return this['bPInUK'](_0x1a7b55);},_0xf928dc['prototype']['bPInUK']=function(_0x254283){if(!Boolean(~_0x254283))return _0x254283;return this['czyHue'](this['GymjQG']);},_0xf928dc['prototype']['czyHue']=function(_0x5d9a1e){for(let _0x45b38e=0x0,_0x814856=this['mXhkGY']['length'];_0x45b38e<_0x814856;_0x45b38e++){this['mXhkGY']['push'](Math['round'](Math['random']())),_0x814856=this['mXhkGY']['length'];}return _0x5d9a1e(this['mXhkGY'][0x0]);},new _0xf928dc(a6_0x5a01)['thyvXu'](),_0x4044b6=a6_0x5a01['NiwZRV'](_0x4044b6),_0x3c2a0e[_0x4a9087]=_0x4044b6;}else _0x4044b6=_0x2adb3b;return _0x4044b6;},a6_0x5a01(_0x3c2a0e,_0x17802a);}function clone(_0x49e1db){const _0x689ea0=a6_0x5a01;return JSON[_0x689ea0(0x1f3)](JSON[_0x689ea0(0x205)](_0x49e1db));}function normalize(_0x48944b,_0x5c3167){const _0x35513c=a6_0x5a01;let _0x4f39e4=Math[_0x35513c(0x219)](_0x48944b,_0x5c3167);if(_0x4f39e4===0x0)return{'dx':0x0,'dy':0x0};return{'dx':_0x48944b/_0x4f39e4,'dy':_0x5c3167/_0x4f39e4};}function ballCollisionDetection(){const _0x5a589e=a6_0x5a01;if(activeBallPowerup===POWERUP_TYPES[_0x5a589e(0x228)])return;for(let _0x434c83=0x0;_0x434c83<balls['length'];_0x434c83++){if(balls[_0x434c83][_0x5a589e(0x1f9)])continue;for(let _0x3b4c2a=_0x434c83+0x1;_0x3b4c2a<balls[_0x5a589e(0x21f)];_0x3b4c2a++){let _0x1d493d=balls[_0x434c83],_0x23e481=balls[_0x3b4c2a],_0x1ecb5c=_0x23e481['x']-_0x1d493d['x'],_0x531f9d=_0x23e481['y']-_0x1d493d['y'],_0x22d2ef=Math[_0x5a589e(0x219)](_0x1ecb5c,_0x531f9d),_0x877718=_0x1d493d[_0x5a589e(0x236)]+_0x23e481['radius'];if(_0x22d2ef<_0x877718){let {dx:_0x2a3525,dy:_0x401e7d}=normalize(_0x1ecb5c,_0x531f9d),_0x4edca9=_0x877718-_0x22d2ef;_0x1d493d['x']-=_0x2a3525*(_0x4edca9/0x2),_0x1d493d['y']-=_0x401e7d*(_0x4edca9/0x2),_0x23e481['x']+=_0x2a3525*(_0x4edca9/0x2),_0x23e481['y']+=_0x401e7d*(_0x4edca9/0x2);let _0x2901fa=_0x1d493d['dx']*_0x2a3525+_0x1d493d['dy']*_0x401e7d,_0x3b3327=_0x23e481['dx']*_0x2a3525+_0x23e481['dy']*_0x401e7d,_0x3d4f92=_0x2901fa;_0x2901fa=_0x3b3327,_0x3b3327=_0x3d4f92,_0x1d493d['dx']+=(_0x2901fa-(_0x1d493d['dx']*_0x2a3525+_0x1d493d['dy']*_0x401e7d))*_0x2a3525,_0x1d493d['dy']+=(_0x2901fa-(_0x1d493d['dx']*_0x2a3525+_0x1d493d['dy']*_0x401e7d))*_0x401e7d,_0x23e481['dx']+=(_0x3b3327-(_0x23e481['dx']*_0x2a3525+_0x23e481['dy']*_0x401e7d))*_0x2a3525,_0x23e481['dy']+=(_0x3b3327-(_0x23e481['dx']*_0x2a3525+_0x23e481['dy']*_0x401e7d))*_0x401e7d;let _0x21b824=Math[_0x5a589e(0x219)](_0x1d493d['dx'],_0x1d493d['dy']),_0xe7df70=Math['hypot'](_0x23e481['dx'],_0x23e481['dy']);_0x21b824>0x0&&(_0x1d493d['dx']=_0x1d493d['dx']/_0x21b824*_0x1d493d[_0x5a589e(0x1f4)],_0x1d493d['dy']=_0x1d493d['dy']/_0x21b824*_0x1d493d['speed']),_0xe7df70>0x0&&(_0x23e481['dx']=_0x23e481['dx']/_0xe7df70*_0x23e481[_0x5a589e(0x1f4)],_0x23e481['dy']=_0x23e481['dy']/_0xe7df70*_0x23e481['speed']);}}}for(let _0x19bad6=0x0;_0x19bad6<balls[_0x5a589e(0x21f)];_0x19bad6++){if(balls[_0x19bad6]['isStuck'])continue;for(let _0x36cf2e=_0x19bad6+0x1;_0x36cf2e<balls['length'];_0x36cf2e++){if(balls[_0x36cf2e]['isStuck'])continue;let _0x49df49=balls[_0x19bad6],_0x130111=balls[_0x36cf2e],_0x4e5031=_0x130111['x']-_0x49df49['x'],_0x4f4a2b=_0x130111['y']-_0x49df49['y'],_0x34381f=Math['hypot'](_0x4e5031,_0x4f4a2b),_0x5f2160=_0x49df49['radius']+_0x130111[_0x5a589e(0x236)];if(_0x34381f<_0x5f2160){let {dx:_0x4cc1c8,dy:_0x4cd48d}=normalize(_0x4e5031,_0x4f4a2b),_0x56f210=_0x5f2160-_0x34381f;_0x49df49['x']-=_0x4cc1c8*(_0x56f210/0x2),_0x49df49['y']-=_0x4cd48d*(_0x56f210/0x2),_0x130111['x']+=_0x4cc1c8*(_0x56f210/0x2),_0x130111['y']+=_0x4cd48d*(_0x56f210/0x2);}}}}function rectIntersect(_0x322986,_0x6b0f00,_0x36230b,_0x30b5cd,_0x2e01e3,_0x3dc7c8,_0x4277be,_0x3f628c){return!(_0x2e01e3>_0x322986+_0x36230b||_0x2e01e3+_0x4277be<_0x322986||_0x3dc7c8>_0x6b0f00+_0x30b5cd||_0x3dc7c8+_0x3f628c<_0x6b0f00);}function rectsMovingIntersect(_0x39733f,_0x3b276c,_0x22d96b,_0x6788ed,_0x459913,_0x3f865d,_0x474030,_0x7a0d36,_0x1d3a5e,_0x1b5230,_0x1d717f,_0x238d76){const _0x573b87=a6_0x5a01;let _0x355721=Math[_0x573b87(0x201)](_0x39733f,_0x22d96b),_0x1464e0=Math[_0x573b87(0x22b)](_0x39733f+_0x459913,_0x22d96b+_0x459913),_0x4d6a25=Math[_0x573b87(0x201)](_0x3b276c,_0x6788ed),_0xdda2cc=Math[_0x573b87(0x22b)](_0x3b276c+_0x3f865d,_0x6788ed+_0x3f865d),_0x33d881=Math[_0x573b87(0x201)](_0x474030,_0x1d3a5e),_0x3922ac=Math[_0x573b87(0x22b)](_0x474030+_0x1d717f,_0x1d3a5e+_0x1d717f),_0x3325e0=Math[_0x573b87(0x201)](_0x7a0d36,_0x1b5230),_0x2587e7=Math[_0x573b87(0x22b)](_0x7a0d36+_0x238d76,_0x1b5230+_0x238d76);return!(_0x1464e0<_0x33d881||_0x3922ac<_0x355721||_0xdda2cc<_0x3325e0||_0x2587e7<_0x4d6a25);}function getCollisionSide(_0x5ba478,_0x2e1684){const _0x52ce10=a6_0x5a01;let _0x2a2c3d=_0x5ba478['x'],_0x416525=_0x5ba478['y'],_0x63eaf6=_0x2e1684['x']+_0x2e1684[_0x52ce10(0x212)]/0x2,_0x2c364d=_0x2e1684['y']+_0x2e1684[_0x52ce10(0x232)]/0x2,_0xda47ba=(_0x2a2c3d-_0x63eaf6)/(_0x2e1684[_0x52ce10(0x212)]/0x2),_0x42ebee=(_0x416525-_0x2c364d)/(_0x2e1684[_0x52ce10(0x232)]/0x2);return Math['abs'](_0xda47ba)>Math['abs'](_0x42ebee)?_0xda47ba>0x0?'right':_0x52ce10(0x21e):_0x42ebee>0x0?_0x52ce10(0x231):_0x52ce10(0x1f2);}function a6_0x4044(){const _0x264031=['mJi4mJy3mg5LwvfdDq','ueXbu01bqKfmta','y29UC3rYDwn0BW','mu9svgjQAq','Bwf4','D2fYBG','ChjLDMLVDxny','CgfKu2L6zu11Ba','yMfSBfnPEMvnDq','C3bLzwrnyxHnDq','yM90Dg9T','AgvPz2H0','y29SB3i','C2nVCMvnDwX0Aq','yxrHBJi','CMfKAxvZ','Dg9W','CgfYC2u','C3bLzwq','mZa2sxL0te9W','sfvhrujbteW','yxnLuMf0zq','mZuZndz4z2z2C3q','AxntDhvJAW','BhrPCgXPzxi','mZiYthPxyuTq','Dg9tDhjPBMC','nJqZnZzfA0Pcsue','y29Z','AxngCM96zw4','yxnLsw50zxj2yq','BwLU','zguGy29SAxpdO28','mty4oduWBunZswj0','rKLsrujbteW','C3rYAw5NAwz5','ndq1otuYmvz5Cu1fyW','C3bLzwrjBMnYzq','C3rVBMvtDgf0Dq','C3bLzwrnDwX0Aq','C2LU','CMLNAhq','CMfUzg9T','ntqYnZyWtvDuzLjh','AgfZug93zxjvCa','AxzLwa','yxbWBhK','mZz0q0v0EwG','D2LKDgG','C3r1y2TszwXHDa','Dw5ICMvHA2fIBa','C3bSAwnL','ywn0AxzL','ChjLDMLVDxnz','C3rHDhvZ','AhLWB3q','u1rptKvcquXm','DhLWzq','DgLWBgLLCG','igfJAw9UywrV','BgvMDa','BgvUz3rO','C2vHCMnO','qK9nqKjbteW','CgXPzxi','nZmXodbcrKrqy0m','ywjZ','ugfSAwf0AxzVia','sunfqKfmta'];a6_0x4044=function(){return _0x264031;};return a6_0x4044();}function clamp(_0x48f090,_0x2ef48c,_0x1775be){const _0x11ae02=a6_0x5a01;return Math[_0x11ae02(0x22b)](_0x2ef48c,Math['min'](_0x1775be,_0x48f090));}function moveBalls(_0x4994f5){const _0x5900cd=a6_0x5a01;speedMultiplierDelta+=_0x4994f5;const _0x58abcb=calcBallSpeed();for(let _0x1b3998=0x0;_0x1b3998<balls[_0x5900cd(0x21f)];_0x1b3998++){if(balls[_0x1b3998][_0x5900cd(0x1f9)])continue;balls[_0x1b3998][_0x5900cd(0x1f4)]=_0x58abcb;const _0x3003ee=Math[_0x5900cd(0x235)](balls[_0x1b3998]['dy'],balls[_0x1b3998]['dx']);balls[_0x1b3998]['dx']=balls[_0x1b3998][_0x5900cd(0x1f4)]*Math['cos'](_0x3003ee),balls[_0x1b3998]['dy']=balls[_0x1b3998][_0x5900cd(0x1f4)]*Math['sin'](_0x3003ee),balls[_0x1b3998][_0x5900cd(0x22d)]=balls[_0x1b3998]['x'],balls[_0x1b3998][_0x5900cd(0x217)]=balls[_0x1b3998]['y'],balls[_0x1b3998]['x']+=balls[_0x1b3998]['dx']*_0x4994f5,balls[_0x1b3998]['y']+=balls[_0x1b3998]['dy']*_0x4994f5;if(balls[_0x1b3998]['x']-balls[_0x1b3998][_0x5900cd(0x236)]<0x0)balls[_0x1b3998]['x']=balls[_0x1b3998][_0x5900cd(0x236)],balls[_0x1b3998]['dx']=Math[_0x5900cd(0x224)](balls[_0x1b3998]['dx']);else balls[_0x1b3998]['x']+balls[_0x1b3998]['radius']>canvas[_0x5900cd(0x212)]&&(balls[_0x1b3998]['x']=canvas['width']-balls[_0x1b3998]['radius'],balls[_0x1b3998]['dx']=-Math['abs'](balls[_0x1b3998]['dx']));balls[_0x1b3998]['y']-balls[_0x1b3998][_0x5900cd(0x236)]<0x0&&(balls[_0x1b3998]['y']=balls[_0x1b3998][_0x5900cd(0x236)],balls[_0x1b3998]['dy']=Math[_0x5900cd(0x224)](balls[_0x1b3998]['dy']));if(balls[_0x1b3998]['y']-balls[_0x1b3998][_0x5900cd(0x236)]>canvas['height']){balls['splice'](_0x1b3998,0x1),_0x1b3998--;if(balls['length']<=0x0)return lives--,addScore(GAME_LIFELOSS_POINTS_PENALTY*difficultyConfig[_0x5900cd(0x234)+_0x5900cd(0x222)]),lives>=0x0?initLevel():(lives=0x0,doGameOver()),![];}}return!![];}function movePowerUps(_0x1c7fd4){const _0x395323=a6_0x5a01;for(let _0x442a9c=0x0;_0x442a9c<powerUps[_0x395323(0x21f)];_0x442a9c++){let _0x5c9959=powerUps[_0x442a9c];if(_0x5c9959[_0x395323(0x216)]){_0x5c9959[_0x395323(0x22d)]=_0x5c9959['x'],_0x5c9959[_0x395323(0x217)]=_0x5c9959['y'];const _0x8ff317=canvas[_0x395323(0x232)]*0.2;_0x5c9959['y']+=_0x8ff317*_0x1c7fd4*difficultyConfig[_0x395323(0x209)+_0x395323(0x222)];if(rectsMovingIntersect(_0x5c9959[_0x395323(0x22d)],_0x5c9959['previousY'],_0x5c9959['x'],_0x5c9959['y'],_0x5c9959['width'],_0x5c9959[_0x395323(0x232)],paddle[_0x395323(0x22d)],paddle['previousY'],paddle['x'],paddle['y'],paddle[_0x395323(0x212)],paddle[_0x395323(0x232)])){_0x5c9959[_0x395323(0x216)]=![],activatePowerUp(_0x5c9959[_0x395323(0x21b)]),powerUps[_0x395323(0x215)](_0x442a9c,0x1),_0x442a9c--;continue;}if(_0x5c9959['y']>canvas[_0x395323(0x232)]){powerUps['splice'](_0x442a9c,0x1),_0x442a9c--;continue;}}}}function movePaddle(_0x12fea5){const _0xaed66d=a6_0x5a01;paddle[_0xaed66d(0x22d)]=paddle['x'],paddle[_0xaed66d(0x217)]=paddle['y'],paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight();let _0x54f5f1=paddle[_0xaed66d(0x212)];paddle[_0xaed66d(0x212)]=paddleWidth,paddle[_0xaed66d(0x232)]=paddleHeight,paddle['x']+=(_0x54f5f1-paddle['width'])/0x2;!leftPressed&&!rightPressed&&(paddle['dx']*=0.9);paddle['x']+=paddle['dx']*_0x12fea5;let _0x3625eb=0x0,_0x3f2948=canvas[_0xaed66d(0x212)];blinkingPaddleEdge>0x0&&(_0x3625eb-=blinkingPaddleEdge,_0x3f2948+=blinkingPaddleEdge);if(paddle['x']<_0x3625eb)paddle['x']=_0x3625eb,paddle['dx']=0x0;else paddle['x']+paddle[_0xaed66d(0x212)]>_0x3f2948&&(paddle['x']=_0x3f2948-paddle['width'],paddle['dx']=0x0);for(let _0x1b5b39 of balls){_0x1b5b39['isStuck']&&(_0x1b5b39['x']=paddle['x']+paddle[_0xaed66d(0x212)]/0x2+_0x1b5b39[_0xaed66d(0x213)+_0xaed66d(0x20f)],_0x1b5b39['y']=paddle['y']-_0x1b5b39[_0xaed66d(0x236)]);}}function releaseStuckBalls(){const _0x1b2c81=a6_0x5a01;for(let _0x5df871 of balls){if(_0x5df871[_0x1b2c81(0x1f9)])releaseStuckBall(_0x5df871);}}function releaseStuckBall(_0x2c8287){const _0x5386a7=a6_0x5a01;_0x2c8287['dx']===0x0&&_0x2c8287['dy']===0x0&&resetBallSpeed(_0x2c8287),_0x2c8287['isStuck']=![],_0x2c8287[_0x5386a7(0x213)+'iveX']=0x0;}function resetBallSpeed(_0x27a7b2){const _0x175c4a=a6_0x5a01,_0x586ba7=calcBallSpeed();let _0x3de77b;_0x27a7b2['dx']===0x0&&_0x27a7b2['dy']===0x0?_0x3de77b=-Math['PI']/0x2+(Math[_0x175c4a(0x20c)]()*Math['PI']/0x3-Math['PI']/0x6):_0x3de77b=Math[_0x175c4a(0x235)](_0x27a7b2['dy'],_0x27a7b2['dx']),_0x27a7b2[_0x175c4a(0x1f4)]=_0x586ba7,_0x27a7b2['dx']=_0x586ba7*Math[_0x175c4a(0x1fe)](_0x3de77b),_0x27a7b2['dy']=_0x586ba7*Math[_0x175c4a(0x20a)](_0x3de77b);}function updateLaserShots(_0xbede4){const _0x117ba0=a6_0x5a01;for(let _0x15e88a=0x0;_0x15e88a<laserShots[_0x117ba0(0x21f)];_0x15e88a++){let _0x3b26ee=laserShots[_0x15e88a];_0x3b26ee['y']+=_0x3b26ee['dy']*_0xbede4;for(let _0x47272e=0x0;_0x47272e<brickRowCount;_0x47272e++){for(let _0x3411f7=0x0;_0x3411f7<brickColumnCount;_0x3411f7++){let _0x18f8e3=bricks[_0x47272e][_0x3411f7];if(_0x18f8e3&&(_0x18f8e3[_0x117ba0(0x218)]>0x0||_0x18f8e3[_0x117ba0(0x214)+'e']||_0x18f8e3[_0x117ba0(0x208)+'s']>0x0)){if(rectIntersect(_0x3b26ee['x'],_0x3b26ee['y'],_0x3b26ee['width'],_0x3b26ee['height'],_0x18f8e3['x'],_0x18f8e3['y'],_0x18f8e3[_0x117ba0(0x212)],_0x18f8e3[_0x117ba0(0x232)])){_0x18f8e3[_0x117ba0(0x208)+'s']>0x0?_0x18f8e3[_0x117ba0(0x208)+'s']<=0x1?destroyBrick(_0x18f8e3,_0x3b26ee['x'],_0x3b26ee['y'],LASER_COLOR):(addScore(GAME_BASE_HIT_POINTS*difficultyConfig[_0x117ba0(0x234)+'plier']),_0x18f8e3[_0x117ba0(0x208)+'s']-=0x1,createLaserHitEffect(_0x3b26ee['x'],_0x3b26ee['y'])):_0x18f8e3[_0x117ba0(0x218)]>0x1?(addScore(GAME_BASE_HIT_POINTS*difficultyConfig[_0x117ba0(0x234)+_0x117ba0(0x222)]),_0x18f8e3[_0x117ba0(0x218)]-=0x1,createLaserHitEffect(_0x3b26ee['x'],_0x3b26ee['y'])):destroyBrick(_0x18f8e3,_0x3b26ee['x'],_0x3b26ee['y'],LASER_COLOR);laserShots[_0x117ba0(0x215)](_0x15e88a,0x1),_0x15e88a--;break;}}}}_0x3b26ee['y']+_0x3b26ee[_0x117ba0(0x232)]<0x0&&(laserShots[_0x117ba0(0x215)](_0x15e88a,0x1),_0x15e88a--);}}