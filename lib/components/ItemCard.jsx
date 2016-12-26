import React from 'react'; // eslint-disable-line no-unused-vars

function formatedFrequencyText(item) {
  const { freqNum, freqQual } = item;
  let pluralized = freqQual;
  if (freqNum > 1) { pluralized = `${freqQual}s`; }
  return `Purchased every ${freqNum} ${pluralized}`;
}

export default (props) => {
  const { item = {} } = props;
  return (
    <div>
      <p> { item.iName } </p>
      <p> { formatedFrequencyText(item) } </p>
    </div>
  );
};
