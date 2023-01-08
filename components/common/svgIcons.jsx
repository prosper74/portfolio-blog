export const CloseIcon = ({ width, height, fill }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
    />
  </svg>
);

export const SearchIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
      />
    </svg>
  );
};

export const EyeSlashIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M10.94,6.08A6.93,6.93,0,0,1,12,6c3.18,0,6.17,2.29,7.91,6a15.23,15.23,0,0,1-.9,1.64,1,1,0,0,0-.16.55,1,1,0,0,0,1.86.5,15.77,15.77,0,0,0,1.21-2.3,1,1,0,0,0,0-.79C19.9,6.91,16.1,4,12,4a7.77,7.77,0,0,0-1.4.12,1,1,0,1,0,.34,2ZM3.71,2.29A1,1,0,0,0,2.29,3.71L5.39,6.8a14.62,14.62,0,0,0-3.31,4.8,1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20a9.26,9.26,0,0,0,5.05-1.54l3.24,3.25a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.36,9.19,2.45,2.45A1.81,1.81,0,0,1,12,14a2,2,0,0,1-2-2A1.81,1.81,0,0,1,10.07,11.48ZM12,18c-3.18,0-6.17-2.29-7.9-6A12.09,12.09,0,0,1,6.8,8.21L8.57,10A4,4,0,0,0,14,15.43L15.59,17A7.24,7.24,0,0,1,12,18Z"
      />
    </svg>
  );
};

export const EyeIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"
      />
    </svg>
  );
};

export const ForwardArrow = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
};

export const ForwardArrowAlt = () => {
  return (
    <svg
      className="w-6 h-6 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const GoogleIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M22.60229,10.00391a1.00005,1.00005,0,0,0-.98388-.82227H12.2a.99974.99974,0,0,0-1,1V14.0498a.99974.99974,0,0,0,1,1h3.9624a3.65162,3.65162,0,0,1-1.13183,1.1875A5.0604,5.0604,0,0,1,12.2,17.02246a4.93525,4.93525,0,0,1-4.64624-3.4378L7.55347,13.583a4.90382,4.90382,0,0,1,0-3.167l.00024-.00165A4.9356,4.9356,0,0,1,12.2,6.97754,4.37756,4.37756,0,0,1,15.3313,8.19531a1.00053,1.00053,0,0,0,1.39844-.01562L19.5979,5.31152a.99918.99918,0,0,0-.02539-1.43847A10.62342,10.62342,0,0,0,12.2,1,10.949,10.949,0,0,0,2.37134,7.05878l-.00147.00177A10.92175,10.92175,0,0,0,1.2,12a11.07862,11.07862,0,0,0,1.16992,4.93945l.00147.00177A10.949,10.949,0,0,0,12.2,23a10.5255,10.5255,0,0,0,7.29468-2.687l.00073-.00049.00079-.00085.00019-.00013.00006-.00012a10.78575,10.78575,0,0,0,3.30365-8.08386A12.51533,12.51533,0,0,0,22.60229,10.00391ZM12.2,3a8.68219,8.68219,0,0,1,5.2085,1.67285L15.95483,6.126A6.46322,6.46322,0,0,0,12.2,4.97754,6.88648,6.88648,0,0,0,6.21069,8.52832L5.14148,7.69958l-.585-.45367A8.95257,8.95257,0,0,1,12.2,3ZM3.67944,14.90332a9.02957,9.02957,0,0,1,0-5.80664l1.78223,1.38184a6.85381,6.85381,0,0,0,0,3.042ZM12.2,21A8.9528,8.9528,0,0,1,4.5564,16.75391l.37841-.29352,1.27588-.98969A6.88482,6.88482,0,0,0,12.2,19.02246a7.27662,7.27662,0,0,0,3.30573-.75079L17.19739,19.585A8.88989,8.88989,0,0,1,12.2,21Zm6.52588-2.76074-.183-.142L17.16553,17.028a5.60626,5.60626,0,0,0,1.39966-2.79553.9998.9998,0,0,0-.9834-1.18262H13.2V11.18164h7.54883c.03418.3457.05127.69531.05127,1.0459A9.05156,9.05156,0,0,1,18.72583,18.23926Z" />
    </svg>
  );
};

