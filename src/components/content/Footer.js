import ContactInfo from './ContactInfo';
import classes from './Footer.module.css';
const c = classes;

function Footer(){
    return <footer className={c.footer}><ContactInfo/></footer>
}

export default Footer;