const products = [
 {id:'steam',name:'Compte Steam',category:'gaming',description:'Votre prochaine aventure.',variants:[['Sélection découverte',1900],['Sélection complète',3900]]},
 {id:'steam-gift',name:'Carte cadeau Steam',category:'gaming',description:'Le choix, c’est aussi un cadeau.',variants:[['Crédit découverte',1800],['Crédit supérieur',4200]]},
 {id:'xbox',name:'Xbox Game Pass',category:'gaming',description:'De quoi changer de jeu.',variants:[['1 mois',1600],['3 mois',4400]]},
 {id:'netflix',name:'Netflix',category:'streaming',description:'Encore un épisode ?',variants:[['1 mois',900],['3 mois',2500]]},
 {id:'spotify',name:'Spotify Premium',category:'streaming',description:'La bande-son de vos journées.',variants:[['1 mois',600],['3 mois',1600]]},
 {id:'exitlag',name:'ExitLag',category:'gaming',description:'Votre connexion entre en jeu.',variants:[['1 mois',1200],['3 mois',3200]]}
];
const money = value => new Intl.NumberFormat('fr-DZ').format(value)+' DZD';
let category='all', cart=[];
const grid=document.querySelector('#products');
function renderProducts(){
 const query=document.querySelector('#search').value.trim().toLocaleLowerCase('fr');
 const list=products.filter(p=>(category==='all'||p.category===category)&&p.name.toLocaleLowerCase('fr').includes(query));
 grid.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image image-${p.id}"><img src="../assets/products/${p.id}.jpg" alt="${p.name}" loading="lazy"><span class="product-tag">${p.category==='gaming'?'Gaming':'Streaming'}</span></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.description}</p></div><div class="product-price" id="price-${p.id}">${money(p.variants[0][1])}</div></div><div class="product-select"><select aria-label="Formule ${p.name}" data-variant="${p.id}">${p.variants.map(([label,price],i)=>`<option value="${i}">${label}</option>`).join('')}</select><button class="add-button" data-add="${p.id}" aria-label="Ajouter ${p.name} au panier">+</button></div></article>`).join('');
 document.querySelector('#empty').hidden=Boolean(list.length);
}
renderProducts();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 category=button.dataset.filter;
 document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',b===button)});
 renderProducts();
}));
document.querySelector('#search').addEventListener('input',renderProducts);
grid.addEventListener('change',e=>{if(!e.target.matches('[data-variant]'))return;const p=products.find(p=>p.id===e.target.dataset.variant);document.querySelector(`#price-${p.id}`).textContent=money(p.variants[+e.target.value][1]);});
let toastTimer;
function toast(message){const el=document.querySelector('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2800)}
grid.addEventListener('click',e=>{
 const button=e.target.closest('[data-add]');if(!button)return;
 const p=products.find(p=>p.id===button.dataset.add),variant=+grid.querySelector(`[data-variant="${p.id}"]`).value;
 const existing=cart.find(item=>item.id===p.id&&item.variant===variant);
 if(existing)existing.qty++;else cart.push({id:p.id,variant,qty:1});
 renderCart();toast(`${p.name} ajouté à votre sélection`);
});
const dialog=document.querySelector('#cart');
function renderCart(){
 document.querySelector('#cart-count').textContent=cart.reduce((sum,item)=>sum+item.qty,0);
 document.querySelector('#cart-items').innerHTML=cart.length?cart.map((item,i)=>{const p=products.find(p=>p.id===item.id),v=p.variants[item.variant];return `<article class="cart-line"><img src="../assets/products/${p.id}.jpg" alt=""><div><h3>${p.name}</h3><p>${v[0]} · Quantité ${item.qty}</p><strong>${money(v[1]*item.qty)}</strong></div><button data-remove="${i}" aria-label="Retirer ${p.name}">Retirer</button></article>`}).join(''):'<p class="cart-empty">Votre prochain kif se fait attendre.<br>Explorez la collection pour commencer votre sélection.</p><button class="button primary" data-close>Découvrir les produits</button>';
 document.querySelector('#cart-total').textContent=money(cart.reduce((sum,item)=>sum+products.find(p=>p.id===item.id).variants[item.variant][1]*item.qty,0));
 document.querySelector('#cart-summary').hidden=!cart.length;
 document.querySelector('#checkout').hidden=true;
 document.querySelector('#payment-result').textContent='';
}
renderCart();
document.querySelectorAll('[data-cart]').forEach(button=>button.addEventListener('click',()=>{dialog.showModal();document.body.style.overflow='hidden'}));
function closeCart(){dialog.close();document.body.style.overflow=''}
dialog.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeCart();const remove=e.target.closest('[data-remove]');if(remove){cart.splice(+remove.dataset.remove,1);renderCart()}});
dialog.addEventListener('close',()=>document.body.style.overflow='');
dialog.addEventListener('click',e=>{if(e.target===dialog&&e.clientX<dialog.getBoundingClientRect().left)closeCart()});
document.querySelector('#checkout-button').addEventListener('click',()=>{document.querySelector('#checkout').hidden=false;document.querySelector('#checkout input').focus();document.querySelector('#checkout').scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})});
document.querySelectorAll('[name="payment"]').forEach(input=>input.addEventListener('change',()=>{document.querySelector('#payment-description').textContent=input.value==='chargily'?'Vous seriez redirigé vers la page de paiement sécurisée de Chargily.':'Vous recevriez les coordonnées de virement CCP / BaridiMob, puis transmettriez votre justificatif pour validation manuelle.';document.querySelector('#payment-result').textContent=''}));
document.querySelector('#demo-pay').addEventListener('click',()=>{const manual=document.querySelector('[name="payment"]:checked').value==='manual';document.querySelector('#payment-result').textContent=manual?'Simulation terminée : étape de virement manuel présentée. Aucun virement à effectuer et aucune commande créée.':'Simulation terminée : étape Chargily présentée. Aucune carte sollicitée, aucun débit et aucune commande créée.';});
const menu=document.querySelector('#menu');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');document.querySelector('#navigation').classList.toggle('open',open)});
document.querySelectorAll('#navigation a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');document.querySelector('#navigation').classList.remove('open')}));
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
async function entrance(){try{const{animate,stagger}=await import('../assets/vendor/motion.js');if(!reduced.matches){animate('.hero-copy h1',{transform:['translateY(25px)','translateY(0px)'],filter:['blur(5px)','blur(0px)'],opacity:[.6,1]},{duration:.9,ease:[.16,1,.3,1]});animate('.hero-copy > p, .hero-copy > .button, .hero-note',{transform:['translateY(16px)','translateY(0px)'],opacity:[.5,1]},{duration:.7,delay:stagger(.1,{startDelay:.15}),ease:[.16,1,.3,1]});animate('.hero-display',{transform:['rotate(3deg) scale(.96)','rotate(0deg) scale(1)']},{duration:1.2,ease:[.16,1,.3,1]})}}catch(error){console.info('Static layout available.',error.message)}}entrance();
async function buildScene(){
 const stage=document.querySelector('#three-stage'),pause=document.querySelector('#pause-scene');
 try{
 const THREE=await import('../assets/vendor/three.module.js');
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(34,1,.1,100);camera.position.set(0,.2,8.5);camera.lookAt(0,0,0);
 scene.add(new THREE.AmbientLight(0xffffff,2.2));const light=new THREE.DirectionalLight(0xfff9e7,3.5);light.position.set(-3,5,7);scene.add(light);
 const group=new THREE.Group();scene.add(group);
 const cardSpecs=[{id:'spotify',x:-1.15,y:-.04,z:-.4,rotation:-.27,color:'#183e28',title:'Une bonne playlist.'},{id:'netflix',x:1.12,y:.04,z:-.45,rotation:.26,color:'#22211f',title:'Encore un épisode.'},{id:'steam',x:0,y:.1,z:.4,rotation:-.09,color:'#21394a',title:'La partie commence.'}];
 const textures=await Promise.all(cardSpecs.map(async spec=>{
  const img=new Image();img.src=`../assets/products/${spec.id}.jpg`;await img.decode();
  const canvas=document.createElement('canvas');canvas.width=640;canvas.height=860;const ctx=canvas.getContext('2d');
  ctx.fillStyle=spec.color;ctx.fillRect(0,0,640,860);
  const imageHeight=610,scale=Math.min(640/img.width,imageHeight/img.height);ctx.drawImage(img,(640-img.width*scale)/2,(imageHeight-img.height*scale)/2+35,img.width*scale,img.height*scale);
  ctx.fillStyle='#fffdf3';ctx.font='500 28px sans-serif';ctx.fillText(spec.title,40,730);ctx.font='700 46px sans-serif';ctx.fillText('kif.',40,809);ctx.font='20px sans-serif';ctx.fillText('LE PLAISIR DIGITAL',370,803);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();return texture;
 }));
 cardSpecs.forEach((spec,i)=>{
 const edge=new THREE.MeshStandardMaterial({color:spec.color,roughness:.5,metalness:.12}),front=new THREE.MeshStandardMaterial({map:textures[i],roughness:.73,metalness:0});
 const card=new THREE.Mesh(new THREE.BoxGeometry(1.73,2.33,.045),[edge,edge,edge,edge,front,front]);card.position.set(spec.x,spec.y,spec.z);card.rotation.set(.05,spec.x*.14,spec.rotation);group.add(card);
 });
 group.rotation.x=-.08;group.position.y=.08;group.scale.setScalar(1.18);
 stage.append(renderer.domElement);stage.querySelector('.fallback-deck').hidden=true;
 const resize=()=>{const w=stage.clientWidth,h=stage.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(stage);resize();
 let paused=reduced.matches,visible=true,pointerX=0,pointerY=0,time=0,last=performance.now();pause.setAttribute('aria-pressed',paused);pause.setAttribute('aria-label',paused?'Animer les cartes':'Mettre l’animation en pause');
 pause.addEventListener('click',()=>{paused=!paused;pause.setAttribute('aria-pressed',paused);pause.setAttribute('aria-label',paused?'Animer les cartes':'Mettre l’animation en pause');pause.innerHTML=paused?'<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7Z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>'});
 stage.addEventListener('pointermove',e=>{const rect=stage.getBoundingClientRect();pointerX=((e.clientX-rect.left)/rect.width-.5)*.2;pointerY=((e.clientY-rect.top)/rect.height-.5)*.12});stage.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0});
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting}).observe(stage);
 reduced.addEventListener('change',()=>{paused=reduced.matches;pause.setAttribute('aria-pressed',paused)});
 function frame(now){requestAnimationFrame(frame);const dt=Math.min(now-last,40);last=now;if(!visible||document.hidden)return;if(!paused){time+=dt/1000;group.rotation.y=Math.sin(time*.55)*.18+pointerX;group.rotation.x=-.08+pointerY;group.position.y=.08+Math.sin(time*.9)*.07;group.children.forEach((card,i)=>{card.position.y=cardSpecs[i].y+Math.sin(time*.8+i)*.035})}renderer.render(scene,camera)}requestAnimationFrame(frame);
 }catch(error){pause.hidden=true;console.info('Product card fallback displayed.',error.message)}
}
buildScene();
