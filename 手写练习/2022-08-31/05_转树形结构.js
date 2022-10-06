const entries = [
    {
        "province": "浙江", "city": "杭州", "name": "西湖"
    }, {
        "province": "四川", "city": "成都", "name": "锦里"
    }, {
        "province": "四川", "city": "成都", "name": "方所"
    }, {
        "province": "四川", "city": "阿坝", "name": "九寨沟"
    }
];

const level = ["province", "city", "name"];

function transfrom(list, level) {
    const res = [];
    list.forEach(item => {
      pushItem(res, item, 0);
    });
  
    function pushItem(arr, obj, i) {
      const o = {
        value: obj[level[i]],
        children: [],
      };
      // 判断传入数组里是否有value等于要传入的项
      const hasItem = arr.find(el => el.value === obj[level[i]]);
      let nowArr;
      if(hasItem) {
        // 存在，则下一次遍历传入存在项的children
        nowArr = hasItem.children;
      }else{
        // 不存在 压入arr，下一次遍历传入此项的children
        arr.push(o);
        nowArr = o.children;
      }
      if(i === level.length - 1) delete o.children;
      i++;
      if(i < level.length) {
        // 递归进行层级的遍历
        pushItem(nowArr, obj, i);
      }
    }
  }
  
  transfrom(entries, level);