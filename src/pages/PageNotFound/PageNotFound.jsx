import css from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.message}>Page not found!</div>
      </div>
    </>
  );
};

export default PageNotFound;
