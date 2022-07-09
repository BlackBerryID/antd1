import Icon from '@ant-design/icons';
import { Modal } from 'antd';
import { useAppSelector } from '../../hooks/store-hooks';
import { closeIcon } from '../../icons/close';
import './confirmation-popup.scss';

export const ConfirmationPopup = () => {
  return (
    <Modal
      title="Delete Location"
      className="confirmation-popup "
      visible={true}
      footer={null}
      closeIcon={<Icon component={closeIcon} />}
      width={460}
    ></Modal>
  );
};
