import { Jupyter, IpyWidgetsComponent, Notebook, CellSidebarDefault } from '@datalayer/jupyter-react';
import CellComponents from './examples/cell/CellComponents';
import IPyWidgetsSimple from './examples/ipywidgets/IPyWidgetsSimple';
import OutputsComponents from './examples/outputs/OutputsComponents';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <>
      <Jupyter startDefaultKernel={true}>
        <IpyWidgetsComponent Widget={IPyWidgetsSimple}/>
        <OutputsComponents/>
        <CellComponents/>
        <Notebook
          path={"/ping.ipynb"}
          CellSidebar={CellSidebarDefault}
          />
      </Jupyter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
