export default class Base_PO {
  open(path) {
    browser.setWindowSize(1800, 1200);
    browser.url(path);
  }
}
