/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

import Page from './page';

class BlogPage extends Page {
    get emailTextFields() {
        return browser.$$('input[type="email"]');
    }

    get submitNewsLetter() {
        return browser.element('.hs_submit input[type="submit"]');
    }

    get successMessage() {
        return browser.element('.hbspt-form');
    }

    get searchField() {
        return browser.element("input[name='search-keyword-widget']");
    }

    getBrowserUrl() {
        return browser.getUrl();
    }
}

export default new BlogPage();
