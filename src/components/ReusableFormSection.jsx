import React from "react";
import Button from "./Button";

const ReusableFormSection = ({
    title = "Contact Us",
    subtitle = "For reservations or inquiries, please complete the form below.",
    fields = [],
    buttonText = "Submit",
    onSubmit,
}) => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-2xl max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-500 mb-6">{subtitle}</p>
            <form onSubmit={onSubmit} className="space-y-4">
                {fields.map((field, index) => {
                    if (field.type === "textarea") {
                        return (
                            <textarea
                                key={index}
                                name={field.name}
                                placeholder={field.placeholder}
                                rows={field.rows || 4}
                                required={field.required}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                            />
                        );
                    } else {
                        return (
                            <input
                                key={index}
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                required={field.required}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                            />
                        );
                    }
                })}
                <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105"
                >
                    {buttonText}
                </Button>
            </form>
        </div>
    );
};

export default ReusableFormSection;