export const FacebookIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
    </svg>
  );
};

export const TwitterIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
    </svg>
  );
};

export const GithubIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
    </svg>
  );
};

export const LinkedinIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
    </svg>
  );
};

export const PadlockOpenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 inline-block align-text-top"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
      />
    </svg>
  );
};

export const HelpIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 inline-block align-text-bottom	"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

export const UserAddIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M21,10.5H20v-1a1,1,0,0,0-2,0v1H17a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Zm-7.7,1.72A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5Z" />
    </svg>
  );
};

export const UserIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"
      />
    </svg>
  );
};

export const BackArrowIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
    >
      <path d="M8.5,12.8l5.7,5.6c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0c0.4-0.4,0.4-1,0-1.4l-4.9-5l4.9-5c0.4-0.4,0.4-1,0-1.4c-0.2-0.2-0.4-0.3-0.7-0.3c-0.3,0-0.5,0.1-0.7,0.3l-5.7,5.6C8.1,11.7,8.1,12.3,8.5,12.8C8.5,12.7,8.5,12.7,8.5,12.8z" />
    </svg>
  );
};

export const ArrowDownIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
      />
    </svg>
  );
};

export const CurlyBracketIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        d="M2.1 3.1c.2 1.3.4 1.6.4 2.9C2.5 6.8 1 7.5 1 7.5v1s1.5.7 1.5 1.5c0 1.3-.2 1.6-.4 2.9-.3 2.1.8 3.1 1.8 3.1H6v-2s-1.8.2-1.8-1c0-.9.2-.9.4-2.9.1-.9-.5-1.6-1.1-2.1.6-.5 1.2-1.1 1.1-2-.3-2-.4-2-.4-2.9C4.2 1.9 6 2 6 2V0H3.9C2.8 0 1.8 1 2.1 3.1zM13.9 3.1c-.2 1.3-.4 1.6-.4 2.9 0 .8 1.5 1.5 1.5 1.5v1s-1.5.7-1.5 1.5c0 1.3.2 1.6.4 2.9.3 2.1-.8 3.1-1.8 3.1H10v-2s1.8.2 1.8-1c0-.9-.2-.9-.4-2.9-.1-.9.5-1.6 1.1-2.1-.6-.5-1.2-1.1-1.1-2 .2-2 .4-2 .4-2.9C11.8 1.9 10 2 10 2V0h2.1c1.1 0 2.1 1 1.8 3.1z"
      />
    </svg>
  );
};

export const PulseIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path
        fill={fill}
        d="M27 13a3 3 0 0 0-2.816 2H20a1 1 0 0 0-.914.594l-2.768 6.228-3.341-15.039a1 1 0 0 0-1.891-.189L7.351 15H3a1 1 0 0 0 0 2h5a1 1 0 0 0 .914-.594l2.768-6.228 3.341 15.039A1 1 0 0 0 15.9 26a.848.848 0 0 0 .1 0 1 1 0 0 0 .914-.594L20.649 17h3.535A2.995 2.995 0 1 0 27 13Zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"
        data-name="Layer 2"
      />
    </svg>
  );
};

export const ServerNetworkIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M8,6h3a1,1,0,0,0,0-2H8A1,1,0,0,0,8,6Zm8,0a1,1,0,1,0-1-1A1,1,0,0,0,16,6Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,16,10Zm5,9H14.82A3,3,0,0,0,13,17.18V15h4a3,3,0,0,0,3-3V10a3,3,0,0,0-.78-2A3,3,0,0,0,20,6V4a3,3,0,0,0-3-3H7A3,3,0,0,0,4,4V6a3,3,0,0,0,.78,2A3,3,0,0,0,4,10v2a3,3,0,0,0,3,3h4v2.18A3,3,0,0,0,9.18,19H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM6,4A1,1,0,0,1,7,3H17a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H7A1,1,0,0,1,6,6Zm1,9a1,1,0,0,1-1-1V10A1,1,0,0,1,7,9H17a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1Zm5,8a1,1,0,1,1,1-1A1,1,0,0,1,12,21ZM11,10H8a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2Z"
      />
    </svg>
  );
};

