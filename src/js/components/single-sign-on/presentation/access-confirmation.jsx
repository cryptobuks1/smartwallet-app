import React from 'react'
import Radium from 'radium'

import {Header, Content, Block} from '../../structure'

const STYLES = {
  container: {
    marginTop: '5%',
    width: '100%',
    height: '100px',
    position: 'relative'
  },
  name: {
    justifyContent: 'center',
    maxWidth: '100px',
    position: 'absolute',
    top: '12%',
    right: '30%',
    color: '#fff'
  },
  st0: {
    fill: 'none',
    stroke: '#BFC1C8',
    strokeWidth: '0.9756',
    strokeMiterlimit: '10'
  },
  st1: {
    fill: 'none',
    stroke: '#F0EFEF',
    strokeWidth: '2',
    strokeMiterlimit: '10'
  },
  st2: {
    fill: '#BBCD2B'
  },
  st3: {
    fill: '#F0EFEF'
  },
  st4: {
    fill: '#D2D2D2'
  },
  st5: {
    fill: '#9BA0AA'
  },
  st6: {
    fill: '#A2B6D2'
  },
  st7: {
    fill: '#FFFFFF'
  },
  st8: {
    fill: '#E8EBF1'
  },
  st9: {
    fill: '#333333'
  },
  st10: {
    fill: '#7D828C'
  },
  st11: {
    fill: '#F7F7F7'
  },
  st12: {
    fill: 'none',
    stroke: '#F7F7F7',
    strokeWidth: '0.8917',
    strokeMiterlimit: '10'
  },
  st13: {
    fill: '#F0F0F0'
  },
  st14: {
    fill: 'none',
    stroke: '#F7F7F7',
    strokeWidth: '0.4458',
    strokeMiterlimit: '10'
  },
  st15: {
    clipPath: 'url(#SVGID_4_)'
  },
  st16: {
    opacity: '0.5',
    fill: '#BBCD2B'
  },
  st17: {
    fill: '#839BBF'
  }
}

