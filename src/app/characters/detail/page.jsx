"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"


const character = {
  id: 1,
  name: "Shoyo Hinata",
  position: "Middle Blocker",
  role: "Main Protagonist",
  image: "",
  abilities: [
    "Exceptional jumping ability",
    "Quick attack specialist",
    "Great stamina and agility",
    "Keen observational skills"
  ],
  notableMoments: [
    "Performing the quick attack with Kageyama for the first time",
    "Receiving the ball with his face during the match against Aoba Johsai",
    "Mastering the 'BAM' jump serve",
    "Scoring the final point against Shiratorizawa"
  ],
  bio: "Shoyo Hinata is a first-year student at Karasuno High School and one of the main protagonists of Haikyuu!!. Despite his short stature, Hinata has an impressive vertical jump and dreams of becoming the ace of his volleyball team. His determination and love for volleyball drive him to constantly improve and overcome challenges."
}

export default function CharacterDetailPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-[400px] md:h-auto">
              <Image
                src={character.image}
                alt={character.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
                onLoadingComplete={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              )}
            </div>
            <div className="md:w-1/2 p-6 md:p-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-2">{character.name}</h2>
                <p className="text-xl text-gray-600">{character.position} - {character.role}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-3">Abilities</h3>
                <ul className="list-disc list-inside space-y-2">
                  {character.abilities.map((ability, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    >
                      {ability}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-3">Notable Moments</h3>
                <ul className="list-disc list-inside space-y-2">
                  {character.notableMoments.map((moment, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    >
                      {moment}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-3">Biography</h3>
                <p className="text-gray-700 leading-relaxed">{character.bio}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>


    </div>
  )
}