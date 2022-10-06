const listData = [
    {
      id:"p1",
      title: '广东',
    },
    {
      id:"p1-1",
      pid: 'p1',
      title: '广州',
    },
    {
      id:"p2",
      title:"四川",
    },
    {
      id:"p2-1",
      pid: 'p2',
      title:"成都",
    },
    {
      id:"p2-2",
      pid: 'p2',
      title:"德阳"
    },
    {
      id:"p2-3",
      pid: 'p2',
      title:"绵阳"
    },
    {
      id:"p2-1-1",
      pid: 'p2-1',
      title:"高新区",
    }
  ]

//   双重 for 循环
function foo(list) {
    list.forEach(child => {
        const pid = child.pid;
        if(pid) {
            list.forEach(parent => {
                if(parent.id === pid) {
                    parent.children =  parent.children || [];
                    parent.children.push(child)
                }
            }) 
        }
    })

   return list.filter(item => !item.pid)
}

// function list2tree(list) {
//     const [map, treeData] = [{}, []];
//     // 建立 id 映射
//     for(let i = 0; i < list.length; i++) {
//         map[list[i].id] = i;
//         list[i].children = [];
//     }
//     for(const node of list) {
//         if(node.pid && list[map[node.pid]]) {
//             list[map[node.pid]].children.push(node)
//         } else {
//             treeData.push(node)
//         }
//     }
//     return treeData
// }


function list2tree(listData) {
    const [map, list] = [{},  []];
    // 建立下标映射
    for(let i = 0; i < listData.length; i++) {
      map[listData[i].id] = i;
      listData[i].children = [];
    }
    for(const node of listData) {
      if(node.pid && listData[map[node.pid]]) {
        listData[map[node.pid]].children.push(node);
      } else {
        list.push(node);
      }
    }
    return list
}
console.log(list2tree(listData))

const treeData = list2tree(listData);


function tree2list(treeData) {
  const res = [];
  (function toogle(treeData) {
    for(const node of treeData) {
      if(node.children.length === 0) {
        res.push(node)
      } else {
        res.push(node);
        toogle(node.children);
      }
      delete node.children;
    }
  })(treeData)
  return res;
}

console.log(tree2list(treeData));