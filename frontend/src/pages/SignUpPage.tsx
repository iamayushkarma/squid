import { useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import AuthInput from "@/components/ui/AuthInput";
import HeroEllipsTwo from "/svg/hero-ellips-two.svg";
import HeroEllipsThree from "/svg/hero-ellips-three.svg";

function SignUpPage() {
  const { signup } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    console.log(formData);

    signup(formData);
    navigate("/dashboard");
  };

  return (
    <section className="min-h-svh w-full bg-background flex flex-col">
      {/* Decorative elements */}
      <img
        className="absolute top-32 left-12 z-10"
        src={HeroEllipsTwo}
        alt="Decorative element"
      />
      <img
        className="absolute bottom-40 right-20 z-10"
        src={HeroEllipsThree}
        alt="Decorative element"
      />

      {/* Main Content */}
      <main className="grow flex items-center justify-center p-6">
        <div className="w-full max-w-md relative z-20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-semibold text-text-primary tracking-tight mb-2">
              Create your account
            </h1>
          </div>

          {/* Signup Form Card */}
          <div className="bg-background-secondary p-8 rounded-2xl">
            {/* Error Message */}
            {error && (
              <div className="mb-5 p-3 bg-red-500/10 border border-red-500/50 rounded-[5px]">
                <p className="text-red-500 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <AuthInput
                label="Full Name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ayush Karma"
                required
              />

              <AuthInput
                label="Email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ayushkarma.dev@gmail.com"
                required
              />

              <AuthInput
                label="Password"
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min. 6 characters"
                required
                showPasswordToggle
              />

              <div className="pt-2">
                <Button
                  text="Create account"
                  className="w-full"
                  type="submit"
                />
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-text-secondary">
              Already have an account?{" "}
              <Link to="/login" className="text-text-primary hover:underline">
                Login
              </Link>
            </p>

            <p className="mt-6 text-center text-xs text-text-secondary leading-relaxed">
              By signing up, you agree to our{" "}
              <a className="underline hover:text-text-primary" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="underline hover:text-text-primary" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 text-center relative z-20">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-secondary">
          <span>© 2024 SaaS Platform Inc.</span>
          <Link to="/" className="hover:text-text-primary transition-colors">
            Home
          </Link>
          <a className="hover:text-text-primary transition-colors" href="#">
            Status
          </a>
          <a className="hover:text-text-primary transition-colors" href="#">
            Twitter
          </a>
        </div>
      </footer>
    </section>
  );
}

export default SignUpPage;