export const WordPressIconIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"
      />
    </svg>
  );
};

export const GraphicsIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 20 20"
      viewBox="0 0 20 20"
    >
      <path
        fill={fill}
        strokeMiterlimit="10"
        d="M6.9 10L2.1 5.3c-.2-.2-.2-.5 0-.7l2.4-2.4c.2-.2.5-.2.7 0l4.7 4.7M13 10l4.8 4.8c.2.2.2.5 0 .7l-2.4 2.4c-.2.2-.5.2-.7 0L10 13.1"
      />
      <path
        d="M13.8 14.2h1.4v2.9h-1.4z"
        transform="rotate(-134.999 14.563 15.678)"
      />
      <path
        d="M11.3 13.4h1.4v1.5h-1.4z"
        transform="rotate(-134.999 12.015 14.136)"
      />
      <path d="M5.7 6.1h1.4V9H5.7z" transform="rotate(-134.999 6.382 7.497)" />
      <path
        d="M3.1 5.2h1.4v1.5H3.1z"
        transform="rotate(-134.999 3.834 5.956)"
      />
      <path
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="m14 2.9.6-.6c.4-.4 1-.4 1.4 0L17.7 4c.4.4.4 1 0 1.4l-.6.6"
      />
      <path
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M7.8 3.3h4.3v13.5H7.8z"
        transform="rotate(45.001 9.921 10.082)"
      />
      <path
        d="M2.9 9.4h13.8v1.4H2.9z"
        transform="rotate(-45.001 9.867 10.137)"
      />
      <path
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="m2.1 17.9 1.5-4.6 3.1 3.1z"
      />
      <path d="m2.6 16.4-.5 1.5 1.5-.5z" />
      <path
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="m17.3 5.8-1.2 1.1-3-3 1.1-1.2"
      />
    </svg>
  );
};

export const FilterIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M19,2H5A3,3,0,0,0,2,5V6.17a3,3,0,0,0,.25,1.2l0,.06a2.81,2.81,0,0,0,.59.86L9,14.41V21a1,1,0,0,0,.47.85A1,1,0,0,0,10,22a1,1,0,0,0,.45-.11l4-2A1,1,0,0,0,15,19V14.41l6.12-6.12a2.81,2.81,0,0,0,.59-.86l0-.06A3,3,0,0,0,22,6.17V5A3,3,0,0,0,19,2ZM13.29,13.29A1,1,0,0,0,13,14v4.38l-2,1V14a1,1,0,0,0-.29-.71L5.41,8H18.59ZM20,6H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"
      />
    </svg>
  );
};

export const SortIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M5.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2,2A1,1,0,0,0,3.71,9.71L4,9.41V17a1,1,0,0,0,2,0V9.41l.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM11,8H21a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm10,8H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
      />
    </svg>
  );
};

export const CalendarIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"
      />
    </svg>
  );
};

export const LocationIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M12,10.8a2,2,0,1,0-2-2A2,2,0,0,0,12,10.8Zm-.71,6.91a1,1,0,0,0,1.42,0l4.09-4.1a6.79,6.79,0,1,0-9.6,0ZM7.23,8.34A4.81,4.81,0,0,1,9.36,4.79a4.81,4.81,0,0,1,5.28,0,4.82,4.82,0,0,1,.75,7.41L12,15.59,8.61,12.2A4.77,4.77,0,0,1,7.23,8.34ZM19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"
      />
    </svg>
  );
};

