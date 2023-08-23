import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Stack width={'100vw'} className="backcolor">
      <Box bg={'rgb(12,120,254)'} width={'100%'} h={'60vh'} zIndex={'10'}>
        <VStack
          spacing={'6'}
          color={'white'}
          justifyContent={'flex-start'}
          width={'100%'}
          h={'100%'}

          pt={'32'}
        >
          <Heading fontWeight={'600'} fontSize={'6xl'}>
          Welcome Back to LearnUnit
          </Heading>
          <Text fontSize={'xl'}>
            we are happy to get you back on your skills journey
          </Text>
        </VStack>
      </Box>
      <Container
        minHeight={'90vh'}
        h={'auto'}
        mt={'-32'}
        zIndex={'200'}
        pb={'16'}
      >
        <VStack
          height={'full'}
          justifyContent={'center'}
          spacing={'2'}
          boxShadow={'xl'}
          width={'100%'}
          p={'16'}
          bg={'white'}
          borderRadius={'xl'}
        >
          <Heading>LOGIN</Heading>
          <form style={{ width: '100%' }}>
            <Box my={4}>
              <FormLabel htmlFor="email" children={'Email Address'} />
              <Input
                required
                id="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
                placeholder="xyz@gmail.com"
                type="email"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
            </Box>
            <Box my={4}>
              <FormLabel htmlFor="password" children={'Password'} />
              <Input
                required
                id="password"
                value={[password]}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Your Password"
                type="password"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
            </Box>
            <Box>
              <Link to={'/forgetpassword'}>
                <Button colorScheme="red" fontSize={'md'} variant={'link'}>
                  Forgot Password?
                </Button>
              </Link>
            </Box>
            <Box className="shady">
              <Button
                flex={1}
                my={4}
                colorScheme="messenger"
                type="submit"
                width={'100%'}
              >
                Login
              </Button>
            </Box>
            <Box px={2} fontWeight={'semibold'}>
              Not Registered Yet?{' '}
              <Link to={'/register'}>
                <Button colorScheme={'messenger'} variant={'link'}>
                  Create an Account
                </Button>
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </Stack>
  );
};

export default Login;
