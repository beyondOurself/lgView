import './utils/px2rem.js' ;
import './styles/index.less';
import Vue from 'vue'
import globaltMixiner from './mixins/global.js'
import Component from './components/my-component';
import Card from './components/card';
import Icon from './components/icon';
import Button from './components/button';
import Table from './components/table';
import TagArea from './components/tag-area';
import {Layout,Row,Col} from './components/layout';
import {InputGroup,InputRow,Radio,RadioGroup,Checkbox,CheckboxGroup} from './components/form';
import {List,ListItem,ListTemplate} from './components/list';
const comCssPrefix = 'Lg';
//全局混淆
Vue.mixin(globaltMixiner);
const components = {
  Component,
  Card,
  Icon,
  TagArea,
  Button,
  Table,
  Layout,
  Row,
  Col,
  InputGroup,
  InputRow,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  ListTemplate
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