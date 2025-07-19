import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>
        Ola Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>This is a simple React application.</p>
    </div>
  );
}
