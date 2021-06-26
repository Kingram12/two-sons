import classes from './ContactInfo.module.css';

const c = classes;

function ContactInfo() {
    return (
        <div className={c.contact}><p className={c.contact}>123 Street, Defiance, Ohio 12345</p>
        <p className={c.contact}>Phone Number: 123-456-7890</p></div>
    )
}

export default ContactInfo;