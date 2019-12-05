import React from 'react';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

export default class Shape extends React.Component {
  render() {
    return (
      <Stage width={760} height={30}>
        <Layer>
          <Rect
            x={0}
            y={0}
            width={760}
            height={100}
            fillLinearGradientStartPoint={{ x: 0, y: 0 }}
            fillLinearGradientEndPoint={{ x: 50, y: 0 }}
            fillLinearGradientColorStops={[0, 'red', 1, 'lightgrey']}
          />
        </Layer>
      </Stage>
    );
  }
}