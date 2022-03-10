import $ from "jquery";
import "./test4.css"

const $circle = $(".circle")

$circle.on("mouseenter", () => {
  $circle.addClass("active")
}).on("mouseleave", () => {
  $circle.removeClass("active")
})