import { FC } from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import StatusBadge from "./StatusBadge";

interface ReportsSectionProps {
  reports: Array<{
    id: number;
    name: string;
    reportType: string;
    date: string;
    location: string;
    status: string;
    statusType: "pending" | "resolved" | "not-found";
  }>;
}

const ReportsSection: FC<ReportsSectionProps> = ({ reports }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-800 dark:text-white">
          Your Reports
        </h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {reports.length} reports
        </span>
      </div>

      <div className="space-y-3">
        {reports.map(report => (
          <div
            key={report.id}
            className="border-b border-gray-100 dark:border-gray-700 pb-3 last:border-0 last:pb-0"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">
                  {report.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {report.reportType} • {report.date}
                </p>
              </div>

              <div className="flex-shrink-0">
                <StatusBadge
                  status={report.status}
                  statusType={report.statusType}
                />
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {report.location}
            </p>

            <div className="flex mt-2 space-x-2">
              <button className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200 flex items-center space-x-1">
                <FiEye className="h-3 w-3" />
                <span>View Details</span>
              </button>
              <button className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded dark:bg-red-900 dark:text-red-200 flex items-center space-x-1">
                <FiTrash2 className="h-3 w-3" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsSection;
