(function(_0x5732e8,_0x2613a0){const _0x257cd=a5_0x187a,_0x25cf53=_0x5732e8();while(!![]){try{const _0x14ddf9=parseInt(_0x257cd(0x197))/0x1+parseInt(_0x257cd(0x178))/0x2+parseInt(_0x257cd(0x17a))/0x3*(-parseInt(_0x257cd(0x179))/0x4)+parseInt(_0x257cd(0x177))/0x5*(parseInt(_0x257cd(0x15b))/0x6)+parseInt(_0x257cd(0x17b))/0x7*(parseInt(_0x257cd(0x162))/0x8)+-parseInt(_0x257cd(0x188))/0x9+-parseInt(_0x257cd(0x183))/0xa;if(_0x14ddf9===_0x2613a0)break;else _0x25cf53['push'](_0x25cf53['shift']());}catch(_0x47281c){_0x25cf53['push'](_0x25cf53['shift']());}}}(a5_0x3152,0xbafc9));const a5_0x472c01=(function(){let _0x359a3d=!![];return function(_0xd6db5c,_0x531d0e){const _0x53a841=_0x359a3d?function(){const _0x5cf961=a5_0x187a;if(_0x531d0e){const _0x4df1bd=_0x531d0e[_0x5cf961(0x15e)](_0xd6db5c,arguments);return _0x531d0e=null,_0x4df1bd;}}:function(){};return _0x359a3d=![],_0x53a841;};}()),a5_0x552cab=a5_0x472c01(this,function(){const _0x486bcf=a5_0x187a;return a5_0x552cab[_0x486bcf(0x173)]()['search']('(((.+)+)+)'+'+$')[_0x486bcf(0x173)]()['constructo'+'r'](a5_0x552cab)['search'](_0x486bcf(0x192)+'+$');});a5_0x552cab();let introParticles=[],blockHitParticles=[],fireParticles=[],menuParticles=[],sparkleParticles=[];const BLOCKHIT_PARTICLE_SPEED=0.3,BLOCKHIT_PARTICLE_LIFE=0.3,BLOCKHIT_PARTICLE_SIZE=0.003,BLOCKHIT_PARTICLE_COUNT=0x14,FIRE_PARTICLE_SPEED=0.2,FIRE_PARTICLE_LIFE=0.3,FIRE_PARTICLE_SIZE=0.003,WICKED_PARTICLE_SPEED=0.05,WICKED_PARTICLE_LIFE=0.5,WICKED_PARTICLE_SIZE=0.0125,WICKED_PARTICLE_COUNT=0x1e,MENU_PARTICLE_SPEED=0x64;function clearGameParticles(){blockHitParticles=[],fireParticles=[];}function createSparkleParticles(){const _0x5b6589=a5_0x187a;sparkleParticles=[];for(let _0x4bacd9=0x0;_0x4bacd9<0x64;_0x4bacd9++){sparkleParticles[_0x5b6589(0x16a)]({'x':Math['random']()*canvas[_0x5b6589(0x170)],'y':Math[_0x5b6589(0x167)]()*canvas['height'],'size':Math[_0x5b6589(0x167)]()*0x3+0x1,'speedY':Math[_0x5b6589(0x167)]()*-0.5-0.5,'color':_0x5b6589(0x15f)+Math[_0x5b6589(0x167)]()*0x168+(_0x5b6589(0x15c)+'%)'),'opacity':Math[_0x5b6589(0x167)]()*0.5+0.5});}}function updateSparkleParticles(_0x3750ab){const _0x25cf68=a5_0x187a;for(let _0x48568c of sparkleParticles){_0x48568c['y']+=_0x48568c['speedY']*_0x3750ab*0x3c,_0x48568c['y']<-_0x48568c['size']&&(_0x48568c['y']=canvas[_0x25cf68(0x164)]+_0x48568c[_0x25cf68(0x18a)],_0x48568c['x']=Math['random']()*canvas[_0x25cf68(0x170)]);}}function drawSparkleParticles(){const _0x57f2e2=a5_0x187a;for(let _0x374c48 of sparkleParticles){ctx[_0x57f2e2(0x172)](),ctx[_0x57f2e2(0x168)+'a']=_0x374c48['opacity'],ctx[_0x57f2e2(0x182)]=_0x374c48[_0x57f2e2(0x160)],ctx[_0x57f2e2(0x16d)](),ctx[_0x57f2e2(0x163)](_0x374c48['x'],_0x374c48['y'],_0x374c48['size'],0x0,Math['PI']*0x2),ctx['fill'](),ctx['restore']();}}function createBlockHitParticles(_0x12cd02,_0x4f576c,_0x84a6cd){const _0x230c37=a5_0x187a;!_0x84a6cd&&(console['warn'](_0x230c37(0x18f)+'finida\x20par'+'a\x20as\x20partí'+'culas\x20de\x20i'+'mpacto\x20do\x20'+_0x230c37(0x17f)+_0x230c37(0x187)+'drão.'),_0x84a6cd=levelPalette[_0x230c37(0x193)]);for(let _0x5a7373=0x0;_0x5a7373<BLOCKHIT_PARTICLE_COUNT;_0x5a7373++){blockHitParticles['push']({'x':_0x12cd02,'y':_0x4f576c,'dx':Math[_0x230c37(0x167)]()-0.5,'dy':Math[_0x230c37(0x167)]()-0.5,'life':BLOCKHIT_PARTICLE_LIFE,'color':_0x84a6cd});}}function updateBlockHitParticles(_0x136947){const _0x3c4ebc=a5_0x187a;for(let _0x105e9b=0x0;_0x105e9b<blockHitParticles[_0x3c4ebc(0x171)];_0x105e9b++){let _0x25aa1a=blockHitParticles[_0x105e9b];_0x25aa1a['x']+=_0x25aa1a['dx']*_0x136947*canvasDiagonal*BLOCKHIT_PARTICLE_SPEED,_0x25aa1a['y']+=_0x25aa1a['dy']*_0x136947*canvasDiagonal*BLOCKHIT_PARTICLE_SPEED,_0x25aa1a[_0x3c4ebc(0x186)]-=_0x136947,_0x25aa1a[_0x3c4ebc(0x186)]<=0x0&&(blockHitParticles[_0x3c4ebc(0x191)](_0x105e9b,0x1),_0x105e9b--);}}function drawBlockHitParticles(){const _0x32c929=a5_0x187a,_0x3e4205=canvasDiagonal*BLOCKHIT_PARTICLE_SIZE;for(let _0x5f26bd of blockHitParticles){ctx['beginPath'](),ctx['arc'](_0x5f26bd['x'],_0x5f26bd['y'],_0x3e4205,0x0,Math['PI']*0x2),ctx[_0x32c929(0x182)]=parseColorToRGBA(_0x5f26bd[_0x32c929(0x160)],_0x5f26bd['life']/BLOCKHIT_PARTICLE_LIFE),ctx['fill'](),ctx[_0x32c929(0x181)]();}}function createIntroParticles(){const _0x557a17=a5_0x187a,_0x10389a=Math[_0x557a17(0x165)](canvasDiagonal*0.1);introParticles=[];for(let _0x53a585=0x0;_0x53a585<_0x10389a;_0x53a585++){introParticles[_0x557a17(0x16a)]({'x':Math[_0x557a17(0x167)]()*canvas['width'],'y':Math['random']()*canvas[_0x557a17(0x164)],'dx':(Math[_0x557a17(0x167)]()-0.5)*0x2,'dy':(Math[_0x557a17(0x167)]()-0.5)*0x2,'radius':Math['random']()*0x2+0x1,'alpha':Math['random']()});}}function updateIntroParticles(_0x57a00b){const _0x4b4701=a5_0x187a;for(let _0x2cbf47 of introParticles){_0x2cbf47['x']+=_0x2cbf47['dx']*_0x57a00b*0x3c,_0x2cbf47['y']+=_0x2cbf47['dy']*_0x57a00b*0x3c;if(_0x2cbf47['x']<0x0||_0x2cbf47['x']>canvas[_0x4b4701(0x170)])_0x2cbf47['dx']*=-0x1;if(_0x2cbf47['y']<0x0||_0x2cbf47['y']>canvas[_0x4b4701(0x164)])_0x2cbf47['dy']*=-0x1;}}function drawIntroParticles(){const _0x296b1d=a5_0x187a;for(let _0x56736b of introParticles){ctx['beginPath'](),ctx['arc'](_0x56736b['x'],_0x56736b['y'],_0x56736b[_0x296b1d(0x185)],0x0,Math['PI']*0x2),ctx[_0x296b1d(0x182)]=_0x296b1d(0x16f)+_0x296b1d(0x194)+_0x56736b['alpha']+')',ctx['fill']();}}function createMenuParticles(){const _0x36218b=a5_0x187a,_0x46da93=Math[_0x36218b(0x165)](canvasDiagonal*0.1);menuParticles=[];for(let _0x70d56f=0x0;_0x70d56f<_0x46da93;_0x70d56f++){menuParticles[_0x36218b(0x16a)]({'x':Math[_0x36218b(0x167)]()*canvas[_0x36218b(0x170)],'y':Math[_0x36218b(0x167)]()*canvas[_0x36218b(0x164)],'dx':(Math[_0x36218b(0x167)]()*0x2-0x1)*MENU_PARTICLE_SPEED,'dy':(Math[_0x36218b(0x167)]()*0x2-0x1)*MENU_PARTICLE_SPEED,'radius':Math[_0x36218b(0x167)]()*0x3+0x1,'alpha':Math[_0x36218b(0x167)]()*0.5+0.5});}}function updateMenuParticles(_0x180d12){const _0x582e14=a5_0x187a;for(let _0x592710=0x0;_0x592710<menuParticles[_0x582e14(0x171)];_0x592710++){let _0x173081=menuParticles[_0x592710];_0x173081['x']+=_0x173081['dx']*_0x180d12,_0x173081['y']+=_0x173081['dy']*_0x180d12,_0x173081[_0x582e14(0x186)]-=_0x180d12;if(_0x173081['x']<0x0||_0x173081['x']>canvas['width'])_0x173081['dx']*=-0x1;if(_0x173081['y']<0x0||_0x173081['y']>canvas[_0x582e14(0x164)])_0x173081['dy']*=-0x1;}}function drawMenuParticles(){const _0x48a78e=a5_0x187a;for(let _0x381e54 of menuParticles){if(!isFinite(_0x381e54['x'])||!isFinite(_0x381e54['y'])||!isFinite(_0x381e54[_0x48a78e(0x185)]))continue;ctx[_0x48a78e(0x16d)](),ctx[_0x48a78e(0x163)](_0x381e54['x'],_0x381e54['y'],_0x381e54[_0x48a78e(0x185)],0x0,Math['PI']*0x2);let _0x59b2d8;if(gameState==='gameOver')_0x59b2d8=_0x48a78e(0x16f)+_0x48a78e(0x198)+_0x381e54[_0x48a78e(0x161)]+')';else{if(gameState==='gameComple'+_0x48a78e(0x195)||gameState===_0x48a78e(0x169))_0x59b2d8='rgba(0,\x2025'+_0x48a78e(0x16b)+_0x381e54[_0x48a78e(0x161)]+')';else(gameState===_0x48a78e(0x190)||gameState===_0x48a78e(0x175)+_0x48a78e(0x17c))&&(_0x59b2d8=_0x48a78e(0x16f)+_0x48a78e(0x17d)+_0x381e54[_0x48a78e(0x161)]+')');}let _0x1443ea;try{_0x1443ea=ctx[_0x48a78e(0x18d)+_0x48a78e(0x16c)](_0x381e54['x'],_0x381e54['y'],0x0,_0x381e54['x'],_0x381e54['y'],_0x381e54[_0x48a78e(0x185)]);}catch(_0x1863f5){console[_0x48a78e(0x174)]('Erro\x20ao\x20cr'+_0x48a78e(0x15d)+_0x48a78e(0x180)+':',_0x1863f5);continue;}_0x1443ea[_0x48a78e(0x184)+'op'](0x0,_0x59b2d8),_0x1443ea[_0x48a78e(0x184)+'op'](0x1,_0x48a78e(0x16f)+_0x48a78e(0x17d)+'0)'),ctx['fillStyle']=_0x1443ea,ctx['fill']();}}function createFireParticles(_0x49e813){const _0x4d5f25=a5_0x187a;for(let _0x4fb039=0x0;_0x4fb039<0x5;_0x4fb039++){fireParticles[_0x4d5f25(0x16a)]({'x':_0x49e813['x'],'y':_0x49e813['y'],'dx':Math[_0x4d5f25(0x167)]()*0x2-0x1,'dy':Math[_0x4d5f25(0x167)]()*0x2-0x1,'life':FIRE_PARTICLE_LIFE,'initialLife':FIRE_PARTICLE_LIFE,'size':FIRE_PARTICLE_SIZE,'type':_0x4d5f25(0x166)}),fireParticles['push']({'x':_0x49e813['x'],'y':_0x49e813['y'],'dx':(Math[_0x4d5f25(0x167)]()*0x2-0x1)/0x2,'dy':(Math[_0x4d5f25(0x167)]()*0x2-0x1)/0x2,'life':FIRE_PARTICLE_LIFE*1.5,'initialLife':FIRE_PARTICLE_LIFE*1.5,'size':FIRE_PARTICLE_SIZE*1.2,'type':_0x4d5f25(0x18b)});}}function a5_0x187a(_0x48d4ba,_0x5e9b3e){const _0x1910c7=a5_0x3152();return a5_0x187a=function(_0x552cab,_0x472c01){_0x552cab=_0x552cab-0x159;let _0x3152f0=_0x1910c7[_0x552cab];if(a5_0x187a['zLtKgv']===undefined){var _0x187aad=function(_0x5009e8){const _0x4aeb1a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1c73a3='',_0x359a3d='',_0xd6db5c=_0x1c73a3+_0x187aad;for(let _0x531d0e=0x0,_0x53a841,_0x4df1bd,_0x4bacd9=0x0;_0x4df1bd=_0x5009e8['charAt'](_0x4bacd9++);~_0x4df1bd&&(_0x53a841=_0x531d0e%0x4?_0x53a841*0x40+_0x4df1bd:_0x4df1bd,_0x531d0e++%0x4)?_0x1c73a3+=_0xd6db5c['charCodeAt'](_0x4bacd9+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x53a841>>(-0x2*_0x531d0e&0x6)):_0x531d0e:0x0){_0x4df1bd=_0x4aeb1a['indexOf'](_0x4df1bd);}for(let _0x3750ab=0x0,_0x48568c=_0x1c73a3['length'];_0x3750ab<_0x48568c;_0x3750ab++){_0x359a3d+='%'+('00'+_0x1c73a3['charCodeAt'](_0x3750ab)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x359a3d);};a5_0x187a['knBYmE']=_0x187aad,_0x48d4ba=arguments,a5_0x187a['zLtKgv']=!![];}const _0x24a1f1=_0x1910c7[0x0],_0x5ddf97=_0x552cab+_0x24a1f1,_0x53edda=_0x48d4ba[_0x5ddf97];if(!_0x53edda){const _0x374c48=function(_0x12cd02){this['qHJPHF']=_0x12cd02,this['VUorKf']=[0x1,0x0,0x0],this['QvHgiJ']=function(){return'newState';},this['HXVnKO']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['DbswUf']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x374c48['prototype']['TTpdAT']=function(){const _0x4f576c=new RegExp(this['HXVnKO']+this['DbswUf']),_0x84a6cd=_0x4f576c['test'](this['QvHgiJ']['toString']())?--this['VUorKf'][0x1]:--this['VUorKf'][0x0];return this['bTDOeZ'](_0x84a6cd);},_0x374c48['prototype']['bTDOeZ']=function(_0x5a7373){if(!Boolean(~_0x5a7373))return _0x5a7373;return this['UNtBlK'](this['qHJPHF']);},_0x374c48['prototype']['UNtBlK']=function(_0x136947){for(let _0x105e9b=0x0,_0x25aa1a=this['VUorKf']['length'];_0x105e9b<_0x25aa1a;_0x105e9b++){this['VUorKf']['push'](Math['round'](Math['random']())),_0x25aa1a=this['VUorKf']['length'];}return _0x136947(this['VUorKf'][0x0]);},new _0x374c48(a5_0x187a)['TTpdAT'](),_0x3152f0=a5_0x187a['knBYmE'](_0x3152f0),_0x48d4ba[_0x5ddf97]=_0x3152f0;}else _0x3152f0=_0x53edda;return _0x3152f0;},a5_0x187a(_0x48d4ba,_0x5e9b3e);}function a5_0x3152(){const _0x532d19=['C2L6zq','C21VA2u','lcaWlca','y3jLyxrLuMfKAq','zMLSBa','q29Yig7dO28Gzgu','C3rHCNrnzw51','C3bSAwnL','kcGOlISPkYKRkq','yNjPy2TdB2XVCG','mJu1lcaYntuS','DgvK','Aw5PDgLHBeXPzG','mtm5ntC2n1rIEuPMsq','mcWGmcWG','BwLU','DhLWzq','mJa3mtC5ngjdvKHHzG','lcaXmdaLlca4ma','AwfYigDYywrPzq','yxbWBhK','AhnSka','y29SB3i','ywXWAge','oerPwwHUzG','yxjJ','AgvPz2H0','zMXVB3i','zMLYzq','CMfUzg9T','z2XVyMfSqwXWAa','y3jLzgL0CW','ChvZAa','nsWGmcWG','ywXhCMfKAwvUDa','yMvNAw5qyxrO','CMDIysGXmdaSia','CMDIysGYntuSia','D2LKDgG','BgvUz3rO','C2f2zq','Dg9tDhjPBMC','zxjYB3i','Bgv2zwXtzwXLyW','D2LJA2vKu21VAW','nwXPvgXltq','mJm4mtG4ofjzrevbCq','nhPiwhjWrq','ndK1nJnLs1vXywm','mJqYmdy3ELvYthvL','DgLVBG','mJu1lcaYntuSia','CMDIysGXmJGSia','yMXVy28UifvZyq','BNrLihjHzgLHBa','y2XVC2vqyxrO','zMLSBfn0EwXL','otiXotq4meTAzwzuyq','ywrKq29SB3jtDa','CMfKAxvZ','BgLMzq','BMrVignVCIbWyq','mteZnJaWmJv5ELfzt1C','mcWGmti4lca'];a5_0x3152=function(){return _0x532d19;};return a5_0x3152();}function createWickedSmokeParticles(_0x6b2880,_0x5b8860){const _0x5af349=a5_0x187a;for(let _0x3795b1=0x0;_0x3795b1<WICKED_PARTICLE_COUNT;_0x3795b1++){fireParticles[_0x5af349(0x16a)]({'x':_0x6b2880,'y':_0x5b8860,'dx':Math[_0x5af349(0x167)]()*0x2-0x1,'dy':Math[_0x5af349(0x167)]()*0x2-0x1,'life':WICKED_PARTICLE_LIFE,'initialLife':WICKED_PARTICLE_LIFE,'size':Math[_0x5af349(0x159)](Math[_0x5af349(0x167)](),0.5)*WICKED_PARTICLE_SIZE,'type':'wickedSmok'+'e'});}}function updateFireParticles(_0x34ce81){const _0x596bf1=a5_0x187a;let _0x3fdedf;for(let _0x360fd9=fireParticles[_0x596bf1(0x171)]-0x1;_0x360fd9>=0x0;_0x360fd9--){let _0x2a68af=fireParticles[_0x360fd9];_0x2a68af['life']-=_0x34ce81;let _0x506222=_0x2a68af[_0x596bf1(0x186)]/_0x2a68af[_0x596bf1(0x196)+'e'];if(_0x2a68af[_0x596bf1(0x15a)]===_0x596bf1(0x166))_0x2a68af[_0x596bf1(0x161)]=_0x506222,_0x3fdedf=FIRE_PARTICLE_SPEED;else{if(_0x2a68af[_0x596bf1(0x15a)]===_0x596bf1(0x18b))_0x2a68af['alpha']=0.5*_0x506222,_0x3fdedf=FIRE_PARTICLE_SPEED;else _0x2a68af[_0x596bf1(0x15a)]===_0x596bf1(0x176)+'e'&&(_0x2a68af[_0x596bf1(0x161)]=0.7*_0x506222,_0x3fdedf=WICKED_PARTICLE_SPEED);}_0x2a68af['x']+=_0x2a68af['dx']*_0x34ce81*canvasDiagonal*_0x3fdedf,_0x2a68af['y']+=_0x2a68af['dy']*_0x34ce81*canvasDiagonal*_0x3fdedf,_0x2a68af['life']<=0x0&&fireParticles[_0x596bf1(0x191)](_0x360fd9,0x1);}}function drawFireParticles(){const _0x21624b=a5_0x187a;for(let _0x457027 of fireParticles){ctx[_0x21624b(0x16d)](),ctx[_0x21624b(0x163)](_0x457027['x'],_0x457027['y'],_0x457027[_0x21624b(0x18a)]*canvasDiagonal,0x0,Math['PI']*0x2);if(_0x457027[_0x21624b(0x15a)]==='fire')ctx[_0x21624b(0x182)]=_0x21624b(0x16f)+Math['floor'](Math[_0x21624b(0x167)]()*0x96+0x64)+_0x21624b(0x18c)+_0x457027[_0x21624b(0x161)]+')';else{if(_0x457027[_0x21624b(0x15a)]===_0x21624b(0x18b))ctx[_0x21624b(0x182)]=_0x21624b(0x16e)+'100,\x20100,\x20'+_0x457027['alpha']+')';else _0x457027[_0x21624b(0x15a)]===_0x21624b(0x176)+'e'&&(ctx[_0x21624b(0x182)]=_0x21624b(0x17e)+_0x21624b(0x189)+_0x457027[_0x21624b(0x161)]+')');}ctx[_0x21624b(0x18e)]();}}function createFixedParticles(){createMenuParticles(),createIntroParticles(),createSparkleParticles();}