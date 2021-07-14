(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{655:function(t,a,e){"use strict";e.r(a);var s=e(25),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"using-the-btcpay-api-for-custom-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-btcpay-api-for-custom-integration"}},[t._v("#")]),t._v(" Using the BTCPay API for Custom Integration")]),t._v(" "),e("p",[t._v("BTCPay Server provides 2 APIS in order to integrate with it:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/GreenFieldExample/"}},[t._v("GreenField API")]),t._v(" - A RESTful API that aims to allow you to use BTCPay Server headless. This is the recommended API for projects which do not wish to recycle code from a Bitpay integration.")],1),t._v(" "),e("li",[t._v("Bitpay Invoice API - BTCPay implements the same API as Bitpay for creating and managing invoices.")])]),t._v(" "),e("p",[e("strong",[t._v("Migrating from BitPay to BTCPay")]),t._v(" normally is as easy as changing a URL.")]),t._v(" "),e("p",[t._v("While Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),t._v(" "),e("h1",{attrs:{id:"official-client-libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#official-client-libraries"}},[t._v("#")]),t._v(" Official Client Libraries")]),t._v(" "),e("p",[t._v("BTCPay maintains official client libraries for "),e("a",{attrs:{href:"https://github.com/MetacoSA/NBitpayClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("C#"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://github.com/btcpayserver/btcpay-python",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/btcpayserver/node-btcpay",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("In addition, there are forked repositories of Bitpay's "),e("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-php-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/bitpay/ruby-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruby"),e("OutboundLink")],1),t._v(" clients.")]),t._v(" "),e("h1",{attrs:{id:"accessing-the-api-manually"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-api-manually"}},[t._v("#")]),t._v(" Accessing the API Manually")]),t._v(" "),e("p",[t._v("If not using one of the libraries above, the REST API can be accessed manually.")]),t._v(" "),e("p",[t._v("The authentication mechanism is using "),e("code",[t._v("BitId")]),t._v(".")]),t._v(" "),e("p",[t._v("With "),e("code",[t._v("BitId")]),t._v(", the "),e("code",[t._v("client")]),t._v(" of the API (like an e-commerce plugin) generates a private key, then informs the "),e("code",[t._v("server")]),t._v(" (BTCPay) about the "),e("code",[t._v("public key")]),t._v(".")]),t._v(" "),e("p",[t._v("Every requests to the API sent by the client is signed with the client's "),e("code",[t._v("private key")]),t._v(".")]),t._v(" "),e("p",[t._v("We call "),e("code",[t._v("pairing")]),t._v(" the process to inform BTCPay about your "),e("code",[t._v("public key")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"pairing-process"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pairing-process"}},[t._v("#")]),t._v(" Pairing process")]),t._v(" "),e("p",[t._v("Your first need to create a new store:")]),t._v(" "),e("ol",[e("li",[t._v("Log in")]),t._v(" "),e("li",[t._v("Go to Stores menu")]),t._v(" "),e("li",[t._v("Click on "),e("code",[t._v("Create a new store")])]),t._v(" "),e("li",[t._v("Enter a friendly name for the store, validate.")])]),t._v(" "),e("p",[t._v("There is two method of "),e("code",[t._v("pairing")]),t._v(", client side pairing and server side pairing.")]),t._v(" "),e("h3",{attrs:{id:"client-side-pairing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#client-side-pairing"}},[t._v("#")]),t._v(" Client side pairing")]),t._v(" "),e("p",[t._v("With client side pairing, the "),e("code",[t._v("client")]),t._v(" generates a URL from their "),e("code",[t._v("public key")]),t._v(" which a human user can browse to validate the pairing.")]),t._v(" "),e("p",[t._v("Typically the URL looks like "),e("code",[t._v("https://btcpay.example.com/api-access-request?pairingCode=<pairingcode_goes_here>")]),t._v(".")]),t._v(" "),e("p",[t._v("You can find documentation about how to achieve this with "),e("a",{attrs:{href:"https://support.bitpay.com/hc/en-us/articles/115003001183-How-do-I-pair-my-client-and-create-a-token-",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"server-side-pairing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-side-pairing"}},[t._v("#")]),t._v(" Server side pairing")]),t._v(" "),e("p",[t._v("The second way, is to generate your private key via some bitcoin library then:")]),t._v(" "),e("ol",[e("li",[t._v("Go to the store's settings")]),t._v(" "),e("li",[t._v("Click on "),e("code",[t._v("Access tokens")])]),t._v(" "),e("li",[t._v("Click on "),e("code",[t._v("Create new Token")])]),t._v(" "),e("li",[t._v("Select merchant's facade and enter your public key,")]),t._v(" "),e("li",[t._v("Click request pairing")]),t._v(" "),e("li",[t._v("Click on Approve")])]),t._v(" "),e("h2",{attrs:{id:"note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),e("p",[e("strong",[t._v("BTCPay Server has an API compatible with Bitpay")]),t._v("; changing your e-commerce application "),e("strong",[t._v("from Bitpay to BTCPay")]),t._v(" should take minimal effort.")]),t._v(" "),e("p",[t._v("You can read the full API documentation "),e("a",{attrs:{href:"https://bitpay.com/api#resource-Invoices",target:"_blank",rel:"noopener noreferrer"}},[t._v("on Bitpay's website"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("There is only one difference: Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),t._v(" "),e("h2",{attrs:{id:"modal-checkout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modal-checkout"}},[t._v("#")]),t._v(" Modal Checkout")]),t._v(" "),e("p",[t._v("To generate a pop-up modal experience:")]),t._v(" "),e("ol",[e("li",[t._v("Include the btcpay.js script in your html page")])]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://your.btcpay.url/modal/btcpay.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Call the invoice API to generate an invoice (example code). This is sample backend code as it contains an auth token that should not be exposed in your front-end.")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" axiosClient "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BTCPAY_URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  responseType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BTCPAY_AUTH")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invoiceCreation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USD"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orderId"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"itemDesc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notificationUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://webhook.after.checkout.com/goeshere"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirectURL"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://go.here.after.checkout.com"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axiosClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/invoices"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" invoiceCreation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invoiceId "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Use the invoiceId to pop up the modal")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("showInvoice")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invoiceId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("You'll often want to do something like refresh the state of your page when the invoice is paid, or note some kind of state before the modal pops up. You can attach event listeners like this:")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalWillEnter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalWillLeave")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalReceiveMessageMethod")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// available from v1.0.5.6")]),t._v("\n")])])]),e("p",[e("code",[t._v("onModalReceiveMessageMethod")]),t._v(" will invoke your callback when a new status has been pushed from BTCPay Server to the invoice UI. The data format is "),e("code",[t._v('{invoiceId: "x", status: "y" }')])])])}),[],!1,null,null,null);a.default=n.exports}}]);