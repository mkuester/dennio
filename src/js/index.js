import '../assets/css/style.scss';

import './language.js';
import '../assets//font/darkenstone.scss';
import $ from 'jquery';
require.context('../assets/img/', true, /^\.\/.*\.png/);

setLanguageDe();

export function setLanguageDe() {
    $('.cover-button').text("kaufen");
}

export function setLanguageEn() {
    $('.cover-button').text("buy");
}

export function setLanguageEs() {
    $('.cover-button').text("comprar");
}