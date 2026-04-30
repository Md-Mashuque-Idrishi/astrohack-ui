const images = [
  "https://picsum.photos/id/1015/600/600",
  "https://picsum.photos/id/1016/600/600",
  "https://picsum.photos/id/1018/600/600",
  "https://picsum.photos/id/1020/600/600",
  "https://picsum.photos/id/1024/600/600", 
  "https://picsum.photos/id/1035/600/600",
];

function Gallery() {
  return (
    <section className="gallery fade-section" aria-label="Image Gallery">
      {images.map((src, index) => (
        <div className="card" key={index}>
          <img
            src={src}
            alt={`gallery-${index}`}
            loading="lazy"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400";
            }}
          />
        </div>
      ))}
    </section>
  );
}

export default Gallery;