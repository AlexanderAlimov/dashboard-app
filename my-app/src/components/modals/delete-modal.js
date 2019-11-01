import { Modal, Button } from 'antd';

const { confirm } = Modal;

function showDeleteConfirm(...arg) {
	console.log(arg);
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      // arg[0].onClick;
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

export default showDeleteConfirm;