import $ from "jquery";
import "./test2.css"

const $box1Text1 = $(".box1Text1")
const $box1Text2 = $(".box1Text2")
const $box2Text1 = $(".box2Text1")
const $box2Text2 = $(".box2Text2")

$box1Text1.on("click", () => {
  $box1Text1.addClass("color").siblings().removeClass("color")
  $box2Text1.addClass("popup").siblings().removeClass("popup")
})
$box1Text2.on("click", () => {
  $box1Text2.addClass("color").siblings().removeClass("color")
  $box2Text2.addClass("popup").siblings().removeClass("popup")
})