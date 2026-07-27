Object.assign(window.recipePages||={},{"Bananin cheesecake":{"src":"FA16 · PDF stran 31","text":"7.\n                                BANANINE PALAČINKE                   8.\n                                                                                                      BANANIN\n                                S ČOKOLADO IN                                                         'CHEESECAKE'\n                                PISTACIJO                                                                  za 1 osebo      460 kcal\n\n                                       za 1 osebo       420 kcal                                        150 g olupljene banane\n                                                                                                        jajce\n                                    majhna zelo zrela banana                                            140 g MU Skyr stracciatella\n                                    jajce                                                               žlička Fit akademija x BAM\n                                    40 ml mleka 1,5 % m.m.                                              naravnega sladila\n                                    15 g beljakovin v prahu                                             par kapljic vanilijevega\n                                    (priporočamo okus                                                   ekstrakta\n                                    čokolada)                                                           20 g Fit akademija x BAM\n                                    10 g pirine moke                                                    čokoladno-lešnikovega\n                                    noževa konica pecilnega                                             namaza\n                                    praška\n                                    ščep soli\n                                    15 g Fit akademija x BAM\n                                    mlečnih čokoladnih\n                                    kapljic\n                                    10 g Fit akademija x BAM\n                                    crunchy pistacijinega           Pečico segrejemo na 190 °C.\n                                    namaza\n                                    pet oluščenih slanih pistacij\n                                                                    V blenderju zmiksamo banano, jajce, Mu Skyr, sladilo in vanilijev\n                                                                    ekstrakt. Zmes prelijemo v majhen pekač, obložen s peki\nZ vilicami dobro pretlačimo banano. Dodamo razžvrkljano jajce,      papirjem. Pečemo približno 40 minut.\nmleko, beljakovine v prahu, moko, pecilni prašek in sol, da\ndobimo gosto maso.                                                  Postrežemo z žlico čokoladno-lešnikovega namaza.\n\nV namaščeni ponvi spečemo manjše palačinke. Za eno palačinko\ndamo v ponev eno zvrhano žlico mase, po vrhu pa potresemo par\nčokoladnih kapljic. Najprej pečemo pokrito na eni strani,\nodkrijemo, da se zapeče in nato palačinko obrnemo okrog ter jo\nzapečemo še na drugi strani.\n\nPostrežemo s pistacijinim namazom in drobno narezanimi\npistacijami."}});
Object.assign(window.recipePages||={}, {"Prosena kaša z višnjevim džemom in cimetom":{"src":"FA17 / stran 14","verified":true,"text":"PROSENA KAŠA Z VIŠNJEVIM DŽEMOM IN CIMETOM\n\nza 1 osebo 370 kcal\n\n50 g prosene kaše\n100 ml mleka 1,5 % m.m.\n50 g rikote Krepko fitness\nžlička cimeta\ndve žlici Fit akademija x BAM višnjevega džema\nžlička mandljevega namaza\n\nProseno kašo skuhamo v vodi v razmerju 1:3. Ko vsa voda povre, je kaša kuhana. Vanjo vmešamo mleko, rikoto, cimet in ščepec soli.\nPostrežemo z dvema žlicama višnjevega džema in žličko mandljevega namaza."}});

/* Clean, manually separated recipes from paired PDF pages. */
Object.assign(window.recipePages||={}, {
  "Ovsena kaša z limono in makom": {
    "src":"FA19 / stran 8",
    "verified":true,
    "text":"OVSENA KAŠA Z LIMONO IN MAKOM\n\nza 1 osebo 390 kcal\n\n40 g mehkih ovsenih kosmičev\n100 g Alpro sojinega izdelka z okusom limoninega kolača\n20 g beljakovin v prahu (okus: vanilija)\nzvrhana žlička mletega maka\n50 ml vode\n\nDodatki:\n50 g Alpro sojinega izdelka z okusom limoninega kolača\nrezina limone\nnaribana lupinica 1/2 bio limone\nščep mletega maka\n\nV kozarčku zmešamo vse sestavine za ovseno kašo.\n\nPo vrhu razporedimo dodatke in postavimo v hladilnik (čez noč ali za par ur)."
  },
  "Umešana jajca s šparglji in skuto": {
    "src":"FA16 / stran 8",
    "verified":true,
    "text":"UMEŠANA JAJCA S ŠPARGLJI IN SKUTO\n\nza 1 osebo 400 kcal\n\ndve jajci\nšopek špargljev (100 g)\n50 g nepasirane puste skute\n60 g pirinega kruha\n\nŠparglje operemo in jim odstranimo olesenel, trd spodnji del. Narežemo jih na 1 cm dolge kolobarčke.\n\nV posodi razžvrkljamo jajci, ščep soli in popra.\n\nV namaščeni ponvi na srednji temperaturi približno 5 minut pražimo šparglje. Začinimo jih s soljo, poprom in česnom v prahu. Če se prijemajo ponve, dolijemo malo vode. Ko se šparglji zmehčajo, jih razporedimo ob rob ponve in vlijemo jajčno zmes. Pečemo približno 3 minute (da jajca zakrknejo). Odstavimo, vmešamo skuto in postrežemo z rezino kruha."
  }
});

