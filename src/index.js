import './utils/px2rem.js' ;
import './styles/index.less';
import Component from './components/my-component';
import Card from './components/card';
import Icon from './components/icon';
import Button from './components/button';
import Table from './components/table';
import TagArea from './components/tag-area';
import Layout from './components/layout';
const comCssPrefix = 'Lg';
const components = {
  Component,
  Card,
  Icon,
  TagArea,
  Button,
  Table,
  Layout
}
const lgView = {
   ...components
};
const install = function (Vue, opts ={}) {
  if (install.installed) return
  Object.keys(lgView).forEach(key => {
    Vue.component(`${comCssPrefix}${key}`, lgView[key]);
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