export const TVIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M18,6H14.41l2.3-2.29a1,1,0,1,0-1.42-1.42L12,5.54l-1.17-2a1,1,0,1,0-1.74,1L10,6H6A3,3,0,0,0,3,9v8a3,3,0,0,0,3,3v1a1,1,0,0,0,2,0V20h8v1a1,1,0,0,0,2,0V20a3,3,0,0,0,3-3V9A3,3,0,0,0,18,6Zm1,11a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H18a1,1,0,0,1,1,1Z"
      />
    </svg>
  );
};

export const BedIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M7,12.5a3,3,0,1,0-3-3A3,3,0,0,0,7,12.5Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,7,8.5Zm13-2H12a1,1,0,0,0-1,1v6H3v-8a1,1,0,0,0-2,0v13a1,1,0,0,0,2,0v-3H21v3a1,1,0,0,0,2,0v-9A3,3,0,0,0,20,6.5Zm1,7H13v-5h7a1,1,0,0,1,1,1Z"
      />
    </svg>
  );
};

export const ShowerIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M22,12H5V6.41016A1.97474,1.97474,0,0,1,6.04,4.65137a1.99474,1.99474,0,0,1,1.14764-.2312,3.49114,3.49114,0,0,0,.83771,3.55444L9.08594,9.03516a.99965.99965,0,0,0,1.41406,0L14.03516,5.5a.99964.99964,0,0,0,0-1.41406L12.97461,3.02539a3.494,3.494,0,0,0-4.52972-.34253A3.99247,3.99247,0,0,0,3,6.41016V12H2a1,1,0,0,0,0,2H3v3a2.995,2.995,0,0,0,2,2.81567V21a1,1,0,0,0,2,0V20H17v1a1,1,0,0,0,2,0V19.81573A2.99507,2.99507,0,0,0,21,17V14h1a1,1,0,0,0,0-2ZM9.43945,4.43945a1.50184,1.50184,0,0,1,2.1211,0l.35351.35352L9.793,6.91406l-.35352-.35351A1.50123,1.50123,0,0,1,9.43945,4.43945ZM19,17a1.00067,1.00067,0,0,1-1,1H6a1.00067,1.00067,0,0,1-1-1V14H19Z"
      />
    </svg>
  );
};

export const HomeIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z"
      />
    </svg>
  );
};

export const RentIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M18.9917,21.002h-1V19.335a5.00057,5.00057,0,0,0-.29956-1.67773c-.01093-.02936-.0224-.05658-.03589-.08454a4.97694,4.97694,0,0,0-.66455-1.23675l-1.3999-1.86719a3.01933,3.01933,0,0,1-.6001-1.80078V11.6582a3.02108,3.02108,0,0,1,.87842-2.12109l.65722-.65723A4.94566,4.94566,0,0,0,17.92365,6.0415c.00054-.01391.008-.02551.008-.03955l-.00281-.01373a5.01836,5.01836,0,0,0,.06287-.64349V3.002h1a1,1,0,0,0,0-2h-14a1,1,0,0,0,0,2h1V5.34473a5.01836,5.01836,0,0,0,.06287.64349L6.05176,6.002c0,.014.00744.02564.008.03955a4.94571,4.94571,0,0,0,1.3963,2.83838l.65723.65723A3.02108,3.02108,0,0,1,8.9917,11.6582V12.668a3.02212,3.02212,0,0,1-.59961,1.80078L6.99121,16.33594a4.98221,4.98221,0,0,0-.66437,1.23718c-.0133.02771-.02472.05463-.03552.08368A5.00309,5.00309,0,0,0,5.9917,19.335v1.667h-1a1,1,0,0,0,0,2h14a1,1,0,0,0,0-2Zm-11-16v-2h8v2Zm.87842,2.46387A2.97036,2.97036,0,0,1,8.49323,7.002h6.99694a2.97094,2.97094,0,0,1-.37689.46387l-.65723.65723a4.9603,4.9603,0,0,0-1.42187,2.8789h-2.085A4.96025,4.96025,0,0,0,9.52734,8.123ZM9.99219,15.668a5.03688,5.03688,0,0,0,.98828-2.666h2.02246a5.03332,5.03332,0,0,0,.98877,2.666l1.00012,1.334H8.99133Zm5.99951,5.334h-8V19.335a2.954,2.954,0,0,1,.02722-.333h7.94556a2.954,2.954,0,0,1,.02722.333Z"
      />
    </svg>
  );
};

export const ShortletIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M18.5,2H6.5a3,3,0,0,0-3,3V17a3,3,0,0,0,2,2.82V21a1,1,0,0,0,2,0V20h10v1a1,1,0,0,0,2,0V19.82a3,3,0,0,0,2-2.82V5A3,3,0,0,0,18.5,2ZM5.5,8h6v4h-6Zm14,9a1,1,0,0,1-1,1H6.5a1,1,0,0,1-1-1V14h14Zm0-5h-6V8h6Zm0-6H5.5V5a1,1,0,0,1,1-1h12a1,1,0,0,1,1,1ZM16.12,16.92a1,1,0,0,0,.38.08,1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18,1.58,1.58,0,0,0-.12-.15l-.15-.12a.76.76,0,0,0-.18-.09A.64.64,0,0,0,16.7,15a1,1,0,0,0-.91.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7A1,1,0,0,0,16.12,16.92Zm-8,0A1,1,0,0,0,8.5,17a1,1,0,0,0,1-1,1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18,1.58,1.58,0,0,0-.12-.15l-.15-.12-.18-.09L8.7,15a1,1,0,0,0-.91.27,1.58,1.58,0,0,0-.12.15.76.76,0,0,0-.09.18.64.64,0,0,0-.06.18,1.36,1.36,0,0,0,0,.2,1,1,0,0,0,.29.7A1,1,0,0,0,8.12,16.92Z"
      />
    </svg>
  );
};

export const HomeAltIcon = () => {
  return (
    <svg
      className="mr-2 w-4 h-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
  );
};

export const SettingsIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M19.9,12.66a1,1,0,0,1,0-1.32L21.18,9.9a1,1,0,0,0,.12-1.17l-2-3.46a1,1,0,0,0-1.07-.48l-1.88.38a1,1,0,0,1-1.15-.66l-.61-1.83A1,1,0,0,0,13.64,2h-4a1,1,0,0,0-1,.68L8.08,4.51a1,1,0,0,1-1.15.66L5,4.79A1,1,0,0,0,4,5.27L2,8.73A1,1,0,0,0,2.1,9.9l1.27,1.44a1,1,0,0,1,0,1.32L2.1,14.1A1,1,0,0,0,2,15.27l2,3.46a1,1,0,0,0,1.07.48l1.88-.38a1,1,0,0,1,1.15.66l.61,1.83a1,1,0,0,0,1,.68h4a1,1,0,0,0,.95-.68l.61-1.83a1,1,0,0,1,1.15-.66l1.88.38a1,1,0,0,0,1.07-.48l2-3.46a1,1,0,0,0-.12-1.17ZM18.41,14l.8.9-1.28,2.22-1.18-.24a3,3,0,0,0-3.45,2L12.92,20H10.36L10,18.86a3,3,0,0,0-3.45-2l-1.18.24L4.07,14.89l.8-.9a3,3,0,0,0,0-4l-.8-.9L5.35,6.89l1.18.24a3,3,0,0,0,3.45-2L10.36,4h2.56l.38,1.14a3,3,0,0,0,3.45,2l1.18-.24,1.28,2.22-.8.9A3,3,0,0,0,18.41,14ZM11.64,8a4,4,0,1,0,4,4A4,4,0,0,0,11.64,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,11.64,14Z"
      />
    </svg>
  );
};

export const DeleteIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
      />
    </svg>
  );
};

export const EditIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
      />
    </svg>
  );
};

