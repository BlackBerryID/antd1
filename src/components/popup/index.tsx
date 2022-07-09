import Icon from '@ant-design/icons';
import { Modal } from 'antd';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { closeIcon } from '../../icons/close';
import { closePopup } from '../../store/slices/popup-slice';
import {
  Confirmation,
  confirmOkButtonProps,
  confirmCancelButtonProps,
  confirmTitle,
  confirmWidth,
  confirmOkText,
  confirmOnOk,
} from './modules/confirmation.tsx';

import './popup.scss';

export const Popup = () => {
  const { isOpen } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  return (
    <Modal
      className="confirmation-popup"
      title={confirmTitle}
      visible={isOpen}
      closeIcon={<Icon component={closeIcon} />}
      width={confirmWidth}
      cancelButtonProps={confirmCancelButtonProps}
      okButtonProps={confirmOkButtonProps}
      okText={confirmOkText}
      onCancel={() => dispatch(closePopup())}
      onOk={() => confirmOnOk()}
    >
      <Confirmation />
    </Modal>
  );
};
