document.addEventListener("DOMContentLoaded", function () {
  const btnZh = document.getElementById("btn-zh");
  const btnEn = document.getElementById("btn-en");

  function switchLanguage(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    const elements = document.querySelectorAll("[data-zh][data-en]");
    elements.forEach((el) => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    btnZh.classList.toggle("active", lang === "zh");
    btnEn.classList.toggle("active", lang === "en");
    localStorage.setItem("homepage-lang", lang);
  }

  btnZh.addEventListener("click", () => switchLanguage("zh"));
  btnEn.addEventListener("click", () => switchLanguage("en"));

  const savedLang = localStorage.getItem("homepage-lang") || "zh";
  switchLanguage(savedLang);
});
