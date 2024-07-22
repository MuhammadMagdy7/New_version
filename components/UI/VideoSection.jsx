import { useRef, useEffect } from 'react';

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Work in Action</h2>
        <div className="relative aspect-w-16 aspect-h-9">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loop
            muted
            playsInline
          >
            <source src="/version.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;