import Button from "@/components/ui/Button";
import AuthInput from "@/components/ui/AuthInput";
import HeroEllipsTwo from "/svg/hero-ellips-two.svg";
import HeroEllipsThree from "/svg/hero-ellips-three.svg";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <section className="relative min-h-svh w-full bg-background flex flex-col">
      {/* Decorative elements */}
      <img
        className="absolute top-[8rem] left-[3rem] z-10"
        src={HeroEllipsTwo}
        alt="Decorative element"
      />
      <img
        className="absolute bottom-[10rem] right-[5rem] z-10"
        src={HeroEllipsThree}
        alt="Decorative element"
      />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md relative z-20">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-semibold text-text-primary tracking-tight mb-2">
              Welcome back
            </h1>
          </div>

          {/* Login Form Card */}
          <div className="bg-background-secondary p-8 rounded-2xl">
            {/* Form */}
            <form className="space-y-5">
              <AuthInput
                label="Email"
                id="email"
                type="email"
                placeholder="ayushkarma.dev@gmail.com"
                required
              />

              <AuthInput
                label="Password"
                id="password"
                type="password"
                placeholder="Min. 6 characters"
                required
                showPasswordToggle
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded bg-background border-text-secondary"
                  />
                  <label
                    htmlFor="remember"
                    className="text-text-secondary text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="pt-2">
                <Button text="Sign in" className="w-full" />
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-text-secondary">
              Don't have an account?{" "}
              <Link to="/signup" className="text-text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 text-center relative z-20">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-secondary">
          <span>© 2024 SaaS Platform Inc.</span>
          <a className="hover:text-text-primary transition-colors" href="#">
            Support
          </a>
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

export default LoginPage;
