import $ from "jquery";
import "./test3.css"

const $movBox = $(".movBox")

$movBox.on("click", () => {
  $movBox.toggleClass("move")
})