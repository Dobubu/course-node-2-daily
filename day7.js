const mongoose = require('mongoose');

const connect = () => mongoose.connect('mongodb://localhost:27017/daily');

const init = async () => {
  await connect()
  console.log('connect daily db success');
}

init()

const drinkSchema = new mongoose.Schema({  
  product: {
    type: String,
    required: [true, '產品名稱未填寫']
  },
  price: {
    type: Number,
    required: [true, '價錢未填寫']
  },
  ice: { 
    type: String,
    default: '正常冰'
  },
  sugar: { 
    type: String,
    default: '全糖'
  },
  toppings: [{ type: String }]
});

const Drink = mongoose.model('drink', drinkSchema); // Drink model 會連結到 drinks Collection

// const testDrink = new Drink({
//   product: '鮮奶茶',
//   price: 55,
//   sugar: '微糖',
// });

// testDrink.save()
//   .then(() => {console.log('新增資料成功')})
//   .catch((error) => {console.log(error)})

// or

Drink.create({
  product: '鮮奶茶2',
  price: 55,
  sugar: '微糖',
})