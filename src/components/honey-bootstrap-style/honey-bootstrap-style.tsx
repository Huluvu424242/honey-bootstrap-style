import {Component, getAssetPath, h} from '@stencil/core';

@Component({
  tag: 'honey-boostrap-style',
  assetsDirs: ['assets']
})
export class HoneyboostrapStyle {

  render() {
    const stylePath: string = getAssetPath('./assets/bootstrap.css');
    return <link rel="stylesheet" href={stylePath}/>
  }
}
