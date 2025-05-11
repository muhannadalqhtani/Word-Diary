const wordsB1 = [
  {
    en: "achievement",
    ar: "إنجاز",
    def: "نتيجة ناجحة تم الوصول إليها بجهد",
    ex: "Winning the competition was a great achievement."
  },
  {
    en: "behavior",
    ar: "سلوك",
    def: "الطريقة التي يتصرف بها الشخص",
    ex: "The teacher praised his good behavior."
  },
  {
    en: "challenge",
    ar: "تحدي",
    def: "أمر صعب يتطلب الجهد للتغلب عليه",
    ex: "Running a marathon is a physical challenge."
  },
  {
    en: "decision",
    ar: "قرار",
    def: "اختيار يتم اتخاذه بعد التفكير",
    ex: "Moving abroad was a difficult decision."
  },
  {
    en: "education",
    ar: "تعليم",
    def: "عملية اكتساب المعرفة والمهارات",
    ex: "Higher education opens many opportunities."
  },
  {
    en: "experience",
    ar: "خبرة",
    def: "المعرفة المكتسبة من خلال الممارسة",
    ex: "This job requires at least 3 years of experience."
  },
  {
    en: "freedom",
    ar: "حرية",
    def: "القدرة على التصرف دون قيود",
    ex: "Freedom of speech is important in democracy."
  },
  {
    en: "goal",
    ar: "هدف",
    def: "شيء تسعى لتحقيقه في المستقبل",
    ex: "My goal is to speak Arabic fluently."
  },
  {
    en: "honest",
    ar: "صادق",
    def: "الشخص الذي يقول الحقيقة دائماً",
    ex: "Always be honest with your friends."
  },
  {
    en: "improve",
    ar: "يحسّن",
    def: "يجعل شيئاً أفضل أو أكثر تطوراً",
    ex: "Practicing daily will improve your skills."
  },
  {
    en: "knowledge",
    ar: "معرفة",
    def: "فهم الحقائق أو المعلومات عن شيء ما",
    ex: "Reading expands your knowledge."
  },
  {
    en: "leadership",
    ar: "قيادة",
    def: "القدرة على توجيه وإرشاد الآخرين",
    ex: "She showed excellent leadership in the project."
  },
  {
    en: "motivation",
    ar: "حافز",
    def: "الشعور الذي يجعلك تريد أن تفعل شيئاً",
    ex: "Losing weight was her motivation to exercise."
  },
  {
    en: "opportunity",
    ar: "فرصة",
    def: "وقت مناسب لفعل شيء ما",
    ex: "This job is a great opportunity for you."
  },
  {
    en: "patient",
    ar: "صبور",
    def: "القدرة على الانتظار دون انزعاج",
    ex: "Teachers need to be patient with students."
  },
  {
    en: "quality",
    ar: "جودة",
    def: "مدى جودة أو سوء شيء ما",
    ex: "We focus on quality, not quantity."
  },
  {
    en: "responsible",
    ar: "مسؤول",
    def: "الشخص الذي يمكن الاعتماد عليه",
    ex: "As team leader, you must be responsible."
  },
  {
    en: "solution",
    ar: "حل",
    def: "إجابة لمشكلة أو طريقة لتصحيح خطأ",
    ex: "We need to find a solution quickly."
  },
  {
    en: "tradition",
    ar: "تقليد",
    def: "معتقد أو عادة تنتقل عبر الأجيال",
    ex: "Wearing white at weddings is a tradition."
  },
  {
    en: "understand",
    ar: "يفهم",
    def: "معرفة معنى شيء ما أو كيفية عمله",
    ex: "Do you understand the instructions?"
  },
  {
    en: "value",
    ar: "قيمة",
    def: "مدى أهمية أو فائدة شيء ما",
    ex: "This necklace has great sentimental value."
  },
  {
    en: "wisdom",
    ar: "حكمة",
    def: "القدرة على استخدام المعرفة والخبرة بحكمة",
    ex: "Elders often share their wisdom with youth."
  },
  {
    en: "accept",
    ar: "يقبل",
    def: "الموافقة على تلقي شيء ما",
    ex: "I accept your apology."
  },
  {
    en: "benefit",
    ar: "فائدة",
    def: "ميزة أو شيء إيجابي تحصل عليه",
    ex: "Exercise has many health benefits."
  },
  {
    en: "communicate",
    ar: "يتواصل",
    def: "تبادل المعلومات مع الآخرين",
    ex: "We need to communicate better as a team."
  },
  {
    en: "develop",
    ar: "يطوّر",
    def: "ينمو أو يصبح أكثر تقدماً",
    ex: "Children develop quickly in their early years."
  },
  {
    en: "effort",
    ar: "جهد",
    def: "الطاقة الجسدية أو العقلية المبذولة",
    ex: "Success requires time and effort."
  },
  {
    en: "focus",
    ar: "تركيز",
    def: "إعطاء كل الانتباه لشيء معين",
    ex: "You need to focus on your studies."
  },
  {
    en: "generation",
    ar: "جيل",
    def: "جميع الناس الذين ولدوا في نفس الفترة",
    ex: "Younger generations use technology more."
  },
  {
    en: "habit",
    ar: "عادة",
    def: "شيء تفعله بانتظام دون تفكير",
    ex: "Smoking is a bad habit."
  },
  {
    en: "influence",
    ar: "تأثير",
    def: "القدرة على التأثير على شخص أو شيء",
    ex: "Parents have great influence on children."
  },
  {
    en: "judge",
    ar: "يحكم",
    def: "يتخذ قراراً بعد التفكير بعناية",
    ex: "Don't judge people too quickly."
  },
  {
    en: "kindness",
    ar: "لطف",
    def: "كونك لطيفاً ومهتماً بالآخرين",
    ex: "Small acts of kindness can make someone's day."
  },
  {
    en: "limit",
    ar: "حد",
    def: "النقطة أو المستوى الذي لا يمكن تجاوزه",
    ex: "There's a speed limit on this road."
  },
  {
    en: "manage",
    ar: "يدير",
    def: "يكون مسؤولاً عن شيء ما ويتحكم به",
    ex: "She manages a team of 20 employees."
  },
  {
    en: "normal",
    ar: "طبيعي",
    def: "معتاد أو متوقع، ليس غريباً",
    ex: "It's normal to feel nervous before exams."
  },
  {
    en: "opinion",
    ar: "رأي",
    def: "فكرتك أو اعتقادك عن شيء ما",
    ex: "Everyone has the right to express their opinion."
  },
  {
    en: "prefer",
    ar: "يفضل",
    def: "أن تحب شيئاً أكثر من شيء آخر",
    ex: "I prefer tea over coffee."
  },
  {
    en: "quality",
    ar: "جودة",
    def: "مستوى التميز في شيء ما",
    ex: "We prioritize quality over speed."
  },
  {
    en: "reflect",
    ar: "يتأمل",
    def: "يفكر بعمق في شيء ما",
    ex: "Take time to reflect on your decisions."
  },
  {
    en: "society",
    ar: "مجتمع",
    def: "مجموعة كبيرة من الناس الذين يعيشون معاً",
    ex: "Technology has changed modern society."
  },
  {
    en: "trust",
    ar: "ثقة",
    def: "الإيمان بصدق أو قدرة شخص ما",
    ex: "Trust is essential in any relationship."
  },
  {
    en: "unique",
    ar: "فريد",
    def: "مختلف عن كل الآخرين، مميز",
    ex: "Each person has a unique personality."
  },
  {
    en: "various",
    ar: "متنوع",
    def: "عدة أنواع أو أشكال مختلفة",
    ex: "We discussed various solutions to the problem."
  },
  {
    en: "willing",
    ar: "مستعد",
    def: "راغب أو مستعد لفعل شيء ما",
    ex: "Are you willing to help with the project?"
  },
  {
    en: "youth",
    ar: "شباب",
    def: "فترة حياة الشخص عندما يكون شاباً",
    ex: "In his youth, he traveled extensively."
  },
  {
    en: "zone",
    ar: "منطقة",
    def: "مساحة أو منطقة محددة بخصائص معينة",
    ex: "This is a no-parking zone."
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
