import { useState } from "react";
import type { ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps {
  label: string;
  id: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  showPasswordToggle?: boolean;
}

function AuthInput({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  showPasswordToggle = false,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div>
      <label
        className="block text-sm font-semibold text-text-primary mb-1.5"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full px-4 py-2.5 bg-background border border-background text-text-primary rounded-[5px] focus:ring-2 focus:ring-text-secondary focus:border-text-secondary outline-none transition-all placeholder:text-text-secondary"
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          type={inputType}
        />
        {showPasswordToggle && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default AuthInput;
