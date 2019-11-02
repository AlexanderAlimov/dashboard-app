import { Modal } from "antd";

const { confirm } = Modal;

function deleteModal(...arg) {
  const onclick = arg[0];
  const name = arg[1];
  const title =
    typeof arg[1] === "string"
      ? `Are you sure delete ${name}?`
      : "Do you want delete this category ?";
  const description =
    typeof arg[1] === "string"
      ? ""
      : "All products from this category will go to without category";
  console.log(arg);
  confirm({
    title: title,
    content: description,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onclick();
    },
    onCancel() {
      console.log("Cancel");
    }
  });
}

export default deleteModal;
