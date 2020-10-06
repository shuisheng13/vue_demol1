

const {add,mul}= require('./js/mathUtis.js');
console.log(add(1,2));
console.log(mul(11,11));
require('./css/normal.css')
require('./css/spe.less')

import Vue from  'vue'
import App from './vue/App'

// require('./js/vue.js')

// import {name,age,height} from "./info.js";
// console.log(name);
//  console.log(age);
//  console.log(height);

 document.writeln('<div>hello word</div>')
 document.writeln('<div>测试时时刷新5</div>')


new Vue({
 el:'#app',
 template:'<App/>',
 components:{
  App
 }
})