document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < 20; i++) {
    var img = document.createElement("img");
    img.src = `logo${i}.png`;
    img.classList.add("w-24", "h-24", "mx-8");

    document.querySelector("#partner").append(img);
  }
});

function handleClick() {
  let productHTML = "";
  for (var i = 0; i < 4; i++) {
    productHTML += `
          <div class="card bg-base-100 w-auto shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">
                Shoes!
                <div class="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline">Fashion</div>
                <div class="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        `;
  }
  document.querySelector("#products").innerHTML += productHTML;
}
