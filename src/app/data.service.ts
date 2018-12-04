import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  getGolemNews() {
    console.log("Start Request")
    return [
      {
          "title": "Spielbalance: Updates für Red Dead Online und Battlefield 5 angekündigt",
          "description": "Kleine Probleme, die bei Spielern dennoch für großen Frust sorgen, sollen in den nächsten Tagen im Multiplayermodus von Red Dead Redemption 2 und in Battlefield 5 angegangen werden. Es geht unter anderem um bessere Belohnungen in der Westernwelt. ",
          "link": "https://www.golem.de/news/spielbalance-updates-fuer-red-dead-online-und-battlefield-5-angekuendigt-1812-138053-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138053-180796-180793_rc.jpg"
      },
      {
          "title": "Anaheim: Microsoft arbeitet an Browser mit Chromium-Engine",
          "description": "In Edge sieht Microsoft keine Zukunft mehr. Zumindest die Rendering Engine wird es bald nicht mehr geben. Denn Microsoft soll an einem neuen Browser auf Chromium-Basis arbeiten. ",
          "link": "https://www.golem.de/news/anaheim-microsoft-arbeitet-an-browser-mit-chromium-engine-1812-138052-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138052-180792-180789_rc.jpg"
      },
      {
          "title": "Pixel 3: Google patcht Probleme mit Speichermanagement",
          "description": "Mit dem monatlichen Update für Dezember 2018 bringt Google nicht nur die Sicherheitspatches auf den aktuellen Stand, sondern beseitigt auch ein nerviges Problem des Pixel 3: Das restriktive Speichermanagement wird mit der Aktualisierung gelockert. ",
          "link": "https://www.golem.de/news/pixel-3-google-patcht-probleme-mit-speichermanagement-1812-138051-rss.html",
          "pictureUrl": "https://www.golem.de/1811/137532-178330-178327_rc.jpg"
      },
      {
          "title": "Erstes iPhone mit 5G: Apple will abwarten",
          "description": "In besonders teuren Smartphones steckt nicht immer aktuelle Technik. Diese Erfahrung werden iPhone-Käufer demnächst machen. Apple will erst einmal abwarten, bis es ein erstes iPhone mit 5G-Technik auf den Markt bringt. ",
          "link": "https://www.golem.de/news/erstes-iphone-mit-5g-apple-will-abwarten-1812-138050-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138050-180784-180781_rc.jpg"
      },
      {
          "title": "Yuneec H520: 3D-Modell aus der Drohne",
          "description": "Multikopter werden zunehmend auch kommerziell verwendet. Vor allem machen die Drohnen Luftbilder und Inspektionsflüge und vermessen. Wir haben in der Praxis getestet, wie gut das mit dem Yuneec H520 funktioniert. Von Dirk Koller ",
          "link": "https://www.golem.de/news/yuneec-h520-3d-modell-aus-der-drohne-1812-137706-rss.html",
          "pictureUrl": "https://www.golem.de/1812/137706-179293-179290_rc.jpg"
      },
      {
          "title": "Hatch Premium: Spiele-Streaming kommt auf Android-TV-Geräte",
          "description": "Der Spiele-Streaming-Dienst Hatch erweitert sein Angebot: Künftig können auch Nutzer von Android-TV-Geräten Games ohne Download spielen, indem sie einfach über die Cloud gestreamt werden. Möglich wird das aber nur im Rahmen eines neuen Bezahl-Abos. ",
          "link": "https://www.golem.de/news/hatch-premium-spiele-streaming-kommt-auf-android-tv-geraete-1812-138037-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138037-180754-180751_rc.jpg"
      },
      {
          "title": "5G: Telekom hält Spionagevorwürfe gegen Huawei für unbegründet",
          "description": "Der Ausruf der USA an die Verbündeten, Huawei auszuschließen, ist für die Telekom sachlich unbegründet. Zudem können die US-Geheimdienste Deutschlands Regierung keinerlei Belege vorlegen. ",
          "link": "https://www.golem.de/news/5g-telekom-haelt-spionagevorwuerfe-gegen-huawei-fuer-unbegruendet-1812-138049-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138049-180780-180777_rc.jpg"
      },
      {
          "title": "Apple: Macbook Air 2018 mit verschwommenen Webcam-Aufnahmen",
          "description": "Apple hat ein Problem mit dem im Oktober 2018 vorgestellten Macbook Air 2018. Webcam-Aufnahmen sind teilweise verschwommen und entsprechen nicht dem Qualitätsverständnis der Nutzer. Ob das ein Soft- oder ein Hardwareproblem ist, ist noch nicht bekannt. ",
          "link": "https://www.golem.de/news/apple-macbook-air-2018-mit-verschwommenen-webcam-aufnahmen-1812-138046-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138046-180762-180759_rc.jpg"
      },
      {
          "title": "Arlo Ultra: Überwachungskamera mit 4K-HDR, Audio und Scheinwerfer",
          "description": "Arlo hat eine vernetzte Überwachungskamera vorgestellt, mit der Nutzer ihr Zuhause in 4K mit HDR aufnehmen können. Die Arlo Ultra ist mit Scheinwerfer, Lautsprecher und Mikrofon ausgerüstet und wird per Akku mit Strom versorgt. ",
          "link": "https://www.golem.de/news/arlo-ultra-ueberwachungskamera-mit-4k-hdr-audio-und-scheinwerfer-1812-138045-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138045-180758-180755_rc.jpg"
      },
      {
          "title": "Transkription: Skype schreibt künftig Gespräche mit",
          "description": "Skype bietet künftig eine Transkription von Gesprächen an, damit gehörlose oder schwerhörige Menschen Audio- und Videokonferenzen folgen können. 2019 sollen auch bei Powerpoint Echtzeituntertitel eingeführt werden, die bei der Präsentation eingeblendet werden. ",
          "link": "https://www.golem.de/news/transkription-skype-schreibt-kuenftig-gespraeche-mit-1812-138047-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138047-180766-180763_rc.jpg"
      },
      {
          "title": "E-Tankstellen: Deutsche Telekom plant bundeseinheitlichen Tarif für E-Autos",
          "description": "Die Telekom will ab Mitte Dezember ein Roaming-Ladeangebot für Elektroautos unter dem Namen Telekom Ladestrom anbieten. Das Besondere ist ein einheitlicher Minutentarif, der über die Telekom abgerechnet wird. Er gilt nicht nur für die eigenen Ladesäulen, sondern auch für die von Drittanbietern. ",
          "link": "https://www.golem.de/news/e-tankstellen-deutsche-telekom-plant-bundeseinheitlichen-tarif-fuer-e-autos-1812-138048-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138048-180770-180767_rc.jpg"
      },
      {
          "title": "Digitalgipfel: Telekom, Huawei und Nokia wollen Laternen für 5G nutzen",
          "description": "Auf dem Digitalgipfel der Bundesregierung entwerfen Telekom, Huawei und Nokia zusammen Pläne, um 5G mit seinen vielen Antennen zu verwirklichen. An U-Bahn-Zugängen und Straßenlaternen sollen schnell und einfach Antennenstandorte entstehen. ",
          "link": "https://www.golem.de/news/digitalgipfel-telekom-huawei-und-nokia-wollen-strassenlaternen-fuer-5g-1812-138044-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138044-180750-180747_rc.jpg"
      },
      {
          "title": "Überwachung: Kamerasystem soll selbstständig Verbrechen erkennen",
          "description": "Am Bahnhof und in der Innenstadt von Mannheim sollen 72 Kameras selbstständig kriminelles Verhalten erkennen und die Polizei alarmieren. Innenministerium und Stadt wollen mit dem Pilotprojekt herausfinden, ob sich so die Sicherheit erhöhen lässt. ",
          "link": "https://www.golem.de/news/ueberwachung-kamerasystem-soll-selbststaendig-verbrechen-erkennen-1812-138043-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138043-180744-180740_rc.jpg"
      },
      {
          "title": "Regulierung: Swisscom muss Glasfaser nicht öffnen",
          "description": "Der FTTH-Betreiber Swisscom will seine Netze nicht reguliert öffnen müssen und hat sich damit bei Nationalrat und Ständerat durchgesetzt. Das fordert in Deutschland auch die Telekom und ist damit nicht allein. ",
          "link": "https://www.golem.de/news/regulierung-swisscom-muss-glasfaser-nicht-oeffnen-1812-138042-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138042-180743-180737_rc.jpg"
      },
      {
          "title": "E-Evidence: EU-Staaten fordern hohe Geldstrafen für Onlinedienste",
          "description": "Die EU-Staaten schlagen vor, Onlinedienste mit bis zu zwei Prozent ihres Jahresumsatzes zu bestrafen, wenn sie elektronische Beweismittel nicht rechtzeitig herausgeben. Ein in der E-Evidenz-Verordnung bisher enthaltenes Beschwerderecht soll wegfallen. ",
          "link": "https://www.golem.de/news/e-evidence-eu-staaten-fordern-hohe-geldstrafen-fuer-onlinedienste-1812-138040-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138040-180730-180727_rc.jpg"
      },
      {
          "title": "Quellcode: Al Lowe verkauft Disketten mit Larry 1 auf Ebay",
          "description": "Inzwischen liegen die Gebote bei über 10.000 US-Dollar: Spieldesinger Al Lowe verkauft auf Ebay die Disketten mit dem Quellcode seiner frühen Werke - darunter das erste Leisure Suit Larry. ",
          "link": "https://www.golem.de/news/quellcode-al-lowe-verkauft-disketten-mit-larry-1-auf-ebay-1812-138041-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138041-180734-180731_rc.jpg"
      },
      {
          "title": "Schulen ans Netz 2.0: Länder wollen geplanten Digitalpakt torpedieren",
          "description": "Fünf schwarze und grüne Bundesländer stemmen sich gegen die Initiative des Bundestags, wonach per Grundgesetzänderung Milliarden in Computer und schnelles Internet an Schulen fließen sollen. Es geht vor allem um die Beteiligung an den Kosten und die Lehrpläne. Von Stefan Krempl ",
          "link": "https://www.golem.de/news/schulen-ans-netz-2-0-laender-wollen-geplanten-digitalpakt-torpedieren-1812-138038-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138038-180725-180722_rc.jpg"
      },
      {
          "title": "Nvidia Titan RTX: Die schnellste Grafikkarte ist ein T-Rex",
          "description": "Mit der Titan RTX, intern als T-Rex bezeichnet, veröffentlicht Nvidia einen Vollausbau des TU102-Chips mit Turing-Architektur. Die Grafikkarte richtet sich mehr an Entwickler statt an gut betuchte Spieler, sie ist aber weniger teuer als die bisherige Titan V mit Volta-GPU. ",
          "link": "https://www.golem.de/news/nvidia-titan-rtx-die-schnellste-grafikkarte-ist-ein-t-rex-1812-138033-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138033-180717-180716_rc.jpg"
      },
      {
          "title": "Eu-Cropis: DLR züchtet Tomaten im Weltall",
          "description": "Bekommen künftige Kolonisten auf dem Mars und dem Mond frische Tomaten? Das DLR will den Anbau von Nutzpflanzen unter der Schwerkraft testen, wie sie auf den beiden Himmelskörpern herrscht, auf denen Menschen in Zukunft landen sollen. Eine wiederverwendete Rakete von SpaceX wird den Satelliten ins All bringen. ",
          "link": "https://www.golem.de/news/eu-cropis-dlr-zuechtet-tomaten-im-weltall-1812-138036-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138036-180721-180718_rc.jpg"
      },
      {
          "title": "Key-Reseller: Das umstrittene Geschäft mit den günstigen Gaming-Keys",
          "description": "Computerspiele zum Superpreis - ist das legal? Die Geschäftspraktiken von Key-Resellern wie G2A, Gamesrocket und Kinguin waren jahrelang umstritten, mittlerweile scheint die Zeit der Skandale vorbei zu sein. Doch Entwickler und Publisher sind weiterhin kritisch. Von Benedikt Plass-Fleßenkämper und Sönke Siemens ",
          "link": "https://www.golem.de/news/key-reseller-das-umstrittene-geschaeft-mit-den-guenstigen-gaming-keys-1812-137919-rss.html",
          "pictureUrl": "https://www.golem.de/1812/137919-180272-180271_rc.jpg"
      },
      {
          "title": "Mobile Games: Wooga für offenbar mehr als 100 Millionen US-Dollar gekauft",
          "description": "Das auf Wimmelbildspiele und storybasierte Casual Games spezialisierte Berliner Entwicklerstudio Wooga hat einen neuen Eigner: Ab sofort gehört es zum israelischen Mobile-Casino-Produzenten Playtika. ",
          "link": "https://www.golem.de/news/mobile-games-wooga-fuer-offenbar-mehr-100-millionen-us-dollar-gekauft-1812-138035-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138035-180712-180709_rc.jpg"
      },
      {
          "title": "Cimon: Die ISS bekommt einen sensiblen Kommunikationsroboter",
          "description": "Alexander Gerst ist gemein zu einem Roboter: Der deutsche Astronaut hat auf der ISS einen vom DLR entwickelten Roboter in Betrieb genommen, der als Assistent für die Besatzung gedacht ist. Der mit KI ausgestattete Roboter hat aber seinen eigenen Willen - und ist offensichtlich sehr empfindsam. ",
          "link": "https://www.golem.de/news/cimon-die-iss-bekommt-einen-sensiblen-kommunikationsroboter-1812-138034-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138034-180708-180705_rc.jpg"
      },
      {
          "title": "Glacier Falls & X570: AMD und Intel arbeiten an neuen Chipsätzen",
          "description": "Für 2019 erscheinende Prozessoren von AMD und Intel entwickeln beide Hersteller an passenden Controller Hubs: Der Glacier Falls PCH ist für die Cascade Lake X gedacht, wohingegen der X570 ein Teil der AM4-Plattform für die Ryzen 3000 ",
          "link": "https://www.golem.de/news/glacier-falls-x570-amd-und-intel-arbeiten-an-neuen-chipsaetzen-1812-138032-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138032-180704-180703_rc.jpg"
      },
      {
          "title": "Unitymedia: Gigabit City Düsseldorf ist fertig",
          "description": "Nach Bochum ist in Nordrhein-Westfalen Düsseldorf für Docsis 3.1 ausgebaut worden. Monatlich kostet der Zugang bei Unitymedia 100 Euro. ",
          "link": "https://www.golem.de/news/unitymedia-gigabit-city-duesseldorf-ist-fertiggestellt-1812-138031-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138031-180699-180696_rc.jpg"
      },
      {
          "title": "Weltraumspiel: Community mit X4 Foundations nicht unzufrieden",
          "description": "Das Entwicklerstudio Egosoft hat sein Weltraumspiel X4 Foundations veröffentlicht - und nach dem Desasterstart des Vorgängers einen guten Auftakt geschafft. Trotz technischer Probleme und unfertiger Systeme reagieren die Spieler bislang positiv. ",
          "link": "https://www.golem.de/news/weltraumspiel-community-mit-x4-foundations-nicht-unzufrieden-1812-138030-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138030-180694-180691_rc.jpg"
      },
      {
          "title": "EU-Kommission: EU-Regeln gegen Geoblocking beim Onlineshopping in Kraft",
          "description": "Kunden mit Kreditkarten aus anderen EU-Ländern dürfen nicht mehr auf teurere Angebote umgeleitet werden. Zugestellt werden müssen die Waren nicht, aber Selbstabholung angeboten werden. ",
          "link": "https://www.golem.de/news/eu-kommission-eu-regeln-gegen-geoblocking-beim-onlineshopping-in-kraft-1812-138029-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138029-180690-180686_rc.jpg"
      },
      {
          "title": "Cybercrime Profiling: Der typische Onlinekriminelle ist ein 34-jähriger Mann",
          "description": " Forscher aus Österreich versuchen herauszufinden, welcher Typ Mensch hinter der steigenden Onlinekriminalität steckt. Dabei identifizieren sie Tätergruppen und können diese bestimmten Straftatbeständen zuordnen. ",
          "link": "https://www.golem.de/news/cybercrime-profiling-der-typische-onlinekriminelle-ist-ein-34-jaehriger-mann-1812-138014-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138014-180660-180659_rc.jpg"
      },
      {
          "title": "Fehler in iOS: Instant Hotspot funktioniert nicht im iPhone mit eSIM",
          "description": "Wer eines der neuen iPhone-Modelle mit eSIM nutzt, kann das Smartphone derzeit nicht als Instant Hotspot verwenden. Der Grund dafür ist ein Fehler in iOS. Wann eine Fehlerkorrektur angeboten wird, ist nicht bekannt. ",
          "link": "https://www.golem.de/news/fehler-in-ios-instant-hotspot-funktioniert-nicht-im-iphone-mit-esim-1812-138028-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138028-180685-180682_rc.jpg"
      },
      {
          "title": "Bootcamps: Programmierer in drei Monaten",
          "description": "Um Programmierer zu werden, reichen ein paar Monate Intensiv-Training, sagen die Anbieter von IT-Bootcamps. Die Bewerber müssen nur eines sein: extrem motiviert. Von Juliane Gringer ",
          "link": "https://www.golem.de/news/bootcamps-programmierer-in-drei-monaten-1812-137431-rss.html",
          "pictureUrl": "https://www.golem.de/1812/137431-177898-177895_rc.jpg"
      },
      {
          "title": "Bluetooth-Ohrstöpsel: Apples zweite Generation der Airpods soll 2020 kommen",
          "description": "Es gibt neue Vermutungen rund um Apples Airpods der zweiten Generation. Die neuen Bluetooth-Ohrstöpsel sollten eigentlich schon dieses Jahr erscheinen, damit könnte es aber bis 2020 dauern. 2019 ist nur eine leicht überarbeitete Version der Airpods geplant. ",
          "link": "https://www.golem.de/news/bluetooth-ohrstoepsel-apples-zweite-generation-der-airpods-soll-2020-kommen-1812-138026-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138026-180681-180678_rc.jpg"
      },
      {
          "title": "Bundesverkehrsministerium: Elektrotretroller werden vor 2019 nicht mehr erlaubt",
          "description": "Elektrotretroller sind in Deutschland für den Betrieb auf öffentlichen Straßen noch nicht zugelassen. Das Bundesverkehrsministerium hat bereits eine Gesetzesänderung vorgeschlagen - die aber nicht mehr 2018 kommen wird. ",
          "link": "https://www.golem.de/news/bundesverkehrsministerium-elektro-tretroller-werden-vor-2019-nicht-erlaubt-1812-138025-rss.html",
          "pictureUrl": "https://www.golem.de/1810/137383-177677-177676_rc.jpg"
      },
      {
          "title": "Volocopter: ADAC erprobt Akku-Multikopter",
          "description": "Das deutsche Unternehmen Volocopter, das senkrecht startende Flugautos mit Elektroantrieb entwickelt, will mit dem ADAC den Einsatz bemannter Multikopter testen. Ab Frühjahr 2019 werden Luftrettungseinsätze mit Volocoptern simuliert - aber vorerst nur am Computer. ",
          "link": "https://www.golem.de/news/volocopter-adac-erprobt-akku-multikopter-1812-138024-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138024-180677-180674_rc.jpg"
      },
      {
          "title": "Mobilität: Uber will E-Scooter-Verleiher kaufen",
          "description": "Nach dem Ende der Mitfahrt im Auto geht es mit dem Roller weiter: Der Fahrdienstvermittler Uber will sein Angebot erweitern und einen der beiden großen US-Verleiher von E-Scooter kaufen. Die Chancen für einen schnellen Geschäftsabschluss stehen offensichtlich gut. ",
          "link": "https://www.golem.de/news/mobilitaet-uber-will-e-scooter-verleiher-kaufen-1812-138022-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138022-180668-180665_rc.jpg"
      },
      {
          "title": "Raumfahrt: Virgin Galactic soll vor Weihnachten ins All fliegen",
          "description": "Jahrelang hat Richard Branson angekündigt, sein Unternehmen Virgin Galactic werde in den kommenden zwei bis drei Wochen den ersten bemannten Flug in den Weltraum durchführen. Virgin Galactic plant kommerzielle Flüge für Weltraumtouristen. ",
          "link": "https://www.golem.de/news/raumfahrt-virgin-galactic-soll-vor-weihnachten-ins-all-fliegen-1812-138021-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138021-180664-180661_rc.jpg"
      },
      {
          "title": "Need for Speed 3 Hot Pursuit (1998): El Nino, Polizeifunk und Lichtgewitter in Rot-Blau",
          "description": " Electronic Arts ist berühmt und berüchtigt für jährliche Updates und Neuveröffentlichungen. Was der Publisher aber 1998 für digitale Raser auffuhr, ist in puncto Dramatik bei Verfolgungsjagden bis heute unerreicht. Von Michael Wieczorek ",
          "link": "https://www.golem.de/news/need-for-speed-3-hot-pursuit-1998-el-nino-polizeifunk-und-lichtgewitter-in-rot-blau-1812-137536-rss.html",
          "pictureUrl": "https://www.golem.de/1812/137536-180082-180081_rc.jpg"
      },
      {
          "title": "Blizzard: Im kommenden Jahr wird es wohl mehr Diablo zu sehen geben",
          "description": "Nach der enormen Kritik, die Blizzard durch die Diablo-Immortal-Vorstellung auf der Blizzcon 2018 einstecken musste, bestätigt der Konzern offiziell, dass es 2019 weitere Diablo-Titel zu sehen geben wird. Die Community hat noch immer gemischte Gefühle. ",
          "link": "https://www.golem.de/news/blizzard-im-kommenden-jahr-wird-es-wohl-mehr-diablo-zu-sehen-geben-1812-138020-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138020-180652-180649_rc.jpg"
      },
      {
          "title": "Google: Hangouts-App und Gsuite-Integration werden 2020 abgeschafft",
          "description": "Es war eigentlich vorauszusehen: Nachdem Google seine Messenger-App Hangouts seit einem Jahr nicht mehr pflegt, wird die Software 2020 wohl komplett eingestellt. Stattdessen will das Unternehmen die Marke auf Enterprise-Kunden ausrichten. Ein Nachfolger für die App könnte ebenfalls feststehen. ",
          "link": "https://www.golem.de/news/google-hangouts-app-und-gsuite-integration-werden-2020-abgeschafft-1812-138019-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138019-180648-180645_rc.jpg"
      },
      {
          "title": "Steam: Valve will weniger Anteil von größeren Spieletiteln haben",
          "description": "Erst 30 Prozent, dann immer weniger. Künftig möchte Valve nicht mehr permanent fast ein Drittel aller Einnahmen für Steam-Verkäufe haben. Das soll große Entwicklerstudios auf der Plattform halten. Kleinere Teams haben davon nicht viel. ",
          "link": "https://www.golem.de/news/steam-valve-will-weniger-anteil-von-groesseren-spieletiteln-haben-1812-138018-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138018-180644-180640_rc.jpg"
      },
      {
          "title": "Streamingdienst: Amazons Echo unterstützt bald Apple Music",
          "description": "Die smarten Lautsprecher Echo von Amazon unterstützen bereits eine Vielzahl von Musikdiensten, darunter Spotify und Amazon Music selbst. Ab dem 17. Dezember wird Apple Music per Skill auch über die Echos nutzbar sein. ",
          "link": "https://www.golem.de/news/streamingdienst-amazons-echo-unterstuetzt-bald-apple-music-1812-138017-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138017-180639-180636_rc.jpg"
      },
      {
          "title": "E Ink Justwrite Film: Beschreibbare Display-Folie kann überall angeklebt werden",
          "description": "Als Tafel, als Tisch, als Littfasssäule: E Inks Justwrite Film ist ein flexibles Panel, auf dem Nutzer schreiben und zeichnen können. Nach Angaben des Herstellers ist es preiswert und dünn. Daher könnte sie schnell Einzug in Klassenzimmer halten. ",
          "link": "https://www.golem.de/news/e-ink-justwrite-film-beschreibbare-display-folie-kann-ueberall-angeklebt-werden-1812-138016-rss.html",
          "pictureUrl": "https://www.golem.de/1812/138016-180635-180632_rc.jpg"
      }
  ];
  }

  getTagesschauNews() {
    console.log("Start Request");
    return [
      {
          "title": "Klima-Risiko-Index 2017: Extremwetter so heftig wie lange nicht",
          "description": "Stürme, Starkregen, Hitze und Dürre: Laut Klima-Risiko-Index waren Entwicklungsländer 2017 am härtesten von extremen Wetterlagen betroffen. Auch die Industriestaaten spüren die Folgen des Klimawandels immer heftiger.",
          "link": "http://www.tagesschau.de/wirtschaft/klimarisiko-index-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/maria-puertorico-105~_v-mittel16x9.jpg"
      },
      {
          "title": "Haushaltsstreit mit der EU: Italien bewegt sich",
          "description": "Kann Italien das Defizitverfahren noch abwenden? Im Haushaltsstreit mit der EU will Ministerpräsident Conte noch heute einen neuen Etat vorlegen. Doch ohne Neuverschuldung kommt er nicht aus. Von Jan-Christoph Kitzler.",
          "link": "http://www.tagesschau.de/wirtschaft/italien-haushalt-115.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/conte-143~_v-mittel16x9.jpg"
      },
      {
          "title": "Russland lässt wieder Schiffe durch Straße von Kertsch",
          "description": "Ist es ein erstes Zeichen der Entspannung im Konflikt um den Zugang zum Asowschen Meer? Russland lässt wieder Schiffe die Straße von Kertsch passieren. Allerdings müssen sie sich erst kontrollieren lassen.",
          "link": "http://www.tagesschau.de/ausland/russland-ukraine-117.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/russland-kertsch-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Waldbrände in Paradise: Neuanfang in Schutt und Asche",
          "description": "Die kalifornische Stadt Paradise wurde von den jüngsten Waldbränden vollkommen zerstört. Nun soll der Ort wieder aufgebaut werden. Doch viele ehemalige Bewohner wissen überhaupt nicht, ob sie zurück wollen. Von Nicole Markwald.",
          "link": "http://www.tagesschau.de/ausland/waldbraende-kalifornien-127.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/zerstoerungen-paradise-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Deutsche Ryanair-Piloten: Grundzüge für Tarifvertrag stehen",
          "description": "Bei Ryanair endet der Tarifstreit mit den etwa 400 deutschen Piloten. Die Gewerkschaft Vereinigung Cockpit hat sich mit dem Unternehmen auf Eckpunkte zu einem umfassenden Tarifvertrag geeinigt.",
          "link": "http://www.tagesschau.de/wirtschaft/ryanair-255.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/ryanair-237~_v-mittel16x9.jpg"
      },
      {
          "title": "Trauer am Sarg von Ex-Präsident Bush",
          "description": "Es ist ein Abschied von einer historischen Persönlichkeit und ein Rückblick auf eine vergangene Zeit: In Washington haben führende Politiker den verstorbenen Ex-Präsidenten Bush gewürdigt. Donald Trump kam später.",
          "link": "http://www.tagesschau.de/multimedia/bilder/george-bush-161.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/george-bush-163~_v-mittel16x9.jpg"
      },
      {
          "title": "NATO räumt Russland offenbar Frist beim INF-Vertrag ein",
          "description": "Europäische NATO-Staaten fürchten, dass ein Ende des INF-Vertrags ein Raketenwettrüsten auslösen könnte. Das Militärbündnis will deshalb Russland offenbar eine letzte Frist von zwei Monaten einräumen.",
          "link": "http://www.tagesschau.de/ausland/inf-nato-russland-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/stoltenberg-nato-115~_v-mittel16x9.jpg"
      },
      {
          "title": "EuGH-Gutachter: Exit vom Brexit ist möglich",
          "description": "Seit März 2017 tickt die Brexit-Uhr in Großbritannien. Das Parlament entscheidet in diesen Tagen über das Austrittsabkommen. Der Prozess sei noch zu stoppen, meint der EuGH-Gutachter.",
          "link": "http://www.tagesschau.de/ausland/brexit-eugh-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/brexit-713~_v-mittel16x9.jpg"
      },
      {
          "title": "Amazon erstmals mehr wert als Apple und Microsoft",
          "description": "Amazon hat Microsoft erstmals die Position als wertvollstes börsennotiertes Unternehmen abgejagt. Microsoft hatte den Spitzenplatz 2010 an Apple abgeben müssen. Im November hatte sich Microsoft den Platz kurz zurückgeholt.",
          "link": "https://boerse.ard.de/aktien/amazon-erstmals-mehr-wert-als-apple-und-microsoft100.html",
          "pictureUrl": "http://www.tagesschau.de/ardimport/boerse/hr-boerse-image-11145~_v-mittel16x9.jpg"
      },
      {
          "title": "Finanzminister einig über Reform der Eurozone",
          "description": "Es waren lange und komplizierte Verhandlungen. Nun haben sich die EU-Finanzminister auf eine Reform der Währungsunion geeinigt. Details sind noch nicht bekannt - die Minister sind aber betont begeistert.",
          "link": "http://www.tagesschau.de/wirtschaft/eu-finanzminister-135.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/euro-muenze-103~_v-mittel16x9.jpg"
      },
      {
          "title": "Per Haftbefehle gesucht: 467 Rechtsextreme untergetaucht",
          "description": "In Deutschland können Haftbefehle gegen 467 Rechtsextremisten nicht vollstreckt werden, weil die Beschuldigten nicht aufzufinden sind. Mehr als jeder vierte Gesuchte gilt den Behörden als gewalttätig.",
          "link": "http://www.tagesschau.de/inland/haftbefehle-rechtsextremisten-103.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/haftebefehle-rechtsextremisten-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Zwei Ehrungen, eine Entschuldigung beim Ballon d'Or",
          "description": "Weder Ronaldo, noch Messi - auch bei der Verleihung des Goldenen Fußball lief vieles anders als gewohnt. Bei den Männern siegte Luka Modric, bei den Frauen Ada Hegerberg. Doch davon sprach danach kaum einer.",
          "link": "http://www.tagesschau.de/ausland/goldener-ball-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/goldener-ball-103~_v-mittel16x9.jpg"
      },
      {
          "title": "\"Gelbwesten\"-Protest: Frankreich verschiebt Ökosteuer-Erhöhung",
          "description": "Im Konflikt mit der \"Gelbwesten\"-Protestbewegung will die französische Regierung die Erhöhung der Ökosteuer auf Diesel und Benzin vorerst auf Eis legen. Das berichten mehrere Nachrichtenagenturen.",
          "link": "http://www.tagesschau.de/ausland/gelbwesten-105.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/gelbwesten-paris-101~_v-mittel16x9.jpg"
      },
      {
          "title": "E-Mobilität in Deutschland: Ohne die Asiaten läuft nichts",
          "description": "Die deutschen Autohersteller investieren Milliarden in neue Elektrofahrzeuge, um die strengeren Klimaschutz-Vorgaben zu erfüllen. Bei den Batteriezellen sind sie aber abhängig von asiatischen Produzenten. Von Notker Blechner.",
          "link": "https://boerse.ard.de/anlagestrategie/branchen/die-abhaengigkeit-der-autobauer-von-asiatischen-batterieproduzenten100.html",
          "pictureUrl": "http://www.tagesschau.de/ardimport/boerse/e-mobilitaet-103~_v-mittel16x9.jpg"
      },
      {
          "title": "In kleinen Schritten zur EU-Digitalsteuer",
          "description": "Die Bundesregierung ist kein großer Freund einer Digitalsteuer. Doch Frankreich drängt darauf, die Schlupflöcher für Internetkonzerne zu stopfen. Nun gibt es einen Kompromiss. Von Ralph Sina.",
          "link": "http://www.tagesschau.de/wirtschaft/digitalsteuer-103.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/internet-konzerne-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Neue EU-Standards: Gegen die rauen Sitten im Trucker-Geschäft",
          "description": "Mehr Lohn, neue Sozialstandards, Unterkünfte entlang der Route: Die EU-Verkehrsminister haben sich mehrheitlich auf Verbesserungen der Arbeitsbedingungen von Lkw-Fahrern geeinigt. Von Andreas Meyer-Feist.",
          "link": "http://www.tagesschau.de/ausland/eu-lkw-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/lkw-parkplatz-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Trotz EU-Prüfverfahren: Pestizide im Haar",
          "description": "Die EU prüft Pestizid-Wirkstoffe vor der Zulassung in einem langwierigen Verfahren. Dennoch gibt es darunter Substanzen, deren Wirkung unklar ist. Eine BR-Recherche nährt Zweifel am Verfahren. Von E. Harlan und L. Wreschniok. ",
          "link": "http://www.tagesschau.de/ausland/pestizide-eu-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/friseur-109~_v-mittel16x9.jpg"
      },
      {
          "title": "Brexit: Mays Endspiel",
          "description": "Das britische Unterhaus beginnt heute seine fünftägige Debatte über das Brexit-Abkommen. Am 11. Dezember wird abgestimmt - für Premierministerin May sieht es bislang schlecht aus. Von Anne Demmer.",
          "link": "http://www.tagesschau.de/ausland/brexit-unterhaus-105.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/grossbritannien-eu-zollunion-may-101~_v-mittel16x9.jpg"
      },
      {
          "title": "EU-Finanzminister: Nachsitzen nach der Nachtsitzung",
          "description": "Euro-Rettungsschirm, Euro-Haushalt, Finanztransaktions- und Digitalsteuer, Italiens Defizit - die EU-Finanzminister haben sich die ganz großen Themen vorgenommen. Da reichte auch eine Nachtschicht nicht. Von Andreas Meyer-Feist.",
          "link": "http://www.tagesschau.de/ausland/eu-finanzminister-133.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/eu-finanzminister-129~_v-mittel16x9.jpg"
      },
      {
          "title": "CIA-Chefin informiert Senatoren zum Fall Khashoggi",
          "description": "Beim letzten Treffen zu dem Thema fehlte sie noch. Jetzt will CIA-Chefin Haspel die US-Senatoren über die Erkenntnisse ihres Geheimdienstes zum Fall Khashoggi informieren - zumindest einige von ihnen.",
          "link": "http://www.tagesschau.de/ausland/khashoggi-265.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/khashoggi-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Balanceakt im Weißen Haus - Deutsche Autobosse bei Trump",
          "description": "Seit Monaten zittert die deutsche Autobranche vor hohen Sonderzöllen, mit denen US-Präsident Trump droht. Nun kommen die Top-Manager ins Weiße Haus. Die EU beobachtet das Treffen mit Argwohn. Von Martin Ganslmeier.",
          "link": "http://www.tagesschau.de/wirtschaft/eu-usa-zoelle-107.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/autos-119~_v-mittel16x9.jpg"
      },
      {
          "title": "Deutsche Sicherungsverwahrung erneut vor Gericht",
          "description": "Der Menschenrechtsgerichtshof entscheidet erneut über die deutsche Sicherungsverwahrung. Geklagt hat ein Mann, der wegen Mordes an einer Joggerin hinter Gittern sitzt. Kolja Schwartz mit Fragen und Antworten.",
          "link": "http://www.tagesschau.de/ausland/sicherungsverwahrung-105.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/zelle100~_v-mittel16x9.jpg"
      },
      {
          "title": "Bundesliga: Leverkusen verschenkt Sieg in Nürnberg",
          "description": "Bayer Leverkusen war im Spiel gegen den Aufsteiger 1. FC Nürnberg lange klar überlegen. Doch dann verschenkte der Verein seinen fünften Saisonsieg am Ende geradezu. Das Ergebnis: ein Unentschieden.",
          "link": "https://www.sportschau.de/fussball/bundesliga/spielbericht-nuernberg-leverkusen100.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/leverkusen-nuernberg-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Klimaforscher: Höhere Preise für CO2 als Lösung",
          "description": "Deutschland verfehlt seine Klimaziele. Die Folgen könnten in die Milliarden gehen. Dabei gebe es Möglichkeiten, damit das Land weniger Emissionen freisetzt, sagt Klimaforscher Edenhofer im tagesthemen-Interview.",
          "link": "http://www.tagesschau.de/inland/interview-edenhofer-tt-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/sendungsbild-439519~_v-mittel16x9.jpg"
      },
      {
          "title": "CEU: Aus für Soros-Uni in Budapest",
          "description": "Lange hielt sie dem Druck der ungarischen Regierung stand - nun gibt sich die vom US-Milliardär Soros gegründete Zentraleuropäische Universität in Budapest geschlagen: Der Großteil des Lehrbetriebs wird nach Wien verlegt.",
          "link": "http://www.tagesschau.de/ausland/budapest-ceu-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/ceu-103~_v-mittel16x9.jpg"
      },
      {
          "title": "Sojus-Kapsel erfolgreich an ISS angedockt",
          "description": "An Bord sind eine US-Amerikanerin, ein Russe und ein Kanadier: Rund sechs Stunden nach dem Abheben hat eine Sojus-Kapsel die ISS erreicht. Es war der erste Flug dorthin nach dem missglückten Raketenstart im Oktober.",
          "link": "http://www.tagesschau.de/ausland/sojus-rakete-109.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/sojus-167~_v-mittel16x9.jpg"
      },
      {
          "title": "Konflikt mit Russland: Ukraine beruft Reservisten ein",
          "description": "Nach der Verhängung des Kriegsrechts hat die Ukraine nun ihre Reservisten einberufen - und bezeichnet dies als \"Reaktion auf die Bedrohung einer groß angelegten russischen Invasion\". Moskau wies die Vorwürfe zurück.",
          "link": "http://www.tagesschau.de/ausland/ukraine-reservisten-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/poroschenko-299~_v-mittel16x9.jpg"
      },
      {
          "title": "FAQ: Wer sind die \"Gelbwesten\"?",
          "description": "Am Wochenende haben erneut Krawalle der sogenannten Gelbwesten Frankreich erschüttert. Welche politischen Ziele verfolgt die neue Bewegung, und lässt sie sich auf Verhandlungen ein? Martin Bohne über die Hintergründe.",
          "link": "http://www.tagesschau.de/ausland/gelbwesten-faq-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/paris-673~_v-mittel16x9.jpg"
      },
      {
          "title": "Saubere Luft in Städten: \"Es fehlt der große Wurf\"",
          "description": "Eine halbe Milliarde mehr für saubere Luft: Das ist das Ergebnis eines Treffens der Bundesregierung mit Vertretern der Kommunen. Doch die kritisieren, dass die Mittel für eine Verkehrswende nicht ausreichten. Von A. Meyer-Fünffinger.",
          "link": "http://www.tagesschau.de/inland/diesel-193.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/dieselgipfel-127~_v-mittel16x9.jpg"
      },
      {
          "title": "Schweden: Gericht erhöht Strafe für Arnault",
          "description": "Er hatte auf ein milderes Urteil gehofft, nun muss er länger in Haft: Der Franzose Arnault, der im Zentrum des Literaturnobelpreis-Skandals steht, ist wegen einer zweiten Vergewaltigung verurteilt worden.",
          "link": "http://www.tagesschau.de/ausland/arnault-109.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/arnault-107~_v-mittel16x9.jpg"
      },
      {
          "title": "Jugendfreiwilligenjahr: Ein Dienst, der sich lohnen soll",
          "description": "Mehr Geld und ein Zertifikat, mit dem Jugendliche leichter einen Ausbildungsplatz erhalten sollen - so will Familienministerin Giffey die Freiwilligendienste für junge Leute attraktiver machen. Von Matthias Reiche.",
          "link": "http://www.tagesschau.de/inland/giffey-freiwilligenjahr-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/franziska-giffey-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Interview: \"Katar wird enorme Einnahmen erzielen\"",
          "description": "Im kommenden Monat verlässt Katar die OPEC und wird dadurch unabhängiger. Nach Einschätzung des Analysten Mohamed Abbas wird das viel Geld in die Kassen spülen. Den Konflikt mit Saudi-Arabien werde dies eher befeuern.",
          "link": "http://www.tagesschau.de/ausland/katar-opec-103.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/katar-185~_v-mittel16x9.jpg"
      },
      {
          "title": "Scholz für Börsensteuer nach französischem Modell",
          "description": "Seit Jahren kommen die Pläne für eine EU-weite Finanztransaktionssteuer nicht voran. Nun wollen Berlin und Paris neuen Schwung in die Debatte bringen - Vorbild ist das französische Besteuerungsmodell.",
          "link": "http://www.tagesschau.de/wirtschaft/finanztransaktionssteuer-scholz-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/scholz-eu-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Sojus-Rakete erfolgreich zur ISS gestartet",
          "description": "Im Oktober hatte der Fehlstart einer Sojus dazu geführt, dass zwei Raumfahrer notlanden mussten. Nun hat wieder eine Rakete mit Ziel ISS abgehoben. An Bord sind eine US-Amerikanerin, ein Russe und ein Kanadier.",
          "link": "http://www.tagesschau.de/ausland/sojus-rakete-107.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/sojusrakete-101~_v-mittel16x9.jpg"
      },
      {
          "title": "Russland bläst Normandie-Gespräche ab",
          "description": "Die Absprache hielt gerade einmal drei Tage. Russland will nun doch nicht im internationalen Normandie-Format über die Krim-Krise sprechen. In Deutschland wird der Ton gegenüber dem Kreml schärfer.",
          "link": "http://www.tagesschau.de/ausland/russland-ukraine-deutschland-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/putin-merkel-125~_v-mittel16x9.jpg"
      },
      {
          "title": "Dieseltreffen: Bund gibt eine Milliarde Euro mehr",
          "description": "Nachdem deutsche Gerichte in mehreren Städten Dieselfahrverbote anordneten, stockt der Bund sein Programm \"Saubere Luft\" auf. Das ist das Ergebnis eines Treffens mit Vertretern der Kommunen. Die hatten mehr erhofft.",
          "link": "http://www.tagesschau.de/inland/dieselgipfel-123.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/dieselgipfel-125~_v-mittel16x9.jpg"
      },
      {
          "title": "Krawalle in Frankreich: \"Wir sind im freien Fall\"",
          "description": "Die \"Gelbwesten\" fordern den Rücktritt der gesamten Regierung. Die sucht das Gespräch mit der Opposition, bleibt aber bei ihrem Reformkurs - wie lange kann sie das noch durchhalten? Von Barbara Kostolnik.",
          "link": "http://www.tagesschau.de/ausland/paris-gelbwesten-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/truemmer-paris-107~_v-mittel16x9.jpg"
      },
      {
          "title": "Forscher Latif zur Erderwärmung: \"Klimaschutz ist ein Innovationsmotor\"",
          "description": "Der Kieler Wissenschaftler Latif hat Länder wie die USA und Brasilien kritisiert, die das Pariser Klimaabkommen ignorieren. Der Klimawandel sei noch aufzuhalten. Klimaschutz sei ein Innovationsmotor.",
          "link": "http://www.tagesschau.de/ausland/interview-mojib-latif-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/sendungsbild-439345~_v-mittel16x9.jpg"
      },
      {
          "title": "\"Wir sind nicht auf Kurs\" - Mahnung zum Klimagipfel",
          "description": "Ein \"historischer Test\", \"tiefe Schwierigkeiten\" oder gar eine \"Überlebensfrage\": An deutlichen Worten fehlt es bei der offiziellen Eröffnung des Klimagipfels nicht. Schaffen die Staaten den Durchbruch?",
          "link": "http://www.tagesschau.de/ausland/klimagipfel-kattowitz-101.html",
          "pictureUrl": "http://www.tagesschau.de/multimedia/bilder/guterres-181~_v-mittel16x9.jpg"
      },
      {
          "title": "Warum Deutschland die Klimaziele verfehlt",
          "description": "Deutschland galt mal als Vorreiter in Sachen Klimaschutz. Aber inzwischen ist klar, dass die Klimaziele für 2020 verfehlt werden. Doch warum wird der CO2-Ausstoß nicht wie geplant gesenkt? Von Tanja Seibert.",
          "link": "http://www.tagesschau.de/ausland/deutschland-klimaziele-101.html",
          "pictureUrl": "http://www.tagesschau.de/deutscheklimaziele-101~_v-mittel16x9.jpg"
      }
  ];
    
  }


}
