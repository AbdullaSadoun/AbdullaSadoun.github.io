import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(
    images.find(img => img.isMain) || images[0]
  )

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedImage.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-video rounded-xl overflow-hidden bg-secondary/20"
        >
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`
              relative aspect-video rounded-lg overflow-hidden
              transition-all duration-200
              ${selectedImage.id === image.id 
                ? 'ring-2 ring-accent ring-offset-2 ring-offset-black' 
                : 'hover:opacity-80'
              }
            `}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery 