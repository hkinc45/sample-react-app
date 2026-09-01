import * as React from 'react';

interface HeatmapProps {
  className?: string;
}

export default class Heatmap extends React.Component<HeatmapProps> {
  render() {
    return (
      <div className={this.props.className || 'heatmap'}>
        <h2>Heatmap Component</h2>
        <p>Dev Kitchen React Application</p>
      </div>
    );
  }
}
