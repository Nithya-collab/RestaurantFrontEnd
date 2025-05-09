import React from "react";
import ReusableFormSection from "./components/ReusableFormSection";
const ContactForm = () => {
    return (
        <>
          <ReusableFormSection
                title="Contact Us"
                subtitle="We're here to help. Send us a message."
                buttonText="Send Message"
                fields={[
                    { name: "name", type: "text", placeholder: "Your Name", required: true },
                    { name: "email", type: "email", placeholder: "Your Email", required: true },
                    { name: "message", type: "textarea", placeholder: "Your Message", required: true }
                ]}
                onSubmit={(e) => {
                    e.preventDefault();
                    // Handle contact form submit logic
                }}
            />

        </>
    )
}

export default ContactForm;