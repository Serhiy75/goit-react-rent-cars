"use strict";(self.webpackChunkgoit_react_rent_cars=self.webpackChunkgoit_react_rent_cars||[]).push([[680],{9680:function(e,n,l){l.r(n),l.d(n,{default:function(){return G}});var a,r,i,t,o,p,s,x,u,c=l(9439),d=l(950),b=l(2791),g=l(9434),h=l(2526),f=l(2286),m=l(168),v=l(4313),y=v.ZP.div(a||(a=(0,m.Z)(["\n  background-color: whitesmoke;\n"]))),j=l(5216),k=[{value:"",label:"All"},{value:"Buick",label:"Buick"},{value:"Volvo",label:"Volvo"},{value:"HUMMER",label:"HUMMER"},{value:"Subaru",label:"Subaru"},{value:"Mitsubishi",label:"Mitsubishi"},{value:"Nissan",label:"Nissan"},{value:"Lincoln",label:"Lincoln"},{value:"GMC",label:"GMC"},{value:"Hyundai",label:"Hyundai"},{value:"MINI",label:"MINI"},{value:"Bentley",label:"Bentley"},{value:"Aston Martin",label:"Aston Martin"},{value:"Pontiac",label:"Pontiac"},{value:"Lamborghini",label:"Lamborghini"},{value:"Audi",label:"Audi"},{value:"BMW",label:"BMW"},{value:"Chevrolet",label:"Chevrolet"},{value:"Mercedes-Benz",label:"Mercedes-Benz"},{value:"Chrysler",label:"Chrysler"},{value:"Kia",label:"Kia"},{value:"Land",label:"Land"},{value:"Toyota",label:"Toyota"},{value:"Ford",label:"Ford"}],Z=[0,5,10,15,20,25,30,35,40,45,50,60,70,80,90,100,110,120,130,140,150],w=l(9940),M=v.ZP.p(r||(r=(0,m.Z)(["\n  margin: 0;\n  color: #8a8a89;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 18px;\n"]))),P=v.ZP.form(i||(i=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin: 0;\n  background-color: whitesmoke;\n  gap: 20px;\n"]))),C=v.ZP.div(t||(t=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  gap: 20px;\n"]))),S=v.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  width: 320px;\n  height: 40px;\n  border: none;\n  align-items: flex-start;\n  margin-top: 20px;\n\n  margin: 0;\n"]))),B=v.ZP.input(p||(p=(0,m.Z)(["\n  display: flex;\n  width: 160px;\n  height: 38px;\n  border: none;\n  margin: 0;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 4px 0px 0px 4px;\n  border-right: 1px solid lightgray;\n  background-color: white;\n  align-items: flex-start;\n"]))),N=v.ZP.input(s||(s=(0,m.Z)(["\n  display: flex;\n  width: 160px;\n  height: 38px;\n  border: none;\n  margin: 0;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 0px 4px 4px 0px;\n  background-color: white;\n  border-left: 1px solid lightgray;\n"]))),T=v.ZP.button(x||(x=(0,m.Z)(["\n  width: 100px;\n  height: 38px;\n  color: #fff;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 20px;\n  border: none;\n  cursor: pointer;\n  margin-top: 15px;\n  border-radius: 4px;\n  background: #3470ff;\n  transition: all 0.3s ease-in-out;\n  &.active {\n    background-color: #afffff;\n    color: #000000;\n  }\n  &:hover {\n    scale: 1.1;\n    color: red;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);\n  }\n"]))),L=l(6895),F=l(184),z=function(){var e=(0,g.I0)();return(0,F.jsxs)(P,{onSubmit:function(n){n.preventDefault();var l=n.target.elements,a=l.make,r=l.mileageFrom,i=l.mileageTo,t=l.rentalPrice;if(a.value||r.value||i.value||t.value){var o=Number(r.value),p=Number(i.value);if(o<0||p<0)alert("Select valid mileage");else if(o>p&&0!==p)alert("Select mileage to more than mileage from");else{var s={make:a.value,rentalPrice:Number(t.value),mileageFrom:o,mileageTo:p};e((0,j.W)()),e((0,h.c)({page:1,limit:32})),e((0,L.Tv)(s))}}else alert("Select any filter")},children:[(0,F.jsxs)(C,{children:[(0,F.jsxs)("label",{children:[(0,F.jsx)(M,{children:" Car brand "}),(0,F.jsx)(w.ZP,{name:"make",placeholder:"Enter the text",options:k})]}),(0,F.jsxs)("label",{children:[(0,F.jsx)(M,{children:"Price / 1 hour "}),(0,F.jsx)(w.ZP,{name:"rentalPrice",placeholder:"To $",options:Z.map((function(e){return{value:e,label:0===e?"All":"$".concat(e)}}))})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(M,{children:" Car mileage / km"}),(0,F.jsxs)(S,{children:[(0,F.jsx)("label",{children:(0,F.jsx)(B,{type:"number",name:"mileageFrom",placeholder:"From"})}),(0,F.jsx)("label",{children:(0,F.jsx)(N,{type:"number",name:"mileageTo",placeholder:"To"})})]})]}),(0,F.jsx)(T,{type:"submit",children:"Search"})]})},A=l(5861),H=l(4687),I=l.n(H),_=v.ZP.button(u||(u=(0,m.Z)(["\n  margin: 10px auto;\n  align-items: center;\n  padding: 5px 16px;\n  border-radius: 8px;\n  background-color: #3470ff;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  max-width: 160px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 0.3s ease-in-out;\n  &.active {\n    background-color: #3470ff;\n    color: yellow;\n  }\n  &:hover {\n    scale: 1.1;\n    color: red;\n    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 5px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px -1px rgba(0, 0, 0, 0.12);\n  }\n"]))),E=function e(n){var l=n.onClick,a=void 0===l?null:l,r=(0,b.useState)(!1),i=(0,c.Z)(r,2),t=i[0],o=i[1],p=function(){var e=(0,A.Z)(I().mark((function e(){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,a();case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,F.jsx)(_,{type:"button",className:e,onClick:p,disabled:t,children:t?"Loading...":"Load more"})},W=l(8800),D=l(3770),G=function(){var e=(0,g.I0)(),n=(0,b.useState)(1),l=(0,c.Z)(n,2),a=l[0],r=l[1],i=(0,g.v9)(f.OS),t=(0,g.v9)(f.dB),o=(0,g.v9)(f.NH);(0,b.useEffect)((function(){1===a&&(e((0,j.W)()),e((0,L.Dg)())),e((0,h.c)({page:a,limit:8}))}),[e,a]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)(y,{children:[(0,F.jsx)(z,{}),t.length>0&&(0,F.jsx)(d.H,{cars:t}),0===t.length&&!o&&(0,F.jsx)(W.T,{}),i<32&&(0,F.jsx)(E,{onClick:function(){r((function(e){return e+1}))}})]}),(0,F.jsx)(D.p,{})]})}}}]);
//# sourceMappingURL=680.2b415055.chunk.js.map