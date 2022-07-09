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
} from './modules/confirmation';
import { Create, createTitle, createWidth } from './modules/create';

import './popup.scss';

export const Popup = () => {
  const { isOpen, mode } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  let title, width;

  switch (mode) {
    case 'confirm':
      title = confirmTitle;
      width = confirmWidth;
      break;

    case 'create':
      title = createTitle;
      width = createWidth;
      break;

    default:
      break;
  }

  return (
    <Modal
      className="confirmation-popup"
      title={title}
      // visible={isOpen}
      visible={true}
      closeIcon={<Icon component={closeIcon} />}
      width={width}
      cancelButtonProps={confirmCancelButtonProps}
      okButtonProps={confirmOkButtonProps}
      okText={confirmOkText}
      onCancel={() => dispatch(closePopup())}
      onOk={() => confirmOnOk()}
    >
      {/* <Confirmation /> */}
      <Create />
    </Modal>
  );
};
