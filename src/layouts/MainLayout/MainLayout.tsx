import React from "react";
import { Header } from "../../components/Header/Header";
import { FavouritesPanel } from "../../components/FavouritesPanel/FavouritesPanel";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function MainLayout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main className="site-content">{children}</main>
      <FavouritesPanel />
    </>
  );
}
