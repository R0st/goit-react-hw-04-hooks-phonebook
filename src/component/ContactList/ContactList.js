import React from 'react'
import style from './ContactList.module.css'
import PropTypes from 'prop-types';


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={style.ContactListUl}>
        {contacts.map(({ id, name, number }) => (
            <li className={style.ContactListLi} key={id}>
                <p>{name}: 
                    <span>{number}</span>
                </p> 
                <button 
                    className={style.ContactBtnDel}
                    onClick={()=>onDeleteContact(id)}>Delete</button>  
            </li>
        ))}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;