@Radium
export default class AccessConfirmation extends React.Component {
  static propTypes = {
    entity: React.PropTypes.object,
    redirectToReturnUrl: React.PropTypes.func
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.redirectToReturnUrl()
    }, 2000)
  }

  render() {
    return (
      <div>
        <Content style={{margin: '16px'}}>
          <Header style={{textAlign: 'center'}}
            title={'Your connection was successfull.'} />
          <Block style={STYLES.container}>
            <svg id="Ebene_1" xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 192.1575 444.1176" xmlSpace="preserve"
              style={{width: '100%', maxHeight: '500px'}}>
              <path style={STYLES.st0}
                d="M160.4414,
                202.4565c0-9.2048-7.4621-16.6662-16.669-16.6662H61.4511c-9.2069,
                0-16.6692,7.4613-16.6692,16.6662
                v192.5391c0,9.2077,7.4622,16.669,16.6692,16.669h82.3214c9.2069,
                0,16.669-7.4613,16.669-16.669V202.4565z M103.2919,402.3673
                c-6.0142,0-10.884-4.8728-10.884-10.8878c0-6.0121,4.8698-10.8863,
                10.884-10.8863c6.0121,0,10.8863,4.8742,10.8863,10.8863
                C114.1782,397.4945,109.304,402.3673,103.2919,402.3673 M152.2767,
                372.2073H52.9468V223.8881h99.3299V372.2073z" />
              <line style={STYLES.st1} x1="102.0036"
                y1="303.1646" x2="19.0038" y2="237.4586" />
              <line style={STYLES.st1} x1="104.152" y1="299.1771"
                x2="160.7974" y2="162.21" />
              <line style={STYLES.st1} x1="102.0036" y1="303.1646"
                x2="148.7798" y2="398.0604" />
              <line style={STYLES.st1} x1="102.0079" y1="272.1021" x2="101.07"
                y2="55.3611" />
              <g>
                <circle style={STYLES.st2} cx="101.4825" cy="63.2608"
                  r="60.2541" />
                <text x="101.4825" y="65.2608" textAnchor="middle"
                  fill="#fff"
                  style={{fontSize: '0.9em', paddingLeft: '8px'}}>
                  {this.props.entity.name}
                </text>
              </g>
              <line style={STYLES.st1} x1="172.2532" y1="337.1695" x2="103.7127"
                y2="301.4321" />
              <g>
                <circle style={STYLES.st3} cx="103.2606"
                  cy="302.716" r="41.4963" />
                <path style={STYLES.st4} d="M141.8659,302.7163c0,
                21.3211-17.2842,38.6053-38.6054,
                38.6053s-38.6054-17.2842-38.6054-38.6053h38.6054
                v-38.6054C124.5817,264.1109,141.8659,281.3951,
                141.8659,302.7163z" />
                <g>
                  <defs>
                    <circle id="SVGID_1_" cx="103.2605" cy="302.7158"
                      r="30.9135" />
                  </defs>
                  <use xlinkHref="#SVGID_1_"
                    style={{overflow: 'visisble', fill: '#FFFFFF'}} />
                  <clipPath id="SVGID_2_">
                    <use xlinkHref="#SVGID_1_" style={{overflow: 'visisble'}} />
                  </clipPath>
                </g>
                <path style={STYLES.st5} d="M119.6972,313.5976v1.7761c0,
                1.9536-1.5985,3.5521-3.5521,3.5521H91.2802
                c-1.9714,0-3.5521-1.5985-3.5521-3.5521v-24.8649c0-1.9536,
                1.5807-3.5521,3.5521-3.5521h24.8649
                c1.9537,0,3.5521,1.5985,3.5521,3.5521v1.7761h-15.9846c-1.9714,
                0-3.5521,1.5985-3.5521,3.5521v14.2085
                c0,1.9536,1.5807,3.5521,3.5521,3.5521H119.6972z M103.7127,
                310.0454h17.7606v-14.2085h-17.7606V310.0454z M110.8169,305.6053
                c-1.4741,0-2.6641-1.1899-2.6641-2.6641c0-1.4741,1.19-2.6641,
                2.6641-2.6641c1.4741,0,2.6641,1.19,2.6641,2.6641
                C113.481,304.4153,112.291,305.6053,110.8169,305.6053z" />
              </g>
              <g>
                <circle style={STYLES.st6}
                  cx="170.5352" cy="335.2361" r="18.9462" />
              </g>
              <g>
                <g>
                  <path style={STYLES.st7} d="M172.2532,337.1695h-3.4247c0.0385,
                  1.116,0.319,1.95,0.8418,2.5013
                  c0.5226,0.5518,1.2714,0.8274,2.2463,0.8274c0.7054,0,
                  1.3627-0.1058,1.9721-0.3174l0.2693,1.9625
                  c-0.7696,0.1859-1.5649,0.2788-2.3858,0.2788c-1.6418,
                  0-2.934-0.4615-3.8768-1.3854
                  c-0.9427-0.9235-1.4398-2.2124-1.4911-3.8672
                  h-1.6546v-1.356h1.6546v-1.2316h-1.6546v-1.3565
                  h1.6643c0.0833-1.6353,0.606-2.9064,1.568-3.8138
                  c0.962-0.9074,2.2542-1.3614,3.8768-1.3614c0.6797,0,1.4462,
                  0.1005,2.2992,0.301l-0.2693,1.9883
                  c-0.6541-0.2178-1.3051-0.3268-1.9528-0.3268c-0.9685,0-1.7124,
                  0.2739-2.2318,0.8221c-0.5195,0.5486-0.8081,1.3454-0.8658,
                  2.3907
                  h3.415v1.3565h-3.4247v1.2316h3.4247V337.1695z" />
                </g>
              </g>
              <g>
                <circle style={STYLES.st8} cx="159.9599"
                  cy="414.5187" r="27.4214" />
                <path style={STYLES.st9} d="M172.3246,425.3167h-24.7294c-1.9617,
                0-3.5667-1.605-3.5667-3.5667v-13.9315
                c0-1.9617,1.605-3.5667,3.5667-3.5667h24.7294c1.9617,0,
                3.5667,1.605,3.5667,3.5667V421.75
                C175.8913,423.7116,174.2863,425.3167,172.3246,425.3167z" />

                <path style={STYLES.st10} d="M172.3246,
                424.7856h-24.7294c-1.9617,
                0-3.5667-1.605-3.5667-3.5667v-13.9315
                c0-1.9616,1.605-3.5667,3.5667-3.5667h24.7294c1.9617,0,
                3.5667,1.605,3.5667,3.5667v13.9315
                C175.8913,423.1806,174.2863,424.7856,172.3246,424.7856z" />
                <path style={STYLES.st11} d="M154.2354,417.4484h-4.8816c-1.9617,
                0-3.5667-1.605-3.5667-3.5667v-4.8816
                c0-1.9616,1.605-3.5667,3.5667-3.5667h4.8816c1.9617,0,
                3.5667,1.605,3.5667,3.5667v4.8816
                C157.802,415.8434,156.197,417.4484,154.2354,417.4484z" />
                <circle style={STYLES.st10} cx="151.7025"
                  cy="409.2282" r="2.9752" />
                <circle style={STYLES.st10} cx="151.7025"
                  cy="417.1996" r="4.4652" />
                <path style={STYLES.st12} d="M154.1026,417.3156h-4.7488c-1.9617,
                0-3.5667-1.605-3.5667-3.5667v-4.7488
                c0-1.9616,1.605-3.5667,3.5667-3.5667h4.7488c1.9617,0,3.5667,
                1.605,3.5667,3.5667v4.7488
                C157.6693,415.7106,156.0643,417.3156,154.1026,417.3156z" />
                <g>
                  <path style={STYLES.st13} d="M173.8501,
                  411.9044h-13.9079c-0.3739,0-0.6798-0.3059-0.6798-0.6798l0,0
                  c0-0.3739,0.3059-0.6798,0.6798-0.6798h13.9079c0.3739,0,
                  0.6798,0.3059,0.6798,0.6798l0,0
                  C174.53,411.5985,174.224,411.9044,173.8501,411.9044z" />
                  <path style={STYLES.st13} d="M173.8501,
                  414.6321h-13.9079c-0.3739,0-0.6798-0.3059-0.6798-0.6798l0,0
                  c0-0.3739,0.3059-0.6798,0.6798-0.6798h13.9079c0.3739,0,
                  0.6798,0.3059,0.6798,0.6798l0,0
                  C174.53,414.3262,174.224,414.6321,173.8501,414.6321z" />
                  <path style={STYLES.st13} d="M173.8501,
                  417.3599h-13.9079c-0.3739,0-0.6798-0.3059-0.6798-0.6798l0,0
                  c0-0.3739,0.3059-0.6798,0.6798-0.6798h13.9079c0.3739,0,
                  0.6798,0.3059,0.6798,0.6798l0,0
                  C174.53,417.0539,174.224,417.3599,173.8501,417.3599z" />
                </g>
                <path style={STYLES.st14} d="M148.5191,421.8303c0.6262-0.0739,
                1.2579,0.0255,1.8844,0.0963c0.6265,0.0708,1.2737,0.1113,
                1.8762-0.0746
                c0.6025-0.1859,1.1574-0.6428,
                1.2937-1.2584s-0.2798-1.3462-0.9075-1.4049c-0.4335-0.0406-0.851,
                0.2325-1.0918,0.5952
                c-0.2408,0.3627-0.3343,0.8022-0.3937,1.2336c-0.0272,
                0.1974-0.0461,0.4088,0.0441,0.5864c0.104,0.205,0.3277,0.3163,
                0.5406,0.4033
                c1.6764,0.6845,3.6203,0.6863,5.298,0.005c0.4898-0.1989,
                1.25-0.5698,1.1559-1.0068
                c-0.0941-0.437-1.1619-0.3303-1.7504-0.1965
                c-0.6221,0.1414-1.3311,0.6615-1.1206,1.2638c0.1674,0.4789,
                0.7921,0.5922,1.2981,0.5554
                c2.0499-0.1492,5.1768-2.9864,4.7052-3.4689s-1.4291,
                0.5613-1.7153,1.2632c-0.2861,0.7019-0.7833,2.3812-0.2511,2.2427
                c0.5322-0.1384,2.6899-1.8888,3.0548-1.777c0.3649,0.1118-0.4153,
                0.9876,0.0578,1.0144c0.4731,0.0268,1.4867-1.096,1.8428-1.0159
                s-0.042,0.6492,0.2325,0.8103c0.2745,0.1611,0.6156,0.1462,0.9308,
                0.1027c0.8707-0.1201,1.819-0.9017,2.4642-0.8839
                c0.6451,0.0179,0.5279,1.0467,0.9258,1.4706s0.9527,0.7375,1.5334,
                0.7106" />
                <path style={STYLES.st14} d="M148.5191,421.8303c0.6262-0.0739,
                  1.2579,0.0255,1.8844,0.0963c0.6265,0.0708,1.2737,0.1113,
                  1.8762-0.0746
                  c0.6025-0.1859,1.1574-0.6428,
                  1.2937-1.2584s-0.2798-1.3462-0.9075-1.4049
                  c-0.4335-0.0406-0.851,0.2325-1.0918,0.5952
                  c-0.2408,0.3627-0.3343,0.8022-0.3937,1.2336c-0.0272,
                  0.1974-0.0461,0.4088,0.0441,0.5864c0.104,0.205,0.3277,0.3163,
                  0.5406,0.4033
                  c1.6764,0.6845,3.6203,0.6863,5.298,0.005c0.4898-0.1989,
                  1.25-0.5698,
                  1.1559-1.0068c-0.0941-0.437-1.1619-0.3303-1.7504-0.1965
                  c-0.6221,0.1414-1.3311,0.6615-1.1206,1.2638c0.1674,0.4789,
                  0.7921,0.5922,1.2981,0.5554
                  c2.0499-0.1492,5.1768-2.9864,4.7052-3.4689s-1.4291,
                  0.5613-1.7153,1.2632c-0.2861,0.7019-0.7833,2.3812-0.2511,
                  2.2427
                  c0.5322-0.1384,2.6899-1.8888,3.0548-1.777c0.3649,
                  0.1118-0.4153,0.9876,0.0578,1.0144c0.4731,0.0268,1.4867-1.096,
                  1.8428-1.0159
                  s-0.042,0.6492,0.2325,0.8103c0.2745,0.1611,0.6156,0.1462,
                  0.9308,0.1027c0.8707-0.1201,1.819-0.9017,2.4642-0.8839
                  c0.6451,0.0179,0.5279,1.0467,0.9258,1.4706s0.9527,0.7375,
                  1.5334,0.7106" />
              </g>
              <circle style={STYLES.st13} cx="19.8308"
                cy="238.1325" r="17.3158" />
              <g>
                <defs>
                  <circle id="SVGID_3_" cx="19.8308" cy="238.1325"
                    r="17.3158" />
                </defs>
                <clipPath id="SVGID_4_">
                  <use xlinkHref="#SVGID_3_" style={{overflow: 'visible'}} />
                </clipPath>
                <g style={STYLES.st15}>
                  <rect x="4.7988" y="226.891" style={STYLES.st4}
                    width="22.3999" height="9.1544" />
                  <rect x="4.7988" y="220.4926" style={STYLES.st4}
                    width="22.3999" height="4.359" />
                  <rect y="220.4256" style={STYLES.st4}
                    width="3.1569" height="15.6199" />
                  <polygon style={STYLES.st4}
                    points="29.0358,233.6156 29.0358,
                    220.4256 40.2501,220.4256" />
                  <polygon style={STYLES.st4}
                    points="43.8798,220.4256 49.5401,220.4256 49.5401,
                    236.0455 31.083,236.0455" />
                  <rect x="15.8408" y="240.1745" style={STYLES.st4}
                    width="11.358" height="15.6199" />
                  <rect x="-0.0476" y="240.1745" style={STYLES.st4}
                    width="5.3064" height="15.6199" />
                  <rect x="6.6412" y="246.9542" style={STYLES.st16}
                    width="7.7904" height="5.1639" />
                  <rect x="29.0358" y="240.1745" style={STYLES.st4}
                    width="8.3568" height="15.6199" />
                  <rect x="6.6252" y="240.1745" style={STYLES.st4}
                    width="7.8273" height="5.2153" />
                  <rect x="6.6252" y="253.8595" style={STYLES.st4}
                    width="7.8273" height="1.9276" />
                  <rect x="39.0025" y="240.1745" style={STYLES.st4}
                    width="10.9783" height="9.6957" />
                  <rect x="39.0025" y="251.7223" style={STYLES.st4}
                    width="10.9783" height="4.2408" />
                  <rect x="-0.1262" y="237.5905" style={STYLES.st4}
                    width="27.3249" height="0.9466" />
                  <rect x="29.0358" y="237.5905" style={STYLES.st4}
                    width="20.8734" height="0.9466" />
                </g>
              </g>
              <path style={STYLES.st17} d="M11.5298,222.7841c-1.2311,
                0-2.2292-0.998-2.2292-2.2292c0-1.2311,0.998-2.2292,2.2292-2.2292
                s2.2292,0.998,2.2292,2.2292C13.759,221.786,
                12.761,222.7841,11.5298,222.7841 M11.5298,214.3133
                c-3.4472,0-6.2417,2.7945-6.2417,6.2417c0,4.6812,
                6.2417,11.5916,6.2417,11.5916s6.2417-6.9104,6.2417-11.5916
                C17.7715,217.1077,14.977,214.3133,11.5298,214.3133z" />
              <circle style={STYLES.st4} cx="161.3209" cy="162.3477"
                r="17.3158" />
              <g>
                <path style={STYLES.st7} d="M166.9795,156.7516h-11.4736c-0.7888,
                  0-1.427,0.6454-1.427,1.4342l-0.0072,8.6052
                  c0,0.7888,0.6454,1.4342,1.4342,1.4342h11.4736c0.7888,
                  0,1.4342-0.6454,1.4342-1.4342v-8.6052
                  C168.4137,157.397,167.7683,156.7516,166.9795,
                  156.7516z M166.9795,159.62l-5.7368,
                  3.5855l-5.7368-3.5855v-1.4342l5.7368,3.5855
                  l5.7368-3.5855V159.62z" />
              </g>
            </svg>
          </Block>
        </Content>
      </div>
    )
  }
}