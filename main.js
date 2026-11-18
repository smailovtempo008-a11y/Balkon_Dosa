(function () {
  var PHONE = '77076174116';
  var D = {
    kk: {
      navServices: 'Қызметтер', navSteps: 'Қалай жұмыс істейміз', navProjects: 'Жобалар', navCta: 'Өтінім беру',
      eyebrow: 'Балконды әйнектеу және өңдеу',
      h1: 'Балкон үйдің ең жарық бөлмесіне айналады',
      lead: 'Демонтаждан бастап терезе, шкаф орнату мен утеплениеге дейін бәрін өзіміз орындаймыз. Күні-түні қоңырау шалыңыз.',
      heroCta: 'Өтінім беру', svgLabel: 'Әйнектелген балкон сұлбасы',
      servicesTitle: 'Біз не істейміз',
      s1: 'Демонтаж', s1d: 'Ескі әйнектер мен өңдеуді таза әрі ұқыпты бөлшектейміз',
      s2: 'Терезе орнату', s2d: 'Балконға қолайлы терезелерді өлшемге қарай орнатамыз',
      s3: 'Шкаф орнату', s3d: 'Балкон өлшеміне дәл жасалған кіріктірме шкаф',
      s4: 'Утепление', s4d: 'Балкон жыл бойы жылы болуы үшін оқшаулау жұмыстары',
      stepsEyebrow: 'Жұмыс тәртібі', stepsLead: 'Төрт қадам, әрқайсысында не болатыны алдын ала белгілі.',
      p1: 'Өлшеу', p1d: 'Балконды өлшеп, тілектеріңізді тыңдаймыз',
      p2: 'Демонтаж', p2d: 'Ескі терезелер мен өңдеуді алып тастаймыз',
      p3: 'Орнату және утепление', p3d: 'Терезе, шкаф орнатып, балконды оқшаулаймыз',
      p4: 'Тапсыру', p4d: 'Жұмысты тексеріп, тазалап, дайын балконды тапсырамыз',
      projectsTitle: 'Орындалған жұмыстар',
      a1: 'Ағаш панелі мен жарық сызығы бар балкон', n1: 'Ағаш панелі бар балкон', n1d: 'Шина жарықтары мен жарық сызығы',
      a2: 'Ақ терезелері мен кіріктірме шкафы бар ұзын балкон', n2: 'Шкафы бар ұзын балкон', n2d: 'Ақ терезелер, кіріктірме шкаф, ламинат',
      a3: 'Қара терезелері мен рейка панелі бар балкон', n3: 'Қара терезелі балкон', n3d: 'Рейка панелі және төбедегі жарық сызығы',
      formTitle: 'Өтінім беру', formLead: 'Форманы толтырыңыз, хабарлама WhatsApp-та дайын болып ашылады.',
      fName: 'Атыңыз', phName: 'Мысалы, Асхат', fPhone: 'Телефон', fService: 'Не істеу керек',
      o1: 'Демонтаж', o2: 'Терезе орнату', o3: 'Шкаф орнату', o4: 'Утепление', o5: 'Кеңес керек',
      fNote: 'Қосымша тілек', phNote: 'Балкон өлшемі немесе қандай нәтиже керек',
      send: 'WhatsApp-қа жіберу', sendNote: 'WhatsApp ашылады, онда «Жіберу» батырмасын басыңыз.',
      hours: 'Жұмыс уақыты', footer: 'Балкондарды әйнектеу және өңдеу · © 2026',
      msgHead: 'Сәлеметсіз бе! Dosa Balkon-ға өтінім.', msgSvc: 'Қызмет', msgName: 'Аты', msgPhone: 'Телефон', msgNote: 'Тілек'
    },
    ru: {
      navServices: 'Услуги', navSteps: 'Как мы работаем', navProjects: 'Проекты', navCta: 'Оставить заявку',
      eyebrow: 'Остекление и отделка балконов',
      h1: 'Балкон станет самой светлой комнатой дома',
      lead: 'От демонтажа до установки окон, шкафа и утепления всё делаем сами. Звоните в любое время.',
      heroCta: 'Оставить заявку', svgLabel: 'Схема остеклённого балкона',
      servicesTitle: 'Что мы делаем',
      s1: 'Демонтаж', s1d: 'Аккуратно демонтируем старое остекление и отделку',
      s2: 'Установка окон', s2d: 'Ставим окна по размерам вашего балкона',
      s3: 'Установка шкафа', s3d: 'Встроенный шкаф точно под размеры балкона',
      s4: 'Утепление', s4d: 'Утепляем балкон, чтобы он был тёплым круглый год',
      stepsEyebrow: 'Порядок работы', stepsLead: 'Четыре шага, и на каждом заранее понятно, что происходит.',
      p1: 'Замер', p1d: 'Измеряем балкон и слушаем ваши пожелания',
      p2: 'Демонтаж', p2d: 'Убираем старые окна и отделку',
      p3: 'Установка и утепление', p3d: 'Устанавливаем окна, шкаф и утепляем балкон',
      p4: 'Сдача', p4d: 'Проверяем работу, убираем и сдаём готовый балкон',
      projectsTitle: 'Выполненные работы',
      a1: 'Балкон с деревянной панелью и световой линией', n1: 'Балкон с деревянной панелью', n1d: 'Трековые светильники и световая линия',
      a2: 'Длинный балкон с белыми окнами и встроенным шкафом', n2: 'Длинный балкон со шкафом', n2d: 'Белые окна, встроенный шкаф, ламинат',
      a3: 'Балкон с чёрными окнами и реечной панелью', n3: 'Балкон с чёрными окнами', n3d: 'Реечная панель и световая линия на потолке',
      formTitle: 'Оставить заявку', formLead: 'Заполните форму, и готовое сообщение откроется в WhatsApp.',
      fName: 'Ваше имя', phName: 'Например, Асхат', fPhone: 'Телефон', fService: 'Что нужно сделать',
      o1: 'Демонтаж', o2: 'Установка окон', o3: 'Установка шкафа', o4: 'Утепление', o5: 'Нужна консультация',
      fNote: 'Пожелания', phNote: 'Размер балкона или какой результат нужен',
      send: 'Отправить в WhatsApp', sendNote: 'Откроется WhatsApp, там нажмите «Отправить».',
      hours: 'Режим работы', footer: 'Остекление и отделка балконов · © 2026',
      msgHead: 'Здравствуйте! Заявка в Dosa Balkon.', msgSvc: 'Услуга', msgName: 'Имя', msgPhone: 'Телефон', msgNote: 'Пожелания'
    }
  };

  var lang = 'kk';
  try { var saved = localStorage.getItem('dosa-lang'); if (saved === 'ru' || saved === 'kk') lang = saved; } catch (e) {}

  var $ = function (id) { return document.getElementById(id); };
  var fName = $('f-name'), fPhone = $('f-phone'), fService = $('f-service'), fNote = $('f-note'), wa = $('wa');

  function updateWa() {
    var d = D[lang];
    var svc = fService.options[fService.selectedIndex].textContent;
    var name = fName.value.trim(), phone = fPhone.value.trim(), note = fNote.value.trim();
    var text = d.msgHead + '\n' + d.msgSvc + ': ' + svc + '\n' + d.msgName + ': ' + (name || '—') + '\n' + d.msgPhone + ': ' + (phone || '—') + (note ? '\n' + d.msgNote + ': ' + note : '');
    wa.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(text);
  }

  function apply() {
    var d = D[lang];
    document.documentElement.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll('[data-k]'), function (el) { var v = d[el.getAttribute('data-k')]; if (v) el.textContent = v; });
    Array.prototype.forEach.call(document.querySelectorAll('[data-k-ph]'), function (el) { var v = d[el.getAttribute('data-k-ph')]; if (v) el.setAttribute('placeholder', v); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-k-alt]'), function (el) { var v = d[el.getAttribute('data-k-alt')]; if (v) el.setAttribute('alt', v); });
    Array.prototype.forEach.call(document.querySelectorAll('[data-k-aria]'), function (el) { var v = d[el.getAttribute('data-k-aria')]; if (v) el.setAttribute('aria-label', v); });
    $('b-kk').setAttribute('aria-pressed', lang === 'kk' ? 'true' : 'false');
    $('b-ru').setAttribute('aria-pressed', lang === 'ru' ? 'true' : 'false');
    updateWa();
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem('dosa-lang', l); } catch (e) {}
    apply();
  }

  $('b-kk').addEventListener('click', function () { setLang('kk'); });
  $('b-ru').addEventListener('click', function () { setLang('ru'); });
  [fName, fPhone, fNote].forEach(function (el) { el.addEventListener('input', updateWa); });
  fService.addEventListener('change', updateWa);

  apply();
})();
