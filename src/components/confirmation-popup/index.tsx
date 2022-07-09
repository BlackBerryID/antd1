import Icon from '@ant-design/icons';
import { Modal } from 'antd';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { closeIcon } from '../../icons/close';
import { RED } from '../../app/constants';
import { closePopup } from '../../store/slices/popup-slice';
import { deleteCard } from '../../store/slices/card-list-slice';

import './confirmation-popup.scss';

export const ConfirmationPopup = () => {
  const { isOpen } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  return (
    <Modal
      title="Delete Location"
      className="confirmation-popup "
      visible={isOpen}
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
      onCancel={() => dispatch(closePopup())}
      onOk={() => {
        dispatch(deleteCard());
        dispatch(closePopup());
      }}
    >
      <div className="confirmation-popup_title">Are you sure want to delete “USA” Location? </div>
      <div className="confirmation-popup_text">
        Deleting a location might impact the users' configuration and leave information (e.g. the
        initial brought forward days).
      </div>
    </Modal>
  );
};
