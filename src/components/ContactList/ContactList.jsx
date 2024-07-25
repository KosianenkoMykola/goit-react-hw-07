import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css"
import { selectVisibleContacts } from '../../redux/contactsSlice';

export default function ContactList() {

  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => 
        <li className={css.item} key={contact.id}> 
          <Contact data={contact} />
        </li> )}
    </ul>
    </div>
  );
}