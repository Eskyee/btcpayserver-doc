(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{660:function(e,t,r){"use strict";r.r(t);var a=r(25),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"drupal-commerce-2x-integration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#drupal-commerce-2x-integration"}},[e._v("#")]),e._v(" Drupal Commerce 2.x integration")]),e._v(" "),r("p",[e._v("The project can be found "),r("a",{attrs:{href:"https://drupal.org/project/commerce_btcpay",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" on drupal.org and therefore can be installed using "),r("code",[e._v("composer")]),e._v(" from the drupal.org packagist (no need to add the repo manually to your "),r("code",[e._v("composer.json")]),e._v("). The sources are available on "),r("a",{attrs:{href:"https://github.com/btcpayserver/commerce_btcpay",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("ul",[r("li",[e._v("BTCPay Server ("),r("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self hosted or 3rd party")]),e._v(" or "),r("RouterLink",{attrs:{to:"/TryItOut/"}},[e._v("quick start with a testserver")]),e._v(")")],1),e._v(" "),r("li",[e._v("Drupal Commerce 2.x installed ("),r("a",{attrs:{href:"https://docs.drupalcommerce.org/commerce2/developer-guide/install-update/installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation guide"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("Drupal: "),r("a",{attrs:{href:"https://www.drupal.org/docs/8/core/modules/file/overview#content-accessing-private-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("configured private file system"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"module-installation-and-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#module-installation-and-configuration"}},[e._v("#")]),e._v(" Module installation and configuration")]),e._v(" "),r("h3",{attrs:{id:"quick-walkthrough-screencast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-walkthrough-screencast"}},[e._v("#")]),e._v(" Quick walkthrough screencast")]),e._v(" "),r("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/XBZwyC2v48s/hqdefault.jpg)"},attrs:{href:"https://youtube.com/watch?v=XBZwyC2v48s","data-id":"XBZwyC2v48s"}},[r("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/XBZwyC2v48s?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),r("h3",{attrs:{id:"quick-walkthrough-steps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quick-walkthrough-steps"}},[e._v("#")]),e._v(" Quick walkthrough steps")]),e._v(" "),r("h4",{attrs:{id:"generate-pairing-code-on-btcpay-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#generate-pairing-code-on-btcpay-server"}},[e._v("#")]),e._v(" Generate pairing code on BTCPay server")]),e._v(" "),r("ol",[r("li",[e._v("BTCPay server: "),r("RouterLink",{attrs:{to:"/CreateStore/#creating-a-store-in-btcpay"}},[e._v("create and configure a store")])],1),e._v(" "),r("li",[e._v('in store settings go to "'),r("strong",[e._v("Access Tokens")]),e._v('"')]),e._v(" "),r("li",[e._v("click on "),r("strong",[e._v("[Create a new token]")])]),e._v(" "),r("li",[r("strong",[e._v("Label:")]),e._v(" enter some label (eg. my store)")]),e._v(" "),r("li",[r("strong",[e._v("Public key:")]),e._v(" this needs to be left "),r("strong",[e._v("empty")])]),e._v(" "),r("li",[r("strong",[e._v("Facade:")]),e._v(' "merchant"')]),e._v(" "),r("li",[e._v("click on "),r("strong",[e._v("[Request pairing]")])]),e._v(" "),r("li",[e._v("on next screen choose your configured store in "),r("strong",[e._v("Pair to")]),e._v(" select dropdown and click on "),r("strong",[e._v("[approve]")])]),e._v(" "),r("li",[e._v('note down the displayed 7-digit code at the top status message, e.g. "d7afaXr"\n(you will need that code below on gateway configuration, see below)')])]),e._v(" "),r("h4",{attrs:{id:"commerce-btcpay-installation-configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#commerce-btcpay-installation-configuration"}},[e._v("#")]),e._v(" Commerce BTCPay: Installation + configuration")]),e._v(" "),r("ol",[r("li",[e._v("install module: "),r("code",[e._v("composer require drupal/commerce_btcpay")])]),e._v(" "),r("li",[e._v("enable the module: "),r("code",[e._v("drush en commerce_btcpay -y")])]),e._v(" "),r("li",[e._v("make sure you have configured "),r("a",{attrs:{href:"https://www.drupal.org/docs/8/core/modules/file/overview#content-accessing-private-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("private file system"),r("OutboundLink")],1),e._v(" (needed to store encrypted public+private key)")]),e._v(" "),r("li",[e._v("Commerce BTCPay configuration ("),r("strong",[e._v("Commerce -> Configuration -> Payment -> Payment gateways")]),e._v("):")]),e._v(" "),r("li",[e._v('add payment method "BTCPay"\n'),r("ul",[r("li",[r("strong",[e._v("Mode")]),e._v(": Test or Live (you can configure both individually)")]),e._v(" "),r("li",[r("strong",[e._v("Test/Live server host")]),e._v(": enter your URL without https:// prefix e.g. btcpay.yourserver.com (note valid SSL certificate needed)")]),e._v(" "),r("li",[r("strong",[e._v("Test/Live Paring code")]),e._v(': enter the 7-digit pairing code from BTCPay "Access tokens" page')]),e._v(" "),r("li",[r("strong",[e._v("Save")]),e._v("\nYou should see a message that the tokens were successfully created.")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);