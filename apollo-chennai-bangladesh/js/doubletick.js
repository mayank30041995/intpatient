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

    /* Apollo logo */
    const apolloLogo = document.createElement("img");
    apolloLogo.src = "./assets/logo.png";
    apolloLogo.alt = "Indraprastha Apollo";
    apolloLogo.className = "apollo-widget-logo";

    /* First row: Apollo logo only */
    const logoRow = document.createElement("div");
    logoRow.className = "apollo-logo-row";
    logoRow.appendChild(apolloLogo);

    /* Second section */
    const infoRow = document.createElement("div");
    infoRow.className = "apollo-info-row";

    /* Original DoubleTick WhatsApp logo */
    infoRow.appendChild(whatsappLogo);

    /* Text column */
    const textColumn = document.createElement("div");
    textColumn.className = "apollo-text-column";

    const support = document.createElement("div");
    support.className = "apollo-widget-support";
    support.textContent = "Instant Support";

    const title = document.createElement("div");
    title.className = "apollo-widget-title";
    title.textContent = "Connect on WhatsApp";

    const company = document.createElement("div");

    company.className = "apollo-widget-company";
    company.textContent = "Apollo Chennai Patients Assistance";

    textColumn.appendChild(support);
    textColumn.appendChild(title);
    textColumn.appendChild(company);

    infoRow.appendChild(textColumn);

    /* Main content */
    const content = document.createElement("div");
    content.className = "apollo-widget-content";

    content.appendChild(logoRow);
    content.appendChild(infoRow);

    button.appendChild(content);

    button.dataset.apolloCustomized = "true";
  }

  customizeDoubleTick();
})();
