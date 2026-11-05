(function () {
  "use strict";

  function customizeDoubleTick() {
    const button = document.getElementById("dt-chatButton");

    if (!button) {
      setTimeout(customizeDoubleTick, 300);
      return;
    }

    if (button.dataset.apolloCustomized === "true") {
      return;
    }

    const whatsappLogo = button.querySelector(":scope > svg");
    const chatText = button.querySelector(":scope > span");

    if (!whatsappLogo) {
      setTimeout(customizeDoubleTick, 300);
      return;
    }

    if (chatText) {
      chatText.style.display = "none";
    }

    /* Medanta logo */
    const companyLogo = document.createElement("img");
    companyLogo.src = "assets/hosplan-logo-v2.svg";
    companyLogo.alt = "Oncology Cancer Care Support";
    companyLogo.className = "oncology-widget-logo";

    /* First row: Apollo logo only */
    const logoRow = document.createElement("div");
    logoRow.className = "oncology-logo-row";
    logoRow.appendChild(companyLogo);

    /* Second section */
    const infoRow = document.createElement("div");
    infoRow.className = "oncology-info-row";

    /* Original DoubleTick WhatsApp logo */
    infoRow.appendChild(whatsappLogo);

    /* Text column */
    const textColumn = document.createElement("div");
    textColumn.className = "oncology-text-column";

    const support = document.createElement("div");
    support.className = "oncology-widget-support";
    support.textContent = "Instant Support";

    const title = document.createElement("div");
    title.className = "oncology-widget-title";
    title.textContent = "Connect on WhatsApp";

    const company = document.createElement("div");

    company.className = "oncology-widget-company";
    company.textContent = "Cancer Patients Assistance";

    textColumn.appendChild(support);
    textColumn.appendChild(title);
    textColumn.appendChild(company);

    infoRow.appendChild(textColumn);

    /* Main content */
    const content = document.createElement("div");
    content.className = "oncology-widget-content";

    content.appendChild(logoRow);
    content.appendChild(infoRow);

    button.appendChild(content);

    button.dataset.apolloCustomized = "true";
  }

  customizeDoubleTick();
})();
