import { render } from 'react-dom';
import { Jupyter, OutputIPyWidgets } from '@datalayer/jupyter-react';
import { state, view } from './IPyWidgetsSimple';
import IpyWidgetsToolbar from './IpyWidgetsToolbar';
import Layers from '../theme/Layers';

import "./../index.css";

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Jupyter collaborative={false} terminals={false}>
    <Layers />
    <IpyWidgetsToolbar/>
    <OutputIPyWidgets state={state} view={view} />
  </Jupyter>
  ,
  div
);
