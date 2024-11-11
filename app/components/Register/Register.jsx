"use client";
import { useState } from "react";
import InputField from "../Login/InputField";
import RadioButton from "./RadioButton";

const Register = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const setEmail = () => {};
  const setPassword = () => {};
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col items-center justify-center gap-[40px] p-[40px] w-[416px] h-[411px] mt-[56px] mb-[56px] shrink-0 rounded-[16px] border border-secondary-1 bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
      <div>
        <p className="text-secondary-6 text-center font-inter text-[24px] font-semibold leading-[120%]">
          Create a new account
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col max-w-[336px]">
        <div className="flex flex-col w-full">
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mt-4">
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </form>

      <form className="flex gap-6 items-center">
        <label
          htmlFor="registerType"
          className="text-neutral-N500 font-inter text-[16px] font-normal leading-[150%]"
        >
          Register as
        </label>
        <div className="flex gap-4 items-center self-stretch my-auto">
          <RadioButton label="Landlord/Agent" checked={false} />
          <RadioButton label="Tenant" checked={true} />
        </div>
      </form>

      <button className="rounded-[4px] bg-[#50B533] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex p-[10px_18px] justify-center items-center gap-[8px] self-stretch">
        <p className="text-[#FFF] font-inter text-[18px] font-semibold leading-normal">
          Register
        </p>
      </button>

      <footer>
        <span className="text-[#3B5374] text-center font-inter text-[16px] font-normal leading-[150%]">
          Got an account?
        </span>{" "}
        <a
          href="#"
          className="text-[#50B533] font-inter text-[16px] font-semibold leading-normal underline decoration-solid decoration-auto decoration-ink-none underline-offset-auto text-underline-position-from-font"
        >
          Login
        </a>
      </footer>
    </div>
  );
};

export default Register;
