(this["webpackJsonpfem-countries-rest-api"]=this["webpackJsonpfem-countries-rest-api"]||[]).push([[0],{85:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(32),r=c.n(s),A=c(0),i=function(e){var t=e.children,c=e.className;return Object(A.jsx)("div",{className:"container ".concat(c),children:t})},o=c(9),l=c(4),j=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){null===localStorage.getItem("theme")?window.matchMedia&&(window.matchMedia("(prefers-color-scheme: dark)").matches?(localStorage.setItem("theme","dark"),a("dark")):(localStorage.setItem("theme","light"),a("light"))):a(localStorage.getItem("theme"))}),[]),Object(n.useEffect)((function(){"dark"===c?(document.body.classList.remove("light"),document.body.classList.add("dark")):(document.body.classList.remove("dark"),document.body.classList.add("light"))}),[c]);return Object(A.jsxs)("div",{className:"theme",onClick:function(){"dark"===c?(a("light"),localStorage.setItem("theme","light")):(a("dark"),localStorage.setItem("theme","dark"))},children:[Object(A.jsx)("img",{className:"theme__icon",src:"dark"===c?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCxERIDnCTUSXAAAB/klEQVRYw9WXu0oDURCG5ySNFoJXJGBhtPWCWAqieAMtUkYs9BEEL6/gIwiWop2FhYWCINgZEMG00UKQFIsYSMDE4J7PYk3iJSa7m7MR/245u/v9M+fM7KzIfxCMj8PBATw/QzzePLDu6YHDQ9CasjY3mwSfnIR0mu/So6PBw4nFIJ//ASebBaUChs/MQKFAVSWTwcJ1Xx88PfGrLi9NM0NfrtTenkhX1++3h8MBRr+wQF2lUsEZ4OKivoG3N2hpCQAeiXyt9RrSc3Mm2R9nYHFRxGV5qVgsgAwcHbmKvtwLOjoMZ2BgwP0jbW0iW1uGM1Cl5dZUsYgeGTFooFj0ZsApSXR3tyEDluXdAEAiYcQE3N76M1DKRIPbAScn/g2UzsTOju/qgPX1xgyUlMvB7i56fr5axwSlYGwMvb1dmqyUszA4KHJ3Z+A4fZJtCw8PojIZkddXkfZ2kWhUpLXVWc9klOrsrLjTNzdmsuBW+/vf0rOy0jy4bf8Y7SAUgkTiT6KvbMPwMLy8BAt/fIQaQw+srbn+NHtWPg8TEy7KcmPDvIlCATx8ytGrq+a2w7JgaspzJaOHhtBXV43Bj48hEvHdTpzutbwM19fuobaNPj+H6el67/f0lwPRqLC0JGp2VqS/X6S31xnjLUsknRa5vxc5OxNOT1XIsnxH3Uy9A3tWOwvHRtN9AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTExLTE3VDE3OjMyOjU3KzAwOjAwI0Lr4gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMS0xN1QxNzozMjo1NyswMDowMFIfU14AAAAASUVORK5CYII=":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFVSURBVEiJtdVNLkNRFAfwX6q2gKGBCYaNlJk1aOyARmoJxArEx1qKgU5Kk4qYGDEwVgk2YCAM7m010te++8I/OYN7z+c79//OIQ3HOEpxKCcmWEi0V0p1SMXUr/Mm1nGXYf+Bezxm6BuYx0NWwl184SChyD4Oom8jr2ElIXgltbCKHwJMYwcdvEe5Rj3qRNuUggaYE97jE03sRTmLd7eYLRK4X/kdnrEyQl9FLyZJpTtCWz4zgvexGm22iyToCG2ZhHNcZSlLOEULl9gY0i3hJkeCLpaHzrUYq4WTkkCvUci6n4TcftcCWybhAu0ildSFB6yOsVmLNltFEkwLFOwJbBkV/EV4p0I0JfxEt0KV59iPchHvupgpEnh4VJSFdl3hLUpbaMuwTe5R8a/D7s/H9e+FMy98/mFGkBoWjV44/Ra+GrNwJqEp3/gY4N93cip/n1ITfAPq8FBpeHHOZAAAAABJRU5ErkJggg==",alt:"themeIcon"}),Object(A.jsxs)("p",{className:"theme__name",children:["Dark Mode ","dark"===c?"On":"Off"]})]})},d=function(){return Object(A.jsx)("header",{className:"header",children:Object(A.jsxs)(i,{className:"header__container",children:[Object(A.jsx)(o.b,{to:"/FEM-Countries-Rest-API",children:Object(A.jsx)("h1",{className:"header__title",children:"Where in the world?"})}),Object(A.jsx)(j,{})]})})},u=c(2),b=c(23),h=function(e){var t=e.name,c=e.flags,n=e.region,a=e.capital,s=e.population;return Object(A.jsx)(o.b,{to:"/country/".concat(t.common),children:Object(A.jsxs)("section",{className:"country__item",children:[Object(A.jsx)("div",{className:"country__flag_wrapper",children:Object(A.jsx)("img",{className:"country__flag_img",src:c.svg,alt:"".concat(t.common," flag"),loading:"lazy"})}),Object(A.jsxs)("div",{className:"country__info",children:[Object(A.jsx)("h2",{className:"country__name",children:t.common}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Population: "}),s.toLocaleString()]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Region: "}),n]}),Array.isArray(a)?Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Capital: "}),a[0]]}):Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Capital: "}),a]})]})]})})},O=function(e){var t=e.value,c=e.onSearch;return Object(A.jsxs)("div",{className:"search",children:[Object(A.jsxs)("label",{htmlFor:"search",className:"search__label",children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCxEKJyNgHWe7AAAEjklEQVRYw72WXUwUVxTH/3dgFxCB8hExfBgUAmhd1sTyJYKSljVdPhP60u1DgViaKIYmBUJ5ENo+tFXWD0ha6gs1FRVQswgFmYGCIAUKiCyfpQ/GVsIClmYlghuWuX3QHRbC7rIu5SSTzDlzz/n/5t47cw+BBWv5ODycfzspiVyLjqY/SqUkUySiFWIxrk1NIX90FEFdXSKmqiqeaDSWam1kxNQD9qFcjqWiIryIibFYZVavx6d1ddiXny8bfvzYJoC6Iy4uO96/dIlGZmVZ/TYpi4v0xdmzCcyFC4RQajXAvb88PJif2tsRJZGsGfTZ6ChfW18P94EBZkSj4TNEIsbLz4/S2FggORnK3bvXVO2oqOj6+vTpLwnPb5q+7oiLCxfV28uylArX+PAwxyUmmsurqRaLub/PnGFPzM2tyZVcuWLVDLCdlZVYysgQnvxQU6N7kpmZ/HBxcTOFGif9/OwDVCq0Hz4sBI8qFLIdN25YTG72iY9n83h+lb6qilJCLCauM451c2P/HR831OFC5+dbI7y9zeUwAEC+O3cOsteCPcPDLvMnT252ExlbgkyrXfkzLQ2lS0sAQMvc3Vc+OHXK7BJwrERCoVYbAnSfXH4iqKnJWnFjY5nz53EvLw8A4DI7q/fcs0cerNNtOAO8r0IheJ+r1baKA4BoRakkBa+/gIVdu+wWIiNNjWWYD1c3Dcm5e9dWcQCIJxoNVfX1CSIfRUebBKDvHDhgcHg6MLAVAABAPlmtRVsOHjQJQK67uxscO8eZma0C4L+dnhacECcn0zMw+vKlkCQXi7cKgOl3cBCcOdN1GWi1WsHb6eOzVQCU9fUVnLeePjUJQNKN1n352LGtAiANsbHCfczYmEkAGt/dLXi/JifXVNu+DM2HpFJaHxQkAAx3dZkEsIurrsbPy8sAAGcfH/eK7GxbARjXkhLB8R8Zee/Z4KDJse9mTE2R67dvGwJUXFzcRAMC3lSc80hJoRGpqULgt4oKy0lp+/ezssXF1cNoaIhj3dysFW+NCAtjF7Ra4zpt1N7e7GwBQIJqfBzThYVCVBkWhm96e5t+Dwmx5s1XWjs70e3qaogRdW5uPNHrLQIAQIK6vJwUXr0qLMUXISF2Dx49Yr8qLW2j6zoeI2s+JJWyf9y5Q7NUKmNxAIC0qKjb1/RPCFjXkhVThjkqKy+n+WuPUFLA83Ds76ff9/Xh4swMJPb26PX3x2RcHJSBgWYF8jhu5z+pqdFTr45oswAAQCkhLZkZGehRKmnZ6m96U3ZxbIwO5eSQhsJCPJPJNgNhsutpjfD25pncXKrIzkaop6dZ4fCJCRJ4+fJyT2WlPFin6/Z1clqoV6k2A2Gx7Wqjjo56REXxOH6cOO3di2ovLzzR60nJ3BwUIyP8g7Y22aBavb6Dsgbif7PGSQcHNqWhwbhb5kT377MSZ2fDGMYWAUsmD9bp9KXp6aSyocEQo7/ExZGJxkYDhNWd75vOhKj41i2amZRkiJHEjg4aKpdvCwCw8Z4Ara3dNoANIaKfP99OfQCvviou5+ZNdkGrZcsKCv4DYSkUCGjKjbUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTEtMTdUMTA6Mzk6MzUrMDA6MDD3IQ7jAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTExLTE3VDEwOjM5OjM1KzAwOjAwhny2XwAAAABJRU5ErkJggg==",alt:"Search"})," "]}),Object(A.jsx)("input",{type:"text",id:"search",className:"search__input",value:t,onChange:function(e){c(e.target.value)},placeholder:"Search for a country..."})]})},m=function(e){var t=e.value,c=e.onFilter;return Object(A.jsxs)("div",{className:"filter",children:[Object(A.jsx)("label",{htmlFor:"filter",children:"Filter by region: "}),Object(A.jsxs)("select",{name:"filter",id:"filter",onChange:function(e){c(e.target.value)},value:t,children:[Object(A.jsx)("option",{value:"",children:"All"}),Object(A.jsx)("option",{value:"asia",children:"Asia"}),Object(A.jsx)("option",{value:"americas",children:"Americas"}),Object(A.jsx)("option",{value:"oceania",children:"Oceania"}),Object(A.jsx)("option",{value:"africa",children:"Africa"}),Object(A.jsx)("option",{value:"europe",children:"Europe"})]}),Object(A.jsx)("div",{className:"filter__caret",children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAQAAABQ8GUWAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCxERGhM8X1M4AAAB6klEQVR42u3ZvUsCcRzH8c+diwVCoEtIIOgckoMW1OJDuDhJf0F/Qh64B8L5J+QQbkUtTYI3BiJCSPtJU5MXgkMuZUsu5cM9/B70/L7Hm76fFzccHEBRFEVRFEVRFEVtXwoA1KKJRMCs13GTzeIzFJJ9FNd2xmO0DAOPlYoWNE2lFk0kAqedDo4iEdm3Ce1lOMRtJhM4P2s0cJxKyb5HePu7u7iLRlXlOZ+XfYu0HvJ5dXo9ncq+Q2YqWoYh+whpldttRZ/E43jrdvEUDsu+R2gly0IsnVa1oGniNZdDybJk3ySs5miknhSLWtA0ldkz/T6ZxKFh+P5NaI5G6nuhcPXR6wG/H0Jbg/Bn/D8AXyPMGT8XwJcIC8YvBPAVwpLxSwF8gbBi/EqAjUawMd4WwEYi2BxvG2CjEByMdwSwEQgOxzsGWGsEF+NdAawlgsvxrgHWCsHDeE8Aa4HgcbxnAKkIDMYzAZCCwGg8MwChCAzHMwUQgsB4PHMArggcxnMB4ILAaTw3AKYIHMdzBWCCwHk8dwBPCALGCwFwhSBovDAARwgCxwsFsIUgeDwAqCIBtIt+H5eFwtzfcCXLwl42K3I8IPgNmKVP4nElpuvT71wOAFBut78ONK1aHQxk3ENRFEVRFEVRFEVtWz+n6WmvsGwl8AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMS0xN1QxNzoyNjoxOSswMDowMD9S4f8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTEtMTdUMTc6MjY6MTkrMDA6MDBOD1lDAAAAAElFTkSuQmCC",alt:"dropdown"})})]})},g=c(17),x=c(8),f=c.n(x),p=c(11),C=c(10),N=c(13),v=c.n(N),E=function(e,t,c,a,s,r){var A=Object(n.useState)([]),i=Object(l.a)(A,2),o=i[0],j=i[1],d=Object(n.useState)(""),u=Object(l.a)(d,2),b=u[0],h=u[1];return Object(n.useEffect)((function(){var n=new AbortController,A=function(){var e=Object(C.a)(f.a.mark((function e(t,c,a,s){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j([]),h(""),e.next=5,v.a.get(t+c+a+s,{signal:n.signal});case 5:r=e.sent,j(Object(p.a)(r.data)),h(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),"Abort"===e.t0.name?console.log("Component unmount"):h(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,c,n,a){return e.apply(this,arguments)}}();return"all"===t&&A(e,t,"",""),""!==c&&"name/"===t&&A(e,t,c,""),""!==a&&"region/"===t&&A(e,t,a,""),""!==s&&"name/"===t&&A(e,t,s,r),function(){return n.abort()}}),[e,t,c,a,s,r]),{data:o,error:b}},w=c(18),y=c.n(w),R=function(){var e=Object(n.useState)("all"),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(l.a)(s,2),o=r[0],j=r[1],d=Object(n.useState)(""),u=Object(l.a)(d,2),x=u[0],f=u[1],p=Object(n.useState)(!0),C=Object(l.a)(p,2),N=C[0],v=C[1],w=E("https://restcountries.com/v3.1/",c,o,x,""),R=w.data,k=w.error;return Object(n.useEffect)((function(){R.length>0&&v(!1),"Request failed with status code 404"===k&&v(!1)}),[R,k]),Object(n.useEffect)((function(){a(""!==o?"name/":"all"),v(!0)}),[o]),Object(n.useEffect)((function(){a(""!==x?"region/":"all"),v(!0)}),[x]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(i,{className:"search__filter",children:[Object(A.jsx)(O,{value:o,onSearch:j}),Object(A.jsx)(m,{value:x,onFilter:f})]}),Object(A.jsx)(i,{className:"container__loader",children:N&&Object(A.jsx)(y.a,{className:"loader",type:"TailSpin",height:100,width:100,color:"var(--text)"})}),Object(A.jsxs)(i,{className:"country country__container",children:[R.length>0&&R.map((function(e){return Object(n.createElement)(h,Object(b.a)(Object(b.a)({},e),{},{key:Object(g.a)(25)}))})),""!==k&&!N&&Object(A.jsx)("p",{children:"No Data Found...!"})]})]})},k=function(){return document.title="FEM - Countries REST API",Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(R,{})})},B=function(){var e=Object(u.f)();return Object(A.jsx)(i,{className:"container__back__button",children:Object(A.jsx)("button",{onClick:function(){e.go(-1)},className:"back__button",children:"\ud83e\udc78  Back"})})},I=function(){var e=Object(u.g)().name,t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)([]),j=Object(l.a)(r,2),d=j[0],b=j[1],h=Object(n.useState)([]),O=Object(l.a)(h,2),m=O[0],x=O[1],N=Object(n.useState)(!0),E=Object(l.a)(N,2),w=E[0],R=E[1];return document.title="Country - ".concat(e),Object(n.useEffect)((function(){var t=new AbortController,c=function(){var c=Object(C.a)(f.a.mark((function c(){var n;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,R(!0),c.next=4,v.a.get("https://restcountries.com/v3.1/name/".concat(e,"?fullText=true"),{signal:t.signal});case 4:n=c.sent,s.apply(void 0,Object(p.a)(n.data)),x([]),void 0!==n.data[0].borders&&b(Object(p.a)(n.data[0].borders)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),"Abort"===c.t0.name?console.log("Component unmount"):console.error(c.t0.message);case 13:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}}();return c(),function(){return t.abort()}}),[e]),Object(n.useEffect)((function(){var e=function(){var e=Object(C.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d.length>0)try{R(!0),d.map(function(){var e=Object(C.a)(f.a.mark((function e(t){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://restcountries.com/v3.1/alpha/".concat(t));case 2:c=e.sent,x((function(e){return[].concat(Object(p.a)(e),[c.data[0].name.common])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),setTimeout((function(){R(!1)}),300)}catch(t){"Abort"===t.name?console.log("Component unmount"):console.error(t.message)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d]),Object(n.useEffect)((function(){0===a.length||a.hasOwnProperty("borders")||R(!1)}),[a]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(i,{className:"container__loader",children:w&&Object(A.jsx)(y.a,{className:"loader",type:"TailSpin",height:100,width:100,color:"var(--text)"})}),Object(A.jsx)(i,{className:"container_country_info",children:!w&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"image__wrapper",children:Object(A.jsx)("img",{className:"image__flag",src:a.flags.svg,alt:a.name.official})}),Object(A.jsxs)("div",{className:"infos_country",children:[Object(A.jsx)("h2",{className:"infos_country__name",children:a.name.common}),Object(A.jsxs)("div",{className:"infos_country__info",children:[Object(A.jsxs)("div",{className:"column_1",children:[Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Native Name:"})," ",void 0===a.name.nativeName.eng?a.name.nativeName[Object.keys(a.name.nativeName)[0]].official:a.name.nativeName.eng.official]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Population:"})," ",a.population.toLocaleString()]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Region:"})," ",a.region]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Sub Region:"})," ",a.subregion]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Capital:"})," ",1===a.capital.length?a.capital[0]:a.capital.join(", ")]})]}),Object(A.jsxs)("div",{className:"column_2",children:[Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Top Level Domain:"})," ",a.tld]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Currencies:"})," ",Object.keys(a.currencies).join(", ")]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Languages:"})," ",Object.keys(a.languages).map((function(e){return a.languages[e]})).join(", ")]})]})]}),Object(A.jsxs)("div",{className:"infos_country__borders borders",children:[Object(A.jsx)("strong",{children:"Border Countries:"}),m.length>0?Object(A.jsx)("div",{className:"borders__grid",children:m.map((function(e){return Object(A.jsx)(o.b,{to:"FEM-Countries-Rest-API/country/".concat(e),children:Object(A.jsx)("div",{className:"borders__country",children:e})},Object(g.a)(16))}))}):Object(A.jsx)("p",{children:"No Borders"})]})]})]})})]})},M=function(){return Object(A.jsxs)(i,{className:"page_country_container",children:[Object(A.jsx)(B,{}),Object(A.jsx)(I,{})]})};var F=function(){return Object(A.jsx)("div",{children:Object(A.jsxs)(o.a,{children:[Object(A.jsx)(d,{}),Object(A.jsxs)(u.c,{children:[Object(A.jsx)(u.a,{exact:!0,path:"/FEM-Countries-Rest-API",children:Object(A.jsx)(k,{})}),Object(A.jsx)(u.a,{path:"FEM-Countries-Rest-API/country/:name",children:Object(A.jsx)(M,{})})]})]})})};c(85);r.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(F,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.e1d13171.chunk.js.map