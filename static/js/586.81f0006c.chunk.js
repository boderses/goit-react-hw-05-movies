"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[586],{913:function(e,r,t){t.d(r,{Df:function(){return s},M1:function(){return p},TP:function(){return o},tx:function(){return f},zi:function(){return i}});var n=t(861),a=t(687),u=t.n(a),c=t(44).ZP.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/trending/movie/day?api_key=29ae5d4d8930c615329fddbb049af986");case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/search/movie?query=".concat(r,"&api_key=29ae5d4d8930c615329fddbb049af986&language=en-US&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movie/".concat(r,"?api_key=29ae5d4d8930c615329fddbb049af986&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movie/".concat(r,"/credits?api_key=29ae5d4d8930c615329fddbb049af986&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/movie/".concat(r,"/reviews?api_key=29ae5d4d8930c615329fddbb049af986&language=en-US&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",Promise.reject(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}()},586:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var n=t(885),a=t(791),u=t(689),c=t(913),s=t(184);function i(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],i=r[1],o=(0,u.UO)().movieId;return(0,a.useEffect)((function(){(0,c.M1)(o).then(i)}),[o]),(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsxs)("li",{children:[e.profile_path&&(0,s.jsx)("img",{src:"https://www.themoviedb.org/t/p/w500/".concat(e.profile_path),alt:e.name}),(0,s.jsxs)("p",{children:["Name: ",e.name]}),(0,s.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))}),0===t.length&&(0,s.jsx)("p",{children:"We don't have information about the cast"})]})}}}]);
//# sourceMappingURL=586.81f0006c.chunk.js.map