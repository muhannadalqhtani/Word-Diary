const wordsA2 = [
  {
    en: "airport",
    ar: "مطار",
    def: "مكان تقلع وتهبط فيه الطائرات",
    ex: "We arrived at the airport early."
  },
  {
    en: "bus",
    ar: "حافلة",
    def: "مركبة كبيرة لنقل الركاب",
    ex: "I take the bus to work every day."
  },
  {
    en: "doctor",
    ar: "طبيب",
    def: "شخص مؤهل لعلاج المرضى",
    ex: "You should see a doctor about that cough."
  },
  {
    en: "family",
    ar: "عائلة",
    def: "مجموعة من الأشخاص المرتبطين بالدم أو الزواج",
    ex: "Her family lives in Cairo."
  },
  {
    en: "hotel",
    ar: "فندق",
    def: "مكان يدفع الناس للإقامة فيه لفترة قصيرة",
    ex: "They booked a hotel near the beach."
  },
  {
    en: "email",
    ar: "بريد إلكتروني",
    def: "رسالة رقمية ترسل عبر الإنترنت",
    ex: "Please send me the details by email."
  },
  {
    en: "library",
    ar: "مكتبة",
    def: "مكان يحتوي على كتب للقراءة أو الاستعارة",
    ex: "The university library is very big."
  },
  {
    en: "computer",
    ar: "حاسوب",
    def: "جهاز إلكتروني لمعالجة وتخزين المعلومات",
    ex: "All students need a computer for their studies."
  },
  {
    en: "lunch",
    ar: "غداء",
    def: "الوجبة الرئيسية في منتصف النهار",
    ex: "Let's have lunch together tomorrow."
  },
  {
    en: "supermarket",
    ar: "سوبرماركت",
    def: "متجر كبير يبيع أنواع مختلفة من الطعام والسلع",
    ex: "We buy groceries at the supermarket every weekend."
  },
  {
    en: "pharmacy",
    ar: "صيدلية",
    def: "متجر يبيع الأدوية والمنتجات الطبية",
    ex: "I need to stop by the pharmacy to get medicine."
  },
  {
    en: "bank",
    ar: "بنك",
    def: "مؤسسة تتعامل مع المال والقروض",
    ex: "She works at the bank downtown."
  },
  {
    en: "passport",
    ar: "جواز سفر",
    def: "وثيقة رسمية للسفر إلى بلدان أخرى",
    ex: "Don't forget your passport when traveling abroad."
  },
  {
    en: "ticket",
    ar: "تذكرة",
    def: "وثيقة تسمح بدخول مكان أو ركوب وسيلة نقل",
    ex: "I bought two tickets for the concert."
  },
  {
    en: "umbrella",
    ar: "مظلة",
    def: "أداة تحمي من المطر أو الشمس",
    ex: "Take an umbrella - it might rain today."
  },
  {
    en: "key",
    ar: "مفتاح",
    def: "أداة معدنية تفتح الأقفال",
    ex: "I can't find my house keys!"
  },
  {
    en: "gift",
    ar: "هدية",
    def: "شيء يعطى لشخص دون مقابل",
    ex: "He gave her a beautiful gift for her birthday."
  },
  {
    en: "restaurant",
    ar: "مطعم",
    def: "مكان يقدم فيه الطعام للزبائن",
    ex: "Let's try that new Italian restaurant."
  },
  {
    en: "coffee",
    ar: "قهوة",
    def: "مشروب يصنع من حبوب البن المحمصة",
    ex: "I drink two cups of coffee every morning."
  },
  {
    en: "tea",
    ar: "شاي",
    def: "مشروب ساخن يصنع من أوراق الشاي",
    ex: "Would you like tea or coffee?"
  },
  {
    en: "juice",
    ar: "عصير",
    def: "مشروب يصنع من الفواكه الطازجة",
    ex: "Orange juice is my favorite breakfast drink."
  },
  {
    en: "salt",
    ar: "ملح",
    def: "مادة بيضاء تستخدم لإضافة نكهة للطعام",
    ex: "This soup needs more salt."
  },
  {
    en: "sugar",
    ar: "سكر",
    def: "مادة حلوة تستخدم لتحلية الطعام والشراب",
    ex: "I don't take sugar in my tea."
  },
  {
    en: "city",
    ar: "مدينة",
    def: "مكان كبير يعيش فيه الكثير من الناس",
    ex: "New York is a very big city."
  },
  {
    en: "village",
    ar: "قرية",
    def: "مكان صغير يعيش فيه الناس، أصغر من المدينة",
    ex: "My grandparents live in a small village."
  },
  {
    en: "job",
    ar: "وظيفة",
    def: "عمل يقوم به الشخص لكسب المال",
    ex: "He's looking for a new job."
  },
  {
    en: "time",
    ar: "وقت",
    def: "قياس للدقائق والساعات والأيام",
    ex: "What time is it now?"
  },
  {
    en: "minute",
    ar: "دقيقة",
    def: "وحدة زمنية تساوي 60 ثانية",
    ex: "I'll be ready in five minutes."
  },
  {
    en: "hour",
    ar: "ساعة",
    def: "وحدة زمنية تساوي 60 دقيقة",
    ex: "The meeting lasted two hours."
  },
  {
    en: "yesterday",
    ar: "أمس",
    def: "اليوم الذي قبل اليوم",
    ex: "I saw her yesterday at the park."
  },
  {
    en: "today",
    ar: "اليوم",
    def: "اليوم الحالي",
    ex: "Today is Monday."
  },
  {
    en: "tomorrow",
    ar: "غداً",
    def: "اليوم الذي بعد اليوم",
    ex: "We're leaving tomorrow morning."
  },
  {
    en: "easy",
    ar: "سهل",
    def: "غير صعب، بسيط",
    ex: "This exercise is very easy."
  },
  {
    en: "difficult",
    ar: "صعب",
    def: "ليس سهلاً، يحتاج إلى جهد",
    ex: "The exam was very difficult."
  },
  {
    en: "cheap",
    ar: "رخيص",
    def: "غير مكلف، سعره قليل",
    ex: "These shoes were very cheap."
  },
  {
    en: "expensive",
    ar: "غالي",
    def: "مكلف، سعره مرتفع",
    ex: "That restaurant is too expensive for me."
  },
  {
    en: "fast",
    ar: "سريع",
    def: "بسرعة، في وقت قصير",
    ex: "The train is faster than the bus."
  },
  {
    en: "slow",
    ar: "بطيء",
    def: "ليس سريعاً، يحتاج وقتاً طويلاً",
    ex: "My computer is very slow today."
  },
  {
    en: "right",
    ar: "صح",
    def: "صحيح، ليس خطأ",
    ex: "Your answer is right."
  },
  {
    en: "wrong",
    ar: "خطأ",
    def: "ليس صحيحاً",
    ex: "I think your calculation is wrong."
  },
  {
    en: "question",
    ar: "سؤال",
    def: "جملة تطلب معلومات أو إجابة",
    ex: "Do you have any questions?"
  },
  {
    en: "answer",
    ar: "جواب",
    def: "رد على سؤال",
    ex: "I don't know the answer to this question."
  },
  {
    en: "newspaper",
    ar: "جريدة",
    def: "مطبوع يومي أو أسبوعي يحتوي على أخبار",
    ex: "My father reads the newspaper every morning."
  },
  {
    en: "magazine",
    ar: "مجلة",
    def: "مطبوع دوري يحتوي على مقالات وصور",
    ex: "She bought a fashion magazine."
  },
  {
    en: "weather",
    ar: "طقس",
    def: "حالة الجو من حرارة وبرودة وأمطار",
    ex: "The weather is nice today."
  },
  {
    en: "rain",
    ar: "مطر",
    def: "قطرات ماء تسقط من السحاب",
    ex: "Take an umbrella - it's going to rain."
  },
  {
    en: "sunny",
    ar: "مشمس",
    def: "حالة الجو عندما تكون الشمس ساطعة",
    ex: "It's sunny and warm today."
  },
  {
    en: "cloudy",
    ar: "غائم",
    def: "حالة الجو عندما تكون السماء مليئة بالغيوم",
    ex: "Tomorrow will be cloudy but not rainy."
  }
];
function getNewWord() {
  const word = wordsA1[Math.floor(Math.random() * wordsA1.length)];
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
function speakWord(word) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    speechSynthesis.cancel(); // لإيقاف أي نطق سابق
    speechSynthesis.speak(utterance);
  } else {
    alert("❌ النطق غير مدعوم في هذا المتصفح.");
  }
}


function saveWord(en, ar, def, ex) {
  let diary = JSON.parse(localStorage.getItem("diary") || "[]");
  diary.push({ en, ar, def, ex });
  localStorage.setItem("diary", JSON.stringify(diary));
  alert("✅ تمت الإضافة إلى اليوميات!");
}


window.onload = getNewWord;