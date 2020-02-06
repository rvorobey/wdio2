const selectors = {
  common: {
    title: '//span[@id="site-name"]',
    h1: '//h1',
    h2: '//h2',
    h3: '//h3',
    h4: '//h4',
    p: '//p',
    li: '//li',
    subBtn: '//button[@type="submit"]',
    toggle: '//a[@class="dropdown-toggle nav-link"]',
    logoutBtn: '//button[contains(text(),"Logout")]',
    emailInput: '//input[@name="email"]',
    passInput: '//input[@name="password"]',
  },
  register: {
    firstNameInput: '//input[@name="firstName"]',
    lastNameInput: '//input[@name="lastName"]',
    phoneInput: '//input[@name="phone"]',
    aboutInput: '//textarea[@name="about"]',
    goalsInput: '//textarea[@name="goals"]',
    engLevelInput: '//select[@name="englishLevel"]',
  },
  report: {
    morale: '//select[@name="morale"]',
    hours: '//input[@name="hours"]',
    day: '//textarea[@name="description"]',
    help: '//input[@id="input-0"]',
    understood: '//input[@id="input-1"]',
    createButton: '//a[@qa="create-day-report-button"]',
  },
  flashGroup: {
    cardsLink: '//div[@id="site-menu"]//a[@qa="groups-link"]',
    newFlash: '//button[@qa="flash-create-new-group"]',
    modalOpen: '//div[contains(@class, "sidepanel")]',
    modalTitle: '//div[contains(@class, "sidepanel")]//*[@class="modal-title"]',
    groupName: '//div[contains(@class, "sidepanel")]//input[@name="name"]',
    groupDesc: '//div[contains(@class, "sidepanel")]//input[@name="description"]',
    submitForm: '//div[contains(@class, "sidepanel")]//button[@type="submit"]',
    checkTitle: '//div[@qa="flash-group-list "]//h4/a',
    checkDesc: '//div[@qa="flash-group-list "]//div[@qa="description"]',
    titleClickable: '//div[@qa="flash-group-list "]//h4/a',
  },
  group: {
    groupsLink: '//div[@id="site-menu"]//a[@qa="groups-link"]',
    createButton: '//a[@qa="create-group-button"]',
    name: '//input[@name="name"]',
    desc: '//input[@name="description"]',
    access: '//select[@name="accessType"]',
    checkTitle: '//div[@qa="group-list"]//h4/a',
  }
};

module.exports = { selectors };
