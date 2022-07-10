import Icon from '@ant-design/icons';
import { Tooltip } from 'antd';
import { infoIcon } from '../../../../icons/info';

type InfoTooltipProps = {
  title: string;
};

export const InfoTooltip = ({ title }: InfoTooltipProps) => {
  return (
    <Tooltip
      className="popup-input_leave-quota__tooltip"
      placement="topLeft"
      title={title}
      overlayInnerStyle={{
        fontSize: '11px',
        lineHeight: '18px',
        borderRadius: '4px',
        background: 'rgba(30, 33, 42, 0.8)',
        mixBlendMode: 'normal',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.230695)',
      }}
    >
      <Icon className="popup-input_leave-quota__icon" component={infoIcon} />
    </Tooltip>
  );
};
