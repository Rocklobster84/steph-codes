"use client";

import { useState } from 'react';
import { FormCard } from "./form-elements/FormCard"
import { FormLabel, TextInput } from "./form-elements/FormLabel"
import { TextArea } from "./form-elements/TextArea"
import { FieldRow } from './form-elements/FieldRow';

const ContactForm = () => {

const [first, setFirst] = useState("");
const [firstError] = useState("");  
const [last, setLast] = useState("");
const [lastError] = useState("");
const [email, setEmail] = useState("");
const [emailError] = useState("");
const [message, setMessage] = useState("");
const [messageError] = useState("");

  return (

    <div className="flex justify-center mt-10">
      <FormCard
        title="Contact Me"
        description="I usually reply within 24 hours."
      >
      <FieldRow>
        <div className="flex flex-col w-full">
        <FormLabel htmlFor="first">First Name</FormLabel>
        <TextInput
          id="first"
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          required
          error={firstError}
        />
        </div>
        <div className="flex flex-col w-full">
        <FormLabel htmlFor="last">Last Name</FormLabel>
        <TextInput
          id="last"
          type="text"
          value={last}
          onChange={(e) => setLast(e.target.value)}
          required
          error={lastError}
        />
        </div>
      </FieldRow>
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <TextInput
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        error={emailError}
      />
      <FormLabel htmlFor="Comments">Comments</FormLabel>
      <TextArea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        required
        error={messageError}
      />
      </FormCard>
    </div>

  )
}

export default ContactForm