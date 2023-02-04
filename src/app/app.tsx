import styled from 'styled-components';
import Mandala from './components/mandala';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Mandala transformationCode="112233344" />
    </StyledApp>
  );
}

export default App;
