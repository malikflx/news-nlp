// JavaScript
import { checkUrl } from './js/urlChecker';
import { handleSubmit } from './js/formHandler';
import { checkForName } from './js/nameChecker';

// Sass
import './styles/results.scss'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// console.log(checkUrl);
console.log(checkForName);

export {
  handleSubmit,
  // checkForName,
  checkUrl
}