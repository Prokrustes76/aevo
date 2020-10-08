let info,
    phase = 1,
    thema = -1,
    frage = [0, 0, 0, 0],
    kommentare = [[], [], [], []],
    lightblue = '#77BFE2',
    darkblue  = '#286FB4',
    visibles = [],
    kommis   = [],
    divDozenten, 
    divAEVO,
    divMain, 
    divButtonLeft,
    divButtonRight,
    divButtonWrite,
    divButtonSpy,
    divRaffaela,
    divFoot,
    raffaelaClicks = 0;


window.onload = function() {
  divBody        = document.getElementById('body');
  divDozenten    = document.getElementById('dozenten');
  divAEVO        = document.getElementById('aevo');
  divMain        = document.getElementById('main');
  divFoot        = document.getElementById('foot');
  divButtonLeft  = document.getElementById('buttonLeft');
  divButtonRight = document.getElementById('buttonRight');
  divVorherige   = document.getElementById('vorherigeFrage');
  divNaechste    = document.getElementById('naechsteFrage');
  getStoredStuff();
  localStorage.removeItem('storedStuff');
  adjustToNewPhase();

  // Es wird mit localStorage gearbeitet. Bei Neustart gibt es keine Datei "StoredStuff", nur bei Wechsel auf den 
  // externen Link des IMBSE-Impressums, wird "StoredStuff" gespeichert, um eine positionsgerechte Rückkehr zu 
  // ermöglich, danach aber sofort wieder gelöscht.
};

function raffaelaClicked() {
  raffaelaClicks = (raffaelaClicks + 1) % 3;
  divRaffaela.innerHTML = ['"Ferrari"', 'Ferrero-Rocher', 'Ferraro(?)'][raffaelaClicks];
}

function andereFrage(direction) {
  frage[thema] += direction;
  let anzahl = Aufgaben[thema] ? Aufgaben[thema].length : 30;
  if (frage[thema] < 0) frage[thema] = anzahl - 1;
  if (frage[thema] == anzahl) frage[thema] = 0;
  adjustToNewPhase(); 
}

function moveToNewPhase(direction) {
  if (phase + direction < 2 || phase + direction > 3)
    return;
  if (phase == 2 && direction == 1 && thema < 0)
    return;
  phase += direction;

  adjustToNewPhase();
}

function adjustToNewPhase() {
  divBody.style.background = phase == 1 ? lightblue : 'white';
  divAEVO.style.background = phase == 1 ? '' : "url('./rsc/pic0.png')";
  divDozenten.innerHTML = phase == 1 ? '' : "<h1> Heute begleiten Sie: </h1><ul><li>Raffaela <span id='nachnameRaffaela' onclick='raffaelaClicked()'></span></li><li>Harald Maaßen</li><li>Andre Krutki</li><li>Patrick Hoehensteiger</li></ul>";
  if (phase > 1) 
    addClock();

  if (document.getElementById('nachnameRaffaela')) {
    divRaffaela = document.getElementById('nachnameRaffaela');
    divRaffaela.innerHTML = '"Ferrari"';
  }
  divVorherige.innerHTML = phase == 3 ? '<button onclick="andereFrage(-1)" class="frageButton">◀ Frage</button>' : '';
  divNaechste.innerHTML = phase == 3 ? '<button onclick="andereFrage(1)" class="frageButton">Frage ▶</button>' : '';
  divButtonRight.innerHTML = phase == 1 ? '' : '<button onclick="moveToNewPhase(1)" class="green">▶</button>';
  divButtonLeft.innerHTML  = phase == 1? '' :'<button onclick="moveToNewPhase(-1)" class="green">◀</button>';
  divFoot.innerHTML = phase == 1 ? '' : '<a href="https://www.imbse-gmbh.de/ueber-uns#main"><button onclick = "storeStuff();" class="green impressum">Impressum</button></a>';
  divMain.style = "background-image: none";

  getContentForMain();
}

function getContentForMain() {
  divMain.innerHTML = '';
  if (phase == 1) 
    getContextPhase1();
  if (phase == 2) 
    getContextPhase2();
  if (phase == 3)
    getContextPhase3();

}

function themaAusgesucht(nr) {
  thema = nr;
  adjustToNewPhase();
}


function getContextPhase1() {
  divMain.style = 'background-image: url(./rsc/pic1.jpg)';
  divMain.innerHTML = '<form id="PW" onsubmit="comparePW(); return false"><label>Passwort: <input type="text" id="inputPW"></label></form>';
}

function comparePW() {
  let pw = document.getElementById('inputPW').value;
  if (pw == 'imbse123' || pw == 'IMBSE123') 
    moveToNewPhase(1);
}

function getContextPhase2() {
  for (let i = 0; i < 4; i++) {
    let elem = document.createElement('div');
    elem.innerHTML =  `<h1>${Themen[i].Titel}</h1>`;
    elem.innerHTML += `<h3>${Themen[i].Text}</h3>`;
    if (i == thema) elem.style = 'border: 1px solid; padding: 10px; box-shadow: 5px 10px;';
    elem.setAttribute('class', 'themen lightblue hoverBar');
    elem.setAttribute('onclick', `themaAusgesucht(${i})`);
    divMain.appendChild(elem);
  }
}

