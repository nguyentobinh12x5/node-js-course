const deleteProduct = (btn) => {
  const productId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  const productELement = btn.closest("article");
  fetch("/admin/product/" + productId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      console.log(result);
      //Hiển thị trên trình duyệt
      // Sau khi trả về kết quả này sẽ chuyển sang thực hiện việc xóa dữ liệu trong admin control
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productELement.parentNode.removeChild(productELement);
    })
    .catch((err) => {
      console.log(err);
    });
};
