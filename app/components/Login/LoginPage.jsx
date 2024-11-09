import React from 'react';
import SocialButton from './SocialButton';
import InputField from './InputField';
import RememberMeCheckbox from './RememberMeCheckbox';

const socialButtons = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/136920aeca8de9d26ebf46a8df0c66f493fea894fe0b255a476e224f44e76ef5?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be", text: "Continue with Google" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c66148e6ee4b198a43cd9653f02b5fa2e3344371a05a6ed180a6173444e401ac?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be", text: "Continue with Facebook" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c0c3de7a49d47fb573643053c4579af07a9ae93798488d1f076643806a52235?placeholderIfAbsent=true&apiKey=0695793bd5f84155941de1175594a2be", text: "Continue with Apple" }
];

function LoginPage() {
  return (
    <main className="flex flex-col gap-10 justify-center p-10 py-10 bg-white rounded-2xl border border-gray-100 border-solid shadow-lg max-w-[416px]">
      <h1 className="self-center text-2xl font-semibold leading-tight text-center text-sky-950">
        Login to your Account
      </h1>
      <section className="flex flex-col mt-10 w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col justify-center w-full text-base text-slate-600">
            {socialButtons.map((button, index) => (
              <SocialButton key={index} icon={button.icon} text={button.text} />
            ))}
          </div>
          <div className="flex pr-16 mt-6 w-full text-base whitespace-nowrap text-slate-600">
            <div className="shrink-0 my-auto mr-0 h-px bg-gray-100 border border-gray-100 border-solid" />
            <div className="px-2 w-10 h-10 bg-white">OR</div>
          </div>
          <form className="flex flex-col mt-6 w-full">
            <InputField type="email" placeholder="Email" />
            <InputField type="password" placeholder="Password" />
            <RememberMeCheckbox />
            <button className="overflow-hidden gap-2 self-stretch px-5 py-2.5 mt-6 w-full text-lg font-semibold text-white bg-lime-600 rounded shadow-sm">
              Log in
            </button>
          </form>
        </div>
      </section>
      <footer className="self-center mt-8 text-base text-center text-lime-600">
        <span>Don't have account?</span>{" "}
        <a href="#" className="font-semibold leading-5 text-lime-600 underline">
          Register
        </a>
      </footer>
    </main>
  );
}

export default LoginPage;