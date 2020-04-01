
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
                property: "value",
                explain: "--",
                type: "--",
                default: "--"
            }

        ]
    }

}
const checkbox = {
    code: {
        base:
    ` 
    <lg-checkbox label="狗蛋蛋" v-model="goudan">狗蛋</lg-checkbox>

    `,
        group:
    ` 
    <lg-checkbox-group v-model="checkedNames">
        <lg-checkbox label="狗蛋蛋">狗蛋</lg-checkbox>
        <lg-checkbox label="狗剩剩">狗剩</lg-checkbox>
        <lg-checkbox label="狗娃娃">狗娃</lg-checkbox>
    </lg-checkbox-group>

    `,
        disabled:
    ` 
    <lg-checkbox label="狗剩" disabled>狗剩剩</lg-checkbox>

    `,
        size:
    ` 
    <lg-checkbox label="狗蛋蛋" size="small" >狗蛋</lg-checkbox>
    <lg-checkbox label="狗剩剩">狗剩</lg-checkbox>
    <lg-checkbox label="狗娃娃" size="large">狗娃</lg-checkbox>
    `,
    }
    ,
    table: {
        attribute: [
            {
                property: "value",
                explain: "绑定的值",
                type: "--",
                default: "--"
            }

        ]
    }

}
const radio = {
    code: {
        base:
    ` 
    <lg-radio v-model="gouwa" label="狗娃娃">狗娃</lg-radio>
    `,
        group:
    ` 
    <lg-radio-group  v-model="radioGroupV"> 
        <lg-radio label="狗娃娃" size="large">狗娃</lg-radio>
        <lg-radio label="狗蛋蛋" size="large">狗蛋</lg-radio>
        <lg-radio label="狗剩剩" size="large">狗剩</lg-radio>
    </lg-radio-group>
    `,
    disabled:
    ` 
    <lg-radio label="狗蛋蛋" disabled>狗蛋</lg-radio>
    `,
    size:
    ` 
    <lg-radio label="狗娃娃" size="small">狗娃</lg-radio>

    <lg-radio label="狗蛋蛋" >狗蛋</lg-radio>

    <lg-radio label="狗蛋蛋" size="large" >狗剩</lg-radio>
    `,
    }
    ,
    table: {
        attribute: [
            {
                property: "value(radio,radioGroup )",
                explain: "单独使用触发的结果(true | false),组合使用触发的是选中radio的label值",
                type: "Boolean",
                default: "false"
            },
            {
                property: "label(radio)",
                explain: "绑定的值,显示内容为空将显示label",
                type: "String",
                default: "--"
            },
            {
                property: "disabled(radio)",
                explain: "radiod的原生属性,是否有效",
                type: "Boolean",
                default: "false"
            },
            {
                property: "size(radio,radioGroup)",
                explain: "组件的尺寸,包含值:small,normal,large",
                type: "String",
                default: "normal"
            },

        ]
    }

}
const card = {
    code: {
        base:
    ` 
    <lg-card gap="10" spacing="20">测试组</lg-card>
    `,
    }
    ,
    table: {
        attribute: [
            {
                property: "gap",
                explain: "主体内边距",
                type: "String,Number",
                default: "0"
            },
            {
                property: "spacing",
                explain: "主体外边距",
                type: "String,Number",
                default: "0"
            },

        ]
    }

}
const list = {
    code: {
        base:
    ` 
    <lg-list>
        <lg-list-item >
        
        </lg-list-item >
    </lg-list>
    `,
    template:
    ` 
    <lg-list border>
      <lg-list-item @click="myAlert">
        <lg-list-template
          icon="logo-octocat"
          title="s161278(上盖减磨版左上盖减磨版左上盖减磨版左)"
          content="工作表面没有达标,三角形位置没按图加工"
          footerLeft="开单者:"
          footerRight="开单时间:"
        ></lg-list-template>
      </lg-list-item   >
      <lg-list-item >
          <lg-list-template :iconStyler="{backgroundColor:'lightgray'}" >
            <lg-icon slot="icon" type="md-albums" size="40" color="lightgay"></lg-icon>
             <template slot="title">
                <h4>这是标题呀呀</h4>
             </template>
             <template slot="content">
                <span>这是内容呀</span>
             </template>
             <template slot="footer">
                <span>footer左边</span>
                <span>footer右边</span>
             </template>
          </lg-list-template>
      </lg-list-item>
      <lg-list-item >
          空白的呀~
      </lg-list-item>
    </lg-list>
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
            }

        ]
    }

}
const layout = {
    code: {
        base:
            ` 
    <lg-row>
        <lg-col span="3">
        <div >1-1</div>
        </lg-col>
        <lg-col span="6">
        <div >1-2</div>
        </lg-col>
        <lg-col flex="1">
        <div >1-3</div>
        </lg-col>
        <lg-col flex="2">
        <div >1-4</div>
        </lg-col>
    </lg-row>
    
    `,
        order:
            ` 
    <lg-row >
        <lg-col  :order="4">
            <div >1-1</div>
        </lg-col>
        <lg-col  :order="3">
            <div >1-2</div>
        </lg-col>
        <lg-col  :order="2">
            <div >1-3</div>
        </lg-col>
        <lg-col  :order="1">
            <div >1-4</div>
        </lg-col>
    </lg-row>
    
    `,
        row:
            ` 
    <lg-row justify="space-around" items="start" wrap="wrap">
        <div >2-1</div>
        <div >2-2</div>
        <div >2-3</div>
        <div >2-4</div>
        <div >2-5</div>
    </lg-row>
    
    `,
    }
    ,
    table: {
        row: [
            {
                property: "gutter",
                explain: "项的间隔",
                type: "Number",
                default: "0"
            },
            {
                property: "justify",
                explain: "水平轴对齐方式.包含值:start,end,center,space-around,space-between",
                type: "String",
                default: "center"
            },
            {
                property: "direction",
                explain: "轴的方向.包含值:row,row-reverse,column,column-reverse",
                type: "String",
                default: "row"
            },
            {
                property: "wrap",
                explain: "换行的方式.包含值:nowrap,wrap,wrap-reverse",
                type: "String",
                default: "nowrap"
            },
            {
                property: "items",
                explain: "垂直轴的对齐方式.包含值:start,end,center,baseline",
                type: "Number",
                default: "0"
            },
            {
                property: "center",
                explain: "组内容水平,垂直都居中.",
                type: "Boolean",
                default: "false"
            },

        ],
        col: [
            {
                property: "span",
                explain: "项占据空间",
                type: "String,Number",
                default: "0"
            },
            {
                property: "flex",
                explain: "flex布局原属性.项的一个空间缩放值.",
                type: "Number",
                default: "1"
            },
            {
                property: "order",
                explain: "项的排序.值越小越前",
                type: "Number",
                default: "0"
            },
            {
                property: "center",
                explain: "项内部空间,水平,垂直都居中",
                type: "Boolean",
                default: "false"
            }

        ]
    }

}
const icon = {
    code: {
        base:
            ` 
    <lg-icon type="md-albums" color="red"></lg-icon>
    <lg-icon type="md-albums" size="28" color="green"></lg-icon>
    <lg-icon type="md-albums" size="38" color="blue"></lg-icon>
    `,
    }
    ,
    table: {
        attribute: [
            {
                property: "type",
                explain: "图标名称,参考说明列项下的图标.",
                type: "String",
                default: "--"
            },
            {
                property: "size",
                explain: "图标的大小.",
                type: "Number,String",
                default: "18pr"
            },
            {
                property: "color",
                explain: "自定义图标颜色",
                type: "String",
                default: "--"
            },
            {
                property: "custom",
                explain: "其他图标的类名.",
                type: "String",
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

export { button, install, show, icon, layout ,list ,card,radio,checkbox}