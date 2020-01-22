import React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const SvgSettings = props => (
  <Svg width="100%" height="100%" viewBox="0 0 21 21" {...props}>
    <G fill={props.tintColor} fillRule="nonzero">
      <Path d="M19.897 8.402a63.738 63.738 0 0 0-1.195-.167.118.118 0 0 1-.1-.084 8.452 8.452 0 0 0-.799-1.928.119.119 0 0 1 .011-.131c.247-.32.492-.645.728-.964.318-.43.272-1.04-.108-1.42l-1.316-1.316c-.38-.38-.99-.426-1.42-.108-.319.235-.643.48-.964.727a.119.119 0 0 1-.131.011 8.453 8.453 0 0 0-1.928-.798.118.118 0 0 1-.084-.1 64.59 64.59 0 0 0-.167-1.196A1.098 1.098 0 0 0 11.344 0H9.482c-.537 0-1.001.4-1.08.928-.059.391-.115.793-.167 1.195a.118.118 0 0 1-.084.1 8.455 8.455 0 0 0-1.928.8.12.12 0 0 1-.131-.012 64.104 64.104 0 0 0-.964-.727 1.098 1.098 0 0 0-1.42.108L2.392 3.708c-.38.38-.426.99-.108 1.42.236.32.481.644.727.964.03.039.035.09.012.131a8.453 8.453 0 0 0-.8 1.928.118.118 0 0 1-.1.084c-.4.052-.803.108-1.195.167C.4 8.48 0 8.945 0 9.482v1.862c0 .536.4 1 .928 1.08.392.059.794.115 1.195.167.05.007.088.04.1.084.186.672.455 1.32.8 1.928a.119.119 0 0 1-.012.13c-.247.322-.491.646-.727.964-.318.43-.272 1.041.108 1.42l1.316 1.317c.38.38.99.426 1.42.108.318-.236.643-.48.964-.728a.119.119 0 0 1 .131-.01 8.454 8.454 0 0 0 1.928.798.118.118 0 0 1 .084.1c.052.402.108.804.167 1.195.079.53.543.929 1.08.929h1.862c.536 0 1-.4 1.08-.929.058-.391.115-.793.167-1.195a.118.118 0 0 1 .084-.1 8.456 8.456 0 0 0 1.928-.799.12.12 0 0 1 .13.011c.322.248.646.492.964.727.43.319 1.041.273 1.42-.107l1.317-1.316c.38-.38.426-.99.107-1.42a65.4 65.4 0 0 0-.727-.964.119.119 0 0 1-.01-.131 8.454 8.454 0 0 0 .798-1.928.118.118 0 0 1 .1-.084c.402-.052.804-.109 1.195-.167.53-.08.929-.544.929-1.08V9.482c0-.537-.4-1.001-.929-1.08zm-.044 2.942a.12.12 0 0 1-.1.118c-.385.058-.781.113-1.176.165a1.088 1.088 0 0 0-.912.79 7.482 7.482 0 0 1-.707 1.705 1.09 1.09 0 0 0 .086 1.205c.243.316.484.635.716.949a.12.12 0 0 1-.013.154l-1.317 1.317a.12.12 0 0 1-.154.013 63.676 63.676 0 0 1-.95-.716 1.089 1.089 0 0 0-1.204-.086 7.483 7.483 0 0 1-1.705.707 1.089 1.089 0 0 0-.79.912c-.052.395-.107.791-.165 1.177a.12.12 0 0 1-.118.1H9.482a.12.12 0 0 1-.118-.1c-.058-.385-.113-.781-.165-1.177a1.089 1.089 0 0 0-.79-.912 7.48 7.48 0 0 1-1.706-.707 1.086 1.086 0 0 0-1.204.086 63.89 63.89 0 0 1-.949.716.12.12 0 0 1-.154-.013L3.079 16.43a.12.12 0 0 1-.013-.154c.232-.313.473-.633.716-.949.27-.35.303-.822.086-1.204a7.481 7.481 0 0 1-.707-1.706 1.089 1.089 0 0 0-.912-.79 64.039 64.039 0 0 1-1.177-.165.12.12 0 0 1-.1-.118V9.482a.12.12 0 0 1 .1-.118c.386-.058.782-.113 1.177-.165.438-.057.796-.367.912-.79a7.479 7.479 0 0 1 .707-1.706A1.09 1.09 0 0 0 3.782 5.5a64.095 64.095 0 0 1-.716-.949.12.12 0 0 1 .013-.154l1.317-1.317a.12.12 0 0 1 .154-.013c.313.232.632.473.949.716.35.27.822.303 1.204.086a7.481 7.481 0 0 1 1.706-.707c.423-.116.733-.474.79-.912.052-.396.107-.792.165-1.177a.12.12 0 0 1 .118-.1h1.862a.12.12 0 0 1 .118.1c.058.385.113.781.165 1.177.057.438.367.796.79.912a7.484 7.484 0 0 1 1.706.707 1.09 1.09 0 0 0 1.204-.086c.316-.243.636-.484.949-.716a.12.12 0 0 1 .154.013l1.317 1.317a.12.12 0 0 1 .013.154c-.232.314-.473.633-.716.949a1.09 1.09 0 0 0-.086 1.205c.305.537.543 1.11.707 1.705.116.423.474.733.912.79.395.052.79.107 1.177.165.057.008.1.06.1.118v1.862z" />
      <Path d="M10.413 13.96a3.552 3.552 0 0 1-3.548-3.547 3.552 3.552 0 0 1 3.548-3.548 3.552 3.552 0 0 1 3.548 3.548 3.552 3.552 0 0 1-3.548 3.548z" />
    </G>
  </Svg>
)

export default SvgSettings
