/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

import Page from './page';

class BlogPage extends Page {
    // get emailTextField() {
    //     return browser.element('.hs_email .input');
    // }

    get emailTextField() {
        return browser.element('input[type="email"]');
    }

    get submitNewsLetter() {
        return browser.element('.hs_submit input[type="submit"]');
    }

    get successMessage() {
        return browser.element('');
    }

    getBrowserUrl() {
        return browser.getUrl('.newsletter');
    }
}

export default new BlogPage();
