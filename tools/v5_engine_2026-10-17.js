/* ---------- o'yin dvigateli (v5) ---------- */
var TILE=60, COLS=12, ROWS=8, W=COLS*TILE, H=ROWS*TILE;
var DIRS=[[0,-1],[1,0],[0,1],[-1,0]]; /* N E S W */
var REAL=['Rasmiy sayt · bot sahifasi · 12.09','Skrinshot, ilova v3.2 · 14.09','Rasmiy so‘rov javobi · 18.09','Bot dialogi yozuvi · 15.09','Yillik hisobot, 24-bet · 2025','Press-reliz, sana bilan · 02.09'];
var FAKE=['«Bot 911% tezroq!» — manba yo‘q','Chatdagi xabar, havolasiz','Eski post — sanasi yo‘q','Blog, muallifi noma’lum','«Hamma bankda bor» — dalilsiz'];
var CTYPES=[
  {k:'doc',  n:'Hujjat',  c:'#2F6FDB'},
  {k:'rep',  n:'Hisobot', c:'#2F9E5F'},
  {k:'chat', n:'Chat',    c:'#7A5AF8'},
  {k:'web',  n:'Sayt',    c:'#0891B2'},
  {k:'mail', n:'Xat',     c:'#D97706'},
  {k:'blog', n:'Blog',    c:'#DB2777'}
];
var CMDS={F:{ic:'▲',n:'Oldinga',key:'↑'},L:{ic:'◀',n:'Chapga',key:'←'},R:{ic:'▶',n:'O‘ngga',key:'→'},P:{ic:'📥',n:'Dalil ol',key:'↓'}};
var LEVELS=[
  {name:'Ma’lumot izlash', walls:[[2,1],[3,1],[2,2],[3,2],[6,3],[9,0]], cards:5, real:4, time:90, chasers:0, pups:2, slots:60},
  {name:'Soxta signal',    walls:[[2,1],[2,2],[2,3],[5,0],[5,1],[8,4],[8,5],[8,6],[4,6],[9,2]], cards:5, real:3, time:90, chasers:1, pups:2, slots:70},
  {name:'Yakuniy tekshiruv',walls:[[2,1],[2,2],[5,3],[5,4],[5,5],[8,1],[8,2],[3,6],[9,5],[9,6],[6,0]], cards:6, real:3, time:100, chasers:2, pups:2, slots:80}
];
var PUPS=[{k:'bat',c:'#2F9E5F',t:'Batareya +1'},{k:'time',c:'#2F6FDB',t:'Vaqt +10 s'},{k:'shield',c:'#7A5AF8',t:'Qalqon 6 s'},{k:'magnet',c:'#E08A1E',t:'Magnit 8 s'}];
var G=null, cv=null, ctx=null, raf=null, lastT=0, keys={}, drag=null, MODE='code';
try{ MODE=localStorage.getItem('rt2_mode')==='free'?'free':'code' }catch(e){}
var TOUCH=!!(window.matchMedia&&window.matchMedia('(pointer:coarse)').matches);
var DPR=Math.min(2.5,window.devicePixelRatio||1);
var SND=true; try{SND=localStorage.getItem('rt2_snd')!=='0'}catch(e){}
var AC=null, FX={p:[],t:[],shake:0};

function tone(f,d,type,vol,to){
  if(!SND) return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    var o=AC.createOscillator(), g=AC.createGain(), now=AC.currentTime;
    o.type=type||'sine'; o.frequency.setValueAtTime(f,now);
    if(to) o.frequency.exponentialRampToValueAtTime(Math.max(40,to),now+d);
    g.gain.setValueAtTime(vol||.05,now); g.gain.exponentialRampToValueAtTime(.0001,now+d);
    o.connect(g); g.connect(AC.destination); o.start(now); o.stop(now+d+.02);
  }catch(e){}
}
function buzz(ms){ try{ if(navigator.vibrate) navigator.vibrate(ms||15) }catch(e){} }
function isDark(){ return document.documentElement.getAttribute('data-theme')==='dark' }
function lvlWalls(i){var m={}; LEVELS[i].walls.forEach(function(w){m[w[0]+','+w[1]]=1}); return m}
function freeTiles(i,walls){var t=[]; for(var y=0;y<ROWS;y++)for(var x=0;x<COLS;x++){ if(walls[x+','+y])continue; if(x<2&&y<2)continue; if(x===COLS-1&&y===ROWS-1)continue; t.push([x,y]) } return t}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t} return a}
function fmt(s){s=Math.max(0,Math.ceil(s)); var m=Math.floor(s/60); return (m<10?'0':'')+m+':'+((s%60)<10?'0':'')+(s%60)}
function tileAt(px,py){return [Math.floor(px/TILE), Math.floor(py/TILE)]}
function blockedR(px,py,r){ var pts=[[px-r,py-r],[px+r,py-r],[px-r,py+r],[px+r,py+r]]; for(var i=0;i<4;i++){var t=tileAt(pts[i][0],pts[i][1]); if(t[0]<0||t[1]<0||t[0]>=COLS||t[1]>=ROWS) return true; if(G.walls[t[0]+','+t[1]]) return true} return false }
function center(tx,ty){ return [tx*TILE+TILE/2, ty*TILE+TILE/2] }
function cardAt(tx,ty){ for(var i=0;i<G.cards.length;i++){var c=G.cards[i]; if(!c.taken&&c.x===tx&&c.y===ty) return c } return null }

/* canvas: DPR aniq chizish */
function fit(){
  if(!cv) return;
  var cssW=cv.clientWidth||W;
  var bw=Math.max(320,Math.round(cssW*DPR));
  if(cv.width!==bw){ cv.width=bw; cv.height=Math.round(bw*H/W); }
  if(ctx) ctx.setTransform(cv.width/W,0,0,cv.width/W,0,0);
}
window.addEventListener('resize',fit);
window.addEventListener('orientationchange',function(){ setTimeout(fit,120) });

function burst(x,y,n,color,pow){
  for(var i=0;i<n;i++){ var a=Math.random()*Math.PI*2, sp=(pow||1)*(40+Math.random()*120);
    FX.p.push({x:x,y:y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp-30,life:.45+Math.random()*.35,max:.8,c:color,s:2+Math.random()*3}) }
}
function popText(x,y,txt,color){ FX.t.push({x:x,y:y,t:txt,c:color||'#2F9E5F',life:1.15}) }

/* --- daraja --- */
function newLevel(i){
  var L=LEVELS[i], walls=lvlWalls(i), free=shuffle(freeTiles(i,walls));
  var spots=free.slice(0,L.cards);
  var pups=free.slice(L.cards,L.cards+L.pups).map(function(p,k){ return {x:p[0],y:p[1],type:PUPS[(i+k)%PUPS.length].k,taken:false,ph:Math.random()*6} });
  var notes=shuffle(REAL.slice()).slice(0,L.real).map(function(t){return {t:t,real:true}}).concat(shuffle(FAKE.slice()).slice(0,L.cards-L.real).map(function(t){return {t:t,real:false}}));
  notes=shuffle(notes);
  var types=shuffle(CTYPES.slice());
  var chasers=[];
  for(var c=0;c<L.chasers;c++){
    var cx=(c===0?9:5)*TILE+30, cy=(c===0?6:2)*TILE+30;
    chasers.push({x:cx,y:cy,dir:c===0?-1:1,range:[TILE*1.2,W-TILE*1.2],speed:c===0?72:58,alert:false,ph:c*2.1,home:cy});
  }
  var bg=[]; for(var k=0;k<26;k++) bg.push({x:Math.random()*W,y:Math.random()*H,s:.5+Math.random()*.9,v:6+Math.random()*14,a:.06+Math.random()*.1,t:Math.random()<.5});
  G={mode:MODE, lvl:i, walls:walls, tx:0, ty:0, face:1, faceVis:1,
     rx:30, ry:30, vx:0, vy:0, battery:3, left:L.time+(TOUCH?30:0), pr:TOUCH?50:40, ar:TOUCH?58:44,
     cards:spots.map(function(p,k){return {x:p[0],y:p[1],note:notes[k],type:types[k%types.length].k,taken:false,ox:0,oy:0,ph:k}}),
     pups:pups, chasers:chasers, bg:bg, done:0, xp:G?G.xp:0, correct:0, wrong:0, combo:0, maxCombo:0,
     shieldT:0, magnetT:0, inv:0, intro:1.1, running:true, paused:false, lastSec:-1, tickAt:-1, _done:false,
     bayt:{x:90,y:90,ph:0,mood:0}, prog:[], preview:[], ex:{on:false,i:0,phase:'idle',t:0,dur:0,fx:0,fy:0,ff:0,tx:0,ty:0,tf:0,wait:false}};
  if(G.mode==='free'){ G.rx=30; G.ry=30; G.tx=0; G.ty=0 }
  updateHud(); markNodes(); hideLevelUp(); renderProg(); setModeUI();
  sayIt((i+1)+'-daraja — «'+L.name+'». '+(MODE==='code'
      ? L.cards+' ta kartani kod bilan yig‘ing: buyruqlar yozing va ▶ bilan ishga tushiring.'
      : L.cards+' ta kartani yig‘ing, XATO mavjudotlaridan qoching.'));
}
function updateHud(){
  if(!G) return;
  $('#gmCards').textContent='📄 '+G.done+'/'+G.cards.length;
  $('#gmBat').textContent='🔋 '+'⚡'.repeat(Math.max(0,G.battery))+'·'.repeat(Math.max(0,3-G.battery));
  xpEl.textContent=G.xp; barEl.style.width=Math.min(100,Math.round(G.xp/TOTAL*100))+'%';
  var cb=$('#gmCombo');
  if(cb){ if(G.combo>=2){ cb.style.display='inline-block'; cb.textContent='🔥 '+G.combo+' seriya'; cb.classList.toggle('hot',G.combo>=4) } else cb.style.display='none' }
  var pn=$('#gmProgNum');
  if(pn){
    if(G.mode==='code'){ pn.style.display='inline-block'; pn.textContent='🧩 '+G.prog.length+'/'+LEVELS[G.lvl].slots }
    else pn.style.display='none';
  }
  timeEl.style.display=G.mode==='code'?'none':'';
  var gc=$('#gcCount'); if(gc) gc.textContent=G.prog.length+' / '+LEVELS[G.lvl].slots+' buyruq';
}
function markNodes(){nodes.forEach(function(n,i){n.classList.toggle('on',!!G&&i===G.lvl); n.classList.toggle('done',!!G&&(i<G.lvl||i===3&&false))})}

