import{d as _,s as p,u as v,o,c as n,t as k,g as l,_ as i,h as M,a as f,n as h,p as G,i as L,j as T,k as B,F as N,l as P,b as w,m as D,q as F,f as m}from"./index-40ec48ec.js";const V={class:"moves"},j=_({__name:"Moves",setup(e){const{moves:s}=p(v());return(t,r)=>(o(),n("div",V,"Moves: "+k(l(s)),1))}});const q=i(j,[["__scopeId","data-v-8dcfc919"]]),z={class:"timer"},E=_({__name:"Timer",setup(e){const s=M();return(t,r)=>(o(),n("div",z,"Timer: "+k(l(s).formattedTimer),1))}}),R="/Pokememory/assets/pokeball-67576fdc.svg",U=e=>(G("data-v-816ca767"),e=e(),L(),e),A=["src","alt"],H=U(()=>f("img",{class:"pokeballImage",src:R,alt:"pokeball"},null,-1)),J=_({__name:"Card",props:{card:null},emits:["cardClicked"],setup(e){return(s,t)=>(o(),n("div",{onClick:t[0]||(t[0]=r=>s.$emit("cardClicked",e.card)),class:h(["card",{flipped:e.card.flipped}])},[f("img",{class:"cardImage",src:e.card.img,alt:e.card.name},null,8,A),H],2))}});const K=i(J,[["__scopeId","data-v-816ca767"]]),O=_({__name:"CardList",setup(e){const s=T(),t=v(),{difficulty:r,moveInProgress:y}=p(t),{setMoveInProgress:g,incrementMoves:I}=t,{cards:S,previousCard:c}=p(s),{flipCard:d,disableCard:C,setPreviousCard:u}=s,b=B(()=>r.value.toLowerCase()),x=a=>{if(!(a.disabled||y.value))if(c.value){if(c.value.id===a.id)return;d(a),I(),c.value.name===a.name?(C(c.value),C(a),u(null)):(g(!0),setTimeout(()=>{c.value&&d(c.value),d(a),g(!1),u(null)},1400))}else d(a),u(a)};return(a,Z)=>(o(),n("div",{class:h(["cardList",l(b)])},[(o(!0),n(N,null,P(l(S),$=>(o(),w(K,{card:$,onCardClicked:x},null,8,["card"]))),256))],2))}});const Q=i(O,[["__scopeId","data-v-e54bb564"]]),W={className:"game"},X={className:"gameInfo"},Y=_({__name:"Game",setup(e){const s=v();return D(()=>{s.startGame()}),F(()=>{s.clearGame()}),(t,r)=>(o(),n("div",W,[m(Q),f("div",X,[m(q),m(E)])]))}});const se=i(Y,[["__scopeId","data-v-786fef63"]]);export{se as default};