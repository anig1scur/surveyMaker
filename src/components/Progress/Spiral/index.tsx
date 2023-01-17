import classNames from 'classnames';
import { FC, useEffect, useRef, useState, useContext, useLayoutEffect } from 'react';
import './style.scss';
import { StoredContext } from '../../../context';
import ProgressBar from 'progressbar.js';
import { Progress } from '../../../common/types';
export type Props = {};

export const SpiralProgress: FC<Props> = (props) => {
  const ref = useRef<SVGPathElement>(null);
  const { progress } = useContext(StoredContext);
  const [curProgress, setCurProgress] = useState<Progress>({
    active: 0,
    total: 0,
  });
  const [animationPlayState, setAnimationPlayState] = useState<string>('paused');
  const [isGrow, setIsGrow] = useState<boolean>(false);
  // 这到底是个什么类型
  const [bar, setBar] = useState<any>();

  useEffect(() => {
    let b = new ProgressBar.Path('#' + ref.current?.id, {
      easing: 'easeInOut',
      duration: 4000,
    });
    setBar(b);
    b.animate(0.68);
  }, []);

  useLayoutEffect(() => {
    setIsGrow((curProgress.active / curProgress.total || 0) < progress.active / progress.total);
    setCurProgress(progress);
    setAnimationPlayState('running');
    setTimeout(() => {
      setAnimationPlayState('paused');
    }, 1000);

    const alpha = progress.active > 5 ? 0.4 : 0.6;

    if (bar) {
      bar.animate(Math.min(1, 0.68 + ((progress.active * alpha) / progress.total || 0.1)));
    }
  }, [progress]);

  return (
    <div
      className={classNames('spiral-container')}
      style={{ '--progress': curProgress.active / curProgress.total || 0.1 } as React.CSSProperties}>
      <div
        className={classNames('spiral')}
        style={{
          animationName: isGrow ? 'right' : 'left',
        }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 100% 100%'
          id='svg2'
          version='1.1'>
          <defs id='defs4' />

          <g id='layer1'>
            <path
              id='spiral-path'
              ref={ref}
              style={{
                fill: 'none',
                fillRule: 'evenodd',
                stroke: 'black',
                strokeWidth: 1.6,
                strokeLinejoin: 'miter',
                strokeMiterlimit: 4,
                paintOrder: 'stroke fill markers',
              }}
              d='m 337.1326,20.153792 c -0.50215,0 -1.00695,0 -1.75339,-0.11532 -0.74644,-0.11532 -1.73501,-0.346692 -3.44943,-0.462736 -1.71442,-0.116044 -4.15427,-0.116044 -5.90003,-0.116044 -1.74576,0 -2.79743,0 -3.86111,0.778509 -1.06368,0.778509 -2.13637,2.334957 -5.47927,3.396738 -3.34291,1.061781 -8.95877,1.629678 -12.64995,1.913745 -3.69118,0.284068 -5.45796,0.284068 -6.7092,0.07463 -1.25123,-0.209435 -1.9874,-0.630102 -3.22833,-1.271725 -1.24093,-0.641623 -2.98668,-1.503987 -4.95339,-2.765641 -1.96672,-1.261655 -4.15418,-2.923268 -5.9106,-3.755198 -1.75643,-0.83193 -3.08152,-0.83193 -5.04811,-0.83193 -1.9666,0 -4.57473,0 -6.85772,0.557135 -2.28298,0.557134 -4.23907,1.671896 -6.31093,2.923394 -2.07185,1.251498 -4.2593,2.639677 -6.25722,3.754386 -1.99792,1.114708 -3.80677,1.956034 -5.35199,2.387465 -1.54521,0.431431 -2.82823,0.452464 -4.00607,0.463002 -1.17783,0.01054 -2.25053,0.01054 -3.94385,-1.407761 -1.69332,-1.418298 -4.00696,-4.257774 -6.84615,-5.889106 -2.83918,-1.631332 -6.20449,-2.051996 -9.21238,-2.26251 -3.00789,-0.210515 -5.65808,-0.210515 -6.98449,-0.210515 -1.32642,0 -1.32642,0 -2.3279,0.4533 -1.00147,0.4533 -2.99438,1.355353 -5.03444,2.43843 -2.04006,1.083076 -4.12235,2.345068 -6.83562,3.571337 -2.71327,1.22627 -6.05754,2.416633 -8.32288,3.184243 -2.26533,0.767611 -3.44992,1.111893 -5.55158,0.654297 -2.10166,-0.457596 -5.1102,-1.714181 -7.10466,-2.49931 -1.99446,-0.785129 -2.95908,-1.092625 -4.77884,-1.960999 -1.81977,-0.868373 -4.47817,-2.289819 -8.00949,-2.947526 -3.53132,-0.657708 -7.90281,-0.545578 -10.09939,-0.489235 -2.19658,0.05634 -2.19658,0.05634 -3.23714,0.539837 -1.04056,0.483494 -3.12284,1.451018 -4.76319,2.124091 -1.64035,0.673072 -2.83924,1.051668 -3.81686,1.262191 -0.97761,0.210522 -1.73482,0.252589 -2.32422,0.347042 -0.58941,0.09445 -1.01007,0.241689 -1.61924,0.21082 -0.60916,-0.03087 -1.40842,-0.241201 -2.69169,-0.34678 -1.28326,-0.105578 -3.05005,-0.105578 -4.37198,0.359033 -1.32192,0.464611 -2.19697,1.394507 -3.80287,1.859788 -1.60589,0.465281 -3.9365,0.465281 -5.45246,-0.01883 -1.51595,-0.484105 -2.2074,-1.447942 -4.01073,-2.017567 -1.80334,-0.569625 -4.69529,-0.737272 -6.79002,-0.358371 -2.09473,0.378901 -3.3762,1.303242 -4.87003,2.186926 -1.49383,0.883684 -3.19597,1.724248 -5.12149,1.598087 -1.92553,-0.12616 -4.06421,-1.216463 -5.3716,-1.838557 -1.30739,-0.622094 -1.76609,-0.768047 -2.80307,-0.99028 -1.03698,-0.222233 -2.62293,-0.51438 -4.266339,-0.661891 -1.643407,-0.147511 -3.320808,-0.147511 -4.79803,0.364444 -1.477223,0.511954 -2.730849,1.523344 -4.465042,1.851299 -1.734193,0.327956 -3.851906,-0.03604 -5.429414,-0.680246 -1.577508,-0.644207 -2.502906,-1.526102 -3.820692,-1.716672 -1.317786,-0.190569 -2.995508,0.326017 -4.679217,0.844447 -2.020095,0.990569 -4.037749,1.979942 -5.567141,2.644839 -1.529391,0.664898 -2.562564,1.001924 -3.875436,1.170934 -1.312873,0.169011 -2.898501,0.169011 -4.198805,0.169011 -1.300304,0 -2.306528,0 -4.002285,-0.644741 -1.695758,-0.64474 -4.054747,-1.923225 -6.063609,-2.539833 -2.008862,-0.616608 -3.627233,-0.558495 -5.768428,-0.597661 -2.141195,-0.03917 -4.781628,-0.175504 -7.420159,0.459945 -2.63853,0.635449 -5.262922,2.04093 -7.496095,2.957063 -2.233172,0.916132 -4.067958,1.340083 -6.582693,1.531193 -2.514736,0.19111 -5.695852,0.14838 -8.66894,0.04981 C 13.232186,29.73965 10.481094,29.585663 8.3757689,28.671064 6.2704438,27.756465 4.8221393,26.0875 3.8343464,24.292979 2.8465535,22.498458 2.3301291,20.59823 2.0611556,18.426852 1.7921822,16.255474 1.7731972,13.829689 2.18143,11.965036 2.5896628,10.100383 3.4231174,8.807672 4.4679362,7.6957402 5.512755,6.5838085 6.7633837,5.6583056 9.0489263,4.7388231 11.334469,3.8193406 14.635793,2.9133454 17.300972,2.3395997 c 2.66518,-0.5737456 4.664174,-0.80976 6.186307,-0.8218915 1.522133,-0.012131 2.525323,0.1999496 3.845422,1.7633001 1.320099,1.5633505 2.943876,4.4663894 3.683082,7.0355057 0.739205,2.569116 0.587595,4.778511 0.322076,6.513128 -0.26552,1.734617 -0.642644,2.97699 -1.424905,4.040464 -0.78226,1.063474 -1.969632,1.946871 -4.391325,2.830545 -2.421693,0.883674 -6.073694,1.766441 -8.659144,2.208331 -2.585451,0.44189 -4.0969,0.44189 -5.579392,-0.723155 C 9.8006009,24.020782 8.3565163,21.696954 7.6703386,19.497107 6.9841609,17.297259 7.0575067,15.22387 7.296463,13.665897 7.5354192,12.107923 7.9387141,11.070741 8.3839245,10.272469 8.8291348,9.4741973 9.3125189,8.9216383 11.238512,8.244712 c 1.925993,-0.6769263 5.283543,-1.4743429 7.738361,-1.716603 2.454817,-0.2422601 3.986745,0.07252 5.238299,1.2550886 1.251554,1.1825687 2.217884,3.2301664 2.375504,5.0070764 0.15762,1.77691 -0.493441,3.283096 -1.492321,4.657078 -0.99888,1.373982 -2.344521,2.614498 -3.764238,3.235029 -1.419717,0.620531 -2.910582,0.620531 -4.18846,0.651859 -1.277879,0.03133 -2.330545,0.09356 -3.553236,-1.51316 -1.222691,-1.606725 -2.595365,-4.858875 -1.67705,-6.720224 0.918316,-1.861348 4.125415,-2.318288 6.263281,-2.547778 2.137866,-0.229491 3.183315,-0.229491 3.721486,0.108403 0.53817,0.337894 0.559079,1.006958 0.275401,1.916878 -0.283678,0.90992 -0.869914,2.051148 -1.594774,2.80754 -0.72486,0.756391 -1.589123,1.128016 -2.304919,1.402557 -0.715796,0.274542 -1.274121,0.449072 -1.560761,0.0809 -0.28664,-0.368169 -0.28664,-1.258826 -0.28664,-2.165906'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SpiralProgress;
