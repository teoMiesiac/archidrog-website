import styled from 'styled-components'
import { bottom, SpaceProps, left } from 'styled-system'
import { ZIndex, Color } from '~/styles/constants'
import { themeZIndex, themeColor } from '~/styles/getters'

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 21px 20px 35px 0 rgba(76, 89, 1, 0.27);
  .react-multi-carousel-list {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  .react-multi-carousel-track {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    position: relative;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    will-change: transform, transition;
  }
  .react-multiple-carousel__arrow {
    position: absolute;
    outline: 0;
    transition: all 0.5s;
    border-radius: 35px;
    z-index: 1000;
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    cursor: pointer;
  }
  .react-multiple-carousel__arrow:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .react-multiple-carousel__arrow::before {
    font-size: 20px;
    color: #fff;
    display: block;
    font-family: revicons;
    text-align: center;
    z-index: 2;
    position: relative;
  }
  .react-multiple-carousel__arrow--left {
    left: calc(4% + 1px);
  }
  .react-multiple-carousel__arrow--left::before {
    content: '\E824';
  }
  .react-multiple-carousel__arrow--right {
    right: calc(4% + 1px);
  }
  .react-multiple-carousel__arrow--right::before {
    content: '\E825';
  }
  .react-multi-carousel-dot-list {
    position: absolute;
    bottom: 0;
    display: flex;
    left: 0;
    right: 0;
    justify-content: center;
    margin: auto;
    padding: 0;
    margin: 10px 0;
    list-style: none;
    text-align: center;
  }
  .react-multi-carousel-dot button {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 1;
    padding: 5px 5px 5px 5px;
    box-shadow: none;
    transition: background 0.5s;
    border-width: 2px;
    border-style: solid;
    border-color: ${themeColor(Color.SECONDARY)};
    padding: 0;
    margin: 0;
    margin-right: 6px;
    outline: 0;
    cursor: pointer;
  }
  .react-multi-carousel-dot button:hover:active {
    background: ${themeColor(Color.SECONDARY)};
  }
  .react-multi-carousel-dot--active button {
    background: ${themeColor(Color.SECONDARY)};
  }
  .react-multi-carousel-item {
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .react-multi-carousel-item {
      flex-shrink: 0 !important;
    }
    .react-multi-carousel-track {
      overflow: visible !important;
    }
  }

  @media (min-width: 768px) {
    .react-multi-carousel-dot-list {
      left: auto;
      right: 25%;
      transform: translateX(50%);
    }
  }
`

export const ArrowWrapper = styled.div<SpaceProps>`
  position: absolute;
  ${bottom}
  ${left}
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${themeZIndex(ZIndex.OVERLAY)};
`
