/* eslint-disable no-unused-expressions */
/* eslint-line-disable new-cap */

import { defineSupportCode } from 'cucumber';
import BlogPage from '../pages/blog-page';

defineSupportCode(({ Given, When, Then }) => {
    Given('I navigate to the blog page', () => {
        BlogPage.open('https://blog.yld.io/');
    });

    When('I subscribe to the newsletter', () => {
        const inputLocation = Object.values(BlogPage.emailTextFields[0].getLocation());
        const [x, y] = inputLocation;
        try {
            browser.scroll(x, y);
        } catch (error) {
            console.error(error);
        }
        BlogPage.emailTextFields[0].click();
        BlogPage.emailTextFields[0].keys('dame@yahoo.com');
        BlogPage.submitNewsLetter.click();
    });

    Then('the success message should be displayed', () => {
        expect(BlogPage.successMessage.isVisible()).to.be.true;
        browser.pause();
        expect(BlogPage.successMessage.getText()).to.include('Thank you for subscribing to our blog');
    });
});
