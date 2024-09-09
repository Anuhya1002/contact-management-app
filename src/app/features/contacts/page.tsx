"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { addContact, deleteContact } from './contactsSlice';

const ContactsPage: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
    dispatch(addContact({ id: Date.now().toString(), name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Contacts</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleAddContact} className="bg-blue-500 text-white p-2">
          Add Contact
        </button>
      </div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className="flex justify-between items-center p-2 border-b">
            {contact.name} - {contact.email} - {contact.phone}
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              className="bg-red-500 text-white p-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
