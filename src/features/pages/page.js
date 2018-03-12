/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

export default class Page {
    constructor() {
        this.title = 'My Page';
    }

    open(path) {
        browser.url(path);
    }
}
