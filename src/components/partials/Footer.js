import ContactInfo from '../content/ContactInfo';
import classes from '../partials/Footer.module.css';

const c = classes;

function Footer(){
    return <footer className={c.footer}><ContactInfo/></footer>
}

export default Footer;