/* --- loop --- */
function loop(ts){
  if(!G||!G.running) return;
  var dt=Math.min(.05,(ts-lastT)/1000||.016); lastT=ts; TS=ts;
  update(dt,ts);
  if(G){ draw(ts); raf=requestAnimationFrame(loop) }
}
function update(dt,ts){
  if(G.intro>0) G.intro-=dt;
  if(G.shieldT>0) G.shieldT=Math.max(0,G.shieldT-dt);
  if(G.magnetT>0) G.magnetT=Math.max(0,G.magnetT-dt);
  if(G.inv>0) G.inv=Math.max(0,G.inv-dt);
  updateBayt(dt);
  if(!G.paused){
    if(G.mode==='free') updateFree(dt,ts); else updateCode(dt,ts);
  }
  if(G&&!G._done) checkWin();
  updateFX(dt);
}
function checkWin(){
  if(G.done>=G.cards.length && G.tx===COLS-1 && G.ty===ROWS-1){ levelDone() }
}
function updateFree(dt,ts){
  if(G.intro>0){ updateChasers(dt,true); return }
  G.left-=dt;
  var sec=Math.ceil(G.left);
  if(sec!==G.lastSec){ G.lastSec=sec; timeEl.textContent=fmt(G.left);
    if(sec<=10&&sec>0&&sec!==G.tickAt){ G.tickAt=sec; tone(880,.06,'square',.03) } }
  if(G.left<=0){ G.left=45; G.lastSec=-1; tone(140,.35,'sawtooth',.05,80); FX.shake=.4; hurt('Vaqt tugadi! Batareya -1'); if(!G) return; resetPos(); }
  var sp=190, dx=0, dy=0;
  if(keys.left)dx-=1; if(keys.right)dx+=1; if(keys.up)dy-=1; if(keys.down)dy+=1;
  if(drag){
    var ddx=drag.x-G.rx, ddy=drag.y-G.ry, dd=Math.sqrt(ddx*ddx+ddy*ddy);
    if(dd>7){ dx=ddx/dd; dy=ddy/dd; sp=Math.min(260,150+dd*1.1) }
  }
  if(dx&&dy){dx*=.7071; dy*=.7071}
  G.vx=dx; G.vy=dy;
  if(dx){var nx=G.rx+dx*sp*dt; if(!blockedR(nx,G.ry,19))G.rx=nx}
  if(dy){var ny=G.ry+dy*sp*dt; if(!blockedR(G.rx,ny,19))G.ry=ny}
  G.tx=Math.max(0,Math.min(COLS-1,Math.round((G.rx-30)/TILE))); G.ty=Math.max(0,Math.min(ROWS-1,Math.round((G.ry-30)/TILE)));
  if(dx||dy){ if(Math.random()<.5) FX.p.push({x:G.rx-6+Math.random()*12,y:G.ry+16,vx:(Math.random()-.5)*20,vy:20+Math.random()*20,life:.3,max:.3,c:'rgba(47,111,219,.35)',s:2+Math.random()*2}) }
  updateChasers(dt,false);
  /* kartalar */
  for(var i=0;i<G.cards.length;i++){
    var c=G.cards[i]; if(c.taken) continue;
    var cx=c.x*TILE+30+c.ox, cy=c.y*TILE+30+c.oy, r=G.pr;
    if(G.magnetT>0){
      var mx=G.rx-cx, my=G.ry-cy, md=Math.sqrt(mx*mx+my*my)||1;
      if(md<170){ c.ox+=mx/md*140*dt; c.oy+=my/md*140*dt; r=Math.max(r,74) }
    }
    if(Math.abs(G.rx-cx)<r&&Math.abs(G.ry-cy)<r){ c.taken=true; c.ox=0; c.oy=0;
      burst(cx,cy,12,'#4DA3FF'); tone(700,.07,'sine',.05); buzz(12); openCard(c); break }
  }
  /* bonuslar */
  for(var k=0;k<G.pups.length;k++){
    var u=G.pups[k]; if(u.taken) continue;
    var ux=u.x*TILE+30, uy=u.y*TILE+30;
    if(Math.abs(G.rx-ux)<(TOUCH?42:34)&&Math.abs(G.ry-uy)<(TOUCH?42:34)){ u.taken=true; applyPup(u,ux,uy) }
  }
}
function updateCode(dt,ts){
  if(G.intro>0) return;
  updateChasers(dt,true);
  var ex=G.ex;
  if(!ex.on) return;
  if(ex.wait) return;
  if(ex.phase==='turn'||ex.phase==='move'){
    ex.t+=dt;
    var k=Math.min(1,ex.t/ex.dur), e=k*k*(3-2*k);
    if(ex.phase==='move'){ G.rx=ex.fx+(ex.tx-ex.fx)*e; G.ry=ex.fy+(ex.ty-ex.fy)*e }
    else { var d=ex.tf-ex.ff; if(d>2)d-=4; if(d<-2)d+=4; G.faceVis=((ex.ff+d*e)%4+4)%4 }
    if(k>=1){
      if(ex.phase==='move'){ G.rx=ex.tx; G.ry=ex.ty; G.tx=ex.ntx; G.ty=ex.nty }
      else { G.face=ex.tf; G.faceVis=ex.tf }
      ex.phase='idle'; nextCmd();
    }
    return;
  }
  nextCmd();
}
function nextCmd(){
  var ex=G.ex;
  if(!ex.on) return;
  if(ex.i>=G.prog.length){ endRun(); return }
  var cmd=G.prog[ex.i], markProg(ex.i);
  if(cmd==='F'){
    var d=DIRS[G.face], nx=G.tx+d[0], ny=G.ty+d[1];
    if(nx<0||ny<0||nx>=COLS||ny>=ROWS||G.walls[nx+','+ny]){ failRun('Devor! Dasturni tuzating.'); return }
    var p0=[G.rx,G.ry], p1=center(nx,ny);
    ex.phase='move'; ex.t=0; ex.dur=.22; ex.fx=p0[0]; ex.fy=p0[1]; ex.tx=p1[0]; ex.ty=p1[1];
    ex.ntx=nx; ex.nty=ny;
    tone(420,.05,'sine',.03);
    ex.i++;
  } else if(cmd==='L'||cmd==='R'){
    ex.phase='turn'; ex.t=0; ex.dur=.16; ex.ff=G.face; ex.tf=(G.face+(cmd==='R'?1:3))%4;
    tone(520,.04,'triangle',.025);
    ex.i++;
  } else if(cmd==='P'){
    var c=cardAt(G.tx,G.ty);
    if(c){ G.ex.wait=true; openCard(c); }
    else { sayIt('Bu katakda karta yo‘q — 📥 faqat karta ustida ishlaydi.',false); tone(200,.08,'square',.03) }
    ex.i++;
  }
  /* hech qanday animatsiya boshlanmasa — keyingi buyruqqa o'tamiz */
  if(ex.on&&ex.phase==='idle'&&!ex.wait) nextCmd();
}
function runProgram(){
  if(!G||G.mode!=='code'||G.paused) return;
  if(!G.prog.length){ sayIt('Avval buyruq qo‘shing: ▲ oldinga, ◀ ▶ burilish, 📥 dalil olish.',false); tone(220,.1,'square',.04); return }
  /* har bir dastur har doim start katagidan boshlanadi */
  G.tx=0; G.ty=0; G.face=1; G.faceVis=1; G.rx=30; G.ry=30;
  G.ex={on:true,i:0,phase:'idle',t:0,dur:0,fx:0,fy:0,ff:0,tx:0,ty:0,tf:0,wait:false};
  G.face=G.face; G.faceVis=G.face;
  sayIt('Dastur ishga tushdi…',true); tone(660,.06,'sine',.04);
  nextCmd();
}
function endRun(){
  G.ex.on=false; markProg(-1); renderProg();
  if(G.done<G.cards.length) sayIt('Dastur tugadi. Yana buyruq qo‘shing yoki yangi dastur yozing.',false);
  else sayIt('Dastur tugadi. ARXIVga yetdingizmi? Yetmasa — davom eting.',false);
}
function failRun(msg){
  G.ex.on=false; markProg(-1); FX.shake=.4; tone(150,.3,'sawtooth',.05,80); buzz(40);
  sayIt(msg,false); renderProg();
}
function stopRun(){
  if(!G) return;
  G.ex.on=false; G.ex.phase='idle'; G.ex.wait=false; markProg(-1); renderProg();
  $('#gmPop').style.display='none'; G.paused=false;
  sayIt('Dastur to‘xtatildi.',false);
}
function applyPup(u,x,y){
  var meta=PUPS.filter(function(p){return p.k===u.type})[0]||{c:'#2F9E5F',t:''};
  if(u.type==='bat'){ G.battery=Math.min(3,G.battery+1) }
  if(u.type==='time'){ G.left+=10 }
  if(u.type==='shield'){ G.shieldT=6 }
  if(u.type==='magnet'){ G.magnetT=8 }
  popText(x,y-18,meta.t,meta.c); burst(x,y,14,meta.c,.9);
  tone(988,.09,'triangle',.05); setTimeout(function(){tone(1319,.12,'triangle',.045)},90); buzz(18);
  updateHud(); if(G) G.bayt.mood=1;
  sayIt(meta.t+' olindi!',true);
}
function resetPos(){
  if(!G) return;
  G.rx=30; G.ry=30; G.tx=0; G.ty=0; G.vx=0; G.vy=0; drag=null; G.inv=Math.max(G.inv,1.2);
  G.ex={on:false,i:0,phase:'idle',t:0,dur:0,fx:0,fy:0,ff:0,tx:0,ty:0,tf:0,wait:false};
  renderProg();
}
function hurt(msg){ if(!G)return; G.battery--; FX.shake=Math.max(FX.shake,.3); sayIt(msg); updateHud(); if(G.battery<=0){ gameOver() } }
function updateBayt(dt){
  var b=G.bayt; b.ph+=dt;
  var offx=(G.vx? -G.vx*34 : 24), offy=(G.vy? -G.vy*34 : 20);
  var tx=G.rx+offx, ty=G.ry+offy+Math.sin(b.ph*2.4)*5;
  tx=Math.max(24,Math.min(W-24,tx)); ty=Math.max(24,Math.min(H-24,ty));
  b.x+=(tx-b.x)*Math.min(1,dt*5); b.y+=(ty-b.y)*Math.min(1,dt*5);
  b.mood=Math.max(0,b.mood-dt);
}
function updateChasers(dt,frozen){
  if(frozen||!G) return;
  G.chasers.forEach(function(c){
    var dx=G.rx-c.x, dy=G.ry-c.y, d=Math.sqrt(dx*dx+dy*dy)||1;
    var see=(G.mode==='free')&&d<235; c.alert=see;
    var sp=c.speed*(see?1.45:.62);
    var nx=c.x, ny=c.y;
    if(see){ nx+=dx/d*sp*dt; ny+=dy/d*sp*dt }
    else { nx+=c.dir*sp*dt; if(c.x<c.range[0]||c.x>c.range[1]) c.dir*=-1 }
    if(!blockedR(nx,c.y,15)) c.x=nx;
    if(see&&!blockedR(c.x,ny,15)) c.y=ny;
    c.x=Math.max(20,Math.min(W-20,c.x)); c.y=Math.max(20,Math.min(H-20,c.y));
    if(d<(TOUCH?34:32)&&G.inv<=0){
      if(G.shieldT>0){ c.dir*=-1; c.x+=c.dir*30; burst(c.x,c.y,10,'#A78BFA'); tone(520,.12,'triangle',.04); G.inv=.9 }
      else {
        G.inv=1.5; FX.shake=.45; burst(G.rx,G.ry,16,'#D84B3F'); tone(120,.3,'sawtooth',.06,70); buzz(40);
        if(G.mode==='code'){ failRun('XATO tegdi! Batareya -1. Dasturni boshqacha tuzing.'); }
        hurt('XATO tegdi! Batareya -1');
        if(!G) return;
        resetPos();
      }
    }
  });
}
function updateFX(dt){
  var arr=FX.p;
  for(var q=arr.length-1;q>=0;q--){ var p=arr[q]; p.life-=dt; p.x+=p.vx*dt; p.y+=p.vy*dt; p.vy+=180*dt; p.vx*=.985; if(p.life<=0) arr.splice(q,1) }
  var tx=FX.t;
  for(var q2=tx.length-1;q2>=0;q2--){ var tt=tx[q2]; tt.life-=dt; tt.y-=34*dt; if(tt.life<=0) tx.splice(q2,1) }
  if(FX.shake>0) FX.shake=Math.max(0,FX.shake-dt*1.6);
  if(G&&G.bg) G.bg.forEach(function(b){ b.y-=b.v*dt; if(b.y<-6){ b.y=H+6; b.x=Math.random()*W } });
}

