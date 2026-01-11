const inputSomething = document.querySelector("#input-something");
const inputAgain = document.querySelector("#input-again");

const btnHello = document.querySelector("#btn-hello");
const btnWorld = document.querySelector("#btn-world");

const lsHistory = document.querySelector("#input-history");
const alertCtrl = document.querySelector("ion-alert-controller");

const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

btnHello.addEventListener("click", () => {
  const input = inputSomething.value;

  if (input === "0") return;

  const newItem = document.createElement("ion-item");
  newItem.textContent = input;
  lsHistory.appendChild(newItem);

  clear();
});

btnWorld.addEventListener("click", () => {
  const input = inputSomething.value;

  // TẠO VÀ HIỂN THỊ ALERT
  alertCtrl
    .create({
      header: "Invalid Inputs", // Tiêu đề
      message: "Please enter a valid reason and amount!", // Nội dung
      buttons: ["Okay"], // Nút bấm (Mặc định sẽ đóng alert)
    })
    .then((alertElement) => {
      // Hiển thị alert lên màn hình sau khi đã được tạo
      alertElement.present();
    });

  return; // Dừng hàm
  // ... (Logic xử lý khi dữ liệu hợp lệ)
});
