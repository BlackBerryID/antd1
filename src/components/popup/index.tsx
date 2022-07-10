import Icon from '@ant-design/icons';
import { Modal } from 'antd';
import { useAppSelector, useAppDispatch } from '../../hooks/store-hooks';
import { closeIcon } from '../../icons/close';
import { deleteCard } from '../../store/slices/card-list-slice';
import { closePopup } from '../../store/slices/popup-slice';
import {
  Confirmation,
  confirmOkButtonProps,
  confirmCancelButtonProps,
  confirmTitle,
  confirmWidth,
  confirmOkText,
} from './modules/confirmation';
import {
  Create,
  createTitle,
  createWidth,
  createOkButtonProps,
  createOkText,
  createCancelButtonProps,
} from './modules/create';

import './popup.scss';

export const Popup = () => {
  const { isOpen, mode } = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  let title, width, okButtonProps, okText, body, onOk: () => void, cancelButtonProps;

  switch (mode) {
    case 'confirm':
      title = confirmTitle;
      width = confirmWidth;
      okButtonProps = confirmOkButtonProps;
      okText = confirmOkText;
      body = <Confirmation />;
      onOk = () => {
        dispatch(deleteCard());
        dispatch(closePopup());
      };
      cancelButtonProps = confirmCancelButtonProps;
      break;

    case 'create':
      title = createTitle;
      width = createWidth;
      okButtonProps = createOkButtonProps;
      okText = createOkText;
      body = <Create />;
      onOk = () => {
        dispatch(closePopup());
      };
      cancelButtonProps = createCancelButtonProps;
      break;

    default:
      break;
  }

  return (
    <Modal
      className="confirmation-popup"
      title={title}
      visible={isOpen}
      closeIcon={<Icon component={closeIcon} />}
      width={width}
      cancelButtonProps={cancelButtonProps}
      okButtonProps={okButtonProps}
      okText={okText}
      onCancel={() => dispatch(closePopup())}
      onOk={() => onOk()}
    >
      {body}
    </Modal>
  );
};
