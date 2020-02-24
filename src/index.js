import './utils/px2rem.js' ;
import './styles/index.less';
import component from './components/my-component';
import card from './components/card';
const comCssPrefix = 'lg';
const components = {
  component,
  card
}
const lgView = {
   ...components
};
const install = function (Vue, opts ={}) {
  if (install.installed) return
  Object.keys(lgView).forEach(key => {
    console.log(`${comCssPrefix}-${key}`)
    Vue.component(`${comCssPrefix}-${key}`, lgView[key]);
  })
}
//用于script标签引入 
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const API = {
  install,
  ...components
}

 export default API; 