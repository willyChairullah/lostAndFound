import { FC } from "react";
import UserInfoCard from "@/components/profile/UserInfoCard";
import ReportsSection from "@/components/profile/ReportsSection";
import SettingsCard from "@/components/profile/SettingsCard";

export default function Profile() {
  const userReports = [
    {
      id: 1,
      name: "Blue Backpack",
      reportType: "Lost Item",
      date: "July 3, 2025",
      location: "Last seen at Campus Building 2",
      status: "Pending",
      statusType: "pending" as const,
    },
    {
      id: 2,
      name: "Student ID Card",
      reportType: "Found Item",
      date: "June 28, 2025",
      location: "Library Floor 1",
      status: "Resolved",
      statusType: "resolved" as const,
    },
    {
      id: 3,
      name: "House Keys",
      reportType: "Lost Item",
      date: "June 15, 2025",
      location: "Last seen at Cafeteria",
      status: "Not Found",
      statusType: "not-found" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Profile
        </h1>
      </header>

      <main className="max-w-lg mx-auto p-4 space-y-6">
        {/* User Info Card */}
        <UserInfoCard />

        {/* Reports Section */}
        <ReportsSection reports={userReports} />

        {/* Settings Card */}
        <SettingsCard />
      </main>
    </div>
  );
}
