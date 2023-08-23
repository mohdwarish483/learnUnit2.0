import React from 'react';
import { css } from '@emotion/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import {
  RiDashboardLine,
  RiGitPullRequestLine,
  RiMenu5Line,
  RiFileList3Line,
  RiHome8Line,
  RiProfileLine,
  RiUserLine,
  RiLogoutBoxLine,
  RiPhoneLine,
} from 'react-icons/ri';
import { Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const buttonStyles = css`
  &:hover {
    background-color: 'blackAlpha.900';
    border: 1px solid rgb(12, 120, 254);
    transition: border 1s ease-in-out, background-color 1s ease-in-out;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.175);
  }
  width: auto;
  border: 1px solid transparent;
`;

const LinkComponent = ({ onClick, icon, title = 'home', url = '/' }) => (
  <Link to={url} onClick={onClick}>
    <Button variant="ghost" css={buttonStyles}>
      <HStack justifyContent={'space-around'}>
        {icon}
        <span>{title}</span>
      </HStack>
    </Button>
  </Link>
);

const Header = () => {
  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };
  const { onClose, onOpen, isOpen } = useDisclosure();
  const logoutHandler = () => {
    console.log('logout is called 20');
    onClose();
  };

  return (
    <HStack
      position={'fixed'}
      width={'100vw'}
      height={'10vh'}
      px={'32'}
      py={'2'}
      zIndex={'10000'}
      bg={'rgb(12,120,254)'}
      justifyContent={'space-between'}
    >
      <Link to={'/'}>
        <Heading color={'white'}>
          Learn
          <Text display={'inline-flex'} color={'black'}>
            Unit
          </Text>
        </Heading>
      </Link>
      <ColorModeSwitcher zIndex={'overlay'} />
      <Button
        onClick={onOpen}
        // colorScheme={'messenger'}
        rounded={'full'}
        h={'12'}
        width={'12'}
        position={'fixed'}
        top="2"
        left="8"
        zIndex={'overlay'}
      >
        <RiMenu5Line></RiMenu5Line>
      </Button>
      <HStack spacing={'4'}>
        {isAuthenticated ? (
          <>
            <Button
              onClick={logoutHandler}
              variant={'solid'}
              colorScheme="messenger"
              css={buttonStyles}
            >
              {' '}
              <HStack justifyContent={'space-around'}>
                <RiLogoutBoxLine />
                <span>Logout</span>
              </HStack>
            </Button>
          </>
        ) : (
          <>
            <Link to={'/login'} className="shady">
              {' '}
              <Button>Login</Button>
            </Link>{' '}
            <Link to={'/register'} className="shady">
              {' '}
              <Button>SignUp</Button>
            </Link>
          </>
        )}
        ;
        <Link to={'/contact'} className="shady">
          {' '}
          <Button>Contact Us</Button>
        </Link>
      </HStack>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(6px)'} />
        <DrawerContent>
          <DrawerBody>
            <VStack spacing={4} alignItems={'flex-start'} py={'10vh'}>
              <LinkComponent
                onClick={onClose}
                icon={<RiHome8Line />}
                url="/"
                title="Home"
              />
              {user && user.role === 'admin' && (
                <LinkComponent
                  onClick={onClose}
                  icon={<RiDashboardLine />}
                  url="/admin/dashboard"
                  title="Dashboard"
                />
              )}
              {isAuthenticated && (
                <LinkComponent
                  onClick={onClose}
                  icon={<RiUserLine />}
                  url="/profile"
                  title="Profile"
                />
              )}
              <LinkComponent
                onClick={onClose}
                icon={<RiFileList3Line />}
                url="/allcourses"
                title="All Courses"
              />
              <LinkComponent
                onClick={onClose}
                icon={<RiGitPullRequestLine />}
                url="/request"
                title="Request A Course"
              />
              <LinkComponent
                onClick={onClose}
                icon={<RiPhoneLine />}
                url="/contact"
                title="Contact Us"
              />
              <LinkComponent
                onClick={onClose}
                icon={<Icon as={RiProfileLine} />}
                url="/about"
                title="About Us"
              />
              <HStack>
                {isAuthenticated ? (
                  <>
                    <Button
                      onClick={logoutHandler}
                      variant={'solid'}
                      colorScheme="messenger"
                      css={buttonStyles}
                    >
                      {' '}
                      <HStack justifyContent={'space-around'}>
                        <RiLogoutBoxLine />
                        <span>Logout</span>
                      </HStack>
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to={'/login'} className="shady">
                      {' '}
                      <Button onClick={onClose} colorScheme="messenger">
                        Login
                      </Button>
                    </Link>{' '}
                    <p>OR</p>
                    <Link to={'/register'} className="shady">
                      {' '}
                      <Button onClick={onClose} colorScheme="messenger">
                        SignUp
                      </Button>
                    </Link>
                  </>
                )}
                ;
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export { Header, buttonStyles };
