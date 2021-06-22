(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var f=function(a,b,c){return a.call.apply(a.bind,arguments)},g=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},k=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?k=f:k=g;return k.apply(null,arguments)},m=function(a){var b=
["google","elements","keyboard","hangulTransform"],c=l;b[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===a?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=a},n=function(){this.g="\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(" ");
this.i={"\u1104":"\u1104","\u1108":"\u1108","\u110d":"\u110d"};for(var a=0;a<this.g.length;a++)this.i[this.g[a]]=String.fromCharCode(4520+a);this.u={"\u1169\u1161":"\u116a","\u1169\u1162":"\u116b","\u1169\u1175":"\u116c","\u116e\u1165":"\u116f","\u116e\u1166":"\u1170","\u116e\u1175":"\u1171","\u1173\u1175":"\u1174"};this.D=/[\u11a8-\u11c3]/g;this.C=/\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175/g;this.A=/[\uac00-\ud7af]/g;this.B=/([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g;
this.l=/([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])/;this.F=/([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))/;this.G=/([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))/;this.m=/([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))/;this.h={"\u1107":"\u3142","\u110c":"\u3148","\u1103":"\u3137","\u1100":"\u3131",
"\u1109":"\u3145","\u116d":"\u315b","\u1167":"\u3155","\u1163":"\u3151","\u1162":"\u3150","\u1166":"\u3154","\u1106":"\u3141","\u1102":"\u3134","\u110b":"\u3147","\u1105":"\u3139","\u1112":"\u314e","\u1169":"\u3157","\u1165":"\u3153","\u1161":"\u314f","\u1175":"\u3163","\u110f":"\u314b","\u1110":"\u314c","\u110e":"\u314a","\u1111":"\u314d","\u1172":"\u3160","\u116e":"\u315c","\u1173":"\u3161","\u1108":"\u3143","\u110d":"\u3149","\u1104":"\u3138","\u1101":"\u3132","\u110a":"\u3146","\u1164":"\u3152",
"\u1168":"\u3156"};this.j={};for(var b in this.h)this.j[this.h[b]]=b},p=function(a,b){return b.replace(a.D,function(c){return a.g[c.charCodeAt(0)-4519-1]})},q=function(a,b){return b.replace(a.C,function(c){return a.u[c]})},l=this||self;n.prototype.s=function(a){a=a.charCodeAt(0)-44032;var b=4519+a%28;return String.fromCharCode(4352+a/588)+String.fromCharCode(4449+a%588/28)+(4519==b?"":String.fromCharCode(b))};n.prototype.o=function(a){return String.fromCharCode(28*(21*(a.charCodeAt(0)-4352)+(a.charCodeAt(1)-4449))+(3<=a.length?a.charCodeAt(2)-4519:0)+44032)};n.prototype.v=function(a,b,c,d){return b+this.i[c]+d};
(function(){var a=new n;m(function(b){b=b.replace("\u001d","");for(var c="",d=0,e;e=b.charAt(d);++d){var h=a.j[e];c+=h?h:e}b=c.replace(a.A,k(a.s,a));c=k(a.v,a);b=q(a,p(a,b)).replace(a.l,c).replace(a.F,c).replace(a.G,c).replace(a.m,c).replace(a.B,k(a.o,a));c="";for(d=0;e=b.charAt(d);++d)h=a.h[e],c+=h?h:e;return c})})();new n;google.elements.keyboard.loadme({id:"be",title:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",mappings:{",c":{"":"\u04511234567890-=\u0439\u0446\u0443\u043a\u0435\u043d\u0433\u0448\u045e\u0437\u0445'\\\u0444\u044b\u0432\u0430\u043f\u0440\u043e\u043b\u0434\u0436\u044d\u044f\u0447\u0441\u043c\u0456\u0442\u044c\u0431\u044e."},"s,sc":{"":"\u0401!\"\u2116;%:?*()_+\u0419\u0426\u0423\u041a\u0415\u041d\u0413\u0428\u040e\u0417\u0425'/\u0424\u042b\u0412\u0410\u041f\u0420\u041e\u041b\u0414\u0416\u042d\u042f\u0427\u0421\u041c\u0406\u0422\u042c\u0411\u042e,"},
"l,cl":{"":"\u04011234567890-=\u0419\u0426\u0423\u041a\u0415\u041d\u0413\u0428\u040e\u0417\u0425'\\\u0424\u042b\u0412\u0410\u041f\u0420\u041e\u041b\u0414\u0416\u042d\u042f\u0427\u0421\u041c\u0406\u0422\u042c\u0411\u042e."},"sl,scl":{"":"\u0451!\"\u2116;%:?*()_+\u0439\u0446\u0443\u043a\u0435\u043d\u0433\u0448\u045e\u0437\u0445'/\u0444\u044b\u0432\u0430\u043f\u0440\u043e\u043b\u0434\u0436\u044d\u044f\u0447\u0441\u043c\u0456\u0442\u044c\u0431\u044e,"}}});}).call(this);