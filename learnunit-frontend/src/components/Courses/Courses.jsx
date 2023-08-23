import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  Flex,
  Avatar,
  Box,
  IconButton,
} from '@chakra-ui/react';
import '.././Home/home.css';
import { Rating } from 'react-simple-star-rating';
import { RiPlayListAddLine } from 'react-icons/ri';
import React, { useState } from 'react';
import web from '../../assets/images/webdev.jpg';
import { Link } from 'react-router-dom';
import { buttonStyles } from '../Layout/Header';

// playlist handler

const playlistHandler = () => {
  console.log('playlist called');
};

const CourseCard = ({
  views,
  title,
  imageSrc,
  id,
  playlistHandler,
  creator,
  description,
  lectureCount,
  price,
  avtar,
}) => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = rate => {
    setRating(rate);
    // Some logic
  };

  return (
    <Card minW="xs" className="course" mb={0} boxShadow={'xl'}>
      <CardHeader p={0}>
        <Image
          borderTopRadius="2%"
          objectFit="cover"
          src={imageSrc}
          alt="Chakra UI"
        />
      </CardHeader>
      <CardBody p={6} pt={2}>
        <VStack alignItems={'flex-start'}>
          <Stack>
            <Heading
              textAlign={'left'}
              size="sm"
              maxW="200px"
              fontFamily="sans-serif"
              noOfLines={3}
            >
              {title}
            </Heading>
            <Text noOfLines={2} display={'flex'} justifyContent={'flex-start'}>
              {description}
            </Text>
          </Stack>
          <Flex width={'100%'} justifyContent={'space-between'}>
            <Flex
              flex="1"
              gap={4}
              justifyContent={'flex-start'}
              alignItems="center"
              flexWrap="wrap"
            >
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">Creator</Heading>
                <Text fontFamily="serif">{creator}</Text>
              </Box>
            </Flex>
            <Flex>
              <Box>
                <Heading size="sm">
                  <Rating
                    textAlign={'center'}
                    flexDirection="row"
                    onClick={handleRating}
                    ratingValue={rating}
                    size={18}
                    label
                    transition
                    fillColor="orange"
                    emptyColor="gray"
                    className="foo"
                  />
                </Heading>
                <Text textAlign={'center'} fontWeight="bold">
                  Rating - {rating}
                </Text>
              </Box>
            </Flex>
          </Flex>

          <HStack
            width="100%"
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <Heading textTransform="uppercase" textAlign="center" size="xs">
              {`Lectures - ${lectureCount}`}
            </Heading>
            <Heading textTransform="uppercase" textAlign="center" size="xs">
              views - {views}
            </Heading>
          </HStack>
        </VStack>
      </CardBody>

      <CardFooter p={6} pt={0} alignItems={'center'}>
        <HStack width={'100%'} justifyContent={'space-between'}>
          <Link to={`/course/${id}`} className="shady">
            <Button flex={1} size={'sm'} colorScheme="messenger">
              Watch Now
            </Button>
          </Link>
          <Button
            css={buttonStyles}
            size={'sm'}
            onClick={playlistHandler}
            border="1px solid rgb(12, 109, 254)"
            maxW={'max-content'}
            flex={1}
            variant="outline"
          >
            <HStack>
              <RiPlayListAddLine /> <span>Playlist</span>
            </HStack>
          </Button>
          <Text fontSize={'xl'} fontWeight={'semibold'}>
            ₹{price}
          </Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categoryArray = [
    'Web Development',
    'Artificial Intelligent',
    'Machine Learning',
    'DSA',
    'React js',
    'App development',
    'Marketing Course',
  ];
  return (
    <>
      <Stack className="backcolor">
        <Container
          minHeight={'95vh'}
          maxW={'container.lg'}
          paddingY={'8'}
          className="backcolor"
        >
          <Heading children={'All Courses'} m={'8'} />
          <Input
            border={'1px solid rgba(0,0,0,0.175)'}
            shadow={'0px 0px 6px rgba(100,100,100,0.5)'}
            type="text"
            value={keyword}
            backgroundColor={'white'}
            onChange={e => setKeyword(e.target.value)}
            placeholder="Search a Course..."
          />
          <HStack
            overflowX={'auto'}
            paddingY={8}
            css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {categoryArray.map((item, index) => (
              <Button
                colorScheme="messenger"
                key={index}
                onClick={() => setCategory(item)}
                minW={60}
              >
                <Text children={item} />
              </Button>
            ))}
          </HStack>
          <Stack
            direction={['column', 'row']}
            flexWrap={'wrap'}
            justifyContent={['flex-start', 'space-evenly']}
            alignItems={['center', 'flex-start']}
          >
            <CourseCard
              title={'sample'}
              description={'my name is mohd warish'}
              imageSrc={web}
              id={'newid'}
              creator={'mohd warish'}
              lectureCount={3}
              views={200}
              playlistHandler={playlistHandler}
              price={299}
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default Courses;