/* --- modal --- */
function openCard(c){
  G.paused=true; drag=null;
  var pop=$('#gmPop'); $('#gmCardNote').textContent=c.note.t; pop.style.display='flex';
  var hit=CTYPES.filter(function(t){return t.k===c.type})[0]||CTYPES[0];
  var chip=$('#gmCardType'); if(chip){ chip.textContent=hit.n; chip.style.background=hit.c+'22'; chip.style.color=hit.c; chip.style.borderColor=hit.c+'55' }
  var ic=$('#gmCardIcon'); if(ic){ ic.style.background=hit.c }
  drawCardGlyph(hit.k,0,0,1);
  $('#gmBtnReal').onclick=function(){ decide(c,true)};
  $('#gmBtnFake').onclick=function(){ decide(c,false)};
  tone(560,.08,'sine',.04);
}
function decide(c,saidReal){
  $('#gmPop').style.display='none'; G.paused=false;
  if(G.ex) G.ex.wait=false;
  var ok=(saidReal===c.note.real);
  if(ok){
    G.correct++; G.done++; G.combo++; G.maxCombo=Math.max(G.maxCombo,G.combo);
    var gain=addBits(c.note.real?60:50);
    popText(G.rx,G.ry-34,'+'+gain+' BIT'+(G.combo>=3?' ×'+G.combo:''),'#2F9E5F');
    burst(G.rx,G.ry,14,'#4DA3FF'); tone(660,.08,'sine',.05); setTimeout(function(){tone(990,.1,'sine',.045)},80); buzz(15);
    G.bayt.mood=1;
    sayIt(c.note.real?'To‘g‘ri — dalil arxivga! +'+gain+' BIT':'To‘g‘ri tutdingiz — bu dalil emas! +'+gain+' BIT',true);
  } else {
    G.wrong++; G.done++; G.combo=0; G.xp=Math.max(0,G.xp-20);
    FX.shake=.4; burst(G.rx,G.ry,12,'#D84B3F'); tone(170,.26,'sawtooth',.055,90); buzz(45);
    hurt(c.note.real?'Xato! Bu haqiqiy dalil edi. Batareya -1':'Xato! Bu soxta edi — Qizil bayroq kerak edi. Batareya -1');
    if(!G) return;
  }
  updateHud();
  if(G.done>=G.cards.length){ sayIt('Hamma kartalar tayyor! Endi ARXIVga (pastki o‘ng burchak) yeting! →',true); tone(784,.1,'sine',.05) }
  if(G.mode==='code'&&G.ex&&G.ex.on&&G.ex.phase==='idle'&&!G.ex.wait) nextCmd();
}
function addBits(base){
  var mult=G.combo>=5?2:G.combo>=3?1.5:1;
  var gain=Math.round(base*mult); G.xp+=gain; return gain;
}

