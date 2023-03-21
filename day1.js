// https://hackmd.io/grmV5W6IQ5KRT4ranuW3Fw

// const checkScore = (score) => {
//   /* 回傳一個 Promise，並執行以下非同步操作*/
//   const score = Math.round(Math.random() * 100);
//   /* 判斷流程請嘗試使用 setTimeout() 執行 */
//   if(score >= 60) {
//     console.log(score); // 執行實現方法
//   } else {
//     console.log("不及格"); // 執行拒絕方法
//   }
// };

const checkScorePromise = (score) => {
  return new Promise((resolve, reject) => {
    const myScore = score || Math.round(Math.random() * 100);

    setTimeout(() => {
      if(myScore >= 60) {
        resolve(`'${myScore} 及格'`)
        // resolve(myScore)
      } else {
        reject(`'${myScore} 不及格'`)
      }
    }, 1 * 1000)
  } );
};

checkScorePromise().then((o) => console.log(o))