!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).calculate={})}(this,(function(e){"use strict";function n(e,n,t,r){return new(t||(t=Promise))((function(o,u){function i(e){try{l(r.next(e))}catch(e){u(e)}}function c(e){try{l(r.throw(e))}catch(e){u(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}l((r=r.apply(e,n||[])).next())}))}function t(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;u&&(u=0,c[0]&&(i=0)),i;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&o[3]>c[1])){i.label=c[1];break}if(6===c[0]&&o[1]>i.label){i.label=o[1],o=c;break}if(o&&o[2]>i.label){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function r(e){return n(this,void 0,void 0,(function(){return t(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){setTimeout((function(){n(null)}),e)}))];case 1:return n.sent(),[2]}}))}))}"function"==typeof SuppressedError&&SuppressedError,e.isEmpty=function(e){return""===e||null==e},e.request=function(){return n(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return[4,r(4e3)];case 1:return e.sent(),[2]}}))}))},e.sleep=r}));