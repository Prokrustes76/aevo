let Themen =
  [
    {Titel: "Teil 1:",
     Text : "Ausbildungsvoraussetzungen prüfen und Ausbildung planen"},
    {Titel: "Teil 2:",
     Text : "Ausbildung vorbereiten und bei der Einstellung von Auszubildenden mitwirken"},
    {Titel: "Teil 3:",
     Text : "Ausbildung durchführen"},
    {Titel: "Teil 4:",
     Text : "Ausbildung abschließen"}
  ];

  let Aufgaben = 
  [
    // Teil 1
    [
      {
        Frage: 'Im BBiG ist von der "beruflichen Handlungsfähigkeit" die Rede. Was ist damit gemeint?',
        Antwort: 'Der Auszubildende soll die beruflichen Fähigkeiten, Fertigkeiten und Kenntnisse erwerben, die für die Ausübung des Berufs erforderlich sind, in einer sich wandelnden Arbeitswelt'
      },
      {
        Frage: 'Was wird unter den Begriffen "Duales System" und in diesem Zusammenhang "Durchlässigkeit" verstanden?',
        Antwort: 'Ersteres bezeichnet das in Deutschland praktizierte System, bei dem der Ausbildungssystem <b>und</b> die Berufsschule beteiligt sind.<br/><br/>Dank der Durchlässigkeit ist ein Aufstieg zu dem nächsthöheren Bildungsabschluss möglich.'
      },
      {
        Frage: 'Wer prüft die "persönliche Eignung" des Ausbilders und was wird darunter verstanden? ',
        Antwort: 'Grundsätzlich ist jeder Unternehmer, Ausbilder oder Ausbildungsbeauftragter persönlich geeignet, worüber im Einzelfall die zuständige Kammer entscheidet.<br/><br/>Schwere oder wiederholte Verstöße gegen das BBiG, die HwO oder das JarbSchG, sowie längere Haftstrafen können dem entgegenstehen.'
      },
      {
        Frage: 'Unterscheiden Sie die drei Begriffe Auszubildender, Ausbildender und Ausbilder!',
        Antwort: 'Der Auszubildende ist die Person, die eine Ausbildung absolviert.<br/><br/>Ausbildender ist, wer andere Personen zur Berufsausbildung einstellt, er ist Vertragspartner des AUsbildungsvertrags (§10 BBiG). Dies können sowohl natürliche, wie auch juristische Personen sein.<br/><br/>Der Ausbilder ist der Mensch (natürliche Person), der v.a. praktisch für die Berufsausbildung verantwortlich ist. '
      },
      {
        Frage: 'Erläutern Sie den Begriff Berufsgrundbildungsjahr!',
        Antwort: 'Es bietet die Möglichkeit für Schulabgänger, die keine reguläre Lehrstelle gefunden haben, ein staatliches Ausbildungsjahr bzw. berufsvorbereitendes Jahr (BvB) zu absolvieren.<br/><br/>Es dient der Berufsvorbereitung und kann von betrieblichen, außerbetrieblichen oder schulischen Trägern durchgeführt werden.'
      },
      {
        Frage: 'Was versteht man unter Qualifizierungsbausteinen?',
        Antwort: 'Qualifizierungsbausteine sind inhaltlich und zeitlich fest umgrenzte Lerneinheiten, die im Rahmen von Maßnahmen der Berufsausbildungsvorbereitung für lernbeeinträchtige oder sozial benachteiligte Personen Einsatz finden.<br/><br/>Sie können auf die spätere Ausbildungsdauer engerechnet werden und müssen stets an geltende Ausbildungsordnungen angepasst werden.'
      },
      {
        Frage: 'Welche Vorteile bieten sich für einen Betrieb, wenn er selber ausbildet?',
        Antwort: 'Er erhält die gewünschte Menge Fachkräfte mit der nötigen Qualifikation, zudem entfallen spätere Kosten wegen einer Anwerbung und Einarbeitung neuer Mitarbeiter.<br/><br/>Außerdem ist das Ausbilden förderlich für das Image eines Unternehmens und für das Betriebsklima.'
      },
      {
        Frage: 'Wann endet die Berufsausbildung?',
        Antwort: 'Bei Bestehen der kompletten Abschlussprüfung ist die Ausbildung beendet. Dies ist schon vor Ablauf der regulären Ausbildungszeit der Fall, wenn die Prüfung beim ersten Versuch bestanden wird.'
      },
      {
        Frage: 'Nennen Sie relevante Rechtsquellen (gesetzliche Normen), die in der Ausbildung von Bedeutung sind!',
        Antwort: '● Das Berusbildungsgsetz<br/>● Das Betriebsverfassungsgesetz<br/>● Das Jugendarbeitsschutzgesetz<br/>● Das Arbeitszeitgesetz<br/>● Das Kündigungsschutzgesetz<br/>● Der Tarifvertrag<br/>● Die jeweiligen Ausbildungsordnungen'
      },
      {
        Frage: 'Welche Themen sind in der Ausbildungsordnung geregelt?',
        Antwort: '● Die genaue Berufsbezeichnung<br/>● Die Ausbildungsdauer<br/>● Die Inhalte in sachlicher und zeitlicher Gliederung (Ausbildungsrahmenplan)<br/>● Berufliche Mindestanforderungen bzgl. Fertigkeiten, Kenntnissen und Fähigkeiten<br/>● Die Bestehensbedingungen der Abschlussprüfung' 
      },
      {
        Frage: 'Was versteht man unter der "Hierarchie der Rechtsquellen"?',
        Antwort: 'Rechtsquellen stehen in einer Reihenfolge zueinander, d.h. eine im Rang höhere Rechtsquelle geht der niedrigeren vor. Die höchste Gesetzesnorm ist das Grundgesetz, gefolgt von den parlamentarisch verabschiedeten Gesetzen.<br/><br/>Betriebsvereinbarungen, Tarifverträge u.ä. dürfen nicht gegen ranghöhere Rechtsquellen verstoßen.'
      },
      {
        Frage: 'Welche Bedeutung hat der Ausbildungsrahmenplan?',
        Antwort: 'Dieser Bestandteil der Ausbildungsordnung definiert das Ausbildungsberufsbild, indem er die Fertigkeiten, Kenntnisse und Fähigkeiten in sachlicher und zeitlicher Gliederung aufführt.<br/><br/>Der Ausbildungsrahmenplan stellt die Grundlage dar für den Ausbildungsvertrag und den einzelbetrieblichen Ausbildungsplan.'
      },
      {
        Frage: 'Was wird im Rahmenlehrplan geregelt?',
        Antwort: 'Der Rahmenlehrplan enthält die fachtheoretischen Ausbildungsthemen, die in den Berufsschulen zum Gegenstand des Unterrichts gemacht werden.<br/><br/>Auch er ist sachlich (nach Lernfeldern) und zeitlich (nach Ausbildungsjahren) gegliedert und geht zurück auf Beschlüsse der Kultusministerkonferenzen (KMK).'
      },
      {
        Frage: 'Wann liegt die fachliche Eignung des Ausbilders vor?',
        Antwort: 'Wenn das Ausbildungspersonal die erforderlichen beruflichen und die berufs- und arbeitspädagogischen Fertigkeiten, Kenntnisse und Fähigkeiten besitzt, die für die Vermittlung der Ausbildungsinhalte erforderlich sind.<br/><br/>In der Regel geht dies einher mit dem Erreichen eines entsprechenden Berufsabschlusses und einer angemessenen Arbeitszeit in diesem Beruf.'
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
      {
        Frage: '',
        Antwort: ''
      },
    ],
    // Teil 2
    ,
    // Teil 3
    [
      {
        Frage: 'Welche drei Führungsstile gibt es und welchen davon sollte man annehmen?',
        Antwort: '● Demokratischer Führungsstil<br/>● Laissez-faire Führungsstile<br/>● Autoritärer Führungsstil.<br/><br/>Soll auf Augenhöhe kommuniziert werden, empfiehlt sich der demokratische Stil. Je nach Situation können auch die anderen sinnvoll sein: Der autoritäre in Gefahrensituationen, bzw. der "Laissez-faire"-Stil, wenn der Azubi eigenständig handeln soll.'
      },
      {
        Frage: 'Welche vier Lerntypen gibt es und was macht diese Lerntypen aus?',
        Antwort: '● Der <b>auditive</b> Lerntyp nimmt Lerninhalte über das Hören auf.<br/>● Der <b>visuelle</b> Lerntyp nimmt Lerninhalte über das Sehen auf.<br/>● Der <b>verbale</b> Lerntyp nimmt Lerninhalte über das gesprochene Wort oder das eigene Aussprechen auf.<br/>● Der <b>haptische</b> Lerntyp nimmt Lerninhalte durch das eigene "Greifen" auf. '
      },
      {
        Frage: 'Inwiefern kann es von Nutzen sein, wenn die ausbildende Person den Lerntypen des Auszubildenden kennt?',
        Antwort: 'In der Vorbereitung der Lerneinheiten kann ich darauf eingehen, indem ich entsprechende Ausbildungsmittel nutze.<br/><br/>Bei einem visuellen Lerntyp könnte z.B. es hilfreich sein, vermehrt Bilder einzubinden und mit optischen Elementen zu arbeiten (Markierungen, Farben, etc.).'
      },
      {
        Frage: 'Welche Rolle spielt der menschliche Biorhythmus beim Lernen?',
        Antwort: 'Der menschliche Biorhythmus kennzeichnet die Schwankungen der menschlichen Leistungsfähigkeit im Tagesverlauf.<br/><br/>Die Höchstleistungsfähigkeit ist meist im Vormittagsbereich gegen 10 Uhr. Da Lernprozesse in Phasen hoher menschlicher Leistungsfähigkeit effektiver sind, sollte die ausbildende Person neue Lerneinheiten im Vormittagsbereich durchführen.'
      },
      {
        Frage: 'Welchen Unterschied gibt es zwischen einem dezentralen und einem zentralen Lernort?',
        Antwort: 'An einem dezentralen Lernort arbeitet ein Auszubildender alleine, wie z.B. am Arbeitsplatz oder in der Lernecke. Der Auszubildende hat einen eigenen Platz im betrieblichen Geschehen.<br/><br/>An einem zentralen Lernort versammeln sich mehrere Azubis außerhalb betrieblicher Abläufe, wie z.B. in einer Ausbildungswerkstatt.'
      },
      {
        Frage: 'Nennen Sie die drei <b>Lernbereiche</b> im Rahmen einer Lern- und Ausbildungseinheit und erklären Sie diese!',
        Antwort: 'Der <b>psychomotorische</b> Lernbereich zielt auf die Veränderung manueller Fähigkeiten, bzw. motorischen Fertigkeiten, z.B. handwerkliches Geschick.<br/><br/>Der <b>affektive</b> Lernbereich betrifft das Verhaltens, die Gefühle, Einstellungen und Wertungenn, z.B. den sorgfältigen Umgang mit Arbeitsmaterial.<br/><br/>Der <b>kognitive</b> Lernbereich zielt auf die Veränderung des Wissens, des Denkens und des Verstehens. '
      },
      {
        Frage: 'Nennen Sie die zwei unterschiedlichen Motivationsformen und geben Sie Beispiele an!',
        Antwort: 'Es gibt die <b>intrinsische</b> (innere) und <b>extrinsische</b> (äußere) Motivation.<br/><br/>Die intrinsische Motivation kann bspw. durch hohe und passende Methodenvielfalt gefördert werden. Diese bringt viel Abwechslung und kann die Neugierde der Azubis wecken.<br/><br/>Die extrinsische Motivation wird u.a. gefördert durch das Aussprechen von Lob und Anerkennung.'
      },
      {
        Frage: 'Was ist das oberste Ziel der Ausbildung?',
        Antwort: 'Der Auszubildende soll die berufliche Handlungsfähigkeit erlangen und in der Lage sein, selbstständig zu planen, Handlungen auszuführen und zu bewerten.<br/><br/>Die beruflichen Fertigkeiten, Kenntnisse und Fähigkeiten sollen zudem erlangt werden.'
      },
      {
        Frage: 'Welche Kompetenzen sollen erweitert werden, um die berufliche Handlungsfähigkeit zu erlangen? ',
        Antwort: '● <b>Fachkompetenz</b> – Der Auszubildende erlangt berufsspezifische Kenntnisse, Fähigkeiten und Fertigkeiten.<br/>● <b>Methodenkompetenz</b> – Er lernt, Entscheidungen zu treffen und Aufgaben zu priorisieren.<br/>● <b>Sozialkompetenz</b> – Er lernt, mit anderen Menschen in Kontakt zu treten. Im Geschäft begrüßt und unterstützt er hereinkommende Kunden.<br/>● <b>Personalkompetenz</b> – Stärkung des Selbstbewusstseins durch regelmäßige Feedbackgespräche über das Verhalten.'
      },
      {
        Frage: 'Welche Kompetenz gehört nicht zu den Schlüsselqualifikationen und wieso nicht?',
        Antwort: 'Die Fachkompetenz, weil sie berufsspezifische Kenntnisse, Fertigkeiten und Fähigkeiten vermitteln soll.<br/><br/>Die Schlüsselqualifikationen sind berufsübergreifend zu verstehen und passen wie ein Schlüssel in verschiedene berufliche Anforderungsprofile.'
      },
      {
        Frage: 'Welche 3 Zielarten bestehen neben dem Erlangen der beruflichen Handlungsfähigkeit in der Ausbildung? ',
        Antwort: '● <b>Richtlernziel</b>: Im Ausbildungsrahmenplan zu finden, verankert in der Ausbildungsordnung im Berufsbild und gibt eine allgemeine Richtung vor.<br/> ● <b>Groblernziel</b>: Im Ausbildungsrahmenplan zu finden, gibt eine vage Beschreibung der zu erlernenden Einheit an. Kenntnisse und Fähigkeiten, die erlernt werden sollen, werden deutlicher. <br/> ● <b>Feinlernziel</b>: Ist aus dem Groblernziel abzuleiten und durch den Ausbilder im betrieblichen Ausbildungsplan aufzuschreiben. Feinlernziele sollten möglichst genau und klar formuliert sein.'
      },
      {
        Frage: '12) Welche 5 Bestandteile sind in der Ausbildungsordnung zu finden?',
        Antwort: '● Das Ausbildungsberufsbild<br/><br/>● Die Berufsbezeichnung<br/><br/>● Die Dauer der Ausbildung<br/><br/>● Der Ausbildungsrahmenplan<br/><br/>● Die Prüfungsvoraussetzungen'
      },
      {
        Frage: 'Wer erlässt die Ausbildungsordnung und wer den Rahmenlehrplan?',
        Antwort: 'Ausbildungsordnung: Das Bundesministerium für Wirtschaft und Technologie (Bund)<br/><br/>Rahmenlehrplan: Die Kultusministerkonferenz (Land)'
      },
      {
        Frage: 'Welche Formel kann zur Formulierung der Feinlernziele hilfreich sein?',
        Antwort: 'Das gewünschte Endverhalten sollte benannt werden. Das Feinlernziel sollte nach der SMART-Formel formuliert werden.<br/><br/>●<b>S</b>pezifisch,<br/>●<b>M</b>essbar,<br/>●<b>A</b>ktivierend,<br/>●<b>R</b>ealistisch und<br/>●<b>T</b>ermininert. '
      },
      {
        Frage: 'Warum ist es wichtig, Feinlernziele zu formulieren?',
        Antwort: 'Feinlernziele geben eine Orientierung. Danach können die Ausbildungsmethode, der Lernort, der Lernbereich, die Kompetenzen usw. gewählt werden. Nach dem Lernziel sind die didaktischen Prinzipien aufzubauen.<br/><br/>Der Auszubildende weiß genau, was von ihm erwartet wird und was er mit der Lerneinheit erreichen soll. Nur wenn man ein klares Feinlernziel formuliert, kann es auch überprüft werden. Dies bietet wiederum die Möglichkeit, sein Handeln zu reflektieren und zu optimieren. '
      },
    ]
  ];
