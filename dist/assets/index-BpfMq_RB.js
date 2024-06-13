var Z = Object.defineProperty;
var X = (a, r, h) =>
  r in a
    ? Z(a, r, { enumerable: !0, configurable: !0, writable: !0, value: h })
    : (a[r] = h);
var d = (a, r, h) => (X(a, typeof r != "symbol" ? r + "" : r, h), h);
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) f(c);
  new MutationObserver((c) => {
    for (const m of c)
      if (m.type === "childList")
        for (const S of m.addedNodes)
          S.tagName === "LINK" && S.rel === "modulepreload" && f(S);
  }).observe(document, { childList: !0, subtree: !0 });
  function h(c) {
    const m = {};
    return (
      c.integrity && (m.integrity = c.integrity),
      c.referrerPolicy && (m.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function f(c) {
    if (c.ep) return;
    c.ep = !0;
    const m = h(c);
    fetch(c.href, m);
  }
})();
const tt = [
    {
      id: "123450",
      firstname: "x",
      lastname: "tmmanuel",
      cover:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      category: "teammate",
      phone: "+509 44 26 3331",
    },
    {
      id: "123452",
      firstname: "X",
      lastname: "emmanuel",
      cover:
        "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
      category: "family",
      phone: "+509 44 26 3331",
    },
  ],
  x = tt,
  et = (a) => `
    <li class="flex justify-between items-center relative" data-id="${a.id}">
         <div class="flex items-center gap-4">
           <div class="w-10 rounded-full overflow-hidden">
             <img src="${a.cover}">
           </div>
           <div class="grid gap-[2px]">
             <span class="text-base font-bold">${a.firstname} ${
    a.lastname ?? ""
  }</span>
             <span aria-${a.category}{
               class="w-fit text-[10px] py-[2px] px-2 aria-[${
                 a.category
               }]:bg-yellow-300 rounded-md">${a.category
    .slice(0, 1)
    .toUpperCase()}${a.category.slice(1)}</span>
           </div>
         </div>
         <div>
           <button type="button" class="contact-menu bg-gray-200 inline-flex p-1 rounded-full">
             <i class='bx bx-dots-vertical-rounded'></i>
           </button>
         </div>

       </li>`,
  it = (a) => {
    const r = document.querySelector(".contacts"),
      h = a.map((f) => et(f));
    r.innerHTML = h.join(" ");
  },
  nt = (a, r) => {
    if (a.length >= 0 && a.length < 2) return a;
    a.sort((h, f) => {
      const c = (h.firstname + h.lastname).toLowerCase(),
        m = (f.firstname + f.lastname).toLowerCase();
      return c > m && r === "a" ? 1 : c < m && r === "b" ? -1 : 0;
    });
  },
  st = (a, r) => {
    x.forEach((h, f) => {
      h.id === r && x.splice(f, 1);
    }),
      a.remove();
  },
  ot = () => {
    console.log("editing");
  },
  b = {
    position: { top: 0, right: 0 },
    activeElement: { id: null, element: null },
  },
  R = (a) => {
    (b.activeElement.id = null), (b.activeElement.element = null);
  };
function B() {
  document.querySelector(".menu").remove();
}
const at = () => {
    const a =
        "menu absolute z-50 bg-white text-sm p-1 grid justify-start gap-2 border-[1px] border-gray-900/10 rounded-md",
      r = document.createElement("div");
    return (
      r.setAttribute("class", a),
      (r.innerHTML =
        '<button data-type="edit" class="p-[2px] bg-purple-700 hover:bg-purple-400 rounded-sm">Edit</button><button data-type="delete" class="text-red-500 hover:text-red-700">delete</button>'),
      (r.style.top = `${b.position.top + 12}px`),
      (r.style.right = `${b.position.right ?? 0}px`),
      r
    );
  },
  z = (a) => {
    const r = at();
    a.appendChild(r),
      r.addEventListener("click", (h) => {
        if (h.target.dataset.type === "delete") {
          const c = b.activeElement.id,
            m = b.activeElement.element;
          st(m, c), R();
          return;
        } else ot();
      });
  },
  rt = (a, r) => {
    var h, f, c, m;
    if (!((h = b.activeElement) != null && h.element)) {
      (b.position = { top: r }),
        (b.activeElement.element = a),
        (b.activeElement.id = a.dataset.id),
        z(a);
      return;
    }
    if (((f = b.activeElement) == null ? void 0 : f.element) === a) {
      R(), B();
      return;
    }
    if (
      (c = b.activeElement) != null &&
      c.element &&
      ((m = b.activeElement) == null ? void 0 : m.element) !== a
    ) {
      B(),
        (b.position = { top: r }),
        (b.activeElement.element = a),
        (b.activeElement.id = a.dataset.id),
        z(a);
      return;
    }
  },
  T = document.querySelector(".contacts");
T == null ||
  T.addEventListener("click", (a) => {
    var c;
    const r = a.target,
      h =
        (c = r == null ? void 0 : r.parentElement) == null
          ? void 0
          : c.parentElement,
      f = r.getBoundingClientRect().height;
    r.tagName === "BUTTON" && r.classList.contains("contact-menu") && rt(h, f);
  });
document.addEventListener("DOMContentLoaded", () => {
  nt(x, "a"), it(x);
});
function lt(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var K = { exports: {} };
(function (a) {
  (function (r) {
    a.exports ? (a.exports = r()) : (window.intlTelInput = r());
  })(() => {
    var r = (() => {
      var h = Object.defineProperty,
        f = Object.getOwnPropertyDescriptor,
        c = Object.getOwnPropertyNames,
        m = Object.prototype.hasOwnProperty,
        S = (t, e) => {
          for (var i in e) h(t, i, { get: e[i], enumerable: !0 });
        },
        U = (t, e, i, n) => {
          if ((e && typeof e == "object") || typeof e == "function")
            for (let o of c(e))
              !m.call(t, o) &&
                o !== i &&
                h(t, o, {
                  get: () => e[o],
                  enumerable: !(n = f(e, o)) || n.enumerable,
                });
          return t;
        },
        H = (t) => U(h({}, "__esModule", { value: !0 }), t),
        k = {};
      S(k, { Iti: () => $, default: () => Q });
      var E = [
          ["af", "93"],
          ["al", "355"],
          ["dz", "213"],
          ["as", "1", 5, ["684"]],
          ["ad", "376"],
          ["ao", "244"],
          ["ai", "1", 6, ["264"]],
          ["ag", "1", 7, ["268"]],
          ["ar", "54"],
          ["am", "374"],
          ["aw", "297"],
          ["ac", "247"],
          ["au", "61", 0],
          ["at", "43"],
          ["az", "994"],
          ["bs", "1", 8, ["242"]],
          ["bh", "973"],
          ["bd", "880"],
          ["bb", "1", 9, ["246"]],
          ["by", "375"],
          ["be", "32"],
          ["bz", "501"],
          ["bj", "229"],
          ["bm", "1", 10, ["441"]],
          ["bt", "975"],
          ["bo", "591"],
          ["ba", "387"],
          ["bw", "267"],
          ["br", "55"],
          ["io", "246"],
          ["vg", "1", 11, ["284"]],
          ["bn", "673"],
          ["bg", "359"],
          ["bf", "226"],
          ["bi", "257"],
          ["kh", "855"],
          ["cm", "237"],
          [
            "ca",
            "1",
            1,
            [
              "204",
              "226",
              "236",
              "249",
              "250",
              "263",
              "289",
              "306",
              "343",
              "354",
              "365",
              "367",
              "368",
              "382",
              "387",
              "403",
              "416",
              "418",
              "428",
              "431",
              "437",
              "438",
              "450",
              "584",
              "468",
              "474",
              "506",
              "514",
              "519",
              "548",
              "579",
              "581",
              "584",
              "587",
              "604",
              "613",
              "639",
              "647",
              "672",
              "683",
              "705",
              "709",
              "742",
              "753",
              "778",
              "780",
              "782",
              "807",
              "819",
              "825",
              "867",
              "873",
              "879",
              "902",
              "905",
            ],
          ],
          ["cv", "238"],
          ["bq", "599", 1, ["3", "4", "7"]],
          ["ky", "1", 12, ["345"]],
          ["cf", "236"],
          ["td", "235"],
          ["cl", "56"],
          ["cn", "86"],
          ["cx", "61", 2, ["89164"]],
          ["cc", "61", 1, ["89162"]],
          ["co", "57"],
          ["km", "269"],
          ["cg", "242"],
          ["cd", "243"],
          ["ck", "682"],
          ["cr", "506"],
          ["ci", "225"],
          ["hr", "385"],
          ["cu", "53"],
          ["cw", "599", 0],
          ["cy", "357"],
          ["cz", "420"],
          ["dk", "45"],
          ["dj", "253"],
          ["dm", "1", 13, ["767"]],
          ["do", "1", 2, ["809", "829", "849"]],
          ["ec", "593"],
          ["eg", "20"],
          ["sv", "503"],
          ["gq", "240"],
          ["er", "291"],
          ["ee", "372"],
          ["sz", "268"],
          ["et", "251"],
          ["fk", "500"],
          ["fo", "298"],
          ["fj", "679"],
          ["fi", "358", 0],
          ["fr", "33"],
          ["gf", "594"],
          ["pf", "689"],
          ["ga", "241"],
          ["gm", "220"],
          ["ge", "995"],
          ["de", "49"],
          ["gh", "233"],
          ["gi", "350"],
          ["gr", "30"],
          ["gl", "299"],
          ["gd", "1", 14, ["473"]],
          ["gp", "590", 0],
          ["gu", "1", 15, ["671"]],
          ["gt", "502"],
          ["gg", "44", 1, ["1481", "7781", "7839", "7911"]],
          ["gn", "224"],
          ["gw", "245"],
          ["gy", "592"],
          ["ht", "509"],
          ["hn", "504"],
          ["hk", "852"],
          ["hu", "36"],
          ["is", "354"],
          ["in", "91"],
          ["id", "62"],
          ["ir", "98"],
          ["iq", "964"],
          ["ie", "353"],
          ["im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
          ["il", "972"],
          ["it", "39", 0],
          ["jm", "1", 4, ["876", "658"]],
          ["jp", "81"],
          ["je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
          ["jo", "962"],
          ["kz", "7", 1, ["33", "7"]],
          ["ke", "254"],
          ["ki", "686"],
          ["xk", "383"],
          ["kw", "965"],
          ["kg", "996"],
          ["la", "856"],
          ["lv", "371"],
          ["lb", "961"],
          ["ls", "266"],
          ["lr", "231"],
          ["ly", "218"],
          ["li", "423"],
          ["lt", "370"],
          ["lu", "352"],
          ["mo", "853"],
          ["mg", "261"],
          ["mw", "265"],
          ["my", "60"],
          ["mv", "960"],
          ["ml", "223"],
          ["mt", "356"],
          ["mh", "692"],
          ["mq", "596"],
          ["mr", "222"],
          ["mu", "230"],
          ["yt", "262", 1, ["269", "639"]],
          ["mx", "52"],
          ["fm", "691"],
          ["md", "373"],
          ["mc", "377"],
          ["mn", "976"],
          ["me", "382"],
          ["ms", "1", 16, ["664"]],
          ["ma", "212", 0],
          ["mz", "258"],
          ["mm", "95"],
          ["na", "264"],
          ["nr", "674"],
          ["np", "977"],
          ["nl", "31"],
          ["nc", "687"],
          ["nz", "64"],
          ["ni", "505"],
          ["ne", "227"],
          ["ng", "234"],
          ["nu", "683"],
          ["nf", "672"],
          ["kp", "850"],
          ["mk", "389"],
          ["mp", "1", 17, ["670"]],
          ["no", "47", 0],
          ["om", "968"],
          ["pk", "92"],
          ["pw", "680"],
          ["ps", "970"],
          ["pa", "507"],
          ["pg", "675"],
          ["py", "595"],
          ["pe", "51"],
          ["ph", "63"],
          ["pl", "48"],
          ["pt", "351"],
          ["pr", "1", 3, ["787", "939"]],
          ["qa", "974"],
          ["re", "262", 0],
          ["ro", "40"],
          ["ru", "7", 0],
          ["rw", "250"],
          ["ws", "685"],
          ["sm", "378"],
          ["st", "239"],
          ["sa", "966"],
          ["sn", "221"],
          ["rs", "381"],
          ["sc", "248"],
          ["sl", "232"],
          ["sg", "65"],
          ["sx", "1", 21, ["721"]],
          ["sk", "421"],
          ["si", "386"],
          ["sb", "677"],
          ["so", "252"],
          ["za", "27"],
          ["kr", "82"],
          ["ss", "211"],
          ["es", "34"],
          ["lk", "94"],
          ["bl", "590", 1],
          ["sh", "290"],
          ["kn", "1", 18, ["869"]],
          ["lc", "1", 19, ["758"]],
          ["mf", "590", 2],
          ["pm", "508"],
          ["vc", "1", 20, ["784"]],
          ["sd", "249"],
          ["sr", "597"],
          ["sj", "47", 1, ["79"]],
          ["se", "46"],
          ["ch", "41"],
          ["sy", "963"],
          ["tw", "886"],
          ["tj", "992"],
          ["tz", "255"],
          ["th", "66"],
          ["tl", "670"],
          ["tg", "228"],
          ["tk", "690"],
          ["to", "676"],
          ["tt", "1", 22, ["868"]],
          ["tn", "216"],
          ["tr", "90"],
          ["tm", "993"],
          ["tc", "1", 23, ["649"]],
          ["tv", "688"],
          ["ug", "256"],
          ["ua", "380"],
          ["ae", "971"],
          ["gb", "44", 0],
          ["us", "1", 0],
          ["uy", "598"],
          ["vi", "1", 24, ["340"]],
          ["uz", "998"],
          ["vu", "678"],
          ["va", "39", 1, ["06698"]],
          ["ve", "58"],
          ["vn", "84"],
          ["wf", "681"],
          ["eh", "212", 1, ["5288", "5289"]],
          ["ye", "967"],
          ["zm", "260"],
          ["zw", "263"],
          ["ax", "358", 1, ["18"]],
        ],
        P = [];
      for (let t = 0; t < E.length; t++) {
        const e = E[t];
        P[t] = {
          name: "",
          iso2: e[0],
          dialCode: e[1],
          priority: e[2] || 0,
          areaCodes: e[3] || null,
          nodeById: {},
        };
      }
      var L = P,
        V = {
          af: "Afghanistan",
          ax: "Åland Islands",
          al: "Albania",
          dz: "Algeria",
          as: "American Samoa",
          ad: "Andorra",
          ao: "Angola",
          ai: "Anguilla",
          aq: "Antarctica",
          ag: "Antigua & Barbuda",
          ar: "Argentina",
          am: "Armenia",
          aw: "Aruba",
          au: "Australia",
          at: "Austria",
          az: "Azerbaijan",
          bs: "Bahamas",
          bh: "Bahrain",
          bd: "Bangladesh",
          bb: "Barbados",
          by: "Belarus",
          be: "Belgium",
          bz: "Belize",
          bj: "Benin",
          bm: "Bermuda",
          bt: "Bhutan",
          bo: "Bolivia",
          ba: "Bosnia & Herzegovina",
          bw: "Botswana",
          bv: "Bouvet Island",
          br: "Brazil",
          io: "British Indian Ocean Territory",
          vg: "British Virgin Islands",
          bn: "Brunei",
          bg: "Bulgaria",
          bf: "Burkina Faso",
          bi: "Burundi",
          kh: "Cambodia",
          cm: "Cameroon",
          ca: "Canada",
          cv: "Cape Verde",
          bq: "Caribbean Netherlands",
          ky: "Cayman Islands",
          cf: "Central African Republic",
          td: "Chad",
          cl: "Chile",
          cn: "China",
          cx: "Christmas Island",
          cc: "Cocos (Keeling) Islands",
          co: "Colombia",
          km: "Comoros",
          cg: "Congo - Brazzaville",
          cd: "Congo - Kinshasa",
          ck: "Cook Islands",
          cr: "Costa Rica",
          ci: "Côte d’Ivoire",
          hr: "Croatia",
          cu: "Cuba",
          cw: "Curaçao",
          cy: "Cyprus",
          cz: "Czechia",
          dk: "Denmark",
          dj: "Djibouti",
          dm: "Dominica",
          do: "Dominican Republic",
          ec: "Ecuador",
          eg: "Egypt",
          sv: "El Salvador",
          gq: "Equatorial Guinea",
          er: "Eritrea",
          ee: "Estonia",
          sz: "Eswatini",
          et: "Ethiopia",
          fk: "Falkland Islands",
          fo: "Faroe Islands",
          fj: "Fiji",
          fi: "Finland",
          fr: "France",
          gf: "French Guiana",
          pf: "French Polynesia",
          tf: "French Southern Territories",
          ga: "Gabon",
          gm: "Gambia",
          ge: "Georgia",
          de: "Germany",
          gh: "Ghana",
          gi: "Gibraltar",
          gr: "Greece",
          gl: "Greenland",
          gd: "Grenada",
          gp: "Guadeloupe",
          gu: "Guam",
          gt: "Guatemala",
          gg: "Guernsey",
          gn: "Guinea",
          gw: "Guinea-Bissau",
          gy: "Guyana",
          ht: "Haiti",
          hm: "Heard & McDonald Islands",
          hn: "Honduras",
          hk: "Hong Kong SAR China",
          hu: "Hungary",
          is: "Iceland",
          in: "India",
          id: "Indonesia",
          ir: "Iran",
          iq: "Iraq",
          ie: "Ireland",
          im: "Isle of Man",
          il: "Israel",
          it: "Italy",
          jm: "Jamaica",
          jp: "Japan",
          je: "Jersey",
          jo: "Jordan",
          kz: "Kazakhstan",
          ke: "Kenya",
          ki: "Kiribati",
          kw: "Kuwait",
          kg: "Kyrgyzstan",
          la: "Laos",
          lv: "Latvia",
          lb: "Lebanon",
          ls: "Lesotho",
          lr: "Liberia",
          ly: "Libya",
          li: "Liechtenstein",
          lt: "Lithuania",
          lu: "Luxembourg",
          mo: "Macao SAR China",
          mg: "Madagascar",
          mw: "Malawi",
          my: "Malaysia",
          mv: "Maldives",
          ml: "Mali",
          mt: "Malta",
          mh: "Marshall Islands",
          mq: "Martinique",
          mr: "Mauritania",
          mu: "Mauritius",
          yt: "Mayotte",
          mx: "Mexico",
          fm: "Micronesia",
          md: "Moldova",
          mc: "Monaco",
          mn: "Mongolia",
          me: "Montenegro",
          ms: "Montserrat",
          ma: "Morocco",
          mz: "Mozambique",
          mm: "Myanmar (Burma)",
          na: "Namibia",
          nr: "Nauru",
          np: "Nepal",
          nl: "Netherlands",
          nc: "New Caledonia",
          nz: "New Zealand",
          ni: "Nicaragua",
          ne: "Niger",
          ng: "Nigeria",
          nu: "Niue",
          nf: "Norfolk Island",
          kp: "North Korea",
          mk: "North Macedonia",
          mp: "Northern Mariana Islands",
          no: "Norway",
          om: "Oman",
          pk: "Pakistan",
          pw: "Palau",
          ps: "Palestinian Territories",
          pa: "Panama",
          pg: "Papua New Guinea",
          py: "Paraguay",
          pe: "Peru",
          ph: "Philippines",
          pn: "Pitcairn Islands",
          pl: "Poland",
          pt: "Portugal",
          pr: "Puerto Rico",
          qa: "Qatar",
          re: "Réunion",
          ro: "Romania",
          ru: "Russia",
          rw: "Rwanda",
          ws: "Samoa",
          sm: "San Marino",
          st: "São Tomé & Príncipe",
          sa: "Saudi Arabia",
          sn: "Senegal",
          rs: "Serbia",
          sc: "Seychelles",
          sl: "Sierra Leone",
          sg: "Singapore",
          sx: "Sint Maarten",
          sk: "Slovakia",
          si: "Slovenia",
          sb: "Solomon Islands",
          so: "Somalia",
          za: "South Africa",
          gs: "South Georgia & South Sandwich Islands",
          kr: "South Korea",
          ss: "South Sudan",
          es: "Spain",
          lk: "Sri Lanka",
          bl: "St. Barthélemy",
          sh: "St. Helena",
          kn: "St. Kitts & Nevis",
          lc: "St. Lucia",
          mf: "St. Martin",
          pm: "St. Pierre & Miquelon",
          vc: "St. Vincent & Grenadines",
          sd: "Sudan",
          sr: "Suriname",
          sj: "Svalbard & Jan Mayen",
          se: "Sweden",
          ch: "Switzerland",
          sy: "Syria",
          tw: "Taiwan",
          tj: "Tajikistan",
          tz: "Tanzania",
          th: "Thailand",
          tl: "Timor-Leste",
          tg: "Togo",
          tk: "Tokelau",
          to: "Tonga",
          tt: "Trinidad & Tobago",
          tn: "Tunisia",
          tr: "Turkey",
          tm: "Turkmenistan",
          tc: "Turks & Caicos Islands",
          tv: "Tuvalu",
          um: "U.S. Outlying Islands",
          vi: "U.S. Virgin Islands",
          ug: "Uganda",
          ua: "Ukraine",
          ae: "United Arab Emirates",
          gb: "United Kingdom",
          us: "United States",
          uy: "Uruguay",
          uz: "Uzbekistan",
          vu: "Vanuatu",
          va: "Vatican City",
          ve: "Venezuela",
          vn: "Vietnam",
          wf: "Wallis & Futuna",
          eh: "Western Sahara",
          ye: "Yemen",
          zm: "Zambia",
          zw: "Zimbabwe",
        },
        q = {
          selectedCountryAriaLabel: "Selected country",
          noCountrySelected: "No country selected",
          countryListAriaLabel: "List of countries",
          searchPlaceholder: "Search",
          zeroSearchResults: "No results found",
          oneSearchResult: "1 result found",
          multipleSearchResults: "${count} results found",
          ac: "Ascension Island",
          xk: "Kosovo",
        },
        M = { ...V, ...q };
      for (let t = 0; t < L.length; t++) L[t].name = M[L[t].iso2];
      var G = 0,
        O = {
          allowDropdown: !0,
          autoPlaceholder: "polite",
          containerClass: "",
          countryOrder: null,
          customPlaceholder: null,
          dropdownContainer: null,
          excludeCountries: [],
          fixDropdownWidth: !0,
          formatAsYouType: !0,
          formatOnDisplay: !0,
          geoIpLookup: null,
          hiddenInput: null,
          i18n: {},
          initialCountry: "",
          nationalMode: !0,
          onlyCountries: [],
          placeholderNumberType: "MOBILE",
          showFlags: !0,
          separateDialCode: !1,
          strictMode: !1,
          useFullscreenPopup:
            typeof navigator < "u" && typeof window < "u"
              ? /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) || window.innerWidth <= 500
              : !1,
          utilsScript: "",
          validationNumberType: "MOBILE",
        },
        W = [
          "800",
          "822",
          "833",
          "844",
          "855",
          "866",
          "877",
          "880",
          "881",
          "882",
          "883",
          "884",
          "885",
          "886",
          "887",
          "888",
          "889",
        ],
        N = (t) => t.replace(/\D/g, ""),
        j = (t = "") =>
          t
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase(),
        F = (t) => {
          const e = N(t);
          if (e.charAt(0) === "1") {
            const i = e.substr(1, 3);
            return W.indexOf(i) !== -1;
          }
          return !1;
        },
        Y = (t, e, i, n) => {
          if (i === 0 && !n) return 0;
          let o = 0;
          for (let s = 0; s < e.length; s++) {
            if ((/[+0-9]/.test(e[s]) && o++, o === t && !n)) return s + 1;
            if (n && o === t + 1) return s;
          }
          return e.length;
        },
        g = (t, e, i) => {
          const n = document.createElement(t);
          return (
            e && Object.entries(e).forEach(([o, s]) => n.setAttribute(o, s)),
            i && i.appendChild(n),
            n
          );
        },
        A = (t) => {
          const { instances: e } = l;
          Object.values(e).forEach((i) => i[t]());
        },
        $ = class {
          constructor(t, e = {}) {
            d(this, "id");
            d(this, "promise");
            d(this, "telInput");
            d(this, "highlightedItem");
            d(this, "options");
            d(this, "hadInitialPlaceholder");
            d(this, "isRTL");
            d(this, "selectedCountryData");
            d(this, "countries");
            d(this, "dialCodeMaxLen");
            d(this, "dialCodeToIso2Map");
            d(this, "dialCodes");
            d(this, "countryContainer");
            d(this, "selectedCountry");
            d(this, "selectedCountryInner");
            d(this, "selectedCountryA11yText");
            d(this, "selectedDialCode");
            d(this, "dropdownArrow");
            d(this, "dropdownContent");
            d(this, "searchInput");
            d(this, "searchResultsA11yText");
            d(this, "countryList");
            d(this, "dropdown");
            d(this, "hiddenInput");
            d(this, "hiddenInputCountry");
            d(this, "maxCoreNumberLength");
            d(this, "defaultCountry");
            d(this, "_handleHiddenInputSubmit");
            d(this, "_handleLabelClick");
            d(this, "_handleClickSelectedCountry");
            d(this, "_handleCountryContainerKeydown");
            d(this, "_handleInputEvent");
            d(this, "_handleKeydownEvent");
            d(this, "_handleWindowScroll");
            d(this, "_handleMouseoverCountryList");
            d(this, "_handleClickCountryList");
            d(this, "_handleClickOffToClose");
            d(this, "_handleKeydownOnDropdown");
            d(this, "_handleSearchChange");
            d(this, "resolveAutoCountryPromise");
            d(this, "rejectAutoCountryPromise");
            d(this, "resolveUtilsScriptPromise");
            d(this, "rejectUtilsScriptPromise");
            (this.id = G++),
              (this.telInput = t),
              (this.highlightedItem = null),
              (this.options = Object.assign({}, O, e)),
              (this.hadInitialPlaceholder = !!t.getAttribute("placeholder"));
          }
          _init() {
            this.options.useFullscreenPopup &&
              (this.options.fixDropdownWidth = !1),
              this.options.separateDialCode &&
                ((this.options.allowDropdown = !0),
                (this.options.nationalMode = !1)),
              !this.options.showFlags &&
                !this.options.separateDialCode &&
                (this.options.nationalMode = !1),
              this.options.useFullscreenPopup &&
                !this.options.dropdownContainer &&
                (this.options.dropdownContainer = document.body),
              (this.isRTL = !!this.telInput.closest("[dir=rtl]")),
              (this.options.i18n = { ...M, ...this.options.i18n });
            const t = new Promise((i, n) => {
                (this.resolveAutoCountryPromise = i),
                  (this.rejectAutoCountryPromise = n);
              }),
              e = new Promise((i, n) => {
                (this.resolveUtilsScriptPromise = i),
                  (this.rejectUtilsScriptPromise = n);
              });
            (this.promise = Promise.all([t, e])),
              (this.selectedCountryData = {}),
              this._processCountryData(),
              this._generateMarkup(),
              this._setInitialState(),
              this._initListeners(),
              this._initRequests();
          }
          _processCountryData() {
            this._processAllCountries(),
              this._processDialCodes(),
              this._translateCountryNames(),
              this.options.countryOrder &&
                (this.options.countryOrder = this.options.countryOrder.map(
                  (t) => t.toLowerCase()
                )),
              this._sortCountries();
          }
          _sortCountries() {
            this.countries.sort((t, e) => {
              const { countryOrder: i } = this.options;
              if (i) {
                const n = i.indexOf(t.iso2),
                  o = i.indexOf(e.iso2),
                  s = n > -1,
                  u = o > -1;
                if (s || u) return s && u ? n - o : s ? -1 : 1;
              }
              return t.name < e.name ? -1 : t.name > e.name ? 1 : 0;
            });
          }
          _addToDialCodeMap(t, e, i) {
            e.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = e.length),
              this.dialCodeToIso2Map.hasOwnProperty(e) ||
                (this.dialCodeToIso2Map[e] = []);
            for (let o = 0; o < this.dialCodeToIso2Map[e].length; o++)
              if (this.dialCodeToIso2Map[e][o] === t) return;
            const n = i !== void 0 ? i : this.dialCodeToIso2Map[e].length;
            this.dialCodeToIso2Map[e][n] = t;
          }
          _processAllCountries() {
            const { onlyCountries: t, excludeCountries: e } = this.options;
            if (t.length) {
              const i = t.map((n) => n.toLowerCase());
              this.countries = L.filter((n) => i.indexOf(n.iso2) > -1);
            } else if (e.length) {
              const i = e.map((n) => n.toLowerCase());
              this.countries = L.filter((n) => i.indexOf(n.iso2) === -1);
            } else this.countries = L;
          }
          _translateCountryNames() {
            for (let t = 0; t < this.countries.length; t++) {
              const e = this.countries[t].iso2.toLowerCase();
              this.options.i18n.hasOwnProperty(e) &&
                (this.countries[t].name = this.options.i18n[e]);
            }
          }
          _processDialCodes() {
            (this.dialCodes = {}),
              (this.dialCodeMaxLen = 0),
              (this.dialCodeToIso2Map = {});
            for (let t = 0; t < this.countries.length; t++) {
              const e = this.countries[t];
              this.dialCodes[e.dialCode] || (this.dialCodes[e.dialCode] = !0),
                this._addToDialCodeMap(e.iso2, e.dialCode, e.priority);
            }
            for (let t = 0; t < this.countries.length; t++) {
              const e = this.countries[t];
              if (e.areaCodes) {
                const i = this.dialCodeToIso2Map[e.dialCode][0];
                for (let n = 0; n < e.areaCodes.length; n++) {
                  const o = e.areaCodes[n];
                  for (let s = 1; s < o.length; s++) {
                    const u = e.dialCode + o.substr(0, s);
                    this._addToDialCodeMap(i, u),
                      this._addToDialCodeMap(e.iso2, u);
                  }
                  this._addToDialCodeMap(e.iso2, e.dialCode + o);
                }
              }
            }
          }
          _generateMarkup() {
            var v;
            this.telInput.classList.add("iti__tel-input"),
              !this.telInput.hasAttribute("autocomplete") &&
                !(
                  this.telInput.form &&
                  this.telInput.form.hasAttribute("autocomplete")
                ) &&
                this.telInput.setAttribute("autocomplete", "off");
            const {
              allowDropdown: t,
              separateDialCode: e,
              showFlags: i,
              containerClass: n,
              hiddenInput: o,
              dropdownContainer: s,
              fixDropdownWidth: u,
              useFullscreenPopup: p,
              i18n: C,
            } = this.options;
            let y = "iti";
            t && (y += " iti--allow-dropdown"),
              i && (y += " iti--show-flags"),
              n && (y += ` ${n}`),
              p || (y += " iti--inline-dropdown");
            const _ = g("div", { class: y });
            if (
              ((v = this.telInput.parentNode) == null ||
                v.insertBefore(_, this.telInput),
              t || i)
            ) {
              (this.countryContainer = g(
                "div",
                { class: "iti__country-container" },
                _
              )),
                (this.selectedCountry = g(
                  "button",
                  {
                    type: "button",
                    class: "iti__selected-country",
                    ...(t && {
                      "aria-expanded": "false",
                      "aria-label": this.options.i18n.selectedCountryAriaLabel,
                      "aria-haspopup": "true",
                      "aria-controls": `iti-${this.id}__dropdown-content`,
                      role: "combobox",
                    }),
                  },
                  this.countryContainer
                ));
              const I = g(
                "div",
                { class: "iti__selected-country-primary" },
                this.selectedCountry
              );
              if (
                ((this.selectedCountryInner = g("div", null, I)),
                (this.selectedCountryA11yText = g(
                  "span",
                  { class: "iti__a11y-text" },
                  this.selectedCountryInner
                )),
                this.telInput.disabled
                  ? this.selectedCountry.setAttribute("aria-disabled", "true")
                  : this.selectedCountry.setAttribute("tabindex", "0"),
                t &&
                  (this.dropdownArrow = g(
                    "div",
                    { class: "iti__arrow", "aria-hidden": "true" },
                    I
                  )),
                e &&
                  (this.selectedDialCode = g(
                    "div",
                    { class: "iti__selected-dial-code" },
                    this.selectedCountry
                  )),
                t)
              ) {
                const w = u ? "" : "iti--flexible-dropdown-width";
                if (
                  ((this.dropdownContent = g("div", {
                    id: `iti-${this.id}__dropdown-content`,
                    class: `iti__dropdown-content iti__hide ${w}`,
                  })),
                  (this.searchInput = g(
                    "input",
                    {
                      type: "text",
                      class: "iti__search-input",
                      placeholder: C.searchPlaceholder,
                      role: "combobox",
                      "aria-expanded": "true",
                      "aria-label": C.searchPlaceholder,
                      "aria-controls": `iti-${this.id}__country-listbox`,
                      "aria-autocomplete": "list",
                      autocomplete: "off",
                    },
                    this.dropdownContent
                  )),
                  (this.searchResultsA11yText = g(
                    "span",
                    { class: "iti__a11y-text" },
                    this.dropdownContent
                  )),
                  (this.countryList = g(
                    "ul",
                    {
                      class: "iti__country-list",
                      id: `iti-${this.id}__country-listbox`,
                      role: "listbox",
                      "aria-label": C.countryListAriaLabel,
                    },
                    this.dropdownContent
                  )),
                  this._appendListItems(this.countries, "iti__standard"),
                  this._updateSearchResultsText(),
                  s)
                ) {
                  let D = "iti iti--container";
                  p
                    ? (D += " iti--fullscreen-popup")
                    : (D += " iti--inline-dropdown"),
                    (this.dropdown = g("div", { class: D })),
                    this.dropdown.appendChild(this.dropdownContent);
                } else this.countryContainer.appendChild(this.dropdownContent);
              }
            }
            if ((_.appendChild(this.telInput), o)) {
              const I = this.telInput.getAttribute("name") || "",
                w = o(I);
              w.phone &&
                ((this.hiddenInput = g("input", {
                  type: "hidden",
                  name: w.phone,
                })),
                _.appendChild(this.hiddenInput)),
                w.country &&
                  ((this.hiddenInputCountry = g("input", {
                    type: "hidden",
                    name: w.country,
                  })),
                  _.appendChild(this.hiddenInputCountry));
            }
          }
          _appendListItems(t, e) {
            for (let i = 0; i < t.length; i++) {
              const n = t[i],
                o = g(
                  "li",
                  {
                    id: `iti-${this.id}__item-${n.iso2}`,
                    class: `iti__country ${e}`,
                    tabindex: "-1",
                    role: "option",
                    "data-dial-code": n.dialCode,
                    "data-country-code": n.iso2,
                    "aria-selected": "false",
                  },
                  this.countryList
                );
              n.nodeById[this.id] = o;
              let s = "";
              this.options.showFlags &&
                (s += `<div class='iti__flag-box'><div class='iti__flag iti__${n.iso2}'></div></div>`),
                (s += `<span class='iti__country-name'>${n.name}</span>`),
                (s += `<span class='iti__dial-code'>+${n.dialCode}</span>`),
                o.insertAdjacentHTML("beforeend", s);
            }
          }
          _setInitialState(t = !1) {
            const e = this.telInput.getAttribute("value"),
              i = this.telInput.value,
              o =
                e && e.charAt(0) === "+" && (!i || i.charAt(0) !== "+") ? e : i,
              s = this._getDialCode(o),
              u = F(o),
              { initialCountry: p, geoIpLookup: C } = this.options,
              y = p === "auto" && C;
            if (s && !u) this._updateCountryFromNumber(o);
            else if (!y || t) {
              const _ = p ? p.toLowerCase() : "";
              _ && this._getCountryData(_, !0)
                ? this._setCountry(_)
                : s && u
                ? this._setCountry("us")
                : this._setCountry();
            }
            o && this._updateValFromNumber(o);
          }
          _initListeners() {
            this._initTelInputListeners(),
              this.options.allowDropdown && this._initDropdownListeners(),
              (this.hiddenInput || this.hiddenInputCountry) &&
                this.telInput.form &&
                this._initHiddenInputListener();
          }
          _initHiddenInputListener() {
            var t;
            (this._handleHiddenInputSubmit = () => {
              this.hiddenInput && (this.hiddenInput.value = this.getNumber()),
                this.hiddenInputCountry &&
                  (this.hiddenInputCountry.value =
                    this.getSelectedCountryData().iso2 || "");
            }),
              (t = this.telInput.form) == null ||
                t.addEventListener("submit", this._handleHiddenInputSubmit);
          }
          _initDropdownListeners() {
            this._handleLabelClick = (e) => {
              this.dropdownContent.classList.contains("iti__hide")
                ? this.telInput.focus()
                : e.preventDefault();
            };
            const t = this.telInput.closest("label");
            t && t.addEventListener("click", this._handleLabelClick),
              (this._handleClickSelectedCountry = () => {
                this.dropdownContent.classList.contains("iti__hide") &&
                  !this.telInput.disabled &&
                  !this.telInput.readOnly &&
                  this._openDropdown();
              }),
              this.selectedCountry.addEventListener(
                "click",
                this._handleClickSelectedCountry
              ),
              (this._handleCountryContainerKeydown = (e) => {
                this.dropdownContent.classList.contains("iti__hide") &&
                  ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key) &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  this._openDropdown()),
                  e.key === "Tab" && this._closeDropdown();
              }),
              this.countryContainer.addEventListener(
                "keydown",
                this._handleCountryContainerKeydown
              );
          }
          _initRequests() {
            const {
              utilsScript: t,
              initialCountry: e,
              geoIpLookup: i,
            } = this.options;
            t && !l.utils
              ? l.documentReady()
                ? l.loadUtils(t)
                : window.addEventListener("load", () => {
                    l.loadUtils(t);
                  })
              : this.resolveUtilsScriptPromise(),
              e === "auto" && i && !this.selectedCountryData.iso2
                ? this._loadAutoCountry()
                : this.resolveAutoCountryPromise();
          }
          _loadAutoCountry() {
            l.autoCountry
              ? this.handleAutoCountry()
              : l.startedLoadingAutoCountry ||
                ((l.startedLoadingAutoCountry = !0),
                typeof this.options.geoIpLookup == "function" &&
                  this.options.geoIpLookup(
                    (t = "") => {
                      const e = t.toLowerCase();
                      e && this._getCountryData(e, !0)
                        ? ((l.autoCountry = e),
                          setTimeout(() => A("handleAutoCountry")))
                        : (this._setInitialState(!0),
                          A("rejectAutoCountryPromise"));
                    },
                    () => {
                      this._setInitialState(!0), A("rejectAutoCountryPromise");
                    }
                  ));
          }
          _initTelInputListeners() {
            const {
              strictMode: t,
              formatAsYouType: e,
              separateDialCode: i,
              formatOnDisplay: n,
            } = this.options;
            let o = !1;
            (this._handleInputEvent = (s) => {
              this._updateCountryFromNumber(this.telInput.value) &&
                this._triggerCountryChange();
              const u = (s == null ? void 0 : s.data) && /[^+0-9]/.test(s.data),
                p =
                  (s == null ? void 0 : s.inputType) === "insertFromPaste" &&
                  this.telInput.value;
              u || (p && !t)
                ? (o = !0)
                : /[^+0-9]/.test(this.telInput.value) || (o = !1);
              const C =
                (s == null ? void 0 : s.detail) && s.detail.isSetNumber && !n;
              if (e && !o && !C) {
                const y = this.telInput.selectionStart || 0,
                  v = this.telInput.value
                    .substring(0, y)
                    .replace(/[^+0-9]/g, "").length,
                  I =
                    (s == null ? void 0 : s.inputType) ===
                    "deleteContentForward",
                  w = this._formatNumberAsYouType(),
                  D = Y(v, w, y, I);
                (this.telInput.value = w),
                  this.telInput.setSelectionRange(D, D);
              }
            }),
              this.telInput.addEventListener("input", this._handleInputEvent),
              (t || i) &&
                ((this._handleKeydownEvent = (s) => {
                  if (
                    s.key &&
                    s.key.length === 1 &&
                    !s.altKey &&
                    !s.ctrlKey &&
                    !s.metaKey
                  ) {
                    if (i && s.key === "+") {
                      s.preventDefault(),
                        this._openDropdown(),
                        (this.searchInput.value = "+"),
                        this._filterCountries("", !0);
                      return;
                    }
                    if (t) {
                      const u =
                          this.telInput.selectionStart === 0 && s.key === "+",
                        p = /^[0-9]$/.test(s.key),
                        C = u || p,
                        y = this._getFullNumber(),
                        _ = l.utils.getCoreNumber(
                          y,
                          this.selectedCountryData.iso2
                        ),
                        v =
                          this.maxCoreNumberLength &&
                          _.length >= this.maxCoreNumberLength,
                        I = this.telInput.value.substring(
                          this.telInput.selectionStart,
                          this.telInput.selectionEnd
                        ),
                        w = /\d/.test(I);
                      (!C || (v && !w)) && s.preventDefault();
                    }
                  }
                }),
                this.telInput.addEventListener(
                  "keydown",
                  this._handleKeydownEvent
                ));
          }
          _cap(t) {
            const e = parseInt(
              this.telInput.getAttribute("maxlength") || "",
              10
            );
            return e && t.length > e ? t.substr(0, e) : t;
          }
          _trigger(t, e = {}) {
            const i = new CustomEvent(t, {
              bubbles: !0,
              cancelable: !0,
              detail: e,
            });
            this.telInput.dispatchEvent(i);
          }
          _openDropdown() {
            const { fixDropdownWidth: t } = this.options;
            t &&
              (this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`),
              this.dropdownContent.classList.remove("iti__hide"),
              this.selectedCountry.setAttribute("aria-expanded", "true"),
              this._setDropdownPosition();
            const e = this.countryList.firstElementChild;
            e &&
              (this._highlightListItem(e, !1),
              (this.countryList.scrollTop = 0)),
              this.searchInput.focus(),
              this._bindDropdownListeners(),
              this.dropdownArrow.classList.add("iti__arrow--up"),
              this._trigger("open:countrydropdown");
          }
          _setDropdownPosition() {
            if (
              (this.options.dropdownContainer &&
                this.options.dropdownContainer.appendChild(this.dropdown),
              !this.options.useFullscreenPopup)
            ) {
              const t = this.telInput.getBoundingClientRect(),
                e = this.telInput.offsetHeight;
              this.options.dropdownContainer &&
                ((this.dropdown.style.top = `${t.top + e}px`),
                (this.dropdown.style.left = `${t.left}px`),
                (this._handleWindowScroll = () => this._closeDropdown()),
                window.addEventListener("scroll", this._handleWindowScroll));
            }
          }
          _bindDropdownListeners() {
            (this._handleMouseoverCountryList = (n) => {
              var s;
              const o =
                (s = n.target) == null ? void 0 : s.closest(".iti__country");
              o && this._highlightListItem(o, !1);
            }),
              this.countryList.addEventListener(
                "mouseover",
                this._handleMouseoverCountryList
              ),
              (this._handleClickCountryList = (n) => {
                var s;
                const o =
                  (s = n.target) == null ? void 0 : s.closest(".iti__country");
                o && this._selectListItem(o);
              }),
              this.countryList.addEventListener(
                "click",
                this._handleClickCountryList
              );
            let t = !0;
            (this._handleClickOffToClose = () => {
              t || this._closeDropdown(), (t = !1);
            }),
              document.documentElement.addEventListener(
                "click",
                this._handleClickOffToClose
              ),
              (this._handleKeydownOnDropdown = (n) => {
                ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(n.key) &&
                  (n.preventDefault(),
                  n.stopPropagation(),
                  n.key === "ArrowUp" || n.key === "ArrowDown"
                    ? this._handleUpDownKey(n.key)
                    : n.key === "Enter"
                    ? this._handleEnterKey()
                    : n.key === "Escape" && this._closeDropdown());
              }),
              document.addEventListener(
                "keydown",
                this._handleKeydownOnDropdown
              );
            const e = () => {
              const n = this.searchInput.value.trim();
              n ? this._filterCountries(n) : this._filterCountries("", !0);
            };
            let i = null;
            (this._handleSearchChange = () => {
              i && clearTimeout(i),
                (i = setTimeout(() => {
                  e(), (i = null);
                }, 100));
            }),
              this.searchInput.addEventListener(
                "input",
                this._handleSearchChange
              ),
              this.searchInput.addEventListener("click", (n) =>
                n.stopPropagation()
              );
          }
          _filterCountries(t, e = !1) {
            let i = !0;
            this.countryList.innerHTML = "";
            const n = j(t);
            for (let o = 0; o < this.countries.length; o++) {
              const s = this.countries[o],
                u = j(s.name),
                p = `+${s.dialCode}`;
              if (e || u.includes(n) || p.includes(n) || s.iso2.includes(n)) {
                const C = s.nodeById[this.id];
                C && this.countryList.appendChild(C),
                  i && (this._highlightListItem(C, !1), (i = !1));
              }
            }
            i && this._highlightListItem(null, !1),
              (this.countryList.scrollTop = 0),
              this._updateSearchResultsText();
          }
          _updateSearchResultsText() {
            const { i18n: t } = this.options,
              e = this.countryList.childElementCount;
            let i;
            e === 0
              ? (i = t.zeroSearchResults)
              : e === 1
              ? (i = t.oneSearchResult)
              : (i = t.multipleSearchResults.replace("${count}", e.toString())),
              (this.searchResultsA11yText.textContent = i);
          }
          _handleUpDownKey(t) {
            var i, n;
            let e =
              t === "ArrowUp"
                ? (i = this.highlightedItem) == null
                  ? void 0
                  : i.previousElementSibling
                : (n = this.highlightedItem) == null
                ? void 0
                : n.nextElementSibling;
            !e &&
              this.countryList.childElementCount > 1 &&
              (e =
                t === "ArrowUp"
                  ? this.countryList.lastElementChild
                  : this.countryList.firstElementChild),
              e && (this._scrollTo(e), this._highlightListItem(e, !1));
          }
          _handleEnterKey() {
            this.highlightedItem && this._selectListItem(this.highlightedItem);
          }
          _updateValFromNumber(t) {
            let e = t;
            if (
              this.options.formatOnDisplay &&
              l.utils &&
              this.selectedCountryData
            ) {
              const i =
                  this.options.nationalMode ||
                  (e.charAt(0) !== "+" && !this.options.separateDialCode),
                { NATIONAL: n, INTERNATIONAL: o } = l.utils.numberFormat,
                s = i ? n : o;
              e = l.utils.formatNumber(e, this.selectedCountryData.iso2, s);
            }
            (e = this._beforeSetNumber(e)), (this.telInput.value = e);
          }
          _updateCountryFromNumber(t) {
            const e = t.indexOf("+");
            let i = e ? t.substring(e) : t;
            const n = this.selectedCountryData.dialCode;
            i &&
              n === "1" &&
              i.charAt(0) !== "+" &&
              (i.charAt(0) !== "1" && (i = `1${i}`), (i = `+${i}`)),
              this.options.separateDialCode &&
                n &&
                i.charAt(0) !== "+" &&
                (i = `+${n}${i}`);
            const s = this._getDialCode(i, !0),
              u = N(i);
            let p = null;
            if (s) {
              const C = this.dialCodeToIso2Map[N(s)],
                y =
                  C.indexOf(this.selectedCountryData.iso2) !== -1 &&
                  u.length <= s.length - 1;
              if (!(n === "1" && F(u)) && !y) {
                for (let v = 0; v < C.length; v++)
                  if (C[v]) {
                    p = C[v];
                    break;
                  }
              }
            } else
              i.charAt(0) === "+" && u.length
                ? (p = "")
                : (!i || i === "+") &&
                  !this.selectedCountryData.iso2 &&
                  (p = this.defaultCountry);
            return p !== null ? this._setCountry(p) : !1;
          }
          _highlightListItem(t, e) {
            const i = this.highlightedItem;
            if (
              (i &&
                (i.classList.remove("iti__highlight"),
                i.setAttribute("aria-selected", "false")),
              (this.highlightedItem = t),
              this.highlightedItem)
            ) {
              this.highlightedItem.classList.add("iti__highlight"),
                this.highlightedItem.setAttribute("aria-selected", "true");
              const n = this.highlightedItem.getAttribute("id") || "";
              this.selectedCountry.setAttribute("aria-activedescendant", n),
                this.searchInput.setAttribute("aria-activedescendant", n);
            }
            e && this.highlightedItem.focus();
          }
          _getCountryData(t, e) {
            for (let i = 0; i < this.countries.length; i++)
              if (this.countries[i].iso2 === t) return this.countries[i];
            if (e) return null;
            throw new Error(`No country data for '${t}'`);
          }
          _setCountry(t) {
            const { separateDialCode: e, showFlags: i, i18n: n } = this.options,
              o = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            if (
              ((this.selectedCountryData = t
                ? this._getCountryData(t, !1) || {}
                : {}),
              this.selectedCountryData.iso2 &&
                (this.defaultCountry = this.selectedCountryData.iso2),
              this.selectedCountryInner)
            ) {
              let s = "",
                u = "";
              t && i
                ? ((s = `iti__flag iti__${t}`),
                  (u = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`))
                : ((s = "iti__flag iti__globe"), (u = n.noCountrySelected)),
                (this.selectedCountryInner.className = s),
                (this.selectedCountryA11yText.textContent = u);
            }
            if ((this._setSelectedCountryTitleAttribute(t, e), e)) {
              const s = this.selectedCountryData.dialCode
                ? `+${this.selectedCountryData.dialCode}`
                : "";
              this.selectedDialCode.innerHTML = s;
              const p =
                (this.selectedCountry.offsetWidth ||
                  this._getHiddenSelectedCountryWidth()) + 8;
              this.isRTL
                ? (this.telInput.style.paddingRight = `${p}px`)
                : (this.telInput.style.paddingLeft = `${p}px`);
            }
            return (
              this._updatePlaceholder(), this._updateMaxLength(), o.iso2 !== t
            );
          }
          _updateMaxLength() {
            const {
              strictMode: t,
              placeholderNumberType: e,
              validationNumberType: i,
            } = this.options;
            if (t && l.utils)
              if (this.selectedCountryData.iso2) {
                const n = l.utils.numberType[e];
                let o = l.utils.getExampleNumber(
                    this.selectedCountryData.iso2,
                    !1,
                    n,
                    !0
                  ),
                  s = o;
                for (
                  ;
                  l.utils.isPossibleNumber(o, this.selectedCountryData.iso2, i);

                )
                  (s = o), (o += "0");
                const u = l.utils.getCoreNumber(
                  s,
                  this.selectedCountryData.iso2
                );
                this.maxCoreNumberLength = u.length;
              } else this.maxCoreNumberLength = null;
          }
          _setSelectedCountryTitleAttribute(t = null, e) {
            if (!this.selectedCountry) return;
            let i;
            t && !e
              ? (i = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`)
              : t
              ? (i = this.selectedCountryData.name)
              : (i = "Unknown"),
              this.selectedCountry.setAttribute("title", i);
          }
          _getHiddenSelectedCountryWidth() {
            if (this.telInput.parentNode) {
              const t = this.telInput.parentNode.cloneNode(!1);
              (t.style.visibility = "hidden"), document.body.appendChild(t);
              const e = this.countryContainer.cloneNode();
              t.appendChild(e);
              const i = this.selectedCountry.cloneNode(!0);
              e.appendChild(i);
              const n = i.offsetWidth;
              return document.body.removeChild(t), n;
            }
            return 0;
          }
          _updatePlaceholder() {
            const {
                autoPlaceholder: t,
                placeholderNumberType: e,
                nationalMode: i,
                customPlaceholder: n,
              } = this.options,
              o =
                t === "aggressive" ||
                (!this.hadInitialPlaceholder && t === "polite");
            if (l.utils && o) {
              const s = l.utils.numberType[e];
              let u = this.selectedCountryData.iso2
                ? l.utils.getExampleNumber(this.selectedCountryData.iso2, i, s)
                : "";
              (u = this._beforeSetNumber(u)),
                typeof n == "function" && (u = n(u, this.selectedCountryData)),
                this.telInput.setAttribute("placeholder", u);
            }
          }
          _selectListItem(t) {
            const e = this._setCountry(t.getAttribute("data-country-code"));
            this._closeDropdown(),
              this._updateDialCode(t.getAttribute("data-dial-code")),
              this.telInput.focus(),
              e && this._triggerCountryChange();
          }
          _closeDropdown() {
            this.dropdownContent.classList.add("iti__hide"),
              this.selectedCountry.setAttribute("aria-expanded", "false"),
              this.selectedCountry.removeAttribute("aria-activedescendant"),
              this.highlightedItem &&
                this.highlightedItem.setAttribute("aria-selected", "false"),
              this.searchInput.removeAttribute("aria-activedescendant"),
              this.dropdownArrow.classList.remove("iti__arrow--up"),
              document.removeEventListener(
                "keydown",
                this._handleKeydownOnDropdown
              ),
              this.searchInput.removeEventListener(
                "input",
                this._handleSearchChange
              ),
              document.documentElement.removeEventListener(
                "click",
                this._handleClickOffToClose
              ),
              this.countryList.removeEventListener(
                "mouseover",
                this._handleMouseoverCountryList
              ),
              this.countryList.removeEventListener(
                "click",
                this._handleClickCountryList
              ),
              this.options.dropdownContainer &&
                (this.options.useFullscreenPopup ||
                  window.removeEventListener(
                    "scroll",
                    this._handleWindowScroll
                  ),
                this.dropdown.parentNode &&
                  this.dropdown.parentNode.removeChild(this.dropdown)),
              this._trigger("close:countrydropdown");
          }
          _scrollTo(t) {
            const e = this.countryList,
              i = document.documentElement.scrollTop,
              n = e.offsetHeight,
              o = e.getBoundingClientRect().top + i,
              s = o + n,
              u = t.offsetHeight,
              p = t.getBoundingClientRect().top + i,
              C = p + u,
              y = p - o + e.scrollTop;
            if (p < o) e.scrollTop = y;
            else if (C > s) {
              const _ = n - u;
              e.scrollTop = y - _;
            }
          }
          _updateDialCode(t) {
            const e = this.telInput.value,
              i = `+${t}`;
            let n;
            if (e.charAt(0) === "+") {
              const o = this._getDialCode(e);
              o ? (n = e.replace(o, i)) : (n = i), (this.telInput.value = n);
            }
          }
          _getDialCode(t, e) {
            let i = "";
            if (t.charAt(0) === "+") {
              let n = "";
              for (let o = 0; o < t.length; o++) {
                const s = t.charAt(o);
                if (!isNaN(parseInt(s, 10))) {
                  if (((n += s), e))
                    this.dialCodeToIso2Map[n] && (i = t.substr(0, o + 1));
                  else if (this.dialCodes[n]) {
                    i = t.substr(0, o + 1);
                    break;
                  }
                  if (n.length === this.dialCodeMaxLen) break;
                }
              }
            }
            return i;
          }
          _getFullNumber() {
            const t = this.telInput.value.trim(),
              { dialCode: e } = this.selectedCountryData;
            let i;
            const n = N(t);
            return (
              this.options.separateDialCode && t.charAt(0) !== "+" && e && n
                ? (i = `+${e}`)
                : (i = ""),
              i + t
            );
          }
          _beforeSetNumber(t) {
            let e = t;
            if (this.options.separateDialCode) {
              let i = this._getDialCode(e);
              if (i) {
                i = `+${this.selectedCountryData.dialCode}`;
                const n =
                  e[i.length] === " " || e[i.length] === "-"
                    ? i.length + 1
                    : i.length;
                e = e.substr(n);
              }
            }
            return this._cap(e);
          }
          _triggerCountryChange() {
            this._trigger("countrychange");
          }
          _formatNumberAsYouType() {
            const t = this._getFullNumber(),
              e = l.utils
                ? l.utils.formatNumberAsYouType(
                    t,
                    this.selectedCountryData.iso2
                  )
                : t,
              { dialCode: i } = this.selectedCountryData;
            return this.options.separateDialCode &&
              this.telInput.value.charAt(0) !== "+" &&
              e.includes(`+${i}`)
              ? (e.split(`+${i}`)[1] || "").trim()
              : e;
          }
          handleAutoCountry() {
            this.options.initialCountry === "auto" &&
              l.autoCountry &&
              ((this.defaultCountry = l.autoCountry),
              this.selectedCountryData.iso2 ||
                this.selectedCountryInner.classList.contains("iti__globe") ||
                this.setCountry(this.defaultCountry),
              this.resolveAutoCountryPromise());
          }
          handleUtils() {
            l.utils &&
              (this.telInput.value &&
                this._updateValFromNumber(this.telInput.value),
              this.selectedCountryData.iso2 &&
                (this._updatePlaceholder(), this._updateMaxLength())),
              this.resolveUtilsScriptPromise();
          }
          destroy() {
            var i, n;
            if (this.options.allowDropdown) {
              this._closeDropdown(),
                this.selectedCountry.removeEventListener(
                  "click",
                  this._handleClickSelectedCountry
                ),
                this.countryContainer.removeEventListener(
                  "keydown",
                  this._handleCountryContainerKeydown
                );
              const o = this.telInput.closest("label");
              o && o.removeEventListener("click", this._handleLabelClick);
            }
            const { form: t } = this.telInput;
            this._handleHiddenInputSubmit &&
              t &&
              t.removeEventListener("submit", this._handleHiddenInputSubmit),
              this.telInput.removeEventListener(
                "input",
                this._handleInputEvent
              ),
              this._handleKeydownEvent &&
                this.telInput.removeEventListener(
                  "keydown",
                  this._handleKeydownEvent
                ),
              this.telInput.removeAttribute("data-intl-tel-input-id");
            const e = this.telInput.parentNode;
            (i = e == null ? void 0 : e.parentNode) == null ||
              i.insertBefore(this.telInput, e),
              (n = e == null ? void 0 : e.parentNode) == null ||
                n.removeChild(e),
              delete l.instances[this.id];
          }
          getExtension() {
            return l.utils
              ? l.utils.getExtension(
                  this._getFullNumber(),
                  this.selectedCountryData.iso2
                )
              : "";
          }
          getNumber(t) {
            if (l.utils) {
              const { iso2: e } = this.selectedCountryData;
              return l.utils.formatNumber(this._getFullNumber(), e, t);
            }
            return "";
          }
          getNumberType() {
            return l.utils
              ? l.utils.getNumberType(
                  this._getFullNumber(),
                  this.selectedCountryData.iso2
                )
              : -99;
          }
          getSelectedCountryData() {
            return this.selectedCountryData;
          }
          getValidationError() {
            if (l.utils) {
              const { iso2: t } = this.selectedCountryData;
              return l.utils.getValidationError(this._getFullNumber(), t);
            }
            return -99;
          }
          isValidNumber() {
            const t = this._getFullNumber();
            return new RegExp("\\p{L}", "u").test(t)
              ? !1
              : l.utils
              ? l.utils.isPossibleNumber(
                  t,
                  this.selectedCountryData.iso2,
                  this.options.validationNumberType
                )
              : null;
          }
          isValidNumberPrecise() {
            const t = this._getFullNumber();
            return new RegExp("\\p{L}", "u").test(t)
              ? !1
              : l.utils
              ? l.utils.isValidNumber(t, this.selectedCountryData.iso2)
              : null;
          }
          setCountry(t) {
            const e = t.toLowerCase();
            this.selectedCountryData.iso2 !== e &&
              (this._setCountry(e),
              this._updateDialCode(this.selectedCountryData.dialCode),
              this._triggerCountryChange());
          }
          setNumber(t) {
            const e = this._updateCountryFromNumber(t);
            this._updateValFromNumber(t),
              e && this._triggerCountryChange(),
              this._trigger("input", { isSetNumber: !0 });
          }
          setPlaceholderNumberType(t) {
            (this.options.placeholderNumberType = t), this._updatePlaceholder();
          }
        },
        J = (t) =>
          !l.utils && !l.startedLoadingUtilsScript
            ? ((l.startedLoadingUtilsScript = !0),
              new Promise((e, i) => {
                import(t)
                  .then(({ default: n }) => {
                    (l.utils = n), A("handleUtils"), e(!0);
                  })
                  .catch(() => {
                    A("rejectUtilsScriptPromise"), i();
                  });
              }))
            : null,
        l = Object.assign(
          (t, e) => {
            const i = new $(t, e);
            return (
              i._init(),
              t.setAttribute("data-intl-tel-input-id", i.id.toString()),
              (l.instances[i.id] = i),
              i
            );
          },
          {
            defaults: O,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => L,
            getInstance: (t) => {
              const e = t.getAttribute("data-intl-tel-input-id");
              return e ? l.instances[e] : null;
            },
            instances: {},
            loadUtils: J,
            version: "23.0.11",
          }
        ),
        Q = l;
      return H(k);
    })();
    return r.default;
  });
})(K);
var dt = K.exports;
const ut = lt(dt),
  ct = document.querySelector("#phone"),
  ht = "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.11/build/js/utils.js";
ut(ct, {
  initialCountry: "auto",
  containerClass: "phone",
  autoPlaceholder: "polite",
  strictMode: !0,
  utilsScript: ht,
  formatAsYouType: !0,
  formatOnDisplay: !0,
  geoIpLookup: function (a) {
    fetch("https://ipapi.co/json")
      .then((r) => r.json())
      .then((r) => {
        a(r.country_code);
      })
      .catch((r) => a(r.message));
  },
});