(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{30:function(e,t,n){e.exports=n(61)},35:function(e,t,n){},36:function(e,t,n){},37:function(e){e.exports=JSON.parse("{}")},43:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),l=n.n(r),c=n(6),u=n(7),i=n(9),s=n(8),d=(n(35),n(36),function(e){var t=e.value,n=e.onChange,a=e.onCreate,r=e.onKeyPress;return o.a.createElement("div",null,o.a.createElement("input",{value:t,onChange:n,onKeyPress:r}),o.a.createElement("button",{onClick:a},"\ucd94\uac00"))}),m=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={checked:!1},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.id,e.todo),n=e.completed;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"todo-item"},t.text,console.log("\uc544\uc774\ub514",t.id),o.a.createElement("button",{onClick:function(e){console.log("\uc774",e),n(t.id)}},"\uc644\ub8cc")),o.a.createElement("hr",null))}}]),n}(a.Component),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.completed;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"todo-list"},t.map((function(e,t){return o.a.createElement(m,{key:t,todo:e,completed:n,id:t})}))))}}]),n}(a.Component),p=n(11),f=(n(37),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.onCreate,r=e.onKeyPress,l=e.todos,c=e.completed;return o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h1",null,"Todo List"),o.a.createElement(d,{value:t,onChange:n,onCreate:a,onKeyPress:r})),o.a.createElement("main",null,o.a.createElement("div",null,o.a.createElement(h,{todos:l,completed:c}))),o.a.createElement(p.b,{to:"/LogBook",todos:l},o.a.createElement("footer",null,"LogBook")))}}]),n}(a.Component)),v=(n(43),function(e){var t=e.completed;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"log-item"},t.text),o.a.createElement("hr",null))}),E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.completedTodo;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"log-list"},e.map((function(e,t){return o.a.createElement(v,{key:t,completed:e})}))))}}]),n}(a.Component),y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={completedTodo:[]},e}return Object(u.a)(n,[{key:"fetchData",value:function(){var e=this;fetch("http://localhost:4000/completedList",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({completedTodo:t})}))}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state.completedTodo;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("header",null,o.a.createElement("h1",null,"\uc644\ub8cc \ubaa9\ub85d")),o.a.createElement("main",null,o.a.createElement("div",null,o.a.createElement(E,{completedTodo:e}))),o.a.createElement(p.b,{to:"/TodoTemplate"}," ",o.a.createElement("footer",null,"Todo List")," ")))}}]),n}(a.Component),b=n(1),g=n(14),j=n.n(g),O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={input:"",todos:[],value:!1},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleCreate=function(){var t=e.state,n=t.input,a=t.todos;j.a.post("http://localhost:4000/create",{text:n}).then((function(e){return console.log("\uc5ec\uae30 \ub370\ud2f0\uc5b4",e)})).then((function(t){e.setState({input:"",todos:a.concat({id:e.id++,text:n})})}))},e.hnadleKeyPres=function(t){"Enter"===t.key&&e.handleCreate()},e.handleCompleted=function(t){var n=e.state.todos;console.log("\uae30 \uc544\uc774\ub514",t),j.a.post("http://localhost:4000/completed",{text:t}),j.a.post("http://localhost:4000/remove",{text:t}).then(e.setState({todos:n.filter((function(e){return e.id!==t}))}))},e}return Object(u.a)(n,[{key:"fetchData",value:function(){var e=this;fetch("http://localhost:4000/list",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({todos:t})}))}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(e,t){t.input!==this.state.input&&(console.log("\uc5c5\ub370\uc774\ud2b8"),this.fetchData())}},{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,a=this.handleChange,r=this.handleCreate,l=this.hnadleKeyPres,c=this.handleCompleted;return o.a.createElement("div",null,o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/LogBook",render:function(){return o.a.createElement(y,null)}}),o.a.createElement(b.a,{path:"/",render:function(){return o.a.createElement(f,{value:t,onChange:a,onCreate:r,onKeyPress:l,todos:n,completed:c})}})))}}]),n}(a.Component);l.a.render(o.a.createElement(p.a,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.fbe050d4.chunk.js.map