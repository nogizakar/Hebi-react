webpackJsonp([1],{0:function(t,e,n){n(162),t.exports=n(174)},56:function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),o=n(146),i=n(42),a=n(83),c=n(173),s=n(182);e.store=s["default"]({}),e.history=a.syncHistoryWithStore(o.browserHistory,e.store),e.getStore=function(){return e.store};var u=r.createClass({render:function(){return r.createElement(i.Provider,{store:e.store},r.createElement(o.Router,{history:e.history},r.createElement(o.Route,{path:"/",component:c["default"]}),r.createElement(o.Route,{path:"/Hebi-react",component:c["default"]})))}});e["default"]=u},87:function(t,e,n){"use strict";e.__esModule=!0;var r=n(19);e.setGameTime=r.createAction("set game time"),e.initSnack=r.createAction("init snake"),e.setSnack=r.createAction("set snake"),e.setFood=r.createAction("set food"),e.setSnackCurrentDirection=r.createAction("set snake current direction"),e.setSnackNextDirection=r.createAction("set snake next direction"),e.setGameInit=r.createAction("set game init"),e.getCode=r.createAction("get code"),e.clearCode=r.createAction("clear code"),e.setModal=r.createAction("set modal"),e.pauseGame=r.createAction("pause game"),e.setVolume=r.createAction("set volume")},88:function(t,e){"use strict";e.__esModule=!0,e.getSize=function(t){return{column:t.size.get("column"),row:t.size.get("row")}}},89:function(t,e){"use strict";e.__esModule=!0,e.getModal=function(t){return t.game.get("modal")}},162:function(t,e){(function(e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),c=new d(r||[]);return a._invoke=u(t,n,c),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function o(){}function i(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){function n(e,o,i,a){var c=r(t[e],t,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&_.call(u,"__await")?Promise.resolve(u.__await).then(function(t){n("next",t,i,a)},function(t){n("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},a)}a(c.arg)}function o(t,e){function r(){return new Promise(function(r,o){n(t,e,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof e.process&&e.process.domain&&(n=e.process.domain.bind(n));var i;this._invoke=o}function u(t,e,n){var o=S;return function(i,a){if(o===N)throw new Error("Generator is already running");if(o===j){if("throw"===i)throw a;return h()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=l(c,n);if(s){if(s===P)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===S)throw o=j,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=N;var u=r(t,e,n);if("normal"===u.type){if(o=n.done?j:k,u.arg===P)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=j,n.method="throw",n.arg=u.arg)}}}function l(t,e){var n=t.iterator[e.method];if(n===y){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=y,l(t,e),"throw"===e.method))return P;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,P;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=y),e.delegate=null,P):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,P)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function m(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function o(){for(;++n<t.length;)if(_.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=y,o.done=!0,o};return r.next=r}}return{next:h}}function h(){return{value:y,done:!0}}var y,v=Object.prototype,_=v.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",b=g.asyncIterator||"@@asyncIterator",E=g.toStringTag||"@@toStringTag",x="object"==typeof t,O=e.regeneratorRuntime;if(O)return void(x&&(t.exports=O));O=e.regeneratorRuntime=x?t.exports:{},O.wrap=n;var S="suspendedStart",k="suspendedYield",N="executing",j="completed",P={},M={};M[w]=function(){return this};var C=Object.getPrototypeOf,A=C&&C(C(m([])));A&&A!==v&&_.call(A,w)&&(M=A);var I=a.prototype=o.prototype=Object.create(M);i.prototype=I.constructor=a,a.constructor=i,a[E]=i.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create(I),t},O.awrap=function(t){return{__await:t}},c(s.prototype),s.prototype[b]=function(){return this},O.AsyncIterator=s,O.async=function(t,e,r,o){var i=new s(n(t,e,r,o));return O.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(I),I[E]="Generator",I[w]=function(){return this},I.toString=function(){return"[object Generator]"},O.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},O.values=m,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&_.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=y),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=_.call(o,"catchLoc"),c=_.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&_.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),P},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),P}},"catch":function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:m(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),P}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,function(){return this}())},164:function(t,e,n){"use strict";e.__esModule=!0;var r=n(19);e.resetSize=r.createAction("reset size")},165:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};e.__esModule=!0;var c=n(2),s=n(24),u=n(42),l=n(111),f=n(172),p=n(168),d=n(164),m=n(87);n(194);var h=function(t){function e(e){var n=t.call(this,e)||this;n.throttled=null,n.resetSize=function(){var t=document.getElementById("left").clientHeight,e=document.getElementById("left").clientWidth,r=Math.floor((e-15)/16)+1,o=Math.floor((t-15)/16)+2;n.setState({start:[{x:o-1,y:0,de:0,pm:1,index:1}]}),n.props.actions.resetSize({column:o,row:r}),setTimeout(function(){n.props.actions.setFood(),n.props.actions.initSnack()},0)},n.handleResize=function(){n.props.actions.resetSize({column:0,row:0}),setTimeout(n.resetSize,100)},n.getSnakePosition=function(t){var e=t.x,n=t.y;return{transform:"translate("+16*n+"px, "+16*e+"px)"}},n.dead=function(){n.props.actions.setGameInit(-1),n.props.actions.initSnack()},n.goNext=function(){var t=n.props,e=t.snake,r=t.direction,o=t.food,i=t.game,a=n.state.start,c=i.get("init"),s=i.get("time");if(c===-1){var u=a.length,l=n.getNewStartXY(a[u-1]);n.setState({start:a.concat(l)})}if(1===c&&!i.get("pause")){var f=e.toJS(),p=o.toJS(),d=n.getNextDirection();if(s%50===0){var m=n.getNext(f[0],d);if(n.isDead(m))return void n.dead();f.unshift(m),m.x!==p.x||m.y!==p.y?f.pop():(n.props.actions.getCode(),n.props.actions.setFood()),n.props.actions.setSnack(f),r.get("current")!==d&&n.props.actions.setSnackCurrentDirection(d)}s%25===0&&n.setFoodShowOrHide()}},n.getNext=function(t,e){var r=n.props,o=r.size,i=r.game,a=o.get("column"),c=o.get("row"),s=t.x+f.deX[e],u=t.y+f.deY[e];return 1===i.get("modal")?{x:s,y:u}:(s>=a&&(s=0),u>=c&&(u=0),s<0&&(s=a-1),u<0&&(u=c-1),{x:s,y:u})},n.getNextDirection=function(){var t=n.props.direction,e=t.get("current"),r=t.get("next");return 0===r&&1!==e?0:1===r&&0!==e?1:2===r&&3!==e?2:3===r&&2!==e?3:e},n.setFoodShowOrHide=function(){n.setState({showFood:!n.state.showFood})},n.getNewStartXY=function(t){var e=n.props.size,r=e.get("column"),o=e.get("row"),i={},a=t.x,c=t.y,s=t.de,u=t.pm,l=t.index;return i.x=1===s?a+u:a,i.y=0===s?c+u:c,i.de=s,i.pm=u,i.index=l,i.x===r-l-1&&i.y===l-1&&i.x!==Math.floor(r/2)&&i.y!==Math.floor(o/2)&&(i.index+=1),0===s&&(i.y===o-i.index||i.y===i.index-1&&i.x===l-1)&&(i.de=1),1!==s||i.x!==r-i.index&&i.x!==i.index-1||(i.de=0),i.y===o-i.index&&i.x===r-i.index&&(i.pm=-1),i.y===i.index-1&&i.x===i.index-1&&(i.pm=1),n.isInStart({x:i.x,y:i.y})&&n.props.game.get("init")===-1&&n.props.actions.setGameInit(0),i},n.resetStart=function(){var t=n.props.size.get("column");1===n.props.game.get("modal")?n.setState({start:[{x:t-2,y:1,de:0,pm:1,index:2}]}):n.setState({start:[{x:t-1,y:0,de:0,pm:1,index:1}]}),n.forceUpdate()};var r=e.size.get("column");return n.state={showFood:!0,start:[{x:r-1,y:0,de:0,pm:1,index:1}]},n}return r(e,t),e.prototype.isDead=function(t){var e=t.x,n=t.y,r=this.props,o=r.game,i=r.size,a=i.get("column"),c=i.get("row");if(1===o.get("modal")&&(0===e||0===n||e===a-1||n===c-1))return!0;var s=this.props.snake.toJS();return 0!==s.filter(function(t){return t.x===e&&t.y===n}).length},e.prototype.isInStart=function(t){var e=t.x,n=t.y;return 0!==this.state.start.filter(function(t){return t.x===e&&t.y===n}).length},e.prototype.componentDidMount=function(){this.resetSize(),this.throttled=l.throttle(this.handleResize,1e3,{trailing:!1}),window.addEventListener("resize",this.throttled),this.timer&&clearInterval(this.timer)},e.prototype.componentWillReceiveProps=function(t){t.game.get("time")!==this.props.game.get("time")&&this.goNext(),1===t.game.get("init")&&t.game.get("init")!==this.props.game.get("init")&&this.resetStart()},e.prototype.componentWillUnmount=function(){this.timer&&clearInterval(this.timer),window.removeEventListener("resize",this.throttled)},e.prototype.render=function(){var t=this,e=this.props,n=e.size,r=e.snake,o=e.food,i=e.game,a=this.state,s=a.showFood,u=a.start,l=i.get("init"),f=i.get("modal"),d=n.get("column"),m=n.get("row");return c.createElement("div",{className:"left",id:"left"},(0===l||l===-2)&&c.createElement(p["default"],null),[].fill.call(new Array(d),0).map(function(t,e){return[].fill.call(new Array(m),0).map(function(t,n){return 1!==f||0!==e&&0!==n&&e!==d-1&&n!==m-1?c.createElement("div",{className:"cell",key:e*m+n}):c.createElement("div",{className:"cell full-cell",key:e*m+n})})}),1===l&&r.map(function(e,n){return c.createElement("div",{key:n,style:t.getSnakePosition(e.toJS()),className:"cell snake-cell"})}),1===l&&c.createElement("div",{style:this.getSnakePosition(o.toJS()),className:"cell "+(s?"food-o-cell":"food-cell")}),l===-1&&u.map(function(e,n){return c.createElement("div",{key:n,style:t.getSnakePosition(e),className:"cell snake-cell"})}))},e=i([u.connect(function(t){return{size:t.size,snake:t.snake.get("snake"),food:t.food.get("food"),direction:t.direction,game:t.game}},function(t){return{actions:s.bindActionCreators(o({},d,m),t)}}),a("design:paramtypes",[Object])],e)}(c.Component);e["default"]=h},166:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(195);var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){return o.createElement("div",{className:"header"},o.createElement("div",{className:"left"},o.createElement("span",null),o.createElement("div",{className:"cell"}),o.createElement("div",{className:"cell"})),o.createElement("span",null,"贪恰蛇"),o.createElement("div",{className:"right"},o.createElement("div",{className:"top"},o.createElement("div",{className:"cell"}),o.createElement("div",{className:"cell"}),o.createElement("div",{className:"cell"})),o.createElement("div",{className:"bottom"},o.createElement("div",{className:"cell"})),o.createElement("span",null)))},e}(o.Component);e["default"]=i},167:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2),i=n(136);n(196);var a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleClick=function(t){e.props.handleKeyDown(t)},e}return r(e,t),e.prototype.render=function(){return o.createElement("div",{className:"keyboard"},o.createElement("div",{className:"left"},o.createElement("div",{className:"top"},o.createElement("ul",null,o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,4)}),o.createElement(i,{name:"pause"})),o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,0)}),o.createElement(i,{name:"undo"})))),o.createElement("div",{className:"bottom"},o.createElement("ul",null,o.createElement("li",null,o.createElement("button",{onClick:this.handleClick.bind(null,2)}),o.createElement(i,{name:"play"}))))),o.createElement("div",{className:"right"},o.createElement("div",{className:"direction"},o.createElement("div",{className:"top"},o.createElement("button",{onClick:this.handleClick.bind(null,38)},o.createElement(i,{name:"angle-double-up"}))),o.createElement("div",{className:"center"},o.createElement("button",{onClick:this.handleClick.bind(null,37)},o.createElement(i,{name:"angle-double-left"})),o.createElement("div",{className:"icon"},o.createElement("div",{className:"top"},o.createElement(i,{name:"caret-up"})),o.createElement("div",{className:"center"},o.createElement(i,{name:"caret-left"}),o.createElement(i,{name:"caret-right"})),o.createElement("div",{className:"bottom"},o.createElement(i,{name:"caret-down"}))),o.createElement("button",{onClick:this.handleClick.bind(null,39)},o.createElement(i,{name:"angle-double-right"}))),o.createElement("div",{className:"bottom"},o.createElement("button",{onClick:this.handleClick.bind(null,40)},o.createElement(i,{name:"angle-double-down"}))))))},e}(o.Component);e["default"]=a},168:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(197);var i=function(t){function e(){var e=t.call(this)||this;return e.timeout=null,e.animate=function(){clearTimeout(e.timeout),e.setState({style:"r1",display:"none"});var t="r",n=0,r=function(t,n){t&&(e.timeout=setTimeout(t,n))},o=function(t){r(function(){e.setState({display:"block"}),t&&t()},150)},i=function(t){r(function(){e.setState({display:"none"}),t&&t()},150)},a=function(n,o,i){r(function(){e.setState({style:t+2}),r(function(){e.setState({style:t+1}),n&&n()},i)},o)},c=function(o){r(function(){e.setState({style:t+4}),r(function(){return e.setState({style:t+3}),n++,10!==n&&20!==n&&30!==n||(t="r"===t?"l":"r"),n<40?void c(o):(e.setState({style:t+1}),void(o&&r(o,4e3)))},100)},100)},s=function(){n=0,a(function(){a(function(){a(function(){e.setState({style:t+2}),c(s)},150,150)},150,150)},1e3,1500)};o(function(){i(function(){o(function(){i(function(){o(function(){s()})})})})})},e.state={style:"r1",display:"none"},e}return r(e,t),e.prototype.componentWillMount=function(){this.animate()},e.prototype.componentWillUnmount=function(){clearTimeout(this.timeout)},e.prototype.render=function(){return o.createElement("div",{className:"logo",style:{display:this.state.display}},o.createElement("div",{className:"bg dragon "+this.state.style}),o.createElement("p",null,"贪吃蛇"))},e}(o.Component);e["default"]=i},169:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(198);var i=function(t){return t<10?("0"+t).split(""):(""+t).split("")},a=function(t){function e(){var e=t.call(this)||this;return e.timeInterval=null,e.time_count=null,e.state={time_count:!1,time:new Date},e}return r(e,t),e.prototype.componentWillMount=function(){var t=this;if(this.props.time){var e=function(){var n=+t.timeInterval;t.timeInterval=setTimeout(function(){t.setState({time:new Date,time_count:n}),e()},1e3)};e()}},e.prototype.shouldComponentUpdate=function(t){var e=t.number;return this.props.time?this.state.time_count!==this.time_count&&(this.state.time_count!==!1&&(this.time_count=this.state.time_count),!0):this.props.number!==e},e.prototype.componentWillUnmount=function(){this.props.time&&clearTimeout(this.timeInterval)},e.prototype.render=function(){if(this.props.time){var t=this.state.time,e=i(t.getHours()),n=i(t.getMinutes()),r=t.getSeconds()%2,a=e.concat(r?"d":"d_c",n);return o.createElement("div",{className:"number"},a.map(function(t,e){return o.createElement("span",{className:"bg s_"+t,key:e})}))}for(var c=(""+this.props.number).split(""),s=this.props.length?this.props.length:6,u=0,l=s-c.length;u<l;u++)c.unshift("n");return o.createElement("div",{className:"number"},c.map(function(t,e){return o.createElement("span",{className:"bg s_"+t,key:e})}))},e}(o.Component);e["default"]=a},170:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(2);n(199);var i=function(t){function e(){var e=t.call(this)||this;return e.timeout=null,e.state={showPause:!1},e}return r(e,t),e.prototype.componentDidMount=function(){this.setShake(this.props.data)},e.prototype.componentWillReceiveProps=function(t){var e=t.data;this.setShake(e)},e.prototype.shouldComponentUpdate=function(t){var e=t.data;return!!e||e!==this.props.data},e.prototype.setShake=function(t){var e=this;t&&!this.timeout&&(this.timeout=setInterval(function(){e.setState({showPause:!e.state.showPause})},250)),!t&&this.timeout&&(clearInterval(this.timeout),this.setState({showPause:!1}),this.timeout=null)},e.prototype.render=function(){return o.createElement("div",{className:"bg pause "+(this.state.showPause?"c":"")})},e}(o.Component);e["default"]=i},171:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};e.__esModule=!0;var i=n(2),a=n(24),c=n(42),s=n(169),u=n(170),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this.props.game;return i.createElement("div",{className:"right"},i.createElement("div",{className:"record"},i.createElement("label",null,"分数："),i.createElement(s["default"],{number:t.get("code")})),i.createElement("div",{className:"level"},i.createElement("label",null,"模式"),i.createElement(s["default"],{number:t.get("modal")})),i.createElement("div",{className:"set"},i.createElement(u["default"],{data:t.get("pause")})),i.createElement("div",{className:"time"},i.createElement(s["default"],{time:!0})))},e=o([c.connect(function(t){return{game:t.game}},function(t){return{actions:a.bindActionCreators({},t)}})],e)}(i.Component);e["default"]=l},172:function(t,e){"use strict";e.__esModule=!0,e.ExceptHeight=500,e.deX=[-1,1,0,0],e.deY=[0,0,-1,1]},173:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};e.__esModule=!0;var a=n(2),c=n(24),s=n(42),u=n(166),l=n(167),f=n(171),p=n(165),d=n(87);n(200);var m=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.timer=null,e.handleKeyDown=function(t){if(1===t)return void e.props.actions.setVolume();var n=e.props.game.get("init");switch(n){case 0:2===t||0===t?(e.props.actions.setGameInit(1),e.props.actions.clearCode()):3===t&&e.props.actions.setGameInit(-2);break;case 1:var r=e.props.direction.get("snake");38===t?r=0:40===t?r=1:37===t?r=2:39===t?r=3:32===t?e.props.actions.pauseGame():4===t?e.props.actions.pauseGame({pause:!0}):2===t?e.props.actions.pauseGame({pause:!1}):0!==t||e.props.game.get("pause")||(e.props.actions.setGameInit(-1),e.props.actions.initSnack()),r!==e.props.direction.get("snake")&&e.props.actions.setSnackNextDirection(r);break;case-2:37===t||39===t?e.props.actions.setModal():2===t&&e.props.actions.setGameInit(1)}},e.keyDown=function(t){var n=t.nativeEvent.keyCode;e.handleKeyDown(n)},e}return r(e,t),e.prototype.componentDidMount=function(){this.timer=setInterval(this.props.actions.setGameTime,10)},e.prototype.componentWillUnmount=function(){this.timer&&clearInterval(this.timer)},e.prototype.render=function(){return a.createElement("div",{className:"app",onKeyDown:this.keyDown,tabIndex:0},a.createElement("div",{className:"layout"},a.createElement("div",{className:"layout-top"},a.createElement(u["default"],null),a.createElement("div",{className:"content"},a.createElement("div",{className:"main"},a.createElement("div",{className:"screen"},a.createElement(p["default"],null),a.createElement(f["default"],null))))),a.createElement(l["default"],{handleKeyDown:this.handleKeyDown})))},e=i([s.connect(function(t){return{direction:t.direction,game:t.game}},function(t){return{actions:c.bindActionCreators(o({},d),t)}})],e)}(a.Component);e["default"]=m},174:function(t,e,n){"use strict";e.__esModule=!0,n(162);var r=n(2),o=n(47),i=n(56),a=n(328);n(201);var c=document.getElementById("root");o.render(r.createElement(a.AppContainer,null,r.createElement(i["default"],null)),c)},175:function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t){return function(t){return function(e){return"set game time"!==e.type&&console.log(e),t(e)}}}},176:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(19),i=n(26),a=i.Record({current:3,next:3}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(a);e.IDirection=c;var s=new c;e["default"]=o.handleActions({"set snake current direction":function(t,e){return t.set("current",e.payload)},"set snake next direction":function(t,e){return t.set("next",e.payload)},"init snake":function(t){return t.set("current",3).set("next",3)}},s)},177:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(19),i=n(26),a=n(56),c=n(88),s=n(89),u=0,l=0,f=1;setTimeout(function(){var t=c.getSize(a.getStore().getState());u=t.column,l=t.row,f=s.getModal(a.getStore().getState())});var p=i.Record({food:i.fromJS({x:0,y:f})}),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(p);e.IFood=d;var m=new d,h=function(t){var e=s.getModal(a.getStore().getState()),n=1===e?3:1,r=Math.floor(Math.random()*(u-n))+1,o=Math.floor(Math.random()*(l-n))+1;if(o===e)return t;var c={x:r,y:o};return t.set("food",i.fromJS(c))};e["default"]=o.handleActions({"set food":function(t){return void 0===t&&(t=m),h(t)},"set modal":function(t){return void 0===t&&(t=m),h(t)}},m)},178:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(19),i=n(26),a=i.Record({init:-1,code:0,modal:0,pause:!1,volume:!0,time:0}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(a);e.IGame=c;var s=new c;e["default"]=o.handleActions({"set game time":function(t,e){return t.set("time",t.get("time")+1)},"set game init":function(t,e){return t.set("init",e.payload)},"get code":function(t){return t.set("code",t.get("code")+1)},"clear code":function(t){return t.set("code",0)},"set modal":function(t,e){var n=t.get("modal");return t.set("modal",n?0:1)},"pause game":function(t,e){return t.set("pause",e.payload?e.payload.pause:!t.get("pause"))},"set volume":function(t){return t.set("volume",!t.get("volume"))}},s)},179:function(t,e,n){"use strict";e.__esModule=!0;var r=n(83),o=n(24),i=n(180),a=n(181),c=n(176),s=n(177),u=n(178),l=o.combineReducers({routing:r.routerReducer,size:i["default"],snake:a["default"],direction:c["default"],food:s["default"],game:u["default"]});e["default"]=l},180:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(19),i=n(26),a=i.Record({column:0,row:0}),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(a);e.ISize=c;var s=new c;e["default"]=o.handleActions({"reset size":function(t,e){var n=e.payload,r=n.column,o=n.row;return i.fromJS({column:r,row:o})}},s)},181:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();e.__esModule=!0;var o=n(19),i=n(26),a=n(56),c=n(88),s=n(89),u=0,l=0,f=1;setTimeout(function(){var t=c.getSize(a.getStore().getState());u=t.column,l=t.row,f=s.getModal(a.getStore().getState())});var p=i.Record({snake:i.fromJS([{x:0,y:1+f},{x:0,y:0+f}])}),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(p);e.ISnake=d;var m=function(t){var e=s.getModal(a.getStore().getState()),n=1===e?3:1,r=Math.floor(Math.random()*(u-n))+1,o=Math.floor(Math.random()*(l-n))+1;return o===1+e?t:t.set("snake",i.fromJS([{x:r,y:o},{x:r,y:o-1}]))},h=new d;e["default"]=o.handleActions({"init snake":function(t){return void 0===t&&(t=h),m(t)},"set modal":function(t){return void 0===t&&(t=h),m(t)},"set snake":function(t,e){return void 0===t&&(t=h),t.set("snake",i.fromJS(e.payload))}},h)},182:function(t,e,n){"use strict";function r(t){var e=window.devToolsExtension?window.devToolsExtension()(o.createStore):o.createStore,n=o.applyMiddleware(a["default"])(e),r=n(i["default"],t);return r}e.__esModule=!0;var o=n(24),i=n(179),a=n(175);e["default"]=r},194:function(t,e){},195:function(t,e){},196:function(t,e){},197:function(t,e){},198:function(t,e){},199:function(t,e){},200:function(t,e){},201:function(t,e){},
328:function(t,e,n){t.exports=n(331)},329:function(t,e,n){"use strict";t.exports=n(330)},330:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),s=c.Component,u=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),a(e,[{key:"render",value:function(){return this.props.component?c.createElement(this.props.component,this.props.props):c.Children.only(this.props.children)}}]),e}(s);t.exports=u},331:function(t,e,n){"use strict";t.exports=n(332)},332:function(t,e,n){"use strict";t.exports.AppContainer=n(329)}});