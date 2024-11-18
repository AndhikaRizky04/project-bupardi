import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen w-full bg-[#F3D4B0] flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Bagian Kiri */}
        <div
          className="hidden md:flex md:w-1/2 flex-col justify-center relative overflow-hidden"
          style={{
            background: `url('src/assets/bg1.png') no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          {/* Lingkaran Dekoratif */}
          <img
            src="src/assets/g2.png"
            alt="Red Circle"
            className="absolute w-[100px] h-[100px] top-[10px] left-[10px]"
          />
          <img
            src="src/assets/g4.png"
            alt="Purple Circle"
            className="absolute w-[50px] h-[50px] top-[100px] right-[150px]"
          />
          <img
            src="src/assets/g5.png"
            alt="Gradient Circle"
            className="absolute w-[160px] h-[160px] bottom-[-40px] right-[-40px] opacity-100"
          />

          {/* Balon Teks Kiri */}
          <div className="absolute top-[35%] left-[15%] z-20">
            <img
              src="src/assets/g12.png"
              alt="Speech Bubble Left"
              className="w-[130px] h-auto"
            />
          </div>

          {/* Balon Teks Kanan */}
          <div className="absolute top-[35%] right-[10%] z-20">
            <img
              src="src/assets/g1.png"
              alt="Speech Bubble Right"
              className="w-[130px] h-auto"
            />
          </div>

          {/* Ilustrasi Karakter */}
          <div className="relative z-19 flex justify-center mt-[80px] left-[9%]">
            <img
              src="src/assets/register.png"
              alt="Character Illustration"
              className="w-[440px] h-auto"
            />
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center relative">
          {/* Icon "+" di pojok kiri form */}
          <img
            src="src/assets/g3.png"
            alt="Plus Icon"
            className="absolute top-4 left-4 w-10 h-10"
          />

          {/* Logo Bu Pardi */}
          <div className="flex flex-col items-center mb-8">
            <img
              src="src/assets/reg.png"
              alt="Bu Pardi Logo"
              className="h-28"
            />
          </div>

          {/* Formulir Pendaftaran */}
          <div className="w-full max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-xl text-left font-bold text-gray-600 mb-1">
                Buat Akun Baru Kamu
              </h1>
              <p className="text-[10px] text-left text-gray-500">
                See what is going on with your business
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[34px] right-3 text-gray-600"
                >
                  {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                </button>
              </div>

              <div className="relative">
                <label className="block text-sm text-gray-600 mb-1">
                  Konfirmasi Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-purple-700"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute top-[34px] right-3 text-gray-600"
                >
                  {showConfirmPassword ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#73114B] text-white py-2 rounded-md text-sm font-medium hover:bg-purple-800 transition-colors duration-300"
              >
                Buat Akun
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
