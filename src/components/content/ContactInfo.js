import classes from './ContactInfo.module.css';

const c = classes;

function ContactInfo() {
    return (
        <div className={c.contactInfo}>
        <p>Two Sons</p>
        <p>123 Street, Defiance, Ohio 12345</p>
        <p>Phone Number: 123-456-7890</p></div>
    )
}

export default ContactInfo;