import type { ApiUser } from "@/types/user";

interface UserCardProps {
  user: ApiUser;
  onClick: () => void;
}

export default function UserCard({ user, onClick }: UserCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-background-secondary p-6 rounded-lg hover:bg-background transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF9898] to-[#8054ff] flex items-center justify-center text-text-primary font-bold text-xl">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-text-primary">{user.name}</h3>
          <p className="text-text-secondary text-sm">@{user.username}</p>
        </div>
      </div>
      <p className="text-text-secondary text-sm mb-2">{user.email}</p>
      <p className="text-text-secondary text-sm">{user.company.name}</p>
    </div>
  );
}
