var e=`"use strict";var Am=Object.defineProperty;var y=(e,t)=>()=>(e&&(t=e(e=0)),t);var mt=(e,t)=>{for(var r in t)Am(e,r,{get:t[r],enumerable:!0})};var P0=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var R=(e,t,r)=>(P0(e,t,"read from private field"),r?r.call(e):t.get(e)),ee=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},V=(e,t,r,n)=>(P0(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),N0=(e,t,r,n)=>({set _(l){V(e,t,l,r)},get _(){return R(e,t,n)}}),To=(e,t,r)=>(P0(e,t,"access private method"),r);var Gm,Cl,Me,Jt=y(()=>{"use strict";Gm=!1,Cl=class{is(t){return this instanceof t}as(t){return this instanceof t?this:null}},Me=class extends Cl{constructor(){super(),Gm&&Object.defineProperty(this,"_debugStr",{get:()=>this.toString()})}get log(){return console.log.bind(console,this,this.toString())}}});function C2(e,t=!0){if(!t)return e;switch(e){case 1:return-1;case-1:return 1}}function P2(e,t){return t===-1?Array.from(e).reverse():e}function N2(e){return Array.from(e).reverse()}var Tt=y(()=>{"use strict"});var Pl,T0=y(()=>{"use strict";Pl="2^31 - 1"});var Vr,Lt,I0=y(()=>{"use strict";Yt();Lt=class{constructor(){ee(this,Vr,[])}push(t){R(this,Vr).push(t)}experimentalPushAlg(t){for(let r of t.childAlgNodes())this.push(r)}experimentalNumAlgNodes(){return R(this,Vr).length}toAlg(){return new v(R(this,Vr))}reset(){V(this,Vr,[])}};Vr=new WeakMap});var M2,W0=y(()=>{"use strict";M2={caratNISSNotationEnabled:!1}});var Hr,Zr,Wo,Ge,Nl=y(()=>{"use strict";Yt();Jt();Tt();Wo=class extends Me{constructor(r,n){super();ee(this,Hr,void 0);ee(this,Zr,void 0);V(this,Hr,Br(r)),V(this,Zr,Br(n))}get A(){return R(this,Hr)}get B(){return R(this,Zr)}isIdentical(r){let n=r.as(Wo);return!!(n?.A.isIdentical(this.A)&&n?.B.isIdentical(this.B))}invert(){return new Wo(R(this,Zr),R(this,Hr))}*experimentalExpand(r=1,n){n??(n=1/0),n===0?yield r===1?this:this.invert():r===1?(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(-1,n-1),yield*this.B.experimentalExpand(-1,n-1)):(yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(-1,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(){return\`[\${R(this,Hr).toString()}, \${R(this,Zr).toString()}]\`}},Ge=Wo;Hr=new WeakMap,Zr=new WeakMap});var zn,Cn,Ko,Oe,Ml=y(()=>{"use strict";Yt();Jt();Tt();Ko=class extends Me{constructor(r,n){super();ee(this,zn,void 0);ee(this,Cn,void 0);V(this,zn,Br(r)),V(this,Cn,Br(n))}get A(){return R(this,zn)}get B(){return R(this,Cn)}isIdentical(r){let n=r.as(Ko);return!!(n?.A.isIdentical(this.A)&&n?.B.isIdentical(this.B))}invert(){return new Ko(R(this,zn),R(this,Cn).invert())}*experimentalExpand(r,n){n??(n=1/0),n===0?yield r===1?this:this.invert():(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(r,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(){return\`[\${this.A}: \${this.B}]\`}},Oe=Ko;zn=new WeakMap,Cn=new WeakMap});var dr,K0,Ft,Gl=y(()=>{"use strict";Jt();Tt();K0=class extends Me{constructor(r){super();ee(this,dr,void 0);if(r.includes(\`
\`)||r.includes("\\r"))throw new Error("LineComment cannot contain newline");V(this,dr,r)}get text(){return R(this,dr)}isIdentical(r){let n=r;return r.is(K0)&&R(this,dr)===R(n,dr)}invert(){return this}*experimentalExpand(r=1,n=1/0){yield this}toString(){return\`//\${R(this,dr)}\`}},Ft=K0;dr=new WeakMap});var Xe,Ol=y(()=>{"use strict";Jt();Tt();Xe=class extends Me{toString(){return\`
\`}isIdentical(t){return t.is(Xe)}invert(){return this}*experimentalExpand(t=1,r=1/0){yield this}}});var Ae,Tl=y(()=>{"use strict";Jt();Tt();Ae=class extends Me{toString(){return"."}isIdentical(r){return r.is(Ae)}invert(){return this}*experimentalExpand(r=1,n=1/0){yield this}}});function Qo(e,t){return e?parseInt(e):t}function Q0(e){return new Il().parseAlg(e)}function O2(e){return new Il().parseMove(e)}function T2(e){return new Il().parseQuantumMove(e)}function $e(e,t,r){let n=e;return n.startCharIndex=t,n.endCharIndex=r,n}function I2(e,t){return"startCharIndex"in e&&(t.startCharIndex=e.startCharIndex),"endCharIndex"in e&&(t.endCharIndex=e.endCharIndex),t}var G2,Om,Tm,Im,Wm,Km,it,I,Pn,Il,j0=y(()=>{"use strict";Yt();I0();W0();Nl();Ml();jo();Gl();Rr();Ol();Tl();G2=/^(\\d+)?('?)/,Om=/^[_\\dA-Za-z]/,Tm=/^((([1-9]\\d*)-)?([1-9]\\d*))?([_A-Za-z]+)?/,Im=/^[^\\n]*/,Wm=/^(-?\\d+), ?/,Km=/^(-?\\d+)\\)/;Il=class{constructor(){ee(this,it,"");ee(this,I,0);ee(this,Pn,[])}parseAlg(t){V(this,it,t),V(this,I,0);let r=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();let n=Array.from(r.childAlgNodes());if(R(this,Pn).length>0)for(let s of R(this,Pn).reverse())n.push(s);let l=new v(n),{startCharIndex:o,endCharIndex:i}=r;return $e(l,o,i),l}parseMove(t){V(this,it,t),V(this,I,0);let r=this.parseMoveImpl();return this.mustBeAtEndOfInput(),r}parseQuantumMove(t){V(this,it,t),V(this,I,0);let r=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),r}mustBeAtEndOfInput(){if(R(this,I)!==R(this,it).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(t){let r=R(this,I),n=R(this,I),l=new Lt,o=!1,i=s=>{if(o)throw new Error(\`Unexpected character at index \${s}. Are you missing a space?\`)};e:for(;R(this,I)<R(this,it).length;){let s=R(this,I);if(t.includes(R(this,it)[R(this,I)]))return $e(l.toAlg(),r,n);if(this.tryConsumeNext(" ")){o=!1,l.experimentalNumAlgNodes()===0&&(r=R(this,I));continue e}else if(Om.test(R(this,it)[R(this,I)])){i(s);let a=this.parseMoveImpl();l.push(a),o=!0,n=R(this,I);continue e}else if(this.tryConsumeNext("(")){i(s);let a=this.tryRegex(Wm);if(a){let f=a[1],u=R(this,I),g=this.parseRegex(Km),p=$e(new B(new z("U_SQ_"),parseInt(f)),s+1,s+1+f.length),c=$e(new B(new z("D_SQ_"),parseInt(g[1])),u,R(this,I)-1),L=$e(new v([p,c]),s+1,R(this,I)-1);l.push($e(new Te(L),s,R(this,I))),o=!0,n=R(this,I);continue e}else{let f=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");let u=this.parseAmount();l.push($e(new Te(f,u),s,R(this,I))),o=!0,n=R(this,I);continue e}}else if(this.tryConsumeNext("^")){if(!M2.caratNISSNotationEnabled)throw new Error("Alg contained a carat but carat NISS notation is not enabled.");this.mustConsumeNext("(");let a=this.parseAlgWithStopping([")"]);this.popNext();let f=new Te(a,-1),u=new Ae;f.experimentalNISSPlaceholder=u,u.experimentalNISSGrouping=f,R(this,Pn).push(f),l.push(u)}else if(this.tryConsumeNext("[")){i(s);let a=this.parseAlgWithStopping([",",":"]),f=this.popNext(),u=this.parseAlgWithStopping(["]"]);switch(this.mustConsumeNext("]"),f){case":":l.push($e(new Oe(a,u),s,R(this,I))),o=!0,n=R(this,I);continue e;case",":l.push($e(new Ge(a,u),s,R(this,I))),o=!0,n=R(this,I);continue e;default:throw new Error("unexpected parsing error")}}else if(this.tryConsumeNext(\`
\`)){l.push($e(new Xe,s,R(this,I))),o=!1,n=R(this,I);continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){i(s);let[a]=this.parseRegex(Im);l.push($e(new Ft(a),s,R(this,I))),o=!1,n=R(this,I);continue e}else{l.push($e(new B("_SLASH_"),s,R(this,I))),o=!0,n=R(this,I);continue e}else if(this.tryConsumeNext(".")){i(s),l.push($e(new Ae,s,R(this,I))),o=!0,n=R(this,I);continue e}else throw new Error(\`Unexpected character: \${this.popNext()}\`)}if(R(this,I)!==R(this,it).length)throw new Error("did not finish parsing?");if(t.length>0)throw new Error("expected stopping");return $e(l.toAlg(),r,n)}parseQuantumMoveImpl(){let[,,,t,r,n]=this.parseRegex(Tm);return new z(n,Qo(r,void 0),Qo(t,void 0))}parseMoveImpl(){let t=R(this,I);if(this.tryConsumeNext("/"))return $e(new B("_SLASH_"),t,R(this,I));let r=this.parseQuantumMoveImpl(),[n,l]=this.parseAmountAndTrackEmptyAbsAmount(),o=this.parseMoveSuffix();if(o){if(n<0)throw new Error("uh-oh");if((o==="++"||o==="--")&&n!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((o==="++"||o==="--")&&!l)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((o==="+"||o==="-")&&l)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");o.startsWith("+")&&(r=r.modified({family:\`\${r.family}_\${o==="+"?"PLUS":"PLUSPLUS"}_\`})),o.startsWith("-")&&(r=r.modified({family:\`\${r.family}_\${o==="-"?"PLUS":"PLUSPLUS"}_\`}),n*=-1)}return $e(new B(r,n),t,R(this,I))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){let t=R(this,I),[,r,n]=this.parseRegex(G2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount can only start with 0 if it's exactly the digit 0.\`);return[Qo(r,1)*(n==="'"?-1:1),!r]}parseAmount(){let t=R(this,I),[,r,n]=this.parseRegex(G2);if(r?.startsWith("0")&&r!=="0")throw new Error(\`Error at char index \${t}: An amount number can only start with 0 if it's exactly the digit 0.\`);return Qo(r,1)*(n==="'"?-1:1)}parseRegex(t){let r=t.exec(this.remaining());if(r===null)throw new Error("internal parsing error");return V(this,I,R(this,I)+r[0].length),r}tryRegex(t){let r=t.exec(this.remaining());return r===null?null:(V(this,I,R(this,I)+r[0].length),r)}remaining(){return R(this,it).slice(R(this,I))}popNext(){let t=R(this,it)[R(this,I)];return N0(this,I)._++,t}tryConsumeNext(t){return R(this,it)[R(this,I)]===t?(N0(this,I)._++,!0):!1}mustConsumeNext(t){let r=this.popNext();if(r!==t)throw new Error(\`expected \\\`\${t}\\\` while parsing, encountered \${r}\`);return r}};it=new WeakMap,I=new WeakMap,Pn=new WeakMap});function qo(e){W2.has(e)||(console.warn(e),W2.add(e))}var W2,q0=y(()=>{"use strict";W2=new Set});var Yr,V0=y(()=>{"use strict";Tt();T0();Yr=class{constructor(t,r=1){if(this.quantum=t,this.amount=r,!Number.isInteger(this.amount)||this.amount<-2147483648||this.amount>2147483647)throw new Error(\`AlgNode amount absolute value must be a non-negative integer below \${Pl}.\`)}suffix(){let t="",r=Math.abs(this.amount);return r!==1&&(t+=r),this.amount<0&&(t+="'"),t}isIdentical(t){return this.quantum.isIdentical(t.quantum)&&this.amount===t.amount}*experimentalExpand(t,r){let n=Math.abs(this.amount),l=C2(t,this.amount<0);for(let o=0;o<n;o++)yield*this.quantum.experimentalExpand(l,r)}}});var Xt,qe,Ve,Ho,z,Ie,Nn,B,Rr=y(()=>{"use strict";Jt();Tt();T0();j0();q0();V0();Ho=class extends Cl{constructor(r,n,l){super();ee(this,Xt,void 0);ee(this,qe,void 0);ee(this,Ve,void 0);if(V(this,Xt,r),V(this,qe,n??null),V(this,Ve,l??null),Object.freeze(this),R(this,qe)!==null&&(!Number.isInteger(R(this,qe))||R(this,qe)<1||R(this,qe)>2147483647))throw new Error(\`QuantumMove inner layer must be a positive integer below \${Pl}.\`);if(R(this,Ve)!==null&&(!Number.isInteger(R(this,Ve))||R(this,Ve)<1||R(this,Ve)>2147483647))throw new Error(\`QuantumMove outer layer must be a positive integer below \${Pl}.\`);if(R(this,Ve)!==null&&R(this,qe)!==null&&R(this,qe)<=R(this,Ve))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(R(this,Ve)!==null&&R(this,qe)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(r){return T2(r)}modified(r){return new Ho(r.family??R(this,Xt),r.innerLayer??R(this,qe),r.outerLayer??R(this,Ve))}isIdentical(r){let n=r;return r.is(Ho)&&R(this,Xt)===R(n,Xt)&&R(this,qe)===R(n,qe)&&R(this,Ve)===R(n,Ve)}get family(){return R(this,Xt)}get outerLayer(){return R(this,Ve)}get innerLayer(){return R(this,qe)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a \`QuantumMove\` directly.")}toString(){let r=R(this,Xt);return R(this,qe)!==null&&(r=String(R(this,qe))+r,R(this,Ve)!==null&&(r=String(R(this,Ve))+"-"+r)),r}},z=Ho;Xt=new WeakMap,qe=new WeakMap,Ve=new WeakMap;Nn=class extends Me{constructor(...r){super();ee(this,Ie,void 0);if(typeof r[0]=="string")if(r[1]??null){V(this,Ie,new Yr(z.fromString(r[0]),r[1]));return}else return Nn.fromString(r[0]);V(this,Ie,new Yr(r[0],r[1]))}isIdentical(r){let n=r.as(Nn);return!!n&&R(this,Ie).isIdentical(R(n,Ie))}invert(){return I2(this,new Nn(R(this,Ie).quantum,-this.amount))}*experimentalExpand(r=1){r===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return R(this,Ie).quantum}modified(r){return new Nn(R(this,Ie).quantum.modified(r),r.amount??this.amount)}static fromString(r){return O2(r)}get amount(){return R(this,Ie).amount}get type(){return qo("deprecated: type"),"blockMove"}get family(){return R(this,Ie).quantum.family??void 0}get outerLayer(){return R(this,Ie).quantum.outerLayer??void 0}get innerLayer(){return R(this,Ie).quantum.innerLayer??void 0}toString(){if(this.family==="_SLASH_")return"/";if(this.family.endsWith("_PLUS_"))return R(this,Ie).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){let r=Math.abs(this.amount);return R(this,Ie).quantum.toString().slice(0,-10)+(r===1?"":r)+(this.amount<0?"--":"++")}return R(this,Ie).quantum.toString()+R(this,Ie).suffix()}},B=Nn;Ie=new WeakMap});var H0,K2,st,Zo,Te,jo=y(()=>{"use strict";Yt();Jt();Tt();Rr();V0();H0=class{constructor(){this.quantumU_SQ_=null;this.quantumD_SQ_=null}format(t){let r=this.tuple(t);return r?\`(\${r.map(n=>n.amount).join(", ")})\`:null}tuple(t){this.quantumU_SQ_||(this.quantumU_SQ_=new z("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new z("D_SQ_"));let r=t.alg;if(r.experimentalNumChildAlgNodes()===2){let[n,l]=r.childAlgNodes();if(n.as(B)?.quantum.isIdentical(this.quantumU_SQ_)&&l.as(B)?.quantum.isIdentical(this.quantumD_SQ_)){if(t.amount!==1)throw new Error("Square-1 tuples cannot have an amount other than 1.");return[n,l]}}return null}},K2=new H0,Zo=class extends Me{constructor(r,n){super();ee(this,st,void 0);let l=Br(r);V(this,st,new Yr(l,n))}isIdentical(r){let n=r;return r.is(Zo)&&R(this,st).isIdentical(R(n,st))}get alg(){return R(this,st).quantum}get amount(){return R(this,st).amount}get experimentalRepetitionSuffix(){return R(this,st).suffix()}invert(){return new Zo(R(this,st).quantum,-R(this,st).amount)}*experimentalExpand(r=1,n){n??(n=1/0),n===0?yield r===1?this:this.invert():yield*R(this,st).experimentalExpand(r,n-1)}static fromString(){throw new Error("unimplemented")}toString(){return K2.format(this)??\`(\${R(this,st).quantum.toString()})\${R(this,st).suffix()}\`}experimentalAsSquare1Tuple(){return K2.tuple(this)}},Te=Zo;st=new WeakMap});var Mn=y(()=>{"use strict";jo();Gl();Nl();Ml();Rr();Ol();Tl()});function wt(e,t){return e instanceof t}function Q2(e){return wt(e,Te)||wt(e,Ft)||wt(e,Ge)||wt(e,Oe)||wt(e,B)||wt(e,Xe)||wt(e,Ae)}var Z0=y(()=>{"use strict";Mn()});function q2(e,t,r){if(t.is(Te))return e.traverseGrouping(t,r);if(t.is(B))return e.traverseMove(t,r);if(t.is(Ge))return e.traverseCommutator(t,r);if(t.is(Oe))return e.traverseConjugate(t,r);if(t.is(Ae))return e.traversePause(t,r);if(t.is(Xe))return e.traverseNewline(t,r);if(t.is(Ft))return e.traverseLineComment(t,r);throw new Error("unknown AlgNode")}function V2(e){if(e.is(Te)||e.is(B)||e.is(Ge)||e.is(Oe)||e.is(Ae)||e.is(Xe)||e.is(Ft))return e;throw new Error("internal error: expected AlgNode")}var Xr,$r,Yo,Wl,J0,Xo,H2,Y0,Jo,j2,Z2,X0=y(()=>{"use strict";jo();Nl();Rr();Ol();Tl();Ml();Gl();Xr=class{traverseAlgNode(t,r){return q2(this,t,r)}traverseIntoAlgNode(t,r){return V2(this.traverseAlgNode(t,r))}},$r=class extends Xr{traverseAlgNode(t){return q2(this,t,void 0)}traverseIntoAlgNode(t){return V2(this.traverseAlgNode(t))}},Y0=class extends Xr{constructor(){super(...arguments);ee(this,Wl);ee(this,Yo,void 0)}*traverseAlg(r,n){if(n.depth===0){yield*r.childAlgNodes();return}let l=[],o=null,i=n?.collapseMoves??!0;function s(u,g){var L;let p=To(L=Y0,Xo,H2).call(L,u,g,n);if(p===0)return!1;let c=new B(u.quantum,p);return l.push(c),o=c,!0}function a(u){i&&o?.is(B)&&u.is(B)&&o.quantum.isIdentical(u.quantum)?(l.pop(),s(o,u.amount)||(o=l.slice(-1)[0])):u.is(B)?s(u,0):(l.push(u),o=u)}let f={depth:n.depth?n.depth-1:null};for(let u of r.childAlgNodes())for(let g of this.traverseAlgNode(u,f))a(g);for(let u of l)yield u}*traverseGrouping(r,n){if(n.depth===0){yield r;return}let l={depth:n.depth?n.depth-1:null},o=new Te(this.traverseAlg(r.alg,l),r.amount),i=To(this,Wl,J0).call(this).get(r);i&&(o.experimentalNISSPlaceholder=i,i.experimentalNISSGrouping=o),yield o}*traverseMove(r,n){yield r}*traverseCommutator(r,n){if(n.depth===0){yield r;return}let l={depth:n.depth?n.depth-1:null};yield new Ge(this.traverseAlg(r.A,l),this.traverseAlg(r.B,l))}*traverseConjugate(r,n){if(n.depth===0){yield r;return}let l={depth:n.depth?n.depth-1:null};yield new Oe(this.traverseAlg(r.A,l),this.traverseAlg(r.B,l))}*traversePause(r,n){if(r.experimentalNISSGrouping){let l=new Ae;To(this,Wl,J0).call(this).set(r.experimentalNISSGrouping,l),yield l}else yield r}*traverseNewline(r,n){yield r}*traverseLineComment(r,n){yield r}},Jo=Y0;Yo=new WeakMap,Wl=new WeakSet,J0=function(){return R(this,Yo)??V(this,Yo,new Map)},Xo=new WeakSet,H2=function(r,n,l){let o=r.amount+n;if(l?.quantumMoveOrder){let i=l.quantumMoveOrder(r.quantum),s=Math.floor(i/2)+1-i;o=(o%i+i-s)%i+s}return o},ee(Jo,Xo);j2=new Jo,Z2=j2.traverseAlg.bind(j2)});function J2(e){if(!e)return[];if(wt(e,v))return e.childAlgNodes();if(typeof e=="string")return Q0(e).childAlgNodes();let t=e;if(typeof t[Symbol.iterator]=="function")return t;throw new Error("Invalid AlgNode")}function Br(e){return wt(e,v)?e:new v(e)}function jm(e,t){return e.is(Xe)||t.is(Xe)||t.as(Te)?.experimentalNISSPlaceholder?"":e.is(Ft)&&!t.is(Xe)?\`
\`:" "}var at,en,v,Yt=y(()=>{"use strict";Jt();Z0();Tt();j0();X0();Mn();Gl();Rr();Ol();q0();en=class extends Me{constructor(r){super();ee(this,at,void 0);V(this,at,Array.from(J2(r)));for(let n of R(this,at))if(!Q2(n))throw new Error("An alg can only contain alg nodes.")}isIdentical(r){let n=r;if(!r.is(en))return!1;let l=Array.from(R(this,at)),o=Array.from(R(n,at));if(l.length!==o.length)return!1;for(let i=0;i<l.length;i++)if(!l[i].isIdentical(o[i]))return!1;return!0}invert(){return new en(N2(Array.from(R(this,at)).map(r=>r.invert())))}*experimentalExpand(r=1,n){n??(n=1/0);for(let l of P2(R(this,at),r))yield*l.experimentalExpand(r,n)}expand(r){return new en(this.experimentalExpand(1,r?.depth??1/0))}*experimentalLeafMoves(){for(let r of this.experimentalExpand())r.is(B)&&(yield r)}concat(r){return new en(Array.from(R(this,at)).concat(Array.from(J2(r))))}experimentalIsEmpty(){for(let r of R(this,at))return!1;return!0}static fromString(r){return Q0(r)}units(){return this.childAlgNodes()}*childAlgNodes(){for(let r of R(this,at))yield r}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(R(this,at)).length}get type(){return qo("deprecated: type"),"sequence"}toString(){let r="",n=null;for(let l of R(this,at)){n&&(r+=jm(n,l));let o=l.as(Ae)?.experimentalNISSGrouping;if(o){if(o.amount!==-1)throw new Error("Invalid NISS Grouping amount!");r+=\`^(\${o.alg.toString()})\`}else l.as(Te)?.experimentalNISSPlaceholder||(r+=l.toString());n=l}return r}simplify(r){return new en(Z2(this,r??{}))}},v=en;at=new WeakMap});var qm,Y2=y(()=>{"use strict";Yt();Mn();Nl();Ml();Rr();Tl();qm={Sune:new v([new B("R",1),new B("U",1),new B("R",-1),new B("U",1),new B("R",1),new B("U",-2),new B("R",-1)]),AntiSune:new v([new B("R",1),new B("U",2),new B("R",-1),new B("U",-1),new B("R",1),new B("U",-1),new B("R",-1)]),SuneCommutator:new v([new Ge(new v([new B("R",1),new B("U",1),new B("R",-2)]),new v([new Oe(new v([new B("R",1)]),new v([new B("U",1)]))]))]),Niklas:new v([new B("R",1),new B("U",-1),new B("L",-1),new B("U",1),new B("R",-1),new B("U",-1),new B("L",1),new B("U",1)]),EPerm:new v([new B("x",-1),new Ge(new v([new Oe(new v([new B("R",1)]),new v([new B("U",-1)]))]),new v([new B("D",1)])),new Ge(new v([new Oe(new v([new B("R",1)]),new v([new B("U",1)]))]),new v([new B("D",1)])),new B("x",1)]),FURURFCompact:new v([new Oe(new v([new B("F",1)]),new v([new Ge(new v([new B("U",1)]),new v([new B("R",1)]))]))]),APermCompact:new v([new Oe(new v([new B("R",2)]),new v([new Ge(new v([new B("F",2)]),new v([new B("R",-1),new B("B",-1),new B("R",1)]))]))]),FURURFMoves:new v([new B("F",1),new B("U",1),new B("R",1),new B("U",-1),new B("R",-1),new B("F",-1)]),TPerm:new v([new B("R",1),new B("U",1),new B("R",-1),new B("U",-1),new B("R",-1),new B("F",1),new B("R",2),new B("U",-1),new B("R",-1),new B("U",-1),new B("R",1),new B("U",1),new B("R",-1),new B("F",-1)]),HeadlightSwaps:new v([new Oe(new v([new B("F",1)]),new v([new Te(new v([new Ge(new v([new B("R",1)]),new v([new B("U",1)]))]),3)]))]),TriplePause:new v([new Ae,new Ae,new Ae])}});var TA,X2=y(()=>{"use strict";Mn();Rr();TA={73:new B("R"),75:new B("R'"),87:new B("B"),79:new B("B'"),83:new B("D"),76:new B("D'"),68:new B("L"),69:new B("L'"),74:new B("U"),70:new B("U'"),72:new B("F"),71:new B("F'"),78:new B("x'"),67:new B("l"),82:new B("l'"),85:new B("r"),77:new B("r'"),88:new B("d"),188:new B("d'"),84:new B("x"),89:new B("x"),66:new B("x'"),186:new B("y"),59:new B("y"),65:new B("y'"),80:new B("z"),81:new B("z'"),90:new B("M'"),190:new B("M'"),192:new Ae}});var $2=y(()=>{"use strict"});var ef=y(()=>{"use strict";Yt()});var Be=y(()=>{"use strict";Yt();I0();X0();Y2();X2();Mn();$2();ef();Z0();W0()});function Ql(e,t,r){let n={};for(let l in e.orbits){let o=e.orbits[l],i=t[l],s=r[l];if(Kl(o.numOrientations,s))n[l]=i;else if(Kl(o.numOrientations,i))n[l]=s;else{let a=new Array(o.numPieces);if(o.numOrientations===1){for(let f=0;f<o.numPieces;f++)a[f]=i.permutation[s.permutation[f]];n[l]={permutation:a,orientation:i.orientation}}else{let f=new Array(o.numPieces);for(let u=0;u<o.numPieces;u++)f[u]=(i.orientation[s.permutation[u]]+s.orientation[u])%o.numOrientations,a[u]=i.permutation[s.permutation[u]];n[l]={permutation:a,orientation:f}}}}return n}function $0(e,t,r){let n={};for(let l in e.orbits){let o=e.orbits[l],i=t[l],s=r[l];if(Kl(o.numOrientations,s))n[l]=i;else{let a=new Array(o.numPieces);if(o.numOrientations===1){for(let f=0;f<o.numPieces;f++)a[f]=i.pieces[s.permutation[f]];n[l]={pieces:a,orientation:i.orientation}}else{let f=new Array(o.numPieces);for(let u=0;u<o.numPieces;u++)f[u]=(i.orientation[s.permutation[u]]+s.orientation[u])%o.numOrientations,a[u]=i.pieces[s.permutation[u]];n[l]={pieces:a,orientation:f}}}}return n}var $o=y(()=>{"use strict";jl()});function Vm(e){let t=tf.get(e);if(t)return t;let r=new Array(e),n=new Array(e);for(let o=0;o<e;o++)r[o]=o,n[o]=0;let l={permutation:r,orientation:n};return rf&&(Object.freeze(r),Object.freeze(n),Object.freeze(l)),tf.set(e,l),l}function nf(e){let t={};for(let[r,n]of Object.entries(e.orbits))t[r]=Vm(n.numPieces);return rf&&Object.freeze(t),t}function lf(e,t){let r=t.quantum.toString(),n=e.definition.moves[r];if(!n){let i=e.definition.experimentalDerivedMoves?.[r];i&&(n=e.algToTransformation(i).transformationData)}if(n)return hr(e,n,t.amount);let l=e.definition.moves[t.toString()];if(l)return l;let o=e.definition.moves[t.invert().toString()];if(o)return hr(e,o,-1);throw new Error(\`Invalid move for KPuzzle (\${e.name()}): \${t}\`)}var rf,tf,es=y(()=>{"use strict";jl();rf=!1,tf=new Map});var ge,ei=y(()=>{"use strict";$o();ql();ge=class{constructor(t,r){this.kpuzzle=t;this.stateData=r}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),stateData:this.stateData}}static fromTransformation(t){let r=$0(t.kpuzzle.definition,t.kpuzzle.definition.startStateData,t.transformationData);return new ge(t.kpuzzle,r)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(t.isIdentityTransformation())return new ge(this.kpuzzle,this.stateData);let r=$0(this.kpuzzle.definition,this.stateData,t.transformationData);return new ge(this.kpuzzle,r)}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}experimentalToTransformation(){if(!this.kpuzzle.canConvertStateToUniqueTransformation())return null;let t={};for(let[r,n]of Object.entries(this.stateData)){let l={permutation:n.pieces,orientation:n.orientation};t[r]=l}return new Dt(this.kpuzzle,t)}experimentalIsSolved(t){if(!this.kpuzzle.definition.experimentalIsStateSolved)throw new Error("\`KState.experimentalIsSolved()\` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsStateSolved(this,t)}}});var tn,Fr,Dt,ql=y(()=>{"use strict";jl();$o();es();ei();Fr=class{constructor(t,r){this.kpuzzle=t;this.transformationData=r;ee(this,tn,void 0)}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new Fr(this.kpuzzle,ts(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return R(this,tn)??V(this,tn,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(t){let r=new Fr(t,nf(t.definition));return V(r,tn,!0),r}isIdentical(t){return of(this.kpuzzle,this.transformationData,t.transformationData)}apply(t){return this.applyTransformation(this.kpuzzle.toTransformation(t))}applyTransformation(t){if(this.kpuzzle!==t.kpuzzle)throw new Error(\`Tried to apply a transformation for a KPuzzle (\${t.kpuzzle.name()}) to a different KPuzzle (\${this.kpuzzle.name()}).\`);return R(this,tn)?new Fr(this.kpuzzle,t.transformationData):R(t,tn)?new Fr(this.kpuzzle,this.transformationData):new Fr(this.kpuzzle,Ql(this.kpuzzle.definition,this.transformationData,t.transformationData))}applyMove(t){return this.applyTransformation(this.kpuzzle.moveToTransformation(t))}applyAlg(t){return this.applyTransformation(this.kpuzzle.algToTransformation(t))}toKState(){return ge.fromTransformation(this)}repetitionOrder(){return sf(this.kpuzzle.definition,this)}selfMultiply(t){return new Fr(this.kpuzzle,hr(this.kpuzzle,this.transformationData,t))}},Dt=Fr;tn=new WeakMap});function Kl(e,t){let{permutation:r}=t,n=r.length;for(let l=0;l<n;l++)if(r[l]!==l)return!1;if(e>1){let{orientation:l}=t;for(let o=0;o<n;o++)if(l[o]!==0)return!1}return!0}function Hm(e,t,r,n={}){for(let l=0;l<e.numPieces;l++)if(!n?.ignoreOrientation&&t.orientation[l]!==r.orientation[l]||!n?.ignorePermutation&&t.permutation[l]!==r.permutation[l])return!1;return!0}function of(e,t,r){for(let[n,l]of Object.entries(e.definition.orbits))if(!Hm(l,t[n],r[n]))return!1;return!0}function ts(e,t){let r={};for(let n in e.definition.orbits){let l=e.definition.orbits[n],o=t[n];if(Kl(l.numOrientations,o))r[n]=o;else if(l.numOrientations===1){let i=new Array(l.numPieces);for(let s=0;s<l.numPieces;s++)i[o.permutation[s]]=s;r[n]={permutation:i,orientation:o.orientation}}else{let i=new Array(l.numPieces),s=new Array(l.numPieces);for(let a=0;a<l.numPieces;a++){let f=o.permutation[a];i[f]=a,s[f]=(l.numOrientations-o.orientation[a]+l.numOrientations)%l.numOrientations}r[n]={permutation:i,orientation:s}}}return r}function hr(e,t,r){if(r===1)return t;if(r<0)return hr(e,ts(e,t),-r);if(r===0){let{transformationData:o}=e.identityTransformation();return o}let n=t;r!==2&&(n=hr(e,t,Math.floor(r/2)));let l=Ql(e.definition,n,n);return r%2===0?l:Ql(e.definition,t,l)}function ns(e,t){return t?ns(t,e%t):e}function sf(e,t){let r=1;for(let n in e.orbits){let l=e.orbits[n],o=t.transformationData[n],i=new Array(l.numPieces);for(let s=0;s<l.numPieces;s++)if(!i[s]){let a=s,f=0,u=0;for(;i[a]=!0,f=f+o.orientation[a],u=u+1,a=o.permutation[a],a!==s;);f!==0&&(u=u*l.numOrientations/ns(l.numOrientations,f)),r=r*u/ns(r,u)}}return r}var rs,af,ff,jl=y(()=>{"use strict";Be();$o();ql();rs=class extends Xr{traverseAlg(t,r){let n=null;for(let l of t.childAlgNodes())n?n=n.applyTransformation(this.traverseAlgNode(l,r)):n=this.traverseAlgNode(l,r);return n??r.identityTransformation()}traverseGrouping(t,r){let n=this.traverseAlg(t.alg,r);return new Dt(r,hr(r,n.transformationData,t.amount))}traverseMove(t,r){return r.moveToTransformation(t)}traverseCommutator(t,r){let n=this.traverseAlg(t.A,r),l=this.traverseAlg(t.B,r);return n.applyTransformation(l).applyTransformation(n.invert()).applyTransformation(l.invert())}traverseConjugate(t,r){let n=this.traverseAlg(t.A,r),l=this.traverseAlg(t.B,r);return n.applyTransformation(l).applyTransformation(n.invert())}traversePause(t,r){return r.identityTransformation()}traverseNewline(t,r){return r.identityTransformation()}traverseLineComment(t,r){return r.identityTransformation()}},af=new rs,ff=af.traverseAlg.bind(af)});var Gn,ti,ye,uf=y(()=>{"use strict";Be();jl();es();ei();ql();ye=class{constructor(t,r){this.definition=t;ee(this,Gn,new Map);ee(this,ti,void 0);this.experimentalPGNotation=r?.experimentalPGNotation}name(){return this.definition.name}identityTransformation(){return Dt.experimentalConstructIdentity(this)}moveToTransformation(t){typeof t=="string"&&(t=new B(t));let r=t.toString(),n=R(this,Gn).get(r);if(n)return new Dt(this,n);if(this.experimentalPGNotation){let o=this.experimentalPGNotation.lookupMove(t);if(!o)throw new Error(\`could not map to internal move: \${t}\`);return R(this,Gn).set(r,o),new Dt(this,o)}let l=lf(this,t);return R(this,Gn).set(r,l),new Dt(this,l)}algToTransformation(t){return typeof t=="string"&&(t=new v(t)),ff(t,this)}toTransformation(t){return typeof t=="string"?this.algToTransformation(t):t?.is?.(v)?this.algToTransformation(t):t?.is?.(B)?this.moveToTransformation(t):t}startState(){return new ge(this,this.definition.startStateData)}canConvertStateToUniqueTransformation(){return R(this,ti)??V(this,ti,(()=>{for(let[t,r]of Object.entries(this.definition.orbits)){let n=new Array(r.numPieces).fill(!1);for(let l of this.definition.startStateData[t].pieces)n[l]=!0;for(let l of n)if(!l)return!1}return!0})())}};Gn=new WeakMap,ti=new WeakMap});var He=y(()=>{"use strict";uf();ei();ql()});var Zm,Ty,gf=y(()=>{"use strict";Zm={333:{puzzleID:"3x3x3",eventName:"3x3x3 Cube"},222:{puzzleID:"2x2x2",eventName:"2x2x2 Cube"},444:{puzzleID:"4x4x4",eventName:"4x4x4 Cube"},555:{puzzleID:"5x5x5",eventName:"5x5x5 Cube"},666:{puzzleID:"6x6x6",eventName:"6x6x6 Cube"},777:{puzzleID:"7x7x7",eventName:"7x7x7 Cube"},"333bf":{puzzleID:"3x3x3",eventName:"3x3x3 Blindfolded"},"333fm":{puzzleID:"3x3x3",eventName:"3x3x3 Fewest Moves"},"333oh":{puzzleID:"3x3x3",eventName:"3x3x3 One-Handed"},clock:{puzzleID:"clock",eventName:"Clock"},minx:{puzzleID:"megaminx",eventName:"Megaminx"},pyram:{puzzleID:"pyraminx",eventName:"Pyraminx"},skewb:{puzzleID:"skewb",eventName:"Skewb"},sq1:{puzzleID:"square1",eventName:"Square-1"},"444bf":{puzzleID:"4x4x4",eventName:"4x4x4 Blindfolded"},"555bf":{puzzleID:"5x5x5",eventName:"5x5x5 Blindfolded"},"333mb":{puzzleID:"3x3x3",eventName:"3x3x3 Multi-Blind"}},Ty={...Zm,fto:{puzzleID:"fto",eventName:"Face-Turning Octahedron"},master_tetraminx:{puzzleID:"master_tetraminx",eventName:"Master Tetraminx"},kilominx:{puzzleID:"kilominx",eventName:"Kilominx"},redi_cube:{puzzleID:"redi_cube",eventName:"Redi Cube"}}});function oL(e){switch(e){case"Regular":return Jm;case"Dim":return rL;case"Ignored":return Ym;case"OrientationStickers":return Xm;case"Invisible":return $m;case"IgnoreNonPrimary":return eL;case"PermuteNonPrimary":return tL;case"Ignoriented":return nL;case"OrientationWithoutPermutation":return lL}}var $t,It,Ze,On,ri,rn,Jm,Ym,Xm,$m,eL,tL,rL,nL,lL,Tn,In,ni=y(()=>{"use strict";$t=class{constructor(t,r){this.stickerings=new Map;for(let[n,l]of Object.entries(t.definition.orbits))this.stickerings.set(n,new Array(l.numPieces).fill(r))}},It="regular",Ze="ignored",On="oriented",ri="invisible",rn="dim",Jm={facelets:[It,It,It,It,It]},Ym={facelets:[Ze,Ze,Ze,Ze,Ze]},Xm={facelets:[On,On,On,On,On]},$m={facelets:[ri,ri,ri,ri]},eL={facelets:[It,Ze,Ze,Ze,Ze]},tL={facelets:[rn,It,It,It,It]},rL={facelets:[rn,rn,rn,rn,rn]},nL={facelets:[rn,Ze,Ze,Ze,Ze]},lL={facelets:[On,Ze,Ze,Ze,Ze]};Tn=class extends $t{constructor(t){super(t,"Regular")}set(t,r){for(let[n,l]of this.stickerings.entries())for(let o=0;o<l.length;o++)t.stickerings.get(n)[o]&&(l[o]=r);return this}toAppearance(){let t={orbits:{}};for(let[r,n]of this.stickerings.entries()){let l=[],o={pieces:l};t.orbits[r]=o;for(let i of n)l.push(oL(i))}return t}},In=class{constructor(t){this.kpuzzle=t}and(t){let r=new $t(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let o=0;o<l.numPieces;o++){r.stickerings.get(n)[o]=!0;for(let i of t)if(!i.stickerings.get(n)[o]){r.stickerings.get(n)[o]=!1;continue e}}}return r}or(t){let r=new $t(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits)){e:for(let o=0;o<l.numPieces;o++){r.stickerings.get(n)[o]=!1;for(let i of t)if(i.stickerings.get(n)[o]){r.stickerings.get(n)[o]=!0;continue e}}}return r}not(t){let r=new $t(this.kpuzzle,!1);for(let[n,l]of Object.entries(this.kpuzzle.definition.orbits))for(let o=0;o<l.numPieces;o++)r.stickerings.get(n)[o]=!t.stickerings.get(n)[o];return r}all(){return this.and(this.moves([]))}move(t){let r=this.kpuzzle.moveToTransformation(t),n=new $t(this.kpuzzle,!1);for(let[l,o]of Object.entries(this.kpuzzle.definition.orbits))for(let i=0;i<o.numPieces;i++)(r.transformationData[l].permutation[i]!==i||r.transformationData[l].orientation[i]!==0)&&(n.stickerings.get(l)[i]=!0);return n}moves(t){return t.map(r=>this.move(r))}orbits(t){let r=new $t(this.kpuzzle,!1);for(let n of t)r.stickerings.get(n).fill(!0);return r}orbitPrefix(t){let r=new $t(this.kpuzzle,!1);for(let n in this.kpuzzle.definition.orbits)n.startsWith(t)&&r.stickerings.get(n).fill(!0);return r}}});var ls,os=y(()=>{"use strict";ls={full:{groups:{"3x3x3":"Stickering"}},OLL:{groups:{"3x3x3":"Last Layer"}},PLL:{groups:{"3x3x3":"Last Layer"}},LL:{groups:{"3x3x3":"Last Layer"}},COLL:{groups:{"3x3x3":"Last Layer"}},OCLL:{groups:{"3x3x3":"Last Layer"}},CLL:{groups:{"3x3x3":"Last Layer"}},ELL:{groups:{"3x3x3":"Last Layer"}},ZBLL:{groups:{"3x3x3":"Last Layer"}},LS:{groups:{"3x3x3":"Last Slot"}},ELS:{groups:{"3x3x3":"Last Slot"}},CLS:{groups:{"3x3x3":"Last Slot"}},ZBLS:{groups:{"3x3x3":"Last Slot"}},VLS:{groups:{"3x3x3":"Last Slot"}},WVLS:{groups:{"3x3x3":"Last Slot"}},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}}});async function er(e,t){let r=await e.kpuzzle(),n=new Tn(r),l=new In(r),o=()=>l.move("U"),i=()=>l.or(l.moves(["U","D"])),s=()=>l.or(l.moves(["L","R"])),a=()=>l.not(s()),f=()=>l.not(o()),u=()=>l.orbitPrefix("CENTER"),g=()=>l.orbitPrefix("EDGE"),p=()=>l.or([l.orbitPrefix("CORNER"),l.orbitPrefix("C4RNER"),l.orbitPrefix("C5RNER")]),c=()=>l.or([a(),l.and([o(),g()])]),L=()=>l.and([o(),u()]),m=()=>l.and([l.and(l.moves(["F","R"])),g()]),d=()=>l.and([l.and(l.moves(["F","R"])),p(),l.not(o())]),F=()=>l.or([d(),m()]);function A(){n.set(f(),"Dim")}function U(){n.set(o(),"PermuteNonPrimary"),n.set(L(),"Dim")}function x(){n.set(o(),"IgnoreNonPrimary"),n.set(L(),"Regular")}function b(){n.set(o(),"Ignoriented"),n.set(L(),"Dim")}switch(t){case"full":break;case"PLL":A(),U();break;case"CLS":A(),n.set(d(),"Regular"),n.set(o(),"Ignoriented"),n.set(l.and([o(),u()]),"Dim"),n.set(l.and([o(),p()]),"IgnoreNonPrimary");break;case"OLL":A(),x();break;case"COLL":A(),n.set(l.and([o(),g()]),"Ignoriented"),n.set(l.and([o(),u()]),"Dim"),n.set(l.and([o(),p()]),"Regular");break;case"OCLL":A(),b(),n.set(l.and([o(),p()]),"IgnoreNonPrimary");break;case"CLL":A(),n.set(l.not(l.and([p(),o()])),"Dim");break;case"ELL":A(),n.set(o(),"Dim"),n.set(l.and([o(),g()]),"Regular");break;case"ELS":A(),x(),n.set(l.and([o(),p()]),"Ignored"),n.set(m(),"Regular"),n.set(d(),"Ignored");break;case"LL":A();break;case"F2L":n.set(o(),"Ignored");break;case"ZBLL":A(),n.set(o(),"PermuteNonPrimary"),n.set(L(),"Dim"),n.set(l.and([o(),p()]),"Regular");break;case"ZBLS":A(),n.set(F(),"Regular"),x(),n.set(l.and([o(),p()]),"Ignored");break;case"VLS":A(),n.set(F(),"Regular"),x();break;case"WVLS":A(),n.set(F(),"Regular"),n.set(l.and([o(),g()]),"Ignoriented"),n.set(l.and([o(),u()]),"Dim"),n.set(l.and([o(),p()]),"IgnoreNonPrimary");break;case"LS":A(),n.set(F(),"Regular"),n.set(o(),"Ignored"),n.set(L(),"Dim");break;case"EO":n.set(p(),"Ignored"),n.set(g(),"OrientationWithoutPermutation");break;case"EOline":n.set(p(),"Ignored"),n.set(g(),"OrientationWithoutPermutation"),n.set(l.and(l.moves(["D","M"])),"Regular");break;case"EOcross":n.set(g(),"OrientationWithoutPermutation"),n.set(l.move("D"),"Regular"),n.set(p(),"Ignored");break;case"CMLL":n.set(f(),"Dim"),n.set(c(),"Ignored"),n.set(l.and([o(),p()]),"Regular");break;case"L10P":n.set(l.not(c()),"Dim"),n.set(l.and([p(),o()]),"Regular");break;case"L6E":n.set(l.not(c()),"Dim");break;case"L6EO":n.set(l.not(c()),"Dim"),n.set(c(),"OrientationWithoutPermutation"),n.set(l.and([u(),i()]),"OrientationStickers");break;case"Daisy":n.set(l.all(),"Ignored"),n.set(u(),"Dim"),n.set(l.and([l.move("D"),u()]),"Regular"),n.set(l.and([l.move("U"),g()]),"IgnoreNonPrimary");break;case"Cross":n.set(l.all(),"Ignored"),n.set(u(),"Dim"),n.set(l.and([l.move("D"),u()]),"Regular"),n.set(l.and([l.move("D"),g()]),"Regular");break;case"2x2x2":n.set(l.or(l.moves(["U","F","R"])),"Ignored"),n.set(l.and([l.or(l.moves(["U","F","R"])),u()]),"Dim");break;case"2x2x3":n.set(l.all(),"Dim"),n.set(l.or(l.moves(["U","F","R"])),"Ignored"),n.set(l.and([l.or(l.moves(["U","F","R"])),u()]),"Dim"),n.set(l.and([l.move("F"),l.not(l.or(l.moves(["U","R"])))]),"Regular");break;case"Void Cube":n.set(u(),"Invisible");break;case"picture":case"invisible":n.set(l.all(),"Invisible");break;case"centers-only":n.set(l.not(u()),"Ignored");break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(l.and(l.moves([])),"Dim")}return n.toAppearance()}async function Wn(){let e=[];for(let[t,r]of Object.entries(ls))r.groups&&"3x3x3"in r.groups&&e.push(t);return e}var Vl=y(()=>{"use strict";ni();os()});function de(e){let t=null;return()=>t??(t=e())}var Et=y(()=>{"use strict"});var Kn,pf=y(()=>{"use strict";Kn=class{constructor(t,r){this.facenames=t;this.prefixFree=!0;this.gripnames=[];r&&(this.gripnames=r);for(let n=0;this.prefixFree&&n<t.length;n++)for(let l=0;this.prefixFree&&l<t.length;l++)n!==l&&t[n].startsWith(t[l])&&(this.prefixFree=!1)}setGripNames(t){this.gripnames=t}splitByFaceNames(t){let r=[],n=0;for(;n<t.length;){n>0&&n<t.length&&t[n]==="_"&&n++;let l=-1;for(let o=0;o<this.facenames.length;o++)t.substr(n).startsWith(this.facenames[o])&&(l<0||this.facenames[o].length>this.facenames[l].length)&&(l=o);if(l>=0)r.push(l),n+=this.facenames[l].length;else throw new Error("Could not split "+t+" into face names.")}return r}joinByFaceIndices(t){let r="",n=[];for(let l=0;l<t.length;l++)n.push(r),n.push(this.facenames[t[l]]),this.prefixFree||(r="_");return n.join("")}spinmatch(t,r){if(t===r)return!0;try{let n=this.splitByFaceNames(t),l=this.splitByFaceNames(r);if(n.length!==l.length&&n.length<3)return!1;for(let o=0;o<n.length;o++){for(let s=0;s<o;s++)if(n[o]===n[s])return!1;let i=!1;for(let s=0;s<l.length;s++)if(n[o]===l[s]){i=!0;break}if(!i)return!1}return!0}catch{return!1}}spinmatchv(t,r){return t.endsWith("v")&&r.endsWith("v")?this.spinmatch(t.slice(0,t.length-1),r.slice(0,r.length-1)):this.spinmatch(t,r)}unswizzle(t){(t.endsWith("v")||t.endsWith("w"))&&t[0]<="Z"&&(t=t.slice(0,t.length-1));let r=t.toUpperCase();for(let n=0;n<this.gripnames.length;n++){let l=this.gripnames[n];if(this.spinmatch(r,l))return l}return t}}});var nn,cf=y(()=>{"use strict";nn=class{notationToInternal(t){return t}notationToExternal(t){return t}}});var Hl,mf=y(()=>{"use strict";Be();Hl=class{constructor(t,r){this.child=t;this.sw=r}notationToInternal(t){return t.family==="T"&&t.innerLayer===void 0&&t.outerLayer===void 0?new B(new z("FLRv",t.innerLayer,t.outerLayer),t.amount):this.child.notationToInternal(t)}notationToExternal(t){let r=t.family;return r.length>0&&r[r.length-1]==="v"&&(r=r.substring(0,r.length-1)),this.sw.spinmatch(r,"FLUR")?new B(new z("T",t.innerLayer,t.outerLayer),t.amount):this.child.notationToExternal(t)}}});var Qn,Lf=y(()=>{"use strict";Be();Qn=class{constructor(t,r){this.internalNames=t;this.externalNames=r}convertString(t,r,n){let l="";(t.endsWith("v")||t.endsWith("v"))&&t<="_"&&(l=t.slice(t.length-1),t=t.slice(0,t.length-1));let o=t.toUpperCase(),i=!1;return t!==o&&(i=!0,t=o),t=n.joinByFaceIndices(r.splitByFaceNames(t)),i&&(t=t.toLowerCase()),t+l}convert(t,r,n){let l=t.family,o=this.convertString(l,r,n);return l===o?t:new B(new z(o,t.innerLayer,t.outerLayer),t.amount)}notationToInternal(t){return this.convert(t,this.externalNames,this.internalNames)}notationToExternal(t){return this.convert(t,this.internalNames,this.externalNames)}}});var Zl,Bf=y(()=>{"use strict";Be();Zl=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer===void 0&&t.outerLayer===void 0){if(Math.abs(t.amount)===1){if(t.family==="R++")return new B(new z("L",3,2),-2*t.amount);if(t.family==="R--")return new B(new z("L",3,2),2*t.amount);if(t.family==="D++")return new B(new z("U",3,2),-2*t.amount);if(t.family==="D--")return new B(new z("U",3,2),2*t.amount);if(t.family==="R_PLUSPLUS_")return new B(new z("L",3,2),-2*t.amount);if(t.family==="D_PLUSPLUS_")return new B(new z("U",3,2),-2*t.amount)}if(t.family==="y")return new B("Uv",t.amount);if(t.family==="x"&&Math.abs(t.amount)===2)return new B("ERv",t.amount/2)}return this.child.notationToInternal(t)}notationToExternal(t){return t.family==="ERv"&&Math.abs(t.amount)===1?new B(new z("x",t.innerLayer,t.outerLayer),t.amount*2):t.family==="ILv"&&Math.abs(t.amount)===1?new B(new z("x",t.innerLayer,t.outerLayer),-t.amount*2):t.family==="Uv"?new B(new z("y",t.innerLayer,t.outerLayer),t.amount):t.family==="Dv"?new B("y",-t.amount):this.child.notationToExternal(t)}}});var Jl,df=y(()=>{"use strict";Be();Jl=class{constructor(t){this.slices=t}notationToInternal(t){let r=t.family;return!t.innerLayer&&!t.outerLayer&&(r==="x"?t=new B("Rv",t.amount):r==="y"?t=new B("Uv",t.amount):r==="z"&&(t=new B("Fv",t.amount)),(this.slices&1)===1&&(r==="E"?t=new B(new z("D",(this.slices+1)/2),t.amount):r==="M"?t=new B(new z("L",(this.slices+1)/2),t.amount):r==="S"&&(t=new B(new z("F",(this.slices+1)/2),t.amount))),this.slices>2&&(r==="e"?t=new B(new z("D",this.slices-1,2),t.amount):r==="m"?t=new B(new z("L",this.slices-1,2),t.amount):r==="s"&&(t=new B(new z("F",this.slices-1,2),t.amount)))),t}notationToExternal(t){let r=t.family;if(!t.innerLayer&&!t.outerLayer){if(r==="Rv")return new B("x",t.amount);if(r==="Uv")return new B("y",t.amount);if(r==="Fv")return new B("z",t.amount);if(r==="Lv")return new B("x",-t.amount);if(r==="Dv")return new B("y",-t.amount);if(r==="Bv")return new B("z",-t.amount)}return t}}});var sL,aL,Rf,hf,Ff,jn,Yl,Df=y(()=>{"use strict";Be();sL={U:"frl",L:"fld",R:"fdr",B:"dlr",u:"FRL",l:"FLD",r:"FDR",b:"DLR",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R"},aL={U:"FRL",L:"FLD",R:"FDR",B:"DLR",u:"frl",l:"fld",r:"fdr",b:"dlr",Uv:"FRLv",Lv:"FLDv",Rv:"FDRv",Bv:"DLRv",D:"D",F:"F",BL:"L",BR:"R",d:"d",f:"f",bl:"l",br:"r"},Rf={U:"FRL",L:"FLD",R:"FDR",B:"DLR"},hf=new z("y"),Ff=new z("Dv"),jn=class{constructor(t){this.child=t;this.wcaHack=!1;this.map=sL}notationToInternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){let n=Rf[t.family];if(n)return new B(new z(n,t.innerLayer,t.outerLayer),t.amount)}let r=this.map[t.family];return r?new B(new z(r,t.innerLayer,t.outerLayer),t.amount):hf.isIdentical(t.quantum)?new B(Ff,-t.amount):null}notationToExternal(t){if(this.wcaHack&&t.innerLayer===2&&t.outerLayer===null){for(let[r,n]of Object.entries(Rf))if(this.child.spinmatch(t.family,n))return new B(new z(r,t.innerLayer,t.outerLayer),t.amount)}for(let[r,n]of Object.entries(this.map))if(this.child.spinmatch(t.family,n))return new B(new z(r,t.innerLayer,t.outerLayer),t.amount);return Ff.isIdentical(t.quantum)?new B(hf,-t.amount):null}},Yl=class extends jn{constructor(r){super(r);this.wcaHack=!0;this.map=aL}}});var Af,is,yf,fL,ss,Uf,uL,as,Sf,gL,Xl,xf=y(()=>{"use strict";Be();Af={U:"UBL",UL:"ULF",F:"UFR",UR:"URB",B:"DBL",D:"DFR",L:"DLF",R:"DRB",Uv:"UBLv",ULv:"ULFv",Fv:"UFRv",URv:"URBv",Bv:"DBLv",Dv:"DFRv",Lv:"DLFv",Rv:"DRBv"},is=new z("x"),yf=new z("Rv"),fL=new z("Lv"),ss=new z("y"),Uf=new z("Uv"),uL=new z("Dv"),as=new z("z"),Sf=new z("Fv"),gL=new z("Bv"),Xl=class{constructor(t){this.child=t}notationToInternal(t){if(t.innerLayer||t.outerLayer)return null;let r=Af[t.family];return r?new B(new z(r,t.outerLayer,t.innerLayer),t.amount):is.isIdentical(t.quantum)?new B(yf,t.amount):ss.isIdentical(t.quantum)?new B(Uf,t.amount):as.isIdentical(t.quantum)?new B(Sf,t.amount):null}notationToExternal(t){for(let[r,n]of Object.entries(Af))if(this.child.spinmatchv(t.family,n))return new B(new z(r,t.innerLayer,t.outerLayer),t.amount);return yf.isIdentical(t.quantum)?new B(is,t.amount):fL.isIdentical(t.quantum)?new B(is,-t.amount):Uf.isIdentical(t.quantum)?new B(ss,t.amount):uL.isIdentical(t.quantum)?new B(ss,-t.amount):Sf.isIdentical(t.quantum)?new B(as,t.amount):gL.isIdentical(t.quantum)?new B(as,-t.amount):null}}});var fs=y(()=>{"use strict";cf();mf();Lf();Bf();df();Df();xf()});function bf(e){let t=0,r={};for(;t<e.length&&e[t][0]==="-";){let l=e[t++];if(l==="--rotations")r.addRotations=!0;else if(l==="--allmoves")r.allMoves=!0;else if(l==="--outerblockmoves")r.outerBlockMoves=!0;else if(l==="--vertexmoves")r.vertexMoves=!0;else if(l==="--nocorners")r.includeCornerOrbits=!1;else if(l==="--noedges")r.includeEdgeOrbits=!1;else if(l==="--noorientation")r.fixedOrientation=!0;else if(l==="--nocenters")r.includeCenterOrbits=!1;else if(l==="--omit")r.excludeOrbits=e[t].split(","),t++;else if(l==="--moves")r.moveList=e[t].split(","),t++;else if(l==="--optimize")r.optimizeOrbits=!0;else if(l==="--scramble")r.scrambleAmount=100;else if(l==="--fixcorner")r.fixedPieceType="v";else if(l==="--fixedge")r.fixedPieceType="e";else if(l==="--fixcenter")r.fixedPieceType="f";else if(l==="--orientcenters")r.orientCenters=!0;else if(l==="--puzzleorientation")r.puzzleOrientation=JSON.parse(e[t]),t++;else throw new Error("Bad option: "+l)}return{puzzleDescription:$l(e.slice(t).join(" ")),options:r}}var li,us=y(()=>{"use strict";eo();li=class{constructor(t={}){this.verbosity=0;this.allMoves=!1;this.vertexMoves=!1;this.addRotations=!1;this.moveList=null;this.fixedOrientation=!1;this.fixedPieceType=null;this.orientCenters=!1;this.includeCornerOrbits=!0;this.includeCenterOrbits=!0;this.includeEdgeOrbits=!0;this.excludeOrbits=[];this.optimizeOrbits=!1;this.grayCorners=!1;this.grayCenters=!1;this.grayEdges=!1;this.puzzleOrientation=null;this.puzzleOrientations=null;this.scrambleAmount=0;Object.assign(this,t)}}});function Dr(e){if(!gs[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=0;gs[e]=t}return gs[e]}function Wt(e){if(!ps[e]){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;ps[e]=t}return ps[e]}function wf(e){return new Bt(Wt(e))}function Ef(e){let t=1n;for(;e>1;)t*=BigInt(e),e--;return t}function pL(e,t){if(e>t){let r=e;e=t,t=r}for(;e>0;){let r=t%e;t=e,e=r}return t}function cs(e,t){return e/pL(e,t)*t}var gs,ps,Bt,oi=y(()=>{"use strict";gs=[],ps=[];Bt=class{constructor(t){this.n=t.length,this.p=t}toString(){return"Perm["+this.p.join(" ")+"]"}mul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=t.p[this.p[n]];return new Bt(r)}rmul(t){let r=Array(this.n);for(let n=0;n<this.n;n++)r[n]=this.p[t.p[n]];return new Bt(r)}inv(){let t=Array(this.n);for(let r=0;r<this.n;r++)t[this.p[r]]=r;return new Bt(t)}compareTo(t){for(let r=0;r<this.n;r++)if(this.p[r]!==t.p[r])return this.p[r]-t.p[r];return 0}toGap(){let t=new Array,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let l=new Array;for(let o=n;!r[o];o=this.p[o])l.push(1+o),r[o]=!0;t.push("("+l.join(",")+")")}return t.join("")}order(){let t=1,r=new Array(this.n);for(let n=0;n<this.p.length;n++){if(r[n]||this.p[n]===n)continue;let l=0;for(let o=n;!r[o];o=this.p[o])l++,r[o]=!0;t=cs(t,l)}return t}}});function ii(e,t){let r=B.fromString(t),n=e.notationToExternal(r);return n===null||r===n?t:n.toString()}function vf(e,t){let r=e.moveops.length;if(r>30)throw new Error("Canon info too big for bitmask");let n=[],l=[];for(let i=0;i<r;i++){let s=e.moveops[i];n.push(s.order());let a=0;for(let f=0;f<r;f++){if(f===i)continue;let u=e.moveops[f];s.mul(u).equal(u.mul(s))&&(a|=1<<f)}l.push(a)}let o={};o[0]=1;for(let i=0;i<100;i++){let s=0,a={},f=0;for(let u in o){let g=+u,p=o[g];s+=p,f++;for(let c=0;c<n.length;c++)if((g>>c&1)===0&&(g&l[c]&(1<<c)-1)===0){let L=g&l[c]|1<<c;a[L]===void 0&&(a[L]=0),a[L]+=(n[c]-1)*p}}t(\`\${i}: canonseq \${s} states \${f}\`),o=a}}var qn,cL,ln,vt,Kt,si,tr,on,ai,_f=y(()=>{"use strict";Be();fs();oi();qn=class{constructor(t,r){this.size=t;this.mod=r}reassemblySize(){return Ef(this.size)*BigInt(this.mod)**BigInt(this.size)}},cL=0;ln=class{constructor(t,r,n,l,o,i,s){this.orbitnames=t;this.orbitdefs=r;this.solved=n;this.movenames=l;this.moveops=o;this.isRotation=i;this.forcenames=s}transformToKTransformationData(t){let r={};for(let n=0;n<this.orbitnames.length;n++)r[this.orbitnames[n]]=t.orbits[n].toKPuzzle();return r}static transformToKTransformationData(t,r){let n={};for(let l=0;l<t.length;l++)n[t[l]]=r.orbits[l].toKPuzzle();return n}describeSet(t,r,n){let l=this.orbitdefs[t].size,o=new Array(l);for(let i=0;i<l;i++)o[i]=[];for(let i=0;i<this.movenames.length;i++){if(this.isRotation[i])continue;let s=this.movenames[i];this.forcenames[i]||(s=ii(n,s),s[s.length-1]==="'"&&(s=s.substring(0,s.length-1)));let a=this.moveops[i].orbits[t];for(let f=0;f<l;f++)(a.perm[f]!=f||a.ori[f]!=0)&&o[f].push(s)}for(let i=0;i<l;i++)r.push("# "+(i+1)+" "+o[i].join(" "))}toKsolve(t,r=new nn){let n=[];n.push("Name "+t),n.push("");for(let l=0;l<this.orbitnames.length;l++)n.push(\`Set \${this.orbitnames[l]} \${this.orbitdefs[l].size} \${this.orbitdefs[l].mod}\`),this.describeSet(l,n,r);n.push(""),n.push("Solved");for(let l=0;l<this.orbitnames.length;l++)this.solved.orbits[l].appendDefinition(n,this.orbitnames[l],!1,!1);n.push("End");for(let l=0;l<this.movenames.length;l++){n.push("");let o=this.movenames[l];this.forcenames[l]||(o=ii(r,this.movenames[l]));let i=!1;o[o.length-1]==="'"&&(i=!0,o=o.substring(0,o.length-1)),n.push("Move "+o);for(let s=0;s<this.orbitnames.length;s++)i?this.moveops[l].orbits[s].inv().appendDefinition(n,this.orbitnames[s],!0):this.moveops[l].orbits[s].appendDefinition(n,this.orbitnames[s],!0);n.push("End")}return n}toKPuzzleDefinition(t){let r={},n={};for(let o=0;o<this.orbitnames.length;o++){r[this.orbitnames[o]]={numPieces:this.orbitdefs[o].size,numOrientations:this.orbitdefs[o].mod};let i=this.solved.orbits[o].toKPuzzle();n[this.orbitnames[o]]={pieces:i.permutation,orientation:i.orientation}}let l={};if(t)for(let o=0;o<this.movenames.length;o++)l[this.movenames[o]]=this.transformToKTransformationData(this.moveops[o]);return{name:\`PG3D #\${++cL}\`,orbits:r,startStateData:n,moves:l}}optimize(){let t=[],r=[],n=[],l=[];for(let o=0;o<this.moveops.length;o++)l.push([]);for(let o=0;o<this.orbitdefs.length;o++){let i=this.orbitdefs[o].mod,s=this.orbitdefs[o].size,a=new ai(s),f=new Array(this.orbitdefs[o].size);for(let c=0;c<s;c++)f[c]=!1;for(let c=0;c<this.moveops.length;c++)if(!this.isRotation[c])for(let L=0;L<s;L++)(this.moveops[c].orbits[o].perm[L]!==L||this.moveops[c].orbits[o].ori[L]!==0)&&(f[L]=!0,a.union(L,this.moveops[c].orbits[o].perm[L]));let u=!0;if(i>1){u=!1;let c=new ai(this.orbitdefs[o].size*i);for(let L=0;L<this.moveops.length;L++)for(let m=0;m<s;m++)if(this.moveops[L].orbits[o].perm[m]!==m||this.moveops[L].orbits[o].ori[m]!==0)for(let d=0;d<i;d++)c.union(m*i+d,this.moveops[L].orbits[o].perm[m]*i+(d+this.moveops[L].orbits[o].ori[m])%i);for(let L=0;!u&&L<s;L++)for(let m=1;m<i;m++)c.find(L*i)===c.find(L*i+m)&&(u=!0);for(let L=0;!u&&L<s;L++)for(let m=0;m<L;m++)this.solved.orbits[o].perm[L]===this.solved.orbits[o].perm[m]&&(u=!0)}let g=-1,p=!1;for(let c=0;c<this.orbitdefs[o].size;c++)if(f[c]){let L=a.find(c);g<0?g=L:g!==L&&(p=!0)}for(let c=0;c<this.orbitdefs[o].size;c++){if(!f[c]||a.find(c)!==c)continue;let m=[],d=[],F=0;for(let A=0;A<this.orbitdefs[o].size;A++)a.find(A)===c&&(m[F]=A,d[A]=F,F++);if(p?t.push(\`\${this.orbitnames[o]}_p\${c}\`):t.push(this.orbitnames[o]),u){r.push(new qn(F,this.orbitdefs[o].mod)),n.push(this.solved.orbits[o].remapVS(m,F));for(let A=0;A<this.moveops.length;A++)l[A].push(this.moveops[A].orbits[o].remap(m,d,F))}else{r.push(new qn(F,1)),n.push(this.solved.orbits[o].remapVS(m,F).killOri());for(let A=0;A<this.moveops.length;A++)l[A].push(this.moveops[A].orbits[o].remap(m,d,F).killOri())}}}return new ln(t,r,new on(n),this.movenames,l.map(o=>new tr(o)),this.isRotation,this.forcenames)}scramble(t){this.solved=this.solved.mul(this.getScrambleTransformation(t))}getScrambleTransformation(t){t<100&&(t=100);let r=[];for(let l=0;l<this.moveops.length;l++)r[l]=this.moveops[l];for(let l=0;l<r.length;l++){let o=Math.floor(Math.random()*r.length),i=r[l];r[l]=r[o],r[o]=i}t<r.length&&(t=r.length);for(let l=0;l<t;l++){let o=Math.floor(Math.random()*r.length),i=Math.floor(Math.random()*r.length),s=Math.floor(Math.random()*this.moveops.length);r[o]=r[o].mul(r[i]).mul(this.moveops[s]),Math.random()<.1&&(r[o]=r[o].mul(this.moveops[s]))}let n=r[0];for(let l=1;l<r.length;l++)n=n.mul(r[l]);return n}reassemblySize(){let t=1n;for(let r=0;r<this.orbitdefs.length;r++)t*=this.orbitdefs[r].reassemblySize();return t}},vt=class{constructor(t,r,n){this.perm=t;this.ori=r;this.orimod=n}static e(t,r){return new vt(Wt(t),Dr(t),r)}mul(t){let r=this.perm.length,n=new Array(r);if(this.orimod===1){for(let l=0;l<r;l++)n[l]=this.perm[t.perm[l]];return new vt(n,this.ori,this.orimod)}else{let l=new Array(r);for(let o=0;o<r;o++)n[o]=this.perm[t.perm[o]],l[o]=(this.ori[t.perm[o]]+t.ori[o])%this.orimod;return new vt(n,l,this.orimod)}}inv(){let t=this.perm.length,r=new Array(t),n=new Array(t);for(let l=0;l<t;l++)r[this.perm[l]]=l,n[this.perm[l]]=(this.orimod-this.ori[l])%this.orimod;return new vt(r,n,this.orimod)}equal(t){let r=this.perm.length;for(let n=0;n<r;n++)if(this.perm[n]!==t.perm[n]||this.ori[n]!==t.ori[n])return!1;return!0}killOri(){let t=this.perm.length;for(let r=0;r<t;r++)this.ori[r]=0;return this.orimod=1,this}toPerm(){let t=this.orimod;if(t===1)return new Bt(this.perm);let r=this.perm.length,n=new Array(r*t);for(let l=0;l<r;l++)for(let o=0;o<t;o++)n[l*t+o]=t*this.perm[l]+(this.ori[l]+o)%t;return new Bt(n)}identicalPieces(){let t=[],r=this.perm.length,n=[];for(let l=0;l<r;l++){let o=this.perm[l];if(t[o]===void 0){let i=[l];t[o]=!0;for(let s=l+1;s<r;s++)this.perm[s]===o&&i.push(s);n.push(i)}}return n}order(){return this.toPerm().order()}isIdentity(){let t=this.perm.length;if(this.perm===Wt(t)&&this.ori===Dr(t))return!0;for(let r=0;r<t;r++)if(this.perm[r]!==r||this.ori[r]!==0)return!1;return!0}zeroOris(){let t=this.perm.length;if(this.ori===Dr(t))return!0;for(let r=0;r<t;r++)if(this.ori[r]!==0)return!1;return!0}remap(t,r,n){let l=new Array(n),o=new Array(n);for(let i=0;i<n;i++)l[i]=r[this.perm[t[i]]],o[i]=this.ori[t[i]];return new vt(l,o,this.orimod)}remapVS(t,r){let n=new Array(r),l=new Array(r),o=0,i=[];for(let s=0;s<r;s++){let a=this.perm[t[s]];i[a]===void 0&&(i[a]=o++),n[s]=i[a],l[s]=this.ori[t[s]]}return new vt(n,l,this.orimod)}appendDefinition(t,r,n,l=!0){if(!(l&&this.isIdentity())&&(t.push(r),t.push(this.perm.map(o=>o+1).join(" ")),!this.zeroOris()))if(n){let o=new Array(this.ori.length);for(let i=0;i<o.length;i++)o[this.perm[i]]=this.ori[i];t.push(o.join(" "))}else t.push(this.ori.join(" "))}toKPuzzle(){let t=this.perm.length;return this.isIdentity()?(vt.kcache[t]||(vt.kcache[t]={permutation:Wt(t),orientation:Dr(t)}),vt.kcache[t]):{permutation:this.perm,orientation:this.ori}}},Kt=vt;Kt.kcache=[];si=class{constructor(t){this.orbits=t}internalMul(t){let r=[];for(let n=0;n<this.orbits.length;n++)r.push(this.orbits[n].mul(t.orbits[n]));return r}internalInv(){let t=[];for(let r of this.orbits)t.push(r.inv());return t}equal(t){for(let r=0;r<this.orbits.length;r++)if(!this.orbits[r].equal(t.orbits[r]))return!1;return!0}killOri(){for(let t of this.orbits)t.killOri();return this}toPerm(){let t=new Array,r=0;for(let l of this.orbits){let o=l.toPerm();t.push(o),r+=o.n}let n=new Array(r);r=0;for(let l of t){for(let o=0;o<l.n;o++)n[r+o]=r+l.p[o];r+=l.n}return new Bt(n)}identicalPieces(){let t=[],r=0;for(let n of this.orbits){let l=n.orimod,o=n.identicalPieces();for(let i=0;i<o.length;i++)t.push(o[i].map(s=>s*l+r));r+=l*n.perm.length}return t}order(){let t=1;for(let r of this.orbits)t=cs(t,r.order());return t}},tr=class extends si{constructor(t){super(t)}mul(t){return new tr(this.internalMul(t))}mulScalar(t){if(t===0)return this.e();let r=this;for(t<0&&(r=r.inv(),t=-t);(t&1)===0;)r=r.mul(r),t>>=1;if(t===1)return r;let n=r,l=this.e();for(;t>0;)t&1&&(l=l.mul(n)),t>1&&(n=n.mul(n)),t>>=1;return l}inv(){return new tr(this.internalInv())}e(){return new tr(this.orbits.map(t=>Kt.e(t.perm.length,t.orimod)))}},on=class extends si{constructor(t){super(t)}mul(t){return new on(this.internalMul(t))}},ai=class{constructor(t){this.n=t;this.heads=new Array(t);for(let r=0;r<t;r++)this.heads[r]=r}find(t){let r=this.heads[t];return this.heads[r]===r||(r=this.find(this.heads[r]),this.heads[t]=r),r}union(t,r){let n=this.find(t),l=this.find(r);n<l?this.heads[l]=n:n>l&&(this.heads[n]=l)}}});var fi,kf=y(()=>{"use strict";fi={"2x2x2":"c f 0","3x3x3":"c f 0.333333333333333","4x4x4":"c f 0.5 f 0","5x5x5":"c f 0.6 f 0.2","6x6x6":"c f 0.666666666666667 f 0.333333333333333 f 0","7x7x7":"c f 0.714285714285714 f 0.428571428571429 f 0.142857142857143","8x8x8":"c f 0.75 f 0.5 f 0.25 f 0","9x9x9":"c f 0.777777777777778 f 0.555555555555556 f 0.333333333333333 f 0.111111111111111","10x10x10":"c f 0.8 f 0.6 f 0.4 f 0.2 f 0","11x11x11":"c f 0.818181818181818 f 0.636363636363636 f 0.454545454545455 f 0.272727272727273 f 0.0909090909090909","12x12x12":"c f 0.833333333333333 f 0.666666666666667 f 0.5 f 0.333333333333333 f 0.166666666666667 f 0","13x13x13":"c f 0.846153846153846 f 0.692307692307692 f 0.538461538461538 f 0.384615384615385 f 0.230769230769231 f 0.0769230769230769","20x20x20":"c f 0 f .1 f .2 f .3 f .4 f .5 f .6 f .7 f .8 f .9","30x30x30":"c f 0 f .066667 f .133333 f .2 f .266667 f .333333 f .4 f .466667 f .533333 f .6 f .666667 f .733333 f .8 f .866667 f .933333","40x40x40":"c f 0 f .05 f .1 f .15 f .2 f .25 f .3 f .35 f .4 f .45 f .5 f .55 f .6 f .65 f .7 f .75 f .8 f .85 f .9 f .95",skewb:"c v 0","master skewb":"c v 0.275","professor skewb":"c v 0 v 0.38","compy cube":"c v 0.915641442663986",helicopter:"c e 0.707106781186547","curvy copter":"c e 0.83",dino:"c v 0.577350269189626","little chop":"c e 0",pyramorphix:"t e 0",mastermorphix:"t e 0.346184634065199",pyraminx:"t v 0.333333333333333 v 1.66666666666667",tetraminx:"t v 0.333333333333333","master pyraminx":"t v 0 v 1 v 2","master tetraminx":"t v 0 v 1","professor pyraminx":"t v -0.2 v 0.6 v 1.4 v 2.2","professor tetraminx":"t v -0.2 v 0.6 v 1.4","Jing pyraminx":"t f 0","master pyramorphix":"t e 0.866025403784437",megaminx:"d f 0.7",gigaminx:"d f 0.64 f 0.82",teraminx:"d f 0.64 f 0.76 f 0.88",petaminx:"d f 0.64 f 0.73 f 0.82 f 0.91",examinx:"d f 0.64 f 0.712 f 0.784 f 0.856 f 0.928",zetaminx:"d f 0.64 f 0.7 f 0.76 f 0.82 f 0.88 f 0.94",yottaminx:"d f 0.64 f 0.6914 f 0.7429 f 0.7943 f 0.8457 f 0.8971 f 0.9486",pentultimate:"d f 0","master pentultimate":"d f 0.1","elite pentultimate":"d f 0 f 0.145905",starminx:"d v 0.937962370425399","starminx 2":"d f 0.23606797749979","pyraminx crystal":"d f 0.447213595499989",chopasaurus:"d v 0","big chop":"d e 0","skewb diamond":"o f 0",FTO:"o f 0.333333333333333","master FTO":"o f 0.5 f 0","Christopher's jewel":"o v 0.577350269189626",octastar:"o e 0","Trajber's octahedron":"o v 0.433012701892219","radio chop":"i f 0",icosamate:"i v 0","icosahedron 2":"i v 0.18759247376021","icosahedron 3":"i v 0.18759247376021 e 0","icosahedron static faces":"i v 0.84","icosahedron moving faces":"i v 0.73","Eitan's star":"i f 0.61803398874989","2x2x2 + dino":"c f 0 v 0.577350269189626","2x2x2 + little chop":"c f 0 e 0","dino + little chop":"c v 0.577350269189626 e 0","2x2x2 + dino + little chop":"c f 0 v 0.577350269189626 e 0","megaminx + chopasaurus":"d f 0.61803398875 v 0","starminx combo":"d f 0.23606797749979 v 0.937962370425399"}});function ui(e){let t=new W(0,0,0,0);for(let r=0;r<e.length;r++)t=t.sum(e[r]);return t.smul(1/e.length)}function zf(e,t,r,n){let l=n[e].intersect3(n[t],n[r]);if(!l)return l;for(let o=0;o<n.length;o++)if(o!==e&&o!==t&&o!==r){let i=n[o].b*l.b+n[o].c*l.c+n[o].d*l.d;if(n[o].a>0&&i>n[o].a||n[o].a<0&&i<n[o].a)return!1}return l}var W,gi=y(()=>{"use strict";W=class{constructor(t,r,n,l){this.a=t;this.b=r;this.c=n;this.d=l}mul(t){return new W(this.a*t.a-this.b*t.b-this.c*t.c-this.d*t.d,this.a*t.b+this.b*t.a+this.c*t.d-this.d*t.c,this.a*t.c-this.b*t.d+this.c*t.a+this.d*t.b,this.a*t.d+this.b*t.c-this.c*t.b+this.d*t.a)}toString(){return\`Q[\${this.a},\${this.b},\${this.c},\${this.d}]\`}dist(t){return Math.hypot(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}len(){return Math.hypot(this.a,this.b,this.c,this.d)}cross(t){return new W(0,this.c*t.d-this.d*t.c,this.d*t.b-this.b*t.d,this.b*t.c-this.c*t.b)}dot(t){return this.b*t.b+this.c*t.c+this.d*t.d}normalize(){let t=Math.sqrt(this.dot(this));return new W(this.a/t,this.b/t,this.c/t,this.d/t)}makenormal(){return new W(0,this.b,this.c,this.d).normalize()}normalizeplane(){let t=Math.hypot(this.b,this.c,this.d);return new W(this.a/t,this.b/t,this.c/t,this.d/t)}smul(t){return new W(this.a*t,this.b*t,this.c*t,this.d*t)}sum(t){return new W(this.a+t.a,this.b+t.b,this.c+t.c,this.d+t.d)}sub(t){return new W(this.a-t.a,this.b-t.b,this.c-t.c,this.d-t.d)}angle(){return 2*Math.acos(this.a)}invrot(){return new W(this.a,-this.b,-this.c,-this.d)}det3x3(t,r,n,l,o,i,s,a,f){return t*(o*f-i*a)+r*(i*s-l*f)+n*(l*a-o*s)}rotateplane(t){let r=t.mul(new W(0,this.b,this.c,this.d)).mul(t.invrot());return r.a=this.a,r}orthogonal(){let t=Math.abs(this.b),r=Math.abs(this.c),n=Math.abs(this.d);return t<r&&t<n?this.cross(new W(0,1,0,0)).normalize():r<t&&r<n?this.cross(new W(0,0,1,0)).normalize():this.cross(new W(0,0,0,1)).normalize()}pointrotation(t){let r=this.normalize();if(t=t.normalize(),r.sub(t).len()<1e-9)return new W(1,0,0,0);let n=r.sum(t);n.len()<1e-9?n=n.orthogonal():n=n.normalize();let l=r.cross(n);return l.a=r.dot(n),l}unproject(t){return this.sum(t.smul(-this.dot(t)/(this.len()*t.len())))}rotatepoint(t){return t.mul(this).mul(t.invrot())}rotateface(t){return t.map(r=>r.rotatepoint(this))}intersect3(t,r){let n=this.det3x3(this.b,this.c,this.d,t.b,t.c,t.d,r.b,r.c,r.d);return Math.abs(n)<1e-9?!1:new W(0,this.det3x3(this.a,this.c,this.d,t.a,t.c,t.d,r.a,r.c,r.d)/n,this.det3x3(this.b,this.a,this.d,t.b,t.a,t.d,r.b,r.a,r.d)/n,this.det3x3(this.b,this.c,this.a,t.b,t.c,t.a,r.b,r.c,r.a)/n)}side(t){return t>1e-9?1:t<-1e-9?-1:0}cutface(t){let r=this.a,n=0,l=null;for(let o=0;o<t.length;o++)n|=1<<this.side(t[o].dot(this)-r)+1;if((n&5)===5){l=[];let o=t.map(i=>this.side(i.dot(this)-r));for(let i=-1;i<=1;i+=2){let s=[];for(let a=0;a<t.length;a++){(o[a]===i||o[a]===0)&&s.push(t[a]);let f=(a+1)%t.length;if(o[a]+o[f]===0&&o[a]!==0){let u=t[a].dot(this)-r,g=t[f].dot(this)-r,p=u/(u-g),c=t[a].smul(1-p).sum(t[f].smul(p));s.push(c)}}l.push(s)}}return l}cutfaces(t){let r=[];for(let n=0;n<t.length;n++){let l=t[n],o=this.cutface(l);o?(r.push(o[0]),r.push(o[1])):r.push(l)}return r}faceside(t){let r=this.a;for(let n=0;n<t.length;n++){let l=this.side(t[n].dot(this)-r);if(l!==0)return l}throw new Error("Could not determine side of plane in faceside")}sameplane(t){let r=this.normalize(),n=t.normalize();return r.dist(n)<1e-9||r.dist(n.smul(-1))<1e-9}makecut(t){return new W(t,this.b,this.c,this.d)}}});function Cf(){let e=Math.sqrt(.5);return[new W(e,e,0,0),new W(e,0,e,0)]}function Pf(){return[new W(.5,.5,.5,.5),new W(.5,.5,.5,-.5)]}function Nf(){let e=2*Math.PI/10,t=.5+.3*Math.sqrt(5),r=.5+.1*Math.sqrt(5),n=Math.sqrt(t*t+r*r);return t/=n,r/=n,[new W(Math.cos(e),t*Math.sin(e),r*Math.sin(e),0),new W(.5,.5,.5,.5)]}function Mf(){let e=.16666666666666666+Math.sqrt(5)/6,t=2/3+Math.sqrt(5)/3,r=Math.sqrt(e*e+t*t);e/=r,t/=r;let n=2*Math.PI/6;return[new W(Math.cos(n),e*Math.sin(n),t*Math.sin(n),0),new W(Math.cos(n),-e*Math.sin(n),t*Math.sin(n),0)]}function Gf(){let e=Math.sqrt(.5);return[new W(.5,.5,.5,.5),new W(e,0,0,e)]}function Of(e){let t=[new W(1,0,0,0)];for(let r=0;r<t.length;r++)for(let n=0;n<e.length;n++){let l=e[n].mul(t[r]),o=l.smul(-1),i=!1;for(let s=0;s<t.length;s++)if(l.dist(t[s])<pi||o.dist(t[s])<pi){i=!0;break}i||t.push(l)}return t}function ms(e,t){let r=[],n=[];for(let l=0;l<t.length;l++){let o=e.rotateplane(t[l]),i=!1;for(let s=0;s<r.length;s++)if(o.dist(r[s])<pi){i=!0;break}i||(r.push(o),n.push(t[l]))}return n}function Ls(e){let t=[];for(let r=1;r<e.length;r++)for(let n=r+1;n<e.length;n++){let l=zf(0,r,n,e);if(l){let o=!1;for(let i=0;i<t.length;i++)if(l.dist(t[i])<pi){o=!0;break}o||t.push(l)}}for(;;){let r=!1;for(let n=0;n<t.length;n++){let l=(n+1)%t.length;if(e[0].dot(t[n].cross(t[l]))<0){let o=t[n];t[n]=t[l],t[l]=o,r=!0}}if(!r)break}return t}var pi,Tf=y(()=>{"use strict";gi();pi=1e-9});function ci(e,t){let r=e[0].p.length,n=wf(r),l=[],o=[],i=[],s=[],a=[];function f(c){for(let L=c.p.length-1;L>=0;L--){let m=c.p[L];if(m!==L){if(!l[L][m])return!1;c=c.mul(o[L][m])}}return!0}function u(c,L,m){s[c].push(L),a[c].push(m);for(let d=0;d<l[c].length;d++)l[c][d]&&g(c,l[c][d].mul(L),m+i[c][d])}function g(c,L,m){let d=L.p[c];if(!l[c][d]){l[c][d]=L,o[c][d]=L.inv(),i[c][d]=m;for(let A=0;A<s[c].length;A++)g(c,L.mul(s[c][A]),m+a[c][A]);return}let F=L.mul(o[c][d]);f(F)||u(c-1,F,m+i[c][d])}function p(){l=[],o=[],s=[],i=[],a=[];for(let m=0;m<r;m++)l.push([]),o.push([]),i.push([]),s.push([]),a.push([]),l[m][m]=n,o[m][m]=n,i[m][m]=0;let c=0,L=1n;for(let m=0;m<e.length;m++){u(r-1,e[m],1),L=1n;let d=0,F=0,A=[],U=new Bs;for(let x=0;x<r;x++){let b=0,N=0;for(let C=0;C<r;C++)l[x][C]&&(b++,N+=i[x][C],x!==C&&c++);d+=s[x].length,L*=BigInt(b),b>1&&U.multiply(b);let J=N/b;A.push(J),F+=J}t(\`\${m}: sz \${L} T \${d} sol \${F} none \${c} mults \${U.toString()}\`)}return L}return p()}var Bs,ds=y(()=>{"use strict";oi();Bs=class{constructor(){this.mult=[]}multiply(t){for(let r=2;r*r<=t;r++)for(;t%r===0;)this.mult[r]!==void 0?this.mult[r]++:this.mult[r]=1,t/=r;t>1&&(this.mult[t]!==void 0?this.mult[t]++:this.mult[t]=1)}toString(){let t="";for(let r=0;r<this.mult.length;r++)this.mult[r]!==void 0&&(t!==""&&(t+="*"),t+=r,this.mult[r]>1&&(t+=\`^\${this.mult[r]}\`));return t}}});function mL(e,t){let r=[];for(let n of e)for(let l of t)r.push(l.rotate(n));return r}function dL(){return{4:[["F","D","L","R"]],6:[["F","D","L","U","R"],["R","F","","B",""]],8:[["F","D","L","R"],["D","F","BR",""],["BR","D","","BB"],["BB","BR","U","BL"]],12:[["U","F","","","",""],["F","U","R","C","A","L"],["R","F","","","E",""],["E","R","","BF","",""],["BF","E","BR","BL","I","D"]],20:[["R","C","F","E"],["F","R","L","U"],["L","F","A",""],["E","R","G","I"],["I","E","S","H"],["S","I","J","B"],["B","S","K","D"],["K","B","M","O"],["O","K","P","N"],["P","O","Q",""]]}}function RL(){return{4:{F:"#00ff00",D:"#ffff00",L:"#ff0000",R:"#0000ff"},6:{U:"#ffffff",F:"#00ff00",R:"#ff0000",D:"#ffff00",B:"#0000ff",L:"#ff8000"},8:{U:"#ffffff",F:"#ff0000",R:"#00bb00",D:"#ffff00",BB:"#1122ff",L:"#9524c5",BL:"#ff8800",BR:"#aaaaaa"},12:{U:"#ffffff",F:"#006633",R:"#ff0000",C:"#ffffd0",A:"#3399ff",L:"#660099",E:"#ff66cc",BF:"#99ff00",BR:"#0000ff",BL:"#ffff00",I:"#ff6633",D:"#999999"},20:{R:"#db69f0",C:"#178fde",F:"#23238b",E:"#9cc726",L:"#2c212d",U:"#177fa7",A:"#e0de7f",G:"#2b57c0",I:"#41126b",S:"#4b8c28",H:"#7c098d",J:"#7fe7b4",B:"#85fb74",K:"#3f4bc3",D:"#0ff555",M:"#f1c2c8",O:"#58d340",P:"#c514f2",N:"#14494e",Q:"#8b1be1"}}}function FL(){return{4:[["FLR",[0,1,0]],["F",[0,0,1]]],6:[["U",[0,1,0]],["F",[0,0,1]]],8:[["U",[0,1,0]],["F",[0,0,1]]],12:[["U",[0,1,0]],["F",[0,0,1]]],20:[["GUQMJ",[0,1,0]],["F",[0,0,1]]]}}function mi(e,t){for(let r=0;r<e.length;r++)if(e[r][0].dist(t)<we)return r;throw new Error("Element not found")}function If(){return fi}function Wf(e){return fi[e]}function $l(e){let t=e.split(/ /).filter(Boolean);if(t.length%2===0)return null;let r=t[0];if(r!=="o"&&r!=="c"&&r!=="i"&&r!=="d"&&r!=="t")return null;let n=[];for(let l=1;l<t.length;l+=2){if(t[l]!=="f"&&t[l]!=="v"&&t[l]!=="e")return null;n.push({cutType:t[l],distance:parseFloat(t[l+1])})}return{shape:r,cuts:n}}function hs(e,t={}){let r=$l(e);if(r===null)throw new Error("Could not parse the puzzle description");let n=new to(r,Object.assign({},{allMoves:!0},t));return n.allstickers(),n.genperms(),n}function jf(e,t){return hs(fi[e],t)}function DL(e,t,r){let n=!1;r-t[1]<t[0]&&(e=[e[2],e[3],e[0],e[1]],t=[r-t[1],r-t[0]],n=!0);let l=e[0],o="";if(t[0]===0&&t[1]===r)l=l+"v";else if(t[0]===t[1])t[1]>0&&(o=String(t[1]+1));else if(t[0]===0)l=l.toLowerCase(),t[1]>1&&(o=String(t[1]+1));else throw new Error(\`We only support slice and outer block moves right now. \${t}\`);return[o+l,n]}function AL(e,t){let r=[],n=0;for(;n<e.length;){n>0&&n<e.length&&e[n]==="_"&&n++;let l="";for(let o of t)e.substr(n).startsWith(o[1])&&o[1].length>l.length&&(l=o[1]);if(l!=="")r.push(l),n+=l.length;else throw new Error("Could not split "+e+" into face names.")}return r}function Li(e,t){return[e.b/t,-e.c/t,e.d/t]}function Rs(e,t){let r=[],n=e.length;for(let l=0;l<n;l++){let o=Li(e.get(n-l-1),t);r[3*l]=o[0],r[3*l+1]=o[1],r[3*l+2]=o[2]}return r}var Ar,Vn,we,LL,BL,hL,Kf,Qf,to,Bi,eo=y(()=>{"use strict";Be();pf();fs();us();oi();_f();kf();Tf();gi();ds();Ar=class{constructor(t){this.coords=new Array(t.length*3);for(let r=0;r<t.length;r++)this.coords[3*r]=t[r].b,this.coords[3*r+1]=t[r].c,this.coords[3*r+2]=t[r].d;this.length=t.length}get(t){return new W(0,this.coords[3*t],this.coords[3*t+1],this.coords[3*t+2])}centermass(){let t=0,r=0,n=0;for(let l=0;l<this.length;l++)t+=this.coords[3*l],r+=this.coords[3*l+1],n+=this.coords[3*l+2];return new W(0,t/this.length,r/this.length,n/this.length)}rotate(t){let r=[];for(let n=0;n<this.length;n++)r.push(this.get(n).rotatepoint(t));return new Ar(r)}rotateforward(){let t=[];for(let r=1;r<this.length;r++)t.push(this.get(r));return t.push(this.get(0)),new Ar(t)}},Vn=class{constructor(t,r,n){this.face=t;this.left=r;this.right=n}split(t){let r=t.cutface(this.face);return r!==null&&(this.left===void 0?(this.left=new Vn(r[0]),this.right=new Vn(r[1])):(this.left=this.left?.split(t),this.right=this.right?.split(t))),this}collect(t,r){return this.left===void 0?t.push(new Ar(this.face)):r?(this.left?.collect(t,!1),this.right?.collect(t,!0)):(this.right?.collect(t,!1),this.left?.collect(t,!0)),t}};we=1e-9,LL="PuzzleGeometry 0.1 Copyright 2018 Tomas Rokicki.",BL=!1;hL={4:{v:["DFR","DLF","DRL","FLR"],e:["FR","LF","DF","DL","RD","RL"],c:["DF","FD","RL","LR"]},6:{v:["URF","UBR","ULB","UFL","DFR","DRB","DBL","DLF"],e:["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],c:["UB","LU","FU","RU","BU","DF"]},8:{v:["UBBBRR","URFL","ULBLBB","DBRBBBL","DBLLF","DFRBR"],e:["UL","UBB","UR","BRD","BLD","FD","BRR","FR","FL","BLL","BLBB","BRBB"],c:["BBU","LU","RU","BRD","FD","BLD","DF","UBB"]},12:{v:["URF","UFL","ULBL","UBLBR","UBRR","DEBF","DBFI","DIA","DAC","DCE","LAI","ALF","FCA","CFR","REC","ERBR","BRBFE","BFBRBL","BLIBF","IBLL"],e:["UF","UR","UBR","UBL","UL","ER","EBR","EBF","ED","EC","IBF","IBL","IL","IA","ID","AC","CF","FA","BFBR","BRBL","BLBF","CD","AD","AL","FL","FR","CR","BFD","BRR","BLL"],c:["UF","FU","DBF","BFD","AD","CD","BRU","BLU","LA","RA","EBR","IBL"]},20:{v:["FLPQU","FUGER","FRCAL","HCREI","ISBDH","JSIEG","BSJMK","MQPOK","ONDBK","NOPLA","UQMJG","DNACH"],e:["FU","FL","FR","EG","ER","EI","SJ","SI","SB","KM","KB","KO","PQ","PO","PL","UG","JG","MQ","UQ","HC","HD","ND","NA","JM","CA","AL","CR","HI","DB","NO"],c:["FU","UF","GE","EG","JS","SJ","MK","KM","QP","PQ","LA","AL","RC","CR","IH","HI","BD","DB","ON","NO"]}};Kf=["c","t","o","d","i"],Qf=["f","v","e"];to=class{constructor(t,r){this.puzzleDescription=t;this.cmovesbyslice=[];this.duplicatedFaces=[];this.duplicatedCubies=[];this.fixedCubie=-1;this.net=[];this.colors=[];this.notationMapper=new nn;this.addNotationMapper="";this.setReidOrder=!1;let n="genperms";this.options=new li(r),this.options.verbosity>0&&console.log(this.header("# ")),this.create(t)}create(t){let{shape:r,cuts:n}=t;this.moveplanes=[],this.moveplanes2=[],this.faces=[],this.cubies=[];let l=null;switch(r){case"c":l=Cf();break;case"o":l=Gf();break;case"i":l=Mf();break;case"t":l=Pf();break;case"d":l=Nf();break;default:throw new Error("Bad shape argument: "+r)}this.rotations=Of(l),this.options.verbosity&&console.log("# Rotations: "+this.rotations.length);let o=l[0];this.baseplanerot=ms(o,this.rotations);let i=this.baseplanerot.map(D=>o.rotateplane(D));this.baseplanes=i,this.baseFaceCount=i.length;let s=dL()[i.length];this.net=s,this.colors=RL()[i.length],this.options.verbosity>0&&console.log("# Base planes: "+i.length);let a=Ls(i),f=new W(0,0,0,0);this.options.verbosity>0&&console.log("# Face vertices: "+a.length);let u=i[0].makenormal(),g=a[0].sum(a[1]).makenormal(),p=a[0].makenormal(),c=new W(1,u.b,u.c,u.d);this.options.verbosity>0&&console.log("# Boundary is "+c);let m=ms(c,this.rotations).map(D=>c.rotateplane(D)),d=Ls(m);this.edgedistance=d[0].sum(d[1]).smul(.5).dist(f),this.vertexdistance=d[0].dist(f);let F=[],A=[],U=!1,x=!1,b=!1;for(let D of n){let _=null,T=0;switch(D.cutType){case"f":_=u,T=1,U=!0;break;case"v":_=p,T=this.vertexdistance,b=!0;break;case"e":_=g,T=this.edgedistance,x=!0;break;default:throw new Error("Bad cut argument: "+D.cutType)}F.push(_.makecut(D.distance)),A.push(D.distance<T)}this.options.addRotations&&(U||F.push(u.makecut(10)),b||F.push(p.makecut(10)),x||F.push(g.makecut(10))),this.basefaces=[];for(let D of this.baseplanerot){let _=D.rotateface(d);this.basefaces.push(new Ar(_))}let N=[],J=[],C=[],Q=[],S=d.length;function k(D,_,T){for(let G of D)if(G[0].dist(_)<we){G.push(T);return}D.push([_,T])}for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(d);for(let T=0;T<_.length;T++){let G=(T+1)%_.length,$=_[T].sum(_[G]).smul(.5);k(Q,$,D)}}let P=[];for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(d),T=[];for(let G=0;G<_.length;G++){let $=(G+1)%_.length,se=_[G].sum(_[$]).smul(.5),Ne=Q[mi(Q,se)];if(D===Ne[1])T.push(Ne[2]);else if(D===Ne[2])T.push(Ne[1]);else throw new Error("Could not find edge")}P.push(T)}let w={},E=[];E.push(s[0][0]),w[s[0][0]]=0,E[P[0][0]]=s[0][1],w[s[0][1]]=P[0][0];for(let D of s){let _=D[0],T=w[_];if(T===void 0)throw new Error("Bad edge description; first edge not connected");let G=-1;for(let $=0;$<P[T].length;$++){let se=E[P[T][$]];if(se!==void 0&&se===D[1]){G=$;break}}if(G<0)throw new Error("First element of a net not known");for(let $=2;$<D.length;$++){if(D[$]==="")continue;let se=P[T][($+G-1)%S],Ne=E[se];if(Ne!==void 0&&Ne!==D[$])throw new Error("Face mismatch in net");E[se]=D[$],w[D[$]]=se}}for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(d),T=c.rotateplane(this.baseplanerot[D]),G=E[D];N.push([_,G]),J.push([T,G])}for(let D=0;D<this.baseplanerot.length;D++){let _=this.baseplanerot[D].rotateface(d),T=E[D];for(let G=0;G<_.length;G++){let $=(G+1)%_.length,se=_[G].sum(_[$]).smul(.5),Ne=(G+2)%_.length,hm=_[$].sum(_[Ne]).smul(.5),Fm=mi(Q,se),Dm=mi(Q,hm);k(C,_[$],[T,Dm,Fm])}}this.swizzler=new Kn(N.map(D=>D[1]));let M=this.swizzler.prefixFree?"":"_",j=hL[this.baseFaceCount],q=[];for(let D=0;D<this.baseFaceCount;D++)q[1<<D]=D;{let D=j.v;for(let _ of D){let T=this.swizzler.splitByFaceNames(_),G=0;for(let $ of T)G|=1<<$;q[G]=T[0]}}{let D=j.e;for(let _ of D){let T=this.swizzler.splitByFaceNames(_),G=0;for(let $ of T)G|=1<<$;q[G]=T[0]}}{let D=j.c;for(let _ of D){let T=this.swizzler.splitByFaceNames(_),G=1<<T[0]|1<<this.baseFaceCount;q[G]=T[1]}}for(let D=0;D<Q.length;D++){if(Q[D].length!==3)throw new Error("Bad length in edge names "+Q[D]);let _=Q[D][1],T=Q[D][2],G=E[_],$=E[T],se=1<<_|1<<T;q[se]==_?G=G+M+$:G=$+M+G,Q[D]=[Q[D][0],G]}for(let D=0;D<C.length;D++){let _=0;if(C[D].length<4)throw new Error("Bad length in vertex names");for(let se=1;se<C[D].length;se++)_|=1<<w[C[D][se][0]];let T=q[_],G=-1;for(let se=1;se<C[D].length;se++)T===w[C[D][se][0]]&&(G=se);if(G<0)throw new Error("Internal error; couldn't find face name when fixing corners");let $="";for(let se=1;se<C[D].length;se++){se===1?$=C[D][G][0]:$=$+M+C[D][G][0];for(let Ne=1;Ne<C[D].length;Ne++)if(C[D][G][1]===C[D][Ne][2]){G=Ne;break}}C[D]=[C[D][0],$]}this.markedface=q,this.options.verbosity>1&&(console.log("# Face names: "+N.map(D=>D[1]).join(" ")),console.log("# Edge names: "+Q.map(D=>D[1]).join(" ")),console.log("# Vertex names: "+C.map(D=>D[1]).join(" ")));let ie=[];for(let D of J)ie.push([D[0].makenormal(),D[1],"f"]);for(let D of Q)ie.push([D[0].makenormal(),D[1],"e"]);for(let D of C)ie.push([D[0].makenormal(),D[1],"v"]);this.facenames=N,this.faceplanes=J,this.edgenames=Q,this.vertexnames=C,this.geonormals=ie;let he=ie.map(D=>D[1]);this.swizzler.setGripNames(he),this.options.verbosity>0&&console.log("# Distances: face "+1+" edge "+this.edgedistance+" vertex "+this.vertexdistance);for(let D=0;D<F.length;D++)for(let _ of this.rotations){let T=F[D].rotateplane(_),G=!1;for(let $ of this.moveplanes)if(T.sameplane($)){G=!0;break}G||(this.moveplanes.push(T),A[D]&&this.moveplanes2.push(T))}let be=new Vn(d),Ye=this.moveplanes2.slice(),bt=31;for(let D=0;D<Ye.length;D++){let _=D+Math.floor((Ye.length-D)*(bt/65536));be=be.split(Ye[_]),Ye[_]=Ye[D],bt=(bt*1657+101)%65536}let Le=be.collect([],!0);this.faces=Le,this.options.verbosity>0&&console.log("# Faces is now "+Le.length),this.stickersperface=Le.length;let ht=[],ot=ui(d);for(let D of this.rotations){let _=D.rotateface(d);ot.dist(ui(_))<we&&ht.push(D)}let ct=new Array(Le.length),Ce=[];for(let D=0;D<Le.length;D++){let _=Le[D].centermass();Ce.push([ot.dist(_),_,D])}Ce.sort((D,_)=>D[0]-_[0]);for(let D=0;D<Le.length;D++){let _=Ce[D][2];if(!ct[_]){ct[_]=!0;for(let T of ht){let G=Le[_].rotate(T),$=G.centermass();for(let se=D+1;se<Le.length&&!(Ce[se][0]-Ce[D][0]>we);se++){let Ne=Ce[se][2];if(!ct[Ne]&&$.dist(Ce[se][1])<we){ct[Ne]=!0,Le[Ne]=G;break}}}}}this.shortedge=1e99;for(let D of Le)for(let _=0;_<D.length;_++){let T=(_+1)%D.length,G=D.get(_).dist(D.get(T));G<this.shortedge&&(this.shortedge=G)}this.options.verbosity>0&&console.log("# Short edge is "+this.shortedge),r==="c"&&U&&!x&&!b&&(this.addNotationMapper="NxNxNCubeMapper",this.setReidOrder=!0),r==="c"&&b&&!U&&!x&&(this.addNotationMapper="SkewbMapper"),r==="t"&&(b||U)&&!x&&(this.addNotationMapper="PyraminxOrTetraminxMapper"),r==="o"&&U&&(this.notationMapper=new Qn(this.swizzler,new Kn(["F","D","L","BL","R","U","BR","B"])),!x&&!b&&(this.addNotationMapper="FTOMapper")),r==="d"&&U&&(this.addNotationMapper="MegaminxMapper",this.notationMapper=new Qn(this.swizzler,new Kn(["U","F","L","BL","BR","R","FR","FL","DL","B","DR","D"])))}keyface(t){return this.keyface2(t.centermass())}keyface2(t){let r="",n=String.fromCharCode;for(let l of this.moveplanesets)if(l.length>0){let o=t.dot(l[0]),i=0,s=1;for(;s*2<=l.length;)s*=2;for(;s>0;s>>=1)i+s<=l.length&&o>l[i+s-1].a&&(i+=s);if(i<47)r=r+n(33+i);else if(i<47+47*47)r=r+n(33+47+Math.floor(i/47)-1)+n(33+i%47);else if(i<47+47*47+47*47*47)r=r+n(33+47+Math.floor((i-47)/(47*47)-1))+n(33+47+Math.floor((i-47)/47)%47)+n(33+i%47);else throw Error("Too many slices for cubie encoding")}return r}keyface3(t){let r=t.centermass(),n=[];for(let l of this.moveplanesets)if(l.length>0){let o=r.dot(l[0]),i=0,s=1;for(;s*2<=l.length;)s*=2;for(;s>0;s>>=1)i+s<=l.length&&o>l[i+s-1].a&&(i+=s);n.push(i)}return n}findface(t){let r=this.keyface2(t),n=this.facelisthash.get(r);if(n.length===1)return n[0];for(let l=0;l+1<n.length;l++){let o=this.facelisthash.get(r)[l];if(Math.abs(t.dist(this.facecentermass[o]))<we)return o}return n[n.length-1]}project2d(t,r,n){let l=this.facenames[t][0],o=(r+1)%l.length,i=this.baseplanes[t],s=l[o].sub(l[r]),a=s.len();s=s.normalize();let f=s.cross(i).normalize(),u=n[1].sub(n[0]),g=u.len()/a;u=u.normalize();let p=u.b,c=u.c,L=s.smul(p).sub(f.smul(c)).smul(g),m=f.smul(p).sum(s.smul(c)).smul(g),d=new W(0,n[0].b-L.dot(l[r]),n[0].c-m.dot(l[r]),0);return[L,m,d]}allstickers(){let t="allstickers";this.faces=mL(this.baseplanerot,this.faces),this.options.verbosity>0&&console.log("# Total stickers is now "+this.faces.length),this.facecentermass=new Array(this.faces.length);for(let S=0;S<this.faces.length;S++)this.facecentermass[S]=this.faces[S].centermass();let r=[],n=[];for(let S of this.moveplanes){let k=S.makenormal(),P=!1;for(let w of n)k.sameplane(w.makenormal())&&(P=!0);P||(n.push(k),r.push([]))}for(let S of this.moveplanes2){let k=S.makenormal();for(let P=0;P<n.length;P++)if(k.sameplane(n[P])){r[P].push(S);break}}for(let S=0;S<r.length;S++){let k=r[S].map(w=>w.normalizeplane()),P=n[S];for(let w=0;w<k.length;w++)k[w].makenormal().dist(P)>we&&(k[w]=k[w].smul(-1));k.sort((w,E)=>w.a-E.a),r[S]=k}this.moveplanesets=r,this.moveplanenormals=n;let l=r.map(S=>S.length);this.options.verbosity>0&&console.log("# Move plane sets: "+l);let o=[];for(let S=0;S<r.length;S++)o.push([]);for(let S of this.rotations){if(Math.abs(Math.abs(S.a)-1)<we)continue;let k=S.makenormal();for(let P=0;P<r.length;P++)if(k.sameplane(n[P])){o[P].push(S);break}}this.moverotations=o;for(let S=0;S<o.length;S++){let k=o[S],P=k[0].makenormal();for(let w=0;w<k.length;w++)P.dist(k[w].makenormal())>we&&(k[w]=k[w].smul(-1));k.sort((w,E)=>w.angle()-E.angle()),o[S][0].dot(n[S])<0&&k.reverse()}let i=o.map(S=>1+S.length);this.movesetorders=i;let s=[],a="?";for(let S=0;S<r.length;S++){let k=n[S],P=null,w=null;for(let E of this.geonormals){let M=k.dot(E[0]);Math.abs(M-1)<we?(w=[E[1],E[2]],a=E[2]):Math.abs(M+1)<we&&(P=[E[1],E[2]],a=E[2])}if(w===null||P===null)throw new Error("Saw positive or negative sides as null");s.push([w[0],w[1],P[0],P[1],1+r[S].length]),this.addNotationMapper==="NxNxNCubeMapper"&&a==="f"&&(this.notationMapper=new Jl(1+r[S].length),this.addNotationMapper=""),this.addNotationMapper==="SkewbMapper"&&r[0].length===1&&(this.notationMapper=new Xl(this.swizzler),this.addNotationMapper=""),this.addNotationMapper==="PyraminxOrTetraminxMapper"&&(r[0].length===2&&r[0][0].a===.333333333333333&&r[0][1].a===1.66666666666667?(this.notationMapper=new jn(this.swizzler),this.addNotationMapper=""):(this.notationMapper=new Yl(this.swizzler),this.addNotationMapper="")),this.addNotationMapper==="MegaminxMapper"&&a==="f"&&(1+r[S].length===3&&(this.notationMapper=new Zl(this.notationMapper)),this.addNotationMapper=""),this.addNotationMapper==="FTOMapper"&&a==="f"&&(1+r[S].length===3&&(this.notationMapper=new Hl(this.notationMapper,this.swizzler)),this.addNotationMapper="")}this.movesetgeos=s;let f=new Map,u=this.faces;for(let S=0;S<u.length;S++){let k=u[S],P=this.keyface(k);if(!f.get(P))f.set(P,[S]);else{let w=f.get(P);if(w.push(S),w.length===this.baseFaceCount){this.options.verbosity>0&&console.log("# Splitting core.");for(let E=0;E<w.length;E++){let M=P+" "+E;f.set(M,[w[E]])}}}}this.facelisthash=f,this.options.verbosity>0&&console.log("# Cubies: "+f.size);let g=[],p=[],c=[];for(let S of f.values())if(S.length!==this.baseFaceCount){if(S.length>1){let k=S.map(j=>u[j].centermass()),P=ui(k);for(let j=0;S.length>2;j++){let q=!1;for(let ie=0;ie<S.length;ie++){let he=(ie+1)%S.length;if(P.dot(k[ie].cross(k[he]))<0){let be=k[ie];k[ie]=k[he],k[he]=be;let Ye=S[ie];S[ie]=S[he],S[he]=Ye,q=!0}}if(!q)break;if(j>1e3)throw new Error("Bad epsilon math; too close to border")}let w=0;for(let j of S)w|=1<<Math.floor(j/this.stickersperface);let E=this.markedface[w],M=-1;for(let j=0;j<S.length;j++)Math.floor(S[j]/this.stickersperface)===E&&(M=j);if(M<0)throw new Error("Could not find marked face in list");if(M!==0){let j=S.slice();for(let q=0;q<S.length;q++)S[q]=j[(M+q)%S.length]}}for(let k=0;k<S.length;k++){let P=S[k];p[P]=g.length,c[P]=k}g.push(S)}this.cubies=g,this.facetocubie=p,this.facetoord=c;let L=["?","CENTERS","EDGES","CORNERS","C4RNER","C5RNER"],m=[],d=[0,0,0,0,0,0],F=[],A=[],U=0,x=[],b=[],N=[],J=[],C=S=>g[S].map(k=>this.getfaceindex(k)).join(" "),Q=[];for(let S=0;S<g.length;S++){let k=g[S];if(k.length===0||A[S])continue;let P={},w=0;N.push(0),Q.push([]);let E=k.length,M=d[E]++,j=L[E];(j===void 0||E===this.baseFaceCount)&&(j="CORE"),j=j+(M===0?"":M+1),m[U]=j,F[U]=E;let q=[S],ie=0;for(A[S]=!0;ie<q.length;){let he=q[ie++],be=C(he);if((k.length>1||P[be]===void 0)&&(P[be]=w++),J[he]=P[be],x[he]=U,Q[U].push(he),b[he]=N[U]++,q.length<this.rotations.length){let Ye=this.facecentermass[g[he][0]];for(let bt of o){let Le=this.facetocubie[this.findface(Ye.rotatepoint(bt[0]))];A[Le]||(q.push(Le),A[Le]=!0)}}}U++}if(this.setReidOrder&&4<=this.stickersperface&&this.stickersperface<=9){let S=[["UF","UR","UB","UL","DF","DR","DB","DL","FR","FL","BR","BL"],["UFR","URB","UBL","ULF","DRF","DFL","DLB","DBR"],["U","L","F","R","B","D"]],k={};for(let P of S)for(let w=0;w<P.length;w++){let E=0;for(let M=0;M<P[w].length;M++)E|=1<<P[w].charCodeAt(M)-65;k[E]=w}for(let P of Q)for(let w of P){let E=0;for(let M of g[w])E|=1<<this.facenames[this.getfaceindex(M)][1].charCodeAt(0)-65;b[w]=k[E]}}if(this.cubiesetnums=x,this.cubieordnums=b,this.cubiesetnames=m,this.cubieords=N,this.orbitoris=F,this.cubievaluemap=J,this.cubiesetcubies=Q,this.options.fixedPieceType!==null){for(let S=0;S<g.length;S++)if(this.options.fixedPieceType==="v"&&g[S].length>2||this.options.fixedPieceType==="e"&&g[S].length===2||this.options.fixedPieceType==="f"&&g[S].length===1){this.fixedCubie=S;break}if(this.fixedCubie<0)throw new Error("Could not find a cubie of type "+this.options.fixedPieceType+" to fix.")}this.options.verbosity>0&&console.log("# Cubie orbit sizes "+N)}unswizzle(t){let r=this.notationMapper.notationToInternal(t);return r===null?null:r.modified({family:this.swizzler.unswizzle(r.family)})}stringToBlockMove(t){let r=RegExp("^(([0-9]+)-)?([0-9]+)?([^0-9]+)([0-9]+'?)?$"),n=t.match(r);if(n===null)throw new Error("Bad move passed "+t);let l=n[4],o,i;if(n[2]!==void 0){if(n[3]===void 0)throw new Error("Missing second number in range");o=parseInt(n[2],10)}n[3]!==void 0&&(i=parseInt(n[3],10));let s="1",a=1;return n[5]!==void 0&&(s=n[5],s[0]==="'"&&(s="-"+s.substring(1)),a=parseInt(s,10)),new B(new z(l,i,o),a)}parseMove(t){let r=this.notationMapper.notationToInternal(t);if(r===null)throw new Error("Bad move "+t.family);t=r;let n=t.family,l=!1;if(n.endsWith("v")&&n[0]<="Z"){if(t.innerLayer!==void 0||t.outerLayer!==void 0)throw new Error("Cannot use a prefix with full cube rotations");n=n.slice(0,-1),l=!0}n.endsWith("w")&&n[0]<="Z"&&(n=n.slice(0,-1).toLowerCase());let o,i=-1,s=this.swizzler.unswizzle(n),a=!1;for(let g=0;g<this.movesetgeos.length;g++){let p=this.movesetgeos[g];s===p[0]&&(a=!0,o=p,i=g),s===p[2]&&(a=!1,o=p,i=g)}let f=1,u=1;if(n.toUpperCase()!==n&&(u=2),o===void 0)throw new Error("Bad grip in move "+t.family);if(t.outerLayer!==void 0&&(f=t.outerLayer),t.innerLayer!==void 0&&(t.outerLayer===void 0?(u=t.innerLayer,n<="Z"?f=u:f=1):u=t.innerLayer),f--,u--,l&&(f=0,u=this.moveplanesets[i].length),f<0||f>this.moveplanesets[i].length||u<0||u>this.moveplanesets[i].length)throw new Error("Bad slice spec "+f+" "+u+" vs "+this.moveplanesets[i].length);if(!BL&&f===0&&u===this.moveplanesets[i].length&&!l)throw new Error("! full puzzle rotations must be specified with v suffix.");return[void 0,i,f,u,a,t.amount]}parsemove(t){let r=this.parseMove(this.stringToBlockMove(t));return r[0]=t,r}genperms(){let t="genperms";if(this.cmovesbyslice.length>0)return;let r=[];if(this.options.orientCenters){for(let n=0;n<this.cubies.length;n++)if(this.cubies[n].length===1){let l=this.cubies[n][0],o=this.getfaceindex(l),i=this.basefaces[o].centermass();if(i.dist(this.facecentermass[l])<we){let s=1<<o|1<<this.baseFaceCount,a=this.markedface[s],f=this.baseplanes[a].makenormal(),u=-1,g=-1;for(let L=0;L<this.faces[l].length;L++){let m=this.faces[l].get(L),d=f.dot(m.sub(i));d>u&&(u=d,g=L)}let p=(g+1)%this.faces[l].length;if(Math.abs(f.dot(this.faces[l].get(p).sub(i))-u)<we&&(g=p),g!=0){let L=[];for(let m=0;m<this.faces[l].length;m++)L.push(this.faces[l].get((m+g)%this.faces[l].length));this.faces[l]=new Ar(L)}let c=this.basefaces[o].length;for(let L=1;L<c;L++)this.cubies[n].push(this.cubies[n][L-1]);this.duplicatedFaces[l]=c,this.duplicatedCubies[n]=c,this.orbitoris[this.cubiesetnums[n]]=c}}}for(let n=0;n<this.moveplanesets.length;n++){let l=this.moveplanesets[n],o=[],i=[l.length+1,0],s=1;for(;s*2<=l.length;)s*=2;for(let u=0;u<this.faces.length;u++){let g=0;if(l.length>0){let p=this.facecentermass[u].dot(l[0]);for(let c=s;c>0;c>>=1)g+c<=l.length&&p>l[g+c-1].a&&(g+=c);g=l.length-g}for(o.push(g);i.length<=g;)i.push(0);i[g]++}let a=new Array(i.length);for(let u=0;u<i.length;u++)a[u]=[];let f=[];for(let u=0;u<this.faces.length;u++){if(o[u]<0)continue;let g=[this.facetocubie[u],this.facetoord[u]],p=this.facecentermass[u],c=p,L=u,m=o[L];for(;;){o[L]=-1;let d=p.rotatepoint(this.moverotations[n][0]);if(d.dist(c)<we)break;L=this.findface(d),g.push(this.facetocubie[L],this.facetoord[L]),p=d}if(g.length>2&&this.options.orientCenters&&(this.cubies[g[0]].length===1||this.duplicatedCubies[g[0]]>1)&&this.facecentermass[u].dist(this.basefaces[this.getfaceindex(u)].centermass())<we){let d=this.faces[this.cubies[g[0]][0]];for(let F=0;F<g.length;F+=2){let A=this.faces[this.cubies[g[F]][0]],U=-1;for(let x=0;x<d.length;x++)if(A.get(x).dist(d.get(0))<we){U=x;break}if(U<0)throw new Error("Couldn't find rotation of center faces; ignoring for now.");g[F+1]=U,d=d.rotate(this.moverotations[n][0])}}if(g.length===2&&this.options.orientCenters)for(let d=1;d<this.movesetorders[n];d++)m===0?g.push(g[0],d):g.push(g[0],(this.movesetorders[n]-d)%this.movesetorders[n]);if(g.length>2&&!f[g[0]]){if(g.length!==2*this.movesetorders[n])throw new Error("Bad length in perm gen");for(let d of g)a[m].push(d)}for(let d=0;d<g.length;d+=2)f[g[d]]=!0}for(let u=0;u<a.length;u++)a[u]=a[u].slice();r.push(a)}if(this.cmovesbyslice=r,this.options.moveList){let n=[];for(let l of this.options.moveList)n.push(this.parsemove(l));this.parsedmovelist=n}this.facelisthash.clear(),this.facecentermass=[]}getboundarygeometry(){return{baseplanes:this.baseplanes,facenames:this.facenames,faceplanes:this.faceplanes,vertexnames:this.vertexnames,edgenames:this.edgenames,geonormals:this.geonormals}}getmovesets(t){let r=this.moveplanesets[t].length,n=[];if(this.parsedmovelist!==void 0)for(let l of this.parsedmovelist)l[1]===t&&(l[4]?n.push([l[2],l[3]]):n.push([r-l[3],r-l[2]]),n.push(l[5]));else if(this.options.vertexMoves&&!this.options.allMoves){let l=this.movesetgeos[t];if(l[1]!==l[3])for(let o=0;o<r;o++)l[1]!=="v"?(this.options.outerBlockMoves?n.push([o+1,r]):n.push([o+1]),n.push(1)):(this.options.outerBlockMoves?n.push([0,o]):n.push([o,o]),n.push(1))}else for(let l=0;l<=r;l++)!this.options.allMoves&&l+l===r||(this.options.outerBlockMoves?l+l>r?n.push([l,r]):n.push([0,l]):n.push([l,l]),n.push(1));if(this.fixedCubie>=0){let l=this.keyface3(this.faces[this.cubies[this.fixedCubie][0]])[t],o=[];for(let i=0;i<n.length;i+=2){let s=n[i];if(l>=s[0]&&l<=s[1])if(s[0]===0)s=[s[1]+1,r];else if(r===s[1])s=[0,s[0]-1];else throw Error("fixed cubie option would disconnect move");let a=!1;for(let f=0;f<o.length;f+=2)if(o[f][0]===s[0]&&o[f][1]===s[1]&&o[f+1]===n[i+1]){a=!0;break}a||(o.push(s),o.push(n[i+1]))}n=o}return n}graybyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&(this.options.grayCenters||!this.options.includeCenterOrbits)||r===2&&(this.options.grayEdges||!this.options.includeEdgeOrbits)||r>2&&(this.options.grayCorners||!this.options.includeCornerOrbits)}skipbyori(t){let r=this.cubies[t].length;return this.duplicatedCubies[t]&&(r=1),r===1&&!this.options.includeCenterOrbits||r===2&&!this.options.includeEdgeOrbits||r>2&&!this.options.includeCornerOrbits}skipcubie(t){return this.skipbyori(t)}header(t){return t+LL+\`
\`+t+\`
\`}writegap(){let t=this.getOrbitsDef(!1),r=[],n=[];for(let o=0;o<t.moveops.length;o++){let i="M_"+ii(this.notationMapper,t.movenames[o]),s=!1;i[i.length-1]==="'"&&(i=i.substring(0,i.length-1),s=!0),n.push(i),s?r.push(i+":="+t.moveops[o].toPerm().inv().toGap()+";"):r.push(i+":="+t.moveops[o].toPerm().toGap()+";")}r.push("Gen:=["),r.push(n.join(",")),r.push("];");let l=t.solved.identicalPieces();return r.push("ip:=["+l.map(o=>"["+o.map(i=>i+1).join(",")+"]").join(",")+"];"),r.push("# Size(Group(Gen));"),r.push("# Size(Stabilizer(Group(Gen), ip, OnTuplesSets));"),r.push(""),this.header("# ")+r.join(\`
\`)}writeksolve(t="PuzzleGeometryPuzzle"){let r=this.getOrbitsDef(!1);return this.header("# ")+r.toKsolve(t,this.notationMapper).join(\`
\`)}getKPuzzleDefinition(t=!0,r=!0){let l=this.getOrbitsDef(t,r).toKPuzzleDefinition(r);if(l.experimentalPuzzleDescription=this.puzzleDescription,!l)throw new Error("Missing definition!");return l}getMoveFromBits(t,r,n,l,o,i){let s=[],a=[],f=[];for(let p of this.cubieords)a.push(Wt(p)),f.push(Dr(p));for(let p=t[0];p<=t[1];p++){let c=l[p];for(let L=0;L<c.length;L+=2*i){let m=c.slice(L,L+2*i),d=this.cubiesetnums[m[0]];for(let U=0;U<m.length;U+=2)m[U]=this.cubieordnums[m[U]];let F=2,A=3;n&&(F=m.length-2,A=m.length-1),a[d]===Wt(this.cubieords[d])&&(a[d]=a[d].slice(),this.orbitoris[d]>1&&!this.options.fixedOrientation&&(f[d]=f[d].slice()));for(let U=0;U<m.length;U+=2)a[d][m[(U+F)%m.length]]=m[U],this.orbitoris[d]>1&&!this.options.fixedOrientation&&(f[d][m[U]]=(m[(U+A)%m.length]-m[(U+1)%m.length]+2*this.orbitoris[d])%this.orbitoris[d])}}let u=new Kt(Wt(24),Dr(24),1);for(let p=0;p<this.cubiesetnames.length;p++)if(!(o&&!o[p]))if(this.orbitoris[p]===1||this.options.fixedOrientation)a[p]===Wt(u.perm.length)?(a[p]!==u.perm&&(u=new Kt(a[p],f[p],1)),s.push(u)):s.push(new Kt(a[p],f[p],1));else{let c=new Array(f[p].length);for(let L=0;L<a[p].length;L++)c[L]=f[p][a[p][L]];s.push(new Kt(a[p],c,this.orbitoris[p]))}let g=new tr(s);return r!==1&&(g=g.mulScalar(r)),g}omitSet(t){for(let r of this.options.excludeOrbits)if(r===t)return!0;return!1}diffmvsets(t,r,n,l){for(let o=0;o<t.length;o+=2){let i=!1;for(let s=0;!i&&s<r.length;s+=2)l?t[o][0]+r[s][1]===n&&t[o][1]+r[s][0]===n&&t[o+1]===r[s+1]&&(i=!0):t[o][0]===r[s][0]&&t[o][1]===r[s][1]&&t[o+1]===r[s+1]&&(i=!0);if(!i)return!0}return!1}getOrbitsDef(t,r=!0){let n=[];if(t)for(let m=0;m<this.cubiesetnames.length;m++)n.push(1);let l=[],o=[],i=[],s=[];for(let m=0;m<this.moveplanesets.length;m++){let d=this.getmovesets(m);i.push(d),this.options.addRotations?s.push(1):s.push(0)}let a=[];for(let m=0;m<this.moveplanesets.length;m++){let d=this.moveplanesets[m].length,F=!1,A=i[m];for(let U=0;U<A.length;U+=2)A[U][0]===0&&A[U][1]===d&&(F=!0);a[m]=F}if(this.options.moveList&&this.options.addRotations){for(let m=0;m<this.moverotations.length;m++)s[m]=0;for(let m=0;m<this.moveplanesets.length;m++){if(a[m]){s[m]=3;continue}for(let d=0;d<this.moverotations.length;d++){let F=this.moveplanenormals[m];for(let A=1;A*2<=this.movesetorders[d];A++){if(F=F.rotatepoint(this.moverotations[d][0]),s[d]&A)continue;let U=-1,x=!1;for(let N=0;N<this.moveplanenormals.length;N++)if(F.dist(this.moveplanenormals[N])<we){U=N;break}else if(F.dist(this.moveplanenormals[N].smul(-1))<we){U=N,x=!0;break}if(U<0)throw new Error("Could not find rotation");let b=i[U];(b.length!==i[m].length||this.moveplanesets[m].length!==this.moveplanesets[U].length||this.diffmvsets(b,i[m],this.moveplanesets[U].length,x))&&(s[d]|=A)}}}for(let m=0;m<this.moverotations.length;m++)if(s[m]===0)s[m]=1;else if(s[m]===1)this.movesetorders[m]>3?s[m]=2:s[m]=0;else if(s[m]===3)s[m]=0;else throw new Error("Impossible addrot val")}for(let m=0;m<this.moveplanesets.length;m++)s[m]!==0&&!a[m]&&(i[m].push([0,this.moveplanesets[m].length]),i[m].push(s[m]));for(let m=0;m<this.moveplanesets.length;m++){let d=i[m],F=this.movesetorders[m];for(let x=0;x<d.length;x+=2)for(let b=0;b<x;b+=2)if(d[x][0]===d[b][0]&&d[x][1]===d[b][1])throw new Error("Redundant moves in moveset.");let A=[];for(let x=0;x<d.length;x+=2)for(let b=d[x][0];b<=d[x][1];b++)A[b]=1;let U=this.cmovesbyslice[m];for(let x=0;x<U.length;x++){if(A[x]!==1)continue;let b=U[x];for(let N=0;N<b.length;N+=2*F){if(this.skipcubie(b[N]))continue;let J=this.cubiesetnums[b[N]];n[J]=1}}}for(let m=0;m<this.cubiesetnames.length;m++)if(!!n[m]){if(this.omitSet(this.cubiesetnames[m])){n[m]=0;continue}l.push(this.cubiesetnames[m]),o.push(new qn(this.cubieords[m],this.options.fixedOrientation?1:this.orbitoris[m]))}let f=[];for(let m=0;m<this.cubiesetnames.length;m++){if(!n[m]||this.omitSet(this.cubiesetnames[m]))continue;let d=[],F=[];for(let A=0;A<this.cubieords[m];A++){if(t)d.push(A);else{let U=this.cubiesetcubies[m][A];d.push(this.cubievaluemap[U])}F.push(0)}f.push(new Kt(d,F,this.options.fixedOrientation?1:this.orbitoris[m]))}let u=[],g=[],p=[],c=[];if(r)for(let m=0;m<this.moveplanesets.length;m++){let F=this.moveplanesets[m].length,A=i[m],U=this.movesetgeos[m];for(let x=0;x<A.length;x+=2){let b=A[x],N,J=!1;if(this.parsedmovelist!==void 0)for(let Q of this.parsedmovelist){if(Q[1]!==m)continue;let S=[];Q[4]?S=[Q[2],Q[3]]:S=[F-Q[3],F-Q[2]],S[0]===b[0]&&S[1]===b[1]&&(N=Q[0],J=!Q[4])}if(N)u.push(N),g.push(!0);else{let Q=DL(U,b,F);J=Q[1];let S=Q[0];A[x+1]===1?u.push(S):u.push(S+A[x+1]),g.push(!1)}c.push(b[0]===0&&b[1]===F);let C=this.getMoveFromBits(b,A[x+1],J,this.cmovesbyslice[m],n,this.movesetorders[m]);p.push(C)}}let L=new ln(l,o,new on(f),u,p,c,g);return this.options.optimizeOrbits&&(L=L.optimize()),this.options.scrambleAmount!==0&&L.scramble(this.options.scrambleAmount),L}getScramble(t=0){let r=this.getOrbitsDef(!1);return r.transformToKTransformationData(r.getScrambleTransformation(t))}getMovesAsPerms(){return this.getOrbitsDef(!1).moveops.map(t=>t.toPerm())}showcanon(t){vf(this.getOrbitsDef(!1),t)}getsolved(){let t=[];for(let r=0;r<this.baseFaceCount;r++)for(let n=0;n<this.stickersperface;n++)t.push(r);return new Bt(t)}getOrientationRotation(t){let[r,[n,l,o]]=t[0],i=new W(0,n,-l,o),[s,[a,f,u]]=t[1],g=new W(0,a,-f,u),p=null,c=null,L=this.swizzler.unswizzle(r),m=this.swizzler.unswizzle(s);for(let U of this.geonormals)L===U[1]&&(p=U[0]),m===U[1]&&(c=U[0]);if(!p)throw new Error("Could not find feature "+r);if(!c)throw new Error("Could not find feature "+s);let d=p.pointrotation(i);return c.rotatepoint(d).unproject(i).pointrotation(g.unproject(i)).mul(d)}getInitial3DRotation(){let t=this.baseFaceCount,r=null;if(this.options.puzzleOrientation?r=this.options.puzzleOrientation:this.options.puzzleOrientations&&(r=this.options.puzzleOrientations[t]),r||(r=FL()[t]),!r)throw new Error("No default orientation?");return this.getOrientationRotation(r)}generate2dmapping(t=800,r=500,n=10,l=!1,o=.92){t-=2*n,r-=2*n;function i(w,E){let M=w[1][0]-w[0][0],j=w[1][1]-w[0][1],q=2*Math.PI/E,ie=Math.cos(q),he=Math.sin(q);for(let be=2;be<E;be++){let Ye=M*ie+j*he;j=j*ie-M*he,M=Ye,w.push([w[be-1][0]+M,w[be-1][1]+j])}}this.genperms();let f=this.getboundarygeometry().facenames[0][0].length,u=this.net;if(u===null)throw new Error("No net?");let g={},p=0,c=0,L=1,m=0;g[u[0][0]]=[[1,0],[0,0]],i(g[u[0][0]],f);for(let w of u){let E=w[0];if(!g[E])throw new Error("Bad edge description; first edge not connected.");for(let M=1;M<w.length;M++){let j=w[M];j===""||g[j]||(g[j]=[g[E][M%f],g[E][(M+f-1)%f]],i(g[j],f))}}for(let w in g){let E=g[w];for(let M of E)p=Math.min(p,M[0]),L=Math.max(L,M[0]),c=Math.min(c,M[1]),m=Math.max(m,M[1])}let d=Math.min(t/(L-p),r/(m-c)),F=.5*(t-d*(L+p)),A=.5*(r-d*(m+c)),U={},x=this.getboundarygeometry(),b={},N=[[d+F,A],[F,A]];b[u[0][0]]=N,i(b[u[0][0]],f),U[this.facenames[0][1]]=this.project2d(0,0,[new W(0,N[0][0],N[0][1],0),new W(0,N[1][0],N[1][1],0)]);let J=[];J[0]=0;for(let w of u){let E=w[0];if(!b[E])throw new Error("Bad edge description; first edge not connected.");let M=-1;for(let q=0;q<x.facenames.length;q++)if(E===x.facenames[q][1]){M=q;break}if(M<0)throw new Error("Could not find first face name "+E);let j=x.facenames[M][0];for(let q=1;q<w.length;q++){let ie=w[q];if(ie===""||b[ie])continue;b[ie]=[b[E][q%f],b[E][(q+f-1)%f]],i(b[ie],f);let he=J[M],be=j[(he+q)%f].sum(j[(he+q+f-1)%f]).smul(.5),Ye=mi(x.edgenames,be),bt=x.edgenames[Ye][1],Le=AL(bt,this.facenames),ht=Le[E===Le[0]?1:0],ot=-1;for(let Ce=0;Ce<x.facenames.length;Ce++)if(ht===x.facenames[Ce][1]){ot=Ce;break}if(ot<0)throw new Error("Could not find second face name");let ct=x.facenames[ot][0];for(let Ce=0;Ce<ct.length;Ce++)if(ct[Ce].sum(ct[(Ce+1)%f]).smul(.5).dist(be)<=we){let _=b[E][(q+f-1)%f],T=b[E][q%f];J[ot]=Ce,U[ht]=this.project2d(ot,Ce,[new W(0,T[0],T[1],0),new W(0,_[0],_[1],0)]);break}}}let C=0,Q=0,S=this.getInitial3DRotation();for(let w of this.faces){l&&(w=w.rotate(S));for(let E=0;E<w.length;E++)C=Math.max(C,Math.abs(w.get(E).b)),Q=Math.max(Q,Math.abs(w.get(E).c))}let k=Math.min(r/Q/2,(t-n)/C/4);return(w,E)=>{if(l){E=E.rotatepoint(S);let M=.5*n+.25*t,j=this.baseplanes[w].rotateplane(S).d<0?1:-1;return[n+t*.5+j*(M-E.b*k),n+r*.5+E.c*k]}else{let M=U[this.facenames[w][1]];return[n+o*E.dot(M[0])+M[2].b,n+r-o*E.dot(M[1])-M[2].c]}}}generatesvg(t=800,r=500,n=10,l=!1){let o=this.generate2dmapping(t,r,n,l);function i(p,c,L){return'<polygon id="'+p+'" class="sticker" style="fill: '+L+'" points="'+c.map(m=>m[0]+" "+m[1]).join(" ")+\`"/>
\`}let s=this.getsolved(),a=[],f=[];for(let p=0;p<this.baseFaceCount;p++)a[p]=this.colors[this.facenames[p][1]];for(let p=0;p<this.faces.length;p++){let c=this.faces[p],L=Math.floor(p/this.stickersperface),m=[];for(let d=0;d<c.length;d++)m.push(o(L,c.get(d)));f.push(m)}let u=[];for(let p=0;p<this.baseFaceCount;p++){u.push("<g>"),u.push("<title>"+this.facenames[p][1]+\`</title>
\`);for(let c=0;c<this.stickersperface;c++){let L=p*this.stickersperface+c,m=this.facetocubie[L],d=this.facetoord[L],F=this.cubiesetnums[m],A=this.cubieordnums[m],U=this.graybyori(m)?"#808080":a[s.p[L]],x=this.cubiesetnames[F]+"-l"+A+"-o"+d;if(u.push(i(x,f[L],U)),this.duplicatedFaces[L])for(let b=1;b<this.duplicatedFaces[L];b++)x=this.cubiesetnames[F]+"-l"+A+"-o"+b,u.push(i(x,f[L],U))}u.push("</g>")}return\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
\`+u.join("")+"</svg>"}get3d(t){let r=[],n=this.getInitial3DRotation(),l=[],o=.52*this.basefaces[0].get(0).len();for(let f=0;f<this.basefaces.length;f++){let u=this.basefaces[f].rotate(n),g=this.facenames[f][1];l.push({coords:Rs(u,o),name:g})}for(let f=0;f<this.faces.length;f++){let u=Math.floor(f/this.stickersperface),g=this.facetocubie[f],p=this.facetoord[f],c=this.cubiesetnums[g],L=this.cubieordnums[g],m=this.graybyori(g)?"#808080":this.colors[this.facenames[u][1]];t?.stickerColors&&(m=t.stickerColors[f]);let d=this.faces[f].rotate(n);r.push({coords:Rs(d,o),color:m,orbit:this.cubiesetnames[c],ord:L,ori:p,face:u});let F=d;if(this.duplicatedFaces[f]){let A=F.length/this.duplicatedFaces[f];for(let U=1;U<this.duplicatedFaces[f];U++){for(let x=0;x<A;x++)F=F.rotateforward();r.push({coords:Rs(F,o),color:m,orbit:this.cubiesetnames[c],ord:L,ori:U,face:u,isDup:!0})}}}let i=[];for(let f=0;f<this.movesetgeos.length;f++){let u=this.movesetgeos[f],g=this.movesetorders[f];for(let p of this.geonormals)u[0]===p[1]&&u[1]===p[2]&&(i.push({coordinates:Li(p[0].rotatepoint(n),1),quantumMove:new B(u[0]),order:g}),i.push({coordinates:Li(p[0].rotatepoint(n).smul(-1),1),quantumMove:new B(u[2]),order:g}))}let s=this.generate2dmapping(2880,2160,0,!1,1),a=function(){let f=n.invrot();return function(u,g){let p=new W(0,g[0]*o,-g[1]*o,g[2]*o);p=p.rotatepoint(f);let c=s(u,p);return c[0]/=2880,c[1]=1-c[1]/2160,c}}().bind(this);return{stickers:r,faces:l,axis:i,unswizzle:this.unswizzle.bind(this),notationMapper:this.notationMapper,textureMapper:{getuv:a}}}getGeoNormal(t){let r=this.getInitial3DRotation(),n=this.swizzler.unswizzle(t);for(let l of this.geonormals)if(n===l[1]){let o=Li(l[0].rotatepoint(r),1);return Math.abs(o[0])<we&&Math.abs(o[2])<we&&(o[0]=0,o[2]=1e-6),o}}getfaceindex(t){let r=this.stickersperface;return Math.floor(t/r)}textForTwizzleExplorer(){return\`Faces \${this.baseplanerot.length}
Stickers per face \${this.stickersperface}
Short edge \${this.shortedge}
Cubies \${this.cubies.length}
Edge distance \${this.edgedistance}
Vertex distance \${this.vertexdistance}\`}writeSchreierSims(t){let n=this.getOrbitsDef(!1).reassemblySize();t(\`Reassembly size is \${n}\`);let l=ci(this.getMovesAsPerms(),t),o=n/l;t(\`Ratio is \${o}\`)}},Bi=class{constructor(t,r){this.pg=t;this.orbitNames=r.orbitnames}lookupMove(t){let r=this.pg.parseMove(t);if(this.pg.parsedmovelist){let i=!1;for(let s of this.pg.parsedmovelist)s[1]===r[1]&&s[2]===r[2]&&s[3]===r[3]&&s[4]===r[4]&&(i=!0);if(!i)return null}let n=[r[2],r[3]];if(!r[4]){let i=this.pg.moveplanesets[r[1]].length;n=[i-r[3],i-r[2]]}let l=this.pg.getMoveFromBits(n,r[5],!r[4],this.pg.cmovesbyslice[r[1]],void 0,this.pg.movesetorders[r[1]]);return ln.transformToKTransformationData(this.orbitNames,l)}}});var Hn={};mt(Hn,{EXPERIMENTAL_PUZZLE_BASE_SHAPES:()=>Kf,EXPERIMENTAL_PUZZLE_CUT_TYPES:()=>Qf,ExperimentalPGNotation:()=>Bi,PuzzleGeometry:()=>to,Quat:()=>W,getPG3DNamedPuzzles:()=>If,getPuzzleDescriptionString:()=>Wf,getPuzzleGeometryByDesc:()=>hs,getPuzzleGeometryByName:()=>jf,parseOptions:()=>bf,parsePuzzleDescription:()=>$l,schreierSims:()=>ci});var Zn=y(()=>{"use strict";eo();us();gi();ds();eo();eo()});async function sn(e){return(await Promise.resolve().then(()=>(Zn(),Hn))).getPuzzleGeometryByName(e,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function yL(e,t){let r=await e,n=r.getKPuzzleDefinition(!0);n.name=t;let l=await Promise.resolve().then(()=>(Zn(),Hn)),o=new l.ExperimentalPGNotation(r,r.getOrbitsDef(!0));return new ye(n,{experimentalPGNotation:o})}var di,Ri,hi,dt,rr,nr=y(()=>{"use strict";He();Vl();Et();dt=class{constructor(t){ee(this,di,void 0);ee(this,Ri,void 0);ee(this,hi,void 0);this.pgId=t.pgID,this.id=t.id,this.fullName=t.fullName,this.inventedBy=t.inventedBy,this.inventionYear=t.inventionYear}pg(){return R(this,di)??V(this,di,sn(this.pgId??this.id))}kpuzzle(){return R(this,Ri)??V(this,Ri,yL(this.pg(),this.id))}svg(){return R(this,hi)??V(this,hi,(async()=>(await this.pg()).generatesvg())())}};di=new WeakMap,Ri=new WeakMap,hi=new WeakMap;rr=class extends dt{constructor(){super(...arguments);this.stickerings=Wn}appearance(r){return er(this,r)}}});var _t,qf=y(()=>{"use strict";_t={name:"2x2x2",orbits:{CORNERS:{numPieces:8,numOrientations:3}},startStateData:{CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{U:{CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},y:{CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}},x:{CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},L:{CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]}},F:{CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]}},R:{CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]}},B:{CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]}},D:{CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}},z:{CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]}}}};_t.moves.Rv=_t.moves.x;_t.moves.Uv=_t.moves.y;_t.moves.Fv=_t.moves.z;_t.moves.Lv={CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]}};_t.moves.Dv={CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]}};_t.moves.Bv={CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]}}});var Vf,Hf=y(()=>{"use strict";Vf=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 520 394" preserveAspectRatio="xMidYMid meet">
  <title>2x2x2</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="puzzle" transform="translate(5, 5) scale(60)">
    <use id="CORNERS-l0-o0" xlink:href="#sticker" transform="translate(3.2, 1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" xlink:href="#sticker" transform="translate(4.4, 2.2)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#sticker" transform="translate(3.2, 2.2)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" xlink:href="#sticker" transform="translate(3.2, 0)" style="fill: white"/>
    <use id="CORNERS-l1-o1" xlink:href="#sticker" transform="translate(6.6, 2.2)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" xlink:href="#sticker" transform="translate(5.4, 2.2)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#sticker" transform="translate(2.2, 0)" style="fill: white"/>
    <use id="CORNERS-l2-o1" xlink:href="#sticker" transform="translate(0, 2.2)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" xlink:href="#sticker" transform="translate(7.6, 2.2)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" xlink:href="#sticker" transform="translate(2.2, 1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" xlink:href="#sticker" transform="translate(2.2, 2.2)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" xlink:href="#sticker" transform="translate(1, 2.2)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" xlink:href="#sticker" transform="translate(3.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" transform="translate(3.2, 3.2)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" transform="translate(4.4, 3.2)" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" transform="translate(2.2, 4.4)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" transform="translate(1, 3.2)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" transform="translate(2.2, 3.2)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" transform="translate(2.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" transform="translate(7.6, 3.2)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker" transform="translate(0, 3.2)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" transform="translate(3.2, 5.4)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" transform="translate(5.4, 3.2)" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" transform="translate(6.6, 3.2)" style="fill: #26f"/>
  </g>

</svg>\`});var Zf,Jf=y(()=>{"use strict";Zf={name:"Clock",orbits:{DIALS:{numPieces:18,numOrientations:12},FACES:{numPieces:18,numOrientations:1},FRAME:{numPieces:1,numOrientations:2}},startStateData:{DIALS:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{pieces:[0],orientation:[0]}},moves:{UR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,0,0,0,0,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},U_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,0,0,0,-1,0,-1,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},R_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,1,1,0,1,1,0,1,1,-1,0,0,0,0,0,-1,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},D_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},L_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,0,1,1,0,1,1,0,0,0,-1,0,0,0,0,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},ALL_PLUS_:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[1,1,1,1,1,1,1,1,1,-1,0,-1,0,0,0,-1,0,-1]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},y2:{DIALS:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[9,10,11,12,13,14,15,16,17,0,1,2,3,4,5,6,7,8],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[1]}},UL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},UR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DL:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}},DR:{DIALS:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FACES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},FRAME:{permutation:[0],orientation:[0]}}}}});var Yf,Xf=y(()=>{"use strict";Yf=\`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
  <title>clock</title>
  <defs>
    <g id="hand" transform="translate(-20, -20)">
      <path d="M19.9995197,2.22079449 L23.8791657,19.0203611 C23.9580836,19.3338406 24,19.6620253 24,20 C24,22.209139 22.209139,24 20,24 C17.790861,24 16,22.209139 16,20 C16,19.6620253 16.0419164,19.3338406 16.1208343,19.0203611 L19.9995197,2.22079449 Z"></path>
    </g>
    <g id="cardinal_hours" style="fill: #FFFFFF">
      <circle cx="0" cy="24" r="2"></circle>
      <circle cx="-24" cy="0" r="2"></circle>
      <circle cx="24" cy="0" r="2"></circle>
      <circle cx="0" cy="-24" r="2"></circle>
    </g>
    <g id="face_hours">
      <g>
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g transform="rotate(30)">
        <use xlink:href="#cardinal_hours"/>
      </g>
      <g  transform="rotate(60)">
        <use xlink:href="#cardinal_hours"/>
      </g>
    </g>
    <g id="pegs" stroke="#000000" style="fill: #FFD000">
      <circle id="PEG4" cx="90" cy="90" r="10"></circle>
      <circle id="PEG3" cx="30" cy="90" r="10"></circle>
      <circle id="PEG2" cx="90" cy="30" r="10"></circle>
      <circle id="PEG1" cx="30" cy="30" r="10"></circle>
    </g>
    <g id="frame" transform="translate(-24, -24)">
      <path stroke="#000000" d="M120,20 C137.495665,20 153.941932,24.4930026 168.247913,32.3881183 C171.855881,30.8514056 175.828512,30 180,30 C196.568542,30 210,43.4314575 210,60 C210,64.1714878 209.148594,68.1441192 207.610077,71.7536009 C215.506997,86.0580678 220,102.504335 220,120 C220,137.495665 215.506997,153.941932 207.611882,168.247913 C209.148594,171.855881 210,175.828512 210,180 C210,196.568542 196.568542,210 180,210 C175.828512,210 171.855881,209.148594 168.246399,207.610077 C153.941932,215.506997 137.495665,220 120,220 C102.504335,220 86.0580678,215.506997 71.7520869,207.611882 C68.1441192,209.148594 64.1714878,210 60,210 C43.4314575,210 30,196.568542 30,180 C30,175.828512 30.8514056,171.855881 32.3899234,168.246399 C24.4930026,153.941932 20,137.495665 20,120 C20,102.504335 24.4930026,86.0580678 32.3881183,71.7520869 C30.8514056,68.1441192 30,64.1714878 30,60 C30,43.4314575 43.4314575,30 60,30 C64.1714878,30 68.1441192,30.8514056 71.7536009,32.3899234 C86.0580678,24.4930026 102.504335,20 120,20 Z"></path>
    </g>
  </defs>
  <g>
    <g transform="translate(24, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o0" style="fill: #0C5093"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l0-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l0-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l0-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l0-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l0-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l0-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l0-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l0-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l0-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l0-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l0-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l0-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l0-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l1-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l1-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l1-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l1-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l1-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l1-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l1-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l1-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l1-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l1-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l1-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l1-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l1-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l2-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l2-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l2-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l2-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l2-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l2-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l2-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l2-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l2-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l2-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l2-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l2-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l2-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l3-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l3-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l3-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l3-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l3-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l3-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l3-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l3-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l3-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l3-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l3-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l3-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l3-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l4-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l4-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l4-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l4-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l4-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l4-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l4-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l4-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l4-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l4-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l4-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l4-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l4-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l5-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l5-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l5-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l5-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l5-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l5-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l5-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l5-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l5-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l5-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l5-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l5-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l5-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l6-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l6-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l6-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l6-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l6-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l6-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l6-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l6-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l6-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l6-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l6-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l6-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l6-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l7-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l7-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l7-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l7-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l7-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l7-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l7-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l7-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l7-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l7-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l7-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l7-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l7-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l8-o0" stroke="#000000" style="fill: #90B8DF" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l8-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l8-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l8-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l8-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l8-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l8-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l8-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l8-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l8-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l8-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l8-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l8-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
    <g transform="translate(264, 24)">
      <use xlink:href="#frame" id="FRAME-l0-o1" style="fill: #90B8DF"/>
      <use xlink:href="#pegs" transform="translate(36, 36)"/>
      <g transform="translate(36, 36)">
        <circle id="FACES-l9-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l9-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l9-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l9-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l9-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l9-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l9-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l9-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l9-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l9-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l9-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l9-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l9-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 36)">
        <circle id="FACES-l10-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l10-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l10-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l10-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l10-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l10-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l10-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l10-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l10-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l10-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l10-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l10-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l10-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 36)">
        <circle id="FACES-l11-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l11-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l11-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l11-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l11-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l11-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l11-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l11-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l11-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l11-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l11-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l11-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l11-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 96)">
        <circle id="FACES-l12-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l12-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l12-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l12-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l12-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l12-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l12-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l12-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l12-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l12-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l12-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l12-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l12-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 96)">
        <circle id="FACES-l13-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l13-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l13-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l13-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l13-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l13-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l13-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l13-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l13-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l13-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l13-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l13-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l13-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 96)">
        <circle id="FACES-l14-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l14-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l14-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l14-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l14-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l14-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l14-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l14-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l14-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l14-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l14-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l14-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l14-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(36, 156)">
        <circle id="FACES-l15-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l15-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l15-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l15-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l15-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l15-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l15-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l15-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l15-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l15-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l15-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l15-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l15-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(96, 156)">
        <circle id="FACES-l16-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l16-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l16-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l16-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l16-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l16-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l16-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l16-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l16-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l16-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l16-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l16-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l16-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
      <g transform="translate(156, 156)">
        <circle id="FACES-l17-o0" stroke="#000000" style="fill: #0C5093" r="20"></circle>
        <use xlink:href="#face_hours"/>
        <g>
          <use id="DIALS-l17-o0"  xlink:href="#hand" transform="rotate(0)" style="fill: #FFD000"/>
          <use id="DIALS-l17-o1"  xlink:href="#hand" transform="rotate(30)" style="fill: #0000"/>
          <use id="DIALS-l17-o2"  xlink:href="#hand" transform="rotate(60)" style="fill: #0000"/>
          <use id="DIALS-l17-o3"  xlink:href="#hand" transform="rotate(90)" style="fill: #0000"/>
          <use id="DIALS-l17-o4"  xlink:href="#hand" transform="rotate(120)" style="fill: #0000"/>
          <use id="DIALS-l17-o5"  xlink:href="#hand" transform="rotate(150)" style="fill: #0000"/>
          <use id="DIALS-l17-o6"  xlink:href="#hand" transform="rotate(180)" style="fill: #0000"/>
          <use id="DIALS-l17-o7"  xlink:href="#hand" transform="rotate(210)" style="fill: #0000"/>
          <use id="DIALS-l17-o8"  xlink:href="#hand" transform="rotate(240)" style="fill: #0000"/>
          <use id="DIALS-l17-o9"  xlink:href="#hand" transform="rotate(270)" style="fill: #0000"/>
          <use id="DIALS-l17-o10" xlink:href="#hand" transform="rotate(300)" style="fill: #0000"/>
          <use id="DIALS-l17-o11" xlink:href="#hand" transform="rotate(330)" style="fill: #0000"/>
        </g>
      </g>
    </g>
  </g>
</svg>\`});var $f,e1=y(()=>{"use strict";$f=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-20 -20 546 480" preserveAspectRatio="xMidYMid meet">
  <defs>
  </defs>
  <title>pyraminx</title>
  <defs>
    <g id="stickerA" transform="scale(1, 0.577350269)">
      <path
         d="m 0,1.732050808 1,-1.732050808 1,1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
    <g id="stickerV" transform="scale(1, 0.577350269)">
      <path
         d="m 0,0 1,1.732050808 1,-1.732050808 z"
         stroke="black" stroke-width="0.04px" stroke-linecap="butt" stroke-linejoin="round"
      />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10   -->
<!--        | | | | | | | | | | |    -->
<!--    0 - L L L L L F R R R R R    -->
<!--    1 -   L L L F F F R R R      -->
<!--    2 -     L F F F F F R        -->
<!--    3 -       D D D D D          -->
<!--    4 -         D D D            -->
<!--    5 -           D              -->

  <g id="puzzle" transform="translate(5, 5) scale(40, 69.28203232)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" xlink:href="#stickerV" transform="translate(5.2, 1.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l0-o1" xlink:href="#stickerA" transform="translate(3, 0)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#stickerA" transform="translate(7.4, 0)" style="fill: blue"/>

    <use id="CORNERS-l3-o0" xlink:href="#stickerA" transform="translate(4.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l3-o1" xlink:href="#stickerA" transform="translate(2, 1)" style="fill: red"/>
    <use id="CORNERS-l3-o2" xlink:href="#stickerV" transform="translate(4.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS-l2-o0" xlink:href="#stickerA" transform="translate(6.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS-l2-o1" xlink:href="#stickerV" transform="translate(6.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS-l2-o2" xlink:href="#stickerA" transform="translate(8.4, 1)" style="fill: blue"/>

    <use id="CORNERS-l1-o1" xlink:href="#stickerA" transform="translate(9.4, 0)" style="fill: blue"/>
    <use id="CORNERS-l1-o2" xlink:href="#stickerA" transform="translate(1, 0)" style="fill: red"/>
    <use id="CORNERS-l1-o0" xlink:href="#stickerA" transform="translate(5.2, 4.2)" style="fill: yellow"/>

    <!-- "TIPS" -->
    <!-- CORNERS2 -->
    <use id="CORNERS2-l0-o0" xlink:href="#stickerA" transform="translate(5.2, 0.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l0-o1" xlink:href="#stickerV" transform="translate(4, 0)" style="fill: red"/>
    <use id="CORNERS2-l0-o2" xlink:href="#stickerV" transform="translate(6.4, 0)" style="fill: blue"/>

    <use id="CORNERS2-l3-o0" xlink:href="#stickerV" transform="translate(3.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l3-o1" xlink:href="#stickerV" transform="translate(2, 2)" style="fill: red"/>
    <use id="CORNERS2-l3-o2" xlink:href="#stickerA" transform="translate(3.2, 2.066666667)" style="fill: limegreen"/>

    <use id="CORNERS2-l2-o0" xlink:href="#stickerV" transform="translate(7.2, 3.2)" style="fill: yellow"/>
    <use id="CORNERS2-l2-o1" xlink:href="#stickerA" transform="translate(7.2, 2.066666667)" style="fill: limegreen"/>
    <use id="CORNERS2-l2-o2" xlink:href="#stickerV" transform="translate(8.4, 2)" style="fill: blue"/>

    <use id="CORNERS2-l1-o1" xlink:href="#stickerV" transform="translate(10.4,0)" style="fill: blue"/>
    <use id="CORNERS2-l1-o2" xlink:href="#stickerV" transform="translate(0, 0)" style="fill: red"/>
    <use id="CORNERS2-l1-o0" xlink:href="#stickerV" transform="translate(5.2, 5.2)" style="fill: yellow"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0" xlink:href="#stickerV" transform="translate(3, 1)" style="fill: red"/>
    <use id="EDGES-l0-o1" xlink:href="#stickerA" transform="translate(4.2, 1.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#stickerA" transform="translate(6.2, 1.066666667)" style="fill: limegreen"/>
    <use id="EDGES-l5-o1" xlink:href="#stickerV" transform="translate(7.4, 1)" style="fill: blue"/>

    <use id="EDGES-l1-o0" xlink:href="#stickerV" transform="translate(8.4, 0)" style="fill: blue"/>
    <use id="EDGES-l1-o1" xlink:href="#stickerV" transform="translate(2, 0)" style="fill: red"/>

    <use id="EDGES-l2-o0" xlink:href="#stickerV" transform="translate(5.2, 3.2)" style="fill: yellow"/>
    <use id="EDGES-l2-o1" xlink:href="#stickerA" transform="translate(5.2, 2.066666667)" style="fill: limegreen"/>

    <use id="EDGES-l3-o0" xlink:href="#stickerV" transform="translate(9.4, 1)" style="fill: blue"/>
    <use id="EDGES-l3-o1" xlink:href="#stickerV" transform="translate(6.2, 4.2)" style="fill: yellow"/>

    <use id="EDGES-l4-o0" xlink:href="#stickerV" transform="translate(4.2, 4.2)" style="fill: yellow"/>
    <use id="EDGES-l4-o1" xlink:href="#stickerV" transform="translate(1, 1)" style="fill: red"/>
  </g>

</svg>\`});var t1,r1=y(()=>{"use strict";t1={name:"Square-1",orbits:{WEDGES:{numPieces:24,numOrientations:9},EQUATOR:{numPieces:2,numOrientations:6}},startStateData:{WEDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{pieces:[0,1],orientation:[0,0]}},moves:{U_SQ_:{WEDGES:{permutation:[11,0,1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},D_SQ_:{WEDGES:{permutation:[0,1,2,3,4,5,6,7,8,9,10,11,23,12,13,14,15,16,17,18,19,20,21,22],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,0]}},_SLASH_:{WEDGES:{permutation:[0,1,2,3,4,5,12,13,14,15,16,17,6,7,8,9,10,11,18,19,20,21,22,23],orientation:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},EQUATOR:{permutation:[0,1],orientation:[0,3]}}}}});var n1,l1=y(()=>{"use strict";n1=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="360px" height="552px" viewBox="0 0 360 552" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
    <title>sq1-fancy</title>
    <desc>Created with Sketch.</desc>
    <!-- stroke="none" -->
    <g id="sq1-fancy" stroke="#888" stroke-width="0.25" fill="none" fill-rule="evenodd">
        <g id="EQUATOR" transform="translate(24.000000, 264.000000)">
            <rect id="EQUATOR-l1-o3" style="fill: red" x="168" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o4" style="fill: red" x="192" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o5" style="fill: limegreen" x="216" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o2" style="fill: limegreen" x="240" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o1" style="fill: limegreen" x="264" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l1-o0" style="fill: orange" x="288" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o3" style="fill: orange" x="0" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o4" style="fill: orange" x="24" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o5" style="fill: limegreen" x="48" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o2" style="fill: limegreen" x="72" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o1" style="fill: limegreen" x="96" y="0" width="24" height="24"></rect>
            <rect id="EQUATOR-l0-o0" style="fill: red" x="120" y="0" width="24" height="24"></rect>
        </g>
        <g id="BOTTOM" transform="translate(41.000000, 257.000000)" stroke-linejoin="round">
            <g id="WEDGES-23" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l23-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l23-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l23-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l23-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l23-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l23-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l23-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l23-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-22" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l22-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l22-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l22-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l22-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l22-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l22-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l22-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l22-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-21" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l21-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l21-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l21-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l21-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l21-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l21-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l21-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l21-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-20" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l20-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l20-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l20-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l20-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l20-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l20-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l20-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l20-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-19" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l19-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l19-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l19-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l19-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l19-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l19-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l19-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l19-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-18" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l18-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l18-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l18-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l18-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l18-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l18-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l18-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l18-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-17" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l17-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l17-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l17-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l17-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l17-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l17-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l17-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l17-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-16" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l16-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l16-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l16-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l16-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l16-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l16-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l16-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l16-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-15" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l15-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l15-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l15-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l15-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l15-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l15-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l15-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l15-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-14" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l14-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l14-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l14-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l14-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l14-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l14-o3" style="fill: white" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l14-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l14-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-13" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l13-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l13-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l13-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l13-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l13-o4" style="fill: white" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l13-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l13-o2" style="fill: white" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l13-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-12" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l12-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l12-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l12-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l12-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l12-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l12-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l12-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o1" style="fill: white" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l12-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="TOP" transform="translate(41.000000, -31.000000)" stroke-linejoin="round">
            <g id="WEDGES-11" transform="translate(154.588457, 244.315353) scale(-1, -1) rotate(150.000000) translate(-154.588457, -244.315353) translate(106.588457, 178.315353)">
                <polygon id="WEDGES-l11-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l11-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l11-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l11-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l11-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l11-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l11-o2" style="fill: red" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l11-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-10" transform="translate(196.315353, 237.726896) scale(-1, -1) rotate(120.000000) translate(-196.315353, -237.726896) translate(148.315353, 171.726896)">
                <polygon id="WEDGES-l10-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l10-o7" style="fill: red" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l10-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l10-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l10-o4" style="fill: red" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l10-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l10-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l10-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-9" transform="translate(229.157677, 211.157677) scale(-1, -1) rotate(90.000000) translate(-229.157677, -211.157677) translate(181.157677, 145.157677)">
                <polygon id="WEDGES-l9-o8" style="fill: limegreen" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l9-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l9-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l9-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l9-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l9-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l9-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l9-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-8" transform="translate(244.315353, 171.726896) scale(-1, -1) rotate(60.000000) translate(-244.315353, -171.726896) translate(196.315353, 105.726896)">
                <polygon id="WEDGES-l8-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l8-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l8-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l8-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l8-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l8-o3" style="fill: limegreen" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l8-o2" style="fill: limegreen" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l8-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-7" transform="translate(237.726896, 130.000000) scale(-1, -1) rotate(30.000000) translate(-237.726896, -130.000000) translate(189.726896, 64.000000)">
                <polygon id="WEDGES-l7-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l7-o7" style="fill: limegreen" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l7-o6" style="fill: limegreen" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l7-o5" style="fill: limegreen" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l7-o4" style="fill: limegreen" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l7-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l7-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l7-o0" style="fill: limegreen" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-6" transform="translate(211.157677, 97.157677) scale(-1, -1) translate(-211.157677, -97.157677) translate(163.157677, 31.157677)">
                <polygon id="WEDGES-l6-o8" style="fill: orange" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l6-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l6-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l6-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l6-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l6-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l6-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l6-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-5" transform="translate(171.726896, 82.000000) rotate(150.000000) translate(-171.726896, -82.000000) translate(123.726896, 16.000000)">
                <polygon id="WEDGES-l5-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l5-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l5-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l5-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l5-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l5-o3" style="fill: orange" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l5-o2" style="fill: orange" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l5-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-4" transform="translate(130.000000, 88.588457) rotate(120.000000) translate(-130.000000, -88.588457) translate(82.000000, 22.588457)">
                <polygon id="WEDGES-l4-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l4-o7" style="fill: orange" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l4-o6" style="fill: orange" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l4-o5" style="fill: orange" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l4-o4" style="fill: orange" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l4-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l4-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l4-o0" style="fill: orange" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-3" transform="translate(97.157677, 115.157677) rotate(90.000000) translate(-97.157677, -115.157677) translate(49.157677, 49.157677)">
                <polygon id="WEDGES-l3-o8" style="fill: blue" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l3-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l3-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l3-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l3-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l3-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l3-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l3-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-2" transform="translate(82.000000, 154.588457) rotate(60.000000) translate(-82.000000, -154.588457) translate(34.000000, 88.588457)">
                <polygon id="WEDGES-l2-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l2-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l2-o6" style="fill: #D8D8D8" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l2-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l2-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l2-o3" style="fill: blue" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l2-o2" style="fill: blue" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l2-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-1" transform="translate(88.588457, 196.315353) rotate(30.000000) translate(-88.588457, -196.315353) translate(40.588457, 130.315353)">
                <polygon id="WEDGES-l1-o8" style="fill: #D8D8D8" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l1-o7" style="fill: blue" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l1-o6" style="fill: blue" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l1-o5" style="fill: blue" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l1-o4" style="fill: blue" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l1-o3" style="fill: yellow" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l1-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l1-o0" style="fill: blue" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
            <g id="WEDGES-0" transform="translate(67.157677, 163.157677)">
                <polygon id="WEDGES-l0-o8" style="fill: red" points="25.723 70.277 40.574 95.999 -2.27373675e-13 96"></polygon>
                <polygon id="WEDGES-l0-o7" style="fill: #D8D8D8" points="70.2768775 96 60.8615612 131.138439 40.5741225 95.9988775"></polygon>
                <polygon id="WEDGES-l0-o6" style="fill: red" points="70.2768775 96 40.574 95.999 25.7231225 70.2768775"></polygon>
                <polygon id="WEDGES-l0-o5" style="fill: red" points="48.0001225 47.9995 68.287 47.9995 78.4307806 65.5692194"></polygon>
                <polygon id="WEDGES-l0-o4" style="fill: yellow" points="60.8615 35.1385 68.287 47.9995 48 48"></polygon>
                <polygon id="WEDGES-l0-o3" style="fill: red" points="83.1384388 48 78.4307806 65.5692194 68.2870612 47.9994388"></polygon>
                <polygon id="WEDGES-l0-o2" style="fill: yellow" points="83.1384388 48 68.287 47.9995 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o1" style="fill: yellow" points="96 0 83.1384388 48 60.8615612 35.1384388"></polygon>
                <polygon id="WEDGES-l0-o0" style="fill: red" points="70.2768775 96 25.7231225 70.2768775 48.0001225 47.9995 78.4307806 65.5692194"></polygon>
            </g>
        </g>
        <g id="DIAGONALS" transform="translate(168.861561, 1.019238)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <line x1="0" y1="287.842323" x2="70.2768775" y2="550.119201" id="BOTTOM"></line>
            <line x1="0.15767665" y1="262.276878" x2="70.4345542" y2="2.27488928e-16" id="TOP"></line>
        </g>
    </g>
</svg>\`});var yr={};mt(yr,{clockJSON:()=>Zf,clockSVG:()=>Yf,cube2x2x2JSON:()=>_t,cube2x2x2SVG:()=>Vf,pyraminxSVG:()=>$f,sq1HyperOrbitJSON:()=>t1,sq1HyperOrbitSVG:()=>n1});var Ur=y(()=>{"use strict";qf();Hf();Jf();Xf();e1();r1();l1()});var ro,o1=y(()=>{"use strict";He();nr();Et();Vl();ro={id:"2x2x2",fullName:"2\\xD72\\xD72 Cube",kpuzzle:de(async()=>new ye((await Promise.resolve().then(()=>(Ur(),yr))).cube2x2x2JSON)),svg:async()=>(await Promise.resolve().then(()=>(Ur(),yr))).cube2x2x2SVG,pg:de(async()=>sn("2x2x2")),appearance:e=>er(ro,e),stickerings:Wn}});var Fe,i1=y(()=>{"use strict";Fe={name:"3x3x3",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3},CENTERS:{numPieces:6,numOrientations:4}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientation:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientation:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientation:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientation:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientation:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientation:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientation:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientation:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientation:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientation:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientation:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientation:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientation:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[0,0,0,0,0,1]}}}};Fe.moves.Uw=Fe.moves.u;Fe.moves.Lw=Fe.moves.l;Fe.moves.Fw=Fe.moves.f;Fe.moves.Rw=Fe.moves.r;Fe.moves.Bw=Fe.moves.b;Fe.moves.Dw=Fe.moves.d;Fe.moves.Rv=Fe.moves.x;Fe.moves.Uv=Fe.moves.y;Fe.moves.Fv=Fe.moves.z;Fe.moves.Lv={EDGES:{permutation:[2,10,6,11,0,8,4,9,1,3,5,7],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[1,7,6,2,0,3,5,4],orientation:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[4,1,0,3,5,2],orientation:[2,1,0,3,2,0]}};Fe.moves.Dv={EDGES:{permutation:[3,0,1,2,7,4,5,6,9,11,8,10],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[3,0,1,2,5,6,7,4],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientation:[3,0,0,0,0,1]}};Fe.moves.Bv={EDGES:{permutation:[8,5,10,1,9,7,11,3,4,0,6,2],orientation:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[4,7,1,0,5,3,2,6],orientation:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientation:[3,3,3,3,1,3]}}});function Fs(e){let t=e.stateData.CENTERS.pieces[0],r=e.stateData.CENTERS.pieces[5],n=e.stateData.CENTERS.pieces[1],l=n;return t<n&&l--,r<n&&l--,[t,l]}function a1(){if(!UL){let e=["","z","x","z'","x'","x2"].map(r=>v.fromString(r)),t=new v("y");for(let r of e){let n=Fi.algToTransformation(r);for(let l=0;l<4;l++){n=n.applyAlg(t);let[o,i]=Fs(n.toKState());s1[o][i]=n.invert()}}}return s1}function f1(e){let[t,r]=Fs(e),n=a1()[t][r];return e.applyTransformation(n)}function Ds(e,t){return t.ignorePuzzleOrientation&&(e=f1(e)),t.ignoreCenterOrientation&&(e=new ge(e.kpuzzle,{EDGES:e.stateData.EDGES,CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!e.experimentalToTransformation()?.isIdentityTransformation()}var s1,UL,As=y(()=>{"use strict";Be();He();ys();s1=new Array(6).fill(0).map(()=>new Array(6)),UL=!1});var u1=y(()=>{"use strict";He()});var Fi,ys=y(()=>{"use strict";He();i1();As();As();os();u1();ni();Fi=new ye(Fe);Fe.experimentalIsStateSolved=Ds});var SL,g1=y(()=>{"use strict";SL=\`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN"
       "http://www.w3.org/TR/2001/REC-SVG-20050904/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 518 392" preserveAspectRatio="xMidYMid meet">
  <title>3x3x3</title>
  <defs>
    <g id="sticker">
        <rect x="0" y="0" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>

<!--        0 1 2 3 4 5 6 7 8 9 10 11  -->
<!--        | | | | | | | | | | | |<-  -->
<!--    0 -       . . .                -->
<!--    1 -       . . .                -->
<!--    2 -       . . .                -->
<!--    3 - . . . . . . . . . . . .    -->
<!--    4 - . . . . . . . . . . . .    -->
<!--    5 - . . . . . . . . . . . .    -->
<!--    6 -       . . .                -->
<!--    7 -       . . .                -->
<!--    8 -       . . .                -->

  <g id="puzzle" transform="translate(5,5) scale(40)">
    <!-- CORNERS -->
    <use id="CORNERS-l0-o0" xlink:href="#sticker" transform="translate(5.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l0-o1" xlink:href="#sticker" transform="translate(6.5,3.3)" style="fill: red"/>
    <use id="CORNERS-l0-o2" xlink:href="#sticker" transform="translate(5.3,3.3)" style="fill: limegreen"/>

    <use id="CORNERS-l1-o0" xlink:href="#sticker" transform="translate(5.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l1-o1" xlink:href="#sticker" transform="translate(9.7,3.3)" style="fill: #26f"/>
    <use id="CORNERS-l1-o2" xlink:href="#sticker" transform="translate(8.5,3.3)" style="fill: red"/>

    <use id="CORNERS-l2-o0" xlink:href="#sticker" transform="translate(3.3,0.1)" style="fill: white"/>
    <use id="CORNERS-l2-o1" xlink:href="#sticker" transform="translate(0.1,3.3)" style="fill: orange"/>
    <use id="CORNERS-l2-o2" xlink:href="#sticker" transform="translate(11.7,3.3)" style="fill: #26f"/>

    <use id="CORNERS-l3-o0" xlink:href="#sticker" transform="translate(3.3,2.1)" style="fill: white"/>
    <use id="CORNERS-l3-o1" xlink:href="#sticker" transform="translate(3.3,3.3)" style="fill: limegreen"/>
    <use id="CORNERS-l3-o2" xlink:href="#sticker" transform="translate(2.1,3.3)" style="fill: orange"/>

    <use id="CORNERS-l4-o0" xlink:href="#sticker" transform="translate(5.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" transform="translate(5.3,5.3)" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" transform="translate(6.5,5.3)" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" transform="translate(3.3,6.5)" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" transform="translate(2.1,5.3)" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" transform="translate(3.3,5.3)" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" transform="translate(3.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" transform="translate(11.7,5.3)" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker" transform="translate(0.1,5.3)"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" transform="translate(5.3,8.5)" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" transform="translate(8.5,5.3)" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" transform="translate(9.7,5.3)" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l0-o0"  xlink:href="#sticker" transform="translate(4.3,2.1)" style="fill: white"/>
    <use id="EDGES-l0-o1"  xlink:href="#sticker" transform="translate(4.3,3.3)" style="fill: limegreen"/>

    <use id="EDGES-l1-o0"  xlink:href="#sticker" transform="translate(5.3,1.1)" style="fill: white"/>
    <use id="EDGES-l1-o1"  xlink:href="#sticker" transform="translate(7.5,3.3)" style="fill: red"/>

    <use id="EDGES-l2-o0"  xlink:href="#sticker" transform="translate(4.3,0.1)" style="fill: white"/>
    <use id="EDGES-l2-o1"  xlink:href="#sticker" transform="translate(10.7,3.3)" style="fill: #26f"/>

    <use id="EDGES-l3-o0"  xlink:href="#sticker" transform="translate(3.3,1.1)" style="fill: white"/>
    <use id="EDGES-l3-o1"  xlink:href="#sticker" transform="translate(1.1,3.3)" style="fill: orange"/>

    <use id="EDGES-l4-o0"  xlink:href="#sticker" transform="translate(4.3,6.5)" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  xlink:href="#sticker" transform="translate(4.3,5.3)" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#sticker" transform="translate(5.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l5-o1" xlink:href="#sticker" transform="translate(7.5,5.3)" style="fill: red"/>

    <use id="EDGES-l6-o0" xlink:href="#sticker" transform="translate(4.3,8.5)" style="fill: yellow"/>
    <use id="EDGES-l6-o1" xlink:href="#sticker" transform="translate(10.7,5.3)" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  xlink:href="#sticker" transform="translate(3.3,7.5)" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  xlink:href="#sticker" transform="translate(1.1,5.3)" style="fill: orange"/>

    <use id="EDGES-l8-o0"  xlink:href="#sticker" transform="translate(5.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  xlink:href="#sticker" transform="translate(6.5,4.3)" style="fill: red"/>

    <use id="EDGES-l9-o0"  xlink:href="#sticker" transform="translate(3.3,4.3)" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  xlink:href="#sticker" transform="translate(2.1,4.3)" style="fill: orange"/>

    <use id="EDGES-l10-o0" xlink:href="#sticker" transform="translate(9.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l10-o1" xlink:href="#sticker" transform="translate(8.5,4.3)" style="fill: red"/>

    <use id="EDGES-l11-o0" xlink:href="#sticker" transform="translate(11.7,4.3)" style="fill: #26f"/>
    <use id="EDGES-l11-o1" xlink:href="#sticker" transform="translate(0.1,4.3)" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l0-o0" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o1" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o2" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>
    <use id="CENTERS-l0-o3" xlink:href="#sticker" transform="translate(4.3,1.1)" style="fill: white"/>

    <use id="CENTERS-l1-o0" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o1" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o2" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>
    <use id="CENTERS-l1-o3" xlink:href="#sticker" transform="translate(1.1,4.3)" style="fill: orange"/>

    <use id="CENTERS-l2-o0" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" xlink:href="#sticker" transform="translate(4.3,4.3)" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o1" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o2" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>
    <use id="CENTERS-l3-o3" xlink:href="#sticker" transform="translate(7.5,4.3)" style="fill: red"/>

    <use id="CENTERS-l4-o0" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" xlink:href="#sticker" transform="translate(10.7,4.3)" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" xlink:href="#sticker" transform="translate(4.3,7.5)" style="fill: yellow"/>
  </g>

</svg>\`});var xL,p1=y(()=>{"use strict";xL=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="288px" height="288px" viewBox="-16 -16 288 288" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>3x3x3 LL</title>
  <defs>
    <g id="sticker">
        <rect x="-10" y="-10" width="1" height="1" stroke="black" stroke-width="0.04px" />
    </g>
  </defs>
  <g id="3x3x3-LL" stroke="none" stroke-width="4" style="none" stroke-linejoin="round">
    <rect id="CENTERS-l0-o0" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o1" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o2" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>
    <rect id="CENTERS-l0-o3" stroke="#000000" style="fill: white" x="96" y="96" width="64" height="64"></rect>

    <rect    id="CORNERS-l0-o0" stroke="#000000" style="fill: white" x="160" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l0-o1" stroke="#000000" style="fill: red" points="224 160 252 160 252 252 224 224"></polygon>
    <polygon id="CORNERS-l0-o2" stroke="#000000" style="fill: limegreen" transform="translate(206, 238) scale(1, -1) rotate(-90) translate(-206, -238) " points="192 192 220 192 220 284 192 256"></polygon>
    <rect    id="CORNERS-l1-o0" stroke="#000000" style="fill: white" x="160" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l1-o1" stroke="#000000" style="fill: #26f" transform="translate(206, 18) rotate(-90) translate(-206, -18) " points="192 -28 220 -28 220 64 192 36"></polygon>
    <polygon id="CORNERS-l1-o2" stroke="#000000" style="fill: red" transform="translate(238, 50) scale(1, -1) translate(-238, -50) " points="224 4 252 4 252 96 224 68"></polygon>
    <rect    id="CORNERS-l2-o0" stroke="#000000" style="fill: white" x="32" y="32" width="64" height="64"></rect>
    <polygon id="CORNERS-l2-o1" stroke="#000000" style="fill: orange" transform="translate(18, 50) scale(-1, -1) translate(-18, -50) " points="4 4 32 4 32 96 4 68"></polygon>
    <polygon id="CORNERS-l2-o2" stroke="#000000" style="fill: #26f" transform="translate(50, 18) scale(1, -1) rotate(90) translate(-50, -18) " points="36 -28 64 -28 64 64 36 36"></polygon>
    <rect    id="CORNERS-l3-o0" stroke="#000000" style="fill: white" x="32" y="160" width="64" height="64"></rect>
    <polygon id="CORNERS-l3-o1" stroke="#000000" style="fill: limegreen" transform="translate(50, 238) rotate(90) translate(-50, -238) " points="36 192 64 192 64 284 36 256"></polygon>
    <polygon id="CORNERS-l3-o2" stroke="#000000" style="fill: orange" transform="translate(18, 206) scale(-1, 1) translate(-18, -206) " points="4 160 32 160 32 252 4 224"></polygon>

    <rect id="EDGES-l0-o0" stroke="#000000" style="fill: white" x="96" y="160" width="64" height="64"></rect>
    <rect id="EDGES-l0-o1" stroke="#000000" style="fill: limegreen" transform="translate(128, 238) scale(1, -1) rotate(90) translate(-128, -238) " x="114" y="206" width="28" height="64"></rect>
    <rect id="EDGES-l1-o0" stroke="#000000" style="fill: white" x="160" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l1-o1" stroke="#000000" style="fill: red" x="224" y="96" width="28" height="64"></rect>
    <rect id="EDGES-l2-o0" stroke="#000000" style="fill: white" x="96" y="32" width="64" height="64"></rect>
    <rect id="EDGES-l2-o1" stroke="#000000" style="fill: #26f" transform="translate(128, 18) scale(1, -1) rotate(90) translate(-128, -18) " x="114" y="-14" width="28" height="64"></rect>
    <rect id="EDGES-l3-o0" stroke="#000000" style="fill: white" x="32" y="96" width="64" height="64"></rect>
    <rect id="EDGES-l3-o1" stroke="#000000" style="fill: orange" x="4" y="96" width="28" height="64"></rect>

  </g>
  <g style="opacity: 0">
    <!-- CORNERS -->
    <use id="CORNERS-l4-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l4-o1" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CORNERS-l4-o2" xlink:href="#sticker" style="fill: red"/>

    <use id="CORNERS-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l5-o1" xlink:href="#sticker" style="fill: orange"/>
    <use id="CORNERS-l5-o2" xlink:href="#sticker" style="fill: limegreen"/>

    <use id="CORNERS-l6-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l6-o1" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CORNERS-l6-o2" xlink:href="#sticker"  style="fill: orange"/>

    <use id="CORNERS-l7-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CORNERS-l7-o1" xlink:href="#sticker" style="fill: red"/>
    <use id="CORNERS-l7-o2" xlink:href="#sticker" style="fill: #26f"/>

    <!-- EDGES -->
    <use id="EDGES-l4-o0"  xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l4-o1"  xlink:href="#sticker" style="fill: limegreen"/>

    <use id="EDGES-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l5-o1" xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l6-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l6-o1" xlink:href="#sticker" style="fill: #26f"/>

    <use id="EDGES-l7-o0"  xlink:href="#sticker" style="fill: yellow"/>
    <use id="EDGES-l7-o1"  xlink:href="#sticker" style="fill: orange"/>

    <use id="EDGES-l8-o0"  xlink:href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l8-o1"  xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l9-o0"  xlink:href="#sticker" style="fill: limegreen"/>
    <use id="EDGES-l9-o1"  xlink:href="#sticker" style="fill: orange"/>

    <use id="EDGES-l10-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l10-o1" xlink:href="#sticker" style="fill: red"/>

    <use id="EDGES-l11-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="EDGES-l11-o1" xlink:href="#sticker" style="fill: orange"/>

    <!-- CENTERS -->
    <!-- TODO: Allow the same sticker to be reused for multiple orientations -->
    <use id="CENTERS-l1-o0" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o1" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o2" xlink:href="#sticker" style="fill: orange"/>
    <use id="CENTERS-l1-o3" xlink:href="#sticker" style="fill: orange"/>

    <use id="CENTERS-l2-o0" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o1" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o2" xlink:href="#sticker" style="fill: limegreen"/>
    <use id="CENTERS-l2-o3" xlink:href="#sticker" style="fill: limegreen"/>

    <use id="CENTERS-l3-o0" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o1" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o2" xlink:href="#sticker" style="fill: red"/>
    <use id="CENTERS-l3-o3" xlink:href="#sticker" style="fill: red"/>

    <use id="CENTERS-l4-o0" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o1" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o2" xlink:href="#sticker" style="fill: #26f"/>
    <use id="CENTERS-l4-o3" xlink:href="#sticker" style="fill: #26f"/>

    <use id="CENTERS-l5-o0" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o1" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o2" xlink:href="#sticker" style="fill: yellow"/>
    <use id="CENTERS-l5-o3" xlink:href="#sticker" style="fill: yellow"/>
  </g>
</svg>\`});var Us={};mt(Us,{cube3x3x3LLSVG:()=>xL,cube3x3x3SVG:()=>SL});var Ss=y(()=>{"use strict";g1();p1()});var xs,c1=y(()=>{"use strict";ys();nr();Et();Vl();xs={id:"3x3x3",fullName:"3\\xD73\\xD73 Cube",inventedBy:["Ern\\u0151 Rubik"],inventionYear:1974,kpuzzle:de(async()=>Fi),svg:de(async()=>(await Promise.resolve().then(()=>(Ss(),Us))).cube3x3x3SVG),llSVG:de(async()=>(await Promise.resolve().then(()=>(Ss(),Us))).cube3x3x3LLSVG),pg:de(async()=>sn("3x3x3")),appearance:e=>er(xs,e),stickerings:Wn}});var m1,L1=y(()=>{"use strict";He();Et();m1={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:de(async()=>new ye((await Promise.resolve().then(()=>(Ur(),yr))).clockJSON)),svg:de(async()=>(await Promise.resolve().then(()=>(Ur(),yr))).clockSVG)}});async function B1(e,t){let r=await e.kpuzzle(),n=new Tn(r),l=new In(r),o=()=>l.and([l.move("U"),l.not(l.or(l.moves(["F","BL","BR"])))]),i=()=>l.and([l.move("U"),l.not(l.move("F"))]),s=()=>l.or([i(),l.and([l.move("F"),l.not(l.or(l.moves(["U","BL","BR"])))])]),a=()=>l.not(l.or([l.and([l.move("U"),l.move("F")]),l.and([l.move("F"),l.move("BL")]),l.and([l.move("F"),l.move("BR")]),l.and([l.move("BL"),l.move("BR")])])),f=()=>l.not(l.or([l.and([l.move("F"),l.move("BL")]),l.and([l.move("F"),l.move("BR")]),l.and([l.move("BL"),l.move("BR")])]));switch(t){case"full":break;case"experimental-fto-fc":n.set(l.not(o()),"Ignored");break;case"experimental-fto-f2t":n.set(l.not(i()),"Ignored"),n.set(o(),"Dim");break;case"experimental-fto-sc":n.set(l.not(s()),"Ignored"),n.set(i(),"Dim");break;case"experimental-fto-l2c":n.set(l.not(a()),"Ignored"),n.set(s(),"Dim");break;case"experimental-fto-lbt":n.set(l.not(f()),"Ignored"),n.set(a(),"Dim");break;case"experimental-fto-l3t":n.set(f(),"Dim");break;default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`),n.set(l.and(l.moves([])),"Dim")}return n.toAppearance()}async function d1(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}var R1=y(()=>{"use strict";ni()});var h1,F1=y(()=>{"use strict";h1=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="2368px" height="1216px" viewBox="0 0 2368 1216" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>fto</title>
    <g id="fto" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linejoin="round">
        <g id="BL" transform="translate(2040.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-2040.000000, -608.000000) translate(1560.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o3" style="fill: #FF7F00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o0" style="fill: #FF7F00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l16-o0" style="fill: #FF7F00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l3-o0" style="fill: #FF7F00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o2" style="fill: #FF7F00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l19-o0" style="fill: #FF7F00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o0" style="fill: #FF7F00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l3-o0" style="fill: #FF7F00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o1" style="fill: #FF7F00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="D" transform="translate(1280.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o0" style="fill: #FFFF00;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l3-o1" style="fill: #FFFF00;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l8-o0" style="fill: #FFFF00;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o1" style="fill: #FFFF00;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l0-o0" style="fill: #FFFF00;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l17-o0" style="fill: #FFFF00;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o1" style="fill: #FFFF00;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l6-o0" style="fill: #FFFF00;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o0" style="fill: #FFFF00;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="BR" transform="translate(1480.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-1480.000000, -608.000000) translate(1000.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o1" style="fill: #7F7F7F;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l2-o0" style="fill: #7F7F7F;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l15-o0" style="fill: #7F7F7F;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l5-o0" style="fill: #7F7F7F;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o2" style="fill: #7F7F7F;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l2-o0" style="fill: #7F7F7F;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o0" style="fill: #7F7F7F;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l4-o0" style="fill: #7F7F7F;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o3" style="fill: #7F7F7F;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="B" transform="translate(1760.000000, 328.000000) scale(1, -1) translate(-1760.000000, -328.000000) translate(1280.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l4-o2" style="fill: #0000FF;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l9-o1" style="fill: #0000FF;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l13-o0" style="fill: #0000FF;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l2-o1" style="fill: #0000FF;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o3" style="fill: #0000FF;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l12-o0" style="fill: #0000FF;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o1" style="fill: #0000FF;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l10-o0" style="fill: #0000FF;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l5-o1" style="fill: #0000FF;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="R" transform="translate(888.000000, 608.000000) scale(-1, -1) rotate(90.000000) translate(-888.000000, -608.000000) translate(408.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o1" style="fill: #32CD32;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o1" style="fill: #32CD32;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l7-o0" style="fill: #32CD32;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l0-o1" style="fill: #32CD32;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o3" style="fill: #32CD32;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l5-o0" style="fill: #32CD32;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l4-o1" style="fill: #32CD32;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l11-o0" style="fill: #32CD32;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l2-o2" style="fill: #32CD32;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="F" transform="translate(128.000000, 648.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o2" style="fill: #FF0000;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l0-o0" style="fill: #FF0000;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l0-o0" style="fill: #FF0000;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o0" style="fill: #FF0000;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l2-o1" style="fill: #FF0000;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l1-o0" style="fill: #FF0000;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l1-o0" style="fill: #FF0000;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l14-o0" style="fill: #FF0000;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o3" style="fill: #FF0000;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="L" transform="translate(328.000000, 608.000000) scale(1, -1) rotate(90.000000) translate(-328.000000, -608.000000) translate(-152.000000, 368.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o3" style="fill: #7F007F;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l11-o1" style="fill: #7F007F;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l21-o0" style="fill: #7F007F;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l10-o1" style="fill: #7F007F;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l3-o1" style="fill: #7F007F;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l18-o0" style="fill: #7F007F;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l7-o1" style="fill: #7F007F;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l9-o0" style="fill: #7F007F;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l0-o2" style="fill: #7F007F;" points="160 320 320 480 0 480"></polygon>
        </g>
        <g id="U" transform="translate(608.000000, 328.000000) scale(1, -1) translate(-608.000000, -328.000000) translate(128.000000, 88.000000)" stroke="#000000" stroke-width="12">
            <polygon id="C4RNER-l1-o0" style="fill: #FFFFFF;" points="480 0 640 160 320 160"></polygon>
            <polygon id="EDGES-l6-o0" style="fill: #FFFFFF;" points="640 160 800 320 480 320"></polygon>
            <polygon id="CENTERS-l20-o0" style="fill: #FFFFFF;" transform="translate(480.000000, 240.000000) scale(1, -1) translate(-480.000000, -240.000000) " points="480 160 640 320 320 320"></polygon>
            <polygon id="EDGES-l11-o0" style="fill: #FFFFFF;" points="320 160 480 320 160 320"></polygon>
            <polygon id="C4RNER-l5-o0" style="fill: #FFFFFF;" points="800 320 960 480 640 480"></polygon>
            <polygon id="CENTERS-l23-o0" style="fill: #FFFFFF;" transform="translate(640.000000, 400.000000) scale(1, -1) translate(-640.000000, -400.000000) " points="640 320 800 480 480 480"></polygon>
            <polygon id="EDGES-l8-o0" style="fill: #FFFFFF;" points="480 320 640 480 320 480"></polygon>
            <polygon id="CENTERS-l22-o0" style="fill: #FFFFFF;" transform="translate(320.000000, 400.000000) scale(1, -1) translate(-320.000000, -400.000000) " points="320 320 480 480 160 480"></polygon>
            <polygon id="C4RNER-l3-o0" style="fill: #FFFFFF;" points="160 320 320 480 0 480"></polygon>
        </g>
    </g>
</svg>
\`});var D1,A1=y(()=>{"use strict";D1=\`<svg id="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 500">
<style type="text/css"><![CDATA[.sticker { stroke: #000000; stroke-width: 1px; }]]></style>
<g><title>U</title>
<polygon id="CORNERS-l0-o0" class="sticker" style="fill: #ffffff" points="247.941 89.861 283.500 115.696 269.918 157.499 212.382 138.805"/>
<polygon id="CORNERS-l10-o0" class="sticker" style="fill: #ffffff" points="154.845 157.499 141.263 115.696 176.822 89.861 212.382 138.805"/>
<polygon id="CORNERS-l5-o0" class="sticker" style="fill: #ffffff" points="176.822 89.861 212.381 64.025 247.941 89.861 212.382 138.805"/>
<polygon id="CORNERS-l4-o0" class="sticker" style="fill: #ffffff" points="212.381 199.301 168.427 199.301 154.845 157.499 212.382 138.805"/>
<polygon id="CORNERS-l1-o0" class="sticker" style="fill: #ffffff" points="269.918 157.499 256.335 199.301 212.381 199.301 212.382 138.805"/>
</g><g><title>F</title>
<polygon id="CORNERS-l7-o0" class="sticker" style="fill: #006633" points="247.941 319.263 212.381 345.098 176.822 319.263 212.382 270.32"/>
<polygon id="CORNERS-l1-o2" class="sticker" style="fill: #006633" points="212.381 209.823 256.335 209.823 269.918 251.625 212.382 270.32"/>
<polygon id="CORNERS-l3-o1" class="sticker" style="fill: #006633" points="269.918 251.625 283.500 293.428 247.941 319.263 212.382 270.32"/>
<polygon id="CORNERS-l4-o1" class="sticker" style="fill: #006633" points="154.845 251.625 168.427 209.823 212.381 209.823 212.382 270.32"/>
<polygon id="CORNERS-l9-o2" class="sticker" style="fill: #006633" points="176.822 319.263 141.263 293.428 154.845 251.625 212.382 270.32"/>
</g><g><title>L</title>
<polygon id="CORNERS-l13-o0" class="sticker" style="fill: #660099" points="87.302 290.176 43.349 290.176 29.766 248.374 87.303 229.68"/>
<polygon id="CORNERS-l4-o2" class="sticker" style="fill: #660099" points="122.862 180.736 158.421 206.571 144.839 248.374 87.303 229.68"/>
<polygon id="CORNERS-l9-o1" class="sticker" style="fill: #660099" points="144.839 248.374 131.256 290.176 87.302 290.176 87.303 229.68"/>
<polygon id="CORNERS-l10-o1" class="sticker" style="fill: #660099" points="51.743 180.736 87.302 154.901 122.862 180.736 87.303 229.68"/>
<polygon id="CORNERS-l11-o2" class="sticker" style="fill: #660099" points="29.766 248.374 16.184 206.571 51.743 180.736 87.303 229.68"/>
</g><g><title>BL</title>
<polygon id="CORNERS-l15-o0" class="sticker" style="fill: #ffff00" points="700.480 172.224 664.921 198.059 629.361 172.224 664.921 123.281"/>
<polygon id="CORNERS-l10-o2" class="sticker" style="fill: #ffff00" points="664.921 62.784 708.874 62.784 722.457 104.586 664.921 123.281"/>
<polygon id="CORNERS-l11-o1" class="sticker" style="fill: #ffff00" points="722.457 104.586 736.039 146.389 700.480 172.224 664.921 123.281"/>
<polygon id="CORNERS-l5-o1" class="sticker" style="fill: #ffff00" points="607.384 104.586 620.967 62.784 664.921 62.784 664.921 123.281"/>
<polygon id="CORNERS-l19-o2" class="sticker" style="fill: #ffff00" points="629.361 172.224 593.802 146.389 607.384 104.586 664.921 123.281"/>
</g><g><title>BR</title>
<polygon id="CORNERS-l12-o0" class="sticker" style="fill: #0000ff" points="545.874 172.224 510.315 198.059 474.755 172.224 510.315 123.281"/>
<polygon id="CORNERS-l5-o2" class="sticker" style="fill: #0000ff" points="510.315 62.784 554.269 62.784 567.851 104.586 510.315 123.281"/>
<polygon id="CORNERS-l19-o1" class="sticker" style="fill: #0000ff" points="567.851 104.586 581.433 146.389 545.874 172.224 510.315 123.281"/>
<polygon id="CORNERS-l0-o1" class="sticker" style="fill: #0000ff" points="452.779 104.586 466.361 62.784 510.315 62.784 510.315 123.281"/>
<polygon id="CORNERS-l6-o2" class="sticker" style="fill: #0000ff" points="474.755 172.224 439.196 146.389 452.779 104.586 510.315 123.281"/>
</g><g><title>R</title>
<polygon id="CORNERS-l6-o1" class="sticker" style="fill: #ff0000" points="373.019 180.736 408.579 206.571 394.996 248.374 337.461 229.68"/>
<polygon id="CORNERS-l1-o1" class="sticker" style="fill: #ff0000" points="279.924 248.374 266.341 206.571 301.901 180.736 337.461 229.68"/>
<polygon id="CORNERS-l0-o2" class="sticker" style="fill: #ff0000" points="301.901 180.736 337.460 154.901 373.019 180.736 337.461 229.68"/>
<polygon id="CORNERS-l3-o2" class="sticker" style="fill: #ff0000" points="337.460 290.176 293.506 290.176 279.924 248.374 337.461 229.68"/>
<polygon id="CORNERS-l2-o0" class="sticker" style="fill: #ff0000" points="394.996 248.374 381.414 290.176 337.460 290.176 337.461 229.68"/>
</g><g><title>C</title>
<polygon id="CORNERS-l8-o1" class="sticker" style="fill: #ffffd0" points="347.220 395.413 333.638 437.215 289.684 437.215 289.685 376.719"/>
<polygon id="CORNERS-l3-o0" class="sticker" style="fill: #ffffd0" points="254.125 327.775 289.684 301.940 325.244 327.775 289.685 376.719"/>
<polygon id="CORNERS-l2-o2" class="sticker" style="fill: #ffffd0" points="325.244 327.775 360.803 353.610 347.220 395.413 289.685 376.719"/>
<polygon id="CORNERS-l7-o1" class="sticker" style="fill: #ffffd0" points="232.148 395.413 218.566 353.610 254.125 327.775 289.685 376.719"/>
<polygon id="CORNERS-l17-o2" class="sticker" style="fill: #ffffd0" points="289.684 437.215 245.730 437.215 232.148 395.413 289.685 376.719"/>
</g><g><title>A</title>
<polygon id="CORNERS-l17-o1" class="sticker" style="fill: #3399ff" points="192.615 395.413 179.032 437.215 135.078 437.215 135.079 376.719"/>
<polygon id="CORNERS-l9-o0" class="sticker" style="fill: #3399ff" points="99.519 327.775 135.078 301.940 170.638 327.775 135.079 376.719"/>
<polygon id="CORNERS-l7-o2" class="sticker" style="fill: #3399ff" points="170.638 327.775 206.197 353.610 192.615 395.413 135.079 376.719"/>
<polygon id="CORNERS-l13-o1" class="sticker" style="fill: #3399ff" points="77.542 395.413 63.960 353.610 99.519 327.775 135.079 376.719"/>
<polygon id="CORNERS-l14-o2" class="sticker" style="fill: #3399ff" points="135.078 437.215 91.125 437.215 77.542 395.413 135.079 376.719"/>
</g><g><title>I</title>
<polygon id="CORNERS-l18-o2" class="sticker" style="fill: #ff6633" points="677.137 319.263 641.578 293.428 655.160 251.625 712.697 270.32"/>
<polygon id="CORNERS-l13-o2" class="sticker" style="fill: #ff6633" points="770.233 251.625 783.815 293.428 748.256 319.263 712.697 270.32"/>
<polygon id="CORNERS-l14-o1" class="sticker" style="fill: #ff6633" points="748.256 319.263 712.697 345.098 677.137 319.263 712.697 270.32"/>
<polygon id="CORNERS-l11-o0" class="sticker" style="fill: #ff6633" points="712.697 209.823 756.650 209.823 770.233 251.625 712.697 270.32"/>
<polygon id="CORNERS-l15-o1" class="sticker" style="fill: #ff6633" points="655.160 251.625 668.743 209.823 712.697 209.823 712.697 270.32"/>
</g><g><title>BF</title>
<polygon id="CORNERS-l16-o2" class="sticker" style="fill: #99ff00" points="587.618 290.176 543.664 290.176 530.081 248.374 587.618 229.68"/>
<polygon id="CORNERS-l15-o2" class="sticker" style="fill: #99ff00" points="623.177 180.736 658.736 206.571 645.154 248.374 587.618 229.68"/>
<polygon id="CORNERS-l18-o1" class="sticker" style="fill: #99ff00" points="645.154 248.374 631.572 290.176 587.618 290.176 587.618 229.68"/>
<polygon id="CORNERS-l19-o0" class="sticker" style="fill: #99ff00" points="552.058 180.736 587.618 154.901 623.177 180.736 587.618 229.68"/>
<polygon id="CORNERS-l12-o1" class="sticker" style="fill: #99ff00" points="530.081 248.374 516.499 206.571 552.058 180.736 587.618 229.68"/>
</g><g><title>E</title>
<polygon id="CORNERS-l8-o2" class="sticker" style="fill: #ff66cc" points="498.098 319.263 462.539 345.098 426.980 319.263 462.539 270.32"/>
<polygon id="CORNERS-l12-o2" class="sticker" style="fill: #ff66cc" points="462.539 209.823 506.493 209.823 520.075 251.625 462.539 270.32"/>
<polygon id="CORNERS-l16-o1" class="sticker" style="fill: #ff66cc" points="520.075 251.625 533.658 293.428 498.098 319.263 462.539 270.32"/>
<polygon id="CORNERS-l6-o0" class="sticker" style="fill: #ff66cc" points="405.003 251.625 418.585 209.823 462.539 209.823 462.539 270.32"/>
<polygon id="CORNERS-l2-o1" class="sticker" style="fill: #ff66cc" points="426.980 319.263 391.420 293.428 405.003 251.625 462.539 270.32"/>
</g><g><title>D</title>
<polygon id="CORNERS-l18-o0" class="sticker" style="fill: #999999" points="587.618 300.698 631.572 300.698 645.154 342.500 587.618 361.195"/>
<polygon id="CORNERS-l8-o0" class="sticker" style="fill: #999999" points="552.058 410.138 516.499 384.303 530.081 342.500 587.618 361.195"/>
<polygon id="CORNERS-l16-o0" class="sticker" style="fill: #999999" points="530.081 342.500 543.664 300.698 587.618 300.698 587.618 361.195"/>
<polygon id="CORNERS-l17-o0" class="sticker" style="fill: #999999" points="623.177 410.138 587.618 435.974 552.058 410.138 587.618 361.195"/>
<polygon id="CORNERS-l14-o0" class="sticker" style="fill: #999999" points="645.154 342.500 658.736 384.303 623.177 410.138 587.618 361.195"/>
</g></svg>
\`});var y1,U1=y(()=>{"use strict";y1={name:"redi_cube",orbits:{EDGES:{numPieces:12,numOrientations:2},CORNERS:{numPieces:8,numOrientations:3}},startStateData:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]}},moves:{F:{EDGES:{permutation:[8,0,2,3,4,5,6,7,1,9,10,11],orientation:[0,1,0,0,0,0,0,0,1,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientation:[1,0,0,0,0,0,0,0]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientation:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientation:[2,1,2,1,1,2,1,2]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientation:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientation:[0,0,0,0,0,0,0,0]}}},experimentalDerivedMoves:{z:"[x: y]",UR:"[y: F]",U:"[y2: F]",UL:"[y': F]",D:"[x: F]",L:"[z2: F]",R:"[x2: F]",B:"[y2 x: F]"}}});var S1,x1=y(()=>{"use strict";S1=\`<?xml version="1.0" encoding="UTF-8"?>
<svg width="546px" height="418px" viewBox="-20 -20 546 418" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>redi-cube</title>
<g istroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g transform="translate(1.000000, 1.000000)" fill-rule="nonzero" stroke="#000000" stroke-width="1.6">
    <g id="CORNERS-l0-o0" transform="translate(208.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o1" transform="translate(256.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l0-o2" transform="translate(208.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o0" transform="translate(208.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o1" transform="translate(384.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l1-o2" transform="translate(336.000000, 128.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o0" transform="translate(128.000000, 0.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o1" transform="translate(0.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l2-o2" transform="translate(464.000000, 128.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o0" transform="translate(128.000000, 80.000000)" style="fill: #FFFFFF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o1" transform="translate(128.000000, 128.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l3-o2" transform="translate(80.000000, 128.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o0" transform="translate(208.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o1" transform="translate(208.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l4-o2" transform="translate(256.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o0" transform="translate(128.000000, 256.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o1" transform="translate(80.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l5-o2" transform="translate(128.000000, 208.000000)" style="fill: #32CD32;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o0" transform="translate(128.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o1" transform="translate(464.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l6-o2" transform="translate(0.000000, 208.000000)" style="fill: #FFA500;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o0" transform="translate(208.000000, 336.000000)" style="fill: #FFFF00;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o1" transform="translate(336.000000, 208.000000)" style="fill: #FF0000;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="CORNERS-l7-o2" transform="translate(384.000000, 208.000000)" style="fill: #2266FF;">
      <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
    </g>
    <g id="EDGES-l0-o0" transform="translate(168.000000, 60.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 20 20 -8.8817842e-16 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l0-o1" transform="translate(168.000000, 128.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l1-o0" transform="translate(188.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l1-o1" transform="translate(296.000000, 128.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o0" transform="translate(168.000000, 0.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l2-o1" transform="translate(424.000000, 128.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o0" transform="translate(128.000000, 40.000000)" style="fill: #FFFFFF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l3-o1" transform="translate(40.000000, 128.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o0" transform="translate(168.000000, 256.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 40 40 20 60 0 40"></polygon>
    </g>
    <g id="EDGES-l4-o1" transform="translate(168.000000, 188.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l5-o0" transform="translate(188.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l5-o1" transform="translate(296.000000, 188.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o0" transform="translate(168.000000, 316.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 20 20 -5.32907052e-14 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l6-o1" transform="translate(424.000000, 188.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 20 20 -1.77635684e-15 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l7-o0" transform="translate(128.000000, 296.000000)" style="fill: #FFFF00;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l7-o1" transform="translate(40.000000, 188.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 20 20 0 40 20 40 60 0 60"></polygon>
    </g>
    <g id="EDGES-l8-o0" transform="translate(188.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 2.66453526e-14 20"></polygon>
    </g>
    <g id="EDGES-l8-o1" transform="translate(256.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o0" transform="translate(128.000000, 168.000000)" style="fill: #32CD32;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l9-o1" transform="translate(60.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 0 20"></polygon>
    </g>
    <g id="EDGES-l10-o0" transform="translate(384.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
    <g id="EDGES-l10-o1" transform="translate(316.000000, 168.000000)" style="fill: #FF0000;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 5.32907052e-14 20"></polygon>
    </g>
    <g id="EDGES-l11-o0" transform="translate(444.000000, 168.000000)" style="fill: #2266FF;">
      <polygon id="Rectangle" points="20 0 60 0 60 40 20 40 -3.55271368e-15 20"></polygon>
    </g>
    <g id="EDGES-l11-o1" transform="translate(0.000000, 168.000000)" style="fill: #FFA500;">
      <polygon id="Rectangle" points="0 0 40 0 60 20 40 40 0 40"></polygon>
    </g>
  </g>
</g>
</svg>
\`});var no={};mt(no,{ftoSVG:()=>h1,kilominxSVG:()=>D1,rediCubeJSON:()=>y1,rediCubeSVG:()=>S1});var lo=y(()=>{"use strict";F1();A1();U1();x1()});var bs,b1,w1=y(()=>{"use strict";nr();Et();R1();bs=class extends dt{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});this.stickerings=d1;this.svg=de(async()=>(await Promise.resolve().then(()=>(lo(),no))).ftoSVG)}appearance(r){return B1(this,r)}},b1=new bs});async function E1(e,t){switch(t){case"full":case"F2L":case"LL":case"OLL":case"PLL":case"ELS":case"CLS":return er(e,t);default:console.warn(\`Unsupported stickering for \${e.id}: \${t}. Setting all pieces to dim.\`)}return er(e,"full")}async function v1(){return["full","F2L","LL","OLL","PLL","ELS","CLS"]}var _1=y(()=>{"use strict";Vl()});var ws,k1,z1=y(()=>{"use strict";nr();_1();ws=class extends dt{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});this.stickerings=v1}appearance(r){return E1(this,r)}},k1=new ws});var Es,C1,P1=y(()=>{"use strict";nr();Et();Es=class extends dt{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});this.svg=de(async()=>(await Promise.resolve().then(()=>(Ur(),yr))).pyraminxSVG)}},C1=new Es});var N1,M1=y(()=>{"use strict";He();Et();N1={id:"square1",fullName:"Square-1",inventedBy:["Karel Hr\\u0161el","Vojtech Kopsk\\xFD"],inventionYear:1990,kpuzzle:de(async()=>new ye((await Promise.resolve().then(()=>(Ur(),yr))).sq1HyperOrbitJSON)),svg:de(async()=>(await Promise.resolve().then(()=>(Ur(),yr))).sq1HyperOrbitSVG)}});var G1,O1=y(()=>{"use strict";He();nr();Et();G1={id:"kilominx",fullName:"Kilominx",kpuzzle:de(async()=>{let e=await sn("megaminx + chopasaurus"),t=JSON.parse(JSON.stringify(e.getKPuzzleDefinition(!0)));delete t.orbits.CENTERS,delete t.orbits.CENTERS2,delete t.startStateData.CENTERS,delete t.startStateData.CENTERS2;for(let i of Object.values(t.moves))delete i.CENTERS,delete i.CENTERS2;t.name="kilominx",delete t.experimentalPuzzleDescription;let r=await Promise.resolve().then(()=>(Zn(),Hn)),n=new r.ExperimentalPGNotation(e,e.getOrbitsDef(!0)),l=new ye(t,{experimentalPGNotation:{lookupMove:i=>i.toString()==="x2"||i.toString()==="x2'"?o.transformationData:n.lookupMove(i)}}),o=l.algToTransformation("Rv2 Fv Uv'");return t.moves.x2=o,l}),svg:de(async()=>(await Promise.resolve().then(()=>(lo(),no))).kilominxSVG)}});var T1,I1=y(()=>{"use strict";He();Et();T1={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:de(async()=>new ye((await Promise.resolve().then(()=>(lo(),no))).rediCubeJSON)),svg:async()=>(await Promise.resolve().then(()=>(lo(),no))).rediCubeSVG}});var bL,W1=y(()=>{"use strict";bL=\`<svg
  height="256"
  viewBox="0 0 256 256"
  width="256"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g fill="none" fill-rule="nonzero" stroke="#000">
    <g stroke-linejoin="round" stroke-width="3" transform="translate(17 17)">
      <!-- U -->
      <path id="CORNERS-l1-o0" d="m184.6 147.8v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="EDGES-l10-o0" d="m147.8 184.6h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="EDGES-l0-o0" d="m111 147.8v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="CORNERS-l0-o0" d="m74.2 184.6h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="EDGES-l6-o0" d="m37.4 147.8v-36.8h36.8v36.8z" style="fill: white" />
      <path id="CENTERS-l10-o0" d="m74.2 111h36.8v36.8h-36.8z" style="fill: white" />
      <path id="CENTERS-l21-o0" d="m111 147.8v-36.8h36.8v36.8z" style="fill: white" />
      <path id="EDGES-l2-o0" d="m147.8 111h36.8v36.8h-36.8z" style="fill: white" />
      <path id="EDGES-l21-o0" d="m184.6 74.2v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="CENTERS-l15-o0" d="m147.8 111h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="CENTERS-l6-o0" d="m111 74.2v36.8h-36.8v-36.8z" style="fill: white" />
      <path id="EDGES-l22-o0" d="m74.2 111h-36.8v-36.8h36.8z" style="fill: white" />
      <path id="CORNERS-l6-o0" d="m37.4 74.2v-36.8h36.8v36.8z" style="fill: white" />
      <path id="EDGES-l15-o0" d="m74.2 37.4h36.8v36.8h-36.8z" style="fill: white" />
      <path id="EDGES-l18-o0" d="m111 74.2v-36.8h36.8v36.8z" style="fill: white" />
      <path id="CORNERS-l3-o0" d="m147.8 37.4h36.8v36.8h-36.8z" style="fill: white" />

      <path id="CORNERS-l0-o1" d="m.6000061 221.399997 36.7999939-36.8h36.8v36.8z" style="fill: limegreen" />
      <path id="EDGES-l0-o1" d="m74.2 184.599997h36.8v36.8h-36.8z" style="fill: limegreen" />
      <path id="EDGES-l10-o1" d="m111 221.399997v-36.8h36.8v36.8z" style="fill: limegreen" />
      <path id="CORNERS-l1-o2" d="m147.8 184.599997h36.8l36.799994 36.8h-73.599994z" style="fill: limegreen" />

      <path id="CORNERS-l0-o2" d="m-17.7999969 166.2h36.8l36.7999938 36.8h-73.5999938z" style="fill: orange" transform="matrix(0 1 -1 0 203.600003 165.599997)" />
      <path id="EDGES-l6-o1" d="m.60000305 147.8v-36.8h36.80000005v36.8z" style="fill: orange" transform="matrix(0 1 -1 0 148.400003 110.399997)" />
      <path id="EDGES-l22-o1" d="m.60000305 74.2h36.80000005v36.8h-36.80000005z" style="fill: orange" transform="matrix(0 1 -1 0 111.600003 73.599997)" />
      <path id="CORNERS-l6-o1" d="m-17.7999966 55.8 36.7999997-36.8h36.8v36.8z" style="fill: orange" transform="matrix(0 1 -1 0 56.400003 18.399997)" />

      <path id="CORNERS-l3-o1" d="m147.800006 37.3999992 36.799994-36.79999996h36.8v36.79999996z" style="fill: #26f" transform="matrix(-1 0 0 -1 369.2 37.999998)" />
      <path id="EDGES-l18-o1" d="m111 .59999924h36.8v36.79999996h-36.8z" style="fill: #26f" transform="matrix(-1 0 0 -1 258.8 37.999998)" />
      <path id="EDGES-l15-o1" d="m74.2 37.3999992v-36.79999996h36.8v36.79999996z" style="fill: #26f" transform="matrix(-1 0 0 -1 185.2 37.999998)" />
      <path id="CORNERS-l6-o2" d="m.6.59999924h36.8l36.7999939 36.79999996h-73.5999939z" style="fill: #26f" transform="matrix(-1 0 0 -1 74.8 37.999998)" />

      <path id="CORNERS-l1-o1" d="m166.200018 203 36.799994-36.8h36.8v36.8z" style="fill: red" transform="matrix(0 -1 1 0 18.400012 387.600012)" />
      <path id="EDGES-l2-o1" d="m184.600012 111h36.8v36.8h-36.8z" style="fill: red" transform="matrix(0 -1 1 0 73.600012 332.400012)" />
      <path id="EDGES-l21-o1" d="m184.600012 111v-36.8h36.8v36.8z" style="fill: red" transform="matrix(0 -1 1 0 110.400012 295.600012)" />
      <path id="CORNERS-l3-o2" d="m166.200012 19h36.8l36.8 36.8h-73.6z" style="fill: red" transform="matrix(0 -1 1 0 165.600012 240.400012)" />
    </g>
    <g opacity="0" transform="translate(17 242)">
      <path id="EDGES-l1-o0" d="m12 0v1h-1v-1z" style="fill: limegreen" />
      <path id="CENTERS-l0-o0" d="m10 1h-1v-1h1z" style="fill: limegreen" />
      <path id="CENTERS-l23-o0" d="m9 0v1h-1v-1z" style="fill: limegreen" />
      <path id="EDGES-l20-o0" d="m7 1h-1v-1h1z" style="fill: limegreen" />
      <path id="EDGES-l23-o0" d="m6 2v-1h1v1z" style="fill: limegreen" />
      <path id="CENTERS-l14-o0" d="m8 1h1v1h-1z" style="fill: limegreen" />
      <path id="CENTERS-l1-o0" d="m9 2v-1h1v1z" style="fill: limegreen" />
      <path id="EDGES-l7-o0" d="m11 1h1v1h-1z" style="fill: limegreen" />
      <path id="CORNERS-l4-o1" d="m12 3v1h-1v-1z" style="fill: limegreen" />
      <path id="EDGES-l14-o1" d="m10 4h-1v-1h1z" style="fill: limegreen" />
      <path id="EDGES-l3-o1" d="m9 3v1h-1v-1z" style="fill: limegreen" />
      <path id="CORNERS-l2-o2" d="m7 4h-1v-1h1z" style="fill: limegreen" />

      <path id="CORNERS-l2-o0" d="m6 6v-1h1v1z" style="fill: yellow"/>
      <path id="EDGES-l3-o0" d="m8 5h1v1h-1z" style="fill: yellow"/>
      <path id="EDGES-l14-o0" d="m9 6v-1h1v1z" style="fill: yellow"/>
      <path id="CORNERS-l4-o0" d="m11 5h1v1h-1z" style="fill: yellow"/>
      <path id="EDGES-l5-o0" d="m12 7v1h-1v-1z" style="fill: yellow"/>
      <path id="CENTERS-l3-o0" d="m10 8h-1v-1h1z" style="fill: yellow"/>
      <path id="CENTERS-l16-o0" d="m9 7v1h-1v-1z" style="fill: yellow"/>
      <path id="EDGES-l9-o0" d="m7 8h-1v-1h1z" style="fill: yellow"/>
      <path id="EDGES-l16-o0" d="m6 9v-1h1v1z" style="fill: yellow"/>
      <path id="CENTERS-l8-o0" d="m8 8h1v1h-1z" style="fill: yellow"/>
      <path id="CENTERS-l5-o0" d="m9 9v-1h1v1z" style="fill: yellow"/>
      <path id="EDGES-l12-o0" d="m11 8h1v1h-1z" style="fill: yellow"/>
      <path id="CORNERS-l5-o0" d="m12 10v1h-1v-1z" style="fill: yellow"/>
      <path id="EDGES-l8-o0" d="m10 11h-1v-1h1z" style="fill: yellow"/>
      <path id="EDGES-l19-o0" d="m9 10v1h-1v-1z" style="fill: yellow"/>
      <path id="CORNERS-l7-o0" d="m7 11h-1v-1h1z" style="fill: yellow"/>

      <path id="EDGES-l9-o1" d="m5 0v1h-1v-1z" style="fill: orange" />
      <path id="CENTERS-l20-o0" d="m4 1h1v1h-1z" style="fill: orange" />
      <path id="CENTERS-l22-o0" d="m5 3v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l20-o1" d="m4 4h-1v-1h1z" style="fill: orange" />
      <path id="EDGES-l23-o1" d="m3 2v-1h1v1z" style="fill: orange" />
      <path id="CENTERS-l17-o0" d="m4 1h-1v-1h1z" style="fill: orange" />
      <path id="CENTERS-l9-o0" d="m2 0v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l16-o1" d="m1 1h1v1h-1z" style="fill: orange" />
      <path id="CORNERS-l7-o2" d="m2 3v1h-1v-1z" style="fill: orange" />
      <path id="EDGES-l17-o1" d="m1 4h-1v-1h1z" style="fill: orange" />
      <path id="EDGES-l13-o1" d="m0 2v-1h1v1z" style="fill: orange" />
      <path id="CORNERS-l2-o1" d="m1 1h-1v-1h1z" style="fill: orange" />

      <path id="EDGES-l11-o0" d="m25 3v1h-1v-1z" style="fill: #26f" />
      <path id="CENTERS-l19-o0" d="m23 4h-1v-1h1z" style="fill: #26f" />
      <path id="CENTERS-l13-o0" d="m22 3v1h-1v-1z" style="fill: #26f" />
      <path id="EDGES-l17-o0" d="m20 4h-1v-1h1z" style="fill: #26f" />
      <path id="EDGES-l13-o0" d="m19 2v-1h1v1z" style="fill: #26f" />
      <path id="CENTERS-l18-o0" d="m21 1h1v1h-1z" style="fill: #26f" />
      <path id="CENTERS-l11-o0" d="m22 2v-1h1v1z" style="fill: #26f" />
      <path id="EDGES-l4-o0" d="m24 1h1v1h-1z" style="fill: #26f" />
      <path id="CORNERS-l7-o1" d="m25 0v1h-1v-1z" style="fill: #26f" />
      <path id="EDGES-l19-o1" d="m23 1h-1v-1h1z" style="fill: #26f" />
      <path id="EDGES-l8-o1" d="m22 0v1h-1v-1z" style="fill: #26f" />
      <path id="CORNERS-l5-o2" d="m20 1h-1v-1h1z" style="fill: #26f" />

      <path id="EDGES-l7-o1" d="m14 4h-1v-1h1z" style="fill: red" />
      <path id="CENTERS-l7-o0" d="m13 2v-1h1v1z" style="fill: red" />
      <path id="CENTERS-l12-o0" d="m14 1h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l5-o1" d="m15 0v1h-1v-1z" style="fill: red" />
      <path id="EDGES-l12-o1" d="m14 1h1v1h-1z" style="fill: red" />
      <path id="CENTERS-l4-o0" d="m15 3v1h-1v-1z" style="fill: red" />
      <path id="CENTERS-l2-o0" d="m17 4h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l1-o1" d="m16 2v-1h1v1z" style="fill: red" />
      <path id="CORNERS-l4-o2" d="m17 1h-1v-1h1z" style="fill: red" />
      <path id="EDGES-l4-o1" d="m18 0v1h-1v-1z" style="fill: red" />
      <path id="EDGES-l11-o1" d="m17 1h1v1h-1z" style="fill: red" />
      <path id="CORNERS-l5-o1" d="m18 3v1h-1v-1z" style="fill: red" />
    </g>
  </g>
</svg>\`});var K1={};mt(K1,{cube4x4x4LLSVG:()=>bL});var Q1=y(()=>{"use strict";W1()});var vs,j1=y(()=>{"use strict";nr();Et();vs=new rr({id:"4x4x4",fullName:"4\\xD74\\xD74 Cube"});vs.llSVG=de(async()=>(await Promise.resolve().then(()=>(Q1(),K1))).cube4x4x4LLSVG)});var Pe,lr=y(()=>{"use strict";gf();nr();o1();c1();L1();w1();z1();P1();M1();O1();I1();j1();Pe={"3x3x3":xs,"2x2x2":ro,"4x4x4":vs,"5x5x5":new rr({id:"5x5x5",fullName:"5\\xD75\\xD75 Cube"}),"6x6x6":new rr({id:"6x6x6",fullName:"6\\xD76\\xD76 Cube"}),"7x7x7":new rr({id:"7x7x7",fullName:"7\\xD77\\xD77 Cube"}),"40x40x40":new rr({id:"40x40x40",fullName:"40\\xD740\\xD740 Cube"}),clock:m1,megaminx:k1,pyraminx:C1,skewb:new dt({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:N1,fto:b1,gigaminx:new dt({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new dt({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:G1,redi_cube:T1}});function V1(e){q1=e}function Ee(){if(!q1)throw new Error("Must be called from inside a worker, to avoid impact on page performance. Try importing from the top level of \`cubing/solve\`?")}var q1,At=y(()=>{"use strict";q1=!1});async function H1(){if(globalThis?.crypto?.getRandomValues)return crypto.getRandomValues.bind(crypto);{let e=(await(wL??(wL=import(vL())))).webcrypto;return e.getRandomValues.bind(e)}}var wL,EL,vL,Z1=y(()=>{"use strict";wL=null,EL="cr-yp-to",vL=()=>EL.replace(/-/g,"")});function zL(e){let t=new Uint32Array(2);e(t);let r=t[0],n=t[1];return Math.floor(r*_L)+Math.floor(n/kL)}function CL(e){if(typeof e!="number"||e<0||Math.floor(e)!==e)throw new Error("randomInt.below() not called with a positive integer value.");if(e>J1)throw new Error(\`Called randomInt.below() with max == \${e}, which is larger than JavaScript can handle with integer precision.\`)}async function ve(){let e=await H1(),t=r=>{CL(r);let n=zL(e),l=Math.floor(J1/r)*r;return n<l?n%r:t(r)};return t}var J1,_L,kL,Di=y(()=>{"use strict";Z1();J1=9007199254740992,_L=2097152,kL=2048});async function or(){let e=await ve();return t=>t[e(t.length)]}var Y1=y(()=>{"use strict";Di()});async function X1(e){for(let t=1;t<e.length;t++){let r=(await PL)(t);[e[t],e[r]]=[e[r],e[t]]}}var PL,yt=y(()=>{"use strict";Y1();Di();Di();PL=ve()});function We(e){return new an(t=>{t(e())})}var an,Qt=y(()=>{"use strict";an=class extends Promise{constructor(t){super(r=>{r()}),this._executor=t}static from(t){return new an(r=>{r(t())})}static resolve(t){return new an(r=>{r(t)})}static reject(t){return new an((r,n)=>{n(t)})}then(t,r){return this._promise=this._promise||new Promise(this._executor),this._promise.then(t,r)}catch(t){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(t)}}});function jt(e,t){let r=[],n=[];for(let u of t.split(\`
\`)){let g=u.split(" ");if(!u.startsWith("SetOrder ")){if(u.startsWith("Alg ")){let p=v.fromString(u.substring(4));n.push({alg:p,transformation:e.algToTransformation(p)})}else if(u.startsWith("SubgroupSizes "))for(let p=1;p<g.length;p++)r.push(parseInt(g[p]))}}let l={ordering:new Array(r.length)},o=[],i=0;o.push(0);let s=v.fromString(""),a=e.identityTransformation();for(let u=0;u<r.length;u++)i+=r[u],o.push(i),n.splice(i-1,0,{alg:s,transformation:a});if(n.length!==i)throw Error(\`Bad sgs; expected \${i-r.length} algs but saw \${n.length-r.length}\`);let f={};for(let u in e.definition.orbits){let g=e.definition.orbits[u];f[u]=new Array(g.numPieces).fill(!1)}for(let u=r.length-1;u>=0;u--){let g=[];for(let c=o[u];c<o[u+1];c++){let L=n[c].transformation;for(let m in e.definition.orbits){let d=e.definition.orbits[m];for(let F=0;F<d.numPieces;F++)(L.transformationData[m].permutation[F]!==F||L.transformationData[m].orientation[F]!==0)&&(f[m][F]||(g.push({orbitName:m,permutationIdx:F}),f[m][F]=!0))}}let p={};for(let c=o[u];c<o[u+1];c++){let L=n[c].transformation.invert(),m="";for(let d=0;d<g.length;d++){let F=g[d];m=\`\${m} \${L.transformationData[F.orbitName].permutation[F.permutationIdx]} \${L.transformationData[F.orbitName].orientation[F.permutationIdx]}\`}p[m]=n[c],n[c].alg=n[c].alg.invert(),n[c].transformation=n[c].transformation.invert()}l.ordering[u]={pieceOrdering:g,lookup:p}}return l}var Jn=y(()=>{"use strict";Be()});async function ru(){return VL??(VL=HL())}async function HL(){return jt(await ro.kpuzzle(),\`SubgroupSizes 24 21 18 15 12 9 6

Alg F
Alg F2
Alg F'
Alg D
Alg D2
Alg D'
Alg L
Alg L2
Alg L'
Alg F U
Alg F U2
Alg F U'
Alg F L
Alg F L2
Alg F L'
Alg F2 U
Alg F2 U'
Alg F2 R
Alg F2 R'
Alg F' D
Alg F' D'
Alg F' R
Alg F' R'
Alg B
Alg B2
Alg B'
Alg B R
Alg B R2
Alg B R'
Alg B2 U
Alg B2 U2
Alg B2 U'
Alg B2 R
Alg B2 R2
Alg B2 R'
Alg B' U
Alg B' U'
Alg F D' F'
Alg F2 L F2
Alg B R' B2
Alg B R' U2
Alg B2 U R'
Alg B2 R B'
Alg R
Alg R2
Alg R'
Alg R2 U
Alg R2 U2
Alg R2 U'
Alg R' U
Alg R' U2
Alg R' U'
Alg F R F'
Alg F R2 F'
Alg L2 D' L2
Alg L' B L
Alg R2 U' R
Alg R' U R2
Alg R' U R'
Alg F R F' U2
Alg F' U F
Alg F' U2 F
Alg F' U' F
Alg L F L'
Alg L F2 L'
Alg L F' L'
Alg F' D R D'
Alg F' U2 F U'
Alg F D2 B D2 F'
Alg F2 D' L2 D F2
Alg F2 L F L' F
Alg L' F2 L' F2 L
Alg F L' U' L2 F L'
Alg F2 L F L' U2 F
Alg U
Alg U2
Alg U'
Alg F2 D2 B D2 F2
Alg F2 D2 B' D2 F2
Alg L2 D2 R D2 L2
Alg L2 D2 R' D2 L2
Alg F2 D2 B D2 F2 U
Alg F2 D2 B D2 F2 U'
Alg U F2 D2 B D2 F2
Alg U F2 D2 B' D2 F2
Alg F D B D' R' F' U
Alg F' D L F U B' L'
Alg F' L' F U L U L'
Alg D' L F D R' U' F'
Alg L F L' U' F' U' F
Alg L D' F' L' U' R F
Alg F D F U F' L' F' R'
Alg F2 D' F L F2 D F' R'
Alg F D' F L' D F R2 U2 F' U'
Alg F D' L D' L F D2 L2 B' R'
Alg F L' D F R2 D2 L D F' U2
Alg F L' D F2 D' L F L2 F2 U
Alg F D F' D L2 F R' F' D' B2 U'\`)}var VL,nu=y(()=>{"use strict";lr();Jn();VL=null});async function ZL(){let{getPuzzleGeometryByName:e,ExperimentalPGNotation:t}=await Promise.resolve().then(()=>(Zn(),Hn)),r=e("megaminx",{allMoves:!0,addRotations:!0}),n=new ye(r.getKPuzzleDefinition(!0),{experimentalPGNotation:new t(r,r.getOrbitsDef(!0))});return n.definition.name="megaminx",n}async function Cs(){return JL??(JL=ZL())}async function lu(){return YL??(YL=XL())}async function XL(){return jt(await Cs(),\`SubgroupSizes 12 5 60 58 60 56 54 57 52 50 54 48 46 51 44 42 48 40 45 38 36 42 34 32 39 30 36 28 26 33 24 30 22 20 27 18 24 16 14 21 12 18 10 15 8 6 2 12 9 3

Alg Rv
Alg Rv2
Alg Rv2'
Alg Rv'
Alg Lv'
Alg Lv2
Alg Lv2'
Alg Fv
Alg Fv'
Alg BRv2
Alg Lv2 Rv'

Alg Uv
Alg Uv2
Alg Uv2'
Alg Uv'

Alg D
Alg D2
Alg D2'
Alg D'
Alg B
Alg B2
Alg B2'
Alg B'
Alg D DL
Alg D DL2
Alg D DL2'
Alg D DL'
Alg D2 FL
Alg D2 FL2
Alg D2 FL2'
Alg D2 FL'
Alg D2' FR
Alg D2' FR2
Alg D2' FR2'
Alg D2' FR'
Alg D' DR
Alg D' DR2
Alg D' DR2'
Alg D' DR'
Alg B DR
Alg B DR2'
Alg B DR'
Alg B2 BR2
Alg B2 BR2'
Alg B2 BR'
Alg B2' BL
Alg B2' BL2
Alg B2' BL2'
Alg B' DL
Alg B' DL2
Alg B' DL'
Alg D DL B
Alg D DL B2'
Alg D DL B'
Alg D DL2' L
Alg D DL2' L2
Alg D DL2' L2'
Alg D DL' FL
Alg D DL' FL2
Alg D DL' FL'
Alg D2 FL2' F
Alg D2 FL2' F2
Alg D2 FL2' F2'
Alg D2 FL' FR
Alg D2 FL' FR2
Alg D2 FL' FR'
Alg D2' FR2' R
Alg D2' FR2' R2
Alg D2' FR2' R2'
Alg B DR2' R2'
Alg B DR' BR2
Alg B2 BR' BL
Alg B2' BL2' L
Alg D DL2' L2' F
Alg DL
Alg DL2
Alg DL2'
Alg DL'
Alg DL BL
Alg DL BL2
Alg DL BL2'
Alg DL BL'
Alg DL2 L
Alg DL2 L2
Alg DL2 L2'
Alg DL2 L'
Alg DL2' FL
Alg DL2' FL2
Alg DL2' FL2'
Alg DL2' FL'
Alg D B D'
Alg D B2 D'
Alg D B2' D'
Alg D B' D'
Alg D2 B D2'
Alg D2 DL' D2'
Alg D2' DL' D2
Alg D' B D
Alg D' DL' D
Alg B2 DR2 B2'
Alg B2 DR2' B2'
Alg B2 DR' B2'
Alg B2' BR B2
Alg B2' BR2 B2
Alg B2' BR2' B2
Alg B' BL B
Alg B' BL2 B
Alg B' BL' B
Alg DL BL2' U
Alg DL BL2' U2
Alg DL BL2' U2'
Alg DL BL' L
Alg DL BL' L2
Alg DL BL' L'
Alg DL2 L2' F
Alg DL2 L2' F2
Alg DL2 L2' F2'
Alg DL2 L' FL
Alg DL2 L' FL2
Alg DL2 L' FL'
Alg DL2' FL2' FR
Alg DL2' FL2' FR2
Alg DL2' FL2' FR2'
Alg D B D' DR2
Alg D B D' DR'
Alg D2 B D2' FR2'
Alg D' B D DL
Alg B2 DR' B2' BR
Alg B2 DR' B2' BR'
Alg B2' BR2' B2 U
Alg DL BL2' U2' F
Alg D FL D'
Alg D FL2 D'
Alg D FL2' D'
Alg D FL' D'
Alg D2 FR D2'
Alg D2 FR2 D2'
Alg D2 FR2' D2'
Alg D2' DR D2
Alg D2' DR2 D2
Alg D2' DR2' D2
Alg DL2 BL DL2'
Alg DL2 BL2 DL2'
Alg DL2 BL2' DL2'
Alg DL2 BL' DL2'
Alg DL2' L2 DL2
Alg DL2' L2' DL2
Alg DL' FL2 DL
Alg DL' FL' DL
Alg D FL D' FL2'
Alg D FL L D'
Alg D FL L2 D'
Alg D FL L2' D'
Alg D FL2 F D'
Alg D FL2 F2 D'
Alg D FL2 F2' D'
Alg D FL2 L D'
Alg D FL2 L2 D'
Alg D FL2' D' FR
Alg D FL2' D' FR2
Alg D FL2' D' FR2'
Alg D FL2' F D'
Alg D FL2' F2' D'
Alg D FL2' FR2' D'
Alg D FL2' FR' D'
Alg D FL' D' FL
Alg D FL' FR D'
Alg D2 FR D2' FR2'
Alg D2 FR2 R D2'
Alg D2 FR2 R2 D2'
Alg D2 FR2 R2' D2'
Alg D2 FR2' D2' DR
Alg D2 FR2' D2' DR2
Alg D2 FR2' D2' DR2'
Alg D2 FR2' D2' DR'
Alg D2 FR2' R2' D2'
Alg D2 FR' DR2' D2'
Alg D2' DR D2 DR2'
Alg D2' DR2 BR D2
Alg D2' DR2 BR2' D2
Alg D2' DR2' BR2' D2
Alg D2' DR2' BR' D2
Alg DL2 BL2 DL2' BL'
Alg DL2 BL2 DL2' BR'
Alg DL2 BL' DL2' L'
Alg DL2' L2 DL2 BL2
Alg D FL L2 BL2 D'
Alg D FL L' FL2' D'
Alg D FL2 L FL' D'
Alg D FL2' D' FR2 DR2'
Alg B DL B'
Alg B DL2 B'
Alg B DL2' B'
Alg B DL' B'
Alg B2 D B2'
Alg B2 D2 B2'
Alg B2 D2' B2'
Alg B2 D' B2'
Alg B2 DL B2'
Alg B2' D' B2
Alg B2' DL B2
Alg B' D' B
Alg B DL B' BL
Alg B DL B' BL2
Alg B DL B' BL2'
Alg B DL B' BL'
Alg B DL2 B' BL2
Alg B DL2 B' BL2'
Alg B DL2 B' BL'
Alg B DL2' L2 B'
Alg B DL2' L2' B'
Alg B DL2' L' B'
Alg B DL' FL B'
Alg B DL' FL2 B'
Alg B DL' FL2' B'
Alg B DL' FL' B'
Alg B2 D FL B2'
Alg B2 D FL2' B2'
Alg B2 D FL' B2'
Alg B2 D2 FR2 B2'
Alg B2 D2 FR2' B2'
Alg B2 D2 FR' B2'
Alg B2 D2' B2' DR
Alg B2 D2' B2' DR2
Alg B2 D2' B2' DR2'
Alg B2 DL B2' BR
Alg B2 DL B2' BR2
Alg B2 DL B2' BR2'
Alg B2' D' B2 BR2
Alg B2' D' B2 BR2'
Alg B' D' B DR
Alg B' D' B DR2'
Alg D FL' D FR D2'
Alg D DL FL DL' D'
Alg D2' FR DR FR' D2
Alg B DL B D B2'
Alg B DL B D2' B2'
Alg B DL B' BL2 U2
Alg B DL B' BL2 U2'
Alg B DL B' BL2 U'
Alg B DL2 B' BL2' U2
Alg B DL2 B' BL2' U2'
Alg B DL2 B' BL' L2
Alg B DL2' L2' B' F2
Alg B2 D FL2' B2' F2'
Alg DR
Alg DR2
Alg DR2'
Alg DR'
Alg DR2 FR
Alg DR2 FR2
Alg DR2 FR2'
Alg DR2 FR'
Alg DR2' R
Alg DR2' R2
Alg DR2' R2'
Alg DR2' R'
Alg DR' BR
Alg DR' BR2
Alg DR' BR2'
Alg DR' BR'
Alg D DR D'
Alg D2 DR D2'
Alg B BR B'
Alg B BR2' B'
Alg B BR' B'
Alg B2 BL2 B2'
Alg B2 BL2' B2'
Alg B2 BL' B2'
Alg DR2 FR2 FL2
Alg DR2 FR2 FL2'
Alg DR2 FR2 FL'
Alg DR2 FR2' F
Alg DR2 FR2' F2
Alg DR2 FR2' F2'
Alg DR2 FR' R
Alg DR2 FR' R2
Alg DR2 FR' R'
Alg DR2' R FR
Alg DR2' R FR2'
Alg DR2' R FR'
Alg DR2' R2' U
Alg DR2' R2' U2
Alg DR2' R2' U2'
Alg DR2' R' BR2'
Alg DR' BR2' BL'
Alg D DR2 FR D'
Alg B BR B' DR
Alg B BR B' DR2
Alg B BR2' B' U2'
Alg B BR' B' BL2
Alg B BR' B' BL2'
Alg B BR' B' BL'
Alg B2 BL2' L' B2'
Alg DR2 FR2 FL' F
Alg DR2 FR2' F FL2'
Alg DR2 FR2' F FL'
Alg B BR2' U2' L2' B'
Alg D2' FL D2
Alg D2' FL2 D2
Alg D2' FL2' D2
Alg D2' FL' D2
Alg D' FR2 D
Alg D' FR2' D
Alg D' FR' D
Alg DR FR DR'
Alg DR FR2' DR'
Alg DR FR' DR'
Alg DR2 R2 DR2'
Alg DR2 R2' DR2'
Alg DR2' BR DR2
Alg DR2' BR2 DR2
Alg DR2' BR2' DR2
Alg D DR2 D' DR2'
Alg D DR2' D' DR2
Alg D2' FL D2 FR'
Alg D2' FL2 D2 FL2'
Alg D2' FL2 D2 FL'
Alg D2' FL2 L D2
Alg D2' FL2 L2 D2
Alg D2' FL2 L2' D2
Alg D2' FL2 L' D2
Alg D2' FL2' F D2
Alg D2' FL2' F2 D2
Alg D2' FL2' F2' D2
Alg D2' FL2' L D2
Alg D2' FL2' L2 D2
Alg D2' FL2' L2' D2
Alg D2' FL2' L' D2
Alg D2' FL' F D2
Alg D2' FL' F2' D2
Alg D' FR FL' D
Alg D' FR2 D FR'
Alg D' FR2 D FL2
Alg D' FR2 D FL2'
Alg D' FR2 FL D
Alg D' FR2' R2' D
Alg D' FR' R2' D
Alg DR2 R2 DR2' U2'
Alg DR2 R2' DR2' BR
Alg DR2 R2' DR2' BR2
Alg DR2 R2' DR2' BR2'
Alg DR2 R2' DR2' BR'
Alg DR2 R' BR2' DR2'
Alg DR2' BR DR2 BR2'
Alg DR2' BR2 BL DR2
Alg DR2' BR2 BL2' DR2
Alg DR2' BR2' BL' DR2
Alg D B2' BL2' B2 D'
Alg D2 B2 DL2 B2' D2'
Alg D2' FL2 L' FL2 D2
Alg D2' FL2' L D2 FL'
Alg D2' FL2' L FL2' D2
Alg D2' FL2' L2' BL2 D2
Alg B2' DR B2
Alg B2' DR2 B2
Alg B2' DR2' B2
Alg B2' DR' B2
Alg B' DR' B
Alg B2' DR FR B2
Alg B2' DR FR2 B2
Alg B2' DR FR2' B2
Alg B2' DR FR' B2
Alg B2' DR2 R B2
Alg B2' DR2 R2 B2
Alg B2' DR2 R2' B2
Alg B2' DR2 R' B2
Alg B2' DR2' B2 BR
Alg B2' DR2' B2 BR2
Alg B2' DR2' B2 BR2'
Alg B2' DR2' B2 BR'
Alg B2' DR' B2 BL2
Alg B2' DR' B2 BL2'
Alg B2' DR' B2 BL'
Alg B' DR2' BR' B
Alg B' DR' B BR
Alg B' DR' B BR2'
Alg B' DR' B BR'
Alg D2' FR2' FL FR2 D2
Alg D2' FR2' FL2 FR2 D2
Alg D2' FR2' FL2' FR2 D2
Alg D' DR2' FR DR2 D
Alg D' DR2' FR2 DR2 D
Alg D' DR' FR' DR D
Alg D' FR D' FL' D2
Alg B2 D2 DL2 D2' B2'
Alg B2 D2 DL2' D2' B2'
Alg B2 D2 DL' D2' B2'
Alg B2 D' FR' D B2'
Alg B2 DL D2' DL' B2'
Alg B2 DL D' DL' B2'
Alg B2' DR FR2' B2 F2
Alg B2' DR FR2' B2 F2'
Alg B2' DR FR' R B2
Alg B2' DR FR' R2 B2
Alg B2' DR2 R2' B2 U
Alg B2' DR2 R2' B2 U2
Alg B2' DR2 R2' B2 U2'
Alg B2' DR' B2 BL2 U'
Alg B' DR2' BR' B BL2'
Alg DR D FR D' DR'
Alg DL2' B D B' DL2
Alg D2' FR2' FL2' FR2 F D2
Alg D' DR2' FR DR2 D FL2'
Alg B2 D B D' DR B2
Alg FR
Alg FR2
Alg FR2'
Alg FR'
Alg FR2 FL
Alg FR2 FL2
Alg FR2 FL2'
Alg FR2 FL'
Alg FR2' F
Alg FR2' F2
Alg FR2' F2'
Alg FR2' F'
Alg FR' R
Alg FR' R2
Alg FR' R2'
Alg FR' R'
Alg D FR D'
Alg DR R DR'
Alg DR R2' DR'
Alg DR R' DR'
Alg DR2 BR2 DR2'
Alg DR2 BR2' DR2'
Alg DR2 BR' DR2'
Alg FR2 FL2' L
Alg FR2 FL2' L2
Alg FR2 FL2' L2'
Alg FR2 FL' F
Alg FR2 FL' F2
Alg FR2 FL' F'
Alg FR2' F FL
Alg FR2' F FL2'
Alg FR2' F FL'
Alg FR2' F2' U
Alg FR2' F2' U2
Alg FR2' F2' U2'
Alg FR2' F' R2'
Alg FR' R2' BR'
Alg DR R DR' FR
Alg DR R DR' FR2
Alg DR R2' DR' U2'
Alg DR R' DR' BR2
Alg DR R' DR' BR2'
Alg DR R' DR' BR'
Alg DR2 BR2' BL2' DR2'
Alg DR2 BR2' BL' DR2'
Alg FR2 FL' F L2
Alg FR2 FL' F L2'
Alg B' DR2 BR' DR2' B
Alg DR R2' U2' BL2 DR'
Alg D' FL D
Alg D' FL2 D
Alg D' FL2' D
Alg D' FL' D
Alg FR FL FR'
Alg FR FL2 FR'
Alg FR FL2' FR'
Alg FR FL' FR'
Alg FR2 F2 FR2'
Alg FR2 F2' FR2'
Alg FR2' R FR2
Alg FR2' R2 FR2
Alg FR2' R2' FR2
Alg D FR2 D' FR2'
Alg D FR2' D' FR2
Alg D' FL D FL'
Alg D' FL2 D FL'
Alg D' FL2 L D
Alg D' FL2 L2 D
Alg D' FL2 L2' D
Alg D' FL2 L' D
Alg D' FL2' F2' D
Alg D' FL2' L2 D
Alg D' FL2' L2' D
Alg D' FL2' L' D
Alg D' FL' F2' D
Alg FR FL2' F' FR'
Alg FR FL2' FR' L
Alg FR FL2' FR' L2
Alg FR FL2' FR' L2'
Alg FR2 F2 FR2' U2
Alg FR2 F2 FR2' U2'
Alg FR2 F2' FR2' U2'
Alg FR2 F2' FR2' R
Alg FR2 F2' FR2' R2
Alg FR2 F2' FR2' R2'
Alg FR2 F2' FR2' R'
Alg FR2 F' R2' FR2'
Alg FR2' R FR2 R2'
Alg FR2' R2 BR FR2
Alg FR2' R2 BR2 FR2
Alg FR2' R2 BR2' FR2
Alg FR2' R2' BR2' FR2
Alg FR2' R2' BR' FR2
Alg D DR2' BR2' DR2 D'
Alg D FR2' D' FR2 FL2
Alg D2' B DL B' D2
Alg D2' B2' D' B2 D2'
Alg D' FL2 L BL D
Alg D' FL2 L' FL2 D
Alg D' FL2' F2' R' D
Alg D' FL2' L FL2' D
Alg D' FL2' L2' BL2 D
Alg DR2' FR DR2
Alg DR2' FR2 DR2
Alg DR2' FR2' DR2
Alg DR2' FR' DR2
Alg DR' FR' DR
Alg DR2' FR FL DR2
Alg DR2' FR FL2 DR2
Alg DR2' FR FL2' DR2
Alg DR2' FR FL' DR2
Alg DR2' FR2 DR2 F
Alg DR2' FR2 DR2 F2
Alg DR2' FR2 DR2 F2'
Alg DR2' FR2 DR2 F'
Alg DR2' FR2' DR2 R
Alg DR2' FR2' DR2 R2
Alg DR2' FR2' DR2 R2'
Alg DR2' FR2' DR2 R'
Alg DR2' FR' DR2 BR2
Alg DR2' FR' DR2 BR2'
Alg DR2' FR' DR2 BR'
Alg DR' FR2' R' DR
Alg DR' FR' DR R
Alg DR' FR' DR R2'
Alg DR' FR' DR R'
Alg D' FR2' FL FR2 D
Alg D' FR2' FL2 FR2 D
Alg D' FR' FL' FR D
Alg B2' DR2 FR' DR2' B2
Alg B' DR2 FR' DR2' B
Alg DR2 D' FL' D DR2'
Alg DR2' FR FL2' DR2 L
Alg DR2' FR FL2' DR2 L2
Alg DR2' FR FL2' DR2 L2'
Alg DR2' FR FL' DR2 F
Alg DR2' FR FL' DR2 F2
Alg DR2' FR2 F FL2 DR2
Alg DR2' FR2 DR2 F2' U
Alg DR2' FR2 DR2 F2' U2
Alg DR2' FR2 DR2 F2' U2'
Alg DR2' FR' DR2 BR2 U'
Alg DR2' FR' DR2 BR2' BL2'
Alg DR' FR2' R' DR BR2'
Alg D' FR2' FL2 FR2 L D
Alg D' FR2' FL2 FR2 L2 D
Alg B2' DR2' FR2' R' DR2 B2
Alg DR2 D DR D' FR DR2
Alg DR2' FR' DR2 BR2 U' BL2
Alg FL
Alg FL2
Alg FL2'
Alg FL'
Alg FL L
Alg FL L2
Alg FL L2'
Alg FL L'
Alg FL2 F
Alg FL2 F2
Alg FL2 F2'
Alg FL2 F'
Alg FR2' FL2' FR2
Alg FR' FL2' FR
Alg FL L2 BL
Alg FL L2 BL2
Alg FL L2 BL2'
Alg FL L2 BL'
Alg FL L2' U
Alg FL L2' U2
Alg FL L2' U2'
Alg FL L' F
Alg FL L' F2
Alg FL L' F'
Alg FL2 F L
Alg FL2 F L2
Alg FL2 F L2'
Alg FL2 F L'
Alg FL2 F2' R
Alg FL2 F2' R2
Alg FL2 F2' R2'
Alg FR' FL2 F' FR
Alg FL L2 BL2' BR
Alg FL L2 BL2' BR2
Alg FL L2 BL' U
Alg FL L2' U BL2
Alg FL L2' U BL2'
Alg FL L2' U BL'
Alg FL L2' U2' R
Alg FL L2' U2' R2
Alg FL L' F' FL
Alg FL L' F' FL2
Alg FL L' F' FL2'
Alg B DL2' BL DL2 B'
Alg FL L2 BL' U BR2'
Alg FL2 L FL2'
Alg FL2 L2 FL2'
Alg FL2 L2' FL2'
Alg FL2 L' FL2'
Alg FL2' F2 FL2
Alg FL2' F2' FL2
Alg FL2' F' FL2
Alg FR2' FL' FR2 FL
Alg FL2 L2 FL2' L2'
Alg FL2 L2 FL2' L'
Alg FL2 L2 FL2' BL
Alg FL2 L2 FL2' BL2
Alg FL2 L2 FL2' BL2'
Alg FL2 L2 FL2' BL'
Alg FL2 L2' FL2' U
Alg FL2 L2' FL2' U2
Alg FL2 L2' FL2' U2'
Alg FL2 L2' FL2' BL
Alg FL2 L2' FL2' BL2
Alg FL2 L2' FL2' BL2'
Alg FL2 L2' FL2' BL'
Alg FL2 L' FL2' U
Alg FL2 L' FL2' U2'
Alg FL2 L' FL2' F
Alg FL2 L' FL2' F2
Alg FL2 L' FL2' F2'
Alg FL2 L' FL2' F'
Alg FL2' F L FL2
Alg FL2' F L' FL2
Alg FL2' F2 L FL2
Alg FL2' F2 L2 FL2
Alg FL2' F2 L2' FL2
Alg FL2' F2 FL2 F'
Alg FL2' F2 FL2 L2
Alg FL2' F2' R FL2
Alg FL2' F2' R2 FL2
Alg FL2' F2' R2' FL2
Alg FL2' F' R2' FL2
Alg FL2' F' R' FL2
Alg FL' FR2' FL FR2
Alg D DR2' FR2' DR2 D'
Alg D FR2' R' FR2 D'
Alg D' DL2 BL2 DL2' D
Alg B2 D2' B D2 B2
Alg DR2 D2 DR D2' DR2
Alg FR2 D FR D' FR2
Alg FL2 L2 BL' L2 FL2'
Alg FL2 L2 FL2' BL2 BR
Alg FL2 L2' BL L2' FL2'
Alg FL2 L2' FL2' BL L'
Alg DL FL DL'
Alg DL FL2 DL'
Alg DL FL2' DL'
Alg DL FL' DL'
Alg DL2 FL DL2'
Alg DL FL DL' L
Alg DL FL DL' L2
Alg DL FL DL' L2'
Alg DL FL DL' L'
Alg DL FL2 L DL'
Alg DL FL2 L2 DL'
Alg DL FL2 L2' DL'
Alg DL FL2 L' DL'
Alg DL FL2 DL' L
Alg DL FL2' DL' F2
Alg DL FL2' DL' F2'
Alg DL FL2' DL' F'
Alg DL2 FL DL2' BL
Alg DL2 FL DL2' BL2
Alg DL2 FL DL2' BL2'
Alg B DL2' FL DL2 B'
Alg B2 DL2' FL DL2 B2'
Alg FL2 F2 L' F2' FL2'
Alg FL2 F2' L' F2 FL2'
Alg FL2 F' L' F FL2'
Alg FL2' FR2' FL FR2 FL2
Alg FL2' FR' F' FR FL2
Alg DL FL DL' L BL2'
Alg DL FL DL' L BL'
Alg DL FL DL' L2 U2
Alg DL FL DL' L2 U2'
Alg DL FL2 L2' DL' U2
Alg DL FL2 L2' DL' U2'
Alg DL FL2 L' DL' F'
Alg DL FL2' DL' F2' R2
Alg DL FL2' DL' F2' R2'
Alg DL2 FL DL2' BL2 BR2
Alg B DL2 FL DL2' BL B'
Alg FL2 F2' L' F2 R2 FL2'
Alg FL2 F2' L' F2 R2' FL2'
Alg FL2' FR' F FR L FL2
Alg DL FL DL' L BL2' BR2
Alg DL FL2 L DL FL' DL2'
Alg FR F FR'
Alg FR F2 FR'
Alg FR F2' FR'
Alg FR F' FR'
Alg FR2 R FR2'
Alg FR2 R2 FR2'
Alg FR2 R2' FR2'
Alg FR2 R' FR2'
Alg FL2' L FL2
Alg FL2' L2 FL2
Alg FL2' L2' FL2
Alg FL' F FL
Alg FL' F2 FL
Alg FL' F' FL
Alg FR F FR' F'
Alg FR F2 FR' L
Alg FR F2' FR' U
Alg FR F2' FR' U2
Alg FR F2' FR' U2'
Alg FR F' FR' R
Alg FR F' FR' R2
Alg FR F' FR' R2'
Alg FR F' FR' R'
Alg FR2 R FR2' F2
Alg FR2 R FR2' R'
Alg FR2 R2' BR FR2'
Alg FR2 R2' BR2 FR2'
Alg FR2 R2' BR2' FR2'
Alg FR2 R2' BR' FR2'
Alg FL2' L2 FL2 BL
Alg FL2' L2 FL2 BL2
Alg FL2' L2' FL2 U
Alg FL' F L2 FL
Alg FL' F L2' FL
Alg FL' F FL L
Alg DR' FR2 R' FR2' DR
Alg FR F2' U2' BR FR'
Alg FR F2' U2' BR2 FR'
Alg FR F' FR R' FR2'
Alg FL2' L2' FL2 U BL2
Alg FL2' L2' FL2 U BL2'
Alg FR F L F' FR'
Alg FR F L2 F' FR'
Alg FR F L2' F' FR'
Alg FR F L' F' FR'
Alg FR F2 U F2' FR'
Alg FR F2 U2 F2' FR'
Alg FR F2 U2' F2' FR'
Alg FR F2' R F2 FR'
Alg FR F2' R2 F2 FR'
Alg FR F2' R2' F2 FR'
Alg FR FL' L FL FR'
Alg FR FL' L2 FL FR'
Alg FR FL' L' FL FR'
Alg FR2 F2' L F2 FR2'
Alg FR2 F2' L2 F2 FR2'
Alg FR2 F' U2 F FR2'
Alg FR2 F' U2' F FR2'
Alg FR2 R U R' FR2'
Alg FR2 R U' R' FR2'
Alg FR2 R2 BR2 R2' FR2'
Alg FR2 R2 BR2' R2' FR2'
Alg FR2' DR BR DR' FR2
Alg FR2' R2' U R2 FR2
Alg FR2' R2' U2 R2 FR2
Alg FR2' R' BR2 R FR2
Alg FR2' R' BR2' R FR2
Alg FR2' R' BR' R FR2
Alg FL2 L BL L' FL2'
Alg FL2 L2 U2' L2' FL2'
Alg FL2 DL' BL2 DL FL2'
Alg FL2' F2 R2' F2' FL2
Alg FL2' L2' BL2 L2 FL2
Alg FL' F2 L F2' FL
Alg FL' F2 L2 F2' FL
Alg FL' F' R' F FL
Alg FL' FR R' FR' FL
Alg FR F L2' F' FR' BL
Alg FR F L2' F' FR' BL2
Alg FR F L' F' FR' F'
Alg FR F2 U2 BR2 F2' FR'
Alg FR F2 U2 BR2' F2' FR'
Alg FR F2' R F2 R2' FR'
Alg FR F2' R2' F2 FR' R'
Alg FR FL' L FL FR' F'
Alg FR2 F' U2 F FR2' L2'
Alg FR F L2 BL' L2 F' FR'
Alg FR F L2' F U' F2' FR'
Alg R
Alg R2
Alg R2'
Alg R'
Alg R2 F
Alg R2 F2
Alg R2 F2'
Alg R2 F'
Alg R2' U
Alg R2' U2
Alg R2' U2'
Alg R2' U'
Alg R' BR
Alg R' BR2
Alg R' BR2'
Alg R' BR'
Alg DR BR DR'
Alg DR BR2' DR'
Alg DR BR' DR'
Alg FR R FR'
Alg R2 F2' L
Alg R2 F2' L2
Alg R2 F2' L2'
Alg R2 F' U
Alg R2 F' U2
Alg R2 F' U'
Alg R2' U F
Alg R2' U F2'
Alg R2' U F'
Alg R2' U2' BL
Alg R2' U2' BL2
Alg R2' U2' BL2'
Alg R2' U' BR2'
Alg DR BR DR' R
Alg DR BR DR' R2
Alg DR BR2' BL2' DR'
Alg DR BR2' BL' DR'
Alg R2 F' U L2
Alg R2 F' U L2'
Alg FR' F FR
Alg FR' F2 FR
Alg FR' F2' FR
Alg FR' F' FR
Alg R F R'
Alg R F2 R'
Alg R F2' R'
Alg R F' R'
Alg R2 U2 R2'
Alg R2 U2' R2'
Alg R2' BR R2
Alg R2' BR2 R2
Alg R2' BR2' R2
Alg FR R2 FR' R2'
Alg FR R2' FR' R2
Alg FR' F FR F'
Alg FR' F2 FR F'
Alg FR' F2 FR L
Alg FR' F2 FR L2
Alg FR' F2 FR L2'
Alg FR' F2 FR L'
Alg FR' F2' FR U2'
Alg FR' F2' FR L2
Alg FR' F2' FR L2'
Alg FR' F2' FR L'
Alg FR' F' FR U2'
Alg R F2' U' R'
Alg R F2' R' L
Alg R F2' R' L2
Alg R F2' R' L2'
Alg R2 U2 R2' BL2
Alg R2 U2 R2' BL2'
Alg R2 U2' BR R2'
Alg R2 U2' BR2 R2'
Alg R2 U2' R2' BL2'
Alg R2 U2' R2' BR2'
Alg R2 U2' R2' BR'
Alg R2 U' BR2' R2'
Alg R2' BR R2 BR2'
Alg DR BR2 BL2' BR2' DR'
Alg FR R2' FR' R2 F2
Alg FR' F2 L' F2 FR
Alg FR' F2' U2' BR' FR
Alg FR' F2' L F2' FR
Alg DR' R DR
Alg DR' R2 DR
Alg DR' R2' DR
Alg DR' R' DR
Alg DR' R DR F
Alg DR' R DR F2
Alg DR' R DR F2'
Alg DR' R DR F'
Alg DR' R2 DR U
Alg DR' R2 DR U2
Alg DR' R2 DR U2'
Alg DR' R2 DR U'
Alg DR' R2' DR BR
Alg DR' R2' DR BR2
Alg DR' R2' DR BR2'
Alg DR' R2' DR BR'
Alg DR' R' DR BR
Alg DR' R' DR BR2'
Alg DR' R' DR BR'
Alg B2' DR2' R' DR2 B2
Alg DR2' FR' F FR DR2
Alg DR2' FR' F2 FR DR2
Alg DR2' FR' F' FR DR2
Alg DR' R DR F2' L
Alg DR' R DR F2' L2
Alg DR' R DR F2' L2'
Alg DR' R DR F' U
Alg DR' R DR F' U2
Alg DR' R DR F' U'
Alg DR' R2 U2' BL DR
Alg DR' R2 U2' BL2 DR
Alg DR' R2 U2' BL2' DR
Alg DR' R2 DR U F2
Alg DR' R' DR BR2' BL2'
Alg DR2' FR' F2 FR DR2 L
Alg DR2' FR' F2 FR DR2 L2
Alg DR' FR' F' FR R' DR
Alg BR
Alg BR2
Alg BR2'
Alg BR'
Alg BR2' U
Alg BR2' U2
Alg BR2' U2'
Alg BR2' U'
Alg BR' BL
Alg BR' BL2
Alg BR' BL2'
Alg BR' BL'
Alg B BL B'
Alg B BL2' B'
Alg B BL' B'
Alg BR2' U2 F
Alg BR2' U2 F2
Alg BR2' U2 F2'
Alg BR2' U2 F'
Alg BR2' U2' L
Alg BR2' U2' L2
Alg BR2' U2' L2'
Alg BR2' U' BL2'
Alg BR' BL U
Alg BR' BL U2
Alg BR' BL U2'
Alg BR' BL U'
Alg B BL B' BR
Alg B BL B' BR2
Alg B BL B' BR2'
Alg B BL2' L2' B'
Alg B BL2' L' B'
Alg BR2' U2' L F2
Alg BR2' U2' L F2'
Alg BR2' U2' L F'
Alg BR2 U BR2'
Alg BR2 U2 BR2'
Alg BR2 U2' BR2'
Alg BR2 U' BR2'
Alg BR2' BL BR2
Alg BR2' BL2 BR2
Alg BR2' BL2' BR2
Alg BR R BR' R'
Alg BR2 U BR2' U2'
Alg BR2 U BR2' U'
Alg BR2 U BR2' F
Alg BR2 U BR2' F2
Alg BR2 U BR2' F2'
Alg BR2 U BR2' F'
Alg BR2 U2 BR2' F
Alg BR2 U2 BR2' F2
Alg BR2 U2 BR2' F2'
Alg BR2 U2 BR2' F'
Alg BR2 U2 BR2' L
Alg BR2 U2 BR2' L2
Alg BR2 U2 BR2' L2'
Alg BR2 U2' BL BR2'
Alg BR2 U2' BL2 BR2'
Alg BR2 U2' BL' BR2'
Alg BR2 U2' BR2' L
Alg BR2 U2' BR2' L2'
Alg BR2 U2' BR2' BL2'
Alg BR2 U2' BR2' BL'
Alg BR2 U' BL BR2'
Alg BR2 U' BL2' BR2'
Alg BR2 U' BL' BR2'
Alg BR2' BL BR2 U2
Alg BR2' BL BR2 U2'
Alg BR2' BL BR2 BL2'
Alg BR2' BL BR2 BL'
Alg B BL2 L2' BL2' B'
Alg DR' R2 F R2' DR
Alg BR2 U F' U2' BR2'
Alg BR2 U BR2' U2' BL'
Alg BR2 U2 F U' BR2'
Alg BR2 U2 BR2' L F2'
Alg B' BR B
Alg B' BR2 B
Alg B' BR2' B
Alg B' BR' B
Alg B' BR2 B U
Alg B' BR2 B U2
Alg B' BR2 B U2'
Alg B' BR2 B U'
Alg B' BR2' B BL
Alg B' BR2' B BL2
Alg B' BR2' B BL2'
Alg B' BR2' B BL'
Alg B' BR' B BL
Alg B' BR' B BL2'
Alg B' BR' B BL'
Alg B' BR2 U2' L B
Alg B' BR2 U2' L2 B
Alg B' BR2 U2' L2' B
Alg B' BR2 B U2 F
Alg B' BR2 B U2 F2
Alg B' BR2 B U2 F2'
Alg B' BR2 B U2 F'
Alg B' BR2' B BL U
Alg B' BR2' B BL U2
Alg B' BR2' B BL U2'
Alg B' BR2' B BL U'
Alg B' BR' B BL2' L2'
Alg B' BR' B BL2' L'
Alg BR2 R U R' BR2'
Alg B' BR2 U2' L B F2'
Alg B' BR2 U2' L B F'
Alg B' BR' B BR2 BL BR2'
Alg B' BR2 U R BR' R' B
Alg BR U BR'
Alg BR U2 BR'
Alg BR U2' BR'
Alg BR U' BR'
Alg BR2 BL BR2'
Alg BR2 BL2 BR2'
Alg BR2 BL2' BR2'
Alg BR2 BL' BR2'
Alg R2' F R2
Alg R2' F2 R2
Alg R2' F2' R2
Alg R' U R
Alg R' U2 R
Alg R' U' R
Alg BR U BR' U'
Alg BR U2 BR' F
Alg BR U2' BR' L
Alg BR U2' BR' L2
Alg BR U2' BR' L2'
Alg BR U' BL BR'
Alg BR U' BL2 BR'
Alg BR U' BL2' BR'
Alg BR U' BR' BL'
Alg BR2 BL BR2' U2
Alg BR2 BL BR2' BL'
Alg R2' F2' R2 L
Alg R2' F2' R2 L2
Alg R' U F2 R
Alg R' U F2' R
Alg R' U R F
Alg BR U' BR BL' BR2'
Alg BR U F U' BR'
Alg BR U F2 U' BR'
Alg BR U F2' U' BR'
Alg BR U F' U' BR'
Alg BR U2 L U2' BR'
Alg BR U2 L2 U2' BR'
Alg BR U2 L2' U2' BR'
Alg BR U2' BL U2 BR'
Alg BR U2' BL2 U2 BR'
Alg BR U2' BL2' U2 BR'
Alg BR R' F R BR'
Alg BR R' F2 R BR'
Alg BR R' F' R BR'
Alg BR2 U2' F U2 BR2'
Alg BR2 U2' F2 U2 BR2'
Alg BR2 U' L2 U BR2'
Alg BR2 U' L2' U BR2'
Alg BR2 BL L BL' BR2'
Alg BR2 BL L' BL' BR2'
Alg BR2' BL2' L BL2 BR2
Alg BR2' BL2' L2 BL2 BR2
Alg R2 F2 L F2' R2'
Alg R2 F2 L2 F2' R2'
Alg R2 F2 L2' F2' R2'
Alg R2' U2 BL2' U2' R2
Alg R' U2 F U2' R
Alg R' U2 F2 U2' R
Alg R' U' BL' U R
Alg R' BR BL' BR' R
Alg BR U F' U' BR' U'
Alg BR U2 L' BL2 U2' BR'
Alg BR U2' BL U2 BL2' BR'
Alg BR U2' BL2' U2 BR' BL'
Alg BR R' F R BR' U'
Alg BR2 U' L2 U BR2' F2'
Alg BR2 U' L2 U BR2' F'
Alg BR U F2' U L' U2' BR'
Alg BR U F2' L' F U' BR'
Alg F
Alg F2
Alg F2'
Alg F'
Alg F L
Alg F L2
Alg F L2'
Alg F L'
Alg F2 U
Alg F2 U2
Alg F2 U2'
Alg F2 U'
Alg F L2' BL
Alg F L2' BL2
Alg F L2' BL2'
Alg F L' U
Alg F L' U2
Alg F L' U2'
Alg F L' U'
Alg F2 U L
Alg F2 U L2
Alg F2 U L2'
Alg F2 U L'
Alg F L' U BL2
Alg F L' U BL2'
Alg F L' U BL'
Alg F L' U' F
Alg F L' U' F2
Alg F L' U' F2'
Alg F2 L F2'
Alg F2 L2 F2'
Alg F2 L2' F2'
Alg F2 L' F2'
Alg F2' U2 F2
Alg F2' U2' F2
Alg F2' U' F2
Alg F2 L2 F2' L2'
Alg F2 L2 F2' L'
Alg F2 L2' BL F2'
Alg F2 L2' BL2 F2'
Alg F2 L2' BL2' F2'
Alg F2 L' F2' U
Alg F2 L' F2' U2
Alg F2 L' F2' U2'
Alg F2 L' F2' U'
Alg F2 L' BL F2'
Alg F2 L' BL2 F2'
Alg F2 L' BL2' F2'
Alg F2' U L F2
Alg F2' U L2 F2
Alg F2' U L' F2
Alg F2' U2 F2 U2'
Alg F2' U2 F2 U'
Alg F2' U2 F2 L2
Alg F2' U2 F2 L2'
Alg F2' U2 F2 L'
Alg F2' U2 L F2
Alg F' R' F R
Alg F L2 BL L2' F'
Alg F L2 BL2 L2' F'
Alg F2 L2 F2' L2' U2'
Alg F2 L2' BL' L F2'
Alg F2 L' F U2' F2
Alg F2 L' F' U' F'
Alg FL F FL'
Alg FL F2 FL'
Alg FL F2' FL'
Alg FL F' FL'
Alg FL F FL' L
Alg FL F FL' L2
Alg FL F FL' L2'
Alg FL F FL' L'
Alg FL F2 FL' L
Alg FL F2 FL' L2
Alg FL F2 FL' L2'
Alg FL F2 FL' L'
Alg FL F2' FL' U2
Alg FL F2' FL' U2'
Alg FL F2' FL' U'
Alg F2 U2 L' U2' F2'
Alg F2 U2' L' U2 F2'
Alg F2 U' L' U F2'
Alg FL F FL' L2 BL
Alg FL F FL' L2 BL2
Alg FL F FL' L2 BL2'
Alg FL F2 FL' L2' BL
Alg FL F2 FL' L2' BL2
Alg FL F2 FL' L2' BL2'
Alg FL F2 FL' L' U'
Alg FL F FL' F2' L' F2
Alg F2 U F U L U2' F2'
Alg F2' L F2
Alg F2' L2 F2
Alg F2' L2' F2
Alg F2' L' F2
Alg F' U F
Alg F' U2 F
Alg F' U2' F
Alg F' U' F
Alg R U R'
Alg R U2' R'
Alg R U' R'
Alg F R' F' R
Alg F2' L F2 L'
Alg F2' L2' BL F2
Alg F2' L2' BL2 F2
Alg F2' L2' BL2' F2
Alg F' U F U'
Alg F' U F L
Alg F' U F L2
Alg F' U F L2'
Alg F' U F L'
Alg R U2' R' BL2
Alg R U2' R' BL2'
Alg R U2' R' BL'
Alg F2' L' F U' F
Alg F2 L2 BL L2' F2'
Alg F2 L2 BL2 L2' F2'
Alg F2 L2 BL2' L2' F2'
Alg F2 L2 BL' L2' F2'
Alg F2' U BL U' F2
Alg F2' U BL' U' F2
Alg F2' L' BL L F2
Alg F2' L' BL2 L F2
Alg F2' L' BL2' L F2
Alg F2' L' BL' L F2
Alg F' U2 L U2' F
Alg F' U2 L2 U2' F
Alg F' U2 L2' U2' F
Alg F' U2' BL2 U2 F
Alg R U L U' R'
Alg R U L' U' R'
Alg R F' L F R'
Alg R2 U2' L2 U2 R2'
Alg R2 U' BL2 U R2'
Alg R2 U' BL2' U R2'
Alg R2 U' BL' U R2'
Alg R2 BR BL' BR' R2'
Alg F2 L2 BL2' L2' F2' U2
Alg F2' U BL U' F2 L
Alg F2' U BL' U' F2 L2
Alg F2' U BL' U' F2 L2'
Alg F2' L' BL L F2 U2
Alg F2' L' BL L F2 U2'
Alg F2' L' BL' L F2 U
Alg F2' L' BL' L F2 U2
Alg F' U2 L' U BL2' U2 F
Alg F' U2' BL L' BL2' U2 F
Alg U
Alg U2
Alg U2'
Alg U'
Alg U L
Alg U L2
Alg U L2'
Alg U L'
Alg U2 BL
Alg U2 BL2
Alg U2 BL2'
Alg U2 BL'
Alg U L' BL
Alg U L' BL2
Alg U L' BL2'
Alg U L' BL'
Alg U2 BL L
Alg U2 BL L2
Alg U2 BL L2'
Alg U2 BL L'
Alg U F' L F
Alg U L' BL' U
Alg U L' BL' U2
Alg U2 L U2'
Alg U2 L2 U2'
Alg U2 L2' U2'
Alg U2 L' U2'
Alg U2' BL2 U2
Alg U2' BL2' U2
Alg U2' BL' U2
Alg U2 L2 U2' L2'
Alg U2 L2 U2' L'
Alg U2 L' U2' BL
Alg U2 L' U2' BL2
Alg U2 L' U2' BL2'
Alg U2 L' U2' BL'
Alg U2' BL L U2
Alg U2' BL L2 U2
Alg U2' BL L2' U2
Alg U2' BL L' U2
Alg U2' BL2 U2 L2
Alg U2' BL2 U2 L2'
Alg U2' BL2 U2 L'
Alg U2' BL2 U2 BL2'
Alg U2' BL2 U2 BL'
Alg U2' BL2 L U2
Alg U' BR' U BR
Alg U2 L' U BL2' U2
Alg U2 L2' U2' L2 BL2
Alg U2 L2' U2' L2 BL2'
Alg U2 L' U' BL' U'
Alg U2' BL2 U' L U2'
Alg F U F'
Alg F U2 F'
Alg F U2' F'
Alg F U' F'
Alg F U F' L
Alg F U F' L2
Alg F U F' L2'
Alg F U F' L'
Alg F U2 F' L
Alg F U2 F' L2
Alg F U2 F' L2'
Alg F U2 F' L'
Alg F U2' BL2 F'
Alg F U2' BL2' F'
Alg F U2' BL' F'
Alg U2 BL2 L' BL2' U2'
Alg U2 BL' L' BL U2'
Alg U2 BL2' L' BL2 U2'
Alg F U2 F' L' BL'
Alg F U F' U2' L' U2
Alg U2 L U2 L2' U' BL' U2
Alg U2' L U2
Alg U2' L2 U2
Alg U2' L2' U2
Alg U2' L' U2
Alg U' BL U
Alg U' BL2 U
Alg U' BL2' U
Alg U' BL' U
Alg BR BL BR'
Alg BR BL2' BR'
Alg BR BL' BR'
Alg U BR' U' BR
Alg U2' L U2 L'
Alg U' BL U L
Alg U' BL U L2
Alg U' BL U L2'
Alg U' BL U L'
Alg U' BL U BL'
Alg U2' L' U BL' U
Alg U' BL2 L BL2' U
Alg U' BL2 L2 BL2' U
Alg U' BL2 L2' BL2' U
Alg U' BL2 L' BL2' U
Alg BR U' L U BR'
Alg BR U' L2 U BR'
Alg BR U' L2' U BR'
Alg BR U' L' U BR'
Alg BR BL L BL' BR'
Alg BR BL L' BL' BR'
Alg BR2 BL2' L BL2 BR2'
Alg BR2 BL2' L2 BL2 BR2'
Alg U2' L BL2' L' BL2 U2
Alg U2' L2 F' L2' F U2
Alg U2' L' DL L DL' U2
Alg U2' BL2' L BL2 L' U2
Alg U2' BL2' L2 BL2 L2' U2
Alg U' BL2 L BL2' U BL
Alg U' BL2 L2 BL2' U L
Alg U' BL2 L2 BL2' U BL2'
Alg U' BL2 L2 BL2' U BL'
Alg U' BL2 L2 BL2' L2' U
Alg BR BL L' BL' BR' BL2'
Alg BR BL L' BL' BR' BL'
Alg U' BL U BL U' L2' BL2' U
Alg U' BL2 U' L2 U L' BL2' U
Alg L
Alg L2
Alg L2'
Alg L'
Alg L' BL
Alg L' BL2
Alg L' BL2'
Alg L' BL'
Alg U BL U'
Alg U BL2 U'
Alg U BL2' U'
Alg U BL' U'
Alg U BL U' L
Alg U BL U' L2
Alg U BL U' L2'
Alg U BL U' L'
Alg U BL U' BL'
Alg L2' BL L2
Alg L2' BL2 L2
Alg L2' BL2' L2
Alg L2' BL' L2
Alg L2 DL L2' DL'
Alg L2' BL L2 BL2'
Alg L2' BL L2 BL'
Alg F' L2 BL L2' F
Alg F' L2 BL2 L2' F
Alg F' L2 BL2' L2' F
Alg F' L2 BL' L2' F
Alg L2 DL L' DL' L'
Alg L2' U BL2' U' L2
Alg L2' BL L2' BL2' L'
Alg L2' BL L' BL2' L2'
Alg L2' DL L' DL' L2
Alg L' U' L' U L2
Alg U L' DL L DL' U'
Alg F' L2 BL L2' BL2' F
Alg L2 DL' BL DL2 L2' DL'
Alg L2' U BL2' U' BL L2
Alg L2' BL' U BL' U' L2
Alg L2' BL' L2 U' L' U
Alg U' L U
Alg U' L2 U
Alg U' L2' U
Alg U' L' U
Alg U' L2' U BL
Alg U' L2' U BL2
Alg U' L2' U BL2'
Alg U' L2' U BL'
Alg U' L' U BL
Alg U' L' U BL2
Alg U' L' U BL2'
Alg U' L' U BL'
Alg U' L' U L BL L'
Alg U' L' U L2 BL L2'
Alg U' L' U BL U' L2 U
Alg L2 BL L2'
Alg L2 BL2 L2'
Alg L2 BL2' L2'
Alg L2 BL' L2'
Alg L2 BL L2' BL'
Alg L DL L' DL'
Alg DL L DL' L'
Alg L U' L2 U L2
Alg L DL' BL DL L'
Alg L DL' BL2 DL L'
Alg L DL' BL' DL L'
Alg DL L DL' L' BL'
Alg L2 BL L' DL L' DL'
Alg FL' L BL L' FL
Alg FL' L BL2 L' FL
Alg FL' L BL2' L' FL
Alg FL' L BL' L' FL
Alg FL' DL' BL DL FL
Alg FL' DL' BL2 DL FL
Alg FL' DL' BL2' DL FL
Alg FL' DL' BL' DL FL
Alg L2 BL2' U BL2 U' L2'
Alg FL' L BL L' FL BL2'
Alg FL' L BL' L' FL BL
Alg U' F U BL U' F' U
Alg U' F U BL2 U' F' U
Alg U' F U BL2' U' F' U
Alg F' FL2' DL' BL' DL FL2 F
Alg L2' BL2 L2' BL' L2 BL' L2
Alg DL L DL2' BL' DL2 L' DL'
Alg DL2 FL2' DL2 BL' DL2' FL2 DL2'
Alg FL' L U BL2' U' BL L' FL
Alg FL' L2 U' L' U BL2 L' FL
Alg L BL L'
Alg L BL2 L'
Alg L BL2' L'
Alg L BL' L'
Alg DL' BL DL
Alg DL' BL2 DL
Alg DL' BL2' DL
Alg DL' BL' DL
Alg L BL L' BL'
Alg L' DL L DL'
Alg L BL2 L' DL' BL' DL
Alg L U BL2' U' BL2 L'
Alg L BL2' U BL2 U' L'
Alg DL' B' BL2 B BL2' DL
Alg DL' BL2 B' BL2' B DL
Alg U BL2' DL2' BL2 U' BL2' DL2
Alg B' BL2 L2 BL2' B BL2 L2'
Alg L U BL2' U' BL2 L' BL2'
Alg L U BL2' U' BL2 L' BL'
Alg L BL B BL' L' BL B'
Alg L BL2' U BL2 U' L' BL2
Alg L BL' U BL2 U' BL L'
Alg L BL' U BL2' U' BL L'
Alg L BL' U BL' U' BL L'
Alg L2 BL2 L2' BL' L2 BL' L2'
Alg DL' BL B' BL2' B BL' DL
Alg L BL2' L U2 BR' U' BR U' L2'
Alg L BL2' L BL L' BL L BL2' L2'
Alg BL
Alg BL2
Alg BL2'
Alg BL'
Alg U BR BL2 BR' BL2' U'
Alg B BL DL BL' DL' B'
Alg L' BL2' DL' BL2 DL L
Alg BR B BL B' BL' BR'
Alg U BR BL2 BR' BL2' U' BL2
Alg U BL BR BL' BR' U'
Alg U BR BL BR' BL' U'
Alg U' L' BL2' L BL2 U
Alg B' BR' BL2' BR BL2 B
Alg L BL2 U BL2' U' L'
Alg BR B BL2 B' BL2' BR'
Alg U BL2 U' BL' U BL' U'
Alg B BL DL BL DL' BL2' B'
Alg B BL2 DL BL' DL' BL' B'
Alg B' BL' B BL2' B' BL2' B
Alg U BL U' BL2 U BL2 U' BL2
Alg U BR2 B' BR2' U' BR B BR'
Alg BL2 BR B DL' B DL B2' BR'
Alg B BL2' B2' BR B BR' B BL2 B'
Alg U' BL' L' BL L U BL
Alg B' BL2 B BL B' BL2 B
Alg B' BL2' B BL' B' BL2' B
Alg B' BL' BR' BL' BR BL2 B
Alg B' BL2' BR' BL BR BL B
Alg U' BL' L' BL' L BL2 U BL'
Alg L' BL' L' DL L DL' BL L BL
Alg L U BL U' BL' L'
Alg L BL U BL' U' L'
Alg BR' U' BL' U BL BR
Alg L U2 BR' U' BR U' L'
Alg U BL U2' L U L2' BL L BL2'
Alg U' L2 F' L' F2 U' F' U2 L'
Alg U BR' U' L U BR U' L'
Alg U BR B BR' U' BR B' BR'
Alg U' L U BR' U' L' U BR
Alg B DL' B' BR B DL B' BR'
Alg L' DL' B DL L DL' B' DL
Alg BR B BR' U BR B' BR' U'
Alg BR B DL' B' BR' B DL B'
Alg U BR2' U2 L2 U2' BR2 U2 L2' U2
Alg U2' L2 U2' BR2' U2 L2' U2' BR2 U'
Alg U BL' B' BL U' L U2 BL' B BL U2' L'
Alg U BR' U' L F' L2' U BR U' L2 F L'
Alg U BR U' L U BR' U' L'
Alg U' BL2 B BL2' U BL2 B' BL2'
Alg L U BR U' L' U BR' U'
Alg L BL2' B' BL2 L' BL2' B BL2
Alg U BR' U2 L2 U2' BR U2 L2' U2
Alg L' BL2 L2' F' L2 BL2' L2' F L2'
Alg U BL2' U R U' BL2 U' L U2 R' U2' L'
Alg U BR U' L2 F L' U BR' U' L F' L2'
Alg U L' BL2 L' FL' L BL2' L U' L2' FL L2
Alg U BR2' U R' U2' L U2 R U' BR2 U' L'\`)}var JL,YL,ou=y(()=>{"use strict";He();Jn();JL=null;YL=null});async function Ps(){return $L??($L=eB())}async function iu(){return{ordering:(await Ps()).ordering.slice(2)}}async function eB(){return jt(await Pe.pyraminx.kpuzzle(),\`SubgroupSizes 12 9 12 3 10 3 8 6 2 3 3 3 3

Alg B
Alg B'
Alg y
Alg B y
Alg B' y
Alg y'
Alg B y'
Alg B' y'
Alg BR'
Alg B BR'
Alg B' BR'

Alg L
Alg L'
Alg L F
Alg L' F
Alg F
Alg L F'
Alg L' F'
Alg F'

Alg L B' U L' B
Alg L U L'
Alg L U' L'
Alg L U L' U'
Alg B' U B
Alg B' U' B
Alg B' U' B U
Alg L U' L' R
Alg L U' L' R'
Alg L' R' L
Alg L' R' L R

Alg R
Alg R'

Alg R' U R
Alg R' U' R
Alg R' U R U'
Alg B U B'
Alg B U' B'
Alg R B' R' B
Alg L R L' R U' R
Alg R L R' L'
Alg L' R' U R L

Alg U
Alg U'

Alg R U R' U'
Alg U R U' R'
Alg L' U' L U
Alg U' L' U L
Alg U L R' L' R U'
Alg U' R' L R L' U
Alg L' U' L U' R U' R'

Alg R U' R' U
Alg L' U L U'
Alg U' R U R'
Alg U L' U' L
Alg L R' L' R L' U L U'

Alg L' U L U' L R' L' R

Alg b
Alg b'

Alg l
Alg l'

Alg r
Alg r'

Alg u
Alg u'\`)}var $L,su=y(()=>{"use strict";lr();Jn();$L=null});async function tB(){let{getPuzzleGeometryByName:e,ExperimentalPGNotation:t}=await Promise.resolve().then(()=>(Zn(),Hn)),r=e("skewb",{allMoves:!0,addRotations:!0});return new ye(r.getKPuzzleDefinition(!0),{experimentalPGNotation:new t(r,r.getOrbitsDef(!0))})}async function Ns(){return rB??(rB=tB())}async function Ms(){return nB??(nB=lB())}async function au(){return{ordering:(await Ms()).ordering.slice(1)}}async function lB(){return jt(await Ns(),\`SubgroupSizes 24 6 5 12 9 3 4 9 3 3

Alg y
Alg y2
Alg y'
Alg F
Alg F'
Alg y U
Alg y U'
Alg y L
Alg y L'
Alg y F
Alg y F'
Alg y2 U
Alg y2 U'
Alg y2 B
Alg y2 B'
Alg y' U
Alg y' F'
Alg y U L'
Alg y U B
Alg y2 U B
Alg y2 U B'
Alg y2 U' B
Alg y2 U' B'

Alg U
Alg U'
Alg U L
Alg U L'
Alg U' R'

Alg R
Alg R'
Alg R B
Alg R' L'

Alg U B' U
Alg U' L U
Alg U' L' U
Alg U' B U'
Alg R L R'
Alg R B' R
Alg U B L U'
Alg U B' U B'
Alg U B' L' U
Alg U' L B U'
Alg R' B L' R'

Alg L
Alg L'
Alg L B
Alg L B'
Alg L B L
Alg L B L'
Alg L B' L
Alg L B' L'

Alg B
Alg B'

Alg L' B L
Alg L' B' L
Alg R' L' B L R

Alg B L' B L B'
Alg B L' B' L B'
Alg U L U B U' L' U'
Alg R L R' B' R L' R'
Alg U B' R L R' B' U B
Alg U' B U L U' B' U L'
Alg L U' B U L' U' B' U
Alg R B' U R B L U' B

Alg U L U' B' U L' U' B
Alg U' B L U L B' U' L'

Alg U R' U' L B R' B' R
Alg R' U' R U B' U' B L\`)}var rB,nB,fu=y(()=>{"use strict";He();Jn();rB=null;nB=null});var uu={};mt(uu,{cachedData222:()=>ru,cachedMegaminxKPuzzleWithoutMO:()=>Cs,cachedSGSDataMegaminx:()=>lu,sgsDataPyraminx:()=>Ps,sgsDataPyraminxFixedOrientation:()=>iu,sgsDataSkewb:()=>Ms,sgsDataSkewbFixedCorner:()=>au,skewbKPuzzleWithoutMOCached:()=>Ns});var gu=y(()=>{"use strict";nu();ou();su();fu()});async function Yn(e,t){let r=new Lt;r.experimentalPushAlg(e);for(let n of t){let l=(await or())(n);l!==null&&r.push(B.fromString(l))}return r.toAlg()}var yi=y(()=>{"use strict";Be();yt()});function Su(){}function fB(e){function t(){}return t.prototype=e||{},new t}function uB(e){return e instanceof Array?e[0]:null}function co(e,t,r){var n=Gi,l=gB,o=uB,i=n[e],s=o(i);i&&!s?H=i:(H=n[e]=t?l(t):{},H.castableTypeMap$=r,H.constructor=H,!t&&(H.typeMarker$=Su));for(var a=3;a<arguments.length;++a)arguments[a].prototype=H;s&&(H.___clazz$=s)}function gB(e){var t=Gi;return fB(t[e])}function pB(){}function wi(e){return e<<24>>24}function Ys(){this.typeName=null,this.simpleName=null,this.packageName=null,this.compoundName=null,this.canonicalName=null,this.typeId=null,this.arrayLiterals=null}function Xs(e,t){var r;return r=new Ys,r.packageName=e,r.compoundName=t,r}function zr(e,t,r){var n;return n=Xs(e,t),LB(r,n),n}function cB(e,t){var r;return r=Xs(e,t),r.modifiers=2,r}function Oi(e,t){var r;return r=Xs("",e),r.typeId=t,r.modifiers=1,r}function xu(e,t){var r=e.arrayLiterals=e.arrayLiterals||[];return r[t]||(r[t]=e.createClassLiteralForArray(t))}function mB(e){if(e.isPrimitive())return null;var t=e.typeId,r=Gi[t];return r}function LB(e,t){if(!!e){t.typeId=e;var r=mB(t);if(!r){Gi[e]=[t];return}r.___clazz$=t}}function te(e,t){return xu(e,t)}function Y(e,t,r,n,l,o){var i;return i=wu(l,n),re(te(e,o),t,r,l,i),i}function rt(e,t,r,n,l,o){return bu(e,t,r,n,l,0,o)}function bu(e,t,r,n,l,o,i){var s,a,f,u,g;if(u=l[o],f=o==i-1,s=f?n:0,g=wu(s,u),re(te(e,i-o),t[o],r[o],s,g),!f)for(++o,a=0;a<u;++a)g[a]=bu(e,t,r,n,l,o,i);return g}function re(e,t,r,n,l){return l.___clazz$=e,l.castableTypeMap$=t,l.typeMarker$=Su,l.__elementTypeId$=r,l.__elementTypeCategory$=n,l}function wu(e,t){var r=new Array(t),n;switch(e){case 6:n={l:0,m:0,h:0};break;case 7:n=0;break;case 8:n=!1;break;default:return r}for(var l=0;l<t;++l)r[l]=n;return r}function Bu(e){var t,r,n;return t=e&nt,r=e>>22&nt,n=e<0?wr:0,BB(t,r,n)}function BB(e,t,r){return{l:e,m:t,h:r}}function dB(e,t){var r,n,l;return r=e.l+t.l,n=e.m+t.m+(r>>22),l=e.h+t.h+(n>>22),{l:r&nt,m:n&nt,h:l&wr}}function qt(e,t){return{l:e.l&t.l,m:e.m&t.m,h:e.h&t.h}}function $s(e){var t,r;return e>-129&&e<128?(t=e+128,Ui==null&&(Ui=Y(ZB,fe,293,256,0,1)),r=Ui[t],!r&&(r=Ui[t]=Bu(e)),r):Bu(e)}function Eu(e,t){var r,n;return r=e.h>>19,n=t.h>>19,r==0?n!=0||e.h>t.h||e.h==t.h&&e.m>t.m||e.h==t.h&&e.m==t.m&&e.l>=t.l:!(n==0||e.h<t.h||e.h==t.h&&e.m<t.m||e.h==t.h&&e.m==t.m&&e.l<t.l)}function Os(e,t){return e.l!=t.l||e.m!=t.m||e.h!=t.h}function Ws(e,t){return{l:e.l|t.l,m:e.m|t.m,h:e.h|t.h}}function Ei(e,t){var r,n,l;return t&=63,t<22?(r=e.l<<t,n=e.m<<t|e.l>>22-t,l=e.h<<t|e.m>>22-t):t<44?(r=0,n=e.l<<t-22,l=e.m<<t-22|e.l>>44-t):(r=0,n=0,l=e.l<<t-44),{l:r&nt,m:n&nt,h:l&wr}}function un(e,t){var r,n,l,o,i;return t&=63,r=e.h,n=(r&aB)!=0,n&&(r|=-1048576),t<22?(i=r>>t,o=e.m>>t|r<<22-t,l=e.l>>t|e.m<<22-t):t<44?(i=n?wr:0,o=r>>t-22,l=e.m>>t-22|r<<44-t):(i=n?wr:0,o=n?nt:0,l=r>>t-44),{l:l&nt,m:o&nt,h:i&wr}}function vu(e,t){var r,n,l;return r=e.l-t.l,n=e.m-t.m+(r>>22),l=e.h-t.h+(n>>22),{l:r&nt,m:n&nt,h:l&wr}}function gn(e){return e.l|e.m<<22}function RB(e){this.string=e}function Er(e,t){return e>t?e:t}function ea(e,t){return e<t?e:t}function hB(e,t){return e.indexOf(t)}function FB(e){return DB(e,0,e.length)}function DB(e,t,r){for(var n="",l=t;l<r;){var o=Math.min(l+1e4,r);n+=String.fromCharCode.apply(null,e.slice(l,o)),l=o}return n}function AB(e){return String.fromCharCode(e&Je)}function du(e){return e.string+=" ",e}function Ru(e,t){return e.string+=t,e}function UB(){RB.call(this,"")}function vi(e,t){var r;if(e===t)return!0;if(e.length!=t.length)return!1;for(r=0;r<e.length;++r)if(e[r]!=t[r])return!1;return!0}function pn(){hu||(hu=!0,xr=rt(Se,[fe,Ue],[11,0],7,[495,18],2),ll=rt(Se,[fe,Ue],[11,0],7,[324,18],2),al=rt(Se,[fe,Ue],[11,0],7,[336,18],2),vr=rt(Se,[fe,Ue],[11,0],7,[495,8],2),Wi=Y(Qe,Ke,0,20048,7,1),Ii=Y(Qe,Ke,0,20791,7,1),nl=Y(Qe,Ke,0,82945,7,1),$n=rt(Se,[fe,Ue],[11,0],7,[2768,10],2),tl=rt(Se,[fe,Ue],[11,0],7,[2768,10],2),rl=rt(Se,[fe,Ue],[11,0],7,[24,10],2),mo=rt(Se,[fe,Ue],[11,0],7,[24,16],2),cn=rt(Se,[fe,Ue],[11,0],7,[140,16],2),Ti=Y(Qe,Ke,0,8305,7,1),el=Y(Qe,Ke,0,48441,7,1))}function SB(e,t,r){return e.slice_0=xr[t.slice_0][r],e.flip=al[t.flip][(X(),Ln)[r<<3|t.fsym]],e.fsym=e.flip&7^t.fsym,e.flip>>=3,e.twist=ll[t.twist][Ln[r<<3|t.tsym]],e.tsym=e.twist&7^t.tsym,e.twist>>=3,e.prun=Er(Er(ut(Wi,e.twist*495+vr[e.slice_0][e.tsym]),ut(Ii,e.flip*495+vr[e.slice_0][e.fsym])),ut(nl,e.twist<<11|kr[e.flip<<3|e.fsym^e.tsym])),e.prun}function xB(e,t,r){return r=(X(),uo)[3][r],e.flipc=al[t.flipc>>3][Ln[r<<3|t.flipc&7]]^t.flipc&7,e.twistc=ll[t.twistc>>3][Ln[r<<3|t.twistc&7]]^t.twistc&7,ut(nl,e.twistc>>3<<11|kr[e.flipc^e.twistc&7])}function _u(e,t,r){var n;return e.twist=(X(),po)[ki(t)],e.flip=mn[_i(t)],e.tsym=e.twist&7,e.twist=e.twist>>3,e.prun=ut(nl,e.twist<<11|kr[e.flip^e.tsym]),e.prun>r||(e.fsym=e.flip&7,e.flip=e.flip>>3,e.slice_0=494-il(t.ea,8,!0),e.prun=Er(e.prun,Er(ut(Wi,e.twist*495+vr[e.slice_0][e.tsym]),ut(Ii,e.flip*495+vr[e.slice_0][e.fsym]))),e.prun>r)?!1:(n=new ce,Lo(t,1,n),Bo(t,1,n),e.twistc=po[ki(n)],e.flipc=mn[_i(n)],e.prun=Er(e.prun,ut(nl,e.twistc>>3<<11|kr[e.flipc^e.twistc&7])),e.prun<=r)}function ao(){pn()}function ut(e,t){return pn(),e[t>>3]>>(t<<2)&15}function ku(e){pn(),!(Si==2||Si==1&&!e)&&(Si==0&&(OB(),bB(),EB(),_B(),wB(),X(),Qs(2048,oa,mn,Du=Y(Se,Ue,0,336,7,1),0),Qs(2187,sa,po,Ts=Y(Se,Ue,0,324,7,1),1),vB(),kB(),zB()),so(Ti,rl,mo,$n,(X(),js),584244,e),so(el,Ks,cn,tl,js,514084,e),so(Wi,xr,vr,ll,Ts,431619,e),so(Ii,xr,vr,al,Du,431619,e),so(nl,null,null,ll,Ts,103939,e),Si=e?2:1)}function bB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<2768;r++)for(NB(e,(X(),Xn)[r]),n=0;n<10;n++)_r(e,pe[(et(),Ct)[n]],t),$n[r][n]=Ci(ur[pt(t.ca,8,!1)])&Je}function wB(){var e,t,r,n,l;for(e=new ce,t=new ce,Ks=rt(Se,[fe,Ue],[11,0],7,[140,10],2),r=0;r<140;r++){for(ju(e.ca,r%70,0,!1),l=0;l<10;l++)_r(e,(X(),pe)[(et(),Ct)[l]],t),Ks[r][l]=il(t.ca,0,!1)+70*(165>>l&1^~~(r/70))&Je;for(n=0;n<16;n++)Lo(e,(X(),gt)[0][n],t),cn[r][n]=il(t.ca,0,!1)+70*~~(r/70)&Je}}function EB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<2768;r++)for(Pu(e,(X(),Xn)[r]),n=0;n<10;n++)Ut(e,pe[(et(),Ct)[n]],t),tl[r][n]=ur[pt(t.ea,8,!0)]}function vB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<336;r++)for(na(e,(X(),oa)[r]),n=0;n<18;n++)Ut(e,pe[n],t),al[r][n]=mn[_i(t)]}function _B(){var e,t,r,n,l;for(e=new ce,t=new ce,r=0;r<24;r++){for(Bn(e.ea,r,12,!0),l=0;l<10;l++)Ut(e,(X(),pe)[(et(),Ct)[l]],t),rl[r][l]=pt(t.ea,12,!0)%24&Je;for(n=0;n<16;n++)Bo(e,(X(),gt)[0][n],t),mo[r][n]=pt(t.ea,12,!0)%24&Je}}function so(e,t,r,n,l,o,i){var s,a,f,u,g,p,c,L,m,d,F,A,U,x,b,N,J,C,Q,S,k,P,w,E,M,j,q,ie,he,be,Ye,bt,Le,ht,ot,ct;if(U=o&15,F=(o>>4&1)==1?Js:0,f=(o>>5&1)==1,s=o>>8&15,u=o>>12&15,g=o>>16&15,d=i?u:g,A=(1<<U)-1,a=t==null,L=a?2048:t.length,m=L*n.length,c=f?10:18,p=c==10?66:599186,b=(e[m>>3]>>(m<<2)&15)-1,b==-1){for(C=0;C<~~(m/8)+1;C++)e[C]=io;e[0]^=1,b=0}for(;b<d;){for(M=(b+1)*io^-1,Q=0;Q<e.length;Q++)ot=e[Q]^M,ot&=ot>>1,e[Q]+=ot&ot>>2&io;for(P=b>s,be=P?b+2:b,he=be*io,x=P?b:b+2,++b,ct=b^b+1,ht=0,C=0;C<m;++C,ht>>=4){if((C&7)==0&&(ht=e[C>>3],((ht^he)-io&~(ht^he)&-2004318072)==0)){C+=7;continue}if((ht&15)==be)for(q=C%L,Ye=~~(C/L),N=0,J=0,a&&(N=(X(),mn)[q],J=N&7,N>>=3),E=0;E<c;E++){if(Le=n[Ye][E],a?ie=(X(),kr)[al[N][Ln[E<<3|J]]^J^Le&A]:ie=r[t[q][E]][Le&A],Le>>=U,S=Le*L+ie,j=e[S>>3]>>(S<<2)&15,j!=x){j<b-1&&(E+=p>>E&3);continue}if(P){e[C>>3]^=ct<<(C<<2);break}for(e[S>>3]^=ct<<(S<<2),w=1,bt=l[Le];(bt>>=1)!=0;w++)(bt&1)==1&&(k=Le*L,a?k+=(X(),kr)[mn[ie]^w]:k+=r[ie][w^F>>(w<<1)&3],(e[k>>3]>>(k<<2)&15)==x&&(e[k>>3]^=ct<<(k<<2)))}}}}function kB(){var e,t,r,n;for(e=new ce,t=new ce,r=0;r<324;r++)for(la(e,(X(),sa)[r]),n=0;n<18;n++)_r(e,pe[n],t),ll[r][n]=po[ki(t)]}function zB(){var e,t,r,n,l,o,i,s;for(e=new ce,t=new ce,n=0;n<495;n++){for(ju(e.ea,494-n,8,!0),o=0;o<18;o+=3)Ut(e,(X(),pe)[o],t),xr[n][o]=494-il(t.ea,8,!0)&Je;for(l=0;l<16;l+=2)Bo(e,(X(),gt)[0][l],t),vr[n][l>>1]=494-il(t.ea,8,!0)&Je}for(r=0;r<495;r++)for(l=0;l<18;l+=3)for(s=xr[r][l],i=1;i<3;i++)s=xr[s][l],xr[r][l+i]=s&Je}function X(){Fu||(Fu=!0,ar=Y(go,fe,7,16,0,1),pe=Y(go,fe,7,18,0,1),Ki=Y(JB,fe,0,18,6,1),Gu=Y(Qe,Ke,0,48,7,1),fr=rt(Qe,[fe,Ke],[17,0],7,[16,16],2),gt=rt(Qe,[fe,Ke],[17,0],7,[16,16],2),uo=rt(Qe,[fe,Ke],[17,0],7,[16,18],2),Ln=Y(Qe,Ke,0,144,7,1),br=rt(Qe,[fe,Ke],[17,0],7,[16,18],2),oa=Y(Se,Ue,0,336,7,1),sa=Y(Se,Ue,0,324,7,1),Xn=Y(Se,Ue,0,2768,7,1),ol=Y(ne,ae,0,2768,7,1),ia=Y(Se,Ue,0,2768,7,1),Pi=Y(ne,ae,0,24,7,1),mn=Y(Se,Ue,0,2048,7,1),po=Y(Se,Ue,0,2187,7,1),ur=Y(Se,Ue,0,40320,7,1),kr=Y(Se,Ue,0,2688,7,1),qs=new zt(2531,1373,67026819,1367),Vs=new zt(2089,1906,322752913,2040),Ni=re(te(ne,2),fe,10,0,[re(te(ne,1),ae,0,7,[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),re(te(ne,1),ae,0,7,[6,7,8,0,1,2,3,4,5,15,16,17,9,10,11,12,13,14]),re(te(ne,1),ae,0,7,[3,4,5,6,7,8,0,1,2,12,13,14,15,16,17,9,10,11]),re(te(ne,1),ae,0,7,[2,1,0,5,4,3,8,7,6,11,10,9,14,13,12,17,16,15]),re(te(ne,1),ae,0,7,[8,7,6,2,1,0,5,4,3,17,16,15,11,10,9,14,13,12]),re(te(ne,1),ae,0,7,[5,4,3,8,7,6,2,1,0,14,13,12,17,16,15,11,10,9])]),GB(),TB())}function ta(e){e.ca=re(te(ne,1),ae,0,7,[0,1,2,3,4,5,6,7]),e.ea=re(te(ne,1),ae,0,7,[0,2,4,6,8,10,12,14,16,18,20,22])}function zu(e){!e.temps&&(e.temps=new ce),_r(Vs,e,e.temps),_r(e.temps,qs,e),Ut(Vs,e,e.temps),Ut(e.temps,qs,e)}function ra(e,t){var r,n;for(n=0;n<8;n++)e.ca[n]=t.ca[n];for(r=0;r<12;r++)e.ea[r]=t.ea[r]}function CB(e){return Ci(ur[pt(e.ca,8,!1)])}function PB(e){return ur[pt(e.ea,8,!0)]}function _i(e){var t,r;for(r=0,t=0;t<11;t++)r=r<<1|e.ea[t]&1;return r}function ki(e){var t,r;for(r=0,t=0;t<7;t++)r+=(r<<1)+(e.ca[t]>>3);return r}function zi(e){var t,r;for(!e.temps&&(e.temps=new ce),r=0;r<12;r++)e.temps.ea[e.ea[r]>>1]=(r<<1|e.ea[r]&1)<<24>>24;for(t=0;t<8;t++)e.temps.ca[e.ca[t]&7]=(t|32>>(e.ca[t]>>3)&24)<<24>>24;ra(e,e.temps)}function Cu(e){var t,r,n,l,o,i,s;for(t=new Nu(e),l=new ce,r=Ci(ur[pt(t.ca,8,!1)])>>4,i={l:0,m:0,h:0},s=0;s<6;s++){if(n=Ci(ur[pt(t.ca,8,!1)])>>4,r==n)for(o=0;o<16;o++)Lo(t,gt[0][o],l),vi(l.ca,e.ca)&&(Bo(t,gt[0][o],l),vi(l.ea,e.ea)&&(i=Ws(i,Ei({l:1,m:0,h:0},(s<<4|o)<48?s<<4|o:48))));zu(t),s%3==2&&zi(t)}return i}function NB(e,t){Bn(e.ca,t,8,!1)}function Pu(e,t){Bn(e.ea,t,8,!0)}function na(e,t){var r,n,l;for(n=0,r=10;r>=0;--r,t>>=1)n^=l=t&1,e.ea[r]=(e.ea[r]&-2|l)<<24>>24;e.ea[11]=(e.ea[11]&-2|n)<<24>>24}function la(e,t){var r,n,l;for(n=15,r=6;r>=0;--r,t=~~(t/3))n-=l=t%3,e.ca[r]=(e.ca[r]&7|l<<3)<<24>>24;e.ca[7]=(e.ca[7]&7|n%3<<3)<<24>>24}function MB(e){var t,r,n,l,o;for(o=0,l=0,n=0;n<12;n++)l|=1<<(e.ea[n]>>1),o^=e.ea[n]&1;if(l!=4095)return-2;if(o!=0)return-3;for(r=0,o=0,t=0;t<8;t++)r|=1<<(e.ca[t]&7),o+=e.ca[t]>>3;return r!=255?-4:o%3!=0?-5:(Hs(pt(e.ea,12,!0),12)^Hs(pt(e.ca,8,!1),8))!=0?-6:0}function Lo(e,t,r){X();var n,l,o,i,s,a;for(a=ar[gt[0][t]],s=ar[t],n=0;n<8;n++)o=a.ca[e.ca[s.ca[n]&7]&7]>>3,i=e.ca[s.ca[n]&7]>>3,l=o<3?i:(3-i)%3,r.ca[n]=(a.ca[e.ca[s.ca[n]&7]&7]&7|l<<3)<<24>>24}function _r(e,t,r){X();var n,l,o;for(n=0;n<8;n++)l=e.ca[t.ca[n]&7]>>3,o=t.ca[n]>>3,r.ca[n]=(e.ca[t.ca[n]&7]&7|(l+o)%3<<3)<<24>>24}function bi(e,t,r){var n,l,o,i;for(n=0;n<8;n++)o=e.ca[t.ca[n]&7]>>3,i=t.ca[n]>>3,l=o+(o<3?i:6-i),l=l%3+(o<3==i<3?0:3),r.ca[n]=(e.ca[t.ca[n]&7]&7|l<<3)<<24>>24}function ce(){X(),ta(this)}function zt(e,t,r,n){ta(this),Bn(this.ca,e,8,!1),la(this,t),Bn(this.ea,r,12,!0),na(this,n)}function Nu(e){ta(this),ra(this,e)}function Ci(e){return X(),e^Js>>((e&15)<<1)&3}function Bo(e,t,r){X();var n,l,o;for(o=ar[gt[0][t]],l=ar[t],n=0;n<12;n++)r.ea[n]=(o.ea[e.ea[l.ea[n]>>1]>>1]^e.ea[l.ea[n]>>1]&1^l.ea[n]&1)<<24>>24}function Ut(e,t,r){X();var n;for(n=0;n<12;n++)r.ea[n]=(e.ea[t.ea[n]>>1]^t.ea[n]&1)<<24>>24}function Sr(e,t,r){X();var n;return n=ia[e],r&&(n=n^Js>>((n&15)<<1)&3),n&65520|fr[n&15][t]}function Mu(){return X(),0}function GB(){var e,t;for(pe[0]=new zt(15120,0,119750400,0),pe[3]=new zt(21021,1494,323403417,0),pe[6]=new zt(8064,1236,29441808,550),pe[9]=new zt(9,0,5880,0),pe[12]=new zt(1230,412,2949660,0),pe[15]=new zt(224,137,328552,137),e=0;e<18;e+=3)for(t=0;t<2;t++)pe[e+t+1]=new ce,Ut(pe[e+t],pe[e],pe[e+t+1]),_r(pe[e+t],pe[e],pe[e+t+1])}function OB(){X();var e,t,r;for(Qs(40320,Xn,ur,js=Y(Se,Ue,0,2768,7,1),2),e=new ce,r=0;r<2768;r++)Pu(e,Xn[r]),ol[r]=il(e.ea,0,!0)+Hs(Xn[r],8)*70<<24>>24,zi(e),ia[r]=ur[pt(e.ea,8,!0)];for(t=0;t<24;t++)Bn(e.ea,t,12,!0),zi(e),Pi[t]=pt(e.ea,12,!0)%24<<24>>24}function TB(){var e,t,r,n,l,o,i,s,a,f,u,g,p,c,L,m;for(e=new ce,t=new ce,r=new zt(28783,0,259268407,0),m=new zt(15138,0,119765538,7),g=new zt(5167,0,83473207,0),l=0;l<8;l++)g.ca[l]=wi(g.ca[l]|24);for(o=0;o<16;o++)ar[o]=new Nu(e),bi(e,m,t),Ut(e,m,t),L=t,t=e,e=L,o%4==3&&(bi(L,g,t),Ut(L,g,t),L=t,t=e,e=L),o%8==7&&(bi(L,r,t),Ut(L,r,t),L=t,t=e,e=L);for(i=0;i<16;i++)for(a=0;a<16;a++)for(bi(ar[i],ar[a],e),u=0;u<16;u++)if(vi(ar[u].ca,e.ca)){fr[i][a]=u,gt[u][a]=i;break}for(f=0;f<18;f++)for(c=0;c<16;c++){for(Lo(pe[f],gt[0][c],e),p=0;p<18;p++)if(vi(pe[p].ca,e.ca)){uo[c][f]=p,br[c][(et(),sl)[f]]=sl[p];break}c%2==0&&(Ln[f<<3|c>>1]=uo[c][f])}for(n=0;n<18;n++)for(Ki[n]=Cu(pe[n]),s=n,c=0;c<48;c++)uo[c%16][s]<n&&(Gu[c]|=1<<n),c%16==15&&(s=Ni[2][s])}function Qs(e,t,r,n,l){X();var o,i,s,a,f,u,g,p,c;for(o=new ce,s=new ce,i=0,f=0,c=l>=2?1:2,u=l!=1,a=0;a<e;a++)if(r[a]==0){switch(l){case 0:na(o,a);break;case 1:la(o,a);break;case 2:Bn(o.ea,a,8,!0)}for(g=0;g<16;g+=c){switch(u?Bo(o,g,s):Lo(o,g,s),l){case 0:f=_i(s);break;case 1:f=ki(s);break;case 2:f=pt(s.ea,8,!0)}l==0&&(kr[i<<3|g>>1]=f&Je),f==a&&(n[i]=(n[i]|1<<~~(g/c))&Je),p=~~((i<<4|g)/c),r[f]=p&Je}t[i++]=a&Je}return i}function IB(e,t,r,n,l,o,i,s){var a,f,u,g,p;if(g=Er(ut((pn(),el),(i>>4)*140+cn[(X(),ol)[s>>4]&255][gt[i&15][s&15]]),Er(ut(el,n*140+cn[ol[t]&255][gt[l][r]]),ut(Ti,t*24+mo[o][r]))),g>e.maxDep2)return g-e.maxDep2;for(a=e.maxDep2;a>=g&&(p=Iu(e,n,l,t,r,o,a,e.depth1,10),!(p<0));a--){for(a-=p,e.solLen=0,e.solution=new qu,HB(e.solution,e.verbose,e.urfIdx,e.depth1),u=0;u<e.depth1+a;u++)yu(e.solution,e.move[u]);for(f=e.preMoveLen-1;f>=0;f--)yu(e.solution,e.preMoves[f]);e.solLen=e.solution.length_0}return a!=e.maxDep2?(e.maxDep2=ea(Ku,e.solLen-e.length1-1),Eu(e.probe,e.probeMin)?0:1):1}function WB(e){var t,r,n,l,o,i,s,a,f,u,g,p,c,L,m;if(e.isRec=!1,Eu(e.probe,e.solution?e.probeMin:e.probeMax))return 0;for(e.probe=dB(e.probe,{l:1,m:0,h:0}),n=e.valid1;n<e.depth1;n++)_r(e.phase1Cubie[n],(X(),pe)[e.move[n]],e.phase1Cubie[n+1]),Ut(e.phase1Cubie[n],pe[e.move[n]],e.phase1Cubie[n+1]);for(e.valid1=e.depth1,s=CB(e.phase1Cubie[e.depth1]),a=s&15,s>>=4,f=PB(e.phase1Cubie[e.depth1]),u=f&15,f>>=4,g=pt(e.phase1Cubie[e.depth1].ea,12,!0)%24,r=Sr(f,u,!1),t=Sr(s,a,!0),l=e.depth1==0?-1:e.move[e.depth1-1],o=e.preMoveLen==0?-1:e.preMoves[e.preMoveLen-1],m=0,L=(e.preMoveLen==0?1:2)*(e.depth1==0?1:2),p=0,c=(1<<L)-1;p<L;p++){if((c>>p&1)!=0){if(c&=~(1<<p),m=IB(e,s,a,f,u,g,r,t),m==0||m>2)break;m==2&&(c&=4<<p)}if(c==0)break;(p&1)==0&&e.depth1>0?(i=(et(),sl)[~~(l/3)*3+1],e.move[e.depth1-1]=Ct[i]*2-e.move[e.depth1-1],g=(pn(),rl)[g][i],s=$n[s][(X(),br)[a][i]],a=fr[s&15][a],s>>=4,f=tl[f][br[u][i]],u=fr[f&15][u],f>>=4,t=Sr(s,a,!0),r=Sr(f,u,!1)):e.preMoveLen>0&&(i=(et(),sl)[~~(o/3)*3+1],e.preMoves[e.preMoveLen-1]=Ct[i]*2-e.preMoves[e.preMoveLen-1],g=(X(),Pi)[(pn(),rl)[Pi[g]][i]],s=$n[t>>4][br[t&15][i]],t=s&-16|fr[s&15][t&15],s=Sr(t>>4,t&15,!0),a=s&15,s>>=4,f=tl[r>>4][br[r&15][i]],r=f&-16|fr[f&15][r&15],f=Sr(r>>4,r&15,!1),u=f&15,f>>=4)}return e.depth1>0&&(e.move[e.depth1-1]=l),e.preMoveLen>0&&(e.preMoves[e.preMoveLen-1]=o),m==0?0:2}function KB(e){var t;for(e.conjMask=0,e.selfSym=Cu(e.cc),e.conjMask|=Os(qt(un(e.selfSym,16),{l:Je,m:0,h:0}),{l:0,m:0,h:0})?18:0,e.conjMask|=Os(qt(un(e.selfSym,32),{l:Je,m:0,h:0}),{l:0,m:0,h:0})?36:0,e.conjMask|=Os(qt(un(e.selfSym,48),{l:Je,m:0,h:0}),{l:0,m:0,h:0})?56:0,e.selfSym=qt(e.selfSym,{l:nt,m:nt,h:15}),e.maxPreMoves=e.conjMask>7?0:20,t=0;t<6;t++)ra(e.urfCubieCube[t],e.cc),_u(e.urfCoordCube[t],e.urfCubieCube[t],20),zu(e.cc),t%3==2&&zi(e.cc)}function Ou(e,t,r,n,l){var o,i,s,a,f,u;if(t.prun==0&&n<5)return e.allowShorter||n==0?(e.depth1-=n,f=WB(e),e.depth1+=n,f):1;for(u=Mu($s(r)),o=0;o<18;o+=3)if(!(o==l||o==l-9)){for(s=0;s<3;s++)if(i=o+s,!(e.isRec&&i!=e.move[e.depth1-n]||u!=0&&(u&1<<i)!=0)){if(a=SB(e.nodeUD[n],t,i),a>n)break;if(a==n)continue;if(a=xB(e.nodeUD[n],t,i),a>n)break;if(a==n)continue;if(e.move[e.depth1-n]=i,e.valid1=ea(e.valid1,e.depth1-n),f=Ou(e,e.nodeUD[n],r&gn((X(),Ki)[i]),n-1,o),f==0)return 0;if(f>=2)break}}return 1}function Tu(e,t,r,n,l){var o,i,s;if(e.preMoveLen=e.maxPreMoves-t,(e.isRec?e.depth1==e.length1-e.preMoveLen:e.preMoveLen==0||(225207>>r&1)==0)&&(e.depth1=e.length1-e.preMoveLen,e.phase1Cubie[0]=n,e.allowShorter=e.depth1==Is&&e.preMoveLen!=0,_u(e.nodeUD[e.depth1+1],n,e.depth1)&&Ou(e,e.nodeUD[e.depth1+1],l,e.depth1,-1)==0))return 0;if(t==0||e.preMoveLen+Is>=e.length1)return 1;for(s=Mu($s(l)),(t==1||e.preMoveLen+1+Is>=e.length1)&&(s|=225207),r=~~(r/3)*3,o=0;o<18;o++){if(o==r||o==r-9||o==r+9){o+=2;continue}if(!(e.isRec&&o!=e.preMoves[e.maxPreMoves-t]||(s&1<<o)!=0)&&(_r((X(),pe)[o],n,e.preMoveCubes[t]),Ut(pe[o],n,e.preMoveCubes[t]),e.preMoves[e.maxPreMoves-t]=o,i=Tu(e,t-1,o,e.preMoveCubes[t],l&gn(Ki[o])),i==0))return 0}return 1}function Iu(e,t,r,n,l,o,i,s,a){var f,u,g,p,c,L,m,d,F,A,U;if(t==0&&n==0&&o==0)return i;for(F=(et(),fo)[a],m=0;m<10;m++){if((F>>m&1)!=0){m+=66>>m&3;continue}if(d=(pn(),rl)[o][m],u=$n[n][(X(),br)[l][m]],g=fr[u&15][l],u>>=4,c=tl[t][br[r][m]],L=fr[c&15][r],c>>=4,p=Sr(c,L,!1),f=Sr(u,g,!0),A=ut(el,(p>>4)*140+cn[ol[f>>4]&255][gt[p&15][f&15]]),A>i+1)return i-A+1;if(A>=i){m+=66>>m&3&i-A;continue}if(A=Er(ut(Ti,u*24+mo[d][g]),ut(el,c*140+cn[ol[u]&255][gt[L][g]])),A>=i){m+=66>>m&3&i-A;continue}if(U=Iu(e,c,L,u,g,d,i-1,s+1,m),U>=0)return e.move[s]=Ct[m],U;if(U<-2)break;U<-1&&(m+=66>>m&3)}return-1}function QB(e){for(e.length1=e.isRec?e.length1:0;e.length1<e.solLen;e.length1++)for(e.maxDep2=ea(Ku,e.solLen-e.length1-1),e.urfIdx=e.isRec?e.urfIdx:0;e.urfIdx<6;e.urfIdx++)if((e.conjMask&1<<e.urfIdx)==0&&Tu(e,e.maxPreMoves,-30,e.urfCubieCube[e.urfIdx],gn(qt(e.selfSym,{l:Je,m:0,h:0})))==0)return e.solution?Uu(e.solution):"Error 8";return e.solution?Uu(e.solution):"Error 7"}function jB(e,t){var r;return r=qB(e,t),r!=0?"Error "+(r<0?-r:r):(e.solLen=22,e.probe={l:0,m:0,h:0},e.probeMax={l:3531008,m:23,h:0},e.probeMin={l:0,m:0,h:0},e.verbose=0,e.solution=null,e.isRec=!1,ku(!1),KB(e),QB(e))}function qB(e,t){var r,n,l,o;for(n=0,l=Y(ne,ae,0,54,7,1),r=FB(re(te(Se,1),Ue,0,7,[t.charCodeAt(4),t.charCodeAt(13),t.charCodeAt(22),t.charCodeAt(31),t.charCodeAt(40),t.charCodeAt(49)])),o=0;o<54;o++){if(l[o]=hB(r,AB(t.charCodeAt(o)))<<24>>24,l[o]==-1)return-1;n+=1<<(l[o]<<2)}return n!=10066329?-1:(VB(l,e.cc),MB(e.cc))}function Wu(){var e,t,r;for(this.move=Y(Qe,Ke,0,31,7,1),this.nodeUD=Y(xi,fe,31,21,0,1),this.nodeRL=Y(xi,fe,31,21,0,1),this.nodeFB=Y(xi,fe,31,21,0,1),this.cc=new ce,this.urfCubieCube=Y(go,fe,7,6,0,1),this.urfCoordCube=Y(xi,fe,31,6,0,1),this.phase1Cubie=Y(go,fe,7,21,0,1),this.preMoveCubes=Y(go,fe,7,21,0,1),this.preMoves=Y(Qe,Ke,0,20,7,1),t=0;t<21;t++)this.nodeUD[t]=new ao,this.nodeRL[t]=new ao,this.nodeFB[t]=new ao,this.phase1Cubie[t]=new ce;for(r=0;r<6;r++)this.urfCubieCube[r]=new ce,this.urfCoordCube[r]=new ao;for(e=0;e<20;e++)this.preMoveCubes[e+1]=new ce}function et(){if(!Au){Au=!0;var e,t,r,n,l,o;for(fn=re(te(ne,2),fe,10,0,[re(te(ne,1),ae,0,7,[8,9,20]),re(te(ne,1),ae,0,7,[6,18,38]),re(te(ne,1),ae,0,7,[0,36,47]),re(te(ne,1),ae,0,7,[2,45,11]),re(te(ne,1),ae,0,7,[29,26,15]),re(te(ne,1),ae,0,7,[27,44,24]),re(te(ne,1),ae,0,7,[33,53,42]),re(te(ne,1),ae,0,7,[35,17,51])]),ir=re(te(ne,2),fe,10,0,[re(te(ne,1),ae,0,7,[5,10]),re(te(ne,1),ae,0,7,[7,19]),re(te(ne,1),ae,0,7,[3,37]),re(te(ne,1),ae,0,7,[1,46]),re(te(ne,1),ae,0,7,[32,16]),re(te(ne,1),ae,0,7,[28,25]),re(te(ne,1),ae,0,7,[30,43]),re(te(ne,1),ae,0,7,[34,52]),re(te(ne,1),ae,0,7,[23,12]),re(te(ne,1),ae,0,7,[21,41]),re(te(ne,1),ae,0,7,[50,39]),re(te(ne,1),ae,0,7,[48,14])]),sr=rt(Qe,[fe,Ke],[17,0],7,[13,13],2),Zs=re(te(yB,1),fe,2,4,["U ","U2","U'","R ","R2","R'","F ","F2","F'","D ","D2","D'","L ","L2","L'","B ","B2","B'"]),Ct=re(te(Qe,1),Ke,0,7,[0,1,2,4,7,9,10,11,13,16,3,5,6,8,12,14,15,17]),sl=Y(Qe,Ke,0,18,7,1),fo=Y(Qe,Ke,0,11,7,1),t=0;t<18;t++)sl[Ct[t]]=t;for(r=0;r<10;r++)for(n=~~(Ct[r]/3),fo[r]=0,l=0;l<10;l++)o=~~(Ct[l]/3),fo[r]|=(n==o||n%3==o%3&&n>=o?1:0)<<l;for(fo[10]=0,e=0;e<13;e++)for(sr[e][0]=sr[e][e]=1,l=1;l<e;l++)sr[e][l]=sr[e-1][l-1]+sr[e-1][l]}}function il(e,t,r){et();var n,l,o,i,s;for(n=e.length-1,o=0,s=4,l=n;l>=0;l--)i=Qu(e[l],r),(i&12)==t&&(o+=sr[l][s--]);return o}function Hs(e,t){et();var r,n;for(n=0,r=t-2;r>=0;r--)n^=e%(t-r),e=~~(e/(t-r));return n&1}function pt(e,t,r){et();var n,l,o,i;for(l=0,i={l:1323536,m:2777561,h:1043915},n=0;n<t-1;n++)o=Qu(e[n],r)<<2,l=(t-n)*l+gn(qt(un(i,o),{l:15,m:0,h:0})),i=vu(i,Ei({l:1118480,m:279620,h:69905},o));return l}function Qu(e,t){return t?e>>1:e&7}function ju(e,t,r,n){et();var l,o,i,s;for(l=e.length-1,s=4,o=l,i=l;i>=0;i--)t>=sr[i][s]?(t-=sr[i][s--],e[i]=Mi(e[i],s|r,n)):((o&12)==r&&(o-=4),e[i]=Mi(e[i],o--,n))}function Bn(e,t,r,n){et();var l,o,i,s,a,f;for(f={l:1323536,m:2777561,h:1043915},l={l:0,m:0,h:0},s=2;s<=r;s++)l=Ws(Ei(l,4),$s(t%s)),t=~~(t/s);for(o=0;o<r-1;o++)a=(gn(l)&15)<<2,l=un(l,4),e[o]=Mi(e[o],gn(qt(un(f,a),{l:15,m:0,h:0})),n),i=vu(Ei({l:1,m:0,h:0},a),{l:1,m:0,h:0}),f=Ws(qt(f,i),qt(un(f,4),{l:~i.l&nt,m:~i.m&nt,h:~i.h&wr}));e[r-1]=Mi(e[r-1],gn(qt(f,{l:15,m:0,h:0})),n)}function Mi(e,t,r){return(r?t<<1|e&1:t|e&-8)<<24>>24}function VB(e,t){et();var r,n,l,o,i,s,a,f;for(o=0;o<8;o++)t.ca[o]=0;for(i=0;i<12;i++)t.ea[i]=0;for(s=0;s<8;s++){for(f=0;f<3&&!(e[fn[s][f]]==0||e[fn[s][f]]==3);f++);for(r=e[fn[s][(f+1)%3]],n=e[fn[s][(f+2)%3]],a=0;a<8;a++)if(r==~~(fn[a][1]/9)&&n==~~(fn[a][2]/9)){t.ca[s]=wi(f%3<<3|a);break}}for(l=0;l<12;l++)for(a=0;a<12;a++){if(e[ir[l][0]]==~~(ir[a][0]/9)&&e[ir[l][1]]==~~(ir[a][1]/9)){t.ea[l]=wi(a<<1);break}if(e[ir[l][0]]==~~(ir[a][1]/9)&&e[ir[l][1]]==~~(ir[a][0]/9)){t.ea[l]=wi(a<<1|1);break}}}function yu(e,t){var r,n,l;if(e.length_0==0){e.moves[e.length_0++]=t;return}if(r=~~(t/3),n=~~(e.moves[e.length_0-1]/3),r==n){l=(t%3+e.moves[e.length_0-1]%3+1)%4,l==3?--e.length_0:e.moves[e.length_0-1]=r*3+l;return}if(e.length_0>1&&r%3==n%3&&r==~~(e.moves[e.length_0-2]/3)){l=(t%3+e.moves[e.length_0-2]%3+1)%4,l==3?(e.moves[e.length_0-2]=e.moves[e.length_0-1],--e.length_0):e.moves[e.length_0-2]=r*3+l;return}e.moves[e.length_0++]=t}function HB(e,t,r,n){e.verbose=t,e.urfIdx=r,e.depth1=n}function Uu(e){var t,r,n;if(r=new UB,n=(e.verbose&2)!=0?(e.urfIdx+3)%6:e.urfIdx,n<3)for(t=0;t<e.length_0;t++)(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  "),du(Ru(r,(et(),Zs)[(X(),Ni)[n][e.moves[t]]]));else for(t=e.length_0-1;t>=0;t--)du(Ru(r,(et(),Zs)[(X(),Ni)[n][e.moves[t]]])),(e.verbose&1)!=0&&t==e.depth1&&(r.string+=".  ");return r.string}function qu(){this.moves=Y(Qe,Ke,0,31,7,1)}var fe,nt,wr,aB,Je,Ue,Ke,Js,io,ae,H,Gi,Ui,yB,hu,cn,Ks,$n,el,tl,al,Ti,mo,rl,nl,ll,vr,Ii,xr,Wi,Si,xi,Fu,ar,ur,Xn,mn,oa,kr,Pi,ol,ia,Ln,uo,br,fr,gt,Du,js,Ts,po,sa,Gu,pe,Ki,qs,Vs,Ni,go,Ku,Is,Au,sr,fo,fn,ir,Zs,sl,Ct,Qe,ZB,ne,JB,Se,YB,XB,Vu=y(()=>{"use strict";fe={3:1},nt=4194303,wr=1048575,aB=524288,Je=65535,Ue={11:1,3:1},Ke={17:1,3:1},Js=14540032,io=286331153,ae={10:1,3:1},Gi={};co(1,null,{},pB);co(79,1,{},Ys);H.createClassLiteralForArray=function(t){var r;return r=new Ys,r.modifiers=4,t>1?r.componentType=xu(this,t-1):r.componentType=this,r};H.isPrimitive=function(){return(this.modifiers&1)!=0};yB=zr("java.lang","String",2);hu=!1;co(31,1,{31:1},ao);H.flip=0;H.flipc=0;H.fsym=0;H.prun=0;H.slice_0=0;H.tsym=0;H.twist=0;H.twistc=0;Si=0,xi=zr("org.cubing.min2phase.client","CoordCube",31),Fu=!1;go=zr("org.cubing.min2phase.client","CubieCube",7);co(72,1,{},Wu);H.allowShorter=!1;H.conjMask=0;H.depth1=0;H.isRec=!1;H.length1=0;H.maxDep2=0;H.maxPreMoves=0;H.preMoveLen=0;H.probe={l:0,m:0,h:0};H.probeMax={l:0,m:0,h:0};H.probeMin={l:0,m:0,h:0};H.selfSym={l:0,m:0,h:0};H.solLen=0;H.urfIdx=0;H.valid1=0;H.verbose=0;Ku=12,Is=7,Au=!1;co(150,1,{},qu);H.depth1=0;H.length_0=0;H.urfIdx=0;H.verbose=0;Qe=Oi("int","I");zr("com.google.gwt.lang","CollapsedPropertyHolder",252);zr("com.google.gwt.lang","JavaClassHierarchySetupUtil",254);ZB=zr("com.google.gwt.lang","LongLibBase/LongEmul",null);zr("com.google.gwt.lang","ModuleUtils",257);ne=Oi("byte","B"),JB=Oi("long","J"),Se=Oi("char","C");zr("com.google.gwt.user.client.rpc","XsrfToken",null),cB("java.util","Map/Entry");YB=function(){ku(!1)},XB=function(e){return jB(new Wu,e)}});var Hu={};mt(Hu,{initialize:()=>YB,solveState:()=>XB});var Zu=y(()=>{"use strict";Vu()});var aa,Ju=y(()=>{"use strict";Qt();aa=We(()=>Promise.resolve().then(()=>(Zu(),Hu)))});function Yu(e,t){return e.slice(t)+e.slice(0,t)}function nd(e){let t=[[],[]];for(let r=0;r<6;r++)if(e.stateData.CENTERS.pieces[r]!==r)throw new Error("non-oriented puzzles are not supported");for(let r=0;r<12;r++)t[0].push(Yu($B[e.stateData.EDGES.pieces[r]],e.stateData.EDGES.orientation[r]));for(let r=0;r<8;r++)t[1].push(Yu(ed[e.stateData.CORNERS.pieces[r]],e.stateData.CORNERS.orientation[r]));return t.push(td),t}function Xu(e){let t=nd(e);return rd.map(([r,n,l])=>t[r][n][l]).join("")}var $B,ed,td,rd,$u=y(()=>{"use strict";$B="UF UR UB UL DF DR DB DL FR FL BR BL".split(" "),ed="UFR URB UBL ULF DRF DFL DLB DBR".split(" "),td="U L F R B D".split(" "),rd=[[1,2,0],[0,2,0],[1,1,0],[0,3,0],[2,0,0],[0,1,0],[1,3,0],[0,0,0],[1,0,0],[1,0,2],[0,1,1],[1,1,1],[0,8,1],[2,3,0],[0,10,1],[1,4,1],[0,5,1],[1,7,2],[1,3,2],[0,0,1],[1,0,1],[0,9,0],[2,2,0],[0,8,0],[1,5,1],[0,4,1],[1,4,2],[1,5,0],[0,4,0],[1,4,0],[0,7,0],[2,5,0],[0,5,0],[1,6,0],[0,6,0],[1,7,0],[1,2,2],[0,3,1],[1,3,1],[0,11,1],[2,1,0],[0,9,1],[1,6,1],[0,7,1],[1,5,2],[1,1,2],[0,2,1],[1,2,1],[0,10,0],[2,4,0],[0,11,0],[1,7,1],[0,6,1],[1,6,2]]});function eg(e,t){let r=new ge(e.kpuzzle,{EDGES:e.stateData.EDGES,CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation(),n=new ge(t.kpuzzle,{EDGES:t.stateData.EDGES,CORNERS:t.stateData.CORNERS,CENTERS:{pieces:t.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}}).experimentalToTransformation();return r.isIdentical(n)}function tg(e,t){if(eg(e.startState(),t))return!1;for(let r of"ULFRBD")for(let n=1;n<4;n++){let l=e.moveToTransformation(new B(r,n)).toKState();if(eg(l,t))return!1}return!0}var rg=y(()=>{"use strict";Be();He()});var ng,lg=y(()=>{"use strict";ng=[["R U'","R2 B","D2 B2","D' L B'","R' U'","B","D B2","R' B","L' U","L2 B'","B2","D L B'","L U","B'","U'","R B","D' B2","L B'","U2","U L' B'","","U' L' B'","U","L' B'"],["F2 L2","F' L'","R' F L2","D' L2","F L2","F2 L'","R' F' L'","R2 F L2","R2 F2 L'","L2","F L'","D' L","D2 L2","R2 F' L'","D L","","L2 F L'","L F' L2","L F L'","F' L2","L'","D L2","D F L'","L"],["R B U2 B'","R2 B U' B'","F2 B U B'","F B2 L' B2","B2 L B2","B U' B'","R2 B U2 B'","R' B U' B'","B2 L' B2","F B U B'","B2 U' B2","B' L B","L F' B D' B'","B' U' B2 D B'","B U2 B'","R B U' B'","B2 L2 B2","D' B' L B","B U B'","F' B2 L' B2","","B2 L' B' U' B'"],["U F2 L2 U'","F' U L' U'","F2 U L' U'","U F L2 U'","U2 B2 U2","R' U' B U","D2 U L U'","D U2 B' U2","U L2 U'","F U L' U'","D U L U'","U2 B' U2","","U2 B' U' L' U'","U2 L' U2","U' B U","U L U'","D' U2 B' U2","U L' U'","U2 B U2"],["R' D' F2","F'","F2","D R F'","R D' F2","R2 F'","D' F2","R F'","F2 R' D' F2","F","D2 F2","D' R F'","R2 D' F2","R' F'","D F2","D2 R F'","","F R' D' F2"],["R' D2 F' D F","R F2 R2 F2","R2 F' D2 F","F' R2 D2 F","L D' L'","D F' D2 F","F2 R2 F2","R F' D2 F","F' R2 D' F","F' R' D2 F","F2 R' F2","L D L'","F' R D' F","F2 R F2","F' D2 F","","L D2 R D' L'","F' D2 F' R F2","D2 R2 F2 R2 F2","D F' D' F","F' D F"],["U F2 U'","R U F' U'","D R U F2 U'","U F U'","R2 U F2 U'","R' U F' U'","R U F2 U'","R2 U F' U'","","U L D L' F U'","F2 D' R D F2","D2 U F U'","R' U F2 U'","U F' U'","F2 D2 R D2 F2","D U F U'"],["R2","R' B' D B","D R'","F' R2 F","","R B' D B","R'","B' D B","D' R'","D2 F' R2 F","R","R2 B' D B","D2 R'","B' D' B"],["R2 D' R2","F' R' F R","R D' R2 D R'","D2 R2 D2 R2","R' D' F' R F","U F D F' U'","","R2 D2 B R' B' R'","R' F D' F2 R F","R2 D R2","F2 U F U' F","R' D F' R F","D R2 D2 R2","U F D' F' U'","D R' D2 F' R F","R2 D2 R2","U F D2 F' U'","R' D2 F' R F"],["B R B'","F D F' B R2 B'","D B R2 B'","D2 B R' B'","B R2 B'","D B R' B'","D' B R2 B'","B R' B'","","B R2 B' D B R' B'","D2 B R2 B'","D' B R' B'"],["","R' D R F D2 F'","R' D R","D F D' F'","R F' R' F","F D' F'","R' D' R","F D2 F'","R' D2 R","F D F'"],["","F2 D2 R F' R' D2 F' D2 F'","F2 D2 F' D' F D' F' D2 F'","F2 D F2 D F2 D2 F2","D2 F L D2 L' D2 F'","D F D2 L D2 L' F'","R' D B' D2 B D' R","R' D2 B' D2 B R","F D2 F' D F D F'","F D' L D2 L' D F'","B D' F D B' D' F'","F D2 L D2 L' F'","F D' L D L' D F'","F L D2 L' D2 F'","R' B' D2 B D2 R"],["D'","F L D L' D' F'","D2","L B D B' D' L'","D","B' L' D' L D B","","D F L D L' D' F'"],["F' D2 F D F' D F","F' D' R' D R F","F' R' D' R D F","B D R D' R' B'","","D B' D' L' D L B"],["D F D F' D F D2 F'","F' U2 B' R' B U2 F' L F' L' F'","","D2 L D L2 F L F2 D F"],["L B' L' F L B L' F'","F2 U F' D2 F U' F' D2 F'","D' F' D B D' F D B'","F L2 F R2 F' L2 F R2 F2","D B D' F' D B' D' F","R F L F' R' F L' F'","","D2 B L' U2 L B' D2 B L' U2 L B'","D2 F R' U2 R F' D2 F R' U2 R F'","R F L' F' R' F L F'","D F D' B' D F' D' B","L2 F2 L' B2 L F2 L' B2 L'"],["L B R' B' L' B R B'","R' B R F' R' B' R F","L D2 L U L' D2 L U' L2","","D2 B' D2 F D' L2 F L2 F' D2 B D' F'","D2 F' R' F R2 B' D2 B D2 R' F D2 F'","L B L' F L B' L' F'","F' D2 F' U' F D2 F' U F2","D' B' D F D' B D F'"],["","D2 F' L U2 L' F D2 F' L U2 L' F","D2 B' R U2 R' B D2 B' R U2 R' B"]]});async function ig(){let e=await Pe["3x3x3"].kpuzzle(),t=e.startState();for(let r of ng)t=t.applyAlg(v.fromString((await or())(r)));return tg(e,t)?t:ig()}async function fa(e){return Ee(),v.fromString((await aa).solveState(Xu(e)))}async function fl(){return fa(await ig())}async function sg(){(await aa).initialize()}async function ag(){return Yn(await fl(),ld)}async function fg(){let e=new Lt,t=await fl();return e.experimentalPushAlg(og),e.experimentalPushAlg(t),e.experimentalPushAlg(og),e.toAlg()}var ld,og,ua=y(()=>{"use strict";Be();lr();yt();At();yi();Ju();$u();rg();lg();ld=[[null,"Rw","Rw2","Rw'","Fw","Fw'"],[null,"Dw","Dw2","Dw'"]];og=new v("R' U' F")});function ue(e,...t){let r=t.length,n=e[t[r-1]];for(let l=r;l>0;l--)e[t[l]]=e[t[l-1]];return e[t[0]]=n,ue}function ug(e,t,r,n){r=(r||8)-1;let l=1985229328,o=0;n??(n=0),n<0&&(t<<=1);for(let i=0;i<r;++i){let s=ga[r-i],a=~~(t/s);o^=a,t%=s,a<<=2,e[i]=l>>a&7;let f=(1<<a)-1;l=(l&f)+(l>>4&~f)}return n<0&&(o&1)!==0?(e[r]=e[r-1],e[r-1]=l&7):e[r]=l&7,e}var Re,ga,gg=y(()=>{"use strict";Re=[],ga=[1];for(let e=0;e<32;++e){Re[e]=[];for(let t=0;t<32;++t)Re[e][t]=0}for(let e=0;e<32;++e){Re[e][0]=Re[e][e]=1,ga[e+1]=ga[e]*(e+1);for(let t=1;t<e;++t)Re[e][t]=Re[e-1][t-1]+Re[e-1][t]}});function O(e,t){let r=new Array(e);if(t!==void 0)for(let n=0;n<e;n++)r[n]=new Array(t);return r}function gd(e){return new Ao[e]}function Rt(e,t,r,...n){let l=Ao[e];l&&!l.___clazz$?Z=l.prototype:(!l&&(l=Ao[e]=function(){}),Z=l.prototype=t<0?{}:gd(t),Z.castableTypeMap$=r);for(let o of n)o.prototype=Z;l.___clazz$&&(Z.___clazz$=l.___clazz$,l.___clazz$=null)}function Gr(e){let t={};for(let r=0,n=e.length;r<n;++r)t[e[r]]=1;return t}function Cg(){}function pd(e,t){let r=Pg(0,t);return Ng(e.___clazz$,e.castableTypeMap$,e.queryId$,r),r}function Pg(e,t){let r=new Array(t);if(e===3)for(let n=0;n<t;++n){let l={m:0,l:0,h:0};l.l=l.m=l.h=0,r[n]=l}else if(e>0){let n=[null,0,!1][e];for(let l=0;l<t;++l)r[l]=n}return r}function Da(e,t,r,n,l){let o=Pg(l,n);return Ng(e,t,r,o),o}function Ng(e,t,r,n){return Mg(),md(n,ma,La),n.___clazz$=e,n.castableTypeMap$=t,n.queryId$=r,n}function Yi(e,t,r){return e[t]=r}function Mg(){pg||(pg=!0,ma=[],La=[],cd(new Cg,ma,La))}function cd(e,t,r){let n=0,l;for(let o in e)(l=e[o])&&(t[n]=o,r[n]=l,++n)}function md(e,t,r){Mg();for(let n=0,l=t.length;n<l;++n)e[t[n]]=r[n]}function Ld(e,t){return e.castableTypeMap$&&!!e.castableTypeMap$[t]}function Bd(e,t){return e!==null&&Ld(e,t)}function dd(){if(cg)return!1;cg=!0,f0=O(15582,36),u0=O(15582),Gt=O(15582),Ll=O(48,48),Nt=O(48,36),ml=O(48),Ua=O(48)}function Aa(e){e.ct=O(24)}function mg(e,t){let r,n;if(Bd(t,kg)){for(r=t,n=0;n<24;++n)if(e.ct[n]!==r.ct[n])return!1;return!0}return!1}function Xi(e){let t,r,n;for(r=0,n=8,t=23;t>=0;--t)e.ct[t]===1&&(r+=Re[t][n--]);return r}function ji(e){let t,r;if(hl!==null)return hl[Xi(e)];for(r=0;r<48;++r){if(t=yd(Xi(e)),t!==-1)return t*64+r;oe(e,0),r%2===1&&oe(e,1),r%8===7&&oe(e,2),r%16===15&&oe(e,3)}}function Pt(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ct,0,1,2,3,r);break;case 1:h(e.ct,16,17,18,19,r);break;case 2:h(e.ct,8,9,10,11,r);break;case 3:h(e.ct,4,5,6,7,r);break;case 4:h(e.ct,20,21,22,23,r);break;case 5:h(e.ct,12,13,14,15,r);break;case 6:h(e.ct,0,1,2,3,r),h(e.ct,8,20,12,16,r),h(e.ct,9,21,13,17,r);break;case 7:h(e.ct,16,17,18,19,r),h(e.ct,1,15,5,9,r),h(e.ct,2,12,6,10,r);break;case 8:h(e.ct,8,9,10,11,r),h(e.ct,2,19,4,21,r),h(e.ct,3,16,5,22,r);break;case 9:h(e.ct,4,5,6,7,r),h(e.ct,10,18,14,22,r),h(e.ct,11,19,15,23,r);break;case 10:h(e.ct,20,21,22,23,r),h(e.ct,0,8,4,14,r),h(e.ct,3,11,7,13,r);break;case 11:h(e.ct,12,13,14,15,r),h(e.ct,1,20,7,18,r),h(e.ct,0,23,6,17,r)}}function oe(e,t){switch(t){case 0:Pt(e,19),Pt(e,28);break;case 1:Pt(e,21),Pt(e,32);break;case 2:h(e.ct,0,3,1,2,1),h(e.ct,8,11,9,10,1),h(e.ct,4,7,5,6,1),h(e.ct,12,15,13,14,1),h(e.ct,16,19,21,22,1),h(e.ct,17,18,20,23,1);break;case 3:Pt(e,18),Pt(e,29),Pt(e,24),Pt(e,35)}}function Lg(e,t){let r;for(r=0;r<t;++r)oe(e,0),r%2===1&&oe(e,1),r%8===7&&oe(e,2),r%16===15&&oe(e,3)}function ya(e,t){let r,n;for(n=8,r=23;r>=0;--r)e.ct[r]=0,t>=Re[r][n]&&(t-=Re[r][n--],e.ct[r]=1)}function qi(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function yo(){let e;for(Aa(this),e=0;e<8;++e)this.ct[e]=1;for(e=8;e<24;++e)this.ct[e]=0}function Vi(e,t){let r;for(Aa(this),r=0;r<24;++r)this.ct[r]=~~(e.ct[r]/2)===t?1:0}function ho(e){let t;for(Aa(this),t=0;t<24;++t)this.ct[t]=e[t]}function Rd(){let e,t,r=new yo,n=new yo;for(e=0;e<15582;++e)for(ya(n,u0[e]),t=0;t<36;++t)qi(r,n),Pt(r,t),f0[e][t]=ji(r)}function hd(){let e,t,r,n,l,o,i,s;for(m0(Gt),Gt[0]=0,t=0,r=1;r!==15582;)for(o=t>4,s=o?-1:t,e=o?t:-1,++t,n=0;n<15582;++n)if(Gt[n]===s){for(i=0;i<27;++i)if(l=~~f0[n][i]>>>6,Gt[l]===e)if(++r,o){Gt[n]=t;break}else Gt[l]=t}}function Fd(e){let t,r,n,l=new ho(e.ct);for(n=0;n<48;++n){for(t=!0,r=0;r<24;++r)if(l.ct[r]!==~~(r/4)){t=!1;break}if(t)return n;oe(l,0),n%2===1&&oe(l,1),n%8===7&&oe(l,2),n%16===15&&oe(l,3)}return-1}function Dd(){let e,t,r,n=new yo;for(e=0;e<24;++e)n.ct[e]=e;let l=new ho(n.ct),o=new ho(n.ct),i=new ho(n.ct);for(e=0;e<48;++e){for(t=0;t<48;++t){for(r=0;r<48;++r)mg(n,l)&&(Ll[e][t]=r,r===0&&(ml[e]=t)),oe(l,0),r%2===1&&oe(l,1),r%8===7&&oe(l,2),r%16===15&&oe(l,3);oe(n,0),t%2===1&&oe(n,1),t%8===7&&oe(n,2),t%16===15&&oe(n,3)}oe(n,0),e%2===1&&oe(n,1),e%8===7&&oe(n,2),e%16===15&&oe(n,3)}for(e=0;e<48;++e)for(qi(n,o),Lg(n,ml[e]),t=0;t<36;++t)for(qi(l,n),Pt(l,t),Lg(l,e),r=0;r<36;++r)if(qi(i,o),Pt(i,r),mg(i,l)){Nt[e][t]=r;break}for(ya(n,0),e=0;e<48;++e)Ua[ml[e]]=Xi(n),oe(n,0),e%2===1&&oe(n,1),e%8===7&&oe(n,2),e%16===15&&oe(n,3)}function Ad(){let e,t,r,n,l=new yo,o=O(22984);for(t=0;t<22984;t++)o[t]=0;for(e=0,t=0;t<735471;++t)if((o[~~t>>>5]&1<<(t&31))===0){for(ya(l,t),n=0;n<48;++n)r=Xi(l),o[~~r>>>5]|=1<<(r&31),hl!==null&&(hl[r]=e<<6|ml[n]),oe(l,0),n%2===1&&oe(l,1),n%8===7&&oe(l,2),n%16===15&&oe(l,3);u0[e++]=t}}function yd(e){let t=uR(u0,e);return t>=0?t:-1}function Ud(){Bg||(Bg=!0,r0=O(70,28),t0=O(6435,28),Ig=O(70,16),Og=O(6435,16),lt=O(450450),Tg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0])}function $i(e){let t,r,n;for(r=0,n=8,t=14;t>=0;--t)e.ct[t]!==e.ct[15]&&(r+=Re[t][n--]);return r}function e0(e){let t,r,n;for(r=0,n=4,t=6;t>=0;--t)e.rl[t]!==e.rl[7]&&(r+=Re[t][n--]);return r*2+e.parity}function cl(e,t){e.parity^=Tg[t];let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ct,0,1,2,3,r);break;case 1:h(e.rl,0,1,2,3,r);break;case 2:h(e.ct,8,9,10,11,r);break;case 3:h(e.ct,4,5,6,7,r);break;case 4:h(e.rl,4,5,6,7,r);break;case 5:h(e.ct,12,13,14,15,r);break;case 6:h(e.ct,0,1,2,3,r),h(e.rl,0,5,4,1,r),h(e.ct,8,9,12,13,r);break;case 7:h(e.rl,0,1,2,3,r),h(e.ct,1,15,5,9,r),h(e.ct,2,12,6,10,r);break;case 8:h(e.ct,8,9,10,11,r),h(e.rl,0,3,6,5,r),h(e.ct,3,2,5,4,r);break;case 9:h(e.ct,4,5,6,7,r),h(e.rl,3,2,7,6,r),h(e.ct,11,10,15,14,r);break;case 10:h(e.rl,4,5,6,7,r),h(e.ct,0,8,4,14,r),h(e.ct,3,11,7,13,r);break;case 11:h(e.ct,12,13,14,15,r),h(e.rl,1,4,7,2,r),h(e.ct,1,0,7,6,r)}}function ul(e,t){switch(t){case 0:cl(e,19),cl(e,28);break;case 1:cl(e,21),cl(e,32);break;case 2:h(e.ct,0,3,1,2,1),h(e.ct,8,11,9,10,1),h(e.ct,4,7,5,6,1),h(e.ct,12,15,13,14,1),h(e.rl,0,3,5,6,1),h(e.rl,1,2,4,7,1)}}function Gg(e,t,r){let n;for(n=0;n<16;++n)e.ct[n]=~~(t.ct[n]/2);for(n=0;n<8;++n)e.rl[n]=t.ct[n+16];e.parity=r}function dg(e,t){let r,n;for(n=8,e.ct[15]=0,r=14;r>=0;--r)t>=Re[r][n]?(t-=Re[r][n--],e.ct[r]=1):e.ct[r]=0}function Rg(e,t){let r,n;for(e.parity=t&1,t>>>=1,n=4,e.rl[7]=0,r=6;r>=0;--r)t>=Re[r][n]?(t-=Re[r][n--],e.rl[r]=1):e.rl[r]=0}function Sa(){this.rl=O(8),this.ct=O(16)}function Sd(){let e,t,r,n,l,o,i,s,a,f,u=new Sa;for(l=0;l<70;++l)for(s=0;s<28;++s)Rg(u,l),cl(u,Rn[s]),r0[l][s]=e0(u);for(l=0;l<70;++l)for(Rg(u,l),i=0;i<16;++i)Ig[l][i]=e0(u),ul(u,0),i%2===1&&ul(u,1),i%8===7&&ul(u,2);for(l=0;l<6435;++l)for(dg(u,l),i=0;i<16;++i)Og[l][i]=$i(u)&65535,ul(u,0),i%2===1&&ul(u,1),i%8===7&&ul(u,2);for(l=0;l<6435;++l)for(s=0;s<28;++s)dg(u,l),cl(u,Rn[s]),t0[l][s]=$i(u)&65535;for(m0(lt),lt[0]=lt[18]=lt[28]=lt[46]=lt[54]=lt[56]=0,r=0,n=6;n!==450450;){let g=r>6,p=g?-1:r,c=g?r:-1;for(++r,l=0;l<450450;++l)if(lt[l]===p){for(e=~~(l/70),a=l%70,s=0;s<23;++s)if(t=t0[e][s],f=r0[a][s],o=t*70+f,lt[o]===c)if(++n,g){lt[l]=r;break}else lt[o]=r}}}function xd(){hg||(hg=!0,Fo=O(29400,20),Kg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1],Pr=O(29400),wa=[0,9,14,23,27,28,41,42,46,55,60,69],Ea=O(70))}function xa(e){let t,r,n,l;for(r=0,l=4,t=6;t>=0;--t)e.ud[t]!==e.ud[7]&&(r+=Re[t][l--]);for(r*=35,l=4,t=6;t>=0;--t)e.fb[t]!==e.fb[7]&&(r+=Re[t][l--]);r*=12;let o=e.fb[7]^e.ud[7];for(n=0,l=4,t=7;t>=0;--t)e.rl[t]!==o&&(n+=Re[t][l--]);return e.parity+2*(r+Ea[n])}function bd(e,t){switch(e.parity^=Kg[t],t){case 0:case 1:case 2:h(e.ud,0,1,2,3,t%3);break;case 3:h(e.rl,0,1,2,3,1);break;case 4:case 5:case 6:h(e.fb,0,1,2,3,(t-1)%3);break;case 7:case 8:case 9:h(e.ud,4,5,6,7,(t-1)%3);break;case 10:h(e.rl,4,5,6,7,1);break;case 11:case 12:case 13:h(e.fb,4,5,6,7,(t+1)%3);break;case 14:h(e.ud,0,1,2,3,1),h(e.rl,0,5,4,1,1),h(e.fb,0,5,4,1,1);break;case 15:h(e.rl,0,1,2,3,1),h(e.fb,1,4,7,2,1),h(e.ud,1,6,5,2,1);break;case 16:h(e.fb,0,1,2,3,1),h(e.ud,3,2,5,4,1),h(e.rl,0,3,6,5,1);break;case 17:h(e.ud,4,5,6,7,1),h(e.rl,3,2,7,6,1),h(e.fb,3,2,7,6,1);break;case 18:h(e.rl,4,5,6,7,1),h(e.fb,0,3,6,5,1),h(e.ud,0,3,4,7,1);break;case 19:h(e.fb,4,5,6,7,1),h(e.ud,0,7,6,1,1),h(e.rl,1,4,7,2,1)}}function Wg(e,t,r){let n,l=(t.ct[0]>t.ct[8]?1:0)^(t.ct[8]>t.ct[16]?1:0)^(t.ct[0]>t.ct[16]?1:0)?1:0;for(n=0;n<8;++n)e.ud[n]=t.ct[n]&1^1,e.fb[n]=t.ct[n+8]&1^1,e.rl[n]=t.ct[n+16]&1^1^l;e.parity=l^r}function wd(e,t){let r,n,l,o;for(e.parity=t&1,t>>>=1,l=wa[t%12],t=~~(t/12),o=4,r=7;r>=0;--r)e.rl[r]=0,l>=Re[r][o]&&(l-=Re[r][o--],e.rl[r]=1);for(n=t%35,t=~~(t/35),o=4,e.fb[7]=0,r=6;r>=0;--r)n>=Re[r][o]?(n-=Re[r][o--],e.fb[r]=1):e.fb[r]=0;for(o=4,e.ud[7]=0,r=6;r>=0;--r)t>=Re[r][o]?(t-=Re[r][o--],e.ud[r]=1):e.ud[r]=0}function ba(){this.ud=O(8),this.rl=O(8),this.fb=O(8)}function Ed(){let e,t,r,n;for(r=0;r<12;++r)Ea[wa[r]]=r;let l=new ba;for(r=0;r<29400;++r)for(n=0;n<20;++n)wd(l,r),bd(l,n),Fo[r][n]=xa(l)&65535;for(m0(Pr),Pr[0]=0,e=0,t=1;t!==29400;){for(r=0;r<29400;++r)if(Pr[r]===e)for(n=0;n<17;++n)Pr[Fo[r][n]]===-1&&(Pr[Fo[r][n]]=e+1,++t);++e}}function vd(e,t){let r;for(r=0;r<24;++r)e.ct[r]=t.ct[r]}function _d(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ct,0,1,2,3,r);break;case 1:h(e.ct,16,17,18,19,r);break;case 2:h(e.ct,8,9,10,11,r);break;case 3:h(e.ct,4,5,6,7,r);break;case 4:h(e.ct,20,21,22,23,r);break;case 5:h(e.ct,12,13,14,15,r);break;case 6:h(e.ct,0,1,2,3,r),h(e.ct,8,20,12,16,r),h(e.ct,9,21,13,17,r);break;case 7:h(e.ct,16,17,18,19,r),h(e.ct,1,15,5,9,r),h(e.ct,2,12,6,10,r);break;case 8:h(e.ct,8,9,10,11,r),h(e.ct,2,19,4,21,r),h(e.ct,3,16,5,22,r);break;case 9:h(e.ct,4,5,6,7,r),h(e.ct,10,18,14,22,r),h(e.ct,11,19,15,23,r);break;case 10:h(e.ct,20,21,22,23,r),h(e.ct,0,8,4,14,r),h(e.ct,3,11,7,13,r);break;case 11:h(e.ct,12,13,14,15,r),h(e.ct,1,20,7,18,r),h(e.ct,0,23,6,17,r)}}function va(){let e;for(this.ct=O(24),e=0;e<24;++e)this.ct[e]=~~(e/4)}function Qg(e){let t,r,n;for(va.call(this),t=0;t<23;++t)n=t+e(24-t),this.ct[n]!==this.ct[t]&&(r=this.ct[t],this.ct[t]=this.ct[n],this.ct[n]=r)}function kd(){Fg||(Fg=!0,xt=O(18),Pd())}function jg(e){e.cp=[0,1,2,3,4,5,6,7],e.co=[0,0,0,0,0,0,0,0]}function qg(e,t){let r;for(r=0;r<8;++r)e.cp[r]=t.cp[r],e.co[r]=t.co[r]}function zd(e,t){!e.temps&&(e.temps=new g0),Vg(e,xt[t],e.temps),qg(e,e.temps)}function Cd(e,t){let r,n;for(n=0,r=6;r>=0;--r)n+=e.co[r]=t%3,t=~~(t/3);e.co[7]=(15-n)%3}function Vg(e,t,r){let n,l,o,i;for(n=0;n<8;++n)r.cp[n]=e.cp[t.cp[n]],o=e.co[t.cp[n]],i=t.co[n],l=o,l=l+(o<3?i:6-i),l=l%3,(o>=3?1:0)^(i>=3?1:0)&&(l=l+3),r.co[n]=l}function g0(){jg(this)}function Cr(e,t){jg(this),ug(this.cp,e),Cd(this,t)}function Hg(e){Cr.call(this,e(40320),e(2187))}function Pd(){let e,t;for(xt[0]=new Cr(15120,0),xt[3]=new Cr(21021,1494),xt[6]=new Cr(8064,1236),xt[9]=new Cr(9,0),xt[12]=new Cr(1230,412),xt[15]=new Cr(224,137),e=0;e<18;e+=3)for(t=0;t<2;++t)xt[e+t+1]=new g0,Vg(xt[e+t],xt[e],xt[e+t+1])}function Nd(){Dg||(Dg=!0,Mt=O(1937880),p0=O(1538),o0=O(1538),yl=O(11880),$g=[0,1,6,3,4,5,2,7],ka=O(160,12),za=O(160,12),_a=[1,1,1,3,12,60,360,2520,20160,181440,1814400,19958400,239500800],Ba=[0,2,4,6,1,3,7,5,8,9,10,11])}function gl(e,t,r,n,l){let o=e.edgeo[l];e.edgeo[l]=e.edge[n],e.edge[n]=e.edgeo[r],e.edgeo[r]=e.edge[t],e.edge[t]=o}function Fl(e,t){let r,n,l,o,i;for(e.isStd||Yg(e),n=0,i=1985229328,o=47768,r=0;r<t;++r)l=e.edge[r]<<2,n*=12-r,l>=32?(n+=o>>l-32&15,o-=4368<<l-32):(n+=i>>l&15,o-=4369,i-=286331152<<l);return n}function Zg(e){let t,r=Fl(e,4);t=yl[r];let n=t&7;t>>=3,l0(e,n);let l=Fl(e,10)%20160;return t*20160+l}function n0(e,t){switch(e.isStd=!1,t){case 0:ue(e.edge,0,4,1,5),ue(e.edgeo,0,4,1,5);break;case 1:De(e.edge,0,4,1,5),De(e.edgeo,0,4,1,5);break;case 2:ue(e.edge,0,5,1,4),ue(e.edgeo,0,5,1,4);break;case 3:De(e.edge,5,10,6,11),De(e.edgeo,5,10,6,11);break;case 4:ue(e.edge,0,11,3,8),ue(e.edgeo,0,11,3,8);break;case 5:De(e.edge,0,11,3,8),De(e.edgeo,0,11,3,8);break;case 6:ue(e.edge,0,8,3,11),ue(e.edgeo,0,8,3,11);break;case 7:ue(e.edge,2,7,3,6),ue(e.edgeo,2,7,3,6);break;case 8:De(e.edge,2,7,3,6),De(e.edgeo,2,7,3,6);break;case 9:ue(e.edge,2,6,3,7),ue(e.edgeo,2,6,3,7);break;case 10:De(e.edge,4,8,7,9),De(e.edgeo,4,8,7,9);break;case 11:ue(e.edge,1,9,2,10),ue(e.edgeo,1,9,2,10);break;case 12:De(e.edge,1,9,2,10),De(e.edgeo,1,9,2,10);break;case 13:ue(e.edge,1,10,2,9),ue(e.edgeo,1,10,2,9);break;case 14:De(e.edge,0,4,1,5),De(e.edgeo,0,4,1,5),ue(e.edge,9,11),ue(e.edgeo,8,10);break;case 15:De(e.edge,5,10,6,11),De(e.edgeo,5,10,6,11),ue(e.edge,1,3),ue(e.edgeo,0,2);break;case 16:De(e.edge,0,11,3,8),De(e.edgeo,0,11,3,8),ue(e.edge,5,7),ue(e.edgeo,4,6);break;case 17:De(e.edge,2,7,3,6),De(e.edgeo,2,7,3,6),ue(e.edge,8,10),ue(e.edgeo,9,11);break;case 18:De(e.edge,4,8,7,9),De(e.edgeo,4,8,7,9),ue(e.edge,0,2),ue(e.edgeo,1,3);break;case 19:De(e.edge,1,9,2,10),De(e.edgeo,1,9,2,10),ue(e.edge,4,6),ue(e.edgeo,5,7)}}function Bl(e,t){switch(e.isStd=!1,t){case 0:n0(e,14),n0(e,17);break;case 1:gl(e,11,5,10,6),gl(e,5,10,6,11),gl(e,1,2,3,0),gl(e,4,9,7,8),gl(e,8,4,9,7),gl(e,0,1,2,3);break;case 2:St(e,4,5),St(e,5,4),St(e,11,8),St(e,8,11),St(e,7,6),St(e,6,7),St(e,9,10),St(e,10,9),St(e,1,1),St(e,0,0),St(e,3,3),St(e,2,2)}}function l0(e,t){for(;t>=2;)t-=2,Bl(e,1),Bl(e,2);t!==0&&Bl(e,0)}function xo(e,t){let r,n,l,o,i,s;for(i=1985229328,s=47768,l=0,r=0;r<11;++r)if(n=_a[11-r],o=~~(t/n),t=t%n,l^=o,o<<=2,o>=32){o=o-32,e.edge[r]=s>>o&15;let a=(1<<o)-1;s=(s&a)+(s>>4&~a)}else{e.edge[r]=i>>o&15;let a=(1<<o)-1;i=(i&a)+(i>>>4&~a)+(s<<28),s=s>>4}for((l&1)===0?e.edge[11]=i:(e.edge[11]=e.edge[10],e.edge[10]=i),r=0;r<12;++r)e.edgeo[r]=r;e.isStd=!0}function Ag(e,t){let r;for(r=0;r<12;++r)e.edge[r]=t.edge[r],e.edgeo[r]=t.edgeo[r];e.isStd=t.isStd}function Jg(e,t){let r,n,l,o;for(e.temp===null&&(e.temp=O(12)),r=0;r<12;++r)e.temp[r]=r,e.edge[r]=t.ep[Ba[r]+12]%12;for(n=1,r=0;r<12;++r)for(;e.edge[r]!==r;)o=e.edge[r],e.edge[r]=e.edge[o],e.edge[o]=o,l=e.temp[r],e.temp[r]=e.temp[o],e.temp[o]=l,n^=1;for(r=0;r<12;++r)e.edge[r]=e.temp[t.ep[Ba[r]]%12];return n}function Yg(e){let t;for(e.temp===null&&(e.temp=O(12)),t=0;t<12;++t)e.temp[e.edgeo[t]]=t;for(t=0;t<12;++t)e.edge[t]=e.temp[e.edge[t]],e.edgeo[t]=t;e.isStd=!0}function De(e,t,r,n,l){let o;o=e[t],e[t]=e[n],e[n]=o,o=e[r],e[r]=e[l],e[l]=o}function St(e,t,r){let n=e.edge[t];e.edge[t]=e.edgeo[r],e.edgeo[r]=n}function gr(){this.edge=O(12),this.edgeo=O(12)}function Md(){let e,t,r,n,l,o,i,s,a,f,u,g,p,c,L,m,d,F,A,U,x,b,N=new gr,J=new gr,C=new gr;for(m0(Mt),s=0,Qi=1,pa(Mt,0,0);Qi!==31006080&&(L=s>9,i=s%3,o=(s+1)%3,f=L?3:i,e=L?i:3,!(s>=9));){for(g=0;g<31006080;g+=16)if(b=Mt[~~g>>4],!(!L&&b===-1)){for(u=g,a=g+16;u<a;++u,b>>=2)if((b&3)===f){for(A=~~(u/20160),t=p0[A],n=u%20160,xo(N,t*20160+n),d=0;d<17;++d)if(r=Dl(N.edge,d<<3,4),U=yl[r],x=U&7,U>>=3,l=Dl(N.edge,d<<3|x,10)%20160,p=U*20160+l,Uo(Mt,p)===e){if(pa(Mt,L?u:p,o),++Qi,L)break;if(F=o0[U],F!==1)for(Ag(J,N),n0(J,d),l0(J,x),m=1;(F=~~F>>1&65535)!==0;++m)(F&1)===1&&(Ag(C,J),l0(C,m),c=U*20160+Fl(C,10)%20160,Uo(Mt,c)===e&&(pa(Mt,c,o),++Qi))}}}++s}}function Uo(e,t){return e[t>>4]>>((t&15)<<1)&3}function Dl(e,t,r){let n,l,o,i,s,a=za[t],f=ka[t];for(l=0,s=1985229328,i=47768,n=0;n<r;++n)o=a[e[f[n]]]<<2,l*=12-n,o>=32?(l+=i>>o-32&15,i-=4368<<o-32):(l+=s>>o&15,i-=4369,s-=286331152<<o);return l}function Xg(e){let t,r,n,l,o,i,s,a,f,u,g,p=new gr;if(i=0,o=Uo(Mt,e),o===3)return 10;for(;e!==0;)for(o===0?o=2:--o,f=~~(e/20160),t=p0[f],n=e%20160,xo(p,t*20160+n),a=0;a<17;++a)if(r=Dl(p.edge,a<<3,4),u=yl[r],g=u&7,u>>=3,l=Dl(p.edge,a<<3|g,10)%20160,s=u*20160+l,Uo(Mt,s)===o){++i,e=s;break}return i}function Gd(e,t){let r=Uo(Mt,e);return r===3?10:(1227133513<<r>>t&3)+t-1}function Od(){let e,t,r,n=new gr;for(t=0;t<20;++t)for(r=0;r<8;++r){for(xo(n,0),n0(n,t),l0(n,r),e=0;e<12;++e)ka[t<<3|r][e]=n.edge[e];for(Yg(n),e=0;e<12;++e)za[t<<3|r][e]=n.temp[e]}}function Td(){let e,t,r,n,l=new gr,o=O(1485);for(t=0;t<1485;t++)o[t]=0;for(e=0,t=0;t<11880;++t)if((o[~~t>>>3]&1<<(t&7))===0){for(xo(l,t*_a[8]),n=0;n<8;++n)r=Fl(l,4),r===t&&(o0[e]=(o0[e]|1<<n)&65535),o[~~r>>3]=o[~~r>>3]|1<<(r&7),yl[r]=e<<3|$g[n],Bl(l,0),n%2===1&&(Bl(l,1),Bl(l,2));p0[e++]=t}}function pa(e,t,r){e[t>>4]^=(3^r)<<((t&15)<<1)}function Id(){yg||(yg=!0)}function Wd(e){let t,r,n;for(t=0,n=!1,r=0;r<12;++r)t|=1<<e.ep[r],n=n!==e.ep[r]>=12;return t&=~~t>>12,t===0&&!n}function Kd(e,t){let r;for(r=0;r<24;++r)e.ep[r]=t.ep[r]}function Qd(e,t){let r=t%3;switch(t=~~(t/3),t){case 0:h(e.ep,0,1,2,3,r),h(e.ep,12,13,14,15,r);break;case 1:h(e.ep,11,15,10,19,r),h(e.ep,23,3,22,7,r);break;case 2:h(e.ep,0,11,6,8,r),h(e.ep,12,23,18,20,r);break;case 3:h(e.ep,4,5,6,7,r),h(e.ep,16,17,18,19,r);break;case 4:h(e.ep,1,20,5,21,r),h(e.ep,13,8,17,9,r);break;case 5:h(e.ep,2,9,4,10,r),h(e.ep,14,21,16,22,r);break;case 6:h(e.ep,0,1,2,3,r),h(e.ep,12,13,14,15,r),h(e.ep,9,22,11,20,r);break;case 7:h(e.ep,11,15,10,19,r),h(e.ep,23,3,22,7,r),h(e.ep,2,16,6,12,r);break;case 8:h(e.ep,0,11,6,8,r),h(e.ep,12,23,18,20,r),h(e.ep,3,19,5,13,r);break;case 9:h(e.ep,4,5,6,7,r),h(e.ep,16,17,18,19,r),h(e.ep,8,23,10,21,r);break;case 10:h(e.ep,1,20,5,21,r),h(e.ep,13,8,17,9,r),h(e.ep,14,0,18,4,r);break;case 11:h(e.ep,2,9,4,10,r),h(e.ep,14,21,16,22,r),h(e.ep,7,15,1,17,r)}}function Ca(){let e;for(this.ep=O(24),e=0;e<24;++e)this.ep[e]=e}function ep(e){let t,r,n;for(Ca.call(this),t=0;t<23;++t)n=t+e(24-t),n!==t&&(r=this.ep[t],this.ep[t]=this.ep[n],this.ep[n]=r)}function jd(){Ug||(Ug=!0,da=[35,1,34,2,4,6,22,5,19])}function tp(e){e.moveBuffer=O(60)}function qd(e,t){return e.value-t.value}function Al(e,t){let r;for(Kd(e.edge,t.edge),vd(e.center,t.center),qg(e.corner,t.corner),e.value=t.value,e.add1=t.add1,e.length1=t.length1,e.length2=t.length2,e.length3=t.length3,e.sym=t.sym,r=0;r<60;++r)e.moveBuffer[r]=t.moveBuffer[r];e.moveLength=t.moveLength,e.edgeAvail=t.edgeAvail,e.centerAvail=t.centerAvail,e.cornerAvail=t.cornerAvail}function Nr(e){for(;e.centerAvail<e.moveLength;)_d(e.center,e.moveBuffer[e.centerAvail++]);return e.center}function rp(e){for(;e.cornerAvail<e.moveLength;)zd(e.corner,e.moveBuffer[e.cornerAvail++]%18);return e.corner}function So(e){for(;e.edgeAvail<e.moveLength;)Qd(e.edge,e.moveBuffer[e.edgeAvail++]);return e.edge}function Vd(e){let t,r,n,l,o,i,s=new Array(e.moveLength-(e.add1?2:0));for(r=0,t=0;t<e.length1;++t)s[r++]=e.moveBuffer[t];for(i=e.sym,t=e.length1+(e.add1?2:0);t<e.moveLength;++t)Nt[i][e.moveBuffer[t]]>=27?(s[r++]=Nt[i][e.moveBuffer[t]]-9,l=da[Nt[i][e.moveBuffer[t]]-27],i=Ll[i][l]):s[r++]=Nt[i][e.moveBuffer[t]];let a=Ll[ml[i]][Fd(Nr(e))];for(o="",i=a,t=r-1;t>=0;--t)n=s[t],n=~~(n/3)*3+(2-n%3),Nt[i][n]>=27?(o=o+Ra[Nt[i][n]-9]+" ",l=da[Nt[i][n]-27],i=Ll[i][l]):o=o+Ra[Nt[i][n]]+" ";return o}function dn(e,t){e.moveBuffer[e.moveLength++]=t}function i0(){tp(this),this.edge=new Ca,this.center=new va,this.corner=new g0}function c0(e){i0.call(this),Al(this,e)}function np(e){tp(this),this.edge=new ep(e),this.center=new Qg(e),this.corner=new Hg(e)}function Hd(e,t){return t.value-e.value}function s0(e,t){return Hd(e,t)}function lp(){}function Zd(){if(Sg)return;Sg=!0;let e,t;for(Ra=["U  ","U2 ","U' ","R  ","R2 ","R' ","F  ","F2 ","F' ","D  ","D2 ","D' ","L  ","L2 ","L' ","B  ","B2 ","B' ","Uw ","Uw2","Uw'","Rw ","Rw2","Rw'","Fw ","Fw2","Fw'","Dw ","Dw2","Dw'","Lw ","Lw2","Lw'","Bw ","Bw2","Bw'"],Rn=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,21,22,23,25,28,30,31,32,34,36],Ro=[0,1,2,4,6,7,8,9,10,11,13,15,16,17,19,22,25,28,31,34,36],xg=O(37),bg=O(37),pl=O(37,36),Hi=O(29,28),Zi=O(21,20),ca=O(36),Do=O(28),dl=O(20),e=0;e<29;++e)xg[Rn[e]]=e;for(e=0;e<21;++e)bg[Ro[e]]=e;for(e=0;e<36;++e){for(t=0;t<36;++t)pl[e][t]=~~(e/3)===~~(t/3)||~~(e/3)%3===~~(t/3)%3&&e>t;pl[36][e]=!1}for(e=0;e<29;++e)for(t=0;t<28;++t)Hi[e][t]=pl[Rn[e]][Rn[t]];for(e=0;e<21;++e)for(t=0;t<20;++t)Zi[e][t]=pl[Ro[e]][Ro[t]];for(e=0;e<36;++e)for(ca[e]=36,t=e;t<36;++t)if(!pl[e][t]){ca[e]=t-1;break}for(e=0;e<28;++e)for(Do[e]=28,t=e;t<28;++t)if(!Hi[e][t]){Do[e]=t-1;break}for(e=0;e<20;++e)for(dl[e]=20,t=e;t<20;++t)if(!Zi[e][t]){dl[e]=t-1;break}}function Jd(e){let t,r,n,l,o,i,s,a,f,u,g,p;e.solution="";let c=ji(new Vi(Nr(e.c),0)),L=ji(new Vi(Nr(e.c),1)),m=ji(new Vi(Nr(e.c),2)),d=Gt[~~c>>6],F=Gt[~~L>>6],A=Gt[~~m>>6];for(e.p1SolsCnt=0,e.arr2idx=0,oR(e.p1sols.heap),e.length1=(d<F?d:F)<A?d<F?d:F:A;e.length1<100&&!(A<=e.length1&&Ji(e,~~m>>>6,m&63,e.length1,-1,0)||d<=e.length1&&Ji(e,~~c>>>6,c&63,e.length1,-1,0)||F<=e.length1&&Ji(e,~~L>>>6,L&63,e.length1,-1,0));++e.length1);let U=BR(e.p1sols,Da(RR,Gr([ad,ha,Fa]),zg,0,0));U.sort(function(N,J){return N.value-J.value}),t=9;do{e:for(a=U[0].value;a<100;++a)for(i=0;i<U.length&&!(U[i].value>a);++i)if(!(a-U[i].length1>t)&&(Al(e.c1,U[i]),Gg(e.ct2,Nr(e.c1),a0(So(e.c1).ep)),g=$i(e.ct2),p=e0(e.ct2),e.length1=U[i].length1,e.length2=a-U[i].length1,op(e,g,p,e.length2,28,0)))break e;++t}while(a===100);e.arr2.sort(function(N,J){return N.value-J.value}),s=0,r=13;do{e:for(f=e.arr2[0].value;f<100;++f)for(i=0;i<Math.min(e.arr2idx,100)&&!(e.arr2[i].value>f);++i)if(!(f-e.arr2[i].length1-e.arr2[i].length2>r)&&(o=Jg(e.e12,So(e.arr2[i])),Wg(e.ct3,Nr(e.arr2[i]),o^a0(rp(e.arr2[i]).cp)),n=xa(e.ct3),l=Fl(e.e12,10),u=Xg(Zg(e.e12)),u<=f-e.arr2[i].length1-e.arr2[i].length2&&ip(e,l,n,u,f-e.arr2[i].length1-e.arr2[i].length2,20,0))){s=i;break e}++r}while(f===100);let x=new c0(e.arr2[s]);e.length1=x.length1,e.length2=x.length2;let b=f-e.length1-e.length2;for(i=0;i<b;++i)dn(x,Ro[e.move3[i]]);e.solution=Vd(x)}function Yd(e,t){let r,n;for(Al(e.c1,e.c),r=0;r<e.length1;++r)dn(e.c1,e.move1[r]);switch(Ua[t]){case 0:dn(e.c1,24),dn(e.c1,35),e.move1[e.length1]=24,e.move1[e.length1+1]=35,e.add1=!0,t=19;break;case 12869:dn(e.c1,18),dn(e.c1,29),e.move1[e.length1]=18,e.move1[e.length1+1]=29,e.add1=!0,t=34;break;case 735470:e.add1=!1,t=0}Gg(e.ct2,Nr(e.c1),a0(So(e.c1).ep));let l=$i(e.ct2),o=e0(e.ct2),i=lt[l*70+o];return e.c1.value=i+e.length1,e.c1.length1=e.length1,e.c1.add1=e.add1,e.c1.sym=t,++e.p1SolsCnt,e.p1sols.heap.size<500?n=new c0(e.c1):(n=mR(e.p1sols),n.value>e.c1.value&&Al(n,e.c1)),rR(e.p1sols,n),e.p1SolsCnt===1e4}function Xd(e){let t;for(Al(e.c2,e.c1),t=0;t<e.length2;++t)dn(e.c2,e.move2[t]);if(!Wd(So(e.c2)))return!1;let r=Jg(e.e12,So(e.c2));Wg(e.ct3,Nr(e.c2),r^a0(rp(e.c2).cp));let n=xa(e.ct3);Fl(e.e12,10);let l=Xg(Zg(e.e12));return e.arr2[e.arr2idx]?Al(e.arr2[e.arr2idx],e.c2):e.arr2[e.arr2idx]=new c0(e.c2),e.arr2[e.arr2idx].value=e.length1+e.length2+Math.max(l,Pr[n]),e.arr2[e.arr2idx].length2=e.length2,++e.arr2idx,e.arr2idx===e.arr2.length}function $d(e,t){return ap(),e.c=new np(t),Jd(e),e.solution}function Ji(e,t,r,n,l,o){let i,s,a,f,u,g;if(t===0)return n===0&&Yd(e,r);for(i=0;i<27;i+=3)if(!(i===l||i===l-9||i===l-18))for(f=0;f<3;++f){if(a=i+f,s=f0[t][Nt[r][a]],u=Gt[~~s>>>6],u>=n){if(u>n)break;continue}if(g=Ll[r][s&63],s>>>=6,e.move1[o]=a,Ji(e,s,g,n-1,i,o+1))return!0}return!1}function op(e,t,r,n,l,o){let i,s,a,f;if(t===0&&lt[r]===0)return n===0&&Xd(e);for(s=0;s<23;++s){if(Hi[l][s]){s=Do[s];continue}if(i=t0[t][s],f=r0[r][s],a=lt[i*70+f],a>=n){a>n&&(s=Do[s]);continue}if(e.move2[o]=Rn[s],op(e,i,f,n-1,s,o+1))return!0}return!1}function ip(e,t,r,n,l,o,i){let s,a,f,u,g,p,c,L,m;if(l===0)return t===0&&r===0;for(xo(e.tempe[i],t),g=0;g<17;++g){if(Zi[o][g]){g=dl[g];continue}if(f=Fo[r][g],p=Pr[f],p>=l){p>l&&g<14&&(g=dl[g]);continue}if(u=Dl(e.tempe[i].edge,g<<3,10),s=~~(u/20160),L=yl[s],m=L&7,L>>=3,a=Dl(e.tempe[i].edge,g<<3|m,10)%20160,c=Gd(L*20160+a,n),c>=l){c>l&&g<14&&(g=dl[g]);continue}if(ip(e,u,f,c,l-1,g,i+1))return e.move3[i]=g,!0}return!1}function sp(){let e;for(this.p1sols=new mp(new lp),this.move1=O(15),this.move2=O(20),this.move3=O(20),this.c1=new i0,this.c2=new i0,this.ct2=new Sa,this.ct3=new ba,this.e12=new gr,this.tempe=O(20),this.arr2=O(100),e=0;e<20;++e)this.tempe[e]=new gr}function ap(){wg||(Dd(),hl=O(735471),Ad(),Rd(),hl=null,hd(),Sd(),Ed(),Od(),Td(),Md(),wg=!0)}function eR(){Eg||(Eg=!0)}function a0(e){let t,r,n,l;for(l=0,t=0,n=e.length;t<n;++t)for(r=t;r<n;++r)e[t]>e[r]&&(l^=1);return l}function h(e,t,r,n,l,o){let i;switch(o){case 0:i=e[l],e[l]=e[n],e[n]=e[r],e[r]=e[t],e[t]=i;return;case 1:i=e[t],e[t]=e[n],e[n]=i,i=e[r],e[r]=e[l],e[l]=i;return;case 2:i=e[t],e[t]=e[r],e[r]=e[n],e[n]=e[l],e[l]=i;return}}function fp(){}function up(e,t,r,n){let l=new fp;return l.typeName=e+t,pp(r!==0?-r:0)&&cp(r!==0?-r:0,l),l.modifiers=4,l.superclass=Pa,l.componentType=n,l}function gp(e,t,r,n){let l=new fp;return l.typeName=e+t,pp(r)&&cp(r,l),l.superclass=n,l}function tR(e){let t=Ao[e.seedId];return e=null,t}function pp(e){return typeof e=="number"&&e>0}function cp(e,t){let r;if(t.seedId=e,e===2)r=String.prototype;else if(e>0){let n=tR(t);if(n)r=n.prototype;else{n=Ao[e]=function(){},n.___clazz$=t;return}}else return;r.___clazz$=t}function rR(e,t){if(cR(e,t))return!0}function nR(e){e.array=Da(Lp,Gr([ha,Fa]),_g,0,0)}function lR(e,t){return Yi(e.array,e.size++,t),!0}function oR(e){e.array=Da(Lp,Gr([ha,Fa]),_g,0,0),e.size=0}function Mr(e,t){return e.array[t]}function iR(e,t){let r=e.array[t];return fR(e.array,t,1),--e.size,r}function Rl(e,t,r){let n=e.array[t];return Yi(e.array,t,r),n}function sR(e,t){let r;for(t.length<e.size&&(t=pd(t,e.size)),r=0;r<e.size;++r)Yi(t,r,e.array[r]);return t.length>e.size&&Yi(t,e.size,null),t}function aR(){nR(this),this.array.length=500}function fR(e,t,r){e.splice(t,r)}function uR(e,t){let r,n,l,o;for(n=0,r=e.length-1;n<=r;)if(l=n+(~~(r-n)>>1),o=e[l],o<t)n=l+1;else if(o>t)r=l-1;else return l;return-n-1}function m0(e){gR(e,e.length)}function gR(e,t){let r;for(r=0;r<t;++r)e[r]=-1}function pR(e,t){let r,n,l,o,i=e.heap.size,s=Mr(e.heap,t);for(;t*2+1<i&&(r=(n=2*t+1,l=n+1,o=n,l<i&&s0(Mr(e.heap,l),Mr(e.heap,n))<0&&(o=l),o),!(s0(s,Mr(e.heap,r))<0));)Rl(e.heap,t,Mr(e.heap,r)),t=r;Rl(e.heap,t,s)}function cR(e,t){let r,n;for(n=e.heap.size,lR(e.heap,t);n>0;){if(r=n,n=~~((n-1)/2),s0(Mr(e.heap,n),t)<=0)return Rl(e.heap,r,t),!0;Rl(e.heap,r,Mr(e.heap,n))}return Rl(e.heap,n,t),!0}function mR(e){if(e.heap.size===0)return null;let t=Mr(e.heap,0);return LR(e),t}function LR(e){let t=iR(e.heap,e.heap.size-1);0<e.heap.size&&(Rl(e.heap,0,t),pR(e,0))}function BR(e,t){return sR(e.heap,t)}function mp(e){this.heap=new aR,this.cmp=e}function dp(){vg||(vg=!0,Zd(),eR(),dd(),Ud(),xd(),Nd(),kd(),Id(),jd(),Bp=new sp)}function hR(){dp(),ap()}async function FR(){Ee(),dp();let e=v.fromString($d(Bp,await ve()));return(await fl()).concat(e)}var Z,Ao,od,_g,ha,kg,id,sd,zg,ad,fd,ud,Fa,pg,ma,La,cg,Gt,f0,Ua,hl,u0,ml,Nt,Ll,Bg,t0,lt,Og,Tg,r0,Ig,hg,Fo,Kg,Pr,wa,Ea,Fg,xt,Dg,Ba,Qi,Mt,_a,ka,za,yl,p0,$g,o0,yg,Ug,da,Sg,pl,Hi,Zi,Rn,Ra,Ro,ca,Do,dl,xg,bg,wg,Eg,Pa,Lp,dR,RR,Bp,vg,Rp=y(()=>{"use strict";Be();ua();gg();yt();At();Ao={},od={},_g=0,ha=30,kg=21,id=22,sd=23,zg=24,ad=25,fd=34,ud=26,Fa=40;Rt(1,-1,od);Z.value=null;Rt(73,1,{},Cg);Z.queryId$=0;pg=!1;cg=!1;Rt(153,1,Gr([kg]),yo,Vi,ho);hl=null,Bg=!1;Rt(154,1,{},Sa);Z.parity=0;hg=!1;Rt(155,1,{},ba);Z.parity=0;Rt(156,1,{},va,Qg);Fg=!1;Rt(157,1,Gr([id]),g0,Cr,Hg);Z.temps=null;Dg=!1;Rt(158,1,Gr([sd]),gr);Z.isStd=!0;Z.temp=null;Qi=0,yg=!1;Rt(159,1,{},Ca,ep);Ug=!1;Rt(160,1,Gr([zg,fd]),i0,c0,np);Z.compareTo$=function(t){return qd(this,t)};Z.add1=!1;Z.center=null;Z.centerAvail=0;Z.corner=null;Z.cornerAvail=0;Z.edge=null;Z.edgeAvail=0;Z.length1=0;Z.length2=0;Z.length3=0;Z.moveLength=0;Z.sym=0;Z.value=0;Rt(161,1,{},lp);Z.compare=function(t,r){return s0(t,r)};Sg=!1;Rt(163,1,Gr([ud]),sp);Z.add1=!1;Z.arr2idx=0;Z.c=null;Z.length1=0;Z.length2=0;Z.p1SolsCnt=0;Z.solution="";wg=!1,Eg=!1;Z.val$outerIter=null;Z.size=0;Rt(239,1,{},mp);Z.cmp=null;Z.heap=null;Pa=gp("java.lang.","Object",1,null),Lp=up("[Ljava.lang.","Object;",356,Pa),dR=gp("cs.threephase.","FullCube",160,Pa),RR=up("[Lcs.threephase.","FullCube;",381,dR),vg=!1});var hp={};mt(hp,{initialize:()=>hR,random444Scramble:()=>FR});var Fp=y(()=>{"use strict";Rp()});function wo(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function L0(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function kp(e,t,r,n,l=e-t-r-n){return L0(e,t+r)*L0(t+r,t)*L0(n+l,n)}function xR(e){e=e.slice();let t=e.length,r=wo(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function bR(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function qa(e,t){let r=[],n=wo(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function hn(e){return xR(e)>>1}function Ka(e,t){let r=[0];for(let n=1;n<e;n++){let l=t(n+1);r[n]=r[l],r[l]=n}return r}function Sp(e,t){let r=Ka(e,t);return bR(r)===1&&([r[0],r[1]]=[r[1],r[0]]),r}function wR(e){return e|=0,31-Math.clz32(e^e-1)}function xp(e,t){e|=0,t|=0;let r=e+" "+t;if(Ga[r])return Ga[r];let n=L0(e,t),l=new Uint32Array(n),o=new Uint32Array(1<<e).fill(-1);for(let i=0,s=(1<<t)-1;i<n;i++){l[i]=s,o[s]=i;let a=s|s-1;s=a+1|(~a&-~a)-1>>wR(s)+1}return Ga[r]=[l,o]}function ER(e){e|=0;let t=0;for(;e!==0;)e&=e-1,t++;return t}function bp(e){return e&=65535,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,e}function vR(e,t){return bp(e)|bp(t)<<1}function bl(e,t,r,n,l){if(e|=0,t|=0,r|=0,n|=0,l|=0,e!==t+r+n+l)throw new Error("generate_comb4_lookup_tables: invalid parameters");let o=[e,t,r,n,l].join(" ");if(Oa[o])return Oa[o];let[i,s]=xp(e,r+l),[a,f]=xp(e,n+l),u=kp(e,t,r,n,l),g=new Uint32Array(u),p=new Uint32Array(4**e).fill(-1);for(let c=0,L=0;c<a.length;c++){let m=a[c];for(let d=0;d<i.length;d++){let F=i[d];if(ER(F&m)===l){let A=vR(F,m);g[L]=A,p[A]=L,L++}}}return Oa[o]=[g,p]}function tt(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function wl(e,t,r){let n=[];for(let l=0;l<r.length;l++)n[l]=e[t[r[l]]];return n}function Va(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n of e)for(let l=0;l<n.length;l++)r[n[l]]=n[(l+1)%n.length];return r}function Fn(e,t){let r=e.length,n=Array(r).fill(0);for(let i=1;i<r;i++)n[i]=n[i-1]+t[i-1];let l=n[r-1]+t[r-1],o=Array(l);for(let i=0;i<r;i++)t[i]&&(o[n[i]]=n[e[i]]);return o}function Ha(e){let t=e.length,r=Array(t);for(let n=0;n<t;n++)r[e[n]]=n;return r}function _R(e,t){for(;e&&t;)[e,t]=[t%e,e];return Math.abs(e+t)}function kR(e,t){return e*t/_R(e,t)}function zR(e){let t=1,r=e.length,n=Array(r).fill(!1),l=-1;for(;l=n.indexOf(!1,l+1),l!==-1;){let o=0,i=l;for(;!n[i];)n[i]=!0,i=e[i],o++;t=kR(t,o)}return t}function IR(e,t){for(let r=0;r<6;r++){if(e===Ot[Or[r][0]]&&t===Ot[Or[r][2]])return[r,0];if(e===Ot[Or[r][2]]&&t===Ot[Or[r][0]])return[r,1]}throw new Error("unknown corner piece")}function WR(e,t){for(let r=0;r<12;r++)if(e===Ot[Tr[r][0]]&&t===Ot[Tr[r][1]]||t===Ot[Tr[r][0]]&&e===Ot[Tr[r][1]])return r;throw new Error("unknown edge piece")}function Za(e,t){return IR(e[Or[t][0]],e[Or[t][2]])}function D0(e,t){return WR(e[Tr[t][0]],e[Tr[t][1]])}function KR(e,t,r,n){let l=Or[t],o=Or[r].map(i=>Ot[i]);n%2!==0&&(o=[o[2],o[3],o[0],o[1]]);for(let i=0;i<4;i++)e[l[i]]=o[i]}function QR(e,t,r){let n=Tr[t],l=Tr[r].map(o=>Ot[o]);for(let o=0;o<2;o++)e[n[o]]=l[o]}function Pp(e){let t=e.map(a=>Ot[a]),n=Array(6).fill().map((a,f)=>Za(t,f)).map(([a,f])=>a+6*f),l=n.concat(n.map(a=>(a+6)%12)),o=Array(12).fill().map((a,f)=>D0(t,f)),i=Array(12).fill().map((a,f)=>Dn.indexOf(e[Dn[f]])),s=Array(12).fill().map((a,f)=>Ul.indexOf(e[Ul[f]]));return{cp:l,ep:o,ap:i,bp:s}}function qR(e){let t=Array(72),r=Sp(5,e);r.push(5);let n=Array(4).fill().map(s=>e(2));n.push(n.reduce((s,a)=>s^a)),n.push(0);for(let s=0;s<6;s++)KR(t,s,r[s],n[s]);let l=Sp(12,e);for(let s=0;s<12;s++)QR(t,s,l[s]);let o=Ka(12,e).map(s=>s/3|0),i=Ka(12,e).map(s=>4+(s/3|0));for(let s=0;s<12;s++)t[Dn[s]]=o[s],t[Ul[s]]=i[s];return t}function Mp(e,t=!1){if(t){e=e.map(m=>m.slice());let c=[0,1,2,3,4,5,6,7],L=[[0,3,5,6,4,7,1,2],[7,1,0,6,3,5,4,2],[7,4,2,1,3,0,6,5],[2,4,5,3,6,0,1,7]];L=L.concat(L.map(m=>Ha(m)));for(let m=0;m<e.length;m++)if(e[m][0]<4)e[m][0]=c[e[m][0]];else{let d=c[e[m][0]],F=e[m][1];e[m][0]=d,c=tt(F===1?L[d^4]:L[d],c)}}let r=t?"U L F R D BR B BL".split(" "):jR,n=["0","","'"];return e.map(([o,i])=>r[o]+n[i]).join(" ")}function Ir(e,t){for(let[r,n]of t)for(let l=0;l<n;l++)e=tt(e,Np[r]);return e}function Gp(e){return e.map(([t,r])=>[t,(3-r)%3]).reverse()}function R0(e,t=!1){if(e.length===0)return[];let r=[],n;for(let[l,o]of e)n&&n[0]===l?(n[1]+=o,n[1]%=3,n[1]===0&&(r.pop(),n=r.length===0?void 0:r[r.length-1])):r.length>=2&&(n[0]^l)===4&&r[r.length-2][0]===l?(r[r.length-2][1]+=o,r[r.length-2][1]%=3,r[r.length-2][1]===0&&r.splice(r.length-2,1)):(n=[l,o],r.push(n));return t&&""+e!=""+r&&console.log(\`simplified \${e} to \${r}\`),r}function VR(e){return Mp(Gp(JR(qR(e),!0)),!0)}function Sl(e,t,r,n,l,o){let i=kp(e,t,r,n,l),s=o.length,[a,f]=bl(e,t,r,n,l),u=Array(s).fill().map(()=>new Uint32Array(i));for(let g=0;g<i;g++){let p=a[g],c=Array(e);for(let L=0;L<e;L++)c[L]=p>>2*L&3;for(let L=0;L<s;L++){let d=tt(c,o[L]).reduce((F,A,U)=>F|A<<2*U,0);u[L][g]=f[d]}}return u}function Op(e){let t=e[0].length,r=e.length,n=Array(r).fill().map(()=>new Uint32Array(t));for(let l=0;l<t;l++)for(let o=0;o<r;o++)n[o][e[o][l]]=l;return n}function yn(e,t){let r=e[0].length,n=t[0].length,l=e.length,o=Array(l).fill().map(()=>new Uint32Array(r*n));for(let i=0;i<n;i++)for(let s=0;s<r;s++){let a=s+r*i;for(let f=0;f<l;f++)o[f][a]=e[f][s]+r*t[f][i]}return o}function HR(e,t){let r=e.length,n=e[0].length,l=new Uint8Array(n);l[t]=1;let o=!1;for(;!o;){o=!0;for(let s=0;s<n;s++)if(!!l[s])for(let a=0;a<r;a++)l[e[a][s]]||(l[e[a][s]]=1,o=!1)}let i=new Int32Array(n).fill(-1);for(let s=0,a=0;s<n;s++)!l[s]||(i[s]=a,a++);return[e.map(s=>Fn(s,l)),i]}function ZR(e,t){let r=e.length,n=e[0].length,l=new Int32Array(n).fill(-1);t.forEach(a=>{l[a]=0});let o=[t];for(let a=0;a<o.length;a++){let f=o[a];for(let u=0;u<r;u++){let g=e[u][f[0]];if(l[g]!==-1)continue;let p=f.map(L=>e[u][L]),c=o.length;o.push(p);for(let L of p){if(l[L]!==-1)throw new Error("quotienting failed");l[L]=c}}}let i=o.length,s=Array(r).fill().map(()=>new Int32Array(i));for(let a=0;a<r;a++)for(let f=0;f<i;f++)s[a][f]=l[e[a][o[f][0]]];return[s,l]}function Tp(e,t,r){let n=e[0].length,l=e.length,o=new Int32Array(n).fill(-1);o[t]=r,o[r]=t;let i=!1;for(;!i;){i=!0;for(let s=0;s<n;s++){if(o[s]===-1)continue;let a=o[s];for(let f=0;f<l;f++){let u=f^1,g=e[f][s],p=e[u][e[u][a]];if(o[g]===-1)i=!1,o[g]=p,o[p]=g;else if(o[g]!==p)throw new Error("mirroring failed - is the initial map correct?")}}}return o}function Ip(e,t){let r=e[0].length,n=e.length,l=new Int8Array(r).fill(-1);for(let s of t)l[s]=0;let o=0,i=!1;for(;!i;){i=!0;for(let s=0;s<r;s++)if(l[s]===o)for(let a=0;a<n;a++){let f=e[a][s];for(;f!==s;)l[f]===-1&&(i=!1,l[f]=o+1),f=e[a][f]}o++}return l}function JR(e,t=!1){let r=th(e).next().value,n=Ir(e,r),l=(t?dh:Bh)(n),o=R0(r.concat(l),!1);return Ir(e,o).join("")!==Eo.join("")&&(console.log("solving failed!"),console.log(e),console.log(r),console.log(n),console.log(l),console.log(Ir(e,o))),o}function XR(e){let[t,r]=bl(12,6,0,3,3),n=Array(12).fill().map((s,a)=>D0(e,a)),l=n.indexOf(8)+12*n.indexOf(9)+12**2*n.indexOf(10)+12**3*n.indexOf(11),[o,i]=[Dn,Ul].map(s=>{let a=s.map(f=>YR[e[f]]);return r[a.reduce((f,u,g)=>f|u<<2*g,0)]});return[l,o,i]}function Wp(){if(K.phase1_edge)return K.phase1_edge;let e=Op(An.map(n=>n.ep)),t=yn(e,e),r=yn(t,t);return K.phase1_edge=r}function $R(){return cr.phase1_edge?cr.phase1_edge:cr.phase1_edge=Ip(Wp(),[8+12*9+12**2*10+12**3*11])}function eh(){return K.phase1_centreA?K.phase1_centreA:K.phase1_centreA=Sl(12,6,0,3,3,An.map(e=>e.ap))}function Kp(){return K.phase1_centreB?K.phase1_centreB:K.phase1_centreB=Sl(12,6,0,3,3,An.map(e=>e.bp))}function wp(){if(cr.phase1_centre)return cr.phase1_centre;let[e,t]=bl(12,6,0,3,3),r=e.filter(n=>{let l=n>>12&3,o=n>>18&3;return l===2&&o===3}).map(n=>t[n]);return cr.phase1_centre=Ip(Kp(),r)}function*th(e){let t=[Wp(),eh(),Kp()],r=[$R(),wp(),wp()];yield*rh(XR(e),t,r,15)}function*rh(e,t,r,n){let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;)yield*Qp(e,t,r,o,-1),o++}function*Qp(e,t,r,n,l){let o=3,i=8,s=Math.max(r[0][e[0]],r[1][e[1]],r[2][e[2]]);if(!(s>n)){if(n===0){yield[];return}if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===l||a===l-4)continue;let f=[];f[0]=t[0][a][e[0]],f[1]=t[1][a][e[1]],f[2]=t[2][a][e[2]];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=Qp(f,t,r,n-1,a);for(;;){let{value:p,done:c}=g.next();if(c)break;yield[[a,u]].concat(p)}f[0]=t[0][a][f[0]],f[1]=t[1][a][f[1]],f[2]=t[2][a][f[2]],u++}}}}function Ja(e){let[t,r]=bl(10,5,3,2,0),n=Array(8).fill().map((p,c)=>D0(e,c)),l=n.indexOf(5)+8*n.indexOf(6)+8**2*n.indexOf(7),o=Array(5).fill().map((p,c)=>Za(e,c)),i=Ha(o.map(([p,c])=>p+5*c).concat(o.map(([p,c])=>p+5*(c^1)))),s=i.slice(0,5).map(p=>p%5),a=i.slice(0,5).map(p=>p/5|0),f=hn(s)*8+(a[0]^a[2])+2*(a[0]^a[3])+4*a[4],[u,g]=[Dn,Ul].map(p=>{let c=tt(p,lh).map(L=>nh[e[L]]);return r[c.reduce((L,m,d)=>L|m<<2*d,0)]});return Vp(),Jp(),[u,g,Zp[f]+40*qp[l]]}function*h0(e){yield*fh(Ja(e),30)}function jp(){if(K.phase2_centre)return K.phase2_centre;let e=Sl(10,5,3,2,0,An.slice(0,4).map(r=>Fn(r.ap,Ep))),t=Sl(10,5,3,2,0,An.slice(0,4).map(r=>Fn(r.bp,Ep)));return K.phase2_centre=[e,t]}function Vp(){if(K.phase2_edge)return K.phase2_edge;let e=Op(An.slice(0,4).map(n=>n.ep.slice(0,8))),t=yn(e,yn(e,e)),r;return[r,qp]=HR(t,501),K.phase2_edge=r}function Hp(){if(K.phase2_corner)return K.phase2_corner;let t=wo(5)/2*8,r=[!0,!0,!0,!0,!0,!1,!0,!0,!0,!0,!0,!1],n=Array(4).fill().map(()=>new Uint32Array(t)),l=An.slice(0,4).map(o=>Ha(Fn(o.cp,r)));for(let o=0;o<t;o++){let i=qa(o>>3,5),s=[0,0,o&1,o>>1&1,o>>2&1];s[1]=s[2]^s[3]^s[4];let a=Array(10);for(let f=0;f<5;f++)a[f]=i[f]+5*s[f],a[f+5]=i[f]+5*(s[f]^1);for(let f=0;f<4;f++){let u=tt(l[f],a),g=u.slice(0,5).map(L=>L%5),p=u.slice(0,5).map(L=>L/5|0),c=(p[0]^p[2])+2*(p[0]^p[3])+4*p[4];n[f][o]=hn(g)*8+c}}return K.phase2_corner=n}function Jp(){return K.phase2_corner_compact||([K.phase2_corner_compact,Zp]=ZR(Hp(),sh())),K.phase2_corner_compact}function Ya(){if(K.phase2_ce)return K.phase2_ce;let e=Jp(),t=Vp();return K.phase2_ce=yn(e,t)}function oh(){if(Ta)return Ta;let e=Ja(Eo)[2];return Ta=Tp(Ya(),e,e)}function ih(){let[e,t]=bl(10,5,3,2,0);return e.filter(r=>(r>>10&63)===41).map(r=>t[r])}function sh(){let e=Hp(),t=e[0].length,r=Array(t).fill(!1);r[0]=!0;let n=!1;for(;!n;){n=!0;for(let l=0;l<t;l++)r[l]&&(r[e[0][l]]||(n=!1,r[e[0][l]]=!0),r[e[1][l]]||(n=!1,r[e[1][l]]=!0))}return r.map((l,o)=>o).filter(l=>r[l])}function ah(){if(cr.phase2_ace)return cr.phase2_ace;let[e,t]=jp(),r=Ya(),n=2520,l=40*336,o=n*l,i=Ja(Eo)[2],s=9,a=new Int8Array(o).fill(s);for(let f of ih())a[f+n*i]=0;for(let f=0;f<s-1;f++)for(let u=a.indexOf(f);u!==-1;u=a.indexOf(f,u+1)){let g=u%n,p=u/n|0;for(let c=0;c<4;c++){let L=e[c][g],m=r[c][p],d=L+n*m;a[d]===s&&(a[d]=f+1),L=e[c][L],m=r[c][m],d=L+n*m,a[d]===s&&(a[d]=f+1)}}return cr.phase2_ace=a}function*fh(e,t){let[r,n]=jp(),l=Ya(),o=ah(),i=oh(),[s,a,f]=e,u=i[f],g=Math.max(o[s+2520*f],o[a+2520*u]);for(;g<=t;)yield*Yp(s,a,f,r,n,l,o,i,g,-1),g++}function*Yp(e,t,r,n,l,o,i,s,a,f){let u=Math.max(i[e+2520*r],i[t+2520*s[r]]);if(!(u>a)){if(a===0){yield[];return}else if(u===0)return;for(let g=0;g<4;g++){if(g===f)continue;let p=e,c=t,L=r;for(let m=1;m<=2;m++){p=n[g][p],c=l[g][c],L=o[g][L];let d=Yp(p,c,L,n,l,o,i,s,a-1,g);for(;;){let{value:F,done:A}=d.next();if(A)break;yield[[g,m]].concat(F)}}}}}function A0(e){let[t,r]=bl(7,3,2,0,2),n=Array(5).fill().map((f,u)=>D0(e,u)),l=hn(n),o=Array(4).fill().map((f,u)=>Za(e,u)),i=hn(o.map(f=>f[0]))*2+o.find(f=>f[0]===0)[1],[s,a]=[Dn,Ul].map(f=>{let u=tt(f,uh).map(g=>e[g]%4);return r[u.reduce((g,p,c)=>g|p<<2*c,0)]});return[s+210*a,i+24*l]}function ph(){if(K.phase3_2gen_edge)return K.phase3_2gen_edge;let e=wo(5)/2,t=Array(xl).fill().map(()=>new Uint32Array(e)),r=F0.map(n=>n.ep.slice(0,5));for(let n=0;n<e;n++){let l=qa(n,5);for(let o=0;o<xl;o++)t[o][n]=hn(tt(l,r[o]))}return K.phase3_2gen_edge=t}function ch(){if(K.phase3_2gen_corner)return K.phase3_2gen_corner;let t=wo(4)/2*2,r=[!0,!0,!0,!0,!1,!1,!0,!0,!0,!0,!1,!1],n=Array(xl).fill().map(()=>new Uint32Array(t)),l=F0.map(o=>Fn(o.cp,r).slice(0,4));for(let o=0;o<t;o+=2){let i=qa(o>>1,4),s=i.concat(i.map(a=>a+4));for(let a=0;a<xl;a++){let f=tt(s,l[a]),u=f.map(p=>p%4),g=f.find(p=>p%4===0)>>2;n[a][o]=hn(u)*2+g,n[a][o+1]=hn(u)*2+(g^1)}}return K.phase3_2gen_corner=n}function y0(){return K.phase3_2gen_corneredge?K.phase3_2gen_corneredge:K.phase3_2gen_corneredge=yn(ch(),ph())}function Xa(){if(K.phase3_2gen_centre)return K.phase3_2gen_centre;let e=Sl(7,3,2,0,2,F0.map(r=>Fn(r.ap,vp))),t=Sl(7,3,2,0,2,F0.map(r=>Fn(r.bp,vp)));return K.phase3_2gen_centreA=e,K.phase3_2gen_centreB=t,K.phase3_2gen_centre=yn(e,t)}function $p(){if(Ia)return Ia;let e=Xa(),t=K.phase3_2gen_centreA,r=y0(),n=t[0].length,l=r[0].length,o=n*l,i=25,s=mr.map(p=>p.length),a=new Int8Array(o).fill(i),f=A0(Eo);a[f[0]%n+n*f[1]]=0;let u=0,g=!1;for(;!g&&u<i-1;){g=!0;let p=Array(xl).fill().map((F,A)=>A).filter(F=>s[F]+u<i);p.sort((F,A)=>s[F]-s[A]);let c=tt(s,p),L=tt(t,p),m=tt(r,p),d=p.length;for(let F=a.indexOf(u);F!==-1;F=a.indexOf(u,F+1)){let A=F%n,U=F/n|0;for(let x=0;x<d;x++){let b=c[x],N=L[x][A],J=m[x][U],C=N+n*J;a[C]>u+b&&(g=!1,a[C]=u+b)}}u++}return Ia=a}function ec(){if(Wa)return Wa;let e=y0().slice(0,2),t=A0(Eo);return Wa=Tp(e,t[1],t[1])}function Qa(e,t=A0(e)){let[r,n]=t,l=r%210,o=Math.floor(r/210),i=Xa(),s=K.phase3_2gen_centreA,a=K.phase3_2gen_centreB,f=y0(),u=$p(),g=ec(),p=0;for(;;){let c=$a(l,o,n,s,a,f,u,g,p);for(let L of c)return L.map(m=>mr[m]).flat();p++}}function _p(e,t=A0(e)){let[r,n]=t,l=r%210,o=Math.floor(r/210),i=Xa(),s=K.phase3_2gen_centreA,a=K.phase3_2gen_centreB,f=y0(),u=$p(),g=ec(),p=Qa(e).length,c=1/0,L;for(let m=p;m<=p+0;m++){let d=$a(l,o,n,s,a,f,u,g,m);for(let F of d){let A=F.map(b=>mr[b]).flat(),U=R0(A),x=ja(U);x<c&&(c=x,L=U)}}return L}function mh(e){return(e-1)*(e-2)/2}function ja(e){let t=Mp(e,!0).replace(/'/g,"").split(" ");return e.length+Lh(t).map(mh).reduce((r,n)=>r+n,0)}function Lh(e){if(e.length<3)return[];let t=e.length,r=[];for(let o=0;o<t-2;o++)r[o]=e[o]===e[o+2];r.push(!1);let n=-1,l=[];for(;n<t-2&&(n=r.indexOf(!0,n+1),n!==-1);){let o=r.indexOf(!1,n+1);l.push(o-n),n=o}return l}function*$a(e,t,r,n,l,o,i,s,a,f=-1){let u=i[e+210*r],g=i[t+210*s[r]],p=Math.max(u,g);if(!(p>a)){if(a===0){yield[];return}if(p!==0)for(let c=0;c<xl;c++){if(c===f&&gh[c]<=3)continue;let L=n[c][e],m=l[c][t],d=o[c][r],F=a-mr[c].length;if(F<0)continue;let A=$a(L,m,d,n,l,o,i,s,F,c);for(;;){let{value:U,done:x}=A.next();if(x)break;yield[c].concat(U)}}}}function Bh(e,t=200,r=24){let n=[],l=h0(e),o=tt(e,Vt).map(a=>a^1),i=h0(o),s=Array(1e3);for(let a=0;a<t;a++){{let{value:f,done:u}=l.next();if(!u){let g=Ir(e,f),p=f.concat(Qa(g));if(p.length<=r)return p;p.length<s.length&&(s=p)}}{let{value:f,done:u}=i.next();if(!u){let g=Ir(o,f),p=f.concat(Qa(g)).map(([c,L])=>[c^2,L]);if(p.length<=r)return p;p.length<s.length&&(s=p)}}}return s}function dh(e,t=20,r=30){let n=[],l=h0(e),o=tt(e,Vt).map(f=>f^1),i=h0(o),s,a=1/0;for(let f=0;f<t;f++){{let{value:u,done:g}=l.next();if(!g){let p=Ir(e,u),c=R0(u.concat(_p(p))),L=ja(c);if(L<=r)return c;L<a&&(s=c,a=L)}}{let{value:u,done:g}=i.next();if(!g){let p=Ir(o,u),c=R0(u.concat(_p(p)));c=c.map(([m,d])=>[m^2,d]);let L=ja(c);if(L<=r)return c;L<a&&(s=c,a=L)}}}return s}async function hh(){return VR(await Rh)}var p9,c9,Ga,Oa,Eo,bo,CR,Vt,m9,B0,zp,PR,NR,MR,d0,GR,Cp,OR,TR,Ot,Or,Tr,Dn,Ul,Np,jR,An,K,cr,YR,nh,lh,Ep,qp,Zp,Ta,uh,vp,mr,xl,Xp,F0,gh,Ia,Wa,Rh,tc=y(()=>{"use strict";yt();[p9,c9]=(()=>{let e=new Int8Array(2048),t=new Int8Array(256*8);for(let l=0;l<256;l++)for(let o=0,i=0;o<8;o++)(l>>>o&1)!==0&&(e[o<<8|l]=i,t[i<<8|l]=o,i++);function r(l){let o=255,i=2520,s=0;for(let a=0;a<6;a++){let f=l[a];s+=e[o|f<<8]*i,o&=~(1<<f),i/=7-a}return s}function n(l,o){let i=255,s=2520,a=0;for(let f=0;f<6;f++){let u=l/s|0;l-=u*s,a^=u&1;let g=t[i|u<<8];o[f]=g,i&=~(1<<g),s/=7-f}return o[6]=t[i|a<<8],o[7]=t[i|(a^1)<<8],o}return[r,n]})();Ga={};Oa={};Eo=Array(72).fill().map((e,t)=>t/9|0),bo=Va([[0,4,8],[1,6,3],[2,5,7],[9,22,35],[45,67,44],[47,68,43],[46,69,39],[50,70,38],[49,71,36]],72),CR=tt(bo,bo),Vt=Array(72).fill().map((e,t)=>(t/18|0)*18+(t+9)%18),m9=Array(72).fill().map((e,t)=>(t/36|0)*36+(t+18)%36),B0=Array(72).fill().map((e,t)=>(t+36)%72),zp=wl(B0,CR,B0),PR=wl(Vt,bo,Vt),NR=wl(Vt,zp,Vt),MR=Va([[10,24,30],[11,23,34],[12,19,33],[42,48,64],[41,52,65],[37,51,66]],72),d0=tt(bo,MR),GR=tt(d0,d0),Cp=wl(B0,GR,B0),OR=wl(Vt,d0,Vt),TR=wl(Vt,Cp,Vt),Ot=Array(72).fill().map((e,t)=>t/9|0),Or=[[0,45,9,36],[4,67,22,49],[8,44,35,71],[13,58,31,40],[17,53,26,62],[18,63,27,54]],Tr=[[1,46],[3,39],[6,69],[10,37],[33,42],[12,48],[15,60],[24,51],[19,64],[28,55],[30,66],[21,57]],Dn=Array(12).fill().map((e,t)=>(t/3|0)*9+[2,5,7][t%3]),Ul=Dn.map(e=>e+36);Np=[bo,zp,PR,NR,d0,Cp,OR,TR],jR=["U","L","F","R","u","l","f","r"],An=Np.map(Pp);K={},cr={},YR=[0,0,2,3,0,0,2,3];nh=[0,1,2,0,0,1,2,0],lh=[0,1,2,3,4,5,7,8,10,11],Ep=[!0,!0,!0,!0,!0,!0,!1,!0,!0,!1,!0,!0];uh=[0,1,2,3,4,10,11],vp=[!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!0,!0],mr=[[[0,1]],[[1,1]],[[2,1],[0,1],[3,1],[0,2],[3,2],[2,2]],[[3,2],[1,2],[2,2],[1,1],[2,1],[3,1]],[[6,1],[0,1],[3,1],[0,2],[3,2],[6,2]],[[7,2],[1,2],[2,2],[1,1],[2,1],[7,1]],[[2,1],[0,1],[2,2],[0,1],[2,1],[0,1],[2,2]],[[3,2],[1,1],[3,1],[1,1],[3,2],[1,1],[3,1]],[[2,1],[3,1],[2,2],[1,2],[0,2],[2,1],[3,1],[2,2]],[[3,2],[2,2],[3,1],[0,1],[1,1],[3,2],[2,2],[3,1]],[[6,1],[0,1],[6,2],[0,2],[1,2],[6,1],[0,1],[6,2]],[[7,2],[1,2],[7,1],[1,1],[0,1],[7,2],[1,2],[7,1]],[[2,1],[3,2],[2,2],[3,1],[0,1],[2,2],[1,1],[2,1]],[[3,2],[2,1],[3,1],[2,2],[1,2],[3,1],[0,2],[3,2]],[[6,1],[0,2],[6,2],[7,1],[6,1],[1,2],[7,1],[6,1]],[[7,2],[1,1],[7,1],[6,2],[7,2],[0,1],[6,2],[7,2]],[[2,2],[1,2],[2,2],[3,2],[2,2],[3,2],[0,2],[3,2]],[[6,2],[7,2],[1,2],[0,2],[1,2],[0,2],[6,2],[7,2]]];mr=mr.concat(mr.map(e=>Gp(e)));xl=mr.length,Xp=mr.map(e=>Ir(Va([],72),e)),F0=Xp.map(Pp),gh=Xp.map(zR);Rh=ve()});var rc={};mt(rc,{randomFTOScrambleString:()=>hh});var nc=y(()=>{"use strict";tc()});async function oc(){return Fh??(Fh=Dh())}async function Dh(){return jt(await Pe.fto.kpuzzle(),\`SubgroupSizes 24 12 11 12 12 11 10 9 11 8 10 9 7 8 10 10 6 9 8 5 7 6 5 4 4 8 7 3 6 6 360

Alg T
Alg B
Alg B T
Alg B'
Alg B' T
Alg U
Alg U T
Alg U'
Alg U' T
Alg B BL
Alg B BL T
Alg B BL'
Alg B BL' T
Alg B' BR
Alg B' BR T
Alg B' BR'
Alg B' BR' T
Alg U R'
Alg U R' T
Alg U' L
Alg U' L T
Alg B BL' D
Alg B BL' D T

Alg R
Alg R'
Alg R D
Alg R D'
Alg R BR
Alg R BR'
Alg R' F
Alg R' L
Alg R' L'
Alg B L B'
Alg U L' U'

Alg B U B'
Alg B U' B'
Alg B R B'
Alg B R' B'
Alg B' U' B
Alg B' U B L
Alg B' U B L'
Alg B' U' B BL'
Alg B U' B' BR
Alg B' R' B F

Alg BR
Alg BR'
Alg BR BL
Alg BR BL'
Alg BR' F
Alg BR' F'
Alg BR' D
Alg B BR B'
Alg U F U'
Alg BR BL L
Alg BR' D BR'

Alg B' BL B
Alg B' BL' B
Alg BR D' BR'
Alg B' BL B D'
Alg B' BL B BL
Alg B' BL B BL'
Alg B' BL L B
Alg B' BL' B F'
Alg B' BL' B L'
Alg B' BL' B BL'
Alg B' BL' L BL' B

Alg R' BR R
Alg R' BR' R
Alg BR BL' D BR
Alg R' BR D R
Alg R' BR D' R
Alg R' BR R BL
Alg B' D' BL D B
Alg BR B D' B' BR'
Alg BR BL' D BR L'
Alg BR BL' D BL BR

Alg U BR U'
Alg U BR' U'
Alg U' R U
Alg U' R' U
Alg U BR B' U'
Alg U BR' U' D
Alg U BR' U' D'
Alg U' R F' U
Alg U' R' U L'

Alg U B U'
Alg U B' U'
Alg U B U' L
Alg U B U' L'
Alg U B' U' BL'
Alg U B U' L F
Alg U B U' L F'
Alg U B' U' BL' D'

Alg B BL' L BL B'
Alg B BL' L' BL B'
Alg U B' D B U'
Alg U B' D' B U'
Alg U R D R' U'
Alg U R D' R' U'
Alg R' F L F' R
Alg R' F L' F' R
Alg B L' B F' D B
Alg U B' D' B U' D

Alg F
Alg F'
Alg F D
Alg F D'
Alg F' L
Alg F' L'
Alg F D' BL

Alg F BL F'
Alg F BL' F'
Alg BR' BL BR
Alg BR' BL' BR
Alg F BR F' BR'
Alg F BL F' BL'
Alg F BL' F' L
Alg F BL' L' F'
Alg F BR' BL BR F'

Alg F' BL F
Alg F' BL' F
Alg U BL U'
Alg U BL' U'
Alg F U' F' U
Alg F' BL F D'
Alg F' BL F BL'
Alg F' BL D F

Alg L
Alg L'
Alg L BL
Alg L BL'
Alg F' D F
Alg L BL D

Alg L' BL L
Alg L' BL' L
Alg L' BL D L
Alg L' BL D' L
Alg L' BL L BL'
Alg L' BL D' L BL
Alg L' BL D' L BL'

Alg L D L'
Alg L D' L'
Alg R' D R
Alg R' D' R
Alg L D L' D'
Alg L R L' R'
Alg L' B' L B
Alg R' D R BL
Alg L BL' L' BL L'

Alg U L' D L U'
Alg U B D B' U'
Alg U L' D' L U'
Alg U B D' B' U'
Alg R' D' BL' D R
Alg U B D' B' U' D
Alg U B' L B L' U'
Alg U B D B' U' BL'
Alg U B D' B' L' D' L U'

Alg F L F'
Alg F L' F'
Alg F L F' D
Alg F L F' D'
Alg F L' F' BL'

Alg L BL' D BL L'
Alg L BL' D' BL L'
Alg F D L D' L' F'
Alg F L D L' D' F'
Alg F L' B' L B F'
Alg F' D' R' D R F
Alg F D L D' L' F' BL'
Alg F' R' B' R' B R' F

Alg B D B'
Alg B D' B'
Alg L' D L
Alg L' D' L
Alg B D B' D'
Alg B' L B L'
Alg B D B' D' BL

Alg D
Alg D'
Alg D BL
Alg D BL'

Alg D BL' D BL D'
Alg D BL' D' BL D'
Alg B D R D' R' B'
Alg B R D R' D' B'
Alg D BL' D BL D' BL
Alg D BL' D BL D' BL'

Alg D BL D BL' D'
Alg D BL D' BL' D'
Alg B' BL' B BR D' BR'
Alg D BL D BL' D' BL
Alg D BL D BL' D' BL'

Alg D' BL D
Alg D' BL' D
Alg D' BL D BL
Alg D' BL D BL'

Alg B D' B' BL B D B'
Alg B D' B' BL' B D B'
Alg D' BL' D BL D' BL D

Alg B R' B' BL B R B'
Alg B R' B' BL' B R B'
Alg L R L' BL' L R' L'

Alg F BL' B' BL F' BL' B
Alg F' R' F BL F' R F
Alg F' R' F BL' F' R F
Alg BR R BR' BL' BR R' BR'
Alg F L' BL U BL' U' L F'
Alg F' U' F D F' U F D'
Alg F BL F' D F BL' F' BL D'

Alg F D F U' F' U D' F'
Alg F D F' BL F BL' D' F'
Alg F U D BL' U' BL D' F'
Alg F U' D F U F' D' F'
Alg F' BR L F BR' F' L' F
Alg U R BL' F BL F' R' U'

Alg BL
Alg BL'

Alg F U BL U' BL' F'
Alg F BL U BL' U' F'
Alg U BL BR BL' BR' U'
Alg BR F BL F' BL' BR'
Alg F U' F' U BL' U BL U'

Alg F U' F' D F U F' D'
Alg B' U' F U B U' F' U
Alg D F U' F' D' F U F'
Alg BR' U BR D' BR' U' BR D
Alg D' BR BL' F BL' F' BL BR' BL D

Alg D BL D F' U' B L' BL' L R' BR' R L' BL L B' U F D
Alg B D BR F' R' BR' R B' F D' BL D B BR' D' B'
Alg L B' BR' L F BR L' B BR' L U F U' BR' F L BL BR'
Alg L BL' D' BR' B R' U' R BR B' D BL' L'
Alg B BR B' D' B D B F' R' B' R BR' B' BR F BR' BL
Alg L' BL D L' D' L' D L' U' R' F' R U D'
Alg U' L BL L U' D R' BL B' BL F' BL' B R BL' U D' L U
Alg L BL BR' L U' D R' F' R BL' U BL D' BR L
Alg D L' R F' R' L BL' BR BL' B' BL B BR' F BL' F' D'
Alg B BL B BR' L R' U' R BR L' B
Alg L B' R' BR B F BL D' BL' D BL' B' F' BR' R U B L'
Alg D' L' BL F' D' BL' D B F' R' BR R B' F' BL' L D
Alg B D' R D' R' BL BR' B BR' B' BL' D' BR B R' B' R B' BL' D'
Alg U' L R' F U L' BL' L B BL' B' BL L U' L' F' R L' U
Alg F' D BL' BR' BL' BR B' U' F L F' U B D F L U BL' U' L'
Alg L' U BR' U D R' BL F R BL' U D' BR' L' BL' BR' L'
Alg U' L' U' D R' BL B' BL F BL' B R BL' U D' L' BL' L' U
Alg D F BL L' BL' B L' B' L' B L' B' L' BL L BL' F' D'
Alg F' BR' B BL' BR BL B' F L' F' L B BR' B' BR L' F L BL'
Alg F' L F' L U' D R' F R U D' L' BL' F L' F
Alg F U' F' BR F' R' BR' U F' L' BL F' D' BL'
Alg B BR' U R BR' R' BR U' B' BR
Alg F' BR' B BR' R BR' BL' BR R' BR BL B' BR F
Alg L' U BL B' U' BL U BL' B BR BL' BR' U' L
Alg BR BL' BR' BL L' BL BR BL' BR' L
Alg U BR' U' BR L' BL BR BL' BR' L
Alg U' L F BL' F' BL F' BR F BR' L' U
Alg F L F' BL D F' D' F BL' L'
Alg U BR' U BR L BL BR BL' BR' L' U
Alg F BR R BL' F' BL' F R' BL BR' BL F'
Alg D BL D B U BR' D BR' L' U' BR' U BR L D' BR U' B' D
Alg U BL' U' BL U BL D L' D BR D' L D BR U BR U D
Alg B' U F U' B' U F' BR' U' B L B' U BR U' B L' B BL
Alg B U' B BL U' BL L U' D R' F' R U' D' L' BL' U B
Alg B L R F D' BR' D F' R' BL' U' L U L' U BL L' B'
Alg D BL D F' BR' F BL' D R' BR' R F D' BL F' BR D
Alg L' D F' R' U BR L BL B' BL B BL' BR' L' U' R D' L
Alg F BL' U D L' U' BR R F' R' BR' U L D BL U' D BL F'
Alg BR' BL' U' L' BL D F' L' F' L F L U L' D' BR L BL
Alg B' L' BL U D R' F' R U D' L' BL L U BL' L B
Alg B BL' L U B' L BL' L B' U' B' L' D L' U' B L' B' D'
Alg B' R' L U L' R BR BL' B BR' B' BL B' BL' B'
Alg F L R BL B' U' B R' BL' L' BL F' BL BR' BL L BL' BR L'
Alg B' U' BL L U D R' F R U D' L' BL' U BL' B' U B'
Alg U BR BL' BR' D' B D' F' D B' D' F BL' U' BL' F' BL' F D'
Alg D' BL' D L BL L' D' BL D F' D F D' BL' D' BL D
Alg B' BL' B' BL L' B' BL' F' D F L F' D' F BL' L BL' B L B
Alg F BL' U D' BL' D' L' U' BR R F R' BR' U L U' D' BL F'
Alg U' D' B D F' D' BR' D' BR D BR B' BL' D F BL U BL'
Alg B BL BR D' BR L' R F R' BR' L D BL' BR' BL' B'
Alg L' F L' U BR' U' BR L F' BR' L U BR U'
Alg F' BL' D' BR' BL B' U' BL U B BL' BR D F
Alg F' D' BR' U R' U BL U' R U' BL' BR D F
Alg F U' BR F' U' BL' B U F BR' R F' U BL L
Alg B' BL' U' BL U B BL' B BL BR BL' BR' B' BL
Alg D' F' U BL U' L F U' F' U L' BL' F D
Alg F' BL' D' BR' BL BR' F' BR U' B' BR' U R' BR' F'
Alg B' U' B BL' B U' B BL' L U' L BL' L B
Alg F' D' F U' F U F' BL F' BL' D F
Alg F' D BR F' R F R' BR' F D'
Alg D BL D B BR' D L' BL' L' BL' BR' BL L BL L D' BR B' D
Alg B L BL L' BL' L' D F' R' BR R D' F L' BL' L' B'
Alg B BL' F' BL BR D' BR' F D' B' D L F' BL' F L D L D' BL
Alg B D' BR' D' BR' F D' BL' D' BL D BL F' D BR D' B'
Alg B D' B U B' D B F' BR' F L' F BR F' L U' B BL
Alg L BL' B' U BL L' BL L U L' BL' L BL' U' B BL' L'
Alg U D F' D BR BL' BR' BL B D' F D B' D BR BL BR' U'
Alg F' D BR L' U' R F' R' U BR' L D BR' BL BR D F
Alg BR' L BL L' BL' BR BL' F BL' L R BL B' U B R' BL' L' F'
Alg D BL BR D B F' R' U' BR' U R B' F D' BR' D'
Alg D' B BR' D L' BL' L' BL' BR BL L BL L D' BR B' D' BL' D'
Alg B U' R B' BL' B R' U' B BL' B' U' BL B' U' L U L'
Alg B D' B' D' BR' BL BR D' B' L B BR' U B U' BL' BR BL L' BL'
Alg B D BR' D' F BL' D' BL' D BL D F' BR D BR D B'
Alg D' B D F' D' BR' D' BR D BR BL BR' BL' BR B' BL' D F
Alg L BL B' U BL L' BL L U' L' BL' L BL' U' B BL L'
Alg B' U B' D' B U' B' D BL' U BL' U' BL' B' U BL' U'
Alg D' BR' B' L' U L' B' U B L U' L B BR D BL
Alg L' D L' F U' F' L D' L' F U BR F' L F BR' F' L BL'
Alg D BR D B F' R' U' BR U R B' F D' BR' BL' D'
Alg BR BL D F BR' BL BR BL' BR F' BR' D' BL' BR'
Alg BR' U' L' BL F' BL' F L BL' U BL BR
Alg D' BR' B' U BR U' BL U' BL' U BR' B BR D
Alg F U BR' U R U' BR B U' F' BL U' L' U BL' B'
Alg B U' L F BR F' L F' BR' F L U B'
Alg BR BL F BL' L F' BR' BL' F BL L' BL' F' BL
Alg U' BR' L BL' BR L U' BR' U L' BL L' U' BR U'
Alg L' F L' U BR' U' BR L F' L BL' BR BL BR'
Alg F' D' BR' BL U R' U BL' U' R U' BR D F
Alg F' BR' B F' U F BR U' BR' B' F BL BR BL'
Alg L B' U' R' BR B F BL D' BL D BL' B' F' BR' R B L'
Alg B F BL B L F BR' R' BL U' R BL' BR' F' L' F' BR' B
Alg U BR F' D F BR' U' L' BL L' BL' L U L B' BL L' B U'
Alg F' L B F BL B R U' R' B' BL' B' F' L BL L F
Alg D BL D B BR' D BR' D' BR D BR BL BR' BL' D' B' D
Alg D' BR' BL B BR B' BL' D BL D' B' BL B BR' BL' BR D
Alg D F' U BR U' L U' BR' U L' D B D' F D B' D BL
Alg L B BL' B L F R U' R' F' L' B' BL B' L' BL'
Alg B D' B U B' D F' BR F L' F BR' F' L B U' B BL
Alg B' BL L B' L' B' L B' BR' R' U' R BR L'
Alg D' F' U' B L' BL' L R' BR R L' BL L B' U F D' BL' D'
Alg B' F' BL' B' F U D' R BR R' BL U' BL' D B'
Alg F' BL' D BL F BL' D' B' U' B D F' D' B' F U B
Alg F' L' BL' L' B F BL B R U R' B' BL' B' F' L' F
Alg L' BL U' D F D' BL' D BL F' BL' D' BL D F' U D' BL L
Alg B' BR L R' U R BR F L' B' BL' B L F' BR L' B
Alg B' L B' BR' B L' B' D F' U F D' F U' F' BR B' BL'
Alg B' BR D' BL' BR' BL B L' R' L' R BR L D L BL BR' B BL
Alg L' D F' L F L' F D' L' BL' L' D BL' BR' BL' BR BL' D'
Alg B' F BR F BR L R' BL U R BL' BR L' B' BL' B' F
Alg F L' F' BR' B BR' F' BR B' BR' F' L F' BR'
Alg BR' B' BR BL' D' BR D BR' BL B
Alg L' F L' U BR' U' L U' BR U F' L
Alg F U' BR' R U' BR BL BR' U' BL' U' R' F' BR U
Alg B' BR' R' U' BL D' BL U BL' D R BL' BR B
Alg D BR' U' L BL' F' BL F L' BL U BL' BR D'
Alg F' BL' D' F BR' BL BR BL' BR F' BR' D BL F
Alg F' BR' BL' BR D' F' BR F BR' D BL F
Alg F' BR R' BR BL' BR' R BR' BL F
Alg B BR F' BR' B' F BL F BL' F'
Alg B D' B U B' D BL' F R' F BL F' R B F' U' B BL
Alg L BL' B' U L U L BL L B' BL B' U' BL' U' B' L' BL
Alg L' BL' U' D F D' BL' D BL F BL' D' BL D F' U D' BL' L
Alg F' L F' BL' D' BR' B R' U' R BR B' D BL' F L' F
Alg U D' BR' D BR' U' L U BR L' D' BR D L U' L' BL
Alg B' BR' B' BL B L F' BR' R' U' R BR F BR L' B
Alg U' F' D BR' F' BR D L D L' U D' B D' B' F D' BL F
Alg B F BL B F' L F BR' R' BL U' R BL' BR' F' BR' L' B
Alg F' D' BL B BR' BL BR BL' BR' D' BR' D BR D F D' B' D
Alg B' BR' B' BL B L F BR' R' U' R BR F' BR L' B
Alg L' F BR L' R' BR BL' BR' R BR' BL B' L F' L' B L' BL'
Alg B' U' BL' U D' BL' D F L' R U R' F' L U' BL U B
Alg D' B D BL BR BL' BR' D' BR' D BR D' BR B' D' BL' D'
Alg B' BR' L F' BR' R' U R BR F L' B' BL' B BR B
Alg L U L' D' BR' D L U' L' U D' BR D BR BL BR' BL' U' BL'
Alg F' L F' BL D' B BR' R' U R B' BR D BL F L' F
Alg B' L B' BR' B L' F' R F' BL F R' F BL' B' BR B' BL'
Alg F' L BL' BR' R' BL U R BR B L' B L B L' F BL' B
Alg L' F D' BR U' BR' D BR' U BR L' B' L F' L' B L' BL'
Alg B' BR' L F BR' R' U R BR F' L' B' BL' B BR B
Alg L F' D' F BR' BL BR BL' BR F' BR' D F L'
Alg F' BL' D F BL' F' BL D' BR' BL BR F
Alg B' BR' R' BL D' BL U' BL' D BL' U R BR B
Alg B' L BL' BR BL L' B' F BL F' BL' B BR' B
Alg F U' BR' R BR F' U BL L U BL' B U'
Alg B' BR B' BL F BL' B F' L BL' BR' BL L' B
Alg U' L BL' U' R U' BL' U R' U BL' L' U
Alg F U' BR' R' F' BR' F BL BR R BL' F' BR U
Alg B U' L' F' BR F L' F BR' F' L' U B'
Alg F' BR' B' F BR' BL' BR F BL B F' BL BR BL'
Alg B BL' U' L U BL' B' BL' B' L' BL U B' U' BL L BL L
Alg B R' U' B U R B' BR F D' B' D BL F' BL' BR' BL
Alg U BL U' B BL U BL U' BL D' B U B' D B U' B
Alg B BL B BL' B BR B' BL BR' R' L U' L' R B
Alg U' L BL' B BL B' L' F U B' R U R' U F' U B BL
Alg F' BL' D' BR' L' B' L B BL BR BL' B' L' B L D BL F BL
Alg L B' L' F U B' R BR B BR' R' BR BL' BR' BL B U' F' BL
Alg D' F BL B BR' B BR B' BL' D BL D' B' F' D
Alg B' L' BL F U F' L' U B U' L F U' F' BL' L BL' B BL B
Alg D BL D B U F' R' BR' R F U' B' D
Alg B BR B' D' BL BR D BR D B' BL' B D BR' BL' D' BL' D'
Alg B' R BR B' BR' R' B U' F' L B L' BL' F BL U BL'
Alg U BR BL' BR' D' B D' F' D B' BL' BR BL BR' D' F U' D'
Alg U' D' BR' U' BR' D' L' D BR' D' L D' BL' U' BL' U BL U'
Alg L' F' BR F' R F' R' L F' BR' D L BL' L' BL D' F BL'
Alg B D BL' D B U R BR R' U' B' D' BL D' B' BL
Alg B' U L' U B BL L' F' BL F D' B' U B D B' L B L'
Alg L BL' B' U L F R U' R' F' U L F' L B L' F
Alg L' D R' U BR L BL B' BL' B BL' BR' L' U' R F D' L
Alg D' B U F' R' BR R F U' B' D' BL' D'
Alg B D BL' B' U' BL L' D L D' BL' U B BL B' D'
Alg B U' BL' U' F U' B U B' F' U BL U' B U' B
Alg U BR' U L BL' L U' BR U BR' L' BL BR L' U
Alg F' D' BR' BL B' U' BL' U B BL' BR D BL F
Alg B' L' B' F BL' F' BL F' BR F BR' B L B
Alg F' BL' D' BR F' BR' F D BR' BL BR F
Alg F D' F' U' F' D' BR D F' D' BR' D' F' U
Alg BR' BL' U' BL L U' F U F' L' U BR
Alg F BR R U' BR B U BR' F BR BL' BR D BL F
Alg F' BR' F U' BL L' U BL' B' F' BL' BR D' BL F
Alg B' U L' B' U L' D F L F' D' L U' B L U' L B L'
Alg B BL B L F BR' R' U' R BR F' L' B
Alg B D' B BR' R' U' B' U R BR U' D' F L' F' U L' D' L
Alg L U' L' U B BL' U B BL B' U R B' BL B R' U B'
Alg D F' D BL U' R U' BL' U R' U B D' F D B' D BL
Alg B BL U B BR' L R' F' U' F R BR L' B' U' B'
Alg B' U' B F' D F D' B' U B D BL F' BL' D' BL F
Alg B D BR B F' U' R' BR' R U B' F BR' D' BL B'
Alg L B' F R BL' U' R' BL B F' L U BR' U' BL L U BR U'
Alg F' L F' BL L U' D R' F' R U D' L' F L' F
Alg L U L' F' BL' F L B BL' U BL' U' BL B' BL L U' L
Alg B' L F BR' R' U R BR F' L' B' BL' B'
Alg U BR' U' L' U' BR' F' BR F BR D R' F R U D' L' BL' L'
Alg B L BL L F' D R' BR' R F D' L BL L BL' L' B'
Alg F' BL' D F' D' B D' B' U' D L D BR' L' F BR D' F U
Alg B U B BR' L R' F' U F R BR L' B' U' BL' B'
Alg U B' L BL' B L' U' L' BL L BL' L U BR F' D' F BR' U'
Alg B BL' D BR B F' U' R' BR R U B' F BR' D' B'
Alg B BR B F BR' U BL' L R BR' R' L' F' U BR U BL B BL'
Alg B' BR' L R' U R BR L' B' BL' B'
Alg B' U BR' R L F' BR' F L' R' BR U' B' BR B'
Alg F' BL' F' BR R U' BR B F BR BL' D F U BL'
Alg F' BR' B' U BR' F BR' F' BR U' BR B BR F
Alg BR' BL' U' BL L' F' BL F BL' L U BR
Alg U' L BL U' R U' BL U R' U BL L' U
Alg F BR' F' U' L F BR U F' U' L' BL U BL'
Alg L' F U' BR' U L' U BR U' L F' L
Alg F' BR' B' U' BR' U F BR B U' BL U BR BL'
Alg F' BR' U BR D' BR U' BR' D F
Alg F BL' BR R BL' F' BL F R' BL BR' F'
Alg L BL' B BL' U BL U' BL B' L' F' BL F L U' L U L
Alg B F BL B F' L F' BR' R' BL U' R BL' BR' F BR' L' B
Alg F BL B' F' BR B' BR' B L F BL B' BR B BL' BR' F' L' B
Alg B F D' BL U R BL' BR' R' U' D B F' BL B
Alg L B' U B' BR B BR U' BR' B L' F BL' B F' BR' B' BL'
Alg U' L R' F L U L' BL' B BL B' L' BL L U' F' R L' U
Alg BR BL F BL' F' L' F' BR' L B BR B' L' F L B BR' B' BL
Alg B' BR' L F L' B' BL B L F' BR' R' U' R BR' L' B
Alg D L U' BR U L U' R BL' F' R' F BL F' BR' U L D BL D
Alg B F BL B F BR' L R' BL U' R BL' BR' L' F BR' B
Alg L B' L' U L' B' U L' D F L' F' D' L U' B L U' B
Alg B' BR L F' BR R' BL U R BL' BR F L' B' F BL' B' F'
Alg B' BL L B L' B' BL' L' U BL' U R' L' R U' BL U' L B
Alg B U' D' F D B BL' B' U D' R BR R' U' F' U D B'
Alg D F L F' L' F R L' BL B L B' BL' L R' F' L D'
Alg L BL D' B BR' R' U R B' BR D BL L'
Alg D F D' B' U' B U' D F' D' F U B' U B F' BL'
Alg D' BR' BL BR B' BL' B D BL' D' BL B BR' B' BL' BR D
Alg U BR' U' L U R' L R BR L' B' L' B L U' L' BL'
Alg BR' L R' U R BR B L' B L B L' BL' B
Alg B BR' B U BR' R L F' BR F L' R' BR U' B
Alg F' L B' BR' B L BL' L' B' BR B L BL L F
Alg D F U' F' U D' BR U' D' F U F' D BR'
Alg B' BL' BR D' BR' D BL BR' B BR
Alg B BL U' BR' L U BR' F' BL D BL BR F BR
Alg L' U BR BL BR' B' BL U' BL' U B BL' U' L
Alg U B' BL U' L' BL' U' F BR' R' BR U F'
Alg D BR' BL U' BL' L F' BL' F BL L' U BR D'
Alg BR L' BL BR' BL' L BL' BR BL BR'
Alg F BL F' BL' B F' BR F BR' B'
Alg D BR L' U' R F' R' U BR L BL B' BL B BL' BR D'
Alg D' BL' D BL D F' D' F D' BL' D L BL' L' D' BL D
Alg B F D' F' U' BL' B U B' BL F D B U' B' U B' F' BL
Alg B U F' D' R BR' R' U' D B BL B' U F U' B'
Alg B BL B L B BR' F BR B' BR' R' U' R F' BR L' B
Alg B BL B L F' U' F' U F BR' R' U' R BR' F BR' L' B
Alg B' U' B F' D F D' B' U B U' D BL' F' BL D' F U BL
Alg L F' BR B' F' R BL' U' R' BL B F' BR L BL BR L
Alg D F' D' BL F' D' F R BL B' L U L' B R' F' BL' D F
Alg B BL BR BL D' BR L' R F' R' BR' L D BR' BL' B'
Alg B' L B' BR' B L' BL' U BL U' B' BR B' U BL' U'
Alg D' B BR' F BL' F' D BR D' BL F' BR B' F D' BL' D'
Alg B D F' L' R F D BR' D' F' R BR' L D B' BL' D' F D'
Alg D L BL' F' R U R' B F' L BL' L' B' F' BL L' D'
Alg B' BR' L F R' U R BR B BR' F' BR B' L' B' BL' B'
Alg D L F BL F L BL' L D' BL' D' F' D' F' L BL D' BL'
Alg D F BL F' BR B' BL' B BL BR' BL L' R F R' L D'
Alg L BL' B' L B L B' L F R U R' B F'
Alg F' D' BL F R B' L U' L' B R' BL' F' D F BL' D F D'
Alg B' L' BL U' D' L' BL' L U' D R' F R U' BL' L B
Alg L' F L' BL U' BL' U L F' L U' BL U BL'
Alg D' F' BL L U' F U F' L' U BL' U' F D
Alg B' U F D F' U F D' F U B U' F U
Alg U B' BR' U R' U' R BR U' B
Alg F' BL' D F BL F' BR F' BR' F BL' D' BL F
Alg F' BR' BL' BR D BL' F BL F' D' BL F
Alg U' F R F' BL' F R' F BL F U
Alg F' BR F BR' L BL' BR' BL BR L'
Alg F U' B F U' BR U BR' U F' U' B' U F'
Alg D F' BR R F' R' F BR' D' F
Alg B D' B U B' D B U' B BR BL BR' D BL BR BL BR' BL D'
Alg B' U' L' D' F D' L' F' L D F' D L U B BL'
Alg D L' F R L' BL B L' B' BL' L R' F' L F L' F' D'
Alg D L' D' BL D F' D F D' BL' L BL D'
Alg D' B R U' B' F' BL' L BL L' BL B F U R' BR' B' D
Alg D L BL' F L BL L' B' F R U' R' B F BL L' D'
Alg D F' BL F BL U BL F' D B D' F D B' D BR BL BR' U'
Alg B F' BL B F' BR' F' L F R' U' R BL' BR BL F' L' B
Alg L F BR B' D BL D' R U' R' D BL' D' B BR' F' L BL L
Alg B F BL B F' BR' L R' U' R BL' BR BL L' B
Alg D' B U BR' D BR' L' U' BR U BR L D' BR U' B' D' BL' D'
Alg F' D' BR' BL' BR D' BR L' U' R F R' U BR' L D' F
Alg D F U D' BL U' B D' F BR F' D' F' D BR' D B' BL
Alg B U' D' F D BL' D' BR D' BR' D BL B' BL' B F' U D B'
Alg L' BL' L' F BR B' D BL D' R U R' D BL' D' B BR' F' L'
Alg B U F' U' B BL' B' U D' R BR R' D F U' B'
Alg B L BL' U' L U' L' U R BL F D' BR D F' R' L' B'
Alg B' L B' BR' B L' F' BL F BL' B' BR B' F U' F' U BL'
Alg D' B BR R U' B' F' BL' L BL' L' BL B F U R' B' D
Alg B BL' U' B BL' B D B D' B D B D' BL B' U BL B'
Alg U BR' U' BR L' F BR' L' U BR U' L F' L
Alg L' U BR BL BR' B U BR' U' BR B' BL' U' L
Alg BR BL D BR' BL' L BL' BR BL L' BL D' BL' BR'
Alg F' BL' D' BR' D BL BR' B U BR U' B' BR F
Alg F U' F' D F' U' B' U F' U' B U' F' D'
Alg B' U BR' R' U R U' BR B U'
Alg L U BL U' BL' L' BL L' F' BL' F BL L BL'
Alg U B' BL' BR' U F' BR' D' F BR' U BL' L' BL'
Alg F BL' L' F' BL D' F' BR U' R' F' U F' BR'
Alg U B U' BL L U' L' U BL' B'
Alg U BL U' B BR' B U BL' U' BL L B' BR B L' B
Alg B BL B L F' U' F U F BR' R' U' R BR' F' BR' L' B
Alg B BR D L' D' F' D F D' F' D' F D' BR' L D' B D B
Alg F' L B' L' F L' U' F R U R' F' L' U' B BL L'
Alg B' L' F U F L' F R U' R' U L F R U R' U B F' BL
Alg B U F' D' F' U R BR' R' U' F D B BL B' F U' B'
Alg F BL U BL' U' F' BL L U' L D BR L' U L U' BR' U D' L
Alg B U' D' B' F BL B BL' D' BR D BR' D BL D' F' U D B'
Alg B BL' D' B' D B BL D BR' BL BR' R D R' BR BL' BR D' B'
Alg B F U' F' D' F' U' R BL' BR' R' BL U' F D B BL B
Alg D BR' BL B' BL' B BL' BR' L' U' R F R' U BR' L D'
Alg B' F' U' F' BL' D' B BR' R' U R B' BR D F U B F
Alg B' D' B' D BR L' D F' D F D F' D' F D L D' BR' B'
Alg D' B F D BL' D' BL B BR' B' BR B' BL' F' D
Alg B D B' F BL L' BL' F' L BL L' BL' BR L R L' R' BR' L' D'
Alg B U B F' BL' B' D' F' U R BR R' U' F D F U' B'
Alg BR BL' L' F' BR U F' U' BR L' B' BR' L F' BR L' B L'
Alg D BL' L' BL D F' D' F D' BL' D L D'
Alg F' BL' B F U' B U B' D' F' BL' B U' B' BL U F D B'
Alg B' F' L BL' BR' R' BL U R BR L' B' F BL' B'
Alg BR BL' BR' BL L' F L' BL' BR BL BR' L F' L
Alg B BL BR' F U' L F U BR' F BL D BR' BL
Alg B' BL' B' U BR' U' BR BL' BR BL BR' B BL B
Alg BR' U' L F U' F' U L' BL' U BL BR
Alg B U BR R' BR U' B' BR U' B' U BR' R' BR
Alg B BR BL L BL BR' BL' L U' BL' U BL L BL' B'
Alg F' BR' B BL' BR' R BR' BL BR R' BR B' BR F
Alg F' BR' B U BR' U' B' BR BL' D' BR D BL F
Alg D' F' BR U' R' F' U F' BR' F BL' L' F' BL
Alg B BL U' L U L' BL' U B' U'
Alg L' F' R B F' BR L' D' F' D BR' L B' F R' F BL L
Alg D F BL L' BL' B L B' L B L B' L BL L BL' F' D'
Alg B BL B BR' L R' U' R BR L' B U BR' U' BR BL' BR BL BR'
Alg B' F R U' R' F' L' B L' B' L' B BL L'
Alg B' L' F D R' F' L' U L F R' U D' L' B BL L F' L
Alg D' L' BL F R' BR' R B' F D' BL D B F BL' L D
Alg B' BR' R' U' BL' U' L R' F R F' L' R U' BL BR B BL
Alg BR L BL BR L U' D R' BL F' R BL' U' D' BR U' L
Alg BR L B' L F R F U F' U' R' L' B L F' BR' L BL
Alg B F U D' R BL' BR' R' BL U' D B F' BL B
Alg L' BL L' D B D' BL' B' D' L R' D R BL' U' L U BL'
Alg L' D BL' U' R' BL F R U D' BR L' BL' BR' L'
Alg U BR' U' L' BL' U BR U' L' B' F R BL' U R' BL B F' L'
Alg BR L' BL' L' B' F R BL' U R' BL B F BR F BR L'
Alg B' F' L F BR BL B' BR' B BL' F' L' B' BR B BR' B F BL'
Alg B D BR B' D' BL' D B F' R' BR R F BR' D' B'
Alg D BL' L' BL' L BL L' BL F' BL' L' F L BL F BL' L D'
Alg U' D R' F R U L D' L D L D' BL' L
Alg U D' BR D' L' D R F BR F' BR' R' BR' D' L U' D' BL'
Alg B' F' BR' L R' BL U R BL' BR L' B' F BL' B'
Alg L' F BL' F' BL F' BR F BR' L
Alg L BL F' D F D' BL' F L' F'
Alg F' D' BR U BR' D BR' U' BR F
Alg BR' L BL' BR BL BR L' F' BR' F
Alg B BR F BR' B' BR F' R' BR' BL' BR R BR' BL
Alg BR' B U BR' R BR R' U' BR B'
Alg F' BL' BR R' BR BL BR' R BR' F
Alg BR L' BL BR' BL' BR' L U BR U'
Alg U BR' U' BR BL' BR BL BR'
\`)}var Fh,ic=y(()=>{"use strict";lr();Jn();Fh=null});function _o(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function e2(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Ah(e){e=e.slice();let t=e.length,r=_o(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function yh(e,t){let r=[],n=_o(t-1);for(let l=0;l<t;l++)r[l]=e/n|0,e%=n,n/=t-1-l;for(let l=t-2;l>=0;l--)for(let o=l+1;o<t;o++)r[o]+=+(r[o]>=r[l]);return r}function sc(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function Uh(e,t){let r=[],n=_o(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function ac(e){return Ah(e)>>1}function fc(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let l=e2(t-1,r),o=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?l=l*--n/t:(o+=l,l=l*r--/t);return o}function Sh(e,t,r){let n=r-t,l=e2(r-1,t),o=[],i=r-1;for(let s=0;s<i;s++)r--,e<l?(o.push(0),l=l*--n/r):(o.push(1),e-=l,l=l*t--/r);return o.push(t),o}function U0(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function Wr(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Kr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function xh(e,t){let r=Array(8).fill(0);for(let n=0;n<8;n++)r[n]=(e[1][n]+t[1][n])%3;return[U0(e[0],t[0]),r]}function Nh(e){let t=["0","","'"];return e.map(([n,l])=>Ph[n]+t[l]).join(" ")}function Mh(e){let t=Uh(Math.floor(e(_o(12))/2),12),r=Array(8);for(let n=0;n<8;n++)r[n]=e(3);return[t,r]}function Gh(e){return Oh(Mh(e))}function Oh(e){let t=Th(e),r=[gc(),pc()],n=[Wh(),Kh()],l=[cc(),Qh()],o=[jh(),Ih()],i=Vh(t,r,n),s,a=new Set,f=+new Date;for(let u=0;u<25;u++){let{value:g,done:p}=i.next(),c=e;for(let[U,x]of g)for(let b=0;b<x;b++)c=xh(c,vo[U]);if(a.has(c.toString()))continue;a.add(c.toString());let L=ac(c[0].slice(0,8)),m=0;for(let U=0;U<4;U++)m+=c[1][U]*3**U;let d=[L,m],F=s?s.length-g.length-1:999999,A=qh(d,l,o,F);if(A!==void 0&&((s===void 0||s.length>g.length+A.length)&&(s=g.concat(A)),new Date-f>300))break}return s}function Th(e){let t=0;for(let o=0;o<4;o++)t+=e[0].indexOf(o+8)*12**o;let r=0;for(let o=0;o<4;o++)r+=e[1][o+4]*3**o;let n=e[0].map(o=>Math.max(-1,o-8)),l=fc(n.map(o=>+(o>=0)))*2+sc(n.filter(o=>o>=0));return[t,r+81*l]}function uc(){if(me.phase1cm)return me.phase1cm;let e=[];for(let t=0;t<81;t++){e[t]=Array(8);let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t][0]=e[t][1]=e[t][2]=e[t][3]=t;for(let n=0;n<4;n++)r[n]=(r[n]+2)%3,e[t][4+n]=r[0]+r[1]*3+r[2]*9+r[3]*27,r[n]=(r[n]+1)%3}return me.phase1cm=e}function Ih(){if(me.phase1cp)return me.phase1cp;let e=Array(81);for(let t=0;t<81;t++){let r=[t%3,Math.floor(t/3)%3,Math.floor(t/9)%3,Math.floor(t/27)];e[t]=(r[0]!==0)+(r[1]!==0)+(r[2]!==0)+(r[3]!==0)}return me.phase1cp=e}function gc(){if(me.phase1em)return me.phase1em;let e=[];for(let r=0;r<12;r++){e[r]=[];for(let n=0;n<8;n++)e[r][n]=vo[n][0].indexOf(r)}let t=Array(12**4);for(let r=0;r<12**4;r++){t[r]=Array(8);for(let n=0;n<8;n++){let l=0;for(let o=0;o<4;o++)l+=e[Math.floor(r/12**o)%12][n]*12**o;t[r][n]=l}}return me.phase1em=t}function Wh(){return me.phase1ep?me.phase1ep:me.phase1ep=t2(gc(),[8+12*(9+12*(10+12*11))])}function pc(){if(me.phase1sm)return me.phase1sm;let e=e2(12,4),t=[];for(let l=0;l<e;l++){t[l]=[];let o=Sh(l,4,12),i=[];for(let s=0,a=0;s<12;s++)o[s]===0?i[s]=-1:i[s]=a++;for(let s=0;s<8;s++){let a=U0(i,vo[s][0]),f=U0(o,vo[s][0]),u=sc(a.filter(g=>g>=0));t[l][s]=fc(f)*2+u}}let r=uc(),n=[];for(let l=0;l<e;l++)for(let o=0;o<81;o++){let i=n[o+81*(2*l)]=[],s=n[o+81*(2*l+1)]=[];for(let a=0;a<8;a++)i[a]=r[o][a]+81*t[l][a],s[a]=r[o][a]+81*(t[l][a]^1)}return me.phase1sm=n}function Kh(){return me.phase1sp?me.phase1sp:me.phase1sp=t2(pc(),[0])}function Qh(){if(me.phase2cm)return me.phase2cm;let e=uc(),t=Array(81);for(let r=0;r<81;r++)t[r]=e[r].slice(4,8);return me.phase2cm=t}function cc(){if(me.phase2em)return me.phase2em;let e=8,t=_o(e)/2,r=Array(t),n=[0,1,2,3,4,5,6,7];for(let l=0;l<t;l++){r[l]=Array(4);for(let i=0;i<4;i++){let s=U0(n,vo[i][0].slice(0,8));r[l][i]=ac(s)}if(l===t-1)break;let o=0;do for(let i=e-2;i>=0;i--){if(n[i]>n[i+1])continue;let s=i+1;for(let a=s;a<e;a++)n[a]>n[i]&&(s=a);[n[i],n[s]]=[n[s],n[i]],o^=1;for(let a=0;i+1+a<e-1-a;a++,o^=1)[n[i+1+a],n[e-1-a]]=[n[e-1-a],n[i+1+a]];break}while(o!==0)}return me.phase2em=r}function jh(){return me.phase2ep?me.phase2ep:me.phase2ep=t2(cc(),[0])}function t2(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1),o=t.slice(),i=[],s=0;for(;o.length>0;){i.length=0;for(let a of o)if(l[a]===-1){l[a]=s;for(let f=0;f<n;f++){let u=e[a][f];for(;u!=a;)i.push(u),u=e[u][f]}}[o,i]=[i,o],s+=1}return l}function qh(e,t,r,n){n=n||999999;let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;){let i=mc(e,t,r,o,-1);if(i!==void 0)return i;o++}}function mc(e,t,r,n,l){let o=e.length,i=t[0][0].length,s=0;for(let a=0;a<o;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0)return[];if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===l||a<l&&S0[a]==S0[l])continue;let f=e.slice();for(let g=0;g<o;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=mc(f,t,r,n-1,a);if(g!==void 0)return[[a,u]].concat(g);for(let p=0;p<o;p++)f[p]=t[p][f[p]][a];u++}}}}function*Vh(e,t,r){let n=e.length,l=0;for(let o=0;o<n;o++)l=Math.max(l,r[o][e[o]]);for(;;)yield*Lc(e,t,r,l,-1),l++}function*Lc(e,t,r,n,l){let o=e.length,i=t[0][0].length,s=0;for(let a=0;a<o;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0){yield[];return}if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===l||a<l&&S0[a]==S0[l])continue;let f=e.slice();for(let g=0;g<o;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=Lc(f,t,r,n-1,a);for(;;){let{value:p,done:c}=g.next();if(c)break;yield[[a,u]].concat(p)}for(let p=0;p<o;p++)f[p]=t[p][f[p]][a];u++}}}}async function Bc(){return new v(Nh(Gh(await Hh)))}var bh,wh,Eh,vh,_h,kh,zh,Ch,S9,vo,Ph,S0,me,Hh,dc=y(()=>{"use strict";Be();yt();bh=[Wr([0,1,4],12),Kr({0:2},8)],wh=[Wr([1,2,5],12),Kr({1:2},8)],Eh=[Wr([2,3,6],12),Kr({2:2},8)],vh=[Wr([3,0,7],12),Kr({3:2},8)],_h=[Wr([9,8,4],12),Kr({4:2},8)],kh=[Wr([10,9,5],12),Kr({5:2},8)],zh=[Wr([11,10,6],12),Kr({6:2},8)],Ch=[Wr([8,11,7],12),Kr({7:2},8)],S9=[yh(0,12),Array(8).fill(0)],vo=[bh,wh,Eh,vh,_h,kh,zh,Ch],Ph=["UL","U","UR","F","L","B","R","D"],S0=[0,1,0,1,1,0,1,0];me={};Hh=ve()});var r2={};mt(r2,{getRandomRediCubeScramble:()=>Bc,sgsDataFTO:()=>oc});var n2=y(()=>{"use strict";ic();dc()});function hc(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function b0(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let r=1;for(let n=0;n<t;n++)r=r*(e-n)/(n+1)|0;return r}function Zh(e){e=e.slice();let t=e.length,r=hc(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function Jh(e){let t=e.length,r=0;for(let n=0;n<t-1;n++)for(let l=n;l<t;l++)e[n]>e[l]&&(r^=1);return r}function Yh(e){return Zh(e)>>1}function i2(e){let t=e.length,r=0;for(let i=0;i<t;i++)r+=+(e[i]===1);let n=t-r;if(n===0||r===0||t===1)return 0;let l=b0(t-1,r),o=0;for(let i=0;n>0&&r>0&&t>1;i++)t--,e[i]===0?l=l*--n/t:(o+=l,l=l*r--/t);return o}function e3(e,t,r){let n=r-t,l=b0(r-1,t),o=[],i=r-1;for(let s=0;s<i;s++)r--,e<l?(o.push(0),l=l*--n/r):(o.push(1),e-=l,l=l*t--/r);return o.push(t),o}function Ht(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function s2(e,t){let r=Ht(e[0],t[0]),n=[],l=t[0].length;for(let o=0;o<l;o++)n[o]=(e[1][t[0][o]]+t[1][o])%3;return[r,n]}function El(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function Qr(e,t){let r=Array(t).fill(0);for(let n in e)r[n]=e[n];return r}function i3(e){let t=[0];for(let n=1;n<20;n++){let l=e(n+1);t[n]=t[l],t[l]=n}Jh(t)===1&&([t[0],t[1]]=[t[1],t[0]]);let r=Array(20).fill(0);for(let n=0;n<19;n++)r[n]=e(3),r[19]+=3-r[n];return r[19]%=3,[t,r]}function s3(e){let t=["0","","2","2'","'"];return e.map(([n,l])=>l3[n]+t[l]).join(" ")}function a3(e,t){for(let[r,n]of t)for(let l=0;l<n;l++)e=s2(e,Un[r]);return e}function f3(e){return R3(i3(e))}function g3(e){let t=e[0];if(t.slice(15,20).every(o=>o<15))return[];if(t.slice(0,5).every(o=>o<15))return[[6,1]];let r=t.map(o=>o>=15),n=0,l;for(;l===void 0;)n++,l=yc(r,n,-1);return l.push([6,1]),l}function yc(e,t,r){if(t==0)return e.slice(0,5).some(n=>n)?void 0:[];for(let n=0;n<6;n++)if(n!==r)for(let l=1;l<5;l++){let o=Ht(e,x0[n][l][0]),i=yc(o,t-1,n);if(i!==void 0)return[[n,l]].concat(i)}}function p3(e){let t=e[0].slice(0,15),r=e[1],n=i2(t.map(i=>+(i>=15))),l=243*n;for(let i=0,s=0;i<15;i++)t[i]<15||(l+=r[i]*Math.pow(3,s),s++);let o=0;for(let i=0;i<5;i++)o+=t.indexOf(15+i)*Math.pow(15,i);return[l,o]}function c3(e){let t=[w0(),E0()],r=[h3(),D3()];return Uc(p3(e),t,r).concat([[6,1]])}function m3(e){let t=[5,6,7,8,14],r=e[0].slice(0,15),n=e[1],l=i2(r.map(s=>+(t.indexOf(s)!==-1))),o=243*l;for(let s=0,a=0;s<15;s++)t.indexOf(r[s])!==-1&&(o+=n[s]*Math.pow(3,a),a++);let i=0;for(let s=0;s<5;s++)i+=r.indexOf(t[s])*Math.pow(15,s);return[o,i]}function L3(e){let t=[w0(),E0()],r=[F3(),A3()];return Uc(m3(e),t,r)}function B3(e){let t=e[0].slice(0,14),r=e[1],n=0,l=[],o=0;for(let i of[0,1,2,3,4,9,10,11,12,13])i!==13&&(n+=r[i]*Math.pow(3,o)),l[o]=t[i]<5?t[i]:t[i]-4,o++;return[n,Yh(l)]}function d3(e){return b3(B3(e))}function R3(e){let t=[];for(let r of[g3,c3,L3,d3]){let n=r(e);e=a3(e,n),t=t.concat(n)}return t}function w0(){if(le.phase23om)return le.phase23om;let e=b0(15,5),t=[1,3,9,27,81,243],r=Array(b0(15,5)*t[5]);le.phase23om=r;for(let n=0;n<e;n++){let l=e3(n,5,15).concat(Array(5).fill(0)),o=[];for(let i=0;i<6;i++){let s=Ht(l,Un[i][0]).slice(0,15);o[i]=i2(s)}for(let i=0;i<t[5];i++){r[i+243*n]=[];let s=[];for(let a=0,f=0;a<20;a++)l[a]===1?(s[a]=(i/t[f]|0)%3,f++):s[a]=99;for(let a=0;a<6;a++){let f=Un[a],u=[];for(let c=0;c<15;c++)u[c]=s[f[0][c]]+f[1][c];let g=u.filter(c=>c<10),p=0;for(let c=0;c<5;c++)p+=g[c]%3*t[c];r[i+243*n][a]=p+243*o[a]}}}return r}function h3(){if(le.phase2op)return le.phase2op;let e=w0();return le.phase2op=vl(e,[243*3002])}function F3(){if(le.phase3op)return le.phase3op;let e=w0();return le.phase3op=vl(e,[243*246])}function E0(){if(le.phase23pm)return le.phase23pm;let e=[1,15,225,Math.pow(15,3),Math.pow(15,4),Math.pow(15,5)],t=Array(e[5]),r=Array(15);for(let l=0;l<15;l++){r[l]=Array(6);for(let o=0;o<6;o++)r[l][o]=Un[o][0].indexOf(l)}let n=[0,0,0,0,0];for(let l=0;l<e[5];l++){t[l]=Array(6);for(let o=0;o<6;o++){let i=0;for(let s=0;s<5;s++)i+=r[n[s]][o]*e[s];t[l][o]=i}n[0]++;for(let o=0;o<4;o++)n[o]===15&&(n[o]=0,n[o+1]++)}return le.phase23pm=t}function D3(){if(le.phase2pp)return le.phase2pp;let e=E0();return le.phase2pp=vl(e,[213090])}function A3(){if(le.phase3pp)return le.phase3pp;let e=E0();return le.phase3pp=vl(e,[737420])}function a2(){if(le.phase4om)return le.phase4om;let e=[1,3,9,27,81,243,729,2187,6561,19683,59049],t=Array(e[9]);for(let r=0;r<e[9];r++){let n=Array(14).fill(0);for(let l=0;l<9;l++){let o=l<5?l:l+4;n[o]=(r/e[l]|0)%3,n[13]-=n[o]}n[13]=(n[13]+999)%3,t[r]=[];for(let l=0;l<3;l++){let o=Un[l],i=[0,1,2,3,4,9,10,11,12,13].map(a=>n[o[0][a]]+o[1][a]),s=0;for(let a=0;a<9;a++)s+=i[a]%3*e[a];t[r][l]=s}}return le.phase4om=t}function f2(){if(le.phase4pm)return le.phase4pm;let e=hc(10)/2,t=10,r=[0,1,2,3,4,-1,-1,-1,-1,5,6,7,8,9],n=[0,1,2,3,4,9,10,11,12,13],l=[Ht(r,Ht(Fc[0],n)),Ht(r,Ht(Dc[0],n)),Ht(r,Ht(Ac[0],n))],o=Array(e),i=Array(10);for(let s=0;s<e;s++){$h(s,i),o[s]=[];for(let a=0;a<3;a++){let f=Ht(i,l[a]);o[s][a]=Xh(f)}}return le.phase4pm=o}function y3(){if(le.phase4op)return le.phase4op;let e=a2();return le.phase4op=vl(e,[0])}function U3(){if(le.phase4pp)return le.phase4pp;let e=f2();return le.phase4pp=vl(e,[0])}function S3(e){if(le.phase4np_list&&le.phase4np_list.threshold===e)return le.phase4np_list;let t=[a2(),f2()],r=Math.pow(3,9),n=[0];l(e,[0,0],-1);function l(s,a,f){if(n.push(a[0]+r*a[1]),s===0)return;let u=[];for(let g=0;g<3;g++)if(g!==f){u[0]=a[0],u[1]=a[1];for(let p=1;p<5;p++)u[0]=t[0][u[0]][g],u[1]=t[1][u[1]][g],l(s-1,u,g)}}n.sort((s,a)=>s-a);let o=[],i=-1;for(let s of n)s!==i&&o.push(i=s);return o.threshold=e,le.phase4np_list=o}function x3(e,t){let r=0,n=e.length-1;for(;n-r>1;){let l=r+n>>1;t>e[l]?r=l+1:n=l}return t===e[r]||t===e[n]}function vl(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1);for(let s of t)l[s]=0;let o=0,i=!1;for(;!i;){i=!0;for(let s=0;s<r;s++)if(l[s]===o)for(let a=0;a<n;a++){let f=e[s][a];for(;f!==s;)l[f]===-1&&(i=!1,l[f]=o+1),f=e[f][a]}o++}return l}function Uc(e,t,r){let n=e.length,l=0;for(let o=0;o<n;o++)l=Math.max(l,r[o][e[o]]);for(;;){let o=Sc(e,t,r,l,-1);if(o!==void 0)return o;l++}}function Sc(e,t,r,n,l){let o=e.length,i=t[0][0].length,s=0;for(let a=0;a<o;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0||s===0)return[];for(let a=0;a<i;a++){if(a===l)continue;let f=e.slice();for(let g=0;g<o;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=Sc(f,t,r,n-1,a);if(g!==void 0)return[[a,u]].concat(g);for(let p=0;p<o;p++)f[p]=t[p][f[p]][a];u++}}}}function b3(e){let t=a2(),r=f2(),n=y3(),l=U3(),o=S3(l2),i=Math.max(n[e[0]],l[e[1]]);for(;;){let s=xc(e,i,-1,t,r,n,l,o);if(s!==void 0)return s;i++}}function xc(e,t,r,n,l,o,i,s){let a=Math.max(o[e[0]],i[e[1]]);if(!(a>t)&&(a<=l2&&!x3(s,e[0]+19683*e[1])&&(a=l2+1),!(a>t))){if(t===0||a===0)return[];for(let f=0;f<3;f++){if(f===r)continue;let u=e.slice();for(let g=1;g<5;g++){u[0]=n[u[0]][f],u[1]=l[u[1]][f];let p=xc(u,t-1,f,n,l,o,i,s);if(p!==void 0)return[[f,g]].concat(p)}}}}async function bc(){return new v(s3(f3(await w3)))}var l2,Xh,$h,Fc,Dc,Ac,t3,r3,n3,o2,O9,Un,l3,o3,x0,u3,le,w3,wc=y(()=>{"use strict";Be();yt();l2=7;[Xh,$h]=(()=>{let e=new Int8Array(10240),t=new Int8Array(1024*10);for(let l=0;l<1024;l++)for(let o=0,i=0;o<10;o++)(l>>>o&1)!==0&&(e[o<<10|l]=i,t[i<<10|l]=o,i++);function r(l){let o=1023,i=181440,s=0;for(let a=0;a<8;a++){let f=l[a];s+=e[o|f<<10]*i,o&=~(1<<f),i/=9-a}return s}function n(l,o){let i=1023,s=181440,a=0;for(let f=0;f<8;f++){let u=l/s|0;l-=u*s,a^=u&1;let g=t[i|u<<10];o[f]=g,i&=~(1<<g),s/=9-f}return o[8]=t[i|a<<10],o[9]=t[i|(a^1)<<10],o}return[r,n]})();Fc=[El([0,1,2,3,4],20),Qr({},20)],Dc=[El([4,3,11,12,13],20),Qr({4:2,3:1,11:1,12:1,13:1},20)],Ac=[El([3,2,9,10,11],20),Qr({3:2,2:1,9:1,10:1,11:1},20)],t3=[El([2,1,7,8,9],20),Qr({2:2,1:1,7:1,8:1,9:1},20)],r3=[El([1,0,5,6,7],20),Qr({1:2,0:1,5:1,6:1,7:1},20)],n3=[El([0,4,13,14,5],20),Qr({0:2,4:1,13:1,14:1,5:1},20)],o2=[[15,16,17,18,19,10,9,8,7,6,5,14,13,12,11,0,1,2,3,4],Qr({},20)],O9=[[1,2,3,4,0,7,8,9,10,11,12,13,14,5,6,19,15,16,17,18],Qr({},20)],Un=[Fc,Dc,Ac,t3,r3,n3,o2],l3=["U","R","F","L","BL","BR","x2"],o3=s2(o2,o2),x0=[];for(let e=0;e<Un.length;e++){x0[e]=[o3];for(let t=1;t<5;t++)x0[e][t]=s2(x0[e][t-1],Un[e])}{let e=Math.sin(Math.PI/5),t=Math.cos(Math.PI/10),r=Math.cos(Math.PI/5),n=Math.sin(Math.PI/10);u3={U:[0,0],L:[-e-t,r-n],F:[0,2*r],R:[e+t,r-n],BR:[t,-1-n],BL:[-t,-1-n],DBR:[2*e+2*t,0],DB:[3*e+3*t,-r-n],DBL:[4*e+4*t,0],DFL:[3*e+4*t,1+r],DFR:[3*e+2*t,1+r],D:[3*e+3*t,r-n]}}le={};w3=ve();bc().then(e=>e.log())});var Ec={};mt(Ec,{getRandomKilominxScramble:()=>bc});var vc=y(()=>{"use strict";wc()});function ko(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function xn(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;return t}function E3(e){e=e.slice();let t=e.length,r=ko(t-1),n=0;for(;t>1;){t--;let l=e[0];n+=l*r;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}r/=t}return n}function v0(e,t){let r=[],n=ko(t-1)/2,l=0;for(let o=0;o<t-1;o++)r[o]=e/n|0,e%=n,n/=t-1-o;r[t-1]=0;for(let o=t-2;o>=0;o--)for(let i=o+1;i<t;i++)r[i]>=r[o]?r[i]++:l^=1;return l===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function Cc(e){return E3(e)>>1}function Sn(e,t){let r=[];for(let n=0;n<t.length;n++)r[n]=e[t[n]];return r}function g2(e){let t=[];for(let r=0;r<e.length;r++)t[e[r]]=r;return t}function zo(e,t){let r=[];for(let n=0;n<t;n++)r[n]=n;for(let n=0;n<e.length;n++)r[e[n]]=e[(n+1)%e.length];return r}function jr(e,t){return e.length===0?xn(t):e.map(r=>zo(r,t)).reduce(Sn)}function v3(e,t){let r=Array(4);for(let i=0;i<4;i++)r[i]=(e.co[i]+t.co[i])%3;let n=Sn(e.mp,t.mp),l=Sn(e.wp,t.wp),o=Sn(e.cp,t.cp);return{co:r,mp:n,wp:l,cp:o}}function Pc(e,t){return e>=4&&t>=4?!0:e<4&&t<4?e===t:(e^t)===4}function T3(e){let t=["0","","'"];return e.map(([n,l])=>O3[n]+t[l]).join(" ")}function I3(e){let t=Array(4);for(let o=0;o<4;o++)t[o]=e(3);let r=v0(e(ko(6)/2),6);for(let o=0,i=0;o<6;o++){let s=o===5?i:e(2);i^=s,r[o]+=s*6,r[o+6]=(r[o]+6)%12}let n=v0(e(ko(12)/2),12),l=v0(e(ko(4)/2),4);return{co:t,mp:r,wp:n,cp:l}}function W3(e){return Q3(I3(e))}function K3(e,t=!0,r=!1){let n=T3(W3(e));if(!t)return n;let l=["u","l","r","b"],o=["0","","'"];if(!r){for(let p=0;p<4;p++){let c=e(3);c!==0&&(n+=" "+l[p]+o[c])}return n.trim()}let i=[],s=[],a=[];for(let p=0;p<4;p++)i[p]=e(3),s[p]=e(3),a[p]=(i[p]-s[p]+3)%3;let f=p=>p.filter(c=>c!==0).length;for(;!(f(s)>=1&&f(a)>=1&&f(s)+f(a)>=4);)for(let p=0;p<4;p++)s[p]=e(3),a[p]=(i[p]-s[p]+3)%3;let u=s.map((p,c)=>p!==0?l[c]+o[p]+" ":"").join(""),g=a.map((p,c)=>p!==0?" "+l[c]+o[p]:"").join("");return u+n+g}function Q3(e){let t=q3(e),r=[Tc(),Ic()],n=[X3(),$3()],l=Z3(t),o,i=new Set,s=performance.now();for(let a=0;a<22;a++){let{value:f,done:u}=l.next(),g=e;for(let[d,F]of f)for(let A=0;A<F;A++)g=v3(g,_l[d]);let p=JSON.stringify(g);if(i.has(p))continue;i.add(p);let c=J3(g),L=o?o.length-f.length-1:999999,m=eF(c,r,n,L).next().value;if(m!==void 0&&((o===void 0||o.length>f.length+m.length)&&(o=f.concat(m)),performance.now()-s>300))break}return o}function j3(e){return e[3^e.indexOf(3)]}function q3(e){let t=Sn(g2(e.mp),e.wp),r=(e.co.reduce((n,l)=>n+l)-j3(e.cp)+3)%3;return[0,1,2,3,4,5].map(n=>n+6*t.indexOf(n)+72*t.indexOf(n+6)+864*r)}function*Z3(e){let t=0,r=Oc(),n=Y3();for(;;)yield*Mc(...e,r,n,t,-1),t++}function*Mc(e,t,r,n,l,o,i,s,a,f){let u=bn,g=Lr[e]+Lr[t]+Lr[r]+Lr[n]+Lr[l]+Lr[o],p=Math.max(s[e%864+t*864],s[r%864+t*864],s[l%864+t*864],s[e%864+n*864],s[r%864+n*864],s[l%864+n*864],s[e%864+o*864],s[r%864+o*864],s[l%864+o*864],s[e%864+r*864],s[e%864+l*864],s[r%864+l*864],s[t%864+n*864],s[t%864+o*864],s[n%864+o*864],c2[g]);if(!(p>a)){if(a===0){yield[];return}if(!(p===0&&a===1))for(let c=0;c<u;c++){if(c===f||c<f&&Pc(c,f))continue;let L=e,m=t,d=r,F=n,A=l,U=o;for(let x=1;x<=2;x++){L=i[L][c],m=i[m][c],d=i[d][c],F=i[F][c],A=i[A][c],U=i[U][c];let b=Mc(L,m,d,F,A,U,i,s,a-1,c);for(;;){let{value:N,done:J}=b.next();if(J)break;yield[[c,x]].concat(N)}}}}}function J3(e){let t=e.mp,r=Cc(t.slice(0,6).map(i=>i%6)),n=t.slice(0,5).map((i,s)=>(i>=6)*2**s).reduce((i,s)=>i+s),l=e.co.map((i,s)=>i*3**s).reduce((i,s)=>i+s),o=e.cp.indexOf(0);return[r+360*o,n+32*l]}function Gc(){if(_e.phase1pm)return _e.phase1pm;let e=Array(6*12*12).fill().map(()=>Array(bn).fill(-1));for(let t=0;t<6;t++)for(let r=0;r<12;r++)for(let n=0;n<12;n++){if(r===n)continue;let l=t+6*r+72*n;for(let o=0;o<bn;o++){let i=Nc[o][t],s=p2[o][r],a=p2[o][n];i<6?e[l][o]=i+6*s+72*a:e[l][o]=i-6+6*a+72*s}}return _e.phase1pm=e}function Oc(){if(_e.phase1pcm)return _e.phase1pcm;let e=Gc(),t=Array(e.length*3).fill().map(()=>Array(bn).fill(-1));for(let r=0;r<e.length;r++)for(let n=0;n<bn;n++){let l=e[r][n];t[r][n]=l+6*12*12*u2[n],t[r+6*12*12][n]=l+6*12*12*((u2[n]+1)%3),t[r+2*6*12*12][n]=l+6*12*12*((u2[n]+2)%3)}return _e.phase1pcm=t}function Y3(){if(_e.phase1p2cp)return _e.phase1p2cp;let e=Gc(),t=Oc(),r=new Int8Array((6*12*12)**2*3);r.fill(-1);let n=[0,1,2,3,4,5].map(o=>o+6*o+72*(o+6));for(let o=0;o<6;o++)for(let i=0;i<6;i++)o!==i&&(r[n[o]+864*n[i]]=0);let l=0;for(;;){let o=!1;for(let i=0;i<r.length;i++){if(r[i]!==l)continue;let s=i%864,a=Math.floor(i/864);for(let f=0;f<bn;f++){let u=s,g=a;for(let p=1;p<=2;p++){u=e[u][f],g=t[g][f];let c=u+864*g;r[c]===-1&&(o=!0,r[c]=l+1)}}}if(!o)break;l++}return _e.phase1p2cp=r}function Tc(){if(_e.phase2pm)return _e.phase2pm;let e=Array(1440).fill().map(()=>Array(_0));for(let t=0;t<360;t++){let r=v0(t,6);for(let n=0;n<6;n++)r[n+6]=r[n]+6;for(let n=0;n<_0;n++){let l=Sn(r,_l[n].mp),o=Cc(l.slice(0,6).map(i=>i%6));for(let i=0;i<4;i++){let s=_l[n].cp[i];e[t+360*s][n]=o+360*i}}}return _e.phase2pm=e}function Ic(){if(_e.phase2om)return _e.phase2om;let e=Array(32*81).fill().map(()=>Array(_0));for(let t=0;t<32;t++){let r=[0,1,2,3,4].map(l=>t>>l&1);r[5]=r.reduce((l,o)=>l^o);let n=[];for(let l=0;l<6;l++)n[l]=l+6*r[l],n[l+6]=l+6*(r[l]^1);for(let l=0;l<81;l++){let o=[0,1,2,3].map(i=>Math.floor(l/3**i)%3);for(let i=0;i<_0;i++){let a=Sn(n,_l[i].mp).slice(0,5).map(p=>+(p>=6)),f=0;for(let p=0;p<5;p++)f+=a[p]<<p;let u=o.map((p,c)=>(p+_l[i].co[c])%3),g=0;for(let p=0;p<4;p++)g+=u[p]*3**p;e[t+32*l][i]=f+32*g}}}return _e.phase2om=e}function X3(){return _e.phase2pp?_e.phase2pp:_e.phase2pp=Wc(Tc(),[0])}function $3(){return _e.phase2op?_e.phase2op:_e.phase2op=Wc(Ic(),[0])}function Wc(e,t){let r=e.length,n=e[0].length,l=Array(r).fill(-1),o=t.slice(),i=[],s=0;for(;o.length>0;){i.length=0;for(let a of o)if(l[a]===-1){l[a]=s;for(let f=0;f<n;f++){let u=e[a][f];for(;u!=a;)i.push(u),u=e[u][f]}}[o,i]=[i,o],s+=1}return l}function*eF(e,t,r,n){let l=e.length,o=0;for(let i=0;i<l;i++)o=Math.max(o,r[i][e[i]]);for(;o<=n;)yield*Kc(e,t,r,o,-1),o++}function*Kc(e,t,r,n,l){let o=e.length,i=t[0][0].length,s=0;for(let a=0;a<o;a++)s=Math.max(s,r[a][e[a]]);if(!(s>n)){if(n===0){yield[];return}if(!(s===0&&n===1))for(let a=0;a<i;a++){if(a===l||a<l&&Pc(a,l))continue;let f=e.slice();for(let g=0;g<o;g++)f[g]=t[g][e[g]][a];let u=1;for(;e.some((g,p)=>e[p]!=f[p]);){let g=Kc(f,t,r,n-1,a);for(;;){let{value:p,done:c}=g.next();if(c)break;yield[[a,u]].concat(p)}for(let p=0;p<o;p++)f[p]=t[p][f[p]][a];u++}}}}async function rF(){return K3(await tF,!1)}var H9,Z9,J9,_3,k3,z3,C3,P3,N3,M3,G3,_l,O3,bn,_0,V3,Nc,H3,p2,u2,zc,c2,Lr,_e,tF,Qc=y(()=>{"use strict";yt();[H9,Z9]=(()=>{let e=new Int8Array(49152),t=new Int8Array(4096*12);for(let l=0;l<4096;l++)for(let o=0,i=0;o<12;o++)(l>>>o&1)!==0&&(e[o<<12|l]=i,t[i<<12|l]=o,i++);function r(l){let o=4095,i=19958400,s=0;for(let a=0;a<10;a++){let f=l[a];s+=e[o|f<<12]*i,o&=~(1<<f),i/=11-a}return s}function n(l,o){let i=4095,s=19958400,a=0;for(let f=0;f<10;f++){let u=l/s|0;l-=u*s,a^=u&1;let g=t[i|u<<12];o[f]=g,i&=~(1<<g),s/=11-f}return o[10]=t[i|a<<12],o[11]=t[i|(a^1)<<12],o}return[r,n]})();J9={co:[0,0,0,0],mp:xn(12),wp:xn(12),cp:[0,1,2,3]},_3={co:[2,0,0,0],mp:xn(12),wp:zo([1,9,11],12),cp:[0,1,2,3]},k3={co:[0,2,0,0],mp:xn(12),wp:zo([0,7,2],12),cp:[0,1,2,3]},z3={co:[0,0,2,0],mp:xn(12),wp:zo([3,6,10],12),cp:[0,1,2,3]},C3={co:[0,0,0,2],mp:xn(12),wp:zo([4,8,5],12),cp:[0,1,2,3]},P3={co:[2,0,0,0],mp:jr([[1,9,11],[7,3,5]],12),wp:jr([[1,9,11],[7,3,5]],12),cp:[0,2,3,1]},N3={co:[0,2,0,0],mp:jr([[0,7,2],[6,1,8]],12),wp:jr([[0,7,2],[6,1,8]],12),cp:[3,1,0,2]},M3={co:[0,0,2,0],mp:jr([[3,6,10],[9,0,4]],12),wp:jr([[3,6,10],[9,0,4]],12),cp:[1,3,2,0]},G3={co:[0,0,0,2],mp:jr([[4,8,5],[10,2,11]],12),wp:jr([[4,8,5],[10,2,11]],12),cp:[2,0,1,3]},_l=[P3,N3,M3,G3,_3,k3,z3,C3],O3=["u","l","r","b","U","L","R","B"],bn=8,_0=4;V3=[],Nc=[],H3=[],p2=[];for(let e=0;e<bn;e++){let t=_l[e];V3[e]=t.mp,Nc[e]=g2(t.mp),H3[e]=t.wp,p2[e]=g2(t.wp)}u2=[0,0,0,0,2,2,2,2],zc=[[14,-1,-1,11,11,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,4,3,-1,-1,0],[13,-1,-1,11,10,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,3,1,-1,-1,6]],c2=new Int8Array(55);for(let e=0;e<25;e++)c2[e]=zc[0][e],c2[e+30]=zc[1][e];Lr=new Int8Array(6*12*12*3);for(let e=0;e<6;e++)for(let t=0;t<12;t++)for(let r=0;r<12;r++){let n=e+6*t+72*r,l=2;t===e?l++:t===(e+6)%12&&l--,r===(e+6)%12?l++:r===e&&l--,Lr[n]=l,Lr[n+6*12*12]=Lr[n+2*6*12*12]=l+5}_e={};tF=ve()});var jc={};mt(jc,{randomMasterTetraminxScrambleString:()=>rF});var qc=y(()=>{"use strict";Qc()});function pF(e,t){e.ul=t.ul,e.ur=t.ur,e.dl=t.dl,e.dr=t.dr,e.ml=t.ml}function nm(e,t){var r;t<<=2,t>24?(t=48-t,r=e.ul,e.ul=(~~e.ul>>t|e.ur<<24-t)&16777215,e.ur=(~~e.ur>>t|r<<24-t)&16777215):t>0?(r=e.ul,e.ul=(e.ul<<t|~~e.ur>>24-t)&16777215,e.ur=(e.ur<<t|~~r>>24-t)&16777215):t==0?(r=e.ur,e.ur=e.dl,e.dl=r,e.ml=1-e.ml):t>=-24?(t=-t,r=e.dl,e.dl=(e.dl<<t|~~e.dr>>24-t)&16777215,e.dr=(e.dr<<t|~~r>>24-t)&16777215):t<-24&&(t=48+t,r=e.dl,e.dl=(~~e.dl>>t|e.dr<<24-t)&16777215,e.dr=(~~e.dr>>t|r<<24-t)&16777215)}function cF(e){var t,r,n,l,o;for(n=0,e.arr[0]=Zt(e,0),l=1;l<24;++l)Zt(e,l)!=e.arr[n]&&(e.arr[++n]=Zt(e,l));for(o=0,t=0;t<16;++t)for(r=t+1;r<16;++r)e.arr[t]>e.arr[r]&&(o^=1);return o}function mF(e){var t,r,n,l;return l=e.ur&1118481,l|=~~l>>3,l|=~~l>>6,l=l&15|~~l>>12&48,n=e.ul&1118481,n|=~~n>>3,n|=~~n>>6,n=n&15|~~n>>12&48,r=e.dr&1118481,r|=~~r>>3,r|=~~r>>6,r=r&15|~~r>>12&48,t=e.dl&1118481,t|=~~t>>3,t|=~~t>>6,t=t&15|~~t>>12&48,Co(cF(e)<<24|n<<18|l<<12|t<<6|r)}function LF(e,t){var r,n;for(r=0;r<8;++r)e.prm[r]=~~(~~Zt(e,r*3+1)>>1<<24)>>24;for(t.cornperm=Go(e.prm),t.topEdgeFirst=Zt(e,0)==Zt(e,1),r=t.topEdgeFirst?2:0,n=0;n<4;r+=3,++n)e.prm[n]=~~(~~Zt(e,r)>>1<<24)>>24;for(t.botEdgeFirst=Zt(e,12)==Zt(e,13),r=t.botEdgeFirst?14:12;n<8;r+=3,++n)e.prm[n]=~~(~~Zt(e,r)>>1<<24)>>24;t.edgeperm=Go(e.prm),t.ml=e.ml}function Zt(e,t){var r;return t<6?r=~~e.ul>>(5-t<<2):t<12?r=~~e.ur>>(11-t<<2):t<18?r=~~e.dl>>(17-t<<2):r=~~e.dr>>(23-t<<2),~~((r&15)<<24)>>24}function B2(e,t,r){t<6?(e.ul&=~(15<<(5-t<<2)),e.ul|=r<<(5-t<<2)):t<12?(e.ur&=~(15<<(11-t<<2)),e.ur|=r<<(11-t<<2)):t<18?(e.dl&=~(15<<(17-t<<2)),e.dl|=r<<(17-t<<2)):(e.dr&=~(15<<(23-t<<2)),e.dr|=r<<(23-t<<2))}function D2(){this.arr=[],this.prm=[]}async function BF(){let e=await ve();var t,r,n,l,o,i,s,a,f;for(t=new D2,n=kl[e(3678)],o=19088743<<1|286331153,l=19088743<<1,s=i=8,r=0;r<24;r++)(n>>r&1)==0?(a=e(i)<<2,B2(t,23-r,l>>a&15),f=(1<<a)-1,l=(l&f)+(l>>4&~f),--i):(a=e(s)<<2,B2(t,23-r,o>>a&15),B2(t,22-r,o>>a&15),f=(1<<a)-1,o=(o&f)+(o>>4&~f),--s,++r);return t.ml=e(2),t}function dF(){}function RF(e){var t,r,n,l,o,i;for(pF(e.Search_d,e.Search_c),n=0;n<e.Search_length1;++n)nm(e.Search_d,e.Search_move[n]);for(LF(e.Search_d,e.Search_sq),r=e.Search_sq.edgeperm,t=e.Search_sq.cornperm,o=e.Search_sq.ml,i=Math.max(xe[e.Search_sq.edgeperm<<1|o],xe[e.Search_sq.cornperm<<1|o]),n=i;n<e.Search_maxlen2;++n)if(z0(e,r,t,e.Search_sq.topEdgeFirst,e.Search_sq.botEdgeFirst,o,n,e.Search_length1,0)){for(l=0;l<n;++l)nm(e.Search_d,e.Search_move[e.Search_length1+l]);return e.Search_sol_string=hF(e,n+e.Search_length1),!0}return!1}function hF(e,t){for(var r="",n=0,l=0,o=t-1;o>=0;o--){var i=e.Search_move[o];i>0?(i=12-i,n=i>6?i-12:i):i<0?(i=12+i,l=i>6?i-12:i):(n==0&&l==0?r+=" / ":r+="("+n+", "+l+") / ",n=l=0)}return(n!==0||l!==0)&&(r+="("+n+", "+l+")"),r}function k0(e,t,r,n,l,o){var i,s,a;if(r==0&&n<4)return n==0&&RF(e);if(o!=0&&(a=C0[t],s=je[a],s<n&&(e.Search_move[l]=0,k0(e,a,s,n-1,l+1,0))))return!0;if(a=t,o<=0){for(i=0;i+=Mo[a],a=~~i>>4,i&=15,!(i>=12||(s=je[a],s>n));)if(s<n&&(e.Search_move[l]=i,k0(e,a,s,n-1,l+1,1)))return!0}if(a=t,o<=1){for(i=0;i+=No[a],a=~~i>>4,i&=15,!(i>=6||(s=je[a],s>n));)if(s<n&&(e.Search_move[l]=-i,k0(e,a,s,n-1,l+1,2)))return!0}return!1}function z0(e,t,r,n,l,o,i,s,a){var f,u,g,p,c,L,m;if(i==0&&!n&&l||a!=0&&n==l&&(g=Oo[t],u=Oo[r],xe[g<<1|1-o]<i&&xe[u<<1|1-o]<i&&(e.Search_move[s]=0,z0(e,g,u,n,l,1-o,i-1,s+1,0))))return!0;if(a<=0)for(m=!n,g=m?vn[t]:t,u=m?r:vn[r],p=m?1:2,c=xe[g<<1|o],L=xe[u<<1|o];p<12&&c<=i&&c<=i;){if(c<i&&L<i&&(e.Search_move[s]=p,z0(e,g,u,m,l,o,i-1,s+1,1)))return!0;m=!m,m?(g=vn[g],c=xe[g<<1|o],p+=1):(u=vn[u],L=xe[u<<1|o],p+=2)}if(a<=1)for(f=!l,g=f?En[t]:t,u=f?r:En[r],p=f?1:2,c=xe[g<<1|o],L=xe[u<<1|o];p<(i>3?6:12)&&c<=i&&c<=i;){if(c<i&&L<i&&(e.Search_move[s]=-p,z0(e,g,u,n,f,o,i-1,s+1,2)))return!0;f=!f,f?(g=En[g],c=xe[g<<1|o],p+=1):(u=En[u],L=xe[u<<1|o],p+=2)}return!1}function FF(e,t){var r;for(e.Search_c=t,r=mF(t),e.Search_length1=je[r];e.Search_length1<100&&(e.Search_maxlen2=Math.min(31-e.Search_length1,17),!k0(e,r,je[r],e.Search_length1,0,-1));++e.Search_length1);return e.Search_sol_string}function im(){this.Search_move=[],this.Search_d=new D2,this.Search_sq=new am}function DF(){}function AF(){lm||(lm=!0,Po=[0,3,6,12,15,24,27,30,48,51,54,60,63],kl=[],je=[],Mo=[],No=[],C0=[],SF())}function yF(e){var t,r;t=0,r=0;do(e.bottom&2048)==0?(t+=1,e.bottom=e.bottom<<1):(t+=2,e.bottom=e.bottom<<2^12291),r=1-r;while((_n(e.bottom&63)&1)!=0);return(_n(e.bottom)&2)==0&&(e.Shape_parity^=r),t}function d2(e){var t;return t=um(kl,e.top<<12|e.bottom)<<1|e.Shape_parity,t}function R2(e,t){e.Shape_parity=t&1,e.top=kl[~~t>>1],e.bottom=e.top&4095,e.top>>=12}function UF(e){var t,r;t=0,r=0;do(e.top&2048)==0?(t+=1,e.top=e.top<<1):(t+=2,e.top=e.top<<2^12291),r=1-r;while((_n(e.top&63)&1)!=0);return(_n(e.top)&2)==0&&(e.Shape_parity^=r),t}function sm(){}function Co(e){var t;return t=um(kl,e&16777215)<<1|~~e>>24,t}function SF(){var e,t,r,n,l,o,i,s,a,f,u,g,p,c,L,m;for(e=0,i=0;i<28561;++i)o=Po[i%13],r=Po[~~(i/13)%13],g=Po[~~(~~(i/13)/13)%13],u=Po[~~(~~(~~(i/13)/13)/13)],p=u<<18|g<<12|r<<6|o,_n(p)==16&&(kl[e++]=p);for(f=new sm,i=0;i<7356;++i)R2(f,i),Mo[i]=UF(f),Mo[i]|=d2(f)<<4,R2(f,i),No[i]=yF(f),No[i]|=d2(f)<<4,R2(f,i),m=f.top&63,c=_n(m),L=_n(f.bottom&4032),f.Shape_parity^=1&~~(c&L)>>1,f.top=f.top&4032|~~f.bottom>>6&63,f.bottom=f.bottom&63|m<<6,C0[i]=d2(f);for(i=0;i<7536;++i)je[i]=-1;for(je[Co(14378715)]=0,je[Co(31157686)]=0,je[Co(23967451)]=0,je[Co(7191990)]=0,n=4,l=0,t=-1;n!=l;)for(l=n,++t,i=0;i<7536;++i)if(je[i]==t){a=0,s=i;do s=Mo[s],a+=s&15,s>>=4,je[s]==-1&&(++n,je[s]=t+1);while(a!=12);a=0,s=i;do s=No[s],a+=s&15,s>>=4,je[s]==-1&&(++n,je[s]=t+1);while(a!=12);s=C0[i],je[s]==-1&&(++n,je[s]=t+1)}}function xF(){}function bF(){if(!om){om=!0,xe=[],Oo=[],vn=[],En=[],fm=[1,1,2,6,24,120,720,5040],wn=[];for(var e=0;e<12;++e)wn[e]=[];wF()}}function am(){}function Go(e){var t,r,n,l;for(r=0,l=1985229328,t=0;t<7;++t)n=e[t]<<2,r=(8-t)*r+(~~l>>n&7),l-=286331152<<n;return r&65535}function wF(){var e,t,r,n,l,o,i,s,a,f,u,g,p;for(l=0;l<12;++l)for(wn[l][0]=1,wn[l][l]=1,a=1;a<l;++a)wn[l][a]=wn[l-1][a-1]+wn[l-1][a];for(g=[],l=0;l<40320;++l)h2(g,l),p=g[2],g[2]=g[4],g[4]=p,p=g[3],g[3]=g[5],g[5]=p,Oo[l]=Go(g),h2(g,l),p=g[0],g[0]=g[1],g[1]=g[2],g[2]=g[3],g[3]=p,vn[l]=Go(g),h2(g,l),p=g[4],g[4]=g[5],g[5]=g[6],g[6]=g[7],g[7]=p,En[l]=Go(g);for(l=0;l<80640;++l)xe[l]=-1;for(xe[0]=0,t=0,r=1;r<80640;){s=t>=11,n=s?-1:t,e=s?t:-1,++t;e:for(l=0;l<80640;++l)if(xe[l]==n){if(o=~~l>>1,u=l&1,i=Oo[o]<<1|1-u,xe[i]==e&&(++r,xe[s?l:i]=~~(t<<24)>>24,s))continue e;for(i=o,f=0;f<4;++f)if(i=vn[i],xe[i<<1|u]==e&&(++r,xe[s?l:i<<1|u]=~~(t<<24)>>24,s))continue e;for(f=0;f<4;++f)if(i=En[i],xe[i<<1|u]==e&&(++r,xe[s?l:i<<1|u]=~~(t<<24)>>24,s))continue e}}}function h2(e,t){var r,n,l,o,i;for(i=1985229328,r=0;r<7;++r)l=fm[7-r],o=~~(t/l),t-=o*l,o<<=2,e[r]=~~((~~i>>o&7)<<24)>>24,n=(1<<o)-1,i=(i&n)+(~~i>>4&~n);e[7]=~~(i<<24)>>24}function EF(){}function _n(e){return e-=~~e>>1&1431655765,e=(~~e>>2&858993459)+(e&858993459),e=(~~e>>4)+e&252645135,e+=~~e>>8,e+=~~e>>16,e&63}function um(e,t){var r,n,l,o;for(n=0,r=e.length-1;n<=r;)if(l=n+(~~(r-n)>>1),o=e[l],o<t)n=l+1;else if(o>t)r=l-1;else return l;return-n-1}async function CF(){return(await zF()).scramble_string}var ke,lm,No,kl,je,Mo,C0,Po,om,En,wn,xe,vn,Oo,fm,F2,vF,_F,kF,zF,gm=y(()=>{"use strict";yt();ke=D2.prototype=dF.prototype;ke.dl=10062778;ke.dr=14536702;ke.ml=0;ke.ul=70195;ke.ur=4544119;ke=im.prototype=DF.prototype;ke.Search_c=null;ke.Search_length1=0;ke.Search_maxlen2=0;ke.Search_sol_string=null;lm=!1;ke=sm.prototype=xF.prototype;ke.bottom=0;ke.Shape_parity=0;ke.top=0;om=!1;ke=am.prototype=EF.prototype;ke.botEdgeFirst=!1;ke.cornperm=0;ke.edgeperm=0;ke.ml=0;ke.topEdgeFirst=!1;F2=!1,vF=function(e,t,r){F2||(AF(),bF()),r&&r("Done initializing Square-1."),F2=!0,e?.()},_F=async function(){return F2||vF(),BF()},kF=function(e){var t=new im;return FF(t,e)},zF=async function(){var e=await _F(),t=kF(e);return{state:e,scramble_string:t}}});var pm={};mt(pm,{getRandomSquare1ScrambleString:()=>CF});var cm=y(()=>{"use strict";gm()});var b2=Symbol("Comlink.proxy"),ym=Symbol("Comlink.endpoint"),Um=Symbol("Comlink.releaseProxy"),M0=Symbol("Comlink.thrown"),w2=e=>typeof e=="object"&&e!==null||typeof e=="function",Sm={canHandle:e=>w2(e)&&e[b2],serialize(e){let{port1:t,port2:r}=new MessageChannel;return zl(e,t),[r,[r]]},deserialize(e){return e.start(),wm(e)}},xm={canHandle:e=>w2(e)&&M0 in e,serialize({value:e}){let t;return e instanceof Error?t={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:t={isError:!1,value:e},[t,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},E2=new Map([["proxy",Sm],["throw",xm]]);function zl(e,t=self){t.addEventListener("message",function r(n){if(!n||!n.data)return;let{id:l,type:o,path:i}=Object.assign({path:[]},n.data),s=(n.data.argumentList||[]).map(qr),a;try{let f=i.slice(0,-1).reduce((g,p)=>g[p],e),u=i.reduce((g,p)=>g[p],e);switch(o){case"GET":a=u;break;case"SET":f[i.slice(-1)[0]]=qr(n.data.value),a=!0;break;case"APPLY":a=u.apply(f,s);break;case"CONSTRUCT":{let g=new u(...s);a=_m(g)}break;case"ENDPOINT":{let{port1:g,port2:p}=new MessageChannel;zl(e,p),a=vm(g,[g])}break;case"RELEASE":a=void 0;break;default:return}}catch(f){a={value:f,[M0]:0}}Promise.resolve(a).catch(f=>({value:f,[M0]:0})).then(f=>{let[u,g]=O0(f);t.postMessage(Object.assign(Object.assign({},u),{id:l}),g),o==="RELEASE"&&(t.removeEventListener("message",r),v2(t))})}),t.start&&t.start()}function bm(e){return e.constructor.name==="MessagePort"}function v2(e){bm(e)&&e.close()}function wm(e,t){return G0(e,[],t)}function Io(e){if(e)throw new Error("Proxy has been released and is not useable")}function G0(e,t=[],r=function(){}){let n=!1,l=new Proxy(r,{get(o,i){if(Io(n),i===Um)return()=>kn(e,{type:"RELEASE",path:t.map(s=>s.toString())}).then(()=>{v2(e),n=!0});if(i==="then"){if(t.length===0)return{then:()=>l};let s=kn(e,{type:"GET",path:t.map(a=>a.toString())}).then(qr);return s.then.bind(s)}return G0(e,[...t,i])},set(o,i,s){Io(n);let[a,f]=O0(s);return kn(e,{type:"SET",path:[...t,i].map(u=>u.toString()),value:a},f).then(qr)},apply(o,i,s){Io(n);let a=t[t.length-1];if(a===ym)return kn(e,{type:"ENDPOINT"}).then(qr);if(a==="bind")return G0(e,t.slice(0,-1));let[f,u]=x2(s);return kn(e,{type:"APPLY",path:t.map(g=>g.toString()),argumentList:f},u).then(qr)},construct(o,i){Io(n);let[s,a]=x2(i);return kn(e,{type:"CONSTRUCT",path:t.map(f=>f.toString()),argumentList:s},a).then(qr)}});return l}function Em(e){return Array.prototype.concat.apply([],e)}function x2(e){let t=e.map(O0);return[t.map(r=>r[0]),Em(t.map(r=>r[1]))]}var _2=new WeakMap;function vm(e,t){return _2.set(e,t),e}function _m(e){return Object.assign(e,{[b2]:!0})}function O0(e){for(let[t,r]of E2)if(r.canHandle(e)){let[n,l]=r.serialize(e);return[{type:"HANDLER",name:t,value:n},l]}return[{type:"RAW",value:e},_2.get(e)||[]]}function qr(e){switch(e.type){case"HANDLER":return E2.get(e.name).deserialize(e.value);case"RAW":return e.value}}function kn(e,t,r){return new Promise(n=>{let l=km();e.addEventListener("message",function o(i){!i.data||!i.data.id||i.data.id!==l||(e.removeEventListener("message",o),n(i.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:l},t),r)})}function km(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}function zm(e){let t=new WeakMap;return{postMessage:e.postMessage.bind(e),addEventListener:(r,n)=>{let l=o=>{"handleEvent"in n?n.handleEvent({data:o}):n({data:o})};e.on("message",l),t.set(n,l)},removeEventListener:(r,n)=>{let l=t.get(n);!l||(e.off("message",l),t.delete(n))},nodeWorker:e}}var k2=zm;var Cm=typeof globalThis.Worker>"u"&&typeof globalThis.WorkerNavigator>"u",Pm="node:w-orker-_threa-ds",Nm=()=>Pm.replace(/-/g,"");async function Mm(){let{parentPort:e}=await import(Nm()).catch();return k2(e)}function z2(e){Cm?(async()=>zl(e,await Mm()))():zl(e)}He();lr();At();He();lr();yt();At();Be();Be();var oo=class extends $r{constructor(r){super();this.metric=r}traverseAlg(r){let n=0;for(let l of r.childAlgNodes())n+=this.traverseAlgNode(l);return n}traverseGrouping(r){let n=r.alg;return this.traverseAlg(n)*Math.abs(r.amount)}traverseMove(r){return this.metric(r)}traverseCommutator(r){return 2*(this.traverseAlg(r.A)+this.traverseAlg(r.B))}traverseConjugate(r){return 2*this.traverseAlg(r.A)+this.traverseAlg(r.B)}traversePause(r){return 0}traverseNewline(r){return 0}traverseLineComment(r){return 0}};function eu(e){return"A"<=e&&e<="Z"}function NL(e){let t=e.family;return eu(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:1}function ML(e){return 1}function GL(e){let t=e.family;return eu(t[0])&&t[t.length-1]==="v"||t==="x"||t==="y"||t==="z"||t==="T"?0:Math.abs(e.amount)}var _s=new oo(NL),ks=_s.traverseAlg.bind(_s),OL=new oo(ML),TL=_s.traverseAlg.bind(OL),$1=new oo(GL),IL=$1.traverseAlg.bind($1);Be();var zs=class extends $r{traverseAlg(t){let r=0;for(let n of t.childAlgNodes())r+=this.traverseAlgNode(n);return r}traverseGrouping(t){return this.traverseAlg(t.alg)*Math.abs(t.amount)}traverseMove(t){return 1}traverseCommutator(t){return 2*(this.traverseAlg(t.A)+this.traverseAlg(t.B))}traverseConjugate(t){return 2*this.traverseAlg(t.A)+this.traverseAlg(t.B)}traversePause(t){return 1}traverseNewline(t){return 0}traverseLineComment(t){return 0}},tu=new zs,WL=tu.traverseAlg.bind(tu);yt();var KL=2,QL=!0,jL=!1;function qL(e,t){let r=[];return t.forEach(function(n){let l=new B(n);if(l.amount!==1)throw new Error("SGS cannot handle def moves with an amount other than 1 yet.");let o=e.identityTransformation();for(let i=1;o=o.applyMove(l),!o.isIdentityTransformation();i++)r.push({move:l.modified({amount:i}),transformation:o})}),r}var kt=class{constructor(t,r,n){this.kpuzzle=t;this.sgs=r;this.searchMoves=qL(this.kpuzzle,n??Object.keys(this.kpuzzle.definition.moves))}async solve(t,r=KL,n){let l=t.experimentalToTransformation();if(!l)throw new Error("distinguishable pieces are not supported in tremble solver yt");let o=null,i=1e6,s=(a,f,u)=>{if(f===0){let g=this.sgsPhaseSolve(a,i);if(!g)return;let p=u.concat(g).simplify({collapseMoves:!0,quantumMoveOrder:n}),c=ks(p);(o===null||c<i)&&(jL&&(console.log(\`New best (\${c} moves): \${p.toString()}\`),console.log(\`Tremble moves are: \${u.toString()}\`)),o=p,i=c);return}for(let g of this.searchMoves)s(a.applyTransformation(g.transformation),f-1,u.concat([g.move]))};for(let a=0;a<=r;a++)s(l,a,new v);if(o===null)throw new Error("SGS search failed.");return o}sgsPhaseSolve(t,r){let n=new Lt,l=t;for(let o of this.sgs.ordering){let i=o.pieceOrdering,s="",a=l.invert();for(let u=0;u<i.length;u++){let g=i[u],p=g.orbitName,c=g.permutationIdx;s+=\` \${a.transformationData[p].permutation[c]} \${a.transformationData[p].orientation[c]}\`}let f=o.lookup[s];if(!f)throw new Error("Missing algorithm in sgs or esgs?");if(n.experimentalPushAlg(f.alg),n.experimentalNumAlgNodes()>=r)return null;if(l=l.applyTransformation(f.transformation),QL)for(let u=0;u<i.length;u++){let g=i[u],p=g.orbitName,c=g.permutationIdx;if(l.transformationData[p].permutation[c]!==c||l.transformationData[p].orientation[c]!==0)throw new Error("bad SGS :-(")}}return n.toAlg()}};async function Ai(e,t){let r=await or(),n=e.identityTransformation();for(let l of t.ordering){let o=r(Object.values(l.lookup));n=n.applyTransformation(o.transformation)}return n.toKState()}Qt();var ft=We(()=>Promise.resolve().then(()=>(gu(),uu)));var oB=3,pu=null;async function cu(){return pu||(pu=(async()=>{let e=await(await ft).cachedData222();return new kt(await Pe["2x2x2"].kpuzzle(),e,"URFLBD".split(""))})())}async function mu(){await cu()}async function Gs(e){return Ee(),await(await cu()).solve(e,oB,()=>4)}async function iB(e,t,r,n){let l=await ve();await X1(r.stateData[t].pieces);let o=e.definition.orbits[t],i=r.stateData[t].orientation,s=0;for(let a=0;a<o.numPieces;a++){let f=l(o.numOrientations);i[a]=f,s+=f}n&&"orientationSum"in n&&(i[0]=((i[0]+n.orientationSum-s)%o.numOrientations+o.numOrientations)%o.numOrientations)}async function sB(){let e=await Pe["2x2x2"].kpuzzle(),t=new ge(e,JSON.parse(JSON.stringify(e.startState().stateData)));return await iB(e,"CORNERS",t,{orientationSum:0}),t}async function Lu(){return await Gs(await sB())}ua();yi();Qt();var Na=We(()=>Promise.resolve().then(()=>(Fp(),hp)));var DR=[[null,"x","x2","x'","z","z'"],[null,"y","y2","y'"]];async function Dp(){return(await Na).initialize()}async function Ma(){return(await Na).random444Scramble()}async function Ap(){return Yn(await Ma(),DR)}yi();Be();yt();function AR(e){switch(e){case 5:return 60;case 6:return 80;default:return 100}}var yR=[["U","D"],["L","R"],["F","B"]],yp=new Map;function UR(e){let t=yp.get(e);if(t)return t;let r=[];for(let n of yR){let l=[];r.push(l);for(let o of n){l.push(new z(o)),e>3&&l.push(new z(\`\${o}w\`));for(let i=3;i<=e/2;i++)l.push(new z(\`\${o}w\`,i))}}return yp.set(e,r),r}async function pr(e){let t=await ve(),r=await or(),n=r,l=UR(e),o=AR(e),i=new Lt,s=0,a=new Set;for(;i.experimentalNumAlgNodes()<o;){let f=t(3);f!==s&&a.clear(),s=f;let u=r(l[s]),g=u.toString();a.has(g)||(a.add(g),i.push(new B(u,n([1,2,-1]))))}return i.toAlg()}var SR=[[null,"3Rw","3Rw2","3Rw'","3Fw","3Fw'"],[null,"3Dw","3Dw2","3Dw'"]];async function Up(){return Yn(await pr(5),SR)}Be();lr();Qt();At();Qt();var lc=We(()=>Promise.resolve().then(()=>(nc(),rc)));var P9=We(()=>Promise.resolve().then(()=>(n2(),r2)));async function Rc(){return Ee(),new v(await(await lc).randomFTOScrambleString())}At();Qt();var _c=We(()=>Promise.resolve().then(()=>(vc(),Ec)));async function kc(){return Ee(),(await _c).getRandomKilominxScramble()}Be();At();Qt();var Vc=We(()=>Promise.resolve().then(()=>(qc(),jc)));async function Hc(){return Ee(),new v(await(await Vc).randomMasterTetraminxScrambleString())}He();At();var nF=2,Zc=null;async function lF(){return Zc||(Zc=(async()=>{let e=await(await ft).cachedSGSDataMegaminx();return new kt(await(await ft).cachedMegaminxKPuzzleWithoutMO(),e,["U","R","F","L","BR","BL","FR","FL","DR","DL","B","D"])})())}async function Jc(e){Ee();let t=await lF(),r=JSON.parse(JSON.stringify(e.stateData));r.CENTERS.orientation=new Array(12).fill(0);let n=new ge(await(await ft).cachedMegaminxKPuzzleWithoutMO(),r);return await t.solve(n,nF,()=>5)}lr();At();var oF=3,Yc=null;async function iF(){return Yc||(Yc=(async()=>{let e=await(await ft).sgsDataPyraminx();return new kt(await Pe.pyraminx.kpuzzle(),e,"RLUB".split(""))})())}async function m2(e){return Ee(),await(await iF()).solve(e,oF,()=>3)}async function sF(){return Ee(),Ai(await Pe.pyraminx.kpuzzle(),await(await ft).sgsDataPyraminxFixedOrientation())}async function Xc(){return m2(await sF())}At();Qt();var $c=We(()=>Promise.resolve().then(()=>(n2(),r2)));async function em(){return Ee(),(await $c).getRandomRediCubeScramble()}He();At();var aF=3,tm=null;async function fF(){return tm||(tm=(async()=>{let e=await(await ft).sgsDataSkewb();return new kt(await(await ft).skewbKPuzzleWithoutMOCached(),e,"RLUB".split(""))})())}function uF(e){return new ge(e.kpuzzle,{CORNERS:e.stateData.CORNERS,CENTERS:{pieces:e.stateData.CENTERS.pieces,orientation:new Array(6).fill(0)}})}async function L2(e){return Ee(),await(await fF()).solve(uF(e),aF,n=>n.family==="y"?4:3)}async function gF(){return Ai(await(await ft).skewbKPuzzleWithoutMOCached(),await(await ft).sgsDataSkewbFixedCorner())}async function rm(){return L2(await gF())}Be();Qt();var mm=We(()=>Promise.resolve().then(()=>(cm(),pm)));async function Lm(){return v.fromString(await(await mm).getRandomSquare1ScrambleString())}var PF=1e3;V1(!0);var Rm=!0;function NF(e){Rm=e}function Bm(){return(typeof performance>"u"?Date:performance).now()}async function ze(e,t,r){if(!Rm)return t();let n=Bm(),l=t();l?.then&&await l;let o=Bm();return console.warn(\`\${e}\${r?.isPrefetch?" (prefetched)":""}: \${Math.round(o-n)}ms\`),l}var A2=new Map,y2=null;async function dm(e,t){switch(e){case"222":return ze("random222Scramble",Lu,{isPrefetch:t?.isPrefetch});case"333":case"333oh":case"333ft":return ze("random333Scramble",fl,{isPrefetch:t?.isPrefetch});case"333fm":return ze("random333FewestMovesScramble",fg);case"333bf":case"333mb":return ze("random333OrientedScramble",ag);case"444":return ze("random444Scramble",Ma,{isPrefetch:t?.isPrefetch});case"444bf":return ze("random444OrientedScramble",Ap);case"555":return ze("bigCubeScramble(5)",pr.bind(pr,5));case"555bf":return ze("oriented555RandomMoves",Up);case"666":return ze("bigCubeScramble(6)",pr.bind(pr,6));case"777":return ze("bigCubeScramble(7)",pr.bind(pr,7));case"skewb":return ze("randomSkewbFixedCornerScramble",rm);case"pyram":return ze("randomPyraminxScrambleFixedOrientation",Xc);case"sq1":return ze("getRandomSquare1Scramble",Lm,{isPrefetch:t?.isPrefetch});case"fto":return ze("randomFTOScramble",Rc,{isPrefetch:t?.isPrefetch});case"master_tetraminx":return ze("randomMasterTetraminxScramble",Hc);case"kilominx":return ze("randomKilominxScramble",kc,{isPrefetch:t?.isPrefetch});case"redi_cube":return ze("randomRediCubeScramble",em,{isPrefetch:t?.isPrefetch});default:throw new Error(\`unsupported event: \${e}\`)}}var U2="auto",S2={initialize:async e=>{switch(e){case"222":return ze("preInitialize222",mu);case"333":case"333oh":case"333ft":return ze("initialize333",sg);case"444":return ze("initialize444",Dp);default:throw new Error(\`unsupported event: \${e}\`)}},setScramblePrefetchLevel(e){U2=e},randomScrambleForEvent:async e=>{let t=A2.get(e);return t?A2.delete(e):t=dm(e),U2!=="none"&&t.then(()=>{y2&&clearTimeout(y2),y2=setTimeout(()=>{A2.set(e,dm(e,{isPrefetch:!0}))},U2==="immediate"?0:PF)}),t},randomScrambleStringForEvent:async e=>(await S2.randomScrambleForEvent(e)).toString(),solve333ToString:async e=>{let t=new ge(await Pe["3x3x3"].kpuzzle(),e);return(await fa(t)).toString()},solve222ToString:async e=>{let t=new ge(await Pe["2x2x2"].kpuzzle(),e);return(await Gs(t)).toString()},solveSkewbToString:async e=>{let t=new ge(await Pe.skewb.kpuzzle(),e);return(await L2(t)).toString()},solvePyraminxToString:async e=>{let t=new ge(await Pe.pyraminx.kpuzzle(),e);return(await m2(t)).toString()},solveMegaminxToString:async e=>{let t=new ge(await Pe.megaminx.kpuzzle(),e);return(await Jc(t)).toString()},setDebugMeasurePerf:async e=>{NF(e)}};z2(S2);
`;export{e as workerSource};
