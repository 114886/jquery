// const api = jQuery('.test') // 不返回元素们，返回api对象
// api.addClass('red').addClass('blue') // 链式操作 this就是api

//总结之后：
// jQuery('.test')
//   .addClass('red')
//   .addClass('blue')

// jQuery('.test')
//   .find('.child')
//   .addClass('red')
//   .addClass('blue')

// $('.test')
//   .find('.child')
//   .addClass('red')
//   .addClass('blue')
//   .end()
//   .addClass('sss')

$('.child').each((x)=>{console.log(x);})