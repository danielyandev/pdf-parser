import React from "react";

function ProgressBar(props: any) {
  const {value} = props

  return value ? (
    <div className="w-100 px-3">
      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: value +"%"}}
             aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
          {value}%
        </div>
      </div>
    </div>
  ) : null
}

export default ProgressBar