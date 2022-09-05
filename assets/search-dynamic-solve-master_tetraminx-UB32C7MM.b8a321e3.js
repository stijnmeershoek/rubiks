import{h as Z}from"./index.d20cc7a9.js";function k(e){if(e<2)return e;let t=1;for(let r=2;r<=e;r++)t*=r;return t}function d(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=r;return t}function $(e){e=e.slice();let t=e.length,r=k(t-1),l=0;for(;t>1;){t--;let o=e[0];l+=o*r;for(let n=0;n<t;n++){let i=e[n+1];e[n]=i-(i>o)}r/=t}return l}function b(e,t){let r=[],l=k(t-1)/2,o=0;for(let n=0;n<t-1;n++)r[n]=e/l|0,e%=l,l/=t-1-n;r[t-1]=0;for(let n=t-2;n>=0;n--)for(let i=n+1;i<t;i++)r[i]>=r[n]?r[i]++:o^=1;return o===1&&([r[t-2],r[t-1]]=[r[t-1],r[t-2]]),r}function F(e){return $(e)>>1}(()=>{let e=new Int8Array(49152),t=new Int8Array(4096*12);for(let o=0;o<4096;o++)for(let n=0,i=0;n<12;n++)(o>>>n&1)!==0&&(e[n<<12|o]=i,t[i<<12|o]=n,i++);function r(o){let n=4095,i=19958400,a=0;for(let p=0;p<10;p++){let u=o[p];a+=e[n|u<<12]*i,n&=~(1<<u),i/=11-p}return a}function l(o,n){let i=4095,a=19958400,p=0;for(let u=0;u<10;u++){let m=o/a|0;o-=m*a,p^=m&1;let _=t[i|m<<12];n[u]=_,i&=~(1<<_),a/=11-u}return n[10]=t[i|p<<12],n[11]=t[i|(p^1)<<12],n}return[r,l]})();function v(e,t){let r=[];for(let l=0;l<t.length;l++)r[l]=e[t[l]];return r}function L(e){let t=[];for(let r=0;r<e.length;r++)t[e[r]]=r;return t}function I(e,t){let r=[];for(let l=0;l<t;l++)r[l]=l;for(let l=0;l<e.length;l++)r[e[l]]=e[(l+1)%e.length];return r}function w(e,t){return e.length===0?d(t):e.map(r=>I(r,t)).reduce(v)}function B(e,t){let r=Array(4);for(let i=0;i<4;i++)r[i]=(e.co[i]+t.co[i])%3;let l=v(e.mp,t.mp),o=v(e.wp,t.wp),n=v(e.cp,t.cp);return{co:r,mp:l,wp:o,cp:n}}d(12),d(12);var U={co:[2,0,0,0],mp:d(12),wp:I([1,9,11],12),cp:[0,1,2,3]},ee={co:[0,2,0,0],mp:d(12),wp:I([0,7,2],12),cp:[0,1,2,3]},te={co:[0,0,2,0],mp:d(12),wp:I([3,6,10],12),cp:[0,1,2,3]},re={co:[0,0,0,2],mp:d(12),wp:I([4,8,5],12),cp:[0,1,2,3]},ne={co:[2,0,0,0],mp:w([[1,9,11],[7,3,5]],12),wp:w([[1,9,11],[7,3,5]],12),cp:[0,2,3,1]},le={co:[0,2,0,0],mp:w([[0,7,2],[6,1,8]],12),wp:w([[0,7,2],[6,1,8]],12),cp:[3,1,0,2]},ie={co:[0,0,2,0],mp:w([[3,6,10],[9,0,4]],12),wp:w([[3,6,10],[9,0,4]],12),cp:[1,3,2,0]},oe={co:[0,0,0,2],mp:w([[4,8,5],[10,2,11]],12),wp:w([[4,8,5],[10,2,11]],12),cp:[2,0,1,3]},A=[ne,le,ie,oe,U,ee,te,re],ae=["u","l","r","b","U","L","R","B"],y=8,j=4;function D(e,t){return e>=4&&t>=4?!0:e<4&&t<4?e===t:(e^t)===4}function fe(e){let t=["0","","'"];return e.map(([l,o])=>ae[l]+t[o]).join(" ")}function pe(e){let t=Array(4);for(let n=0;n<4;n++)t[n]=e(3);let r=b(e(k(6)/2),6);for(let n=0,i=0;n<6;n++){let a=n===5?i:e(2);i^=a,r[n]+=a*6,r[n+6]=(r[n]+6)%12}let l=b(e(k(12)/2),12),o=b(e(k(4)/2),4);return{co:t,mp:r,wp:l,cp:o}}function ue(e){return _e(pe(e))}function ce(e,t=!0,r=!1){let l=fe(ue(e));if(!t)return l;let o=["u","l","r","b"],n=["0","","'"];if(!r){for(let f=0;f<4;f++){let c=e(3);c!==0&&(l+=" "+o[f]+n[c])}return l.trim()}let i=[],a=[],p=[];for(let f=0;f<4;f++)i[f]=e(3),a[f]=e(3),p[f]=(i[f]-a[f]+3)%3;let u=f=>f.filter(c=>c!==0).length;for(;!(u(a)>=1&&u(p)>=1&&u(a)+u(p)>=4);)for(let f=0;f<4;f++)a[f]=e(3),p[f]=(i[f]-a[f]+3)%3;let m=a.map((f,c)=>f!==0?o[c]+n[f]+" ":"").join(""),_=p.map((f,c)=>f!==0?" "+o[c]+n[f]:"").join("");return m+l+_}function _e(e){let t=se(e),r=[z(),G()],l=[ve(),de()],o=he(t),n,i=new Set,a=performance.now();for(let p=0;p<22;p++){let{value:u,done:m}=o.next(),_=e;for(let[O,S]of u)for(let x=0;x<S;x++)_=B(_,A[O]);let f=JSON.stringify(_);if(i.has(f))continue;i.add(f);let c=we(_),M=n?n.length-u.length-1:999999,g=ye(c,r,l,M).next().value;if(g!==void 0&&((n===void 0||n.length>u.length+g.length)&&(n=u.concat(g)),performance.now()-a>300))break}return n}function me(e){return e[3^e.indexOf(3)]}function se(e){let t=v(L(e.mp),e.wp),r=(e.co.reduce((l,o)=>l+o)-me(e.cp)+3)%3;return[0,1,2,3,4,5].map(l=>l+6*t.indexOf(l)+72*t.indexOf(l+6)+864*r)}var H=[],R=[];for(let e=0;e<y;e++){let t=A[e];t.mp,H[e]=L(t.mp),t.wp,R[e]=L(t.wp)}var N=[0,0,0,0,2,2,2,2],C=[[14,-1,-1,11,11,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,4,3,-1,-1,0],[13,-1,-1,11,10,10,9,8,8,7,7,6,4,5,5,3,4,4,2,3,3,1,-1,-1,6]],V=new Int8Array(55);for(let e=0;e<25;e++)V[e]=C[0][e],V[e+30]=C[1][e];var h=new Int8Array(6*12*12*3);for(let e=0;e<6;e++)for(let t=0;t<12;t++)for(let r=0;r<12;r++){let l=e+6*t+72*r,o=2;t===e?o++:t===(e+6)%12&&o--,r===(e+6)%12?o++:r===e&&o--,h[l]=o,h[l+6*12*12]=h[l+2*6*12*12]=o+5}function*he(e){let t=0,r=T(),l=ge();for(;;)yield*J(...e,r,l,t,-1),t++}function*J(e,t,r,l,o,n,i,a,p,u){let m=y,_=h[e]+h[t]+h[r]+h[l]+h[o]+h[n],f=Math.max(a[e%864+t*864],a[r%864+t*864],a[o%864+t*864],a[e%864+l*864],a[r%864+l*864],a[o%864+l*864],a[e%864+n*864],a[r%864+n*864],a[o%864+n*864],a[e%864+r*864],a[e%864+o*864],a[r%864+o*864],a[t%864+l*864],a[t%864+n*864],a[l%864+n*864],V[_]);if(!(f>p)){if(p===0){yield[];return}if(!(f===0&&p===1))for(let c=0;c<m;c++){if(c===u||c<u&&D(c,u))continue;let M=e,g=t,O=r,S=l,x=o,q=n;for(let E=1;E<=2;E++){M=i[M][c],g=i[g][c],O=i[O][c],S=i[S][c],x=i[x][c],q=i[q][c];let W=J(M,g,O,S,x,q,i,a,p-1,c);for(;;){let{value:X,done:Y}=W.next();if(Y)break;yield[[c,E]].concat(X)}}}}}function we(e){let t=e.mp,r=F(t.slice(0,6).map(i=>i%6)),l=t.slice(0,5).map((i,a)=>(i>=6)*2**a).reduce((i,a)=>i+a),o=e.co.map((i,a)=>i*3**a).reduce((i,a)=>i+a),n=e.cp.indexOf(0);return[r+360*n,l+32*o]}var s={};function P(){if(s.phase1pm)return s.phase1pm;let e=Array(6*12*12).fill().map(()=>Array(y).fill(-1));for(let t=0;t<6;t++)for(let r=0;r<12;r++)for(let l=0;l<12;l++){if(r===l)continue;let o=t+6*r+72*l;for(let n=0;n<y;n++){let i=H[n][t],a=R[n][r],p=R[n][l];i<6?e[o][n]=i+6*a+72*p:e[o][n]=i-6+6*p+72*a}}return s.phase1pm=e}function T(){if(s.phase1pcm)return s.phase1pcm;let e=P(),t=Array(e.length*3).fill().map(()=>Array(y).fill(-1));for(let r=0;r<e.length;r++)for(let l=0;l<y;l++){let o=e[r][l];t[r][l]=o+6*12*12*N[l],t[r+6*12*12][l]=o+6*12*12*((N[l]+1)%3),t[r+2*6*12*12][l]=o+6*12*12*((N[l]+2)%3)}return s.phase1pcm=t}function ge(){if(s.phase1p2cp)return s.phase1p2cp;let e=P(),t=T(),r=new Int8Array((6*12*12)**2*3);r.fill(-1);let l=[0,1,2,3,4,5].map(n=>n+6*n+72*(n+6));for(let n=0;n<6;n++)for(let i=0;i<6;i++)n!==i&&(r[l[n]+864*l[i]]=0);let o=0;for(;;){let n=!1;for(let i=0;i<r.length;i++){if(r[i]!==o)continue;let a=i%864,p=Math.floor(i/864);for(let u=0;u<y;u++){let m=a,_=p;for(let f=1;f<=2;f++){m=e[m][u],_=t[_][u];let c=m+864*_;r[c]===-1&&(n=!0,r[c]=o+1)}}}if(!n)break;o++}return s.phase1p2cp=r}function z(){if(s.phase2pm)return s.phase2pm;let e=Array(1440).fill().map(()=>Array(j));for(let t=0;t<360;t++){let r=b(t,6);for(let l=0;l<6;l++)r[l+6]=r[l]+6;for(let l=0;l<j;l++){let o=v(r,A[l].mp),n=F(o.slice(0,6).map(i=>i%6));for(let i=0;i<4;i++){let a=A[l].cp[i];e[t+360*a][l]=n+360*i}}}return s.phase2pm=e}function G(){if(s.phase2om)return s.phase2om;let e=Array(32*81).fill().map(()=>Array(j));for(let t=0;t<32;t++){let r=[0,1,2,3,4].map(o=>t>>o&1);r[5]=r.reduce((o,n)=>o^n);let l=[];for(let o=0;o<6;o++)l[o]=o+6*r[o],l[o+6]=o+6*(r[o]^1);for(let o=0;o<81;o++){let n=[0,1,2,3].map(i=>Math.floor(o/3**i)%3);for(let i=0;i<j;i++){let p=v(l,A[i].mp).slice(0,5).map(f=>+(f>=6)),u=0;for(let f=0;f<5;f++)u+=p[f]<<f;let m=n.map((f,c)=>(f+A[i].co[c])%3),_=0;for(let f=0;f<4;f++)_+=m[f]*3**f;e[t+32*o][i]=u+32*_}}}return s.phase2om=e}function ve(){return s.phase2pp?s.phase2pp:s.phase2pp=K(z(),[0])}function de(){return s.phase2op?s.phase2op:s.phase2op=K(G(),[0])}function K(e,t){let r=e.length,l=e[0].length,o=Array(r).fill(-1),n=t.slice(),i=[],a=0;for(;n.length>0;){i.length=0;for(let p of n)if(o[p]===-1){o[p]=a;for(let u=0;u<l;u++){let m=e[p][u];for(;m!=p;)i.push(m),m=e[m][u]}}[n,i]=[i,n],a+=1}return o}function*ye(e,t,r,l){let o=e.length,n=0;for(let i=0;i<o;i++)n=Math.max(n,r[i][e[i]]);for(;n<=l;)yield*Q(e,t,r,n,-1),n++}function*Q(e,t,r,l,o){let n=e.length,i=t[0][0].length,a=0;for(let p=0;p<n;p++)a=Math.max(a,r[p][e[p]]);if(!(a>l)){if(l===0){yield[];return}if(!(a===0&&l===1))for(let p=0;p<i;p++){if(p===o||p<o&&D(p,o))continue;let u=e.slice();for(let _=0;_<n;_++)u[_]=t[_][e[_]][p];let m=1;for(;e.some((_,f)=>e[f]!=u[f]);){let _=Q(u,t,r,l-1,p);for(;;){let{value:f,done:c}=_.next();if(c)break;yield[[p,m]].concat(f)}for(let f=0;f<n;f++)u[f]=t[f][u[f]][p];m++}}}}var xe=Z();async function Me(){return ce(await xe,!1)}export{Me as randomMasterTetraminxScrambleString};
