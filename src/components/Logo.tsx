import { cn } from "@utils/cn";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("w-full", className)}
      viewBox="0 0 183 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 11V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H11"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L16 22L17.7 17.7L22 16L12 12Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.7031 8.13494C38.6236 7.33286 38.2822 6.70975 37.679 6.26562C37.0758 5.8215 36.2571 5.59943 35.223 5.59943C34.5204 5.59943 33.9271 5.69886 33.4432 5.89773C32.9593 6.08996 32.5881 6.35843 32.3295 6.70312C32.0777 7.04782 31.9517 7.43892 31.9517 7.87642C31.9384 8.241 32.0147 8.55919 32.1804 8.83097C32.3527 9.10275 32.5881 9.33807 32.8864 9.53693C33.1847 9.72917 33.5294 9.8982 33.9205 10.044C34.3116 10.1832 34.7292 10.3026 35.1733 10.402L37.0028 10.8395C37.8911 11.0384 38.7064 11.3035 39.4489 11.6349C40.1913 11.9664 40.8343 12.3741 41.3778 12.858C41.9214 13.3419 42.3423 13.9119 42.6406 14.5682C42.9455 15.2244 43.1013 15.9768 43.108 16.8253C43.1013 18.0715 42.7831 19.152 42.1534 20.0668C41.5303 20.9749 40.6288 21.6809 39.4489 22.1847C38.2756 22.6818 36.8603 22.9304 35.2031 22.9304C33.5592 22.9304 32.1274 22.6785 30.9077 22.1747C29.6946 21.6709 28.7467 20.9252 28.0639 19.9375C27.3878 18.9432 27.0331 17.7135 27 16.2486H31.1662C31.2126 16.9313 31.4081 17.5014 31.7528 17.9588C32.1042 18.4096 32.5715 18.7509 33.1548 18.983C33.7448 19.2083 34.411 19.321 35.1534 19.321C35.8826 19.321 36.5156 19.215 37.0526 19.0028C37.5961 18.7907 38.017 18.4957 38.3153 18.1179C38.6136 17.7401 38.7628 17.3059 38.7628 16.8153C38.7628 16.358 38.6269 15.9735 38.3551 15.6619C38.09 15.3504 37.6989 15.0852 37.1818 14.8665C36.6714 14.6477 36.045 14.4489 35.3026 14.2699L33.0852 13.7131C31.3684 13.2955 30.0128 12.6425 29.0185 11.7543C28.0241 10.866 27.5303 9.66951 27.5369 8.16477C27.5303 6.93182 27.8584 5.85464 28.5213 4.93324C29.1908 4.01184 30.1089 3.29261 31.2756 2.77557C32.4422 2.25852 33.768 2 35.2528 2C36.7642 2 38.0833 2.25852 39.2102 2.77557C40.3438 3.29261 41.2254 4.01184 41.8551 4.93324C42.4848 5.85464 42.8097 6.92187 42.8295 8.13494H38.7031Z"
        fill="currentColor"
      />
      <path
        d="M51.7049 22.9403C50.1405 22.9403 48.7949 22.6089 47.668 21.946C46.5477 21.2765 45.686 20.3485 45.0828 19.1619C44.4862 17.9754 44.1879 16.6098 44.1879 15.0653C44.1879 13.5009 44.4895 12.1288 45.0927 10.9489C45.7026 9.76231 46.5676 8.83759 47.6879 8.17472C48.8081 7.50521 50.1405 7.17045 51.685 7.17045C53.0174 7.17045 54.1841 7.41241 55.185 7.89631C56.186 8.38021 56.9781 9.05966 57.5615 9.93466C58.1448 10.8097 58.4663 11.8371 58.526 13.017H54.5288C54.4161 12.2547 54.1178 11.6416 53.6339 11.1776C53.1566 10.7069 52.5302 10.4716 51.7546 10.4716C51.0984 10.4716 50.525 10.6506 50.0345 11.0085C49.5506 11.3598 49.1727 11.8736 48.901 12.5497C48.6292 13.2259 48.4933 14.0445 48.4933 15.0057C48.4933 15.9801 48.6259 16.8087 48.891 17.4915C49.1628 18.1742 49.5439 18.6946 50.0345 19.0526C50.525 19.4105 51.0984 19.5895 51.7546 19.5895C52.2385 19.5895 52.6727 19.4901 53.0572 19.2912C53.4483 19.0923 53.7698 18.804 54.0217 18.4261C54.2802 18.0417 54.4492 17.581 54.5288 17.044H58.526C58.4597 18.2107 58.1415 19.2382 57.5714 20.1264C57.008 21.008 56.2291 21.6974 55.2348 22.1946C54.2404 22.6918 53.0638 22.9403 51.7049 22.9403Z"
        fill="currentColor"
      />
      <path
        d="M60.118 22.642V7.36932H64.2245V10.0341H64.3836C64.662 9.08617 65.1293 8.37026 65.7856 7.88636C66.4418 7.39583 67.1975 7.15057 68.0526 7.15057C68.2647 7.15057 68.4934 7.16383 68.7387 7.19034C68.984 7.21686 69.1994 7.25331 69.385 7.29972V11.0582C69.1861 10.9986 68.911 10.9455 68.5597 10.8991C68.2084 10.8527 67.8869 10.8295 67.5952 10.8295C66.9721 10.8295 66.4153 10.9654 65.9248 11.2372C65.4409 11.5024 65.0564 11.8736 64.7714 12.3509C64.493 12.8281 64.3537 13.3783 64.3537 14.0014V22.642H60.118Z"
        fill="currentColor"
      />
      <path
        d="M76.7043 22.9403C75.1333 22.9403 73.781 22.6222 72.6475 21.9858C71.5206 21.3428 70.6522 20.4347 70.0423 19.2614C69.4325 18.0814 69.1276 16.6861 69.1276 15.0753C69.1276 13.5043 69.4325 12.1255 70.0423 10.9389C70.6522 9.75237 71.5106 8.82765 72.6176 8.16477C73.7313 7.50189 75.0371 7.17045 76.5352 7.17045C77.5428 7.17045 78.4808 7.33286 79.3492 7.65767C80.2242 7.97585 80.9865 8.45644 81.6361 9.09943C82.2923 9.74242 82.8028 10.5511 83.1673 11.5256C83.5319 12.4934 83.7142 13.6269 83.7142 14.9261V16.0895H70.8179V13.4645H79.727C79.727 12.8546 79.5944 12.3144 79.3293 11.8438C79.0641 11.3731 78.6962 11.0052 78.2256 10.7401C77.7616 10.4683 77.2213 10.3324 76.6048 10.3324C75.9619 10.3324 75.3918 10.4815 74.8946 10.7798C74.4041 11.0715 74.0196 11.4659 73.7412 11.9631C73.4628 12.4536 73.3203 13.0005 73.3137 13.6037V16.0994C73.3137 16.8551 73.4529 17.508 73.7313 18.0582C74.0163 18.6084 74.4173 19.0327 74.9344 19.331C75.4514 19.6293 76.0646 19.7784 76.7739 19.7784C77.2445 19.7784 77.6754 19.7121 78.0665 19.5795C78.4576 19.447 78.7923 19.2481 79.0708 18.983C79.3492 18.7178 79.5613 18.393 79.7071 18.0085L83.6247 18.267C83.4259 19.2083 83.0182 20.0303 82.4017 20.733C81.7919 21.429 81.003 21.9725 80.0352 22.3636C79.0741 22.7481 77.9637 22.9403 76.7043 22.9403Z"
        fill="currentColor"
      />
      <path
        d="M92.3186 22.9403C90.7476 22.9403 89.3954 22.6222 88.2618 21.9858C87.1349 21.3428 86.2666 20.4347 85.6567 19.2614C85.0469 18.0814 84.7419 16.6861 84.7419 15.0753C84.7419 13.5043 85.0469 12.1255 85.6567 10.9389C86.2666 9.75237 87.125 8.82765 88.232 8.16477C89.3456 7.50189 90.6515 7.17045 92.1496 7.17045C93.1572 7.17045 94.0952 7.33286 94.9635 7.65767C95.8385 7.97585 96.6008 8.45644 97.2505 9.09943C97.9067 9.74242 98.4171 10.5511 98.7817 11.5256C99.1463 12.4934 99.3286 13.6269 99.3286 14.9261V16.0895H86.4323V13.4645H95.3414C95.3414 12.8546 95.2088 12.3144 94.9436 11.8438C94.6785 11.3731 94.3106 11.0052 93.84 10.7401C93.3759 10.4683 92.8357 10.3324 92.2192 10.3324C91.5762 10.3324 91.0062 10.4815 90.509 10.7798C90.0185 11.0715 89.634 11.4659 89.3556 11.9631C89.0772 12.4536 88.9347 13.0005 88.928 13.6037V16.0994C88.928 16.8551 89.0672 17.508 89.3456 18.0582C89.6307 18.6084 90.0317 19.0327 90.5488 19.331C91.0658 19.6293 91.679 19.7784 92.3883 19.7784C92.8589 19.7784 93.2898 19.7121 93.6809 19.5795C94.072 19.447 94.4067 19.2481 94.6851 18.983C94.9635 18.7178 95.1757 18.393 95.3215 18.0085L99.2391 18.267C99.0402 19.2083 98.6326 20.0303 98.0161 20.733C97.4062 21.429 96.6174 21.9725 95.6496 22.3636C94.6884 22.7481 93.5781 22.9403 92.3186 22.9403Z"
        fill="currentColor"
      />
      <path
        d="M105.209 13.8125V22.642H100.973V7.36932H105.01V10.0639H105.189C105.527 9.17566 106.094 8.47301 106.889 7.95597C107.684 7.43229 108.649 7.17045 109.782 7.17045C110.843 7.17045 111.768 7.40246 112.557 7.86648C113.345 8.33049 113.959 8.99337 114.396 9.85511C114.834 10.7102 115.052 11.7311 115.052 12.9176V22.642H110.817V13.6733C110.823 12.7386 110.585 12.0095 110.101 11.4858C109.617 10.9555 108.951 10.6903 108.102 10.6903C107.532 10.6903 107.028 10.813 106.591 11.0582C106.16 11.3035 105.822 11.6615 105.576 12.1321C105.338 12.5961 105.215 13.1562 105.209 13.8125Z"
        fill="currentColor"
      />
      <path
        d="M129.978 11.7244L126.1 11.9631C126.034 11.6316 125.892 11.3333 125.673 11.0682C125.454 10.7964 125.166 10.581 124.808 10.4219C124.456 10.2562 124.035 10.1733 123.545 10.1733C122.889 10.1733 122.335 10.3125 121.884 10.5909C121.434 10.8627 121.208 11.2273 121.208 11.6847C121.208 12.0492 121.354 12.3575 121.646 12.6094C121.937 12.8613 122.438 13.0634 123.147 13.2159L125.911 13.7727C127.396 14.0777 128.503 14.5682 129.232 15.2443C129.962 15.9205 130.326 16.8087 130.326 17.9091C130.326 18.91 130.031 19.7884 129.441 20.544C128.858 21.2997 128.056 21.8897 127.035 22.3139C126.021 22.7315 124.851 22.9403 123.525 22.9403C121.503 22.9403 119.892 22.5194 118.693 21.6776C117.499 20.8291 116.8 19.6757 116.595 18.2173L120.761 17.9986C120.887 18.6151 121.192 19.0857 121.676 19.4105C122.159 19.7287 122.779 19.8878 123.535 19.8878C124.277 19.8878 124.874 19.7453 125.325 19.4602C125.782 19.1686 126.014 18.794 126.021 18.3366C126.014 17.9522 125.852 17.6373 125.534 17.392C125.215 17.1402 124.725 16.9479 124.062 16.8153L121.417 16.2884C119.926 15.9901 118.815 15.473 118.086 14.7372C117.364 14.0014 117.002 13.0634 117.002 11.9233C117.002 10.9422 117.267 10.0971 117.798 9.38778C118.335 8.6785 119.087 8.13163 120.055 7.74716C121.029 7.36269 122.169 7.17045 123.475 7.17045C125.404 7.17045 126.922 7.57812 128.029 8.39347C129.143 9.20881 129.793 10.3191 129.978 11.7244Z"
        fill="currentColor"
      />
      <path
        d="M136.109 13.8125V22.642H131.873V2.27841H135.99V10.0639H136.169C136.514 9.16241 137.07 8.45644 137.839 7.94602C138.608 7.42898 139.573 7.17045 140.733 7.17045C141.793 7.17045 142.718 7.40246 143.507 7.86648C144.302 8.32386 144.919 8.98343 145.356 9.84517C145.801 10.7003 146.019 11.7244 146.013 12.9176V22.642H141.777V13.6733C141.783 12.732 141.545 11.9995 141.061 11.4759C140.584 10.9522 139.914 10.6903 139.052 10.6903C138.476 10.6903 137.965 10.813 137.521 11.0582C137.084 11.3035 136.739 11.6615 136.487 12.1321C136.242 12.5961 136.116 13.1562 136.109 13.8125Z"
        fill="currentColor"
      />
      <path
        d="M155.127 22.9403C153.582 22.9403 152.246 22.6122 151.12 21.956C149.999 21.2931 149.134 20.3717 148.524 19.1918C147.915 18.0052 147.61 16.6297 147.61 15.0653C147.61 13.4877 147.915 12.1089 148.524 10.929C149.134 9.74242 149.999 8.82102 151.12 8.16477C152.246 7.50189 153.582 7.17045 155.127 7.17045C156.671 7.17045 158.004 7.50189 159.124 8.16477C160.251 8.82102 161.119 9.74242 161.729 10.929C162.339 12.1089 162.644 13.4877 162.644 15.0653C162.644 16.6297 162.339 18.0052 161.729 19.1918C161.119 20.3717 160.251 21.2931 159.124 21.956C158.004 22.6122 156.671 22.9403 155.127 22.9403ZM155.147 19.6591C155.849 19.6591 156.436 19.4602 156.906 19.0625C157.377 18.6581 157.732 18.108 157.97 17.4119C158.216 16.7159 158.338 15.9238 158.338 15.0355C158.338 14.1473 158.216 13.3551 157.97 12.6591C157.732 11.9631 157.377 11.4129 156.906 11.0085C156.436 10.6042 155.849 10.402 155.147 10.402C154.437 10.402 153.841 10.6042 153.357 11.0085C152.879 11.4129 152.518 11.9631 152.273 12.6591C152.034 13.3551 151.915 14.1473 151.915 15.0355C151.915 15.9238 152.034 16.7159 152.273 17.4119C152.518 18.108 152.879 18.6581 153.357 19.0625C153.841 19.4602 154.437 19.6591 155.147 19.6591Z"
        fill="currentColor"
      />
      <path
        d="M172.402 7.36932V10.5511H163.204V7.36932H172.402ZM165.292 3.71023H169.528V17.9489C169.528 18.34 169.588 18.6449 169.707 18.8636C169.826 19.0758 169.992 19.2249 170.204 19.3111C170.423 19.3973 170.675 19.4403 170.96 19.4403C171.159 19.4403 171.358 19.4238 171.556 19.3906C171.755 19.3509 171.908 19.321 172.014 19.3011L172.68 22.4531C172.468 22.5194 172.17 22.5956 171.785 22.6818C171.401 22.7746 170.933 22.831 170.383 22.8509C169.362 22.8906 168.467 22.7547 167.698 22.4432C166.936 22.1316 166.343 21.6477 165.919 20.9915C165.494 20.3352 165.286 19.5066 165.292 18.5057V3.71023Z"
        fill="currentColor"
      />
      <path
        d="M183 25.5C183 27.433 181.433 29 179.5 29C177.567 29 176 27.433 176 25.5C176 23.567 177.567 22 179.5 22C181.433 22 183 23.567 183 25.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
