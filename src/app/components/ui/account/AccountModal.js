

// 'use client';

// import { X, Phone, Mail, LogOut, UserCircle2 } from 'lucide-react';

// export default function AccountModal({ open, setOpen }) {
//   if (!open) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black/40 z-40" />

//       {/* Modal */}
//       <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//         <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="relative px-8 py-10 text-center">
//             {/* Close */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute left-5 top-5 text-gray-500 hover:text-black"
//             >
//               <X size={20} />
//             </button>

//             {/* Logo */}
//             <div className="flex justify-center mb-5">
//               <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
//                 <UserCircle2 size={28} className="text-pink-600" />
//               </div>
//             </div>

//             <h2 className="text-3xl font-bold text-gray-900">
//               Continue to Beauty Booth
//             </h2>

//             {/* Phone Input */}
//             <div className="mt-8 border border-gray-300 rounded-xl overflow-hidden flex items-center">
//               <div className="px-4 py-4 border-r border-gray-300 bg-gray-50">
//                 <Phone size={18} />
//               </div>

//               <input
//                 type="text"
//                 placeholder="+88 xxxxxxxx"
//                 className="flex-1 px-4 py-4 outline-none"
//               />
//             </div>

//             {/* Continue Button */}
//             <button className="w-full mt-5 bg-gray-400 hover:bg-pink-600 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2">
//               Continue
//               <span>→</span>
//             </button>

//             {/* Divider */}
//             <div className="flex items-center gap-4 my-7">
//               <div className="flex-1 h-[1px] bg-gray-200" />
//               <span className="text-gray-500 text-sm">or</span>
//               <div className="flex-1 h-[1px] bg-gray-200" />
//             </div>

//             {/* Social Login */}
//             <div className="flex items-center justify-center gap-5">
//               <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
//                 <Mail size={22} />
//               </button>

//               <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                   alt="google"
//                   className="w-6 h-6"
//                 />
//               </button>
//             </div>

//             {/* Bottom */}
//             {/* <button
//               onClick={() => setOpen(false)}
//               className="mt-8 flex items-center justify-center gap-2 text-red-500 hover:text-red-600 mx-auto"
//             >
//               <LogOut size={18} />
//               Close
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

import {
  X,
  Phone,
  Mail,
  LogOut,
  UserCircle2,
  ArrowLeft,
  Loader2,
  ArrowRight,
} from 'lucide-react';

