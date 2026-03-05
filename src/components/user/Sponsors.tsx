
import { motion } from "framer-motion";

const sponsors = [
  { name: "Amit Jewellers", image: "/sponser1.PNG" },
  { name: "Rahul Weddings", image: "/sponser2.PNG" },
  { name: "Priya Couture", image: "/sponser3.PNG" },
  { name: "Sneha Events", image: "/sponser4.PNG" },
];

export default function Sponsors() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fff8f0] to-[#fdf1e6] relative overflow-hidden">

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h3 className="text-4xl font-bold text-gray-800 tracking-wide">
          Our Esteemed Sponsors
        </h3>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Sponsor Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center border border-yellow-200 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="relative w-28 h-28 mx-auto mb-4">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-full object-cover rounded-full border-4 border-yellow-500 shadow-md"
              />
            </div>

            <h4 className="font-semibold text-gray-700 text-lg">
              {sponsor.name}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400"></div>
    </section>
  );
}