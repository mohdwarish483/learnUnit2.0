import React from 'react';
import {
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Box,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import bg from '../../assets/images/My project-1.png';
import web from '../../assets/images/webdev.jpg';
import ai from '../../assets/images/ai.jpg';
import machine from '../../assets/images/machine2.jpg';
import market from '../../assets/images/marketing.jpg';
import dsa from '../../assets/images/dsa.jpg';
import app from '../../assets/images/app2.jpg';
import react from '../../assets/images/reactjs.jpg';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import './home.css';
import homevideo from '../../assets/videos/intro.mp4';
import CategoryCard from '../Courses/CategoryCard.jsx';

const Home = () => {
  const cardCourses = [
    {
      bgm: web,
      children: 'Web Development',
    },
    {
      bgm: ai,
      children: 'Artificial Intelligent',
    },
    {
      bgm: machine,
      children: 'Machine Learning',
    },
    {
      bgm: app,
      children: 'App Development',
    },
    {
      bgm: react,
      children: 'React Js',
    },
    {
      bgm: market,
      children: 'Digital Marketing',
    },
    {
      bgm: dsa,
      children: 'DSA',
    },
  ];

  return (
    <Box
      className="container"
      display="flex"
      flexDirection="column"
      width="100vw"
      paddingTop={'9vh'}
    >
      <Box
        flex="1"
        width="100vw"
        minH={'100vh'}
        p={'0'}
        height={'auto'}
        className="backcolor"
      >
        <VStack
          alignItems={'center'}
          m={'0'}
          justifyContent={'center'}
          spacing={['1', '4']}
          width={'100%'}
          bg={'rgb(12,120,254)'}
          clipPath={'polygon(0% 0%,100% 0%,100% 70%,0% 100%)'}
          h={'50vh'}
        >
          <Stack
            h={'100%'}
            direction={['column', 'row']}
            justifyContent={['center', 'flex-start']}
            w={'100%'}
            alignItems={'center'}
            spacing={'2'}
            px={'8'}
            flexWrap={'wrap'}
          >
            <VStack
              alignItems={['center', 'flex-end']}
              spacing={4}
              // mt={'20'}
              zIndex={'5'}
            >
              <Heading textAlign={['center', 'left']} color={'white'}>
                LearnUnit - Enhance Your Learning Speed
              </Heading>
              <Text
                textAlign={['center', 'left']}
                fontFamily="revert"
                color={'white'}
              >
                Unlock your Potential Today With Our Innovative and Expert-led
                Courses
              </Text>
              <Link to={'/allcourses'} className="shady">
                {' '}
                <Button>Explore Now</Button>
              </Link>
            </VStack>
          </Stack>
          {/* <Stack width={'100%'}>
            <svg
              overflow={'hidden'}
              width={'100%'}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#0c78fe"
                fillOpacity="1"
                d="M0,96L60,80C120,64,240,32,360,26.7C480,21,600,43,720,90.7C840,139,960,213,1080,234.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </Stack> */}
        </VStack>
        <HStack
          maxH={'50vh'}
          w={'100%'}
          justifyContent={'flex-end'}
          zIndex={'5000'}
        >
          {' '}
          <Box
            maxH={'50%'}
            // h={'50vh'}
            boxSize={'50%'}
            display="flex"
            textAlign="center"
            flex={1}
            // width={'50%'}
            justifyContent={'flex-end'}
          >
            <Image
              width={'50%'}
              maxHeight={'50vh'}
              className="land-image"
              src={bg}
              objectFit="contain"
              mb={'36%'}
              // border={'2px solid black'}
            />
          </Box>
        </HStack>
      </Box>

      <Stack
        width="100%"
        p={8}
        flexDirection="column"
        spacing={4}
        className="backcolor"
      >
        <Heading fontSize="xl">Top Categories ➤</Heading>

        <SimpleGrid
          templateColumns="repeat(auto-fill, minmax(300px, 350px))"
          spacing={['8', '6']}
          justifyContent="center"
        >
          {cardCourses.map((item, index) => (
            <CategoryCard key={index} bgm={item.bgm} children={item.children} />
          ))}
        </SimpleGrid>
      </Stack>
      <Box
        height="auto"
        padding={6}
        bg={'rgb(12,120,254)'}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="space-evenly"
      >
        <Heading
          textAlign="center"
          fontFamily="body"
          color="white"
          children="OUR PARTNER"
        />
        <HStack
          width="100%"
          justifyContent="space-evenly"
          className="brands-banner"
          alignItems="center"
          mt="1rem"
          textAlign="center"
          fontSize="xl"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container2 backcolor">
        <Box width={['100%', '50%']}>
          <video
            autoPlay={false}
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback
            src={homevideo}
          ></video>
        </Box>
      </div>
    </Box>
  );
};

export default Home;