export const VerifiedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="25"
      height="25"
      viewBox="0 0 172 172"
      className="inline-block mb-1 ml-2"
    >
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g>
          <path
            d="M86,7.16667l16.1465,18.02058l23.27017,-7.27058l5.24958,23.41708l23.41708,5.24958l-7.16667,23.27017l17.91667,16.1465l-17.91667,16.1465l7.16667,23.27017l-23.41708,5.24958l-5.24958,23.41708l-23.27017,-7.27058l-16.1465,18.02058l-16.1465,-18.02058l-23.27017,7.27058l-5.24958,-23.41708l-23.41708,-5.24958l7.16667,-23.27017l-17.91667,-16.1465l17.91667,-16.1465l-7.16667,-23.27017l23.41708,-5.24958l5.24958,-23.41708l23.27017,7.27058z"
            fill="#2ecc71"
          ></path>
          <path
            d="M123.9905,52.32383l-48.7405,48.72258l-20.07383,-20.0595l-10.02258,10.02258l30.09642,30.11075l58.7595,-58.77383z"
            fill="#ffffff"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const CheckIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
      />
    </svg>
  );
};

export const GooglePlayIcon = () => {
  return (
    <svg viewBox="30 336.7 120.9 129.2" width="30">
      <path
        fill="#FFD400"
        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
      />
      <path
        fill="#FF3333"
        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
      />
      <path
        fill="#48FF48"
        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
      />
      <path
        fill="#3BCCFF"
        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
      />
    </svg>
  );
};

export const AppleIcon = () => {
  return (
    <svg viewBox="0 0 384 512" width="30">
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
};

export const LinkIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        fill={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
};

export const BagIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 64 64"
      viewBox="0 0 64 64"
    >
      <path
        fill={fill}
        d="M56.1,11.92H44.51v-0.24c0-4.36-3.54-7.9-7.9-7.9h-9.21c-4.36,0-7.9,3.55-7.9,7.9v0.24H7.9c-4.36,0-7.9,3.55-7.9,7.9v32.5
        c0,4.36,3.54,7.9,7.9,7.9h48.2c4.36,0,7.9-3.54,7.9-7.9v-32.5C64,15.46,60.46,11.92,56.1,11.92z M21.86,11.68
        c0-3.05,2.48-5.53,5.53-5.53h9.21c3.05,0,5.53,2.48,5.53,5.53v0.24H21.86V11.68z M7.9,14.29h48.2c3.05,0,5.53,2.48,5.53,5.53v10.88
        H37.98v-2.39c0-0.65-0.53-1.18-1.18-1.18h-9.58c-0.66,0-1.18,0.53-1.18,1.18v2.39H2.37V19.82C2.37,16.77,4.85,14.29,7.9,14.29z
        M35.61,29.5v4.77h-7.21V29.5H35.61z M56.1,57.86H7.9c-3.05,0-5.53-2.48-5.53-5.53V33.07h23.65v2.39c0,0.66,0.53,1.18,1.18,1.18
        h9.58c0.65,0,1.18-0.53,1.18-1.18v-2.39h23.65v19.25C61.63,55.37,59.15,57.86,56.1,57.86z"
      />
    </svg>
  );
};

