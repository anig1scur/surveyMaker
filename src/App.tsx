import './index.scss';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from './pages/Intro';
import Result from './pages/Result';
import Survey from './pages/survey';
import Admin from './pages/admin';
import { SurveyMock } from './common/mock';
import { StoredProvider } from './context';

export type Props = {};
const App: FC<Props> = () => (
  <div>
    <div>
      <Routes>
        <Route
          path='/'
          element={<Content />}
        />
        <Route
          path='app'
          element={
            <StoredProvider>
              <Survey survey={SurveyMock} />
            </StoredProvider>
          }>
          <Route
            path=':id'
            element={<Survey survey={SurveyMock} />}
          />
          <Route
            path='*'
            element={<Survey survey={SurveyMock} />}
          />
        </Route>
        <Route
          path='/result'
          element={<Result />}
        />
          <Route
          path='/admin/*'
          element={<Admin />}
        />
      </Routes>
    </div>
  </div>
);

export default App;
