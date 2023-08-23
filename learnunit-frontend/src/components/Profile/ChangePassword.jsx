import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      dispatch(changePassword(oldPassword, newPassword));
    }
    else{
        console.log('password is not matching');
    }
  };

  const { loading, message, error } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Stack className="backcolor">
      <Container py="16" minH={'90vh'}>
        <form onSubmit={submitHandler}>
          <Heading
            textTransform={'uppercase'}
            my="8"
            textAlign={"center"}
          >
            Change Password
          </Heading>

          <VStack spacing={'8'}>
            <Input
              required
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              placeholder="Old Password"
              type={'password'}
              focusBorderColor={'rgb(12,120,254)'}
            />

            <Input
              required
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="New Password"
              type={'password'}
              focusBorderColor={'rgb(12,120,254)'}
            />
            <Input
              required
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              type={'password'}
              focusBorderColor={'rgb(12,120,254)'}
            />

            <Button
              isLoading={loading}
              w="full"
              colorScheme={'messenger'}
              type="submit"
            >
              Update Password
            </Button>
          </VStack>
        </form>
      </Container>
    </Stack>
  );
};

export default ChangePassword;
