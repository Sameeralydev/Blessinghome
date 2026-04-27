import HeroHeader from "@/components/HeroHeader";

const ContactUs = () => {
  return (
    <main>
      <HeroHeader
        title={"Contact Us"}
        description="Blessing Home Public School, Pakpattan"
      />

      <section className="maxWSec px-6 sm:px-12 py-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-grayL p-8 bg-white shadow-sm">
          <h2 className="h3 mb-4">School Information</h2>
          <div className="space-y-4 text-base sm:text-lg text-grayD">
            <p>
              <span className="font-semibold text-dark">School Name:</span>{" "}
              Blessing Home Public School
            </p>
            <p>
              <span className="font-semibold text-dark">City:</span> Pakpattan,
              Punjab
            </p>
            <p>
              <span className="font-semibold text-dark">Phone:</span>{" "}
              <a href="tel:03071693780" className="text-main">
                03071693780
              </a>
            </p>
            <p>
              <span className="font-semibold text-dark">Facebook:</span>{" "}
              <a
                href="https://www.facebook.com/blessinghomeschool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main break-all"
              >
                facebook.com/blessinghomeschool
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-sec text-light p-8">
          <h2 className="h3 mb-4">Admission Help</h2>
          <p className="text-base sm:text-lg leading-relaxed text-white/90">
            Parents are welcome to contact the school for admission guidance,
            registration details, class placement information, and general
            school queries. Our team will help you with the next step and share
            the information you need.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/OnlineAdmission"
              className="rounded-full bg-main px-5 py-3 font-medium text-white"
            >
              Open Admission Form
            </a>
            <a
              href="tel:03071693780"
              className="rounded-full border border-white/30 px-5 py-3 font-medium text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
