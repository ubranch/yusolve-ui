import { ConsultationModalTrigger } from './ConsultationModalTrigger';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center font-sans font-medium">
      {/* Background Video */}
      <video
        id="background_video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        <source src="/videos/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Shadow Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="mx-2 text-4xl md:text-5xl lg:text-6xl font-bold text-white/70 mb-3">
            You Keep Our Nation Running
          </h2>
          <p className="mx-2 text-white/40 md:text-lg lg:text-xl text-white mb-5 max-w-xl">
            Encouraging and supporting transportation entrepreneurs, just like you for over 20 years!
          </p>
          <ConsultationModalTrigger />
        </div>
      </div>
    </section>
  );
}
