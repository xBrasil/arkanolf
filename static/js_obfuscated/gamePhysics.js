(function(_0x40c95e,_0x1b5317){const _0x560363=a6_0x4c48,_0x59d43e=_0x40c95e();while(!![]){try{const _0x32ae12=parseInt(_0x560363(0x1e2))/0x1+parseInt(_0x560363(0x1db))/0x2+parseInt(_0x560363(0x1d4))/0x3*(parseInt(_0x560363(0x1be))/0x4)+-parseInt(_0x560363(0x1bf))/0x5+parseInt(_0x560363(0x1cf))/0x6+parseInt(_0x560363(0x1c0))/0x7+parseInt(_0x560363(0x1cb))/0x8*(-parseInt(_0x560363(0x1bd))/0x9);if(_0x32ae12===_0x1b5317)break;else _0x59d43e['push'](_0x59d43e['shift']());}catch(_0x57dafb){_0x59d43e['push'](_0x59d43e['shift']());}}}(a6_0x50c3,0xd723a));function a6_0x4c48(_0x396a7b,_0xc848b7){const _0x385d1f=a6_0x50c3();return a6_0x4c48=function(_0x39dfbb,_0xcb6931){_0x39dfbb=_0x39dfbb-0x1ba;let _0x50c3bd=_0x385d1f[_0x39dfbb];return _0x50c3bd;},a6_0x4c48(_0x396a7b,_0xc848b7);}const a6_0xcb6931=(function(){let _0x14580d=!![];return function(_0x920848,_0x5775ad){const _0x215fa3=_0x14580d?function(){const _0x36c9bf=a6_0x4c48;if(_0x5775ad){const _0x200a5c=_0x5775ad[_0x36c9bf(0x1d7)](_0x920848,arguments);return _0x5775ad=null,_0x200a5c;}}:function(){};return _0x14580d=![],_0x215fa3;};}()),a6_0x39dfbb=a6_0xcb6931(this,function(){const _0x134332=a6_0x4c48;return a6_0x39dfbb[_0x134332(0x1c2)]()[_0x134332(0x1d1)]('(((.+)+)+)+$')[_0x134332(0x1c2)]()[_0x134332(0x1d3)](a6_0x39dfbb)['search']('(((.+)+)+)+$');});a6_0x39dfbb();function lineIntersectsRect(_0x1afa2b,_0x234bea,_0x38e1af,_0x37182b,_0x319402,_0x368623,_0x1be2ed,_0x25f588){return lineIntersectsLine(_0x1afa2b,_0x234bea,_0x38e1af,_0x37182b,_0x319402,_0x368623,_0x319402+_0x1be2ed,_0x368623)||lineIntersectsLine(_0x1afa2b,_0x234bea,_0x38e1af,_0x37182b,_0x319402,_0x368623,_0x319402,_0x368623+_0x25f588)||lineIntersectsLine(_0x1afa2b,_0x234bea,_0x38e1af,_0x37182b,_0x319402+_0x1be2ed,_0x368623,_0x319402+_0x1be2ed,_0x368623+_0x25f588)||lineIntersectsLine(_0x1afa2b,_0x234bea,_0x38e1af,_0x37182b,_0x319402,_0x368623+_0x25f588,_0x319402+_0x1be2ed,_0x368623+_0x25f588);}function lineIntersectsLine(_0x119eb9,_0x177194,_0x405752,_0x406109,_0x54f066,_0x8ab54a,_0x18ac17,_0x5c2434){let _0x11fd9c=(_0x5c2434-_0x8ab54a)*(_0x405752-_0x119eb9)-(_0x18ac17-_0x54f066)*(_0x406109-_0x177194);if(_0x11fd9c===0x0)return![];let _0x2df023=((_0x18ac17-_0x54f066)*(_0x177194-_0x8ab54a)-(_0x5c2434-_0x8ab54a)*(_0x119eb9-_0x54f066))/_0x11fd9c,_0x3df2be=((_0x405752-_0x119eb9)*(_0x177194-_0x8ab54a)-(_0x406109-_0x177194)*(_0x119eb9-_0x54f066))/_0x11fd9c;return _0x2df023>=0x0&&_0x2df023<=0x1&&_0x3df2be>=0x0&&_0x3df2be<=0x1;}function circleIntersectsRectangle(_0x7a905b,_0x306f70,_0x47b696,_0x540a51,_0xc5e37e,_0x56cbe7,_0x5a26f3,_0x104dc5,_0x1e1dc4){const _0x2d6e87=clamp(_0x47b696,_0x56cbe7,_0x56cbe7+_0x104dc5),_0x551ae6=clamp(_0x540a51,_0x5a26f3,_0x5a26f3+_0x1e1dc4),_0x5c6bbc=_0x47b696-_0x2d6e87,_0x57b70a=_0x540a51-_0x551ae6,_0x3c3029=_0x5c6bbc*_0x5c6bbc+_0x57b70a*_0x57b70a;return _0x3c3029<_0xc5e37e*_0xc5e37e;}function collisionDetection(){const _0x2cf5f0=a6_0x4c48;for(let _0x478902 of balls){let _0x3af942=_0x478902[_0x2cf5f0(0x1cd)],_0x2e61a6=_0x478902[_0x2cf5f0(0x1c5)],_0x582396=_0x478902[_0x2cf5f0(0x1dc)];for(let _0x1f6f3d=0x0;_0x1f6f3d<brickRowCount;_0x1f6f3d++){for(let _0x3cb8a4=0x0;_0x3cb8a4<brickColumnCount;_0x3cb8a4++){let _0x524ae8=bricks[_0x1f6f3d][_0x3cb8a4];if(_0x524ae8&&(_0x524ae8['status']>0x0||_0x524ae8['unbreakable'])){if(circleIntersectsRectangle(_0x3af942,_0x2e61a6,_0x478902['x'],_0x478902['y'],_0x582396,_0x524ae8['x'],_0x524ae8['y'],_0x524ae8['width'],_0x524ae8[_0x2cf5f0(0x1bc)])){let _0x19452d=getCollisionSide(_0x478902,_0x524ae8),_0x3ae7dc=![];if(_0x524ae8[_0x2cf5f0(0x1cc)]&&!_0x478902[_0x2cf5f0(0x1d8)])_0x3ae7dc=!![];else!_0x478902[_0x2cf5f0(0x1ba)]&&!_0x478902[_0x2cf5f0(0x1d8)]&&(_0x3ae7dc=!![]);if(_0x3ae7dc){_0x478902['x']=_0x3af942,_0x478902['y']=_0x2e61a6;if(_0x19452d==='top')_0x478902['dy']=-Math[_0x2cf5f0(0x1bb)](_0x478902['dy']),_0x478902['y']=_0x524ae8['y']-_0x478902[_0x2cf5f0(0x1dc)];else{if(_0x19452d===_0x2cf5f0(0x1c9))_0x478902['dy']=Math['abs'](_0x478902['dy']),_0x478902['y']=_0x524ae8['y']+_0x524ae8['height']+_0x478902[_0x2cf5f0(0x1dc)];else{if(_0x19452d===_0x2cf5f0(0x1da))_0x478902['dx']=-Math[_0x2cf5f0(0x1bb)](_0x478902['dx']),_0x478902['x']=_0x524ae8['x']-_0x478902[_0x2cf5f0(0x1dc)];else _0x19452d===_0x2cf5f0(0x1e0)&&(_0x478902['dx']=Math[_0x2cf5f0(0x1bb)](_0x478902['dx']),_0x478902['x']=_0x524ae8['x']+_0x524ae8[_0x2cf5f0(0x1dd)]+_0x478902[_0x2cf5f0(0x1dc)]);}}}if(_0x524ae8[_0x2cf5f0(0x1cc)]&&!_0x478902['isPlasmaball']){}else{if(_0x478902[_0x2cf5f0(0x1ba)]||_0x478902[_0x2cf5f0(0x1d8)]){const _0x32bd60=GAME_BASE_HIT_POINTS*_0x524ae8[_0x2cf5f0(0x1c3)]*difficultyConfig[_0x2cf5f0(0x1c6)];_0x524ae8[_0x2cf5f0(0x1de)]&&(addScore(GAME_POWERUP_HIT_POINTS*difficultyConfig[_0x2cf5f0(0x1c6)]),generatePowerUp(_0x524ae8['x']+_0x524ae8[_0x2cf5f0(0x1dd)]/0x2,_0x524ae8['y']+_0x524ae8[_0x2cf5f0(0x1bc)]/0x2));addScore(_0x32bd60),_0x524ae8[_0x2cf5f0(0x1c3)]=0x0,_0x524ae8[_0x2cf5f0(0x1cc)]=![],_0x524ae8[_0x2cf5f0(0x1de)]=![],createParticles(_0x478902['x'],_0x478902['y']);if(checkWin()){doLevelCompleted();return;}}else{if(_0x524ae8[_0x2cf5f0(0x1c3)]>0x1)_0x524ae8['status']-=0x1,addScore(GAME_BASE_HIT_POINTS*difficultyConfig['scoreMultiplier']*_0x524ae8[_0x2cf5f0(0x1c3)]);else{_0x524ae8['status']=0x0;_0x524ae8[_0x2cf5f0(0x1de)]?(generatePowerUp(_0x524ae8['x']+_0x524ae8['width']/0x2,_0x524ae8['y']+_0x524ae8[_0x2cf5f0(0x1bc)]/0x2),addScore(GAME_POWERUP_HIT_POINTS*difficultyConfig['scoreMultiplier'])):addScore(GAME_BASE_HIT_POINTS*difficultyConfig[_0x2cf5f0(0x1c6)]);createParticles(_0x478902['x'],_0x478902['y']);if(checkWin()){doLevelCompleted();return;}}}}if(_0x3ae7dc||_0x478902[_0x2cf5f0(0x1ba)]||_0x478902[_0x2cf5f0(0x1d8)])break;else continue;}}}}if(_0x478902['dy']>0x0&&circleIntersectsRectangle(_0x3af942,_0x2e61a6,_0x478902['x'],_0x478902['y'],_0x478902[_0x2cf5f0(0x1dc)],paddle['x'],paddle['y'],paddle[_0x2cf5f0(0x1dd)],paddle[_0x2cf5f0(0x1bc)])){_0x478902['x']=_0x3af942,_0x478902['y']=_0x2e61a6;let _0x14b116=(_0x478902['x']-(paddle['x']+paddle[_0x2cf5f0(0x1dd)]/0x2))/(paddle[_0x2cf5f0(0x1dd)]/0x2);_0x14b116=clamp(_0x14b116,-0x1,0x1);let _0x23064f=_0x14b116*(Math['PI']/0x3);_0x478902['dx']=_0x478902[_0x2cf5f0(0x1c4)]*Math[_0x2cf5f0(0x1ca)](_0x23064f),_0x478902['dy']=-Math[_0x2cf5f0(0x1bb)](_0x478902['speed']*Math[_0x2cf5f0(0x1d9)](_0x23064f)),_0x478902['y']=paddle['y']-_0x478902['radius'],vibrate(0x64);}for(let _0x1c49de=0x0;_0x1c49de<brickRowCount;_0x1c49de++){for(let _0x1a3db9=0x0;_0x1a3db9<brickColumnCount;_0x1a3db9++){let _0x231582=bricks[_0x1c49de][_0x1a3db9];if(_0x231582&&_0x231582['unbreakable']){if(circleIntersectsRectangle(_0x478902['x'],_0x478902['y'],_0x478902['radius'],_0x231582['x'],_0x231582['y'],_0x231582['width'],_0x231582[_0x2cf5f0(0x1bc)])){let _0x1e7f6d=getCollisionSide(_0x478902,_0x231582);if(_0x1e7f6d===_0x2cf5f0(0x1c1))_0x478902['dy']=-Math['abs'](_0x478902['dy']),_0x478902['y']=_0x231582['y']-_0x478902['radius'];else{if(_0x1e7f6d==='bottom')_0x478902['dy']=Math[_0x2cf5f0(0x1bb)](_0x478902['dy']),_0x478902['y']=_0x231582['y']+_0x231582[_0x2cf5f0(0x1bc)]+_0x478902[_0x2cf5f0(0x1dc)];else{if(_0x1e7f6d===_0x2cf5f0(0x1da))_0x478902['dx']=-Math[_0x2cf5f0(0x1bb)](_0x478902['dx']),_0x478902['x']=_0x231582['x']-_0x478902[_0x2cf5f0(0x1dc)];else _0x1e7f6d===_0x2cf5f0(0x1e0)&&(_0x478902['dx']=Math['abs'](_0x478902['dx']),_0x478902['x']=_0x231582['x']+_0x231582[_0x2cf5f0(0x1dd)]+_0x478902[_0x2cf5f0(0x1dc)]);}}}}}}}}function clone(_0x59a757){const _0x4d34a3=a6_0x4c48;return JSON[_0x4d34a3(0x1df)](JSON[_0x4d34a3(0x1ce)](_0x59a757));}function normalize(_0x2e0b19,_0x3a076e){const _0x521cd8=a6_0x4c48;let _0x3a22bd=Math[_0x521cd8(0x1c8)](_0x2e0b19,_0x3a076e);if(_0x3a22bd===0x0)return{'dx':0x0,'dy':0x0};return{'dx':_0x2e0b19/_0x3a22bd,'dy':_0x3a076e/_0x3a22bd};}function ballCollisionDetection(){const _0x5d4372=a6_0x4c48;for(let _0x18809c=0x0;_0x18809c<balls[_0x5d4372(0x1d2)];_0x18809c++){for(let _0x869d96=_0x18809c+0x1;_0x869d96<balls['length'];_0x869d96++){let _0x2f3640=balls[_0x18809c],_0x3f11a9=balls[_0x869d96],_0x5c718b=_0x3f11a9['x']-_0x2f3640['x'],_0x14ad5e=_0x3f11a9['y']-_0x2f3640['y'],_0x450610=Math[_0x5d4372(0x1c8)](_0x5c718b,_0x14ad5e),_0xcb6d79=_0x2f3640[_0x5d4372(0x1dc)]+_0x3f11a9['radius'];if(_0x450610<_0xcb6d79){let {dx:_0xabed99,dy:_0x57e7e7}=normalize(_0x5c718b,_0x14ad5e),_0x2bb60b=_0xcb6d79-_0x450610;_0x2f3640['x']-=_0xabed99*(_0x2bb60b/0x2),_0x2f3640['y']-=_0x57e7e7*(_0x2bb60b/0x2),_0x3f11a9['x']+=_0xabed99*(_0x2bb60b/0x2),_0x3f11a9['y']+=_0x57e7e7*(_0x2bb60b/0x2);let _0x285585=_0x2f3640['dx']*_0xabed99+_0x2f3640['dy']*_0x57e7e7,_0x4608a0=_0x3f11a9['dx']*_0xabed99+_0x3f11a9['dy']*_0x57e7e7,_0x114921=_0x285585;_0x285585=_0x4608a0,_0x4608a0=_0x114921,_0x2f3640['dx']+=(_0x285585-(_0x2f3640['dx']*_0xabed99+_0x2f3640['dy']*_0x57e7e7))*_0xabed99,_0x2f3640['dy']+=(_0x285585-(_0x2f3640['dx']*_0xabed99+_0x2f3640['dy']*_0x57e7e7))*_0x57e7e7,_0x3f11a9['dx']+=(_0x4608a0-(_0x3f11a9['dx']*_0xabed99+_0x3f11a9['dy']*_0x57e7e7))*_0xabed99,_0x3f11a9['dy']+=(_0x4608a0-(_0x3f11a9['dx']*_0xabed99+_0x3f11a9['dy']*_0x57e7e7))*_0x57e7e7;let _0x5cb376=Math[_0x5d4372(0x1c8)](_0x2f3640['dx'],_0x2f3640['dy']),_0x511cfa=Math[_0x5d4372(0x1c8)](_0x3f11a9['dx'],_0x3f11a9['dy']);_0x5cb376>0x0&&(_0x2f3640['dx']=_0x2f3640['dx']/_0x5cb376*_0x2f3640[_0x5d4372(0x1c4)],_0x2f3640['dy']=_0x2f3640['dy']/_0x5cb376*_0x2f3640[_0x5d4372(0x1c4)]),_0x511cfa>0x0&&(_0x3f11a9['dx']=_0x3f11a9['dx']/_0x511cfa*_0x3f11a9[_0x5d4372(0x1c4)],_0x3f11a9['dy']=_0x3f11a9['dy']/_0x511cfa*_0x3f11a9[_0x5d4372(0x1c4)]);}}}for(let _0x57dbb7=0x0;_0x57dbb7<balls['length'];_0x57dbb7++){for(let _0x319200=_0x57dbb7+0x1;_0x319200<balls[_0x5d4372(0x1d2)];_0x319200++){let _0x2b84ae=balls[_0x57dbb7],_0x3cf01e=balls[_0x319200],_0x4f4a85=_0x3cf01e['x']-_0x2b84ae['x'],_0xc88eaa=_0x3cf01e['y']-_0x2b84ae['y'],_0x304b1f=Math[_0x5d4372(0x1c8)](_0x4f4a85,_0xc88eaa),_0x57fc1b=_0x2b84ae[_0x5d4372(0x1dc)]+_0x3cf01e['radius'];if(_0x304b1f<_0x57fc1b){let {dx:_0xc65354,dy:_0x4ba25c}=normalize(_0x4f4a85,_0xc88eaa),_0x10eb62=_0x57fc1b-_0x304b1f;_0x2b84ae['x']-=_0xc65354*(_0x10eb62/0x2),_0x2b84ae['y']-=_0x4ba25c*(_0x10eb62/0x2),_0x3cf01e['x']+=_0xc65354*(_0x10eb62/0x2),_0x3cf01e['y']+=_0x4ba25c*(_0x10eb62/0x2);}}}}function rectsMovingIntersect(_0x2e6252,_0x33b411,_0x382c5b,_0x314045,_0x5ea900,_0x16537b,_0x48170c,_0x304753,_0x1f2343,_0x1ac5dd,_0x2b6b2f,_0x1f8384){const _0x2cb1ec=a6_0x4c48;let _0x4ccfff=Math['min'](_0x2e6252,_0x382c5b),_0x595ec6=Math['max'](_0x2e6252+_0x5ea900,_0x382c5b+_0x5ea900),_0x10bc17=Math['min'](_0x33b411,_0x314045),_0x57e83a=Math['max'](_0x33b411+_0x16537b,_0x314045+_0x16537b),_0x4013e7=Math[_0x2cb1ec(0x1d5)](_0x48170c,_0x1f2343),_0x5dd5fd=Math[_0x2cb1ec(0x1d6)](_0x48170c+_0x2b6b2f,_0x1f2343+_0x2b6b2f),_0x52d79b=Math['min'](_0x304753,_0x1ac5dd),_0x13b6c1=Math['max'](_0x304753+_0x1f8384,_0x1ac5dd+_0x1f8384);return!(_0x595ec6<_0x4013e7||_0x5dd5fd<_0x4ccfff||_0x57e83a<_0x52d79b||_0x13b6c1<_0x10bc17);}function a6_0x50c3(){const _0x266ada=['previousY','scoreMultiplier','gameOver','hypot','bottom','sin','8UlGKUr','unbreakable','previousX','stringify','10264758rHuVjp','splice','search','length','constructor','3710094lllfNZ','min','max','apply','isPlasmaball','cos','left','330394ieIkpL','radius','width','hasPowerUp','parse','right','type','137839LJuJub','isFireball','abs','height','12680946LBPURw','4ADCsPo','6103745oyIeHx','1822982MUGjPE','top','toString','status','speed'];a6_0x50c3=function(){return _0x266ada;};return a6_0x50c3();}function getCollisionSide(_0x5b36a6,_0x2effcc){const _0x307308=a6_0x4c48;let _0x5792a8=_0x5b36a6['x'],_0x1df36f=_0x5b36a6['y'],_0x29ac15=_0x2effcc['x']+_0x2effcc[_0x307308(0x1dd)]/0x2,_0x52ea66=_0x2effcc['y']+_0x2effcc[_0x307308(0x1bc)]/0x2,_0x15c10f=(_0x5792a8-_0x29ac15)/(_0x2effcc['width']/0x2),_0x42f180=(_0x1df36f-_0x52ea66)/(_0x2effcc[_0x307308(0x1bc)]/0x2);return Math[_0x307308(0x1bb)](_0x15c10f)>Math[_0x307308(0x1bb)](_0x42f180)?_0x15c10f>0x0?_0x307308(0x1e0):_0x307308(0x1da):_0x42f180>0x0?_0x307308(0x1c9):_0x307308(0x1c1);}function clamp(_0x53ade7,_0x117c9b,_0x57d000){const _0x2914cf=a6_0x4c48;return Math[_0x2914cf(0x1d6)](_0x117c9b,Math['min'](_0x57d000,_0x53ade7));}function moveBalls(_0x4091f4){const _0x5e87b2=a6_0x4c48;speedMultiplierDelta+=_0x4091f4;for(let _0x52079a=0x0;_0x52079a<balls[_0x5e87b2(0x1d2)];_0x52079a++){let _0x5a9265=balls[_0x52079a];_0x5a9265[_0x5e87b2(0x1cd)]=_0x5a9265['x'],_0x5a9265[_0x5e87b2(0x1c5)]=_0x5a9265['y'],_0x5a9265['x']+=_0x5a9265['dx']*_0x4091f4,_0x5a9265['y']+=_0x5a9265['dy']*_0x4091f4;if(_0x5a9265['x']-_0x5a9265[_0x5e87b2(0x1dc)]<0x0)_0x5a9265['x']=_0x5a9265[_0x5e87b2(0x1dc)],_0x5a9265['dx']=Math[_0x5e87b2(0x1bb)](_0x5a9265['dx']);else _0x5a9265['x']+_0x5a9265[_0x5e87b2(0x1dc)]>canvas[_0x5e87b2(0x1dd)]&&(_0x5a9265['x']=canvas['width']-_0x5a9265[_0x5e87b2(0x1dc)],_0x5a9265['dx']=-Math[_0x5e87b2(0x1bb)](_0x5a9265['dx']));_0x5a9265['y']-_0x5a9265[_0x5e87b2(0x1dc)]<0x0&&(_0x5a9265['y']=_0x5a9265['radius'],_0x5a9265['dy']=Math[_0x5e87b2(0x1bb)](_0x5a9265['dy']));if(_0x5a9265['y']-_0x5a9265['radius']>canvas[_0x5e87b2(0x1bc)]){balls[_0x5e87b2(0x1d0)](_0x52079a,0x1),_0x52079a--;if(balls[_0x5e87b2(0x1d2)]<=0x0)return lives--,addScore(GAME_LIFELOSS_POINTS_PENALTY*difficultyConfig[_0x5e87b2(0x1c6)]),lives>0x0?initLevel():gameState=_0x5e87b2(0x1c7),![];}}return!![];}function movePowerUps(_0x5d978d){const _0x2af8c1=a6_0x4c48;for(let _0x377310=0x0;_0x377310<powerUps[_0x2af8c1(0x1d2)];_0x377310++){let _0x1dcc7a=powerUps[_0x377310];if(_0x1dcc7a['active']){_0x1dcc7a['previousX']=_0x1dcc7a['x'],_0x1dcc7a[_0x2af8c1(0x1c5)]=_0x1dcc7a['y'];const _0xf43e5=canvas[_0x2af8c1(0x1bc)]*0.2;_0x1dcc7a['y']+=_0xf43e5*_0x5d978d*difficultyConfig['speedMultiplier'];if(rectsMovingIntersect(_0x1dcc7a[_0x2af8c1(0x1cd)],_0x1dcc7a[_0x2af8c1(0x1c5)],_0x1dcc7a['x'],_0x1dcc7a['y'],_0x1dcc7a[_0x2af8c1(0x1dd)],_0x1dcc7a[_0x2af8c1(0x1bc)],paddle['previousX'],paddle[_0x2af8c1(0x1c5)],paddle['x'],paddle['y'],paddle[_0x2af8c1(0x1dd)],paddle[_0x2af8c1(0x1bc)])){_0x1dcc7a['active']=![],activatePowerUp(_0x1dcc7a[_0x2af8c1(0x1e1)]),powerUps['splice'](_0x377310,0x1),_0x377310--;continue;}if(_0x1dcc7a['y']>canvas[_0x2af8c1(0x1bc)]){powerUps[_0x2af8c1(0x1d0)](_0x377310,0x1),_0x377310--;continue;}}}}function movePaddle(_0x33886f){const _0x4acdae=a6_0x4c48;paddle['previousX']=paddle['x'],paddle[_0x4acdae(0x1c5)]=paddle['y'],paddleWidth=calcPaddleWidth(),paddleHeight=calcPaddleHeight();let _0x3cc400=paddle[_0x4acdae(0x1dd)];paddle[_0x4acdae(0x1dd)]=paddleWidth,paddle['height']=paddleHeight,paddle['x']+=(_0x3cc400-paddle[_0x4acdae(0x1dd)])/0x2;!leftPressed&&!rightPressed&&(paddle['dx']*=0.9);paddle['x']+=paddle['dx']*_0x33886f;if(paddle['x']<0x0)paddle['x']=0x0,paddle['dx']=0x0;else paddle['x']+paddle[_0x4acdae(0x1dd)]>canvas[_0x4acdae(0x1dd)]&&(paddle['x']=canvas[_0x4acdae(0x1dd)]-paddle[_0x4acdae(0x1dd)],paddle['dx']=0x0);if(isInitialBall)positionInitialBall();}