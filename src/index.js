import "./styles.css";

function layout() {
  for (var num = 10; num > 0; num--) {
    var elm = document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id", num);
    elm.setAttribute("class", "circle");
    var function_name = "remove(" + num + ")";
    elm.setAttribute("onclick", function_name);
    document.getElementById("main").appendChild(elm);

    var left_pos = 10;
    var top_pos = 100;

    left_pos = left_pos + Math.floor(Math.random() * 400);
    top_pos = top_pos + Math.floor(Math.random() * 600);

    document.getElementById(num).style.left = "" + left_pos + "px";
    document.getElementById(num).style.top = "" + top_pos + "px";

    // 丸の大きさをランダムにする
    var circle_size = 50 + Math.floor(Math.random() * 100);
    document.getElementById(num).style.borderRadius = "" + circle_size + "px";
    document.getElementById(num).style.height = "" + circle_size + "px";
    document.getElementById(num).style.width = "" + circle_size + "px";

    // 色をランダムにする
    var color_code = Math.floor(Math.random() * 16 ** 6).toString(16); // 16進数6桁のカラーコードを生成
    document.getElementById(num).style.backgroundColor = "#" + color_code;
  }
}

var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
  // 全てのボタンが消されたらボタンを再配置
  if (next === 11) {
    next = 1;
    layout();
  }
};

layout();
