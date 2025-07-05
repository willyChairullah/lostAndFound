import { FC } from "react";
import { FiEdit2 } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

interface UserInfoCardProps {}

const UserInfoCard: FC<UserInfoCardProps> = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
          <FaUser className="h-8 w-8 text-gray-500 dark:text-gray-400" />
        </div>

        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            User Name
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            user@example.com
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            +62 123 4567 890
          </p>
        </div>

        <button className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
          <FiEdit2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default UserInfoCard;
