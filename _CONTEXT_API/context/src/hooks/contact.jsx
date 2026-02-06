import {useContext} from "react";
import {ContactContext} from "./contactcontext";

const Contact = () => {
    const {contacts} = useContext(ContactContext)
    return (
        <div className="home">
            <h1>Contacts</h1>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name} - {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact