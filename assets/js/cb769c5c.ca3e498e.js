(self.webpackChunkpypesa=self.webpackChunkpypesa||[]).push([[235],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=u(n),h=a,m=y["".concat(s,".").concat(h)]||y[h]||l[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1160:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},s={unversionedId:"auth",id:"auth",isDocsHomePage:!1,title:"Authentication",description:"Pypesa offers two distinct ways to authenticate your app",source:"@site/docs/auth.md",sourceDirName:".",slug:"/auth",permalink:"/python-pesa/docs/auth",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/auth.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/python-pesa/docs/intro"},next:{title:"Customer to bussiness (C2B)",permalink:"/python-pesa/docs/c2b"}},u=[{value:"Authentication using json",id:"authentication-using-json",children:[]},{value:"Explicit auth within source code",id:"explicit-auth-within-source-code",children:[]}],c={toc:u};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pypesa offers two distinct ways to authenticate your app"),(0,o.kt)("p",null,"It all comes to you on which one you might find friendly and cool, personally I prefer putting them on separate file ",(0,o.kt)("a",{parentName:"p",href:"#authentication-using-json"},"using Json"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#authentication-using-json"},"Using json")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#explicit-auth-within-source-code"},"Including in your src code"))),(0,o.kt)("h2",{id:"authentication-using-json"},"Authentication using json"),(0,o.kt)("p",null,"To authenticate your app using json, you need to have a json file named ",(0,o.kt)("strong",{parentName:"p"},"keys.json")," on your project directory and then add your public and api keys in json format shown below;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"  {\n   'api_key': 'xxx', \n   'public_key': 'xxxxxxxxxxxxxx' \n  }\n")),(0,o.kt)("p",null,"When you're done you can then get started with building your payment gateway with python, assumming your auth keys are valid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pypesa\nmpesa = pypesa()\n")),(0,o.kt)("p",null,"If you named your authentication json in other name than ",(0,o.kt)("strong",{parentName:"p"},"keys.json"),",  you need to specify it while creating an instance for pypesa as shown below;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import pypesa\nmpesa = pypesa(auth_path = filename)\n")),(0,o.kt)("p",null,"Note:\nplease Make sure you specify the correct path while while creating a pypesa instance\notherwise Pypesa will raise ",(0,o.kt)("strong",{parentName:"p"},"KeyError")," ;"),(0,o.kt)("h2",{id:"explicit-auth-within-source-code"},"Explicit auth within source code"),(0,o.kt)("p",null,"Apart from authenticating your python app using Json, you can also explicit specify the key in your code just as shown below;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pypesa \n\nmpesa = pypesa()\n\nmpesa.api_key = "xxxxxxxxxxxxx"\nmpesa.public_key ="xxxxxxxxxxxxx"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": Please Make sure you're keys are strings, pypesa will raise a TypeError() if you set it to other type than it."))}l.isMDXComponent=!0}}]);