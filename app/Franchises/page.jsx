import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";

const images = [
  {
    title: "alaska",
    src: "alaska.webp",
    address: "Iqbal Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Alaska+Iqbal+town+Campus/@31.5157321,74.2848863,17z/data=!3m1!4b1!4m6!3m5!1s0x391903bb93ece755:0xe80dce718821930a!8m2!3d31.5157276!4d74.2874612!16s%2Fg%2F11rmnbfklt?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=b152f5dc-8bed-4651-bc2e-a5ec210fbe06",
  },
  {
    title: "atlas",
    src: "atlas.webp",
    address: "Kot Abdul Malik, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Atlas+Kot+Abdul+Malik+Campus/@31.6233105,74.2352751,17z/data=!3m1!4b1!4m6!3m5!1s0x39191d8a015e10ff:0x7d4599d41b5bf55a!8m2!3d31.623306!4d74.23785!16s%2Fg%2F11sjfq5fvy?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=e8c8becb-02a9-4dd7-adb5-01969534d0aa",
  },
  {
    title: "eiger",
    src: "eiger.webp",
    address: "Raiwind Road, Lahore",
    url: "https://www.google.com/maps/place/RILLS+Eiger+Campus/@31.4831276,74.169581,11z/data=!3m1!4b1!4m6!3m5!1s0x888fa1ba0c625b3:0xa10c62b7a82fb283!8m2!3d31.4829403!4d74.3343893!16s%2Fg%2F11yd_z2gp3?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=1b3478c7-6921-4008-a253-cdde35730bfa",
  },
  {
    title: "elburs",
    src: "elburs.webp",
    address: "Johar Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+ELBRUS/@31.431956,74.2706731,17z/data=!3m1!4b1!4m6!3m5!1s0x39190100703c6c89:0xe486460df7d77e3d!8m2!3d31.4319514!4d74.273248!16s%2Fg%2F11lm_6sj2s?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=e35d58ca-c278-4173-8088-c378e3888609",
  },
  {
    title: "himalaya",
    src: "himalaya.webp",
    address: "Kamoke, Gujranwala",
    url: "https://www.google.com/maps/place/RILLS+School+Himalaya+Kamoke+Campus/@31.9927417,74.1954897,14z/data=!4m6!3m5!1s0x391929db2d10cadd:0x4afeb4673c4b9bc5!8m2!3d31.9642279!4d74.2251459!16s%2Fg%2F11f64hfb91?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "margalla",
    src: "margalla.webp",
    address: "Kamoke",
    url: "https://www.google.com/maps/place/RILLS+MARGALLA+CAMPUS/@31.9927025,74.2135144,17z/data=!4m6!3m5!1s0x39192bb0edb8930f:0xb23193ab9b1ee9b0!8m2!3d31.992698!4d74.2183853!16s%2Fg%2F11gnsfs_49?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "pamir",
    src: "pamir.webp",
    address: "Kamoke",
    url: "https://www.google.com/maps/place/RILLS+SCHOOL+PAMIR+CAMPUS/@32.0909411,73.6390962,9z/data=!4m6!3m5!1s0x39192186ad44a5bf:0x5a39ec909249181!8m2!3d31.7909693!4d74.255312!16s%2Fg%2F11hz_3xllc?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "monarch",
    src: "monarch.webp",
    address: "Nawab Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Monarch+Campus+-+Nawab+Town+Lahore/@31.4572447,74.2437162,17z/data=!3m1!4b1!4m6!3m5!1s0x391901f5029b99a5:0x6208414d49a28dd2!8m2!3d31.4572401!4d74.2462911!16s%2Fg%2F11lyz4rqd5?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=c356926f-4699-40c0-a16f-b9e890f311a2",
  },
  {
    title: "pico",
    src: "pico.webp",
    address: "Citi Housing, Lahore",
    url: "https://www.google.com/maps/place/RILLS+Pico+Campus+-+Citi+Housing/@32.0661488,74.1803084,17z/data=!4m7!3m6!1s0x3918d500750d4f7f:0xf4d30a67bad913d0!8m2!3d32.0661866!4d74.1897086!15sChFyaWxscyBwaWNvIGNhbXB1c5IBBnNjaG9vbKoBOhABMh8QASIbj_hWdle4LlzdE28P1C1f6bvK_iy58E_ZB8kbMhUQAiIRcmlsbHMgcGljbyBjYW1wdXPgAQA!16s%2Fg%2F11vq7s2c76?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=1b0550d9-82f8-40a1-be80-f336a2de5ab2",
  },
  { title: "sianai", src: "sianai.webp", address: "Al- Rehamn Garden, Lahore", url: "https://www.google.com/maps/place/RILLS+School+Sinai+Campus+Al+Rehman+Garden/@31.5997359,74.2241046,17z/data=!3m1!4b1!4m6!3m5!1s0x39191d44c4772b23:0xab14727b42a6c9e1!8m2!3d31.5997314!4d74.2266795!16s%2Fg%2F11ygg20py1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" },
  {
    title: "sierra",
    src: "sierra.webp",
    address: "Johar Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Sierra+Johar+town+Campus/@31.4575806,74.2937979,17z/data=!3m1!4b1!4m6!3m5!1s0x391901ef0101cd7f:0xe56ee2a14843a4d!8m2!3d31.4575761!4d74.2986688!16s%2Fg%2F11lmcd52s2?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=2a12aff7-97de-415a-93c8-02c689af441d",
  },
  {
    title: "uhad",
    src: "uhad.webp",
    address: "Bahria Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Bahria+Campus/@31.3619907,74.1935466,17z/data=!3m1!4b1!4m6!3m5!1s0x39185582c3ac2745:0x8c57a81b05ad80d8!8m2!3d31.3619861!4d74.1961215!16s%2Fg%2F11lgkt5cf0?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=465ec79e-f0c7-45e5-bde0-7e099fc67e95",
  },
];

const Franchises = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center py-12 bg-gray-50"
      style={{ fontFamily: "Berlin, sans-serif", "--theme-color": "#EDA837" }}
    >
      <div className="w-full px-6 sm:px-12">
        <HeroHeader title="Franchises" description="RILLS Franchises" />

        <div className="mt-8 flex flex-col items-center">
          <p className="mb-6 text-center text-gray-600 text-5xl font-bold">
            Our <span style={{ color: "#EDA837" }}>Franchises</span>
          </p>

          {/* Centered grid with two fixed 450px columns */}
          <div className="w-full flex justify-center">
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(2, 450px)" }}>
              {images.map((img, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#2e1804] border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center hover:bg-[#1d1d1e]"
                  style={{ width: "450px" }}
                >
                  {/* Title with theme color via CSS variable fallback to #EDA837 */}
                  <h3
                    className="text-4xl font-semibold capitalize"
                    style={{ color: "var(--theme-color, #EDA837)" }}
                  >
                    {`${img.title} Campus`}
                  </h3>

                  <p className="mt-2 text-lg text-white dark:text-gray-300">
                    {img.address ?? "Address not available"}
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    {img.url ? (
                      <a
                        href={img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{
                          backgroundColor: "var(--theme-color, #EDA837)",
                          boxShadow: "0 6px 18px rgba(237,168,55,0.12)",
                        }}
                      >
                        {/* location pin icon */}
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                        </svg>
                        <span>Open in Google Maps</span>
                      </a>
                    ) : (
                      <span className="inline-block px-4 py-2 rounded-full text-sm text-gray-500 bg-gray-100 dark:bg-slate-700">
                        No location link
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Franchises;
