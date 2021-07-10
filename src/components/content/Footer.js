import ContactInfo from './ContactInfo';
import classes from './Footer.module.css';
import UserNav from "./UserNav";
import UserProfile from "./UserProfile"
import { useAuth } from '../contexts/AuthContext';

const c = classes;

export default function Footer(){
    const { currentUser } = useAuth();
    if(!currentUser) {
        return (<footer className={c.footer}><UserNav/><ContactInfo/></footer> )
    } else {
       return (
      <div>
           <footer className={c.footer}><UserProfile/><ContactInfo/></footer> 
      </div>
       )
    }
}