"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Early Montessori Education",
    color: "bg-pink-400",
    desc: "At RILLS Schools, our Montessori wing focuses on fostering a love for learning from a young age. Using hands-on activities and child-centered approaches, we encourage independence and creativity in our students. This nurturing environment helps children develop critical thinking skils and a sense of responsibility, laying a strong foundation for their educational journey.",
  },
  {
    title: "Technology-Enhanced Learning",
    color: "bg-blue-400",
    desc: "In today's digital age, RILLS Schools integrates cutting-edge technology into our clasrooms to enrich the learning experience. Our digital education program equips students with essential 21st-century skills, allowing them to navigate various technological tools confidently. By combining traditional teaching methods with modern technology, we create a dynamic learning environment.",
  },
  {
    title: "Contemporary Curriculum",
    color: "bg-green-400",
    desc: "RILLS Schools is committed to providing a modern curriculum that meets the evolving needs of students and society. Our curriculum is designed to be relevant, inclusive, and adaptable, incorporating diverse perspectives and global issues. This approach not only enhances academic achievement but also fosters critical thinking and problem-solving abilities, ensuring our students",
  },
  {
    title: "Early Montessori Education",
    color: "bg-yellow-400",
    desc: "At RILLS Schools, we emphasize the importance of spiritual growth alongside academic excellence. Our Quran and Seerat program offers students a comprehensive understanding of Islamic teachings and values, guiding them to lead lives of integrity and compassion. This integration of faith and education helps students develop a strong moral compass and a sense of purpose in their lives.",
  },
  {
    title: "Personal Growth Development",
    color: "bg-purple-400",
    desc: "We believe that personal growth is as crucial as academic success. RILLS Schools focuses on developing the whole child, nurturing qualities such as self-confidence, resilience, and effective communication. Through various extracurricular activities, workshops, and mentorship programs, we empower students to explore their interests and become well-rounded individuals.",
  },
  {
    title: "Values and Character Education",
    color: "bg-red-400",
    desc: "At RILLS School's character building is woven into the fabric of our educational approach. We instill strong values such as respect/ empathy, and responsibility, preparing our students to be throughtful and ethical leaders in society. By promoting a culture of kindness and inclusivity, we create a supportive community where students learn the importance of giving back.",
  },
  {
    title: "Critical Thinking Skills",
    color: "bg-indigo-400",
    desc: "RILLS Schools prioritizes the development of critical thinking skills, encouraging student to think independently and analytically- Through inquiry-based learning, discussions, and problem-solving activities, we cultivate an environment where student feel empowered to ask questions and seek solutions. This focus on critical thinking not only enhances academic performance.",
  },
  {
    title: "STEAM Learning Approach",
    color: "bg-emerald-400",
    desc: "Our STEAM program (Science, Technology, Engineering, Arts, and Mathematics) at RILLS Schools promotes creativity and innovation through interdisciplinary learning. By integrating these subjects, we encourage students to make connections and apply their knowledge in practical ways. This hands-on approach not only lgnites curiosity but also prepares students for future careers.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function Card({ color, title, desc }) {
  return (
    <div className="flex-1 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 bg-white border border-main group">
      <h3 className="text-base sm:text-xl font-semibold mb-2 flex items-center gap-2 relative py-2 pl-4">
        <div
          className={`${color} h-full w-1.5 group-hover:w-full transition-all duration-300 rounded-md inline-block absolute left-0 top-0`}
        ></div>
        <span className="inline-block relative z-10 group-hover:text-white transition-all duration-300">
          {title}
        </span>
      </h3>
      <p className="text-gray space-y-3 text-xs sm:text-base leading-normal">
        {desc}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section className="maxWSec px-6 sm:px-12 py-12 flex gap-12 flex-col">
      <div className="text-center space-y-4">
        <h2 className="h2">
          Salient features of <span className="text-main">RILLS</span>
        </h2>
        <h2 className="h3 text-gray !font-normal">
          The Fastest Growing Network in Central Punjab
        </h2>
      </div>
      <div className="flex flex-wrap justify-center p-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="w-full sm:w-1/2 xl:w-1/3 max-sm:pb-4 sm:p-3 flex"
          >
            <Card {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
