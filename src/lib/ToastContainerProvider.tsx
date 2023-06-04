"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ToastContainerProvider() {
  return <ToastContainer position="top-center" autoClose={3000} />;
}
