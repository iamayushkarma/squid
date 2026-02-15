import type { ApiUser } from "@/types/user";

interface UserModalProps {
  user: ApiUser;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: UserModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-background-secondary rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-text-primary">
            User Details
          </h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* User Info */}
        <div className="space-y-6">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF9898] to-[#8054ff] flex items-center justify-center text-text-primary font-bold text-2xl">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary">
                {user.name}
              </h3>
              <p className="text-text-secondary">@{user.username}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-text-secondary mb-2">
              Contact Information
            </h4>
            <div className="space-y-2">
              <p className="text-text-primary">
                <span className="text-text-secondary">Email:</span> {user.email}
              </p>
              <p className="text-text-primary">
                <span className="text-text-secondary">Phone:</span> {user.phone}
              </p>
              <p className="text-text-primary">
                <span className="text-text-secondary">Website:</span>{" "}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {user.website}
                </a>
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold text-text-secondary mb-2">
              Address
            </h4>
            <p className="text-text-primary">
              {user.address.suite}, {user.address.street}
              <br />
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-text-secondary mb-2">
              Company
            </h4>
            <p className="text-text-primary font-semibold">
              {user.company.name}
            </p>
            <p className="text-text-secondary text-sm">
              {user.company.catchPhrase}
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-8 w-full px-6 py-3 bg-background text-text-primary rounded-lg hover:bg-background/80 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
