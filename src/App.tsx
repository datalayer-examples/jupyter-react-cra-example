import { useState } from 'react';
import { Jupyter, Notebook, CellSidebarRun } from '@datalayer/jupyter-react';
import { Box } from '@primer/react';
import { AppsIcon, CpuIcon } from '@primer/octicons-react';
import { UnderlineNav } from '@primer/react';
import CellComponents from './examples/cell/CellComponents';
import OutputsComponents from './examples/outputs/OutputsComponents';
import JupyterLabHeadlessApp from './examples/labapp/JupyterLabHeadlessApp';

import './App.css';

const App = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <Box>
        <Jupyter startDefaultKernel={true}>
          <UnderlineNav aria-label='gallery'>
            <UnderlineNav.Item
              icon={CpuIcon}
              aria-current={tab === 0 ? "page" : undefined}
              onSelect={e => {
                e.preventDefault();
                setTab(0);
              }}
            >
              Examples
            </UnderlineNav.Item>
            <UnderlineNav.Item
              icon={AppsIcon}
              aria-current={tab === 1 ? "page" : undefined}
              onSelect={e => {
                e.preventDefault();
                setTab(1);
              }}
            >
              Lab App
            </UnderlineNav.Item>
          </UnderlineNav>
          { tab === 0 &&
            <>
              <OutputsComponents/>
              <hr/>
              <CellComponents/>
              <hr/>
              <Notebook
                path="/ping.ipynb"
                CellSidebar={CellSidebarRun}
              />
            </>
          }
          { tab === 1 &&
            <>
              <JupyterLabHeadlessApp/>
            </>  
          }
        </Jupyter>
      </Box>
    </>
  );
}

export default App;
