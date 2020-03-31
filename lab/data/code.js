
const template = {
    code: {
        base:
            ` 
            `,
    }
    ,
    table: {
        attribute: [
            {
            property: "--",
            explain: "--",
            type: "--",
            default: "--"
           },
        ]
    }

}
const install = {
    code: {
        cdn:
            ` 
        <link href="lgView.min.css" rel="stylesheet"></head>

        <script type="text/javascript" src="lgView.min.js"></script>
            `,
        cdnExample:
            ` 
         <!DOCTYPE html>
         <html>
         <head>
             <meta charset="utf-8">
             <title>lgView example</title>
             <link rel="stylesheet" type="text/css" href="https://unpkg.com/browse/lg-view/dist/lgView.min.css">
             <script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
             <script type="text/javascript" src="https://unpkg.com/browse/lg-view/dist/lgView.min.js"></script>
         </head>
         <body>
         <div id="app">
             <lg-button @click="show">点击</lg-button>
         </div>
         <script>
             new Vue({
                 el: '#app'
             })
           </script>
         </body>
         </html>
            `,
        npm:
            ` 
         $npm install lg-view --save
            `,
        
    }
    ,
    table: {
        attribute: [
            {
            property: "--",
            explain: "--",
            type: "--",
            default: "--"
           },
        ]
    }

}
const show = {
    code: {
         
    base:
    ` 
    ;
    (function(designWidth, rem2px, window, document) {
        var d = document.createElement('div');
        var m = document.createElement('meta');
        var scaleValue = 1 / window.devicePixelRatio;
        d.style.width = '1rem';
        d.style.display = "none";
        m.setAttribute("name", "viewport");
        m.setAttribute("content", "width=device-width,initial-scale=" + scaleValue + ",minimum-scale=" + scaleValue +
            ",maximum-scale=" + scaleValue + ",user-scalable=no");
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(d);
        // head.insertBefore(m, head.firstElementChild);
        var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
        // d.remove();
        document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
        var st = document.createElement('style');
        var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth /
            (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
        var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight /
            (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"
        st.innerHTML = portrait + landscape;
        head.appendChild(st);
        return defaultFontSize
            })(375, 100, window, document);

     `
        
    }
    ,
    table: {
        attribute: [
            {
            property: "--",
            explain: "--",
            type: "--",
            default: "--"
           },
        ]
    }

}


const button = {
    code: {
        base:
` 
    <lg-button value="defalut" type="default" @click="handleClick"> </lg-button>
    <lg-button value="primary" type="primary" ></lg-button>
    <lg-button value="success" type="success" ></lg-button>
    <lg-button value="warning" type="warning"></lg-button>
    <lg-button value="warning" type="danger"></lg-button>
    <lg-button value="warning" type="text"></lg-button>
    <lg-button value="warning" type="defaultG"></lg-button>
    <lg-button value="warning" type="successG"></lg-button>
    <lg-button value="warning" type="warningG"></lg-button>
    <lg-button value="warning" type="dangerG"></lg-button>

`,
        display:
` 
    <lg-button  display="block" value="display:block" > </lg-button> 
    <lg-button  display="inline" value="display:inline" ></lg-button>
    
`,
        size:
` 
    <lg-button  size="small" value="size:small" ></lg-button> 
    <lg-button  size="large" value="size:large" ></lg-button>
    
`,
        color:
` 
    <lg-button  color="green"></lg-button> 
    <lg-button  color="pink" ></lg-button>

`,
    }
    ,
    table: {
        attribute: [
            {
            property: "value",
            explain: "按钮显示的文本.",
            type: "String",
            default: "默认"
           },
            {
            property: "display",
            explain: "按钮呈现的状态,其可选值[inline:内联模式 | block:块状模式].",
            type: "String",
            default: "inline"
           },
            {
            property: "styler",
            explain: "组件的style对象.用来调整组件的样式.",
            type: "Object",
            default: "--"
           },
            {
            property: "type",
            explain: "按钮的类型,后缀带'G'是镂空类型.可选值[default | primary | default | success | warning | danger | text | defaultG | primaryG | successG | warningG | dangerG ].",
            type: "String",
            default: "defalut"
           },
            {
            property: "size",
            explain: "按钮大小.可选值[ small | normal | large ]",
            type: "String",
            default: "normal"
           },
            {
            property: "color",
            explain: "自定义按钮的颜色.",
            type: "String",
            default: "--"
           }
           
        ],
        event: [
            {
            property: "@click",
            explain: "按钮点击时触发",
            type: "--",
            default: "--"
           }
        ]
    }

}

export { button ,install ,show}