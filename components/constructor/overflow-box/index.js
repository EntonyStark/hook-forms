import { constructorBlockHeight } from '../../../constants';

import { classNames } from '../../../utils/classNames';

export const OverflowBox = ({ children, className }) => (
  <div
    className={classNames('overflow-auto', className)}
    style={{ maxHeight: constructorBlockHeight, minHeight: constructorBlockHeight }}
  >
    {children}
  </div>
);
