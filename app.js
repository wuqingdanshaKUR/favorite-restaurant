const express = require('express')
const app = express()
const port = 3000

//將樣板引擎交給express-handlebars
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

//利用restaurant.json中的餐廳介紹檔案加上模板，動態產生每一間餐廳的介紹
app.get('/restaurants/:restaurant_id', (req, res) => {
  console.log('req.params.restaurant_id', req.params.restaurant_id)

  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)

  res.render('show', { restaurant: restaurant })
})

//如果搜尋欄位中有符合餐廳名稱或餐廳類別的內容，則回傳符合關鍵字的內容
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => { return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase()) })

  res.render('index', { restaurants: restaurants, keyword: keyword})
  
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})