import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Image as ImageIcon,
} from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  const slides = images.map((image) => ({ src: image }));

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display - 16:9 Aspect Ratio */}
      <div className="relative group rounded-lg overflow-hidden shadow-xl bg-linear-to-br from-primary/10 via-accent/50 to-primary/5">
        {/* 16:9 Aspect Ratio Container */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          {imageError[currentIndex] ? (
            // Fallback UI when image fails to load
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-primary/5 via-accent/20 to-primary/10">
              <div className="text-center space-y-4 p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm">
                  <ImageIcon className="w-10 h-10 text-primary/50" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Screenshot Sedang Disiapkan
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Gambar untuk project ini akan segera ditambahkan
                  </p>
                </div>
                <div className="flex gap-2 justify-center pt-2">
                  <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          ) : (
            <img
              src={images[currentIndex]}
              alt={`${title} - Screenshot ${currentIndex + 1}`}
              className="absolute top-0 left-0 w-full h-full object-contain bg-muted cursor-pointer transition-transform duration-300 group-hover:scale-105"
              onClick={() => setOpen(true)}
              onError={() =>
                setImageError((prev) => ({ ...prev, [currentIndex]: true }))
              }
            />
          )}
        </div>

        {/* Zoom Overlay */}
        {!imageError[currentIndex] && (
          <button
            onClick={() => setOpen(true)}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Zoom image"
          >
            <Maximize2 className="w-5 h-5 text-foreground" />
          </button>
        )}

        {/* Navigation Arrows - Only show if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm text-foreground">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation - Only show if more than 1 image */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-accent justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative shrink-0 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === index
                  ? "border-primary scale-105 shadow-lg"
                  : "border-transparent hover:border-primary/50 opacity-70 hover:opacity-100"
              }`}
              style={{ width: "120px", height: "67.5px" }} // 16:9 ratio
            >
              {imageError[index] ? (
                // Fallback for thumbnail
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/10 to-accent/20">
                  <ImageIcon className="w-6 h-6 text-primary/40" />
                </div>
              ) : (
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={() =>
                    setImageError((prev) => ({ ...prev, [index]: true }))
                  }
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        on={{
          view: ({ index }) => setCurrentIndex(index),
        }}
      />
    </div>
  );
}
