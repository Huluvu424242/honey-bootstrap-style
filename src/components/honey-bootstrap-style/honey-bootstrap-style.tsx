import {Component, getAssetPath, h} from '@stencil/core';

@Component({
  tag: 'honey-bootstrap-style',
  assetsDirs: ['assets']
})
export class HoneybootstrapStyle {

  render() {
    const stylePath: string = getAssetPath('./assets/bootstrap.css');
    return <link rel="stylesheet" href={stylePath}/>
  }
}
