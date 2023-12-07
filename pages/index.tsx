import { ReactElement, ReactNode } from "react";
import { Header } from "../components/header";
import { Game } from "../components/game-new";

export default function HomePages() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

interface HomePageLayoutProps {
  header: ReactElement;
  children: ReactNode;
}

function HomePageLayout({ header, children }: HomePageLayoutProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
