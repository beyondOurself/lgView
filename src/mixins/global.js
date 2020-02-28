import { isString, isNumber } from '../utils/util';
export default {
    methods: {
        p2r(v) {
            if(isString(v) || isNumber(v)){
               v = `${(+v)/100}rem`
            }
            return v
        }
    }
}