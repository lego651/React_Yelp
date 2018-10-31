var app = require('koa')();
var router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// Home Ad Data
var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    console.log('Home Ad Data in Server）')

    this.body = homeAdData
});

// Home List Data
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function *(next) {
    console.log('Home List Data')

    // Params
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('current City' + paramsCity)
    console.log('current Page' + paramsPage)

    this.body = homeListData
});

// Search Result Page - 3 params
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    console.log('Search Result Page Data')

    // Params
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('current Page' + paramsPage)
    console.log('current City' + paramsCity)
    console.log('current Category' + paramsCategory)
    console.log('keyWord' + paramsKeyword)

    this.body = searchListData
})
// Search Result Page - 2 params
router.get('/api/search/:page/:city/:category', function *(next) {
    console.log('Search Result Page Data')

    // Params
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('current Page' + paramsPage)
    console.log('current City' + paramsCity)
    console.log('current Category' + paramsCategory)

    this.body = searchListData
})

// Detail Page Data / Store Info
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next) {
    console.log('Detail Page Data / Store Info')

    const params = this.params
    const id = params.id

    console.log('Store id: ' + id)

    this.body = detailInfo
})
// Detail Page - User Comment
const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('Detail Page - User Comment')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('Store id: ' + id)
    console.log('current Page' + page)

    this.body = detailComment
})

// orderList Data
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function *(next) {
    console.log('orderList Data')

    const params = this.params
    const username = params.username
    console.log('UserName' + username)

    this.body = orderList
})

// submit Review Comment
router.post('/api/submitComment', function *(next) {
    console.log('submit Review Comment')

    // get Params
    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

// Start Server
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
