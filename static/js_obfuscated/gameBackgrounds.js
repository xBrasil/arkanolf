(function(_0x1b9ec0,_0x48a73c){const _0x4272a2=a1_0x5db4,_0x4ae6f6=_0x1b9ec0();while(!![]){try{const _0x5768b3=parseInt(_0x4272a2(0x1a2))/0x1+-parseInt(_0x4272a2(0x18b))/0x2+parseInt(_0x4272a2(0x1a3))/0x3+-parseInt(_0x4272a2(0x1d2))/0x4+parseInt(_0x4272a2(0x18d))/0x5*(parseInt(_0x4272a2(0x1c1))/0x6)+-parseInt(_0x4272a2(0x1cf))/0x7*(-parseInt(_0x4272a2(0x192))/0x8)+parseInt(_0x4272a2(0x1c8))/0x9*(-parseInt(_0x4272a2(0x1aa))/0xa);if(_0x5768b3===_0x48a73c)break;else _0x4ae6f6['push'](_0x4ae6f6['shift']());}catch(_0xf09b71){_0x4ae6f6['push'](_0x4ae6f6['shift']());}}}(a1_0x4b43,0xd1328));const a1_0x432445=(function(){let _0x2755b9=!![];return function(_0x438823,_0x29b19d){const _0x40d024=_0x2755b9?function(){const _0x1d2b33=a1_0x5db4;if(_0x29b19d){const _0x9ddff4=_0x29b19d[_0x1d2b33(0x1ba)](_0x438823,arguments);return _0x29b19d=null,_0x9ddff4;}}:function(){};return _0x2755b9=![],_0x40d024;};}()),a1_0xb6b061=a1_0x432445(this,function(){const _0x296f01=a1_0x5db4;return a1_0xb6b061[_0x296f01(0x1c0)]()[_0x296f01(0x1ca)](_0x296f01(0x1cb))[_0x296f01(0x1c0)]()[_0x296f01(0x1bf)](a1_0xb6b061)[_0x296f01(0x1ca)](_0x296f01(0x1cb));});a1_0xb6b061();function drawPulsatingBackground(_0x83721c){const _0x1e043a=a1_0x5db4;clearCanvas(),backgroundTime+=_0x83721c;const _0x48a90d=levelPalettes[actualLevel-0x1],{background:_0x5ec6ab}=_0x48a90d,{type:_0x53a264}=_0x5ec6ab;switch(_0x53a264){case'linear':drawLinearGradient(_0x5ec6ab,_0x83721c);break;case'radial':drawRadialGradient(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1cc):drawRadialDualGradient(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1b0):drawGridPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x195):drawSpiralPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1af):drawTriangleTunnelPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1c9):drawSquareTunnelPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1c3):drawHexagonsPattern(_0x5ec6ab,_0x83721c);break;case'concentricCircles':drawConcentricCircles(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x189):drawWavesPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1b2):drawCheckerboardPattern(_0x5ec6ab,_0x83721c);break;case'polygonTunnel':drawPolygonTunnelPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1a6):drawSpiralGalaxyPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1bc):drawAnimatedDotsPattern(_0x5ec6ab,_0x83721c);break;case _0x1e043a(0x1ae):drawRotatingStarsPattern(_0x5ec6ab,_0x83721c);break;default:console[_0x1e043a(0x19c)](_0x1e043a(0x1ad)+_0x53a264+_0x1e043a(0x19b)),drawLinearGradient({'type':_0x1e043a(0x1b1),'direction':_0x1e043a(0x1a8),'A1':'#000000','A2':_0x1e043a(0x18a),'B1':_0x1e043a(0x1a5),'B2':_0x1e043a(0x18a)},_0x83721c);break;}}function drawSpiralGalaxyPattern(_0x14b1ba,_0x475f84){const _0x12982b=a1_0x5db4,{baseBackground:_0x5dbf89,spiralColor:_0x333c67,arms:_0x4c8106,rotationSpeed:_0x3d449d,spiralRadius:_0x4e2d12}=_0x14b1ba;if(_0x5dbf89&&_0x5dbf89[_0x12982b(0x194)]==='radial')drawRadialGradient(_0x5dbf89,_0x475f84);else _0x5dbf89&&_0x5dbf89[_0x12982b(0x194)]==='linear'?drawLinearGradient(_0x5dbf89,_0x475f84):(ctx[_0x12982b(0x1b6)]='#000000',ctx[_0x12982b(0x1c7)](0x0,0x0,canvas[_0x12982b(0x1b9)],canvas[_0x12982b(0x1c4)]));ctx[_0x12982b(0x1ab)](),ctx[_0x12982b(0x199)](canvas['width']/0x2,canvas['height']/0x2),ctx[_0x12982b(0x1b4)](backgroundTime*_0x3d449d),ctx[_0x12982b(0x1a1)]=_0x333c67,ctx[_0x12982b(0x191)]=0x2;for(let _0x59288e=0x0;_0x59288e<_0x4c8106;_0x59288e++){ctx[_0x12982b(0x1c2)]();for(let _0x5617b8=0x0;_0x5617b8<=0x4*Math['PI'];_0x5617b8+=0.1){const _0x4e1860=_0x4e2d12*_0x5617b8/(0x4*Math['PI']),_0xe94299=_0x4e1860*Math[_0x12982b(0x1a0)](_0x5617b8+_0x59288e*(0x2*Math['PI'])/_0x4c8106),_0x34b31f=_0x4e1860*Math[_0x12982b(0x1b3)](_0x5617b8+_0x59288e*(0x2*Math['PI'])/_0x4c8106);_0x5617b8===0x0?ctx['moveTo'](_0xe94299,_0x34b31f):ctx['lineTo'](_0xe94299,_0x34b31f);}ctx[_0x12982b(0x1ce)]();}ctx[_0x12982b(0x18f)]();}function drawAnimatedDotsPattern(_0x1aab0d,_0x2c9060){const _0x31c906=a1_0x5db4,{baseBackground:_0x29dfd1,color:_0x516c3b,dotSize:_0x758663,density:_0x246e56,speed:_0x37c0f7}=_0x1aab0d;if(_0x29dfd1&&_0x29dfd1[_0x31c906(0x194)])switch(_0x29dfd1[_0x31c906(0x194)]){case _0x31c906(0x1b1):drawLinearGradient(_0x29dfd1,_0x2c9060);break;case'radial':drawRadialGradient(_0x29dfd1,_0x2c9060);break;case'radial-dual':drawRadialDualGradient(_0x29dfd1,_0x2c9060);break;default:console[_0x31c906(0x19c)]('Tipo\x20de\x20baseBackground\x20desconhecido:\x20'+_0x29dfd1[_0x31c906(0x194)]+'.\x20Usando\x20fundo\x20preto\x20como\x20fallback.'),ctx[_0x31c906(0x1b6)]=_0x31c906(0x1a5),ctx[_0x31c906(0x1c7)](0x0,0x0,canvas[_0x31c906(0x1b9)],canvas[_0x31c906(0x1c4)]);break;}else ctx[_0x31c906(0x1b6)]=_0x516c3b,ctx['fillRect'](0x0,0x0,canvas[_0x31c906(0x1b9)],canvas[_0x31c906(0x1c4)]);const _0x29b46d=Math[_0x31c906(0x1a4)](canvas['width']*canvas[_0x31c906(0x1c4)]*_0x246e56);if(!_0x1aab0d[_0x31c906(0x19e)]){_0x1aab0d[_0x31c906(0x19e)]=[];for(let _0x14b530=0x0;_0x14b530<_0x29b46d;_0x14b530++){_0x1aab0d[_0x31c906(0x19e)][_0x31c906(0x190)]({'x':Math['random']()*canvas[_0x31c906(0x1b9)],'y':Math[_0x31c906(0x19f)]()*canvas[_0x31c906(0x1c4)],'dx':(Math[_0x31c906(0x19f)]()*0x2-0x1)*_0x37c0f7,'dy':(Math['random']()*0x2-0x1)*_0x37c0f7});}}ctx[_0x31c906(0x1b6)]=_0x516c3b;for(let _0x221257 of _0x1aab0d[_0x31c906(0x19e)]){_0x221257['x']+=_0x221257['dx']*_0x2c9060,_0x221257['y']+=_0x221257['dy']*_0x2c9060;if(_0x221257['x']<0x0||_0x221257['x']>canvas[_0x31c906(0x1b9)])_0x221257['dx']*=-0x1;if(_0x221257['y']<0x0||_0x221257['y']>canvas[_0x31c906(0x1c4)])_0x221257['dy']*=-0x1;ctx[_0x31c906(0x1c2)](),ctx[_0x31c906(0x1cd)](_0x221257['x'],_0x221257['y'],_0x758663,0x0,Math['PI']*0x2),ctx[_0x31c906(0x1c6)](),ctx['closePath']();}}function drawRotatingStarsPattern(_0x1fc197,_0x46e252){const _0xcf7ff2=a1_0x5db4,{baseBackground:_0x4ca90c,starColor:_0x1b39e2,numStars:_0x3d24cd,size:_0x13496e,rotationSpeed:_0x420135}=_0x1fc197;if(_0x4ca90c&&_0x4ca90c['type']===_0xcf7ff2(0x1b1))drawLinearGradient(_0x4ca90c,_0x46e252);else _0x4ca90c&&_0x4ca90c[_0xcf7ff2(0x194)]===_0xcf7ff2(0x1b8)?drawRadialGradient(_0x4ca90c,_0x46e252):(ctx[_0xcf7ff2(0x1b6)]='#000000',ctx[_0xcf7ff2(0x1c7)](0x0,0x0,canvas['width'],canvas[_0xcf7ff2(0x1c4)]));if(!_0x1fc197['stars']){_0x1fc197['stars']=[];for(let _0x471ac9=0x0;_0x471ac9<_0x3d24cd;_0x471ac9++){_0x1fc197[_0xcf7ff2(0x19d)][_0xcf7ff2(0x190)]({'x':Math[_0xcf7ff2(0x19f)]()*canvas[_0xcf7ff2(0x1b9)],'y':Math[_0xcf7ff2(0x19f)]()*canvas[_0xcf7ff2(0x1c4)],'rotation':Math[_0xcf7ff2(0x19f)]()*0x2*Math['PI'],'rotationSpeed':(Math[_0xcf7ff2(0x19f)]()*0.5-0.25)*_0x420135});}}ctx['fillStyle']=_0x1b39e2;for(let _0x28fb62 of _0x1fc197[_0xcf7ff2(0x19d)]){ctx[_0xcf7ff2(0x1ab)](),ctx[_0xcf7ff2(0x199)](_0x28fb62['x'],_0x28fb62['y']),ctx[_0xcf7ff2(0x1b4)](_0x28fb62[_0xcf7ff2(0x1a9)]),drawStar(0x0,0x0,0x5,_0x13496e,_0x13496e/0x2),ctx[_0xcf7ff2(0x18f)](),_0x28fb62[_0xcf7ff2(0x1a9)]+=_0x28fb62['rotationSpeed']*_0x46e252;}}function drawStar(_0x2bdad6,_0xb4f1b,_0x2ed4b7,_0x2459c2,_0x21ee62){const _0x5577a4=a1_0x5db4;let _0x247090=Math['PI']/0x2*0x3,_0x400839=_0x2bdad6,_0x370550=_0xb4f1b;const _0x26fec8=Math['PI']/_0x2ed4b7;ctx[_0x5577a4(0x1c2)](),ctx['moveTo'](_0x2bdad6,_0xb4f1b-_0x2459c2);for(let _0x243228=0x0;_0x243228<_0x2ed4b7;_0x243228++){_0x400839=_0x2bdad6+Math[_0x5577a4(0x1a0)](_0x247090)*_0x2459c2,_0x370550=_0xb4f1b+Math[_0x5577a4(0x1b3)](_0x247090)*_0x2459c2,ctx[_0x5577a4(0x1bd)](_0x400839,_0x370550),_0x247090+=_0x26fec8,_0x400839=_0x2bdad6+Math[_0x5577a4(0x1a0)](_0x247090)*_0x21ee62,_0x370550=_0xb4f1b+Math[_0x5577a4(0x1b3)](_0x247090)*_0x21ee62,ctx[_0x5577a4(0x1bd)](_0x400839,_0x370550),_0x247090+=_0x26fec8;}ctx[_0x5577a4(0x1bd)](_0x2bdad6,_0xb4f1b-_0x2459c2),ctx[_0x5577a4(0x193)](),ctx[_0x5577a4(0x1c6)]();}function drawHexagonsPattern(_0x60be02,_0x1de2e4){const _0x3f2978=a1_0x5db4,{baseBackground:_0x96a305,color:_0x303cfe,size:_0x5d0514,spacing:_0x247bae}=_0x60be02;if(_0x96a305&&_0x96a305[_0x3f2978(0x194)])switch(_0x96a305['type']){case _0x3f2978(0x1b1):drawLinearGradient(_0x96a305,_0x1de2e4);break;case _0x3f2978(0x1b8):drawRadialGradient(_0x96a305,_0x1de2e4);break;case _0x3f2978(0x1cc):drawRadialDualGradient(_0x96a305,_0x1de2e4);break;default:console[_0x3f2978(0x19c)](_0x3f2978(0x19a)+_0x96a305[_0x3f2978(0x194)]+_0x3f2978(0x18e)),ctx[_0x3f2978(0x1b6)]=_0x3f2978(0x1a5),ctx['fillRect'](0x0,0x0,canvas[_0x3f2978(0x1b9)],canvas[_0x3f2978(0x1c4)]);break;}else ctx[_0x3f2978(0x1b6)]='#000000',ctx[_0x3f2978(0x1c7)](0x0,0x0,canvas[_0x3f2978(0x1b9)],canvas[_0x3f2978(0x1c4)]);const _0x16e8f5=Math['sqrt'](0x3)*_0x5d0514,_0x293bde=0x2*_0x5d0514,_0x7fe3c2=_0x16e8f5,_0x5ab098=1.5*_0x5d0514;ctx[_0x3f2978(0x1a1)]=_0x303cfe,ctx['lineWidth']=0x1;for(let _0x5dab45=0x0;_0x5dab45<canvas[_0x3f2978(0x1c4)];_0x5dab45+=_0x7fe3c2){for(let _0x3d0f1a=0x0;_0x3d0f1a<canvas['width'];_0x3d0f1a+=_0x5ab098){ctx[_0x3f2978(0x1c2)]();for(let _0x46dbf6=0x0;_0x46dbf6<0x6;_0x46dbf6++){const _0x5e5a08=Math['PI']/0x3*_0x46dbf6,_0x5b7ee2=_0x3d0f1a+_0x5d0514*Math[_0x3f2978(0x1a0)](_0x5e5a08),_0x277672=_0x5dab45+_0x5d0514*Math[_0x3f2978(0x1b3)](_0x5e5a08);_0x46dbf6===0x0?ctx[_0x3f2978(0x1a7)](_0x5b7ee2,_0x277672):ctx[_0x3f2978(0x1bd)](_0x5b7ee2,_0x277672);}ctx[_0x3f2978(0x193)](),ctx[_0x3f2978(0x1ce)]();}}}function drawConcentricCircles(_0x3a80b0,_0x34ade4){const _0xcd33be=a1_0x5db4,{baseBackground:_0x1e7b6a,colors:_0x336d97,maxRadius:_0x46571d,speed:_0x140475}=_0x3a80b0;if(_0x1e7b6a&&_0x1e7b6a[_0xcd33be(0x194)])switch(_0x1e7b6a['type']){case _0xcd33be(0x1b1):drawLinearGradient(_0x1e7b6a,_0x34ade4);break;case _0xcd33be(0x1b8):drawRadialGradient(_0x1e7b6a,_0x34ade4);break;case _0xcd33be(0x1cc):drawRadialDualGradient(_0x1e7b6a,_0x34ade4);break;default:console[_0xcd33be(0x19c)](_0xcd33be(0x19a)+_0x1e7b6a[_0xcd33be(0x194)]+'.\x20Usando\x20fundo\x20preto\x20como\x20fallback.'),ctx[_0xcd33be(0x1b6)]=_0xcd33be(0x1a5),ctx[_0xcd33be(0x1c7)](0x0,0x0,canvas[_0xcd33be(0x1b9)],canvas[_0xcd33be(0x1c4)]);break;}else ctx[_0xcd33be(0x1b6)]='#000000',ctx[_0xcd33be(0x1c7)](0x0,0x0,canvas[_0xcd33be(0x1b9)],canvas[_0xcd33be(0x1c4)]);ctx[_0xcd33be(0x1ab)](),ctx[_0xcd33be(0x199)](canvas[_0xcd33be(0x1b9)]/0x2,canvas['height']/0x2);for(let _0x3459d5=0x0;_0x3459d5<_0x336d97[_0xcd33be(0x1bb)];_0x3459d5++){const _0x44308a=(_0x3459d5+0x1)*(_0x46571d/_0x336d97[_0xcd33be(0x1bb)])+Math[_0xcd33be(0x1b3)](backgroundTime*_0x140475+_0x3459d5)*0xa;ctx[_0xcd33be(0x1c2)](),ctx[_0xcd33be(0x1cd)](0x0,0x0,_0x44308a,0x0,Math['PI']*0x2),ctx['strokeStyle']=_0x336d97[_0x3459d5],ctx['lineWidth']=0x2,ctx[_0xcd33be(0x1ce)]();}ctx[_0xcd33be(0x18f)]();}function a1_0x4b43(){const _0x758a88=['fillRect','3437118ClyGTx','squareTunnel','search','(((.+)+)+)+$','radial-dual','arc','stroke','2051GVgteL','createLinearGradient','speedMultiplier','240864lcwsEl','waves','#FFFFFF','2248470KNexss','addColorStop','7683395cKzYnN','.\x20Usando\x20fundo\x20preto\x20como\x20fallback.','restore','push','lineWidth','35240KvACCI','closePath','type','spiral','min','horizontal','Propriedade\x20\x22center\x22\x20inválida\x20no\x20background\x20radial.','translate','Tipo\x20de\x20baseBackground\x20desconhecido:\x20','.\x20Usando\x20linear\x20diagonal\x20como\x20fallback.','warn','stars','dots','random','cos','strokeStyle','1454858bIbsOo','3588717SCFReH','floor','#000000','spiralGalaxy','moveTo','diagonal1','rotation','90FNOOUk','save','diagonal2','Tipo\x20de\x20background\x20desconhecido:\x20','rotatingStars','triangleTunnel','grid','linear','checkerboard','sin','rotate','now','fillStyle','createRadialGradient','radial','width','apply','length','animatedDots','lineTo','number','constructor','toString','6BJGaiv','beginPath','hexagons','height','error','fill'];a1_0x4b43=function(){return _0x758a88;};return a1_0x4b43();}function drawWavesPattern(_0x3f3c70,_0x228d06){const _0x15276a=a1_0x5db4,{baseBackground:_0x45b685,color:_0x4a50ae,amplitude:_0x227f5f,frequency:_0x2b9f5a,speed:_0x1b69a8}=_0x3f3c70;if(_0x45b685&&_0x45b685[_0x15276a(0x194)])switch(_0x45b685[_0x15276a(0x194)]){case _0x15276a(0x1b1):drawLinearGradient(_0x45b685,_0x228d06);break;case'radial':drawRadialGradient(_0x45b685,_0x228d06);break;case _0x15276a(0x1cc):drawRadialDualGradient(_0x45b685,_0x228d06);break;default:console['warn'](_0x15276a(0x19a)+_0x45b685[_0x15276a(0x194)]+_0x15276a(0x18e)),ctx[_0x15276a(0x1b6)]=_0x15276a(0x1a5),ctx[_0x15276a(0x1c7)](0x0,0x0,canvas[_0x15276a(0x1b9)],canvas[_0x15276a(0x1c4)]);break;}else ctx[_0x15276a(0x1b6)]=_0x15276a(0x1a5),ctx[_0x15276a(0x1c7)](0x0,0x0,canvas[_0x15276a(0x1b9)],canvas['height']);ctx[_0x15276a(0x1a1)]=_0x4a50ae,ctx[_0x15276a(0x191)]=0x2,ctx[_0x15276a(0x1c2)]();for(let _0x249a3f=0x0;_0x249a3f<=canvas['width'];_0x249a3f+=0xa){const _0x5e9b55=canvas[_0x15276a(0x1c4)]/0x2+_0x227f5f*Math[_0x15276a(0x1b3)](_0x249a3f/canvas[_0x15276a(0x1b9)]*_0x2b9f5a*0x2*Math['PI']+backgroundTime*_0x1b69a8);_0x249a3f===0x0?ctx['moveTo'](_0x249a3f,_0x5e9b55):ctx[_0x15276a(0x1bd)](_0x249a3f,_0x5e9b55);}ctx[_0x15276a(0x1ce)]();}function drawCheckerboardPattern(_0x5ee258,_0x14b523){const _0x125f7d=a1_0x5db4,{baseBackground:_0x375798,color1:_0xc5b99d,color2:_0x29b1ea,tileSize:_0x52e1fa}=_0x5ee258;if(_0x375798&&_0x375798['type'])switch(_0x375798[_0x125f7d(0x194)]){case _0x125f7d(0x1b1):drawLinearGradient(_0x375798,_0x14b523);break;case _0x125f7d(0x1b8):drawRadialGradient(_0x375798,_0x14b523);break;case _0x125f7d(0x1cc):drawRadialDualGradient(_0x375798,_0x14b523);break;default:console['warn'](_0x125f7d(0x19a)+_0x375798[_0x125f7d(0x194)]+'.\x20Usando\x20fundo\x20preto\x20como\x20fallback.'),ctx[_0x125f7d(0x1b6)]=_0x125f7d(0x1a5),ctx[_0x125f7d(0x1c7)](0x0,0x0,canvas[_0x125f7d(0x1b9)],canvas[_0x125f7d(0x1c4)]);break;}else ctx[_0x125f7d(0x1b6)]=_0x125f7d(0x1a5),ctx[_0x125f7d(0x1c7)](0x0,0x0,canvas[_0x125f7d(0x1b9)],canvas['height']);for(let _0x7a455e=0x0;_0x7a455e<canvas[_0x125f7d(0x1c4)];_0x7a455e+=_0x52e1fa){for(let _0x363c16=0x0;_0x363c16<canvas[_0x125f7d(0x1b9)];_0x363c16+=_0x52e1fa){(_0x363c16/_0x52e1fa+_0x7a455e/_0x52e1fa)%0x2===0x0?ctx[_0x125f7d(0x1b6)]=_0xc5b99d:ctx[_0x125f7d(0x1b6)]=_0x29b1ea,ctx[_0x125f7d(0x1c7)](_0x363c16,_0x7a455e,_0x52e1fa,_0x52e1fa);}}}function drawPolygonTunnelPattern(_0x1a84aa,_0x303d24){const _0x30a464=a1_0x5db4,{color:_0x54780e,numSides:_0x54747d,radius:_0x5ba6c2,speed:_0xad141e}=_0x1a84aa;ctx[_0x30a464(0x1ab)](),ctx[_0x30a464(0x199)](canvas[_0x30a464(0x1b9)]/0x2,canvas[_0x30a464(0x1c4)]/0x2),ctx['rotate'](backgroundTime*_0xad141e),ctx[_0x30a464(0x1a1)]=_0x54780e,ctx['lineWidth']=0x2,ctx[_0x30a464(0x1c2)]();for(let _0x1763b2=0x0;_0x1763b2<=_0x54747d;_0x1763b2++){const _0x1b9af3=_0x1763b2/_0x54747d*0x2*Math['PI'],_0x295671=_0x5ba6c2*Math[_0x30a464(0x1a0)](_0x1b9af3),_0x41068f=_0x5ba6c2*Math[_0x30a464(0x1b3)](_0x1b9af3);_0x1763b2===0x0?ctx[_0x30a464(0x1a7)](_0x295671,_0x41068f):ctx[_0x30a464(0x1bd)](_0x295671,_0x41068f);}ctx[_0x30a464(0x193)](),ctx[_0x30a464(0x1ce)](),ctx[_0x30a464(0x18f)]();}function drawLinearGradient(_0x169321,_0xe4e1bc){const _0x1e14c5=a1_0x5db4,{direction:_0xdc6376,A1:_0x2d0297,A2:_0x5adfab,B1:_0x27ffbb,B2:_0x2ac59e}=_0x169321,_0x287ce7=backgroundTime*0.5*difficultyConfig[_0x1e14c5(0x1d1)],_0x26dc39=(Math[_0x1e14c5(0x1b3)](_0x287ce7)+0x1)/0x2,_0x5ec5cd=interpolateColor(_0x2d0297,_0x5adfab,_0x26dc39),_0x1fe5df=interpolateColor(_0x27ffbb,_0x2ac59e,_0x26dc39);let _0x1658b6;switch(_0xdc6376){case _0x1e14c5(0x197):_0x1658b6=ctx[_0x1e14c5(0x1d0)](0x0,0x0,canvas[_0x1e14c5(0x1b9)],0x0);break;case'vertical':_0x1658b6=ctx[_0x1e14c5(0x1d0)](0x0,0x0,0x0,canvas['height']);break;case _0x1e14c5(0x1a8):_0x1658b6=ctx[_0x1e14c5(0x1d0)](0x0,0x0,canvas[_0x1e14c5(0x1b9)],canvas[_0x1e14c5(0x1c4)]);break;case _0x1e14c5(0x1ac):_0x1658b6=ctx[_0x1e14c5(0x1d0)](canvas['width'],0x0,0x0,canvas[_0x1e14c5(0x1c4)]);break;case'angle':const _0x4657d1=_0x169321['angle'],_0x143c04=Math[_0x1e14c5(0x1a0)](_0x4657d1)*canvas[_0x1e14c5(0x1b9)],_0x3f1f7c=Math['sin'](_0x4657d1)*canvas[_0x1e14c5(0x1c4)];_0x1658b6=ctx[_0x1e14c5(0x1d0)](0x0,0x0,_0x143c04,_0x3f1f7c);break;case'horizontal-reverse':_0x1658b6=ctx[_0x1e14c5(0x1d0)](canvas['width'],0x0,0x0,0x0);break;default:_0x1658b6=ctx['createLinearGradient'](0x0,0x0,canvas[_0x1e14c5(0x1b9)],canvas[_0x1e14c5(0x1c4)]);break;}_0x1658b6['addColorStop'](0x0,_0x5ec5cd),_0x1658b6[_0x1e14c5(0x18c)](0x1,_0x1fe5df),ctx['fillStyle']=_0x1658b6,ctx[_0x1e14c5(0x1c7)](0x0,0x0,canvas[_0x1e14c5(0x1b9)],canvas['height']);}function drawGridPattern(_0x27fca6){const _0x57b5ad=a1_0x5db4,{color1:_0x4351d4,color2:_0x53e29c,spacing:_0x7c53da}=_0x27fca6;ctx['strokeStyle']=_0x4351d4,ctx[_0x57b5ad(0x191)]=0x1;for(let _0x12efa4=0x0;_0x12efa4<canvas[_0x57b5ad(0x1b9)];_0x12efa4+=_0x7c53da){ctx[_0x57b5ad(0x1c2)](),ctx[_0x57b5ad(0x1a7)](_0x12efa4,0x0),ctx['lineTo'](_0x12efa4,canvas[_0x57b5ad(0x1c4)]),ctx[_0x57b5ad(0x1ce)]();}ctx[_0x57b5ad(0x1a1)]=_0x53e29c;for(let _0x1efb54=0x0;_0x1efb54<canvas[_0x57b5ad(0x1c4)];_0x1efb54+=_0x7c53da){ctx['beginPath'](),ctx[_0x57b5ad(0x1a7)](0x0,_0x1efb54),ctx[_0x57b5ad(0x1bd)](canvas[_0x57b5ad(0x1b9)],_0x1efb54),ctx[_0x57b5ad(0x1ce)]();}}function a1_0x5db4(_0x47e8d0,_0x5b5451){const _0xf34164=a1_0x4b43();return a1_0x5db4=function(_0xb6b061,_0x432445){_0xb6b061=_0xb6b061-0x189;let _0x4b433f=_0xf34164[_0xb6b061];return _0x4b433f;},a1_0x5db4(_0x47e8d0,_0x5b5451);}function drawSpiralPattern(_0x543fa1,_0x599cc7){const _0xfcff73=a1_0x5db4,{baseBackground:_0x2536a9,spiralColor:_0x4a705f,lineWidth:_0x4590ed,rotationSpeed:_0x3d8ac1}=_0x543fa1;if(_0x2536a9&&_0x2536a9['type'])switch(_0x2536a9[_0xfcff73(0x194)]){case _0xfcff73(0x1b1):drawLinearGradient(_0x2536a9,_0x599cc7);break;case _0xfcff73(0x1b8):drawRadialGradient(_0x2536a9,_0x599cc7);break;case'radial-dual':drawRadialDualGradient(_0x2536a9,_0x599cc7);break;default:console[_0xfcff73(0x19c)](_0xfcff73(0x19a)+_0x2536a9[_0xfcff73(0x194)]+_0xfcff73(0x18e)),ctx[_0xfcff73(0x1b6)]=_0xfcff73(0x1a5),ctx[_0xfcff73(0x1c7)](0x0,0x0,canvas[_0xfcff73(0x1b9)],canvas[_0xfcff73(0x1c4)]);break;}else ctx['fillStyle']=_0xfcff73(0x1a5),ctx[_0xfcff73(0x1c7)](0x0,0x0,canvas['width'],canvas[_0xfcff73(0x1c4)]);ctx['save'](),ctx[_0xfcff73(0x199)](canvas['width']/0x2,canvas[_0xfcff73(0x1c4)]/0x2),ctx[_0xfcff73(0x1b4)](_0x3d8ac1*_0x599cc7),ctx[_0xfcff73(0x1a1)]=_0x4a705f,ctx['lineWidth']=_0x4590ed,ctx[_0xfcff73(0x1c2)]();const _0x55c198=0x5,_0x59c107=0xa;for(let _0x87b16d=0x0;_0x87b16d<=_0x55c198*0x2*Math['PI'];_0x87b16d+=0.1){const _0x55c122=_0x59c107*_0x87b16d,_0x52bf9d=_0x55c122*Math[_0xfcff73(0x1a0)](_0x87b16d),_0x586dad=_0x55c122*Math[_0xfcff73(0x1b3)](_0x87b16d);_0x87b16d===0x0?ctx[_0xfcff73(0x1a7)](_0x52bf9d,_0x586dad):ctx[_0xfcff73(0x1bd)](_0x52bf9d,_0x586dad);}ctx['stroke'](),ctx['restore']();}function drawTriangleTunnelPattern(_0x18dd60,_0x481f4e){const _0x30eb66=a1_0x5db4,{color:_0x237aab,triangleSize:_0x378142,speed:_0x4f99a9}=_0x18dd60;ctx[_0x30eb66(0x1ab)](),ctx[_0x30eb66(0x199)](canvas[_0x30eb66(0x1b9)]/0x2,canvas[_0x30eb66(0x1c4)]/0x2),ctx[_0x30eb66(0x1b6)]=_0x237aab,ctx[_0x30eb66(0x1a1)]=_0x237aab,ctx[_0x30eb66(0x191)]=0x1;const _0x22b546=performance[_0x30eb66(0x1b5)]()/0x3e8*_0x4f99a9,_0x14c036=0x24;for(let _0x40209c=0x0;_0x40209c<_0x14c036;_0x40209c++){const _0x45298e=_0x40209c/_0x14c036*0x2*Math['PI']+_0x22b546,_0x2562cc=Math[_0x30eb66(0x1a0)](_0x45298e)*0xc8,_0x1dca93=Math[_0x30eb66(0x1b3)](_0x45298e)*0xc8;ctx[_0x30eb66(0x1c2)](),ctx['moveTo'](_0x2562cc,_0x1dca93),ctx[_0x30eb66(0x1bd)](_0x2562cc+Math[_0x30eb66(0x1a0)](_0x45298e+Math['PI']/0x3)*_0x378142,_0x1dca93+Math[_0x30eb66(0x1b3)](_0x45298e+Math['PI']/0x3)*_0x378142),ctx[_0x30eb66(0x1bd)](_0x2562cc+Math[_0x30eb66(0x1a0)](_0x45298e-Math['PI']/0x3)*_0x378142,_0x1dca93+Math[_0x30eb66(0x1b3)](_0x45298e-Math['PI']/0x3)*_0x378142),ctx[_0x30eb66(0x193)](),ctx[_0x30eb66(0x1c6)]();}ctx[_0x30eb66(0x18f)]();}function drawSquareTunnelPattern(_0x2a4c39,_0xcb83be){const _0x582f98=a1_0x5db4,{color:_0x47daff,squareSize:_0x189504,speed:_0x12b4b4}=_0x2a4c39;ctx[_0x582f98(0x1ab)](),ctx[_0x582f98(0x199)](canvas['width']/0x2,canvas['height']/0x2),ctx[_0x582f98(0x1b6)]=_0x47daff,ctx[_0x582f98(0x1a1)]=_0x47daff,ctx[_0x582f98(0x191)]=0x1;const _0xab83e9=performance[_0x582f98(0x1b5)]()/0x3e8*_0x12b4b4,_0x35fce1=0x24;for(let _0xb754fd=0x0;_0xb754fd<_0x35fce1;_0xb754fd++){const _0x134a97=_0xb754fd/_0x35fce1*0x2*Math['PI']+_0xab83e9,_0x25cae8=Math[_0x582f98(0x1a0)](_0x134a97)*0xc8,_0x5f13c7=Math[_0x582f98(0x1b3)](_0x134a97)*0xc8;ctx[_0x582f98(0x1c2)](),ctx['rect'](_0x25cae8-_0x189504/0x2,_0x5f13c7-_0x189504/0x2,_0x189504,_0x189504),ctx[_0x582f98(0x1c6)]();}ctx[_0x582f98(0x18f)]();}function drawRadialGradient(_0x27aca3,_0x4a9376){const _0x5e3ed4=a1_0x5db4,{center:_0x3cd8f1,radius:_0x349780,A1:_0x2c8e52,A2:_0x1a2dbc,B1:_0x435890,B2:_0x3801d7}=_0x27aca3;if(!_0x3cd8f1||typeof _0x3cd8f1['x']!==_0x5e3ed4(0x1be)||typeof _0x3cd8f1['y']!==_0x5e3ed4(0x1be)){console['error'](_0x5e3ed4(0x198));return;}if(typeof _0x349780!==_0x5e3ed4(0x1be)){console[_0x5e3ed4(0x1c5)]('Propriedade\x20\x22radius\x22\x20inválida\x20no\x20background\x20radial.');return;}if(!_0x2c8e52||!_0x1a2dbc||!_0x435890||!_0x3801d7){console[_0x5e3ed4(0x1c5)]('Propriedades\x20de\x20cor\x20\x22A1\x22,\x20\x22A2\x22,\x20\x22B1\x22,\x20\x22B2\x22\x20são\x20necessárias\x20no\x20background\x20radial.');return;}const _0x1ecc53=backgroundTime*0.5*(_0x27aca3[_0x5e3ed4(0x1d1)]||0x1),_0x1c0c44=(Math[_0x5e3ed4(0x1b3)](_0x1ecc53)+0x1)/0x2,_0x52e08e=interpolateColor(_0x2c8e52,_0x1a2dbc,_0x1c0c44),_0x26b948=interpolateColor(_0x435890,_0x3801d7,_0x1c0c44),_0x1442c3=_0x3cd8f1['x']*canvas['width'],_0x2cc914=_0x3cd8f1['y']*canvas[_0x5e3ed4(0x1c4)],_0x1ac572=_0x349780*Math[_0x5e3ed4(0x196)](canvas[_0x5e3ed4(0x1b9)],canvas[_0x5e3ed4(0x1c4)]),_0x3babe8=ctx[_0x5e3ed4(0x1b7)](_0x1442c3,_0x2cc914,0x0,_0x1442c3,_0x2cc914,_0x1ac572);_0x3babe8['addColorStop'](0x0,_0x52e08e),_0x3babe8[_0x5e3ed4(0x18c)](0x1,_0x26b948),ctx[_0x5e3ed4(0x1b6)]=_0x3babe8,ctx['fillRect'](0x0,0x0,canvas[_0x5e3ed4(0x1b9)],canvas[_0x5e3ed4(0x1c4)]);}