export const GraduationCapIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <path
        d="M493,152.8c-26.6-9.7-53.1-19.4-79.7-29.1c-42.3-15.5-84.6-30.9-127-46.4c-9.2-3.4-18.5-7.7-28-10.2
					c-3-0.8-5.1,0.2-7.8,1.1c-4.8,1.7-9.6,3.5-14.4,5.2c-40.4,14.7-80.7,29.5-121.1,44.2c-31.5,11.5-63.1,22.8-94.5,34.5
					c-0.5,0.2-1,0.4-1.6,0.6c-9,3.3-5.1,17.8,4,14.5c26.6-9.7,53.1-19.4,79.7-29.1c42.1-15.4,84.2-30.7,126.3-46.1
					c9.7-3.5,19.3-7.1,29-10.6c-1.3,0-2.7,0-4,0c26.6,9.7,53.1,19.4,79.7,29.1c42.1,15.4,84.2,30.7,126.3,46.1
					c9.7,3.5,19.3,7.1,29,10.6C498.1,170.6,502,156.1,493,152.8L493,152.8z"
      />
      <path
        d="M489,152.8c-26.6,9.7-53.1,19.4-79.7,29.1c-42.1,15.4-84.2,30.7-126.3,46.1c-9.7,3.5-19.3,7.1-29,10.6c1.3,0,2.7,0,4,0
					c-26.6-9.7-53.1-19.4-79.7-29.1c-42.1-15.4-84.2-30.7-126.3-46.1c-9.7-3.5-19.3-7.1-29-10.6c-9.1-3.3-13,11.2-4,14.5
					c26.6,9.7,53.1,19.4,79.7,29.1c42.3,15.5,84.6,30.9,127,46.4c9.2,3.4,18.5,7.7,28,10.2c3,0.8,5.1-0.2,7.8-1.1
					c4.8-1.7,9.6-3.5,14.4-5.2c40.4-14.7,80.7-29.5,121.1-44.2c31.5-11.5,63.1-22.8,94.5-34.5c0.5-0.2,1-0.4,1.6-0.6
					C502,164,498.1,149.5,489,152.8L489,152.8z"
      />
      <path
        d="M80.9,184.7c0,19.3,0,38.7,0,58c0,31.1,0,62.2,0,93.4c0,7.6-0.1,15.2,0,22.8c0.1,18.1,11.2,33.2,28.2,39.2
					c22.4,7.9,45,15.1,67.5,22.7c22.2,7.5,44.3,15.2,66.6,22.4c11.7,3.8,22.1,1.1,33.1-2.6c12.1-4.1,24.2-8.1,36.3-12.2
					c27.6-9.3,55.2-18.6,82.9-27.9c11.9-4,22.9-8.8,29.8-20.2c5.6-9.3,5.7-19.1,5.7-29.4c0-28.1,0-56.2,0-84.2c0-25.8,0-51.7,0-77.5
					c0-1.5,0-3,0-4.4c0-9.7-15-9.7-15,0c0,49.4,0,98.8,0,148.1c0,8.4,0,16.8,0,25.1c0,11.8-6.2,21.9-17.6,25.8
					c-22.5,7.7-45.1,15.2-67.6,22.7c-22,7.4-43.9,15-66,22.2c-9.5,3.1-17.2,0.2-26-2.8c-11.9-4-23.7-8-35.6-12
					c-27.3-9.2-54.6-18.4-81.9-27.5c-9.4-3.2-18.4-6.1-23.1-16c-3.2-6.8-2.4-14.9-2.4-22.2c0-53.1,0-106.3,0-159.4
					c0-1.4,0-2.7,0-4.1C95.9,175,80.9,175,80.9,184.7L80.9,184.7z"
      />
      <path
        d="M250.7,156.5c25.7,25.7,51.5,51.5,77.2,77.2c3.6,3.6,7.2,7.2,10.8,10.8c6.8,6.8,17.4-3.8,10.6-10.6
				c-25.7-25.7-51.5-51.5-77.2-77.2c-3.6-3.6-7.2-7.2-10.8-10.8C254.5,139,243.9,149.6,250.7,156.5L250.7,156.5z"
      />
      <path d="M351.5,305.1c0-22,0-44,0-65.9c0-9.7-15-9.7-15,0c0,22,0,44,0,65.9C336.5,314.8,351.5,314.8,351.5,305.1L351.5,305.1z" />
      <path
        d="M357.5,326.1c-0.2,7.3-5.9,13.5-13.5,13.5c-7.4,0-13.5-6.1-13.5-13.5c0-7.1,5.7-13,12.8-13.4
				C351.2,312.2,357.3,318.5,357.5,326.1c0.3,9.6,15.3,9.7,15,0c-0.5-15.5-12.6-28.5-28.5-28.5c-15.5,0-28.5,13-28.5,28.5
				c0,15.5,13,28.5,28.5,28.5c15.8,0,28-13,28.5-28.5C372.8,316.4,357.8,316.5,357.5,326.1z"
      />
    </svg>
  );
};
