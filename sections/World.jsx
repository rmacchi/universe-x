'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute max-[430px]:top-1 top-2 max-[430px]:left-[42%] left-[60%] w-[205px] h-[115px] p-[5px] rounded-3xl bg-[#5d6680]/45 justify-center flex shadow-2xl shadow-black/80"
        >
          <div className="absolute w-[195px] h-[120px] shadow-2xl shadow-purple-600/60 rounded-full rotate-180" />
          <div className="absolute z-[2] w-[195px] h-[107px] flex justify-start items-end -space-x-3 rounded-2xl">
            <img
              src="/people-04.svg"
              alt="people"
              className="w-[25px] h-[25px] z-[2] mb-3 ml-2"
            />
            <img
              src="/people-05.svg"
              alt="people"
              className="w-[25px] h-[25px] z-[1] mb-3"
            />
            <img
              src="/people-06.svg"
              alt="people"
              className="w-[25px] h-[25px] mb-3"
            />
            <div className="w-full h-[48px] justify-center items-center flex">
              <p className="w-full text-white font-semibold text-[13px] leading-7 mx-4">+ 266 has joined</p>
            </div>
          </div>

          <img
            src="/planet-03.png"
            alt="planet"
            className="w-full h-full z-[1] rounded-3xl"
          />

        </div>

        <div className="absolute max-[430px]:top-[45%] md:top-[40%] max-[430px]:left-[25%] md:left-[37%] lg:top-[40%] lg:left-[190px] w-[205px] h-[115px] p-[5px] rounded-3xl
           bg-[#5d6680]/45 justify-center flex shadow-2xl shadow-black/80"
        >
          <div className="absolute w-[195px] h-[120px] shadow-2xl shadow-pink-500/50 rounded-full rotate-180" />
          <div className="absolute z-[2] w-[195px] h-[107px] flex justify-start items-end -space-x-3 rounded-2xl">
            <img
              src="/people-06.svg"
              alt="people"
              className="w-[25px] h-[25px] z-[2] mb-3 ml-2"
            />
            <img
              src="/people-05.svg"
              alt="people"
              className="w-[25px] h-[25px] z-[1] mb-3"
            />
            <img
              src="/people-04.svg"
              alt="people"
              className="w-[25px] h-[25px] mb-3"
            />
            <div className="w-full h-[48px] justify-center items-center flex">
              <p className="w-full text-white font-semibold text-[13px] leading-7 mx-4">+ 455 has joined</p>
            </div>
          </div>

          <img
            src="/planet-02.png"
            alt="planet"
            className="w-full h-full z-[1] rounded-3xl"
          />

        </div>

        <div className="max-[1138px]:hidden absolute bottom-28 right-24 w-[70px] h-[70px] p-[6px] rounded-full
           bg-[#5d6680] justify-center flex shadow-xl shadow-black/55"
        >
          <div className="absolute w-[65px] h-[70px] shadow-2xl shadow-orange-600/45 rounded-full rotate-180" />

          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full z-[1]"
          />

          <div className="absolute w-[19px] h-[19px] bg-[#5d6680] top-[58px] rounded-ss-xl rotate-[45deg]" />
        </div>

        <div className="max-[1138px]:hidden absolute top-10 left-36 w-[70px] h-[70px] p-[6px] rounded-full
           bg-[#5d6680] justify-center flex shadow-xl shadow-black/55"
        >
          <div className="absolute w-[65px] h-[70px] shadow-2xl shadow-pink-300/55 rounded-full rotate-180" />

          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full z-[1]"
          />

          <div className="absolute w-[19px] h-[19px] bg-[#5d6680] top-[58px] rounded-ss-xl rotate-[45deg]" />
        </div>

        <div className="max-[1024px]:hidden absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full
           bg-[#5d6680] justify-center flex shadow-xl shadow-black/55"
        >
          <div className="absolute w-[65px] h-[70px] shadow-2xl shadow-white/40 rounded-full rotate-180" />

          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full z-[1]"
          />

          <div className="absolute w-[19px] h-[19px] bg-[#5d6680] top-[58px] rounded-ss-xl rotate-[45deg]" />
        </div>

      </motion.div>

    </motion.div>
  </section>
);

export default World;
