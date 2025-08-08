const CallUsSection = () => {
  return (
    <div
      className="py-16 bg-cover bg-center relative"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/assets/banner.webp")',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
          Full (1550) × 749
        </div>
        <p className="text-white mb-4">Call Us Now</p>
        <h2 className="text-white text-4xl font-bold">+91 82000-60000</h2>
      </div>
    </div>
  );
};

export default CallUsSection;
