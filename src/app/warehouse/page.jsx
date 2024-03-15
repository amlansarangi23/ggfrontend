"use client";
import SideNav from "@/components/sidenav";
import Dashboard from "@/components/dashboard";
import Navbar from "@/components/navbar";

export default function warehouse() {
  return (
    <>
      <Navbar />
      <div className="flex">
      <SideNav />
      <Dashboard />
      </div>
    </>
  );
}
