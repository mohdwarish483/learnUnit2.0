import { Box, Button, Container, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Heading, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

// componernt
const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  // usePrams
  const params = useParams('');
  console.log(params.token);

  // new password checker

  const passwordHandler = () => {
    if (password === confirmpassword) {
      setPassword(password);
    } else {
      console.log('password not matching');
    }
  };
  // form component
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
            Get Back Your Account in One Click
          </Heading>
          <Text fontSize={'xl'}>
            Just enter your registered email id and get the password
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
          <Heading textAlign={'center'}>FORGOT PASSWORD</Heading>
          <form style={{ width: '100%' }}>
            <VStack spacing={'8'} my={'4'}>
              <Input
                required
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter New Password"
                type="password"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
              <Input
                required
                value={confirmpassword}
                onChange={e => {
                  setConfirmpassword(e.target.value);
                }}
                placeholder="Confirm New Password"
                type="password"
                focusBorderColor="rgb(12,109,254)"
                border={'1px'}
              />
              <Button
                type="submit"
                w={'full'}
                colorScheme="messenger"
                onSubmit={passwordHandler}
              >
                Update Password
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Stack>
  );
};

export default ResetPassword;
