import { FC } from "react";

interface StatusBadgeProps {
  status: string;
  statusType: "pending" | "resolved" | "not-found";
}

const StatusBadge: FC<StatusBadgeProps> = ({ status, statusType }) => {
  const getStatusClasses = () => {
    switch (statusType) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "not-found":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <p
      className={`text-xs px-1 py-0 rounded ${getStatusClasses()}`}
      style={{ fontSize: "0.7rem" }}
    >
      {status}
    </p>
  );
};

export default StatusBadge;
