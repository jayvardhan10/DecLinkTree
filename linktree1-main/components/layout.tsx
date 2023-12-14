import Nav from "./navbar";

interface LayoutProps {
    // eslint-disable-next-line no-undef
    children: React.ReactNode;
}

export default function Layout({ children } :LayoutProps) {
    return (
      <>
        <Nav />
        <main>{children}</main>
      </>
    )
  }