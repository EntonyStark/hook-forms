import { classNames } from '../../utils/classNames';
import styles from './text-with-lines.module.scss';

export const TextWithLines = ({ text, tag, className }) => {
  const renderTextComponent = () => {
    switch (tag) {
      case 'p': {
        return (
          <>
            <p className={classNames('text-center', styles.lines, className)}>{text}</p>
          </>
        );
      }
      default: {
        return <p className={classNames('text-center', styles.lines, className)}>{text}</p>;
      }
    }
  };

  return renderTextComponent();
};

TextWithLines.defaultProps = {
  text: '',
  tag: 'p',
  className: 'lead',
};
