import MainNav from './MainNav';
import Footer from './Footer';


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