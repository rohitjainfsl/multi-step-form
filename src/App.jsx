import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    fname: "",
    mname: "",
  });
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(null);
  const [stepWidth, setStepWidth] = useState(null);
  const [stepChildWidth, setStepChildWidth] = useState(null);
  const [stepChildMarginRight, setStepChildMarginRight] = useState(0);

  useEffect(() => {
    const stepChild = document.querySelector(".step1");
    if (stepChild) {
      const stepChildStyle = window.getComputedStyle(stepChild);
      setStepChildMarginRight(parseFloat(stepChildStyle.marginRight));
    }
  }, []);

  useEffect(() => {
    const form = document.querySelector("form");
    setStepWidth(form.clientWidth * 3 + stepChildMarginRight * 3);
    setStepChildWidth(form.clientWidth);
  }, [stepChildMarginRight]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setDirection("next");
    setTimeout(() => {
      if (step <= 3) setStep(step + 1); // Delay step change
      setDirection(null); // Reset direction after the animation
    }, 300);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setDirection("previous");
    setTimeout(() => {
      if (step > 1) setStep(step - 1);
      setDirection(null);
    }, 300);
  };

  return (
    <div className="w-[50%] p-8 rounded-2xl bg-white shadow-lg shadow-gray-300 mx-auto mt-10 overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-6 text-center">Multi Step Form</h1>

      <h2 className="font-bold mb-4">Step {step}</h2>

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div
          className={`step w-full min-h-64  ${
            direction === "next"
              ? "slide-in-right"
              : direction === "previous"
              ? "slide-in-left"
              : ""
          }`}
          style={{
            width: `${stepWidth + 96}px`,
            transform: `translateX(-${(step - 1) * (stepWidth / 3)}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div
            className="step1 inline-block w-full align-top mr-10"
            style={{ width: `${stepChildWidth}px` }}
          >
            <input
              required
              type="text"
              placeholder="Name"
              value={form.name}
              name="name"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
            <br />
            <input
              required
              type="email"
              placeholder="Email"
              value={form.email}
              name="email"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
            <br />
            <input
              required
              type="text"
              placeholder="Father's Name"
              value={form.fname}
              name="fname"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
            <br />
            <input
              required
              type="text"
              placeholder="Mother's Name"
              value={form.mname}
              name="mname"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
          </div>

          <div
            className="step2 inline-block w-full align-top mr-10"
            style={{ width: `${stepChildWidth}px` }}
          >
            <input
              required
              type="text"
              placeholder="Address"
              value={form.address}
              name="address"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
            <br />
            <input
              required
              type="text"
              placeholder="City"
              value={form.city}
              name="city"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
            <br />
            <input
              required
              type="text"
              placeholder="State"
              value={form.state}
              name="state"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
            <br />
            <input
              required
              type="text"
              placeholder="Country"
              value={form.country}
              name="country"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
          </div>

          <div
            className="step3 inline-block w-full align-top mr-10"
            style={{ width: `${stepChildWidth}px` }}
          >
            <input
              required
              type="text"
              placeholder="Phone Number"
              value={form.phone}
              name="phone"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
            <br />
            <input
              required
              type="text"
              placeholder="Date of Birth"
              value={form.dob}
              name="dob"
              onChange={handleChange}
              className="border-4 border-gray-600 rounded w-full mb-2 px-4 py-2 focus:border-0 focus:outline-4 focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="buttons">
          <button
            onClick={handleBack}
            className={`border-4 border-gray-600 bg-gray-600 text-white text-lg px-3 rounded cursor-pointer transition-all duration-300 my-3 disabled:opacity-50 disabled:cursor-not-allowed ${
              step === 1 ? "" : "hover:bg-white hover:text-black"
            }`}
            disabled={step === 1}
          >
            &laquo; Previous
          </button>
          {step === 3 ? (
            <button
              onClick={() => alert("Form submitted!")}
              className="border-4 border-blue-300 bg-blue-300 text-lg px-3 rounded cursor-pointer transition-all duration-300 hover:bg-white my-3"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="border-4 border-green-300 bg-green-300 text-lg px-3 rounded cursor-pointer transition-all duration-300 hover:bg-white my-3"
            >
              Next &raquo;
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;
