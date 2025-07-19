import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import SeaApp from './components/structural/SeaApp';

createRoot(document.getElementById('root')).render(
  <SeaApp />,
)
