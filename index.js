/**
 * @author [author]
 * @email [example@mail.com]
 * @create date 2017-12-19 11:08:47
 * @modify date 2017-12-19 11:08:47
 * @desc [description]
*/
let $img = $('.img')
let count = $img.length
console.log(count)
let isPlaying = new Array(4)
isPlaying = [false, false, false, false]

$img.on('click',function(){
  let index = $img.index(this)
  console.log(index)
  let playState = isPlaying[index]
  // console.log(isPlaying)
  if(!playState) {
    $(this).addClass('playing')
    isPlaying[index] = true
    console.log(isPlaying)
  } else {
    let siteImg = $(this).css('transform')  //获取当前元素的动画改变，transform的值
    // let siteWp = $('.wrap').css('transform')
    let siteWp = $(this).parents('.wrap').css('transform')
    $(this).parents('.wrap').css('transform',siteWp === 'none' ? siteImg : siteImg.concat('',siteWp))  
  //由于父元素没有动画，所以每次赋值的时候，需要将上次父元素的状态加上
    $(this).removeClass('playing')
    isPlaying[index] = false
    console.log(isPlaying)
  }
})

// function running(){
//   $img.addClass('playing')
//   isPlaying = true
// }

// function paused(){
//   let siteImg = $img.css('transform')  //获取当前元素的动画改变，transform的值
//   let siteWp = $('.wrap').css('transform')
//   $('.wrap').css('transform',siteWp === 'none' ? siteImg : siteImg.concat('',siteWp))  
// //由于父元素没有动画，所以每次赋值的时候，需要将上次父元素的状态加上
//   $img.removeClass('playing')
//   isPlaying = false
// }