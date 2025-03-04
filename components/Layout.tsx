import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props:LayoutProps) {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main-container" role="main">
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
