import { classNames } from '../../utils/classNames';
import styles from './button.module.scss';

export const CustomButton = ({
  children, className, type = 'button', ...rest
}) => <button type={type} className={classNames(styles.btn, className)} {...rest}>{children}</button>;
