import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

type Props = {
  image: string;
  text: string;
  slug: string;
};

export default function ProjectTile({ image, text, slug }: Props) {
  return (
    <Tilt className="group shadow-xl hover:shadow-sky-300 relative flex rounded-md">
      <motion.div
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
      >
        <Link href={`/projects/${slug}`}>
          <Image
            className="w-full h-full object-cover filter group-hover:grayscale transition duration-300 ease-in-out rounded-md"
            src={image}
            alt={text}
            width={600}
            height={600}
          />

          <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out z-0 group-hover:bg-white h-full w-full">
            <div className="flex justify-center items-center h-full">
              <p className="text-xl font-bold text-black opacity-100">{text}</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </Tilt>
  );
}
