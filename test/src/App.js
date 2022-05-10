import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Grid,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Heading,
  Link,
  RadioGroup,
  Radio,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function App() {
  const [input, setInput] = useState('');
  const [value, setValue] = useState('shrtco.de');
  const [items, setItems] = useState();
  const [link, setLink] = useState('');

  const handleInputChange = event => setInput(event.target.value);

  let data;

  const handleClick = async () => {
    data = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
    setItems(await data.json());
  };

  useEffect(() => {
    if (items !== undefined) {
      if (value === 'shrtco.de') {
        setLink(items.result.short_link);
      } else if (value === '9qr.de') {
        setLink(items.result.short_link2);
      } else if (value === 'shiny.link') {
        setLink(items.result.short_link3);
      }
    }
  }, [items]);

  return (
    <ChakraProvider theme={theme}>
      <Flex justify="flex-end">
        <ColorModeSwitcher />
      </Flex>
      <Grid
        borderRadius="20px"
        border="1px solid black"
        gap="20px"
        width="50%"
        m="auto"
        p="20px"
      >
        <Heading as="h3" size="xl">
          Link Shortener
        </Heading>
        <FormControl>
          <FormLabel htmlFor="link">Enter a link: </FormLabel>
          <InputGroup>
            <Input id="link" value={input} onChange={handleInputChange} />
            <InputRightElement
              children={
                <IconButton icon={<ArrowForwardIcon />} onClick={handleClick} />
              }
            />
          </InputGroup>
        </FormControl>
        <RadioGroup onChange={setValue} value={value}>
          <HStack>
            <Radio value="shrtco.de">shrtco.de</Radio>
            <Radio value="9qr.de">9qr.de</Radio>
            <Radio value="shiny.link">shiny.link</Radio>
          </HStack>
        </RadioGroup>
      </Grid>
      {items ? <Flex
        direction='column'
        align="center"
        mt="50px"
        borderRadius="30px"
        border="1px solid black"
        width="50%"
        mx="auto"
        pt="10px"
      >
        <Heading as="h3" size="lg">
          Link generated!
        </Heading>
        <Link color='green' fontSize='40px' textDecoration='underline'>{link}</Link>
      </Flex> : null}
    </ChakraProvider>
  );
}

export default App;
