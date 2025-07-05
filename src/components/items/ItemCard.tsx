import React from "react";

interface ItemCardProps {
  name: string;
  location: string;
  date: string;
  status: string;
  statusType?: "found" | "lost" | "pending" | "resolved" | "not-found";
  imageUrl?: string;
  reportType?: string;
}

export default function ItemCard({
  name,
  location,
  date,
  status,
  statusType = "found",
  imageUrl,
  reportType,
}: ItemCardProps) {
  // Get the appropriate colors based on status type
  const getStatusClasses = () => {
    switch (statusType) {
      case "found":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "lost":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "not-found":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const isFound = statusType === "found";
  const isReportCard = reportType !== undefined;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex">
      <div className="flex-shrink-0 w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-md mr-3 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        ) : null}
      </div>
      <div className="flex-grow">
        <div
          className={
            isReportCard ? "flex justify-between items-center mb-2" : ""
          }
        >
          <h3 className="font-medium text-gray-900 dark:text-white">
            {isReportCard ? `${reportType}: ${name}` : name}
          </h3>
          {isReportCard && (
            <span
              className={`text-xs px-2 py-1 rounded-full ${getStatusClasses()}`}
            >
              {status}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {isReportCard
            ? `Reported on ${date}`
            : `${isFound ? "Found at: " : "Lost at: "}${location}`}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isReportCard
            ? location.startsWith("Last")
              ? location
              : `Found at ${location}`
            : `Date: ${date}`}
        </p>
        {!isReportCard && (
          <span
            className={`inline-block text-xs px-2 py-0.5 rounded mt-1 ${getStatusClasses()}`}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  );
}
