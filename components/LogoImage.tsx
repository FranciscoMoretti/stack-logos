import Image from 'next/image'
import React from 'react';

interface LogoImageProps {
  image: string,
  name: string,
}

interface LogoImageState {
}

export default class LogoImage extends React.Component<LogoImageProps,LogoImageState> {
  render() {
    return (
      <Image
        src={this.props.image}
        alt={this.props.name}
        width={200}
        height={200}
      />
    );
  }
}