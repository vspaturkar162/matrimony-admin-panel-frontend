// import { useState } from "react";
// import Header from "../../../components/admin/Header";

// export default function BannerPanel() {
//   const [bannerText, setBannerText] = useState("");

//   const handleSave = () => {
//     if (!bannerText.trim()) {
//       alert("Banner text required");
//       return;
//     }

//     console.log("Banner Saved:", bannerText);
//     alert("Banner updated successfully");
//   };

//   return (
//     <div className="flex-1 min-h-screen bg-gray-50">
//       <Header title="Banner Management" />

//       <main className="p-6 flex justify-center">
//         <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
//           <h3 className="text-lg font-bold text-gray-800 mb-6">
//             Update Homepage Banner
//           </h3>

//           <textarea
//             rows={4}
//             placeholder="Enter banner message"
//             value={bannerText}
//             onChange={(e) => setBannerText(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-rose-400 focus:bg-white transition-all text-sm resize-none"
//           />

//           <button
//             onClick={handleSave}
//             className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold hover:opacity-90 transition-all shadow-sm"
//           >
//             Save Banner
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// }

import { useState } from "react";
import Header from "../../../components/admin/Header";

export default function BannerPanel() {
  const [bannerText, setBannerText] = useState("");
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBannerImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (!bannerText.trim()) {
      alert("Banner text required");
      return;
    }

    console.log("Banner Text:", bannerText);
    console.log("Banner Image:", bannerImage);

    alert("Banner updated successfully");
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50">
      <Header title="Banner Management" />

      <main className="p-6 flex justify-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Update Homepage Banner
          </h3>

          {/* Banner Text */}
          <textarea
            rows={4}
            placeholder="Enter banner message"
            value={bannerText}
            onChange={(e) => setBannerText(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-rose-400 focus:bg-white transition-all text-sm resize-none"
          />

          {/* Image Upload */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Banner Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 
                         file:rounded-xl file:border-0 
                         file:bg-rose-100 file:text-rose-600 
                         hover:file:bg-rose-200"
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="mt-6">
              <img
                src={preview}
                alt="Banner Preview"
                className="w-full h-48 object-cover rounded-xl border border-gray-200"
              />
            </div>
          )}

          <button
            onClick={handleSave}
            className="mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-500 text-white font-semibold hover:opacity-90 transition-all shadow-sm"
          >
            Save Banner
          </button>
        </div>
      </main>
    </div>
  );
}