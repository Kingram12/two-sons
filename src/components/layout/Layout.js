import MainNav from '../content/MainNav'
import Footer from '../content/Footer'

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