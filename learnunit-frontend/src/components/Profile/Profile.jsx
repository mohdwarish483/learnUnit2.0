import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileCss } from '../Auth/Register';
import { Link } from 'react-router-dom';

// function photo change

function ChangePhotoBox({ isOpen, onClose }) {
  //state management
  const [imagePreview, setImagePreview] = useState('');
  const [image, setImage] = useState('');

  // image handler
  const fileHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  // changeImageSubmitHandler
  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault(); 
    console.log(image);
  };

  // close handler

  const closeHandler = () => {
    onClose();
    setImage('');
    setImagePreview('');
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler }>
      <ModalOverlay backdropFilter={'blur(10px)'} />                                                                        
      <ModalContent alignItems={'center'} p={'2'}>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => changeImageSubmitHandler(e, image)}>
              <VStack spacing={'6'}>
                {imagePreview && (
                  <Avatar src={imagePreview} boxSize={'48'}></Avatar>
                )}
                <Input type="file" css={fileCss} onChange={fileHandler} />
                <Button type="submit" colorScheme="messenger" width ={'106%'}>
                  Update Now
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter p={'6'}>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

// profile component

const Profile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
    //state management
    const [imagePreview, setImagePreview] = useState('');
    const [image, setImage] = useState('');
  
    // image handler
    const fileHandler = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImage(file);
      };
    };

  // user object

  const user = {
    name: 'warish',
    email: 'khanwarish483@gmail.com',
    createdAt: String(new Date()),
    subscription: {
      status: 'not',
    },
    role: 'user',
    playlist: [
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
      {
        courseId: 'shjhhkdsk',
        courseTitle: 'learn now backend',
        poster:
          'https://png.pngtree.com/background/20230527/original/pngtree-bright-pink-golf-cart-is-shown-on-a-dark-background-picture-image_2766603.jpg',
      },
    ],
  };

  // playlist handler

  const removeFromPlaylistHandler = id => {
    console.log(id);
  };
  return (
    <Stack className="backcolor" width={'100vw'}>
      <Container maxW={'container.lg'} minH={'95vh'} py={'8'}>
        <Heading m={'8'} textTransform={'uppercase'}>
          Profile
        </Heading>
        <Stack
          justifyContent={'flex-start'}
          direction={['column', 'row']}
          alignItems={'center'}
          spacing={['8', '16']}
          padding={'8'}
        >
          <VStack>
            <Avatar boxSize={'48'}src={image} ></Avatar>
            <Button colorScheme="messenger" onClick={onOpen}>
              Change Photo
            </Button>
          </VStack>
          <VStack alignItems={'flex-start'}>
            <HStack>
              <Text fontWeight={'bold'}>Name</Text>
              <Text>{user.name}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={'bold'}>Email</Text>
              <Text>{user.email}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={'bold'}>createdAt</Text>
              <Text>{user.createdAt.split('T')[0]}</Text>
            </HStack>
            {user.role !== 'admin' && (
              <HStack>
                <Text fontWeight={'bold'}>Subscription</Text>
                {user.subscription && user.subscription.status === 'active' ? (
                  <Button size={'sm'} flex={1} colorScheme={'red'}>
                    Cancel Subscription
                  </Button>
                ) : (
                  <Link to={'/subscribe'}>
                    <Button size={'sm'} flex={1} colorScheme="messenger">
                      Subscribe Now
                    </Button>
                  </Link>
                )}
              </HStack>
            )}

            <Stack direction={['column', 'row']} alignItems={'center'}>
              <Link to={"/updateprofile"}>
                <Button size={'sm'} flex={1} border={'1px solid rgb(12,120,254)'}>
                  Update Profile
                </Button>
              </Link>
              <Link to={"/changepassword"}>
                <Button size={'sm'} flex={1} border={'1px solid rgb(12,120,254)'}>
                  Change Password
                </Button>
              </Link>
            </Stack>
          </VStack>
        </Stack>

        <Heading size={'md'}>My Playlist</Heading>
        {user.playlist.length > 0 && (
          <HStack
            width={'100%'}
            overflowX={'auto'}
            paddingY={8}
            spacing={'8'}
            css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          >
            {user.playlist.map((item, index) => (
              <Card
                minWidth={'240px'}
                gap={'0'}
                backgroundColor={'rgba(255,255,255,255)'}
                border={'1px solid'}
                borderColor={'blackAlpha.300'}
                borderRadius={'lg'}
                padding={'2'}
              >
                <CardHeader
                  minH={'180px'}
                  borderTopRadius={'lg'}
                  objectFit={'contain'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  background={`url(${item.poster})`}
                  backgroundSize="cover"
                  backgroundPosition="center"
                />

                <CardBody pt={'2'}>
                  <VStack width={'100%'}>
                    <Text noOfLines={1} fontWeight={'bold'}>
                      {item.courseTitle}
                    </Text>

                    <HStack justifyContent={'space-around'} width={'100%'}>
                      <Link to={`/course/${item.courseId}`}>
                        <Button flex={1} size={'sm'} colorScheme="messenger">
                          Watch Now
                        </Button>
                      </Link>
                      <Button
                        size={'sm'}
                        onClick={() => removeFromPlaylistHandler(item.courseId)}
                      >
                        <RiDeleteBin7Fill color="red" />
                      </Button>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </HStack>
        )}

        <ChangePhotoBox isOpen={isOpen} onClose={onClose} />
      </Container>
    </Stack>
  );
};
export default Profile;
