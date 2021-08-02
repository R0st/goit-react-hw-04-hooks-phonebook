import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import style from './ContactForm.module.css'
import PropTypes from 'prop-types';

class ContactForm extends Component {   

     static propTypes = {
        name: PropTypes.string,
        number: PropTypes.number,
    };
      
    state = {
        number: "",
        name: "",
    }

    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.name, this.state.number)
        this.reset();
    };

    reset = () => {
        this.setState({name: "", number: ""})
    }
    render() {
        return (
            <form className={style.ContactForm} onSubmit={this.handleSubmit}>
                <label className={style.ContactLabel} htmlFor={this.nameInputId}>
                    Имя
                    <input
                        className={style.ContactInput}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."required
                        // required
                        id={this.nameInputId}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor={this.numberInputId} className={style.ContactLabel}>
                    Номер
                    <input
                        className={style.ContactInput}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                        id={this.numberInputId}/>
                </label>

                <button 
                    className={style.ContactBtn}
                    type="submit">Add contact</button>
            </form>
        );
    }   
}

export default ContactForm;