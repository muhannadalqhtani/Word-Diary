window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("diary") || "[]");
  const tableBody = document.getElementById("diary-table").querySelector("tbody");
  tableBody.innerHTML = "";

  if (saved.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='3'>لا توجد كلمات محفوظة بعد.</td></tr>";
    return;
  }

  saved.forEach((word, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${word.en}</td>
      <td>${word.ar}</td>
      <td>
        <button class="explain-btn" onclick="toggleExplanation(${index})">🔍</button>
        <button class="delete-btn" onclick="deleteWord(${index})" title="حذف">❌</button>
      </td>
    `;

    const explanationRow = document.createElement("tr");
    explanationRow.className = "explanation-row";
    explanationRow.style.display = "none";
    explanationRow.id = `exp-${index}`;

    explanationRow.innerHTML = `
      <td colspan="3">
        <strong>الشرح:</strong> ${word.def || "لا يوجد شرح مسجل"}<br>
        <strong>مثال:</strong> ${word.ex || "لا يوجد مثال"}
      </td>
    `;

    tableBody.appendChild(row);
    tableBody.appendChild(explanationRow);
  });
};

function toggleExplanation(index) {
  const row = document.getElementById(`exp-${index}`);
  if (row.style.display === "none") {
    row.style.display = "table-row";
  } else {
    row.style.display = "none";
  }
}

function deleteWord(index) {
  const diary = JSON.parse(localStorage.getItem("diary") || "[]");
  diary.splice(index, 1);
  localStorage.setItem("diary", JSON.stringify(diary));
  location.reload(); // إعادة تحميل الصفحة لتحديث الجدول
}
