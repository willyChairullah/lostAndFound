import { FC } from "react";
import { FiBell, FiLogOut, FiMail, FiMoon } from "react-icons/fi";
import ToggleSetting from "./ToggleSetting";

interface SettingsCardProps {}

const SettingsCard: FC<SettingsCardProps> = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <h3 className="font-semibold text-gray-800 dark:text-white mb-4">
        Settings
      </h3>

      <div className="space-y-3">
        <ToggleSetting
          icon={<FiBell className="h-4 w-4" />}
          label="Notification"
          description="Receive notifications about your reports"
        />
        <ToggleSetting
          icon={<FiMoon className="h-4 w-4" />}
          label="Dark Mode"
          description="Switch between light and dark theme"
          isActive={true}
        />
        <ToggleSetting
          icon={<FiMail className="h-4 w-4" />}
          label="Email Updates"
          description="Get weekly summaries of lost and found items"
        />

        <div className="border-t border-gray-100 dark:border-gray-700 pt-3 mt-4">
          <button className="w-full flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
            <FiLogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;
