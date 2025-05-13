// 🧠 مصفوفة كلمات المستوى B2 (أضف كلماتك هنا)
const wordsB2 = [
  {
    en: "analyze",
    ar: "يحلل",
    def: "يقوم بدراسة شيء بدقة لاكتشاف مكوناته أو خصائصه",
    ex: "Researchers will analyze the experiment results."
  },
  {
    en: "comprehensive",
    ar: "شامل",
    def: "يغطي جميع الجوانب أو العناصر المطلوبة",
    ex: "This guide provides comprehensive information about the topic."
  },
  {
    en: "contradict",
    ar: "يناقض",
    def: "يقول أو يفعل العكس تمامًا",
    ex: "His actions contradict his words."
  },
  {
    en: "dilemma",
    ar: "معضلة",
    def: "موقف صعب يتطلب اختيار بين خيارين غير مرغوب فيهما",
    ex: "She faced the dilemma of choosing between career and family."
  },
  {
    en: "elaborate",
    ar: "مفصل",
    def: "مُعد بعناية فائقة وبكثير من التفاصيل",
    ex: "He gave an elaborate explanation of the theory."
  },
  {
    en: "fluctuate",
    ar: "يتذبذب",
    def: "يتغير بشكل غير منتظم بين قيمتين",
    ex: "Stock prices fluctuate daily."
  },
  {
    en: "hypothesis",
    ar: "فرضية",
    def: "تفسير مقترح لظاهرة ما يحتاج إلى اختبار",
    ex: "The scientist proposed an interesting hypothesis."
  },
  {
    en: "implement",
    ar: "ينفذ",
    def: "يضع خطة أو قرار موضع التنفيذ",
    ex: "The company will implement new policies next month."
  },
  {
    en: "innovative",
    ar: "مبتكر",
    def: "يحتوي على أفكار أو طرق جديدة",
    ex: "Their innovative approach solved the problem."
  },
  {
    en: "justify",
    ar: "يبرر",
    def: "يظهر أو يثبت أن شيء ما صحيح أو معقول",
    ex: "Can you justify your decision?"
  },
  {
    en: "legitimate",
    ar: "شرعي",
    def: "مسموح به حسب القانون أو القواعد",
    ex: "They raised legitimate concerns about the project."
  },
  {
    en: "methodology",
    ar: "منهجية",
    def: "نظام من الطرق المستخدمة في مجال معين",
    ex: "The research methodology was carefully designed."
  },
  {
    en: "nuance",
    ar: "فارق دقيق",
    def: "فرق بسيط جدًا في المعنى أو التعبير",
    ex: "The translation missed some cultural nuances."
  },
  {
    en: "objective",
    ar: "موضوعي",
    def: "قائم على الحقائق وليس على المشاعر",
    ex: "Journalists should be objective in their reporting."
  },
  {
    en: "paradigm",
    ar: "نموذج فكري",
    def: "نموذج أو مثال واضح عن شيء ما",
    ex: "This discovery changed the scientific paradigm."
  },
  {
    en: "phenomenon",
    ar: "ظاهرة",
    def: "حدث أو حالة يمكن ملاحظتها",
    ex: "Hurricanes are natural phenomena."
  },
  {
    en: "quantify",
    ar: "يقيس كمياً",
    def: "يقيس أو يعبر عن شيء بعدد",
    ex: "It's difficult to quantify the damage."
  },
  {
    en: "rational",
    ar: "عقلاني",
    def: "قائم على المنطق أو العقل",
    ex: "There must be a rational explanation."
  },
  {
    en: "scrutinize",
    ar: "يفحص بدقة",
    def: "ينظر إلى شيء بعناية شديدة",
    ex: "The committee will scrutinize the proposal."
  },
  {
    en: "theoretical",
    ar: "نظري",
    def: "متعلق بالنظرية وليس التطبيق العملي",
    ex: "This is still at the theoretical stage."
  },
  {
    en: "undermine",
    ar: "يضعف",
    def: "يجعل شخصًا أو شيءًا أضعف تدريجيًا",
    ex: "These accusations could undermine his authority."
  },
  {
    en: "validate",
    ar: "يصدق",
    def: "يثبت أن شيء ما صحيح أو مقبول",
    ex: "The experiment validated our hypothesis."
  },
  {
    en: "withhold",
    ar: "يمنع",
    def: "يرفض إعطاء شيء مطلوب أو متوقع",
    ex: "The government may withhold sensitive information."
  },
  {
    en: "ambiguous",
    ar: "غامض",
    def: "له أكثر من معنى محتمل",
    ex: "His ambiguous statement confused everyone."
  },
  {
    en: "bias",
    ar: "تحيز",
    def: "الميل لشيء أو شخص دون الآخر بطريقة غير عادلة",
    ex: "The article showed clear political bias."
  },
  {
    en: "coherent",
    ar: "متماسك",
    def: "واضح وسهل الفهم لأن كل أجزائه مرتبطة",
    ex: "She presented a coherent argument."
  },
  {
    en: "discrepancy",
    ar: "تناقض",
    def: "اختلاف بين شيئين يجب أن يكونا متماثلين",
    ex: "There's a discrepancy in the financial reports."
  },
  {
    en: "empirical",
    ar: "تجريبي",
    def: "قائم على الملاحظة أو التجربة وليس النظرية",
    ex: "We need empirical evidence to support this."
  },
  {
    en: "feasible",
    ar: "عملي",
    def: "قابل للتنفيذ أو التحقيق",
    ex: "Is this plan economically feasible?"
  },
  {
    en: "hypothetical",
    ar: "افتراضي",
    def: "متعلق بفرضية غير مثبتة",
    ex: "Let's consider a hypothetical situation."
  },
  {
    en: "implicit",
    ar: "ضمني",
    def: "مفهوم رغم أنه غير مصرح به مباشرة",
    ex: "There was implicit criticism in his remarks."
  },
  {
    en: "jurisdiction",
    ar: "اختصاص قضائي",
    def: "السلطة القانونية لاتخاذ القرارات",
    ex: "This matter falls under federal jurisdiction."
  },
  {
    en: "kinetic",
    ar: "حركي",
    def: "متعلق بالحركة أو الناتج عنها",
    ex: "The sculpture had a kinetic energy."
  },
  {
    en: "lucid",
    ar: "واضح",
    def: "واضح وسهل الفهم",
    ex: "She gave a lucid explanation of the process."
  },
  {
    en: "mitigate",
    ar: "يخفف",
    def: "يجعل شيئًا أقل خطورة أو ألمًا",
    ex: "New measures will mitigate the risks."
  },
  {
    en: "notion",
    ar: "فكرة",
    def: "معتقد أو رأي عن شيء ما",
    ex: "I reject the notion that money brings happiness."
  },
  {
    en: "obsolete",
    ar: "عتيق",
    def: "لم يعد مستخدمًا لأن هناك شيئًا أحدث منه",
    ex: "Floppy disks are now obsolete technology."
  },
  {
    en: "paradox",
    ar: "مفارقة",
    def: "بيان يبدو متناقضًا لكنه قد يكون صحيحًا",
    ex: "The paradox is that less is sometimes more."
  },
  {
    en: "quintessential",
    ar: "مثالي",
    def: "يمثل المثال الأكثر نموذجية أو مثالية",
    ex: "This is the quintessential French café."
  },
  {
    en: "rigorous",
    ar: "دقيق",
    def: "صارم ودقيق للغاية",
    ex: "The training program was rigorous but effective."
  },
  {
    en: "subjective",
    ar: "ذاتي",
    def: "قائم على الآراء الشخصية بدلاً من الحقائق",
    ex: "Art appreciation is highly subjective."
  },
  {
    en: "tenuous",
    ar: "هش",
    def: "ضعيف جدًا أو قليل الاحتمال",
    ex: "There's only a tenuous connection between them."
  },
  {
    en: "ubiquitous",
    ar: "موجود في كل مكان",
    def: "موجود في كل مكان أو شائع جدًا",
    ex: "Mobile phones have become ubiquitous."
  },
  {
    en: "viable",
    ar: "قابل للحياة",
    def: "قادر على العمل بنجاح",
    ex: "We need to find a viable solution."
  },
  {
    en: "warrant",
    ar: "يبرر",
    def: "يجعل شيئًا ضروريًا أو مناسبًا",
    ex: "The situation warrants immediate action."
  },
  {
    en: "xenophobia",
    ar: "كراهية الأجانب",
    def: "الخوف أو الكراهية من الأجانب أو الغرباء",
    ex: "Xenophobia has increased in some countries."
  },
  {
    en: "yield",
    ar: "ينتج",
    def: "ينتج أو يوفر شيئًا ما",
    ex: "The investigation yielded important evidence."
  },
  {
    en: "zealous",
    ar: "متحمس",
    def: "متحمس جدًا أو مخلص لقضية ما",
    ex: "He was a zealous supporter of the movement."
  }
];

// 📌 عرض كلمة عشوائية من كلمات B2
function getNewWord() {
  const word = wordsB2[Math.floor(Math.random() * wordsB2.length)];
  const container = document.getElementById("word-card");

  container.innerHTML = `
    <h2>${word.en}</h2>
    <p><strong>الترجمة:</strong> ${word.ar}</p>
    <p><strong>الشرح:</strong> ${word.def}</p>
    <p><strong>مثال:</strong> ${word.ex}</p>
    <button onclick="speakWord('${word.en}')">🔊 استمع للكلمة</button>
    <button onclick="saveWord('${word.en}', '${word.ar}', '${word.def}', '${word.ex}')">📘 أضف إلى اليوميات</button>
  `;
}

// 📦 حفظ الكلمة في localStorage
function saveWord(en, ar, def, ex) {
  let diary = JSON.parse(localStorage.getItem("diary") || "[]");
  diary.push({ en, ar, def, ex });
  localStorage.setItem("diary", JSON.stringify(diary));
  alert("✅ تمت الإضافة إلى اليوميات!");
}

// 🔊 نطق الكلمة
function speakWord(word) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  } else {
    alert("❌ النطق غير مدعوم.");
  }
}

// تحميل الكلمة عند فتح الصفحة
window.onload = getNewWord;
