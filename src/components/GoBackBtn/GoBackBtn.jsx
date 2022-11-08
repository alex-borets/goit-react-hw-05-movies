import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import css from './GoBackBtn.module.css';

const GoBackBtn = ({ backLinkHref }) => {
  return (
    <div className={css.container}>
      <Link to={backLinkHref} className={css.link}>
        <BsArrowLeftShort size={20} />
        Go back
      </Link>
    </div>
  );
};

export default GoBackBtn;
