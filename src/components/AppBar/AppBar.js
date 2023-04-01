import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import css from './AppBar.module.css';
import { deleteCompleted } from 'redux/tasksSlice';

export const AppBar = () => {
  const dispatch = useDispatch();

  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Tasks Delete</h2>
        <Button
          onClick={() => {
            dispatch(deleteCompleted());
          }}
        >
          Delete Completed
        </Button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
