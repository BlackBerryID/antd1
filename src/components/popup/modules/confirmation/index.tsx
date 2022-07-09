import { ButtonProps } from 'antd';
import { RED } from '../../../../app/constants';
import { useAppDispatch } from '../../../../hooks/store-hooks';
import { closePopup } from '../../../../store/slices/popup-slice';
import { deleteCard } from '../../../../store/slices/card-list-slice';

import './confirmation.scss';

export const Confirmation = () => {
  return (
    <>
      <div className="confirmation-popup_title">Are you sure want to delete “USA” Location? </div>
      <div className="confirmation-popup_text">
        Deleting a location might impact the users' configuration and leave information (e.g. the
        initial brought forward days).
      </div>
    </>
  );
};

export const confirmOkButtonProps: ButtonProps = {
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
};

export const confirmCancelButtonProps: ButtonProps = {
  style: { display: 'none' },
};

export const confirmTitle = 'Delete Location';
export const confirmWidth = 460;
export const confirmOkText = 'Yes, Delete';
