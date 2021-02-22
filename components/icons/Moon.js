import * as React from 'react';

function SvgMoon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 499.712 499.712"
      width="2em"
      height="2em"
      {...props}
    >
      <path
        d="M146.88 375.528c126.272 0 228.624-102.368 228.624-228.64 0-55.952-20.16-107.136-53.52-146.88C425.056 33.096 499.696 129.64 499.696 243.704c0 141.392-114.608 256-256 256-114.064 0-210.608-74.64-243.696-177.712 39.744 33.376 90.944 53.536 146.88 53.536z"
        fill="#ffd93b"
      />
      <path
        d="M401.92 42.776c34.24 43.504 54.816 98.272 54.816 157.952 0 141.392-114.608 256-256 256-59.68 0-114.448-20.576-157.952-54.816 46.848 59.472 119.344 97.792 200.928 97.792 141.392 0 256-114.608 256-256 0-81.584-38.32-154.064-97.792-200.928z"
        fill="#f4c534"
      />
      <g fill="#ffd83b">
        <path d="M128.128 99.944l26.368 53.456 58.976 8.56-42.672 41.6 10.064 58.736-52.736-27.728-52.752 27.728L85.44 203.56l-42.672-41.6 58.976-8.56zM276.864 82.84l13.664 27.712 30.576 4.432-22.128 21.568 5.232 30.432-27.344-14.368-27.344 14.368 5.232-30.432-22.128-21.568 30.576-4.432z" />
      </g>
    </svg>
  );
}

export default SvgMoon;
