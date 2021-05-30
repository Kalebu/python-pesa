(self.webpackChunkpypesa=self.webpackChunkpypesa||[]).push([[391],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(u,".").concat(f)]||y[f]||l[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1035:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},u={unversionedId:"transaction_status",id:"transaction_status",isDocsHomePage:!1,title:"Transaction status",description:"The Query Transaction Status API call is used to query the status of the transaction that has been initiated.",source:"@site/docs/transaction_status.md",sourceDirName:".",slug:"/transaction_status",permalink:"/pypesa/docs/transaction_status",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/transaction_status.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Payment Reversal",permalink:"/pypesa/docs/payment_reversal"},next:{title:"Direct debit creation and Payment",permalink:"/pypesa/docs/direct_debit"}},c=[{value:"Example",id:"example",children:[]}],p={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Query Transaction Status API call is used to query the status of the transaction that has been initiated."),(0,o.kt)("p",null,"Use ",(0,o.kt)("em",{parentName:"p"},"query_transaction_status()")," to do this just as illustrated in the example below; "),(0,o.kt)("p",null,"Here also you can use your previous transaction ID as an input_QueryReference as to specify which transaction you wanna see it's status"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},">> import pypesa\n>> mpesa = pypesa()\n>> transaction_query = {\n      'input_QueryReference': '000000000000000000001',\n      'input_ServiceProviderCode': '000000',\n      'input_ThirdPartyConversationID': 'asv02e5958774f7ba228d83d0d689761',\n      'input_Country': 'TZN',\n    }\n>> mpesa.query_transaction_status(transaction_query)\n\n")))}l.isMDXComponent=!0}}]);