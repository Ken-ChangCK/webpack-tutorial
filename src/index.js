import "./index.css"

const btn = document.getElementById("btn")
const num = document.getElementById("num")

btn.addEventListener("click", () => {
  let a = parseInt(num.innerText, 10)
  num.innerText = a + 1
})

class Test {
  #a = 1
}

const tt = new Test()

console.log("source-map")
