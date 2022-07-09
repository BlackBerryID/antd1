import Icon from '@ant-design/icons';
import { Modal } from 'antd';
import { useAppSelector } from '../../hooks/store-hooks';
import { closeIcon } from '../../icons/close';
import { RED } from '../../app/constants';

import './confirmation-popup.scss';

export const ConfirmationPopup = () => {
  return (
    <Modal
      title="Delete Location"
      className="confirmation-popup "
      visible={true}
      // footer={null}
      closeIcon={<Icon component={closeIcon} />}
      width={460}
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{
        style: {
          position: 'relative',
          right: '24px',
          bottom: '14px',
          backgroundColor: RED,
          border: 'none',
          height: '40px',
          width: '119px',
          borderRadius: '6px',
          fontSize: '13px',
          fontWeight: '600',
          lineHeight: '16px',
        },
      }}
      okText="Yes, Delete"
    >
      <div className="confirmation-popup_title">Are you sure want to delete “USA” Location? </div>
      <div className="confirmation-popup_text">
        Deleting a location might impact the users' configuration and leave information (e.g. the
        initial brought forward days).
      </div>
    </Modal>
  );
};
