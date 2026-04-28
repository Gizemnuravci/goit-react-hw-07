import { useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/contacts0ps";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.text}>
        
        <p>{name}</p>
        <p>{number}</p>

      </div>
      <button
      
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      
      >
        Delete
      </button>

    </div>
  );
};

export default Contact;