function getContextPhase3() {
  for (let i = 0; i < 4; i++) {
    let elem = document.createElement('div');
    let frageNr = frage[thema];
    elem.setAttribute('class', `gradient ${i > 0 ? 'themen' : ''}`);
    elem.style = i == 0 ? "text-shadow: none" : "text-shadow: 2px 2px 4px rgba(0, 107, 179, 0.5)";
    elem.style.width = i == 0 ? '100%' : '50%';
    elem.style.margin = i == 0 ? '-1px' : '50x auto 20px auto';
    elem.style.padding = i == 0 ? '10px 0px' : '';
    elem.style.pointerEvents = 'none';
    elem.style.textAlign = i == 0 ? 'center' : 'left';
    elem.style.fontSize = i == 0 ? '1.4em' : '1.2em';
    elem.style.background = i == 0 ? 'black' : lightblue;
    elem.style.color = i == 0 ? lightblue : 'black';
    elem.style.letterSpacing = i == 0 ? '2px' : '1px';

    if (i == 0) elem.innerHTML = `<h3><big>Teil ${thema + 1}:</big>${Themen[thema].Text}</h3>`;
    if (i == 1) elem.innerHTML =  `<h1>Frage: ${frageNr + 1}</h1>`;
    if (i >= 1) {
      if (i == 2 && !visibles.some(v => v.thema == thema && v.frage == frage[thema]))
        continue;
      try {
        elem.innerHTML += `<p>${i == 1 ? Aufgaben[thema][frageNr].Frage : Aufgaben[thema][frageNr].Antwort}</p>`;
      }
      catch (e) {
        elem.innerHTML += `<p>${i == 1 ? 'Frage' : 'Antwort'} wurde noch nicht bearbeitet!</p>`;
      }
    }
    
    if (i == 3) {
      if (!kommis.some(k => k.thema == thema && k.frage == frage[thema]))
        continue;

      elem.style.pointerEvents = 'auto';
      elem.innerHTML  = '<h3><big>Notizen:</big></h3>';
      divTextArea = document.createElement('textarea');
      divTextArea.setAttribute('id', 'textArea');
      divTextArea.addEventListener('input', notizenSchreiben);
      divTextArea.value = kommentare[thema][frage[thema]] || '';
      elem.appendChild(divTextArea);
    }
    if (bothVisible() && i > 1) {
      elem.style.width = '38%';
      elem.style.position = 'absolute';
      elem.style.top = '37.5%';
      elem.style.left = i == 2 ? '50.5%' : '9.5%';
      elem.style.fontSize = '1.1em';
    }

    divMain.appendChild(elem); 
  }

  createWrite();
  createSpy();
}

function bothVisible() {
  return visibles.some(v => v.thema == thema && v.frage == frage[thema]) &&
         kommis.some(k => k.thema == thema && k.frage == frage[thema]);
}

function createWrite() {
  divButtonWrite = document.createElement('button');
  divButtonWrite.setAttribute('id', 'write');
  divButtonWrite.innerHTML = '✎';
  divButtonWrite.addEventListener('mousedown', write);
  divMain.appendChild(divButtonWrite);
}

function createSpy() {
  divButtonSpy = document.createElement('button');
  divButtonSpy.setAttribute('id', 'spy');
  divButtonSpy.innerHTML = '👁';
  divButtonSpy.addEventListener('mousedown', spy);
  divMain.appendChild(divButtonSpy);
}

function write() {
  let k = kommis.find(k => k.thema == thema && k.frage == frage[thema]);
  if (!k) kommis.push({thema: thema, 
                       frage: frage[thema]});
  else kommis.splice(kommis.indexOf(k), 1);
  adjustToNewPhase(); 
}

function spy() {
  let v = visibles.find(v => v.thema == thema && v.frage == frage[thema]);
  if (!v) visibles.push({thema: thema, 
                         frage: frage[thema]});
  else visibles.splice(visibles.indexOf(v), 1);
  adjustToNewPhase(); 
}

function notizenSchreiben() {
  kommentare[thema][frage[thema]] = divTextArea.value;
}

function addClock() {
  let elem = document.createElement("span");
  elem.setAttribute('id', 'clock');
  setInterval(_ => {
    let heute = new Date();
    let h = heute.getHours();
    let m = heute.getMinutes();
    elem.innerHTML = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`;
  }, 10);
  
  divDozenten.appendChild(elem);
}

function storeStuff () {
  if (phase == 1)
    return;
  let storedStuff = {
    phase : phase,
    frage : frage,
    thema : thema,
    kommentare : kommentare,
    kommis : kommis,
    visibles : visibles,
  };

  localStorage.setItem('storedStuff', JSON.stringify(storedStuff));
}

function getStoredStuff() {
  try {
    info = localStorage.getItem('storedStuff');
  } 
  catch(e) {

  }
  
  finally {
    if (info) {
      info = JSON.parse(info);
      phase = info.phase;
      thema = info.thema;
      frage = info.frage;
      kommentare = info.kommentare;
      kommis = info.kommis;
      visibles = info.visibles;
    }
  }
}




