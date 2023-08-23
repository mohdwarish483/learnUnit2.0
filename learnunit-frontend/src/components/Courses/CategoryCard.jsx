import React from 'react';
import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardBody,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { RiPlayListAddLine } from 'react-icons/ri';

const CategoryCard = ({ bgm, children, items }) => (
  <Card
    boxShadow={'xl'}
    backgroundColor={'rgba(255,255,255,255)'}
    borderRadius={'12'}
  >
    <CardHeader
      height={'180px'}
      display={'flex'}
      borderTopRadius={'12'}
      objectFit={'contain'}
      alignItems={'center'}
      justifyContent={'center'}
      background={`url(${bgm})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Heading
        textAlign={'center'}
        fontSize={'40px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        color="white"
      >
        {children}
      </Heading>
    </CardHeader>
    <CardBody px={6}>
      <HStack
        width={'100%'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems="center"
        spacing={6}
      >
        <VStack gap={0}>
          <Text fontWeight="semibold" colorScheme="messenger">
            Items
          </Text>
          <Text fontSize={'sm'}>144</Text>
        </VStack>
        <Button flex={1} variant="outline" border={'1px solid rgb(12,109,254)'}>
          Explore
        </Button>
        <Button flex={1} variant="outline" border={'1px solid rgb(12,109,254)'}>
          <HStack>
            <RiPlayListAddLine /> <span>Courses</span>
          </HStack>
        </Button>
      </HStack>
    </CardBody>
  </Card>
);
export default CategoryCard;
