import { createBrowserRouter } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import LevelSelectPage from './pages/LevelSelectPage/LevelSelectPage';
import TestOnePage from './pages/TestOnePage/TestOnePage';
import TestOneResultPage from './pages/TestOnePage/TestOneResultPage';
import TestOneBeforeStart from './pages/TestOnePage/TestOneBeforeStart';
import TestTwoPage from './pages/TestTwoPage/TestTwoPage';
import TestTwoResultPage from './pages/TestTwoPage/TestTwoResultPage';
import TestTwoBeforeStart from './pages/TestTwoPage/TestTwoBeforeStart';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root /> /* 기본적으로 Root 컴포넌트를 render 한다 */,
    children: [
      {
        path: '/',
        element: <StartPage /> /* Root의 Outlet이 StartPage 컴포넌트로 대체 */,
        // errorElement: (
        //   <ErrorComponent />
        // ) /* Home 컴포넌트에서 에러 발생시 ErrorComponent를 render 한다 (여기서 다른 컴포넌트로 이동 가능) */,
      },
      // {
      //   path: 'instruction',
      //   element: (
      //     <InstructionPage />
      //   ) /* Root의 Outlet이 StartPage 컴포넌트로 대체 */,
      // },
      {
        path: 'level-select',
        element: (
          <LevelSelectPage />
        ) /* Root의 Outlet이 LevelSelectPage 컴포넌트로 대체 */,
      },
      {
        path: 'test-one-before-start',
        element: (
          <TestOneBeforeStart />
        ) /* Root의 Outlet이 LevelSelectPage 컴포넌트로 대체 */,
      },
      {
        path: 'test-one',
        element: (
          <TestOnePage />
        ) /* Root의 Outlet이 LevelSelectPage 컴포넌트로 대체 */,
      },
      {
        path: 'test-one-result',
        element: (
          <TestOneResultPage />
        ) /* Root의 Outlet이 LevelSelectPage 컴포넌트로 대체 */,
      },
      {
        path: 'test-two-before-start',
        element: (
          <TestTwoBeforeStart />
        ) /* Root의 Outlet이 LevelSelectPage 컴포넌트로 대체 */,
      },
      {
        path: 'test-two',
        element: (
          <TestTwoPage />
        ) /* Root의 Outlet이 LevelSelectPage 컴포넌트로 대체 */,
      },
      {
        path: 'test-two-result',
        element: (
          <TestTwoResultPage />
        ) /* Root의 Outlet이 LevelSelectPage 컴포넌트로 대체 */,
      },
    ],
    // errorElement: (
    //   <NotFound />
    // ) /* URL에 맞는 컴포넌트의 위치를 찾지 못할 때 NotFound 컴포넌트를 render 한다 */,
  },
]);

export default router;
