import React from 'react';
import { VStack, Flex, Heading } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/button';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/color-mode';

interface Props {}
const App: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const icon = isDark ? <FaSun /> : <FaMoon />;

  return (
    <div className="App">
      <VStack p="5">
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="black.400">
            Hello From CRA with Chakra UI!
          </Heading>
        </Flex>
        <IconButton
          isRound
          aria-label="theme-toggle"
          icon={icon}
          onClick={toggleColorMode}
        />
      </VStack>
    </div>
  );
};

export default App;
