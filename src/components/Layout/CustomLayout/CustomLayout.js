import Header from '~/components/Layout/components/Header/Header';
import Footer from '~/components/Layout/components/Footer/Footer';

function CustomLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container"></div>
            <div className="content">{children}</div>
            <Footer />
        </>
    );
}

export default CustomLayout;
