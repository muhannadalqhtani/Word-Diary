const wordsA1 = [
  {
    en: "apple",
    ar: "تفاحة",
    def: "نوع من الفواكه الحلوة والمستديرة",
    ex: "I ate an apple for breakfast."
  },
  {
    en: "book",
    ar: "كتاب",
    def: "مجموعة من الصفحات المطبوعة تحتوي على معلومات أو قصة",
    ex: "She read a book about animals."
  },
  {
    en: "car",
    ar: "سيارة",
    def: "مركبة تُستخدم للتنقل من مكان إلى آخر",
    ex: "My father drives a red car."
  },
  {
    en: "dog",
    ar: "كلب",
    def: "حيوان أليف من الثدييات، معروف بولائه للإنسان",
    ex: "Their dog barks at strangers."
  },
  {
    en: "house",
    ar: "منزل",
    def: "مبنى يعيش فيه الناس",
    ex: "We bought a new house last year."
  },
  {
    en: "water",
    ar: "ماء",
    def: "سائل شفاف عديم اللون ضروري للحياة",
    ex: "Please drink more water."
  },
  {
    en: "sun",
    ar: "شمس",
    def: "النجم الذي تَدور حوله الأرض ويُعطي الضوء والحرارة",
    ex: "The sun is very hot today."
  },
  {
    en: "pen",
    ar: "قلم",
    def: "أداة تُستخدم للكتابة بالحبر",
    ex: "Can I borrow your pen?"
  },
  {
    en: "table",
    ar: "طاولة",
    def: "قطعة أثاث ذات سطح مستوٍ وأرجل",
    ex: "The book is on the table."
  },
  {
    en: "chair",
    ar: "كرسي",
    def: "مقعد له ظهر وأحيانًا ذراعان",
    ex: "Please sit on the chair."
  },
  {
    en: "mother",
    ar: "أم",
    def: "الوالدة الأنثى للشخص",
    ex: "My mother cooks delicious food."
  },
  {
    en: "father",
    ar: "أب",
    def: "الوالد الذكر للشخص",
    ex: "His father works in a hospital."
  },
  {
    en: "sister",
    ar: "أخت",
    def: "الأنثى التي لها نفس الأبوين",
    ex: "My sister is younger than me."
  },
  {
    en: "brother",
    ar: "أخ",
    def: "الذكر الذي له نفس الأبوين",
    ex: "He has two brothers."
  },
  {
    en: "school",
    ar: "مدرسة",
    def: "مكان يتعلم فيه الطلاب",
    ex: "The children go to school every day."
  },
  {
    en: "teacher",
    ar: "معلم",
    def: "الشخص الذي يعلم الطلاب",
    ex: "Our teacher is very kind."
  },
  {
    en: "student",
    ar: "طالب",
    def: "شخص يدرس في المدرسة أو الجامعة",
    ex: "She is a good student."
  },
  {
    en: "bag",
    ar: "حقيبة",
    def: "حاوية تُستخدم لحمل الأشياء",
    ex: "I put my books in my bag."
  },
  {
    en: "door",
    ar: "باب",
    def: "مدخل أو مخرج من المبنى أو الغرفة",
    ex: "Please close the door."
  },
  {
    en: "window",
    ar: "نافذة",
    def: "فتحة في الجدار تسمح بدخول الضوء والهواء",
    ex: "Open the window, please."
  },
  {
    en: "bed",
    ar: "سرير",
    def: "قطعة أثاث للنوم أو الراحة",
    ex: "I go to bed at 10 o'clock."
  },
  {
    en: "shirt",
    ar: "قميص",
    def: "قطعة ملابس تغطي الجزء العلوي من الجسم",
    ex: "He wears a blue shirt."
  },
  {
    en: "pants",
    ar: "بنطلون",
    def: "ملابس تغطي الجزء السفلي من الجسم",
    ex: "These pants are too big."
  },
  {
    en: "shoe",
    ar: "حذاء",
    def: "غطاء للقدم مصنوع من الجلد أو القماش",
    ex: "I need new shoes."
  },
  {
    en: "hat",
    ar: "قبعة",
    def: "غطاء للرأس",
    ex: "She wears a hat in the sun."
  },
  {
    en: "milk",
    ar: "حليب",
    def: "سائل أبيض تنتجه الأبقار ويشربه الناس",
    ex: "I drink milk every morning."
  },
  {
    en: "bread",
    ar: "خبز",
    def: "طعام مصنوع من الدقيق والماء ويُخبز",
    ex: "We eat bread with cheese."
  },
  {
    en: "rice",
    ar: "أرز",
    def: "حبوب بيضاء أو بنية تؤكل كطعام رئيسي",
    ex: "Rice is common in Asian meals."
  },
  {
    en: "egg",
    ar: "بيضة",
    def: "طعام يأتي من الدجاج ويُطهى بطرق مختلفة",
    ex: "I like boiled eggs for breakfast."
  },
  {
    en: "fish",
    ar: "سمك",
    def: "حيوان يعيش في الماء ويُؤكل كطعام",
    ex: "We had fish for dinner."
  },
  {
    en: "red",
    ar: "أحمر",
    def: "لون مثل الدم أو التفاح الناضج",
    ex: "The car is red."
  },
  {
    en: "blue",
    ar: "أزرق",
    def: "لون مثل السماء الصافية",
    ex: "Her eyes are blue."
  },
  {
    en: "green",
    ar: "أخضر",
    def: "لون مثل العشب أو الأشجار",
    ex: "The leaves are green."
  },
  {
    en: "yellow",
    ar: "أصفر",
    def: "لون مثل الشمس أو الليمون",
    ex: "The banana is yellow."
  },
  {
    en: "black",
    ar: "أسود",
    def: "لون مثل الليل أو الفحم",
    ex: "My cat is black."
  },
  {
    en: "white",
    ar: "أبيض",
    def: "لون مثل الثلج أو الحليب",
    ex: "The paper is white."
  },
  {
    en: "big",
    ar: "كبير",
    def: "ذو حجم كبير، ليس صغيراً",
    ex: "Elephants are big animals."
  },
  {
    en: "small",
    ar: "صغير",
    def: "ذو حجم صغير، ليس كبيراً",
    ex: "This is a small box."
  },
  {
    en: "hot",
    ar: "ساخن",
    def: "ذو درجة حرارة عالية",
    ex: "The tea is too hot."
  },
  {
    en: "cold",
    ar: "بارد",
    def: "ذو درجة حرارة منخفضة",
    ex: "The water is cold."
  },
  {
    en: "good",
    ar: "جيد",
    def: "ذو جودة عالية أو ممتاز",
    ex: "This is a good book."
  },
  {
    en: "bad",
    ar: "سيء",
    def: "غير جيد أو غير مرغوب فيه",
    ex: "The weather is bad today."
  },
  {
    en: "happy",
    ar: "سعيد",
    def: "الشعور بالفرح أو الرضا",
    ex: "She looks happy today."
  },
  {
    en: "sad",
    ar: "حزين",
    def: "الشعور بالحزن أو عدم السعادة",
    ex: "Why are you sad?"
  },
  {
    en: "one",
    ar: "واحد",
    def: "الرقم 1",
    ex: "I have one brother."
  },
  {
    en: "two",
    ar: "اثنان",
    def: "الرقم 2",
    ex: "There are two cats."
  },
  {
    en: "three",
    ar: "ثلاثة",
    def: "الرقم 3",
    ex: "We need three chairs."
  },
  {
    en: "hello",
    ar: "مرحبا",
    def: "تحية عند اللقاء",
    ex: "Hello, how are you?"
  },
  {
    en: "thank you",
    ar: "شكرا",
    def: "تعبير عن الامتنان",
    ex: "Thank you for your help."
  },
  {
    en: "goodbye",
    ar: "مع السلامة",
    def: "تحية عند الوداع",
    ex: "Goodbye, see you tomorrow!"
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
