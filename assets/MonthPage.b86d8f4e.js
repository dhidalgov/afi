import{Q as at}from"./use-panel.221eb5c3.js";import{aJ as st,r as j,O as rt,o as nt,A as it,w as M,m as e,n as ct,p as P,Z as c,S as p,aC as r,j as g,a0 as E,W as ot,b9 as R,a1 as f,Y as lt,V as _t,az as dt,Q as a,R as s,aK as O,F as T}from"./index.30038687.js";import{a as ut,g as pt,_ as ht}from"./useUI.fee4d972.js";import{Q as mt}from"./QMarkupTable.3de780bb.js";import{Q as yt}from"./QPage.fb474075.js";import{u as vt}from"./vue-i18n.de0be2d9.js";import{L as bt}from"./LayoutStore.022b0089.js";import{_ as kt}from"./plugin-vue_export-helper.21dcd24c.js";import"./QResizeObserver.621317a1.js";const Q=["FHLB","FNMA","GNMA","FHLMC","GNMALB","PRPBA","PRPFC","ENAP","CCU","FNMA","FFCB","PRCTF","FNR","FHR","FEDFARM","PR PBC","PR DEV ","UBS USD","PRU FUN ","GNMA","PREP","PRHWY","PRHSG","PRST","PR COMW ","PRERSYS","GOVDETAX","PR-AQUED","COFINA","USTN"],G=["UBS FINANCIAL","MERRILL LYNCH","MORTGAN STANLEY ","IFS SECURITIES INC","MULTI-BANK SECURITIES, INC"],Y=()=>{let d=J({base:100,pad:3}),y=`${U(6)}${U(6)}`;var i=W();return`${i} ${y}-${d}`},N=(d=1)=>{var y=new Date,i=1e3*60*60*24*d,v=new Date(y.getTime()-i);return gt(v,y)},gt=(d,y)=>new Date(d.getTime()+Math.random()*(y.getTime()-d.getTime())),W=()=>{let d=Q.length,y=u({max:d});return Q[y]},K=()=>{let d=G.length,y=u({max:d,min:0});return G[y]},U=d=>String.fromCharCode(65+Math.floor(Math.random()*d)),J=d=>{var C,w;let y=(C=d==null?void 0:d.base)!=null?C:1e10,i=(w=d==null?void 0:d.pad)!=null?w:10,k=`0000000000${u({max:y,min:0})}`;return k.substring(k.length-i)},u=d=>{var k,b;let y=(k=d==null?void 0:d.max)!=null?k:1e10,i=(b=d==null?void 0:d.min)!=null?b:0,v=Math.floor(Math.random()*y)+i;return i<0&&(v*=Math.round(Math.random())?1:-1),v},H=d=>{var v;let y=(v=d==null?void 0:d.max)!=null?v:1;return Math.random()*y},$t=d=>{let y=[];for(let v=0;v<d;v++){var i=H();y.push({index:v,casa_corretaje:K(),cusip:J({pad:10}),description:Y(),dg_compra:N(365*5),dg_vencimiento:N(365*5*-1),dg_valor_nominal:u({max:1e6,min:0}),dg_costo:u({max:1e6,min:0}),dg_prima_descuento:u({max:1e4,min:-1}),dg_tasa_interes:H({max:.07}),ap_balance_inicial:u({max:1e6,min:0}),ap_adciones:u({max:5e3,min:0}),ap_int_div_gan_cap:u({max:5e3,min:0}),ap_ventas:u({max:5e3,min:0}),ap_recobro:u({max:5e3,min:0}),ap_transferencia:u({max:15e3,min:0}),ap_balance_final:u({max:1e6,min:0}),apd_balance_inicial:u({max:1e6,min:0}),apd_adciones:u({max:5e3,min:0}),apd_amortizacion:u({max:5e3,min:0}),apd_cancelacion_ventas:u({max:5e3,min:0}),apd_transferencia:u({max:15e3,min:0}),apd_balance_final:u({max:1e6,min:0}),avm_valor_neto_libros:u({max:1e6,min:0}),avm_valor_mercado:u({max:5e3,min:0}),avm_ganancia_perdida_realizada:u({max:5e3,min:-1}),avm_ganancia_perdida_no_realizada:u({max:5e3,min:-1}),ai_por_cobrar_inicial:u({max:1e6,min:0}),ai_interes_en_compra:u({max:5e3,min:0}),ai_ingreso_intereses:u({max:5e3,min:0}),ai_ingreso_dividendos:u({max:5e3,min:0}),ai_ingreso_ganancia_capital:u({max:15e3,min:0}),ai_recibidos_capitalizados:u({max:15e3,min:0}),ai_transferencia:u({max:15e3,min:0}),ai_por_cobrar_final:u({max:1e6,min:0}),av_fecha_de_venta:i>.9?N(30):null,av_principal:i>.9?u({max:5e3,min:0}):null,av_prima_descuento:i>.9?u({max:5e3,min:0}):null,av_costo_amortizado:i>.9?u({max:5e3,min:0}):null,av_precio_venta:i>.9?u({max:15e3,min:0}):null,av_ganancia_perdida:i>.9?u({max:1e6,min:0}):null})}return y},ft=(d,y,i)=>{try{if(d==null||typeof d=="function")return 0;var v=0;for(let k=0;k<d.length;k++)v+=d[k][y];return v}catch(k){console.error("fakeData:summarize",k)}},xt=(d,y)=>d.map(i=>i[y]).filter((i,v,k)=>k.indexOf(i)===v),wt=(d,y,i)=>{try{return d==null||typeof d=="function"?[]:d.filter((v,k,b)=>v[y]==i)}catch(v){console.error("fakeData:filterByProperty",v)}},jt=()=>({getData:$t,getDescNumber:Y,getRandomDateBack:N,getRandonDesc:W,getRandonLetter:U,getRandomNumber:u,summarize:ft,getDistinctPropertys:xt,getRandomCasa:K,filterByProperty:wt});const Pt={class:"row q-pa-md items-center"},Rt={class:"text-h6 print-hide"},Ct={class:"row q-pa-md column items-center print-only"},Dt={class:"col text-h6"},zt={class:"q-pa-md"},Mt={class:"row q-pa-sm"},Nt={class:"col-1 text-left"},St={class:"text-h6"},Tt={class:"col-8 q-pt-sm text-caption"},Ut={class:"col-3"},Vt={class:"row"},Lt={class:"col-2"},Bt={class:"col-7"},Ft={class:"report-header"},It={colspan:"2"},At={key:0,colspan:"6",class:"text-center border-left"},Et={key:1,colspan:"7",class:"text-center border-left"},Ot={key:2,colspan:"6",class:"text-center border-left"},Qt={key:3,colspan:"4",class:"text-center border-left"},Gt={key:4,colspan:"8",class:"text-center border-left"},Ht={key:5,colspan:"6",class:"text-center border-left"},qt={class:"report-subheader"},Yt={class:"si-wrap text-center"},Wt={class:"si-wrap text-center"},Kt={key:0,class:"si-wrap text-center border-left"},Jt={key:1,class:"si-wrap text-center"},Xt={key:2,class:"si-wrap text-center"},Zt={key:3,class:"si-wrap text-center"},te={key:4,class:"si-wrap text-center"},ee={key:5,class:"si-wrap text-center"},ae={key:6,class:"si-wrap text-center border-left"},se={key:7,class:"si-wrap text-center"},re={key:8,class:"si-wrap text-center"},ne={key:9,class:"si-wrap text-center"},ie={key:10,class:"si-wrap text-center"},ce={key:11,class:"si-wrap text-center"},oe={key:12,class:"si-wrap text-center"},le={key:13,class:"si-wrap text-center border-left"},_e={key:14,class:"si-wrap text-center"},de={key:15,class:"si-wrap text-center"},ue={key:16,class:"si-wrap text-center"},pe={key:17,class:"si-wrap text-center"},he={key:18,class:"si-wrap text-center"},me={key:19,class:"si-wrap text-center border-left"},ye={key:20,class:"si-wrap text-center"},ve={key:21,class:"si-wrap text-center"},be={key:22,class:"si-wrap text-center"},ke={key:23,class:"si-wrap text-center border-left"},ge={key:24,class:"si-wrap text-center"},$e={key:25,class:"si-wrap text-center"},fe={key:26,class:"si-wrap text-center"},xe={key:27,class:"si-wrap text-center"},we={key:28,class:"si-wrap text-center"},je={key:29,class:"si-wrap text-center"},Pe={key:30,class:"si-wrap text-center"},Re={key:31,class:"si-wrap text-center border-left"},Ce={key:32,class:"si-wrap text-center"},De={key:33,class:"si-wrap text-center"},ze={key:34,class:"si-wrap text-center"},Me={key:35,class:"si-wrap text-center"},Ne={key:36,class:"si-wrap text-center"},Se={class:"group-row"},Te=["colspan"],Ue={class:"text-h6"},Ve=["data-index"],Le={class:"text-left"},Be={key:0,class:"text-center border-left"},Fe={key:1,class:"text-center"},Ie={key:2,class:"text-right"},Ae={key:3,class:"text-right"},Ee={key:4,class:"text-right"},Oe={key:5,class:"text-right"},Qe={key:6,class:"text-right border-left"},Ge={key:7,class:"text-right"},He={key:8,class:"text-right"},qe={key:9,class:"text-right"},Ye={key:10,class:"text-right"},We={key:11,class:"text-right"},Ke={key:12,class:"text-right"},Je={key:13,class:"text-right border-left"},Xe={key:14,class:"text-right"},Ze={key:15,class:"text-right"},ta={key:16,class:"text-right"},ea={key:17,class:"text-right"},aa={key:18,class:"text-right"},sa={key:19,class:"text-right border-left"},ra={key:20,class:"text-right"},na={key:21,class:"text-right"},ia={key:22,class:"text-right"},ca={key:23,class:"text-right border-left"},oa={key:24,class:"text-right"},la={key:25,class:"text-right"},_a={key:26,class:"text-right"},da={key:27,class:"text-right"},ua={key:28,class:"text-right"},pa={key:29,class:"text-right"},ha={key:30,class:"text-right"},ma={key:31,class:"text-right border-left"},ya={key:0},va={key:32,class:"text-right"},ba={key:0},ka={key:33,class:"text-right"},ga={key:0},$a={key:34,class:"text-right"},fa={key:0},xa={key:35,class:"text-right"},wa={key:0},ja={key:36,class:"text-right"},Pa={key:0},Ra={class:"group-row-subtotal"},Ca=["colspan"],Da={key:0,class:"border-total text-right border-left"},za={key:1,class:"border-total text-right"},Ma={key:2,class:"border-total text-right"},Na={key:3,class:"border-total text-right"},Sa={key:4,class:"border-total text-right"},Ta={key:5,class:"border-total text-right"},Ua={key:6,class:"border-total text-right"},Va={key:7,class:"border-total text-right border-left"},La={key:8,class:"border-total text-right"},Ba={key:9,class:"border-total text-right"},Fa={key:10,class:"border-total text-right"},Ia={key:11,class:"border-total text-right"},Aa={key:12,class:"border-total text-right"},Ea={key:13,class:"border-total text-right border-left"},Oa={key:14,class:"border-total text-right"},Qa={key:15,class:"border-total text-right"},Ga={key:16,class:"border-total text-right"},Ha={key:17,class:"border-total text-right border-left"},qa={key:18,class:"border-total text-right"},Ya={key:19,class:"border-total text-right"},Wa={key:20,class:"border-total text-right"},Ka={key:21,class:"border-total text-right"},Ja={key:22,class:"border-total text-right"},Xa={key:23,class:"border-total text-right"},Za={key:24,class:"border-total text-right"},ts={key:25,class:"border-total text-right border-left"},es={key:26,class:"border-total text-right"},as={key:0},ss={key:27,class:"border-total text-right"},rs={key:0},ns={key:28,class:"border-total text-right"},is={key:0},cs={key:29,class:"border-total text-right"},os={key:0},ls={key:30,class:"border-total text-right"},_s={key:0},ds=["colspan"],us={key:0,class:"border-total text-right border-left"},ps={key:1,class:"border-total text-right"},hs={key:2,class:"border-total text-right"},ms={key:3,class:"border-total text-right"},ys={key:4,class:"border-total text-right"},vs={key:5,class:"border-total text-right"},bs={key:6,class:"border-total text-right"},ks={key:7,class:"border-total text-right border-left"},gs={key:8,class:"border-total text-right"},$s={key:9,class:"border-total text-right"},fs={key:10,class:"border-total text-right"},xs={key:11,class:"border-total text-right"},ws={key:12,class:"border-total text-right"},js={key:13,class:"border-total text-right border-left"},Ps={key:14,class:"border-total text-right"},Rs={key:15,class:"border-total text-right"},Cs={key:16,class:"border-total text-right"},Ds={key:17,class:"border-total text-right border-left"},zs={key:18,class:"border-total text-right"},Ms={key:19,class:"border-total text-right"},Ns={key:20,class:"border-total text-right"},Ss={key:21,class:"border-total text-right"},Ts={key:22,class:"border-total text-right"},Us={key:23,class:"border-total text-right"},Vs={key:24,class:"border-total text-right"},Ls={key:25,class:"border-total text-right border-left"},Bs={key:26,class:"border-total text-right"},Fs={key:0},Is={key:27,class:"border-total text-right"},As={key:0},Es={key:28,class:"border-total text-right"},Os={key:0},Qs={key:29,class:"border-total text-right"},Gs={key:0},Hs={key:30,class:"border-total text-right"},qs={key:0},q=52,Ys={__name:"MonthPage",setup(d){st(t=>({"6eb2e5bb":c(A).primary,"6b27a592":c(A).primaryLg40}));const y=bt(),{locale:i}=vt(),v=jt(),{configUI:k}=ut(),b=j(["act_datgen","act_ppa","act_primdesc","act_vm","act_int","act_sell"]),C=j(40),w=j(9),{leftDrawer:V,currentPalette:L,defaultPalette:X,curLang:B,currentInput:$}=rt(y),h=t=>v.summarize(D.value,t,i),m=(t,o,l)=>{var S=v.filterByProperty(D.value,t,o);return v.summarize(S,l)},n=t=>{var o=b.value.indexOf(t)>=0;return o},F=j(V.value),D=j(v.getData(q,i.value)),Z=async()=>{z.value=!0,y.closeLeftDrawer(),await tt(500),print(),z.value=!1},tt=t=>new Promise(o=>setTimeout(o,t)),z=j(!1),I=()=>{F.value?y.openLeftDrawer():y.closeLeftDrawer(),z.value=!1},x=t=>{let o=null;return t!=null&&t.indexOf("-")>=0?o=`(${t.replace("-","")})`:o=t,o};nt(()=>{i.value=B.value.value,window.addEventListener("afterprint",I)}),it(()=>{window.removeEventListener("afterprint",I)});const A=L.value.isSet?L:X;return M(b,t=>{let o=3;o+=t.indexOf("act_datgen")>=0?6:0,o+=t.indexOf("act_ppa")>=0?7:0,o+=t.indexOf("act_primdesc")>=0?6:0,o+=t.indexOf("act_vm")>=0?4:0,o+=t.indexOf("act_int")>=0?8:0,o+=t.indexOf("act_sell")>=0?6:0,C.value=o;let l=3;l+=t.indexOf("act_datgen")>=0?6:0,w.value=l}),M(i,t=>{D.value=v.getData(q,t)}),M(V,t=>{z.value||(F.value=t)}),M(B,t=>{i.value=t.value}),(t,o)=>(e(),ct(yt,null,{default:P(()=>[p("div",Pt,[p("span",Rt,r(t.$t("reports.comprehensive.monthly.title")),1),g(at),g(E,{icon:"color_lens",color:"positive",class:"print-hide",flat:"",round:"",dense:"",onClick:o[0]||(o[0]=l=>c(k)(t.forceRender))})]),p("div",Ct,[p("span",Dt,r(t.$t("reports.comprehensive.monthly.title")),1)]),p("div",zt,[g(_t,{class:"print-hide report-controls",dense:c($).dense},{default:P(()=>[g(ot,null,{default:P(()=>[p("div",Mt,[p("div",Nt,[p("span",St,r(t.$t("labels.activities.label")),1)]),p("div",Tt,[g(R,{dense:c($).dense,modelValue:b.value,"onUpdate:modelValue":o[1]||(o[1]=l=>b.value=l),val:"act_datgen",label:t.$t("labels.activities.general_data.label")},null,8,["dense","modelValue","label"]),o[7]||(o[7]=f("\xA0 ")),g(R,{dense:c($).dense,modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=l=>b.value=l),val:"act_ppa",label:t.$t("labels.activities.main.label")},null,8,["dense","modelValue","label"]),o[8]||(o[8]=f("\xA0 ")),g(R,{dense:c($).dense,modelValue:b.value,"onUpdate:modelValue":o[3]||(o[3]=l=>b.value=l),val:"act_primdesc",label:t.$t("labels.activities.bonus_or_discount.label")},null,8,["dense","modelValue","label"]),o[9]||(o[9]=f("\xA0 ")),g(R,{dense:c($).dense,modelValue:b.value,"onUpdate:modelValue":o[4]||(o[4]=l=>b.value=l),val:"act_vm",label:t.$t("labels.activities.market_value.label")},null,8,["dense","modelValue","label"]),o[10]||(o[10]=f("\xA0 ")),g(R,{dense:c($).dense,modelValue:b.value,"onUpdate:modelValue":o[5]||(o[5]=l=>b.value=l),val:"act_int",label:t.$t("labels.activities.interest.label")},null,8,["dense","modelValue","label"]),o[11]||(o[11]=f("\xA0 ")),g(R,{dense:c($).dense,modelValue:b.value,"onUpdate:modelValue":o[6]||(o[6]=l=>b.value=l),val:"act_sell",label:t.$t("labels.activities.sales.label")},null,8,["dense","modelValue","label"])]),p("div",Ut,[p("div",Vt,[o[15]||(o[15]=p("div",{class:"col-3"},"\xA0",-1)),p("div",Lt,[g(E,{round:"",color:"positive",icon:"print",onClick:Z},{default:P(()=>[g(pt,{anchor:"bottom middle",self:"top middle",offset:[10,10]},{default:P(()=>[o[13]||(o[13]=p("strong",null,"Tip:",-1)),o[14]||(o[14]=f()),p("em",null,[f(r(t.$t("reports.comprehensive.monthly.print_tip_0")),1),o[12]||(o[12]=p("br",null,null,-1)),f(r(t.$t("reports.comprehensive.monthly.print_tip_1")),1)])]),_:1})]),_:1})]),p("div",Bt,[g(ht,lt(c($),{class:"text-white"}),null,16)])])])])]),_:1})]),_:1},8,["dense"]),g(dt),g(mt,{dense:c($).dense,bordered:"",separator:"cell"},{default:P(()=>[p("thead",null,[p("tr",Ft,[o[16]||(o[16]=p("th",{colspan:"1"},null,-1)),p("th",It,r(t.$t("labels.invesment")),1),n("act_datgen")?(e(),a("th",At,r(t.$t("labels.activities.general_data.label")),1)):s("",!0),n("act_ppa")?(e(),a("th",Et,r(t.$t("labels.activities.main.label")),1)):s("",!0),n("act_primdesc")?(e(),a("th",Ot,r(t.$t("labels.activities.bonus_or_discount.label")),1)):s("",!0),n("act_vm")?(e(),a("th",Qt,r(t.$t("labels.activities.market_value.label")),1)):s("",!0),n("act_int")?(e(),a("th",Gt,r(t.$t("labels.activities.interest.label")),1)):s("",!0),n("act_sell")?(e(),a("th",Ht,r(t.$t("labels.activities.sales.label")),1)):s("",!0)]),p("tr",qt,[o[17]||(o[17]=p("th",null,null,-1)),p("th",Yt,r(t.$t("labels.cusip")),1),p("th",Wt,r(t.$t("labels.description")),1),n("act_datgen")?(e(),a("th",Kt,r(t.$t("labels.activities.general_data.purchase")),1)):s("",!0),n("act_datgen")?(e(),a("th",Jt,r(t.$t("labels.activities.general_data.expire")),1)):s("",!0),n("act_datgen")?(e(),a("th",Xt,r(t.$t("labels.activities.general_data.nominal_value")),1)):s("",!0),n("act_datgen")?(e(),a("th",Zt,r(t.$t("labels.activities.general_data.cost")),1)):s("",!0),n("act_datgen")?(e(),a("th",te,r(t.$t("labels.activities.general_data.premium_discount")),1)):s("",!0),n("act_datgen")?(e(),a("th",ee,r(t.$t("labels.activities.general_data.interest_rate")),1)):s("",!0),n("act_ppa")?(e(),a("th",ae,r(t.$t("labels.activities.main.opening_balance")),1)):s("",!0),n("act_ppa")?(e(),a("th",se,r(t.$t("labels.activities.main.additions")),1)):s("",!0),n("act_ppa")?(e(),a("th",re,r(t.$t("labels.activities.main.capitalized_interest_dividend_capital_gain")),1)):s("",!0),n("act_ppa")?(e(),a("th",ne,r(t.$t("labels.activities.main.sales")),1)):s("",!0),n("act_ppa")?(e(),a("th",ie,r(t.$t("labels.activities.main.principal_recovery")),1)):s("",!0),n("act_ppa")?(e(),a("th",ce,r(t.$t("labels.activities.main.transfer")),1)):s("",!0),n("act_ppa")?(e(),a("th",oe,r(t.$t("labels.activities.main.closing_balance")),1)):s("",!0),n("act_primdesc")?(e(),a("th",le,r(t.$t("labels.activities.bonus_or_discount.initial_balance")),1)):s("",!0),n("act_primdesc")?(e(),a("th",_e,r(t.$t("labels.activities.bonus_or_discount.additions")),1)):s("",!0),n("act_primdesc")?(e(),a("th",de,r(t.$t("labels.activities.bonus_or_discount.amortization")),1)):s("",!0),n("act_primdesc")?(e(),a("th",ue,r(t.$t("labels.activities.bonus_or_discount.cancellation_in_sales")),1)):s("",!0),n("act_primdesc")?(e(),a("th",pe,r(t.$t("labels.activities.bonus_or_discount.transfer")),1)):s("",!0),n("act_primdesc")?(e(),a("th",he,r(t.$t("labels.activities.bonus_or_discount.final_balance")),1)):s("",!0),n("act_vm")?(e(),a("th",me,r(t.$t("labels.activities.market_value.net_book_value")),1)):s("",!0),n("act_vm")?(e(),a("th",ye,r(t.$t("labels.activities.market_value.market_value")),1)):s("",!0),n("act_vm")?(e(),a("th",ve,r(t.$t("labels.activities.market_value.realized_profit_or_loss")),1)):s("",!0),n("act_vm")?(e(),a("th",be,r(t.$t("labels.activities.market_value.unrealized_profit_or_loss")),1)):s("",!0),n("act_int")?(e(),a("th",ke,r(t.$t("labels.activities.interest.for_initial_charge")),1)):s("",!0),n("act_int")?(e(),a("th",ge,r(t.$t("labels.activities.interest.interest_in_purchase")),1)):s("",!0),n("act_int")?(e(),a("th",$e,r(t.$t("labels.activities.interest.interest_income")),1)):s("",!0),n("act_int")?(e(),a("th",fe,r(t.$t("labels.activities.interest.dividend_income")),1)):s("",!0),n("act_int")?(e(),a("th",xe,r(t.$t("labels.activities.interest.income_capital_gain")),1)):s("",!0),n("act_int")?(e(),a("th",we,r(t.$t("labels.activities.interest.received_or_capitalized")),1)):s("",!0),n("act_int")?(e(),a("th",je,r(t.$t("labels.activities.interest.transfer")),1)):s("",!0),n("act_int")?(e(),a("th",Pe,r(t.$t("labels.activities.interest.for_final_charge")),1)):s("",!0),n("act_sell")?(e(),a("th",Re,r(t.$t("labels.activities.sales.sale_date")),1)):s("",!0),n("act_sell")?(e(),a("th",Ce,r(t.$t("labels.activities.sales.principal")),1)):s("",!0),n("act_sell")?(e(),a("th",De,r(t.$t("labels.activities.sales.bonus_or_discount")),1)):s("",!0),n("act_sell")?(e(),a("th",ze,r(t.$t("labels.activities.sales.amortized_cost")),1)):s("",!0),n("act_sell")?(e(),a("th",Me,r(t.$t("labels.activities.sales.sale_price")),1)):s("",!0),n("act_sell")?(e(),a("th",Ne,r(t.$t("labels.activities.sales.profit_or_loss")),1)):s("",!0)])]),p("tbody",null,[(e(!0),a(T,null,O(c(v).getDistinctPropertys(D.value,"casa_corretaje"),(l,S)=>(e(),a(T,{key:S},[p("tr",Se,[p("td",{colspan:C.value,class:"si-wrap text-left"},[p("span",Ue,r(l),1)],8,Te)]),(e(!0),a(T,null,O(c(v).filterByProperty(D.value,"casa_corretaje",l),(_,et)=>(e(),a("tr",{key:_.index},[o[18]||(o[18]=p("td",null,null,-1)),p("td",{class:"text-left","data-index":et},r(_.cusip),9,Ve),p("td",Le,r(_.description),1),n("act_datgen")?(e(),a("td",Be,r(t.$d(_.dg_compra,"short",c(i))),1)):s("",!0),n("act_datgen")?(e(),a("td",Fe,r(t.$d(_.dg_vencimiento,"short",c(i))),1)):s("",!0),n("act_datgen")?(e(),a("td",Ie,r(t.$n(_.dg_valor_nominal,"currency",c(i))),1)):s("",!0),n("act_datgen")?(e(),a("td",Ae,r(t.$n(_.dg_costo,"currency",c(i))),1)):s("",!0),n("act_datgen")?(e(),a("td",Ee,r(x(t.$n(_.dg_prima_descuento,"currency",c(i)))),1)):s("",!0),n("act_datgen")?(e(),a("td",Oe,r(t.$n(_.dg_tasa_interes,"percent",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Qe,r(t.$n(_.ap_balance_inicial,"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Ge,r(t.$n(_.ap_adciones,"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",He,r(t.$n(_.ap_int_div_gan_cap,"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",qe,r(t.$n(_.ap_ventas,"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Ye,r(t.$n(_.ap_recobro,"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",We,r(t.$n(_.ap_transferencia,"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Ke,r(t.$n(_.ap_balance_final,"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Je,r(t.$n(_.apd_balance_inicial,"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Xe,r(t.$n(_.apd_adciones,"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Ze,r(t.$n(_.apd_amortizacion,"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",ta,r(t.$n(_.apd_cancelacion_ventas,"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",ea,r(t.$n(_.apd_transferencia,"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",aa,r(t.$n(_.apd_balance_final,"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",sa,r(t.$n(_.avm_valor_neto_libros,"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",ra,r(t.$n(_.avm_valor_mercado,"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",na,r(x(t.$n(_.avm_ganancia_perdida_realizada,"currency",c(i)))),1)):s("",!0),n("act_vm")?(e(),a("td",ia,r(x(t.$n(_.avm_ganancia_perdida_no_realizada,"currency",c(i)))),1)):s("",!0),n("act_int")?(e(),a("td",ca,r(t.$n(_.ai_por_cobrar_inicial,"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",oa,r(t.$n(_.ai_interes_en_compra,"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",la,r(t.$n(_.ai_ingreso_intereses,"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",_a,r(t.$n(_.ai_ingreso_dividendos,"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",da,r(t.$n(_.ai_ingreso_ganancia_capital,"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",ua,r(t.$n(_.ai_recibidos_capitalizados,"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",pa,r(t.$n(_.ai_transferencia,"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",ha,r(t.$n(_.ai_por_cobrar_final,"currency",c(i))),1)):s("",!0),n("act_sell")?(e(),a("td",ma,[_.av_fecha_de_venta!=null?(e(),a("span",ya,r(t.$d(_.av_fecha_de_venta,"short",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",va,[_.av_principal!=null?(e(),a("span",ba,r(t.$n(_.av_principal,"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",ka,[_.av_prima_descuento!=null?(e(),a("span",ga,r(x(t.$n(_.av_prima_descuento,"currency",c(i)))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",$a,[_.av_costo_amortizado!=null?(e(),a("span",fa,r(t.$n(_.av_costo_amortizado,"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",xa,[_.av_precio_venta!=null?(e(),a("span",wa,r(t.$n(_.av_precio_venta,"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",ja,[_.av_ganancia_perdida!=null?(e(),a("span",Pa,r(x(t.$n(_.av_ganancia_perdida,"currency",c(i)))),1)):s("",!0)])):s("",!0)]))),128)),p("tr",Ra,[p("td",{colspan:w.value,class:"text-center border-total"},r(t.$t("reports.subtotals")),9,Ca),n("act_ppa")?(e(),a("td",Da,r(t.$n(m("casa_corretaje",l,"ap_balance_inicial"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",za,r(t.$n(m("casa_corretaje",l,"ap_adciones"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Ma,r(t.$n(m("casa_corretaje",l,"ap_int_div_gan_cap"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Na,r(t.$n(m("casa_corretaje",l,"ap_ventas"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Sa,r(t.$n(m("casa_corretaje",l,"ap_recobro"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Ta,r(t.$n(m("casa_corretaje",l,"ap_transferencia"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("td",Ua,r(t.$n(m("casa_corretaje",l,"ap_balance_final"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Va,r(t.$n(m("casa_corretaje",l,"apd_balance_inicial"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",La,r(t.$n(m("casa_corretaje",l,"apd_adciones"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Ba,r(t.$n(m("casa_corretaje",l,"apd_amortizacion"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Fa,r(t.$n(m("casa_corretaje",l,"apd_cancelacion_ventas"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Ia,r(t.$n(m("casa_corretaje",l,"apd_transferencia"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",Aa,r(t.$n(m("casa_corretaje",l,"apd_balance_final"),"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",Ea,r(t.$n(m("casa_corretaje",l,"avm_valor_neto_libros"),"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",Oa,r(t.$n(m("casa_corretaje",l,"avm_valor_mercado"),"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",Qa,r(x(t.$n(m("casa_corretaje",l,"avm_ganancia_perdida_realizada"),"currency",c(i)))),1)):s("",!0),n("act_vm")?(e(),a("td",Ga,r(x(t.$n(m("casa_corretaje",l,"avm_ganancia_perdida_no_realizada"),"currency",c(i)))),1)):s("",!0),n("act_int")?(e(),a("td",Ha,r(t.$n(m("casa_corretaje",l,"ai_por_cobrar_inicial"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",qa,r(t.$n(m("casa_corretaje",l,"ai_interes_en_compra"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ya,r(t.$n(m("casa_corretaje",l,"ai_ingreso_intereses"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Wa,r(t.$n(m("casa_corretaje",l,"ai_ingreso_dividendos"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ka,r(t.$n(m("casa_corretaje",l,"ai_ingreso_ganancia_capital"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ja,r(t.$n(m("casa_corretaje",l,"ai_recibidos_capitalizados"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Xa,r(t.$n(m("casa_corretaje",l,"ai_transferencia"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Za,r(t.$n(m("casa_corretaje",l,"ai_por_cobrar_final"),"currency",c(i))),1)):s("",!0),n("act_sell")?(e(),a("td",ts)):s("",!0),n("act_sell")?(e(),a("td",es,[m("casa_corretaje",l,"av_principal")!=null?(e(),a("span",as,r(t.$n(m("casa_corretaje",l,"av_principal"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",ss,[m("casa_corretaje",l,"av_prima_descuento")!=null?(e(),a("span",rs,r(t.$n(m("casa_corretaje",l,"av_prima_descuento"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",ns,[m("casa_corretaje",l,"av_precio_venta")!=null?(e(),a("span",is,r(t.$n(m("casa_corretaje",l,"av_precio_venta"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",cs,[m("casa_corretaje",l,"apd_transferencia")!=null?(e(),a("span",os,r(t.$n(m("casa_corretaje",l,"apd_transferencia"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",ls,[m("casa_corretaje",l,"av_ganancia_perdida")!=null?(e(),a("span",_s,r(t.$n(m("casa_corretaje",l,"av_ganancia_perdida"),"currency",c(i))),1)):s("",!0)])):s("",!0)])],64))),128)),p("tr",null,[p("th",{colspan:w.value,class:"text-center border-total"},r(t.$t("reports.totals")),9,ds),n("act_ppa")?(e(),a("th",us,r(t.$n(h("ap_balance_inicial"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("th",ps,r(t.$n(h("ap_adciones"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("th",hs,r(t.$n(h("ap_int_div_gan_cap"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("th",ms,r(t.$n(h("ap_ventas"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("th",ys,r(t.$n(h("ap_recobro"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("th",vs,r(t.$n(h("ap_transferencia"),"currency",c(i))),1)):s("",!0),n("act_ppa")?(e(),a("th",bs,r(t.$n(h("ap_balance_final"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",ks,r(t.$n(h("apd_balance_inicial"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",gs,r(t.$n(h("apd_adciones"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",$s,r(t.$n(h("apd_amortizacion"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",fs,r(t.$n(h("apd_cancelacion_ventas"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",xs,r(t.$n(h("apd_transferencia"),"currency",c(i))),1)):s("",!0),n("act_primdesc")?(e(),a("td",ws,r(t.$n(h("apd_balance_final"),"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",js,r(t.$n(h("avm_valor_neto_libros"),"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",Ps,r(t.$n(h("avm_valor_mercado"),"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",Rs,r(t.$n(h("avm_ganancia_perdida_realizada"),"currency",c(i))),1)):s("",!0),n("act_vm")?(e(),a("td",Cs,r(t.$n(h("avm_ganancia_perdida_no_realizada"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ds,r(t.$n(h("ai_por_cobrar_inicial"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",zs,r(t.$n(h("ai_interes_en_compra"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ms,r(t.$n(h("ai_ingreso_intereses"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ns,r(t.$n(h("ai_ingreso_dividendos"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ss,r(t.$n(h("ai_ingreso_ganancia_capital"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Ts,r(t.$n(h("ai_recibidos_capitalizados"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Us,r(t.$n(h("ai_transferencia"),"currency",c(i))),1)):s("",!0),n("act_int")?(e(),a("td",Vs,r(t.$n(h("ai_por_cobrar_final"),"currency",c(i))),1)):s("",!0),n("act_sell")?(e(),a("td",Ls)):s("",!0),n("act_sell")?(e(),a("td",Bs,[h("av_principal")!=null?(e(),a("span",Fs,r(t.$n(h("av_principal"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",Is,[h("av_prima_descuento")!=null?(e(),a("span",As,r(t.$n(h("av_prima_descuento"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",Es,[h("av_precio_venta")!=null?(e(),a("span",Os,r(t.$n(h("av_precio_venta"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",Qs,[h("apd_transferencia")!=null?(e(),a("span",Gs,r(t.$n(h("apd_transferencia"),"currency",c(i))),1)):s("",!0)])):s("",!0),n("act_sell")?(e(),a("td",Hs,[h("av_ganancia_perdida")!=null?(e(),a("span",qs,r(t.$n(h("av_ganancia_perdida"),"currency",c(i))),1)):s("",!0)])):s("",!0)])])]),_:1},8,["dense"])])]),_:1}))}};var rr=kt(Ys,[["__scopeId","data-v-2cc14926"]]);export{rr as default};
