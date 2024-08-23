import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/Breadcrumb";
import StudentProfile from "./StudentProfile";
import LeaseDetails from "./LeaseDetails";
import FundingStatus from "./FundingStatus";
import Notice from "./Notice";
import Actions from "./Actions";

function Dashboard() {
  const breadcrumbItems = ["Dashboard", "Student Search", "Student Name"];

  const studentDetails = {
    studentName: "Zuko Manda",
    studentEmail: "zuko@fingasnap.co.za",
  };

  const leases = [
    {
      company: "Swift Couriers",
      period: "06/01/2022 - Present",
      status: "Active",
    },
    {
      company: "NVME Logistics",
      period: "12/01/2021 - 01/01/2022",
      status: "Terminated",
    },
    {
      company: "Speedy Deliveries",
      period: "02/01/2022 - 03/01/2022",
      status: "Terminated",
    },
    {
      company: "Express Shipping",
      period: "04/01/2022 - 05/01/2022",
      status: "Terminated",
    },
  ];

  const fundingData = [
    {
      title: "NVME Logistics",
      description:
        "This student is not funded by NSFAS and would need to pay their own rent",
      status: "Not Funded",
    },
  ];

  return (
    <div className="flex flex-col bg-white min-w-[320px]">
      <Header />
      <main className="flex flex-col items-center px-8 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 pt-3 pb-10 w-full max-w-[1200px] max-md:max-w-full">
          <Breadcrumb items={breadcrumbItems} />
          <div className="flex flex-col justify-center py-5 w-full max-md:max-w-full">
            <StudentProfile
              name={studentDetails.studentName}
              email={studentDetails.studentEmail}
            />
            <div className="mt-5 w-full bg-gray-200 min-h-[1px] max-md:max-w-full" />
          </div>
          <div className="flex flex-wrap gap-3 items-start px-4 py-5 w-full bg-gray-50 rounded-xl border border-gray-100 border-solid max-md:max-w-full">
            <LeaseDetails leases={leases} />
            <FundingStatus fundingData={fundingData} />
          </div>
          <Notice />
          <Actions />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
