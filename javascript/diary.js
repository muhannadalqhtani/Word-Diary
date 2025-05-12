// ✅ عند تحميل الصفحة، يتم تنفيذ هذا الكود تلقائيًا
window.onload = function () {
  // استرجاع الكلمات المحفوظة من localStorage وتحويلها إلى مصفوفة
  const saved = JSON.parse(localStorage.getItem("diary") || "[]");

  // الحصول على جسم الجدول <tbody> داخل جدول اليوميات
  const tableBody = document.getElementById("diary-table").querySelector("tbody");

  // تفريغ الجدول قبل إضافة بيانات جديدة (لمنع التكرار)
  tableBody.innerHTML = "";

  // إذا كانت اليوميات فارغة، عرض رسالة للمستخدم داخل الجدول
  if (saved.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='3'>لا توجد كلمات محفوظة بعد.</td></tr>";
    return; // الخروج من الدالة
  }

  // إذا وُجدت كلمات محفوظة، عرضها واحدة تلو الأخرى
  saved.forEach((word, index) => {
    // إنشاء صف لعرض الكلمة والترجمة وأزرار الشرح والحذف
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${word.en}</td>  
      <td>${word.ar}</td> 
      <td>
        <button class="explain-btn" onclick="toggleExplanation(${index})">🔍</button> 
        <button class="delete-btn" onclick="deleteWord(${index})" title="حذف">❌</button>  
      </td>
    `;

    // إنشاء صف إضافي مخفي لعرض الشرح والمثال
    const explanationRow = document.createElement("tr");
    explanationRow.className = "explanation-row";      // تحديد كلاس لتمييز الصف
    explanationRow.style.display = "none";             // إخفاؤه في البداية
    explanationRow.id = `exp-${index}`;                // تعيين id لربطه بالزر

    explanationRow.innerHTML = `
      <td colspan="3">
        <strong>الشرح:</strong> ${word.def || "لا يوجد شرح مسجل"}<br>  
        <strong>مثال:</strong> ${word.ex || "لا يوجد مثال"}            
      </td>
    `;

    // إضافة الصفين (الرئيسي + الشرح) إلى الجدول
    tableBody.appendChild(row);
    tableBody.appendChild(explanationRow);
  });
};

// 🔁 دالة لتبديل ظهور صف الشرح عند الضغط على زر 🔍
function toggleExplanation(index) {
  const row = document.getElementById(`exp-${index}`); // الحصول على الصف باستخدام id
  if (row.style.display === "none") {
    row.style.display = "table-row";  // إظهاره
  } else {
    row.style.display = "none";       // إخفاؤه
  }
}

// ❌ دالة لحذف كلمة من اليوميات حسب الفهرس
function deleteWord(index) {
  const diary = JSON.parse(localStorage.getItem("diary") || "[]"); // استرجاع اليوميات
  diary.splice(index, 1);  // حذف العنصر من المصفوفة باستخدام index
  localStorage.setItem("diary", JSON.stringify(diary)); // تحديث التخزين المحلي
  location.reload();  // إعادة تحميل الصفحة لتحديث عرض الجدول
}