/* Meal prep: show what to prepare the evening BEFORE each planned day. */
(function(){
  const dayBefore=['Nedelja zvečer','Ponedeljek zvečer','Torek zvečer','Sreda zvečer','Četrtek zvečer','Petek zvečer','Sobota zvečer'];
  const esc=s=>String(s).replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));

  function prepInstruction(n){
    const x=n.toLowerCase();
    if(x.includes('prosena kaša')) return 'Proseno kašo lahko skuhaš že zvečer. Pripravi mleko, rikoto, cimet in dodatke posebej.';
    if(x.includes('ovsena kaša')||x.includes('ovseni kosmiči')||x.includes('pirina kaša')||x.includes('pirini kosmiči')) return 'Odmeri kosmiče/kašo in pripravi dodatke. Sadje, namaze in hrustljave dodatke shrani posebej.';
    if(x.includes('smuti')||x.includes('smoothie')||x.includes('matcha skleda')) return 'Operi in odmeri sadje ter pripravi dodatke. Zamrznjene sestavine lahko razdeliš v vrečko/posodico za blender.';
    if(x.includes('palačink')||x.includes('vafelj')||x.includes('šmorn')||x.includes('french toast')) return 'Odmeri suhe sestavine in pripravi prelive/dodatke. Testo oziroma jajčno zmes je najbolje dokončati tik pred peko.';
    if(x.includes('cheesecake')||x.includes('tortica')||x.includes('crumble')||x.includes('narastek')) return 'Ta obrok lahko v večji meri pripraviš že zvečer in ga čez noč ohladiš; dodatke dodaj pred serviranjem.';
    if(x.includes('jajc')||x.includes('omleta')) return 'Operi in nareži zelenjavo ter pripravi sir/dodatke. Jajca speci oziroma sestavi naslednji dan.';
    if(x.includes('testeninska solata')) return 'Skuhaj testenine, jih ohladi in shrani. Operi/nareži zelenjavo, preliv pa shrani ločeno do serviranja.';
    if(x.includes('solata')) return 'Operi in dobro osuši zelenjavo. Pripravi preliv posebej; beljakovinski del pripravi oziroma odtajaj po potrebi.';
    if(x.includes('wrap')||x.includes('tortilja')||x.includes('quesadilla')||x.includes('sendvič')||x.includes('štručka')) return 'Pripravi nadev in nareži zelenjavo. Tortiljo/kruh sestavi čim bližje obroku, da ostane svež.';
    if(x.includes('losos')||x.includes('ribji')||x.includes('riba')) return 'Če je riba zamrznjena, jo prestavi v hladilnik. Pripravi zelenjavo, prilogo in morebitno omako; ribo speci naslednji dan.';
    if(x.includes('tuna')||x.includes('tunine')||x.includes('tunin')) return 'Pripravi zelenjavo in dodatke. Tuno odcedi in zmešaj čim bližje obroku, posebej če je v solati ali namazu.';
    if(x.includes('piščan')||x.includes('puran')) return 'Meso prestavi v hladilnik, če je zamrznjeno. Nareži ga in po receptu mariniraj; pripravi tudi zelenjavo/prilogo.';
    if(x.includes('govej')||x.includes('file mignon')||x.includes('svinjski')) return 'Meso pravočasno odtajaj v hladilniku. Pripravi zelenjavo, omako in prilogo; meso dokončaj naslednji dan.';
    if(x.includes('rižota')) return 'Nareži zelenjavo in pripravi beljakovinski del. Odmeri riž in tekočino; rižoto skuhaj sveže naslednji dan.';
    if(x.includes('rižem')||x.includes('skleda')||x.includes('bowla')) return 'Pripravi zelenjavo in beljakovinski del. Riž lahko skuhaš vnaprej, hitro ohladiš in shraniš v hladilniku.';
    if(x.includes('curry')||x.includes('daal')) return 'Nareži zelenjavo, odmeri začimbe in pripravi stročnice/beljakovine. Omako lahko skuhaš delno ali v celoti že zvečer.';
    if(x.includes('burger')) return 'Pripravi polpet oziroma meso, operi in nareži zelenjavo ter pripravi omako. Bombetko sestavi tik pred jedjo.';
    if(x.includes('njoki')||x.includes('orzo')||x.includes('testenine')) return 'Pripravi omako, nareži zelenjavo in odmeri testenine/njoke. Skuhaj jih naslednji dan, razen če gre za hladno solato.';
    return 'Preveri sestavine, odmeri suhe sestavine in operi/nareži zelenjavo, ki lahko počaka do naslednjega dne.';
  }

  function renderSmartPrep(){
    const host=document.getElementById('pg');
    if(typeof weeks==='undefined'||typeof wi==='undefined'||!host) return;
    const w=weeks[wi];
    if(!w) return;
    host.innerHTML=w.days.map((d,di)=>{
      const idbase=`np${wi}-${di}`;
      const rows=[[d[1],'Zajtrk'],[d[3],'Kosilo'],[d[5],'Večerja']].map((m,i)=>{
        const id=`${idbase}-${i}`;
        const checked=localStorage.getItem(id)==='1'?'checked':'';
        return `<label style="display:flex;gap:9px;align-items:flex-start;margin:10px 0"><input type="checkbox" ${checked} onchange="this.checked?localStorage.setItem('${id}','1'):localStorage.removeItem('${id}')" style="margin-top:4px"><span><b>${m[1]} · ${esc(m[0])}</b><br><span style="color:#667064;line-height:1.45">${esc(prepInstruction(m[0]))}</span></span></label>`;
      }).join('');
      return `<div class="box"><div style="font-size:12px;color:#a45d66;font-weight:800;text-transform:uppercase;letter-spacing:.04em">${dayBefore[di]} → za ${esc(d[0])}</div><div style="margin-top:6px">${rows}</div></div>`;
    }).join('');
  }

  function refreshNotes(){
    const prepTip=document.querySelector('#prep .tip');
    if(prepTip) prepTip.textContent='Kaj pripraviš večer prej za naslednji dan. Kljukice se shranijo v brskalniku; stvari, ki so boljše sveže, so označene tako, da jih pripraviš le delno.';
    const shopTip=document.querySelector('#shop .tip');
    if(shopTip) shopTip.textContent='Nakupovalni seznam se menja glede na izbrani teden in je pripravljen za 2 odrasla + 2 otroka. Količine so za zdaj okvirne; natančne količine bom vezala na popolnoma prenesene recepte.';
  }

  /* Paired-page safety check. Older imports sometimes contain two recipes from the same PDF spread. */
  function looksMixed(r){
    if(!r||!r.text) return false;
    if(r.verified) return false;
    const kcal=(r.text.match(/\b\d{3}\s*kcal\b/gi)||[]).length;
    const portions=(r.text.match(/za\s+1\s+osebo/gi)||[]).length;
    return kcal>1 || portions>1;
  }

  window.addEventListener('load',()=>{
    refreshNotes();
    renderSmartPrep();
    document.querySelectorAll('.weeks button').forEach(b=>b.addEventListener('click',()=>setTimeout(renderSmartPrep,0)));
    const prepBtn=document.querySelector('.tabs button[data-tab="prep"]');
    if(prepBtn) prepBtn.addEventListener('click',()=>setTimeout(renderSmartPrep,0));

    /* Replace recipe opener with a safe version so mixed PDF-page text is never shown as one recipe. */
    window.rec=function(n,k){
      const r=window.recipePages?.[n];
      rt.textContent=n;
      rm.textContent=sourceFor(n)+' · '+k;
      if(!r){
        rtext.textContent='Recept še ni v celoti prenesen v spletno bazo. Oznaka knjige in strani je pripravljena po kazalu.';
      } else if(looksMixed(r)){
        rtext.textContent='Ta recept je bil v starem uvozu zajet skupaj z drugim receptom z iste PDF-strani, zato napačne vsebine ne prikazujem. Recept bo prikazan šele, ko je ločen in preverjen proti izvirniku.';
      } else {
        rtext.textContent=r.text;
      }
      dlg.showModal();
    };
  });
})();