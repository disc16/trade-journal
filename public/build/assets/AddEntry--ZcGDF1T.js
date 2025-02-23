import{x as A,y as F,r as P,z as S,j as B,A as $,o as m,c,k as h,B as q,D,a as t,w as d,n as x,u as l,C as H,e as w,b as a,t as g,d as I,F as f,g as v,T as L,f as N}from"./app-xGCnMAVa.js";import{_ as o,b as i,a as n}from"./TextInput-D2_ebhtI.js";import{P as O}from"./PrimaryButton-DIC_mUV7.js";import{_ as Z}from"./SecondaryButton-C1KI4SWQ.js";import{_ as z}from"./Modal-Crjiwn-a.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={__name:"SelectInput",props:A({options:{type:Array}},{modelValue:{type:String,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(k){const p=F(k,"modelValue");return P(null),S(()=>{}),(y,e)=>B((m(),c("select",{"onUpdate:modelValue":e[0]||(e[0]=b=>p.value=b),class:"mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[h(y.$slots,"default")],512)),[[$,p.value]])}},W={class:"mb-4 flex justify-end"},G={class:"relative p-4 w-full max-w-full max-h-full"},J={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},K={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"},Q={class:"text-lg font-semibold text-gray-900 dark:text-white"},X={class:"grid gap-4 mb-4 p-4 grid-cols-5"},Y={class:"relative max-w-sm"},ee=["value"],le={class:"flex justify-end items-center gap-4 col-span-5"},te={key:0,class:"text-sm text-gray-600"},de={__name:"AddEntry",props:{tickers:{type:Array},capital:{type:Object}},setup(k){const p=k,y=P(!1);let e={processing:!1};const b=["Setup","Market","Impulse"],U=["Long","Short"],C=["Risk On","Risk off","Mixed"],M=[],R=()=>{console.log("Capital",p.capital.capital),e=H({title:"Add Entry",entry_date:"",entry_time:"",ticker:"",analysis:"",order_type:"Market",economic_indicator_id:"",economic_indicator:"",ec_result:"",stock_sentiment:"",position:"",trade_sentiment:"",acct_curr_pair_price:"",entry_price:"",stop_price:"",manual_risk_value:p.capital.risk_amount,lots:"",risk_value:p.capital.risk_amount,target_reco:"",target_price_1:"",target_price_2:"",target_price_3:"",percent_control:""}),T()},T=()=>{y.value=!0},V=()=>{y.value=!1},E=()=>{e.patch(route("users.update"),{onSuccess:()=>V(),onError:()=>e.email.focus(),onFinish:()=>e.reset()})};return S(()=>{q()}),(se,s)=>{const j=D("vue-date-picker");return m(),c("div",W,[t(Z,{class:x({"opacity-25":l(e).processing}),disabled:l(e).processing,onClick:s[0]||(s[0]=()=>R())},{default:d(()=>s[20]||(s[20]=[w(" Add Entry ")])),_:1},8,["class","disabled"]),t(z,{maxWidth:"6xl",show:y.value,onClose:V},{default:d(()=>[a("div",G,[a("div",J,[a("div",K,[a("h3",Q,g(l(e).title),1),a("button",{onClick:V,type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"crud-modal"},s[21]||(s[21]=[a("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[a("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),a("span",{class:"sr-only"},"Close modal",-1)]))]),a("form",{onSubmit:I(E,["prevent"]),class:"mt-6 space-y-6"},[a("div",X,[s[25]||(s[25]=a("div",{class:"flex justify-start items-center gap-4 col-span-5"},[a("h2",null,[a("strong",null,"Entry Data + Criteria")])],-1)),a("div",null,[t(o,{for:"entry_date",value:"Firstname"}),a("div",Y,[s[22]||(s[22]=a("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"},[a("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[a("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})])],-1)),s[23]||(s[23]=a("input",{datepicker:"",id:"default-datepicker",type:"text",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Select date"},null,-1)),t(j)]),t(i,{class:"mt-2",message:l(e).errors.first_name},null,8,["message"])]),a("div",null,[t(o,{for:"tickers",value:"Ticker/Pair"}),t(_,{id:"tickers",modelValue:l(e).ticker,"onUpdate:modelValue":s[1]||(s[1]=r=>l(e).ticker=r)},{default:d(()=>[(m(!0),c(f,null,v(k.tickers,(r,u)=>(m(),c("option",{key:u,value:r.id},g(r.ticker),9,ee))),128))]),_:1},8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.ticker},null,8,["message"])]),a("div",null,[t(o,{for:"orderType",value:"Order Type"}),t(_,{id:"orderType",modelValue:l(e).order_type,"onUpdate:modelValue":s[2]||(s[2]=r=>l(e).order_type=r)},{default:d(()=>[(m(),c(f,null,v(b,(r,u)=>a("option",{key:u},g(r),1)),64))]),_:1},8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.order_type},null,8,["message"])]),a("div",null,[t(o,{for:"positon",value:"Position"}),t(_,{id:"position",modelValue:l(e).position,"onUpdate:modelValue":s[3]||(s[3]=r=>l(e).position=r)},{default:d(()=>[(m(),c(f,null,v(U,(r,u)=>a("option",{key:u},g(r),1)),64))]),_:1},8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.position},null,8,["message"])]),a("div",null,[t(o,{for:"stockSentiment",value:"Stock Market Sentiment"}),t(_,{id:"stockSentiment",modelValue:l(e).stock_sentiment,"onUpdate:modelValue":s[4]||(s[4]=r=>l(e).stock_sentiment=r)},{default:d(()=>[(m(),c(f,null,v(C,(r,u)=>a("option",{key:u},g(r),1)),64))]),_:1},8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.stock_sentiment},null,8,["message"])]),a("div",null,[t(o,{for:"purrchasePrice",value:"Account Currency Pair Price"}),t(n,{id:"purrchasePrice",type:"text",class:"mt-1 block w-full",modelValue:l(e).acct_curr_pair_price,"onUpdate:modelValue":s[5]||(s[5]=r=>l(e).acct_curr_pair_price=r),required:"",autofocus:"",autocomplete:"purrchasePrice"},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.acct_curr_pair_price},null,8,["message"])]),a("div",null,[t(o,{for:"analysis",value:"Analysis/Setup"}),t(_,{id:"analysis",modelValue:l(e).analysis,"onUpdate:modelValue":s[6]||(s[6]=r=>l(e).analysis=r)},{default:d(()=>[(m(),c(f,null,v(M,(r,u)=>a("option",{key:u},g(r),1)),64))]),_:1},8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.analysis},null,8,["message"])]),a("div",null,[t(o,{for:"economicIndicator",value:"Economic Calendar"}),t(n,{id:"economicIndicator",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).economic_indicator,"onUpdate:modelValue":s[7]||(s[7]=r=>l(e).economic_indicator=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.acct_curr_pair_price},null,8,["message"])]),a("div",null,[t(o,{for:"ecResult",value:"EC Result"}),t(n,{id:"ecResult",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).ec_result,"onUpdate:modelValue":s[8]||(s[8]=r=>l(e).ec_result=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.ec_result},null,8,["message"])]),a("div",null,[t(o,{for:"tradeSentiment",value:"Trade Sentiment"}),t(n,{id:"tradeSentiment",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).trade_sentiment,"onUpdate:modelValue":s[9]||(s[9]=r=>l(e).trade_sentiment=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.trade_sentiment},null,8,["message"])]),s[26]||(s[26]=a("div",{class:"flex justify-start items-center gap-4 col-span-5"},[a("h2",null,[a("strong",null,"Risk Management")])],-1)),a("div",null,[t(o,{for:"entryPrice",value:"Entry Price"}),t(n,{id:"entryPrice",type:"text",class:"mt-1 block w-full",modelValue:l(e).entry_price,"onUpdate:modelValue":s[10]||(s[10]=r=>l(e).entry_price=r),required:"",autofocus:"",autocomplete:"purrchasePrice"},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.entry_price},null,8,["message"])]),a("div",null,[t(o,{for:"stopPrice",value:"Stop Price"}),t(n,{id:"stopPrice",type:"text",class:"mt-1 block w-full",modelValue:l(e).stop_price,"onUpdate:modelValue":s[11]||(s[11]=r=>l(e).stop_price=r),required:"",autofocus:"",autocomplete:"purrchasePrice"},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.stop_price},null,8,["message"])]),a("div",null,[t(o,{for:"manualRiskValue",value:"Manual Risk Value"}),t(n,{id:"manualRiskValue",type:"number",max:l(e).manual_risk_value,step:"any",class:"mt-1 block w-full",modelValue:l(e).manual_risk_value,"onUpdate:modelValue":s[12]||(s[12]=r=>l(e).manual_risk_value=r),required:"",autofocus:"",autocomplete:"purrchasePrice"},null,8,["max","modelValue"]),t(i,{class:"mt-2",message:l(e).errors.manual_risk_value},null,8,["message"])]),a("div",null,[t(o,{for:"lots",value:"Shares/Lots"}),t(n,{id:"lots",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).lots,"onUpdate:modelValue":s[13]||(s[13]=r=>l(e).lots=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.lots},null,8,["message"])]),a("div",null,[t(o,{for:"riskValue",value:"Risk Value"}),t(n,{id:"riskValue",type:"number",max:l(e).manual_risk_value,step:"any",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).risk_value,"onUpdate:modelValue":s[14]||(s[14]=r=>l(e).risk_value=r),disabled:""},null,8,["max","modelValue"]),t(i,{class:"mt-2",message:l(e).errors.risk_value},null,8,["message"])]),a("div",null,[t(o,{for:"targetRecommend",value:"Target Recommendation"}),t(n,{id:"targetRecommend",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).target_reco,"onUpdate:modelValue":s[15]||(s[15]=r=>l(e).target_reco=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.target_reco},null,8,["message"])]),a("div",null,[t(o,{for:"targetPrice1",value:"Target Price 1"}),t(n,{id:"targetPrice1",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).target_price_1,"onUpdate:modelValue":s[16]||(s[16]=r=>l(e).target_price_1=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.target_price_1},null,8,["message"])]),a("div",null,[t(o,{for:"targetPrice1",value:"Target Price 2"}),t(n,{id:"targetPrice2",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).target_price_2,"onUpdate:modelValue":s[17]||(s[17]=r=>l(e).target_price_2=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.target_price_2},null,8,["message"])]),a("div",null,[t(o,{for:"targetPrice3",value:"Target Price 3"}),t(n,{id:"targetPrice3",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).target_price_3,"onUpdate:modelValue":s[18]||(s[18]=r=>l(e).target_price_3=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.target_price_3},null,8,["message"])]),a("div",null,[t(o,{for:"percentControl",value:"% Control"}),t(n,{id:"percentControl",type:"text",class:"mt-1 block w-full bg-gray-200",modelValue:l(e).percent_control,"onUpdate:modelValue":s[19]||(s[19]=r=>l(e).percent_control=r),disabled:""},null,8,["modelValue"]),t(i,{class:"mt-2",message:l(e).errors.percent_control},null,8,["message"])]),a("div",le,[t(O,{class:x({"opacity-25":l(e).processing}),disabled:l(e).processing},{default:d(()=>s[24]||(s[24]=[w(" Save ")])),_:1},8,["class","disabled"]),t(L,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:d(()=>[l(e).recentlySuccessful?(m(),c("p",te," Saved. ")):N("",!0)]),_:1})])])],32)])])]),_:1},8,["show"])])}}};export{de as default};
