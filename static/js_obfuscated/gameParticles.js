(function(_0x12f131,_0x57d74b){const _0x48330d=a5_0x5b91,_0x1e401a=_0x12f131();while(!![]){try{const _0x1c2d45=parseInt(_0x48330d(0xdc))/0x1*(-parseInt(_0x48330d(0xd2))/0x2)+parseInt(_0x48330d(0xee))/0x3*(-parseInt(_0x48330d(0xd0))/0x4)+-parseInt(_0x48330d(0xc5))/0x5*(-parseInt(_0x48330d(0xcb))/0x6)+parseInt(_0x48330d(0xe7))/0x7+-parseInt(_0x48330d(0xe8))/0x8+parseInt(_0x48330d(0xd8))/0x9+parseInt(_0x48330d(0xc1))/0xa;if(_0x1c2d45===_0x57d74b)break;else _0x1e401a['push'](_0x1e401a['shift']());}catch(_0x5177b7){_0x1e401a['push'](_0x1e401a['shift']());}}}(a5_0x3cf4,0x76935));function a5_0x3cf4(){const _0x13882e=['rgba(0,\x20255,\x200,\x20','3235435dUmdUC','4473800AHLfOm','apply','closePath','size','length','credits','18CnvgsX','addColorStop','toString','random','683450lcizuS','radius','rgba(255,\x20255,\x20255,\x200)','arc','5WIROFI','rgba(100,\x20100,\x20100,\x20','height','gameCompleted','splice','beginPath','4750806tlmdpJ','gameOver','life','Erro\x20ao\x20criar\x20gradiente\x20radial:','fill','157756xvwRiH','alpha','51854oFzPIW','rgba(255,\x20255,\x20255,','color','initialLife','levelSelection','createRadialGradient','6399684airHvc','error','fillStyle','floor','29XstpDK','rgba(255','rgba(255,\x20255,\x20255,\x20','width','search','startsWith','(((.+)+)+)+$','rgba(100,\x20100,\x20100,\x200.5)','push','constructor'];a5_0x3cf4=function(){return _0x13882e;};return a5_0x3cf4();}const a5_0x24154b=(function(){let _0x1a8d6e=!![];return function(_0x286e32,_0x383637){const _0x445522=_0x1a8d6e?function(){const _0x1779ec=a5_0x5b91;if(_0x383637){const _0xf52867=_0x383637[_0x1779ec(0xe9)](_0x286e32,arguments);return _0x383637=null,_0xf52867;}}:function(){};return _0x1a8d6e=![],_0x445522;};}()),a5_0x36cc0c=a5_0x24154b(this,function(){const _0x349964=a5_0x5b91;return a5_0x36cc0c[_0x349964(0xf0)]()[_0x349964(0xe0)](_0x349964(0xe2))[_0x349964(0xf0)]()[_0x349964(0xe5)](a5_0x36cc0c)[_0x349964(0xe0)](_0x349964(0xe2));});a5_0x36cc0c();let introParticles=[],particles=[];const PARTICLE_SPEED=0xc8,PARTICLE_LIFE=0.5;let fireParticles=[];const FIRE_PARTICLE_SPEED=0xc8,FIRE_PARTICLE_LIFE=0.5,FIRE_PARTICLE_SIZE=0x6;let menuParticles=[];const MENU_PARTICLE_SPEED=0x64,PLASMA_PARTICLE_SPEED=0x96,PLASMA_PARTICLE_LIFE=0.5,PLASMA_PARTICLE_SIZE=0x4;function createParticles(_0x51adf2,_0x209744){const _0x4a63c3=a5_0x5b91;for(let _0x35b216=0x0;_0x35b216<0xa;_0x35b216++){particles[_0x4a63c3(0xe4)]({'x':_0x51adf2,'y':_0x209744,'dx':(Math[_0x4a63c3(0xf1)]()*0x2-0x1)*PARTICLE_SPEED,'dy':(Math['random']()*0x2-0x1)*PARTICLE_SPEED,'life':PARTICLE_LIFE});}}function updateParticles(_0x4cd610){const _0x55cf45=a5_0x5b91;for(let _0x25b4d5=0x0;_0x25b4d5<particles[_0x55cf45(0xec)];_0x25b4d5++){let _0x9d9bbd=particles[_0x25b4d5];_0x9d9bbd['x']+=_0x9d9bbd['dx']*_0x4cd610,_0x9d9bbd['y']+=_0x9d9bbd['dy']*_0x4cd610,_0x9d9bbd[_0x55cf45(0xcd)]-=_0x4cd610,_0x9d9bbd['life']<=0x0&&(particles[_0x55cf45(0xc9)](_0x25b4d5,0x1),_0x25b4d5--);}updateFireParticles(_0x4cd610);}function drawParticles(){const _0x460084=a5_0x5b91,_0x2f2cb0=isMobileUserAgent()?0x1:0x3;for(let _0x3a7855 of particles){ctx[_0x460084(0xca)](),ctx[_0x460084(0xc4)](_0x3a7855['x'],_0x3a7855['y'],_0x2f2cb0,0x0,Math['PI']*0x2),ctx[_0x460084(0xda)]=_0x460084(0xde)+_0x3a7855['life']/PARTICLE_LIFE+')',ctx[_0x460084(0xcf)](),ctx[_0x460084(0xea)]();}}function createIntroParticles(){const _0x1a4dcd=a5_0x5b91,_0x27ea5a=isMobileUserAgent()?0x14:0x64;for(let _0x1331d4=0x0;_0x1331d4<_0x27ea5a;_0x1331d4++){introParticles[_0x1a4dcd(0xe4)]({'x':Math[_0x1a4dcd(0xf1)]()*canvas[_0x1a4dcd(0xdf)],'y':Math[_0x1a4dcd(0xf1)]()*canvas['height'],'dx':(Math[_0x1a4dcd(0xf1)]()-0.5)*0x2,'dy':(Math['random']()-0.5)*0x2,'radius':Math[_0x1a4dcd(0xf1)]()*0x2+0x1,'alpha':Math['random']()});}}function updateIntroParticles(_0x29edd5){const _0xd01611=a5_0x5b91;for(let _0x1119ff of introParticles){_0x1119ff['x']+=_0x1119ff['dx']*_0x29edd5*0x3c,_0x1119ff['y']+=_0x1119ff['dy']*_0x29edd5*0x3c;if(_0x1119ff['x']<0x0||_0x1119ff['x']>canvas['width'])_0x1119ff['dx']*=-0x1;if(_0x1119ff['y']<0x0||_0x1119ff['y']>canvas[_0xd01611(0xc7)])_0x1119ff['dy']*=-0x1;}}function drawIntroParticles(){const _0x41e906=a5_0x5b91;for(let _0x561d01 of introParticles){ctx[_0x41e906(0xca)](),ctx['arc'](_0x561d01['x'],_0x561d01['y'],_0x561d01['radius'],0x0,Math['PI']*0x2),ctx[_0x41e906(0xda)]=_0x41e906(0xd3)+_0x561d01[_0x41e906(0xd1)]+')',ctx['fill']();}}function createMenuParticles(){const _0x11dca8=a5_0x5b91,_0x5477c7=isMobileUserAgent()?0x14:0x64;for(let _0x3e393c=0x0;_0x3e393c<_0x5477c7;_0x3e393c++){menuParticles[_0x11dca8(0xe4)]({'x':Math[_0x11dca8(0xf1)]()*canvas[_0x11dca8(0xdf)],'y':Math[_0x11dca8(0xf1)]()*canvas[_0x11dca8(0xc7)],'dx':(Math[_0x11dca8(0xf1)]()*0x2-0x1)*MENU_PARTICLE_SPEED,'dy':(Math[_0x11dca8(0xf1)]()*0x2-0x1)*MENU_PARTICLE_SPEED,'radius':Math[_0x11dca8(0xf1)]()*0x3+0x1,'alpha':Math[_0x11dca8(0xf1)]()*0.5+0.5});}}function updateMenuParticles(_0x4c9150){const _0x5f57e1=a5_0x5b91;for(let _0x3d8881=0x0;_0x3d8881<menuParticles[_0x5f57e1(0xec)];_0x3d8881++){let _0x190f1e=menuParticles[_0x3d8881];_0x190f1e['x']+=_0x190f1e['dx']*_0x4c9150,_0x190f1e['y']+=_0x190f1e['dy']*_0x4c9150,_0x190f1e[_0x5f57e1(0xcd)]-=_0x4c9150;if(_0x190f1e['x']<0x0||_0x190f1e['x']>canvas[_0x5f57e1(0xdf)])_0x190f1e['dx']*=-0x1;if(_0x190f1e['y']<0x0||_0x190f1e['y']>canvas[_0x5f57e1(0xc7)])_0x190f1e['dy']*=-0x1;}}function a5_0x5b91(_0x59ed10,_0x23398c){const _0x5ced10=a5_0x3cf4();return a5_0x5b91=function(_0x36cc0c,_0x24154b){_0x36cc0c=_0x36cc0c-0xc1;let _0x3cf404=_0x5ced10[_0x36cc0c];return _0x3cf404;},a5_0x5b91(_0x59ed10,_0x23398c);}function drawMenuParticles(){const _0x36000d=a5_0x5b91;for(let _0x257ddc of menuParticles){if(!isFinite(_0x257ddc['x'])||!isFinite(_0x257ddc['y'])||!isFinite(_0x257ddc['radius']))continue;ctx['beginPath'](),ctx[_0x36000d(0xc4)](_0x257ddc['x'],_0x257ddc['y'],_0x257ddc[_0x36000d(0xc2)],0x0,Math['PI']*0x2);let _0x261de7;if(gameState===_0x36000d(0xcc))_0x261de7='rgba(255,\x200,\x200,\x20'+_0x257ddc['alpha']+')';else{if(gameState===_0x36000d(0xc8)||gameState===_0x36000d(0xed))_0x261de7=_0x36000d(0xe6)+_0x257ddc['alpha']+')';else(gameState==='startMenu'||gameState===_0x36000d(0xd6))&&(_0x261de7=_0x36000d(0xde)+_0x257ddc[_0x36000d(0xd1)]+')');}let _0x38abfa;try{_0x38abfa=ctx[_0x36000d(0xd7)](_0x257ddc['x'],_0x257ddc['y'],0x0,_0x257ddc['x'],_0x257ddc['y'],_0x257ddc[_0x36000d(0xc2)]);}catch(_0x40acc8){console[_0x36000d(0xd9)](_0x36000d(0xce),_0x40acc8);continue;}_0x38abfa[_0x36000d(0xef)](0x0,_0x261de7),_0x38abfa[_0x36000d(0xef)](0x1,_0x36000d(0xc3)),ctx[_0x36000d(0xda)]=_0x38abfa,ctx[_0x36000d(0xcf)]();}}function createFireParticles(_0x36c49a){const _0x54b284=a5_0x5b91;for(let _0x8184c3=0x0;_0x8184c3<0x5;_0x8184c3++){fireParticles[_0x54b284(0xe4)]({'x':_0x36c49a['x'],'y':_0x36c49a['y'],'dx':(Math[_0x54b284(0xf1)]()*0x2-0x1)*FIRE_PARTICLE_SPEED,'dy':(Math['random']()*0x2-0x1)*FIRE_PARTICLE_SPEED,'life':FIRE_PARTICLE_LIFE,'initialLife':FIRE_PARTICLE_LIFE,'size':FIRE_PARTICLE_SIZE,'color':'rgba(255,\x20'+Math[_0x54b284(0xdb)](Math[_0x54b284(0xf1)]()*0x96+0x64)+',\x200,\x201)'}),fireParticles[_0x54b284(0xe4)]({'x':_0x36c49a['x'],'y':_0x36c49a['y'],'dx':(Math[_0x54b284(0xf1)]()*0x2-0x1)*(FIRE_PARTICLE_SPEED/0x2),'dy':(Math[_0x54b284(0xf1)]()*0x2-0x1)*(FIRE_PARTICLE_SPEED/0x2),'life':FIRE_PARTICLE_LIFE*1.5,'initialLife':FIRE_PARTICLE_LIFE*1.5,'size':FIRE_PARTICLE_SIZE*1.2,'color':_0x54b284(0xe3)});}}function updateFireParticles(_0x4851df){const _0x418bcb=a5_0x5b91;for(let _0x157d81=fireParticles[_0x418bcb(0xec)]-0x1;_0x157d81>=0x0;_0x157d81--){let _0x3fdc8d=fireParticles[_0x157d81];_0x3fdc8d['x']+=_0x3fdc8d['dx']*_0x4851df,_0x3fdc8d['y']+=_0x3fdc8d['dy']*_0x4851df,_0x3fdc8d[_0x418bcb(0xcd)]-=_0x4851df,_0x3fdc8d[_0x418bcb(0xeb)]*=0.95;let _0x5baf37=_0x3fdc8d[_0x418bcb(0xcd)]/_0x3fdc8d[_0x418bcb(0xd5)];_0x3fdc8d[_0x418bcb(0xd4)][_0x418bcb(0xe1)](_0x418bcb(0xdd))?_0x3fdc8d[_0x418bcb(0xd4)]='rgba(255,\x20'+Math[_0x418bcb(0xdb)](Math['random']()*0x96+0x64)+',\x200,\x20'+_0x5baf37+')':_0x3fdc8d[_0x418bcb(0xd4)]=_0x418bcb(0xc6)+0.5*_0x5baf37+')',(_0x3fdc8d[_0x418bcb(0xcd)]<=0x0||_0x3fdc8d['size']<=0.5)&&fireParticles[_0x418bcb(0xc9)](_0x157d81,0x1);}}function drawFireParticles(){const _0x3f4b76=a5_0x5b91;for(let _0x43b6f0 of fireParticles){ctx['beginPath'](),ctx[_0x3f4b76(0xc4)](_0x43b6f0['x'],_0x43b6f0['y'],_0x43b6f0[_0x3f4b76(0xeb)],0x0,Math['PI']*0x2),ctx[_0x3f4b76(0xda)]=_0x43b6f0[_0x3f4b76(0xd4)],ctx[_0x3f4b76(0xcf)](),ctx[_0x3f4b76(0xea)]();}}