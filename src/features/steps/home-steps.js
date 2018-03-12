/* eslint-disable no-unused-expressions */
/* eslint-line-disable new-cap */

import { defineSupportCode } from 'cucumber';
import HomePage from '../pages/home-page';

defineSupportCode(({ Given }) => {
    Given(/^I visit the YLD hom page$/, () => {
        HomePage.open('/');
        browser.pause();
        browser.debug();
    });
});
