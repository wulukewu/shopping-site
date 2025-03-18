# Changelog

## [1.1.2](https://github.com/wulukewu/shopping-site/compare/v1.1.1...v1.1.2) (2025-03-18)


### Bug Fixes

* postcss security (https://stackoverflow.com/questions/67501746/postcss-7-0-0-8-2-9-severity-moderate-regular-expression-denial-of-service) ([d0bd0df](https://github.com/wulukewu/shopping-site/commit/d0bd0dfaa8a4d5867755067a9f2127fa9067509b))

## [1.1.1](https://github.com/wulukewu/shopping-site/compare/v1.1.0...v1.1.1) (2025-03-18)


### Bug Fixes

* solve "PostCSS line return parsing error" ([6d3f0cd](https://github.com/wulukewu/shopping-site/commit/6d3f0cdba9a7beee2b414ff960ba657732021a61))

## [1.1.0](https://github.com/wulukewu/shopping-site/compare/v1.0.15...v1.1.0) (2025-03-11)


### Features

* load and save cart from db ([1d0a036](https://github.com/wulukewu/shopping-site/commit/1d0a036a9de8087d9e7b7c3877db73e9bde1194f))

## [1.0.15](https://github.com/wulukewu/shopping-site/compare/v1.0.14...v1.0.15) (2025-03-10)


### Bug Fixes

* disable ARG VUE_APP_BASE_URL ([843fb6d](https://github.com/wulukewu/shopping-site/commit/843fb6d4e3058c39890e65241b5c588ce17a8680))
* replace VUE_APP_API_URL with VUE_APP_BASE_URL ([1afd62d](https://github.com/wulukewu/shopping-site/commit/1afd62d4e4207d5eb62389cd0a9afebfa74a0b18))
* replace VUE_APP_API_URL with VUE_APP_BASE_URL in settings ([b5d561c](https://github.com/wulukewu/shopping-site/commit/b5d561ca08dbe34a60aecd5047f0e2e233f5a809))
* temp set VUE_APP_BASE_URL ([481c5d2](https://github.com/wulukewu/shopping-site/commit/481c5d2f38582900f593ac7ca15fbe03ac64bccb))
* try VUE_APP_BASE_URL='http://api:3000' ([ec37fce](https://github.com/wulukewu/shopping-site/commit/ec37fce5ba1756208b2ecb814b309533384053eb))
* use VUE_APP_BASE_URL from outer ([2ecfe70](https://github.com/wulukewu/shopping-site/commit/2ecfe7025d638876a31f931dae5419470022a593))
* use webpack to load env ([dfac756](https://github.com/wulukewu/shopping-site/commit/dfac756bd516e5c418fe57d6992d62b1f0473a2b))

## [1.0.14](https://github.com/wulukewu/shopping-site/compare/v1.0.13...v1.0.14) (2025-03-02)


### Bug Fixes

* VUE_APP_API_URL to VUE_APP_BASE_URL ([3d6e177](https://github.com/wulukewu/shopping-site/commit/3d6e17767364204876362d2225cf027fe61c7850))

## [1.0.13](https://github.com/wulukewu/shopping-site/compare/v1.0.12...v1.0.13) (2025-03-01)


### Reverts

* use default arg VUE_APP_API_URL to build docker ([20bb696](https://github.com/wulukewu/shopping-site/commit/20bb69621ec6cf84e4f760625a0b2450b201664a))

## [1.0.12](https://github.com/wulukewu/shopping-site/compare/v1.0.11...v1.0.12) (2025-03-01)


### Bug Fixes

* disable arg VUE_APP_API_URL and load it from env ([9bfe3bb](https://github.com/wulukewu/shopping-site/commit/9bfe3bb1fc1d04f44474f88bece708bd989fef8c))

## [1.0.11](https://github.com/wulukewu/shopping-site/compare/v1.0.10...v1.0.11) (2025-02-28)


### Bug Fixes

* revert changes of setting env ([b0ada59](https://github.com/wulukewu/shopping-site/commit/b0ada59e77d772ed41d20a9b899cc611f8425a47))

## [1.0.10](https://github.com/wulukewu/shopping-site/compare/v1.0.9...v1.0.10) (2025-02-28)


### Bug Fixes

* deal with env refer to https://moreillon.medium.com/environment-variables-for-containerized-vue-js-applications-f0aa943cb962 ([32df144](https://github.com/wulukewu/shopping-site/commit/32df144d0d00ec70e2f1e250bef721b388bd3dad))

## [1.0.9](https://github.com/wulukewu/shopping-site/compare/v1.0.8...v1.0.9) (2025-02-28)


### Bug Fixes

* substitute_environment_variables ([5d80597](https://github.com/wulukewu/shopping-site/commit/5d80597d589809c0b194d52b743e15a7dccc4a5f))

## [1.0.8](https://github.com/wulukewu/shopping-site/compare/v1.0.7...v1.0.8) (2025-02-28)


### Bug Fixes

* enter from docker-entrypoint.sh ([8ba9cdf](https://github.com/wulukewu/shopping-site/commit/8ba9cdf613aac3888d61cd917e57f9b134c8d162))

## [1.0.7](https://github.com/wulukewu/shopping-site/compare/v1.0.6...v1.0.7) (2025-02-28)


### Bug Fixes

* replace __VUE_APP_API_URL__ ([4ad00cb](https://github.com/wulukewu/shopping-site/commit/4ad00cbf2ff7c9363f7d07986712ac4c73a229db))

## [1.0.6](https://github.com/wulukewu/shopping-site/compare/v1.0.5...v1.0.6) (2025-02-28)


### Bug Fixes

* remove default VUE_APP_API_URL when building docker image ([9ff1931](https://github.com/wulukewu/shopping-site/commit/9ff19312861fb4c7c24748e844f07bc56461c011))

## [1.0.5](https://github.com/wulukewu/shopping-site/compare/v1.0.4...v1.0.5) (2025-02-28)


### Bug Fixes

* store apiUrl in data ([d0effd9](https://github.com/wulukewu/shopping-site/commit/d0effd9d5f25c336ced1ef97fc327d9d74162e8b))

## [1.0.4](https://github.com/wulukewu/shopping-site/compare/v1.0.3...v1.0.4) (2025-02-27)


### Bug Fixes

* back to publicPath with / ([e487766](https://github.com/wulukewu/shopping-site/commit/e487766e9a2d5ef0c1a2734c668133111b1c828e))

## [1.0.3](https://github.com/wulukewu/shopping-site/compare/v1.0.2...v1.0.3) (2025-02-27)


### Bug Fixes

* add VUE_APP_API_URL arg to docker ([1b9af97](https://github.com/wulukewu/shopping-site/commit/1b9af970c0d58ef5a50f6def3fa6be7b07599f1b))

## [1.0.2](https://github.com/wulukewu/shopping-site/compare/v1.0.1...v1.0.2) (2025-02-27)


### Bug Fixes

* console log apiUrl ([cb38052](https://github.com/wulukewu/shopping-site/commit/cb38052820f28ec88f1da5c72771110a0fa4881b))

## [1.0.1](https://github.com/wulukewu/shopping-site/compare/v1.0.0...v1.0.1) (2025-02-27)


### Bug Fixes

* router use relative path ([9e01b0c](https://github.com/wulukewu/shopping-site/commit/9e01b0cac276ad50c6552ad25e5e301c2abc0620))

## 1.0.0 (2025-02-26)


### Features

* add @fortawesome/fontawesome-free ([6c032e2](https://github.com/wulukewu/shopping-site/commit/6c032e21a471ead4e5eab6ba9a0ca8edbc2ce489))
* add /cart in router ([9574638](https://github.com/wulukewu/shopping-site/commit/9574638aef577c78dbb40888c4c5332c667f3fa1))
* add /products api ([aec9689](https://github.com/wulukewu/shopping-site/commit/aec968909d206f2b96f493f32314318b1971bf14))
* add 404.html ([eff184a](https://github.com/wulukewu/shopping-site/commit/eff184a181c508788f89d5f15aec714e82162bda))
* add cart arry ([64f51f8](https://github.com/wulukewu/shopping-site/commit/64f51f829361ef518a6f8f111947cca1379550b2))
* add cartTotal ([2027a95](https://github.com/wulukewu/shopping-site/commit/2027a9529d0c9814e624519c627d3fbb059c9cb8))
* add categories ([cc5e30f](https://github.com/wulukewu/shopping-site/commit/cc5e30fbbf3a996790b776cd7298eba10f54c97e))
* add crawler to generate image ([ec94266](https://github.com/wulukewu/shopping-site/commit/ec942664cf6d4922a375b2224033a778ba916c52))
* add dist/ folder ([acf6b6a](https://github.com/wulukewu/shopping-site/commit/acf6b6a6612f96982cd82baebf231ffc94038d3d))
* add Dockerfile ([946e9ea](https://github.com/wulukewu/shopping-site/commit/946e9ea0f369e6bb10dd3a06f186039ea9dc1753))
* add loading and 404 text into ProductView ([7dfc563](https://github.com/wulukewu/shopping-site/commit/7dfc563a0c950b93b24e8fdcbd336aa04a65000a))
* add prettier rc ([5d00d4a](https://github.com/wulukewu/shopping-site/commit/5d00d4a91cccaf8072896bf4217875b9d4f92fa9))
* add product images to ProductsList ([03b0387](https://github.com/wulukewu/shopping-site/commit/03b038787cbe3cb3b0a572d6df9418ac820ba103))
* add products list ([b94fc81](https://github.com/wulukewu/shopping-site/commit/b94fc81fa863ab48b98c73b9ff6de019e54635b4))
* add ProductView ([4463be9](https://github.com/wulukewu/shopping-site/commit/4463be9e58cfa84dfddfae6365cfe25893a36ff6))
* add quantity-control in CartView ([9a67063](https://github.com/wulukewu/shopping-site/commit/9a670635c187f84d30d5cac1a89593dc6ad2cb2f))
* add router to product categories ([1cd856e](https://github.com/wulukewu/shopping-site/commit/1cd856ec584d8355c52e5d01b59e5898ef44e0e7))
* add search-bar ([e1da6bb](https://github.com/wulukewu/shopping-site/commit/e1da6bb09b0adb90de4c54d9ca87f74409ffc52f))
* add settings router ([03613e4](https://github.com/wulukewu/shopping-site/commit/03613e4afafbd4a93b5f13c1fa587a46101f61e7))
* add space between product-image and product-details ([8f6b7aa](https://github.com/wulukewu/shopping-site/commit/8f6b7aaae896105da283ee48b7a9c9a877d83367))
* add VUE_APP_API_URL env ([fdb614a](https://github.com/wulukewu/shopping-site/commit/fdb614a40a5f4d034eb097e3abdffea8070cf547))
* auth with login and register ([ceabe93](https://github.com/wulukewu/shopping-site/commit/ceabe93ca2d2b406c9a83dfa65fff093ad747a40))
* build settings components ([c5740e4](https://github.com/wulukewu/shopping-site/commit/c5740e42007ef6bfd6b88e4173439973a234a277))
* change categories id ([61f5ba2](https://github.com/wulukewu/shopping-site/commit/61f5ba2a23079a0209e3638dd61558d6b4a5d7b0))
* change font-family from Avenir to Sora ([cb3d66b](https://github.com/wulukewu/shopping-site/commit/cb3d66b70f90c95dc97cb95492d2469900dbdb91))
* change product image ([dd8c8a9](https://github.com/wulukewu/shopping-site/commit/dd8c8a976d610ee6ae7c4c75f800b21403320cbe))
* change products list view ([5447092](https://github.com/wulukewu/shopping-site/commit/544709298aedfbfc8cca7b9426e0eec75e5dc073))
* change style of quantity ([7ff3771](https://github.com/wulukewu/shopping-site/commit/7ff377173177b9396119356c0237fd3b6f5716b2))
* change tab icon and title ([f54d0b2](https://github.com/wulukewu/shopping-site/commit/f54d0b2101f3eff81bb1c7dc92873ace720c149c))
* change trash icon back to minus ([479388e](https://github.com/wulukewu/shopping-site/commit/479388e2a6e665d95dc8bb7b1bc481b8f3d5749a))
* change vue.config.js for index.html path ([b30f046](https://github.com/wulukewu/shopping-site/commit/b30f046f187a9cb2817d2cda5d29e1e967551574))
* create build-docker.yml ([793e454](https://github.com/wulukewu/shopping-site/commit/793e4541aa80b465e9797850e57e5113787e686d))
* create navbar ([2e0c8e9](https://github.com/wulukewu/shopping-site/commit/2e0c8e98b68dd8a3b2536fc2ed7229aa5164d400))
* deploy to github pages ([47318bd](https://github.com/wulukewu/shopping-site/commit/47318bddb106ad09a0ab3a857398bd3f77a8967b))
* first commit with vue package ([1990703](https://github.com/wulukewu/shopping-site/commit/19907033c889aa67d32b4ab827f8fa611918c7fa))
* fix fetch products.json ([f5efe5f](https://github.com/wulukewu/shopping-site/commit/f5efe5f10d4cf751503179ab02207643563e3926))
* fix fetch products.json in both local and deploy web ([8e5de35](https://github.com/wulukewu/shopping-site/commit/8e5de358affb2179e8db2f99013122fb3c742bb5))
* fix item remove button ([8ab2678](https://github.com/wulukewu/shopping-site/commit/8ab26781330e826429e1321fcf4eca1073d870aa))
* fix navbar on the top ([36aa218](https://github.com/wulukewu/shopping-site/commit/36aa218795515b3907b1484a122c146221f7c568))
* fix products.json not found by setting history ([be7bb94](https://github.com/wulukewu/shopping-site/commit/be7bb9441793eb5d9a32252168c6a6313e72fcce))
* fix products' id ([dff7f13](https://github.com/wulukewu/shopping-site/commit/dff7f137c8dcbf01fe6df8161469faf410c92f7e))
* fix Single Page Applications (SPAs) deployed to GitHub Pages by 404.html Redirect ([bb96b39](https://github.com/wulukewu/shopping-site/commit/bb96b3958577281ed181b55c14bed1ab061de2ca))
* fix unsync with cart and localCart ([dfd07cc](https://github.com/wulukewu/shopping-site/commit/dfd07cced7380bc666a1b5d2327ec828ae9de7d3))
* format the price with commas as thousands separators ([f4347ad](https://github.com/wulukewu/shopping-site/commit/f4347addeea1599916456bd10132f604a120e453))
* generated product images ([4db016c](https://github.com/wulukewu/shopping-site/commit/4db016cb12c31f143f40e518632a5a8f405068e6))
* highlight category in active-class ([6c7f6de](https://github.com/wulukewu/shopping-site/commit/6c7f6dea4c50a73e9451d5bced889ec1837806a3))
* ignore /dist folder again ([b3381ad](https://github.com/wulukewu/shopping-site/commit/b3381ad6a731e3c36c650cd06070364790e3df7d))
* load products from json ([2bd91f6](https://github.com/wulukewu/shopping-site/commit/2bd91f61dfe5909f8ac93f8fbe1df29bd9fc9808))
* login and register on navbar ([18a002e](https://github.com/wulukewu/shopping-site/commit/18a002ed31dd7560238adb82dbb25ed2ba4a1089))
* make each category to be seperate object, as `categories` is an array of objects ([5932755](https://github.com/wulukewu/shopping-site/commit/5932755cf22f5551a6e4be11b9806e68509f9a1d))
* make items align center ([4895791](https://github.com/wulukewu/shopping-site/commit/4895791d50f37206aa0b1e05b04eb9757152df92))
* product-image-generator load products from json ([a729b67](https://github.com/wulukewu/shopping-site/commit/a729b67ebbf531a641dcfc6956b4d5ca000edb3d))
* redirect to home page when logged in and enter /login or /register ([4c62b2e](https://github.com/wulukewu/shopping-site/commit/4c62b2ebaa6ea0cd7f22e4092a2cfdfc53ea6855))
* redirect to home page when not found ([c363720](https://github.com/wulukewu/shopping-site/commit/c363720db6c1d49b6341b148344e91e7e45188c5))
* release actions ([9503dfa](https://github.com/wulukewu/shopping-site/commit/9503dfa752e2df5ab2fe07221286de64b5834f65))
* Remove /dist from .gitignore ([8e5bbe1](https://github.com/wulukewu/shopping-site/commit/8e5bbe104309758920bd490c9df7185c38683e14))
* remove deleted files from the deploy branch ([a0ef275](https://github.com/wulukewu/shopping-site/commit/a0ef2756dd99a83ec28ecac0854d868058bf2700))
* remove the base url ([8ea3219](https://github.com/wulukewu/shopping-site/commit/8ea321965cf7e1df8905d1f78ff7d7fd6fdc47c0))
* remove vuejs.yml ([fae671d](https://github.com/wulukewu/shopping-site/commit/fae671d08a403898e3360eea5d30d4360b746f37))
* seperate navbar ([8550d49](https://github.com/wulukewu/shopping-site/commit/8550d49e3b07e429f15cf851604aefdc9f05ac9d))
* show cart-count on navbar ([d5f044a](https://github.com/wulukewu/shopping-site/commit/d5f044a9be1b8458f14a052eda72c4b2e956ec99))
* skip generate image if image exist ([9a56b4f](https://github.com/wulukewu/shopping-site/commit/9a56b4f2887f8cb6cb7ca3572aae769e3a8b234a))
* style CartView ([12bddaf](https://github.com/wulukewu/shopping-site/commit/12bddafbd4353f779b007ca3f81af3467f7fb4bf))
* style quantity buttons ([5ddaeea](https://github.com/wulukewu/shopping-site/commit/5ddaeeaf3bde6b6b63bb10acd308e1a756b3e6e4))
* style search bar ([838609b](https://github.com/wulukewu/shopping-site/commit/838609b54b896110b368874d376ada49a85fd905))
* update 404.html ([943ecc4](https://github.com/wulukewu/shopping-site/commit/943ecc46a1eb00688f1af4bdc9e4e8dff3474d93))
* update products at start ([4769ef7](https://github.com/wulukewu/shopping-site/commit/4769ef7520656e22d5389494cbd62c4da093e8bc))
* use props to store categories ([5a7a0be](https://github.com/wulukewu/shopping-site/commit/5a7a0be29a39a6743ca07e9d75e17e0a27fe71a1))


### Bug Fixes

* add dev-docker branch trigger for testing ([e38b705](https://github.com/wulukewu/shopping-site/commit/e38b705583f5250dc2aaa68ec0916ff6d3dbaaf1))
* add style with align to cart ([3252df9](https://github.com/wulukewu/shopping-site/commit/3252df984a806d740769ee0f8138291c2aa2aaef))
* change github pages deploy.yml to vue branch ([fefe567](https://github.com/wulukewu/shopping-site/commit/fefe567eec9292a787f8b38ab33587a62bd3f0ec))
* change nav-belt width to auto ([96ed74a](https://github.com/wulukewu/shopping-site/commit/96ed74adfbbc429afa211cbaee26985b3b259ef5))
* format yml ([6659d18](https://github.com/wulukewu/shopping-site/commit/6659d1824cb1fbb5cb1f06fa64b7b4e432dc8128))
* install postcss on dev ([336f8e3](https://github.com/wulukewu/shopping-site/commit/336f8e337c081b272199d17b99ac07b27efcdcea))
* keep dropdown-menu inside page size ([8fc4002](https://github.com/wulukewu/shopping-site/commit/8fc4002738a808380f0dad3f6732643cc05ece9f))
* localhost -&gt; VUE_APP_API_URL in env ([ad9f97c](https://github.com/wulukewu/shopping-site/commit/ad9f97cc8bd08262d9958718ff70c674c5b208af))
* push to ghrc ([2087a2e](https://github.com/wulukewu/shopping-site/commit/2087a2e62d20a94668076c8e7dfe00598a15a103))
* push to ghrc.io ([874e79c](https://github.com/wulukewu/shopping-site/commit/874e79c626e53e1b6ce5a28f5edd66f7f5d17842))
* remove axios ([ddc01d0](https://github.com/wulukewu/shopping-site/commit/ddc01d061a892e8cb1901392059dc35b4e77caef))
* remove axios ([4d4f7a9](https://github.com/wulukewu/shopping-site/commit/4d4f7a9e35240d139ac78eea26237ccf51157eac))
* remove baseurl ([66d0b6f](https://github.com/wulukewu/shopping-site/commit/66d0b6f1e2ae76f24e39ec3a85fbdd7265ea155a))
* remove dev-docker branch ([0e1eccf](https://github.com/wulukewu/shopping-site/commit/0e1eccf8bcb22a594333380ef2d1dd92c8bfd9b1))
* rewrite build-docker.yml ([d41e27b](https://github.com/wulukewu/shopping-site/commit/d41e27b06309701ecb688d74dd62d08234eb083e))
* rewrite docker build actions refer to https://dev.to/willvelida/pushing-container-images-to-github-container-registry-with-github-actions-1m6b ([0c8f99e](https://github.com/wulukewu/shopping-site/commit/0c8f99e5ca0e5114205f7360cc7d837eb4a577eb))
* router show 404 when refreshing page after build ([6765cb1](https://github.com/wulukewu/shopping-site/commit/6765cb1511b634685cc2b219367669a0cb17c38c))
* set path to / ([1f10ab8](https://github.com/wulukewu/shopping-site/commit/1f10ab868094d056821c7d7c6854a44729e212b4))
* set PostCSS to &gt;=8.4.31 ([4e5869d](https://github.com/wulukewu/shopping-site/commit/4e5869dc2e1fd6bda539093b59c6c8318b9ea2c3))
* show 404 page ([9951eec](https://github.com/wulukewu/shopping-site/commit/9951eecaadf8c0ebf9bf13285364311781557ce1))
* style profile text ([16ec726](https://github.com/wulukewu/shopping-site/commit/16ec726076700cd30df2fd6f72b77eeb3a07875d))
* try to push to github packages ([d7657b5](https://github.com/wulukewu/shopping-site/commit/d7657b5261e6278bb5a167d6a61077741d720305))
* use apiUrl ([c3cbe39](https://github.com/wulukewu/shopping-site/commit/c3cbe398ab3a3c4bf59dd2a831485d287ec4cead))
