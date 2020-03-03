
function isArray(arr) {
   return arr instanceof Array;
}
function isObject(obj) {
   return typeof obj === 'object'
}
function isString(str) {
   return typeof str === 'string'
}
function isNumber(num) {
   return typeof num === 'number'
}
function isUndefined(und) {
   return typeof und === 'undefined'
}
function isBoolean(boo) {
   return typeof boo === 'boolean'
}
function isFunction(fun) {
   return typeof fun === 'function'
}

/** 判断是否包含在数组内 */
function isInArr(v, arr) {
   return isArray(arr) && arr.indexOf(v) !== -1;
}

/** 指定名称找到子组件 */
function getChildrensByComponetName(context = {}, componentName = '') {
   if (isObject(context) && isString(componentName)) {
      const childrens = context.$children,
         resArr = []
         ;
      childrens.forEach(e => {
         e.$options.name === componentName && resArr.push(e);
      });
      return resArr;
   }
   return null;

}

/** 找到父组件 */
function getParentByComponentNames(context = {}, componentName = "", componentNames = []) {
   if (isObject(context)) {

      if (isString(componentName)) {
         componentNames = [componentName]
      } else {
         componentNames = componentName
      }

      let parent = context.$parent;
      let name = parent.$options.name;
      while (parent && (!name || componentNames.indexOf(name) < 0)) {
         parent = parent.$parent;
         if (parent) name = parent.$options.name;
      }
      return parent;

   }
   return null;
}

/** 设置组件的属性  */
function setComponentPropertis(component, propertis) {
   let components = [];

   if (!isArray(component)) {
      components = [component];
   } else {
      components = component;
   }
   if (isObject(propertis) && components.length > 0) {
        for (let obj of components) {
            for (let [key,value] of Object.entries(propertis)) {
                obj[key]=value
            }
        }
   }
   return null;
}

let tempArr = [{ name: 'obj1' }, { name: 'obj2' }];
let temPro = { age: 18 }
setComponentPropertis(tempArr, temPro)

// for (const iterator of tempArr) {
//    console.log(`>>>>>${iterator.age = "100"}`)
// }


/** 判断是否为0 */
function isZero(v){
   return (isNumber(v) || isString(v)) && +v === 0
}
console.log('iszero',isZero(0));

function conversionRatio(v,cardinalV){
   return  `${(+v)/cardinalV * 100}%` ;
}

console.log(conversionRatio(6,24))


function funTest ( fun ){
   let v = 100; 
   if(isFunction(fun)){
      fun(v);
   }
   return null;
}

funTest( (v) => { console.log("外面的函数执行了~"+v)} )