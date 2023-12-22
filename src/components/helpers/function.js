import { notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
export const openNotification = (title, description) => {
    notification.open({
        message: title,
        description: description,
        duration: 3,
        icon: <ExclamationCircleOutlined style={{ color: '#f5222d' }} />,
        style: {
            border: '2px solid #f5222d',
            borderRadius: '8px',
            background: '#fff7f8',
        },
    });
};
export const openNotificationWithIcon = (type, title, description) => {
    notification[type]({
        message: title,
        description:
            description,
        duration: 3
    });
};
export const validateAmount = (inputAmount) => {
    // Kiểm tra xem inputAmount có phải là số không
    if (isNaN(inputAmount)) {
      console.error('Input amount is not a valid number.');
      return false;
    }
  
    // Chuyển đổi inputAmount từ chuỗi sang số
    const amount = parseFloat(inputAmount);
  
    // Kiểm tra xem inputAmount có lớn hơn 0 không
    if (amount <= 0) {
      console.error('Input amount must be greater than 0.');
      return false;
    }
  
    // Kiểm tra xem inputAmount có là null hay không
    if (inputAmount === null) {
      console.error('Input amount cannot be null.');
      return false;
    }
  
    // Nếu tất cả các điều kiện đều đúng, trả về true
    return true;
  };