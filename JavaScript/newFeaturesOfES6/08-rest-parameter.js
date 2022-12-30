function foo(){
  console.log(arguments)
}
foo(1, 2, 3)
// 输出：[Arguments] { '0': 1, '1': 2, '2': 3 }

function foo1(...rest) {
  console.log(rest)
}
foo1(1, 2, 3, 4)
// 输出：[ 1, 2, 3, 4 ]

// 因为...rest是全部的参数，所以只能放在最后，且只能使用一次
function foo2(first, ...rest) {
  console.log(first, rest)
}
foo2(1, 2, 3, 4)
// 输出：1 [ 2, 3, 4 ]
