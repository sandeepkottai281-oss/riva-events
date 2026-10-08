'use strict';
const c = window.RIVA;
const $ = id => document.getElementById(id);
const money = n => new Intl.NumberFormat('en-IN', {style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
const element = (tag, text, cls) => { const el=document.createElement(tag); if(text!==undefined) el.textContent=text; if(cls) el.className=cls; return el; };
// Content is inserted as text, never interpreted as HTML.
function safeLink(value) { try { const u=new URL(value); return u.protocol==='https:' ? u.href : ''; } catch { return ''; } }
function photoPath(value) { if(typeof value!=='string'||!value) return ''; if(value.startsWith('assets/')) return value; return safeLink(value); }
const number = /^\d{8,15}$/.test(c.whatsappNumber) ? c.whatsappNumber : '';
const waLink = text => 'https://wa.me/'+number+'?text='+encodeURIComponent(text);
$('location-label').textContent=c.location;
$('headline').textContent=c.headline;
$('tagline').textContent=c.tagline;
$('introduction').textContent=c.introduction;
$('duration').textContent=c.duration;
$('tariff-note').textContent=c.tariffNote;
$('year').textContent=new Date().getFullYear();
for(const id of ['maps-link','maps-secondary']) $(id).href=safeLink(c.mapsUrl)||'https://maps.google.com/';
if(photoPath(c.logo)){ $('logo').src=photoPath(c.logo); $('logo').hidden=false; $('brand-text').hidden=true; $('logo').onerror=()=>{$('logo').hidden=true;$('brand-text').hidden=false;}; }
if(photoPath(c.heroPhoto)){
  const img=$('hero-image'); img.alt=c.heroAlt; img.style.objectPosition=c.heroPosition||'50% 50%'; img.onload=()=>{img.hidden=false;$('hero-type').hidden=true;}; img.onerror=()=>{img.hidden=true;$('hero-type').hidden=false;}; img.src=photoPath(c.heroPhoto);
}
const dialog=$('lightbox');
dialog.querySelector('.close').onclick=()=>dialog.close();
dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close();});
for(const photo of c.photos){
  const src=photoPath(photo.src); if(!src) continue;
  const button=element('button'); button.type='button'; button.setAttribute('aria-label','View photo: '+photo.alt);
  const img=element('img'); img.alt=photo.alt||''; img.loading='lazy'; img.decoding='async'; img.src=src; img.style.objectPosition=photo.position||'50% 50%';
  img.onerror=()=>{button.remove(); if(!$('gallery').children.length) $('gallery-section').hidden=true;};
  button.append(img,element('span',photo.caption||photo.alt));
  button.onclick=()=>{$('lightbox-image').src=src;$('lightbox-image').alt=photo.alt||'';$('lightbox-caption').textContent=photo.caption||photo.alt;dialog.showModal();};
  $('gallery').append(button);
}
$('gallery-section').hidden=!$('gallery').children.length;
for(const item of c.packages){
  const card=element('article',undefined,'package');
  card.append(element('h3',item.name),element('p',String(item.guests),'guest-number'),element('p','guests · up to','guest-label'),element('p',money(item.price),'price'),element('p','per event','price-unit'));
  const link=element('a','Enquire about this package ↗');link.href='#enquiry';link.onclick=()=>{$('package-select').value=item.id;};card.append(link);$('packages').append(card);
  const option=element('option',`${item.name} — ${money(item.price)}`);option.value=item.id;$('package-select').append(option);
}
for(const item of c.inclusions) $('inclusions').append(element('li',item));
for(const term of c.terms) $('terms').append(element('li',term));
$('terms').hidden=!c.terms.length;
function contactLink(label,url){const a=element('a',label);a.href=url;$('contacts').append(a,element('br'));}
if(number) contactLink(c.phoneDisplay||'Call Riva','tel:+'+number);
if(c.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) contactLink(c.email,'mailto:'+c.email);
if(safeLink(c.instagramUrl)) contactLink('Instagram ↗',safeLink(c.instagramUrl));
const date=new Date(); date.setMinutes(date.getMinutes()-date.getTimezoneOffset());
document.querySelector('[name="date"]').min=date.toISOString().slice(0,10);
if(!number){$('enquiry-submit').textContent='Copy enquiry details ↗';$('enquiry-help').textContent='Copy your enquiry details to share with the Riva team.';}
async function copy(text){if(!navigator.clipboard) throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(text);}
$('enquiry-form').addEventListener('submit',async event=>{
  event.preventDefault(); const data=new FormData(event.currentTarget);
  const selected=c.packages.find(p=>p.id===data.get('package'));
  const message=`Hello Riva, I would like to enquire about an event.\n\nName: ${data.get('name')}\nDate: ${data.get('date')}\nGuests: ${data.get('guests')}\nEvent: ${data.get('type')}\nPackage: ${selected?`${selected.name} (${money(selected.price)} per event)`:'Help me choose'}\nNotes: ${data.get('notes')||'None'}\n\nPlease share availability and details.`;
  if(number){window.location.href=waLink(message);return;}
  try{await copy(message);$('form-status').textContent='Enquiry copied. Paste it into your conversation with Riva.';$('copy-fallback').hidden=true;}
  catch{$('copy-fallback').value=message;$('copy-fallback').hidden=false;$('copy-fallback').focus();$('copy-fallback').select();$('form-status').textContent='Select and copy your enquiry below.';}
});
$('share').onclick=async()=>{
  const url=safeLink(c.siteUrl)||location.href.split('#')[0];
  if(!url.startsWith('https://')){$('share-status').textContent='Publish the website to share its link.';return;}
  try{if(navigator.share){await navigator.share({title:'Riva — Celebration and Beyond',text:'Explore Riva by Enamavu Lake.',url});}else{await copy(url);$('share-status').textContent='Link copied.';}}
  catch(error){if(error.name!=='AbortError'){$('share-status').textContent='Copy this link: '+url;}}
};
