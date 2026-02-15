import { useNavigate } from "react-router-dom";

type UserProfileCard = {
  icon: any;
  title: string;
  value: number;
};

function UserProfileCard({ icon, title, value }: UserProfileCard) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/dashboard/users")}
      className="p-5 min-w-44 rounded-lg bg-background-light dark:bg-background-secondary border border-border-light dark:border-border-dark"
    >
      <div className="p-2 bg-[#eeedfd] dark:bg-[#1f2d47] rounded-lg w-10">
        {icon}
      </div>
      <div className="mt-5">
        <div className="text-text-secondary-light dark:text-text-secondary text-sm">
          {title}
        </div>
        <div className="text-text-primary-light dark:text-text-primary text-4xl font-semibold">
          {value}
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
