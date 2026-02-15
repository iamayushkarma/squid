import { useState, useEffect } from "react";
import AuthInput from "@/components/ui/AuthInput";
import Button from "@/components/ui/Button";

interface Settings {
  name: string;
  email: string;
  theme: "light" | "dark";
}

export default function Settings() {
  const [settings, setSettings] = useState<Settings>({
    name: "",
    email: "",
    theme: "dark",
  });
  const [saved, setSaved] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("settings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle(
      "light",
      settings.theme === "light",
    );
  }, [settings.theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [e.target.id]: e.target.value,
    });
    setSaved(false);
  };

  const handleThemeToggle = () => {
    setSettings({
      ...settings,
      theme: settings.theme === "dark" ? "light" : "dark",
    });
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("settings", JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-text-primary mb-2">
          Settings
        </h1>
        <p className="text-text-secondary">
          Manage your profile and preferences
        </p>
      </div>

      <div className="max-w-2xl">
        {/* Success Message */}
        {saved && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg">
            <p className="text-green-500">Settings saved successfully!</p>
          </div>
        )}

        {/* Profile Form */}
        <div className="bg-background-secondary p-8 rounded-2xl mb-6">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            Profile Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AuthInput
              label="Name"
              id="name"
              type="text"
              value={settings.name}
              onChange={handleChange}
              placeholder="Your name"
            />

            <AuthInput
              label="Email"
              id="email"
              type="email"
              value={settings.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />

            <div className="pt-2">
              <Button text="Save Changes" type="submit" />
            </div>
          </form>
        </div>

        {/* Theme Toggle */}
        <div className="bg-background-secondary p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            Appearance
          </h2>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Theme</h3>
              <p className="text-text-secondary text-sm">
                Choose between light and dark mode
              </p>
            </div>

            <button
              onClick={handleThemeToggle}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                settings.theme === "dark"
                  ? "bg-gradient-to-r from-[#FF9898] to-[#8054ff]"
                  : "bg-background"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-text-primary transition-transform ${
                  settings.theme === "dark" ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="mt-6 p-4 bg-background rounded-lg">
            <p className="text-text-secondary text-sm">
              Current theme:{" "}
              <span className="text-text-primary font-semibold">
                {settings.theme === "dark" ? "Dark" : "Light"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
