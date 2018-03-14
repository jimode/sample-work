/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */

import Page from './page';

class HomePage extends Page {
    get whatWeDoSection() {
        return browser.element('.head');
    }

    get whatWeDoSectionTitle() {
        return browser.element('.head .title');
    }

    getWhatWeDoTitle() {
        return this.whatWeDoSectionTitle.getText();
    }

    get customerSection() {
        return browser.element('.yld-section-logos');
    }

    get customerSectionTitle() {
        return browser.element('.yld-section-logos .title');
    }

    get menuLinks() {
        return browser.$$('.mdl-navigation__link');
    }

    get emailTextField() {
        return browser.element('input[type="email"]');
    }

    get submit() {
        return browser.element('input[type="submit"]');
    }
}

export default new HomePage();
