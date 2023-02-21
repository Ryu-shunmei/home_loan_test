"use strict";(self.webpackChunktest_api_frontend=self.webpackChunktest_api_frontend||[]).push([[912],{1262:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(1413),n=t(9439),i=t(5987),d=t(1912),o=t(2797),c=t(2791),s=t(4554),l=t(1603),_=t(2656),u=t(184),f=["value","onChange","setResults"];function p(e){var a=e.value,t=e.onChange,p=e.setResults,x=(0,i.Z)(e,f);return(0,c.useEffect)((function(){Boolean(a)&&o.Z_().required().matches(_.Z.post_code).isValidSync(a)?(console.log("https://zipcloud.ibsnet.co.jp/api/search?zipcode=".concat(a.replace("-"))),d.Z.get("https://zipcloud.ibsnet.co.jp/api/search?zipcode=".concat(a.replace("-",""),"&limit=1")).then((function(e){var a=(0,n.Z)(e.data.results,1)[0];p(a)}))):p({address1:"",address2:"",address3:"",kana1:"",kana2:"",kana3:"",prefcode:"",zipcode:""})}),[a]),(0,u.jsx)(s.Z,{children:(0,u.jsx)(l.Z,{value:a,placeholder:"999-9999",fullWidth:!0,onChange:function(e){return t(e.target.value)},sx:(0,r.Z)({width:"110px"},x)})})}},981:function(e,a,t){t.d(a,{Z:function(){return s}});var r=t(3767),n=t(4554),i=t(9792),d=t(890),o=t(3967),c=t(184);function s(e){var a=e.config,t=e.value,s=e.onChange,l=(0,o.Z)();return(0,c.jsx)(r.Z,{direction:"column",justifyContent:"center",alignItems:"flex-start",spacing:"12px",children:a.map((function(e){return(0,c.jsx)(n.Z,{sx:{textAlign:"start",minWidth:"100%",paddingY:"4px",paddingX:"8px",border:"1px solid ".concat(t===e.value?l.palette.primary.light:l.palette.primary.lighter),borderRadius:"8px",background:t===e.value?l.palette.primary.lighter:l.palette.common.white,boxShadow:t===e.value?"none":"0px 0px 15px rgba(60, 72, 196, 0.1)",textDecoration:"none"},onClick:function(){return s(e.value)},children:(0,c.jsxs)(r.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:"2px",children:[(0,c.jsx)(i.Z,{value:null===t?"NULL":t,checked:t===e.value,onClick:function(){return s(e.value)}}),(0,c.jsx)(d.Z,{sx:{fontWeight:500,fontSize:"16px",color:l.palette.primary.main},children:e.lable})]})},e.value)}))})}},5396:function(e,a,t){t.d(a,{Z:function(){return l}});var r=t(1413),n=t(5987),i=t(3967),d=t(9912),o=t(9891),c=t(184),s=["config","value","onChange","textAlign"];function l(e){var a=e.config,t=e.value,l=e.onChange,_=e.textAlign,u=void 0===_?"center":_,f=(0,n.Z)(e,s),p=(0,i.Z)();return(0,c.jsx)(d.Z,{fullWidth:!0,value:t,displayEmpty:!0,MenuProps:{variant:"menu",PaperProps:{style:{paddingY:2,boxShadow:"0px 0px 15px rgba(60, 72, 196, 0.1)",border:"1px solid ".concat(p.palette.primary.lighter),borderColor:"#E4E7FF"}}},sx:(0,r.Z)({"& .MuiSelect-select":{textAlign:{textAlign:u},color:p.palette.text.primary}},f),onChange:function(e){return l(e.target.value)},children:a.map((function(e,a){return(0,c.jsx)(o.Z,{value:e.value,children:e.lable},a)}))})}},9038:function(e,a,t){t.d(a,{Z:function(){return s}});var r=t(9439),n=t(2791),i=t(3767),d=t(1603),o=t(890),c=t(184);function s(e){var a=e.value,t=e.onChange,s=(0,n.useState)(""),l=(0,r.Z)(s,2),_=l[0],u=l[1],f=(0,n.useState)(""),p=(0,r.Z)(f,2),x=p[0],m=p[1];return(0,n.useEffect)((function(){if(Boolean(a)){var e=a.split("/"),t=(0,r.Z)(e,2),n=t[0],i=t[1];u(n),m(i)}}),[a]),(0,n.useEffect)((function(){""!==_&&""!==x&&t("".concat(_,"/").concat(x))}),[_,x]),(0,c.jsxs)(i.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:"5px",children:[(0,c.jsx)(d.Z,{type:"number",placeholder:"----",InputProps:{inputProps:{style:{textAlign:"center"}}},value:_,fullWidth:!0,sx:{width:"128px"},onChange:function(e){return u(e.target.value)}}),(0,c.jsx)(o.Z,{variant:"rg16",children:"\u5e74"}),(0,c.jsx)(d.Z,{type:"number",placeholder:"--",InputProps:{inputProps:{style:{textAlign:"center"}}},value:x,fullWidth:!0,sx:{width:"52px"},onChange:function(e){return m(e.target.value)}}),(0,c.jsx)(o.Z,{variant:"rg16",children:"\u6708"})]})}},3161:function(e,a,t){t.r(a),t.d(a,{default:function(){return N}});var r=t(1413),n=t(9439),i=t(2797),d=t(2791),o=t(7689),c=t(9164),s=t(4554),l=t(3767),_=t(890),u=t(1603),f=t(6934),p=t(3967),x=t(9843),m=t(880),Z=t(3352),h=t(436),D=t(7169),g=t(981),H=t(5396),j=t(1262),v=t(9038),y=t(8977),C=t(3709),b=t(2656),O=t(7370),A=t(184),w=(0,f.ZP)("div")((function(e){return{minHeight:"100vh",background:e.theme.palette.background.gradation}})),S={HeaderData1__occupation1:"",HeaderData1__indsTypeMajorClCode1:"",HeaderData1__emplmtFormCode1:"",HeaderData1__indsBusinessContentsName1:"",HeaderData1__kanaOfficeName1:"",HeaderData1__kanjiOfficeName1:"",HeaderData1__officePstcd1:"",HeaderData1__officeKanaAddrPrefecture1:"",HeaderData1__officeKanaAddrCityTownCunty1:"",HeaderData1__officeKanaAddrDtl1:"",HeaderData1__addtlKanaOfficeAddr1:"",HeaderData1__kanjiOfficeAddrPrefecture1:"",HeaderData1__kanjiOfficeAddrCityTownCunty1:"",HeaderData1__kanjiOfficeAddrDtl1:"",HeaderData1__addtlKanjiOfficeAddrCode1:"",HeaderData1__officePhoneNum1:"",HeaderData1__headOfficeAddr1:"",HeaderData1__numOfEmpl1:"",HeaderData1__belongingDepartment1:"",HeaderData1__postCode1:"",HeaderData1__yearsOfJoiningCompany1:"",HeaderData1__listedDivision1:"",HeaderData1__officeEstablishmentDate1:"",HeaderData1__officeCapital1:"",HeaderData1__annualIncome1:"",HeaderData1__incomeSrceCode1:"",HeaderData1__finalIncomeTaxReturn1:null,HeaderData1__maternityMaternityLeave1:null,HeaderData1__loanUmu1:null,HeaderData1__loanOfficeName1:"",HeaderData1__preOfficeName1:"",HeaderData1__preOfficeLength1:""};function N(){var e=(0,p.Z)(),a=(0,o.s0)(),t=(0,x.Z)("stepData03",S),f=(0,n.Z)(t,2),N=f[0],k=f[1],I=(0,x.Z)("stepData01",{HeaderData1__IncomeAdditionType1:null,HeaderData1__pairLoanPresence:null}),V=(0,n.Z)(I,2),P=V[0],M=(V[1],(0,d.useState)("")),T=(0,n.Z)(M,2),R=T[0],W=T[1];(0,d.useEffect)((function(){console.log(P.HeaderData1__IncomeAdditionType1),console.log(P.HeaderData1__pairLoanPresence),1===P.HeaderData1__IncomeAdditionType1||1===P.HeaderData1__pairLoanPresence?W("/case/create/4"):W("/case/create/6")}),[P]);var L={HeaderData1__occupation1:!i.Z_().required().length(2).isValidSync(N.HeaderData1__occupation1),HeaderData1__indsTypeMajorClCode1:""!==N.HeaderData1__indsTypeMajorClCode1&&!i.Z_().length(1).isValidSync(N.HeaderData1__indsTypeMajorClCode1),HeaderData1__indsBusinessContentsName1:""!==N.HeaderData1__indsBusinessContentsName1&&!i.Z_().length(2).isValidSync(N.HeaderData1__indsBusinessContentsName1),HeaderData1__emplmtFormCode1:!i.Z_().required().length(2).isValidSync(N.HeaderData1__emplmtFormCode1),HeaderData1__kanaOfficeName1:!i.Z_().required().max(48).matches(b.Z.half).isValidSync(N.HeaderData1__kanaOfficeName1),HeaderData1__kanjiOfficeName1:!i.Z_().required().max(48).matches(b.Z.em).isValidSync(N.HeaderData1__kanjiOfficeName1),HeaderData1__officePstcd1:!i.Z_().required().max(8).matches(b.Z.post_code).isValidSync(N.HeaderData1__officePstcd1),HeaderData1__addtlKanaOfficeAddr1:""!==N.HeaderData1__addtlKanaOfficeAddr1&&!i.Z_().required().max(138).matches(b.Z.half).isValidSync(N.HeaderData1__addtlKanaOfficeAddr1),HeaderData1__addtlKanjiOfficeAddrCode1:""!==N.HeaderData1__addtlKanjiOfficeAddrCode1&&!i.Z_().required().max(99).matches(b.Z.em).isValidSync(N.HeaderData1__addtlKanjiOfficeAddrCode1),HeaderData1__officePhoneNum1:!i.Z_().required().matches(b.Z.home_phone).isValidSync(N.HeaderData1__officePhoneNum1),HeaderData1__headOfficeAddr1:!i.Z_().required().matches(b.Z.em).isValidSync(N.HeaderData1__headOfficeAddr1),HeaderData1__numOfEmpl1:!i.Rx().integer().min(0).max(9999999).isValidSync(N.HeaderData1__numOfEmpl1),HeaderData1__belongingDepartment1:""!==N.HeaderData1__belongingDepartment1&&!i.Z_().max(46).matches(b.Z.em).isValidSync(N.HeaderData1__belongingDepartment1),HeaderData1__postCode1:""!==N.HeaderData1__postCode1&&!i.Z_().required().length(2).isValidSync(N.HeaderData1__postCode1),HeaderData1__yearsOfJoiningCompany1:""!==N.HeaderData1__yearsOfJoiningCompany1&&!i.Z_().matches(b.Z.ym).isValidSync(N.HeaderData1__yearsOfJoiningCompany1),HeaderData1__listedDivision1:""!==N.HeaderData1__listedDivision1&&!i.Rx().integer().required().isValidSync(N.HeaderData1__listedDivision1),HeaderData1__officeEstablishmentDate1:""!==N.HeaderData1__officeEstablishmentDate1&&!i.Z_().matches(b.Z.ymd).isValidSync(N.HeaderData1__officeEstablishmentDate1),HeaderData1__officeCapital1:""!==N.HeaderData1__officeCapital1&&!i.Rx().integer().min(0).max(99999999999999).isValidSync(N.HeaderData1__officeCapital1),HeaderData1__annualIncome1:!i.Rx().integer().required().max(99999).isValidSync(N.HeaderData1__annualIncome1),HeaderData1__incomeSrceCode1:""!==N.HeaderData1__incomeSrceCode1&&!i.Z_().length(2).isValidSync(N.HeaderData1__incomeSrceCode1),HeaderData1__finalIncomeTaxReturn1:""!==N.HeaderData1__finalIncomeTaxReturn1&&!i.Rx().integer().isValidSync(N.HeaderData1__finalIncomeTaxReturn1),HeaderData1__maternityMaternityLeave1:!!Boolean(N.HeaderData1__maternityMaternityLeave1)&&!i.Rx().integer().required().isValidSync(N.HeaderData1__maternityMaternityLeave1),HeaderData1__loanUmu1:!!Boolean(N.HeaderData1__loanUmu1)&&!i.Rx().integer().required().isValidSync(N.HeaderData1__loanUmu1),HeaderData1__loanOfficeName1:""!==N.HeaderData1__loanOfficeName1&&!i.Z_().max(48).matches(b.Z.em).isValidSync(N.HeaderData1__loanOfficeName1),HeaderData1__preOfficeName1:""!==N.HeaderData1__preOfficeName1&&!i.Z_().required().max(48).matches(b.Z.half).isValidSync(N.HeaderData1__preOfficeName1),HeaderData1__preOfficeLength1:""!==N.HeaderData1__preOfficeLength1&&!i.Rx().integer().min(0).max(99).isValidSync(N.HeaderData1__preOfficeLength1)},K=(0,d.useMemo)((function(){return Object.values(L).filter((function(e){return!0===e})).length>0}),[N]);return(0,A.jsxs)(w,{children:[(0,A.jsx)(y.Z,{step:3}),(0,A.jsx)(c.Z,{maxWidth:"md",children:(0,A.jsxs)(s.Z,{sx:{boxShadow:e.effectStyle.outer,background:e.palette.background.gray,paddingTop:"144px",paddingBottom:"120px",border:"1px solid ".concat(e.palette.primary.lighter)},children:[(0,A.jsx)(h.Z,{text:"\u3042\u306a\u305f\u306e\u3054\u8077\u696d\u306b\u3064\u3044\u3066\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002"}),(0,A.jsxs)(m.Z,{title:"\u8077\u696d",error:L.HeaderData1__occupation1,children:[(0,A.jsx)(H.Z,{value:N.HeaderData1__occupation1,config:O.Q0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__occupation1:e}))},textAlign:"start"}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808",error:L.HeaderData1__occupation1})]}),(0,A.jsxs)(m.Z,{title:"\u696d\u7a2e",error:L.HeaderData1__indsTypeMajorClCode1,children:[(0,A.jsx)(H.Z,{value:N.HeaderData1__indsTypeMajorClCode1,config:O.HC,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__indsTypeMajorClCode1:e}))},textAlign:"start"}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__indsTypeMajorClCode1})]}),(0,A.jsxs)(m.Z,{title:"\u8077\u7a2e",error:L.HeaderData1__indsBusinessContentsName1,children:[(0,A.jsx)(H.Z,{value:N.HeaderData1__indsBusinessContentsName1,config:O.XK,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__indsBusinessContentsName1:e}))},textAlign:"start"}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__indsBusinessContentsName1})]}),(0,A.jsxs)(m.Z,{title:"\u96c7\u7528\u5f62\u614b",error:L.HeaderData1__emplmtFormCode1,children:[(0,A.jsx)(H.Z,{value:N.HeaderData1__emplmtFormCode1,config:O.o7,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__emplmtFormCode1:e}))},textAlign:"start"}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808",error:L.HeaderData1__emplmtFormCode1})]}),(0,A.jsx)(m.Z,{title:"\u52e4\u52d9\u5148\u540d",error:L.HeaderData1__kanaOfficeName1|L.HeaderData1__kanjiOfficeName1,children:(0,A.jsxs)(l.Z,{spacing:"20px",children:[(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u30ab\u30ca\u3000\u52e4\u52d9\u5148\u540d"}),(0,A.jsx)(u.Z,{type:"text",value:N.HeaderData1__kanaOfficeName1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__kanaOfficeName1:e.target.value}))}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u534a\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba48;",error:L.HeaderData1__kanaOfficeName1})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u6f22\u5b57\u3000\u52e4\u52d9\u5148\u540d"}),(0,A.jsx)(u.Z,{type:"text",value:N.HeaderData1__kanjiOfficeName1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__kanjiOfficeName1:e.target.value}))}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u5168\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba48;",error:L.HeaderData1__kanjiOfficeName1})]})]})}),(0,A.jsx)(m.Z,{title:"\u73fe\u4f4f\u6240",error:L.HeaderData1__officePstcd1|L.HeaderData1__addtlKanaOfficeAddr1|L.HeaderData1__addtlKanjiOfficeAddrCode1,children:(0,A.jsxs)(l.Z,{spacing:"20px",children:[(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u90f5\u4fbf\u756a\u53f7"}),(0,A.jsx)(j.Z,{value:N.HeaderData1__officePstcd1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__officePstcd1:e}))},setResults:function(e){k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__officeKanaAddrPrefecture1:e.kana1,HeaderData1__officeKanaAddrCityTownCunty1:e.kana2,HeaderData1__officeKanaAddrDtl1:e.kana3,HeaderData1__kanjiOfficeAddrPrefecture1:e.address1,HeaderData1__kanjiOfficeAddrCityTownCunty1:e.address2,HeaderData1__kanjiOfficeAddrDtl1:e.address3}))}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u534a\u89d2\u6570\u5b57\u8a18\u53f7; \u30b5\u30a4\u30ba8; ***-****;",error:L.HeaderData1__officePstcd1})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u30ab\u30ca\u3000\u90fd\u9053\u5e9c\u770c"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__officeKanaAddrPrefecture1,sx:{width:"148px"}}),(0,A.jsx)(Z.Z,{text:"\u90f5\u4fbf\u756a\u53f7\u5165\u529b\u3059\u308b\u3068\u81ea\u52d5\u7684\u306b\u4e0a\u8a18\u9805\u76ee\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u30ab\u30ca\u3000\u5e02\u533a\u90e1"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__officeKanaAddrCityTownCunty1}),(0,A.jsx)(Z.Z,{text:"\u90f5\u4fbf\u756a\u53f7\u5165\u529b\u3059\u308b\u3068\u81ea\u52d5\u7684\u306b\u4e0a\u8a18\u9805\u76ee\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u30ab\u30ca\u3000\u753a\u6751\u5b57\u4e01\u76ee"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__officeKanaAddrDtl1}),(0,A.jsx)(Z.Z,{text:"\u90f5\u4fbf\u756a\u53f7\u5165\u529b\u3059\u308b\u3068\u81ea\u52d5\u7684\u306b\u4e0a\u8a18\u9805\u76ee\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u30ab\u30ca\u3000\u88dc\u8db3\u4f4f\u6240"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__addtlKanaOfficeAddr1,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__addtlKanaOfficeAddr1:e.target.value}))}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u534a\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba40;",error:L.HeaderData1__addtlKanaOfficeAddr1})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u6f22\u5b57\u3000\u90fd\u9053\u5e9c\u770c"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__kanjiOfficeAddrPrefecture1,sx:{width:"148px"}}),(0,A.jsx)(Z.Z,{text:"\u90f5\u4fbf\u756a\u53f7\u5165\u529b\u3059\u308b\u3068\u81ea\u52d5\u7684\u306b\u4e0a\u8a18\u9805\u76ee\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u6f22\u5b57\u3000\u5e02\u533a\u90e1"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__kanjiOfficeAddrCityTownCunty1}),(0,A.jsx)(Z.Z,{text:"\u90f5\u4fbf\u756a\u53f7\u5165\u529b\u3059\u308b\u3068\u81ea\u52d5\u7684\u306b\u4e0a\u8a18\u9805\u76ee\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u6f22\u5b57\u3000\u753a\u6751\u5b57\u4e01\u76ee"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__kanjiOfficeAddrDtl1}),(0,A.jsx)(Z.Z,{text:"\u90f5\u4fbf\u756a\u53f7\u5165\u529b\u3059\u308b\u3068\u81ea\u52d5\u7684\u306b\u4e0a\u8a18\u9805\u76ee\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u6f22\u5b57\u3000\u88dc\u8db3\u4f4f\u6240"}),(0,A.jsx)(u.Z,{fullWidth:!0,value:N.HeaderData1__addtlKanjiOfficeAddrCode1,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__addtlKanjiOfficeAddrCode1:e.target.value}))}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u534a\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba40;",error:L.HeaderData1__addtlKanjiOfficeAddrCode1})]})]})}),(0,A.jsxs)(m.Z,{title:"\u96fb\u8a71\u756a\u53f7",error:L.HeaderData1__officePhoneNum1,children:[(0,A.jsx)(u.Z,{value:N.HeaderData1__officePhoneNum1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__officePhoneNum1:e.target.value}))},sx:{width:"228px"}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u534a\u89d2\u6570\u5b57\u8a18\u53f7; 03-9999-9999;",error:L.HeaderData1__officePhoneNum1})]}),(0,A.jsxs)(m.Z,{title:"\u672c\u793e\u6240\u5728\u5730",error:L.HeaderData1__headOfficeAddr1,children:[(0,A.jsx)(u.Z,{value:N.HeaderData1__headOfficeAddr1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__headOfficeAddr1:e.target.value}))},sx:{width:"228px"}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u5168\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba20;",error:L.HeaderData1__headOfficeAddr1})]}),(0,A.jsxs)(m.Z,{title:"\u5f93\u696d\u54e1\u6570",error:L.HeaderData1__numOfEmpl1,children:[(0,A.jsxs)(l.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,A.jsx)(u.Z,{type:"number",placeholder:"0",value:N.HeaderData1__numOfEmpl1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__numOfEmpl1:e.target.value}))},sx:{width:"110px"}}),(0,A.jsx)(_.Z,{variant:"rg16",children:"\u540d"})]}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u534a\u89d2\u6570\u5b57; \u30b5\u30a4\u30ba7;",error:L.HeaderData1__numOfEmpl1})]}),(0,A.jsxs)(m.Z,{title:"\u6240\u5c5e\u90e8\u7f72",error:L.HeaderData1__belongingDepartment1,children:[(0,A.jsx)(u.Z,{value:N.HeaderData1__belongingDepartment1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__belongingDepartment1:e.target.value}))},sx:{width:"228px"}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f; \u5168\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba46;",error:L.HeaderData1__belongingDepartment1})]}),(0,A.jsxs)(m.Z,{title:"\u5f79\u8077",error:L.HeaderData1__postCode1,children:[(0,A.jsx)(H.Z,{value:N.HeaderData1__postCode1,config:O.tv,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__postCode1:e}))},textAlign:"start"}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__postCode1})]}),(0,A.jsxs)(m.Z,{title:"\u5c31\u8077\u5e74\u6708",error:L.HeaderData1__yearsOfJoiningCompany1,children:[(0,A.jsx)(v.Z,{value:N.HeaderData1__yearsOfJoiningCompany1,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__yearsOfJoiningCompany1:e}))}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f; \u534a\u89d2\u6570\u5b57\u8a18\u53f7; yyyy/mm;",error:L.HeaderData1__yearsOfJoiningCompany1})]}),(0,A.jsxs)(m.Z,{title:"\u4e0a\u5834\u533a\u5206",error:L.HeaderData1__listedDivision1,children:[(0,A.jsx)(H.Z,{value:N.HeaderData1__listedDivision1,config:O.eo,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__listedDivision1:e}))},textAlign:"start"}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__listedDivision1})]}),(0,A.jsxs)(m.Z,{title:"\u8a2d\u7acb\u5e74\u6708\u65e5",error:L.HeaderData1__officeEstablishmentDate1,children:[(0,A.jsx)(D.Z,{value:N.HeaderData1__officeEstablishmentDate1,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__officeEstablishmentDate1:e}))}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f; \u534a\u89d2\u6570\u5b57\u8a18\u53f7; yyyy/mm/dd;",error:L.HeaderData1__officeEstablishmentDate1})]}),(0,A.jsxs)(m.Z,{title:"\u8cc7\u672c\u91d1",error:L.HeaderData1__officeCapital1,children:[(0,A.jsxs)(l.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,A.jsx)(u.Z,{type:"number",placeholder:"0",value:N.HeaderData1__officeCapital1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__officeCapital1:e.target.value}))},sx:{width:"228px"}}),(0,A.jsx)(_.Z,{variant:"rg16",children:"\u5186"})]}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f; \u534a\u89d2\u6570\u5b57; \u30b5\u30a4\u30ba14;",error:L.HeaderData1__officeCapital1})]}),(0,A.jsx)(m.Z,{title:"\u5e74\u53ce\u95a2\u9023",error:L.HeaderData1__annualIncome1,children:(0,A.jsxs)(s.Z,{sx:{borderRadius:"4px",boxShadow:e.effectStyle.outerMin,border:"1px solid ".concat(e.palette.primary.lighter)},children:[(0,A.jsxs)(m.Z,{title:"\u5e74\u53ce",error:L.HeaderData1__annualIncome1,borderRadius:"2.5px 2.5px 0px 0px",children:[(0,A.jsxs)(l.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,A.jsx)(u.Z,{type:"number",placeholder:"0",value:N.HeaderData1__annualIncome1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__annualIncome1:e.target.value}))},sx:{width:"228px"}}),(0,A.jsx)(_.Z,{variant:"rg16",children:"\u4e07\u5186"})]}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f; \u534a\u89d2\u6570\u5b57; 0~99999;",error:L.HeaderData1__annualIncome1})]}),(0,A.jsxs)(m.Z,{title:"\u53ce\u5165\u6e90",error:L.HeaderData1__incomeSrceCode1,children:[(0,A.jsx)(g.Z,{value:N.HeaderData1__incomeSrceCode1,config:O.bi,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__incomeSrceCode1:e}))}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__incomeSrceCode1})]}),(0,A.jsxs)(m.Z,{title:"\u78ba\u5b9a\u7533\u544a\u6709\u7121",error:L.HeaderData1__finalIncomeTaxReturn1,children:[(0,A.jsx)(g.Z,{value:N.HeaderData1__finalIncomeTaxReturn1,config:O.vy,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__finalIncomeTaxReturn1:e}))}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__finalIncomeTaxReturn1})]})]})}),(0,A.jsxs)(m.Z,{title:"\u7523\u4f11\u30fb\u80b2\u4f11",error:L.HeaderData1__maternityMaternityLeave1,children:[(0,A.jsx)(g.Z,{value:N.HeaderData1__maternityMaternityLeave1,config:O.A7,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__maternityMaternityLeave1:e}))}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__maternityMaternityLeave1})]}),(0,A.jsxs)(m.Z,{title:"\u51fa\u5411\u6709\u7121",error:L.HeaderData1__loanUmu1,children:[(0,A.jsx)(g.Z,{value:N.HeaderData1__loanUmu1,config:O.vy,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__loanUmu1:e}))}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f",error:L.HeaderData1__loanUmu1}),(0,A.jsx)(_.Z,{variant:"b14",color:e.palette.primary.main,ml:"2px",mb:"5px",children:"\u203b\u4e0a\u8a18\u8cc7\u91d1\u4f7f\u9014\u304c\u300c\u501f\u63db\u300d\u306e\u5834\u5408\u306f\u51fa\u5411\u5148\u4f1a\u793e\u540d\u304c\u3042\u308a\u3002"}),1===N.HeaderData1__loanUmu1&&(0,A.jsx)(s.Z,{sx:{borderRadius:"4px",boxShadow:e.effectStyle.outerMin,border:"1px solid ".concat(e.palette.primary.light)},children:(0,A.jsxs)(m.Z,{title:"\u51fa\u5411\u5148\u4f1a\u793e\u540d",error:L.HeaderData1__loanOfficeName1,borderRadius:"2.5px 2.5px 0px 0px",children:[(0,A.jsx)(u.Z,{value:N.HeaderData1__loanOfficeName1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__loanOfficeName1:e.target.value}))},sx:{width:"228px"}}),(0,A.jsx)(Z.Z,{text:"\u4efb\u610f; \u5168\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba48;",error:L.HeaderData1__loanOfficeName1})]})})]}),(0,A.jsx)(m.Z,{title:"\u524d\u52e4\u52d9\u5148",error:L.HeaderData1__preOfficeName1|L.HeaderData1__preOfficeLength1,children:(0,A.jsxs)(l.Z,{spacing:"20px",children:[(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u524d\u52e4\u52d9\u5148\u4f1a\u793e\u540d"}),(0,A.jsx)(u.Z,{type:"text",value:N.HeaderData1__preOfficeName1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__preOfficeName1:e.target.value}))}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u5168\u89d2\u6587\u5b57; \u30b5\u30a4\u30ba48;",error:L.HeaderData1__preOfficeName1})]}),(0,A.jsxs)(s.Z,{width:"100%",children:[(0,A.jsx)(_.Z,{component:s.Z,variant:"rg14",sx:{mb:"5px",pl:"2px"},children:"\u524d\u52e4\u52d9\u5148\u52e4\u7d9a\u5e74\u6570"}),(0,A.jsx)(u.Z,{type:"text",value:N.HeaderData1__preOfficeLength1,fullWidth:!0,onChange:function(e){return k((0,r.Z)((0,r.Z)({},N),{},{HeaderData1__preOfficeLength1:e.target.value}))}}),(0,A.jsx)(Z.Z,{text:"\u5fc5\u9808; \u534a\u89d2\u6570\u5b57; \u30b5\u30a4\u30ba2;",error:L.HeaderData1__preOfficeLength1})]})]})})]})}),(0,A.jsx)(C.Z,{hasErorr:K,handlePre:function(){return a("/case/create/2")},handleNext:function(){return a(R)}})]})}},9891:function(e,a,t){t.d(a,{Z:function(){return b}});var r=t(4942),n=t(3366),i=t(7462),d=t(2791),o=t(8182),c=t(4419),s=t(2065),l=t(6934),_=t(1402),u=t(6199),f=t(335),p=t(162),x=t(2071),m=t(5878);var Z=(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=(0,m.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var D=(0,m.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),g=t(1217);function H(e){return(0,g.Z)("MuiMenuItem",e)}var j=(0,m.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),v=t(184),y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],C=(0,l.ZP)(f.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.dense&&a.dense,t.divider&&a.divider,!t.disableGutters&&a.gutters]}})((function(e){var a,t=e.theme,n=e.ownerState;return(0,i.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},(a={"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(a,"&.".concat(j.selected),(0,r.Z)({backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)})),(0,r.Z)(a,"&.".concat(j.selected,":hover"),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}),(0,r.Z)(a,"&.".concat(j.focusVisible),{backgroundColor:(t.vars||t).palette.action.focus}),(0,r.Z)(a,"&.".concat(j.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),(0,r.Z)(a,"& + .".concat(Z.root),{marginTop:t.spacing(1),marginBottom:t.spacing(1)}),(0,r.Z)(a,"& + .".concat(Z.inset),{marginLeft:52}),(0,r.Z)(a,"& .".concat(D.root),{marginTop:0,marginBottom:0}),(0,r.Z)(a,"& .".concat(D.inset),{paddingLeft:36}),(0,r.Z)(a,"& .".concat(h.root),{minWidth:36}),a),!n.dense&&(0,r.Z)({},t.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,(0,r.Z)({},"& .".concat(h.root," svg"),{fontSize:"1.25rem"})))})),b=d.forwardRef((function(e,a){var t=(0,_.Z)({props:e,name:"MuiMenuItem"}),r=t.autoFocus,s=void 0!==r&&r,l=t.component,f=void 0===l?"li":l,m=t.dense,Z=void 0!==m&&m,h=t.divider,D=void 0!==h&&h,g=t.disableGutters,j=void 0!==g&&g,b=t.focusVisibleClassName,O=t.role,A=void 0===O?"menuitem":O,w=t.tabIndex,S=t.className,N=(0,n.Z)(t,y),k=d.useContext(u.Z),I=d.useMemo((function(){return{dense:Z||k.dense||!1,disableGutters:j}}),[k.dense,Z,j]),V=d.useRef(null);(0,p.Z)((function(){s&&V.current&&V.current.focus()}),[s]);var P,M=(0,i.Z)({},t,{dense:I.dense,divider:D,disableGutters:j}),T=function(e){var a=e.disabled,t=e.dense,r=e.divider,n=e.disableGutters,d=e.selected,o=e.classes,s={root:["root",t&&"dense",a&&"disabled",!n&&"gutters",r&&"divider",d&&"selected"]},l=(0,c.Z)(s,H,o);return(0,i.Z)({},o,l)}(t),R=(0,x.Z)(V,a);return t.disabled||(P=void 0!==w?w:-1),(0,v.jsx)(u.Z.Provider,{value:I,children:(0,v.jsx)(C,(0,i.Z)({ref:R,role:A,tabIndex:P,component:f,focusVisibleClassName:(0,o.Z)(T.focusVisible,b),className:(0,o.Z)(T.root,S)},N,{ownerState:M,classes:T}))})}))}}]);
//# sourceMappingURL=912.fc1b6e1f.chunk.js.map