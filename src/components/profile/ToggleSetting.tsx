import { FC } from "react";

interface ToggleSettingProps {
  icon?: React.ReactNode;
  label: string;
  description: string;
  isActive?: boolean;
}

const ToggleSetting: FC<ToggleSettingProps> = ({
  icon,
  label,
  description,
  isActive = false,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {icon && <div className="text-gray-600 dark:text-gray-400">{icon}</div>}
        <div>
          <h4 className="font-medium text-gray-800 dark:text-white">{label}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div
        className={`w-10 h-5 rounded-full ${
          isActive ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"
        } relative`}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all ${
            isActive ? "right-0.5" : "left-0.5"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSetting;
