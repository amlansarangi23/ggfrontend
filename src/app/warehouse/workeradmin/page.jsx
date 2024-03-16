"use client";
import React, { useState } from "react";
import axios from "axios";
import SideNav from "@/components/sidenav";
import Navbar from "@/components/navbar";

import Modal from "react-modal";
import AddWorkerForm from "@/components/customiseaddworker";
import AssignWorkerForm from "@/components/customiseassignworker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function WorkerForm() {
  // const [name, setName] = useState("");
  // const [empId, setEmpId] = useState("");
  // const [address, setAddress] = useState("");
  // const [salary, setSalary] = useState("");

  // const handleCreateWorker = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8080/worker", {
  //       name,
  //       empId,
  //       address,
  //       salary,
  //     },{
  //       headers: {
  //         userId: "65f31c2d5fff7604e1bfef3f"
  //       },
  //     });
  //     if (response && response.data) {
  //       console.log(response.data);
  //     } else {
  //       console.error("Empty response received.");
  //     }
  //   } catch (error) {
  //     console.error("Error creating worker:", error.response.data.message);
  //   }
  // };

  const [createWorkerIsOpen, setCreateWorkerIsOpen] = useState(false);
  const [assignWorkerIsOpen, setAssignWorkerIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      width: "90vw",
      height: "100vh",
      borderRadius: "10px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-left gap-20 items-start bg-slate-300">
        <SideNav />
        <div className="buttons grid grid-cols-1 md:grid-cols-2">
        <div className=" bg-zinc-600 text-white text-xl hover:bg-slate-700 shadow-lg rounded-lg p-6 mr-10 mt-5 text-center">
          <button
            className="text-white  text-lg"
            onClick={() => setCreateWorkerIsOpen(true)}
          >
            Create Worker
          </button>
          <Modal
            isOpen={createWorkerIsOpen}
            onRequestClose={() => setCreateWorkerIsOpen(false)}
            style={customStyles}
          >
            <button
              onClick={() => setCreateWorkerIsOpen(false)}
              className="float-right"
            >
              X
            </button>
            <AddWorkerForm />
          </Modal>
        </div>

        <div className=" bg-zinc-600 text-white text-xl hover:bg-slate-700 shadow-lg rounded-lg p-6 mr-10 mt-5 text-center">
          <button
            className="text-white  text-lg"
            onClick={() => setAssignWorkerIsOpen(true)}
          >
            Assign Work
          </button>
          <Modal
            isOpen={assignWorkerIsOpen}
            onRequestClose={() => setAssignWorkerIsOpen(false)}
            style={customStyles}
          >
            <button
              onClick={() => setAssignWorkerIsOpen(false)}
              className="float-right"
            >
              X
            </button>
            <AssignWorkerForm />
          </Modal>
        </div>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default WorkerForm;
