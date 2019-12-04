// const px2rem = require('postcss-px2rem')

// const postcss = px2rem({
//   remUnit: 100  //基准大小 baseSize，需要和rem.js中相同
// })

// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           postcss
//         ]
//       }
//     }
//   }
// }

const dataApp = require('./data.json');
const seller = dataApp.seller;
const goods = dataApp.goods;
const ratings = dataApp.ratings;

module.exports = {
    lintOnSave: true,
    devServer: { //自定义服务器
        before(app) {
            app.get('/api/seller', (req, res) => {
                res.json({
                    errno: 0,
                    data: seller
                })
            }),
            app.get('/api/goods', (req, res) => {
                res.json({
                    errno: 0,
                    data: goods
                })
            }),
            app.get('/api/ratings', (req, res) => {
                res.json({
                    errno: 0,
                    data: ratings
                })
            })
        }
    }
}