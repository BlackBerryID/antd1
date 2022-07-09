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
    >
      <div className="confirmation-popup_title">Are you sure want to delete “USA” Location? </div>
      <div className="confirmation-popup_text">
        Deleting a location might impact the users' configuration and leave information (e.g. the
        initial brought forward days).
      </div>
    </Modal>
  );
};
