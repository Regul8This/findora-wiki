(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[200],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7407:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:2},s=void 0,p={unversionedId:"general/run-a-full-node",id:"general/run-a-full-node",isDocsHomePage:!1,title:"run-a-full-node",description:"Run a Findora Full Node",source:"@site/docs/general/run-a-full-node.md",sourceDirName:"general",slug:"/general/run-a-full-node",permalink:"/findora-wiki/docs/general/run-a-full-node",editUrl:"https://github.com/FindoraNetwork/findora-wiki/edit/main/docs/general/run-a-full-node.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/findora-wiki/docs/general/intro"},next:{title:"run-a-test-node",permalink:"/findora-wiki/docs/general/run-a-test-node"}},d=[{value:"System requirements",id:"system-requirements",children:[]},{value:"Network port",id:"network-port",children:[]},{value:"Comparison of network parameters in different environments",id:"comparison-of-network-parameters-in-different-environments",children:[]},{value:"request network params and write  node config",id:"request-network-params-and-write--node-config",children:[]},{value:"fns is official offer staking terminal tools",id:"fns-is-official-offer-staking-terminal-tools",children:[]},{value:"stake operator",id:"stake-operator",children:[]},{value:"append staking amount",id:"append-staking-amount",children:[]},{value:"unstake",id:"unstake",children:[]},{value:"send transfer",id:"send-transfer",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Update",id:"update",children:[]}],c={toc:d};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Run a Findora Full Node"),(0,o.kt)("p",null,"Whether you're interested in contributing to Findora, building apps, or joining the validator pool, you'll want the ability to run your own full node."),(0,o.kt)("p",null,"This guide will show you how to run one of our Findora nodes and connect to the Findora alpha or mainnet networks. Currently we are offering prebuilt docker images but we will be providing instructions for building directly source very shortly!"),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Build a full node in your server and connect to the Findora Alpha/Mainnet network.\nAlpha network is for the integration and test only."),(0,o.kt)("h3",{id:"system-requirements"},"System requirements"),(0,o.kt)("h4",{id:"os"},"OS"),(0,o.kt)("p",null,"Linux(Ubuntu), Macos",(0,o.kt)("br",{parentName:"p"}),"\n","Currently window support is still under development"),(0,o.kt)("p",null,"Follow the instructions that follow and the script will automatically create a full node and connect to the Findora Network."),(0,o.kt)("h3",{id:"network-port"},"Network port"),(0,o.kt)("p",null,"The node should open the port 8667, 8668, 8669 and 26657 26656 to puclib with Security Group in AWS or fire work in GCP"),(0,o.kt)("h3",{id:"comparison-of-network-parameters-in-different-environments"},"Comparison of network parameters in different environments"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For the convenience of the test network, some parameters are different from the main network")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Project"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Testnet"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Mainnet"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"import block interval"),(0,o.kt)("td",{parentName:"tr",align:"center"},"6s"),(0,o.kt)("td",{parentName:"tr",align:"center"},"16s")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Unlock period"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5 * 5s"),(0,o.kt)("td",{parentName:"tr",align:"center"},"3600 ",(0,o.kt)("em",{parentName:"td"}," 24 ")," 21s")))),(0,o.kt)("h2",null," mainnet network"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"application install")),(0,o.kt)("h4",{id:"linux"},"linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.linux\n\nwget  https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.linux\n\n### remove suffix\n\nmv tendermint.linux tendermint\nmv abci_validator_node.linux abci_validator_node\nmv fns.linux fns\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,o.kt)("h4",{id:"macos"},"macos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -o tendermint https://github.com/FindoraNetwork/iii/releases/download/fnstest/tendermint.macos\n\ncurl -o abci_validator_node https://github.com/FindoraNetwork/iii/releases/download/fnstest/abci_validator_node.macos\n\ncurl -o fns https://github.com/FindoraNetwork/iii/releases/download/fnstest/fns.macos\n\nchmod a+rwx  tendermint\nchmod a+rwx  abci_validator_node\nchmod a+rwx  fns\n")),(0,o.kt)("p",null,"The three applications above are:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tendermint application\nfindora application\nfns staking terminal tool\n")),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"config-bin-to-env"},"config bin to env")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=$PATH:$(pwd)" >> ~/.bashrc\nsource ~/.bashrc\n')),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"create-config-and-set-config"},"create config and set config"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# clear old data\n rm -rf /tmp/findora ~/.tendermint\n# init tendermint\ntendermint init\n")),(0,o.kt)("p",{parentName:"blockquote"},"after init successfully,run")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ls  ~/.tendermint/config \n")),(0,o.kt)("p",null,"Three files are displayed\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"config.toml   genesis.json   node_key.json  priv_validator_key.json\n")),(0,o.kt)("h3",{id:"request-network-params-and-write--node-config"},"request network params and write  node config"),(0,o.kt)("h4",{id:"install-jq"},"install jq"),(0,o.kt)("h4",{id:"linux-1"},"linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install jq\n")),(0,o.kt)("h4",{id:"macos-1"},"macos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install jq\n")),(0,o.kt)("h4",{id:"write-genesis-config"},"write genesis config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'\ncurl https://prod-mainnet.prod.findora.org:26657/genesis | jq -c  | perl -pi -e \'s/^{"jsonrpc":"2.0","id":-1,"result":{"genesis"://\' | perl -pi -e \'s/}}$//\'  | jq > ~/.tendermint/config/genesis.json\n')),(0,o.kt)("h4",{id:"write-tendermint-config-and-set--proposal-block-interval-15s"},"write tendermint config and set  proposal block interval 15s"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"perl -pi -e 's#(create_empty_blocks_interval = ).*#$1\"15s\"#' ~/.tendermint/config/config.toml\n\n")),(0,o.kt)("h4",{id:"write-peer-address-and-network"},"write peer address and network"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'perl -pi -e \'s#(persistent_peers = )".*"#$1"b87304454c0a0a0c5ed6c483ac5adc487f3b21f6\\@prod-mainnet-us-west-2-sentry-000-public.prod.findora.org:26656,d0c6e3e1589695ae6d650b288caf2efe9a998a50\\@prod-mainnet-us-west-2-sentry-001-public.prod.findora.org:26656"#\' ~/.tendermint/config/config.toml\n')),(0,o.kt)("h2",null," run node"),"### start validator",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"TD_NODE_SELF_ADDR=$(cat ~/.tendermint/config/priv_validator_key.json | grep 'address' | grep -o '[^\"]\\{20,\\}') \\\nLEDGER_DIR=/tmp/findora \\\nENABLE_LEDGER_SERVICE=true \\\nENABLE_QUERY_SERVICE=true \\\nabci_validator_node >/tmp/log 2>&1 &\n")),(0,o.kt)("h4",{id:"check-server-port"},"check server port"),(0,o.kt)("p",null,"linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -ltpn\n")),(0,o.kt)("p",null,"macos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"netstat -AaLlnW\n")),(0,o.kt)("p",null,"show list:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8667",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8668",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.8669",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"***"),"        0 0/0/128        *.26658"),(0,o.kt)("p",null,"If any port is missing, the application did not start successfully, please start from the first step"),(0,o.kt)("h4",{id:"start-tendermint-application"},"start tendermint application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nohup tendermint node>/tmp/td.log 2>&1 &\n")),(0,o.kt)("h1",{id:"use-fns-tool"},"use fns tool"),(0,o.kt)("h3",{id:"fns-is-official-offer-staking-terminal-tools"},"fns is official offer staking terminal tools"),(0,o.kt)("p",null,"##set fns tool "),(0,o.kt)("h4",{id:"set-server-url"},"set server url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fns setup -S http://127.0.0.1:8669\n\n")),(0,o.kt)("h4",{id:"set-pay-and-staking-account-mnemonic"},"set pay and staking account mnemonic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo '[your private mnemonic]'> $(pwd)/mnemonic\nfns setup -O $(pwd)/mnemonic\n\n")),(0,o.kt)("h4",{id:"acquire-and-set-tendermint--public-key"},"acquire and set tendermint  public key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"echo $(grep -A 2 'pub_key' ~/.tendermint/config/priv_validator_key.json | grep '\"value\":' | grep -o '[^\"]\\+\"$' | sed 's/\"//') > $(pwd)/tendermint_keys\nfns setup -K $(pwd)/tendermint_keys\n")),(0,o.kt)("h3",{id:"stake-operator"},"stake operator"),(0,o.kt)("p",null,"For example, pledge 1000000, because the basic unit is 6 digits, it must be 1000000 n is the pledge amount\nR is the commission rate is the commission that someone entrusts to you, and the commission you get, -M is only for this transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'fns stake -n $((1000000 * 1000000)) -R 0.2 -M "my remark"\n')),(0,o.kt)("p",null,"wait for one minutes\nquery stake result"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fns show\n")),(0,o.kt)("h3",{id:"append-staking-amount"},"append staking amount"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fns stake -a -n $((1000000 * 1000000))\n\n")),(0,o.kt)("h3",{id:"unstake"},"unstake"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fns unstake -n $((1000000 * 1000000))\n")),(0,o.kt)("p",null,"###claim reward "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fns claim -n $((1000000 * 1000000))\n")),(0,o.kt)("h3",{id:"send-transfer"},"send transfer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'fns transfer -n $((1000000 * 1000000)) -t "fra***********************"\n')),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"The image now located in AWS North America so the downloading speed in China will be a little bit slow and sometimes it will have intermittent handshake issues. If the script fails during image download, please run the script again."),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,"We will be updating this repo frequently, so please run git pull before you run the code."),(0,o.kt)("p",null,"We will send a notification when the new version release."))}u.isMDXComponent=!0}}]);