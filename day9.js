// https://drive.google.com/drive/folders/1oRjCzs3OajeUXVroNO6QS7fNomO1hwZ0

// 1. 尋找一筆 document 並將 ice 改為 去冰，sugar 改為 半糖
Drink.findByIdAndUpdate("64213fe7c28a1eeaa6ce47e1", {
  "ice": "去冰",
  "sugar": "半糖",
})

// 2. 以 ID 尋找一筆 document 並將其刪除
Drink.findByIdAndDelete("64213fe7c28a1eeaa6ce47e1")

// 3. 刪除全部 documents
Drink.deleteMany({})