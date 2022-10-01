import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apartmentsMinskReducer } from './apartments/apartmentsMinsk.slice';
import { filterMainReducer } from './filterMain/filterMain.slice';
import { filterMinskReducer } from './filterMinsk/filterMinsk.slice';
import { newsReducer } from './news/news.slice';
import { userReducer } from './user/user.slice';

const rootReducer = combineReducers({
  newsReducer,
  userReducer,
  filterMainReducer,
  filterMinskReducer,
  apartmentsMinskReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, //при загрузке массива новостей была проблема с тем, что данные с датой передавались с ошибкой. возможно, при загрузке с бэка этой проблемы не будет
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