export default function AccountModal({ open, setOpen }) {
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);

  const [showOtp, setShowOtp] = useState(false);

  const [otp, setOtp] = useState(['', '', '', '']);

  // resend timer
  const [seconds, setSeconds] = useState(53);

  // only number
  const handlePhoneChange = e => {
    const value = e.target.value;

    // only digits allowed
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  // Continue Button
  const handleContinue = () => {
    if (!phone) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowOtp(true);
      setSeconds(53);
    }, 1500);
  };

  // resend timer countdown
  useEffect(() => {
    let timer;

    if (showOtp && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [showOtp, seconds]);

  // resend otp
  const handleResend = () => {
    setSeconds(53);
  };

  // OTP Input
  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const updatedOtp = [...otp];

    updatedOtp[index] = value;

    setOtp(updatedOtp);

    // auto next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="w-full max-w-[460px] bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative px-8 py-10 text-center">
            {/* Back / Close */}
            {showOtp ? (
              <button
                onClick={() => setShowOtp(false)}
                className="absolute left-5 top-5 text-gray-500 hover:text-black"
              >
                <ArrowLeft size={22} />
              </button>
            ) : (
              <button
                onClick={() => setOpen(false)}
                className="absolute left-5 top-5 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>
            )}

            {/* Logo */}
            <div className="flex justify-center mb-5">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                <UserCircle2 size={28} className="text-pink-600" />
              </div>
            </div>

            {/* =========================
                PHONE SCREEN
            ========================= */}
            {!showOtp && (
              <>
                <h2 className="text-2xl font-bold text-gray-900">
                  Continue to Beauty Booth
                </h2>

                {/* Phone Input */}
                <div className="mt-8 border border-gray-300 rounded-xl overflow-hidden flex items-center">
                  <div className="px-4 py-3 border-r border-gray-300 bg-gray-50">
                    <Phone size={18} />
                  </div>

                  <div className="flex items-center flex-1 px-4">
                    <span className=" mr-2">+88</span>

                    <input
                      type="text"
                      placeholder="01XXXXXXXXX"
                      value={phone}
                      onChange={handlePhoneChange}
                      maxLength={11}
                      className="flex-1 py- outline-none text-[16px]"
                    />
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleContinue}
                  disabled={!phone || loading}
                  className={`w-full mt-5 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2 ${
                    phone
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      Continue
                      <span>
                        {' '}
                        <ArrowRight size={18} />
                      </span>
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-7">
                  <div className="flex-1 h-[1px] bg-gray-300" />
                  <span className=" text-sm">or</span>
                  <div className="flex-1 h-[1px] bg-gray-300" />
                </div>

                {/* Social Login */}
                <div className="flex items-center justify-center gap-5">
                  <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <Mail size={22} />
                  </button>

                  <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                      alt="google"
                      className="w-6 h-6"
                    />
                  </button>
                </div>

                {/* Bottom */}
                {/* <button
                  onClick={() => setOpen(false)}
                  className="mt-8 flex items-center justify-center gap-2 text-red-500 hover:text-red-600 mx-auto"
                >
                  <LogOut size={18} />
                  Close
                </button> */}
              </>
            )}

            {/* =========================
                OTP SCREEN
            ========================= */}
            {showOtp && (
              <>
                <h2 className="text-2xl font-bold text-gray-900">
                  Enter OTP code
                </h2>

                <p className="text-gray-500 mt-2">
                  We’ve sent OTP in +88 {phone}
                </p>

                {/* OTP Inputs */}
                <div className="flex items-center justify-center gap-4 mt-14">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(e.target.value, index)}
                      className="w-14 h-14 border-b-2 border-gray-400 text-center text-2xl outline-none"
                    />
                  ))}
                </div>

                {/* Resend Timer */}
                <div className="mt-8">
                  {seconds > 0 ? (
                    <p className="text-gray-400 ">
                      Didn’t get the code? Resend in{' '}
                      <span className="text-red-500 font-semibold">
                        {seconds}
                      </span>{' '}
                      seconds
                    </p>
                  ) : (
                    <button
                      onClick={handleResend}
                     
                    >
                      <div className='flex gap-2'>
                        <span className="text-gray-400 text-[14px]">
                          Didn‘t get the code?
                        </span>

                        <span className="text-red-500 hover:text-red-800 underline underline-offset-2 text-[14px] font-medium">
                          Resend OTP
                        </span>
                      </div>
                    </button>
                  )}
                </div>

                {/* Verify Button */}
                <button className="w-full mt-8 bg-gray-400 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2">
                  Verify
                  <span>→</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

// =================

// 'use client';

// import { useEffect, useRef } from 'react';

// import { X, Phone, Mail, LogOut, UserCircle2 } from 'lucide-react';

// export default function AccountModal({ open, setOpen }) {
//   const modalRef = useRef(null);

//   // outside click close
//   useEffect(() => {
//     function handleOutside(e) {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener('mousedown', handleOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleOutside);
//     };
//   }, [setOpen]);

//   if (!open) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div className="fixed inset-0 bg-black/40 z-40" />

//       {/* Modal */}
//       <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//         <div
//           ref={modalRef}
//           className="w-full max-w-[460px] bg-white rounded-2xl shadow-2xl overflow-hidden"
//         >
//           <div className="relative px-8 py-10 text-center">
//             {/* Close */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute left-5 top-5 text-gray-500 hover:text-black"
//             >
//               <X size={20} />
//             </button>

//             {/* Logo */}
//             <div className="flex justify-center mb-5">
//               <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
//                 <UserCircle2 size={28} className="text-pink-600" />
//               </div>
//             </div>

//             {/* Title */}
//             <h2 className="text-3xl font-bold text-gray-900">
//               Continue to Beauty Booth
//             </h2>

//             {/* Phone Input */}
//             <div className="mt-8 border border-gray-300 rounded-xl overflow-hidden flex items-center">
//               <div className="px-4 py-4 border-r border-gray-300 bg-gray-50">
//                 <Phone size={18} />
//               </div>

//               <input
//                 type="text"
//                 placeholder="+88 xxxxxxxx"
//                 className="flex-1 px-4 py-4 outline-none"
//               />
//             </div>

//             {/* Continue Button */}
//             <button className="w-full mt-5 bg-gray-400 hover:bg-pink-600 text-white font-semibold py-4 rounded-xl transition flex items-center justify-center gap-2">
//               Continue
//               <span>→</span>
//             </button>

//             {/* Divider */}
//             <div className="flex items-center gap-4 my-7">
//               <div className="flex-1 h-[1px] bg-gray-200" />
//               <span className="text-gray-500 text-sm">or</span>
//               <div className="flex-1 h-[1px] bg-gray-200" />
//             </div>

//             {/* Social Login */}
//             <div className="flex items-center justify-center gap-5">
//               <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
//                 <Mail size={22} />
//               </button>

//               <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
//                   alt="google"
//                   className="w-6 h-6"
//                 />
//               </button>
//             </div>

//             {/* Bottom */}
//             <button
//               onClick={() => setOpen(false)}
//               className="mt-8 flex items-center justify-center gap-2 text-red-500 hover:text-red-600 mx-auto"
//             >
//               <LogOut size={18} />
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }