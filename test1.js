import $ from "jquery";
import "./test1.css";

const $result = $(".result");
const $add2 = $(".add2");
const $sub2 = $(".sub2");
const $mul2 = $(".mul2");
const $div2 = $(".div2");

const n = localStorage.getItem("n");
$result.text(n || 100);

$add2.on("click", () => {
  let n = parseInt($result.text());
  n += 2;
  localStorage.setItem("n", n);
  $result.text(n);
})
$sub2.on("click", () => {
  let n = parseInt($result.text());
  n -= 2;
  localStorage.setItem("n", n);
  $result.text(n);
})
$mul2.on("click", () => {
  let n = parseInt($result.text());
  n *= 2;
  localStorage.setItem("n", n);
  $result.text(n);
})
$div2.on("click", () => {
  let n = parseInt($result.text());
  n /= 2;
  localStorage.setItem("n", n);
  $result.text(n);
})