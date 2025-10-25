import { Button, ChakraProvider, defaultSystem } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Button>ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
