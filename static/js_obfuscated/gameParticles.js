(function(_0x28b0d6,_0x11d3ed){const _0x26f6e1=a6_0x1f4b,_0x2f4d75=_0x28b0d6();while(!![]){try{const _0x1482d9=parseInt(_0x26f6e1(0x192))/0x1+parseInt(_0x26f6e1(0x196))/0x2+-parseInt(_0x26f6e1(0x1bc))/0x3+-parseInt(_0x26f6e1(0x19e))/0x4+-parseInt(_0x26f6e1(0x1b7))/0x5+parseInt(_0x26f6e1(0x1c0))/0x6+parseInt(_0x26f6e1(0x1ab))/0x7*(-parseInt(_0x26f6e1(0x198))/0x8);if(_0x1482d9===_0x11d3ed)break;else _0x2f4d75['push'](_0x2f4d75['shift']());}catch(_0x466110){_0x2f4d75['push'](_0x2f4d75['shift']());}}}(a6_0x40f8,0xbfd3a));const a6_0x5ec36f=(function(){let _0x155af7=!![];return function(_0x1c3ce6,_0x54f1cf){const _0x18b6de=_0x155af7?function(){const _0x439049=a6_0x1f4b;if(_0x54f1cf){const _0x552b77=_0x54f1cf[_0x439049(0x191)](_0x1c3ce6,arguments);return _0x54f1cf=null,_0x552b77;}}:function(){};return _0x155af7=![],_0x18b6de;};}()),a6_0x4beea5=a6_0x5ec36f(this,function(){const _0x2d9fdd=a6_0x1f4b;return a6_0x4beea5[_0x2d9fdd(0x1a2)]()[_0x2d9fdd(0x1b9)](_0x2d9fdd(0x194))[_0x2d9fdd(0x1a2)]()[_0x2d9fdd(0x190)](a6_0x4beea5)[_0x2d9fdd(0x1b9)](_0x2d9fdd(0x194));});a6_0x4beea5();let particles=[],menuParticles=[],introParticles=[],fireParticles=[],plasmaParticles=[];const PARTICLE_SPEED=0xc8,PARTICLE_LIFE=0.5,FIRE_PARTICLE_SPEED=0xc8,FIRE_PARTICLE_LIFE=0.5,FIRE_PARTICLE_SIZE=0x6,MENU_PARTICLE_SPEED=0x64,PLASMA_PARTICLE_SPEED=0x96,PLASMA_PARTICLE_LIFE=0x1,PLASMA_PARTICLE_SIZE=0x5;function createParticles(_0x249037,_0x2b684a){const _0x5d01bb=a6_0x1f4b;for(let _0xda4f81=0x0;_0xda4f81<0xa;_0xda4f81++){particles[_0x5d01bb(0x1a8)]({'x':_0x249037,'y':_0x2b684a,'dx':(Math['random']()*0x2-0x1)*PARTICLE_SPEED,'dy':(Math[_0x5d01bb(0x1a7)]()*0x2-0x1)*PARTICLE_SPEED,'life':PARTICLE_LIFE});}}function updateParticles(_0x3652dc){const _0x43de04=a6_0x1f4b;for(let _0xbe476a=0x0;_0xbe476a<particles['length'];_0xbe476a++){let _0x141e65=particles[_0xbe476a];_0x141e65['x']+=_0x141e65['dx']*_0x3652dc,_0x141e65['y']+=_0x141e65['dy']*_0x3652dc,_0x141e65[_0x43de04(0x199)]-=_0x3652dc,_0x141e65[_0x43de04(0x199)]<=0x0&&(particles[_0x43de04(0x1b0)](_0xbe476a,0x1),_0xbe476a--);}updateFireParticles(_0x3652dc),updatePlasmaParticles(_0x3652dc);}function drawParticles(){const _0xb59f21=a6_0x1f4b,_0x3b32cd=isMobileUserAgent()?0x1:0x3;for(let _0x37eb61 of particles){ctx['beginPath'](),ctx[_0xb59f21(0x1aa)](_0x37eb61['x'],_0x37eb61['y'],_0x3b32cd,0x0,Math['PI']*0x2),ctx[_0xb59f21(0x1b6)]=_0xb59f21(0x19d)+_0x37eb61[_0xb59f21(0x199)]/PARTICLE_LIFE+')',ctx[_0xb59f21(0x1a9)](),ctx[_0xb59f21(0x1bd)]();}}function drawPlasmaParticles(){const _0x2be27e=a6_0x1f4b;for(let _0x257e15 of plasmaParticles){ctx['save'](),ctx[_0x2be27e(0x1b8)](_0x257e15['x'],_0x257e15['y']);const _0x1927f0=_0x257e15[_0x2be27e(0x19f)]||0x0;ctx[_0x2be27e(0x195)](_0x1927f0),ctx[_0x2be27e(0x1b6)]=_0x257e15['color'],ctx[_0x2be27e(0x1b3)](-_0x257e15[_0x2be27e(0x1b5)]/0x2,-_0x257e15[_0x2be27e(0x1b5)]/0x2,_0x257e15[_0x2be27e(0x1b5)],_0x257e15[_0x2be27e(0x1b5)]),ctx['restore']();}}function createIntroParticles(){const _0x566762=a6_0x1f4b,_0x1e3ba9=isMobileUserAgent()?0x14:0x64;for(let _0x15a1bd=0x0;_0x15a1bd<_0x1e3ba9;_0x15a1bd++){introParticles[_0x566762(0x1a8)]({'x':Math['random']()*canvas[_0x566762(0x1b1)],'y':Math[_0x566762(0x1a7)]()*canvas['height'],'dx':(Math[_0x566762(0x1a7)]()-0.5)*0x2,'dy':(Math['random']()-0.5)*0x2,'radius':Math['random']()*0x2+0x1,'alpha':Math[_0x566762(0x1a7)]()});}}function updateIntroParticles(_0x56df10){const _0xcb0999=a6_0x1f4b;for(let _0x178d19 of introParticles){_0x178d19['x']+=_0x178d19['dx']*_0x56df10*0x3c,_0x178d19['y']+=_0x178d19['dy']*_0x56df10*0x3c;if(_0x178d19['x']<0x0||_0x178d19['x']>canvas[_0xcb0999(0x1b1)])_0x178d19['dx']*=-0x1;if(_0x178d19['y']<0x0||_0x178d19['y']>canvas['height'])_0x178d19['dy']*=-0x1;}}function drawIntroParticles(){const _0x226c4f=a6_0x1f4b;for(let _0x44c2ea of introParticles){ctx[_0x226c4f(0x1af)](),ctx['arc'](_0x44c2ea['x'],_0x44c2ea['y'],_0x44c2ea[_0x226c4f(0x1a1)],0x0,Math['PI']*0x2),ctx['fillStyle']=_0x226c4f(0x1b4)+_0x44c2ea[_0x226c4f(0x19a)]+')',ctx[_0x226c4f(0x1a9)]();}}function createMenuParticles(){const _0x485050=a6_0x1f4b,_0x580427=isMobileUserAgent()?0x14:0x64;for(let _0x368627=0x0;_0x368627<_0x580427;_0x368627++){menuParticles[_0x485050(0x1a8)]({'x':Math[_0x485050(0x1a7)]()*canvas[_0x485050(0x1b1)],'y':Math['random']()*canvas[_0x485050(0x19c)],'dx':(Math['random']()*0x2-0x1)*MENU_PARTICLE_SPEED,'dy':(Math[_0x485050(0x1a7)]()*0x2-0x1)*MENU_PARTICLE_SPEED,'radius':Math[_0x485050(0x1a7)]()*0x3+0x1,'alpha':Math[_0x485050(0x1a7)]()*0.5+0.5});}}function updateMenuParticles(_0x17f193){const _0x4753b6=a6_0x1f4b;for(let _0x267480=0x0;_0x267480<menuParticles[_0x4753b6(0x19b)];_0x267480++){let _0x16a9c8=menuParticles[_0x267480];_0x16a9c8['x']+=_0x16a9c8['dx']*_0x17f193,_0x16a9c8['y']+=_0x16a9c8['dy']*_0x17f193,_0x16a9c8['life']-=_0x17f193;if(_0x16a9c8['x']<0x0||_0x16a9c8['x']>canvas[_0x4753b6(0x1b1)])_0x16a9c8['dx']*=-0x1;if(_0x16a9c8['y']<0x0||_0x16a9c8['y']>canvas['height'])_0x16a9c8['dy']*=-0x1;}}function a6_0x40f8(){const _0x1af4a3=['initialLife','1576017lFMxmo','closePath','addColorStop','rotationSpeed','6900798YluOFi','startsWith','constructor','apply','1045738eTZmes','error','(((.+)+)+)+$','rotate','1621654AoQLYy','gameCompleted','8sbgyZt','life','alpha','length','height','rgba(255,\x20255,\x20255,\x20','5482020NYxQJw','rotation','rgba(255,\x20255,\x20255,\x200)','radius','toString','rgba(0,\x20255,\x200,\x20','rgba(255','rgba(255,\x20','color','random','push','fill','arc','2035054jGgMfE','rgba(0,\x200,\x20255,\x20',',\x200,\x201)','createRadialGradient','beginPath','splice','width','floor','fillRect','rgba(255,\x20255,\x20255,','size','fillStyle','172050IxHfVu','translate','search','rgba(255,\x200,\x200,\x20'];a6_0x40f8=function(){return _0x1af4a3;};return a6_0x40f8();}function drawMenuParticles(){const _0x29b1c2=a6_0x1f4b;for(let _0x4b6e76 of menuParticles){if(!isFinite(_0x4b6e76['x'])||!isFinite(_0x4b6e76['y'])||!isFinite(_0x4b6e76[_0x29b1c2(0x1a1)]))continue;ctx[_0x29b1c2(0x1af)](),ctx[_0x29b1c2(0x1aa)](_0x4b6e76['x'],_0x4b6e76['y'],_0x4b6e76[_0x29b1c2(0x1a1)],0x0,Math['PI']*0x2);let _0x582aac;if(gameState==='gameOver')_0x582aac=_0x29b1c2(0x1ba)+_0x4b6e76[_0x29b1c2(0x19a)]+')';else{if(gameState===_0x29b1c2(0x197))_0x582aac=_0x29b1c2(0x1a3)+_0x4b6e76[_0x29b1c2(0x19a)]+')';else gameState==='startMenu'&&(_0x582aac='rgba(255,\x20255,\x20255,\x20'+_0x4b6e76[_0x29b1c2(0x19a)]+')');}let _0xd7c6fc;try{_0xd7c6fc=ctx[_0x29b1c2(0x1ae)](_0x4b6e76['x'],_0x4b6e76['y'],0x0,_0x4b6e76['x'],_0x4b6e76['y'],_0x4b6e76[_0x29b1c2(0x1a1)]);}catch(_0x3ec4e7){console[_0x29b1c2(0x193)]('Erro\x20ao\x20criar\x20gradiente\x20radial:',_0x3ec4e7);continue;}_0xd7c6fc[_0x29b1c2(0x1be)](0x0,_0x582aac),_0xd7c6fc['addColorStop'](0x1,_0x29b1c2(0x1a0)),ctx[_0x29b1c2(0x1b6)]=_0xd7c6fc,ctx[_0x29b1c2(0x1a9)]();}}function createFireParticles(_0x3acf49){const _0x5e741c=a6_0x1f4b;for(let _0x567926=0x0;_0x567926<0x5;_0x567926++){fireParticles['push']({'x':_0x3acf49['x'],'y':_0x3acf49['y'],'dx':(Math[_0x5e741c(0x1a7)]()*0x2-0x1)*FIRE_PARTICLE_SPEED,'dy':(Math['random']()*0x2-0x1)*FIRE_PARTICLE_SPEED,'life':FIRE_PARTICLE_LIFE,'initialLife':FIRE_PARTICLE_LIFE,'size':FIRE_PARTICLE_SIZE,'color':_0x5e741c(0x1a5)+Math[_0x5e741c(0x1b2)](Math[_0x5e741c(0x1a7)]()*0x96+0x64)+_0x5e741c(0x1ad)}),fireParticles[_0x5e741c(0x1a8)]({'x':_0x3acf49['x'],'y':_0x3acf49['y'],'dx':(Math[_0x5e741c(0x1a7)]()*0x2-0x1)*(FIRE_PARTICLE_SPEED/0x2),'dy':(Math['random']()*0x2-0x1)*(FIRE_PARTICLE_SPEED/0x2),'life':FIRE_PARTICLE_LIFE*1.5,'initialLife':FIRE_PARTICLE_LIFE*1.5,'size':FIRE_PARTICLE_SIZE*1.2,'color':'rgba(100,\x20100,\x20100,\x200.5)'});}}function a6_0x1f4b(_0x429b60,_0x50d782){const _0x2e72a8=a6_0x40f8();return a6_0x1f4b=function(_0x4beea5,_0x5ec36f){_0x4beea5=_0x4beea5-0x190;let _0x40f859=_0x2e72a8[_0x4beea5];return _0x40f859;},a6_0x1f4b(_0x429b60,_0x50d782);}function createPlasmaParticles(_0x46e160){const _0x13bb99=a6_0x1f4b;for(let _0x2ea26d=0x0;_0x2ea26d<0x5;_0x2ea26d++){plasmaParticles[_0x13bb99(0x1a8)]({'x':_0x46e160['x'],'y':_0x46e160['y'],'dx':(Math[_0x13bb99(0x1a7)]()*0x2-0x1)*PLASMA_PARTICLE_SPEED,'dy':(Math['random']()*0x2-0x1)*PLASMA_PARTICLE_SPEED,'life':PLASMA_PARTICLE_LIFE,'initialLife':PLASMA_PARTICLE_LIFE,'size':PLASMA_PARTICLE_SIZE,'color':'rgba(0,\x200,\x20255,\x201)','rotation':Math['random']()*Math['PI']*0x2,'rotationSpeed':Math[_0x13bb99(0x1a7)]()*0.02-0.01});}}function updateFireParticles(_0x35406f){const _0x57f87b=a6_0x1f4b;for(let _0x1d6751=fireParticles[_0x57f87b(0x19b)]-0x1;_0x1d6751>=0x0;_0x1d6751--){let _0x18f576=fireParticles[_0x1d6751];_0x18f576['x']+=_0x18f576['dx']*_0x35406f,_0x18f576['y']+=_0x18f576['dy']*_0x35406f,_0x18f576[_0x57f87b(0x199)]-=_0x35406f,_0x18f576[_0x57f87b(0x1b5)]*=0.95;let _0x2ee398=_0x18f576[_0x57f87b(0x199)]/_0x18f576[_0x57f87b(0x1bb)];_0x18f576[_0x57f87b(0x1a6)][_0x57f87b(0x1c1)](_0x57f87b(0x1a4))?_0x18f576[_0x57f87b(0x1a6)]=_0x57f87b(0x1a5)+Math['floor'](Math[_0x57f87b(0x1a7)]()*0x96+0x64)+',\x200,\x20'+_0x2ee398+')':_0x18f576['color']='rgba(100,\x20100,\x20100,\x20'+0.5*_0x2ee398+')',(_0x18f576[_0x57f87b(0x199)]<=0x0||_0x18f576[_0x57f87b(0x1b5)]<=0.5)&&fireParticles[_0x57f87b(0x1b0)](_0x1d6751,0x1);}}function updatePlasmaParticles(_0x290a46){const _0x126091=a6_0x1f4b;for(let _0x4b4a49=plasmaParticles['length']-0x1;_0x4b4a49>=0x0;_0x4b4a49--){let _0x298be6=plasmaParticles[_0x4b4a49];_0x298be6['x']+=_0x298be6['dx']*_0x290a46,_0x298be6['y']+=_0x298be6['dy']*_0x290a46,_0x298be6[_0x126091(0x199)]-=_0x290a46,_0x298be6[_0x126091(0x19f)]+=_0x298be6[_0x126091(0x1bf)]*_0x290a46,_0x298be6[_0x126091(0x1b5)]*=0.95;let _0x6eaeaa=_0x298be6[_0x126091(0x199)]/_0x298be6[_0x126091(0x1bb)];_0x298be6[_0x126091(0x1a6)]=_0x126091(0x1ac)+_0x6eaeaa+')',(_0x298be6[_0x126091(0x199)]<=0x0||_0x298be6['size']<=0.5)&&plasmaParticles[_0x126091(0x1b0)](_0x4b4a49,0x1);}}function drawFireParticles(){const _0x16c43f=a6_0x1f4b;for(let _0x5ce04b of fireParticles){ctx[_0x16c43f(0x1af)](),ctx[_0x16c43f(0x1aa)](_0x5ce04b['x'],_0x5ce04b['y'],_0x5ce04b['size'],0x0,Math['PI']*0x2),ctx[_0x16c43f(0x1b6)]=_0x5ce04b[_0x16c43f(0x1a6)],ctx['fill'](),ctx[_0x16c43f(0x1bd)]();}}