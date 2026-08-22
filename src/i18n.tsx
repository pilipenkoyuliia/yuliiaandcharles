import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "fr" | "uk";

const translations = {
  en: {
    languageName: "English",
    entry: {
      invitation: "YOU HAVE AN INVITATION",
      from: "from",
      open: "CLICK TO OPEN",
      envelopeAlt: "Wedding invitation envelope",
    },
    nav: { story: "Story", details: "Details", rsvp: "RSVP", faq: "FAQ" },
    hero: { date: "09 October 2026", location: "Vaucresson, France" },
    forever: {
      eyebrow: "THIS IS WHERE",
      title: "OUR FOREVER",
      script: "begins",
      paragraphs: [
        "With hearts full of gratitude, we invite you to join us as we exchange our vows and begin this new chapter.",
        "This day is not only a celebration of our love, but also of the family and friendships that have shaped us and brought us here.",
        "Having you with us would mean more than words can say.",
      ],
    },
    countdown: {
      title: "Our Next Chapter Begins In",
      days: "DAYS",
      hours: "HOURS",
      minutes: "MINUTES",
      seconds: "SECONDS",
    },
    story: {
      eyebrow: "THIS IS WHERE",
      title: "OUR STORY",
      script: "continues",
      paragraphs: [
        "Our story began quietly—with easy conversations, even when we were speaking in languages that were not our own, and with the comforting feeling of finding home in another person.",
        "Over time, we built a life filled with small moments of understanding, support, laughter, and care. Through every season of life—the challenging ones and the beautifully simple ones—we kept choosing each other, again and again.",
        "What we love most about our story is how natural it feels to simply be together. Wherever we are, life feels a little brighter when we are side by side.",
      ],
    },
    details: {
      date: "DATE",
      and: "and",
      venue: "VENUE",
      dateLine: "Friday, 09 October 2026",
      ceremony: "Wedding ceremony",
      townHall: ["Vaucresson", "Town Hall"],
      dinner: "Wedding dinner",
      chateau: ["Château", "De Prunay"],
      vaucressonAddress: ["8 Grande Rue,", "92420", "Vaucresson, France"],
      chateauAddress: ["19 Chem. de Prunay", "78430", "Louveciennes, France"],
      viewMap: "View on Google Maps ↗",
      venueAlt: "Wedding venue",
    },
    timeline: {
      title: "WEDDING",
      script: "timeline",
      rows: ["Ceremony", "Welcome", "Cocktails", "Photos", "Dinner", "Cake", "Party", "The end"],
    },
    dress: {
      title: "DRESS",
      script: "code",
      intro: "We would love for our wedding day to feel timeless, elegant, and romantic.",
      guidance: "Elegant black, light neutral, and soft pastel tones. Gentlemen are invited to wear black or light-colored suits. Ladies are invited to wear black or light outfits in soft pastel shades.",
      avoid: "We kindly ask you to avoid very bright or neon colors.",
      closing: "Most importantly, wear something that makes you feel beautiful, confident, and ready to celebrate with us.",
    },
    gifts: {
      title: "GIFTS",
      script: "fund",
      first: "The greatest gift we could receive is celebrating this special day with the people we love. Your presence, love, and support mean more to us than words can say.",
      second: "If you would like to honor us with a gift, we have created a wedding fund. You can find the details below.",
      button: "VIEW FUND DETAILS",
      buttonAria: "View our wedding fund details",
    },
    rsvp: {
      title: "LET US KNOW",
      intro: "We’d love for you to join us for our celebration.",
      deadline: "Please reply by 30 August 2026",
      thanks: "Thank you!",
      received: "We’ve received your RSVP and can’t wait to celebrate with you.",
      name: "Your full name (or both names, if replying as a couple)*",
      attendance: "Will you be joining us for our wedding celebration?*",
      attendingYes: "Absolutely — I/we wouldn’t miss it!",
      attendingNo: "Regretfully, I/we won’t be able to attend.",
      transport: "Will you need transportation from the ceremony to the château?*",
      yes: "Yes",
      no: "No",
      dietary: "Please let us know if you have any food allergies or dietary restrictions.",
      submit: "SUBMIT",
      sending: "SENDING...",
      privacy: "Your personal information will remain private.",
      required: "Please complete all required fields.",
      failed: "Something went wrong. Please try again.",
    },
    faq: {
      label: "FAQ",
      title: "GOOD TO KNOW",
      script: "a few answers",
      items: [
        ["Can I bring a plus-one?", "Due to limited seating, we can only accommodate the guests named on your invitation. If you would like to bring someone who is not listed, please contact us, and we’ll let you know if space allows."],
        ["How do I RSVP?", "Select “RSVP” from the menu to access the form. Please reply by 30 August 2026 so we can finalize all the details."],
        ["Are the ceremony and reception at the same location?", "No. The ceremony will take place at Vaucresson Town Hall, and the wedding dinner will be held at Château de Prunay, approximately 15 minutes away by car. Transportation from the Town Hall to the château will be provided for guests attending the ceremony."],
        ["Are children invited?", "We adore your little ones! As space is limited, please contact us with the details, and we’ll let you know what arrangements can be made."],
        ["Can I take photos during the ceremony?", "Absolutely! We simply ask that you remain mindful of our photographers so they can capture every special moment without interruption."],
        ["Is parking available?", "Yes. Parking is available near both Vaucresson Town Hall and Château de Prunay."],
      ],
    },
  },
  fr: {
    languageName: "Français",
    entry: {
      invitation: "VOUS AVEZ REÇU UNE INVITATION",
      from: "de",
      open: "CLIQUER POUR OUVRIR",
      envelopeAlt: "Enveloppe de l’invitation de mariage",
    },
    nav: { story: "Histoire", details: "Détails", rsvp: "RSVP", faq: "FAQ" },
    hero: { date: "09 octobre 2026", location: "Vaucresson, France" },
    forever: {
      eyebrow: "C’EST ICI QUE",
      title: "NOTRE ÉTERNITÉ",
      script: "commence",
      paragraphs: [
        "Le cœur rempli de gratitude, nous vous invitons à être à nos côtés lorsque nous échangerons nos vœux et commencerons ce nouveau chapitre.",
        "Cette journée célèbre non seulement notre amour, mais aussi les familles et les amitiés qui nous ont façonnés et conduits jusqu’ici.",
        "Votre présence à nos côtés compterait plus que les mots ne peuvent l’exprimer.",
      ],
    },
    countdown: {
      title: "Notre prochain chapitre commence dans",
      days: "JOURS",
      hours: "HEURES",
      minutes: "MINUTES",
      seconds: "SECONDES",
    },
    story: {
      eyebrow: "C’EST ICI QUE",
      title: "NOTRE HISTOIRE",
      script: "continue",
      paragraphs: [
        "Notre histoire a commencé tout doucement, par des conversations naturelles, même lorsque nous parlions dans des langues qui n’étaient pas les nôtres, et par ce sentiment réconfortant de trouver son chez-soi auprès de l’autre.",
        "Au fil du temps, nous avons construit une vie faite de petits moments de compréhension, de soutien, de rires et de tendresse. À chaque saison de la vie, dans les épreuves comme dans les instants les plus simples, nous avons continué à nous choisir, encore et encore.",
        "Ce que nous aimons le plus dans notre histoire, c’est combien il nous semble naturel d’être ensemble. Où que nous soyons, la vie paraît un peu plus lumineuse lorsque nous sommes côte à côte.",
      ],
    },
    details: {
      date: "DATE",
      and: "et",
      venue: "LIEUX",
      dateLine: "Vendredi 09 octobre 2026",
      ceremony: "Cérémonie civile",
      townHall: ["Mairie de", "Vaucresson"],
      dinner: "Dîner de mariage",
      chateau: ["Château", "De Prunay"],
      vaucressonAddress: ["8 Grande Rue,", "92420", "Vaucresson, France"],
      chateauAddress: ["19 Chem. de Prunay", "78430", "Louveciennes, France"],
      viewMap: "Voir sur Google Maps ↗",
      venueAlt: "Lieu du mariage",
    },
    timeline: {
      title: "MARIAGE",
      script: "programme",
      rows: ["Cérémonie", "Accueil", "Cocktail", "Photos", "Dîner", "Gâteau", "Soirée", "Fin"],
    },
    dress: {
      title: "TENUE",
      script: "souhaitée",
      intro: "Nous aimerions que notre journée de mariage soit intemporelle, élégante et romantique.",
      guidance: "Privilégiez le noir élégant, les tons neutres clairs et les pastels doux. Les messieurs sont invités à porter un costume noir ou clair. Les dames sont invitées à porter une tenue noire ou claire dans des tons pastel doux.",
      avoid: "Nous vous remercions d’éviter les couleurs très vives ou fluorescentes.",
      closing: "L’essentiel est de porter une tenue dans laquelle vous vous sentez beaux, confiants et prêts à célébrer avec nous.",
    },
    gifts: {
      title: "CADEAUX",
      script: "cagnotte",
      first: "Le plus beau cadeau que nous puissions recevoir est de célébrer cette journée avec les personnes que nous aimons. Votre présence, votre affection et votre soutien comptent plus que les mots ne peuvent l’exprimer.",
      second: "Si vous souhaitez nous offrir un cadeau, nous avons créé une cagnotte de mariage. Vous trouverez les informations ci-dessous.",
      button: "VOIR LES INFORMATIONS",
      buttonAria: "Voir les informations de notre cagnotte de mariage",
    },
    rsvp: {
      title: "RÉPONDEZ-NOUS",
      intro: "Nous serions très heureux de vous compter parmi nous.",
      deadline: "Merci de répondre avant le 30 août 2026",
      thanks: "Merci !",
      received: "Nous avons bien reçu votre réponse et avons hâte de célébrer avec vous.",
      name: "Votre nom complet (ou vos deux noms si vous répondez en couple)*",
      attendance: "Serez-vous présent(e) à notre mariage ?*",
      attendingYes: "Avec grand plaisir — je/nous ne manquerions cela pour rien au monde !",
      attendingNo: "À regret, je/nous ne pourrons pas être présents.",
      transport: "Aurez-vous besoin du transport entre la cérémonie et le château ?*",
      yes: "Oui",
      no: "Non",
      dietary: "Merci de nous indiquer vos éventuelles allergies ou restrictions alimentaires.",
      submit: "ENVOYER",
      sending: "ENVOI...",
      privacy: "Vos informations personnelles resteront confidentielles.",
      required: "Merci de remplir tous les champs obligatoires.",
      failed: "Une erreur s’est produite. Veuillez réessayer.",
    },
    faq: {
      label: "FAQ",
      title: "BON À SAVOIR",
      script: "quelques réponses",
      items: [
        ["Puis-je venir accompagné(e) ?", "Le nombre de places étant limité, nous ne pouvons accueillir que les personnes nommées sur votre invitation. Si vous souhaitez venir avec une personne qui n’y figure pas, contactez-nous et nous vous dirons si cela est possible."],
        ["Comment confirmer ma présence ?", "Sélectionnez « RSVP » dans le menu pour accéder au formulaire. Merci de répondre avant le 30 août 2026 afin que nous puissions finaliser tous les détails."],
        ["La cérémonie et la réception ont-elles lieu au même endroit ?", "Non. La cérémonie aura lieu à la mairie de Vaucresson et le dîner au Château de Prunay, à environ 15 minutes en voiture. Un transport entre la mairie et le château sera prévu pour les invités assistant à la cérémonie."],
        ["Les enfants sont-ils invités ?", "Nous adorons vos petits ! Le nombre de places étant limité, contactez-nous avec les détails et nous vous indiquerons ce qu’il est possible d’organiser."],
        ["Puis-je prendre des photos pendant la cérémonie ?", "Bien sûr ! Nous vous demandons simplement de veiller à ne pas gêner nos photographes afin qu’ils puissent immortaliser chaque moment important."],
        ["Y a-t-il un parking ?", "Oui. Des possibilités de stationnement sont disponibles près de la mairie de Vaucresson et du Château de Prunay."],
      ],
    },
  },
  uk: {
    languageName: "Українська",
    entry: {
      invitation: "ВИ ОТРИМАЛИ ЗАПРОШЕННЯ",
      from: "від",
      open: "НАТИСНІТЬ, ЩОБ ВІДКРИТИ",
      envelopeAlt: "Конверт із весільним запрошенням",
    },
    nav: { story: "Історія", details: "Деталі", rsvp: "RSVP", faq: "FAQ" },
    hero: { date: "09 жовтня 2026", location: "Вокрессон, Франція" },
    forever: {
      eyebrow: "САМЕ ТУТ",
      title: "НАШЕ НАЗАВЖДИ",
      script: "починається",
      paragraphs: [
        "Зі сповненими вдячності серцями ми запрошуємо вас розділити з нами мить, коли ми обміняємося обітницями й почнемо новий розділ нашого життя.",
        "Цей день — свято не лише нашого кохання, а й родини та дружби, які сформували нас і привели сюди.",
        "Ваша присутність означатиме для нас більше, ніж можна висловити словами.",
      ],
    },
    countdown: {
      title: "До початку нашого нового розділу",
      days: "ДНІ",
      hours: "ГОДИНИ",
      minutes: "ХВИЛИНИ",
      seconds: "СЕКУНДИ",
    },
    story: {
      eyebrow: "САМЕ ТУТ",
      title: "НАША ІСТОРІЯ",
      script: "триває",
      paragraphs: [
        "Наша історія почалася тихо — з легких розмов, навіть коли ми говорили мовами, що не були для нас рідними, і з теплого відчуття, ніби в іншій людині знаходиш дім.",
        "З часом ми створили життя, наповнене маленькими моментами розуміння, підтримки, сміху й турботи. У кожен період життя — складний чи напрочуд простий — ми знову і знову обирали одне одного.",
        "Найбільше в нашій історії ми любимо те, наскільки природно нам просто бути разом. Де б ми не були, життя стає трохи світлішим, коли ми поруч.",
      ],
    },
    details: {
      date: "ДАТА",
      and: "і",
      venue: "МІСЦЕ",
      dateLine: "П’ятниця, 09 жовтня 2026",
      ceremony: "Весільна церемонія",
      townHall: ["Мерія", "Вокрессона"],
      dinner: "Весільна вечеря",
      chateau: ["Château", "De Prunay"],
      vaucressonAddress: ["8 Grande Rue,", "92420", "Vaucresson, France"],
      chateauAddress: ["19 Chem. de Prunay", "78430", "Louveciennes, France"],
      viewMap: "Відкрити в Google Maps ↗",
      venueAlt: "Місце проведення весілля",
    },
    timeline: {
      title: "ВЕСІЛЛЯ",
      script: "програма",
      rows: ["Церемонія", "Зустріч гостей", "Коктейлі", "Фотосесія", "Вечеря", "Торт", "Вечірка", "Завершення"],
    },
    dress: {
      title: "ДРЕС",
      script: "код",
      intro: "Ми хочемо, щоб день нашого весілля був позачасовим, елегантним і романтичним.",
      guidance: "Обирайте елегантний чорний, світлі нейтральні та ніжні пастельні відтінки. Чоловіків запрошуємо обрати чорні або світлі костюми. Жінок — чорне або світле вбрання в м’яких пастельних тонах.",
      avoid: "Просимо уникати дуже яскравих і неонових кольорів.",
      closing: "Найважливіше — оберіть вбрання, у якому ви почуватиметеся красивими, впевненими й готовими святкувати разом із нами.",
    },
    gifts: {
      title: "ПОДАРУНКИ",
      script: "фонд",
      first: "Найцінніший подарунок для нас — розділити цей особливий день із людьми, яких ми любимо. Ваша присутність, любов і підтримка означають для нас більше, ніж можна висловити словами.",
      second: "Якщо ви захочете зробити нам подарунок, ми створили весільний фонд. Деталі можна переглянути нижче.",
      button: "ПЕРЕГЛЯНУТИ ДЕТАЛІ",
      buttonAria: "Переглянути деталі весільного фонду",
    },
    rsvp: {
      title: "ДАЙТЕ НАМ ЗНАТИ",
      intro: "Будемо дуже раді розділити це свято з вами.",
      deadline: "Будь ласка, дайте відповідь до 30 серпня 2026 року",
      thanks: "Дякуємо!",
      received: "Ми отримали вашу відповідь і з нетерпінням чекаємо на зустріч.",
      name: "Ваше повне ім’я (або обидва імені, якщо відповідаєте як пара)*",
      attendance: "Чи будете ви присутні на нашому весіллі?*",
      attendingYes: "Так, із задоволенням!",
      attendingNo: "На жаль, я/ми не зможемо бути присутніми.",
      transport: "Чи потрібен вам трансфер від церемонії до шато?*",
      yes: "Так",
      no: "Ні",
      dietary: "Повідомте, будь ласка, про харчові алергії або особливі побажання щодо харчування.",
      submit: "НАДІСЛАТИ",
      sending: "НАДСИЛАННЯ...",
      privacy: "Ваші персональні дані залишаться конфіденційними.",
      required: "Заповніть, будь ласка, усі обов’язкові поля.",
      failed: "Сталася помилка. Спробуйте ще раз.",
    },
    faq: {
      label: "FAQ",
      title: "КОРИСНО ЗНАТИ",
      script: "кілька відповідей",
      items: [
        ["Чи можна прийти з партнером або партнеркою?", "Через обмежену кількість місць ми можемо запросити лише гостей, зазначених у вашому запрошенні. Якщо ви хотіли б прийти з людиною, якої немає у списку, зв’яжіться з нами — ми повідомимо, чи є така можливість."],
        ["Як підтвердити участь?", "Оберіть «RSVP» у меню, щоб відкрити форму. Будь ласка, дайте відповідь до 30 серпня 2026 року, щоб ми могли остаточно узгодити всі деталі."],
        ["Церемонія та святкова вечеря відбудуться в одному місці?", "Ні. Церемонія відбудеться в мерії Вокрессона, а весільна вечеря — у Château de Prunay, приблизно за 15 хвилин їзди. Для гостей, які будуть на церемонії, ми організуємо трансфер від мерії до шато."],
        ["Чи запрошені діти?", "Ми обожнюємо ваших малюків! Оскільки кількість місць обмежена, зв’яжіться з нами та повідомте деталі — ми скажемо, що можна організувати."],
        ["Чи можна фотографувати під час церемонії?", "Звичайно! Просимо лише не заважати нашим фотографам, щоб вони могли зафіксувати кожну важливу мить."],
        ["Чи є паркування?", "Так. Паркування доступне біля мерії Вокрессона та Château de Prunay."],
      ],
    },
  },
} as const;

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: (typeof translations)[Language];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  if (urlLanguage === "en" || urlLanguage === "fr" || urlLanguage === "uk") return urlLanguage;

  const savedLanguage = window.localStorage.getItem("wedding-language");
  if (savedLanguage === "en" || savedLanguage === "fr" || savedLanguage === "uk") return savedLanguage;

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("fr")) return "fr";
  if (browserLanguage.startsWith("uk")) return "uk";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("wedding-language", language);

    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, copy: translations[language] }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside LanguageProvider");
  return context;
}

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { language, setLanguage } = useI18n();
  const options: Array<{ code: Language; label: string }> = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "uk", label: "UA" },
  ];

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full"
      style={{
        padding: "4px",
        gap: "2px",
        backgroundColor: dark ? "rgba(48,48,48,0.08)" : "rgba(0,0,0,0.28)",
        backdropFilter: "blur(8px)",
      }}
    >
      {options.map(({ code, label }) => {
        const active = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={active}
            aria-label={translations[code].languageName}
            style={{
              minWidth: "30px",
              height: "26px",
              padding: "0 7px",
              border: 0,
              borderRadius: "999px",
              backgroundColor: active ? (dark ? "#303030" : "#f3f1ed") : "transparent",
              color: active ? (dark ? "#ffffff" : "#303030") : dark ? "#303030" : "#ffffff",
              fontFamily: "'Avenir', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "9px",
              letterSpacing: "0.08em",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
