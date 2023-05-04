const VideoBackground = () => {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/amazing-firefly-343705.appspot.com/o/Medride%20Website%20Loop%20Video%20-%205.48bitrate.mp4?alt=media&token=f90a98b3-66ed-420f-9012-60582fe185cd" type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoBackground