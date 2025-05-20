import React from "react";

//const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];
const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-indexed
  const today = now.getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

const Admin = () => {
 return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Welcome Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2">Welcome, Admin 👋</h2>
          <p className="text-gray-600">You are logged in as <strong>Content Manager</strong>. Use the tools below to monitor and maintain the blog platform efficiently.</p>
        </div>

        {/* Guidelines Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">📋 Posting Guidelines</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ensure content is original and relevant.</li>
            <li>Use appropriate tags for easy categorization.</li>
            <li>All posts must be reviewed before publishing.</li>
            <li>Follow markdown syntax for formatting.</li>
          </ul>
        </div>

        {/* Security Tips Section */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-3">🔒 Security Tips</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Log out after use, especially on shared devices.</li>
            <li>Do not share your admin credentials.</li>
            <li>Change your password every 90 days.</li>
            <li>Enable two-factor authentication if available.</li>
          </ul>
        </div>

        {/* Dynamic Calendar */}
        <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">📅 Calendar ({monthNames[currentMonth]} {currentYear})</h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
              <div key={i} className="font-semibold text-gray-600">{d}</div>
            ))}

            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={"empty-" + i}></div>
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const isToday = day === today;
              return (
                <div
                  key={day}
                  className={`border rounded-lg py-2 ${
                    isToday ? "bg-blue-500 text-white font-bold" : "bg-gray-100 hover:bg-blue-100"
                  } cursor-default`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};


export default Admin;
