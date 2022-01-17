// 在 define 中引用 aaa 保证 aaa 先被引入，然后再去执行

define(["aaa"], function (aaa) {
    console.log("--------")
    // require(["foo"], function(foo) {
    //   console.log("bar:", foo)
    // })

    console.log("bbb:", aaa)
})