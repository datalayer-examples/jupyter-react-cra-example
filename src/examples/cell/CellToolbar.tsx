import React from "react";
import { Button, Text } from "@primer/react";
import { useCellStore } from '@datalayer/jupyter-react';

const CellToolbar: React.FC = () => {
  const cellStore = useCellStore();
  return (
    <>
      <Text as="h5">Cell Example</Text>
      <Button
        color="primary"
        onClick={() => cellStore.execute()}
        >
          Run
      </Button>
      <Button
        color="secondary"
        onClick={() => cellStore.setOutputsCount(0)}
        >
          Reset outputs count
      </Button>
      <Text>
        Outputs count: {cellStore.outputsCount}
      </Text>
    </>
  );
}

export default CellToolbar;
