import MainNav from '../partials/MainNav';
import Footer from '../partials/Footer';

function Layout({children}) {
    return (
        <div>
            <MainNav/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default Layout;