import { Omit, tuple } from '../_util/type';
import { SizeType } from '../config-provider/SizeContext';

const ButtonTypes = tuple('default', 'primary', 'info', 'warning', 'danger');
export type ButtonType = typeof ButtonTypes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  /**
   * 按钮类型
   * 可选值为 default primary info warning danger
   * @default 'default'
   */
  type?: ButtonType;
  /**
   * 尺寸，可选值为 normal large small mini
   * @default 'normal'
   */
  size?: SizeType;

  /**
   * 样式类名
   */
  className?: string;

  /**
   * 是否加载中
   */
  loading?: boolean | { delay?: number };
}

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps>;
