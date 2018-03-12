/* eslint-disable no-unused-expressions */
/* eslint-line-disable new-cap */

import { defineSupportCode } from 'cucumber';
import HomePage from '../pages/home-page';

defineSupportCode(({ Given, Then }) => {
    Given(/^I visit the YLD hom page$/, () => {
        HomePage.open('/');
        browser.pause();
    });

    Then(/^I should see the "(.*?)" section$/, (title) => {
        expect(HomePage.whatWeDoSection.isVisible()).to.be.true;
        const whatWeDoSectionHeader = HomePage.whatWeDoSectionTitle.getText();
        expect(whatWeDoSectionHeader).to.eq(title);
    });

    Then(/^I should see the "(.*?)" titled section$/, (title) => {
        expect(HomePage.customerSection.isVisible()).to.be.true;
        const customersectionHeader = HomePage.customerSectionTitle.getText();
        expect(customersectionHeader).to.eq(title);
    });

    Then('Link {num} should dispay the {string} page', (link, pageUrl) => {
        HomePage.menuLinks[link].click();
        expect(browser.getUrl().endsWith(pageUrl)).to.eq(true);
        expect(HomePage.menuLinks.length).to.eq(8);
    });
});