/* --- daraja yakuni --- */
function levelDone(){
  if(!G||G._done) return; G._done=true;
  var bonus;
  if(G.mode==='code'){ var base=30+LEVELS[G.lvl].cards*6; bonus=80+Math.max(0,base-G.prog.length)*2 }
  else bonus=100+Math.ceil(G.left);
  G.xp+=bonus;
  G.paused=true; drag=null; G.ex.on=false;
  burst((COLS-1)*TILE+30,(ROWS-1)*TILE+30,26,'#2F9E5F',1.15);
  tone(523,.1,'triangle',.05); setTimeout(function(){tone(659,.1,'triangle',.05)},110); setTimeout(function(){tone(784,.16,'triangle',.05)},220);
  updateHud();
  if(G.lvl<LEVELS.length-1){ setTimeout(function(){ if(G) showLevelUp(bonus) },620) }
  else { setTimeout(function(){ finish() },700) }
}
function gameOver(){
  G.running=false; cancelAnimationFrame(raf); tone(180,.5,'sawtooth',.05,60);
  sayIt('Batareya tugadi! Lekin tadqiqotchi taslim bo‘lmaydi — qayta urining.');
  showFinal(false);
}
function bestScore(){ var b=0; try{b=+(localStorage.getItem('rt2_best')||0)}catch(e){} return b }
function saveBest(xp){ var b=bestScore(); if(xp>b){ try{localStorage.setItem('rt2_best',String(xp))}catch(e){} return true } return false }

function lvlUpEl(){
  var w=document.querySelector('.gmc-wrap'); if(!w) return null;
  var el=document.getElementById('gmLvlUp');
  if(!el){ el=document.createElement('div'); el.id='gmLvlUp'; el.className='gm-lvlup'; el.innerHTML='<div class="lv-card"></div>'; w.appendChild(el) }
  return el;
}
function showLevelUp(bonus){
  var el=lvlUpEl(); if(!el||!G) return;
  var acc=(G.correct+G.wrong)?Math.round(G.correct/(G.correct+G.wrong)*100):0;
  var third=G.mode==='code'?('<b>'+G.prog.length+'</b><span>buyruq</span>'):('<b>'+fmt(G.left)+'</b><span>vaqt</span>');
  var card=el.querySelector('.lv-card');
  card.innerHTML='<div class="lv-tag">Daraja '+(G.lvl+1)+' yakunlandi</div>'+
    '<div class="lv-ttl">'+LEVELS[G.lvl].name+' <span class="lv-ok">✓</span></div>'+
    '<div class="lv-stats"><div><b>+'+bonus+'</b><span>BIT</span></div><div><b>'+acc+'%</b><span>aniqlik</span></div><div>'+third+'</div></div>'+
    '<button type="button" class="btn p" id="gmLvNext">Keyingi daraja →</button>'+
    '<p class="lv-hint">Shift + Enter</p>';
  el.style.display='flex';
  requestAnimationFrame(function(){ el.classList.add('on') });
  var b=document.getElementById('gmLvNext'); if(b) b.onclick=nextLevel;
  tone(880,.09,'sine',.05);
}
function hideLevelUp(){
  var el=document.getElementById('gmLvlUp');
  if(el){ el.classList.remove('on'); el.style.display='none' }
}
function nextLevel(){
  hideLevelUp();
  if(!G) return;
  var keep=G.xp;
  newLevel(G.lvl+1);
  G.xp=keep; updateHud(); renderProg();
  cancelAnimationFrame(raf); lastT=0; raf=requestAnimationFrame(loop);
}
function showFinal(won){
  var acc=(G.correct+G.wrong)?Math.round(G.correct/(G.correct+G.wrong)*100):0;
  var xp=G.xp, rec=saveBest(xp);
  var lvl= xp>=850?'Verifikator kalibri': xp>=600?'Tahlilchi': xp>=350?'Yangi tadqiqotchi':'Boshlang‘ich daraja';
  G.running=false; hideLevelUp();
  var gmC=$('.gm'); if(gmC) gmC.classList.remove('playing'); document.body.classList.remove('gm-lock');
  $('#gmPlayWrap').style.display='none';
  var fin=$('#gmFinal'); fin.style.display='block';
  fin.innerHTML='<div class="gm-res"><div style="font-size:44px;line-height:1">'+(won?'🏆':'🔋')+'</div><div class="lvl">'+lvl+'</div>'+
  '<p style="color:var(--muted);margin:0">'+xp+' BIT · aniqlik '+acc+'% · daraja '+(G.lvl+1)+'/3'+(G.maxCombo>1?' · eng uzun seriya '+G.maxCombo:'')+'</p>'+
  (rec?'<p class="gm-rec">🏅 Yangi shaxsiy rekord!</p>':'<p class="gm-rec muted">🏅 Rekord: '+bestScore()+' BIT</p>')+
  '<div class="gm-bars"><div class="gm-bar"><span>Dalil aniqligi</span><div class="t"><i style="width:'+acc+'%"></i></div><b>'+acc+'%</b></div>'+
  '<div class="gm-bar"><span>Topilgan kartalar</span><div class="t"><i style="width:'+Math.round(G.done/(LEVELS[G.lvl].cards)*100)+'%"></i></div><b>'+G.done+'</b></div>'+
  '<div class="gm-bar"><span>Batareya</span><div class="t"><i style="width:'+Math.round(Math.max(0,G.battery)/3*100)+'%"></i></div><b>'+Math.max(0,G.battery)+'/3</b></div></div>'+
  '<p class="gm-bitnote">BIT — ma’lumot birligi: har bir tekshirilgan dalil ma’lumot beradi.</p>'+
  '<p style="color:var(--muted);font-size:13.5px">Natija — indikativ. Klubda daraja haqiqiy mini-loyiha va peer-review bilan tasdiqlanadi.</p>'+
  '<div class="gm-row" style="justify-content:center"><button type="button" class="btn p" id="gmAgain">Qayta o‘ynash</button><a class="btn" href="#qoshil">Klubga qo‘shilish</a></div></div>';
  $('#gmAgain').onclick=function(){ fin.style.display='none'; $('#gmPlayWrap').style.display='block'; beginGame() };
  fin.scrollIntoView({behavior:'smooth',block:'center'});
}
function finish(){ sayIt('Mini-loyiha tekshirildi, '+(player?player.name:'tadqiqotchi')+'! Arxivga yetkazdingiz — choraklik ish yopildi.',true); showFinal(true) }

