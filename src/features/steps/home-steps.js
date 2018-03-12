/* eslint-disable no-unused-expressions */
/* eslint-line-disable new-cap */

import { defineSupportCode } from 'cucumber';
import HomePage from '../pages/home-page';
import BlogPage from '../pages/blog-page';

defineSupportCode(({ Given, When, Then }) => {
    Given(/^I visit the YLD home page$/, () => {
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

    Given('I navigate to the blog page', () => {
        HomePage.menuLinks[7].click();
    });

    When('I subscribe to the newsletter', () => {
        BlogPage.emailTextField.click();
        BlogPage.emailTextField.setValue('jimode@yahoo.com');
        BlogPage.submitNewsLetter();
        browser.debug();
    });

    Then('the success message should be displayed', () => {
        expect(BlogPage.successMessage.isVisible()).to.be.true;
        expect(BlogPage.successMessage.getText()).to.include('Thank you for subscribing to our blog');
    });
});
