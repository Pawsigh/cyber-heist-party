const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-DL4FAfN_.js","./topic-strategy-jpe3JS0w.js","./dist-BXUnybKi.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`;function t(t=Math.random){let n=``;for(let r=0;r<5;r++)n+=e[Math.floor(t()*32)%32];return n}function n(t){let n=t.toUpperCase().replace(/[^A-Z0-9]/g,``);return n.length===5&&[...n].every(t=>e.includes(t))?n:null}var r={startBits:10,plus:3,minus:3,corePrice:20,coreStep:10,liftPrice:5,scannerFine:5,scannerEvery:3,bonusEvent:3,ransom:10,expenses:15,maxItems:3,miniRewards:[10,6,3,1],hankRange:5,hankPush:3,chadSteal:3,slip:2,crash:8,stealPrice:40,revenge:2,finaleRounds:3,nearMiss:5,saleDiscount:10,giftBits:5},i=e=>3+3*u[e].value,a={double:{name:`Doppelte Felder`,text:`Plus-, Minus- und Absturz-Felder zählen ab jetzt doppelt.`},gift:{name:`Aufholpaket`,text:`Wer hinten liegt, bekommt ein starkes Item und 5 Bits.`},sale:{name:`Räumungsverkauf`,text:`Der Data Core kostet ab jetzt 10 Bits weniger.`}},o={wins:{name:`Minispiel-König`,text:`die meisten Minispiele gewonnen`},minus:{name:`Pechvogel`,text:`am häufigsten auf Minus-Feldern gelandet`},sabo:{name:`Saboteur`,text:`am häufigsten sabotiert`},hit:{name:`Lieblingsopfer`,text:`am häufigsten Ziel von Sabotage`}},s=Object.keys(o),c={glitch:{id:`glitch`,name:`Glitch`,role:`Der Praktikant`,ability:`Strg + Z`,text:`Ein Gegner läuft in seinem nächsten Zug rückwärts.`,cooldown:4,target:`player`,color:10288983},alice:{id:`alice`,name:`Admin Alice`,role:`Die IT-Leiterin`,ability:`System-Reboot`,text:`Ein Gegner würfelt im nächsten Zug nur 1 bis 3.`,cooldown:3,target:`player`,color:3138559},chad:{id:`chad`,name:`C-Level Chad`,role:`Der Manager`,ability:`Budgetkürzung`,text:`Stiehlt jedem Mitspieler sofort 3 Bits.`,cooldown:5,target:`none`,color:16765503},hrbot:{id:`hrbot`,name:`HR-Bot 9000`,role:`Die Personalabteilung`,ability:`Mitarbeitergespräch`,text:`Legt eine unsichtbare Falle auf dein Feld. Der erste Gegner, der sie betritt, bleibt dort stehen.`,cooldown:4,target:`none`,color:11570431},phil:{id:`phil`,name:`Phishing-Phil`,role:`Der Social Engineer`,ability:`Identitätsdiebstahl`,text:`Tauscht sofort den Platz mit einem Mitspieler.`,cooldown:6,target:`player`,color:16747069},hank:{id:`hank`,name:`Hausmeister Hank`,role:`Der physische Hacker`,ability:`Rutschgefahr`,text:`Schiebt einen Gegner in 5 Feldern Reichweite 3 Felder vor oder zurück.`,cooldown:3,target:`near`,color:16727435}},l=Object.keys(c),u={overclock:{id:`overclock`,name:`Overclock-Energy-Drink`,text:`Du würfelst mit zwei Würfeln.`,value:2,target:`none`,kind:`move`},chip:{id:`chip`,name:`Mikro-Management-Chip`,text:`Such dir eine Zahl von 1 bis 3 aus, statt zu würfeln.`,value:2,target:`none`,kind:`move`},portal:{id:`portal`,name:`CC-Mail-Portal`,text:`Teleportiert dich auf das Feld eines zufälligen Mitspielers.`,value:1,target:`none`,kind:`move`},ransomware:{id:`ransomware`,name:`Ransomware-USB`,text:`Falle auf deinem Feld. Der erste Gegner, der sie betritt, verliert 10 Bits.`,value:2,target:`none`,kind:`sabotage`},ddos:{id:`ddos`,name:`DDoS-Schwarm`,text:`Ein Gegner läuft im nächsten Zug höchstens 3 Felder.`,value:1,target:`player`,kind:`sabotage`},replyall:{id:`replyall`,name:`Reply-All-Virus`,text:`Ein Gegner verliert sein wertvollstes Item.`,value:2,target:`player`,kind:`sabotage`},adblocker:{id:`adblocker`,name:`Holographischer Adblocker`,text:`Schild für eine Runde. Wehrt den nächsten Angriff ab.`,value:3,target:`none`,kind:`utility`},expenses:{id:`expenses`,name:`Gefälschte Spesenabrechnung`,text:`Bringt sofort 15 Bits.`,value:3,target:`none`,kind:`utility`},vip:{id:`vip`,name:`VIP-Gästepass`,text:`Macht den VIP-Aufzug einmal kostenlos und schützt einmal vor dem Scanner.`,value:1,target:`none`,kind:`utility`}},d=Object.keys(u),f=[{id:`plus10`,short:`+10`,text:`bekommt 10 Bits`,tone:`good`,color:`#6dff8a`},{id:`others5`,short:`Andere −5`,text:`lacht: Alle anderen verlieren 5 Bits`,tone:`good`,color:`#9a5cff`},{id:`minus8`,short:`−8`,text:`verliert 8 Bits`,tone:`bad`,color:`#ff3d5e`},{id:`all5`,short:`Alle +5`,text:`gibt eine Runde aus: Alle bekommen 5 Bits`,tone:`good`,color:`#2fe3ff`},{id:`item`,short:`Item`,text:`bekommt ein Item geschenkt`,tone:`good`,color:`#ffd23f`},{id:`loseItem`,short:`Item weg`,text:`verliert das wertvollste Item`,tone:`bad`,color:`#ff8a3d`},{id:`jackpot`,short:`+20`,text:`knackt den Jackpot: 20 Bits`,tone:`good`,color:`#ff5fa2`},{id:`steal3`,short:`Klau 3`,text:`klaut jedem anderen 3 Bits`,tone:`good`,color:`#12c4f2`}],p=[[void 0,`Eigene`],[`original`,`Original`],[`pummel`,`Pummel`]],m=[{id:`meltdown`,name:`Server-Kernschmelze`,kind:`ffa`,control:`Tippen`,howTo:`Tippe so schnell du kannst, um deinen Server zu kühlen. Wer am meisten kühlt, gewinnt.`,durationMs:1e4,minPlayers:1},{id:`password`,name:`Passwort-Knacker`,kind:`ffa`,control:`Tippen`,howTo:`Merk dir die Farbfolge und tippe sie nach. Jede Runde kommt eine Farbe dazu. Ein Fehler beendet dein Spiel.`,durationMs:45e3,minPlayers:1},{id:`spam`,name:`Spam-Ninja`,kind:`ffa`,control:`Wischen`,howTo:`Zerschneide die Spam-Mails: mit dem Finger in einem Zug quer hindurchfahren. Antippen zählt nicht. Die gelben Geheimakten kosten Punkte.`,durationMs:3e4,minPlayers:1},{id:`shredder`,name:`Schredder-Survival`,kind:`ffa`,control:`Finger ziehen`,howTo:`Das Förderband zieht dich zum Schredder und wird immer schneller. Zieh mit dem Finger, lauf nach oben und weich den Kartons aus. Es geht so lange, bis nur noch einer übrig ist: Der Letzte muss noch drei Sekunden durchhalten.`,durationMs:12e4,minPlayers:1,endless:!0},{id:`laser`,name:`Laser-Labyrinth`,kind:`ffa`,control:`Neigen`,howTo:`Neige dein Handy, um die Kugel durch das Labyrinth zu rollen. Berührst du einen Laser, geht es zurück zum Checkpoint in der Mitte, davor zurück zum Start. Ohne Neigen geht es nicht: Am iPhone vorher „Neigen einschalten“ antippen.`,durationMs:45e3,minPlayers:1},{id:`boss`,name:`Der Boss kommt!`,kind:`solo`,control:`Tippen / Finger ziehen`,howTo:`Der Boss wirft Akten in fünf Bahnen. Die Agenten weichen aus. Wer getroffen wird, ist raus. Der Boss gewinnt, wenn er alle erwischt.`,durationMs:3e4,minPlayers:3},{id:`drone`,name:`Nachtschicht-Drohne`,kind:`solo`,control:`Finger ziehen`,howTo:`Die Drohne sucht mit ihrem Licht den dunklen Raum ab. Die Agenten sammeln USB-Sticks und bleiben im Dunkeln. Wer zu lange im Licht steht, ist erwischt. Die Drohne gewinnt, wenn sie alle erwischt.`,durationMs:3e4,minPlayers:3},{id:`coffee`,name:`Kaffee-Schmuggler`,kind:`team`,control:`Neigen oder Finger halten`,howTo:`Balanciere den wackeligen Kaffeeturm und lauf dabei so weit wie möglich. Fällt der Turm, verlierst du Zeit. Die Strecken deines Teams werden addiert.`,durationMs:3e4,minPlayers:4},{id:`cables`,name:`Kabel-Chaos`,kind:`team`,control:`Tippen`,howTo:`Tippe erst auf ein Kabel, dann auf den Port mit derselben Farbe. Jedes richtige Kabel zählt für dein Team.`,durationMs:3e4,minPlayers:4},{id:`sumo`,name:`Dachkanten-Duell`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Alle stehen auf dem Dach des MegaCorp-Turms. Lauf mit dem Joystick unten links, rempel mit dem Knopf unten rechts. Schubs die anderen über die Kante. Das Dach wird immer kleiner, wer zuletzt oben steht, gewinnt.`,durationMs:4e4,minPlayers:2},{id:`chips`,name:`Chip-Jagd`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Lauf mit dem Joystick unten links, rempel mit dem Knopf unten rechts. Auf dem Dach tauchen Chips auf. Wer zuerst da ist, bekommt ihn, goldene zählen dreifach. Rempel die anderen weg. Wer vom Dach fällt, verliert zwei Chips.`,durationMs:35e3,minPlayers:2},{id:`domino`,group:`original`,name:`Domino-Tag`,kind:`ffa`,control:`Tippen`,howTo:`Jeder Tipp stellt einen Dominostein auf. Wer in zehn Sekunden die längste Reihe baut, gewinnt.`,durationMs:1e4,minPlayers:1},{id:`flags`,group:`original`,name:`Chef sagt`,kind:`ffa`,control:`Tippen`,howTo:`Der Chef zeigt Rot oder Blau: Tippe sofort dieselbe Farbe. Zeigt er nur Punkte, ist es eine Finte, dann nicht tippen. Falsch oder zu spät, und du bist raus. Es wird immer schneller.`,durationMs:4e4,minPlayers:1},{id:`leap`,group:`original`,name:`Karriereleiter`,kind:`ffa`,control:`Links oder rechts tippen`,howTo:`Die nächste Stufe liegt links oder rechts. Tippe die richtige Seite und klettere so schnell du kannst nach oben. Ein Fehltritt kostet Zeit.`,durationMs:25e3,minPlayers:1},{id:`bomb`,group:`pummel`,name:`Heiße Ware`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Einer trägt die Bombe. Berührt er jemanden, wandert sie weiter. Wer sie hat, wenn sie hochgeht, ist raus. Dann geht die nächste Bombe los, bis einer übrig ist.`,durationMs:5e4,minPlayers:2},{id:`ice`,group:`pummel`,name:`Glatteis-Duell`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Alle stehen auf einer drehenden Eisscheibe. Es ist rutschig, also früh gegenlenken. Schubs die anderen über die Kante, die Scheibe wird immer kleiner.`,durationMs:4e4,minPlayers:2},{id:`dig`,group:`pummel`,name:`Aktensuche`,kind:`ffa`,control:`Tippen`,howTo:`Im Archiv liegt eine Geheimakte. Tippe ein Fach dreimal an, um es freizulegen. Die Zahl darin sagt, wie viele Fächer es bis zur Akte sind. Wer sie zuerst findet, gewinnt.`,durationMs:4e4,minPlayers:1},{id:`cut`,group:`original`,name:`Budget halbieren`,kind:`ffa`,control:`Tippen`,howTo:`Alle tippen gleichzeitig auf denselben Streifen, möglichst genau in die Mitte. Danach wird hineingezoomt und in Millimetern gemessen: Wer am nächsten dran ist, bekommt 5 Punkte, dann 3, 2 und 1. Fünf Runden, du hast je sieben Sekunden.`,durationMs:75e3,minPlayers:1,endless:!0},{id:`timing`,group:`original`,name:`Auf den Punkt`,kind:`ffa`,control:`Tippen`,howTo:`Der Zeiger läuft hin und her. Stoppe ihn genau im hellen Bereich. Der Bereich wird kleiner, der Zeiger schneller.`,durationMs:35e3,minPlayers:1},{id:`doors`,group:`original`,name:`Mehr oder weniger`,kind:`ffa`,control:`Tippen`,howTo:`Zwei Stapel Akten. Tippe so schnell wie möglich auf die Seite mit mehr. Falsch kostet einen Punkt.`,durationMs:2e4,minPlayers:1},{id:`odd`,group:`original`,name:`Fehlersuche`,kind:`ffa`,control:`Tippen`,howTo:`Alle Zeichen sind gleich, bis auf eines. Finde es. Das Feld wird immer größer.`,durationMs:25e3,minPlayers:1},{id:`shell`,group:`original`,name:`Hütchenspiel`,kind:`ffa`,control:`Tippen`,howTo:`Unter einem Becher liegt der Chip. Die Becher tauschen die Plätze, immer schneller. Tippe am Ende auf den richtigen.`,durationMs:45e3,minPlayers:1},{id:`whack`,group:`original`,name:`Bug-Klopfer`,kind:`ffa`,control:`Tippen`,howTo:`Käfer tauchen auf: wegtippen! Bomben in Ruhe lassen, die kosten drei Punkte.`,durationMs:2e4,minPlayers:1},{id:`floor`,group:`original`,name:`Sicherer Boden`,kind:`ffa`,control:`Tippen`,howTo:`Die sicheren Platten leuchten kurz grün. Danach tippst du eine davon an. Falsche Platte oder zu lange gezögert, und du bist raus.`,durationMs:4e4,minPlayers:1},{id:`sled`,group:`original`,name:`Vollbremsung`,kind:`ffa`,control:`Tippen`,howTo:`Dein Wagen rollt auf die Kante zu. Brems so spät wie möglich: Je näher an der Kante er steht, desto mehr Punkte. Rollt er drüber, gibt es nichts. Drei Versuche.`,durationMs:3e4,minPlayers:1},{id:`count`,group:`pummel`,name:`Inventur`,kind:`ffa`,control:`Tippen`,howTo:`Kisten, Ordner und Kaffeebecher laufen durchs Bild. Zähle das angesagte Teil mit und tippe danach die richtige Zahl.`,durationMs:45e3,minPlayers:1},{id:`maze`,group:`pummel`,name:`Geheimgang`,kind:`ffa`,control:`Tippen`,howTo:`Der Weg durch das Raster ist unsichtbar. Tippe dich Feld für Feld vor. Ein falscher Schritt, und du stehst wieder am Start, aber die Sackgasse bleibt markiert.`,durationMs:45e3,minPlayers:1},{id:`lanes`,group:`pummel`,name:`Gegenverkehr`,kind:`ffa`,control:`Tippen`,howTo:`Aktenwagen kommen dir entgegen. Wechsle mit den Pfeilen die Spur und weich aus. Wer am weitesten kommt, gewinnt.`,durationMs:4e4,minPlayers:1},{id:`crown`,group:`pummel`,name:`Kronenjagd`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Einer trägt die Krone. Wer ihn berührt, nimmt sie ihm ab. Es gewinnt, wer sie am längsten getragen hat.`,durationMs:4e4,minPlayers:2},{id:`dodge`,group:`pummel`,name:`Kugelhagel`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Kugeln fliegen quer über das Dach. Jeder Treffer und jeder Sturz kostet eins von drei Leben. Wer am längsten durchhält, gewinnt.`,durationMs:45e3,minPlayers:2},{id:`hoops`,group:`original`,name:`Dreierwurf`,kind:`ffa`,control:`Tippen`,howTo:`Der Zeiger läuft über drei Körbe. Stoppe ihn in einem davon: Der breite bringt einen Punkt, der schmale drei. Sieben Würfe.`,durationMs:35e3,minPlayers:1},{id:`hurdle`,group:`original`,name:`Funkenflug`,kind:`ffa`,control:`Tippen`,howTo:`Funken rasen auf dich zu. Tippe im richtigen Moment, um drüberzuspringen. Ein Treffer, und du bist raus.`,durationMs:4e4,minPlayers:1},{id:`squash`,group:`original`,name:`Aktenregen`,kind:`ffa`,control:`Tippen`,howTo:`Auf die roten Platten kracht gleich ein Aktenstapel. Tippe rechtzeitig auf eine freie Platte. Es werden immer mehr rote, und die Zeit wird knapper.`,durationMs:45e3,minPlayers:1},{id:`recall`,group:`original`,name:`Blitzmerker`,kind:`ffa`,control:`Tippen`,howTo:`Ein paar Dinge blitzen kurz auf. Danach tippst du das eine an, das NICHT dabei war. Sieben Runden.`,durationMs:45e3,minPlayers:1},{id:`climb`,group:`original`,name:`Aufzug-Flucht`,kind:`ffa`,control:`Tippen`,howTo:`Unter dir steigt der Kaffee, immer schneller. Jeder Tipp bringt dich einen Meter höher. Holt er dich ein, ist Schluss. Wer am höchsten kommt, gewinnt.`,durationMs:4e4,minPlayers:1},{id:`look`,group:`original`,name:`Blickrichtung`,kind:`ffa`,control:`Tippen`,howTo:`Tippe die Richtung, in die der Pfeil zeigt. Steht da „Gegenteil“, tippe die entgegengesetzte. Falsch oder zu langsam, und du bist raus.`,durationMs:4e4,minPlayers:1},{id:`pairs`,group:`original`,name:`Akten-Memory`,kind:`ffa`,control:`Tippen`,howTo:`Decke zwei Karten auf. Sind sie gleich, bleiben sie liegen. Wer alle sechs Paare zuerst hat, gewinnt.`,durationMs:45e3,minPlayers:1},{id:`quiz`,group:`original`,name:`Kopfrechnen`,kind:`ffa`,control:`Tippen`,howTo:`Rechne schnell und tippe die richtige Lösung. Falsch kostet einen Punkt und eine kurze Sperre.`,durationMs:25e3,minPlayers:1},{id:`paint`,group:`original`,name:`Farbkampf`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Jede Bodenplatte, über die du läufst, bekommt deine Farbe, auch wenn sie schon jemand anderem gehört. Wer am Ende die meisten Platten hat, gewinnt.`,durationMs:35e3,minPlayers:2},{id:`wind`,group:`original`,name:`Gegenwind`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Wie das Dachkanten-Duell, aber ein drehender Wind drückt alle Richtung Kante. Der Pfeil über dem Dach zeigt, wohin er bläst.`,durationMs:4e4,minPlayers:2},{id:`wave`,group:`original`,name:`Lichtwelle`,kind:`ffa`,control:`Joystick links, Sprung-Knopf rechts`,howTo:`Von der Mitte laufen leuchtende Ringe nach außen. Spring drüber. Jeder Treffer kostet eins von drei Leben.`,durationMs:45e3,minPlayers:2},{id:`menu`,group:`pummel`,name:`Kantinenbestellung`,kind:`ffa`,control:`Tippen`,howTo:`Die Bestellung wird Gericht für Gericht gezeigt. Tippe sie danach in derselben Reihenfolge nach. Jede Runde kommt ein Gericht dazu, ein Fehler beendet das Spiel.`,durationMs:5e4,minPlayers:1},{id:`swipe`,group:`pummel`,name:`Wischrichtung`,kind:`ffa`,control:`Wischen`,howTo:`Wische in die Richtung, die der Pfeil zeigt, so oft du kannst. Falsch gewischt kostet einen Punkt.`,durationMs:2e4,minPlayers:1},{id:`rhythm`,group:`pummel`,name:`Tastentakt`,kind:`ffa`,control:`Tippen`,howTo:`Töne fallen in drei Spuren herunter. Drück die Taste der Spur genau dann, wenn ein Ton die Linie erreicht. Genau getroffen gibt zwei Punkte.`,durationMs:35e3,minPlayers:1},{id:`beam`,group:`pummel`,name:`Laserkreisel`,kind:`ffa`,control:`Joystick links, Sprung-Knopf rechts`,howTo:`Ein Laser kreist über das Dach und wird immer schneller. Spring drüber. Jeder Treffer kostet eins von drei Leben.`,durationMs:45e3,minPlayers:2},{id:`spot`,group:`pummel`,name:`Scheinwerfer`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Scheinwerfer wandern über das Dach. Wer im Licht steht, verliert ein Leben. Es werden mehr. Wer am längsten durchhält, gewinnt.`,durationMs:45e3,minPlayers:2},{id:`atoll`,group:`pummel`,name:`Bröckeldach`,kind:`ffa`,control:`Joystick links, Knopf rechts`,howTo:`Die Bodenplatten blinken rot und brechen dann weg, von außen nach innen. Schubs die anderen in die Lücken. Wer zuletzt steht, gewinnt.`,durationMs:45e3,minPlayers:2}],h=Object.fromEntries(m.map(e=>[e.id,e])),g=[5,10,15,20],_=[`👍`,`😂`,`😱`,`😡`,`🤝`,`💸`,`GG`,`Autsch`],v=1.55,y=v,b=19,x=[`plus`,`plus`,`minus`,`item`,`plus`,`event`,`plus`,`minus`,`plus`,`neutral`,`plus`,`item`,`minus`,`plus`,`plus`,`event`,`minus`,`item`,`plus`],S=2.2,C=e=>e<=2||e>=18?0:e===3||e===17?S/3:e===4||e===16?S*2/3:S,w=[[-3.6,0,1.6,`plus`],[-5.7,0,1.6,`item`],[-7.8,0,1.6,`minus`],[-9,0,0,`event`],[-7.8,0,-1.6,`plus`],[-5.7,0,-1.6,`item`],[-3.6,0,-1.6,`minus`]].map(([e,t,n,r])=>[e*y,t,n*y,r]),T=[`plus`,`event`,`plus`,`minus`,`item`,`plus`,`minus`,`event`,`plus`],E=[2.7,3.1,3.4,3.5,3.4,3,2.3,1.5,.7],D=[[5.3,1,-2.2,`minus`],[5.5,1.4,0,`item`],[5.3,1,2.2,`minus`]].map(([e,t,n,r])=>[e*y,t,n*y,r]);function O(e,t){let n=4.2*y,r=r=>{let i=1-r,a=i*i*i+3*i*i*r;return[a*e.x+(1-a)*t.x,e.z-n*(3*i*i*r+3*i*r*r)]},i=[0],a=r(0);for(let e=1;e<=400;e++){let t=r(e/400);i.push(i[e-1]+Math.hypot(t[0]-a[0],t[1]-a[1])),a=t}let o=T.length;return T.map((e,t)=>{let n=i[400]*(t+1)/(o+1),a=i.findIndex(e=>e>=n),[s,c]=r(a/400);return[s,E[t],c,e]})}var k=[12,36],A=[13,27,45],j=[17,52,55];function ee(){let e=[{id:0,type:`neutral`,x:0,y:0,z:0,next:[1,20],prev:[b,38]}];for(let t=0;t<2;t++)for(let n=1;n<=b;n++){let r=t*b+n,i=Math.PI*2*n/20,a=t===0?-1:1;e.push({id:r,type:x[n-1],x:a*y*(.9+5.9*(1-Math.cos(i))),y:t===0?C(n):0,z:-a*y*4.6*Math.sin(i),next:[n===b?0:r+1],prev:[n===1?0:r-1]})}let t=(t,n,r)=>{let i=e.length;r.forEach(([a,o,s,c],l)=>{let u=i+l;e.push({id:u,type:c,x:a,y:o,z:s,next:[l===r.length-1?n:u+1],prev:[l===0?t:u-1]})}),e[t].next.push(i),e[n].prev.push(i+r.length-1)};t(2,18,w),t(14,25,O(e[14],e[25])),t(23,35,D);for(let t of k)e[t].type=`wheel`;for(let t of A)e[t].type=`shop`;for(let t of j)e[t].type=`crash`;return e[57].type=`neutral`,e}var M=ee(),N=[5,15,24,34],P=[10,29],F=[7,8,9,26,27,28],te=[30,31,32,33],ne=e=>e>=55?`Serversteg`:e>=46?`Skybridge`:e>=39?`Kantine`:e>=20?`Serverhalle`:e>=3&&e<=17?`Galerie`:e===0?`Kreuzung`:`Empfang`,re=e=>e===P[0]?P[1]:e===P[1]?P[0]:null;function ie(e,t){if(e===t)return 0;let n=new Set([e]),r=[e];for(let e=1;r.length;e++){let i=[];for(let a of r)for(let r of[...M[a].next,...M[a].prev]){if(r===t)return e;n.has(r)||(n.add(r),i.push(r))}r=i}return 1/0}var I={decide:2e4,away:2500,step:380,afterLand:2800,miniIntro:25e3,miniCountdown:3500,miniGrace:6e3,miniResult:8e3,wheel:5e3,miniResultOnly:12e3},ae=(e,t)=>e[Math.min(e.length-1,Math.floor(t.rng()*e.length))];function L(e,t,n){let i=new Set(e.map(e=>e.char).filter(Boolean)),a=l.filter(e=>!i.has(e)),o={phase:`board`,round:1,settings:{rounds:t.rounds,minis:t.minis.filter(e=>h[e]),mode:t.mode===`minis`?`minis`:`board`,bonus:t.bonus!==!1},order:e.map(e=>e.id),turnOrder:e.map(e=>e.id),turnIndex:0,finale:null,awards:[],players:{},turn:null,mini:null,core:Math.floor(n.rng()*N.length)%N.length,traps:[],flood:null,lastMini:null,ranking:[],seq:0,events:[]};for(let n of e)o.players[n.id]={id:n.id,name:n.name,char:n.char??a.shift()??`glitch`,pos:0,bits:t.mode===`minis`?0:r.startBits,cores:0,items:[],cooldown:0,backward:!1,d3:!1,maxSteps:null,shield:0,vipLift:!1,vipScan:!1,away:!1,stats:{wins:0,minus:0,sabo:0,hit:0},grudge:null};return o.events.push({t:`round`,n:1}),o.settings.mode===`minis`?Ce(o,n):fe(o,n),o}var R=e=>e.players[e.turn.player],z=(e,t)=>e.order.filter(e=>e!==t).map(t=>e.players[t]);function B(e,t,n,r){let i=n<0?-Math.min(t.bits,-n):n;return i!==0&&(t.bits+=i,e.events.push({t:`bits`,p:t.id,d:i,why:r})),i}function oe(e,t){return t.shield>=e.round&&(t.shield=0,e.events.push({t:`blocked`,p:t.id}),!0)}var se=e=>[...e.order].sort((t,n)=>e.players[n].cores-e.players[t].cores||e.players[n].bits-e.players[t].bits);function ce(e,t,n,r=d){let i=se(e),a=t=>e.players[t].cores*1e3+e.players[t].bits,o=i.filter(e=>a(e)>a(t.id)).length,s=i.filter(e=>a(e)<a(t.id)).length,c=i.length>1?(o-s)/(i.length-1):0,l=r.map(e=>Math.max(.2,1+(u[e].value-2)*c*.8)),f=l.reduce((e,t)=>e+t,0),p=n.rng()*f;for(let e=0;e<r.length;e++)if(p-=l[e],p<0)return r[e];return r[r.length-1]}function le(e,t,n,i){if(t.items.length>=r.maxItems)return;let a=ce(e,t,n,i);t.items.push(a),e.events.push({t:`gain`,p:t.id,item:a})}function ue(e,t,n){t.id!==n.id&&(n.stats.hit++,t.grudge===n.id&&(t.grudge=null,e.events.push({t:`revenge`,p:t.id,on:n.id}),B(e,t,r.revenge,`revenge`)),n.grudge=t.id)}function de(e,t){e.core=ae(N.map((e,t)=>t).filter(t=>t!==e.core),t),e.events.push({t:`coreMove`,to:N[e.core]})}function fe(e,t){let n=e.turnOrder[e.turnIndex],r=e.players[n];e.turn={player:n,stage:`pre`,usedItem:!1,usedAbility:!1,dice:1,steps:0,dir:1,decision:null,asked:[],slipped:!1,stopped:!1,moved:0,deadline:t.now+(r.away?I.away:I.decide)},e.events.push({t:`turn`,p:n})}function pe(e,t){return!!e.flood&&te.includes(t)}function me(e,t,n){let r=e.turn;r.steps=t,r.stage=`decide`,he(e,n)}function he(e,t,n){let i=e.turn,a=R(e),o=[],s=()=>{o.length&&e.events.push({t:`move`,p:a.id,path:o}),o=[]},c=e=>{s(),i.decision=e,i.stage=`decide`,i.deadline=t.now+(a.away?I.away:I.decide)+I.step*6};for(i.decision=null;;){if(!i.stopped&&a.pos===N[e.core]&&!i.asked.includes(`near`)){i.asked.push(`near`);let t=xe(e)-a.bits;t>0&&t<=r.nearMiss&&(s(),e.events.push({t:`near`,p:a.id,missing:t}))}if(!i.stopped&&a.pos===N[e.core]&&a.bits>=xe(e)&&!i.asked.includes(`core`))return i.asked.push(`core`),c({kind:`core`,price:xe(e)});let t=re(a.pos);if(!i.stopped&&t!==null&&!i.asked.includes(`lift`)&&(a.vipLift||a.bits>=r.liftPrice))return i.asked.push(`lift`),c({kind:`lift`,price:a.vipLift?0:r.liftPrice,to:t});if(i.steps<=0)break;let l=i.dir>0?M[a.pos].next:M[a.pos].prev,u=l[0];if(l.length>1){if(n===void 0)return c({kind:`branch`,options:[...l]});u=l[Math.max(0,Math.min(l.length-1,n))],n=void 0}a.pos=u,o.push(u),i.steps--,i.moved++;let d=e.traps.findIndex(e=>e.node===a.pos&&e.owner!==a.id);if(d>=0){let t=e.traps[d];e.traps.splice(d,1),s(),oe(e,a)||(e.events.push({t:`trap`,p:a.id,kind:t.kind,owner:t.owner}),e.players[t.owner]&&ue(e,e.players[t.owner],a),t.kind===`ransom`?B(e,a,-r.ransom,`ransom`):(i.steps=0,i.stopped=!0))}}s(),ge(e,t)}function ge(e,t){let n=e.turn,i=R(e);if(!n.stopped){if(pe(e,i.pos)&&!n.slipped)return n.slipped=!0,n.steps=r.slip,n.asked=n.asked.filter(e=>e!==`core`&&e!==`lift`&&e!==`near`),he(e,t);let a=M[i.pos].type,o=e.finale===`double`?2:1;if(a===`plus`)B(e,i,r.plus*o,`plus`);else if(a===`minus`||a===`crash`)i.stats.minus++,B(e,i,-(a===`crash`?r.crash:r.minus)*o,a);else if(a===`shop`){let r=_e(e,i,t);if(r){n.decision=r,n.stage=`decide`,n.deadline=t.now+(i.away?I.away:I.decide)+n.moved*I.step;return}}else if(a===`item`)le(e,i,t);else if(a===`event`)ve(e,t);else if(a===`wheel`){n.decision={kind:`wheel`},n.stage=`decide`,n.deadline=t.now+(i.away?I.away:I.decide)+n.moved*I.step;return}}n.stage=`end`,n.decision=null,n.deadline=t.now+I.afterLand+n.moved*I.step}function _e(e,t,n){let a=[...d],o=[];for(let e=0;e<3;e++){let e=a.splice(Math.min(a.length-1,Math.floor(n.rng()*a.length)),1)[0];o.push({item:e,price:i(e)})}let s=se(e).filter(n=>n!==t.id&&e.players[n].cores>0)[0],c=s&&e.round*2>e.settings.rounds?{from:s,price:r.stealPrice}:null;return!(t.items.length<r.maxItems&&o.some(e=>t.bits>=e.price))&&!(c&&t.bits>=c.price)?null:{kind:`shop`,offers:o,steal:c}}function V(e,t,n){let i=ae(f.map((e,t)=>t),n);e.events.push({t:`wheel`,p:t.id,slot:i});let a=e.order.filter(e=>e!==t.id).map(t=>e.players[t]);switch(f[i].id){case`plus10`:B(e,t,10,`wheel`);break;case`jackpot`:B(e,t,20,`wheel`);break;case`minus8`:B(e,t,-8,`wheel`);break;case`all5`:for(let t of e.order)B(e,e.players[t],5,`wheel`);break;case`others5`:for(let t of a)oe(e,t)||B(e,t,-5,`wheel`);break;case`steal3`:{let n=0;for(let t of a)oe(e,t)||(n-=B(e,t,-3,`wheel`));B(e,t,n,`wheel`);break}case`item`:t.items.length<r.maxItems?le(e,t,n):B(e,t,6,`wheel`);break;case`loseItem`:{let n=[...t.items].sort((e,t)=>u[t].value-u[e].value)[0];n?(t.items.splice(t.items.indexOf(n),1),e.events.push({t:`lose`,p:t.id,item:n})):B(e,t,-4,`wheel`);break}}}function ve(e,t){let n=ae([`flood`,`restructure`,`bonus`],t);if(e.events.push({t:`event`,kind:n}),n===`flood`)e.flood={until:e.round+1};else if(n===`restructure`)de(e,t);else for(let t of e.order)B(e,e.players[t],r.bonusEvent,`bonus`)}function ye(e,t,n){let r=e.turn,i=R(e),a=i.d3?3:6,o=n===void 0?Array.from({length:r.dice},()=>1+Math.min(a-1,Math.floor(t.rng()*a))):[n],s=o.reduce((e,t)=>e+t,0),c=n===void 0?i.d3?`d3`:void 0:`chip`;i.maxSteps!==null&&s>i.maxSteps&&(s=i.maxSteps,c=`cap`),r.dir=i.backward?-1:1,i.backward&&(c=`back`),i.backward=!1,i.d3=!1,i.maxSteps=null,e.events.push({t:`dice`,p:i.id,values:o,total:s,note:c}),me(e,s,t)}function be(e,t,n){let i=e.players[t];return z(e,t).filter(e=>n===`player`||ie(i.pos,e.pos)<=r.hankRange).map(e=>e.id)}function H(e,t,n){let i=e.turn,a=R(e),o=a.items.indexOf(t.item),s=u[t.item];if(i.stage!==`pre`||i.usedItem||o<0||!s)return!1;let c;if(s.target===`player`){if(!t.target||!be(e,a.id,`player`).includes(t.target))return!1;c=e.players[t.target]}if(t.item===`chip`&&t.n!==1&&t.n!==2&&t.n!==3||t.item===`portal`&&z(e,a.id).length===0)return!1;switch(a.items.splice(o,1),i.usedItem=!0,s.kind===`sabotage`&&a.stats.sabo++,e.events.push({t:`item`,p:a.id,item:t.item,target:c?.id}),t.item){case`overclock`:i.dice=2;break;case`chip`:ye(e,n,t.n);break;case`portal`:{let t=ae(z(e,a.id),n).pos;a.pos=t,e.events.push({t:`tp`,p:a.id,to:t,why:`portal`});break}case`ransomware`:e.traps=e.traps.filter(e=>e.node!==a.pos),e.traps.push({node:a.pos,owner:a.id,kind:`ransom`});break;case`ddos`:oe(e,c)||(c.maxSteps=3,ue(e,a,c));break;case`replyall`:if(!oe(e,c)&&(ue(e,a,c),c.items.length)){let t=[...c.items].sort((e,t)=>u[t].value-u[e].value)[0];c.items.splice(c.items.indexOf(t),1),e.events.push({t:`lose`,p:c.id,item:t})}break;case`adblocker`:a.shield=e.round+1;break;case`expenses`:B(e,a,r.expenses,`expenses`);break;case`vip`:a.vipLift=!0,a.vipScan=!0}return!0}var xe=e=>Math.max(10,r.corePrice+r.coreStep*Object.values(e.players).reduce((e,t)=>e+t.cores,0)-(e.finale===`sale`?r.saleDiscount:0));function U(e,t,n,r,i){for(let e=0;e<r;e++)t.pos=ae(n>0?M[t.pos].next:M[t.pos].prev,i);e.events.push({t:`tp`,p:t.id,to:t.pos,why:`push`})}function W(e,t,n){let i=e.turn,a=R(e),o=c[a.char];if(i.stage!==`pre`||i.usedAbility||a.cooldown>0)return!1;let s;if(o.target!==`none`){if(!t.target||!be(e,a.id,o.target).includes(t.target))return!1;s=e.players[t.target]}switch(i.usedAbility=!0,a.cooldown=o.cooldown,a.stats.sabo++,e.events.push({t:`ability`,p:a.id,char:a.char,target:s?.id}),a.char){case`glitch`:oe(e,s)||(s.backward=!0,ue(e,a,s));break;case`alice`:oe(e,s)||(s.d3=!0,ue(e,a,s));break;case`chad`:for(let t of z(e,a.id))oe(e,t)||(B(e,a,-B(e,t,-r.chadSteal,`chad`),`chad`),ue(e,a,t));break;case`hrbot`:e.traps=e.traps.filter(e=>e.node!==a.pos),e.traps.push({node:a.pos,owner:a.id,kind:`stop`});break;case`phil`:if(!oe(e,s)){let t=a.pos;a.pos=s.pos,s.pos=t,e.events.push({t:`tp`,p:a.id,to:a.pos,why:`swap`}),e.events.push({t:`tp`,p:s.id,to:s.pos,why:`swap`}),ue(e,a,s)}break;case`hank`:oe(e,s)||(U(e,s,t.dir===-1?-1:1,r.hankPush,n),ue(e,a,s))}return!0}function Se(e,t){if(e.turnIndex+1<e.turnOrder.length)e.turnIndex++,fe(e,t);else{if(e.turn=null,e.round%r.scannerEvery===0){let t=[],n=[];for(let r of e.order){let i=e.players[r];F.includes(i.pos)&&(i.vipScan?(i.vipScan=!1,n.push(r)):t.push(r))}e.events.push({t:`scan`,hit:t,saved:n});for(let n of t)B(e,e.players[n],-r.scannerFine,`scan`)}Ce(e,t)}}function Ce(e,t){let n=e.order.length,r=m.filter(t=>e.settings.minis.includes(t.id)&&t.minPlayers<=n);if(r.length>1&&(r=r.filter(t=>t.id!==e.lastMini)),!r.length)return Ee(e,t);let i=ae(r,t),a=[...e.order];for(let e=a.length-1;e>0;e--){let n=Math.floor(t.rng()*(e+1))%(e+1);[a[e],a[n]]=[a[n],a[e]]}let o=Math.ceil(n/2);e.phase=`mini`,e.lastMini=i.id,e.mini={id:i.id,seed:Math.floor(t.rng()*2**31),stage:`intro`,ready:e.order.filter(t=>e.players[t].away),scores:Object.fromEntries(e.order.map(e=>[e,null])),solo:i.kind===`solo`?a[0]:null,teams:i.kind===`team`?[a.slice(0,o),a.slice(o)]:null,ranking:[],rewards:{},winners:[],deadline:t.now+I.miniIntro},e.events.push({t:`mini`,id:i.id}),we(e,t)}function we(e,t){let n=e.mini;if(n.stage===`intro`&&e.order.every(e=>n.ready.includes(e))){n.stage=`play`,n.deadline=t.now+I.miniCountdown+h[n.id].durationMs+I.miniGrace;for(let t of e.order)e.players[t].away&&(n.scores[t]=0);Te(e,t)}}function Te(e,t,n=!1){let i=e.mini;if(i.stage!==`play`||!n&&e.order.some(e=>i.scores[e]===null))return;let a=e=>i.scores[e]??0,o=h[i.id],s={},c=[];if(o.kind===`solo`&&i.solo){let t=e.order.filter(e=>e!==i.solo),n=t.filter(e=>a(e)>0);if(n.length===0){c=[i.solo],s[i.solo]=r.miniRewards[0];for(let e of t)s[e]=r.miniRewards[3]}else{c=n,s[i.solo]=r.miniRewards[3];for(let e of t)s[e]=n.includes(e)?r.miniRewards[0]:r.miniRewards[2]}i.ranking=[...c,...e.order.filter(e=>!c.includes(e))]}else if(o.kind===`team`&&i.teams){let[t,n]=i.teams,o=e=>e.reduce((e,t)=>e+a(t),0),l=o(t)*(t.length<n.length?n.length/Math.max(1,t.length):1),u=o(n)*(n.length<t.length?t.length/Math.max(1,n.length):1);c=l===u?[]:l>u?t:n;for(let t of e.order)s[t]=c.length===0?r.miniRewards[1]:c.includes(t)?r.miniRewards[0]:r.miniRewards[2];i.ranking=[...c,...e.order.filter(e=>!c.includes(e))]}else{i.ranking=[...e.order].sort((e,t)=>a(t)-a(e));let t=0;i.ranking.forEach((e,n)=>{n>0&&a(e)<a(i.ranking[n-1])&&(t=n),s[e]=r.miniRewards[Math.min(t,r.miniRewards.length-1)]}),c=i.ranking.filter(e=>a(e)===a(i.ranking[0]))}i.rewards=s,i.winners=c;for(let t of c)e.players[t].stats.wins++;e.settings.mode!==`minis`&&(e.turnOrder=[...i.ranking]),i.stage=`result`,i.deadline=t.now+(e.settings.mode===`minis`?I.miniResultOnly:I.miniResult),e.events.push({t:`miniResult`});for(let t of e.order)B(e,e.players[t],s[t]??0,`mini`)}function Ee(e,t){let n=!!e.mini&&e.settings.mode!==`minis`;e.mini=null;for(let t of e.order){let n=e.players[t];n.cooldown>0&&n.cooldown--,n.shield&&n.shield<=e.round&&(n.shield=0)}if(e.flood&&e.flood.until<=e.round&&(e.flood=null),e.round>=e.settings.rounds){e.phase=`final`,e.turn=null,e.settings.mode!==`minis`&&e.settings.bonus!==!1&&Oe(e,t);let n=Object.fromEntries(e.order.map(e=>[e,t.rng()]));e.ranking=[...e.order].sort((t,r)=>{let i=e.players[t],a=e.players[r];return a.cores-i.cores||a.bits-i.bits||n[r]-n[t]}),e.events.push({t:`final`})}else{if(e.round++,e.phase=`board`,e.turnIndex=0,e.events.push({t:`round`,n:e.round}),e.settings.mode===`minis`)return e.turn=null,Ce(e,t);n&&e.events.push({t:`order`,order:[...e.turnOrder]}),!e.finale&&e.settings.rounds>=5&&e.round===e.settings.rounds-r.finaleRounds+1&&De(e,t),fe(e,t)}}function De(e,t){let n=ae([`double`,`gift`,`sale`],t);if(e.finale=n,n!==`gift`){e.events.push({t:`finale`,kind:n});return}let i=se(e),a=e.players[i[i.length-1]];e.events.push({t:`finale`,kind:n,p:a.id}),le(e,a,t,d.filter(e=>u[e].value>=2)),B(e,a,r.giftBits,`gift`)}function Oe(e,t){let n=[...s];for(let e=n.length-1;e>0;e--){let r=Math.floor(t.rng()*(e+1))%(e+1);[n[e],n[r]]=[n[r],n[e]]}for(let t of n){if(e.awards.length>=2)break;let n=Math.max(...e.order.map(n=>e.players[n].stats[t]));if(n<=0)continue;let r=e.order.filter(r=>e.players[r].stats[t]===n);e.awards.push({id:t,winners:r,value:n})}for(let t of e.awards)for(let n of t.winners)e.players[n].cores++}function ke(e,t,n,r){e.events=[];let i=Ae(e,t,n,r);return i&&e.seq++,i}function Ae(e,t,n,i){if(!e.players[t])return!1;if(e.phase===`mini`&&e.mini){let r=e.mini;if(n.t===`ready`&&r.stage===`intro`&&!r.ready.includes(t))return r.ready.push(t),we(e,i),!0;if(n.t===`score`&&r.stage===`play`&&r.scores[t]===null){let a=Number.isFinite(n.score)?Math.max(0,Math.min(1e6,Math.round(n.score))):0;return r.scores[t]=a,Te(e,i),!0}return!1}if(e.phase!==`board`||!e.turn||e.turn.player!==t)return!1;let a=e.turn;switch(n.t){case`roll`:return a.stage===`pre`&&(ye(e,i),!0);case`item`:return H(e,n,i);case`ability`:return W(e,n,i);case`decide`:{let t=a.decision;if(a.stage!==`decide`||!t)return!1;let o=R(e);if(t.kind===`branch`)he(e,i,n.choice);else if(t.kind===`core`)n.choice===1&&o.bits>=t.price&&(B(e,o,-t.price,`core`),o.cores++,e.events.push({t:`core`,p:o.id}),de(e,i)),he(e,i);else if(t.kind===`shop`){let s=t.offers[n.choice-1];if(s&&o.bits>=s.price&&o.items.length<r.maxItems)B(e,o,-s.price,`shop`),o.items.push(s.item),e.events.push({t:`gain`,p:o.id,item:s.item});else if(n.choice===t.offers.length+1&&t.steal&&o.bits>=t.steal.price){let n=e.players[t.steal.from];B(e,o,-t.steal.price,`steal`),o.stats.sabo++;let r=n.cores>0&&!oe(e,n);e.events.push({t:`steal`,p:o.id,from:n.id,ok:r}),r&&(n.cores--,o.cores++,ue(e,o,n))}a.stage=`end`,a.decision=null,a.deadline=i.now+I.afterLand}else t.kind===`wheel`?(V(e,o,i),a.stage=`end`,a.decision=null,a.deadline=i.now+I.afterLand+I.wheel):(n.choice===1&&(o.vipLift||o.bits>=r.liftPrice)&&(o.vipLift?o.vipLift=!1:B(e,o,-r.liftPrice,`lift`),o.pos=t.to,e.events.push({t:`tp`,p:o.id,to:t.to,why:`lift`})),he(e,i));return!0}}return!1}function je(e,t){let n=e.phase===`board`&&!!e.turn&&t.now>=e.turn.deadline,r=e.phase===`mini`&&!!e.mini&&t.now>=e.mini.deadline;if(!n&&!r)return!1;e.events=[];let i=e.seq;if(e.phase===`board`&&e.turn&&t.now>=e.turn.deadline){let n=e.turn;if(n.stage===`pre`)ye(e,t);else if(n.stage===`decide`&&n.decision){let r=n.decision,i=r.kind===`branch`?Math.floor(t.rng()*r.options.length):+(r.kind===`core`);Ae(e,n.player,{t:`decide`,choice:i},t)}else n.stage===`end`&&Se(e,t);e.seq++}else if(e.phase===`mini`&&e.mini&&t.now>=e.mini.deadline){let n=e.mini;n.stage===`intro`?(n.ready=[...e.order],we(e,t)):n.stage===`play`?Te(e,t,!0):Ee(e,t),e.seq++}return e.seq!==i}function Me(e){e.turnOrder??=[...e.order],e.finale??=null,e.awards??=[];for(let t of e.order)e.players[t].stats??={wins:0,minus:0,sabo:0,hit:0},e.players[t].grudge??=null;return e}function Ne(e,t,n,r){let i=e.players[t];i&&i.away!==n&&(i.away=n,e.events=[],n&&(e.turn&&e.turn.player===t&&e.turn.stage!==`end`&&(e.turn.deadline=Math.min(e.turn.deadline,r.now+I.away)),e.mini&&(e.mini.stage===`intro`&&!e.mini.ready.includes(t)?(e.mini.ready.push(t),we(e,r)):e.mini.stage===`play`&&e.mini.scores[t]===null&&(e.mini.scores[t]=0,Te(e,r)))),e.seq++)}function Pe(e,t){e.turn&&(e.turn.deadline=t.now+(e.turn.stage===`end`?I.afterLand:I.decide)),e.mini&&(e.mini.deadline=t.now+(e.mini.stage===`intro`?I.miniIntro:e.mini.stage===`play`?I.miniCountdown+h[e.mini.id].durationMs+I.miniGrace:I.miniResult))}var Fe=15e3,Ie=2e3,Le=2500,Re=250,ze=2e4,Be=8e3,Ve=6e4,He=()=>({rounds:10,minis:m.map(e=>e.id),bonus:!0}),Ue=e=>(typeof e==`string`?e.trim().slice(0,14):``)||`Namenlos`,We=e=>typeof e==`string`&&e in c?e:null,Ge=e=>{let t=e;return!!t&&Number.isInteger(t.nr)&&Number.isInteger(t.value)&&t.value>=1&&t.value<=6&&typeof t.by==`string`},Ke=e=>{let t=e;return!!t&&typeof t.hostId==`string`&&typeof t.createdAt==`number`&&typeof t.epoch==`number`&&Array.isArray(t.players)&&t.players.length<=6&&t.players.every(e=>e&&typeof e.id==`string`&&typeof e.name==`string`&&typeof e.online==`boolean`)&&(t.roll===null||Ge(t.roll))&&!!t.settings&&(t.game===null||typeof t.game==`object`)},qe=class{options;t;now;random;name;view;listeners=new Set;rollListeners=new Set;fxListeners=new Set;startedAt=0;lastRollAt=-1/0;lastRollNr=0;pingTimer=null;tickTimer=null;noHostTimer=null;pingTick=0;wantedChar=null;peers=new Set;mismatched=new Set;mayFlagStale;constructor(e){this.options=e,this.t=e.transport,this.now=e.now??(()=>Date.now()),this.random=e.random??Math.random,this.name=Ue(e.name),this.mayFlagStale=e.hostLostAt==null,this.view={phase:`connecting`,role:e.role,code:e.code,selfId:null,state:null,hostOnline:!1,noHostHint:!1,pings:{},links:{},joinMs:null,stableSince:null,drops:0,notice:null,errors:[],stale:!1,hostLostAt:e.hostLostAt??null}}getView(){return this.view}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onRoll(e){return this.rollListeners.add(e),()=>this.rollListeners.delete(e)}onFx(e){return this.fxListeners.add(e),()=>this.fxListeners.delete(e)}async start(){this.startedAt=this.now(),this.t.on(`hello`,(e,t)=>this.onHello(e,t)),this.t.on(`state`,(e,t)=>this.onState(e,t)),this.t.on(`roll`,(e,t)=>this.onRollMessage(e,t)),this.t.on(`act`,(e,t)=>this.onAct(e,t)),this.t.on(`fx`,(e,t)=>this.onFxMessage(e,t)),this.t.on(`full`,(e,t)=>this.onFull(t)),this.t.onJoin(e=>this.onJoin(e)),this.t.onLeave(e=>this.onLeave(e)),this.t.onError(e=>this.onNetError(e));let e=await this.t.start();if(this.view.phase===`closed`)return;this.view.selfId=e;let t=this.options.restore&&Ke(this.options.restore)?this.options.restore:null;if(t?.game&&Me(t.game),this.view.role===`host`){let n=t&&t.hostId===e?{...t,players:t.players.map(t=>({...t,name:t.id===e?this.name:t.name,online:t.id===e}))}:{hostId:e,createdAt:this.now(),epoch:1,players:[{id:e,name:this.name,online:!0,char:null}],roll:null,settings:He(),game:null};this.becomeHost(n)}else t&&t.hostId!==e&&t.players.some(t=>t.id===e)?(this.view.state=t,this.view.phase=`joined`,this.view.hostLostAt??=this.now(),this.lastRollNr=t.roll?.nr??0):this.view.phase=`searching`,this.noHostTimer=setTimeout(()=>{this.view.phase===`searching`&&(this.view.noHostHint=!0,this.emit())},Fe);this.pingTimer=setInterval(()=>void this.measure(),Ie),this.emit()}requestRoll(){let{state:e,selfId:t,role:n,hostOnline:r}=this.view;e&&t&&this.view.phase===`joined`&&(n===`host`?this.doRoll(t):r&&this.t.send(`act`,{t:`rollReq`},e.hostId))}pickChar(e){this.wantedChar=e,this.sendAct({t:`char`,char:e})}act(e){this.sendAct({t:`game`,a:e})}setSettings(e){this.sendAct({t:`settings`,s:e})}startGame(){this.sendAct({t:`start`})}endGame(){this.sendAct({t:`end`})}sendFx(e,t){let{state:n,selfId:r,role:i}=this.view;if(!n||!r||this.view.phase!==`joined`)return;let a={k:e,from:r,d:t};i===`host`?(this.t.send(`fx`,a),this.fxListeners.forEach(e=>e(a))):this.view.hostOnline&&(this.t.send(`fx`,a,n.hostId),this.fxListeners.forEach(e=>e(a)))}async leave(){this.close(),await this.t.leave().catch(()=>{})}tick(){let e=this.view.state?.game;this.view.role===`host`&&this.view.phase===`joined`&&e&&je(e,this.env())&&(this.broadcast(),this.emit())}env(){return{rng:this.random,now:this.now()}}sendAct(e){let{state:t,selfId:n,role:r}=this.view;t&&n&&this.view.phase===`joined`&&(r===`host`?this.handleAct(e,n):this.view.hostOnline&&this.t.send(`act`,e,t.hostId))}onJoin(e){if(this.view.phase!==`closed`){if(this.peers.add(e),this.view.role===`host`){let t=this.view.state;this.t.send(`hello`,{role:`host`,v:2,createdAt:t.createdAt,epoch:t.epoch},e),this.t.send(`state`,t,e)}else this.t.send(`hello`,{role:`guest`,v:2,name:this.name,char:this.wantedChar},e)}}onLeave(e){if(this.peers.delete(e),this.view.phase===`closed`)return;delete this.view.pings[e],delete this.view.links[e];let t=this.view.state;if(this.view.role===`host`&&t){let n=t.players.find(t=>t.id===e);n?.online&&(n.online=!1,this.view.drops++,this.view.stableSince=this.now(),t.game&&Ne(t.game,e,!0,this.env()),this.broadcast())}else t&&e===t.hostId&&this.view.hostOnline&&(this.view.hostOnline=!1,this.view.drops++,this.view.stableSince=null,this.view.hostLostAt??=this.now());this.emit()}onHello(e,t){let n=e;if(n?.v!==2&&this.view.phase!==`closed`){this.mismatched.add(t),(this.view.role===`host`||n?.role===`host`)&&(this.view.notice={kind:`version`,at:this.now()},this.emit());return}if(this.view.role!==`host`||this.view.phase!==`joined`)return;let r=this.view.state;if(n?.role===`host`){let e=typeof n.epoch==`number`?n.epoch:0;if(e>r.epoch)return this.demote();if(e<r.epoch)return;let i=typeof n.createdAt==`number`?n.createdAt:1/0;(i<r.createdAt||i===r.createdAt&&t<this.view.selfId)&&(this.view.notice={kind:`host-conflict`},this.leave());return}let i=r.players.find(e=>e.id===t);if(i)i.name=Ue(n?.name),i.online=!0,r.game&&Ne(r.game,t,!1,this.env());else if(r.players.length>=6){this.t.send(`full`,{},t);return}else{let e=We(n?.char),i=e&&!r.players.some(t=>t.char===e)?e:null;r.players.push({id:t,name:Ue(n?.name),online:!0,char:i})}this.view.joinMs===null&&(this.view.joinMs=this.now()-this.startedAt),this.broadcast(),this.emit()}onState(e,t){if(this.view.phase===`closed`||this.view.phase===`connecting`||this.mismatched.has(t)||!Ke(e)||e.hostId!==t)return;let n=this.view.state;if(this.view.role===`host`){if(n&&e.epoch>n.epoch)this.demote();else return}else if(n&&n.hostId!==t&&e.epoch<=n.epoch)return;else if(n&&n.hostId===t&&e.epoch<n.epoch)return;let r=!n||n.hostId!==t;this.view.state=e,this.view.stale=!1,this.mayFlagStale=!0,this.view.hostLostAt=null,this.view.noHostHint=!1,this.noHostTimer&&clearTimeout(this.noHostTimer),this.view.hostOnline||(this.view.hostOnline=!0,this.view.stableSince=this.now());let i=e.players.find(e=>e.id===this.view.selfId);i?(this.view.phase=`joined`,this.view.joinMs===null&&(this.view.joinMs=this.now()-this.startedAt),i.online||this.t.send(`hello`,{role:`guest`,v:2,name:this.name,char:this.wantedChar},t)):(this.view.phase=`searching`,this.t.send(`hello`,{role:`guest`,v:2,name:this.name,char:this.wantedChar},t));let a=e.roll?.nr??0;a>this.lastRollNr&&(this.lastRollNr=a,!r&&e.roll&&this.rollListeners.forEach(t=>t(e.roll))),this.options.persist?.(e,this.view.role),this.emit()}onRollMessage(e,t){let n=this.view.state;this.view.role===`guest`&&n&&t===n.hostId&&Ge(e)&&(e.nr<=this.lastRollNr||(this.lastRollNr=e.nr,n.roll=e,this.rollListeners.forEach(t=>t(e)),this.emit()))}onAct(e,t){this.view.role===`host`&&this.view.phase===`joined`&&this.view.state.players.some(e=>e.id===t&&e.online)&&this.handleAct(e,t)}onFxMessage(e,t){let n=this.view.state,r=e;if(n&&r&&typeof r.k==`string`){if(this.view.role===`host`){if(!n.players.some(e=>e.id===t))return;let e={k:r.k,from:t,d:r.d};for(let r of n.players)r.online&&r.id!==t&&r.id!==this.view.selfId&&this.t.send(`fx`,e,r.id);this.fxListeners.forEach(t=>t(e))}else t===n.hostId&&r.from!==this.view.selfId&&this.fxListeners.forEach(e=>e(r))}}onFull(e){this.view.role===`guest`&&this.view.phase===`searching`&&(this.view.state&&this.view.state.hostId!==e||(this.view.notice={kind:`full`},this.leave()))}onNetError(e){this.view.errors=[...this.view.errors,e].slice(-5),(e.code===`peer-connect-failed`||e.code===`relay-failed`)&&(this.view.notice={kind:`net`,code:e.code,at:this.now(),turnConfigured:e.turnConfigured}),this.emit()}handleAct(e,t){let n=this.view.state,r=e,i=t===this.view.selfId;switch(r?.t){case`rollReq`:n.game||this.doRoll(t);return;case`char`:{if(n.game)return;let e=We(r.char);if(e&&n.players.some(n=>n.char===e&&n.id!==t))return;let i=n.players.find(e=>e.id===t);if(!i)return;i.char=e;break}case`settings`:if(!i||n.game||!r.s)return;typeof r.s.rounds==`number`&&g.includes(r.s.rounds)&&(n.settings.rounds=r.s.rounds),Array.isArray(r.s.minis)&&(n.settings.minis=r.s.minis.filter(e=>typeof e==`string`&&h[e])),(r.s.mode===`board`||r.s.mode===`minis`)&&(n.settings.mode=r.s.mode),typeof r.s.bonus==`boolean`&&(n.settings.bonus=r.s.bonus);break;case`start`:if(!i||n.game)return;n.game=L(n.players.filter(e=>e.online).map(e=>({id:e.id,name:e.name,char:e.char})),n.settings,this.env());break;case`end`:if(!i||!n.game)return;n.game=null;break;case`game`:if(!n.game||!r.a||!ke(n.game,t,r.a,this.env()))return;break;default:return}this.broadcast(),this.emit()}doRoll(e){let t=this.view.state,n=this.now();if(n-this.lastRollAt<1400)return;this.lastRollAt=n;let r=1+Math.min(5,Math.floor(this.random()*6)),i={nr:(t.roll?.nr??0)+1,value:r,by:e};t.roll=i,this.lastRollNr=i.nr,this.t.send(`roll`,i),this.options.persist?.(t,`host`),this.rollListeners.forEach(e=>e(i)),this.emit()}broadcast(){let e=this.view.state;this.t.send(`state`,e),this.options.persist?.(e,`host`)}becomeHost(e){if(this.view.role=`host`,this.view.state=e,this.view.phase=`joined`,this.view.hostOnline=!0,this.view.stale=!1,this.view.hostLostAt=null,this.view.stableSince=this.now(),this.lastRollNr=e.roll?.nr??0,e.game){let t=this.env();for(let n of e.players)Ne(e.game,n.id,!n.online,t);for(let n of e.game.order)e.players.some(e=>e.id===n)||Ne(e.game,n,!0,t);Pe(e.game,t)}this.options.manualTick||(this.tickTimer??=setInterval(()=>this.tick(),Re)),this.options.persist?.(e,`host`)}takeOver(){let e=this.view.state,t=this.view.selfId,n={...e,hostId:t,epoch:e.epoch+1,players:e.players.map(e=>({...e,online:e.id===t}))};this.becomeHost(n),this.t.send(`hello`,{role:`host`,v:2,createdAt:n.createdAt,epoch:n.epoch}),this.broadcast(),this.emit()}demote(){this.tickTimer&&clearInterval(this.tickTimer),this.tickTimer=null,this.view.role=`guest`,this.view.hostOnline=!1,this.t.send(`hello`,{role:`guest`,v:2,name:this.name,char:this.wantedChar}),this.emit()}timedPing(e){return new Promise((t,n)=>{let r=setTimeout(()=>n(Error(`keine Antwort`)),Le);this.t.ping(e).then(e=>(clearTimeout(r),t(e)),e=>(clearTimeout(r),n(e)))})}async probe(){let{state:e,selfId:t}=this.view;if(!e||this.view.phase!==`joined`)return!1;let n=e.players.filter(e=>e.id!==t&&e.online);return n.length?(await Promise.all(n.map(e=>this.timedPing(e.id).then(()=>!0,()=>!1)))).some(Boolean):!1}othersOnline(){let{state:e,selfId:t}=this.view;return e?e.players.filter(e=>e.id!==t&&e.online).length:0}async measure(){let{state:e,selfId:t}=this.view;if(!e||this.view.phase!==`joined`)return;let n=this.pingTick++%3==0,r=e.players.filter(e=>e.id!==t&&e.online);if(await Promise.all(r.map(async t=>{try{this.view.pings[t.id]=Math.round(await this.timedPing(t.id)),t.id===e.hostId&&this.view.hostOnline&&(this.view.hostLostAt=null)}catch{this.view.pings[t.id]=null,t.id===e.hostId&&(this.view.hostLostAt??=this.now())}let r=this.view.links[t.id];(n||!r||r===`unknown`)&&(this.view.links[t.id]=await this.t.linkKind(t.id).catch(()=>`unknown`))})),this.view.phase===`joined`&&this.view.state===e){if(this.view.role===`guest`){let n=this.view.hostLostAt===null?0:this.now()-this.view.hostLostAt;this.view.stale=this.mayFlagStale&&n>=6e3;let r=e.players.filter(t=>t.id!==e.hostId).findIndex(e=>e.id===t),i=[...this.peers].some(t=>t!==e.hostId)?ze+r*Be:Ve;r>=0&&!this.view.hostOnline&&n>=i&&this.takeOver()}this.emit()}}close(){this.view.phase=`closed`,this.pingTimer&&clearInterval(this.pingTimer),this.tickTimer&&clearInterval(this.tickTimer),this.noHostTimer&&clearTimeout(this.noHostTimer),this.emit()}emit(){this.listeners.forEach(e=>e(this.view))}},Je={app:`cyber-heist-party`,apiKey:`7dc9c89196b8912d797699fe04fe920baff1`},Ye=null;function Xe(e=Je){return!e.app||!e.apiKey?Promise.resolve(void 0):(Ye??=(async()=>{let t=new AbortController,n=setTimeout(()=>t.abort(),4e3);try{let n=`https://${e.app}.metered.live/api/v1/turn/credentials?apiKey=${encodeURIComponent(e.apiKey)}`,r=await fetch(n,{signal:t.signal});if(!r.ok)throw Error(`Relay-Zugangsdaten: ${r.status}`);let i=await r.json(),a=Array.isArray(i)?i.filter(e=>e&&e.urls&&e.username&&e.credential):[];return a.length?a:void 0}catch(e){console.warn(`Relay nicht verfügbar, es wird nur direkt verbunden.`,e),Ye=null;return}finally{clearTimeout(n)}})(),Ye)}var Ze=`modulepreload`,Qe=function(e,t){return new URL(e,t).href},$e={},et=function(e){return e.pathname.endsWith(`.css`)},tt=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},nt=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Qe(t,n);let r=s(t),i=et(r);return tt($e,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ze,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},rt=`corporate-cyber-heist/finn-7f3a9c`;function it(e){let t=null,n=new Map,r=[],i=[],a=[],o=[],s=e=>{let r=n.get(e);return r||(r=t.makeAction(e),n.set(e,r)),r},c=(e,t)=>{s(e).onMessage((e,n)=>t(e,n.userId))};return{async start(){let n={appId:rt,...e.ephemeralIdentity?{identity:`none`}:{},...e.turnConfig?{turnConfig:e.turnConfig}:{},...e.relayOnly?{rtcConfig:{iceTransportPolicy:`relay`}}:{}};if(e.relayUrl){let{joinRoom:r}=await nt(async()=>{let{joinRoom:e}=await import(`./dist-DL4FAfN_.js`);return{joinRoom:e}},__vite__mapDeps([0,1]),import.meta.url);t=r({...n,relayConfig:{urls:[e.relayUrl]}},e.roomCode)}else{let{joinRoom:r}=await nt(async()=>{let{joinRoom:e}=await import(`./dist-BXUnybKi.js`);return{joinRoom:e}},__vite__mapDeps([2,1]),import.meta.url);t=r(n,e.roomCode)}t.onError(e=>{let t={code:e.code,message:e.message,peerId:`peerId`in e?e.peerId:void 0,turnConfigured:`turnConfigured`in e?e.turnConfigured:void 0};o.forEach(e=>e(t))});for(let[e,t]of r)c(e,t);r.length=0;let s=await t.getSelf();return t.onUserJoin(({userId:e})=>i.forEach(t=>t(e)),{replay:!0}),t.onUserLeave(({userId:e})=>a.forEach(t=>t(e))),s.userId},send(e,n,r){t&&s(e).send(n,r?{target:r}:void 0).catch(()=>{})},on(e,n){t?c(e,n):r.push([e,n])},onJoin:e=>void i.push(e),onLeave:e=>void a.push(e),onError:e=>void o.push(e),ping(e){return t?t.ping(e):Promise.reject(Error(`nicht verbunden`))},async linkKind(e){if(!t)return`unknown`;let n=Object.values(t.getPeers()).find(t=>t.userId===e)?.connection;if(!n)return`unknown`;try{let e=await n.getStats(),t,r=new Map;e.forEach(e=>{r.set(e.id,e),e.type===`transport`&&e.selectedCandidatePairId&&(t=e.selectedCandidatePairId)}),t||r.forEach(e=>{e.type===`candidate-pair`&&e.state===`succeeded`&&(e.nominated||e.selected)&&(t=e.id)});let i=t?r.get(t):void 0,a=i?r.get(i.localCandidateId):void 0,o=i?r.get(i.remoteCandidateId):void 0;return!a||!o?`unknown`:a.candidateType===`relay`||o.candidateType===`relay`?`relay`:`direct`}catch{return`unknown`}},async leave(){let e=t;t=null,n.clear(),e&&await e.leave()}}}var at=1e3,ot=1001,st=1002,ct=1003,lt=1004,ut=1005,dt=1006,ft=1007,pt=1008,mt=1009,ht=1010,gt=1011,_t=1012,vt=1013,yt=1014,bt=1015,xt=1016,St=1017,Ct=1018,wt=1020,Tt=35902,Et=35899,Dt=1021,Ot=1022,kt=1023,At=1026,jt=1027,Mt=1028,Nt=1029,Pt=1030,Ft=1031,It=1033,Lt=33776,Rt=33777,zt=33778,Bt=33779,Vt=35840,Ht=35841,Ut=35842,Wt=35843,Gt=36196,Kt=37492,qt=37496,Jt=37488,Yt=37489,Xt=37490,Zt=37491,Qt=37808,$t=37809,en=37810,tn=37811,nn=37812,rn=37813,an=37814,on=37815,sn=37816,cn=37817,ln=37818,un=37819,dn=37820,fn=37821,pn=36492,mn=36494,hn=36495,gn=36283,_n=36284,vn=36285,yn=36286,bn=2300,xn=2301,Sn=2302,Cn=2303,wn=2400,Tn=2401,En=2402,Dn=3200,On=`srgb`,kn=`srgb-linear`,An=`linear`,jn=`srgb`,Mn=7680,Nn=35044,Pn=2e3;function Fn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function In(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ln(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Rn(){let e=Ln(`canvas`);return e.style.display=`block`,e}var zn={};function Bn(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Vn(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function G(...e){e=Vn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Hn(...e){e=Vn(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Un(...e){let t=e.join(` `);t in zn||(zn[t]=!0,G(...e))}function Wn(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Gn={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},qn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Jn=Math.PI/180,Yn=180/Math.PI;function Xn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qn[e&255]+qn[e>>8&255]+qn[e>>16&255]+qn[e>>24&255]+`-`+qn[t&255]+qn[t>>8&255]+`-`+qn[t>>16&15|64]+qn[t>>24&255]+`-`+qn[n&63|128]+qn[n>>8&255]+`-`+qn[n>>16&255]+qn[n>>24&255]+qn[r&255]+qn[r>>8&255]+qn[r>>16&255]+qn[r>>24&255]).toLowerCase()}function Zn(e,t,n){return Math.max(t,Math.min(n,e))}function Qn(e,t){return(e%t+t)%t}function $n(e,t,n){return(1-n)*e+n*t}function er(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function tr(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nr(e,t){if(t.constructor===Float32Array)return e;let n=tr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function rr(e,t){if(t.constructor===Float32Array)return e;let n=tr(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var K=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Zn(this.x,e.x,t.x),this.y=Zn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Zn(this.x,e,t),this.y=Zn(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ir=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:G(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(or.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(or.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Zn(this.x,e.x,t.x),this.y=Zn(this.y,e.y,t.y),this.z=Zn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Zn(this.x,e,t),this.y=Zn(this.y,e,t),this.z=Zn(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ar=new q,or=new ir,sr=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Un(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(cr.makeScale(e,t)),this}rotate(e){return Un(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return Un(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cr=new sr,lr=new sr().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ur=new sr().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dr(){let e={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=pr(e.r),e.g=pr(e.g),e.b=pr(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=mr(e.r),e.g=mr(e.g),e.b=mr(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?An:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[kn]:{primaries:t,whitePoint:r,transfer:An,toXYZ:lr,fromXYZ:ur,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:t,whitePoint:r,transfer:jn,toXYZ:lr,fromXYZ:ur,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),e}var fr=dr();function pr(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function mr(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var hr,gr=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Ln(`canvas`)),hr.width=e.width,hr.height=e.height;let t=hr.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ln(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=pr(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(pr(t[e]/255)*255):t[e]=pr(t[e]);return{data:t,width:e.width,height:e.height}}return G(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},_r=0,vr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(yr(r[t].image)):e.push(yr(r[t]))}else e=yr(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function yr(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?gr.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(G(`Texture: Unable to serialize Texture.`),{})}var br=0,xr=new q,Sr=class e extends Kn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ot,i=ot,a=dt,o=pt,s=kt,c=mt,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=Xn(),this.name=``,this.source=new vr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new sr,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(xr).x}get height(){return this.source.getSize(xr).y}get depth(){return this.source.getSize(xr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){G(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case at:e.x-=Math.floor(e.x);break;case ot:e.x=e.x<0?0:1;break;case st:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case at:e.y-=Math.floor(e.y);break;case ot:e.y=e.y<0?0:1;break;case st:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sr.DEFAULT_IMAGE=null,Sr.DEFAULT_MAPPING=300,Sr.DEFAULT_ANISOTROPY=1;var Cr=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Zn(this.x,e.x,t.x),this.y=Zn(this.y,e.y,t.y),this.z=Zn(this.z,e.z,t.z),this.w=Zn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Zn(this.x,e,t),this.y=Zn(this.y,e,t),this.z=Zn(this.z,e,t),this.w=Zn(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wr=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Cr(0,0,e,t),this.scissorTest=!1,this.viewport=new Cr(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Sr({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Tr=class extends wr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Er=class extends Sr{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Dr=class extends Sr{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Or=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),i=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jr,e,Mr)}lookAt(e,t,n){let r=this.elements;return Fr.subVectors(e,t),Fr.lengthSq()===0&&(Fr.z=1),Fr.normalize(),Nr.crossVectors(n,Fr),Nr.lengthSq()===0&&(Math.abs(n.z)===1?Fr.x+=1e-4:Fr.z+=1e-4,Fr.normalize(),Nr.crossVectors(n,Fr)),Nr.normalize(),Pr.crossVectors(Fr,Nr),r[0]=Nr.x,r[4]=Pr.x,r[8]=Fr.x,r[1]=Nr.y,r[5]=Pr.y,r[9]=Fr.y,r[2]=Nr.z,r[6]=Pr.z,r[10]=Fr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*N,i[8]=a*C+o*D+s*j+c*P,i[12]=a*w+o*O+s*ee+c*F,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*N,i[9]=l*C+u*D+d*j+f*P,i[13]=l*w+u*O+d*ee+f*F,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*N,i[10]=p*C+m*D+h*j+g*P,i[14]=p*w+m*O+h*ee+g*F,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*N,i[11]=_*C+v*D+y*j+b*P,i[15]=_*w+v*O+y*ee+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=kr.set(r[0],r[1],r[2]).length(),o=kr.set(r[4],r[5],r[6]).length(),s=kr.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ar.copy(this);let c=1/a,l=1/o,u=1/s;return Ar.elements[0]*=c,Ar.elements[1]*=c,Ar.elements[2]*=c,Ar.elements[4]*=l,Ar.elements[5]*=l,Ar.elements[6]*=l,Ar.elements[8]*=u,Ar.elements[9]*=u,Ar.elements[10]*=u,t.setFromRotationMatrix(Ar),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Pn,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Pn,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},kr=new q,Ar=new Or,jr=new q(0,0,0),Mr=new q(1,1,1),Nr=new q,Pr=new q,Fr=new q,Ir=new Or,Lr=new ir,Rr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Zn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Zn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Zn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Zn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:G(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ir.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ir,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lr.setFromEuler(this),this.setFromQuaternion(Lr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rr.DEFAULT_ORDER=`XYZ`;var zr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Br=0,Vr=new q,Hr=new ir,Ur=new Or,Wr=new q,Gr=new q,Kr=new q,qr=new ir,Jr=new q(1,0,0),Yr=new q(0,1,0),Xr=new q(0,0,1),Zr={type:`added`},Qr={type:`removed`},$r={type:`childadded`,child:null},ei={type:`childremoved`,child:null},ti=class e extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Br++}),this.uuid=Xn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new q,n=new Rr,r=new ir,i=new q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Or},normalMatrix:{value:new sr}}),this.matrix=new Or,this.matrixWorld=new Or,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Jr,e)}rotateY(e){return this.rotateOnAxis(Yr,e)}rotateZ(e){return this.rotateOnAxis(Xr,e)}translateOnAxis(e,t){return Vr.copy(e).applyQuaternion(this.quaternion),this.position.add(Vr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jr,e)}translateY(e){return this.translateOnAxis(Yr,e)}translateZ(e){return this.translateOnAxis(Xr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(Gr,Wr,this.up):Ur.lookAt(Wr,Gr,this.up),this.quaternion.setFromRotationMatrix(Ur),r&&(Ur.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(Ur),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Hn(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zr),$r.child=e,this.dispatchEvent($r),$r.child=null):Hn(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qr),ei.child=e,this.dispatchEvent(ei),ei.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zr),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Kr),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,qr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ti.DEFAULT_UP=new q(0,1,0),ti.DEFAULT_MATRIX_AUTO_UPDATE=!0,ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=class extends ti{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ri={type:`move`},ii=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ri)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ni;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ai={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},si={h:0,s:0,l:0};function ci(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var li=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fr.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=fr.workingColorSpace){return this.r=e,this.g=t,this.b=n,fr.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=fr.workingColorSpace){if(e=Qn(e,1),t=Zn(t,0,1),n=Zn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ci(i,r,e+1/3),this.g=ci(i,r,e),this.b=ci(i,r,e-1/3)}return fr.colorSpaceToWorking(this,r),this}setStyle(e,t=On){function n(t){t!==void 0&&parseFloat(t)<1&&G(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:G(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);G(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){let n=ai[e.toLowerCase()];return n===void 0?G(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return fr.workingToColorSpace(ui.copy(this),e),Math.round(Zn(ui.r*255,0,255))*65536+Math.round(Zn(ui.g*255,0,255))*256+Math.round(Zn(ui.b*255,0,255))}getHexString(e=On){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=fr.workingColorSpace){fr.workingToColorSpace(ui.copy(this),t);let n=ui.r,r=ui.g,i=ui.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=fr.workingColorSpace){return fr.workingToColorSpace(ui.copy(this),t),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=On){fr.workingToColorSpace(ui.copy(this),e);let t=ui.r,n=ui.g,r=ui.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(si);let n=$n(oi.h,si.h,t),r=$n(oi.s,si.s,t),i=$n(oi.l,si.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ui=new li;li.NAMES=ai;var di=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new li(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},fi=class extends ti{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rr,this.environmentIntensity=1,this.environmentRotation=new Rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pi=new q,mi=new q,hi=new q,gi=new q,_i=new q,vi=new q,yi=new q,bi=new q,xi=new q,Si=new q,Ci=new Cr,wi=new Cr,Ti=new Cr,Ei=class e{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pi.subVectors(e,t),r.cross(pi);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){pi.subVectors(r,t),mi.subVectors(n,t),hi.subVectors(e,t);let a=pi.dot(pi),o=pi.dot(mi),s=pi.dot(hi),c=mi.dot(mi),l=mi.dot(hi),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gi)!==null&&gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,gi)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,gi.x),s.addScaledVector(a,gi.y),s.addScaledVector(o,gi.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Ci.setScalar(0),wi.setScalar(0),Ti.setScalar(0),Ci.fromBufferAttribute(e,t),wi.fromBufferAttribute(e,n),Ti.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ci,i.x),a.addScaledVector(wi,i.y),a.addScaledVector(Ti,i.z),a}static isFrontFacing(e,t,n,r){return pi.subVectors(n,t),mi.subVectors(e,t),pi.cross(mi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),pi.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;_i.subVectors(r,n),vi.subVectors(i,n),bi.subVectors(e,n);let s=_i.dot(bi),c=vi.dot(bi);if(s<=0&&c<=0)return t.copy(n);xi.subVectors(e,r);let l=_i.dot(xi),u=vi.dot(xi);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(_i,a);Si.subVectors(e,i);let f=_i.dot(Si),p=vi.dot(Si);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(vi,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return yi.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(yi,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(_i,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Di=class{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ki):ki.fromBufferAttribute(r,t),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ai.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ai.copy(e.boundingBox)),Ai.applyMatrix4(e.matrixWorld),this.union(Ai)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),Ri.subVectors(this.max,Li),ji.subVectors(e.a,Li),Mi.subVectors(e.b,Li),Ni.subVectors(e.c,Li),Pi.subVectors(Mi,ji),Fi.subVectors(Ni,Mi),Ii.subVectors(ji,Ni);let t=[0,-Pi.z,Pi.y,0,-Fi.z,Fi.y,0,-Ii.z,Ii.y,Pi.z,0,-Pi.x,Fi.z,0,-Fi.x,Ii.z,0,-Ii.x,-Pi.y,Pi.x,0,-Fi.y,Fi.x,0,-Ii.y,Ii.x,0];return!Vi(t,ji,Mi,Ni,Ri)||(t=[1,0,0,0,1,0,0,0,1],!Vi(t,ji,Mi,Ni,Ri))?!1:(zi.crossVectors(Pi,Fi),t=[zi.x,zi.y,zi.z],Vi(t,ji,Mi,Ni,Ri))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new q,new q,new q,new q,new q,new q,new q,new q],ki=new q,Ai=new Di,ji=new q,Mi=new q,Ni=new q,Pi=new q,Fi=new q,Ii=new q,Li=new q,Ri=new q,zi=new q,Bi=new q;function Vi(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Bi.fromArray(e,a);let o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),s=t.dot(Bi),c=n.dot(Bi),l=r.dot(Bi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Hi=new q,Ui=new K,Wi=0,Gi=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wi++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Nn,this.updateRanges=[],this.gpuType=bt,this.version=0,this._normalizationScale=e===void 0?void 0:tr(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix3(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyMatrix4(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.applyNormalMatrix(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hi.fromBufferAttribute(this,t),Hi.transformDirection(e),this.setXYZ(t,Hi.x,Hi.y,Hi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?nr(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?rr(e,this.array):Math.round(e*t)}},Ki=class extends Gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},qi=class extends Gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ji=class extends Gi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yi=new Di,Xi=new q,Zi=new q,Qi=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Yi.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);let t=Xi.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Xi,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(Zi)),this.expandByPoint(Xi.copy(e.center).sub(Zi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$i=0,ea=new Or,ta=new ti,na=new q,ra=new Di,ia=new Di,aa=new q,oa=class e extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$i++}),this.uuid=Xn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Fn(e)?qi:Ki)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new sr().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ea.makeRotationFromQuaternion(e),this.applyMatrix4(ea),this}rotateX(e){return ea.makeRotationX(e),this.applyMatrix4(ea),this}rotateY(e){return ea.makeRotationY(e),this.applyMatrix4(ea),this}rotateZ(e){return ea.makeRotationZ(e),this.applyMatrix4(ea),this}translate(e,t,n){return ea.makeTranslation(e,t,n),this.applyMatrix4(ea),this}scale(e,t,n){return ea.makeScale(e,t,n),this.applyMatrix4(ea),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ji(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&G(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Hn(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ra.setFromBufferAttribute(n),this.morphTargetsRelative?(aa.addVectors(this.boundingBox.min,ra.min),this.boundingBox.expandByPoint(aa),aa.addVectors(this.boundingBox.max,ra.max),this.boundingBox.expandByPoint(aa)):(this.boundingBox.expandByPoint(ra.min),this.boundingBox.expandByPoint(ra.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Hn(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Hn(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new q,1/0);else if(e){let n=this.boundingSphere.center;if(ra.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ia.setFromBufferAttribute(n),this.morphTargetsRelative?(aa.addVectors(ra.min,ia.min),ra.expandByPoint(aa),aa.addVectors(ra.max,ia.max),ra.expandByPoint(aa)):(ra.expandByPoint(ia.min),ra.expandByPoint(ia.max))}ra.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)aa.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(aa));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)aa.fromBufferAttribute(a,t),o&&(na.fromBufferAttribute(e,t),aa.add(na)),r=Math.max(r,n.distanceToSquared(aa))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Hn(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Hn(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Gi(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new q,s[e]=new q;let l=new q,u=new q,d=new q,f=new K,p=new K,m=new K,h=new q,g=new q;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new q,b=new q,x=new q,S=new q;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Gi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new q,i=new q,a=new q,o=new q,s=new q,c=new q,l=new q,u=new q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)aa.fromBufferAttribute(e,t),aa.normalize(),e.setXYZ(t,aa.x,aa.y,aa.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Gi(a,r,i)}if(this.index===null)return G(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Nn,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ca(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ca(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ca(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=Xn()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var la=new q,ua=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:tr(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix4(e),this.setXYZ(t,la.x,la.y,la.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyNormalMatrix(e),this.setXYZ(t,la.x,la.y,la.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.transformDirection(e),this.setXYZ(t,la.x,la.y,la.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Bn(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Gi(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bn(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?nr(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?rr(e,this.data.array):Math.round(e*t)}},da=new q,fa=new q,pa=new sr,ma=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=da.subVectors(n,t).cross(fa.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(da),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pa.getNormalMatrix(e),r=this.coplanarPoint(da).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ha=0,ga=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ha++}),this.uuid=Xn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new li(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mn,this.stencilZFail=Mn,this.stencilZPass=Mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){G(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?G(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new li().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new ma().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new K().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new K().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},_a=class extends ga{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new li(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},va,ya=new q,ba=new q,xa=new q,Sa=new K,Ca=new K,wa=new Or,Ta=new q,Ea=new q,Da=new q,Oa=new K,ka=new K,Aa=new K,ja=class extends ti{constructor(e=new _a){if(super(),this.isSprite=!0,this.type=`Sprite`,va===void 0){va=new oa;let e=new sa(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);va.setIndex([0,1,2,0,2,3]),va.setAttribute(`position`,new ua(e,3,0,!1)),va.setAttribute(`uv`,new ua(e,2,3,!1))}this.geometry=va,this.material=e,this.center=new K(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Hn(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ba.setFromMatrixScale(this.matrixWorld),wa.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ba.multiplyScalar(-xa.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ma(Ta.set(-.5,-.5,0),xa,a,ba,r,i),Ma(Ea.set(.5,-.5,0),xa,a,ba,r,i),Ma(Da.set(.5,.5,0),xa,a,ba,r,i),Oa.set(0,0),ka.set(1,0),Aa.set(1,1);let o=e.ray.intersectTriangle(Ta,Ea,Da,!1,ya);if(o===null&&(Ma(Ea.set(-.5,.5,0),xa,a,ba,r,i),ka.set(0,1),o=e.ray.intersectTriangle(Ta,Da,Ea,!1,ya),o===null))return;let s=e.ray.origin.distanceTo(ya);s<e.near||s>e.far||t.push({distance:s,point:ya.clone(),uv:Ei.getInterpolation(ya,Ta,Ea,Da,Oa,ka,Aa,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ma(e,t,n,r,i,a){Sa.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ca.copy(Sa):(Ca.x=a*Sa.x-i*Sa.y,Ca.y=i*Sa.x+a*Sa.y),e.copy(t),e.x+=Ca.x,e.y+=Ca.y,e.applyMatrix4(wa)}var Na=new q,Pa=new q,Fa=new q,Ia=new q,La=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Na.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,t),Na.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pa.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(Pa);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),o=Ia.dot(this.direction),s=-Ia.dot(Fa),c=Ia.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Pa).addScaledVector(Fa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Na.subVectors(e.center,this.origin);let n=Na.dot(this.direction),r=Na.dot(Na)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let N=S/w,P=C/w,F=1/w,te=T-N*D,ne=E-P*D,re=O-N*A,ie=k-P*A,I=j-N*M,ae=ee-P*M,L=I*ie-ae*re,R=te*ae-ne*I,z=re*ne-ie*te;if(r){if(L<0||R<0||z<0)return null}else if((L<0||R<0||z<0)&&(L>0||R>0||z>0))return null;let B=L+R+z;if(B===0)return null;let oe=F*(L*D+R*A+z*M);return(B>0?oe<0:oe>0)?null:this.at(oe/B,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ra=class extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new li(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},za=new Or,Ba=new La,Va=new Qi,Ha=new q,Ua=new q,Wa=new q,Ga=new q,Ka=new q,qa=new q,Ja=new q,Ya=new q,J=class extends ti{constructor(e=new oa,t=new Ra){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){qa.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ka.fromBufferAttribute(s,e),a?qa.addScaledVector(Ka,r):qa.addScaledVector(Ka.sub(t),r))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Ba.copy(e.ray).recast(e.near),Va.containsPoint(Ba.origin)===!1&&(Ba.intersectSphere(Va,Ha)===null||Ba.origin.distanceToSquared(Ha)>(e.far-e.near)**2)||(za.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(za),(n.boundingBox===null||Ba.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ba)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Za(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Za(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Za(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Za(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Xa(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ya.copy(s),Ya.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ya);return l<n.near||l>n.far?null:{distance:l,point:Ya.clone(),object:e}}function Za(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ua),e.getVertexPosition(c,Wa),e.getVertexPosition(l,Ga);let u=Xa(e,t,n,r,Ua,Wa,Ga,Ja);if(u){let e=new q;Ei.getBarycoord(Ja,Ua,Wa,Ga,e),i&&(u.uv=Ei.getInterpolatedAttribute(i,s,c,l,e,new K)),a&&(u.uv1=Ei.getInterpolatedAttribute(a,s,c,l,e,new K)),o&&(u.normal=Ei.getInterpolatedAttribute(o,s,c,l,e,new q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new q,materialIndex:0};Ei.getNormal(Ua,Wa,Ga,t.normal),u.face=t,u.barycoord=e}return u}var Qa=class extends Sr{constructor(e=null,t=1,n=1,r,i,a,o,s,c=ct,l=ct,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$a=class extends Gi{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},eo=new Or,to=new Or,no=[],ro=new Di,io=new Or,ao=new J,oo=new Qi,so=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $a(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,io)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),ro.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(ro)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,eo),oo.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,eo),to.multiplyMatrices(n,eo),ao.matrixWorld=to,ao.raycast(e,no);for(let e=0,n=no.length;e<n;e++){let n=no[e];n.instanceId=i,n.object=this,t.push(n)}no.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $a(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qa(new Float32Array(r*this.count),r,this.count,Mt,bt));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},co=new Qi,lo=new K(.5,.5),uo=new q,fo=class{constructor(e=new ma,t=new ma,n=new ma,r=new ma,i=new ma,a=new ma){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),co.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),co.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(co)}intersectsSprite(e){return co.center.set(0,0,0),co.radius=.7071067811865476+lo.distanceTo(e.center),co.applyMatrix4(e.matrixWorld),this.intersectsSphere(co)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(uo.x=r.normal.x>0?e.max.x:e.min.x,uo.y=r.normal.y>0?e.max.y:e.min.y,uo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},po=new Or,mo=class e{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];po.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new fo),n[e].setFromProjectionMatrix(po,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new fo),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ho=class extends ga{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new li(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},go=new Or,_o=new La,vo=new Qi,yo=new q,bo=class extends ti{constructor(e=new oa,t=new ho){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=i,e.ray.intersectsSphere(vo)===!1)return;go.copy(r).invert(),_o.copy(e.ray).applyMatrix4(go);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);yo.fromBufferAttribute(l,n),xo(yo,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)yo.fromBufferAttribute(l,a),xo(yo,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function xo(e,t,n,r,i,a,o){let s=_o.distanceSqToPoint(e);if(s<n){let n=new q;_o.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var So=class extends Sr{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Co=class extends Sr{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wo=class extends Sr{constructor(e,t,n=yt,r,i,a,o=ct,s=ct,c,l=At,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},To=class extends wo{constructor(e,t=yt,n=301,r,i,a=ct,o=ct,s,c=At){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Eo=class extends Sr{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Do=class e extends oa{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ji(c,3)),this.setAttribute(`normal`,new Ji(l,3)),this.setAttribute(`uv`,new Ji(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Oo=class e extends oa{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new q,l=new K;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Ji(a,3)),this.setAttribute(`normal`,new Ji(o,3)),this.setAttribute(`uv`,new Ji(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ko=class e extends oa{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Ji(u,3)),this.setAttribute(`normal`,new Ji(d,3)),this.setAttribute(`uv`,new Ji(f,2));function _(){let a=new q,_=new q,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new K,m=new q,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ao=class e extends ko{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jo=class e extends oa{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Ji(i,3)),this.setAttribute(`normal`,new Ji(i.slice(),3)),this.setAttribute(`uv`,new Ji(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new q,r=new q,i=new q;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new q;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new q;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new q,t=new q,n=new q,r=new q,o=new K,s=new K,c=new K;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Mo=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){G(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new K:new q);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new q,r=[],i=[],a=[],o=new q,s=new Or;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new q)}i[0]=new q,a[0]=new q;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Zn(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Zn(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},No=class extends Mo{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new K){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Po=class extends No{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Fo(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Io=new q,Lo=new q,Ro=new Fo,zo=new Fo,Bo=new Fo,Vo=class extends Mo{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new q){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Lo.subVectors(r[0],r[1]).add(r[0]),c=Lo);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Io.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Io),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ro.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),zo.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Bo.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Ro.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),zo.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Bo.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Ro.calc(s),zo.calc(s),Bo.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new q().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ho(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Uo(e,t){let n=1-e;return n*n*t}function Wo(e,t){return 2*(1-e)*e*t}function Go(e,t){return e*e*t}function Ko(e,t,n,r){return Uo(e,t)+Wo(e,n)+Go(e,r)}function qo(e,t){let n=1-e;return n*n*n*t}function Jo(e,t){let n=1-e;return 3*n*n*e*t}function Yo(e,t){return 3*(1-e)*e*e*t}function Xo(e,t){return e*e*e*t}function Zo(e,t,n,r,i){return qo(e,t)+Jo(e,n)+Yo(e,r)+Xo(e,i)}var Qo=class extends Mo{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Zo(e,r.x,i.x,a.x,o.x),Zo(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$o=class extends Mo{constructor(e=new q,t=new q,n=new q,r=new q){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Zo(e,r.x,i.x,a.x,o.x),Zo(e,r.y,i.y,a.y,o.y),Zo(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},es=class extends Mo{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ts=class extends Mo{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ns=class extends Mo{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ko(e,r.x,i.x,a.x),Ko(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rs=class extends Mo{constructor(e=new q,t=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new q){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ko(e,r.x,i.x,a.x),Ko(e,r.y,i.y,a.y),Ko(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},is=class extends Mo{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new K){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ho(o,s.x,c.x,l.x,u.x),Ho(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this}},as=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Vo,CubicBezierCurve:Qo,CubicBezierCurve3:$o,EllipseCurve:No,LineCurve:es,LineCurve3:ts,QuadraticBezierCurve:ns,QuadraticBezierCurve3:rs,SplineCurve:is}),os=class extends Mo{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new as[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new as[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ss=class extends os{constructor(e){super(),this.type=`Path`,this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new es(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ns(this.currentPoint.clone(),new K(e,t),new K(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Qo(this.currentPoint.clone(),new K(e,t),new K(n,r),new K(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new is([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new No(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},cs=class extends ss{constructor(e){super(e),this.uuid=Xn(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ss().fromJSON(n))}return this}};function ls(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=us(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=_s(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return fs(a,o,n,s,c,l,0),o}function us(e,t,n,r,i){let a;if(i===Vs(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Rs(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Rs(i/r|0,e[i],e[i+1],a);return a&&As(a,a.next)&&(zs(a),a=a.next),a}function ds(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(As(n,n.next)||ks(n.prev,n,n.next)===0)){if(zs(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function fs(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ss(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ms(e,r,i,a):ps(e))t.push(c.i,e.i,l.i),zs(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=hs(ds(e),t),fs(e,t,n,r,i,a,2)):o===2&&gs(e,t,n,r,i,a):fs(ds(e),t,n,r,i,a,1);break}}}function ps(e){let t=e.prev,n=e,r=e.next;if(ks(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ds(i,s,a,c,o,l,m.x,m.y)&&ks(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ms(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ks(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ws(p,m,t,n,r),v=ws(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ds(s,u,c,d,l,f,y.x,y.y)&&ks(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ds(s,u,c,d,l,f,b.x,b.y)&&ks(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ds(s,u,c,d,l,f,y.x,y.y)&&ks(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ds(s,u,c,d,l,f,b.x,b.y)&&ks(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function hs(e,t){let n=e;do{let r=n.prev,i=n.next.next;!As(r,i)&&js(r,n,n.next,i)&&Fs(r,i)&&Fs(i,r)&&(t.push(r.i,n.i,i.i),zs(n),zs(n.next),n=e=i),n=n.next}while(n!==e);return ds(n)}function gs(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Os(o,e)){let s=Ls(o,e);o=ds(o,o.next),s=ds(s,s.next),fs(o,t,n,r,i,a,0),fs(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function _s(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=us(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ts(o))}i.sort(vs);for(let e=0;e<i.length;e++)n=ys(i[e],n);return n}function vs(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function ys(e,t){let n=bs(e,t);if(!n)return t;let r=Ls(n,e);return ds(r,r.next),ds(n,n.next)}function bs(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(As(e,n))return n;do{if(As(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Es(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Fs(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&xs(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function xs(e,t){return ks(e.prev,e,t.prev)<0&&ks(t.next,e,e.next)<0}function Ss(e,t,n,r){let i=e;do i.z===0&&(i.z=ws(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Cs(i)}function Cs(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ws(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ts(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Es(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ds(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Es(e,t,n,r,i,a,o,s)}function Os(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Ps(e,t)&&(Fs(e,t)&&Fs(t,e)&&Is(e,t)&&(ks(e.prev,e,t.prev)||ks(e,t.prev,t))||As(e,t)&&ks(e.prev,e,e.next)>0&&ks(t.prev,t,t.next)>0)}function ks(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function As(e,t){return e.x===t.x&&e.y===t.y}function js(e,t,n,r){let i=Ns(ks(e,t,n)),a=Ns(ks(e,t,r)),o=Ns(ks(n,r,e)),s=Ns(ks(n,r,t));return!!(i!==a&&o!==s||i===0&&Ms(e,n,t)||a===0&&Ms(e,r,t)||o===0&&Ms(n,e,r)||s===0&&Ms(n,t,r))}function Ms(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ns(e){return e>0?1:e<0?-1:0}function Ps(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&js(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Fs(e,t){return ks(e.prev,e,e.next)<0?ks(e,t,e.next)>=0&&ks(e,e.prev,t)>=0:ks(e,t,e.prev)<0||ks(e,e.next,t)<0}function Is(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ls(e,t){let n=Bs(e.i,e.x,e.y),r=Bs(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Rs(e,t,n,r){let i=Bs(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function zs(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Bs(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vs(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Hs=class{static triangulate(e,t,n=2){return ls(e,t,n)}},Us=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Ws(e),Gs(n,e);let a=e.length;t.forEach(Ws);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Gs(n,t[e]);let o=Hs.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Ws(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Gs(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ks=class e extends oa{constructor(e=new cs([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Ji(r,3)),this.setAttribute(`uv`,new Ji(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?qs:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new q,b=new q,x=new q}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Us.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Us.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||Hn(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new K(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new K(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let ee=[],M,N=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];M=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),M[e]=A(t[e],t[r],t[i]);ee.push(M),N=N.concat(M)}let P;if(p===0)P=Us.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);I(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];M=ee[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],M[e],a);I(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}P=Us.triangulateShape(e,t)}let F=P.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],N[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),I(x.x,x.y,x.z)):I(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],N[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),I(x.x,x.y,x.z)):I(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);I(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];M=ee[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],M[e],r);_?I(i.x,i.y+g[s-1].y,g[s-1].x+n):I(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<F;e++){let n=P[e];ae(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<F;e++){let n=P[e];ae(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<F;e++){let t=P[e];ae(t[2],t[1],t[0])}for(let e=0;e<F;e++){let t=P[e];ae(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);L(t+r+n,t+i+n,t+i+a,t+r+a)}}}function I(e,t,n){a.push(e),a.push(t),a.push(n)}function ae(e,t,i){R(e),R(t),R(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);z(o[0]),z(o[1]),z(o[2])}function L(e,t,i,a){R(e),R(t),R(a),R(t),R(i),R(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);z(s[0]),z(s[1]),z(s[3]),z(s[1]),z(s[2]),z(s[3])}function R(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function z(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Js(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new as[i.type]().fromJSON(i)),new e(r,t.options)}},qs={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new K(a,o),new K(s,c),new K(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new K(o,1-c),new K(l,1-d),new K(f,1-m),new K(h,1-_)]:[new K(s,1-c),new K(u,1-d),new K(p,1-m),new K(g,1-_)]}};function Js(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Ys=class e extends jo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Xs=class e extends jo{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Zs=class e extends oa{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ji(p,3)),this.setAttribute(`normal`,new Ji(m,3)),this.setAttribute(`uv`,new Ji(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Qs=class e extends oa{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new q,p=new K;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Ji(s,3)),this.setAttribute(`normal`,new Ji(c,3)),this.setAttribute(`uv`,new Ji(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},$s=class e extends oa{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new q,d=new q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ji(p,3)),this.setAttribute(`normal`,new Ji(m,3)),this.setAttribute(`uv`,new Ji(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ec=class e extends oa{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new q,f=new q,p=new q;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ji(c,3)),this.setAttribute(`normal`,new Ji(l,3)),this.setAttribute(`uv`,new Ji(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function tc(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(rc(i))i.isRenderTargetTexture?(G(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(rc(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function nc(e){let t={};for(let n=0;n<e.length;n++){let r=tc(e[n]);for(let e in r)t[e]=r[e]}return t}function rc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ic(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ac(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fr.workingColorSpace}var oc={clone:tc,merge:nc},sc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lc=class extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sc,this.fragmentShader=cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tc(e.uniforms),this.uniformsGroups=ic(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new li().setHex(r.value);break;case`v2`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Cr().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new sr().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Or().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},uc=class extends lc{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Y=class extends ga{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new li(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new li(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dc=class extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Dn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fc=class extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pc(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function mc(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var hc=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},gc=class extends hc{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wn,endingEnd:wn}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tn:i=e,o=2*t-n;break;case En:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Tn:a=e,s=2*n-t;break;case En:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},_c=class extends hc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},vc=class extends hc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},yc=class extends hc{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Sc(n,t,g,y,r);i[p]=bc(x,o,_,b,m)}return i}};function bc(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function xc(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Sc(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=bc(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=xc(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Cc=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=pc(t,this.TimeBufferType),this.values=pc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pc(e.times,Array),values:pc(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),mc(e.settings)&&(n.settings={inTangents:pc(e.settings.inTangents,Array),outTangents:pc(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bn:t=this.InterpolantFactoryMethodDiscrete;break;case xn:t=this.InterpolantFactoryMethodLinear;break;case Sn:t=this.InterpolantFactoryMethodSmooth;break;case Cn:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return G(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bn;case this.InterpolantFactoryMethodLinear:return xn;case this.InterpolantFactoryMethodSmooth:return Sn;case this.InterpolantFactoryMethodBezier:return Cn}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;mc(this.settings)&&(wc(this.settings.inTangents,e),wc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;mc(this.settings)&&(Tc(this.settings.inTangents,e),Tc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Hn(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Hn(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Hn(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Hn(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&In(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Hn(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Sn,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,mc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function wc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Tc(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Cc.prototype.ValueTypeName=``,Cc.prototype.TimeBufferType=Float32Array,Cc.prototype.ValueBufferType=Float32Array,Cc.prototype.DefaultInterpolation=xn;var Ec=class extends Cc{constructor(e,t,n){super(e,t,n)}};Ec.prototype.ValueTypeName=`bool`,Ec.prototype.ValueBufferType=Array,Ec.prototype.DefaultInterpolation=bn,Ec.prototype.InterpolantFactoryMethodLinear=void 0,Ec.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends Cc{constructor(e,t,n,r){super(e,t,n,r)}};Dc.prototype.ValueTypeName=`color`;var Oc=class extends Cc{constructor(e,t,n,r){super(e,t,n,r)}};Oc.prototype.ValueTypeName=`number`;var kc=class extends hc{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ir.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ac=class extends Cc{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};Ac.prototype.ValueTypeName=`quaternion`,Ac.prototype.InterpolantFactoryMethodSmooth=void 0;var jc=class extends Cc{constructor(e,t,n){super(e,t,n)}};jc.prototype.ValueTypeName=`string`,jc.prototype.ValueBufferType=Array,jc.prototype.DefaultInterpolation=bn,jc.prototype.InterpolantFactoryMethodLinear=void 0,jc.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends Cc{constructor(e,t,n,r){super(e,t,n,r)}};Mc.prototype.ValueTypeName=`vector`;var Nc=class extends ti{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new li(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pc=class extends Nc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.groundColor=new li(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new Or,Ic=new q,Lc=new q,Rc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=mt,this.map=null,this.mapPass=null,this.matrix=new Or,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Cr(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ic.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ic),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zc=new q,Bc=new ir,Vc=new q,Hc=class extends ti{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Or,this.projectionMatrix=new Or,this.projectionMatrixInverse=new Or,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Bc,Vc),Vc.x===1&&Vc.y===1&&Vc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Bc,Vc.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zc,Bc,Vc),Vc.x===1&&Vc.y===1&&Vc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Bc,Vc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Uc=new q,Wc=new K,Gc=new K,Kc=class extends Hc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yn*2*Math.atan(Math.tan(Jn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Uc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Uc.x,Uc.y).multiplyScalar(-e/Uc.z),Uc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Uc.x,Uc.y).multiplyScalar(-e/Uc.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Gc),t.subVectors(Gc,Wc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qc=class extends Hc{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jc=class extends Rc{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yc=class extends Nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ti.DEFAULT_UP),this.updateMatrix(),this.target=new ti,this.shadow=new Jc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Xc=class extends Nc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Zc=-90,Qc=1,$c=class extends ti{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kc(Zc,Qc,e,t);r.layers=this.layers,this.add(r);let i=new Kc(Zc,Qc,e,t);i.layers=this.layers,this.add(i);let a=new Kc(Zc,Qc,e,t);a.layers=this.layers,this.add(a);let o=new Kc(Zc,Qc,e,t);o.layers=this.layers,this.add(o);let s=new Kc(Zc,Qc,e,t);s.layers=this.layers,this.add(s);let c=new Kc(Zc,Qc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},el=class extends Kc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},tl=`\\[\\]\\.:\\/`,nl=RegExp(`[\\[\\]\\.:\\/]`,`g`),rl=`[^\\[\\]\\.:\\/]`,il=`[^`+tl.replace(`\\.`,``)+`]`,al=`((?:WC+[\\/:])*)`.replace(`WC`,rl),ol=`(WCOD+)?`.replace(`WCOD`,il),sl=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,rl),cl=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,rl),ll=RegExp(`^`+al+ol+sl+cl+`$`),ul=[`material`,`materials`,`bones`,`map`],dl=class{constructor(e,t,n){let r=n||fl.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},fl=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(nl,``)}static parseTrackName(e){let t=ll.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ul.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){G(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Hn(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Hn(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Hn(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Hn(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Hn(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Hn(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Hn(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Hn(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Hn(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Hn(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fl.Composite=dl,fl.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},fl.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},fl.prototype.GetterByBindingType=[fl.prototype._getValue_direct,fl.prototype._getValue_array,fl.prototype._getValue_arrayElement,fl.prototype._getValue_toArray],fl.prototype.SetterByBindingTypeAndVersioning=[[fl.prototype._setValue_direct,fl.prototype._setValue_direct_setNeedsUpdate,fl.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fl.prototype._setValue_array,fl.prototype._setValue_array_setNeedsUpdate,fl.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fl.prototype._setValue_arrayElement,fl.prototype._setValue_arrayElement_setNeedsUpdate,fl.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fl.prototype._setValue_fromArray,fl.prototype._setValue_fromArray_setNeedsUpdate,fl.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pl=new Or,ml=class{constructor(e,t,n=0,r=1/0){this.ray=new La(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Hn(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pl),this}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(hl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)gl(e[r],this,n,t);return n.sort(hl),n}};function hl(e,t){return e.distance-t.distance}function gl(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)gl(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function _l(e,t,n,r){let i=vl(r);switch(n){case Dt:return e*t;case Mt:return e*t/i.components*i.byteLength;case Nt:return e*t/i.components*i.byteLength;case Pt:return e*t*2/i.components*i.byteLength;case Ft:return e*t*2/i.components*i.byteLength;case Ot:return e*t*3/i.components*i.byteLength;case kt:return e*t*4/i.components*i.byteLength;case It:return e*t*4/i.components*i.byteLength;case Lt:case Rt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case zt:case Bt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ht:case Wt:return Math.max(e,16)*Math.max(t,8)/4;case Vt:case Ut:return Math.max(e,8)*Math.max(t,8)/2;case Gt:case Kt:case Jt:case Yt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case qt:case Xt:case Zt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $t:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case en:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case tn:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case nn:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case rn:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case an:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case on:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case sn:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case cn:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ln:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case un:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case dn:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case fn:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case pn:case mn:case hn:return Math.ceil(e/4)*Math.ceil(t/4)*16;case gn:case _n:return Math.ceil(e/4)*Math.ceil(t/4)*8;case vn:case yn:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function vl(e){switch(e){case mt:case ht:return{byteLength:1,components:1};case _t:case gt:case xt:return{byteLength:2,components:1};case St:case Ct:return{byteLength:2,components:4};case yt:case vt:case bt:return{byteLength:4,components:1};case Tt:case Et:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?G(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function yl(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function bl(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var xl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new li(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new sr},alphaMap:{value:null},alphaMapTransform:{value:new sr},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new sr}},envmap:{envMap:{value:null},envMapRotation:{value:new sr},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new sr}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new sr}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new sr},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new sr},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new sr},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new sr}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new sr}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new sr}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new li(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new li(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new sr},alphaTest:{value:0},uvTransform:{value:new sr}},sprite:{diffuse:{value:new li(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new sr},alphaMap:{value:null},alphaMapTransform:{value:new sr},alphaTest:{value:0}}},Sl={basic:{uniforms:nc([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:xl.meshbasic_vert,fragmentShader:xl.meshbasic_frag},lambert:{uniforms:nc([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new li(0)},envMapIntensity:{value:1}}]),vertexShader:xl.meshlambert_vert,fragmentShader:xl.meshlambert_frag},phong:{uniforms:nc([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new li(0)},specular:{value:new li(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xl.meshphong_vert,fragmentShader:xl.meshphong_frag},standard:{uniforms:nc([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new li(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xl.meshphysical_vert,fragmentShader:xl.meshphysical_frag},toon:{uniforms:nc([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new li(0)}}]),vertexShader:xl.meshtoon_vert,fragmentShader:xl.meshtoon_frag},matcap:{uniforms:nc([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:xl.meshmatcap_vert,fragmentShader:xl.meshmatcap_frag},points:{uniforms:nc([X.points,X.fog]),vertexShader:xl.points_vert,fragmentShader:xl.points_frag},dashed:{uniforms:nc([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xl.linedashed_vert,fragmentShader:xl.linedashed_frag},depth:{uniforms:nc([X.common,X.displacementmap]),vertexShader:xl.depth_vert,fragmentShader:xl.depth_frag},normal:{uniforms:nc([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:xl.meshnormal_vert,fragmentShader:xl.meshnormal_frag},sprite:{uniforms:nc([X.sprite,X.fog]),vertexShader:xl.sprite_vert,fragmentShader:xl.sprite_frag},background:{uniforms:{uvTransform:{value:new sr},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xl.background_vert,fragmentShader:xl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new sr}},vertexShader:xl.backgroundCube_vert,fragmentShader:xl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xl.cube_vert,fragmentShader:xl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xl.equirect_vert,fragmentShader:xl.equirect_frag},distance:{uniforms:nc([X.common,X.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xl.distance_vert,fragmentShader:xl.distance_frag},shadow:{uniforms:nc([X.lights,X.fog,{color:{value:new li(0)},opacity:{value:1}}]),vertexShader:xl.shadow_vert,fragmentShader:xl.shadow_frag}};Sl.physical={uniforms:nc([Sl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new sr},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new sr},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new sr},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new sr},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new sr},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new sr},sheen:{value:0},sheenColor:{value:new li(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new sr},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new sr},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new sr},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new sr},attenuationDistance:{value:0},attenuationColor:{value:new li(0)},specularColor:{value:new li(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new sr},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new sr},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new sr}}]),vertexShader:xl.meshphysical_vert,fragmentShader:xl.meshphysical_frag};var Cl={r:0,b:0,g:0},wl=new Or,Tl=new sr;Tl.set(-1,0,0,0,1,0,0,0,1);function El(e,t,n,r,i,a){let o=new li(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new J(new Do(1,1,1),new lc({name:`BackgroundCubeMaterial`,uniforms:tc(Sl.backgroundCube.uniforms),vertexShader:Sl.backgroundCube.vertexShader,fragmentShader:Sl.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(wl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Tl),l.material.toneMapped=fr.getTransfer(i.colorSpace)!==jn,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Zs(2,2),new lc({name:`BackgroundMaterial`,uniforms:tc(Sl.background.uniforms),vertexShader:Sl.background.vertexShader,fragmentShader:Sl.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=fr.getTransfer(i.colorSpace)!==jn,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Cl,ac(e)),n.buffers.color.setClear(Cl.r,Cl.g,Cl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Dl(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ol(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function kl(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(G(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&G(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&G(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Al(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ma,s=new sr,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var jl=class extends Tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new So(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Do(5,5,5),i=new lc({name:`CubemapFromEquirect`,uniforms:tc(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=dt),new $c(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ml=256,Nl=3,Pl=20,Fl=256,Il=16,Ll=3,Rl=new q,zl=new li,Bl=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $c(1,10,null),this._boxMesh=new J(new Do(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Rl}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(zl));let h=new $c(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ml,er(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ml:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Vl(e,!1,!1),n=Math.log2(e)-Nl;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Kl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ul(),this._integrationMaterial=Wl());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Il);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ll)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Fl*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Gl());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Vl(e,t,n){return new jl(e,{minFilter:pt,generateMipmaps:t,type:xt,colorSpace:kn,depthBuffer:n})}function Hl(e,t,n){return new lc({name:e,uniforms:t,vertexShader:xl.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ul(){return Hl(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Fl}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wl(){return Hl(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Il}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Gl(){return Hl(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pl}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Kl(){return Hl(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ql(){return Hl(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Jl(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new jl(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Bl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Bl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Yl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Un(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Xl(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?qi:Ki)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Zl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ql(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Hn(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $l(e,t,n){let r=new WeakMap,i=new Cr;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Er(h,p,m,u);g.type=bt,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new K(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function eu(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var tu={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function nu(e,t,n,r,i,a){let o=new Tr(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new oa;u.setAttribute(`position`,new Ji([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Ji([0,2,0,0,2,0],2));let d=new uc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new J(u,d),p=new qc(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Tr(t,n,{type:xt,depthBuffer:!1,stencilBuffer:!1}),c=new Tr(t,n,{type:xt,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new wo(t,n),a===!0&&(l.format=jt,l.type=wt)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},fr.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=tu[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var ru=new Sr,iu=new wo(1,1),au=new To(1),ou=new Er,su=new Dr,cu=new So,lu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function mu(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=lu[i];if(a===void 0&&(a=new Float32Array(i),lu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function hu(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function gu(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _u(e,t){let n=uu[t];n===void 0&&(n=new Int32Array(t),uu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hu(n,t))return;e.uniform2fv(this.addr,t),gu(n,t)}}function bu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hu(n,t))return;e.uniform3fv(this.addr,t),gu(n,t)}}function xu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hu(n,t))return;e.uniform4fv(this.addr,t),gu(n,t)}}function Su(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hu(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gu(n,t)}else{if(hu(n,r))return;pu.set(r),e.uniformMatrix2fv(this.addr,!1,pu),gu(n,r)}}function Cu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hu(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gu(n,t)}else{if(hu(n,r))return;fu.set(r),e.uniformMatrix3fv(this.addr,!1,fu),gu(n,r)}}function wu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hu(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gu(n,t)}else{if(hu(n,r))return;du.set(r),e.uniformMatrix4fv(this.addr,!1,du),gu(n,r)}}function Tu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Eu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hu(n,t))return;e.uniform2iv(this.addr,t),gu(n,t)}}function Du(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hu(n,t))return;e.uniform3iv(this.addr,t),gu(n,t)}}function Ou(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hu(n,t))return;e.uniform4iv(this.addr,t),gu(n,t)}}function ku(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Au(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hu(n,t))return;e.uniform2uiv(this.addr,t),gu(n,t)}}function ju(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hu(n,t))return;e.uniform3uiv(this.addr,t),gu(n,t)}}function Mu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hu(n,t))return;e.uniform4uiv(this.addr,t),gu(n,t)}}function Nu(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Pu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Nu(iu):ru,n.setTexture2D(t||a,i)}function Fu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||su,i)}function Iu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Nu(au):cu,n.setTextureCube(t||a,i)}function Lu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ou,i)}function Ru(e){switch(e){case 5126:return vu;case 35664:return yu;case 35665:return bu;case 35666:return xu;case 35674:return Su;case 35675:return Cu;case 35676:return wu;case 5124:case 35670:return Tu;case 35667:case 35671:return Eu;case 35668:case 35672:return Du;case 35669:case 35673:return Ou;case 5125:return ku;case 36294:return Au;case 36295:return ju;case 36296:return Mu;case 35678:case 36198:case 36298:case 36306:case 35682:return Pu;case 35679:case 36299:case 36307:return Fu;case 35680:case 36300:case 36308:case 36293:return Iu;case 36289:case 36303:case 36311:case 36292:return Lu}}function zu(e,t){e.uniform1fv(this.addr,t)}function Bu(e,t){let n=mu(t,this.size,2);e.uniform2fv(this.addr,n)}function Vu(e,t){let n=mu(t,this.size,3);e.uniform3fv(this.addr,n)}function Hu(e,t){let n=mu(t,this.size,4);e.uniform4fv(this.addr,n)}function Uu(e,t){let n=mu(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Wu(e,t){let n=mu(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Gu(e,t){let n=mu(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ku(e,t){e.uniform1iv(this.addr,t)}function qu(e,t){e.uniform2iv(this.addr,t)}function Ju(e,t){e.uniform3iv(this.addr,t)}function Yu(e,t){e.uniform4iv(this.addr,t)}function Xu(e,t){e.uniform1uiv(this.addr,t)}function Zu(e,t){e.uniform2uiv(this.addr,t)}function Qu(e,t){e.uniform3uiv(this.addr,t)}function $u(e,t){e.uniform4uiv(this.addr,t)}function ed(e,t,n){let r=this.cache,i=t.length,a=_u(n,i);hu(r,a)||(e.uniform1iv(this.addr,a),gu(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Nu(iu):ru;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function td(e,t,n){let r=this.cache,i=t.length,a=_u(n,i);hu(r,a)||(e.uniform1iv(this.addr,a),gu(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||su,a[e])}function nd(e,t,n){let r=this.cache,i=t.length,a=_u(n,i);hu(r,a)||(e.uniform1iv(this.addr,a),gu(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Nu(au):cu;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function rd(e,t,n){let r=this.cache,i=t.length,a=_u(n,i);hu(r,a)||(e.uniform1iv(this.addr,a),gu(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ou,a[e])}function id(e){switch(e){case 5126:return zu;case 35664:return Bu;case 35665:return Vu;case 35666:return Hu;case 35674:return Uu;case 35675:return Wu;case 35676:return Gu;case 5124:case 35670:return Ku;case 35667:case 35671:return qu;case 35668:case 35672:return Ju;case 35669:case 35673:return Yu;case 5125:return Xu;case 36294:return Zu;case 36295:return Qu;case 36296:return $u;case 35678:case 36198:case 36298:case 36306:case 35682:return ed;case 35679:case 36299:case 36307:return td;case 35680:case 36300:case 36308:case 36293:return nd;case 36289:case 36303:case 36311:case 36292:return rd}}var ad=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ru(t.type)}},od=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=id(t.type)}},sd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},cd=/(\w+)(\])?(\[|\.)?/g;function ld(e,t){e.seq.push(t),e.map[t.id]=t}function ud(e,t,n){let r=e.name,i=r.length;for(cd.lastIndex=0;;){let a=cd.exec(r),o=cd.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ld(n,l===void 0?new ad(s,e,t):new od(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new sd(s),ld(n,e)),n=e}}}var dd=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ud(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function fd(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var pd=37297,md=0;function hd(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var gd=new sr;function _d(e){fr._getMatrix(gd,fr.workingColorSpace,e);let t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(fr.getTransfer(e)){case An:return[t,`LinearTransferOETF`];case jn:return[t,`sRGBTransferOETF`];default:return G(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function vd(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+hd(e.getShaderSource(t),r)}return i}function yd(e,t){let n=_d(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var bd={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function xd(e,t){let n=bd[t];return n===void 0?(G(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Sd=new q;function Cd(){return fr.getLuminanceCoefficients(Sd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Sd.x.toFixed(4)}, ${Sd.y.toFixed(4)}, ${Sd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function wd(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Dd).join(`
`)}function Td(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ed(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Dd(e){return e!==``}function Od(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function kd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ad=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(e){return e.replace(Ad,Md)}function Md(e,t){let n=xl[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return jd(n)}var Nd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pd(e){return e.replace(Nd,Fd)}function Fd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Id(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ld={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Rd(e){return Ld[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var zd={302:`ENVMAP_MODE_REFRACTION`};function Bd(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:zd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Vd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Hd(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Vd[e.combine]||`ENVMAP_BLENDING_NONE`}function Ud(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Rd(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Bd(n),d=Hd(n),f=wd(n),p=Td(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Dd).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Dd).join(`
`),g.length>0&&(g+=`
`)):(h=[Id(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Dd).join(`
`),g=[Id(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:xl.tonemapping_pars_fragment,n.toneMapping===0?``:xd(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,xl.colorspace_pars_fragment,yd(`linearToOutputTexel`,n.outputColorSpace),Cd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Dd).join(`
`)),o=jd(o),o=Od(o,n),o=kd(o,n),s=jd(s),s=Od(s,n),s=kd(s,n),o=Pd(o),s=Pd(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=fd(i,i.VERTEX_SHADER,v),x=fd(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=vd(i,b,`vertex`),n=vd(i,x,`fragment`);Hn(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):G(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new dd(i,m),w=Ed(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,pd)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=md++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Wd=0,Gd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kd(e),t.set(e,n)),n}},Kd=class{constructor(e){this.id=Wd++,this.code=e,this.usedTimes=0}};function qd(e){return e===1030||e===37490||e===36285}function Jd(e,t,n,r,i,a){let o=new zr,s=new Gd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&G(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Sl[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,N=!!i.map,P=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,I=!!i.normalMap,ae=!!i.displacementMap,L=!!i.emissiveMap,R=!!i.metalnessMap,z=!!i.roughnessMap,B=i.anisotropy>0,oe=i.clearcoat>0,se=i.diffuseRoughness>0,ce=i.dispersion>0,le=i.retroreflectivity>0,ue=i.iridescence>0,de=i.sheen>0,fe=i.transmission>0,pe=B&&!!i.anisotropyMap,me=oe&&!!i.clearcoatMap,he=oe&&!!i.clearcoatNormalMap,ge=oe&&!!i.clearcoatRoughnessMap,_e=se&&!!i.diffuseRoughnessMap,V=ue&&!!i.iridescenceMap,ve=ue&&!!i.iridescenceThicknessMap,ye=de&&!!i.sheenColorMap,be=de&&!!i.sheenRoughnessMap,H=!!i.specularMap,xe=!!i.specularColorMap,U=!!i.specularIntensityMap,W=fe&&!!i.transmissionMap,Se=fe&&!!i.thicknessMap,Ce=!!i.gradientMap,we=!!i.alphaMap,Te=i.alphaTest>0,Ee=!!i.alphaHash,De=!!i.extensions,Oe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ae={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fr.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:N,matcap:P,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?ke.length-1:null,envMapSize:te?ke[0].width:null,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:I,displacementMap:ae,emissiveMap:L,normalMapObjectSpace:I&&i.normalMapType===1,normalMapTangentSpace:I&&i.normalMapType===0,packedNormalMap:I&&i.normalMapType===0&&qd(i.normalMap.format),metalnessMap:R,roughnessMap:z,anisotropy:B,anisotropyMap:pe,clearcoat:oe,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,diffuseRoughness:se,diffuseRoughnessMap:_e,dispersion:ce,retroreflection:le,iridescence:ue,iridescenceMap:V,iridescenceThicknessMap:ve,sheen:de,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:H,specularColorMap:xe,specularIntensityMap:U,transmission:fe,transmissionMap:W,thicknessMap:Se,gradientMap:Ce,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:i.combine,mapUv:N&&p(i.map.channel),aoMapUv:ne&&p(i.aoMap.channel),lightMapUv:re&&p(i.lightMap.channel),bumpMapUv:ie&&p(i.bumpMap.channel),normalMapUv:I&&p(i.normalMap.channel),displacementMapUv:ae&&p(i.displacementMap.channel),emissiveMapUv:L&&p(i.emissiveMap.channel),metalnessMapUv:R&&p(i.metalnessMap.channel),roughnessMapUv:z&&p(i.roughnessMap.channel),anisotropyMapUv:pe&&p(i.anisotropyMap.channel),clearcoatMapUv:me&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:he&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:V&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(i.sheenRoughnessMap.channel),specularMapUv:H&&p(i.specularMap.channel),specularColorMapUv:xe&&p(i.specularColorMap.channel),specularIntensityMapUv:U&&p(i.specularIntensityMap.channel),transmissionMapUv:W&&p(i.transmissionMap.channel),thicknessMapUv:Se&&p(i.thicknessMap.channel),alphaMapUv:we&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(I||B),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(N||we),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&I===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:N&&i.map.isVideoTexture===!0&&fr.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&i.emissiveMap.isVideoTexture===!0&&fr.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:De&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Sl[t];n=oc.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ud(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Yd(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Xd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Zd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Qd(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Xd),r.length>1&&r.sort(t||Zd),i.length>1&&i.sort(t||Zd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function $d(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Qd,e.set(t,[i])):n>=r.length?(i=new Qd,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ef(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new q,color:new li};break;case`SpotLight`:n={position:new q,direction:new q,color:new li,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new q,color:new li,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new q,skyColor:new li,groundColor:new li};break;case`RectAreaLight`:n={color:new li,position:new q,halfWidth:new q,halfHeight:new q}}return e[t.id]=n,n}}}function tf(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var nf=0;function rf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function af(e){let t=new ef,n=tf(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new q);let i=new q,a=new Or,o=new Or;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(rf);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=nf++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function of(e){let t=new af(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function sf(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new of(e),t.set(n,[a])):r>=i.length?(a=new of(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var cf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uf=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],df=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ff=new Or,pf=new q,mf=new q;function hf(e,t,n){let r=new fo,i=new K,a=new K,o=new Cr,s=new dc,c=new fc,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new lc({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:cf,fragmentShader:lf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new oa;m.setAttribute(`position`,new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new J(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(G(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){G(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){G(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Tr(i.x,i.y,{format:Pt,type:xt,minFilter:dt,magFilter:dt,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new wo(i.x,i.y,bt),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=At,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ct,d.map.depthTexture.magFilter=ct}else l.isPointLight?(d.map=new jl(i.x),d.map.depthTexture=new To(i.x,yt)):(d.map=new Tr(i.x,i.y),d.map.depthTexture=new wo(i.x,i.y,yt)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=At,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=dt,d.map.depthTexture.magFilter=dt):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ct,d.map.depthTexture.magFilter=ct);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),pf.setFromMatrixPosition(l.matrixWorld),e.position.copy(pf),mf.copy(e.position),mf.add(uf[t]),e.up.copy(df[t]),e.lookAt(mf),e.updateMatrixWorld(),n.makeTranslation(-pf.x,-pf.y,-pf.z),ff.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ff,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Tr(i.x,i.y,{format:Pt,type:xt}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function gf(e,t){function n(){let t=!1,n=new Cr,r=null,i=new Cr(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):z(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Gn[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):z(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new li(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,N=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),M=N>=2):(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),M=N>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Cr().fromArray(ne),I=new Cr().fromArray(re);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let L={};L[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),fe(!1),pe(1),R(e.CULL_FACE),ue(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function z(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function B(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function oe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function se(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ce={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ce[103]=e.MIN,ce[104]=e.MAX;let le={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ue(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(z(e.BLEND),g=!1);else if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Hn(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Hn(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Hn(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Hn(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ce[n],ce[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(le[r],le[i],le[o],le[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?z(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?ue(0):ue(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):z(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function pe(t){t===0?z(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function me(t){t!==k&&(M&&e.lineWidth(t),k=t)}function he(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):z(e.POLYGON_OFFSET_FILL)}function ge(t){t?R(e.SCISSOR_TEST):z(e.SCISSOR_TEST)}function _e(t){t===void 0&&(t=e.TEXTURE0+ee-1),F!==t&&(e.activeTexture(t),F=t)}function V(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+ee-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||L[t]),i.type=t,i.texture=n)}function ve(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function be(){try{e.compressedTexImage3D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function H(){try{e.texSubImage2D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function xe(){try{e.texSubImage3D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function U(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function W(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function Se(){try{e.texStorage2D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function Ce(){try{e.texStorage3D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function we(){try{e.texImage2D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function Te(){try{e.texImage3D(...arguments)}catch(e){Hn(`WebGLState:`,e)}}function Ee(t){return d[t]===void 0?e.getParameter(t):d[t]}function De(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Oe(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function ke(t){I.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),I.copy(t))}function Ae(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function je(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new li(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),I.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:z,bindFramebuffer:B,drawBuffers:oe,useProgram:se,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:pe,setLineWidth:me,setPolygonOffset:he,setScissorTest:ge,activeTexture:_e,bindTexture:V,unbindTexture:ve,compressedTexImage2D:ye,compressedTexImage3D:be,texImage2D:we,texImage3D:Te,pixelStorei:De,getParameter:Ee,updateUBOMapping:Ae,uniformBlockBinding:je,texStorage2D:Se,texStorage3D:Ce,texSubImage2D:H,texSubImage3D:xe,compressedTexSubImage2D:U,compressedTexSubImage3D:W,scissor:Oe,viewport:ke,reset:Me}}function _f(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new K,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Ln(`canvas`)}function v(e,t,n){let r=1,i=Se(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),G(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&G(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];G(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||G(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?An:fr.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,G(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),ee(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),N(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function N(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let P=0;function F(){P=0}function te(){return P}function ne(e){P=e}function re(){let e=P;return e>=i.maxTextures&&G(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),P+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(t,i){let a=r.get(t);if(t.isVideoTexture&&U(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)G(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)G(`WebGLRenderer: Texture marked for update but image is incomplete`);else{de(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?de(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function L(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?de(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function R(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?fe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let z={[at]:e.REPEAT,[ot]:e.CLAMP_TO_EDGE,[st]:e.MIRRORED_REPEAT},B={[ct]:e.NEAREST,[lt]:e.NEAREST_MIPMAP_NEAREST,[ut]:e.NEAREST_MIPMAP_LINEAR,[dt]:e.LINEAR,[ft]:e.LINEAR_MIPMAP_NEAREST,[pt]:e.LINEAR_MIPMAP_LINEAR},oe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function se(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&G(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,z[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,z[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,z[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,B[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,B[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,oe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ce(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ie(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function le(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ue(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=le(n.start,r.width,4),c=le(t.start,r.width,4);n.start<=i+1&&a===c&&le(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function de(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ce(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=fr.getPrimaries(fr.workingColorSpace),r=o.colorSpace===``?null:fr.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=W(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);se(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===jt,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ue(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=_l(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=_l(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Se(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Se(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function fe(t,o,s){if(o.image.length!==6)return;let c=ce(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=fr.getPrimaries(fr.workingColorSpace),r=o.colorSpace===``?null:fr.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=W(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);se(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===jt,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?G(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Se(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,H(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function me(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;xe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,H(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,H(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);xe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,H(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,H(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function he(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?R(i.depthTexture,0):I(i.depthTexture,0);let u=c.__webglTexture,d=H(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)xe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ge(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)he(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?he(i.__webglFramebuffer[0],t,0):he(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),me(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),me(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,i){let a=r.get(t);n!==void 0&&pe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ge(t)}function V(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&xe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=H(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),me(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),se(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)pe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),se(c,a),pe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),se(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)pe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else pe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&ge(t)}function ve(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let ye=[];function be(t){if(t.samples>0){if(xe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ye.length=0,ye.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&ye.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function H(e){return Math.min(i.maxSamples,e.samples)}function xe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function U(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function W(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(fr.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&G(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Hn(`WebGLTextures: Unsupported texture color space:`,n)),t}function Se(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=F,this.getTextureUnits=te,this.setTextureUnits=ne,this.setTexture2D=I,this.setTexture2DArray=ae,this.setTexture3D=L,this.setTextureCube=R,this.rebindTextures=_e,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=xe,this.dispose=j}function vf(e,t){function n(n,r=``){let i,a=fr.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var yf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new lc({vertexShader:yf,fragmentShader:bf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sf=class extends Kn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new xf,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new K,C=null,w=null,T=new Kc;T.viewport=new Cr;let E=new Kc;E.viewport=new Cr;let D=[T,E],O=new el,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new ii,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new ii,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new ii,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&G(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?jt:At,a=_.stencil?wt:yt);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Tr(d.textureWidth,d.textureHeight,{format:kt,type:mt,depthTexture:new wo(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Tr(f.framebufferWidth,f.framebufferHeight,{format:kt,type:mt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;N(O,i);for(let e=0;e<a.length;e++)N(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),P(e,O,i)};function P(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Yn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let F=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Kc,o.layers.enable(n),o.viewport=new Cr,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Eo,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}F&&F(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new yl;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){F=e},this.dispose=function(){}}},Cf=new Or,wf=new sr;wf.set(-1,0,0,0,1,0,0,0,1);function Tf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ac(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Cf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(wf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ef(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?G(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):G(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Df=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Of=null;function kf(){return Of===null&&(Of=new Qa(Df,16,16,Pt,xt),Of.name=`DFG_LUT`,Of.minFilter=dt,Of.magFilter=dt,Of.wrapS=ot,Of.wrapT=ot,Of.generateMipmaps=!1,Of.needsUpdate=!0),Of}var Af=class{constructor(e={}){let{canvas:t=Rn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([It,Ft,Nt]),g=new Set([mt,yt,_t,wt,St,Ct]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=On;let j=0,ee=0,M=null,N=-1,P=null,F=new Cr,te=new Cr,ne=null,re=new li(0),ie=0,I=t.width,ae=t.height,L=1,R=null,z=null,B=new Cr(0,0,I,ae),oe=new Cr(0,0,I,ae),se=!1,ce=new fo,le=new mo,ue=!1,de=!1,fe=new Or,pe=new q,me=new Cr,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function _e(){return M===null?L:1}let V=n;function ve(e,n){return t.getContext(e,n)}let ye,be,H,xe,U,W,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Ve,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,Ue,!1),V===null){let t=`webgl2`;if(V=ve(t,e),V===null)throw ve(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Hn(`WebGLRenderer: `+e.message),e}function ze(){ye=new Yl(V),ye.init(),Ie=new vf(V,ye),be=new kl(V,ye,e,Ie),H=new gf(V,ye),be.reversedDepthBuffer&&d&&H.buffers.depth.setReversed(!0),O=V.createFramebuffer(),k=V.createFramebuffer(),A=V.createFramebuffer(),xe=new Ql(V),U=new Yd,W=new _f(V,ye,H,U,be,Ie,xe),Se=new Jl(T),Ce=new bl(V),Le=new Dl(V,Ce),we=new Xl(V,Ce,xe,Le),Te=new eu(V,we,Ce,Le,xe),Ne=new $l(V,be,W),Ae=new Al(U),Ee=new Jd(T,Se,ye,be,Le,Ae),De=new Tf(T,U),Oe=new $d,ke=new sf(ye),Me=new El(T,Se,H,Te,p,s),je=new hf(T,Te,be),Re=new Ef(V,xe,be,H),Pe=new Ol(V,ye,xe),Fe=new Zl(V,ye,xe),xe.programs=Ee.programs,T.capabilities=be,T.extensions=ye,T.properties=U,T.renderLists=Oe,T.shadowMap=je,T.state=H,T.info=xe}m!==1009&&(w=new nu(m,t.width,t.height,o,r,i));let Be=new Sf(T,V);this.xr=Be,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let e=ye.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ye.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(e){e!==void 0&&(L=e,this.setSize(I,ae,!1))},this.getSize=function(e){return e.set(I,ae)},this.setSize=function(e,n,r=!0){Be.isPresenting?G(`WebGLRenderer: Can't change size while VR device is presenting.`):(I=e,ae=n,t.width=Math.floor(e*L),t.height=Math.floor(n*L),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(I*L,ae*L).floor()},this.setDrawingBufferSize=function(e,n,r){I=e,ae=n,L=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)Hn(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){G(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(F)},this.getViewport=function(e){return e.copy(B)},this.setViewport=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),H.viewport(F.copy(B).multiplyScalar(_e()).round())},this.getScissor=function(e){return e.copy(oe)},this.setScissor=function(e,t,n,r){e.isVector4?oe.set(e.x,e.y,e.z,e.w):oe.set(e,t,n,r),H.scissor(te.copy(oe).multiplyScalar(_e()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(e){H.setScissorTest(se=e)},this.setOpaqueSort=function(e){R=e},this.setTransparentSort=function(e){z=e},this.getClearColor=function(e){return e.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Me.getClearColor(),r=Me.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,V.clearBufferuiv(V.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,V.clearBufferiv(V.COLOR,0,v))}else r|=V.COLOR_BUFFER_BIT}t&&(r|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&V.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,Ue,!1),Me.dispose(),Oe.dispose(),ke.dispose(),W.dispose(),U.dispose(),Se.dispose(),Te.dispose(),we.dispose(),Le.dispose(),Re.dispose(),Ee.dispose(),Be.dispose(),Be.removeEventListener(`sessionstart`,Xe),Be.removeEventListener(`sessionend`,Ze),Qe.stop()};function Ve(e){e.preventDefault(),Bn(`WebGLRenderer: Context Lost.`),E=!0}function He(){Bn(`WebGLRenderer: Context Restored.`),E=!1;let e=xe.autoReset,t=je.enabled,n=je.autoUpdate,r=je.needsUpdate,i=je.type;ze(),xe.autoReset=e,je.enabled=t,je.autoUpdate=n,je.needsUpdate=r,je.type=i}function Ue(e){Hn(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function We(e){let t=e.target;t.removeEventListener(`dispose`,We),Ge(t)}function Ge(e){Ke(e),U.remove(e)}function Ke(e){let t=U.get(e).programs;t!==void 0&&(t.forEach(function(e){Ee.releaseProgram(e)}),e.isShaderMaterial&&Ee.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=he);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=lt(e,t,n,r,i);H.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=we.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Le.setup(i,r,s,n,c);let h,g=Pe;if(c!==null&&(h=Ce.get(c),g=Fe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(H.setLineWidth(r.wireframeLinewidth*_e()),g.setMode(V.LINES)):g.setMode(V.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),H.setLineWidth(e*_e()),i.isLineSegments?g.setMode(V.LINES):i.isLineLoop?g.setMode(V.LINE_LOOP):g.setMode(V.LINE_STRIP)}else i.isPoints?g.setMode(V.POINTS):i.isSprite&&g.setMode(V.TRIANGLES);if(i.isBatchedMesh){if(ye.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ce.get(c).bytesPerElement:1,o=U.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(V,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function qe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),ue===!0&&Ae.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,at(e,t,r),e.side=0,e.needsUpdate=!0,at(e,t,r),e.side=2):at(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=ke.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),de=this.localClippingEnabled,ue=Ae.init(this.clippingPlanes,de),ue===!0&&Ae.setGlobalState(this.clippingPlanes,t),D!==null&&je.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];qe(o,n,t,e),r.add(o)}else qe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=U.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ye.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Je=null;function Ye(e){Je&&Je(e)}function Xe(){Qe.stop()}function Ze(){Qe.start()}let Qe=new yl;Qe.setAnimationLoop(Ye),typeof self<`u`&&Qe.setContext(self),this.setAnimationLoop=function(e){Je=e,Be.setAnimationLoop(e),e===null?Qe.stop():Qe.start()},Be.addEventListener(`sessionstart`,Xe),Be.addEventListener(`sessionend`,Ze),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Hn(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Be.enabled===!0&&Be.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(t),t=Be.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=ke.get(e,C.length),x.init(t),x.state.textureUnits=W.getTextureUnits(),C.push(x),fe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?le.setFromArrayCamera(t):ce.setFromProjectionMatrix(fe,Pn,t.reversedDepth),de=this.localClippingEnabled,ue=Ae.init(this.clippingPlanes,de),b=Oe.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Be.enabled===!0&&Be.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&$e(e,t,-1/0,T.sortObjects)}$e(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(R,z),ge=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ge&&Me.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),ue===!0&&Ae.beginShadows();let i=x.state.shadowsArray;if(je.render(i,e,t),ue===!0&&Ae.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];tt(n,r,e,a)}ge&&Me.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];et(b,e,n,n.viewport)}}else r.length>0&&tt(n,r,e,t),ge&&Me.render(e),et(b,e,t)}M!==null&&ee===0&&(W.updateMultisampleRenderTarget(M),W.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Le.resetDefaultState(),N=-1,P=null,C.pop(),C.length>0?(x=C[C.length-1],W.setTextureUnits(x.state.textureUnits),ue===!0&&Ae.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function $e(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?le:ce;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(fe);let i=Te.update(e),a=e.material;a.visible&&b.push(e,i,a,n,me.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?le:ce;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Te.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),me.copy(e.boundingSphere.center)),me.applyMatrix4(e.matrixWorld).applyMatrix4(fe)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,me.z,s,t)}}else a.visible&&b.push(e,i,a,n,me.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)$e(i[e],t,n,r)}function et(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ue===!0&&Ae.setGlobalState(T.clippingPlanes,n),r&&H.viewport(F.copy(r)),i.length>0&&nt(i,t,n),a.length>0&&nt(a,t,n),o.length>0&&nt(o,t,n),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ye.has(`EXT_color_buffer_half_float`)||ye.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Tr(1,1,{generateMipmaps:!0,type:e?xt:mt,minFilter:pt,samples:Math.max(4,be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fr.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||F;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(re),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),ge&&Me.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ue===!0&&Ae.setGlobalState(T.clippingPlanes,r),nt(e,n,r),W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a),ye.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,rt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(W.updateMultisampleRenderTarget(a),W.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(re,ie),d!==void 0&&(r.viewport=d),T.toneMapping=u}function nt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&rt(o,t,n,s,l,c)}}function rt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function it(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function at(e,t,n){t.isScene!==!0&&(t=he);let r=U.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ee.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ee.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Se.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,We),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ct(e,s),d}else s.uniforms=Ee.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ee.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ae.uniform),ct(e,s),r.needsLights=dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=it(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function ot(e,t,n,r,i){let a=U.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=at(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function st(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=dd.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ct(e,t){let n=U.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function lt(e,t,n,r,i){t.isScene!==!0&&(t=he),W.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:fr.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Se.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=U.get(r),b=x.state.lights;if(ue===!0&&(de===!0||e!==P)){let t=e===P&&r.id===N;Ae.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ae.numPlanes||v.numIntersection!==Ae.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===it(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?ot(r,t,i,s,h):at(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(H.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==N&&(N=r.id,O=!0),E||P!==e){H.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(V,`projectionMatrix`,e.projectionMatrix),A.setValue(V,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(V,pe.setFromMatrixPosition(e.matrixWorld)),be.logarithmicDepthBuffer&&A.setValue(V,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(V,`isOrthographic`,e.isOrthographicCamera===!0),P!==e&&(P=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(V,`sunShadowMap`,b.state.sunShadowMap,W),b.state.directionalShadowMap.length>0&&A.setValue(V,`directionalShadowMap`,b.state.directionalShadowMap,W),b.state.spotShadowMap.length>0&&A.setValue(V,`spotShadowMap`,b.state.spotShadowMap,W),b.state.pointShadowMap.length>0&&A.setValue(V,`pointShadowMap`,b.state.pointShadowMap,W)),i.isSkinnedMesh){A.setOptional(V,i,`bindMatrix`),A.setOptional(V,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(V,`boneTexture`,e.boneTexture,W))}i.isBatchedMesh&&(A.setOptional(V,i,`batchingTexture`),A.setValue(V,`batchingTexture`,i._matricesTexture,W),A.setOptional(V,i,`batchingIdTexture`),A.setValue(V,`batchingIdTexture`,i._indirectTexture,W),A.setOptional(V,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(V,`batchingColorTexture`,i._colorsTexture,W));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Ne.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(V,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=kf()),O){if(A.setValue(V,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ut(j,k),a&&r.fog===!0&&De.refreshFogUniforms(j,a),De.refreshMaterialUniforms(j,r,L,ae,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}dd.upload(V,st(v),j,W)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(dd.upload(V,st(v),j,W),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(V,`center`,i.center),A.setValue(V,`modelViewMatrix`,i.modelViewMatrix),A.setValue(V,`normalMatrix`,i.normalMatrix),A.setValue(V,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,w),Re.bind(n,w)}}return w}function ut(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=U.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),U.get(e.texture).__webglTexture=t,U.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=U.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=U.get(e);if(o.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(V.FRAMEBUFFER,o.__webglFramebuffer),F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest,H.viewport(F),H.scissor(te),H.setScissorTest(ne),N=-1;return}if(o.__webglFramebuffer===void 0)W.setupRenderTarget(e);else if(o.__hasExternalTextures)W.rebindTextures(e,U.get(e.texture).__webglTexture,U.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&U.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);W.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=U.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&W.useMultisampledRTT(e)===!1?U.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,F.copy(e.viewport),te.copy(e.scissor),ne=e.scissorTest}else F.copy(B).multiplyScalar(L).floor(),te.copy(oe).multiplyScalar(L).floor(),ne=se;if(n!==0&&(r=O),H.bindFramebuffer(V.FRAMEBUFFER,r)&&H.drawBuffers(e,r),H.viewport(F),H.scissor(te),H.setScissorTest(ne),i){let r=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=U.get(e.textures[t]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=U.get(e.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,t.__webglTexture,n)}N=-1};function ft(e){let t=U.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=be.textureFormatReadable(e.format),t.__typeReadable=be.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Hn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){H.bindFramebuffer(V.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let u=ft(o);if(u.__formatReadable===!1){Hn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Hn(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&V.readPixels(t,n,r,i,Ie.convert(c),Ie.convert(l),a)}finally{let e=M===null?null:U.get(M).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=U.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){H.bindFramebuffer(V.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+s);let d=ft(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.bufferData(V.PIXEL_PACK_BUFFER,a.byteLength,V.STREAM_READ),V.readPixels(t,n,r,i,Ie.convert(l),Ie.convert(u),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let p=M===null?null:U.get(M).__webglFramebuffer;H.bindFramebuffer(V.FRAMEBUFFER,p);let m=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Wn(V,m,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,f),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,a),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(f),V.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;W.setTexture2D(e,0),V.copyTexSubImage2D(V.TEXTURE_2D,n,0,0,o,s,i,a),H.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ie.convert(t.format),_=Ie.convert(t.type),v;t.isData3DTexture?(W.setTexture3D(t,0),v=V.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(W.setTexture2DArray(t,0),v=V.TEXTURE_2D_ARRAY):(W.setTexture2D(t,0),v=V.TEXTURE_2D),H.activeTexture(V.TEXTURE0),H.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,t.flipY),H.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),H.pixelStorei(V.UNPACK_ALIGNMENT,t.unpackAlignment);let y=H.getParameter(V.UNPACK_ROW_LENGTH),b=H.getParameter(V.UNPACK_IMAGE_HEIGHT),x=H.getParameter(V.UNPACK_SKIP_PIXELS),S=H.getParameter(V.UNPACK_SKIP_ROWS),C=H.getParameter(V.UNPACK_SKIP_IMAGES);H.pixelStorei(V.UNPACK_ROW_LENGTH,h.width),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,h.height),H.pixelStorei(V.UNPACK_SKIP_PIXELS,l),H.pixelStorei(V.UNPACK_SKIP_ROWS,u),H.pixelStorei(V.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=U.get(e),r=U.get(t),h=U.get(n.__renderTarget),g=U.get(r.__renderTarget);H.bindFramebuffer(V.READ_FRAMEBUFFER,h.__webglFramebuffer),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(e).__webglTexture,i,d+n),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,U.get(t).__webglTexture,a,m+n)),V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.DEPTH_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||U.has(e)){let n=U.get(e),r=U.get(t);H.bindFramebuffer(V.READ_FRAMEBUFFER,k),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,n.__webglTexture,i),T?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,r.__webglTexture,a),i===0?T?V.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):V.copyTexSubImage2D(v,a,f,p,l,u,o,s):V.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,V.COLOR_BUFFER_BIT,V.NEAREST);H.bindFramebuffer(V.READ_FRAMEBUFFER,null),H.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?V.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):V.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):V.texSubImage2D(V.TEXTURE_2D,a,f,p,o,s,g,_,h);H.pixelStorei(V.UNPACK_ROW_LENGTH,y),H.pixelStorei(V.UNPACK_IMAGE_HEIGHT,b),H.pixelStorei(V.UNPACK_SKIP_PIXELS,x),H.pixelStorei(V.UNPACK_SKIP_ROWS,S),H.pixelStorei(V.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&V.generateMipmap(v),H.unbindTexture()},this.initRenderTarget=function(e){U.get(e).__webglFramebuffer===void 0&&W.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?W.setTextureCube(e,0):e.isData3DTexture?W.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?W.setTexture2DArray(e,0):W.setTexture2D(e,0),H.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,H.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=fr._getDrawingBufferColorSpace(e),t.unpackColorSpace=fr._getUnpackColorSpace()}},jf=new q;function Mf(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;jf.copy(t),jf[r]=0,jf.normalize();let l=.5*o/(o+s),u=1-jf.angleTo(e)/c;return Math.sign(jf[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Nf=class e extends Do{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new q,c=new q,l=new q(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new q,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Mf(m,c,`z`,`y`,i,n),f[a+1]=1-Mf(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Mf(m,c,`z`,`y`,i,n),f[a+1]=1-Mf(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Mf(m,c,`x`,`z`,i,e),f[a+1]=Mf(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Mf(m,c,`x`,`z`,i,e),f[a+1]=1-Mf(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Mf(m,c,`x`,`y`,i,e),f[a+1]=1-Mf(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Mf(m,c,`x`,`y`,i,e),f[a+1]=1-Mf(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},Pf=1150,Ff={1:[[0,0]],2:[[-1,-1],[1,1]],3:[[-1,-1],[0,0],[1,1]],4:[[-1,-1],[1,-1],[-1,1],[1,1]],5:[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],6:[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]},If=[3,4,1,6,2,5],Lf={3:new q(1,0,0),4:new q(-1,0,0),1:new q(0,1,0),6:new q(0,-1,0),2:new q(0,0,1),5:new q(0,0,-1)},Rf=new q(0,1,0);function zf(e){let t=e=>{let t=document.createElement(`canvas`);t.width=t.height=256,e(t.getContext(`2d`));let n=new Co(t);return n.colorSpace=On,n},n=(t,n,r)=>{t.fillStyle=n;for(let[n,i]of Ff[e])t.beginPath(),t.arc(128+n*62,128+i*62,r,0,Math.PI*2),t.fill()};return{map:t(e=>{e.fillStyle=`#2a1f66`,e.fillRect(0,0,256,256),e.strokeStyle=`#2fe3ff`,e.lineWidth=6,e.strokeRect(17,17,222,222),n(e,`#ffd0e3`,23)}),glow:t(e=>{e.fillStyle=`#000`,e.fillRect(0,0,256,256),e.strokeStyle=`#1590a8`,e.lineWidth=6,e.strokeRect(17,17,222,222),n(e,`#ff3d8b`,23)})}}function Bf(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.strokeStyle=`#2fe3ff`,t.lineWidth=2;for(let e=0;e<=16;e++){let n=e/16*512;t.beginPath(),t.moveTo(n,0),t.lineTo(n,512),t.moveTo(0,n),t.lineTo(512,n),t.stroke()}let n=t.createRadialGradient(256,256,40.96,256,256,256);n.addColorStop(0,`rgba(0,0,0,0.25)`),n.addColorStop(.55,`rgba(0,0,0,0.75)`),n.addColorStop(1,`rgba(0,0,0,1)`),t.globalCompositeOperation=`destination-out`,t.fillStyle=n,t.fillRect(0,0,512,512);let r=new Co(e);return r.colorSpace=On,r}function Vf(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,61,139,0.85)`),n.addColorStop(.45,`rgba(255,61,139,0.25)`),n.addColorStop(1,`rgba(255,61,139,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new Co(e)}var Hf=e=>1-(1-e)**3;function Uf(e,t=!1){let n;try{n=new Af({canvas:e,antialias:!0,alpha:!0,powerPreference:`high-performance`})}catch{return{ok:!1,roll:async()=>{},show:()=>{},fps:()=>0,dispose:()=>{}}}n.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let r=new fi,i=new Kc(30,1,.1,50);i.position.set(3.4,4.3,5.2),i.lookAt(0,.55,0),r.add(new Pc(12568831,2363466,1.5));let a=new Yc(16777215,2.2);a.position.set(2.5,6,3.5),r.add(a);let o=If.map(e=>{let{map:t,glow:n}=zf(e);return t.anisotropy=n.anisotropy=4,new Y({map:t,emissiveMap:n,emissive:16777215,emissiveIntensity:1.15,roughness:.35,metalness:.1})}),s=new J(new Nf(1.5,1.5,1.5,4,.16),o);r.add(s);let c=new J(new Zs(11,11),new Ra({map:Bf(),transparent:!0,opacity:.5,depthWrite:!1}));c.rotation.x=-Math.PI/2,t||r.add(c);let l=new J(new Zs(4.2,4.2),new Ra({map:Vf(),transparent:!0,blending:2,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.01,t||r.add(l);let u=.75,d=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,f=null,p=!1,m=!1,h=0,g=0,_=performance.now(),v=new ir,y=new ir,b=e=>{let t=new ir().setFromUnitVectors(Lf[e]??Rf,Rf),n=Math.floor(Math.random()*4)*(Math.PI/2)+(Math.random()-.5)*.3;return t.premultiply(new ir().setFromAxisAngle(Rf,n))},x=()=>{let t=e.clientWidth,r=e.clientHeight;t&&r&&(n.setSize(t,r,!1),i.aspect=t/r,i.fov=i.aspect<1?40:i.aspect>2.2?21:30,i.updateProjectionMatrix())},S=new ResizeObserver(x);S.observe(e),x();let C=e=>{if(m)return;if(requestAnimationFrame(C),h++,e-_>=1e3&&(g=Math.round(h*1e3/(e-_)),h=0,_=e),f){let t=Math.min(1,(e-f.start)/Pf);y.setFromAxisAngle(f.axis,f.turns*(1-Hf(t))),v.copy(f.target).multiply(y),s.quaternion.copy(f.from).slerp(v,Math.min(1,t/.18));let n=t<.6?Math.sin(t/.6*Math.PI)*1.5:Math.sin((t-.6)/.4*Math.PI)*.35;if(s.position.y=u+n,t>=1){s.quaternion.copy(f.target),s.position.y=u;let e=f.done;f=null,p=!0,e()}}else p||(s.rotation.set(.5,e*6e-4,.28),s.position.y=1+Math.sin(e*.002)*.08);let t=s.position.y-u;l.scale.setScalar(1+t*.35),l.material.opacity=Math.max(.25,.9-t*.4),n.render(r,i)};return requestAnimationFrame(C),{ok:!0,roll(e){return d?(this.show(e),Promise.resolve()):new Promise(t=>{f?.done(),f={start:performance.now(),from:s.quaternion.clone(),target:b(e),axis:new q(Math.random()-.5,Math.random()*.4,Math.random()-.5).normalize(),turns:Math.PI*(5+Math.random()*2),done:t}})},show(e){f?.done(),f=null,p=!0,s.quaternion.copy(b(e)),s.position.y=u},fps:()=>g,dispose(){m=!0,S.disconnect(),f?.done(),s.geometry.dispose(),o.forEach(e=>{e.map?.dispose(),e.emissiveMap?.dispose(),e.dispose()}),n.dispose()}}}var Wf=null,Gf=null,Kf=!0;try{Kf=localStorage.getItem(`cch.sound`)!==`0`}catch{}var qf=()=>Kf;function Jf(e){Kf=e;try{localStorage.setItem(`cch.sound`,e?`1`:`0`)}catch{}}function Yf(){try{if(!Wf){Wf=new(window.AudioContext||window.webkitAudioContext);let e=Wf.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=6;let t=Wf.createGain();t.gain.value=.55;let n=Wf.createDelay(.5);n.delayTime.value=.13;let r=Wf.createGain();r.gain.value=.28;let i=Wf.createGain();i.gain.value=.22,t.connect(e),t.connect(n),n.connect(r).connect(n),n.connect(i).connect(e),e.connect(Wf.destination),Gf=t}Wf.state===`suspended`&&Wf.resume()}catch{Wf=null}}var Xf=[523.25,587.33,659.25,783.99,880,1046.5,1174.66,1318.51,1567.98,1760,2093,2349.32,2637.02,3135.96];function Zf(e,t,n=.5,r=.2){let i=Wf;[[1,1],[2.76,.28],[5.4,.1]].forEach(([a,o])=>{let s=i.createOscillator(),c=i.createGain();s.frequency.value=e*a,c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r*o,t+.006),c.gain.exponentialRampToValueAtTime(1e-4,t+n/a**.5),s.connect(c).connect(Gf),s.start(t),s.stop(t+n+.05)})}function Qf(e,t,n=.18,r=.22,i){let a=Wf,o=a.createOscillator(),s=a.createBiquadFilter(),c=a.createGain();o.type=`triangle`,o.frequency.setValueAtTime(e,t),i&&o.frequency.exponentialRampToValueAtTime(i,t+n),s.type=`lowpass`,s.frequency.setValueAtTime(e*6,t),s.frequency.exponentialRampToValueAtTime(e*1.5,t+n),c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+.004),c.gain.exponentialRampToValueAtTime(1e-4,t+n),o.connect(s).connect(c).connect(Gf),o.start(t),o.stop(t+n+.03)}var $f=null;function ep(e,t,n,r=.2,i){let a=Wf;if(!$f){$f=a.createBuffer(1,a.sampleRate,a.sampleRate);let e=$f.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}let o=a.createBufferSource();o.buffer=$f;let s=a.createBiquadFilter();s.type=`bandpass`,s.Q.value=1.4,s.frequency.setValueAtTime(n,e),i&&s.frequency.exponentialRampToValueAtTime(i,e+t);let c=a.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(r,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+t),o.connect(s).connect(c).connect(Gf),o.start(e,Math.random()*.5,t+.05)}function tp(e,t,n=.12){for(let r=0;r<t;r++)Zf(Xf[10+(r%2?2:0)+ +(r%3==2)],e+r*.055,.22,n)}var np=0,rp=0,ip={tap:e=>Qf(Xf[5],e,.07,.12),step:e=>{let t=performance.now();np=t-rp>700?0:Math.min(np+1,9),rp=t,Qf(Xf[np],e,.16,.2)},roll:e=>{let t=e;for(let e=0;e<9;e++)ep(t,.035,1800+Math.random()*1600,.22),Qf(180+Math.random()*80,t,.04,.1),t+=.06+e*.014;Zf(Xf[7],t+.08,.5,.2),Zf(Xf[9],t+.16,.6,.14)},plus:e=>{Zf(Xf[8]*.63,e,.12,.2),Zf(Xf[7],e+.07,.55,.22),tp(e+.16,3,.07)},minus:e=>{Qf(Xf[2]/2,e,.2,.22,Xf[1]/2),Qf(Xf[0]/2,e+.18,.32,.22,Xf[0]/2.4)},item:e=>{[0,2,3,5,7].forEach((t,n)=>Zf(Xf[t],e+n*.06,.4,.16)),tp(e+.34,4,.08)},alert:e=>{Zf(Xf[4],e,.3,.2),Zf(Xf[3]*.89,e+.2,.45,.2)},reveal:e=>{ep(e,.5,500,.12,5e3),[0,3,5,8].forEach((t,n)=>Zf(Xf[t],e+.3+n*.05,.9,.14))},core:e=>{Qf(Xf[0]/4,e,.5,.3),[0,2,3,5,7,8,10].forEach((t,n)=>Zf(Xf[t],e+n*.07,.5,.17)),tp(e+.5,14,.1),Zf(Xf[10],e+1.3,1.2,.2),Zf(Xf[7],e+1.3,1.2,.14)},win:e=>{[[3,0],[5,.16],[7,.32],[8,.48],[7,.72],[8,.88],[10,1.04]].forEach(([t,n])=>{Zf(Xf[t],e+n,.6,.18),Qf(Xf[t]/2,e+n,.2,.14)}),Qf(Xf[0]/4,e,.6,.3),Qf(Xf[3]/4,e+.72,.6,.3),Qf(Xf[0]/2,e+1.04,.9,.3),tp(e+1.2,18,.09)},turn:e=>{Zf(Xf[3],e,.35,.16),Zf(Xf[5],e+.11,.55,.18)},hit:e=>{ep(e,.08,900,.3,200),Qf(140,e,.14,.3,60)},slice:e=>ep(e,.12,3e3,.2,9e3),good:e=>{Zf(Xf[5],e,.25,.16),Zf(Xf[8],e+.06,.35,.16)},bad:e=>Qf(Xf[0]/2,e,.25,.25,Xf[0]/3),count:e=>Qf(Xf[3],e,.12,.2),go:e=>{Zf(Xf[5],e,.5,.2),Zf(Xf[8],e,.5,.16)},fall:e=>Qf(900,e,.5,.22,110)};function ap(e){if(Kf&&Wf&&Gf&&Wf.state===`running`&&e!==0)try{let t=Wf.currentTime+.005;if(e<0){Qf(Xf[0]/2,t,.16,e<=-8?.26:.18,Xf[0]/2.6);return}let n=Math.max(1,Math.min(8,1+Math.floor(e/3)));for(let e=0;e<n;e++)Zf(Xf[2+e],t+e*.07,.4,.15);tp(t+n*.07,Math.min(16,1+e),.07),e>=15&&Zf(Xf[12],t+n*.07+.25,.9,.18)}catch{}}function Z(e){let t=ip[e];if(Kf&&Wf&&Gf&&Wf.state===`running`&&t)try{t(Wf.currentTime+.005)}catch{}}function op(e){let t=e>>>0||1;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function sp(e){let t=document.createElement(`canvas`);t.className=`mini-canvas`,e.append(t);let n=t.getContext(`2d`),r={canvas:t,c:n,width:0,height:0,loop:l,destroy:u},i=0,a=null,o=!1,s=()=>{let e=Math.min(window.devicePixelRatio||1,2);r.width=t.clientWidth||320,r.height=t.clientHeight||320,t.width=Math.round(r.width*e),t.height=Math.round(r.height*e),n.setTransform(e,0,0,e,0,0)},c=new ResizeObserver(s);c.observe(t),s();function l(e){let t=performance.now(),n=t,r=()=>{if(o)return;let r=performance.now(),i=Math.min(.05,(r-n)/1e3);n=r,e(i,r-t)},s=()=>{o||(r(),i=requestAnimationFrame(s))};i=requestAnimationFrame(s),a=setInterval(()=>document.hidden&&r(),250)}function u(){o=!0,cancelAnimationFrame(i),a&&clearInterval(a),c.disconnect(),t.remove()}return r}function cp(e,t){let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}var lp={night:`#150f33`,panel:`#221a4d`,line:`#43358a`,ink:`#efeaff`,dim:`#aea6dc`,magenta:`#ff3d8b`,cyan:`#2fe3ff`,yellow:`#ffd23f`,green:`#9cff57`,orange:`#ff8a3d`};function Q(e,t,n=``){let r=document.createElement(e);return r.className=t,n&&(r.textContent=n),r}var up=(e,t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()};function dp(e,t,n,r){let i=Math.min(e/n,t/r);return{scale:i,ox:(e-n*i)/2,oy:(t-r*i)/2}}var fp=e=>{let t=op(e.seed),n=sp(e.el),r=[];for(let n=600;n<e.durationMs-1200;n+=330+t()*420)r.push({at:n,x:.12+t()*.76,vx:(t()-.5)*.28,vy:1.25+t()*.3,secret:t()<.28,cut:null,spin:(t()-.5)*4,angle:0,entry:null});let i=0,a=null,o=0,s=[],c=(e,t)=>{let r=(t-e.at)/1e3;return{x:(e.x+e.vx*r)*n.width,y:(1.08-(e.vy*r-.775*r*r))*n.height,t:r}},l=()=>Math.min(n.width,n.height)*.075+10,u=(t,n)=>{t.cut=o,t.angle=n,i+=t.secret?-30:10,Z(t.secret?`bad`:`slice`),e.report(Math.max(0,i))},d=(e,t)=>{let n=l();for(let i of r){if(i.cut!==null||o<i.at)continue;let r=c(i,o);if(r.t>2.2)continue;let a=Math.hypot(e.x-r.x,e.y-r.y)<n,s=Math.hypot(t.x-r.x,t.y-r.y)<n;if(!a&&!s){let a=t.x-e.x,o=t.y-e.y,s=a*a+o*o||1,c=((r.x-e.x)*a+(r.y-e.y)*o)/s;c>0&&c<1&&Math.hypot(e.x+c*a-r.x,e.y+c*o-r.y)<n*.75&&s>n*n*2.2&&u(i,Math.atan2(o,a)),i.entry=null}else if(!a&&s)i.entry={x:e.x-r.x,y:e.y-r.y,t:o};else if(a&&!s&&i.entry){let e=t.x-r.x-i.entry.x,a=t.y-r.y-i.entry.y;Math.hypot(e,a)>n*1.5&&o-i.entry.t<400&&u(i,Math.atan2(a,e)),i.entry=null}}},f=e=>{a=cp(n.canvas,e),n.canvas.setPointerCapture?.(e.pointerId)},p=e=>{if(!a)return;let t=cp(n.canvas,e);d(a,t),s.push({...t,t:o}),a=t},m=()=>{a=null;for(let e of r)e.entry=null};return n.canvas.addEventListener(`pointerdown`,f),n.canvas.addEventListener(`pointermove`,p),n.canvas.addEventListener(`pointerup`,m),n.canvas.addEventListener(`pointercancel`,m),n.loop((e,t)=>{o=t;let{c:a,width:u,height:d}=n;a.fillStyle=lp.night,a.fillRect(0,0,u,d);let f=l();for(let e of r){if(t<e.at)continue;let n=c(e,t);if(n.t>2.4)continue;let r=()=>{a.fillStyle=e.secret?lp.yellow:lp.magenta,up(a,-f,-f*.7,f*2,f*1.4,8),a.fill(),a.strokeStyle=lp.night,a.lineWidth=3,a.beginPath(),e.secret?(a.rect(-f*.3,-f*.3,f*.6,f*.5),a.moveTo(-f*.18,-f*.3),a.arc(0,-f*.3,f*.18,Math.PI,0)):(a.moveTo(-f,-f*.7),a.lineTo(0,f*.1),a.lineTo(f,-f*.7)),a.stroke()};if(e.cut===null){a.save(),a.translate(n.x,n.y),a.rotate(e.spin*n.t),r(),a.restore();continue}let i=(t-e.cut)/520;if(i>=1)continue;let o=c(e,e.cut),s=e.spin*o.t,l=-Math.sin(e.angle),u=Math.cos(e.angle);for(let t of[-1,1])a.save(),a.globalAlpha=1-i*i,a.translate(o.x+l*t*i*f*1.5,o.y+u*t*i*f*1.5+i*i*f*2.2),a.rotate(s+t*i*.9),a.save(),a.rotate(e.angle-s),a.beginPath(),a.rect(-f*2,t>0?0:-f*2,f*4,f*2),a.restore(),a.clip(),r(),a.restore();a.save(),a.globalAlpha=Math.max(0,1-i*3),a.strokeStyle=`#ffffff`,a.lineWidth=4,a.beginPath(),a.moveTo(o.x-Math.cos(e.angle)*f*1.6,o.y-Math.sin(e.angle)*f*1.6),a.lineTo(o.x+Math.cos(e.angle)*f*1.6,o.y+Math.sin(e.angle)*f*1.6),a.stroke(),a.restore()}for(;s.length&&t-s[0].t>160;)s.shift();s.length>1&&(a.strokeStyle=lp.cyan,a.lineWidth=5,a.lineCap=`round`,a.beginPath(),s.forEach((e,t)=>t?a.lineTo(e.x,e.y):a.moveTo(e.x,e.y)),a.stroke()),a.fillStyle=lp.ink,a.font=`800 28px Archivo Variable, sans-serif`,a.textAlign=`center`,a.fillText(`${Math.max(0,i)} Punkte`,u/2,40)}),{score:()=>Math.max(0,i),destroy:()=>n.destroy()}},pp=e=>{let t=op(e.seed),n=100/6,r=Array.from({length:6},()=>[,,,,,,].fill(!0)),i=Array.from({length:6},()=>[,,,,,,].fill(!0)),a=Array.from({length:6},()=>[,,,,,,].fill(!1)),o=(e,n)=>{a[n][e]=!0;let s=[[1,0],[-1,0],[0,1],[0,-1]].sort(()=>t()-.5);for(let[t,c]of s){let s=e+t,l=n+c;s<0||l<0||s>=6||l>=6||a[l][s]||(t===1&&(r[n][e]=!1),t===-1&&(r[n][s]=!1),c===1&&(i[n][e]=!1),c===-1&&(i[l][e]=!1),o(s,l))}};o(0,0);let s=(e,t,n,a)=>n===1?e<5&&!r[t][e]:n===-1?e>0&&!r[t][e-1]:a===1?t<5&&!i[t][e]:t>0&&!i[t-1][e],c=Array.from({length:6},()=>[,,,,,,].fill(-1));c[5][5]=0;let l=[[5,5]];for(;l.length;){let[e,t]=l.shift();for(let[n,r]of[[1,0],[-1,0],[0,1],[0,-1]])s(e,t,n,r)&&c[t+r][e+n]<0&&(c[t+r][e+n]=c[t][e]+1,l.push([e+n,t+r]))}let u=c[0][0],d=[0,0];for(let e=0,t=0;c[t][e]>Math.floor(u/2);){let n=[[1,0],[-1,0],[0,1],[0,-1]].find(([n,r])=>s(e,t,n,r)&&c[t+r][e+n]===c[t][e]-1);e+=n[0],t+=n[1],d=[e,t]}let f=null,p=sp(e.el),m={x:n/2,y:n/2,vx:0,vy:0,r:3},h=0,g=null,_=0,v=null,y=()=>{v||S||(v=Q(`p`,`mg-note`,`Kein Neigungssensor: Ohne Neigen lässt sich die Kugel nicht steuern.`),e.el.append(v))},b=new Set,x=e=>e.type===`keydown`?b.add(e.key):b.delete(e.key);window.addEventListener(`keydown`,x),window.addEventListener(`keyup`,x);let S=null,C=null,w=e=>{if(e.beta==null||e.gamma==null)return;C??={b:e.beta,g:e.gamma};let t=e.beta-C.b,n=e.gamma-C.g,r=screen.orientation?.angle??window.orientation??0,[i,a]=r===90?[t,-n]:r===270||r===-90?[-t,n]:[n,t];S={x:Math.max(-1,Math.min(1,i/22)),y:Math.max(-1,Math.min(1,a/22))}},T=typeof window.DeviceOrientationEvent?.requestPermission==`function`,E=null;T?(E=Q(`button`,`btn small mg-tilt`,`Neigen einschalten`),E.type=`button`,E.addEventListener(`click`,async()=>{try{await window.DeviceOrientationEvent.requestPermission()===`granted`?window.addEventListener(`deviceorientation`,w):y()}catch{y()}E?.remove()}),e.el.append(E)):`DeviceOrientationEvent`in window?(window.addEventListener(`deviceorientation`,w),setTimeout(y,2500)):y();let D=(e,t,a)=>{if(e<a||t<a||e>100-a||t>100-a)return!0;let o=Math.min(5,Math.floor(e/n)),s=Math.min(5,Math.floor(t/n)),c=e-o*n,l=t-s*n,u=.9;return!!(c>n-a-u&&o<5&&r[s][o]||c<a+u&&o>0&&r[s][o-1]||l>n-a-u&&s<5&&i[s][o]||l<a+u&&s>0&&i[s-1][o])},O=()=>g===null?_*1e3:1e5-Math.round(g);return p.loop((t,a)=>{if(g===null&&a>=h){let r=0,i=0;b.size?(r=+!!b.has(`ArrowRight`)-!!b.has(`ArrowLeft`),i=+!!b.has(`ArrowDown`)-!!b.has(`ArrowUp`)):S&&(r=S.x,i=S.y),m.vx=(m.vx+r*170*t)*(1-2.6*t),m.vy=(m.vy+i*170*t)*(1-2.6*t);let o=Math.hypot(m.vx,m.vy);o>34&&(m.vx*=34/o,m.vy*=34/o);let s=m.x+m.vx*t,l=m.y+m.vy*t;if(D(s,l,m.r)){let[e,t]=f===null?[0,0]:d;m.x=(e+.5)*n,m.y=(t+.5)*n,m.vx=m.vy=0,h=a+700,Z(`hit`)}else m.x=s,m.y=l;let p=Math.min(5,Math.floor(m.x/n)),v=Math.min(5,Math.floor(m.y/n)),y=u-c[v][p];y>_&&(_=y,e.report(O())),f===null&&p===d[0]&&v===d[1]&&(f=a,Z(`good`)),p===5&&v===5&&(g=a,e.finish(O()))}let{c:o,width:s,height:l}=p,v=dp(s,l,100,100);o.fillStyle=lp.night,o.fillRect(0,0,s,l),o.save(),o.translate(v.ox,v.oy),o.scale(v.scale,v.scale),o.fillStyle=lp.panel,o.fillRect(0,0,100,100),o.fillStyle=`rgba(156,255,87,0.35)`,o.fillRect(85.33333333333334,85.33333333333334,12.666666666666668,12.666666666666668),o.fillStyle=f===null?`rgba(255,210,63,0.28)`:`rgba(47,227,255,0.45)`,o.fillRect(d[0]*n+2,d[1]*n+2,12.666666666666668,12.666666666666668),o.fillStyle=lp.ink,o.font=`700 4px Archivo Variable, sans-serif`,o.textAlign=`center`,o.fillText(f===null?`Checkpoint`:`gesichert`,(d[0]+.5)*n,(d[1]+.5)*n+1.5),o.strokeStyle=a<h?lp.yellow:lp.magenta,o.lineWidth=1.4,o.lineCap=`round`,o.shadowColor=lp.magenta,o.shadowBlur=6,o.beginPath(),o.rect(.7,.7,98.6,98.6);for(let e=0;e<6;e++)for(let t=0;t<6;t++)t<5&&r[e][t]&&(o.moveTo((t+1)*n,e*n),o.lineTo((t+1)*n,(e+1)*n)),e<5&&i[e][t]&&(o.moveTo(t*n,(e+1)*n),o.lineTo((t+1)*n,(e+1)*n));o.stroke(),o.shadowBlur=0,o.fillStyle=a<h?lp.yellow:lp.cyan,o.beginPath(),o.arc(m.x,m.y,m.r,0,Math.PI*2),o.fill(),o.restore(),g!==null&&(o.fillStyle=lp.green,o.font=`800 28px Archivo Variable, sans-serif`,o.textAlign=`center`,o.fillText(`Im Ziel!`,s/2,40))}),{score:O,destroy:()=>{window.removeEventListener(`deviceorientation`,w),window.removeEventListener(`keydown`,x),window.removeEventListener(`keyup`,x),v?.remove(),E?.remove(),p.destroy()}}},mp=e=>{let t=sp(e.el),n=e.solo===e.selfId,r=e.players.filter(t=>t.id!==e.solo),i=Object.fromEntries(r.map((e,t)=>[e.id,t*2%5])),a=new Set,o=[],s=0,c=-1e3,l=0,u=!0,d=i[e.selfId]??2,f=e=>(e+.5)*20,p=()=>1150-Math.min(480,s/e.durationMs*480);e.onMessage((t,r)=>{let c=r;c?.t===`throw`&&t===e.solo&&typeof c.lane==`number`?o.push({lane:c.lane,at:s,ms:p()}):c?.t===`lane`&&typeof c.lane==`number`?i[t]=c.lane:c?.t===`hit`&&(a.add(t),n&&(l++,e.report(l)))});let m=e=>{let n=cp(t.canvas,e),r=dp(t.width,t.height,100,150);return Math.max(0,Math.min(4,Math.floor((n.x-r.ox)/r.scale/20)))},h=t=>{let r=m(t);if(n){if(t.type!==`pointerdown`||s-c<430)return;c=s,o.push({lane:r,at:s,ms:p()}),e.send({t:`throw`,lane:r})}else u&&r!==d&&(d=r,i[e.selfId]=r,e.send({t:`lane`,lane:r}))},g=!1;return t.canvas.addEventListener(`pointerdown`,e=>{g=!0,t.canvas.setPointerCapture?.(e.pointerId),h(e)}),t.canvas.addEventListener(`pointermove`,e=>g&&!n&&h(e)),t.canvas.addEventListener(`pointerup`,()=>g=!1),t.canvas.addEventListener(`pointercancel`,()=>g=!1),t.loop((c,p)=>{s=p;let{c:m,width:h,height:g}=t,_=dp(h,g,100,150);m.fillStyle=lp.night,m.fillRect(0,0,h,g),m.save(),m.translate(_.ox,_.oy),m.scale(_.scale,_.scale),m.fillStyle=lp.panel,m.fillRect(0,0,100,150),m.strokeStyle=lp.line,m.lineWidth=.5;for(let e=1;e<5;e++)m.beginPath(),m.moveTo(e*100/5,0),m.lineTo(e*100/5,150),m.stroke();m.fillStyle=lp.yellow,up(m,30,2,40,12,3),m.fill(),m.fillStyle=lp.night,m.font=`900 7px Archivo Variable, sans-serif`,m.textAlign=`center`,m.fillText(`BOSS`,50,10.5);for(let t=o.length-1;t>=0;t--){let r=o[t],i=(p-r.at)/r.ms,s=16+i*112;i>=1&&i<1.12&&!n&&u&&d===r.lane&&(u=!1,e.send({t:`hit`}),a.add(e.selfId),e.finish(0)),i>1.3?o.splice(t,1):(m.fillStyle=lp.ink,up(m,f(r.lane)-6,s-4,12,8,1.2),m.fill())}for(let t of r)m.globalAlpha=a.has(t.id)?.25:1,m.fillStyle=t.color,m.beginPath(),m.arc(f(i[t.id]??2),128,t.id===e.selfId?6:4.5,0,Math.PI*2),m.fill(),t.id===e.selfId&&(m.strokeStyle=lp.ink,m.lineWidth=1,m.stroke());m.globalAlpha=1,m.restore(),m.fillStyle=lp.ink,m.font=`800 17px Archivo Variable, sans-serif`,m.textAlign=`center`;let v=n?`Tippe in eine Bahn. Treffer: ${l}`:u?`Weich den Akten aus`:`Erwischt!`;m.fillText(v,h/2,g-14)}),{score:()=>n?l:+!!u,destroy:()=>t.destroy()}},hp={plus:3138559,minus:16727435,item:16765503,event:11570431,neutral:8357065,wheel:16777215,crash:16722509,shop:7208842},gp=new q(0,1,0);function _p(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`));let i=new Co(r);return i.colorSpace=On,i}var vp=-18.5*v,yp=-12.5*v,bp=()=>{let e=_p(512,512,e=>{let t=11,n=()=>((t=t*16807%2147483647)-1)/2147483646;for(let t=0;t<4;t++){let r=t%2*256,i=Math.floor(t/2)*256,a=t%2===Math.floor(t/2),o=e.createLinearGradient(r,i,r+256,i+256);o.addColorStop(0,a?`#fff2cf`:`#ffe2a4`),o.addColorStop(1,a?`#ffe9b8`:`#ffd68a`),e.fillStyle=o,e.fillRect(r,i,256,256),e.save(),e.beginPath(),e.rect(r,i,256,256),e.clip();for(let t=0;t<5;t++)e.strokeStyle=`rgba(170,115,40,${.05+n()*.08})`,e.lineWidth=.6+n()*1.6,e.beginPath(),e.moveTo(r+n()*256,i-10),e.bezierCurveTo(r+n()*256,i+80,r+n()*256,i+170,r+n()*256,i+266),e.stroke();e.restore()}e.strokeStyle=`rgba(190,135,60,0.6)`,e.lineWidth=3;for(let t of[0,256,512])e.beginPath(),e.moveTo(t,0),e.lineTo(t,512),e.moveTo(0,t),e.lineTo(512,t),e.stroke()});return e.wrapS=e.wrapT=at,e.repeat.set(34,34),e.center.set(.5,.5),e.rotation=Math.PI/4,e.anisotropy=4,e},xp=()=>_p(512,512,e=>{e.clearRect(0,0,512,512);let t=e.createRadialGradient(256,256,20,256,256,256);t.addColorStop(0,`#ff6fae`),t.addColorStop(.75,`#f0408c`),t.addColorStop(1,`#c82a74`),e.fillStyle=t,e.beginPath(),e.arc(256,256,255,0,Math.PI*2),e.fill();let n=5,r=()=>((n=n*16807%2147483647)-1)/2147483646;for(let t=0;t<2600;t++)e.fillStyle=r()>.5?`rgba(255,170,230,0.07)`:`rgba(20,0,40,0.16)`,e.fillRect(r()*512,r()*512,2,2);e.lineWidth=7,e.strokeStyle=`#ffd23f`,e.beginPath(),e.arc(256,256,236,0,Math.PI*2),e.stroke(),e.lineWidth=2,e.strokeStyle=`rgba(255,210,63,0.6)`,e.beginPath(),e.arc(256,256,222,0,Math.PI*2),e.stroke()}),Sp=()=>_p(512,512,e=>{e.clearRect(0,0,512,512),e.save(),e.beginPath(),e.arc(256,256,255,0,Math.PI*2),e.clip(),e.fillStyle=`#15b8aa`,e.fillRect(0,0,512,512),e.strokeStyle=`rgba(255,255,255,0.22)`,e.lineWidth=3;for(let t=8;t<512;t+=20)for(let n=t/20%2?8:18;n<512;n+=20)e.beginPath(),e.moveTo(n-4,t-4),e.lineTo(n+4,t+4),e.stroke();e.restore();for(let t=0;t<48;t++){e.fillStyle=t%2?`#ffd23f`:`#14122c`,e.beginPath();let n=t/48*Math.PI*2,r=(t+1)/48*Math.PI*2;e.arc(256,256,255,n,r),e.arc(256,256,234,r+.06,n+.06,!0),e.fill()}}),Cp=()=>{let e=_p(512,256,e=>{let t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,`#2a35a8`),t.addColorStop(1,`#4656d8`),e.fillStyle=t,e.fillRect(0,0,512,256),[`#ff5fa2`,`#ffd23f`,`#2fe3ff`,`#6dff8a`].forEach((t,n)=>{let r=n*128;e.fillStyle=`rgba(10,14,70,0.7)`,e.fillRect(r,0,3,256),e.fillStyle=t,e.beginPath(),e.moveTo(r+44,10),e.lineTo(r+84,10),e.lineTo(r+84,104),e.lineTo(r+64,88),e.lineTo(r+44,104),e.closePath(),e.fill()}),e.fillStyle=`#ffffff`,e.fillRect(0,176,512,4)});return e.wrapS=at,e},wp=()=>{let e=_p(64,128,e=>{e.fillStyle=`#000`,e.fillRect(0,0,64,128);let t=[`#2fe3ff`,`#9cff57`,`#ff3d8b`,`#ffd23f`,`#2fe3ff`],n=3,r=()=>((n=n*16807%2147483647)-1)/2147483646;for(let n=4;n<128;n+=8)for(let i=8;i<56;i+=7)r()<.35||(e.fillStyle=t[Math.floor(r()*t.length)],e.fillRect(i,n,4,3))});return e.wrapT=at,e},Tp=()=>_p(256,128,e=>{e.fillStyle=`#0a1030`,e.fillRect(0,0,256,128),e.strokeStyle=`rgba(47,227,255,0.25)`,e.lineWidth=1;for(let t=24;t<128;t+=24)e.beginPath(),e.moveTo(8,t),e.lineTo(150,t),e.stroke();e.strokeStyle=`#2fe3ff`,e.lineWidth=3,e.beginPath(),[100,84,92,60,70,40,48,22].forEach((t,n)=>n?e.lineTo(10+n*20,t):e.moveTo(10,t)),e.stroke(),[40,70,52,90,64].forEach((t,n)=>{e.fillStyle=n===3?`#ffd23f`:`#ff3d8b`,e.fillRect(166+n*17,112-t,11,t)}),e.strokeStyle=`#3b2f8a`,e.lineWidth=6,e.strokeRect(0,0,256,128)}),Ep=()=>_p(256,32,e=>{let t=e.createLinearGradient(0,0,256,0);t.addColorStop(0,`rgba(0,0,0,1)`),t.addColorStop(.5,`rgba(190,220,255,1)`),t.addColorStop(1,`rgba(0,0,0,1)`),e.fillStyle=t,e.fillRect(0,0,256,32);let n=e.createLinearGradient(0,0,0,32);n.addColorStop(0,`rgba(0,0,0,1)`),n.addColorStop(.5,`rgba(0,0,0,0)`),n.addColorStop(1,`rgba(0,0,0,1)`),e.fillStyle=n,e.fillRect(0,0,256,32)}),Dp=()=>{let e=_p(1024,256,e=>{e.clearRect(0,0,1024,256),e.font=`900 120px Archivo Variable, system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.shadowColor=`#ff3d8b`,e.shadowBlur=26,e.fillStyle=`#ffd9e8`,e.fillText(`MEGACORP`,512,132),e.shadowBlur=0,e.fillStyle=`rgba(47,227,255,0.9)`,e.fillRect(120,28,784,6),e.fillRect(120,226,784,6)});return e.wrapS=at,e.repeat.set(2,1),e};function Op(e){let t=new Or,n=new ir().setFromAxisAngle(new q(1,0,0),-Math.PI/2),r=new ir().setFromAxisAngle(gp,Math.PI/2),i=new q(1,1,1);e.fog=new di(3162288,.0105);let a=new Yc(16727435,.4);a.position.set(-12,7,-8);let o=new Yc(3138559,.35);o.position.set(12,6,9),e.add(a,o);let s=new J(new Zs(163,163),new Y({map:bp(),roughness:.5,metalness:.05}));s.rotation.x=-Math.PI/2,s.position.set(vp+81.5,-.002,yp+81.5),e.add(s);let c=[[0,-10.2*v,36,!1],[0,7.6*v,36,!1],[0,11.4*v,36,!1],[-16.2*v,0,24,!0],[15.6*v,0,24,!0]],l=new so(new Zs(1,1.5),new Ra({map:Ep(),transparent:!0,opacity:.07,blending:2,depthWrite:!1}),c.length);c.forEach(([e,i,a,o],s)=>{l.setMatrixAt(s,t.compose(new q(e,.004,i),o?r.clone().multiply(n):n,new q(a,1,1)))}),e.add(l);let u=[[-6.8*v,xp(),1,.02],[6.8*v,Sp(),.45,.5]];for(let[t,n,r,i]of u){let a=new J(new Oo(1,56),new Y({map:n,transparent:!0,roughness:r,metalness:i}));a.rotation.x=-Math.PI/2,a.scale.set(4.7*v,3.25*v,1),a.position.set(t,.006,0),e.add(a)}let d=new J(new Oo(2.7,48),new Y({roughness:.6,transparent:!0,map:_p(512,512,e=>{e.clearRect(0,0,512,512),[`#ff5fa2`,`#ffd23f`,`#6dff8a`,`#2fe3ff`,`#9a5cff`,`#ff8a3d`,`#ff5fa2`,`#ffd23f`,`#6dff8a`,`#2fe3ff`,`#9a5cff`,`#ff8a3d`].forEach((t,n)=>{e.fillStyle=t,e.beginPath(),e.moveTo(256,256),e.arc(256,256,250,n/12*Math.PI*2,(n+1)/12*Math.PI*2),e.fill()}),e.fillStyle=`#ffffff`,e.beginPath(),e.arc(256,256,120,0,Math.PI*2),e.fill()})}));d.rotation.x=-Math.PI/2,d.position.y=.005,e.add(d);let f=k.map(t=>{let n=new J(new Oo(1.4,48),d.material);return n.rotation.x=-Math.PI/2,n.position.set(M[t].x,M[t].y+.045,M[t].z),e.add(n),n}),p=Cp();p.repeat.set(4,1);let m=new Ra({map:p}),h=new J(new Zs(64,10),m);h.position.set(vp+32,5,yp);let g=new J(new Zs(64,10),m);g.position.set(vp,5,yp+32),g.rotation.y=Math.PI/2,e.add(h,g);let _=new Y({color:1511994,roughness:.5,metalness:.3}),y=wp(),b=new Y({color:788768,emissive:16777215,emissiveMap:y,emissiveIntensity:1.25,roughness:.5}),x=[],S=[],C=[];for(let e=0;e<6;e++){for(let t=0;t<6;t++)x.push([vp+1.5+e*8+t,yp+.55,!1]);S.push([vp+8.5+e*8,yp+.6]),C.push([vp+4+e*8,yp+.06,!1])}for(let e=0;e<4;e++){for(let t=0;t<6;t++)x.push([vp+.55,yp+2+e*8+t,!0]);S.push([vp+.6,yp+9+e*8]),C.push([vp+.06,yp+4.5+e*8,!0])}let w=new so(new Do(.92,2.7,.8),[_,_,_,_,b,_],x.length);x.forEach(([e,n,a],o)=>w.setMatrixAt(o,t.compose(new q(e,1.35,n),a?r:new ir,i))),e.add(w);let T=new so(new Do(1.2,10,1.2),new Y({color:4872928,roughness:.45,metalness:.1}),S.length),E=new so(new Do(.14,9.4,.14),new Ra({color:16765503}),S.length);S.forEach(([e,n],r)=>{T.setMatrixAt(r,t.makeTranslation(e,5,n));let i=n<yp+1;E.setMatrixAt(r,t.makeTranslation(e+(i?0:.6),5,n+(i?.6:0)))}),e.add(T,E);let D=new so(new Zs(4.6,2.3),new Ra({map:Tp()}),C.length);C.forEach(([e,n,a],o)=>D.setMatrixAt(o,t.compose(new q(e,4.7,n),a?r:new ir,i))),e.add(D);let O=[];for(let e of M)for(let t of e.next)O.push([e.id,t]);let A=([e,t])=>M[e].y>.2||M[t].y>.2,j=O.filter(A),ee=O.filter(e=>!A(e)),te={Skybridge:16727435,Serversteg:16765503},re=(e,t)=>te[ne(Math.max(e,t))]??3138559,ie=new Map;for(let[e,t]of j)for(let n of[e,t]){let r=M[n],i=r.next.length>1||r.prev.length>1,a=ie.get(n)?.color===3138559?3138559:re(e,t);ie.set(n,{radius:i?.98:.82,color:a})}let I=.9,ae=.03,L=e=>Math.sqrt(ie.get(e).radius**2-(I/2)**2),R=new Y({color:4021503,roughness:.5,emissive:1714832,emissiveIntensity:.25}),z=new so(new Do(1,.06,.56),R,ee.length),B=new so(new Do(1,.066,.07),new Ra({color:16777215}),ee.length);ee.forEach(([e,n],r)=>{let i=new q(M[e].x,.02,M[e].z),a=new q(M[n].x,.02,M[n].z),o=a.clone().sub(i);t.compose(i.clone().add(a).multiplyScalar(.5),new ir().setFromAxisAngle(gp,-Math.atan2(o.z,o.x)),new q(o.length(),1,1)),z.setMatrixAt(r,t),B.setMatrixAt(r,t)}),e.add(z,B);let oe=new so(new Do(1,.1,I),new Y({color:5918688,roughness:.45,metalness:.1,emissive:2760592,emissiveIntensity:.25}),j.length),se=new so(new Do(1,.09,.07),new Ra,j.length*2);j.forEach(([e,n],r)=>{let i=new q(M[n].x-M[e].x,0,M[n].z-M[e].z).normalize(),a=new q(M[e].x,M[e].y+ae-.012,M[e].z).addScaledVector(i,L(e)),o=new q(M[n].x,M[n].y+ae-.012,M[n].z).addScaledVector(i,-L(n)),s=o.clone().sub(a).normalize(),c=new q().crossVectors(s,gp).normalize(),l=new q().crossVectors(c,s),u=new ir().setFromRotationMatrix(new Or().makeBasis(s,l,c)),d=a.clone().add(o).multiplyScalar(.5),f=new q(a.distanceTo(o),1,1);oe.setMatrixAt(r,t.compose(d.clone().addScaledVector(l,-.05),u,f));let p=new li(re(e,n));[-1,1].forEach((e,n)=>{se.setMatrixAt(r*2+n,t.compose(d.clone().addScaledVector(c,e*(I/2-.035)).addScaledVector(l,-.005),u,f)),se.setColorAt(r*2+n,p)})}),e.add(oe,se);let ce=[...ie],le=new Y({color:2366300,roughness:.4,metalness:.4}),ue=new so(new ko(1,.9,1,32),le,ce.length),de=new so(new ec(1,.035,6,40),new Ra,ce.length),fe=ce.filter(([e])=>M[e].y>.2),pe=new so(new ko(.11,.15,1,10),new Y({color:3812998,roughness:.4,metalness:.5}),fe.length);ce.forEach(([e,{radius:r,color:i}],a)=>{let o=M[e],s=o.y>.2?.18:.05;ue.setMatrixAt(a,t.compose(new q(o.x,o.y+ae-s/2,o.z),new ir,new q(r,s,r))),de.setMatrixAt(a,t.compose(new q(o.x,o.y+ae,o.z),n,new q(r,r,1))),de.setColorAt(a,new li(i))}),fe.forEach(([e],n)=>{let r=M[e];pe.setMatrixAt(n,t.compose(new q(r.x,(r.y-.15)/2,r.z),new ir,new q(1,r.y-.15,1)))}),e.add(ue,de,pe);let me=new so(new Qs(.42,.8,28),new Ra({transparent:!0,opacity:.6,depthWrite:!1,side:2}),M.length);M.forEach((e,r)=>{let a=ie.has(e.id);me.setMatrixAt(r,t.compose(new q(e.x,e.y+(a?.036:.012),e.z),n,a?new q(.9,.9,1):i)),me.setColorAt(r,new li(hp[e.type]))}),e.add(me);let he=new Y({color:16765503,emissive:16757504,emissiveIntensity:.7,roughness:.3,metalness:.5});for(let t of N){let n=new J(new ko(.68,.78,.1,6),he);n.position.set(M[t].x,M[t].y+.03,M[t].z),e.add(n)}let ge=(t,n,r)=>{let i=M[t],a=M[i.prev[0]],o=M[i.next[0]],s=new q(o.x-a.x,0,o.z-a.z).normalize(),c=new q(-s.z,0,s.x),l=new Y({color:1774656,emissive:n,emissiveIntensity:.9,roughness:.4}),u=new ni;for(let e of[-1,1]){let t=new J(new Do(.14,r,.14),l);t.position.set(e*.85,r/2,0),u.add(t)}let d=new J(new Do(1.84,.16,.16),l);return d.position.y=r,u.add(d),u.position.set(i.x,i.y,i.z),u.rotation.y=-Math.atan2(c.z,c.x),e.add(u),u};for(let t of P){ge(t,3138559,2.3);let n=new J(new ko(.62,.62,5.6,18,1,!0),new Ra({color:3138559,transparent:!0,opacity:.13,blending:2,depthWrite:!1,side:2}));n.position.set(M[t].x,2.8,M[t].z),e.add(n)}let _e=[];for(let e of[F[1],F[4]]){let t=ge(e,16722509,1.9),n=new J(new Zs(1.6,.08),new Ra({color:16722509,transparent:!0,opacity:.9,blending:2,depthWrite:!1,side:2}));t.add(n),_e.push(n)}let V=new Y({color:16184063,roughness:.35,metalness:.1}),ve=new ni;ve.position.set(-6*v,0,0),e.add(ve);let ye=new J(new ko(.78,.7,.9,24),V);ye.position.y=.45;let be=new J(new ec(.8,.04,6,40),new Ra({color:3138559}));be.rotation.x=Math.PI/2,be.position.y=.92;let H=new J(new ko(1.05,1.05,1,40,1,!0),new Ra({map:Dp(),transparent:!0,depthWrite:!1,blending:2}));H.position.y=3.6;let xe=new J(new ko(.08,.14,2.3,10),V);xe.position.y=2,ve.add(ye,be,H,xe);let U=new J(new ec(1.9,.34,10,36,Math.PI*.9),V);U.rotation.x=Math.PI/2,U.rotation.z=Math.PI*1.05,U.scale.z=1.5,U.position.set(0,.45,8.3*v);let W=new J(new ec(1.9,.045,6,48,Math.PI*.9),new Ra({color:16727435}));W.rotation.copy(U.rotation),W.position.set(0,.98,8.3*v),e.add(U,W);let Se=[[-5.2,8.6*v,.25],[5.2,8.6*v,-.25],[16.4*v,3.2,Math.PI/2],[16.4*v,-3.2,Math.PI/2]],Ce=new so(new Do(2.3,.42,.9),new Y({color:16747069,roughness:.9}),Se.length),we=new so(new Do(2.3,.5,.24),new Y({color:16736162,roughness:.9}),Se.length);Se.forEach(([e,n,r],a)=>{let o=new ir().setFromAxisAngle(gp,r);Ce.setMatrixAt(a,t.compose(new q(e,.21,n),o,i)),we.setMatrixAt(a,t.compose(new q(e,.6,n).add(new q(0,0,.42).applyQuaternion(o)),o,i))}),e.add(Ce,we);let Te=new ni;Te.position.set(8.9*v,0,0),e.add(Te);let Ee=new J(new ko(.34,.42,2.4,20),new Y({color:4856402,emissive:16727435,emissiveIntensity:.45,roughness:.25,metalness:.3}));Ee.position.y=1.2,Te.add(Ee);for(let e of[.08,.8,1.6,2.4]){let t=new J(new ko(e<.1?.95:.5,e<.1?1.05:.5,e<.1?.16:.1,24),new Y({color:1511994,roughness:.4,metalness:.5}));t.position.y=e,Te.add(t)}let De=[.6,1.2,1.8].map((e,t)=>{let n=new J(new ec(.72+t*.1,.035,8,40),new Ra({color:t===1?16765503:3138559}));return n.rotation.x=Math.PI/2,n.position.y=e,Te.add(n),n}),Oe=new so(new Do(.8,1.45,.55),[_,_,_,_,b,b],6);for(let e=0;e<6;e++){let n=e/6*Math.PI*2+.5;t.compose(new q(8.9*v+Math.sin(n)*2.2,.725,Math.cos(n)*2.2),new ir().setFromAxisAngle(gp,n),i),Oe.setMatrixAt(e,t)}e.add(Oe);let ke=[[-2.9,7.4],[2.9,7.4],[-13.4,7.6],[13.2,7.8],[-17.2,9.6],[-16.6,-8.4],[0,-4.6],[16.6,-7.6]].map(([e,t])=>[e*v,t*v]),Ae=new so(new ko(.26,.2,.42,10),new Y({color:16736162,roughness:.6}),ke.length),je=new so(new Ys(.42,0),new Y({color:3526762,roughness:.8,flatShading:!0}),ke.length*2);ke.forEach(([e,n],r)=>{Ae.setMatrixAt(r,t.makeTranslation(e,.21,n)),je.setMatrixAt(r*2,t.compose(new q(e,.78,n),new ir().setFromAxisAngle(gp,r),new q(1,1.25,1))),je.setMatrixAt(r*2+1,t.compose(new q(e+.12,1.22,n-.06),new ir().setFromAxisAngle(gp,r*2),new q(.68,.9,.68)))}),e.add(Ae,je);let Me=new ni;Me.position.set(13.8*v,0,5.2*v);let Ne=new J(new ko(.62,.48,1.1,18),new Y({color:15920383,roughness:.4}));Ne.position.y=.55;let Pe=new J(new ko(.55,.55,.04,18),new Y({color:7029795,roughness:.3}));Pe.position.y=1.09;let Fe=new J(new ec(.3,.07,8,16,Math.PI),new Y({color:15920383,roughness:.4}));Fe.position.set(.6,.58,0),Fe.rotation.z=-Math.PI/2;let Ie=new J(new Ao(.3,1.1,10,1,!0),new Ra({color:16777215,transparent:!0,opacity:.16,depthWrite:!1,side:2}));Ie.position.y=1.75,Ie.rotation.x=Math.PI,Me.add(Ne,Pe,Fe,Ie),e.add(Me);let Le=[16736162,16765503,3138559,7208842,16747069,10116351],Re=[[-4.4,8.3*v+1.6],[4.4,8.3*v+1.6],[16.4*v,6],[16.4*v,-6],[-16.6*v,-10.4*v],[-16.6*v,8.4*v],[15*v,-10.6*v],[0,-11.2*v],[-9*v,-11.2*v],[9*v,-11.2*v]],ze=new so(new Ys(.34,2),new Y({roughness:.3}),Re.length*3),Be=(e,n)=>{let[r,i]=Re[Math.floor(e/3)],a=e%3;return t.makeScale(1,1.2,1).setPosition(r+(a-1)*.42,1.9+a*.45+Math.sin(n*.0012+e)*.12,i+(a===1?.3:0))};for(let e=0;e<Re.length*3;e++)ze.setMatrixAt(e,Be(e,0)),ze.setColorAt(e,new li(Le[(e*5+Math.floor(e/3))%Le.length]));e.add(ze);let Ve=31,He=()=>((Ve=Ve*16807%2147483647)-1)/2147483646,Ue=new Float32Array(270);for(let e=0;e<90;e++)Ue[e*3]=(He()-.5)*34*v,Ue[e*3+1]=.4+He()*7,Ue[e*3+2]=(He()-.5)*22*v;let We=new oa;We.setAttribute(`position`,new Gi(Ue,3));let Ge=new Float32Array(270);for(let e=0;e<90;e++)new li(Le[e%Le.length]).toArray(Ge,e*3);We.setAttribute(`color`,new Gi(Ge,3));let Ke=new bo(We,new ho({vertexColors:!0,size:.16,transparent:!0,opacity:.9,depthWrite:!1}));return e.add(Ke),{update(e,t,n){H.rotation.y=e*4e-4,f.forEach(t=>t.rotation.z=e*.0012);for(let t=0;t<Re.length*3;t++)ze.setMatrixAt(t,Be(t,e));ze.instanceMatrix.needsUpdate=!0,De.forEach((t,n)=>{t.rotation.z=e*.001*(n%2?-1:1),t.position.y=[.6,1.2,1.8][n]+Math.sin(e*.0015+n*2)*.1}),Ee.material.emissiveIntensity=.45+Math.sin(e*.004)*.18,y.offset.y=Math.floor(e/420)%16/16,Ie.rotation.y=e*.001,_e.forEach(t=>{t.visible=n,t.position.y=.3+(.5+.5*Math.sin(e*.004))*1.4});let r=We.attributes.position.array;for(let e=1;e<r.length;e+=3)r[e]+=t*.22,r[e]>7.4&&(r[e]=.4);We.attributes.position.needsUpdate=!0}}}var kp=[16727435,3138559,16765503,10288983,16747069,11570431],Ap=1.3,jp={plus:1230066,minus:16727435,item:16760594,event:10116351,neutral:9410248,wheel:16777215,crash:13893674,shop:4054132},Mp={plus:`+`,minus:`–`,item:`?`,event:`!`,neutral:``,wheel:`★`,crash:`☠`,shop:`$`};function Np(e,t){let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`),i=`#${new li(t).getHexString()}`;r.beginPath(),r.arc(64,64,58,0,Math.PI*2),r.fillStyle=i,r.fill(),r.beginPath(),r.arc(64,64,44,0,Math.PI*2),r.fillStyle=`#1c1547`,r.fill(),r.fillStyle=`#ffffff`,r.font=`900 76px Archivo Variable, system-ui, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,64,68);let a=new Co(n);return a.colorSpace=On,a}function Pp(e,t){let n=new ni,r=new Y({color:c[e].color,roughness:.55,metalness:.1,emissive:c[e].color,emissiveIntensity:.18}),i=new Y({color:1774656,roughness:.6}),a=new Y({color:15914690,roughness:.7}),o=(e,t,r,i)=>(e.position.set(t,r,i),n.add(e),e),s=new J(new ec(.31,.055,8,22),new Ra({color:t}));s.rotation.x=Math.PI/2,o(s,0,.05,0);let l=new J(new Qs(.1,.62,24),new Ra({color:t,transparent:!0,opacity:.45,blending:2,depthWrite:!1,side:2}));return l.rotation.x=-Math.PI/2,o(l,0,.03,0),n.scale.setScalar(Ap),e===`hrbot`?(o(new J(new ko(.2,.24,.42,10),r),0,.3,0),o(new J(new Do(.4,.3,.34),r),0,.7,0),o(new J(new Do(.3,.09,.02),new Ra({color:3138559})),0,.72,.18),o(new J(new ko(.015,.015,.2,6),i),0,.95,0),o(new J(new $s(.05,8,8),new Ra({color:16727435})),0,1.06,0)):(o(new J(new Ao(.25,.56,12),r),0,.36,0).rotation.x=Math.PI,o(new J(new ko(.23,.17,.3,12),r),0,.2,0),o(new J(new $s(.19,14,12),a),0,.78,0),e===`glitch`?(o(new J(new ko(.2,.2,.09,12),i),0,.93,0),o(new J(new Do(.24,.03,.18),i),0,.9,.2)):e===`alice`?(o(new J(new $s(.2,12,10,0,Math.PI*2,0,Math.PI/2),i),0,.8,-.02),o(new J(new $s(.09,8,8),i),0,.84,-.22),o(new J(new Do(.3,.06,.03),new Ra({color:3138559})),0,.8,.18)):e===`chad`?(o(new J(new Do(.32,.1,.3),i),0,.95,-.02),o(new J(new Do(.07,.24,.03),new Ra({color:16727435})),0,.44,.22),o(new J(new Do(.26,.2,.08),i),.34,.26,0)):e===`phil`?(o(new J(new ko(.3,.3,.03,16),i),0,.93,0),o(new J(new ko(.17,.19,.16,14),i),0,1.01,0),o(new J(new Do(.32,.07,.03),i),0,.8,.17)):(o(new J(new ko(.2,.2,.08,12),new Y({color:2892387})),0,.93,0),o(new J(new ko(.02,.02,1,6),new Y({color:13214315})),.33,.52,0),o(new J(new Do(.2,.08,.1),new Y({color:15262719})),.33,.06,0))),n}function Fp(e){let t;try{t=new Af({canvas:e,antialias:!0,powerPreference:`high-performance`})}catch{let e=()=>{};return{ok:!1,setPawns:e,setCore:e,setFlood:e,setScanner:e,setTraps:e,highlight:e,showChoices:e,showcase:async()=>{},movePawn:async()=>{},teleportPawn:async()=>{},place:e,focus:e,setOverview:e,project:()=>null,fps:()=>0,dispose:e}}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.setClearColor(3162288);let n=new fi,r=new Kc(40,1,.1,200);n.add(new Xc(16777215,1.55));let i=new Yc(16777215,1.5);i.position.set(4,12,6),n.add(i);let a=Op(n),o=new ko(.46,.5,.14,24),s=new Or,c=[`plus`,`minus`,`item`,`event`,`neutral`,`crash`,`shop`],l=[];for(let e of c){let t=M.filter(t=>t.type===e),r=new so(o,new Y({color:jp[e],emissive:jp[e],emissiveIntensity:.35,roughness:.5}),t.length);t.forEach((e,t)=>r.setMatrixAt(t,s.makeTranslation(e.x,e.y+.07,e.z))),n.add(r);let i=new so(new Zs(.9,.9),new Ra({map:Np(Mp[e],jp[e]),transparent:!0,depthWrite:!1}),t.length);n.add(i),l.push({mesh:i,nodes:t.map(e=>e.id)})}let u=e=>{let t=new ir().setFromAxisAngle(new q(1,0,0),-Math.PI/2),n=new ir().setFromAxisAngle(new q(0,1,0),e?Math.PI/2:0).multiply(t);for(let e of l)e.nodes.forEach((t,r)=>{s.compose(new q(M[t].x,M[t].y+.145,M[t].z),n,new q(1,1,1)),e.mesh.setMatrixAt(r,s)}),e.mesh.instanceMatrix.needsUpdate=!0},d=new ni,f=new J(new Xs(.8),new Y({color:16765503,emissive:16757504,emissiveIntensity:1.1,roughness:.15,metalness:.5})),p=new J(new ec(1.2,.09,8,40),new Ra({color:16727435})),m=new J(new ko(.5,.85,9,20,1,!0),new Ra({color:16757504,transparent:!0,opacity:.5,depthWrite:!1,side:2}));m.position.y=2.4;let h=new J(new Qs(.9,1.9,36),new Ra({color:16757504,transparent:!0,opacity:.75,depthWrite:!1,side:2}));h.rotation.x=-Math.PI/2,h.position.y=-2.22;let g=(()=>{let e=document.createElement(`canvas`);e.width=512,e.height=128;let t=e.getContext(`2d`);t.fillStyle=`#1a1040`,t.strokeStyle=`#ffd23f`,t.lineWidth=10,t.beginPath(),t.roundRect(8,8,496,112,44),t.fill(),t.stroke(),t.fillStyle=`#ffd23f`,t.font=`900 64px Archivo Variable, system-ui, sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(`DATA CORE`,256,68);let n=new Co(e);n.colorSpace=On;let r=new ja(new _a({map:n,depthTest:!1,transparent:!0}));return r.scale.set(3.6,.9,1),r.position.y=1.9,r.renderOrder=4,r})();d.add(f,p,m,h,g),d.position.y=2.3,n.add(d);let _=(e,t)=>{let r=new Ra({color:t,transparent:!0,opacity:0,depthWrite:!1,side:2}),i=new so(new Qs(.5,.74,24),r,e.length);return e.forEach((e,t)=>{s.compose(new q(M[e].x,M[e].y+.16,M[e].z),new ir().setFromAxisAngle(new q(1,0,0),-Math.PI/2),new q(1,1,1)),i.setMatrixAt(t,s)}),n.add(i),r},y=_(F,16722509),b=_(te,11565628),x=!1,S=!1,C=new ni;n.add(C);let w=new ni;n.add(w);let T=(e,t,n)=>{let r=new J(new ec(n,.06,8,28),new Ra({color:t}));return r.rotation.x=Math.PI/2,r.position.set(M[e].x,M[e].y+.24,M[e].z),r},E=e=>{for(let t of[...e.children])e.remove(t),t.geometry?.dispose()},D=[16727435,3138559,16765503],O=new ni;n.add(O);let k=null,A=new cs;[[-.62,-.2],[.08,-.2],[.08,-.46],[.72,0],[.08,.46],[.08,.2],[-.62,.2]].forEach(([e,t],n)=>n?A.lineTo(e,t):A.moveTo(e,t));let j=new Ks(A,{depth:.16,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:2});j.rotateX(-Math.PI/2);let ee=new $s(1.05,10,8),N=new Ra({transparent:!0,opacity:0,depthWrite:!1}),P=(e,t)=>{let n=document.createElement(`canvas`);n.width=512,n.height=128;let r=n.getContext(`2d`),i=`#${t.toString(16).padStart(6,`0`)}`;r.fillStyle=`rgba(16,10,44,0.94)`,r.strokeStyle=i,r.lineWidth=8,r.beginPath(),r.roundRect(8,8,496,112,40),r.fill(),r.stroke(),r.fillStyle=`#ffffff`,r.font=`800 62px Archivo Variable, system-ui, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,256,68,460);let a=new Co(n);a.colorSpace=On;let o=new ja(new _a({map:a,depthTest:!1,transparent:!0}));return o.scale.set(2.5,.625,1),o.renderOrder=5,o},ne=()=>{for(let e of[...O.children])O.remove(e),e.traverse(e=>{let t=e;t.isSprite&&(t.material.map?.dispose(),t.material.dispose())});k=null,delete e.dataset.choices},re=new ml,ie=null,I=e=>ie={x:e.clientX,y:e.clientY},ae=t=>{if(!k||!ie||Math.hypot(t.clientX-ie.x,t.clientY-ie.y)>14)return;let n=e.getBoundingClientRect();re.setFromCamera(new K((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),r);let i=re.intersectObjects(O.children,!0)[0]?.object??null;for(;i&&i.userData.choice===void 0;)i=i.parent;i&&k(i.userData.choice)};e.addEventListener(`pointerdown`,I),e.addEventListener(`pointerup`,ae);let L=new Map,R=(e,t,n)=>{let r=new q(M[e].x,M[e].y+.14,M[e].z);if(n<=1)return r;let i=t/n*Math.PI*2+.6;return r.add(new q(Math.cos(i)*.34,0,Math.sin(i)*.34))},z=e=>{let t=[...L.values()].filter(t=>t.node===e&&!t.busy);t.forEach((n,r)=>n.group.position.copy(R(e,r,t.length)))},B=new Set,oe=(e,t)=>new Promise(n=>{if(document.hidden||e<=0)return t(1),n();let r={start:performance.now(),ms:e,step:t,done:n};B.add(r),setTimeout(()=>{B.delete(r)&&(t(1),n())},e+400)}),se=null,ce=!1,le=new q(0,0,0),ue=20,de=20,fe=!1,pe=!1,me=.96,he=null,ge=!1,_e=()=>{let n=e.clientWidth,i=e.clientHeight;if(!n||!i)return;t.setSize(n,i,!1),r.aspect=n/i;let a=r.aspect<1;a===fe&&pe||(pe=!0,u(a)),fe=a,r.updateProjectionMatrix()},V=new ResizeObserver(_e);V.observe(e),_e();let ve=e=>{let t=!ce&&!ge&&!he&&se?L.get(se):void 0,n=he||(t?new q(t.group.position.x,M[t.node].y,t.group.position.z):new q(fe?3:0,.9,fe?-2.4:-1.6)),i=(fe?38/Math.max(.42,r.aspect)*.52:Math.max(22.5,35/(.728*r.aspect)))*v;de=he?fe?17:12.5:t?fe?24:13.5:i;let a=Math.min(1,e*3.2);le.lerp(n,a),ue+=(de-ue)*a,me+=((t||he?.8:.96)-me)*a;let o=fe?Math.PI/2:0,s=Math.cos(me)*ue;r.position.set(le.x+Math.sin(o)*s,le.y+Math.sin(me)*ue,le.z+Math.cos(o)*s),r.lookAt(le.x,le.y+.4,le.z)},ye=!1,be=performance.now(),H=0,xe=0,U=be,W=0,Se=i=>{if(ye)return;requestAnimationFrame(Se);let o=Math.min(.1,(i-be)/1e3);be=i,H++,i-U>=1e3&&(xe=Math.round(H*1e3/(i-U)),H=0,U=i,W=xe<24&&!document.hidden?W+1:0,W>=4&&t.getPixelRatio()>1&&(t.setPixelRatio(1),_e(),W=0));for(let e of[...B]){let t=Math.min(1,(i-e.start)/e.ms);e.step(t),t>=1&&(B.delete(e),e.done())}f.rotation.y+=o*1.6,p.rotation.x=Math.PI/2+Math.sin(i*.002)*.5,p.rotation.z+=o*2.2,h.scale.setScalar(1+.18*Math.sin(i*.005)),m.material.opacity=.42+.14*Math.sin(i*.004),f.scale.setScalar(he?1.25+.2*Math.sin(i*.012):1),f.position.y=Math.sin(i*.003)*.12;let s=.5+.5*Math.sin(i*.006);y.opacity=x?.35+.5*s:.14,b.opacity=S?.75:0,C.children.forEach(e=>e.scale.setScalar(1+.12*s)),O.children.forEach((e,t)=>{let n=e.children[0];n.position.x=Math.sin(i*.006+t)*.16}),O.children.length&&H%20==0&&(e.dataset.choices=JSON.stringify(O.children.map(t=>{let n=t.position.clone().project(r);return[Math.round((n.x+1)/2*e.clientWidth),Math.round((1-n.y)/2*e.clientHeight)]}))),a.update(i,o,x),ve(o),t.render(n,r)};requestAnimationFrame(Se);let Ce=e=>e.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n?.dispose()});return{ok:!0,setPawns(e){for(let[t,r]of L)e.some(e=>e.id===t&&e.char===r.info.char&&e.seat===r.info.seat)||(n.remove(r.group),Ce(r.group),L.delete(t));for(let t of e){let e=L.get(t.id);e||(e={info:t,group:Pp(t.char,kp[t.seat%kp.length]),node:t.pos,busy:!1},L.set(t.id,e),n.add(e.group),z(t.pos)),e.info=t,e.group.traverse(e=>{let n=e.material;n&&n.isMeshStandardMaterial&&(n.transparent=t.away,n.opacity=t.away?.4:1)})}},setCore(e){d.position.set(M[e].x,M[e].y+2.3,M[e].z)},setFlood(e){S=e},setScanner(e){x=e},setTraps(e){E(w);for(let t of e)w.add(T(t,16722509,.3))},highlight(e){E(C);for(let t of e)C.add(T(t,16777215,.62))},showChoices(e){if(ne(),!e)return;k=e.pick;let t=M[e.from];e.options.forEach((n,r)=>{let i=M[n],a=D[r%D.length],o=new q(i.x-t.x,0,i.z-t.z),s=Math.min(.62,1.45/o.length()),c=new ni;c.position.set(t.x+o.x*s,t.y+(i.y-t.y)*s+1,t.z+o.z*s),c.rotation.y=-Math.atan2(o.z,o.x),c.userData.choice=r;let l=new J(j,new Y({color:a,emissive:a,emissiveIntensity:.7,roughness:.3})),u=P(e.labels[r],a);u.position.y=.95,c.add(l,new J(ee,N),u),O.add(c)})},async showcase(e,t=2700){he=new q(M[e].x,M[e].y+1.5,M[e].z),await oe(t,()=>{}),he=null,ge=!0,await oe(1700,()=>{}),ge=!1},async movePawn(e,t,n){let r=L.get(e);if(!r)return;r.busy=!0;let i=r.node;z(i);for(let e of t){let t=r.group.position.clone(),i=new q(M[e].x,M[e].y+.14,M[e].z);r.group.rotation.y=Math.atan2(i.x-t.x,i.z-t.z),await oe(n,e=>{r.group.position.lerpVectors(t,i,e),r.group.position.y+=Math.sin(e*Math.PI)*.45}),r.node=e}r.busy=!1,r.group.rotation.y=0,z(r.node)},async teleportPawn(e,t){let n=L.get(e);if(!n)return;n.busy=!0;let r=n.node;await oe(260,e=>n.group.scale.setScalar(Ap*(1-e))),n.node=t,n.group.position.set(M[t].x,M[t].y+.14,M[t].z),z(r),await oe(300,e=>n.group.scale.setScalar(Ap*e)),n.group.scale.setScalar(Ap),n.busy=!1,z(t)},place(e,t){let n=L.get(e);if(!n||n.busy||n.node===t)return;let r=n.node;n.node=t,z(r),z(t)},focus(e){se=e},setOverview(e){ce=e},project(t){let n=L.get(t);if(!n)return null;let i=n.group.position.clone().add(new q(0,1.25,0)).project(r);return i.z>1?null:{x:(i.x+1)/2*e.clientWidth,y:(1-i.y)/2*e.clientHeight}},fps:()=>xe,dispose(){ye=!0,e.removeEventListener(`pointerdown`,I),e.removeEventListener(`pointerup`,ae),V.disconnect(),B.forEach(e=>e.done()),B.clear(),Ce(n),t.dispose()}}}var Ip=6,Lp=.6,Rp={sumo:{sky:656928,from:`#34297e`,to:`#1c1548`,mark:`#ffd23f`,symbol:`M`,rim:3138559,hue:.7,tile:3090032},chips:{sky:267276,from:`#1f8a4c`,to:`#0c4a26`,mark:`#f6efe0`,symbol:`♣`,rim:16765503,hue:.38,tile:3090032},ice:{sky:666186,from:`#eaf8ff`,to:`#8fd0f0`,mark:`#3b8fc4`,symbol:`❄`,rim:16777215,hue:.57,tile:3090032},bomb:{sky:1706496,from:`#3a3a3a`,to:`#161616`,mark:`#ffb300`,symbol:`!`,rim:16738816,hue:.07,tile:3090032},crown:{sky:1705510,from:`#7a1f8a`,to:`#3a0a4a`,mark:`#ffd23f`,symbol:`♛`,rim:16765503,hue:.82,tile:3090032},dodge:{sky:5135,from:`#0c5a44`,to:`#04261c`,mark:`#6dffb0`,symbol:`⌖`,rim:7208880,hue:.44,tile:3090032},wind:{sky:3807786,from:`#f0a060`,to:`#a04a3a`,mark:`#fff3d6`,symbol:`≋`,rim:16774102,hue:.04,tile:3090032},atoll:{sky:272442,from:`#e2c078`,to:`#b8914a`,mark:`#7a5a22`,symbol:`~`,rim:3138559,hue:.52,tile:14465388},paint:{sky:2105388,from:`#f2f2f2`,to:`#c8c8d4`,mark:`#8888a0`,symbol:`+`,rim:16777215,hue:.66,tile:15132398},wave:{sky:131594,from:`#101030`,to:`#020208`,mark:`#2fe3ff`,symbol:`◎`,rim:3138559,hue:.62,tile:3090032},beam:{sky:1704454,from:`#5a1420`,to:`#22060c`,mark:`#ff2a4d`,symbol:`⚠`,rim:16722509,hue:.98,tile:3090032},spot:{sky:328970,from:`#3a2a1a`,to:`#120c06`,mark:`#ffd23f`,symbol:`★`,rim:16765503,hue:.1,tile:3090032}};function zp(e){let t=document.createElement(`canvas`);t.width=t.height=512;let n=t.getContext(`2d`),r=n.createRadialGradient(256,256,20,256,256,256);r.addColorStop(0,e.from),r.addColorStop(1,e.to),n.fillStyle=r,n.fillRect(0,0,512,512),n.strokeStyle=e.mark,n.lineWidth=10,n.beginPath(),n.arc(256,256,150,0,Math.PI*2),n.stroke(),n.fillStyle=e.mark,n.font=`900 210px Archivo Variable, system-ui, sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e.symbol,256,268),n.globalAlpha=.35,n.lineWidth=4;for(let e of[200,240])n.beginPath(),n.arc(256,256,e,0,Math.PI*2),n.stroke();let i=new Co(t);return i.colorSpace=On,i.center.set(.5,.5),i.rotation=Math.PI/2,i}function Bp(e,t){let n=op(e.seed),r=Rp[t],i=t===`sumo`||t===`ice`||t===`wind`,a=i||t===`atoll`,o=t===`dodge`||t===`wave`||t===`beam`||t===`spot`,s=t===`wave`||t===`beam`,c=t===`bomb`||t===`crown`,u=Q(`canvas`,`mini-canvas`),d=Q(`p`,`mg-status`),f=Q(`button`,`btn small mg-dash`,`Rempeln`);f.type=`button`,s&&(f.textContent=`Springen`),e.el.append(u,d,f);let p;try{p=new Af({canvas:u,antialias:!0,powerPreference:`high-performance`})}catch{return d.textContent=`Dieses Gerät kann die 3D-Ansicht nicht zeigen.`,{score:()=>0,destroy:()=>e.el.replaceChildren()}}p.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),p.setClearColor(r.sky);let m=new fi,h=new Kc(46,1,.1,120);m.add(new Xc(16777215,1.1));let g=new Yc(16777215,1.7);g.position.set(4,10,6);let _=new Yc(r.rim,1);_.position.set(-8,4,-6),m.add(g,_);let v=new J(new ko(1,.9,.8,56),[new Y({color:1511994,roughness:.6}),new Y({map:zp(r),roughness:.4,metalness:.3}),new Y({color:1511994})]);v.position.y=-.4;let y=new Ra({color:r.rim}),b=new J(new ec(1,.012,6,72),y);b.rotation.x=Math.PI/2,b.position.y=.02,m.add(v,b);let x=new Or,S=new so(new Do(1,1,1),new Y({roughness:.8,emissive:new li().setHSL(r.hue,.6,.14),emissiveIntensity:.6}),26);for(let e=0;e<26;e++){let t=e/26*Math.PI*2,i=10.5+n()*9,a=8+n()*14,o=2.2+n()*2.6;S.setMatrixAt(e,x.makeScale(o,a,o).setPosition(Math.cos(t)*i,-5-n()*6-a/2,Math.sin(t)*i)),S.setColorAt(e,new li().setHSL((r.hue+n()*.08)%1,.55,.08+n()*.08))}m.add(S);let C=e.players.map((t,n)=>{let r=parseInt(t.color.slice(1),16),i=Pp(t.char??l[n%l.length],r),a=new J(new Qs(.5,.7,28),new Ra({color:r,transparent:!0,opacity:.85,blending:2,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.03,i.add(a);let o=n/e.players.length*Math.PI*2+e.seed%7,s={id:t.id,group:i,x:Math.cos(o)*3.4,z:Math.sin(o)*3.4,vx:0,vz:0,local:t.id===e.selfId||!!e.bots?.includes(t.id),bot:!!e.bots?.includes(t.id),out:!1,fallingSince:null,dashUntil:0,dashReady:0,safeUntil:0,net:null,lastSeen:0};return i.scale.setScalar(1.3),i.position.set(s.x,0,s.z),i.rotation.y=Math.atan2(-s.x,-s.z),m.add(i),s}),w=C.find(t=>t.id===e.selfId),T=new Map(C.map(e=>[e.id,e])),E=new J(new Ao(.22,.42,4),new Ra({color:16765503}));E.rotation.x=Math.PI,E.position.y=1.75,w.group.add(E);let D=[];if(t===`chips`){let t=0;for(let r=900;r<e.durationMs-1500;r+=800+n()*500){let e=n()*Math.PI*2,i=Math.sqrt(n())*5.1;D.push({at:r,x:Math.cos(e)*i,z:Math.sin(e)*i,value:++t%6==0?3:1,mesh:null,owner:null})}}let O=new ko(.28,.28,.08,6),k=new Y({color:3138559,emissive:3138559,emissiveIntensity:.7,metalness:.5,roughness:.3}),A=new Y({color:16765503,emissive:16757504,emissiveIntensity:.8,metalness:.6,roughness:.3}),j=0,ee=e=>D.reduce((t,n)=>t+(n.owner?.id===e?n.value:0),0),M=(e,t,n)=>{let r=D[e];r&&((!r.owner||n<r.owner.t||n===r.owner.t&&t<r.owner.id)&&(r.owner={id:t,t:n}),r.mesh&&(r.mesh.visible=!1))},N={x:0,z:0},P=new Set,F=!1,te=Q(`div`,`mg-stick`),ne=Q(`div`,`mg-stick-knob`);te.append(ne),e.el.append(te);let re=null,ie=e=>{let t=te.getBoundingClientRect(),n=t.width/2-14,r=(e.clientX-(t.left+t.width/2))/n,i=(e.clientY-(t.top+t.height/2))/n,a=Math.hypot(r,i);N.x=a>1?r/a:r,N.z=a>1?i/a:i,ne.style.transform=`translate(${N.x*n}px, ${N.z*n}px)`},I=e=>{re=e.pointerId,te.setPointerCapture?.(e.pointerId),ie(e),e.preventDefault()},ae=e=>{e.pointerId===re&&ie(e)},L=e=>{e.pointerId===re&&(re=null,N.x=N.z=0,ne.style.transform=``)},R=e=>{e.type===`keydown`?P.add(e.key.toLowerCase()):P.delete(e.key.toLowerCase()),e.type===`keydown`&&e.key===` `&&(F=!0)};te.addEventListener(`pointerdown`,I),te.addEventListener(`pointermove`,ae),te.addEventListener(`pointerup`,L),te.addEventListener(`pointercancel`,L),f.addEventListener(`pointerdown`,()=>F=!0),window.addEventListener(`keydown`,R),window.addEventListener(`keyup`,R);let z=0,B=null;e.onMessage((t,n)=>{let r=T.get(t),i=n;if(r&&!r.local&&i&&typeof i==`object`){if(r.lastSeen=z,Array.isArray(i.p)&&i.p.length===4&&i.p.every(Number.isFinite)&&(r.net={x:i.p[0],z:i.p[1],vx:i.p[2],vz:i.p[3],at:z},i.f&&r.fallingSince===null&&(r.fallingSince=z),!i.f&&!i.o&&r.fallingSince!==null&&(r.fallingSince=null,r.x=r.net.x,r.z=r.net.z),i.o&&(r.out=!0),i.j&&!Se(r)&&W.set(r.id,z)),i.h===e.selfId&&Array.isArray(i.i)&&i.i.every(Number.isFinite)&&w.fallingSince===null&&!w.out&&z>w.safeUntil){let e=Math.min(15,Math.hypot(i.i[0],i.i[1])),t=Math.hypot(i.i[0],i.i[1])||1;w.vx+=i.i[0]/t*e,w.vz+=i.i[1]/t*e,Z(`hit`)}Array.isArray(i.c)&&i.c.every(Number.isFinite)&&M(i.c[0],t,i.c[1]),c&&t===_e&&(typeof i.b==`string`&&i.r===he&&T.has(i.b)&&typeof i.n==`number`&&i.n>ge?(_e=i.b,ge=i.n,V=z,_e===e.selfId&&Z(`alert`)):i.x===he&&ye(t))}});let oe=0,se=(t=!1)=>{if(!t&&z-oe<80)return;oe=z;let n=e=>Math.round(e*100)/100;e.send({p:[n(w.x),n(w.z),n(w.vx),n(w.vz)],f:w.fallingSince===null?0:1,o:+!!w.out,j:s&&Se(w)?1:0})},ce=t=>i?t<4e3?Ip:Math.max(1.3,Ip-4.7*(t-4e3)/Math.max(1,e.durationMs-7e3)):Ip,le=()=>C.filter(e=>!e.out),ue=()=>t===`chips`?Math.max(0,ee(e.selfId)-j):B===null?t===`bomb`?he*1e3+500:t===`crown`?Math.round(me/100):o?e.durationMs+U*100:t===`paint`?ze.filter(t=>t===e.selfId).length:e.durationMs+Math.max(0,Math.round((2-Math.hypot(w.x,w.z))*500)):B,de=new Map,fe=[],pe=[];t===`crown`&&(fe.push(1/0),pe.push(n()));let me=0;if(t===`bomb`){let t=0;for(let r=0;r<e.players.length;r++)t+=7e3+n()*3500,fe.push(t),pe.push(n())}let he=0,ge=0,_e=null,V=0,ve=()=>{let e=C.filter(e=>!e.out);_e=c&&e.length>1&&he<fe.length?e[Math.floor(pe[he]*e.length)].id:null,ge=0,V=z},ye=t=>{let n=T.get(t);n&&!n.out&&(n.out=!0,Z(`hit`),n===w&&(B=he*1e3,e.finish(B)),he++,ve(),!w.out&&C.filter(e=>!e.out).length===1&&B===null&&(B=1e5,Z(`win`),e.finish(B)))},be=t===`crown`?new J(new ko(.42,.3,.34,5,1,!0),new Y({color:16765503,emissive:16757504,emissiveIntensity:.8,metalness:.6,roughness:.3,side:2})):new J(new $s(.34,16,12),new Y({color:16722509,emissive:16722509,emissiveIntensity:.9,roughness:.3})),H=[];if(t===`dodge`)for(let t=2500;t<e.durationMs;t+=Math.max(260,750-t/70)){let e=n()*Math.PI*2,r={x:(n()-.5)*6,z:(n()-.5)*6},i=Math.cos(e)*9,a=Math.sin(e)*9,o=Math.hypot(r.x-i,r.z-a);H.push({at:t,x:i,z:a,dx:(r.x-i)/o,dz:(r.z-a)/o,speed:5.5+n()*3+t/12e3})}let xe=new so(new $s(.38,12,10),new Y({color:16727435,emissive:16727435,emissiveIntensity:1}),Math.max(1,H.length));xe.visible=t===`dodge`,m.add(xe);let U=3,W=new Map,Se=e=>z-(W.get(e.id)??-9999)<560,Ce=[];if(t===`wave`)for(let t=2500;t<e.durationMs;t+=Math.max(850,2300-t/22)*(.8+n()*.4))Ce.push(t);let we=new so(new ec(1,.03,6,64).rotateX(Math.PI/2),new Ra({color:3138559}),Math.max(1,Ce.length));we.visible=t===`wave`;let Te=e=>.8*e+.012*e*e,Ee=new J(new Do(13,.14,.14),new Ra({color:16722509}));Ee.position.y=.35,Ee.visible=t===`beam`;let De=Array.from({length:5},()=>[n()*6.28,n()*6.28,.45+n()*.5,.45+n()*.5]),Oe=e=>De.slice(0,e<14e3?3:e<28e3?4:5).map(([t,n,r,i])=>({x:Math.cos(t+e/1e3*r)*3.9,z:Math.sin(n+e/1e3*i)*3.9})),ke=De.map(()=>{let e=new J(new ko(1.5,1.5,.02,28),new Ra({color:16765503,transparent:!0,opacity:.45,blending:2,depthWrite:!1}));return e.visible=!1,m.add(e),e}),Ae=n()*6.28,je=e=>{let t=Ae+e*35e-5,n=(5+8*(.5+.5*Math.sin(e*.0011)))*Math.min(1,Math.max(0,(e-2500)/6e3));return{x:Math.cos(t)*n,z:Math.sin(t)*n,angle:t,strength:n}},Me=new J(new Ao(.45,1.5,8).rotateZ(-Math.PI/2),new Ra({color:3138559}));Me.position.y=3.4,Me.visible=t===`wind`,m.add(we,Ee,Me);let Ne=(e,n)=>{if(n===0&&s&&Se(e))return!1;let r=Math.hypot(e.x,e.z),i=z/1e3+n;return t===`wave`?Ce.some(e=>i*1e3>=e&&Math.abs((i-e/1e3)*4-r)<.3):z<3e3?!1:t===`beam`?r>.9&&Math.abs(Math.sin(Math.atan2(e.z,e.x)-Te(i)))*r<.34:t===`spot`&&Oe(z).some(t=>Math.hypot(t.x-e.x,t.z-e.z)<1.5)},Pe=12/11,Fe=(e,t)=>{let n=Math.floor((e+Ip)/Pe),r=Math.floor((t+Ip)/Pe);return n<0||r<0||n>=11||r>=11?-1:r*11+n},Ie=e=>(e%11+.5)*Pe-Ip,Le=e=>(Math.floor(e/11)+.5)*Pe-Ip,Re=e=>Math.hypot(Ie(e),Le(e))<5.75,ze=Array(121).fill(null),Be=Array(121).fill(1/0),Ve=t===`paint`||t===`atoll`,He=new so(new Do(Pe*.94,.08,Pe*.94),new Y({roughness:.6}),121),Ue=new Map(e.players.map(e=>[e.id,new li(e.color)]));if(Ve){for(let e=0;e<121;e++)He.setMatrixAt(e,x.makeScale(+!!Re(e),1,+!!Re(e)).setPosition(Ie(e),.03,Le(e))),He.setColorAt(e,new li(r.tile).multiplyScalar((e+Math.floor(e/11))%2?1:.86));if(m.add(He),t===`atoll`){v.visible=b.visible=!1;let t=ze.map((e,t)=>t).filter(Re).map(e=>[e,-Math.hypot(Ie(e),Le(e))+n()*3]).sort((e,t)=>e[1]-t[1]);t.forEach(([n],r)=>Be[n]=4e3+r*(e.durationMs-9e3)/t.length)}}let We=(e,t)=>{let n=Fe(e,t);return n<0||!Re(n)||z>=Be[n]},Ge=new Map,Ke=new Map,qe=new Set;be.visible=!1,m.add(be),ve();let Je=(e,n)=>{if(!e.bot){let e=(P.has(`arrowright`)||P.has(`d`)?1:0)-(P.has(`arrowleft`)||P.has(`a`)?1:0),t=(P.has(`arrowdown`)||P.has(`s`)?1:0)-(P.has(`arrowup`)||P.has(`w`)?1:0);return e||t?[e,t]:[N.x,N.z]}if(Ve||o){s&&Ne(e,.3)&&(e.dashUntil=-1);let n=Ge.get(e.id);if(!n||z>n.until){let r=Math.random()*6.28,i=Math.random()*(t===`atoll`?2.5:4.5);n={x:Math.cos(r)*i,z:Math.sin(r)*i,until:z+1300},Ge.set(e.id,n)}let r=n.x-e.x,i=n.z-e.z,a=Math.hypot(r,i)||1;return[r/a*.7,i/a*.7]}let r=Math.hypot(e.x,e.z),i=0,c=0;if(r<n-1.3){let n=D.find(e=>e.at<=z&&!e.owner),r=_e&&_e!==e.id?T.get(_e):null,a=t===`crown`&&_e===e.id?C.filter(t=>t!==e&&!t.out&&t.fallingSince===null).sort((t,n)=>Math.hypot(t.x-e.x,t.z-e.z)-Math.hypot(n.x-e.x,n.z-e.z))[0]:null,o=a?{x:e.x*2-a.x,z:e.z*2-a.z}:r&&t===`crown`?r:r?{x:e.x*2-r.x,z:e.z*2-r.z}:t===`chips`&&n?n:C.filter(t=>t!==e&&!t.out&&t.fallingSince===null).sort((t,n)=>Math.hypot(t.x-e.x,t.z-e.z)-Math.hypot(n.x-e.x,n.z-e.z))[0];o&&(i=o.x,c=o.z)}let l=i-e.x,u=c-e.z,d=Math.hypot(l,u)||1;return a&&d<1.8&&z>e.dashReady&&r<n-1.3&&(e.dashUntil=-1),[l/d*.75,u/d*.75]},Ye=t=>{let n=(t===w?U:Ke.get(t.id)??3)-1;t===w?U=n:Ke.set(t.id,n),t.safeUntil=z+1100,n>0||(t.out=!0,t===w&&(B=Math.round(z),e.finish(B),se(!0)))},Xe=(n,r,i)=>{if(n.out)return;if(n.fallingSince!==null){let i=(z-n.fallingSince)/1e3;n.x+=n.vx*r,n.z+=n.vz*r,i>1.2&&(a?(n.out=!0,n===w&&(B=Math.round(n.fallingSince),e.finish(B),se(!0))):(n.fallingSince=null,n.x=n.z=n.vx=n.vz=0,n.safeUntil=z+1200,n===w&&t===`chips`&&(j=Math.min(ee(e.selfId),j+2),e.report(ue())),o&&Ye(n)));return}let[c,l]=Je(n,i),u=n===w?F:n.dashUntil===-1;if(n===w&&(F=!1),s)u&&!Se(n)&&z>n.safeUntil-600&&(W.set(n.id,z),n===w&&Z(`step`)),n.dashUntil===-1&&(n.dashUntil=0);else if(u&&z>n.dashReady){let e=Math.hypot(c,l),t=e>.2?c/e:Math.sin(n.group.rotation.y),r=e>.2?l/e:Math.cos(n.group.rotation.y);n.vx+=t*10,n.vz+=r*10,n.dashUntil=z+320,n.dashReady=z+1500,n===w&&Z(`slice`)}else n.dashUntil===-1&&(n.dashUntil=0);let d=t===`ice`?1:3.4,f=(t===`ice`?8:19)*(n.id===_e?1.2:1);n.vx=(n.vx+c*f*r)*(1-Math.min(1,d*r)),n.vz=(n.vz+l*f*r)*(1-Math.min(1,d*r));let p=Math.hypot(n.vx,n.vz);if(p>16&&(n.vx*=16/p,n.vz*=16/p),n.x+=n.vx*r,n.z+=n.vz*r,t===`wind`){let e=je(z);n.vx+=e.x*r,n.vz+=e.z*r}if(t===`ice`){let e=.4*r,t=n.x;n.x=t*Math.cos(e)-n.z*Math.sin(e),n.z=t*Math.sin(e)+n.z*Math.cos(e)}for(let t of C){if(t===n||t.out||t.fallingSince!==null)continue;let r=n.x-t.x,i=n.z-t.z,a=Math.hypot(r,i);if(a>=Lp*2||a<.001)continue;let o=r/a,s=i/a,c=Lp*2-a;n.x+=o*c*.6,n.z+=s*c*.6;let l=-(n.vx*o+n.vz*s),u=`${n.id}>${t.id}`;if(l>1.4&&z-(de.get(u)??-999)>260&&z>t.safeUntil){de.set(u,z);let r=l*1.15+(z<n.dashUntil?3.5:0);t.local?(t.vx-=o*r,t.vz-=s*r):n===w&&e.send({h:t.id,i:[-o*r,-s*r]}),n.vx+=o*l*1.1,n.vz+=s*l*1.1,(n===w||t===w)&&Z(`hit`)}}(Math.hypot(n.x,n.z)>i+.12||t===`atoll`&&We(n.x,n.z))&&(n.fallingSince=z,n===w&&(Z(`fall`),se(!0))),(s||t===`spot`)&&z>n.safeUntil&&Ne(n,0)&&(n===w&&Z(`hit`),Ye(n)),t===`dodge`&&z>n.safeUntil&&H.forEach((e,t)=>{let r=(z-e.at)/1e3*e.speed,i=`${t}:${n.id}`;r<0||qe.has(i)||Math.hypot(e.x+e.dx*r-n.x,e.z+e.dz*r-n.z)>.98||(qe.add(i),n.vx+=e.dx*7,n.vz+=e.dz*7,n===w&&Z(`hit`),Ye(n))}),t===`chips`&&D.forEach((t,r)=>{t.owner||t.at>z||Math.hypot(t.x-n.x,t.z-n.z)>.8||(M(r,n.id,Math.round(z)),n===w&&(e.send({c:[r,Math.round(z)]}),Z(t.value>1?`item`:`plus`),e.report(ue())))})},Ze=!1,Qe=0,$e=performance.now(),et=$e,tt=!1,nt=()=>{let e=u.clientWidth||320,t=u.clientHeight||320;p.setSize(e,t,!1),h.aspect=e/t;let n=46*Math.PI/360,r=Math.max(1,.82/h.aspect),i=7.4/Math.tan(n)*r;h.position.set(0,i*.8,i*.6),h.lookAt(0,0,.3),h.updateProjectionMatrix()},rt=new ResizeObserver(nt);rt.observe(u),nt();let it=()=>{let n=performance.now(),i=Math.min(.05,(n-et)/1e3);et=n,z=n-$e;let s=ce(z);v.scale.set(s,1,s),b.scale.set(s,s,1),t===`ice`&&(v.rotation.y-=.4*i),a&&y.color.setHex(z>4e3&&Math.floor(z/250)%2?16727435:r.rim);for(let e of C){if(e.local)Xe(e,i,s);else if(e.net&&!e.out){let t=Math.min(.25,(z-e.net.at)/1e3),n=Math.min(1,i*12);e.x+=(e.net.x+e.net.vx*t-e.x)*n,e.z+=(e.net.z+e.net.vz*t-e.z)*n,e.vx=e.net.vx,e.vz=e.net.vz,e.fallingSince!==null&&a&&z-e.fallingSince>1300&&(e.out=!0)}!e.local&&!e.out&&z>4e3&&z-e.lastSeen>4e3&&(e.out=!0),e.group.visible=!e.out;let t=e.fallingSince===null?0:(z-e.fallingSince)/1e3,n=Se(e)?Math.sin((z-W.get(e.id))/560*Math.PI)*1.2:0;e.group.position.set(e.x,n-t*t*9,e.z),e.group.rotation.x=t*2.4,Math.hypot(e.vx,e.vz)>.6&&!t&&(e.group.rotation.y=Math.atan2(e.vx,e.vz)),z<e.safeUntil&&(e.group.visible=Math.floor(z/110)%2==0)}E.position.y=1.75+Math.sin(z*.006)*.08;for(let e of D)e.at>z||e.owner||(e.mesh||(e.mesh=new J(O,e.value>1?A:k),e.mesh.scale.setScalar(e.value>1?1.5:1),e.mesh.rotation.x=Math.PI/2,m.add(e.mesh)),e.mesh.position.set(e.x,.5+Math.sin(z*.005+e.x)*.1,e.z),e.mesh.rotation.z=z*.004);if(se(),t===`wave`&&(Ce.forEach((e,t)=>{let n=(z-e)/1e3*4,r=n>.1&&n<6.4;we.setMatrixAt(t,x.makeScale(r?n:0,1,r?n:0).setPosition(0,.14,0))}),we.instanceMatrix.needsUpdate=!0),t===`beam`&&(Ee.rotation.y=-Te(z/1e3),Ee.visible=z>3e3||Math.floor(z/200)%2==0),t===`spot`){let e=Oe(z);ke.forEach((t,n)=>{t.visible=n<e.length,e[n]&&t.position.set(e[n].x,.04,e[n].z)})}if(t===`wind`){let e=je(z);Me.rotation.y=-e.angle,Me.scale.setScalar(.3+e.strength/13)}if(t===`paint`){let t=!1;for(let e of C){let n=e.out||e.fallingSince!==null?-1:Fe(e.x,e.z);n<0||!Re(n)||ze[n]===e.id||(ze[n]=e.id,He.setColorAt(n,Ue.get(e.id)),t=!0)}t&&(He.instanceColor.needsUpdate=!0,e.report(ue())),d.textContent=`${ue()} Felder`}if(t===`atoll`){for(let e=0;e<121;e++){if(Be[e]===1/0||z<Be[e]-900)continue;let t=(z-Be[e])/1e3;t<0?He.setColorAt(e,new li(Math.floor(z/150)%2?16727390:r.tile)):He.setMatrixAt(e,x.makeScale(t>1?0:1,1,t>1?0:1).setPosition(Ie(e),.03-t*t*9,Le(e)))}He.instanceMatrix.needsUpdate=!0,He.instanceColor.needsUpdate=!0}let l=le();if(o)H.forEach((e,t)=>{let n=(z-e.at)/1e3*e.speed,r=n>=0&&n<20;xe.setMatrixAt(t,x.makeScale(+!!r,+!!r,+!!r).setPosition(e.x+e.dx*n,.55,e.z+e.dz*n))}),xe.instanceMatrix.needsUpdate=!0,!w.out&&l.length===1&&C.length>1&&B===null&&(B=e.durationMs+5e3,Z(`win`),e.finish(B)),d.textContent=w.out?`Du bist raus.`:B===null?`Leben: ${`♥`.repeat(U)}`:`Du hast als Letzter überlebt!`;else if(c){_e&&T.get(_e)?.out&&t===`crown`&&ve(),_e===e.selfId&&t===`crown`&&(me+=i*1e3,Math.floor(me/500)!==Math.floor((me-i*1e3)/500)&&e.report(ue()));let n=_e?T.get(_e):null;if(n&&he<fe.length){if(n.local){if(z-V>700&&n.fallingSince===null){let t=C.find(e=>e!==n&&!e.out&&e.fallingSince===null&&z>e.safeUntil&&Math.hypot(e.x-n.x,e.z-n.z)<1.38);t&&(_e=t.id,ge++,V=z,n===w?(e.send({b:t.id,r:he,n:ge}),Z(`good`)):t===w&&Z(`alert`))}_e===n.id&&z>=fe[he]&&(n===w&&e.send({x:he}),ye(n.id))}else z>fe[he]+2500&&ye(n.id)}let r=_e?T.get(_e):null;if(be.visible=!!r&&!r.out,r){let e=Math.max(0,(fe[he]??0)-z),n=1+.18*Math.sin(z*(e<2500?.03:.012));be.position.set(r.x,(t===`crown`?2.05:2.5)+r.group.position.y,r.z),be.rotation.y=z*.003,be.scale.setScalar(n)}let a=e.players.find(e=>e.id===_e)?.name??``;d.textContent=t===`crown`?_e===e.selfId?`Du hast die Krone! ${(me/1e3).toFixed(1)} s`:`${a} hat die Krone. Hol sie dir!`:w.out?`Dich hat es erwischt.`:B===null?_e===e.selfId?`Du hast die Bombe! Berühr jemanden!`:_e?`${a} hat die Bombe. Lauf!`:``:`Du hast überlebt!`}else a?(!w.out&&w.fallingSince===null&&l.length===1&&C.length>1&&B===null&&(B=e.durationMs+5e3,e.finish(B)),d.textContent=w.out?`Du bist vom Dach gefallen.`:B===null?`Noch ${l.length} auf dem Dach`:`Du bist als Letzter oben!`,B!==null&&!w.out&&!tt&&(tt=!0,Z(`win`))):t===`chips`&&(d.textContent=`${ue()} Chips`);f.disabled=z<w.dashReady||w.out,p.render(m,h)},at=()=>{Ze||(it(),Qe=requestAnimationFrame(at))};Qe=requestAnimationFrame(at);let ot=setInterval(()=>document.hidden&&!Ze&&it(),200);return{score:ue,destroy(){Ze=!0,cancelAnimationFrame(Qe),clearInterval(ot),rt.disconnect(),window.removeEventListener(`keydown`,R),window.removeEventListener(`keyup`,R),m.traverse(e=>{let t=e;t.geometry?.dispose();for(let e of Array.isArray(t.material)?t.material:t.material?[t.material]:[])e.map?.dispose(),e.dispose()}),p.dispose(),u.remove(),d.remove(),f.remove(),te.remove()}}}var Vp=e=>Bp(e,`sumo`),Hp=e=>Bp(e,`chips`),Up=e=>Bp(e,`ice`),Wp=e=>Bp(e,`bomb`),Gp=e=>Bp(e,`crown`),Kp=e=>Bp(e,`dodge`),qp=e=>Bp(e,`wind`),Jp=e=>Bp(e,`atoll`),Yp=e=>Bp(e,`paint`),Xp=e=>Bp(e,`wave`),Zp=e=>Bp(e,`beam`),Qp=e=>Bp(e,`spot`),$p=e=>{let t=Q(`div`,`mg mg-domino`),n=Q(`p`,`mg-big`,`0`),r=Q(`div`,`mg-domino-row`),i=Q(`button`,`mg-mash`,`Stein!`);i.type=`button`,t.append(n,r,i),e.el.append(t);let a=0;return i.addEventListener(`pointerdown`,t=>{t.preventDefault(),a++,n.textContent=String(a);let o=Q(`i`,a%10==0?`gold`:``);r.append(o),r.childElementCount>60&&r.firstElementChild?.remove(),i.classList.remove(`hit`),i.offsetWidth,i.classList.add(`hit`),a%10==0?Z(`plus`):Z(`tap`),e.report(a)}),{score:()=>a,destroy:()=>t.remove()}},em=e=>{let t=op(e.seed),n=Q(`div`,`mg mg-flags`),r=Q(`div`,`mg-flag-boss`),i=Q(`p`,`mg-hint`,`Gleich geht es los …`),a=Q(`div`,`mg-pads`),o=Q(`button`,`mg-pad flag-red`,`Rot`),s=Q(`button`,`mg-pad flag-blue`,`Blau`);o.type=s.type=`button`,a.append(o,s),n.append(r,i,a),e.el.append(n);let c=Array.from({length:60},(e,n)=>({show:n>3&&t()<.2?`none`:t()<.5?`red`:`blue`,window:Math.max(520,1500-n*55)})),l=-1,u=0,d=!1,f=!1,p=!1,m=0,h=t=>{p||(p=!0,clearTimeout(m),r.className=`mg-flag-boss out`,r.textContent=`✕`,i.textContent=t,Z(`bad`),e.finish(u))},g=()=>{if(p)return;l++;let t=c[l%c.length];d=!0,f=!1,r.className=`mg-flag-boss ${t.show}`,r.textContent=t.show===`none`?`…`:``,i.textContent=t.show===`none`?`Finte! Nicht tippen.`:`Schnell!`,m=window.setTimeout(()=>{if(d=!1,t.show!==`none`&&!f)return h(`Zu langsam.`);t.show===`none`&&(u++,e.report(u)),r.className=`mg-flag-boss`,r.textContent=``,i.textContent=`${u} richtig`,m=window.setTimeout(g,420)},t.window)},_=t=>n=>{if(n.preventDefault(),p||!d||f)return;let i=c[l%c.length];if(i.show!==t)return h(i.show===`none`?`Das war eine Finte.`:`Falsche Flagge.`);f=!0,u++,Z(`good`),e.report(u),r.classList.add(`ok`)};return o.addEventListener(`pointerdown`,_(`red`)),s.addEventListener(`pointerdown`,_(`blue`)),m=window.setTimeout(g,900),{score:()=>u,destroy(){p=!0,clearTimeout(m),n.remove()}}},tm=45,nm=e=>{let t=op(e.seed),n=Array.from({length:tm},()=>t()<.5?0:1),r=Q(`div`,`mg mg-leap`),i=Q(`p`,`mg-hint`,`Stufe 0 von ${tm}`),a=Q(`div`,`mg-leap-tower`),o=Q(`div`,`mg-pads`),s=Q(`button`,`mg-pad`,`◀ Links`),c=Q(`button`,`mg-pad`,`Rechts ▶`);s.type=c.type=`button`,o.append(s,c),r.append(i,a,o),e.el.append(r);let l=performance.now(),u=0,d=0,f=null,p=()=>{a.replaceChildren();for(let e=Math.min(tm,u+5)-1;e>=u;e--){let t=Q(`div`,`mg-leap-rung ${n[e]?`right`:`left`}${e===u?` next`:``}`);t.append(Q(`i`,``)),a.append(t)}i.textContent=f===null?`Stufe ${u} von ${tm}`:`Oben angekommen!`},m=t=>i=>{i.preventDefault();let a=performance.now();f!==null||a<d||(n[u]===t?(u++,Z(`step`),u>=tm?(f=2e5-Math.round(a-l),Z(`win`),e.finish(f)):e.report(u),p()):(d=a+800,r.classList.add(`stun`),setTimeout(()=>r.classList.remove(`stun`),800),Z(`bad`)))};return s.addEventListener(`pointerdown`,m(0)),c.addEventListener(`pointerdown`,m(1)),p(),{score:()=>f??u,destroy:()=>r.remove()}},rm=6,im=e=>{let t=op(e.seed),n={x:Math.floor(t()*rm),y:Math.floor(t()*rm)},r=Q(`div`,`mg mg-dig`),i=Q(`p`,`mg-hint`,`Tippe ein Fach dreimal an, um es freizulegen.`),a=Q(`div`,`mg-dig-grid`);r.append(i,a),e.el.append(r);let o=performance.now(),s=0,c=null;for(let t=0;t<rm;t++)for(let r=0;r<rm;r++){let l=Q(`button`,`mg-dig-cell`);l.type=`button`;let u=0;l.addEventListener(`pointerdown`,a=>{if(a.preventDefault(),c!==null||u>=3||(u++,l.dataset.hits=String(u),Z(`tap`),u<3))return;s++;let d=Math.abs(r-n.x)+Math.abs(t-n.y);d===0?(l.classList.add(`found`),l.textContent=`★`,i.textContent=`Gefunden!`,c=2e5-Math.round(performance.now()-o),Z(`core`),e.finish(c)):(l.classList.add(d<=2?`hot`:d<=4?`warm`:`cold`),l.textContent=String(d),i.textContent=d<=2?`Heiß!`:d<=4?`Warm.`:`Kalt.`,e.report(s))}),a.append(l)}return{score:()=>c??0,destroy:()=>r.remove()}};function am(e,t,n){let r=Q(`div`,`mg mg-${t}`),i=Q(`p`,`mg-hint`,n);r.append(i),e.el.append(r);let a=0,o=[];return{root:r,hint:i,rng:op(e.seed),get points(){return a},add(t){a=Math.max(0,a+t),e.report(a)},later(e,t){o.push(window.setTimeout(e,t))},destroy(){o.forEach(clearTimeout),o=[],r.remove()}}}var om=e=>{let t=am(e,`timing`,`Stoppe den Zeiger im hellen Bereich.`),n=Q(`div`,`mg-time-track`),r=Q(`i`,`zone`),i=Q(`i`,`needle`),a=Q(`button`,`mg-mash`,`Stopp!`);a.type=`button`,n.append(r,i),t.root.append(n,a);let o=0,s=.5,c=.2,l=1,u=performance.now(),d=!1,f=0,p=()=>{let e=(performance.now()-u)/1e3*l;return Math.abs(e%2-1)},m=()=>{d&&(i.style.left=`${p()*100}%`),f=requestAnimationFrame(m)},h=()=>{if(o++>=7)return e.finish(t.points);c=Math.max(.07,.22-o*.02),s=c/2+t.rng()*(1-c),l=.7+o*.18,r.style.left=`${(s-c/2)*100}%`,r.style.width=`${c*100}%`,u=performance.now(),d=!0};return a.addEventListener(`pointerdown`,e=>{if(e.preventDefault(),!d)return;d=!1;let n=Math.abs(p()-s),r=n<=c/2?100:Math.max(0,60-Math.round((n-c/2)*400));t.add(r),t.hint.textContent=r===100?`Auf den Punkt! +100`:`Daneben: +${r}`,Z(r===100?`good`:`bad`),t.later(h,700)}),h(),f=requestAnimationFrame(m),{score:()=>t.points,destroy(){cancelAnimationFrame(f),t.destroy()}}},sm=e=>{let t=am(e,`doors`,`Auf welcher Seite liegen mehr Akten?`),n=Q(`div`,`mg-pads`);t.root.append(n);let r=0,i=!1,a=()=>{i=!1,r++;let e=5+Math.floor(t.rng()*12),o=Math.max(1,5-Math.floor(r/3)),s=t.rng()<.5?0:1;n.replaceChildren();for(let r=0;r<2;r++){let c=Q(`button`,`mg-pad mg-heap`);c.type=`button`;for(let n=0;n<e+(r===s?o:0);n++){let e=Q(`i`,``);e.style.left=`${6+t.rng()*80}%`,e.style.top=`${6+t.rng()*80}%`,c.append(e)}c.addEventListener(`pointerdown`,e=>{if(e.preventDefault(),i)return;i=!0;let n=r===s;t.add(n?1:-1),t.hint.textContent=n?`Richtig! ${t.points} Punkte`:`Falsch, ein Punkt weg.`,Z(n?`good`:`bad`),t.later(a,n?250:800)}),n.append(c)}};return a(),{score:()=>t.points,destroy:t.destroy}},cm=[[`O`,`Q`],[`E`,`F`],[`8`,`B`],[`M`,`N`],[`6`,`9`],[`P`,`R`],[`C`,`G`],[`V`,`U`],[`5`,`S`],[`I`,`T`]],lm=e=>{let t=am(e,`odd`,`Ein Zeichen ist anders. Finde es.`),n=Q(`div`,`mg-odd-grid`);t.root.append(n);let r=0,i=0,a=()=>{let e=Math.min(6,3+Math.floor(r/2));r++;let[o,s]=cm[Math.floor(t.rng()*cm.length)],c=Math.floor(t.rng()*e*e);n.style.gridTemplateColumns=`repeat(${e}, minmax(0, 1fr))`,n.replaceChildren();for(let r=0;r<e*e;r++){let e=Q(`button`,`mg-odd-cell`,r===c?s:o);e.type=`button`,e.addEventListener(`pointerdown`,n=>{n.preventDefault(),performance.now()<i||(r===c?(t.add(1),Z(`good`),a()):(i=performance.now()+700,e.classList.add(`wrong`),Z(`bad`)))}),n.append(e)}};return a(),{score:()=>t.points,destroy:t.destroy}},um=e=>{let t=am(e,`shell`,`Unter welchem Becher liegt der Chip?`),n=Q(`div`,`mg-shell-table`);t.root.append(n);let r=0,i=()=>{if(r>=6)return e.finish(t.points);r++;let a=2+r,o=Math.max(170,420-r*45),s=[0,1,2],c=Math.floor(t.rng()*3),l=!1,u=s.map(e=>{let n=Q(`button`,`mg-cup`,e===c?`●`:``);return n.type=`button`,n.style.left=`${e*34}%`,n.style.transitionDuration=`${o}ms`,n.classList.add(`show`),n.addEventListener(`pointerdown`,n=>{if(n.preventDefault(),!l)return;l=!1,u.forEach(e=>e.classList.add(`show`));let r=e===c;r&&t.add(1),t.hint.textContent=r?`Richtig!`:`Daneben.`,Z(r?`good`:`bad`),t.later(i,1100)}),n});n.replaceChildren(...u),t.hint.textContent=`Merk dir den Becher …`,t.later(()=>u.forEach(e=>e.classList.remove(`show`)),900);for(let e=0;e<a;e++){let n=Math.floor(t.rng()*3),r=(n+1+Math.floor(t.rng()*2))%3;t.later(()=>{[s[n],s[r]]=[s[r],s[n]],u.forEach((e,t)=>e.style.left=`${s[t]*34}%`)},1250+e*(o+60))}t.later(()=>{l=!0,t.hint.textContent=`Wo ist der Chip?`},1250+a*(o+60))};return i(),{score:()=>t.points,destroy:t.destroy}},dm=e=>{let t=am(e,`whack`,`Tippe die Käfer weg. Finger weg von den Bomben!`),n=Q(`div`,`mg-whack-grid`),r=Array.from({length:9},()=>{let e=Q(`button`,`mg-whack-cell`);return e.type=`button`,e.addEventListener(`pointerdown`,n=>{n.preventDefault();let r=e.dataset.kind;r&&(e.dataset.kind=``,e.textContent=``,t.add(r===`bug`?1:-3),Z(r===`bug`?`good`:`hit`))}),n.append(e),e});t.root.append(n);let i=500;for(;i<e.durationMs-600;){let e=r[Math.floor(t.rng()*9)],n=t.rng()<.22?`bomb`:`bug`,a=Math.max(420,1e3-i/40);t.later(()=>{e.dataset.kind=n,e.textContent=n===`bug`?`🐞`:`💣`,t.later(()=>{e.dataset.kind===n&&(e.dataset.kind=``,e.textContent=``)},a)},i),i+=Math.max(260,650-i/60)*(.7+t.rng()*.6)}return{score:()=>t.points,destroy:t.destroy}},fm=e=>{let t=am(e,`floor`,`Merk dir die grünen Platten.`),n=Q(`div`,`mg-whack-grid`);t.root.append(n);let r=!1,i=n=>{r||(r=!0,t.hint.textContent=n,Z(`fall`),e.finish(t.points))},a=()=>{let e=Math.max(1,4-Math.floor(t.points/2)),o=new Set;for(;o.size<e;)o.add(Math.floor(t.rng()*9));let s=!1,c=t.points;n.replaceChildren();for(let e=0;e<9;e++){let c=Q(`button`,`mg-whack-cell${o.has(e)?` safe`:``}`);c.type=`button`,c.addEventListener(`pointerdown`,n=>{if(n.preventDefault(),s&&!r){if(s=!1,!o.has(e))return c.classList.add(`gone`),i(`Die Platte ist weggebrochen.`);c.classList.add(`safe`),t.add(1),Z(`good`),t.later(a,450)}}),n.append(c)}t.hint.textContent=`Merk dir die grünen Platten.`,t.later(()=>{n.querySelectorAll(`.safe`).forEach(e=>e.classList.remove(`safe`)),s=!0,t.hint.textContent=`Jetzt: Welche war sicher?`,t.later(()=>s&&t.points===c&&i(`Zu lange gezögert.`),2600)},Math.max(380,1100-t.points*70))};return a(),{score:()=>t.points,destroy:t.destroy}},pm=e=>{let t=am(e,`sled`,`Brems so spät wie möglich. Über die Kante gibt es nichts.`),n=Q(`div`,`mg-sled-track`),r=Q(`i`,`cart`),i=Q(`button`,`mg-mash`,`Bremsen!`);i.type=`button`,n.append(r),t.root.append(n,i);let a=0,o=0,s=0,c=!1,l=!1,u=performance.now(),d=0,f=()=>{if(a++>=3)return e.finish(t.points);o=0,s=34+t.rng()*26,c=!1,l=!0,t.hint.textContent=`Versuch ${a} von 3`},p=()=>{let e=performance.now(),n=Math.min(.05,(e-u)/1e3);if(u=e,l){if(c?s=Math.max(0,s-62*n):s+=14*n,o+=s*n,o>100||c&&s===0){l=!1;let e=o>100?0:Math.round(o);t.add(e),t.hint.textContent=o>100?`Abgestürzt! 0 Punkte`:`Noch ${Math.round(100-o)} cm bis zur Kante: +${e}`,Z(o>100?`fall`:`good`),t.later(f,1300)}r.style.left=`${Math.min(108,o)*.9}%`,r.classList.toggle(`fallen`,o>100)}d=requestAnimationFrame(p)};return i.addEventListener(`pointerdown`,e=>{e.preventDefault(),l&&(c=!0)}),f(),d=requestAnimationFrame(p),{score:()=>t.points,destroy(){cancelAnimationFrame(d),t.destroy()}}},mm=[`📦`,`📁`,`☕`],hm=e=>{let t=am(e,`count`,``),n=Q(`div`,`mg-count-belt`),r=Q(`div`,`mg-count-answers`);t.root.append(n,r);let i=0,a=()=>{if(i++>=4)return e.finish(t.points);let o=Math.floor(t.rng()*3),s=7+i*2,c=0;n.replaceChildren(),r.replaceChildren(),t.hint.textContent=`Zähle: ${mm[o]}`;for(let e=0;e<s;e++){let r=Math.floor(t.rng()*3);r===o&&c++;let a=Q(`i`,``,mm[r]);a.style.top=`${10+t.rng()*60}%`,a.style.animationDelay=`${400+e*(420-i*40)+t.rng()*150}ms`,a.style.animationDuration=`${2300-i*250}ms`,n.append(a)}t.later(()=>{t.hint.textContent=`Wie viele ${mm[o]} waren es?`;let e=Math.max(0,c-Math.floor(t.rng()*4));for(let n=e;n<e+4;n++){let e=Q(`button`,`mg-pad`,String(n));e.type=`button`,e.addEventListener(`pointerdown`,e=>{e.preventDefault(),r.childElementCount&&(r.replaceChildren(),n===c&&t.add(1),t.hint.textContent=n===c?`Stimmt!`:`Falsch, es waren ${c}.`,Z(n===c?`good`:`bad`),t.later(a,900))}),r.append(e)}},400+s*(420-i*40)+2300-i*250)};return a(),{score:()=>t.points,destroy:t.destroy}},gm=5,_m=e=>{let t=am(e,`maze`,`Finde den Weg von unten links nach oben rechts.`),n=[],r=e=>{if(n.push(e),e===4)return!0;let i=e%gm,a=Math.floor(e/gm),o=[[1,0],[-1,0],[0,1],[0,-1]].map(e=>[e,t.rng()]).sort((e,t)=>e[1]-t[1]);for(let[[e,t]]of o){let o=i+e,s=a+t,c=s*gm+o;if(!(o<0||s<0||o>=gm||s>=gm||n.includes(c))&&!([[1,0],[-1,0],[0,1],[0,-1]].filter(([e,t])=>n.includes((s+t)*gm+o+e)&&o+e>=0&&o+e<gm).length>1)&&r(c))return!0}return n.pop(),!1};r(20);let i=Q(`div`,`mg-maze-grid`);t.root.append(i);let a=performance.now(),o=0,s=0,c=null,l=Array.from({length:25},(t,r)=>{let l=Q(`button`,`mg-maze-cell`,r===4?`★`:``);return l.type=`button`,l.addEventListener(`pointerdown`,t=>{if(t.preventDefault(),c!==null)return;let i=n[o];Math.abs(r%gm-i%gm)+Math.abs(Math.floor(r/gm)-Math.floor(i/gm))===1&&(n[o+1]===r?(o++,s=Math.max(s,o),l.classList.add(`path`),Z(`step`),e.report(s),r===4&&(c=2e5-Math.round(performance.now()-a),Z(`win`),e.finish(c))):l.classList.contains(`path`)||(l.classList.add(`wall`),o=0,Z(`bad`)),u())}),i.append(l),l}),u=()=>l.forEach((e,t)=>e.classList.toggle(`here`,t===n[o]));return l[n[0]].classList.add(`path`),u(),{score:()=>c??s,destroy:t.destroy}},vm=e=>{let t=am(e,`lanes`,`Wechsle die Spur und weich aus.`),n=Q(`div`,`mg-road`),r=Q(`i`,`me`),i=Q(`div`,`mg-pads`),a=Q(`button`,`mg-pad`,`◀`),o=Q(`button`,`mg-pad`,`▶`);a.type=o.type=`button`,i.append(a,o),n.append(r),t.root.append(n,i);let s=[];for(let n=1200;n<e.durationMs;n+=Math.max(330,900-n/50))s.push({at:n,lane:Math.floor(t.rng()*3),node:null});let c=performance.now(),l=1,u=!1,d=0,f=e=>t=>{t.preventDefault(),l=Math.max(0,Math.min(2,l+e)),r.style.left=`${l*33.33}%`};a.addEventListener(`pointerdown`,f(-1)),o.addEventListener(`pointerdown`,f(1)),r.style.left=`33.33%`;let p=()=>{let i=performance.now()-c,a=Math.max(900,1900-i/30);for(let t of s){let o=(i-t.at)/a;o<0||o>1.25?(t.node?.remove(),t.node=null):(t.node||(t.node=Q(`i`,`car`),t.node.style.left=`${t.lane*33.33}%`,n.append(t.node)),t.node.style.top=`${o*86}%`,!u&&t.lane===l&&o>.9&&o<1.08&&(u=!0,r.classList.add(`hit`),Z(`hit`),e.finish(Math.round(i/100))))}u||(t.hint.textContent=`${Math.round(i/100)} m`,d=requestAnimationFrame(p))};return d=requestAnimationFrame(p),{score:()=>Math.round((performance.now()-c)/100),destroy(){u=!0,cancelAnimationFrame(d),t.destroy()}}},ym=e=>{let t=am(e,`hoops`,`Stoppe den Zeiger in einem Korb: 1, 2 oder 3 Punkte.`),n=Q(`div`,`mg-time-track`),r=Q(`i`,`needle`),i=Q(`button`,`mg-mash`,`Werfen!`);i.type=`button`,t.root.append(n,i);let a=[],o=0,s=performance.now(),c=1,l=!1,u=0,d=()=>Math.abs((performance.now()-s)/1e3*c%2-1),f=()=>{if(o++>=7)return e.finish(t.points);a=[.08+t.rng()*.1,.42+t.rng()*.1,.78+t.rng()*.1].map((e,t)=>({from:e,to:e+[.16,.1,.06][t],worth:t+1})),n.replaceChildren(...a.map(e=>{let t=Q(`i`,`zone`,String(e.worth));return t.style.left=`${e.from*100}%`,t.style.width=`${(e.to-e.from)*100}%`,t}),r),c=.8+o*.12,s=performance.now(),l=!0},p=()=>{l&&(r.style.left=`${d()*100}%`),u=requestAnimationFrame(p)};return i.addEventListener(`pointerdown`,e=>{if(e.preventDefault(),!l)return;l=!1;let n=d(),r=a.find(e=>n>=e.from&&n<=e.to);t.add(r?.worth??0),t.hint.textContent=r?`Treffer! +${r.worth}`:`Daneben.`,Z(r?`good`:`bad`),t.later(f,650)}),f(),u=requestAnimationFrame(p),{score:()=>t.points,destroy(){cancelAnimationFrame(u),t.destroy()}}},bm=e=>{let t=am(e,`hurdle`,`Tippe, um über die Funken zu springen.`),n=Q(`button`,`mg-hurdle-lane`);n.type=`button`;let r=Q(`i`,`me`);n.append(r),t.root.append(n);let i=[];for(let n=1500;n<e.durationMs;n+=Math.max(480,1300-n/35)*(.75+t.rng()*.5))i.push({at:n,node:null,passed:!1});let a=performance.now(),o=-9999,s=!1,c=0;n.addEventListener(`pointerdown`,e=>{e.preventDefault();let t=performance.now();t-o>540&&(o=t,Z(`step`))});let l=()=>{let u=performance.now(),d=u-a,f=(u-o)/540;r.style.bottom=`${f<1?Math.sin(f*Math.PI)*62:0}%`;let p=Math.max(850,1500-d/45);for(let a of i){let i=(d-a.at)/p;i<0||i>1.15?(a.node?.remove(),a.node=null):(a.node||(a.node=Q(`i`,`spark`),n.append(a.node)),a.node.style.left=`${100-i*100}%`,!s&&i>.8&&i<.9&&!(f>.12&&f<.88)&&(s=!0,r.classList.add(`hit`),Z(`hit`),e.finish(t.points)),!a.passed&&i>=.9&&!s&&(a.passed=!0,t.add(1)))}s||(c=requestAnimationFrame(l))};return c=requestAnimationFrame(l),{score:()=>t.points,destroy(){s=!0,cancelAnimationFrame(c),t.destroy()}}},xm=e=>{let t=am(e,`squash`,`Tippe auf eine Platte, die nicht rot ist.`),n=Q(`div`,`mg-whack-grid`);t.root.append(n);let r=4,i=!1,a=Array.from({length:9},(e,t)=>{let a=Q(`button`,`mg-whack-cell`);return a.type=`button`,a.addEventListener(`pointerdown`,e=>{e.preventDefault(),i||(r=t,o())}),n.append(a),a}),o=()=>a.forEach((e,t)=>e.textContent=t===r?`🧍`:``),s=()=>{if(i)return;let n=Math.min(8,3+Math.floor(t.points/2)),o=new Set;for(;o.size<n;)o.add(Math.floor(t.rng()*9));a.forEach((e,t)=>e.classList.toggle(`gone`,o.has(t))),t.later(()=>{if(o.has(r))return i=!0,t.hint.textContent=`Erwischt!`,Z(`hit`),e.finish(t.points);t.add(1),Z(`tap`),a.forEach(e=>e.classList.remove(`gone`)),t.later(s,300)},Math.max(520,1400-t.points*60))};return o(),t.later(s,800),{score:()=>t.points,destroy:t.destroy}},Sm=[`📦`,`📁`,`☕`,`💾`,`🔑`,`📎`,`💡`,`📞`,`🧯`,`🪴`],Cm=e=>{let t=am(e,`recall`,`Merk dir, was du siehst.`),n=Q(`p`,`mg-big mg-icons`,``),r=Q(`div`,`mg-count-answers`);t.root.append(n,r);let i=0,a=()=>{if(i++>=7)return e.finish(t.points);let o=[...Sm].sort(()=>t.rng()-.5),s=o.slice(0,Math.min(7,3+Math.floor(i/2))),c=o[s.length];r.replaceChildren(),n.textContent=s.join(` `),t.hint.textContent=`Merk dir, was du siehst.`,t.later(()=>{n.textContent=``,t.hint.textContent=`Welches war NICHT dabei?`;for(let e of[c,...s.slice(0,3)].sort(()=>t.rng()-.5)){let n=Q(`button`,`mg-pad`,e);n.type=`button`,n.addEventListener(`pointerdown`,n=>{n.preventDefault(),r.childElementCount&&(r.replaceChildren(),e===c&&t.add(1),t.hint.textContent=e===c?`Stimmt!`:`Falsch, es war ${c}.`,Z(e===c?`good`:`bad`),t.later(a,800))}),r.append(n)}},Math.max(900,2100-i*150))};return a(),{score:()=>t.points,destroy:t.destroy}},wm=e=>{let t=am(e,`climb`,`Tippe schnell! Der Kaffee steigt.`),n=Q(`p`,`mg-big`,`0 m`),r=Q(`div`,`mg-gauge`),i=Q(`div`,`mg-gauge-fill`),a=Q(`button`,`mg-mash`,`Hoch!`);a.type=`button`,r.append(i),t.root.append(n,r,a);let o=performance.now(),s=6,c=!1,l=0;a.addEventListener(`pointerdown`,t=>{t.preventDefault(),c||(s++,Z(`tap`),e.report(s))});let u=()=>{let r=Math.max(0,(performance.now()-o-1500)/1e3),a=r*3+r*r*.12,d=s-a;if(n.textContent=`${s} m`,i.style.width=`${Math.max(0,Math.min(100,d*5))}%`,t.hint.textContent=d<4?`Der Kaffee ist direkt unter dir!`:`Tippe schnell! Der Kaffee steigt.`,d<=0)return c=!0,Z(`fall`),e.finish(s);l=requestAnimationFrame(u)};return l=requestAnimationFrame(u),{score:()=>s,destroy(){c=!0,cancelAnimationFrame(l),t.destroy()}}},Tm=[`▲`,`▶`,`▼`,`◀`],Em=e=>{let t=am(e,`look`,`Tippe die Richtung, die der Pfeil zeigt.`),n=Q(`p`,`mg-big mg-arrow`,``),r=Q(`div`,`mg-count-answers`);t.root.append(n,r);let i=-1,a=!1,o=0,s=n=>{a||(a=!0,clearTimeout(o),t.hint.textContent=n,Z(`bad`),e.finish(t.points))},c=()=>{if(a)return;let e=Math.floor(t.rng()*4),r=t.points>3&&t.rng()<.3;i=r?(e+2)%4:e,n.textContent=Tm[e],n.classList.toggle(`flip`,r),t.hint.textContent=r?`Gegenteil!`:`Diese Richtung!`,o=window.setTimeout(()=>s(`Zu langsam.`),Math.max(600,1500-t.points*50))};return Tm.forEach((e,l)=>{let u=Q(`button`,`mg-pad`,e);u.type=`button`,u.addEventListener(`pointerdown`,e=>{if(e.preventDefault(),!(a||i<0)){if(clearTimeout(o),l!==i)return s(`Falsche Richtung.`);i=-1,t.add(1),Z(`good`),n.textContent=``,o=window.setTimeout(c,300)}}),r.append(u)}),o=window.setTimeout(c,900),{score:()=>t.points,destroy(){a=!0,clearTimeout(o),t.destroy()}}},Dm=e=>{let t=am(e,`pairs`,`Finde alle Paare.`),n=Q(`div`,`mg-odd-grid`);n.style.gridTemplateColumns=`repeat(4, minmax(0, 1fr))`,t.root.append(n);let r=[...Sm.slice(0,6),...Sm.slice(0,6)].map(e=>[e,t.rng()]).sort((e,t)=>e[1]-t[1]).map(([e])=>e),i=performance.now(),a=[],o=!1,s=null;return r.forEach(r=>{let c=Q(`button`,`mg-odd-cell mg-card`);c.type=`button`,c.addEventListener(`pointerdown`,n=>{if(n.preventDefault(),o||c.textContent||s!==null||(c.textContent=r,a.push(c),Z(`tap`),a.length<2))return;let[l,u]=a;a=[],l.textContent===u.textContent?(l.classList.add(`path`),u.classList.add(`path`),t.add(1),Z(`good`),t.points===6&&(s=2e5-Math.round(performance.now()-i),Z(`win`),e.finish(s))):(o=!0,t.later(()=>{l.textContent=u.textContent=``,o=!1},650))}),n.append(c)}),{score:()=>s??t.points,destroy:t.destroy}},Om=e=>{let t=am(e,`quiz`,`Rechne schnell!`),n=Q(`p`,`mg-big`,``),r=Q(`div`,`mg-count-answers`);t.root.append(n,r);let i=0,a=()=>{let e=Math.floor(t.rng()*3),o=2+Math.floor(t.rng()*(e===2?8:40)),s=2+Math.floor(t.rng()*(e===2?8:30)),[c,l]=e===0?[`${o} + ${s}`,o+s]:e===1?[`${o+s} − ${s}`,o]:[`${o} × ${s}`,o*s];n.textContent=c;let u=Math.floor(t.rng()*4);r.replaceChildren();for(let n=0;n<4;n++){let s=l+(n-u)*(e===2?o:t.rng()<.5?1:10),c=Q(`button`,`mg-pad`,String(n===u?l:s===l?l+2:s));c.type=`button`,c.addEventListener(`pointerdown`,e=>{if(e.preventDefault(),performance.now()<i)return;let r=n===u;t.add(r?1:-1),Z(r?`good`:`bad`),r?a():i=performance.now()+700}),r.append(c)}};return a(),{score:()=>t.points,destroy:t.destroy}},km=[`🍕`,`🍔`,`🥗`,`🍜`,`🍩`],Am=e=>{let t=am(e,`menu`,`Merk dir die Bestellung.`),n=Q(`p`,`mg-big mg-icons`,``),r=Q(`div`,`mg-menu-pads`);t.root.append(n,r);let i=[],a=0,o=!1,s=!1,c=()=>{if(s)return;o=!1,a=0,i=Array.from({length:3+t.points},()=>Math.floor(t.rng()*km.length));let e=Math.max(330,700-t.points*50);t.hint.textContent=`Merk dir die Bestellung.`,i.forEach((r,i)=>{t.later(()=>{n.textContent=km[r],Z(`tap`)},500+i*e),t.later(()=>n.textContent=``,500+i*e+e*.7)}),t.later(()=>{o=!0,t.hint.textContent=`Jetzt in derselben Reihenfolge tippen.`},500+i.length*e)};return km.forEach((l,u)=>{let d=Q(`button`,`mg-pad`,l);d.type=`button`,d.addEventListener(`pointerdown`,r=>{if(r.preventDefault(),o&&!s){if(i[a]!==u)return s=!0,t.hint.textContent=`Falsche Bestellung!`,Z(`bad`),e.finish(t.points);a++,n.textContent=i.slice(0,a).map(e=>km[e]).join(``),a===i.length&&(t.add(1),Z(`good`),o=!1,t.later(()=>{n.textContent=``,c()},600))}}),r.append(d)}),c(),{score:()=>t.points,destroy:t.destroy}},jm=e=>{let t=am(e,`swipe`,`Wische in die gezeigte Richtung.`),n=Q(`div`,`mg-swipe-pad`);t.root.append(n);let r=0,i=null,a=()=>{r=Math.floor(t.rng()*4),n.textContent=Tm[r]};return n.addEventListener(`pointerdown`,e=>{i={x:e.clientX,y:e.clientY},n.setPointerCapture?.(e.pointerId)}),n.addEventListener(`pointerup`,e=>{if(!i)return;let o=e.clientX-i.x,s=e.clientY-i.y;if(i=null,Math.hypot(o,s)<28)return;let c=(Math.abs(o)>Math.abs(s)?o>0?1:3:s>0?2:0)===r;t.add(c?1:-1),Z(c?`slice`:`bad`),n.classList.toggle(`wrong`,!c),a()}),a(),{score:()=>t.points,destroy:t.destroy}},Mm=e=>{let t=am(e,`rhythm`,`Drück die Taste, wenn der Ton die Linie trifft.`),n=Q(`div`,`mg-rhythm-lanes`),r=Q(`div`,`mg-rhythm-pads`);t.root.append(n,r);let i=[];for(let n=2200;n<e.durationMs-500;n+=t.rng()<.3?240:480)i.push({at:n,lane:Math.floor(t.rng()*3),node:null,done:!1});let a=performance.now(),o=0;for(let e=0;e<3;e++){let n=Q(`button`,`mg-key`,`●`);n.type=`button`,n.addEventListener(`pointerdown`,n=>{n.preventDefault();let r=performance.now()-a,o=i.find(t=>!t.done&&t.lane===e&&Math.abs(t.at-r)<150);if(!o)return;o.done=!0,o.node?.remove();let s=Math.abs(o.at-r)<65;t.add(s?2:1),t.hint.textContent=s?`Perfekt! +2`:`Gut! +1`,Z(s?`good`:`tap`)}),r.append(n)}let s=()=>{let e=performance.now()-a;for(let t of i){let r=1-(t.at-e)/1400;t.done||r<0||(r>1.12?(t.done=!0,t.node?.remove()):(t.node||(t.node=Q(`i`,``),t.node.style.left=`${t.lane*33.33}%`,n.append(t.node)),t.node.style.top=`${r*88}%`))}o=requestAnimationFrame(s)};return o=requestAnimationFrame(s),{score:()=>t.points,destroy(){cancelAnimationFrame(o),t.destroy()}}},Nm=e=>{let t=op(e.seed),n=sp(e.el),r=e.solo===e.selfId,i=e.players.filter(t=>t.id!==e.solo),a=Array.from({length:14},()=>({x:8+t()*84,y:8+t()*84})),o=new Set,s=Object.fromEntries(i.map((e,t)=>[e.id,{x:20+t*23%60,y:88}])),c=new Set,l={x:50,y:30},u=s[e.selfId]??{x:50,y:50},d=null,f=0,p=!1,m=0,h=0;e.onMessage((t,n)=>{let i=n;i?.t===`light`&&t===e.solo&&typeof i.x==`number`&&typeof i.y==`number`?(l.x=i.x,l.y=i.y):i?.t===`pos`&&s[t]&&typeof i.x==`number`&&typeof i.y==`number`?s[t]={x:i.x,y:i.y}:i?.t===`stick`&&typeof i.i==`number`?o.add(i.i):i?.t===`caught`&&(c.add(t),r&&e.report(c.size))});let g=()=>{let e=Math.min(n.width,n.height)/100;return{scale:e,ox:(n.width-100*e)/2,oy:(n.height-100*e)/2}},_=e=>{let t=cp(n.canvas,e),r=g();return{x:Math.max(2,Math.min(98,(t.x-r.ox)/r.scale)),y:Math.max(2,Math.min(98,(t.y-r.oy)/r.scale))}};n.canvas.addEventListener(`pointerdown`,e=>{d=_(e),n.canvas.setPointerCapture?.(e.pointerId)}),n.canvas.addEventListener(`pointermove`,e=>d&&=_(e));let v=()=>d=null;return n.canvas.addEventListener(`pointerup`,v),n.canvas.addEventListener(`pointercancel`,v),n.loop((t,_)=>{let v=r?l:u;if(d&&(!p||r)){let e=d.x-v.x,n=d.y-v.y,i=Math.hypot(e,n),a=Math.min((r?44:30)*t,i);i>.2&&(v.x+=e/i*a,v.y+=n/i*a)}_-h>120&&(h=_,e.send(r?{t:`light`,x:+l.x.toFixed(1),y:+l.y.toFixed(1)}:{t:`pos`,x:+u.x.toFixed(1),y:+u.y.toFixed(1)})),!r&&!p&&(a.forEach((t,n)=>{!o.has(n)&&Math.hypot(t.x-u.x,t.y-u.y)<4.5&&(o.add(n),f++,e.send({t:`stick`,i:n}),e.report(f))}),m=Math.hypot(l.x-u.x,l.y-u.y)<17?m+t*1e3:Math.max(0,m-t*500),m>650&&(p=!0,c.add(e.selfId),e.send({t:`caught`}),e.finish(0)));let{c:y,width:b,height:x}=n,S=g();y.fillStyle=lp.night,y.fillRect(0,0,b,x),y.save(),y.translate(S.ox,S.oy),y.scale(S.scale,S.scale),y.fillStyle=`#0a0620`,y.fillRect(0,0,100,100);let C=y.createRadialGradient(l.x,l.y,2,l.x,l.y,17);C.addColorStop(0,`rgba(255,240,180,0.85)`),C.addColorStop(1,`rgba(255,240,180,0.12)`),y.fillStyle=C,y.beginPath(),y.arc(l.x,l.y,17,0,Math.PI*2),y.fill(),a.forEach((e,t)=>{if(o.has(t))return;let n=Math.hypot(l.x-e.x,l.y-e.y)<17;(!r||n)&&(y.fillStyle=lp.cyan,y.globalAlpha=n?1:.55,y.fillRect(e.x-1.6,e.y-.9,3.2,1.8),y.globalAlpha=1)});for(let t of i){let n=t.id===e.selfId?u:s[t.id],r=Math.hypot(l.x-n.x,l.y-n.y)<17;(t.id===e.selfId||r)&&(y.globalAlpha=c.has(t.id)?.3:1,y.fillStyle=t.color,y.beginPath(),y.arc(n.x,n.y,t.id===e.selfId?2.6:2.1,0,Math.PI*2),y.fill(),y.globalAlpha=1)}!r&&!p&&m>0&&(y.strokeStyle=lp.magenta,y.lineWidth=.8,y.beginPath(),y.arc(u.x,u.y,4.4,-Math.PI/2,-Math.PI/2+m/650*Math.PI*2),y.stroke()),y.restore(),y.fillStyle=lp.ink,y.font=`800 17px Archivo Variable, sans-serif`,y.textAlign=`center`;let w=r?`Licht ziehen. Erwischt: ${c.size}`:p?`Erwischt!`:`Sticks: ${f}. Bleib im Dunkeln.`;y.fillText(w,b/2,x-12)}),{score:()=>r?c.size:p?0:Math.max(1,f),destroy:()=>n.destroy()}},Pm=e=>{let t=op(e.seed+e.players.findIndex(t=>t.id===e.selfId)*104729),n=sp(e.el),r=0,i=0,a=(t()-.5)*.6,o=900,s=0,c=0,l=0,u=0,d=null,f=null,p=0,m=e=>{let t=cp(n.canvas,e);u=Math.max(-1,Math.min(1,(t.x/n.width-.5)*2.4))},h=!1;n.canvas.addEventListener(`pointerdown`,e=>{h=!0,n.canvas.setPointerCapture?.(e.pointerId),m(e)}),n.canvas.addEventListener(`pointermove`,e=>h&&m(e));let g=()=>{h=!1,u=0};n.canvas.addEventListener(`pointerup`,g),n.canvas.addEventListener(`pointercancel`,g);let _=e=>{if(e.gamma==null||e.beta==null)return;let t=Math.abs(screen.orientation?.angle??0)===90?e.beta:e.gamma;f??=t,d=Math.max(-1,Math.min(1,(t-f)/20))},v=null;return typeof window.DeviceOrientationEvent?.requestPermission==`function`?(v=Q(`button`,`btn small mg-tilt`,`Neigen einschalten`),v.type=`button`,v.addEventListener(`click`,async()=>{try{await window.DeviceOrientationEvent.requestPermission()===`granted`&&window.addEventListener(`deviceorientation`,_)}catch{}v?.remove()}),e.el.append(v)):`DeviceOrientationEvent`in window&&window.addEventListener(`deviceorientation`,_),n.loop((f,m)=>{if(m<l)c=0;else{m>o&&(a=(t()-.5)*(1.1+m/3e4),o=m+500+t()*900);let n=h?u:d??0;i+=(r*2.6+a-n*3.4)*f,i*=1-1.2*f,r+=i*f,c=Math.min(1,c+f*.5),s+=c*(1-Math.abs(r)*.6)*6*f,Math.abs(r)>=1&&(l=m+1400,r=0,i=0,a=0),m-p>500&&(p=m,e.report(Math.floor(s)))}let{c:g,width:_,height:v}=n;g.fillStyle=lp.night,g.fillRect(0,0,_,v);let y=v*.78;g.fillStyle=lp.panel,g.fillRect(0,y,_,v-y),g.strokeStyle=lp.line,g.lineWidth=3;let b=s*40%80;for(let e=-b;e<_;e+=80)g.beginPath(),g.moveTo(e,y+14),g.lineTo(e+36,y+14),g.stroke();let x=_/2,S=m<l;g.fillStyle=lp.cyan,g.beginPath(),g.arc(x,y-26,20,0,Math.PI*2),g.fill(),g.save(),g.translate(x,y-48),g.rotate(S?Math.PI/2:r*.9);let C=Math.min(34,v*.05);for(let e=0;e<6;e++)g.fillStyle=e%2?lp.yellow:lp.orange,g.fillRect(-C*.55,-(e+1)*C,C*1.1,C-3);g.restore(),g.fillStyle=lp.line,g.fillRect(_*.15,54,_*.7,8),g.fillStyle=Math.abs(r)>.7?lp.magenta:lp.green,g.fillRect(_*.5+r*_*.35-6,48,12,20),g.fillStyle=lp.ink,g.font=`800 24px Archivo Variable, sans-serif`,g.textAlign=`center`,g.fillText(S?`Verschüttet!`:`${Math.floor(s)} m`,x,34),g.font=`600 15px Archivo Variable, sans-serif`,g.fillStyle=lp.dim,g.fillText(`Links oder rechts halten zum Gegensteuern`,x,v-14)}),{score:()=>Math.floor(s),destroy:()=>{window.removeEventListener(`deviceorientation`,_),v?.remove(),n.destroy()}}},Fm=e=>{let t=0,n=Q(`div`,`mg mg-meltdown`),r=Q(`div`,`mg-gauge`),i=Q(`div`,`mg-gauge-fill`);r.append(i);let a=Q(`p`,`mg-big`,`0`),o=Q(`button`,`mg-mash`,`Kühlen!`);return o.type=`button`,n.append(Q(`p`,`mg-hint`,`Dein Server überhitzt`),r,a,o),e.el.append(n),o.addEventListener(`pointerdown`,n=>{n.preventDefault(),t++,a.textContent=String(t),i.style.height=`${Math.max(4,100-t*1.1)}%`,o.classList.remove(`hit`),o.offsetWidth,o.classList.add(`hit`),t%4==0&&e.report(t)}),{score:()=>t,destroy:()=>n.remove()}},Im=e=>{let t=op(e.seed),n=Array.from({length:40},()=>Math.floor(t()*4)),r=[lp.magenta,lp.cyan,lp.yellow,lp.green],i=0,a=3,o=0,s=!1,c=!1,l=0,u=0,d=new Set,f=(e,t)=>{let n=setTimeout(()=>{d.delete(n),c||e()},t);d.add(n)},p=Q(`div`,`mg mg-password`),m=Q(`p`,`mg-hint`,`Merk dir die Folge`),h=Q(`div`,`mg-pads`),g=r.map((e,t)=>{let n=Q(`button`,`mg-pad`);return n.type=`button`,n.style.setProperty(`--pad`,e),n.setAttribute(`aria-label`,`Farbe ${t+1}`),n.addEventListener(`pointerdown`,e=>{e.preventDefault(),b(t)}),h.append(n),n}),_=Q(`p`,`mg-big`,`Runde 1`);p.append(m,h,_),e.el.append(p);let v=(e,t=320)=>{g[e].classList.add(`on`),f(()=>g[e].classList.remove(`on`),t)},y=()=>{s=!1,m.textContent=`Merk dir die Folge`;let e=Math.max(300,560-i*25);for(let t=0;t<a;t++)f(()=>v(n[t],e-120),500+t*e);f(()=>{s=!0,o=0,u=performance.now(),m.textContent=`Jetzt du`},500+a*e)},b=t=>{if(s&&!c){if(v(t,160),n[o]!==t){m.textContent=`Falsch. Zugriff verweigert.`,p.classList.add(`failed`),s=!1;let t=x();c=!0,e.finish(t)}else o++,o===a&&(i++,l+=Math.max(0,99-Math.floor((performance.now()-u)/100)),a++,_.textContent=`Runde ${i+1}`,m.textContent=`Richtig!`,e.report(x()),s=!1,f(y,700))}},x=()=>i*1e3+l;return y(),{score:x,destroy:()=>{c=!0,d.forEach(clearTimeout),p.remove()}}},Lm=e=>{let t=op(e.seed+e.players.findIndex(t=>t.id===e.selfId)*7919),n=[lp.magenta,lp.cyan,lp.yellow,lp.green,lp.orange,`#b08cff`],r=0,i=null,a=!1,o=!1,s=Q(`div`,`mg mg-cables`),c=Q(`p`,`mg-hint`,`Erst das Kabel, dann den passenden Port`),l=Q(`div`,`mg-cable-board`),u=Q(`p`,`mg-big`,`0`);s.append(c,l,u),e.el.append(s);let d=e=>{let n=[...e];for(let e=n.length-1;e>0;e--){let r=Math.floor(t()*(e+1));[n[e],n[r]]=[n[r],n[e]]}return n},f=()=>{l.replaceChildren(),i=null;let t=d(n).slice(0,4),c=Q(`div`,`mg-cable-col`),p=Q(`div`,`mg-cable-col`),m=4,h=d(t.map((e,t)=>t)).map(e=>{let n=Q(`button`,`mg-plug`,`Kabel`);return n.type=`button`,n.style.setProperty(`--pad`,t[e]),n.addEventListener(`pointerdown`,t=>{t.preventDefault(),a||o||n.disabled||(i=e,h.forEach(e=>e.classList.remove(`picked`)),n.classList.add(`picked`))}),n.dataset.i=String(e),c.append(n),n});d(t.map((e,t)=>t)).forEach(n=>{let c=Q(`button`,`mg-port`,`Port`);c.type=`button`,c.style.setProperty(`--pad`,t[n]),c.addEventListener(`pointerdown`,t=>{if(t.preventDefault(),!(a||o||c.disabled||i===null)){if(i===n){c.disabled=!0,c.classList.add(`linked`);let t=h.find(e=>e.dataset.i===String(n));t.disabled=!0,t.classList.remove(`picked`),t.classList.add(`linked`),i=null,r++,u.textContent=String(r),e.report(r),--m===0&&setTimeout(()=>!o&&f(),250)}else a=!0,s.classList.add(`failed`),setTimeout(()=>{a=!1,s.classList.remove(`failed`)},600)}}),p.append(c)}),l.append(c,p)};return f(),{score:()=>r,destroy:()=>{o=!0,s.remove()}}};function Rm(e,t){let n=Q(`canvas`,`mini-canvas`);e.append(n);let r;try{r=new Af({canvas:n,antialias:!0,powerPreference:`high-performance`})}catch{return n.remove(),e.append(Q(`p`,`mg-status`,`Dieses Gerät kann die 3D-Ansicht nicht zeigen.`)),null}r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setClearColor(t.sky);let i=new fi,a=new Kc(t.fov??46,1,.1,200);i.add(new Xc(16777215,t.ambient??1.1));let o=new Yc(16777215,1.7);o.position.set(4,10,6);let s=new Yc(t.rim??16727435,.9);s.position.set(-8,4,-6),i.add(o,s);let c=new ml,l=new K,u=new ma(new q(0,1,0),0),d=e=>{let t=n.getBoundingClientRect();l.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height*2-1)),c.setFromCamera(l,a)},f=null,p={canvas:n,scene:i,camera:a,width:320,height:320,onResize(e){f=e,m()},loop:y,ground(e,t=0){return d(e),u.constant=-t,c.ray.intersectPlane(u,new q)},pick(e,t){return d(e),c.intersectObjects(t,!0)[0]??null},screen(e){let t=e.clone().project(a);return{x:(t.x+1)/2*p.width,y:(1-t.y)/2*p.height}},destroy:b};function m(){p.width=n.clientWidth||320,p.height=n.clientHeight||320,r.setSize(p.width,p.height,!1),a.aspect=p.width/p.height,f?.(a.aspect),a.updateProjectionMatrix()}let h=new ResizeObserver(m);h.observe(n),m();let g=!1,_=0,v=null;function y(e){let t=performance.now(),n=t,o=o=>{if(g)return;let s=performance.now(),c=Math.min(.05,(s-n)/1e3);n=s,e(c,s-t),o&&r.render(i,a)},s=()=>{g||(o(!0),_=requestAnimationFrame(s))};_=requestAnimationFrame(s),v=setInterval(()=>document.hidden&&o(!1),250)}function b(){g=!0,cancelAnimationFrame(_),v&&clearInterval(v),h.disconnect(),i.traverse(e=>{let t=e;t.geometry?.dispose();for(let e of Array.isArray(t.material)?t.material:t.material?[t.material]:[])e.map?.dispose(),e.dispose()}),r.dispose(),n.remove()}return p}function zm(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`));let i=new Co(r);return i.colorSpace=On,i}var Bm=e=>parseInt(e.slice(1),16),Vm=(e,t=1)=>e.toFixed(t).replace(`.`,`,`),Hm=e=>{let t=Rm(e.el,{sky:1707272,rim:16747069});if(!t)return{score:()=>0,destroy:()=>e.el.replaceChildren()};let n=op(e.seed),r=e=>(e-50)/10,i=e=>(e-75)/10,a=e=>17+e/1e3*.5,o=e=>e/1e3*17+.25*(e/1e3)**2,s=Q(`p`,`mg-status`);s.style.pointerEvents=`none`;let c=Q(`p`,`m3-big`);e.el.append(s,c);let{scene:u}=t,d=new J(new Zs(90,90),new Y({color:2364428,roughness:.9}));d.rotation.x=-Math.PI/2,d.position.y=-.8;let f=zm(64,64,e=>{e.fillStyle=`#2b2440`,e.fillRect(0,0,64,64),e.strokeStyle=`#5a4aa8`,e.lineWidth=7,e.beginPath(),e.moveTo(0,14),e.lineTo(32,46),e.lineTo(64,14),e.stroke()});f.wrapS=f.wrapT=at,f.repeat.set(4,6);let p=new J(new Zs(10,15.6),new Y({map:f,roughness:.7}));p.rotation.x=-Math.PI/2;let m=new J(new Do(10,.7,15.6),new Y({color:1446440,roughness:.8}));m.position.y=-.36;let h=new Y({color:16756768,roughness:.5,metalness:.4}),g=[-5.25,5.25].map(e=>{let t=new J(new Do(.5,1,16.4),h);return t.position.set(e,.1,.2),t}),_=new J(new Do(11.4,2.2,1.4),new Y({color:3805216,roughness:.6,metalness:.3}));_.position.set(0,.3,9);let v=new Y({color:16727435,emissive:16715872,emissiveIntensity:.7,roughness:.35,metalness:.5,flatShading:!0}),y=[6.95,7.85].map(e=>{let t=new J(new ko(.55,.55,10,7),v);return t.rotation.z=Math.PI/2,t.position.set(0,.25,e),t}),b=new J(new Zs(10,.5),new Ra({color:16722509,transparent:!0,opacity:.6}));b.rotation.x=-Math.PI/2,b.position.set(0,.01,6.2),u.add(d,p,m,...g,_,...y,b);let x={x:50,y:67.5,r:4.2},S=Math.max(0,e.players.findIndex(t=>t.id===e.selfId)),C=e.players[S],w=Pp(C?.char??l[S%l.length],Bm(C?.color??`#2fe3ff`));w.rotation.y=Math.PI,u.add(w);let T=new Do(1,1,1),E=[14256442,13071402,15114318].map(e=>new Y({color:e,roughness:.85})),D=[],O=1200,k=e=>{for(;O<e+4e3;){let e=20+n()*26;D.push({at:O,x:n()*(100-e),w:e,h:9+n()*6,y:-20,tall:.8+n()*.8,mesh:null}),O+=(620+n()*520)*Math.max(.5,1-O/12e4)}},A=op(e.seed^1540483477),j=e.bots?Number(new URLSearchParams(location.search).get(`raus`)):0,ee=j>0?j*1e3:null,M=e.players.filter(t=>t.id!==e.selfId).map(t=>({id:t.id,out:!1,seen:0,botOut:e.bots?.includes(t.id)?ee??9e3+A()*16e3:null})),N=0;e.onMessage((e,t)=>{let n=M.find(t=>t.id===e);n&&typeof t==`object`&&t&&(n.seen=N,t.o&&(n.out=!0))});let P=null,F=!1,te=0,ne=!1,re=0,ie=null,I=``,ae=0,L=0,R=0,z=e=>{let n=t.ground(e);return n?{x:n.x*10+50,y:n.z*10+75}:null},B=e=>{P=z(e);try{t.canvas.setPointerCapture(e.pointerId)}catch{}},oe=e=>{P&&=z(e)??P},se=()=>P=null;t.canvas.addEventListener(`pointerdown`,B),t.canvas.addEventListener(`pointermove`,oe),t.canvas.addEventListener(`pointerup`,se),t.canvas.addEventListener(`pointercancel`,se),t.onResize(e=>{let n=46*Math.PI/360,r=Math.max(8.2/Math.tan(n),6/(Math.tan(n)*e)),i=new q(0,.86,.5).normalize().multiplyScalar(r);t.camera.position.set(0,i.y,i.z+.7),t.camera.lookAt(0,0,.7)});let ce=0;return t.loop((t,n)=>{let l=ne?ce:n;N=l;let d=ne?0:a(l);k(l);for(let e of M)e.out||(e.botOut===null?l>6e3&&l-e.seen>5e3:l>e.botOut)&&(e.out=!0);let p=o(l),m=p-L,h=Math.min(.25,(l-R)/1e3);L=p,R=l;for(let e of D)l<e.at||(e.y=-20+p-o(e.at));if(!F&&!ne){if(re=l,x.y+=m,P){let e=P.x-x.x,t=P.y-8-x.y,n=Math.hypot(e,t),r=Math.min(52*h,n);n>.1&&(x.x+=e/n*r,x.y+=t/n*r)}for(let e of D){if(l<e.at||e.y>150)continue;let t=Math.max(e.x,Math.min(x.x,e.x+e.w)),n=Math.max(e.y,Math.min(x.y,e.y+e.h)),r=x.x-t,i=x.y-n,a=Math.hypot(r,i);a<x.r&&(a>.001?(x.x+=r/a*(x.r-a),x.y+=i/a*(x.r-a)):x.y=e.y+e.h+x.r)}x.x=Math.max(x.r,Math.min(100-x.r,x.x)),x.y=Math.max(x.r,x.y),l-ae>1e3&&(ae=l,e.send({a:1}),e.report(Math.round(re))),x.y>141?(F=!0,te=l,Z(`fall`),e.send({o:1}),e.finish(Math.round(re))):M.length>0&&M.every(e=>e.out)&&(ie===null&&(ie=l,Z(`alert`)),l-ie>=3e3&&(ne=!0,ce=l,Z(`win`),e.finish(Math.round(re))))}let g=F?`Geschreddert!`:ne?`Gewonnen!`:ie===null?``:String(3-Math.floor((l-ie)/1e3));g!==I&&(ie!==null&&!F&&!ne&&Z(`tap`),I=g,c.textContent=g,c.classList.toggle(`word`,F||ne),c.classList.remove(`pop`),c.offsetWidth,c.classList.add(`pop`));let _=M.filter(e=>!e.out).length+ +!F;s.textContent=`${Vm(re/1e3)} s${ne?` · Gewonnen!`:ie!==null&&!F?` · Du bist der Letzte!`:M.length?` · noch ${_} dabei`:``}`,f.offset.y=(p/10/2.6%1+1)%1,y[0].rotation.x+=t*(6+d*.12),y[1].rotation.x-=t*(6+d*.12),b.material.opacity=.35+.3*Math.sin(l*.012);for(let e of D)l<e.at||(e.y>146?e.mesh&&=(u.remove(e.mesh),null):(e.mesh||(e.mesh=new J(T,E[Math.floor(e.x*7)%E.length]),e.mesh.scale.set(e.w/10,e.tall,e.h/10),u.add(e.mesh)),e.mesh.position.set(r(e.x+e.w/2),e.tall/2,i(e.y+e.h/2))));for(;D.length&&D[0].y>150&&!D[0].mesh;)D.shift();if(F){let e=Math.min(1,(l-te)/700);w.position.set(r(x.x),-e*.9,i(x.y)+e*1.2),w.rotation.x=e*1.6,w.scale.setScalar(1.7*(1-e*.85))}else w.position.set(r(x.x),ne?Math.abs(Math.sin(n*.008))*.5:Math.abs(Math.sin(l*.018))*.16,i(x.y)),w.rotation.y=ne?n*.006:Math.PI,w.scale.setScalar(1.7)}),{score:()=>Math.round(re),destroy(){T.dispose(),E.forEach(e=>e.dispose()),t.destroy(),s.remove(),c.remove()}}},Um=[5,3,2,1],Wm=5,Gm=7e3,Km=5600,qm=.05,Jm={meltdown:Fm,password:Im,spam:fp,shredder:Hm,laser:pp,boss:mp,drone:Nm,coffee:Pm,cables:Lm,sumo:Vp,chips:Hp,domino:$p,flags:em,leap:nm,bomb:Wp,ice:Up,dig:im,cut:e=>{let t=Q(`div`,`m3-wrap`),n=Q(`div`,`m3-top`),r=Q(`div`,`m3-view`);t.append(n,r),e.el.append(t);let i=Rm(r,{sky:731682,fov:30,rim:16765503,ambient:1.25});if(!i)return{score:()=>0,destroy:()=>e.el.replaceChildren()};let a=op(e.seed),o=Array.from({length:Wm},()=>{let e=Math.round(130+a()*110),t=e*qm;return{mm:e,length:t,x:(a()-.5)*(13-t),shift:a()}}),s=7.25,c=Q(`div`,`m3-rounds`),l=o.map(()=>c.appendChild(Q(`i`,``))),u=Q(`p`,`m3-hint`),d=Q(`div`,`m3-timer`),f=d.appendChild(Q(`i`,``));n.append(c,u,d);let p=Q(`div`,`m3-rank`);p.hidden=!0,r.append(p);let{scene:m,camera:h}=i,g=zm(128,128,e=>{e.fillStyle=`#12493a`,e.fillRect(0,0,128,128),e.strokeStyle=`#1a5c4a`,e.lineWidth=2,e.strokeRect(0,0,128,128),e.fillStyle=`#17543f`;for(let t=0;t<60;t++)e.fillRect(t*53%128,t*97%128,2,2)});g.wrapS=g.wrapT=at,g.repeat.set(14,14);let _=new J(new Zs(90,90),new Y({map:g,roughness:.95}));_.rotation.x=-Math.PI/2,m.add(_);let v=(e,t,n,r)=>(e.position.set(t,n,r),m.add(e),e),y=new Y({color:16762938,roughness:.3,metalness:.8});for(let e=0;e<5;e++)v(new J(new ko(.45,.45,.12,20),y),-5.2+e%2*.12,.06+e*.12,-3.6);for(let e=0;e<3;e++)v(new J(new ko(.45,.45,.12,20),y),-4,.06+e*.12,-4.1);v(new J(new ko(.6,.5,1.1,20),new Y({color:15921906,roughness:.4})),5,.55,-3.8),v(new J(new ko(.5,.5,.04,20),new Y({color:3875604})),5,1.08,-3.8),v(new J(new Do(1.7,.25,2.4),new Y({color:2367562,roughness:.5})),4.6,.125,3.9).rotation.y=.3,v(new J(new Do(1.3,.06,.6),new Y({color:10288983,emissive:5024288,emissiveIntensity:.6})),4.5,.28,3.2).rotation.y=.3,v(new J(new ko(.09,.09,3,10),new Y({color:16727435,roughness:.4})),-4.2,.09,3.8).rotation.set(0,.5,Math.PI/2);let b=zm(512,64,t=>{let n=op(e.seed+7),r=[`#ff3d8b`,`#ffd23f`,`#2fe3ff`,`#9a5cff`,`#ff8a3d`,`#6dff8a`],i=0;for(;i<512;){let e=8+n()*46;t.fillStyle=r[Math.floor(n()*r.length)],t.fillRect(i,0,e+1,64),i+=e}t.fillStyle=`rgba(21,15,51,0.28)`;for(let e=0;e<40;e++)t.fillRect(n()*512,n()*64,3+n()*14,3+n()*10)});b.wrapS=at,b.magFilter=ct;let x=new Y({color:16183264,roughness:.6}),S=new J(new Do(1,.35,3),[x,x,new Y({map:b,roughness:.55}),x,x,x]);S.position.y=.175;let C=new J(new Zs(1,3.5),new Ra({color:0,transparent:!0,opacity:.32}));C.rotation.x=-Math.PI/2,C.position.y=.01;let w=new J(new Do(.012,.03,4),new Ra({color:16777215}));w.position.y=.37;let T=new Or,E=new so(new Do(.006,.012,1),new Ra({color:1380147}),121);E.position.y=.36,m.add(S,C,w,E);let D=new Ao(.07,.5,10),O=new $s(.17,16,12),k=new Do(.01,.02,3.4),A=new Map(e.players.map(e=>{let t=Bm(e.color),n=new ni,r=new J(D,new Y({color:14540253,metalness:.7,roughness:.3}));r.rotation.x=Math.PI,r.position.y=.25;let i=new J(O,new Y({color:t,emissive:t,emissiveIntensity:.45,roughness:.3}));i.position.y=.6,n.add(r,i);let a=new J(k,new Ra({color:t}));return n.visible=a.visible=!1,m.add(n,a),[e.id,{group:n,line:a}]})),j=o.map(()=>new Map),ee=new Set,M=op(e.seed^625341585),N=o.map(()=>(e.bots??[]).map(e=>({id:e,at:900+M()*2600,u:.5+(M()+M()+M()-1.5)*.07}))),P=0,F=`aim`,te=0,ne=null,re=0,ie=``,I={x:0,half:s,tilt:0},ae={x:0,half:s,tilt:0};e.onMessage((e,t)=>{if(typeof t!=`object`||!t)return;let{r:n,u:r}=t;typeof n==`number`&&typeof r==`number`&&j[n]&&r>=0&&r<=1&&!j[n].has(e)&&A.has(e)&&(j[n].set(e,r),ee.delete(e))});let L=(e,t)=>Math.round(Math.abs(t-.5)*o[e].mm*10)/10,R=e=>{let t=[...j[e]].map(([t,n])=>({id:t,mm:L(e,n),rank:0,points:0})).sort((e,t)=>e.mm-t.mm);return t.forEach((e,n)=>{e.rank=n>0&&e.mm===t[n-1].mm?t[n-1].rank:n,e.points=Um[Math.min(e.rank,Um.length-1)]}),t},z=t=>t===e.selfId?`Du`:e.players.find(e=>e.id===t)?.name??`?`,B=()=>{let e=o[P];S.scale.x=e.length,S.position.x=e.x,C.scale.x=e.length+.5,C.position.x=e.x+.15,b.repeat.x=e.length/9,b.offset.x=e.shift,w.position.x=e.x,w.visible=E.visible=!1;for(let t=0;t<121;t++){let n=(t-60)%5==0;E.setMatrixAt(t,T.makeScale(1,1,n?.5:.25).setPosition(e.x+(t-60)*qm,0,3/2-(n?.25:.125)))}E.instanceMatrix.needsUpdate=!0;for(let e of A.values())e.group.visible=e.line.visible=!1;Object.assign(ae,{x:0,half:s,tilt:0}),p.hidden=!0,ie=``,l.forEach((e,t)=>e.className=t<P?`done`:t===P?`on`:``),u.textContent=`Runde ${P+1} von ${Wm}: Tippe genau in die Mitte des Streifens!`,ne=null};i.canvas.addEventListener(`pointerdown`,t=>{if(F!==`aim`||j[P].has(e.selfId))return;let n=i.ground(t,.35),r=o[P];if(!n||Math.abs(n.z)>1.9)return;let a=(n.x-(r.x-r.length/2))/r.length;a<0||a>1||(j[P].set(e.selfId,a),e.send({r:P,u:a}),Z(`slice`),u.textContent=e.players.length>1?`Getippt. Warte auf die anderen …`:`Getippt.`)});let oe=e=>{let t=e<1,n=Math.tan(30*Math.PI/360),r=t?I.half/n:I.half/(n*e);h.up.set(+!!t,0,t?0:-1),h.position.set(I.x-(t?r*I.tilt:0),r,t?0:r*I.tilt*.5),h.lookAt(I.x,0,0)};i.onResize(oe);let se=()=>{let t=R(P),n=e.players.filter(e=>!j[P].has(e.id)),r=t.map(e=>e.id+e.mm).join();(r!==ie||p.hidden)&&(ie=r,p.hidden=!1,p.replaceChildren(...t.map(t=>{let n=Q(`p`,t.id===e.selfId?`me`:``),r=Q(`i`,``);return r.style.background=e.players.find(e=>e.id===t.id)?.color??`#fff`,n.append(Q(`b`,``,`${t.rank+1}.`),r,Q(`span`,`name`,z(t.id)),Q(`span`,`mm`,`${Vm(t.mm)} mm`),Q(`span`,`pts`,`+${t.points}`)),n}),...n.map(e=>{let t=Q(`p`,`none`);return t.append(Q(`b`,``,`–`),Q(`span`,`name`,z(e.id)),Q(`span`,`mm`,`nicht getippt`),Q(`span`,`pts`,`+0`)),t})))};return B(),i.loop((t,n)=>{let r=n-te,i=o[Math.min(P,4)];if(F===`aim`){for(let e of N[P])r>=e.at&&!j[P].has(e.id)&&j[P].set(e.id,e.u);if(f.style.width=`${Math.max(0,1-r/Gm)*100}%`,e.players.filter(e=>!j[P].has(e.id)&&!ee.has(e.id)).length===0&&ne===null&&(ne=n),r>=Gm||ne!==null&&n-ne>500){for(let t of e.players)!j[P].has(t.id)&&t.id!==e.selfId&&ee.add(t.id);F=`reveal`,te=n,w.visible=E.visible=!0,f.style.width=`0%`,u.textContent=`Wer ist am nächsten dran?`,Z(`turn`)}}else if(F===`reveal`){let t=R(P),a=t.length?t[t.length-1].mm*qm:1,o=t.length?t[Math.min(1,t.length-1)].mm*qm:1;if(Object.assign(ae,{x:i.x,half:Math.min(s,Math.max(.3,(r<2400?a:o)*1.7)),tilt:.4}),r>700&&se(),r>=Km){let r=t.find(t=>t.id===e.selfId);re+=r?.points??0,e.report(re),P++,P>=Wm?(F=`done`,l.forEach(e=>e.className=`done`),u.textContent=`Fertig! Du hast ${re} Punkte.`,Z(`win`),e.finish(re)):(F=`aim`,te=n,B())}}let a=Math.min(1,t*3.2);I.x+=(ae.x-I.x)*a,I.half+=(ae.half-I.half)*a,I.tilt+=(ae.tilt-I.tilt)*a,oe(h.aspect);let c=Math.min(P,4),d=h.aspect<1?I.half*h.aspect:I.half/h.aspect,p=Math.min(3/2-.3,d*.6),m=Math.max(.05,Math.min(1,I.half/5));e.players.forEach((t,n)=>{let r=A.get(t.id),a=j[c].get(t.id),o=F!==`done`&&a!==void 0&&(F===`reveal`||t.id===e.selfId);if(r.group.visible=r.line.visible=o,!o||a===void 0)return;let s=i.x-i.length/2+a*i.length;r.group.position.set(s,.35,-p+2*p*(n+.5)/e.players.length),r.group.scale.setScalar(m),r.line.position.set(s,.37,0),r.line.scale.x=Math.max(.4,m*2.5)}),w.scale.x=Math.max(.5,m*2.5)}),{score:()=>re,destroy(){D.dispose(),O.dispose(),k.dispose(),i.destroy(),t.remove()}}},timing:om,doors:sm,odd:lm,shell:um,whack:dm,floor:fm,sled:pm,count:hm,maze:_m,lanes:vm,crown:Gp,dodge:Kp,hoops:ym,hurdle:bm,squash:xm,recall:Cm,climb:wm,look:Em,pairs:Dm,quiz:Om,paint:Yp,wind:qp,wave:Xp,menu:Am,swipe:jm,rhythm:Mm,beam:Zp,spot:Qp,atoll:Jp},Ym=e=>`${(e/1e3).toFixed(1).replace(`.`,`,`)} s`;function Xm(e,t,n=!1){if(t===null)return`…`;switch(e){case`meltdown`:return`${t} Tipps`;case`password`:return`${Math.floor(t/1e3)} Runden`;case`spam`:return`${t} Punkte`;case`shredder`:return Ym(t);case`laser`:return t>=5e4?`Ziel in ${Ym(1e5-t)}`:`${Math.floor(t/1e3)} Felder`;case`boss`:return n?`${t} Treffer`:t>0?`überlebt`:`erwischt`;case`drone`:return n?`${t} erwischt`:t>0?`${t} Sticks`:`erwischt`;case`coffee`:return`${t} m`;case`hoops`:case`quiz`:case`swipe`:case`rhythm`:return`${t} Punkte`;case`hurdle`:return`${t} Funken übersprungen`;case`squash`:return`${t} Wellen überstanden`;case`recall`:case`look`:case`menu`:return`${t} richtig`;case`climb`:return`${t} m hoch`;case`pairs`:return t>1e5?`fertig in ${Ym(2e5-t)}`:`${t} Paare`;case`paint`:return`${t} Felder`;case`cut`:case`timing`:case`sled`:case`doors`:return`${t} Punkte`;case`odd`:case`shell`:case`floor`:case`count`:return`${t} richtig`;case`whack`:return`${t} Treffer`;case`maze`:return t>1e5?`durch in ${Ym(2e5-t)}`:`${t} Schritte weit`;case`lanes`:return`${t} m`;case`crown`:return`${(t/10).toFixed(1).replace(`.`,`,`)} s Krone`;case`wave`:case`beam`:case`spot`:case`dodge`:return t>h.dodge.durationMs+4e3?`als Letzter übrig`:t>=h.dodge.durationMs?`bis zum Schluss dabei`:`${Ym(t)} durchgehalten`;case`domino`:return`${t} Steine`;case`flags`:return`${t} richtig`;case`leap`:return t>1e5?`oben in ${Ym(2e5-t)}`:`Stufe ${t}`;case`dig`:return t>1e5?`gefunden in ${Ym(2e5-t)}`:`nicht gefunden`;case`bomb`:return t>=1e5?`überlebt`:t%1e3==500?`bis zum Schluss dabei`:`bei Bombe ${Math.floor(t/1e3)+1} erwischt`;case`wind`:case`atoll`:case`ice`:case`sumo`:return t>h.sumo.durationMs+4e3?`als Letzter oben`:t>=h.sumo.durationMs?`bis zum Schluss oben`:`${Ym(t)} oben`;case`chips`:return`${t} Chips`;case`cables`:return`${t} Kabel`;default:return String(t)}}var Zm=[`#ff3d8b`,`#2fe3ff`,`#ffd23f`],$=(e,t=``,n=``)=>{let r=document.createElement(e);return t&&(r.className=t),n&&(r.textContent=n),r},Qm=(e,t,n)=>{let r=$(`button`,e,t);return r.type=`button`,r.addEventListener(`click`,n),r},$m=e=>new Promise(t=>setTimeout(t,e)),eh=e=>`#${kp[e%kp.length].toString(16).padStart(6,`0`)}`,th=e=>JSON.parse(JSON.stringify(e)),nh={plus:`Plus-Feld`,minus:`Minus-Feld`,ransom:`Ransomware`,chad:`Budgetkürzung`,bonus:`Bonusausschüttung`,scan:`Scanner`,core:`Data Core`,lift:`VIP-Aufzug`,expenses:`Spesen`,mini:`Minispiel`,crash:`Absturz-Feld`,shop:`Shop`,steal:`Core-Klau`,gift:`Aufholpaket`,revenge:`Rache`,wheel:`Glücksrad`};function rh(e){let t=e.root;t.replaceChildren();let n=$(`canvas`,`board-canvas`),i=$(`div`,`g-top`),s=$(`span`,`g-round`),l=$(`div`,`g-top-buttons`),d=$(`ol`,`g-players`),p=$(`p`,`g-net`),m=$(`p`,`g-toast`),g=$(`div`,`g-floats`),v=$(`div`,`g-actions`),y=$(`div`,`g-sheet`),b=$(`div`,`g-dicebox`),x=$(`canvas`,`g-dice`),S=$(`p`,`g-dice-text`),C=$(`div`,`g-mini`),w=$(`div`,`g-final`),T=$(`div`,`g-popover`);b.append(x,S);let E=$(`span`,`g-core-price`);i.append(s,l),t.append(n,i,d,p,m,g,v,y,b,C,w,T);for(let e of[p,m,y,b,C,w,T])e.hidden=!0;m.setAttribute(`role`,`status`);let D=Fp(n),O=null,k=null,A=null,j=null,ee=-1,M=[],P=!1,F=!1,te=!1,re=0,ie=``,ae=0,L=()=>k?.selfId??``,R=e=>j?.players[e]?.name??A?.players[e]?.name??`Jemand`,z=e=>Math.max(0,(j??A)?.order.indexOf(e)??0),B=()=>!!j?.players[L()],oe=Qm(`g-icon`,`Brett`,()=>{te=!te,D.setOverview(te),oe.textContent=te?`Figur`:`Brett`}),se=Qm(`g-icon`,`Emote`,()=>le(`emote`)),ce=Qm(`g-icon`,`Menü`,()=>le(`menu`));l.append(oe,se,ce);function le(t){if(!T.hidden&&T.dataset.kind===t)return void(T.hidden=!0);if(T.dataset.kind=t,T.replaceChildren(),t===`emote`){let t=$(`div`,`g-emotes`);for(let n of _)t.append(Qm(`g-emote`,n,()=>{T.hidden=!0,Date.now()-re<3e3||!B()||(re=Date.now(),e.sendFx(`emote`,n))}));T.append(t)}else{T.append($(`p`,`g-menu-code`,`Raum ${k?.code??``}`));let t=Qm(`btn small`,qf()?`Ton aus`:`Ton an`,()=>{Jf(!qf()),t.textContent=qf()?`Ton aus`:`Ton an`});T.append(t),k?.role===`host`&&T.append(Qm(`btn small`,`Partie beenden`,()=>{T.hidden=!0,e.endGame()})),T.append(Qm(`btn small`,`Raum verlassen`,()=>e.leave())),T.append(Qm(`btn small primary`,`Schließen`,()=>T.hidden=!0))}T.hidden=!1}let ue=null;function de(e,t,n=`info`){return m.textContent=e,m.className=`g-toast ${n}`,m.hidden=!1,ue&&clearTimeout(ue),ue=setTimeout(()=>m.hidden=!0,t+500),$m(t)}function fe(e,n,r){let i=D.project(e),a=$(`span`,`g-float ${r}`,n);a.style.left=`${i?.x??t.clientWidth/2}px`,a.style.top=`${i?.y??t.clientHeight/2}px`,g.append(a),setTimeout(()=>a.remove(),r===`talk`?2400:1300)}async function pe(e,n,r,i,a=`bad`){let o=$(`div`,`g-banner ${a}`);o.append($(`p`,`g-banner-kicker`,e),$(`p`,`g-banner-title`,n)),r&&o.append($(`p`,`g-banner-text`,r)),t.append(o),await $m(i),o.classList.add(`out`),setTimeout(()=>o.remove(),300)}async function me(n,r,i,a){if(D.focus(r),r===L()&&B()){let n=$(`div`,`g-react`);for(let t of[`😡`,`😱`,`Autsch`,`😂`])n.append(Qm(`g-emote`,t,()=>{e.sendFx(`emote`,t),fe(L(),t,`talk`),n.remove()}));t.append(n),setTimeout(()=>n.remove(),4500)}await pe(`Sabotage!`,`${R(n)} ➜ ${R(r)}`,i,a)}let he=!1;async function ge(e){D.setCore(N[e.core]),Z(`reveal`),await Promise.all([de(`Hier liegt der Data Core! Er kostet ${xe(e)} Bits`,4200,`good`),D.showcase(N[e.core])])}async function _e(e,t){let n=t?.3:1,i=j;switch(e.t){case`round`:Z(`turn`),i.round=e.n,H(),await de(`Runde ${e.n} von ${i.settings.rounds}`,1100*n),e.n===1&&!t&&i.settings.mode!==`minis`&&await ge(i);return;case`turn`:return D.focus(e.p),e.p===L()&&Z(`turn`),de(e.p===L()?`Du bist am Zug`:`${R(e.p)} ist am Zug`,500*n);case`dice`:{let r=`${e.p===L()?`Du würfelst`:`${R(e.p)} würfelt`} ${e.values.length>1?`${e.values.join(` + `)} = ${e.values.reduce((e,t)=>e+t,0)}`:String(e.values[0])}`;e.note===`chip`&&(r=`${R(e.p)} wählt die ${e.values[0]}`),e.note===`back`&&(r+=` und läuft rückwärts`),e.note===`cap`&&(r+=`, darf aber nur ${e.total} Felder laufen`),e.note===`d3`&&(r+=` (Würfel nur 1 bis 3)`),S.textContent=r,b.hidden=!1,O??=Uf(x,!0),Z(`roll`),O.ok&&e.note!==`chip`&&!t?(await Promise.race([O.roll(Math.min(6,e.values[0])),$m(1600)]),await $m(650)):(O.show(Math.min(6,e.values[0])),await $m(900*n)),b.hidden=!0;return}case`move`:i.players[e.p].pos=e.path[e.path.length-1],await D.movePawn(e.p,e.path,t?90:240),Z(`step`);return;case`tp`:{i.players[e.p].pos=e.to;let t={portal:`reist durch das CC-Mail-Portal`,lift:`nimmt den VIP-Aufzug`,swap:`wird vertauscht`,push:`wird weggeschoben`}[e.why];de(`${R(e.p)} ${t}`,900*n),await D.teleportPawn(e.p,e.to);return}case`bits`:return i.players[e.p].bits+=e.d,fe(e.p,`${e.d>0?`+`:`−`}${Math.abs(e.d)}`,e.d>0?`good`:`bad`),ap(e.d),H(),e.why!==`plus`&&e.why!==`minus`&&e.why!==`mini`&&e.why!==`core`&&de(`${nh[e.why]??``}: ${R(e.p)} ${e.d>0?`bekommt`:`verliert`} ${Math.abs(e.d)} Bits`,900*n,e.d>0?`good`:`bad`),$m(380*n);case`core`:return i.players[e.p].cores++,Z(`core`),H(),de(`${R(e.p)} kauft einen Data Core!`,1500*n,`good`);case`coreMove`:D.setCore(e.to),Z(`reveal`),H(),await Promise.all([de(`Neuer Data Core! Er kostet jetzt ${xe(i)} Bits`,4200,`good`),D.showcase(e.to)]);return;case`gain`:return i.players[e.p].items.push(e.item),Z(`item`),H(),de(e.p===L()?`Du bekommst: ${u[e.item].name}`:`${R(e.p)} bekommt ein Item`,1100*n,`good`);case`lose`:{let t=i.players[e.p].items,r=t.indexOf(e.item);return r>=0&&t.splice(r,1),H(),de(`${R(e.p)} verliert: ${u[e.item].name}`,1100*n,`bad`)}case`item`:{let r=i.players[e.p].items,a=r.indexOf(e.item);if(a>=0&&r.splice(a,1),Z(e.target?`alert`:`item`),H(),e.target&&!t)return me(e.p,e.target,u[e.item].name,1900);let o=e.target?` gegen ${R(e.target)}`:``;return de(`${R(e.p)} setzt ein: ${u[e.item].name}${o}`,1300*n)}case`ability`:{if(Z(`alert`),e.target&&!t)return me(e.p,e.target,c[e.char].ability,1900);let r=e.target?` gegen ${R(e.target)}`:``;return de(`${R(e.p)}: ${c[e.char].ability}${r}`,1400*n)}case`finale`:{Z(`reveal`),i.finale=e.kind,D.focus(null);let n=e.kind===`gift`&&e.p?` Es geht an ${R(e.p)}.`:``;await pe(`Finale! Noch ${r.finaleRounds} Runden`,a[e.kind].name,a[e.kind].text+n,t?1200:4200,`gold`),H();return}case`near`:return Z(`bad`),fe(e.p,`Nur ${e.missing} zu wenig!`,`bad`),de(e.p===L()?`So knapp! Dir fehlen nur ${e.missing} Bits zum Data Core.`:`So knapp! ${R(e.p)} fehlen nur ${e.missing} Bits zum Data Core.`,1500*n,`bad`);case`revenge`:return Z(`good`),de(`Rache! ${R(e.p)} zahlt es ${R(e.on)} heim.`,1300*n,`good`);case`steal`:return Z(e.ok?`core`:`alert`),e.ok&&(i.players[e.from].cores--,i.players[e.p].cores++),H(),D.focus(e.from),t?de(`${R(e.p)} klaut ${R(e.from)} einen Data Core`,900*n,`bad`):pe(`Core-Klau!`,`${R(e.p)} ➜ ${R(e.from)}`,e.ok?`${R(e.from)} verliert einen Data Core!`:`Der Adblocker von ${R(e.from)} hält. Die Bits sind trotzdem weg.`,3200,e.ok?`bad`:`good`);case`order`:return i.turnOrder=e.order,H(),de(`Zugreihenfolge nach dem Minispiel: ${e.order.map(R).join(`, `)}`,1700*n);case`trap`:return Z(`alert`),!t&&i.players[e.owner]&&me(e.owner,e.p,e.kind===`stop`?`Mitarbeitergespräch`:`Ransomware-USB`,1500),de(e.kind===`stop`?`${R(e.p)} muss zum Mitarbeitergespräch. Zug beendet.`:`${R(e.p)} tritt auf einen Ransomware-USB von ${R(e.owner)}`,1400*n,`bad`);case`blocked`:return de(`Der Adblocker von ${R(e.p)} wehrt den Angriff ab`,1200*n,`good`);case`wheel`:{let r=f[e.slot];if(t)return de(`Glücksrad: ${R(e.p)} ${r.text}`,900*n,r.tone);let i=$(`div`,`g-wheel`),a=$(`div`,`g-wheel-disc`);a.style.background=`conic-gradient(${f.map((e,t)=>`${e.color} ${t*45}deg ${(t+1)*45}deg`).join(`, `)})`,f.forEach((e,t)=>{let n=$(`span`,``,e.short);n.style.transform=`rotate(${t*45+22.5}deg) translateY(-34%)`,a.append(n)}),i.append($(`p`,`g-wheel-title`,`${R(e.p)} dreht am Glücksrad`),$(`i`,`g-wheel-pointer`),a),b.parentElement.append(i),Z(`roll`),await $m(60);let o=f.findIndex(e=>e.id===`jackpot`),s=e.slot===(o+f.length-1)%f.length?41:e.slot===(o+1)%f.length?4:22.5;a.style.transform=`rotate(${1800-(e.slot*45+s)}deg)`,await $m(3300),Z(r.tone===`good`?`core`:`bad`),await de(`${R(e.p)} ${r.text}`,1700,r.tone),i.remove();return}case`event`:{Z(`alert`);let t={flood:`Kaffee-Pipeline geplatzt! Ein Teil des Bodens ist rutschig.`,restructure:`Umstrukturierung! Der Data Core zieht um.`,bonus:`Bonusausschüttung! Alle bekommen 3 Bits.`}[e.kind];return e.kind===`flood`&&D.setFlood(!0),de(t,1500*n)}case`scan`:return Z(`alert`),!e.hit.length&&!e.saved.length?de(`Scanner läuft. Niemand steht im Scanner-Bereich.`,1200*n):de([e.hit.length?`Scanner erwischt: ${e.hit.map(R).join(`, `)}`:``,e.saved.length?`VIP-Pass schützt: ${e.saved.map(R).join(`, `)}`:``].filter(Boolean).join(`. `),1500*n,`bad`);case`mini`:case`miniResult`:case`final`:return}}window.__cchCore=e=>j&&void D.showcase(N[j.core],e),window.__cchWheel=e=>j&&void _e({t:`wheel`,p:j.order[0],slot:e},!1),window.__cchPlay=e=>j&&void _e(e,!1),window.__cchDecide=e=>{j?.turn&&(Object.assign(j.turn,{player:L(),stage:`decide`,decision:e}),Te())};async function V(){if(!(P||F)){for(P=!0,v.replaceChildren(),U();M.length&&!F;){let e=M.shift(),t=M.length>=2;for(let n of e.events){if(F)break;await _e(n,t)}ve(e.state)}P=!1,F||ye()}}function ve(e){j=e;let t=e.order;D.setPawns(t.map((t,n)=>({id:t,seat:n,char:e.players[t].char,pos:e.players[t].pos,away:e.players[t].away})));for(let n of t)D.place(n,e.players[n].pos);D.setCore(N[e.core]),D.setFlood(!!e.flood),D.setScanner(e.round%r.scannerEvery===0),D.setTraps(e.traps.filter(e=>e.owner===L()).map(e=>e.node)),e.turn&&D.focus(e.turn.player);let n=`${e.phase}:${e.round}:${e.turn?.player}:${e.turn?.stage}:${e.turn?.decision?.kind}:${e.mini?.id}:${e.mini?.stage}`;n!==ie&&(ie=n,ae=Date.now())}function ye(){H(),Te(),Ie(),Be()}function H(){let e=j;if(!e)return;E.textContent=e.phase===`final`||e.settings.mode===`minis`?``:`Data Core: ${xe(e)} Bits`,s.replaceChildren(e.phase===`final`?`Endstand`:`${e.finale?`Finale · `:``}Runde ${e.round}/${e.settings.rounds}`,E),s.title=e.finale?`${a[e.finale].name}: ${a[e.finale].text}`:``,s.classList.toggle(`finale`,!!e.finale&&e.phase!==`final`);let t=(e.settings.mode===`minis`?e.order:e.turnOrder??e.order).map(t=>{let n=e.order.indexOf(t),r=e.players[t],i=$(`li`,`g-player`);i.style.setProperty(`--seat`,eh(n)),e.turn?.player===t&&e.phase===`board`&&i.classList.add(`active`),r.away&&i.classList.add(`away`),t===L()&&i.classList.add(`me`);let a=[r.shield>=e.round?`Schild`:``,r.backward?`rückwärts`:``,r.d3?`W3`:``,r.maxSteps?`max. 3`:``,r.away?`weg`:``].filter(Boolean).join(`, `);return i.append($(`span`,`g-p-name`,r.name),$(`span`,`g-p-char`,c[r.char].name),$(`span`,`g-p-cores`,j?.settings.mode===`minis`?``:`${r.cores} Cores`),$(`span`,`g-p-bits`,j?.settings.mode===`minis`?`${r.bits} Punkte`:`${r.bits} Bits`),$(`span`,`g-p-extra`,[r.items.length?`${r.items.length} Items`:``,a].filter(Boolean).join(` · `))),i});d.replaceChildren(...t)}function U(){y.hidden=!0,y.replaceChildren()}function W(e,t,n,r=!0){y.replaceChildren($(`h3`,`g-sheet-title`,e),$(`p`,`g-sheet-text`,t),...n),r&&y.append(Qm(`btn small`,`Abbrechen`,U)),y.hidden=!1}function Se(e,t){let n=$(`div`,`g-choices`);e.length||n.append($(`p`,`g-sheet-text`,`Gerade ist kein Gegner in Reichweite.`));for(let r of e){let e=Qm(`btn`,R(r),()=>t(r));e.style.setProperty(`--seat`,eh(z(r))),e.classList.add(`seat`),n.append(e)}return n}function Ce(t){let n=u[t],r=(n={})=>{U(),e.act({t:`item`,item:t,...n})};if(t===`chip`){let e=$(`div`,`g-choices`);for(let t of[1,2,3])e.append(Qm(`btn primary`,`${t} ${t===1?`Feld`:`Felder`}`,()=>r({n:t})));return W(n.name,n.text,[e])}if(n.target===`player`)return W(n.name,n.text,[Se(be(j,L(),`player`),e=>r({target:e}))]);W(n.name,n.text,[Qm(`btn primary`,`Einsetzen`,()=>r())])}function we(t){let n=c[t.char],r=(t={})=>{U(),e.act({t:`ability`,...t})};if(n.target===`none`)return W(n.ability,n.text,[Qm(`btn primary`,`Einsetzen`,()=>r())]);let i=be(j,L(),n.target);if(t.char!==`hank`)return W(n.ability,n.text,[Se(i,e=>r({target:e}))]);W(n.ability,n.text,[Se(i,e=>{W(n.ability,`${R(e)} schieben:`,[Qm(`btn primary`,`3 Felder vor`,()=>r({target:e,dir:1})),Qm(`btn primary`,`3 Felder zurück`,()=>r({target:e,dir:-1}))])})])}function Te(){let t=j;if(v.replaceChildren(),D.highlight([]),D.showChoices(null),!t||t.phase!==`board`||!t.turn)return;let n=t.turn,i=n.player===L();if(!B()){v.append($(`p`,`g-status`,`Du schaust zu. In der nächsten Partie bist du dabei.`));return}if(!i){U();let e=n.stage===`decide`?`entscheidet`:n.stage===`pre`?`ist am Zug`:`hat gezogen`;v.append($(`p`,`g-status`,`${R(n.player)} ${e}`));return}let a=t.players[L()];if(n.stage===`pre`){let t=$(`div`,`g-row`),r=Qm(`btn primary big`,n.dice>1?`Mit 2 Würfeln würfeln`:`Würfeln`,()=>{r.disabled=!0,e.act({t:`roll`})}),i=c[a.char],o=Qm(`btn g-ability`,a.cooldown>0?`${i.ability} (noch ${a.cooldown} ${a.cooldown===1?`Runde`:`Runden`})`:i.ability,()=>we(a));o.disabled=a.cooldown>0||n.usedAbility,t.append(o),a.items.forEach(e=>{let r=Qm(`btn g-item`,u[e].name,()=>Ce(e));r.disabled=n.usedItem,t.append(r)}),v.append(t,r,Ee(I.decide))}else if(n.stage===`decide`&&n.decision){let t=n.decision,i=$(`div`,`g-row decide`),o=t=>{i.querySelectorAll(`button`).forEach(e=>e.disabled=!0),e.act({t:`decide`,choice:t})};if(t.kind===`branch`)D.highlight(t.options),D.showChoices({from:a.pos,options:t.options,labels:t.options.map(ne),pick:o}),v.append($(`p`,`g-status`,`Wohin willst du laufen? Tippe auf einen Pfeil.`)),t.options.forEach((e,t)=>{let n=Qm(`btn primary`,ne(e),()=>o(t));n.style.background=Zm[t%Zm.length],i.append(n)});else if(t.kind===`wheel`)v.append($(`p`,`g-status`,`Glücksrad! Dreh und schau, was passiert.`)),i.append(Qm(`btn primary big`,`Drehen!`,()=>o(0)));else if(t.kind===`shop`){let e=a.items.length>=r.maxItems;if(v.append($(`p`,`g-status`,`Shop! Du hast ${a.bits} Bits.${e?` Dein Inventar ist voll.`:``}`)),i.classList.add(`shop`),t.offers.forEach((t,n)=>{let r=Qm(`btn primary`,`${u[t.item].name} · ${t.price} Bits`,()=>o(n+1));r.title=u[t.item].text,r.disabled=e||a.bits<t.price;let s=$(`div`,`g-offer`);s.append(r,$(`span`,`g-offer-text`,u[t.item].text)),i.append(s)}),t.steal){let e=Qm(`btn g-steal`,`Core-Klau bei ${R(t.steal.from)} · ${t.steal.price} Bits`,()=>o(t.offers.length+1));e.disabled=a.bits<t.steal.price,i.append(e)}i.append(Qm(`btn`,`Nichts kaufen`,()=>o(0)))}else t.kind===`core`?(v.append($(`p`,`g-status`,`Data Core für ${t.price} Bits kaufen? Du hast ${a.bits} Bits.`)),i.append(Qm(`btn primary`,`Kaufen`,()=>o(1)),Qm(`btn`,`Weitergehen`,()=>o(0)))):(v.append($(`p`,`g-status`,t.price?`VIP-Aufzug für ${t.price} Bits nehmen?`:`VIP-Aufzug kostenlos nehmen?`)),i.append(Qm(`btn primary`,`Einsteigen`,()=>o(1)),Qm(`btn`,`Weitergehen`,()=>o(0))));v.append(i,Ee(I.decide))}else v.append($(`p`,`g-status`,`Zug beendet`))}function Ee(e){let t=$(`div`,`g-timer`),n=$(`div`,`g-timer-fill`),r=Math.max(0,e-(Date.now()-ae));return n.style.animationDuration=`${r}ms`,t.append(n),t}let De=``,Oe=null,ke=[],Ae=[],je={},Me=!1,Ne=null;function Pe(){Oe?.destroy(),Oe=null,ke.forEach(clearTimeout),ke=[],Ae=[]}function Fe(){let e=j?.mini;Ne&&e&&j&&Ne.replaceChildren(...j.order.map((t,n)=>{let r=$(`span`,`g-chip`,`${R(t)}: ${Xm(e.id,je[t]??0,t===e.solo)}`);return r.style.setProperty(`--seat`,eh(n)),r}))}function Ie(){let t=j,n=t?.phase===`mini`?t.mini:null;if(!t||!n){C.hidden||(Pe(),C.hidden=!0,C.replaceChildren(),De=``);return}let r=h[n.id],i=L(),a=B();if(C.hidden=!1,U(),n.stage===`intro`){let o=`${n.seed}:intro`;De!==o&&(De=o,Pe(),je={},Me=!1,Z(`alert`));let s=$(`div`,`g-card`),c={ffa:`Jeder gegen jeden`,solo:`1 gegen alle`,team:`Team-Spiel`}[r.kind];if(s.append($(`p`,`g-card-kind`,`Minispiel, ${c}`),$(`h2`,`g-card-title`,r.name),$(`p`,`g-card-text`,r.howTo),$(`p`,`g-card-control`,`Steuerung: ${r.control}`)),n.solo&&s.append($(`p`,`g-card-role`,n.solo===i?`Du bist der Boss.`:`${R(n.solo)} ist der Boss.`)),n.teams){let e=n.teams.findIndex(e=>e.includes(i));n.teams.forEach((t,n)=>s.append($(`p`,`g-card-role`,`Team ${n+1}${n===e?` (dein Team)`:``}: ${t.map(R).join(`, `)}`)))}let l=n.ready.includes(i);if(a){let t=Qm(`btn primary big`,l?`Warte auf die anderen …`:`Bereit`,()=>{t.disabled=!0,e.act({t:`ready`})});t.disabled=l,s.append(t)}s.append($(`p`,`g-card-ready`,`Bereit: ${n.ready.length} von ${t.order.length}`)),C.replaceChildren(s);return}if(n.stage===`play`){let o=`${n.seed}:play`;if(De===o)return;De=o,Pe();let s=$(`div`,`g-mini-head`),c=$(`span`,`g-mini-clock`,r.name);Ne=$(`div`,`g-mini-progress`),s.append(c,Ne);let l=$(`div`,`g-mini-stage`),u=$(`p`,`g-count`,`3`);if(l.append(u),C.replaceChildren(s,l),Fe(),!a){u.textContent=`Du schaust zu`;return}let d=t=>{Me||(Me=!0,e.act({t:`score`,score:t}),c.textContent=`Ergebnis gesendet. Warte auf die anderen …`)};if(e.auto){u.textContent=`Test`,ke.push(setTimeout(()=>d(Math.floor(op(n.seed+z(i))()*50)),1200));return}[2,1].forEach((e,t)=>ke.push(setTimeout(()=>(u.textContent=String(e),Z(`tap`)),(t+1)*900))),ke.push(setTimeout(()=>{u.remove(),Z(`turn`);let a=Date.now(),o={el:l,seed:n.seed,durationMs:r.durationMs,selfId:i,players:t.order.map((e,n)=>({id:e,name:R(e),color:eh(n),char:t.players[e].char})),solo:n.solo,teams:n.teams,report:t=>{je[i]=t,e.sendFx(`mp`,t),Fe()},finish:e=>d(e),send:t=>e.sendFx(`mm`,t),onMessage:e=>void Ae.push(e)};Oe=Jm[n.id](o);let s=setInterval(()=>{let e=Math.max(0,r.durationMs-(Date.now()-a));if(Me||(c.textContent=r.endless?r.name:`${r.name}: noch ${Math.ceil(e/1e3)} s`),e<=0){clearInterval(s);let e=Oe?.score()??0;je[i]=e,d(e)}},200);ke.push(s)},2700));return}let o=`${n.seed}:result`;if(De===o)return;De=o,Pe(),Ne=null,Z(n.winners.includes(i)?`win`:`plus`);let s=$(`div`,`g-card`);s.append($(`p`,`g-card-kind`,r.name),$(`h2`,`g-card-title`,n.winners.length?`${n.winners.map(R).join(` und `)} ${n.winners.length>1?`gewinnen`:`gewinnt`}`:`Unentschieden`));let c=$(`ol`,`g-results`);for(let e of n.ranking){let t=$(`li`,`g-result`);t.style.setProperty(`--seat`,eh(z(e))),n.winners.includes(e)&&t.classList.add(`winner`),t.append($(`span`,`g-r-name`,R(e)),$(`span`,`g-r-score`,Xm(n.id,n.scores[e]??0,e===n.solo)),$(`span`,`g-r-bits`,`+${n.rewards[e]??0} ${j?.settings.mode===`minis`?`Punkte`:`Bits`}`)),c.append(t)}s.append(c);let l=t.settings.mode===`minis`;if(l){s.append($(`p`,`g-card-kind g-totals-title`,`Gesamtstand nach Spiel ${t.round} von ${t.settings.rounds}`));let e=$(`ol`,`g-results g-totals`),n=[...t.order].sort((e,n)=>t.players[n].bits-t.players[e].bits),r=1;n.forEach((i,a)=>{a>0&&t.players[i].bits<t.players[n[a-1]].bits&&(r=a+1);let o=$(`li`,`g-result`);o.style.setProperty(`--seat`,eh(z(i))),r===1&&o.classList.add(`winner`),o.append($(`span`,`g-r-name`,`${r}. ${R(i)}`),$(`span`,`g-r-score`,``),$(`span`,`g-r-bits`,`${t.players[i].bits} Punkte`)),e.append(o)}),s.append(e)}let u=l?I.miniResultOnly:I.miniResult,d=Date.now()+u,f=t.round>=t.settings.rounds?`Endwertung`:l?`Nächstes Minispiel`:`Weiter auf dem Brett`,p=$(`p`,`g-card-ready g-card-timer`),m=$(`div`,`g-timer-bar`),g=$(`i`,``);g.style.animationDuration=`${u}ms`,m.append(g);let _=()=>{let e=Math.ceil((d-Date.now())/1e3);p.textContent=e>0?`${f} in ${e} s`:`${f} startet …`};_(),ke.push(setInterval(_,250)),s.append(p,m),C.replaceChildren(s)}let Le=``,Re=0,ze=[];function Be(){let t=j;if(!t||t.phase!==`final`){w.hidden=!0,Le=``,Re=0,ze.forEach(clearTimeout),ze=[];return}let n=t.awards??[];if(!Le){Re=+!n.length,n.length||Z(`win`);let e=3400;n.forEach((t,n)=>{ze.push(setTimeout(()=>!F&&Z(`roll`),300+n*e)),ze.push(setTimeout(()=>{F||(Re=n+1,Z(`core`),Le=`step`,Be())},300+n*e+1900))}),n.length&&ze.push(setTimeout(()=>{F||(Re=n.length+1,Z(`win`),Le=`step`,Be())},300+n.length*e+600))}let r=`${t.seq}:${k?.role}:${Re}`;if(Le===r)return;Le=r;let i=Re>n.length,a=$(`div`,`g-card`);if(n.length){a.append($(`p`,`g-card-kind`,`Bonus-Cores`));let e=$(`ol`,`g-results g-awards`);n.forEach((t,n)=>{let r=Re>n,i=$(`li`,`g-result g-award${r?` open`:``}`);i.append($(`span`,`g-r-name`,o[t.id].name),$(`span`,`g-r-score`,r?o[t.id].text:`Trommelwirbel …`),$(`span`,`g-r-bits`,r?`${t.winners.map(R).join(` und `)} +1 Core`:`?`)),e.append(i)}),a.append(e)}if(i){a.append($(`p`,`g-card-kind`,`Endstand`),$(`h2`,`g-card-title`,`${R(t.ranking[0])} gewinnt den Heist`));let n=$(`ol`,`g-results`);t.ranking.forEach((e,r)=>{let i=t.players[e],a=$(`li`,`g-result`);a.style.setProperty(`--seat`,eh(z(e))),r===0&&a.classList.add(`winner`),a.append($(`span`,`g-r-name`,`${r+1}. ${i.name}`),$(`span`,`g-r-score`,j?.settings.mode===`minis`?``:`${i.cores} Cores`),$(`span`,`g-r-bits`,j?.settings.mode===`minis`?`${i.bits} Punkte`:`${i.bits} Bits`)),n.append(a)}),a.append(n),k?.role===`host`?a.append(Qm(`btn primary big`,`Zurück in die Lobby`,()=>e.endGame())):a.append($(`p`,`g-card-ready`,`Der Host startet die nächste Partie.`)),a.append(Qm(`btn small`,`Raum verlassen`,()=>e.leave()))}else a.append($(`p`,`g-card-ready`,`Gleich steht fest, wer gewinnt …`));w.replaceChildren(a),w.hidden=!1}let Ve=e.auto?setInterval(()=>{let t=j,n=L();if(!t||P||M.length||!t.players[n])return;if(t.phase===`mini`&&t.mini?.stage===`intro`&&!t.mini.ready.includes(n))return e.act({t:`ready`});let r=t.turn;if(t.phase!==`board`||!r||r.player!==n)return;let i=t.players[n],a=t.order.find(e=>e!==n);if(r.stage===`pre`){if(!r.usedItem&&i.items.length&&Math.random()<.6)return e.act({t:`item`,item:i.items[0],target:a,n:2});if(!r.usedAbility&&i.cooldown===0&&Math.random()<.5)return e.act({t:`ability`,target:be(t,n,`near`)[0]??a,dir:1});e.act({t:`roll`})}else r.stage===`decide`&&e.act({t:`decide`,choice:+(Math.random()<.6)})},450):null;return{update(e){k=e;let t=e.state?.game,n=e.role===`guest`&&!e.hostOnline;if(p.hidden=!n,p.textContent=n?`Der Host ist nicht erreichbar. Sobald die Verbindung steht, geht es weiter.`:``,!t)return;let r=th(t);A=r,ee<0||r.seq>ee+1||r.seq<ee||M.length>6?(ee=r.seq,M.length=0,P?M.push({events:[],state:r}):(ve(r),ye(),r.phase===`board`&&r.round===1&&r.order.every(e=>r.players[e].pos===0&&r.players[e].cores===0)&&r.settings.mode!==`minis`&&!he&&(he=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>setTimeout(()=>!F&&void ge(r),600)))))):r.seq===ee+1?(ee=r.seq,M.push({events:r.events,state:r}),V()):!P&&!M.length&&(ve(r),ye())},fx(e){e.k===`emote`&&typeof e.d==`string`?fe(e.from,e.d.slice(0,8),`talk`):e.k===`mp`&&typeof e.d==`number`?(je[e.from]=e.d,Fe()):e.k===`mm`&&e.from!==L()&&Ae.forEach(t=>t(e.from,e.d))},dispose(){F=!0,Ve&&clearInterval(Ve),ue&&clearTimeout(ue),ze.forEach(clearTimeout),Pe(),O?.dispose(),D.dispose(),t.replaceChildren()}}}var ih=e=>document.getElementById(e),ah=(e,t=``,n=``)=>{let r=document.createElement(e);return t&&(r.className=t),n&&(r.textContent=n),r},oh={get(e,t){try{let n=e.getItem(t);return n?JSON.parse(n):null}catch{return null}},set(e,t,n){try{e.setItem(t,JSON.stringify(n))}catch{}},remove(e,t){try{e.removeItem(t)}catch{}}},sh=e=>{try{return e()}catch{let e=new Map;return{getItem:t=>e.get(t)??null,setItem:(t,n)=>void e.set(t,n),removeItem:t=>void e.delete(t),clear:()=>e.clear(),key:()=>null,length:0}}},ch=`cch.name`,lh=`cch.session`,uh=e=>`cch.host.${e}`,dh={full:`Der Raum ist voll. Es passen höchstens 6 Spieler hinein.`,"host-conflict":`Unter diesem Code läuft schon ein anderer Raum. Erstelle einen neuen Raum.`,net:`Die Verbindung konnte nicht aufgebaut werden.`,version:`Ihr nutzt unterschiedliche Versionen des Spiels. Ladet beide die Seite neu, dann passt es wieder.`},fh=e=>`${(e/1e3).toFixed(1).replace(`.`,`,`)} s`,ph=e=>{let t=Math.max(0,Math.floor(e/1e3));return`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`};function mh(){let e=sh(()=>window.localStorage),r=sh(()=>window.sessionStorage),i=new URLSearchParams(location.search),a=i.get(`relay`)??void 0,o=i.get(`gast`)===`1`,s=i.get(`turn`)!==`0`,u=i.get(`nurrelay`)===`1`,d=i.get(`auto`)===`1`,f=ih(`start`),h=ih(`lobby`),_=ih(`game`),v=ih(`name`),y=ih(`code`),b=ih(`start-message`),x=ih(`roll`),S=ih(`invite`),C=ih(`roll-line`),w=ih(`banner`),T=null,E=null,D=null,O=null,k=!1,A=0,j=null,ee=null,M=!1,N=!1,P=0,F=0,te=null,ne=``;document.addEventListener(`pointerdown`,Yf,{passive:!0});let re=0;async function ie(){if(!(location.protocol!==`https:`||Date.now()-re<2e4)){re=Date.now();try{let e=await fetch(`./version.json?t=${Date.now()}`,{cache:`no-store`});if(!e.ok)return;let{v:t}=await e.json();if(!t||t===`2026-11-19T21:09:12.359Z`||D||oh.get(r,`cch.updated`)===t)return;oh.set(r,`cch.updated`,t),location.reload()}catch{}}}ie(),setInterval(()=>void ie(),18e4);let I=n(i.get(`raum`)??``),ae=t=>{h.hidden=!0,_.hidden=!0,f.hidden=!1,b.hidden=!t,b.textContent=t??``;let n=!!I;f.classList.toggle(`invited`,n),ih(`invite-line`).hidden=!n,ih(`invite-code`).textContent=I??``,ih(`create-block`).hidden=n,ih(`own-room`).hidden=!n,y.closest(`label`).hidden=n,ih(`join`).classList.toggle(`primary`,n),n&&(y.value=I),v.value=oh.get(e,ch)??``,document.title=`Corporate Cyber Heist`},L=()=>{let t=v.value.trim();return t?(oh.set(e,ch,t),t):(b.hidden=!1,b.textContent=`Gib einen Namen ein, damit die anderen dich erkennen.`,v.focus(),null)};ih(`create`).addEventListener(`click`,()=>{let e=L();e&&B({code:t(),role:`host`,name:e})}),ih(`start-form`).addEventListener(`submit`,e=>{e.preventDefault();let t=L();if(!t)return;let r=I??n(y.value);r?B({code:r,role:`guest`,name:t}):(b.hidden=!1,b.textContent=`Der Raumcode hat fünf Zeichen, zum Beispiel K7M2P.`,y.focus())}),ih(`own-room`).addEventListener(`click`,()=>{I=null,history.replaceState(null,``,R(null)),ae()});let R=e=>{let t=new URL(location.href);return e?t.searchParams.set(`raum`,e):t.searchParams.delete(`raum`),t.pathname+t.search},z=e=>{let t=new URL(location.origin+location.pathname);return t.searchParams.set(`raum`,e),a&&t.searchParams.set(`relay`,a),s||t.searchParams.set(`turn`,`0`),u&&t.searchParams.set(`nurrelay`,`1`),t.toString()};async function B(e,t=null){oh.set(r,lh,e),history.replaceState(null,``,R(e.code)),document.title=`Raum ${e.code} – Corporate Cyber Heist`,t||(f.hidden=!0,_.hidden=!0,h.hidden=!1,C.textContent=``,O=null),ih(`room-code`).textContent=e.code,ih(`fact-join-label`).textContent=e.role===`host`?`Erster Mitspieler nach`:`Verbunden nach`,k=!1,A=0,ne=``,N=!!t;let n=++P;w.hidden=!1,w.classList.remove(`bad`),w.textContent=t?`Verbindung wird wiederhergestellt …`:`Verbindung wird aufgebaut …`,x.disabled=!0;let i=s?await Xe():void 0;if(n!==P)return;let c=e.role===`host`?t?.state??oh.get(r,uh(e.code)):t?.state??null,l=new qe({transport:it({roomCode:e.code,relayUrl:a,ephemeralIdentity:o,turnConfig:i,relayOnly:u}),role:e.role,name:e.name,code:e.code,restore:c,hostLostAt:e.role===`guest`?t?.hostLostAt??null:null,persist:(t,n)=>{O=t,n===`host`&&oh.set(r,uh(e.code),t),n!==e.role&&(e={...e,role:n},oh.set(r,lh,e))}});T=l,l.subscribe(e=>{T===l&&(e.phase===`closed`?ce(e.notice?dh[e.notice.kind]:void 0):fe(e))}),l.onFx(e=>T===l&&D?.fx(e)),l.onRoll(e=>{if(T!==l||D)return;let t=le(l.getView(),e.by);k=!0,A=e.nr,C.textContent=`${t} würfelt …`,fe(l.getView());let n=!1,r=()=>{n||T!==l||(n=!0,k=!1,ue(t,e.value),fe(l.getView()))};E?.ok&&E.roll(e.value).then(r),setTimeout(()=>{n||(E?.show(e.value),r())},E?.ok?1800:500)}),fe(l.getView()),_e(),j??=setInterval(()=>{if(!T)return;let e=T.getView();ge(e),e.stale&&oe()},1e3);try{await l.start()}catch(e){console.error(e),T===l&&ce(`Die Verbindung konnte nicht aufgebaut werden. Prüfe dein Internet und versuch es noch einmal.`)}}async function oe(){let e=oh.get(r,lh),t=T;if(!t||!e||M||Date.now()-F<8e3)return;M=!0,F=Date.now();let n=t.getView(),i=n.state??O,a=n.hostLostAt??Date.now();T=null;try{await Promise.race([t.leave(),new Promise(e=>setTimeout(e,3e3))]),await B(e,{state:i,hostLostAt:a})}finally{M=!1}}async function se(e){let t=T;t&&!M&&(await new Promise(e=>setTimeout(e,1200)),T===t&&(t.getView().phase===`joined`&&t.othersOnline()===0?e>=1e4&&oe():!await t.probe()&&T===t&&oe()))}function ce(e){let t=T;T=null,P++,oh.remove(r,lh),t&&(oh.remove(r,uh(t.getView().code)),t.getView().phase!==`closed`&&t.leave()),D?.dispose(),D=null,O=null,j&&clearInterval(j),j=null,ee?.release().catch(()=>{}),ee=null,I=null,history.replaceState(null,``,R(null)),ae(e)}let le=(e,t)=>e.state?.players.find(e=>e.id===t)?.name??`Jemand`,ue=(e,t)=>{C.replaceChildren(`${e} hat eine `,Object.assign(document.createElement(`strong`),{textContent:String(t)}),` gewürfelt.`),E?.ok||(ih(`dice-fallback`).textContent=String(t))};function de(e){if(e.notice?.kind===`version`&&Date.now()-(e.notice.at??0)<12e4)return ie(),{text:dh.version,bad:!0};let t=e.notice?.kind===`net`&&Date.now()-(e.notice.at??0)<2e4;return t&&e.notice.code===`peer-connect-failed`?{text:e.notice.turnConfigured?`Zu einem Mitspieler kommt keine Verbindung zustande, auch nicht über das Relay.`:`Zu einem Mitspieler kommt keine direkte Verbindung zustande. In diesem Netz wird ein Relay gebraucht.`,bad:!0}:t?{text:`Die Vermittlung ist nicht erreichbar. Prüfe deine Internetverbindung.`,bad:!0}:e.phase===`connecting`?{text:N?`Verbindung wird wiederhergestellt …`:`Verbindung wird aufgebaut …`}:e.role===`guest`&&e.phase===`searching`?N&&!e.noHostHint?{text:`Verbindung wird wiederhergestellt …`}:e.noHostHint?{text:`Unter dem Code ${e.code} ist gerade kein Raum offen. Prüfe den Code oder frag nach, ob der Raum noch läuft.`,bad:!0}:{text:`Raum ${e.code} wird gesucht …`}:e.role===`guest`&&!e.hostOnline?{text:`Der Host hat die Verbindung verloren. Kommt er nicht zurück, übernimmt gleich der nächste Spieler.`,bad:!0}:e.role===`host`&&e.state&&e.state.players.length===1?{text:`Schick den Einladungslink an deine Mitspieler. Wer beitritt, erscheint in der Liste.`}:null}function fe(e){if(e.phase===`joined`&&e.state?.game)D||=(E?.dispose(),E=null,h.hidden=!0,f.hidden=!0,_.hidden=!1,rh({root:_,act:e=>T?.act(e),sendFx:(e,t)=>T?.sendFx(e,t),endGame:()=>T?.endGame(),leave:()=>ce(),auto:d})),D.update(e);else{if(D){if(e.phase!==`joined`&&O?.game)return D.update({...e,state:O,hostOnline:!1});D.dispose(),D=null,ne=``}_.hidden=!0,f.hidden=!0,h.hidden=!1,pe(e)}}function pe(e){let t=ih(`dice`);E??=Uf(t),t.hidden=!E.ok,ih(`dice-fallback`).hidden=E.ok;let n=de(e);w.hidden=!n,w.textContent=n?.text??``,w.classList.toggle(`bad`,!!n?.bad);let r=e.phase===`joined`&&e.hostOnline;x.disabled=!r||k;let i=e.phase===`joined`?e.state?.roll:null;i&&!k&&i.nr!==A&&(A=i.nr,E?.show(i.value),ue(le(e,i.by),i.value)),!e.state?.roll&&!k&&(C.textContent=r?`Probewürfeln, solange ihr wartet. Jeder darf.`:``);let a=e.phase===`joined`?e.state:null,o=ih(`players`),s=a?.players??[],l=s.map((t,n)=>{let r=ah(`li`,`player${t.online?``:` offline`}`);r.style.setProperty(`--seat`,`var(--seat-${n+1})`);let i=ah(`span`,`who`),o=[t.id===a.hostId?`Host`:``,t.id===e.selfId?`du`:``,t.char?c[t.char].name:`noch kein Charakter`].filter(Boolean).join(`, `);i.append(ah(`span`,`who-name`,t.name),ah(`span`,`who-tags`,o));let s=ah(`span`,`net`),l=e.pings[t.id],u=``,d=``;if(t.id===e.selfId)d=`dieses Gerät`;else if(!t.online)u=`getrennt`;else if(l==null)d=`wird gemessen`;else{u=`${l} ms`;let n=e.links[t.id];d=n===`relay`?`über Relay`:n===`direct`?`direkt`:``,s.classList.add(l<90?`good`:l<220?`mid`:`slow`)}return s.append(ah(`span`,`net-ms`,u),ah(`span`,`net-kind`,d)),r.append(ah(`span`,`seat`,String(n+1)),i,s),r});a&&s.length<2&&l.push(ah(`li`,`empty-seat`,`Noch niemand sonst im Raum.`)),o.replaceChildren(...l);let u=JSON.stringify([a?.players.map(e=>[e.id,e.char,e.online]),a?.settings,e.role,e.selfId,r]);u!==ne&&(ne=u,me(e,a,r),he(e,a,r)),ge(e)}function me(e,t,n){let r=ih(`chars`),i=t?.players.find(t=>t.id===e.selfId)?.char??null;r.replaceChildren(...l.map(r=>{let a=c[r],o=t?.players.find(e=>e.char===r),s=!!o&&o.id!==e.selfId,l=ah(`button`,`char${i===r?` picked`:``}`);return l.type=`button`,l.disabled=!n||s,l.style.setProperty(`--char`,`#${a.color.toString(16).padStart(6,`0`)}`),l.append(ah(`span`,`char-name`,a.name),ah(`span`,`char-role`,s?`vergeben an ${o.name}`:a.role)),l.addEventListener(`click`,()=>T?.pickChar(i===r?null:r)),l})),ih(`char-info`).textContent=i?`${c[i].ability}: ${c[i].text} Danach ${c[i].cooldown} Runden Pause.`:`Ohne Auswahl bekommst du beim Start einen freien Charakter.`}function he(e,t,n){let r=ih(`setup`);if(r.replaceChildren(),!t)return;let i=t.settings.minis.length>0,a=t.settings.mode===`minis`;if(e.role!==`host`){r.append(ah(`p`,`setup-text`,a?`Nur Minispiele, ${t.settings.rounds} Stück. Der Host startet.`:`${t.settings.rounds} Runden, Minispiele ${i?`an`:`aus`}. Der Host startet die Partie.`));return}let o=ah(`div`,`segments`);o.setAttribute(`role`,`group`),o.setAttribute(`aria-label`,`Rundenzahl`);for(let e of g){let n=ah(`button`,`segment${t.settings.rounds===e?` on`:``}`,`${e} Runden`);n.type=`button`,n.addEventListener(`click`,()=>T?.setSettings({rounds:e})),o.append(n)}let s=ah(`button`,`segment wide${i?` on`:``}`,i?`Minispiele: an`:`Minispiele: aus`);s.type=`button`,s.addEventListener(`click`,()=>T?.setSettings({minis:i?[]:m.map(e=>e.id)}));let c=t.settings.bonus!==!1,l=ah(`button`,`segment wide${c?` on`:``}`,c?`Bonus-Cores am Ende: an`:`Bonus-Cores am Ende: aus`);l.type=`button`,l.title=`Zwei ausgeloste Auszeichnungen bringen in der Endwertung je einen Data Core.`,l.addEventListener(`click`,()=>T?.setSettings({bonus:!c}));let u=t.players.filter(e=>e.online).length,d=ah(`button`,`btn primary big`,`Partie starten`);d.id=`start-game`,d.type=`button`,d.disabled=!n,d.addEventListener(`click`,()=>{d.disabled=!0,T?.startGame()});let f=ah(`div`,`segments`);f.setAttribute(`role`,`group`),f.setAttribute(`aria-label`,`Spielart`);for(let[e,t]of[[`board`,`Brettspiel`],[`minis`,`Nur Minispiele`]]){let n=ah(`button`,`segment${a===(e===`minis`)?` on`:``}`,t);n.type=`button`,n.addEventListener(`click`,()=>T?.setSettings(e===`minis`?{mode:e,minis:m.map(e=>e.id)}:{mode:e})),f.append(n)}if(f.style.gridTemplateColumns=`1fr 1fr`,a){o.querySelectorAll(`button`).forEach(e=>e.textContent=e.textContent.replace(`Runden`,`Spiele`)),d.textContent=`Minispiele starten`;let e=new Set(t.settings.minis),n=()=>T?.setSettings({minis:m.filter(t=>e.has(t.id)).map(e=>e.id)}),i=ah(`div`,`mini-pick`);for(let[t,r]of p){let a=m.filter(e=>e.group===t),o=a.every(t=>e.has(t.id)),s=ah(`button`,`mini-group${o?` on`:``}`,`${r} (${a.filter(t=>e.has(t.id)).length}/${a.length})`);s.type=`button`,s.addEventListener(`click`,()=>{a.forEach(t=>o?e.delete(t.id):e.add(t.id)),n()});let c=ah(`div`,`mini-chips`);for(let t of a){let r=ah(`button`,`mini-chip${e.has(t.id)?` on`:``}`,t.name);r.type=`button`,r.setAttribute(`aria-pressed`,String(e.has(t.id))),r.addEventListener(`click`,()=>{e.has(t.id)?e.delete(t.id):e.add(t.id),n()}),c.append(r)}i.append(s,c)}m.filter(n=>e.has(n.id)&&n.minPlayers<=t.players.length).length||(d.disabled=!0,d.textContent=`Wähle mindestens ein Minispiel`),r.append(f,o,i,d)}else r.append(f,o,s,l,d);u<2&&r.append(ah(`p`,`setup-text`,`Allein kannst du das Brett ausprobieren. Richtig los geht es ab zwei Spielern.`))}function ge(e){if(D)return;ih(`fact-join`).textContent=e.joinMs==null?`–`:fh(e.joinMs),ih(`fact-stable`).textContent=e.stableSince==null?`–`:ph(Date.now()-e.stableSince),ih(`fact-drops`).textContent=String(e.drops);let t=E?.ok?E.fps():0;ih(`fact-fps`).textContent=t?String(t):`–`}x.addEventListener(`click`,()=>T?.requestRoll()),ih(`leave`).addEventListener(`click`,()=>ce()),S.addEventListener(`click`,async()=>{if(!T)return;let e=T.getView().code,t=z(e),n=e=>{S.textContent=e,setTimeout(()=>S.textContent=`Einladen`,2200)};try{if(navigator.share){await navigator.share({title:`Corporate Cyber Heist`,text:`Komm in meinen Raum ${e}:`,url:t});return}await navigator.clipboard.writeText(t),n(`Link kopiert`)}catch(e){if(e?.name===`AbortError`)return;w.hidden=!1,w.classList.remove(`bad`),w.textContent=t}});async function _e(){try{let e=navigator.wakeLock;e&&document.visibilityState===`visible`&&T&&(ee=await e.request(`screen`))}catch{}}document.addEventListener(`visibilitychange`,()=>{if(document.visibilityState===`hidden`){te=Date.now();return}let e=te?Date.now()-te:0;te=null,ie(),T&&(_e(),e>=3e3&&se(e))}),window.addEventListener(`online`,()=>void se(0)),window.addEventListener(`pageshow`,e=>{e.persisted&&se(1e4)}),window.__cch={rejoin:()=>(F=0,oe()),setMinis:e=>T?.setSettings({minis:e}),order:()=>T?.getView().state?.game?.order??[]};let V=oh.get(r,lh);V&&n(V.code)&&(!I||I===V.code)?B(V):ae()}function hh(e){let t=h[e]??m[0],n=document.getElementById(`game`);n.hidden=!1;let r=document.createElement(`div`);r.className=`g-mini`;let i=document.createElement(`div`);i.className=`g-mini-head`;let a=document.createElement(`span`);a.className=`g-mini-clock`;let o=document.createElement(`div`);o.className=`g-mini-stage`,i.append(a),r.append(i,o),n.replaceChildren(r);let s=null,c=null,l=()=>{s?.destroy(),c&&clearInterval(c),o.replaceChildren();let e=Date.now(),n=null,r=e=>{n===null&&(n=e,a.textContent=`${t.name}: ${Xm(t.id,e)}. Tippe hier für eine neue Runde.`)};s=Jm[t.id]({el:o,seed:Math.floor(Math.random()*2**31),durationMs:t.durationMs,selfId:`ich`,players:[{id:`ich`,name:`Du`,color:`#ff3d8b`},{id:`a`,name:`Lynni`,color:`#2fe3ff`},{id:`b`,name:`Jonas`,color:`#ffd23f`}],solo:t.kind===`solo`?new URLSearchParams(location.search).get(`rolle`)===`agent`?`a`:`ich`:null,teams:t.kind===`team`?[[`ich`,`a`],[`b`]]:null,bots:[`a`,`b`],report:()=>{},finish:r,send:()=>{},onMessage:()=>{}}),c=setInterval(()=>{let i=Math.max(0,t.durationMs-(Date.now()-e));n===null&&(a.textContent=t.endless?`${t.name} (Übung)`:`${t.name} (Übung): noch ${Math.ceil(i/1e3)} s`),i<=0&&n===null&&r(s?.score()??0)},200)};a.addEventListener(`click`,l),l()}var gh=new URLSearchParams(location.search).get(`mini`);gh?hh(gh):mh(),`serviceWorker`in navigator&&location.protocol===`https:`&&window.addEventListener(`load`,()=>void navigator.serviceWorker.register(`./sw.js`).catch(()=>{}));