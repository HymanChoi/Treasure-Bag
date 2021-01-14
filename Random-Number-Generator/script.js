function getArray() {
  // 获取组数
  let arr1 = document.getElementsByClassName("arr")[0].value
  if (!arr1) {
    alert('请输入标点号')
    return
  }
  let num1 = document.getElementsByClassName("num")[0].value
  if (!num1) {
    alert('请输入抽取个数')
    return
  }

  let total = document.getElementById("amount").value;
  if (total) {
    for (let i = 0; i < total; i++) {
      // 获取数组
      let arrForArr = []
      for (let i = 0; i < 10; i++) {
        let str = document.getElementsByClassName("arr")[i].value;
        if (str) {
          arrForArr[i] = str.trim().split(" ");
        }
      }

      // 获取随机数量
      let arrForNum = []
      for (let i = 0; i < 10; i++) {
        arrForNum[i] = parseInt(document.getElementsByClassName("num")[i].value);
      }

      // 生成随机数
      let arrForElements = []
      for (let i = 0; i < arrForArr.length; i++) {
        arrForElements[i] = getRandomArrayElements(arrForArr[i], arrForNum[i])
      }

      // 输出到文本框
      for (let i = 0; i < arrForElements.length; i++) {
        document.getElementById("result").value = document.getElementById("result").value + arrForElements[i] + ",";
      }

      // 生成一组后换行
      document.getElementById("result").value = document.getElementById("result").value + "\n"
    }
  } else {
    alert("请输入生成数量(组)")
  }
}

/**
 * 随机获取数组元素
 * @param {*} arr 选择数组
 * @param {*} num 选择个数
 */
function getRandomArrayElements(arr, num) {
  let shuffled = arr.slice(0), i = arr.length, min = i - num, temp, index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

// 清空文本框
function empty() {
  document.getElementById("result").value = ""
}

// 复制到剪切板
function copy() {
  var copytest = document.getElementById("result");
  copytest.select();
  document.execCommand("copy");
  alert("已复制到剪切板");
}