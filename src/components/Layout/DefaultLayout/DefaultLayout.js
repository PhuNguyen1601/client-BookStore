import Header from '~/components/Layout/components/Header/Header';
import Sidebar from '~/components/Layout/components/Sidebar/Sidebar';
import Footer from '~/components/Layout/components/Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container"></div>
            <Sidebar />
            <div className="content">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
