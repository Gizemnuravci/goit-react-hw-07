import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../Redux/contacts0ps";
import { selectLoading, selectError } from "../../Redux/contactsSlice";
import ContactFrom from "../ContactFrom/ContactFrom";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactFrom />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      <ContactList />
    </div>
  );
};

export default App;
