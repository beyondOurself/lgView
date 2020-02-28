
 function isArray(arr) {
    return arr instanceof Array;
}
function isObjec(obj) {
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
    return typeof boo === 'Boolean'
}
function isFunction(fun) {
    return typeof fun === 'Function'
}

/** 判断是否包含在数组内 */
 function isInArr(v, arr) {
    return isArray(arr) && arr.indexOf(v) !== -1;
}

/** 指定名称找到子组件 */
 function getChildrensByComponetName(context = {}, componentName = '') {
    if (isObjec(context) && isString(componentName)) {
        const childrens = context.$children,
            resArr = []
            ;
            childrens.forEach(e => {
                e.$options.name === componentName && resArr.push(e);
            });
            return resArr;
    }

}

export {
    isArray,isObjec,isString,isNumber,isUndefined,isBoolean,isFunction,isInArr,getChildrensByComponetName
}