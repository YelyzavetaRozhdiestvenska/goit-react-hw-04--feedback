import React from 'react';
import { P } from './Statistic.style';

export function Statistic({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <P>Good: {good}</P>
      <P>Neutral: {neutral}</P>
      <P>Bad: {bad}</P>
      <P>Total: {total()} </P>
      <P>Positive feedback: {positivePercentage()} %</P>
    </>
  );
}