/* ---------- chizish ---------- */
function rr(x,y,w,h,r){ r=Math.min(r,w/2,h/2); ctx.beginPath(); ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r); ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath() }
function shadow(x,y,rx,ry,a){ ctx.save(); ctx.globalAlpha=a===undefined?.18:a; ctx.fillStyle='#0B1526'; ctx.beginPath(); ctx.ellipse(x,y,rx,ry,0,0,7); ctx.fill(); ctx.restore() }
function glow(x,y,r,c,a){ var g=ctx.createRadialGradient(x,y,0,x,y,r); g.addColorStop(0,c); g.addColorStop(1,'rgba(0,0,0,0)'); ctx.save(); ctx.globalAlpha=a===undefined?.35:a; ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,r,0,7); ctx.fill(); ctx.restore() }
function drawCardGlyph(kind,x,y,sz,color){
  ctx.save(); ctx.translate(x,y); ctx.scale(sz,sz); ctx.strokeStyle=color||'#fff'; ctx.fillStyle=color||'#fff'; ctx.lineWidth=1.6; ctx.lineCap='round'; ctx.lineJoin='round';
  if(kind==='doc'){ ctx.strokeRect(-5,-6.5,10,13); ctx.beginPath(); ctx.moveTo(-3,-2.5); ctx.lineTo(3,-2.5); ctx.moveTo(-3,0); ctx.lineTo(3,0); ctx.moveTo(-3,2.5); ctx.lineTo(1,2.5); ctx.stroke() }
  if(kind==='rep'){ ctx.strokeRect(-6,-6,12,12); ctx.fillRect(-4,0,2.4,4); ctx.fillRect(-1-.2,-3,2.4,7); ctx.fillRect(2,2,2.4,2) }
  if(kind==='chat'){ ctx.beginPath(); ctx.moveTo(-6,-2); ctx.quadraticCurveTo(-6,-6,0,-6); ctx.quadraticCurveTo(6,-6,6,-2); ctx.quadraticCurveTo(6,2,0,2); ctx.lineTo(-3,2); ctx.lineTo(-5,5); ctx.lineTo(-4.5,2.2); ctx.closePath(); ctx.stroke() }
  if(kind==='web'){ ctx.beginPath(); ctx.arc(0,0,6,0,7); ctx.stroke(); ctx.beginPath(); ctx.ellipse(0,0,2.6,6,0,0,7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-6,0); ctx.lineTo(6,0); ctx.stroke() }
  if(kind==='mail'){ ctx.strokeRect(-6,-4.5,12,9); ctx.beginPath(); ctx.moveTo(-6,-4.5); ctx.lineTo(0,0.6); ctx.lineTo(6,-4.5); ctx.stroke() }
  if(kind==='blog'){ ctx.beginPath(); ctx.moveTo(-6,-6); ctx.lineTo(6,-6); ctx.lineTo(6,6); ctx.lineTo(-6,6); ctx.closePath(); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-3.4,-2.6); ctx.lineTo(3.4,-2.6); ctx.moveTo(-3.4,0); ctx.lineTo(3.4,0); ctx.moveTo(-3.4,2.6); ctx.lineTo(0.6,2.6); ctx.stroke() }
  ctx.restore();
}
function drawBoard(ts){
  var d=isDark();
  var g=ctx.createLinearGradient(0,0,W,H);
  if(d){ g.addColorStop(0,'#0B1628'); g.addColorStop(.55,'#122239'); g.addColorStop(1,'#0E1B2E') }
  else  { g.addColorStop(0,'#E9F2FE'); g.addColorStop(.55,'#DCE9FA'); g.addColorStop(1,'#CFE0F6') }
  ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
  for(var y=0;y<ROWS;y++) for(var x=0;x<COLS;x++){
    var alt=(x+y)%2;
    ctx.fillStyle=d?(alt?'rgba(255,255,255,.035)':'rgba(255,255,255,.015)')
                   :(alt?'rgba(255,255,255,.55)':'rgba(31,56,100,.045)');
    rr(x*TILE+4,y*TILE+4,TILE-8,TILE-8,12); ctx.fill();
    if(!alt){ ctx.strokeStyle=d?'rgba(255,255,255,.05)':'rgba(31,56,100,.055)'; ctx.lineWidth=1; rr(x*TILE+4,y*TILE+4,TILE-8,TILE-8,12); ctx.stroke() }
  }
  if(G&&G.bg) G.bg.forEach(function(b){
    ctx.globalAlpha=b.a; ctx.fillStyle=d?'#9CC2FF':'#5C86C8';
    if(b.t){ ctx.fillRect(b.x-1.2,b.y-4,2.4,8); ctx.fillRect(b.x-4,b.y-1.2,8,2.4) }
    else { ctx.beginPath(); ctx.arc(b.x,b.y,b.s*1.6,0,7); ctx.fill() }
  });
  ctx.globalAlpha=1;
  var v=ctx.createRadialGradient(W/2,H/2,Math.min(W,H)*.35,W/2,H/2,Math.max(W,H)*.78);
  v.addColorStop(0,'rgba(0,0,0,0)'); v.addColorStop(1,d?'rgba(0,0,0,.38)':'rgba(31,56,100,.14)');
  ctx.fillStyle=v; ctx.fillRect(0,0,W,H);
  /* kod rejimida yo'l ko'rinishi */
  if(G&&G.mode==='code'&&G.preview&&G.preview.length&&!G.ex.on) drawPreview(ts);
}
function drawPreview(ts){
  ctx.save();
  G.preview.forEach(function(p,idx){
    var x=p.x*TILE+30, y=p.y*TILE+30;
    var a=.34+.14*Math.sin(ts/300+idx*.4);
    ctx.globalAlpha=a; ctx.fillStyle=p.block?'#D84B3F':'#2F6FDB';
    ctx.beginPath(); ctx.arc(x,y,p.block?7:4.5,0,7); ctx.fill();
    if(p.pick){ ctx.globalAlpha=Math.min(1,a+.3); ctx.strokeStyle='#2F9E5F'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(x,y,13,0,7); ctx.stroke() }
  });
  ctx.restore();
}
function drawWalls(){
  var d=isDark();
  Object.keys(G.walls).forEach(function(k){
    var p=k.split(','), x=+p[0]*TILE, y=+p[1]*TILE;
    shadow(x+TILE/2,y+TILE-6,TILE*.34,6,.16);
    var g=ctx.createLinearGradient(x,y,x,y+TILE);
    if(d){ g.addColorStop(0,'#4A6A9B'); g.addColorStop(1,'#233650') } else { g.addColorStop(0,'#9FBBE0'); g.addColorStop(1,'#6E90C0') }
    ctx.fillStyle=g; rr(x+5,y+5,TILE-10,TILE-13,10); ctx.fill();
    ctx.fillStyle=d?'rgba(255,255,255,.16)':'rgba(255,255,255,.72)'; rr(x+11,y+10,TILE-22,8,4); ctx.fill();
    ctx.fillStyle=d?'rgba(255,255,255,.08)':'rgba(255,255,255,.35)'; rr(x+11,y+TILE-26,TILE-22,5,2.5); ctx.fill();
    ctx.strokeStyle=d?'rgba(0,0,0,.3)':'rgba(31,56,100,.22)'; ctx.lineWidth=1.4; rr(x+5,y+5,TILE-10,TILE-13,10); ctx.stroke();
  });
}
function drawArchive(ts){
  var ax=(COLS-1)*TILE, ay=(ROWS-1)*TILE, ready=G.done>=G.cards.length;
  var cx=ax+TILE/2, cy=ay+TILE/2-3, pulse=.5+.5*Math.sin(ts/300);
  if(ready){
    glow(cx,cy,44,'rgba(47,158,95,.6)',.35+.25*pulse);
    ctx.strokeStyle='rgba(47,158,95,'+(.3+.45*pulse)+')'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(cx,cy,28+pulse*6,0,7); ctx.stroke();
  }
  shadow(cx,ay+TILE-8,24,6,.2);
  var g=ctx.createLinearGradient(ax,ay,ax,ay+TILE);
  if(ready){ g.addColorStop(0,'#34B26C'); g.addColorStop(1,'#26854F') } else { g.addColorStop(0,'#3C6299'); g.addColorStop(1,'#294A78') }
  ctx.fillStyle=g; rr(ax+7,ay+11,TILE-14,TILE-21,10); ctx.fill();
  ctx.fillStyle='rgba(255,255,255,.85)'; rr(ax+16,ay+22,TILE-32,4,2); ctx.fill(); rr(ax+16,ay+30,TILE-32,4,2); ctx.fill();
  ctx.fillStyle='#fff'; ctx.font='800 9.5px Inter,system-ui,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='alphabetic';
  ctx.fillText('ARXIV',cx,ay+TILE-12);
  ctx.fillStyle=ready?'#BFF3D4':'rgba(255,255,255,.65)'; ctx.font='700 12px Inter,system-ui'; ctx.fillText(ready?'✓':'🔒',cx,ay+24);
}
function drawCards(ts){
  G.cards.forEach(function(c){
    if(c.taken) return;
    var meta=CTYPES.filter(function(t){return t.k===c.type})[0]||CTYPES[0];
    var bob=Math.sin(ts/430+c.ph)*2.4;
    var x=c.x*TILE+30+c.ox, y=c.y*TILE+30+c.oy, cy=y+bob;
    glow(x,cy,34,meta.c,.2+.12*Math.sin(ts/380+c.ph));
    shadow(x,y+31,16,5.5,.26);
    var w=46,h=56;
    ctx.save(); ctx.translate(x-w/2,cy-h/2); ctx.rotate(Math.sin(ts/900+c.ph)*.04);
    /* karta tanasi */
    ctx.fillStyle='#fff'; rr(0,0,w,h,6); ctx.fill();
    /* rangli sarlavha */
    ctx.save(); rr(0,0,w,16,6); ctx.clip(); ctx.fillStyle=meta.c; ctx.fillRect(0,0,w,16); ctx.restore();
    drawCardGlyph(c.type,w/2,8,.72,'#fff');
    /* matn chiziqlari */
    ctx.fillStyle='#C3D5EE'; for(var i=0;i<3;i++){ rr(7,23+i*7,w-14,3,1.5); ctx.fill() }
    /* nom */
    ctx.fillStyle=meta.c; ctx.font='800 8.6px Inter,system-ui'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(meta.n.toUpperCase(),w/2,h-8);
    ctx.strokeStyle='rgba(31,56,100,.12)'; ctx.lineWidth=1; rr(0,0,w,h,6); ctx.stroke();
    ctx.restore();
    /* uchqun */
    var fl=(Math.sin(ts/700+c.ph*2)+1)/2;
    ctx.globalAlpha=.14*fl; ctx.fillStyle='#fff';
    ctx.beginPath(); ctx.arc(x+14,cy-22,2.2,0,7); ctx.fill(); ctx.globalAlpha=1;
  });
}
function pupIcon(k,x,y,c){
  ctx.save(); ctx.translate(x,y); ctx.strokeStyle=c; ctx.fillStyle=c; ctx.lineWidth=2.4; ctx.lineCap='round'; ctx.lineJoin='round';
  if(k==='bat'){ ctx.strokeRect(-6,-9,12,18); ctx.fillStyle=c; ctx.fillRect(-2.6,-11.5,5.2,3); ctx.beginPath(); ctx.moveTo(1.4,-5); ctx.lineTo(-3,1); ctx.lineTo(-.2,1); ctx.lineTo(-1.2,6); ctx.lineTo(3.2,-.4); ctx.lineTo(.4,-.4); ctx.closePath(); ctx.fill() }
  if(k==='time'){ ctx.beginPath(); ctx.arc(0,0,8.2,0,7); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-5); ctx.moveTo(0,0); ctx.lineTo(3.6,1.8); ctx.stroke() }
  if(k==='shield'){ ctx.beginPath(); ctx.moveTo(0,-9); ctx.lineTo(7,-5.6); ctx.lineTo(7,1.4); ctx.quadraticCurveTo(7,7.6,0,9.6); ctx.quadraticCurveTo(-7,7.6,-7,1.4); ctx.lineTo(-7,-5.6); ctx.closePath(); ctx.stroke() }
  if(k==='magnet'){ ctx.lineWidth=3.2; ctx.beginPath(); ctx.arc(0,-1,6,-Math.PI*.92,-Math.PI*.08); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-6,-1); ctx.lineTo(-6,7); ctx.moveTo(6,-1); ctx.lineTo(6,7); ctx.stroke() }
  ctx.restore();
}
function drawPups(ts){
  G.pups.forEach(function(u){
    if(u.taken) return;
    var meta=PUPS.filter(function(p){return p.k===u.type})[0];
    var x=u.x*TILE+30, y=u.y*TILE+30+Math.sin(ts/380+u.ph)*3;
    glow(x,y,26,meta.c,.16+.1*Math.sin(ts/300+u.ph));
    shadow(x,y+22,10,3.5,.14);
    ctx.fillStyle=meta.c; ctx.beginPath(); ctx.arc(x,y,15,0,7); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.22)'; ctx.beginPath(); ctx.arc(x-4,y-5,6,0,7); ctx.fill();
    pupIcon(u.type,x,y,'#fff');
  });
}
function drawChasers(ts){
  G.chasers.forEach(function(c){
    var t=ts/1000, wob=Math.sin(t*7+c.ph)*2, x=c.x, y=c.y+wob;
    if(c.alert) glow(x,y,40,'rgba(216,75,63,.55)',.18+.12*Math.sin(t*8));
    shadow(x,y+15,13,4,.2);
    ctx.save(); ctx.translate(x,y);
    ctx.strokeStyle='#D84B3F'; ctx.lineWidth=2.2; ctx.lineCap='round';
    for(var s=-1;s<=1;s+=2){ for(var l=0;l<3;l++){
        ctx.beginPath(); ctx.moveTo(s*9,2+l*3); ctx.lineTo(s*(16+Math.sin(t*9+l)*2),2+l*3+4); ctx.stroke(); } }
    var g=ctx.createRadialGradient(-4,-5,2,0,0,16); g.addColorStop(0,'#F2725F'); g.addColorStop(1,'#C3372C');
    ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(0,0,14,12.5,0,0,7); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,.18)'; ctx.beginPath(); ctx.arc(-6,5,3,0,7); ctx.arc(7,4,2.4,0,7); ctx.fill();
    ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(-5,-3,4.2,0,7); ctx.arc(5,-3,4.2,0,7); ctx.fill();
    var ex=Math.max(-1.6,Math.min(1.6,(G.rx-x)/150)), ey=Math.max(-1.3,Math.min(1.3,(G.ry-y)/150));
    ctx.fillStyle='#3A1210'; ctx.beginPath(); ctx.arc(-5+ex*1.8,-3+ey*1.5,1.9,0,7); ctx.arc(5+ex*1.8,-3+ey*1.5,1.9,0,7); ctx.fill();
    ctx.strokeStyle='#3A1210'; ctx.lineWidth=1.6; ctx.beginPath(); ctx.arc(0,4,3.4,.15*Math.PI,.85*Math.PI); ctx.stroke();
    ctx.restore();
    ctx.fillStyle='rgba(216,75,63,.94)'; rr(x-20,y-33,40,13,6.5); ctx.fill();
    ctx.fillStyle='#fff'; ctx.font='800 8.5px Inter,system-ui'; ctx.textAlign='center'; ctx.textBaseline='alphabetic';
    ctx.fillText('XATO',x,y-23.6);
  });
}
function drawBayt(ts){
  var b=G.bayt, t=ts/1000;
  var hop=Math.abs(Math.sin(t*2.6+b.ph))*4, x=b.x, y=b.y-hop;
  glow(x,y,22,'rgba(23,180,170,.5)',.2+.1*Math.sin(t*3));
  shadow(b.x,b.y+14,9,3,.14);
  ctx.save(); ctx.translate(x,y);
  ctx.fillStyle='rgba(23,180,170,.35)';
  ctx.beginPath(); ctx.ellipse(-9,1,5,3.4,-.5,0,7); ctx.fill();
  ctx.beginPath(); ctx.ellipse(9,1,5,3.4,.5,0,7); ctx.fill();
  var g=ctx.createLinearGradient(0,-12,0,12); g.addColorStop(0,'#3FE0CD'); g.addColorStop(1,'#14A99B');
  ctx.fillStyle=g; ctx.beginPath(); ctx.ellipse(0,0,10.5,9.5,0,0,7); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.6)'; ctx.lineWidth=1; ctx.stroke();
  var blink=(Math.sin(t*1.7+b.ph)>0.96)?0.25:1;
  ctx.fillStyle='#0B3B38';
  ctx.beginPath(); ctx.ellipse(-3.6,-1.6,2,2*blink,0,0,7); ctx.ellipse(3.6,-1.6,2,2*blink,0,0,7); ctx.fill();
  ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(-4.2,-2.3,.7,0,7); ctx.arc(3,-2.3,.7,0,7); ctx.fill();
  if(b.mood>0){ ctx.strokeStyle='#0B3B38'; ctx.beginPath(); ctx.arc(0,2.6,2.4,.15*Math.PI,.85*Math.PI); ctx.stroke() }
  ctx.strokeStyle='#14A99B'; ctx.lineWidth=1.6; ctx.beginPath(); ctx.moveTo(0,-9.5); ctx.lineTo(0,-14); ctx.stroke();
  ctx.fillStyle='#FFD166'; ctx.beginPath(); ctx.arc(0,-15.4,2.2,0,7); ctx.fill();
  ctx.restore();
}
function drawRobot(ts){
  var x=G.rx, y=G.ry, tilt=Math.max(-.12,Math.min(.12, G.vx*.10)), bob=Math.sin(ts/260)*1.4;
  shadow(x,y+18,15,5,.2);
  glow(x+(G.vx*8), y, 46, isDark()?'rgba(120,170,255,.35)':'rgba(255,255,255,.55)', .26);
  if(G.inv>0){ ctx.globalAlpha=(Math.sin(ts/60)+1)/2*.6+.4 }
  if(G.shieldT>0){
    var a=.35+.25*Math.sin(ts/140);
    ctx.strokeStyle='rgba(122,90,248,'+a+')'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(x,y,30,0,7); ctx.stroke();
    glow(x,y,34,'rgba(122,90,248,.5)',.28);
  }
  if(G.magnetT>0){
    ctx.strokeStyle='rgba(224,138,30,'+(.3+.2*Math.sin(ts/180))+')'; ctx.lineWidth=2; ctx.setLineDash([5,6]);
    ctx.beginPath(); ctx.arc(x,y,44,0,7); ctx.stroke(); ctx.setLineDash([]);
  }
  /* yo'nalish ko'rsatkichi (kod rejimi) */
  if(G.mode==='code'){
    var ang=(G.faceVis*90-90)*Math.PI/180;
    ctx.save(); ctx.translate(x,y+22); ctx.rotate(ang);
    ctx.fillStyle='rgba(47,111,219,.85)'; ctx.beginPath(); ctx.moveTo(9,0); ctx.lineTo(-4,-5); ctx.lineTo(-1,0); ctx.lineTo(-4,5); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  ctx.save(); ctx.translate(x,y+bob); ctx.rotate(tilt); ctx.scale(1.12,1.12);
  ctx.fillStyle='#16305A'; rr(-14,13,28,7,3.5); ctx.fill();
  var g=ctx.createLinearGradient(0,-18,0,16); g.addColorStop(0,'#4C8CF0'); g.addColorStop(1,'#2559B8');
  ctx.fillStyle=g; rr(-17,-16,34,32,10); ctx.fill();
  ctx.strokeStyle='rgba(255,255,255,.5)'; ctx.lineWidth=1.2; rr(-17,-16,34,32,10); ctx.stroke();
  ctx.fillStyle='#EAF3FF'; rr(-12,-11,24,19,6.5); ctx.fill();
  var look = G.mode==='code'? DIRS[G.face] : [G.vx,G.vy];
  var ex=Math.max(-2.2,Math.min(2.2,look[0]*2.4)), ey=Math.max(-1.8,Math.min(1.8,look[1]*2));
  ctx.fillStyle='#16305A'; ctx.beginPath(); ctx.arc(-5+ex,-4+ey,2.9,0,7); ctx.arc(5+ex,-4+ey,2.9,0,7); ctx.fill();
  ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(-4+ex,-5+ey,1,0,7); ctx.arc(6+ex,-5+ey,1,0,7); ctx.fill();
  ctx.strokeStyle='#16305A'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(ex*.6,2+ey*.4,3.4,.12*Math.PI,.88*Math.PI); ctx.stroke();
  ctx.strokeStyle='#2F6FDB'; ctx.lineWidth=2.6; ctx.beginPath(); ctx.moveTo(0,-16); ctx.lineTo(0,-23); ctx.stroke();
  var blink=.55+.45*Math.sin(ts/230);
  ctx.fillStyle='rgba(77,163,255,'+blink+')'; ctx.beginPath(); ctx.arc(0,-26,3.6,0,7); ctx.fill();
  ctx.restore();
  ctx.globalAlpha=1;
}
function drawCompass(ts){
  if(G.mode==='code') return;
  var tx=0, ty=0;
  if(G.done<G.cards.length){
    var best=1e9;
    G.cards.forEach(function(c){ if(c.taken) return; var d=Math.abs(c.x*TILE+30-G.rx)+Math.abs(c.y*TILE+30-G.ry); if(d<best){best=d; tx=c.x*TILE+30; ty=c.y*TILE+30} });
  } else { tx=(COLS-1)*TILE+30; ty=(ROWS-1)*TILE+30 }
  var dx=tx-G.rx, dy=ty-G.ry, d=Math.sqrt(dx*dx+dy*dy);
  if(d<70) return;
  var ang=Math.atan2(dy,dx), a=.55+.25*Math.sin(ts/250);
  var cx=G.rx+Math.cos(ang)*38, cy=G.ry+Math.sin(ang)*38;
  ctx.save(); ctx.translate(cx,cy); ctx.rotate(ang); ctx.globalAlpha=a;
  ctx.fillStyle=G.done<G.cards.length?'#2F6FDB':'#2F9E5F';
  ctx.beginPath(); ctx.moveTo(9,0); ctx.lineTo(-6,-6); ctx.lineTo(-3,0); ctx.lineTo(-6,6); ctx.closePath(); ctx.fill();
  ctx.restore(); ctx.globalAlpha=1;
}
function drawFX(){
  FX.p.forEach(function(p){ ctx.globalAlpha=Math.max(0,p.life/p.max); ctx.fillStyle=p.c; ctx.beginPath(); ctx.arc(p.x,p.y,p.s,0,7); ctx.fill() });
  ctx.globalAlpha=1;
  FX.t.forEach(function(t){ ctx.globalAlpha=Math.min(1,t.life*1.6); ctx.fillStyle=t.c; ctx.font='800 15px Inter,system-ui'; ctx.textAlign='center'; ctx.fillText(t.t,t.x,t.y) });
  ctx.globalAlpha=1;
}
function drawIntro(ts){
  if(G.intro<=0) return;
  var k=Math.min(1,G.intro/.35), a=Math.min(1,k);
  ctx.save(); ctx.globalAlpha=a;
  ctx.fillStyle='rgba(8,15,28,.55)'; ctx.fillRect(0,0,W,H);
  ctx.fillStyle='#fff'; ctx.textAlign='center';
  ctx.font='800 30px Inter,system-ui'; ctx.fillText((G.lvl+1)+'-daraja', W/2, H/2-10);
  ctx.font='600 17px Inter,system-ui'; ctx.globalAlpha=a*.9; ctx.fillText(LEVELS[G.lvl].name, W/2, H/2+20);
  ctx.font='600 13px Inter,system-ui'; ctx.globalAlpha=a*.7;
  ctx.fillText(G.mode==='code'?'Buyruqlarni yozing — ▶ bilan ishga tushiring':'Strelkalar bilan yuring — XATO quvlaydi', W/2, H/2+46);
  ctx.restore();
}
function draw(ts){
  if(!ctx||!G) return;
  fit();
  var sx=0, sy=0;
  if(FX.shake>0){ var s=FX.shake*9; sx=(Math.random()-.5)*s; sy=(Math.random()-.5)*s }
  ctx.save(); ctx.translate(sx,sy);
  drawBoard(ts); drawWalls(); drawArchive(ts); drawCards(ts); drawPups(ts); drawChasers(ts); drawBayt(ts); drawRobot(ts); drawCompass(ts); drawFX();
  if(drag){ var pr=10+4*Math.sin(ts/180); ctx.strokeStyle='rgba(47,111,219,.55)'; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(drag.x,drag.y,pr,0,7); ctx.stroke();
    ctx.fillStyle='rgba(47,111,219,.18)'; ctx.beginPath(); ctx.arc(drag.x,drag.y,pr-3,0,7); ctx.fill() }
  drawIntro(ts);
  ctx.restore();
}

/* ---------- kod paneli ---------- */
function renderProg(){
  var el=$('#gcProg'); if(!el) return;
  if(!G){ el.innerHTML=''; return }
  if(!G.prog.length){ el.innerHTML='<span class="gc-empty">Buyruqlar shu yerda ko‘rinadi — ▲ ◀ ▶ 📥</span>'; }
  else {
    el.innerHTML=G.prog.map(function(c,i){
      return '<button type="button" class="gc-chip" data-i="'+i+'" title="Olib tashlash">'+CMDS[c].ic+'<span>'+CMDS[c].n+'</span></button>';
    }).join('');
  }
  var run=$('#gcRun'), cnt=$('#gcCount');
  if(run) run.classList.toggle('busy',!!(G.ex&&G.ex.on));
  if(cnt) cnt.textContent=G.prog.length+' / '+LEVELS[G.lvl].slots+' buyruq';
}
function markProg(i){
  var el=$('#gcProg'); if(!el) return;
  Array.prototype.forEach.call(el.children,function(ch,k){ ch.classList.toggle('on',k===i) });
}
function computePreview(){
  if(!G) return;
  var out=[], x=G.tx, y=G.ty, f=G.face;
  G.prog.forEach(function(c){
    if(c==='F'){ var d=DIRS[f], nx=x+d[0], ny=y+d[1];
      if(nx<0||ny<0||nx>=COLS||ny>=ROWS||G.walls[nx+','+ny]){ out.push({x:Math.max(0,Math.min(COLS-1,nx)),y:Math.max(0,Math.min(ROWS-1,ny)),block:true}); return }
      x=nx; y=ny; out.push({x:x,y:y}) }
    else if(c==='L') f=(f+3)%4;
    else if(c==='R') f=(f+1)%4;
    else if(c==='P') out.push({x:x,y:y,pick:true});
  });
  G.preview=out;
}
function addCmd(c){
  if(!G||G.mode!=='code'||G.ex.on) return;
  if(G.prog.length>=LEVELS[G.lvl].slots){ sayIt('Buyruq limiti tugadi — dasturni tozalang yoki ishga tushiring.',false); tone(200,.1,'square',.03); return }
  G.prog.push(c); computePreview(); renderProg(); tone(640,.04,'square',.025);
}
function undoCmd(){ if(!G||G.ex.on) return; G.prog.pop(); computePreview(); renderProg(); tone(320,.04,'square',.02) }
function clearProg(){ if(!G||G.ex.on) return; G.prog=[]; computePreview(); renderProg(); tone(260,.08,'square',.025) }
function setMode(m){
  MODE=m; try{localStorage.setItem('rt2_mode',m)}catch(e){}
  if(G){ var keep=G.xp; newLevel(G.lvl); G.xp=keep; updateHud(); renderProg() }
  setModeUI();
  sayIt(m==='code'?'Kod rejimi: buyruqlarni yozib, ▶ bilan ishga tushiring.':'Erkin rejim: strelkalar yoki sudrash bilan yuring.',true);
}
function setModeUI(){
  var gm=$('.gm'); if(gm){ gm.classList.toggle('code-mode',MODE==='code') }
  $$('#gcModes button').forEach(function(b){ b.classList.toggle('on',b.getAttribute('data-m')===MODE) });
  var hint=$('#gmcHint');
  if(hint) hint.innerHTML = MODE==='code'
    ? 'Kod rejimi: <b>↑</b> oldinga · <b>←</b>/<b>→</b> burilish · <b>↓</b> dalil ol · <b>Enter</b> ishga tushirish · <b>⌫</b> o‘chirish. <b>Shift + Enter</b> — keyingi daraja.'
    : 'Erkin rejim: strelkalar/WASD, sichqoncha yoki barmoq bilan sudrang. XATO quvlaydi — tegmang! <b>Shift + Enter</b> — keyingi daraja.';
}
function bindDrag(){
  var el=$('#gmCanvas'); if(!el) return;
  function loc(e){ var r=el.getBoundingClientRect(); return {x:(e.clientX-r.left)*W/r.width,y:(e.clientY-r.top)*H/r.height} }
  el.addEventListener('pointerdown',function(e){ if(!G||!G.running||G.paused||G.mode!=='free') return; drag=loc(e); try{el.setPointerCapture(e.pointerId)}catch(err){} e.preventDefault() },{passive:false});
  el.addEventListener('pointermove',function(e){ if(!drag) return; drag=loc(e); e.preventDefault() },{passive:false});
  ['pointerup','pointercancel','pointerleave'].forEach(function(t){ el.addEventListener(t,function(){ drag=null }) });
  el.addEventListener('contextmenu',function(e){ e.preventDefault() });
}
function initSndBtn(){
  var b=$('#gmSnd'); if(!b) return;
  function paint(){ b.textContent=SND?'🔊':'🔈'; b.setAttribute('aria-label',SND?'Ovozni o‘chirish':'Ovozni yoqish'); b.classList.toggle('off',!SND) }
  paint();
  b.onclick=function(){ SND=!SND; try{localStorage.setItem('rt2_snd',SND?'1':'0')}catch(e){} paint(); if(SND) tone(880,.08,'sine',.04) };
}
function initUI(){
  $$('#gcPal [data-c]').forEach(function(b){ b.onclick=function(){ addCmd(b.getAttribute('data-c')) } });
  var run=$('#gcRun'); if(run) run.onclick=function(){ if(G&&G.ex.on) stopRun(); else runProgram() };
  var un=$('#gcUndo'); if(un) un.onclick=undoCmd;
  var cl=$('#gcClear'); if(cl) cl.onclick=clearProg;
  var pr=$('#gcProg'); if(pr) pr.addEventListener('click',function(e){ var ch=e.target.closest?e.target.closest('.gc-chip'):null; if(!ch) return;
    var i=+ch.getAttribute('data-i'); if(G&&!G.ex.on&&!isNaN(i)){ G.prog.splice(i,1); computePreview(); renderProg() } });
  $$('#gcModes button').forEach(function(b){ b.onclick=function(){ setMode(b.getAttribute('data-m')) } });
  bindDrag(); initSndBtn();
  var exBtn=$('#gmExit'); if(exBtn) exBtn.onclick=exitGame;
  setModeUI();
}

/* ---------- boshqaruv ---------- */
var KEYMAP={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',a:'left',d:'right',w:'up',s:'down',A:'left',D:'right',W:'up',S:'down'};
document.addEventListener('keydown',function(e){
  if(e.key==='Enter'&&e.shiftKey){
    var lv=document.getElementById('gmLvlUp');
    var fin=$('#gmFinal');
    if(lv&&lv.style.display!=='none'){ e.preventDefault(); nextLevel(); return }
    if(fin&&fin.style.display!=='none'){ e.preventDefault(); var ag=$('#gmAgain'); if(ag) ag.click(); return }
  }
  if(!G||!G.running||G.paused) return;
  if(G.mode==='code'){
    if(e.key==='Enter'){ e.preventDefault(); if(G.ex.on) stopRun(); else runProgram(); return }
    if(e.key==='Backspace'){ e.preventDefault(); undoCmd(); return }
    if(e.key==='Escape'){ e.preventDefault(); if(G.ex.on) stopRun(); return }
    if(e.key==='ArrowUp'){ e.preventDefault(); addCmd('F'); return }
    if(e.key==='ArrowLeft'){ e.preventDefault(); addCmd('L'); return }
    if(e.key==='ArrowRight'){ e.preventDefault(); addCmd('R'); return }
    if(e.key==='ArrowDown'||e.key===' '){ e.preventDefault(); addCmd('P'); return }
    return;
  }
  if(e.key==='Escape'&&G.ex.on){ stopRun(); return }
  var k=KEYMAP[e.key]; if(k){keys[k]=true; e.preventDefault()}
});
document.addEventListener('keyup',function(e){ var k=KEYMAP[e.key]; if(k)keys[k]=false });
function bindPad(){
  $$('#gmPad [data-k]').forEach(function(b){
    var k=b.getAttribute('data-k'), t0=0;
    var on=function(e){ e.preventDefault(); t0=performance.now(); keys[k]=true };
    var off=function(){ if(!t0)return; var el=performance.now()-t0; t0=0;
      if(el<220){ var rest=220-el; setTimeout(function(){keys[k]=false},rest) } else keys[k]=false };
    b.addEventListener('pointerdown',on); b.addEventListener('pointerup',off);
    b.addEventListener('pointerleave',off); b.addEventListener('pointercancel',off);
    b.addEventListener('touchstart',function(e){e.preventDefault();on(e)},{passive:false});
    b.addEventListener('touchend',off);
    b.addEventListener('contextmenu',function(e){e.preventDefault()});
  });
}
function beginGame(){
  startBtn.style.display='none'; stage.style.display='block';
  $('#gmPlayWrap').style.display='block'; $('#gmFinal').style.display='none';
  var gmCard=$('.gm'); if(gmCard) gmCard.classList.add('playing'); document.body.classList.add('gm-lock');
  cv=$('#gmCanvas'); ctx=cv.getContext('2d'); fit();
  G=null; newLevel(0); G.xp=0; updateHud(); FX.p=[]; FX.t=[]; FX.shake=0; renderProg();
  try{ if(AC&&AC.state==='suspended') AC.resume() }catch(e){}
  cancelAnimationFrame(raf); lastT=0; raf=requestAnimationFrame(loop);
  sayIt('Ketdik, '+(player?player.name:'tadqiqotchi')+'! '+(MODE==='code'
    ?'Kod rejimi: buyruqlarni yozing (▲ ◀ ▶ 📥) va ▶ Ishga tushirishni bosing.'
    :'Robini boshqaring: strelkalar yoki WASD. Kartalarni yig‘ing, ARXIVga yeting.'));
  var gmEl=$('.gm'); (gmEl||stage).scrollIntoView({behavior:'smooth',block:'start'});
}
function exitGame(){
  if(G){ G.running=false; G.paused=false; G.ex.on=false }
  cancelAnimationFrame(raf); hideLevelUp(); drag=null;
  var gmCard=$('.gm'); if(gmCard) gmCard.classList.remove('playing');
  document.body.classList.remove('gm-lock');
  $('#gmPlayWrap').style.display='none';
  startBtn.style.display='inline-flex';
}

