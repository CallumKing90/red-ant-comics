import React from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { ComicsList } from "../components/ComicsList/ComicsList";

export default function App(): JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MainLayout>
          <ComicsList />
        </MainLayout>
      </Provider>
    </React.StrictMode>
  );
}
