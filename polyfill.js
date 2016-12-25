//this file will polyfill the Promis & fetch function
//as the very first entry file

import { Promise } from 'es6-promise';
window.Promise = Promise;
import 'whatwg-fetch';