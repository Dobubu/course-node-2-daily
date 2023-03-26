// 0. 建立一個 database（名稱可自定義），並建立一個 students collection
// use daily
// db.students

// 1. 依以下格式新增一筆 document 到 students collection
// db.students.insertOne( {
//   "studentName": "Riley Parker",
//   "group": "A",
//   "score": 83,
//   "isPaid": false
// })

// 2. 依以下格式一次新增多筆 document 到 students collection
// db.students.insertMany([{
//   "studentName": "Brennan Miles",
//   "group": "C",
//   "score": 72,
//   "isPaid": false
// },
// {
//   "studentName": "Mia Diaz",
//   "group": "B",
//   "score": 98,
//   "isPaid": true
// },
// {
//   "studentName": "Caroline morris",
//   "group": "B",
//   "score": 55,
//   "isPaid": false
// },
// {
//   "studentName": "Beverly Stewart",
//   "group": "B",
//   "score": 60,
//   "isPaid": false
// }])

// 3. 查詢 students collection 中的所有資料
// db.students.find().pretty()

// 4. 查詢 students collection 中符合 group 屬性為 B 的資料 使用 { <field>: <value> } 設定符合的項目
// db.students.find({'group': 'B'}).pretty()

// 5. 查詢 students collection 中符合分數在 60 分以上的的資料
// db.students.find({'score': {$gte: 60}}).pretty()

// 6. 查詢 students collection 中符合分數在 60 分以下或是 group 為 B 的資料
// db.students.find({
//   score: {$lte: 60}, 
//   group: 'B'
// }).pretty()