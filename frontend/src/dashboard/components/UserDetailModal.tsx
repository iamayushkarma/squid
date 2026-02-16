import type { ApiUser } from "@/types/user";
import ModalPortal from "./ModalPortal";
import { X } from "lucide-react";

type Props = {
  user: ApiUser;
  onClose: () => void;
};

function UserDetailModal({ user, onClose }: Props) {
  return (
    <ModalPortal>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-background-light dark:bg-background-secondary border border-border-light dark:border-border-dark rounded-2xl w-[500px] shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark">
            <h2 className="text-xl font-semibold text-text-primary-light dark:text-text-primary">
              User Details
            </h2>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {/* User Avatar & Name */}
            <div className="flex items-center gap-4 mb-6">
              <div className="size-16 bg-[#f1f5f9] dark:bg-[#404040] text-xl font-bold rounded-full flex justify-center items-center text-text-secondary-light dark:text-text-secondary">
                {user.name[0]}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary">
                  {user.name}
                </h3>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary">
                  @{user.username}
                </p>
              </div>
            </div>

            {/* User Info Grid */}
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase font-medium text-text-secondary-light dark:text-text-secondary mb-1">
                  Email
                </p>
                <p className="text-sm text-text-primary-light dark:text-text-primary">
                  {user.email}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase font-medium text-text-secondary-light dark:text-text-secondary mb-1">
                  Phone
                </p>
                <p className="text-sm text-text-primary-light dark:text-text-primary">
                  {user.phone}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase font-medium text-text-secondary-light dark:text-text-secondary mb-1">
                  Company
                </p>
                <p className="text-sm text-text-primary-light dark:text-text-primary">
                  {user.company.name}
                </p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary mt-1">
                  {user.company.catchPhrase}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase font-medium text-text-secondary-light dark:text-text-secondary mb-1">
                  Address
                </p>
                <p className="text-sm text-text-primary-light dark:text-text-primary">
                  {user.address.street}, {user.address.suite}
                </p>
                <p className="text-sm text-text-primary-light dark:text-text-primary">
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase font-medium text-text-secondary-light dark:text-text-secondary mb-1">
                  Website
                </p>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 px-6 py-4 border-t border-border-light dark:border-border-dark bg-background-secondary-light dark:bg-[#1c1c20] rounded-b-2xl">
            <button
              onClick={onClose}
              className="px-5 py-2 text-sm font-medium bg-background-light dark:bg-background-secondary border border-border-light dark:border-border-dark rounded-lg hover:bg-gray-100 dark:hover:bg-background/50 transition text-text-primary-light dark:text-text-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}

export default UserDetailModal;
