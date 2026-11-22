const quizQuestions = [
 {q:'Aus welchen Gasen besteht Biogas hauptsächlich?',a:['Sauerstoff und Stickstoff','Methan und Kohlenstoffdioxid','Wasserstoff und Helium','Nur Kohlenstoffdioxid'],correct:1,why:'Biogas enthält hauptsächlich Methan und Kohlenstoffdioxid.'},
 {q:'Was passiert im Fermenter?',a:['Abfälle werden verbrannt','Wasser wird gefiltert','Mikroorganismen zersetzen organische Stoffe ohne Sauerstoff','Methan wird zu Sauerstoff'],correct:2,why:'Die Zersetzung läuft unter Ausschluss von Sauerstoff ab.'},
 {q:'Wie lautet die Formel von Methan?',a:['CH₄','CO₂','C₂H₆','H₂O'],correct:0,why:'Methan besteht aus einem C-Atom und vier H-Atomen: CH₄.'},
 {q:'Welche Eigenschaften hat Methan?',a:['Blau und fest','Farblos, geruchlos und entzündlich','Salzig und flüssig','Nicht brennbar'],correct:1,why:'Methan ist farb- und geruchlos und leicht entzündlich.'},
 {q:'Bei vollständiger Verbrennung von Methan entstehen …',a:['Methan und Wasserstoff','Sauerstoff und Kohlenstoff','Kohlenstoffdioxid und Wasser','Nur Ruß'],correct:2,why:'Bei der vollständigen Verbrennung entstehen CO₂ und H₂O.'},
 {q:'Was sind Alkane?',a:['Metalle','Kohlenwasserstoffe mit nur Einfachbindungen','Salze','Stoffe, die nur Sauerstoff enthalten'],correct:1,why:'Alkane bestehen aus Kohlenstoff und Wasserstoff und haben nur Einfachbindungen.'},
 {q:'Wie lautet die allgemeine Formel der Alkane?',a:['CₙHₙ','CₙH₂ₙ','CₙH₂ₙ₊₂','CₙH₂ₙ₋₂'],correct:2,why:'Die allgemeine Formel der Alkane lautet CₙH₂ₙ₊₂.'},
 {q:'Wie heißt das Alkan mit zwei Kohlenstoffatomen?',a:['Methan','Ethan','Propan','Butan'],correct:1,why:'Ethan hat zwei Kohlenstoffatome und die Formel C₂H₆.'},
 {q:'Wie lautet die Formel von Propan?',a:['C₃H₆','C₂H₆','C₃H₈','C₄H₁₀'],correct:2,why:'Mit n = 3 ergibt sich C₃H₈.'},
 {q:'Was zeigt eine Strukturformel?',a:['Nur den Namen','Wie Atome miteinander verbunden sind','Nur die Masse','Die Farbe eines Stoffes'],correct:1,why:'Eine Strukturformel zeigt die Verbindungen zwischen den Atomen.'},
 {q:'Was passiert bei längeren Alkanketten mit der Siedetemperatur?',a:['Sie steigt meist','Sie sinkt immer','Sie bleibt exakt gleich','Alkane haben keine Siedetemperatur'],correct:0,why:'Mit längeren Molekülen steigen die Anziehungskräfte und meist auch die Siedetemperaturen.'},
 {q:'Welches ist das erste Alkan?',a:['Ethan','Butan','Methan','Propan'],correct:2,why:'Methan ist das erste Alkan und hat die Formel CH₄.'}
];
const cards = [
 ['biogas','Was ist Biogas?','Ein Gasgemisch, das durch die Zersetzung organischer Stoffe entsteht.'],
 ['biogas','Wo entsteht Biogas?','Zum Beispiel in einem Fermenter, in dem Mikroorganismen organische Stoffe ohne Sauerstoff abbauen.'],
 ['biogas','Welche Hauptbestandteile hat Biogas?','Methan und Kohlenstoffdioxid.'],
 ['biogas','Warum gilt Biogas als erneuerbar?','Es kann aus nachwachsenden Rohstoffen und organischen Abfällen gewonnen werden.'],
 ['methan','Wie lautet die Formel von Methan?','CH₄ – ein Kohlenstoffatom und vier Wasserstoffatome.'],
 ['methan','Nenne drei Eigenschaften von Methan.','Farblos, geruchlos und leicht entzündlich.'],
 ['methan','Was entsteht bei der vollständigen Verbrennung von Methan?','Kohlenstoffdioxid und Wasser; dabei wird Energie frei.'],
 ['methan','Warum kann Methan gefährlich sein?','Es ist leicht entzündlich und kann mit Luft explosive Gemische bilden.'],
 ['alkane','Was sind Alkane?','Kohlenwasserstoffe mit ausschließlich Einfachbindungen.'],
 ['alkane','Wie lautet die allgemeine Formel der Alkane?','CₙH₂ₙ₊₂'],
 ['alkane','Nenne die ersten vier Alkane.','Methan, Ethan, Propan, Butan.'],
 ['alkane','Wie lautet die Formel von Butan?','C₄H₁₀'],
 ['alkane','Wie unterscheiden sich Summen- und Strukturformel?','Die Summenformel gibt die Atomanzahl an; die Strukturformel zeigt, wie die Atome verbunden sind.'],
 ['alkane','Was passiert mit der Zähflüssigkeit bei längeren Alkanen?','Sie nimmt im Allgemeinen zu.']
];
let quizOrder=[], qIndex=0, score=0, answered=false, cardFilter='all', cardIndex=0, cardFlip=false;
const quizMarkup=document.getElementById('quizPanel').innerHTML;
function startQuiz(){if(!document.getElementById('quizCount'))document.getElementById('quizPanel').innerHTML=quizMarkup;quizOrder=[...quizQuestions].sort(()=>Math.random()-.5).slice(0,10);qIndex=0;score=0;answered=false;document.getElementById('quiz').scrollIntoView({behavior:'smooth'});renderQuiz();}
function renderQuiz(){const panel=document.getElementById('quizPanel');if(qIndex>=quizOrder.length){panel.innerHTML=`<div class="quiz-label">QUIZ ABGESCHLOSSEN</div><h3>Du hast ${score} von ${quizOrder.length} Fragen richtig!</h3><p style="color:var(--muted)">${score>=8?'Stark! Das sieht schon richtig gut aus.':score>=5?'Guter Start – wiederhole noch ein paar Lernkarten.':'Übung macht’s! Schau dir die Lernkarten an und probiere es nochmal.'}</p><button class="primary" onclick="startQuiz()">Nochmal spielen ↻</button>`;return;}const item=quizOrder[qIndex];document.getElementById('quizCount').textContent=`Frage ${qIndex+1} / ${quizOrder.length}`;document.getElementById('progressBar').style.width=`${qIndex/quizOrder.length*100}%`;document.getElementById('questionText').textContent=item.q;document.getElementById('feedback').textContent='Wähle eine Antwort.';document.getElementById('nextBtn').disabled=true;document.getElementById('nextBtn').textContent=qIndex===quizOrder.length-1?'Ergebnis →':'Weiter →';answered=false;const box=document.getElementById('answerButtons');box.innerHTML='';item.a.forEach((ans,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=ans;b.onclick=()=>selectAnswer(i);box.appendChild(b);});}
function selectAnswer(i){if(answered)return;answered=true;const item=quizOrder[qIndex];const buttons=[...document.querySelectorAll('.answer')];buttons.forEach((b,k)=>{b.disabled=true;if(k===item.correct)b.classList.add('correct');if(k===i&&k!==item.correct)b.classList.add('wrong');});if(i===item.correct){score++;document.getElementById('feedback').textContent='Richtig! '+item.why;}else{document.getElementById('feedback').textContent='Noch nicht ganz. '+item.why;}document.getElementById('nextBtn').disabled=false;}
function nextQuestion(){if(!answered)return;qIndex++;renderQuiz();}
function filteredCards(){return cards.filter(c=>cardFilter==='all'||c[0]===cardFilter)}
function renderCard(){const list=filteredCards();if(!list.length)return;cardIndex=(cardIndex+list.length)%list.length;const c=list[cardIndex];document.getElementById('cardTopic').textContent=c[0].toUpperCase();document.getElementById('cardQuestion').textContent=c[1];document.getElementById('cardAnswer').textContent=c[2];document.getElementById('cardCounter').textContent=`${cardIndex+1} / ${list.length}`;document.getElementById('flashcard').classList.toggle('flipped',cardFlip);}
function flipCard(){cardFlip=!cardFlip;renderCard();}
document.getElementById('flashcard').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flipCard();}});function nextCard(){cardIndex++;cardFlip=false;renderCard();}function prevCard(){cardIndex--;cardFlip=false;renderCard();}
function setCardTopic(topic,btn){cardFilter=topic;cardIndex=0;cardFlip=false;document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));if(btn)btn.classList.add('active');else{const matching=[...document.querySelectorAll('.filter')].find(b=>b.textContent.toLowerCase()===topic);if(matching)matching.classList.add('active');}renderCard();}
renderCard();
