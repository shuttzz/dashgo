import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  isCurrent?: boolean;
  numberPage: number;
}

export function PaginationItem({
  isCurrent = false,
  numberPage,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ backgroundColor: 'pink.500', cursor: 'default' }}
      >
        {numberPage}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      backgroundColor="gray.700"
      _hover={{
        backgroundColor: 'gray.500',
      }}
    >
      {numberPage}
    </Button>
  );
}
