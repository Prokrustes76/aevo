let phase = 1,
    thema = -1,
    frage = [0, 0, 0, 0],
    kommentare = [[], [], [], []],
    visibles = [],
    kommis   = [],
    divDozenten, 
    divMain, 
    divButtonLeft,
    divButtonRight,
    divButtonWrite,
    divButtonSpy,
    raffaelaClicks = 0,
    lightBlue = 'rgb(126, 180, 216)',
    lightestBlue = 'rgb(190, 214, 238)';

window.onload = function() {
  divDozenten    = document.getElementById('dozenten');
  divMain        = document.getElementById('main');
  divButtonLeft  = document.getElementById('buttonLeft');
  divButtonRight = document.getElementById('buttonRight');
  divVorherige   = document.getElementById('vorherigeFrage');
  divNaechste    = document.getElementById('naechsteFrage');
  divRaffaela    = document.getElementById('nachnameRaffaela');
  divRaffaela.innerHTML = ['"Ferrari"', 'Ferrero-Rocher', 'Ferraro(?)'][raffaelaClicks];
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
  if (phase + direction < 1 || phase + direction > 3)
    return;
  if (phase == 2 && direction == 1 && thema < 0)
    return;
  phase += direction;

  adjustToNewPhase();
}

function adjustToNewPhase() {
  divVorherige.innerHTML = phase == 3 ? '<button onclick="andereFrage(-1)" class="frageButton">◁ Frage</button>' : '';
  divNaechste.innerHTML = phase == 3 ? '<button onclick="andereFrage(1)" class="frageButton">Frage ▷</button>' : '';
  divButtonRight.innerHTML = '<button onclick="moveToNewPhase(1)" class="green">▶</button>';
  divButtonLeft.innerHTML  = '<button onclick="moveToNewPhase(-1)" class="green">◀</button>';
  divMain.style = "background-image: none";

  getContentForMain();
}

function getContentForMain() {
  divMain.innerHTML = '';
  if (phase == 1) 
    divMain.style = 'background-image: url(./rsc/pic1.png)';
  if (phase == 2) 
    getContextPhase2();
  if (phase == 3)
    getContextPhase3();

}

function themaAusgesucht(nr) {
  thema = nr;
  adjustToNewPhase();
}

function getContextPhase2() {
  for (let i = 0; i < 4; i++) {
    let elem = document.createElement('div');
    elem.innerHTML =  `<h1>${Themen[i].Titel}</h1>`;
    elem.innerHTML += `<h3>${Themen[i].Text}</h3>`;
    if (i == thema) elem.style = 'border: 1px solid; padding: 10px; box-shadow: 5px 10px;';
    elem.setAttribute('class', 'themen lightblue hoverBar');
    elem.setAttribute('onclick', `themaAusgesucht(${i})`);
    //elem.style.background = i == thema ? lightestBlue : lightBlue;
    divMain.appendChild(elem);
  }
}

function getContextPhase3() {
  for (let i = 0; i < 4; i++) {
    let elem = document.createElement('div');
    let frageNr = frage[thema];
    elem.setAttribute('class', 'themen gradient');
    elem.style = i == 0 ? "text-shadow: none" : "text-shadow: 2px 2px 4px rgba(0, 107, 179, 0.5)";
    elem.style.width = i == 0 ? 'max-content' : '50%';
    elem.style.margin = '25px auto 45px auto';
    elem.style.pointerEvents = 'none';
    elem.style.textAlign = 'left';
    elem.style.fontSize = '1.2em';
    elem.style.background = i == 0 ? 'darkblue' : 'rgb(126, 180, 216)';
    elem.style.color = i == 0 ? 'rgb(190, 214, 238)' : 'black';
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
      elem.style.top = '45%';
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



