(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{UNS5:function(t,e,r){"use strict";r.r(e);var i=r("dI71"),n=r("q1tI"),o=r.n(n),a=r("lxDd"),c=(r("i8i4"),r("pLLy")),s=r("5VxJ"),u=r("vuIU"),p=r("rePB"),h=r("hAA0"),l=r("YiiH"),d=r("R25c"),f=r("1+Ew"),v=r("lKxY"),b=r("rBR8"),g=r("kDl2");function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(p.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P={position:[0,0,0],pitch:0,bearing:0,maxPitch:90,minPitch:-90},w=function(t){function e(e){var r,i=e.width,n=e.height,o=e.position,a=void 0===o?P.position:o,c=e.bearing,s=void 0===c?P.bearing:c,u=e.pitch,p=void 0===u?P.pitch:u,h=e.longitude,l=e.latitude,d=e.maxPitch,f=void 0===d?P.maxPitch:d,v=e.minPitch,b=void 0===v?P.minPitch:v,g=e.startRotatePos,m=e.startBearing,O=e.startPitch,w=e.startZoomPosition,y=e.startZoom;return(r=t.call(this,{width:i,height:n,position:a,bearing:s,pitch:p,longitude:h,latitude:l,maxPitch:f,minPitch:b})||this)._state={startRotatePos:g,startBearing:m,startPitch:O,startZoomPosition:w,startZoom:y},r}Object(i.a)(e,t);var r=e.prototype;return r.getDirection=function(t){return void 0===t&&(t=!1),new f.c({bearing:this._viewportProps.bearing,pitch:t?90:90+this._viewportProps.pitch}).toVector3().normalize()},r.panStart=function(){return this},r.pan=function(){return this},r.panEnd=function(){return this},r.rotateStart=function(t){var e=t.pos;return this._getUpdatedState({startRotatePos:e,startBearing:this._viewportProps.bearing,startPitch:this._viewportProps.pitch})},r.rotate=function(t){var e,r=t.pos,i=t.deltaAngleX,n=void 0===i?0:i,o=t.deltaAngleY,a=void 0===o?0:o,c=this._state,s=c.startRotatePos,u=c.startBearing,p=c.startPitch,h=this._viewportProps,l=h.width,d=h.height;if(!s||!Number.isFinite(u)||!Number.isFinite(p))return this;r?e={bearing:u-180*((r[0]-s[0])/l),pitch:p-90*((r[1]-s[1])/d)}:e={bearing:u-n,pitch:p-a};return this._getUpdatedState(e)},r.rotateEnd=function(){return this._getUpdatedState({startRotatePos:null,startBearing:null,startPitch:null})},r.zoomStart=function(){return this._getUpdatedState({startZoomPosition:this._viewportProps.position,startZoom:this._viewportProps.zoom})},r.zoom=function(t){var e=t.scale,r=this._state.startZoomPosition;r||(r=this._viewportProps.position);var i=this.getDirection();return this._move(i,20*Math.log2(e),r)},r.zoomEnd=function(){return this._getUpdatedState({startZoomPosition:null,startZoom:null})},r.moveLeft=function(t){void 0===t&&(t=20);var e=this.getDirection(!0);return this._move(e.rotateZ({radians:Math.PI/2}),t)},r.moveRight=function(t){void 0===t&&(t=20);var e=this.getDirection(!0);return this._move(e.rotateZ({radians:-Math.PI/2}),t)},r.moveUp=function(t){void 0===t&&(t=20);var e=this.getDirection(!0);return this._move(e,t)},r.moveDown=function(t){void 0===t&&(t=20);var e=this.getDirection(!0);return this._move(e.negate(),t)},r.rotateLeft=function(t){return void 0===t&&(t=15),this._getUpdatedState({bearing:this._viewportProps.bearing-t})},r.rotateRight=function(t){return void 0===t&&(t=15),this._getUpdatedState({bearing:this._viewportProps.bearing+t})},r.rotateUp=function(t){return void 0===t&&(t=10),this._getUpdatedState({pitch:this._viewportProps.pitch+t})},r.rotateDown=function(t){return void 0===t&&(t=10),this._getUpdatedState({pitch:this._viewportProps.pitch-t})},r.zoomIn=function(t){return void 0===t&&(t=2),this.zoom({scale:t})},r.zoomOut=function(t){return void 0===t&&(t=2),this.zoom({scale:1/t})},r.shortestPathFrom=function(t){var e=t.getViewportProps(),r=O({},this._viewportProps),i=r.bearing,n=r.longitude;return Math.abs(i-e.bearing)>180&&(r.bearing=i<0?i+360:i-360),Math.abs(n-e.longitude)>180&&(r.longitude=n<0?n+360:n-360),r},r._move=function(t,e,r){void 0===r&&(r=this._viewportProps.position);var i=t.scale(e);return this._getUpdatedState({position:new f.b(r).add(i)})},r._getUpdatedState=function(t){return new e(O(O(O({},this._viewportProps),this._state),t))},r._applyConstraints=function(t){var e=t.pitch,r=t.maxPitch,i=t.minPitch,n=t.longitude,o=t.bearing;return t.pitch=Object(f.d)(e,i,r),(n<-180||n>180)&&(t.longitude=Object(g.e)(n+180,360)-180),(o<-180||o>180)&&(t.bearing=Object(g.e)(o+180,360)-180),t},e}(b.a),y=function(t){function e(e){return t.call(this,w,e)||this}return Object(i.a)(e,t),Object(u.a)(e,[{key:"linearTransitionProps",get:function(){return["position","pitch","bearing"]}}]),e}(v.a);function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){Object(p.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S=function(t){function e(e){var r=e.modelMatrix,i=void 0===r?null:r,n=e.bearing,o=void 0===n?0:n,a=e.pitch,c=void 0===a?0:a,s=e.up,u=void 0===s?[0,0,1]:s,p=function(t){var e=t.bearing,r=t.pitch;return new f.c({bearing:e,pitch:r}).toVector3().normalize()}({bearing:o,pitch:-90===c?1e-4:90+c}),h=i?i.transformDirection(p):p,l=Object(d.j)(e),v=Math.pow(2,l),b=(new f.a).lookAt({eye:[0,0,0],center:h,up:u}).scale(v);return t.call(this,_(_({},e),{},{zoom:l,viewMatrix:b}))||this}return Object(i.a)(e,t),e}(l.a),D=function(t){function e(e){return t.call(this,_(_({},e),{},{type:S}))||this}return Object(i.a)(e,t),Object(u.a)(e,[{key:"controller",get:function(){return this._getControllerProps({type:y})}}]),e}(h.a);D.displayName="FirstPersonView";var A=r("Cdqv"),E=r("vJI4"),R=new E.a({nlat:50,nlong:50,radius:150}),k={width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:.5},U={latitude:0,longitude:0,position:[0,0,0],pitch:0,bearing:90};function M(){var t=Object(n.useState)(!1),e=t[0],r=t[1],i=Object(n.useState)(null),a=i[0],u=i[1];Object(n.useEffect)((function(){var t;if("undefined"!=typeof document){(t=document.createElement("video")).crossOrigin="anonymous",t.preload="auto",t.loop=!0;var e=document.createElement("source");e.src="https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0a/NASA_VR-360_Astronaut_Training-_Space_Walk.webm/NASA_VR-360_Astronaut_Training-_Space_Walk.webm.1080p.webm",t.append(e),u(t)}return function(){return t&&t.pause()}}),[]);var p=new A.a({id:"video-sphere",data:[0],coordinateSystem:s.a.METER_OFFSETS,texture:a,mesh:R,getPosition:function(t){return[0,0,0]},getOrientation:[0,0,-90],getScale:[1,1,-1],material:!1});return o.a.createElement(c.a,{views:new D,initialViewState:U,controller:{scrollZoom:!1,doubleClickZoom:!1},layers:[p],onClick:function(){e?a.pause():a.play(),r(!e)},_animate:!0},!e&&o.a.createElement("div",{style:k},o.a.createElement("img",{src:"/images/play.png",width:150})))}var z=r("CtqP"),x=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.renderInfo=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"The 360 video was created by NASA Jet Propulsion Laboratory, Public domain, via",o.a.createElement("a",{href:"https://commons.wikimedia.org/wiki/File:NASA_VR-360_Astronaut_Training-_Space_Walk.webm"}," Wikimedia Commons")))},e.prototype.render=function(){return o.a.createElement(M,this.props)},e}(n.Component);x.title="360 Video: NASA Astronaut Training",x.code=a.b+"/examples/website/360-video";e.default=Object(z.a)(x)},vJI4:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var i=r("rePB"),n=r("1OyB"),o=r("Ji7U"),a=r("md7G"),c=r("foSv"),s=r("7G5M"),u=r("HYgG");function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,i=Object(c.a)(t);if(e){var n=Object(c.a)(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return Object(a.a)(this,r)}}var d=function(t){Object(o.a)(r,t);var e=l(r);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(n.a)(this,r);var i=t.id,o=void 0===i?Object(u.c)("sphere-geometry"):i,a=f(t),c=a.indices,s=a.attributes;return e.call(this,h(h({},t),{},{id:o,indices:c,attributes:h(h({},s),t.attributes)}))}return r}(s.a);function f(t){var e=t.nlat,r=void 0===e?10:e,i=t.nlong,n=void 0===i?10:i,o=t.radius,a=void 0===o?1:o,c=Math.PI-0,s=2*Math.PI-0,u=(r+1)*(n+1);if("number"==typeof a){var p=a;a=function(t,e,r,i,n){return p}}for(var h=new Float32Array(3*u),l=new Float32Array(3*u),d=new Float32Array(2*u),f=new(u>65535?Uint32Array:Uint16Array)(r*n*6),v=0;v<=r;v++)for(var b=0;b<=n;b++){var g=b/n,m=v/r,O=b+v*(n+1),P=2*O,w=3*O,y=s*g,j=c*m,_=Math.sin(y),S=Math.cos(y),D=Math.sin(j),A=S*D,E=Math.cos(j),R=_*D,k=a(A,E,R,g,m);h[w+0]=k*A,h[w+1]=k*E,h[w+2]=k*R,l[w+0]=A,l[w+1]=E,l[w+2]=R,d[P+0]=g,d[P+1]=1-m}for(var U=n+1,M=0;M<n;M++)for(var z=0;z<r;z++){var x=6*(M*r+z);f[x+0]=z*U+M,f[x+1]=z*U+M+1,f[x+2]=(z+1)*U+M,f[x+3]=(z+1)*U+M,f[x+4]=z*U+M+1,f[x+5]=(z+1)*U+M+1}return{indices:{size:1,value:f},attributes:{POSITION:{size:3,value:h},NORMAL:{size:3,value:l},TEXCOORD_0:{size:2,value:d}}}}}}]);