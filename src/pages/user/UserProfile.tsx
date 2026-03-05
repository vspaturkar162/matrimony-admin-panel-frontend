
import { useState } from "react";
import UserNavbar from "../../components/user/UserDashboardNavbar";
import Footer from "../../components/user/Footer";
import { Crown } from "lucide-react";

export default function EditProfile() {

  const [profile, setProfile] = useState({
    gender: "Male",
    firstName: "Rahul",
    lastName: "Kumar",
    day: "15",
    month: "August",
    year: "1998",
    religion: "Hindu",
    religionFirst: "Brahmin",
    motherTongue: "Hindi",
    country: "India",
    phone: "+91 9876543210",
    email: "rahul@email.com",
    abouteMe: "",

    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    familyType: "",
    familyStatus: "",
    brothers: "",
    sisters: "",
    familyValues: "",
    nativePlace: "",
    familyIncome: "",
    propertyDetails: "",

    height: "",
    weight: "",
    bodyType: "",
    complexion: "",
    maritalStatus: "",
    diet: "",
    smoking: "",
    drinking: "",
    hobbies: "",
    interests: "",
  });

  const handleChange = (e:any) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const SectionCard = ({ title, children }: any) => (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
      <h2 className="text-2xl font-bold text-red-800 font-serif mb-6">
        {title}
      </h2>
      {children}
    </div>
  );

  const InputField = ({ label, name }: any) => (
    <div className="flex flex-col mb-4">
      <label className="text-gray-500 text-sm mb-1">{label}</label>
      <input
        name={name}
        value={(profile as any)[name]}
        onChange={handleChange}
        className="border border-amber-200 rounded-xl p-2 outline-none focus:border-red-500"
      />
    </div>
  );

  return (
    <>
      <UserNavbar />

      <div className="min-h-screen pt-[100px] bg-gradient-to-br from-[#fff8f0] via-[#fdf6ee] to-[#fef0e6] px-6 pb-16">

        <div className="max-w-5xl mx-auto space-y-10">

          {/* PROFILE HEADER */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-amber-100">
            <div className="flex items-center gap-8">
              <img
                src="/profile8.PNG"
                className="w-32 h-32 rounded-3xl border-4 border-amber-300 object-cover"
                alt="Profile"
              />

              <div>
                <h1 className="text-3xl font-bold text-red-800 font-serif">
                  {profile.firstName} {profile.lastName}
                </h1>

                <span className="inline-flex items-center gap-1 mt-2 bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-medium">
                  <Crown size={14} /> Premium Member
                </span>
              </div>
            </div>
          </div>

          {/* MYSELF */}
          <SectionCard title="👤 Myself">

            <div className="grid md:grid-cols-2 gap-x-10">
              <InputField label="Gender" name="gender" />
              <InputField label="First Name" name="firstName" />
              <InputField label="Last Name" name="lastName" />
              <InputField label="Day" name="day" />
              <InputField label="Month" name="month" />
              <InputField label="Year" name="year" />
              <InputField label="Religion" name="religion" />
              <InputField label="Caste" name="religionFirst" />
              <InputField label="Mother Tongue" name="motherTongue" />
              <InputField label="Country" name="country" />
              <InputField label="Phone" name="phone" />
              <InputField label="Email" name="email" />
            </div>

            <textarea
              name="abouteMe"
              value={profile.abouteMe}
              onChange={handleChange}
              placeholder="About Me"
              className="w-full border border-amber-200 rounded-xl p-3 mt-4"
            />

          </SectionCard>

          {/* FAMILY DETAILS */}
          <SectionCard title="🏡 Family Details">

            <div className="grid md:grid-cols-2 gap-x-10">
              <InputField label="Father Name" name="fatherName" />
              <InputField label="Father Occupation" name="fatherOccupation" />
              <InputField label="Mother Name" name="motherName" />
              <InputField label="Mother Occupation" name="motherOccupation" />
              <InputField label="Family Type" name="familyType" />
              <InputField label="Family Status" name="familyStatus" />
              <InputField label="Brothers" name="brothers" />
              <InputField label="Sisters" name="sisters" />
              <InputField label="Family Values" name="familyValues" />
              <InputField label="Native Place" name="nativePlace" />
              <InputField label="Family Income" name="familyIncome" />
              <InputField label="Property Details" name="propertyDetails" />
            </div>

          </SectionCard>

          {/* PHYSICAL */}
          <SectionCard title="💎 Physical Attributes & Lifestyle">

            <div className="grid md:grid-cols-2 gap-x-10">
              <InputField label="Height" name="height" />
              <InputField label="Weight" name="weight" />
              <InputField label="Body Type" name="bodyType" />
              <InputField label="Complexion" name="complexion" />
              <InputField label="Marital Status" name="maritalStatus" />
              <InputField label="Diet" name="diet" />
              <InputField label="Smoking" name="smoking" />
              <InputField label="Drinking" name="drinking" />
              <InputField label="Hobbies" name="hobbies" />
              <InputField label="Interests" name="interests" />
            </div>

          </SectionCard>

          {/* SAVE BUTTON */}
          <div className="text-center">
            <button
              className="bg-gradient-to-r from-red-700 to-amber-500 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Save Profile
            </button>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}