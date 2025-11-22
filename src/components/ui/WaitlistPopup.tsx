import { FormEvent, useState } from "react";

interface WaitlistPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const brandColor = "#FE2188";

const WaitlistPopup = ({ isOpen, onClose }: WaitlistPopupProps): JSX.Element | null => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const resetForm = () => {
    onClose();
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={resetForm}
      ></div>

      <div className="relative bg-white w-full max-w-md rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="h-2 w-full" style={{ backgroundColor: brandColor }}></div>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2 font-['Nunito']">
                  Coming to the Web!
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The ultimate peer-to-peer marketplace is launching soon on desktop.
                  <br />
                  <span className="font-semibold text-gray-700">Sell faster. Buy smarter. Zero hidden fees.</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      id="waitlist-email"
                      type="email"
                      required
                      className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-shadow bg-gray-50 hover:bg-white focus:bg-white"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-white font-bold text-base shadow-md hover:shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
                  style={{ backgroundColor: brandColor }}
                >
                  Get Early Access
                </button>
              </form>

              <p className="mt-4 text-center text-xs text-gray-400">
                Join others waiting for launch.
              </p>
            </>
          ) : (
            <div className="text-center py-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-500 text-sm mb-6">
                Thanks for joining. We'll notify you at <span className="font-semibold text-gray-800">{email}</span> the moment we launch.
              </p>
              <button
                onClick={resetForm}
                className="text-sm font-semibold hover:underline"
                style={{ color: brandColor }}
              >
                Close window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistPopup;
