(this.webpackJsonpdashboardcorreos=this.webpackJsonpdashboardcorreos||[]).push([[0],{244:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),r=a.n(c),i=a(13),s=a.n(i),o=(a(244),a(98)),j=a(15),l=a(5),d=a(472),h=a(473),b=a(428),x=a(485),p=a(56),O=a(18),u=a(73);function m(e){return Object(n.jsx)(u.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:e.children})}function g(e,t){return{time:e,amount:t}}var v=[g("00:00",0),g("03:00",300),g("06:00",600),g("09:00",800),g("12:00",1500),g("15:00",2e3),g("18:00",2400),g("21:00",2400),g("24:00",void 0)];function f(){var e=Object(p.a)();return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(m,{children:"Hoy"}),Object(n.jsx)(O.g,{children:Object(n.jsxs)(O.d,{data:v,margin:{top:16,right:16,bottom:0,left:24},children:[Object(n.jsx)(O.i,{dataKey:"time",stroke:e.palette.text.secondary}),Object(n.jsx)(O.j,{stroke:e.palette.text.secondary,children:Object(n.jsx)(O.b,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary},children:"# Correos"})}),Object(n.jsx)(O.c,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1})]})})]})}var y=a(466),w=a(465);function N(e){e.preventDefault()}var k=Object(w.a)({depositContext:{flex:1}});function C(e){var t=k(),a=e.title,c=e.quantity,i=e.date;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(m,{children:a||"Recent Deposits"}),Object(n.jsx)(u.a,{component:"p",variant:"h4",children:c||"$3,024.00"}),Object(n.jsx)(u.a,{color:"textSecondary",className:t.depositContext,children:i||"on 15 March, 2019"}),Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{color:"primary",href:"#",onClick:N,children:"Ver Balance"})})]})}var B=a(467),S=a(471),D=a(470),z=a(468),F=a(469);function P(e,t,a,n,c,r){return{id:e,date:t,name:a,shipTo:n,paymentMethod:c,amount:r}}var G=[P(0,"17 Nov, 2020","Elvis Presley","lonox30535@0335g.com","Personalizaci\xf3n",312.44),P(1,"16 Nov, 2020","Paul McCartney","lijeweddass-3517@yopmail.com","Escasez",866.99),P(2,"16 Nov, 2020","Tom Scholz","rukkojekku@nedoz.com","Autoridad",100.81),P(3,"16 Nov, 2020","Michael Jackson","virtozaydi@nedoz.com","Curiosidad",654.39),P(4,"16 Nov, 2020","Bruce Springsteen","kaknocirde@nedoz.com","Utilidad",212.79)],M=[P(0,"17 Nov, 2020","Elvis Presley","lonox30535@0335g.com","Personalizaci\xf3n",312.44),P(1,"16 Nov, 2020","Paul McCartney","lijeweddass-3517@yopmail.com","Escasez",866.99),P(2,"16 Nov, 2020","Tom Scholz","rukkojekku@nedoz.com","Autoridad",100.81),P(3,"16 Nov, 2020","Michael Jackson","virtozaydi@nedoz.com","Curiosidad",654.39),P(4,"16 Nov, 2020","Bruce Springsteen","kaknocirde@nedoz.com","Utilidad",212.79),P(5,"16 Nov, 2020","Elvis Presley","lonox30535@0335g.com","N\xfameros",312.44),P(6,"16 Nov, 2020","Paul McCartney","lijeweddass-3517@yopmail.com","Prueba social",866.99),P(7,"15 Nov, 2020","Tom Scholz","rukkojekku@nedoz.com","Urgencia",100.81),P(8,"15 Nov, 2020","Michael Jackson","virtozaydi@nedoz.com","Reciprocidad",654.39),P(9,"15 Nov, 2020","Bruce Springsteen","kaknocirde@nedoz.com","Relevancia",212.79)],R=Object(w.a)((function(e){return{seeMore:{marginTop:e.spacing(3),marginRight:e.spacing(3)},row:{display:"flex"}}}));function E(){var e=R(),t=Object(c.useState)(!0),a=Object(o.a)(t,2),i=a[0],s=a[1];return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(m,{children:"\xfaltimos Correos"}),Object(n.jsxs)(B.a,{size:"small",children:[Object(n.jsx)(z.a,{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)(D.a,{children:"Fecha"}),Object(n.jsx)(D.a,{children:"Nombre"}),Object(n.jsx)(D.a,{children:"Correo Electr\xf3nico"}),Object(n.jsx)(D.a,{children:"Asunto"}),Object(n.jsx)(D.a,{align:"right",children:"Resoluci\xf3n/seg"})]})}),Object(n.jsx)(S.a,{children:i?G.map((function(e){return Object(n.jsxs)(F.a,{children:[Object(n.jsx)(D.a,{children:e.date}),Object(n.jsx)(D.a,{children:e.name}),Object(n.jsx)(D.a,{children:e.shipTo}),Object(n.jsx)(D.a,{children:e.paymentMethod}),Object(n.jsx)(D.a,{align:"right",children:e.amount})]},e.id)})):M.map((function(e){return Object(n.jsxs)(F.a,{children:[Object(n.jsx)(D.a,{children:e.date}),Object(n.jsx)(D.a,{children:e.name}),Object(n.jsx)(D.a,{children:e.shipTo}),Object(n.jsx)(D.a,{children:e.paymentMethod}),Object(n.jsx)(D.a,{align:"right",children:e.amount})]},e.id)}))})]}),Object(n.jsxs)("div",{className:e.row,children:[Object(n.jsx)("div",{className:e.seeMore,children:Object(n.jsx)(y.a,{color:"primary",href:"#",onClick:function(){s(!i)},children:i?"Ver m\xe1s correos":"Ver menos correos"})}),Object(n.jsx)("div",{className:e.seeMore,children:Object(n.jsx)(y.a,{color:"primary",href:"#",onClick:function(e){e.preventDefault()},children:"Descargar correos"})})]})]})}function T(){return Object(n.jsxs)(u.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(y.a,{color:"inherit",href:"https://bepro.la/",target:"_blank",rel:"noreferrer",children:"Be Pro Solutions."})," ",(new Date).getFullYear(),"."]})}var A=Object(w.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function H(){var e=A(),t=Object(l.a)(e.paper,e.fixedHeight);return Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(d.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsxs)(h.a,{container:!0,spacing:3,children:[Object(n.jsx)(h.a,{item:!0,xs:12,md:4,lg:3,children:Object(n.jsx)(b.a,{className:t,children:Object(n.jsx)(C,{title:"Correos Recientes",date:" 17 de noviembre, 2020",quantity:"3024"})})}),Object(n.jsx)(h.a,{item:!0,xs:12,md:8,lg:9,children:Object(n.jsx)(b.a,{className:t,children:Object(n.jsx)(f,{})})}),Object(n.jsx)(h.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{className:e.paper,children:Object(n.jsx)(E,{})})})]}),Object(n.jsx)(x.a,{pt:4,children:Object(n.jsx)(T,{})})]})]})}function I(){var e=A(),t=Object(l.a)(e.paper,e.fixedHeight);return Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(d.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsxs)(h.a,{container:!0,spacing:3,children:[Object(n.jsx)(h.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{className:e.paper,children:Object(n.jsx)(E,{})})}),Object(n.jsx)(h.a,{item:!0,xs:12,md:4,lg:3,children:Object(n.jsx)(b.a,{className:t,children:Object(n.jsx)(C,{})})}),Object(n.jsx)(h.a,{item:!0,xs:12,md:8,lg:9,children:Object(n.jsx)(b.a,{className:t,children:Object(n.jsx)(f,{})})})]}),Object(n.jsx)(x.a,{pt:4,children:Object(n.jsx)(T,{})})]})]})}var L=a(95),J=a(96),K=a(101),U=a(99),V=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200},{name:"Group E",value:278},{name:"Group F",value:189}],W=[{name:"Group A",value:2400},{name:"Group B",value:4567},{name:"Group C",value:1398},{name:"Group D",value:9800},{name:"Group E",value:3908},{name:"Group F",value:4800}];(function(e){Object(K.a)(a,e);var t=Object(U.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(J.a)(a,[{key:"render",value:function(){return Object(n.jsx)(O.g,{children:Object(n.jsxs)(O.f,{width:800,height:400,children:[Object(n.jsx)(O.e,{dataKey:"value",isAnimationActive:!1,data:V,cx:400,cy:80,outerRadius:80,fill:"#8884d8",label:!0}),Object(n.jsx)(O.e,{dataKey:"value",data:W,cx:90,cy:80,innerRadius:40,outerRadius:80,fill:"#82ca9d",label:!0}),Object(n.jsx)(O.h,{})]})})}}]),a}(c.PureComponent)).jsfiddleUrl="https://jsfiddle.net/alidingling/k9jkog04/";var q=[{name:"Primer nivel",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Escalamiento",value:200}],Y=["#0088FE","#00C49F","#FFBB28","#FF8042"],X=Math.PI/180,$=function(e){var t=e.cx,a=e.cy,c=e.midAngle,r=e.innerRadius,i=e.outerRadius,s=e.percent,o=(e.index,r+.5*(i-r)),j=t+o*Math.cos(-c*X),l=a+o*Math.sin(-c*X);return Object(n.jsx)("text",{x:j,y:l,fill:"white",textAnchor:j>t?"start":"end",dominantBaseline:"central",children:"".concat((100*s).toFixed(0),"%")})};function _(e){e.preventDefault()}var Q=function(e){Object(K.a)(a,e);var t=Object(U.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(J.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(m,{children:"Tipo Respuestas"}),Object(n.jsx)(O.g,{children:Object(n.jsxs)(O.f,{width:400,height:400,children:[Object(n.jsx)(O.e,{data:q,cx:200,cy:150,labelLine:!1,label:$,outerRadius:130,fill:"#8884d8",dataKey:"value",children:q.map((function(e,t){return Object(n.jsx)(O.a,{fill:Y[t%Y.length]},"cell-".concat(t))}))}),Object(n.jsx)(O.h,{})]})}),Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{color:"primary",href:"#",onClick:_,children:"Ver Balance"})})]})}}]),a}(c.PureComponent);Q.jsfiddleUrl="https://jsfiddle.net/alidingling/c9pL8k61/";var Z=Object(w.a)((function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:400},rechartswrapper:{margin:" 0 auto"}}}));function ee(){var e=Z(),t=Object(l.a)(e.paper,e.fixedHeight,e.rechartswrapper);return Object(n.jsxs)("main",{className:e.content,children:[Object(n.jsx)("div",{className:e.appBarSpacer}),Object(n.jsxs)(d.a,{maxWidth:"lg",className:e.container,children:[Object(n.jsxs)(h.a,{container:!0,spacing:3,children:[Object(n.jsx)(h.a,{item:!0,xs:12,md:6,lg:6,children:Object(n.jsx)(b.a,{className:t,children:Object(n.jsx)(Q,{})})}),Object(n.jsx)(h.a,{item:!0,xs:12,md:6,lg:6,children:Object(n.jsx)(b.a,{className:t,children:Object(n.jsx)(Q,{})})}),Object(n.jsx)(h.a,{item:!0,xs:12,children:Object(n.jsx)(b.a,{className:e.paper,children:Object(n.jsx)(E,{})})})]}),Object(n.jsx)(x.a,{pt:4,children:Object(n.jsx)(T,{})})]})]})}function te(){return Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)("p",{children:"Esta es una demo..."})}),Object(n.jsx)(j.a,{path:"/autoresolution",component:H}),Object(n.jsx)(j.a,{path:"/escalation",component:I}),Object(n.jsx)(j.a,{path:"/resolutiontime",component:ee})]})}var ae=a(97),ne=a(201),ce=a(477),re=a(484),ie=a(478),se=a(479),oe=a(483),je=a(482),le=a(480),de=a(481),he=a(207),be=a.n(he),xe=a(209),pe=a.n(xe),Oe=a(208),ue=a.n(Oe),me=a(486),ge=a(474),ve=a(475),fe=a(476),ye=a(202),we=a.n(ye),Ne=a(203),ke=a.n(Ne),Ce=a(204),Be=a.n(Ce),Se=a(205),De=a.n(Se),ze=a(206),Fe=a.n(ze),Pe=a(103),Ge=a.n(Pe),Me=a(46),Re="#000000DE",Ee=Object(n.jsxs)("div",{children:[Object(n.jsx)(Me.b,{to:"/autoresolution",style:{textDecoration:"none",color:Re},children:Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(we.a,{})}),Object(n.jsx)(ve.a,{primary:"Dashboard"})]})}),Object(n.jsx)(Me.b,{to:"/escalation",style:{textDecoration:"none",color:Re},children:Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(ke.a,{})}),Object(n.jsx)(ve.a,{primary:"Orders"})]})}),Object(n.jsx)(Me.b,{to:"/resolutiontime",style:{textDecoration:"none",color:Re},children:Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(Be.a,{})}),Object(n.jsx)(ve.a,{primary:"Customers"})]})}),Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(De.a,{})}),Object(n.jsx)(ve.a,{primary:"Reports"})]}),Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(Fe.a,{})}),Object(n.jsx)(ve.a,{primary:"Integrations"})]})]}),Te=Object(n.jsxs)("div",{children:[Object(n.jsx)(fe.a,{inset:!0,children:"Saved reports"}),Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(Ge.a,{})}),Object(n.jsx)(ve.a,{primary:"Current month"})]}),Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(Ge.a,{})}),Object(n.jsx)(ve.a,{primary:"Last quarter"})]}),Object(n.jsxs)(me.a,{button:!0,children:[Object(n.jsx)(ge.a,{children:Object(n.jsx)(Ge.a,{})}),Object(n.jsx)(ve.a,{primary:"Year-end sale"})]})]}),Ae=a.p+"static/media/Logo.7108187f.png",He=Object(w.a)((function(e){return{toolbar:{paddingRight:24},toolbarIcon:Object(ne.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"white",color:"#323232"},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{marginLeft:15,flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(ae.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function Ie(e){var t=He(),a=e.open,c=e.handleDrawerOpen,r=e.handleDrawerClose;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ce.a,{}),Object(n.jsx)(ie.a,{position:"absolute",className:Object(l.a)(t.appBar,a&&t.appBarShift),children:Object(n.jsxs)(se.a,{className:t.toolbar,children:[Object(n.jsx)(le.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:c,className:Object(l.a)(t.menuButton,a&&t.menuButtonHidden),children:Object(n.jsx)(be.a,{})}),Object(n.jsx)("img",{alt:"logo",src:Ae,width:"45.5",height:"42"}),Object(n.jsx)(u.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:"Dashboard Email Demo"}),Object(n.jsx)(le.a,{color:"inherit",children:Object(n.jsx)(de.a,{badgeContent:6,color:"secondary",children:Object(n.jsx)(ue.a,{})})})]})}),Object(n.jsxs)(re.a,{variant:"permanent",classes:{paper:Object(l.a)(t.drawerPaper,!a&&t.drawerPaperClose)},open:a,children:[Object(n.jsx)("div",{className:t.toolbarIcon,children:Object(n.jsx)(le.a,{onClick:r,children:Object(n.jsx)(pe.a,{})})}),Object(n.jsx)(je.a,{}),Object(n.jsx)(oe.a,{children:Ee}),Object(n.jsx)(je.a,{}),Object(n.jsx)(oe.a,{children:Te})]})]})}function Le(){var e=A(),t=r.a.useState(!0),a=Object(o.a)(t,2),c=a[0],i=a[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(Ie,{open:c,handleDrawerOpen:function(){i(!0)},handleDrawerClose:function(){i(!1)}}),Object(n.jsx)(te,{})]})}var Je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,488)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Me.a,{children:Object(n.jsx)(Le,{})})}),document.getElementById("root")),Je()}},[[425,1,2]]]);
//# sourceMappingURL=main.8c4d00c0.chunk.js.map