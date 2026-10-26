/* Check-list d'écoute · application statique, sans compte ni dépendance externe. */
(() => {
  "use strict";
  const VERSION = 2;
  const KEY = "trnslt-listening-check-v2";
  const SONGS = ["Considéré", "Faunes", "Monique", "Aves", "Roulades", "Émeus", "Créatures", "Fourchesud", "Mitose", "Folia"];
  const SYSTEMS = [
    {
      id: "hifi",
      label: "Chaîne hi-fi",
      summary: "Enceintes stéréo, écoute à domicile",
      tip: "Écoute à volume confortable, à ta place habituelle. Désactive les effets sonores si possible, sauf si ce sont ceux que tu utilises habituellement pour écouter de la musique.",
    },
    {
      id: "voiture",
      label: "Voiture",
      summary: "Autoradio, bruit de route, habitacle",
      tip: "Effectue les réglages et prends tes notes à l’arrêt. Ne manipule pas l’outil en conduisant espèce de fou du volant !",
    },
    {
      id: "ecouteurs",
      label: "Écouteurs",
      summary: "Filaires ou Bluetooth, écoute individuelle",
      tip: "Écoute à volume modéré. Désactive si possible la spatialisation et les réglages d’égalisation.",
    },
    {
      id: "telephone",
      label: "Haut-parleur de smartphone",
      summary: "Petit haut-parleur, graves limités",
      tip: "Écoute directement sur le téléphone, sans enceinte connectée. Les graves très profonds ne sont pas attendus.",
    },
  ];
  const q = (id, title, focus, good, bad) => ({ id, title, focus, good, bad });
  const FORMS = {
    hifi: [
      {
        title: "Équilibre des instruments",
        items: [
          q(
            "h1",
            "Guitare, basse et batterie restent distinctes.",
            "Passe de l’écoute d’un instrument à l’autre, y compris quand ils jouent ensemble.",
            "Tu peux suivre chaque partie, même dans les passages chargés.",
            "Une partie couvre durablement les autres.",
          ),
          q(
            "h2",
            "La basse est présente sans dominer.",
            "Écoute les notes de basse puis l’ensemble du morceau.",
            "La ligne de basse se suit facilement et reste à sa place.",
            "Elle rend toute l’écoute floue, noyée, ou devient difficile à repérer.",
          ),
          q(
            "h3",
            "La basse et la grosse caisse ne se confondent pas.",
            "Repère la basse et les coups du kick.",
            "Les notes de basse et les coups de grosse caisse sont reconnaissables.",
            "Le bas du morceau ressemble à un grondement continu et indistinct.",
          ),
        ],
      },
      {
        title: "Détails et relief",
        items: [
          q(
            "h4",
            "Les motifs de guitare restent lisibles.",
            "Suis une phrase de guitare qui se répète, y compris dans les passages rapides.",
            "Tu reconnais le pattern des notes et ses variations.",
            "Les notes se mélangent en un bruit indistinct.",
          ),
          q(
            "h5",
            "Les superpositions restent compréhensibles.",
            "Écoute quand plusieurs lignes instrumentales se croisent, notamment basse et guitare, boucles, etc.",
            "Les lignes conservent leurs rôles respectifs.",
            "L’ajout d’une partie rend soudain le passage brouillon.",
          ),
          q(
            "h6",
            "La caisse claire et les toms gardent leur impact.",
            "Écoute le claquement de la caisse claire puis les roulements sur les autres toms.",
            "Les frappes restent franches, avec des nuances d’intensité.",
            "Les roulements se perdent ou les coups deviennent mous.",
          ),
          q(
            "h7",
            "Les cymbales restent brillantes sans gêner.",
            "Écoute les cymbales dans une partie dense puis calme.",
            "Elles apportent de l’énergie sans couvrir la guitare.",
            "Elles sifflent, crissent ou te donnent envie de baisser le volume.",
          ),
        ],
      },
      {
        title: "Dynamique et espace",
        items: [
          q(
            "h8",
            "Les passages calmes et intenses se distinguent.",
            "Compare un passage aéré à un passage où tout le monde joue.",
            "La montée en intensité est évidente, les contrastes sont efficaces.",
            "Le morceau semble constamment fort, ou constamment faible.",
          ),
          q(
            "h9",
            "L’image gauche/droite reste équilibrée.",
            "Écoute depuis ta position habituelle, face aux enceintes.",
            "Le morceau paraît stable, sans côté qui prend toute la place par accident.",
            "Un instrument essentiel semble anormalement collé d’un côté, c'est un problème sauf choix esthétique.",
          ),
          q(
            "h10",
            "Le morceau garde son rythme à faible volume.",
            "Baisse le son à un niveau discret mais audible.",
            "La basse, les accents, la caisse claire et les motifs restent suivables.",
            "Le morceau devient plat ou perd son impulsion.",
          ),
          q(
            "h11",
            "Aucun grésillement involontaire n’apparaît.",
            "Écoute les pics de batterie et de guitare avec attention.",
            "Les sons saturés paraissent intentionnels et réguliers.",
            "Des craquements imprévus apparaissent sur les passages forts.",
          ),
        ],
      },
    ],
    voiture: [
      {
        title: "Lisibilité dans l’habitacle",
        items: [
          q(
            "v1",
            "Le rythme reste identifiable avec le bruit de fond.",
            "À l’arrêt ou avec un passager qui remplit cette checklist, écoute à un niveau raisonnable dans les conditions habituelles.",
            "La pulsation et les accents restent évidents.",
            "Le bruit de l’habitacle fait disparaître le mouvement du morceau.",
          ),
          q(
            "v2",
            "Le motif principal de guitare reste audible.",
            "Suis la phrase mélodique de basse ou de guitare qui structure le passage.",
            "Tu reconnais sa mélodie et ses départs de notes.",
            "Le moteur ou les autres instruments couvrent la phrase.",
          ),
          q(
            "v3",
            "La caisse claire garde sa présence.",
            "Repère le son sec qui marque les accents de batterie.",
            "Ses coups restent nets sans avoir besoin de monter fort le son.",
            "Ils disparaissent derrière la basse ou le bruit de route.",
          ),
          q(
            "v4",
            "La basse reste musicale.",
            "Écoute les changements de notes, et pas seulement la sensation de grave.",
            "La ligne de basse reste reconnaissable.",
            "Tu entends surtout un grondement sans notes distinctes.",
          ),
        ],
      },
      {
        title: "Graves et aigus",
        items: [
          q(
            "v5",
            "Les graves ne résonnent pas exagérément.",
            "Sur un passage avec basse et grosse caisse, remarque les vibrations de l’habitacle.",
            "Le grave est énergique mais les coups restent séparés.",
            "Certains coups font bourdonner durablement l’intérieur de la voiture, ça résonne.",
          ),
          q(
            "v6",
            "La grosse caisse reste perceptible.",
            "Écoute le kick.",
            "Il donne une impulsion nette.",
            "Il devient un bruit sourd et continu ou disparaît.",
          ),
          q(
            "v7",
            "Les cymbales et la guitare ne percent pas les oreilles.",
            "Écoute un passage rapide riche en cymbales et en guitare aiguë.",
            "Le son reste énergique mais supportable.",
            "Des aigus piquants poussent à baisser le volume.",
          ),
        ],
      },
      {
        title: "Écoute réelle",
        items: [
          q(
            "v8",
            "Les passages calmes restent audibles.",
            "Repère une pause instrumentale ou un passage peu fourni.",
            "Tu entends encore les parties importantes à bas volume.",
            "Le passage disparaît presque sous le bruit ambiant.",
          ),
          q(
            "v9",
            "Les changements de rythme conservent leur effet.",
            "Suis un arrêt, une reprise ou un changement d’accent.",
            "La rupture rythmique reste claire.",
            "La transition passe inaperçue car les sons sont masqués.",
          ),
          q(
            "v10",
            "Le morceau reste agréable sur la durée.",
            "Écoute plusieurs sections au niveau habituel, sans chercher à couvrir le bruit ambiant à tout prix.",
            "Tu n’as pas besoin d’augmenter constamment le volume.",
            "Le son fatigue vite ou oblige à monter exagérément le niveau.",
          ),
        ],
      },
    ],
    ecouteurs: [
      {
        title: "Précision des instruments",
        items: [
          q(
            "e1",
            "Les notes rapides de guitare restent distinctes.",
            "Suis des phrases jouées rapidement.",
            "Tu distingues les débuts et les changements de notes.",
            "Le passage ressemble à un grésillement uniforme.",
          ),
          q(
            "e2",
            "La ligne de basse reste suivable.",
            "Concentre-toi sur les mouvements de la basse.",
            "Tu entends les notes et leur articulation.",
            "Tu n’entends qu’une vibration grave sans ligne mélodique, ou pire, rien du tout.",
          ),
          q(
            "e3",
            "La grosse caisse et la basse restent séparées.",
            "Compare les coups de grosse caisse avec les notes de basse.",
            "Chaque instrument est identifiable.",
            "Les deux se mélangent en un seul son grave.",
          ),
          q(
            "e4",
            "Les frappes de batterie gardent leur précision.",
            "Écoute les accents de caisse claire et les roulements.",
            "Les coups restent bien définis, y compris quand tout le monde joue.",
            "Les frappes deviennent floues ou noyées.",
          ),
        ],
      },
      {
        title: "Confort",
        items: [
          q(
            "e5",
            "Les aigus de la guitare ne sont pas douloureux.",
            "Écoute les notes hautes et les passages saturés à volume modéré.",
            "Le caractère abrasif est perceptible sans inconfort.",
            "Une zone aiguë te donne envie de retirer les écouteurs, si tu arrives à améliorer avec l'eq de ton dispositif, explique à quelle fréquence à peu près.",
          ),
          q(
            "e6",
            "Les cymbales ne sifflent pas excessivement.",
            "Fais attention au charleston et aux cymbales dans les passages rapides.",
            "Elles restent précises sans dominer.",
            "Elles produisent un sifflement ou des aigus fatigants, si tu arrives à améliorer avec l'eq de ton dispositif, explique à quelle fréquence à peu près.",
          ),
          q(
            "e7",
            "Les graves ne masquent pas le reste.",
            "Écoute la basse lors d’un passage avec guitare et batterie.",
            "Le grave est présent sans étouffer les autres sons.",
            "Les riffs et les frappes perdent leur netteté sous les graves.",
          ),
          q(
            "e8",
            "L’écoute reste confortable sur plusieurs minutes.",
            "Garde un volume raisonnable et écoute plusieurs sections.",
            "L’énergie reste agréable sans besoin de baisser le volume.",
            "La fatigue auditive apparaît très rapidement.",
          ),
        ],
      },
      {
        title: "Espace et rythme",
        items: [
          q(
            "e9",
            "Les côtés gauche et droit restent cohérents.",
            "Écoute les différences entre l’écouteur gauche et le droit.",
            "L’espace est intéressant et aucun côté ne porte tout le morceau.",
            "Un élément essentiel est exagérément isolé sur un côté, ce qui est un problème sauf choix esthétique.",
          ),
          q(
            "e10",
            "Les couches instrumentales restent distinctes.",
            "Suis un motif quand d’autres notes se superposent.",
            "Tu peux toujours reconnaître le motif principal.",
            "Les superpositions deviennent confuses.",
          ),
          q(
            "e11",
            "Les arrêts et reprises restent nets.",
            "Repère les pauses courtes et les départs simultanés.",
            "Les silences et reprises ont un effet précis.",
            "Des sons persistants ou des décalages de timing brouillent les coupures.",
          ),
        ],
      },
    ],
    telephone: [
      {
        title: "Éléments indispensables",
        items: [
          q(
            "t1",
            "Le motif principal de guitare reste reconnaissable.",
            "Suis un passage où la guitare répète une phrase.",
            "Tu entends la forme du motif même sur un petit haut-parleur.",
            "La guitare est trop mince, trop agressive ou disparaît.",
          ),
          q(
            "t2",
            "La ligne de basse reste perceptible.",
            "Essaie de suivre les changements de notes de basse. Les graves très profonds ne peuvent pas être reproduits ici.",
            "Tu devines le mouvement de la ligne de basse.",
            "La basse disparaît au point de changer la perception du morceau.",
          ),
          q(
            "t3",
            "La caisse claire reste franche.",
            "Écoute les coups secs de batterie.",
            "Les accents restent bien présents.",
            "La caisse claire paraît lointaine ou devient un petit claquement agressif.",
          ),
          q(
            "t4",
            "La grosse caisse donne encore l’impulsion.",
            "Suis les coups du kick, sans chercher des vibrations graves qui sont de toute manière inexistantes.",
            "Son rythme reste perceptible.",
            "Elle disparaît complètement et le groove change.",
          ),
        ],
      },
      {
        title: "Clarté",
        items: [
          q(
            "t5",
            "Les notes rapides restent compréhensibles.",
            "Choisis une phrase de guitare ou de basse rapide.",
            "Le mouvement des notes reste intelligible.",
            "Les notes se transforment en bruit ou en son strident, ou sont indistinctes.",
          ),
          q(
            "t6",
            "Les superpositions ne deviennent pas brouillonnes.",
            "Écoute le passage le plus chargé du morceau.",
            "Tu peux reconnaître les différentes fonctions des instruments.",
            "Tous les sons fusionnent en un bloc indistinct.",
          ),
          q(
            "t7",
            "Les cymbales ne prennent pas toute la place.",
            "Concentre-toi sur les cymbales et le charley.",
            "Elles restent présentes sans étouffer la guitare ni la caisse claire.",
            "Les aigus des cymbales dominent nettement le mix.",
          ),
          q(
            "t8",
            "Les ruptures rythmiques restent nettes.",
            "Écoute les arrêts soudains, décalages et reprises.",
            "Les changements de rythme conservent leur effet.",
            "Les ruptures deviennent difficiles à remarquer.",
          ),
        ],
      },
      {
        title: "Usage quotidien",
        items: [
          q(
            "t9",
            "Le morceau reste entraînant à volume modéré.",
            "Écoute à un volume de téléphone habituel, sans pousser au maximum.",
            "Le rythme est compréhensible et l’énergie reste présente.",
            "Tu dois monter presque à fond pour suivre le morceau.",
          ),
          q(
            "t10",
            "Le haut-parleur ne produit pas de grésillement gênant.",
            "Repère les passages les plus puissants et les notes aiguës.",
            "Le son reste intelligible sans craquement anormal.",
            "Le haut-parleur vibre, crache ou sature de manière gênante.",
          ),
        ],
      },
    ],
  };
  const $ = (selector) => document.querySelector(selector);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const systemsMap = new Map(SYSTEMS.map((s) => [s.id, s]));
  const questions = Object.fromEntries(SYSTEMS.map((s) => [s.id, FORMS[s.id].flatMap((group) => group.items)]));
  const allowedIds = Object.fromEntries(SYSTEMS.map((s) => [s.id, new Set(questions[s.id].map((x) => x.id))]));
  const labels = { nt: "Non testé", ok: "OK", fix: "À revoir" };
  const refKey = (context, song) => `${context}|${song}`;
  const blank = () => ({ version: VERSION, records: {}, updatedAt: null });
  function cleanRecord(record, context, song) {
    const checks = {};
    const src = record?.checks;
    if (src && typeof src === "object" && !Array.isArray(src))
      for (const [key, val] of Object.entries(src)) {
        if (!allowedIds[context].has(key) || !val || typeof val !== "object") continue;
        const status = ["nt", "ok", "fix"].includes(val.status) ? val.status : "nt";
        const comment = typeof val.comment === "string" ? val.comment.slice(0, 3000) : "";
        if (status !== "nt" || comment) checks[key] = { status, comment };
      }
    return { context, song, checks, savedAt: typeof record?.savedAt === "string" ? record.savedAt : null };
  }
  function normalize(src) {
    if (!src || typeof src !== "object" || src.version !== VERSION || !src.records || typeof src.records !== "object" || Array.isArray(src.records))
      throw Error("Format incompatible : projet version 2 attendu.");
    const records = {};
    if (Object.keys(src.records).length > 100) throw Error("Trop d’écoutes dans ce fichier.");
    for (const val of Object.values(src.records)) {
      if (!val || !systemsMap.has(val.context) || !SONGS.includes(val.song)) continue;
      const record = cleanRecord(val, val.context, val.song);
      records[refKey(record.context, record.song)] = record;
    }
    return { version: VERSION, records, updatedAt: typeof src.updatedAt === "string" ? src.updatedAt : null };
  }
  function load() {
    try {
      const data = localStorage.getItem(KEY);
      return data ? normalize(JSON.parse(data)) : blank();
    } catch (e) {
      console.warn(e);
      return blank();
    }
  }
  let project = load();
  let step = 1,
    context = null,
    song = null,
    draft = null,
    dirty = false,
    toastTimer = null,
    pending = null;
  let success = { context: null, song: null };
  const currentRecord = () => project.records[refKey(context, song)] || null;
  function startDraft() {
    draft = cleanRecord(currentRecord() || {}, context, song);
    dirty = false;
    syncDirty();
  }
  function syncDirty() {
    const saved = currentRecord()?.checks || {};
    const current = draft && context && song ? cleanRecord(draft, context, song).checks : {};
    dirty = JSON.stringify(current) !== JSON.stringify(saved);
    $("#dirty-indicator").hidden = !dirty;
  }
  function persist() {
    project.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(KEY, JSON.stringify(project));
      return true;
    } catch (e) {
      toast("Enregistrement impossible. Exporte le projet en JSON.", true);
      return false;
    }
  }
  function saveDraft(showMessage = false) {
    if (step === 3 && context && song && draft) {
      const record = cleanRecord(draft, context, song);
      record.savedAt = new Date().toISOString();
      const key = refKey(context, song),
        prior = project.records[key];
      project.records[key] = record;
      if (!persist()) {
        if (prior) project.records[key] = prior;
        else delete project.records[key];
        return false;
      }
      draft = structuredClone(record);
      dirty = false;
      syncDirty();
    } else if (!persist()) return false;
    if (showMessage) toast("Enregistré dans ce navigateur.");
    return true;
  }
  function toast(message, isError = false) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.toggle("error", isError);
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => (el.hidden = true), 3400);
  }
  function count(contextId) {
    return Object.values(project.records).filter((r) => r.context === contextId).length;
  }
  function checkedCount(record) {
    if (!record) return 0;
    return Object.values(record.checks).filter((v) => v.status === "ok" || v.status === "fix").length;
  }
  function render() {
    $("#step-label").textContent = `${String(step).padStart(2, "0")} / 04`;
    $("#saved-label").textContent = step === 3 ? `${checkedCount(draft)} / ${questions[context].length} vérifiés` : "";
    document.querySelectorAll(".steps span").forEach((el, i) => {
      el.className = i + 1 === step ? "step-on" : i + 1 < step ? "step-done" : "";
    });
    $("#back-btn").disabled = step === 1;
    const root = $("#screen");
    root.innerHTML = step === 1 ? renderContexts() : step === 2 ? renderSongs() : step === 3 ? renderQuestions() : renderComplete();
    if (step === 3) updateProgress();
    syncStickyHeading();
  }
  function showStep(n) {
    step = n;
    closeMenu();
    render();
    window.scrollTo(0, 0);
  }
  function renderContexts() {
    return `<p class="kicker">Étape 1</p><h1>Sur quoi écoutes-tu ?</h1><p class="lead">Choisis un système d’écoute.</p>
    <div class="selection-list">${SYSTEMS.map((s, i) => `<button type="button" class="select-card" data-context="${s.id}"><span class="number">0${i + 1}</span><span class="copy"><strong>${esc(s.label)}</strong><small>${esc(s.summary)}${count(s.id) ? ` · ${count(s.id)} écoute${count(s.id) > 1 ? "s" : ""} enregistrée${count(s.id) > 1 ? "s" : ""}` : ""}</small></span><span class="arrow" aria-hidden="true">›</span></button>`).join("")}</div>`;
  }
  function renderSongs() {
    const s = systemsMap.get(context);
    return `<p class="kicker">Étape 2 · ${esc(s.label)}</p><h1>Quel morceau ?</h1><p class="lead">Choisis le morceau à tester.</p><div class="song-grid">${SONGS.map(
      (name, i) => {
        const record = project.records[refKey(context, name)];
        return `<button type="button" class="select-card song-card" data-song="${esc(name)}"><span class="number">${String(i + 1).padStart(2, "0")}</span><span class="copy"><strong>${esc(name)}</strong>${record ? `<small>${checkedCount(record)} / ${questions[context].length} critères renseignés</small>` : ""}</span>${record ? '<span class="state">Enregistré</span>' : '<span class="arrow" aria-hidden="true">›</span>'}</button>`;
      },
    ).join("")}</div>`;
  }
  function renderQuestions() {
    const s = systemsMap.get(context);
    let n = 0;
    return `<p class="kicker">Étape 3 · ${esc(s.label)}</p><span id="sticky-heading-sentinel" class="sticky-heading-sentinel" aria-hidden="true"></span><div class="question-sticky" id="question-sticky"><div class="question-top"><h1>${esc(song)}</h1><span class="question-meta" id="question-meta">0 / ${questions[context].length}</span></div><div class="progress-track" role="progressbar" aria-label="Critères renseignés" aria-valuemin="0" aria-valuemax="${questions[context].length}" aria-valuenow="0" id="progress-track"><div id="progress-fill" class="progress-fill"></div></div></div>
    <div class="context-note">${esc(s.tip)}</div>
    ${FORMS[context].map((group, gi) => `<section class="category" aria-label="${esc(group.title)}"><div class="category-head"><h2>${esc(group.title)}</h2><span class="category-count" data-group="${gi}"></span></div>${group.items.map((item) => questionHTML(item, ++n)).join("")}</section>`).join("")}
    <div class="actions"><button type="button" class="btn btn-accent wide" data-action="finish">Enregistrer cette écoute</button></div><p class="saving-hint">Tu pourras ensuite passer à un autre morceau.</p>`;
  }
  function questionHTML(item, index) {
    const answer = draft.checks[item.id] || { status: "nt", comment: "" };
    const opened = Boolean(answer.comment);
    return `<article class="question" data-question="${item.id}"><div class="question-heading"><span class="question-num">${String(index).padStart(2, "0")}</span><div class="question-title">${esc(item.title)}</div><button type="button" class="help-btn" data-action="help" aria-label="Aide : ${esc(item.title)}" title="Que faut-il écouter ?" aria-controls="help-${item.id}" aria-expanded="false">?</button></div>
    <div class="help-panel" id="help-${item.id}" hidden><p><strong>Écoute :</strong> ${esc(item.focus)}</p><p><strong>À entendre :</strong> ${esc(item.good)}</p><p><strong>À signaler :</strong> ${esc(item.bad)}</p></div>
    <div class="rating-row" role="group" aria-label="${esc(item.title)}">${Object.entries(labels)
      .map(
        ([val, title]) =>
          `<button type="button" class="rating" data-status="${val}" data-action="status" aria-pressed="${answer.status === val}">${title}</button>`,
      )
      .join("")}</div>
    <div class="question-foot"><button type="button" class="text-btn" data-action="comment" aria-controls="comment-${item.id}" aria-expanded="${opened}">${opened ? "Masquer la précision" : "+ Ajouter une précision"}</button></div>
    <div id="comment-${item.id}" class="comment-wrap" ${!opened ? "hidden" : ""}><label for="field-${item.id}">Précision facultative (extrait, problème constaté…)</label><textarea id="field-${item.id}" data-comment="${item.id}" maxlength="3000" placeholder="Ex. : À 1:20, la basse devient difficile à suivre.">${esc(answer.comment)}</textarea></div></article>`;
  }
  function renderComplete() {
    const s = systemsMap.get(success.context),
      nextIdx = (SONGS.indexOf(success.song) + 1) % SONGS.length,
      next = SONGS[nextIdx],
      r = project.records[refKey(success.context, success.song)];
    return `<div class="done-panel"><div class="done-band"></div><div class="done-content"><div class="done-mark" aria-hidden="true">✓</div><p class="kicker">Étape 4</p><h1>Écoute enregistrée.</h1><p>Tu peux continuer avec un autre morceau ou changer de système.</p><div class="done-facts"><div><span>Système</span><strong>${esc(s.label)}</strong></div><div><span>Morceau</span><strong>${esc(success.song)}</strong></div><div><span>Critères renseignés</span><strong>${checkedCount(r)} / ${questions[success.context].length}</strong></div></div><div class="actions"><button type="button" class="btn btn-accent wide" data-action="next-song" data-song="${esc(next)}">Tester le suivant : ${esc(next)}</button><button type="button" class="btn btn-outline" data-action="choose-song">Choisir un morceau</button><button type="button" class="btn btn-outline" data-action="choose-context">Changer de système</button></div></div></div>`;
  }
  function updateProgress() {
    if (step !== 3) return;
    const total = questions[context].length,
      done = checkedCount(draft);
    $("#saved-label").textContent = `${done} / ${total} vérifiés`;
    $("#question-meta").textContent = `${done} / ${total}`;
    $("#progress-fill").style.width = `${(done / total) * 100}%`;
    $("#progress-track").setAttribute("aria-valuenow", done);
    FORMS[context].forEach((group, i) => {
      const answered = group.items.filter((x) => ["ok", "fix"].includes(draft.checks[x.id]?.status)).length;
      const el = document.querySelector(`[data-group="${i}"]`);
      if (el) el.textContent = `${answered}/${group.items.length}`;
    });
  }
  // L'ancre précède l'en-tête sticky : sa position ne varie pas avec la compaction.
  // Le titre et la progression restent sous la top bar pendant toute l'écoute.
  function syncStickyHeading() {
    const heading = $("#question-sticky"),
      sentinel = $("#sticky-heading-sentinel");
    if (step !== 3 || !heading || !sentinel) return;
    const toolbarBottom = document.querySelector(".topbar").getBoundingClientRect().bottom;
    heading.classList.toggle("is-compact", sentinel.getBoundingClientRect().top <= toolbarBottom);
  }
  let stickyUpdatePending = false;
  function scheduleStickyHeading() {
    if (stickyUpdatePending) return;
    stickyUpdatePending = true;
    requestAnimationFrame(() => {
      stickyUpdatePending = false;
      syncStickyHeading();
    });
  }
  window.addEventListener("scroll", scheduleStickyHeading, { passive: true });
  window.addEventListener("resize", scheduleStickyHeading, { passive: true });
  function closeMenu() {
    $("#menu-panel").hidden = true;
    $("#menu-btn").setAttribute("aria-expanded", "false");
    $("#menu-btn").setAttribute("aria-label", "Ouvrir le menu");
    $("#menu-backdrop").hidden = true;
  }
  function toggleMenu() {
    const open = $("#menu-panel").hidden;
    $("#menu-panel").hidden = !open;
    $("#menu-btn").setAttribute("aria-expanded", String(open));
    $("#menu-btn").setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    $("#menu-backdrop").hidden = !open;
  }
  function guarded(fn) {
    closeMenu();
    if (!dirty) {
      fn();
      return;
    }
    pending = fn;
    $("#unsaved-dialog").showModal();
  }
  function navigateBack() {
    if (step === 4) {
      startDraft();
      showStep(3);
    } else if (step === 3) {
      guarded(() => showStep(2));
    } else if (step === 2) showStep(1);
  }
  function nextSong(name) {
    song = name;
    startDraft();
    showStep(3);
  }
  function finish() {
    if (!saveDraft()) return;
    success = { context, song };
    showStep(4);
  }
  function exportProject() {
    const data = JSON.stringify({ ...project, exportedAt: new Date().toISOString() }, null, 2);
    download(new Blob([data], { type: "application/json;charset=utf-8" }), `check-list-ecoute-${new Date().toISOString().slice(0, 10)}.json`);
    toast("Projet JSON exporté.");
  }
  function download(blob, filename) {
    const url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 20000);
  }
  async function importProject(file) {
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      toast("Fichier trop volumineux.", true);
      return;
    }
    try {
      const incoming = normalize(JSON.parse(await file.text()));
      if (!confirm("Remplacer toutes les écoutes locales par celles de ce fichier ? Exporte les données actuelles si tu veux les conserver.")) return;
      const previous = project;
      project = incoming;
      if (!persist()) {
        project = previous;
        return;
      }
      context = null;
      song = null;
      draft = null;
      dirty = false;
      syncDirty();
      showStep(1);
      toast("Projet chargé.");
    } catch (e) {
      toast(`Import impossible : ${e.message}`, true);
    }
  }
  function clearAll() {
    if (!confirm("Effacer toutes les écoutes de ce navigateur ? Cette action est irréversible sans export JSON.")) return;
    const previous = project;
    project = blank();
    if (!persist()) {
      project = previous;
      return;
    }
    context = null;
    song = null;
    draft = null;
    dirty = false;
    syncDirty();
    showStep(1);
    toast("Données locales effacées.");
  }
  function menuAction(action) {
    if (action === "save") {
      closeMenu();
      if (saveDraft(true) && step !== 3) render();
      return;
    }
    if (action === "export") {
      guarded(exportProject);
      return;
    }
    if (action === "import") {
      guarded(() => {
        $("#file-input").value = "";
        $("#file-input").click();
      });
      return;
    }
    if (action === "pdf") {
      guarded(() => {
        if (!Object.keys(project.records).length) {
          toast("Aucune écoute enregistrée à exporter.", true);
          return;
        }
        try {
          download(makePDF(project), `check-list-ecoute-${new Date().toISOString().slice(0, 10)}.pdf`);
          toast("Rapport PDF exporté.");
        } catch (e) {
          console.error(e);
          toast("Impossible de créer le PDF.", true);
        }
      });
      return;
    }
    if (action === "contexts") {
      guarded(() => showStep(1));
      return;
    }
    if (action === "songs") {
      if (!context) {
        closeMenu();
        toast("Choisis d’abord un système d’écoute.");
        return;
      }
      guarded(() => showStep(2));
      return;
    }
    if (action === "reset") {
      guarded(clearAll);
    }
  }
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-context]")) {
      context = e.target.closest("[data-context]").dataset.context;
      showStep(2);
      return;
    }
    if (e.target.closest("[data-song]") && !e.target.closest('[data-action="next-song"]')) {
      nextSong(e.target.closest("[data-song]").dataset.song);
      return;
    }
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    if (btn.dataset.action === "help") {
      const target = $("#" + btn.getAttribute("aria-controls"));
      const on = btn.getAttribute("aria-expanded") === "true";
      target.hidden = on;
      btn.setAttribute("aria-expanded", String(!on));
    }
    if (btn.dataset.action === "comment") {
      const target = $("#" + btn.getAttribute("aria-controls"));
      const on = btn.getAttribute("aria-expanded") === "true";
      target.hidden = on;
      btn.setAttribute("aria-expanded", String(!on));
      btn.textContent = on ? "+ Ajouter une précision" : "Masquer la précision";
      if (!on) target.querySelector("textarea").focus();
    }
    if (btn.dataset.action === "status") {
      const itemId = btn.closest("[data-question]").dataset.question;
      const prev = draft.checks[itemId] || { status: "nt", comment: "" };
      draft.checks[itemId] = { ...prev, status: btn.dataset.status };
      btn
        .closest(".rating-row")
        .querySelectorAll(".rating")
        .forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
      syncDirty();
      updateProgress();
    }
    if (btn.dataset.action === "finish") finish();
    if (btn.dataset.action === "next-song") nextSong(btn.dataset.song);
    if (btn.dataset.action === "choose-song") showStep(2);
    if (btn.dataset.action === "choose-context") showStep(1);
  });
  document.addEventListener("input", (e) => {
    if (!e.target.hasAttribute("data-comment") || step !== 3) return;
    const itemId = e.target.dataset.comment;
    const prev = draft.checks[itemId] || { status: "nt", comment: "" };
    draft.checks[itemId] = { ...prev, comment: e.target.value };
    syncDirty();
  });
  $("#back-btn").addEventListener("click", navigateBack);
  $("#menu-btn").addEventListener("click", toggleMenu);
  $("#menu-backdrop").addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#menu-panel").hidden) closeMenu();
  });
  document.querySelectorAll("[data-menu-action]").forEach((btn) => btn.addEventListener("click", () => menuAction(btn.dataset.menuAction)));
  $("#file-input").addEventListener("change", (e) => importProject(e.target.files?.[0]));
  document.querySelectorAll("[data-dialog]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const choice = btn.dataset.dialog;
      $("#unsaved-dialog").close();
      if (choice === "cancel") {
        pending = null;
        return;
      }
      if (choice === "save" && !saveDraft(true)) {
        pending = null;
        return;
      }
      if (choice === "discard") {
        startDraft();
      }
      const task = pending;
      pending = null;
      if (task) task();
    }),
  );
  $("#unsaved-dialog").addEventListener("close", () => {
    pending = null;
  });
  window.addEventListener("beforeunload", (e) => {
    if (dirty) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
  /* Mini moteur PDF vectoriel autonome : texte sélectionnable, format A4, aucune bibliothèque ni connexion. */
  const PT = { width: 595.28, height: 841.89, left: 43, right: 551, bottom: 790 };
  const PDF_COLORS = {
    ink: [0.09, 0.14, 0.15],
    muted: [0.37, 0.44, 0.43],
    lime: [0.82, 0.95, 0.42],
    pale: [0.94, 0.96, 0.92],
    line: [0.83, 0.87, 0.83],
    white: [1, 1, 1],
    red: [0.58, 0.25, 0.2],
    redPale: [0.99, 0.92, 0.89],
    green: [0.17, 0.36, 0.21],
  };
  const replaceCP1252 = {
    0x20ac: 128,
    0x201a: 130,
    0x0192: 131,
    0x201e: 132,
    0x2026: 133,
    0x2020: 134,
    0x2021: 135,
    0x02c6: 136,
    0x2030: 137,
    0x0160: 138,
    0x2039: 139,
    0x0152: 140,
    0x017d: 142,
    0x2018: 145,
    0x2019: 146,
    0x201c: 147,
    0x201d: 148,
    0x2022: 149,
    0x2013: 150,
    0x2014: 151,
    0x02dc: 152,
    0x2122: 153,
    0x0161: 154,
    0x203a: 155,
    0x0153: 156,
    0x017e: 158,
    0x0178: 159,
  };
  function asLatin1(text) {
    let out = "";
    for (const ch of String(text)) {
      const cp = ch.codePointAt(0);
      if (cp <= 255) out += String.fromCharCode(cp);
      else if (replaceCP1252[cp]) out += String.fromCharCode(replaceCP1252[cp]);
      else out += "?";
    }
    return out;
  }
  const pdfEscape = (text) =>
    asLatin1(text)
      .replaceAll("\\", "\\\\")
      .replaceAll("(", "\\(")
      .replaceAll(")", "\\)")
      .replace(/[\r\n]/g, " ");
  const rgb = (color) => color.map((n) => n.toFixed(3)).join(" ");
  class SimplePDF {
    constructor() {
      this.pages = [];
      this.page = null;
      this.measureCtx = document.createElement("canvas").getContext("2d");
    }
    newPage() {
      const page = { content: [], y: 117 };
      this.pages.push(page);
      this.page = page;
      this.rect(0, 0, PT.width, 80, PDF_COLORS.ink);
      this.rect(PT.left, 76, 65, 4, PDF_COLORS.lime);
      this.text("CHECK-LIST D'ÉCOUTE", PT.left, 24, 16, true, PDF_COLORS.white);
      this.text("RAPPORT DES TESTS D'ÉCOUTE", PT.left, 51, 10, true, PDF_COLORS.white);
      this.text(`PAGE ${String(this.pages.length).padStart(2, "0")}`, PT.right - 58, 33, 9, true, PDF_COLORS.lime);
      this.line(PT.left, 809, PT.right, 809, PDF_COLORS.line, 0.75);
      this.text("CHECK-LIST D'ÉCOUTE", PT.left, 817, 8, false, PDF_COLORS.muted);
      this.text("Document généré localement", PT.right - 126, 817, 8, false, PDF_COLORS.muted);
    }
    rect(x, y, w, h, color) {
      this.page.content.push(`${rgb(color)} rg\n${x.toFixed(2)} ${(PT.height - y - h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f\n`);
    }
    line(x1, y1, x2, y2, color, width = 1) {
      this.page.content.push(
        `${rgb(color)} RG\n${width} w\n${x1.toFixed(2)} ${(PT.height - y1).toFixed(2)} m ${x2.toFixed(2)} ${(PT.height - y2).toFixed(2)} l S\n`,
      );
    }
    text(str, x, y, size = 11, bold = false, color = PDF_COLORS.ink) {
      this.page.content.push(
        `BT\n${rgb(color)} rg\n/${bold ? "F2" : "F1"} ${size} Tf\n1 0 0 1 ${x.toFixed(2)} ${(PT.height - y - size).toFixed(2)} Tm\n(${pdfEscape(str)}) Tj\nET\n`,
      );
    }
    measure(text, size, bold = false) {
      if (this.measureCtx) {
        this.measureCtx.font = `${bold ? "700 " : ""}${size}px Helvetica, Arial, sans-serif`;
        return this.measureCtx.measureText(text).width;
      }
      return String(text).length * size * 0.58;
    }
    wrap(text, maxWidth, size = 10, bold = false) {
      const output = [];
      for (const para of String(text).replace(/\r/g, "").split("\n")) {
        if (!para.trim()) {
          output.push("");
          continue;
        }
        let line = "";
        for (const word of para.split(/\s+/)) {
          const next = line ? `${line} ${word}` : word;
          if (this.measure(next, size, bold) <= maxWidth * 0.96) {
            line = next;
            continue;
          }
          if (line) {
            output.push(line);
            line = "";
          }
          if (this.measure(word, size, bold) > maxWidth * 0.96) {
            let chunk = "";
            for (const letter of word) {
              if (this.measure(chunk + letter, size, bold) > maxWidth * 0.96) {
                if (chunk) output.push(chunk);
                chunk = letter;
              } else chunk += letter;
            }
            line = chunk;
          } else line = word;
        }
        if (line) output.push(line);
      }
      return output;
    }
    ensure(height) {
      if (this.page.y + height > PT.bottom) {
        this.newPage();
      }
    }
    paragraphs(text, x, width, { size = 10, lineHeight = 15, color = PDF_COLORS.ink, bold = false, indent = 0 } = {}) {
      const lines = this.wrap(text, width, size, bold);
      for (const line of lines) {
        this.ensure(lineHeight + 2);
        if (line) this.text(line, x + indent, this.page.y, size, bold, color);
        this.page.y += lineHeight;
      }
    }
    section(title) {
      this.ensure(55);
      this.rect(PT.left, this.page.y, PT.right - PT.left, 29, PDF_COLORS.pale);
      this.text(title, PT.left + 11, this.page.y + 6, 11, true);
      this.page.y += 39;
    }
    item(index, item, entry, categoryName) {
      const status = entry?.status || "nt";
      const label = labels[status] || "Non testé";
      const comment = entry?.comment || "";
      const desc = this.wrap(`${index}. ${item.title}`, 413, 10.5, true);
      const pageBefore = this.pages.length;
      this.ensure(27 + desc.length * 14);
      if (this.pages.length > pageBefore && categoryName) this.section(`${categoryName.toUpperCase()} (SUITE)`);
      const top = this.page.y;
      const bg = status === "fix" ? PDF_COLORS.redPale : status === "ok" ? [0.92, 0.97, 0.82] : PDF_COLORS.pale;
      this.rect(PT.left, top, 77, 23, bg);
      this.text(
        label.toUpperCase(),
        PT.left + 7,
        top + 7,
        8,
        true,
        status === "fix" ? PDF_COLORS.red : status === "ok" ? PDF_COLORS.green : PDF_COLORS.muted,
      );
      desc.forEach((line, i) => this.text(line, PT.left + 89, top + 3 + i * 14, 10.5, true));
      this.page.y += Math.max(30, desc.length * 14 + 8);
      if (comment.trim()) {
        this.ensure(22);
        this.text("PRECISION :", PT.left + 89, this.page.y, 8, true, PDF_COLORS.muted);
        this.page.y += 14;
        this.paragraphs(comment, PT.left + 89, PT.right - PT.left - 100, { size: 9.5, lineHeight: 14, color: PDF_COLORS.muted });
        this.page.y += 5;
      }
      this.line(PT.left, this.page.y + 1, PT.right, this.page.y + 1, PDF_COLORS.line, 0.55);
      this.page.y += 10;
    }
    blob() {
      // Objet 1 : catalogue ; objet 2 : arbre de pages ; objets 3 et 4 : fontes.
      const objects = [
        "",
        "<< /Type /Catalog /Pages 2 0 R >>",
        "",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
        "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
      ];
      const pageRefs = [];
      this.pages.forEach((page) => {
        const pageNum = objects.length;
        const stream = page.content.join("");
        const contentNum = pageNum + 1;
        objects.push(
          `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PT.width} ${PT.height}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentNum} 0 R >>`,
        );
        objects.push(`<< /Length ${asLatin1(stream).length} >>\nstream\n${stream}endstream`);
        pageRefs.push(`${pageNum} 0 R`);
      });
      objects[2] = `<< /Type /Pages /Kids [${pageRefs.join(" ")}] /Count ${pageRefs.length} >>`;
      let output = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
      const offsets = [0];
      for (let i = 1; i < objects.length; i++) {
        offsets.push(output.length);
        output += `${i} 0 obj\n${objects[i]}\nendobj\n`;
      }
      const xref = output.length;
      output += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
      for (let i = 1; i < objects.length; i++) output += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
      output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
      const data = new Uint8Array(output.length);
      for (let i = 0; i < output.length; i++) data[i] = output.charCodeAt(i) & 255;
      return new Blob([data], { type: "application/pdf" });
    }
  }
  function makePDF(data) {
    const pdf = new SimplePDF();
    pdf.newPage();
    const ordered = [];
    for (const sys of SYSTEMS)
      for (const name of SONGS) {
        const r = data.records[refKey(sys.id, name)];
        if (r) ordered.push(r);
      }
    pdf.text("COMPTE RENDU D’ECOUTE", PT.left, pdf.page.y, 21, true);
    pdf.page.y += 37;
    pdf.text(`Généré le ${new Date().toLocaleDateString("fr-FR")}`, PT.left, pdf.page.y, 10, false, PDF_COLORS.muted);
    pdf.page.y += 31;
    pdf.rect(PT.left, pdf.page.y, PT.right - PT.left, 64, PDF_COLORS.pale);
    pdf.text(`${ordered.length}`, PT.left + 15, pdf.page.y + 6, 25, true);
    pdf.text("ECOUTES ENREGISTREES", PT.left + 15, pdf.page.y + 43, 9, true, PDF_COLORS.muted);
    pdf.page.y += 89;
    pdf.paragraphs(
      "Chaque écoute correspond à un morceau testé sur un système. OK = résultat satisfaisant ; À revoir = problème repéré ; Non testé = point non évalué. Les commentaires facultatifs figurent sous les critères.",
      PT.left,
      PT.right - PT.left,
      { size: 10, lineHeight: 16 },
    );
    pdf.page.y += 20;
    pdf.section("LISTE DES ECOUTES");
    ordered.forEach((record, i) => {
      pdf.ensure(60);
      const sys = systemsMap.get(record.context),
        total = questions[record.context].length;
      pdf.paragraphs(`${String(i + 1).padStart(2, "0")}. ${record.song} / ${sys.label}`, PT.left + 7, PT.right - PT.left - 14, {
        size: 11,
        lineHeight: 15,
        bold: true,
      });
      pdf.text(`${checkedCount(record)}/${total} critères renseignés`, PT.left + 7, pdf.page.y + 3, 9, false, PDF_COLORS.muted);
      pdf.page.y += 31;
      pdf.line(PT.left, pdf.page.y, PT.right, pdf.page.y, PDF_COLORS.line, 0.7);
      pdf.page.y += 13;
    });
    ordered.forEach((record, i) => {
      pdf.newPage();
      const sys = systemsMap.get(record.context);
      pdf.text(
        `ECOUTE ${String(i + 1).padStart(2, "0")} / ${String(ordered.length).padStart(2, "0")}`,
        PT.left,
        pdf.page.y,
        10,
        true,
        PDF_COLORS.muted,
      );
      pdf.page.y += 24;
      pdf.paragraphs(record.song, PT.left, PT.right - PT.left, { size: 21, lineHeight: 26, bold: true });
      pdf.page.y += 9;
      pdf.paragraphs(
        `${sys.label}  |  ${checkedCount(record)}/${questions[record.context].length} critères renseignés`,
        PT.left,
        PT.right - PT.left,
        { size: 10, lineHeight: 15, color: PDF_COLORS.muted },
      );
      pdf.page.y += 8;
      if (record.savedAt) {
        pdf.paragraphs(`Enregistré le ${new Date(record.savedAt).toLocaleDateString("fr-FR")}`, PT.left, PT.right - PT.left, {
          size: 9,
          lineHeight: 15,
          color: PDF_COLORS.muted,
        });
        pdf.page.y += 8;
      }
      let j = 0;
      FORMS[record.context].forEach((group, gi) => {
        pdf.section(`${gi + 1} / ${group.title.toUpperCase()}`);
        group.items.forEach((item) => pdf.item(String(++j).padStart(2, "0"), item, record.checks[item.id], group.title));
        pdf.page.y += 6;
      });
    });
    return pdf.blob();
  }
  render();
})();
