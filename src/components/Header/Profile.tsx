import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>José Assis</Text>
          <Text color="gray.300" fontSize="small">
            netomenezesucg@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="José Assis"
        src="https://avatars.githubusercontent.com/u/5103843?s=400&u=9e745ca52dc445fa0aaa204789540d5bd1395db5&v=4"
      />
    </Flex>
  );
}
