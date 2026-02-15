import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

function NotFoundPage() {
  return (
    <section className="relative min-h-svh w-full bg-background flex items-center justify-center">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-[15rem] font-bold text-text-primary leading-none mb-8">
          404
        </h1>

        <p className="text-text-secondary text-xl mb-8">Page Not Found</p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button text="Go Home" />
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-7 py-3 bg-background-secondary text-text-primary rounded-[5px] hover:bg-background transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
