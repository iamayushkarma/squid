import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { User, Mail, Save, Moon, Sun, Info } from "lucide-react";
import { getUser, setUser } from "@/utils/auth";
import type { User as UserType } from "@/types/user";
import ThemeToggler from "@/components/ui/ThemeToggler";

function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [profile, setProfile] = useState<UserType>({
    name: "",
    email: "",
    password: "",
  });
  const [saved, setSaved] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setProfile(savedUser);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile({
      ...profile,
      [id]: value,
    });
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [id]: "",
    });
    setSaved(false);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
    };

    if (!profile.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!profile.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(profile.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Save to localStorage using setUser
    setUser(profile);
    setSaved(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSaved(false), 3000);
  };

  const handleClearData = () => {
    if (confirm("Are you sure? This will clear your profile information.")) {
      setProfile({ name: "", email: "", password: "" });
      localStorage.removeItem("user");
      setSaved(false);
    }
  };

  return (
    <div className="h-full p-10 bg-background-secondary-light dark:bg-background overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary-light dark:text-text-primary">
          Settings
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary mt-2">
          Manage your profile and preferences
        </p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Success Message */}
        {saved && (
          <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-green-500 font-medium">
              Settings saved successfully!
            </p>
          </div>
        )}

        {/* Profile Section */}
        <div className="bg-background-light dark:bg-background-secondary p-8 rounded-2xl border border-border-light dark:border-white/5">
          <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary mb-6">
            Profile Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label
                className="block text-sm font-semibold text-text-primary-light dark:text-text-primary mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-text-secondary" />
                <input
                  type="text"
                  id="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full pl-11 pr-4 py-3 bg-background-secondary-light dark:bg-background border ${
                    errors.name
                      ? "border-red-500"
                      : "border-border-light dark:border-white/10"
                  } text-text-primary-light dark:text-text-primary rounded-lg focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-text-secondary`}
                />
              </div>
              {errors.name && (
                <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                className="block text-sm font-semibold text-text-primary-light dark:text-text-primary mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-text-secondary" />
                <input
                  type="email"
                  id="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full pl-11 pr-4 py-3 bg-background-secondary-light dark:bg-background border ${
                    errors.email
                      ? "border-red-500"
                      : "border-border-light dark:border-white/10"
                  } text-text-primary-light dark:text-text-primary rounded-lg focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-text-secondary`}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Info Note - No Box */}
            <div className="flex items-start gap-3 pt-2">
              <Info size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-text-secondary-light dark:text-text-secondary">
                These changes will update your profile information and persist
                across sessions.
              </p>
            </div>

            {/* Save Button - Enhanced Design */}
            <div className="pt-4 flex gap-3">
              <button
                type="submit"
                className="group relative flex items-center gap-2 px-8 py-3 hover:bg-blue-500 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all  active:scale-100"
              >
                <span className="relative z-10">Save Changes</span>
              </button>

              {/* Optional: Reset Button */}
              <button
                type="button"
                onClick={() => {
                  const savedUser = getUser();
                  if (savedUser) setProfile(savedUser);
                  setErrors({ name: "", email: "" });
                }}
                className="px-6 py-3 bg-background-secondary-light dark:bg-background text-text-primary-light dark:text-text-primary font-medium rounded-lg border border-border-light dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/5 transition-all"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Appearance Section */}
        <div className="bg-background-light dark:bg-background-secondary p-8 rounded-2xl border border-border-light dark:border-white/5">
          <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary mb-6">
            Appearance
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary mb-1">
                Enable Dark Mode?
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary">
                {theme === "dark"
                  ? "Dark mode is currently enabled"
                  : "Switch to dark mode for better nighttime viewing"}
              </p>
            </div>

            {/* Theme Toggle */}
            <ThemeToggler />
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-background-light dark:bg-background-secondary p-8 rounded-2xl border border-border-light dark:border-white/5">
          <h2 className="text-xl font-semibold text-red-500 mb-6">
            Danger Zone
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary mb-1">
                Clear Profile Data
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary">
                Remove your saved profile information
              </p>
            </div>

            <button
              onClick={handleClearData}
              className="px-5 py-2.5 bg-red-500/10 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all border border-red-500/50 hover:border-red-500"
            >
              Clear Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
