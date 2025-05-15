import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";

type FormInputProps = {
    label: string;
    type?: string;
    placeholder: string;
    error?: string;
    setChange: (_value: string) => void;
};

export const FormInput = ({
    label,
    type,
    placeholder,
    error,
    setChange,
}: FormInputProps) => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChange(event.target.value);
    };

    return (
        <div className="flex flex-col gap-2 pb-6">
            <p>{label}</p>
            <Input onChange={handleOnChange} placeholder={placeholder} type={type} />
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
};
