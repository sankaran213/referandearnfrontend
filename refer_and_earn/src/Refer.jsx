import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

export default function ReferAndEarn() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    course: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) tempErrors[key] = "This field is required";
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(
          "https://referandearn-tan.vercel.app/referral",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form), // Send the form data correctly
          }
        );

        const data = await response.json();
        if (response.ok) {
          alert("Referral submitted successfully!");
          setOpen(false);
        } else {
          alert("Error: " + data.error);
        }
      } catch (error) {
        alert("Submission failed! Try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      <div className="p-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">
            Let's Learn & Earn
          </h1>
          <p className="text-lg mb-4 text-gray-700">
            Refer a friend and get a chance to win up to Rs. 15,000
          </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Refer Now
          </button>
        </div>

        {/* How to Refer Section */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            How Do I <span className="text-blue-600">Refer?</span>
          </h2>
          <div className="flex justify-center mt-6 space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-64">
              <p>Submit referral details via the website’s referral section.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-64">
              <p>Earn rewards once your referral joins an Accredian program.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-64">
              <p>Referrer receives a bonus after the program enrollment.</p>
            </div>
          </div>
        </div>

        {/* Referral Benefits Section */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            What Are The{" "}
            <span className="text-blue-600">Referral Benefits?</span>
          </h2>
          <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-3">Programs</th>
                  <th className="border p-3">Referrer Bonus</th>
                  <th className="border p-3">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Data Science</td>
                  <td className="border p-3">₹10,000</td>
                  <td className="border p-3">₹8,000</td>
                </tr>
                <tr>
                  <td className="border p-3">Product Management</td>
                  <td className="border p-3">₹12,000</td>
                  <td className="border p-3">₹10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Referral Form */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Refer a Friend</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
            <h2 className="font-semibold">Your Details</h2>
            <input
              name="referrerName"
              placeholder="Your Name"
              className="border p-2 rounded"
              onChange={handleChange}
            />
            {errors.referrerName && (
              <span className="text-red-500">{errors.referrerName}</span>
            )}
            <input
              name="referrerEmail"
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded"
              onChange={handleChange}
            />
            {errors.referrerEmail && (
              <span className="text-red-500">{errors.referrerEmail}</span>
            )}
            <input
              name="referrerPhone"
              placeholder="Your Phone"
              className="border p-2 rounded"
              onChange={handleChange}
            />
            {errors.referrerPhone && (
              <span className="text-red-500">{errors.referrerPhone}</span>
            )}

            <h2 className="font-semibold">Friend's Details</h2>
            <input
              name="refereeName"
              placeholder="Friend's Name"
              className="border p-2 rounded"
              onChange={handleChange}
            />
            {errors.refereeName && (
              <span className="text-red-500">{errors.refereeName}</span>
            )}
            <input
              name="refereeEmail"
              type="email"
              placeholder="Friend's Email"
              className="border p-2 rounded"
              onChange={handleChange}
            />
            {errors.refereeEmail && (
              <span className="text-red-500">{errors.refereeEmail}</span>
            )}
            <input
              name="refereePhone"
              placeholder="Friend's Phone"
              className="border p-2 rounded"
              onChange={handleChange}
            />
            {errors.refereePhone && (
              <span className="text-red-500">{errors.refereePhone}</span>
            )}

            <select
              name="course"
              className="border p-2 rounded"
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="Data Science">Data Science</option>
              <option value="Product Management">Product Management</option>
            </select>
            {errors.course && (
              <span className="text-red-500">{errors.course}</span>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </DialogContent>
      </Dialog>
      {/* <Footer /> */}
    </div>
  );
}
