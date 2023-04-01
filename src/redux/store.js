import { configureStore } from '@reduxjs/toolkit';

import { filtersReducer } from './filterSlice';
import { tasksReducer } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
