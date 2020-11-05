import { notification } from 'antd';

export const SuccessNotification = (response: any) => {
  notification.success({
    message: response.message,
  });
};

export const ErrorNotification = (error: any) => {
  notification.error({
    message: error.data.message,
  });
};
