import "modern-normalize";
import css from "../App/App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { TiContacts } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAll } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";


export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook
        <TiContacts />
      </h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading message</p>}
      {isError && <p>Error message</p> }
      <ContactList />
    </div>
  );
}
