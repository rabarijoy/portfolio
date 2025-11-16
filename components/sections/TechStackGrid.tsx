'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiPhp,
  SiReact, SiSymfony, SiTailwindcss,
  SiPostgresql, SiSqlite, SiClickhouse,
  SiGit, SiGithub, SiGitlab, SiNpm, SiDocker,
  SiWordpress, SiDrupal, SiWebflow,
  SiJson, SiVercel, SiFigma,
} from 'react-icons/si';
import { 
  Database, Package, Globe, FileJson, Flame
} from 'lucide-react';

// Composants SVG personnalisés
const LandoIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 225 225"
    className={className}
    style={style}
  >
    <path
      d="M 94.785 1.551 C 46.908 9.006, 8.753 47.509, 1.489 95.697 C -1.216 113.644, 0.301 131.147, 6.048 148.303 C 15.342 176.051, 36.384 200.207, 62.763 213.412 C 76.103 220.090, 97.148 224.988, 112.500 224.988 C 127.852 224.988, 148.897 220.090, 162.237 213.412 C 177.129 205.957, 193 192.536, 203.521 178.500 C 213.153 165.651, 222.083 143.407, 223.616 128.448 C 223.982 124.870, 224.669 121.705, 225.141 121.413 C 225.613 121.121, 226 116.607, 226 111.382 C 226 106.157, 225.611 102.122, 225.136 102.416 C 224.660 102.710, 223.974 100.048, 223.610 96.500 C 222.017 80.945, 213.544 60.250, 202.988 46.127 C 196.743 37.771, 185.321 26.442, 177.500 20.845 C 154.150 4.136, 123.740 -2.958, 94.785 1.551 M 100.250 14.998 C 90.051 16.435, 79.085 19.808, 69.447 24.472 C 36.498 40.417, 15.214 73.651, 14.672 110 C 14.577 116.325, 14.859 124.003, 15.298 127.062 L 16.097 132.624 23.327 125.562 C 30.036 119.009, 46.555 108, 49.679 108 C 50.402 108, 48.780 110.137, 46.074 112.750 C 39.058 119.525, 37.982 126.304, 43.523 128.829 C 46.287 130.088, 54.245 130.351, 60.130 129.378 L 63.760 128.777 62.392 123.639 C 61.639 120.812, 61.018 114.869, 61.012 110.432 C 60.990 95.810, 66.207 83.820, 77.034 73.607 C 84.712 66.364, 92.045 62.519, 102.343 60.338 C 127.217 55.068, 153.774 71.063, 161.044 95.692 L 162.282 99.883 169.005 96.498 C 175.702 93.125, 181 88.200, 181 85.346 C 181 81.216, 171.927 76.020, 164.691 76.006 C 163.146 76.003, 162.121 75.613, 162.414 75.140 C 164.192 72.263, 192.954 73.282, 200.642 76.495 C 202.527 77.282, 204 77.471, 204 76.924 C 204 76.388, 202.372 72.699, 200.383 68.725 C 189.632 47.248, 170.247 29.660, 147.743 20.966 C 133.278 15.378, 114.395 13.005, 100.250 14.998 M 203.500 97.406 C 197.232 103.960, 186.457 111.247, 173.186 117.907 C 167.536 120.742, 162.665 123.835, 162.362 124.781 C 158.307 137.415, 151.923 146.852, 142.976 153.439 C 124.773 166.839, 100.180 166.805, 81.909 153.354 L 75.768 148.833 63.310 150.058 C 49.104 151.455, 33.799 150.850, 26.547 148.606 C 23.822 147.763, 21.370 147.296, 21.098 147.569 C 20.825 147.841, 22.070 151.040, 23.864 154.678 C 35.412 178.097, 54.449 195.491, 78.385 204.494 C 90.333 208.989, 98.382 210.335, 113 210.282 C 124.124 210.242, 128.193 209.789, 136.119 207.707 C 155.158 202.708, 169.666 194.243, 183.092 180.300 C 195.706 167.200, 202.940 154.271, 207.642 136.421 C 209.883 127.912, 210.248 124.507, 210.203 112.500 C 210.173 104.800, 209.778 97.078, 209.325 95.339 L 208.500 92.178 203.500 97.406 M 0.365 112.500 C 0.368 118, 0.536 120.122, 0.738 117.216 C 0.941 114.311, 0.939 109.811, 0.734 107.216 C 0.528 104.622, 0.363 107, 0.365 112.500"
      stroke="none"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const CursorIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height={size || 24}
    viewBox="0 0 24 24"
    width={size || 24}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z" />
  </svg>
);

const ClaudeIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height={size || 24}
    viewBox="0 0 24 24"
    width={size || 24}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" />
  </svg>
);

const GPTIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height={size || 24}
    viewBox="0 0 24 24"
    width={size || 24}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z" />
  </svg>
);

const AlpineIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={size || 24}
    height={size || 24}
    className={className}
    style={style}
  >
    <path fill="currentColor" fillRule="evenodd" d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z" clipRule="evenodd"/>
    <path fill="currentColor" fillRule="evenodd" d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" clipRule="evenodd"/>
  </svg>
);

const CSharpIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={size || 24}
    height={size || 24}
    className={className}
    style={style}
  >
    <path fill="currentColor" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
    <path fill="currentColor" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
    <path fill="currentColor" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>
  </svg>
);

const PhoenixIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={size || 24}
    height={size || 24}
    className={className}
    style={style}
  >
    <path fill="currentColor" d="m48.067 81.275-1.006-.183c-7.145-1.329-11.66-5.65-13.797-12.447-1.337-4.237 1.087-7.355 5.53-7.56 3.637-.17 6.129 1.922 8.33 4.355 2.839 3.135 5.44 6.486 8.228 9.67 4.014 4.583 8.744 7.534 15.215 6.623 5.801-.816 10.86-3.144 15.258-6.977.661-.576 1.387-1.079 2.085-1.615l-.44-.518c-3.694 1.15-7.46 1.533-11.31 1.34-5.823-.292-11.373-1.51-16.338-4.706-4.531-2.918-7.873-6.828-9.46-12.05-1.283-4.22 1.34-7.171 5.715-6.561 1.727.242 3.181 1.02 4.489 2.122 1.062.9 2.083 1.85 3.167 2.722 5.104 4.102 12.235 4.33 18.71-.124-10.648-.048-17.893-5.907-24.256-13.33-2.49-2.905-4.921-5.861-7.464-8.722-4.919-5.533-10.375-10.407-17.844-12.072-9.548-2.122-18.762-.732-27.606 3.316-1.763.807-3.456 1.748-5.273 3.26.9 0 1.39.01 1.88 0 4.46-.117 7.802 1.864 10.212 5.512 1.754 2.655 2.58 5.657 3.21 8.745.935 4.584.45 9.255.991 13.861 1.387 11.837 7.437 20.097 18.701 24.327 4.132 1.552 8.368 2.068 13.072 1.01zm-28.471-54c-1.779.448-3.201-.27-4.666-1.753 2.51-.625 4.724-.868 7.103-.963-.195 1.546-1.107 2.38-2.435 2.716zm58.332 69.126c-.155-1.141-1.13-1.643-1.896-2.238-3.384-2.636-7.345-3.57-11.543-3.646-2.506-.047-4.986-.233-7.347-1.112-1.084-.4-2.298-.92-2.268-2.318.027-1.422 1.263-1.823 2.388-2.159.92-.272 1.87-.45 2.917-.695-2.661-1.706-5.261-1.941-8.726-.547-5.456 2.19-10.833 1.932-16.27-.03-3.07-1.11-5.795-2.85-8.63-4.39l-.078.055a5.395 5.395 0 0 0 .072-.054c-.07-.213-.195-.219-.359-.098l.222.195c2.351 3.855 5.53 6.957 9.121 9.608 6.914 5.103 14.465 8.148 23.302 6.798a121.601 121.601 0 0 1 8.608-1.008c3.61-.292 7.047.726 10.487 1.639zm-16.66-55.31c-.192-.138-.376-.484-.767-.126 3.181 4.302 7.264 7.47 12.182 9.466 7.936 3.221 15.991 3.773 24.23.93 6.397-2.206 10.995-.051 13.384 6.16.346-7.209-3.896-12.462-10.65-13.49-3.8-.58-7.31.68-10.867 1.713-9.905 2.872-19.112 1.455-27.513-4.653zm49.367 28.116c1.29.107 2.582.224 3.872.337-2.916-2.56-6.47-2.765-10.067-2.56-5.473.31-9.417 3.47-13.014 7.24-3.17 3.326-6.034 7.055-10.76 8.392.08.142.1.214.122.214.636.009 1.272.038 1.907.009 6.868-.31 13.338-1.759 18.483-6.744 1.622-1.568 3.07-3.311 4.636-4.94 1.306-1.36 2.887-2.113 4.821-1.95zm-15.954-8.512c-5.125.449-9.576 2.568-13.757 5.364-3.22 2.15-6.66 3.168-10.529 2.497-.68-.12-1.366-.208-2.049-.31l-.023.284c.246.128.483.275.738.378.645.255 1.28.562 1.95.72 7.442 1.77 14.568.864 20.991-3.286 4.049-2.616 8.24-3.112 12.783-2.436.46.07.917.151 1.378.196.426.04.872.463 1.449.005-3.971-2.869-8.25-3.82-12.931-3.412zM76.366 43.298c2.688.093 5.364-.26 8.177-1.93-.825.072-1.172.072-1.508.138-3.875.772-7.351-.073-10.45-2.521-1.135-.898-2.29-1.775-3.442-2.656-4.563-3.488-9.797-4.656-15.52-4.556.091.28.1.474.198.574 6.229 6.297 13.435 10.637 22.545 10.95zm45.07 32.319c-3.853-3.823-9.026-4.314-13.812-.979 3.168.141 5.546 1.152 7.474 3.15a23.695 23.695 0 0 0 2.155 2.015c2.917 2.352 7.858 2.465 10.747.282-3.392-1.323-3.392-1.323-6.563-4.468zm-38.384 29.272c-3.386-6.306-9.079-7.728-15.657-7.305a17.62 17.62 0 0 1 5.426 2.534c1.532 1.068 2.82 2.388 4.09 3.745 2.514 2.685 6.44 4.33 9.043 3.774-1.195-.751-2.257-1.547-2.902-2.748zm31.516-35.215c0-.042.001-.081.004-.124l-.01.011.01-.01-.065-.008.038.032.022.097zM78.114 96.55a13.871 13.871 0 0 0-.132-.076.232.232 0 0 0 .027.079c.01.015.07 0 .106-.003zm-.132-.076-.015-.061-.015.018.015-.018-.04-.01.01.046.043.025z"/>
  </svg>
);

const JavaIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width={size || 24}
    height={size || 24}
    className={className}
    style={style}
  >
    <path fill="currentColor" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="currentColor" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
    <path fill="currentColor" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
    <path fill="currentColor" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
    <path fill="currentColor" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
);

const FramerIcon = ({ size, className, style }: { size?: number; className?: string; style?: React.CSSProperties }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    width={size || 24}
    height={size || 24}
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
  </svg>
);

interface GridIcon {
  id: number;
  x: number;
  y: number;
  bg: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  distance?: number;
  isEmpty?: boolean; // Case vide pour compléter la grille
  name?: string; // Nom de la technologie
}

export function TechStackGrid() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [gridConfig, setGridConfig] = useState({ cols: 7, rows: 5 });
  const [blinkStates, setBlinkStates] = useState<Record<number, boolean>>({});
  const [isClient, setIsClient] = useState(false);
  const [hoveredIconId, setHoveredIconId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    const updateGrid = () => {
      checkMobile();
      // Calculer la largeur disponible exacte du container (même que section projets)
      const screenWidth = window.innerWidth;
      const containerMaxWidth = 1280;
      const containerPadding = screenWidth >= 1024 ? 40 : 20; // Même padding que .container
      
      // Largeur disponible = min(screenWidth, containerMaxWidth) - 2 * padding
      const availableWidth = Math.min(screenWidth, containerMaxWidth) - (2 * containerPadding);
      
      // Calculer le nombre de colonnes pour remplir exactement cet espace
      // gap = 10 (fixe), cellSize sera calculé après
      // On veut maximiser le nombre de colonnes tout en gardant un cellSize raisonnable
      // Formule: availableWidth = cols * cellSize + (cols - 1) * gap
      // On itère pour trouver le meilleur nombre de colonnes
      const gap = 10; // Écart fixe entre les carrés
      const minCellSize = 60; // Taille minimale acceptable
      const maxCellSize = 150; // Taille maximale acceptable
      
      let bestCols = 5;
      let bestCellSize = 0;
      
      // Tester différentes valeurs de colonnes pour trouver la meilleure
      for (let testCols = 5; testCols <= 15; testCols++) {
        const totalGapSpace = gap * (testCols - 1);
        const testCellSize = (availableWidth - totalGapSpace) / testCols;
        
        if (testCellSize >= minCellSize && testCellSize <= maxCellSize) {
          if (testCellSize > bestCellSize) {
            bestCellSize = testCellSize;
            bestCols = testCols;
          }
        }
      }
      
      // Forcer 8 colonnes x 4 lignes pour exactement 32 icônes
      const cols = 8;
      const rows = 4;
      
      setGridConfig({ cols, rows });
    };

    // Gérer la visibilité de la page pour réinitialiser l'état
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page cachée : réinitialiser l'état
        setHoveredIconId(null);
        setMousePos({ x: 0, y: 0 });
      } else {
        // Page visible : réinitialiser et mettre à jour la grille
        setHoveredIconId(null);
        updateGrid();
      }
    };

    // Gérer le focus de la fenêtre
    const handleWindowFocus = () => {
      setHoveredIconId(null);
      updateGrid();
    };

    checkMobile();
    updateGrid();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      checkMobile();
      updateGrid();
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateGrid);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [isMobile]);

  // Gérer le clignotement aléatoire avec effet ripple
  useEffect(() => {
    const triggerRipple = (startIndex: number) => {
      const visited = new Set<number>();
      const queue: Array<{index: number, delay: number}> = [{index: startIndex, delay: 0}];
      
      while (queue.length > 0) {
        const {index, delay} = queue.shift()!;
        
        if (visited.has(index) || index < 0 || index >= 32) continue;
        visited.add(index);
        
        setTimeout(() => {
          setBlinkStates(prev => ({
            ...prev,
            [index]: true
          }));
          
          setTimeout(() => {
            setBlinkStates(prev => ({
              ...prev,
              [index]: false
            }));
          }, 250);
        }, delay);
        
        // Ajouter les voisins avec un délai
        const row = Math.floor(index / gridConfig.cols);
        const col = index % gridConfig.cols;
        
        const neighbors = [
          index - 1, // gauche
          index + 1, // droite
          index - gridConfig.cols, // haut
          index + gridConfig.cols, // bas
        ];
        
        neighbors.forEach(neighbor => {
          const neighborRow = Math.floor(neighbor / gridConfig.cols);
          const neighborCol = neighbor % gridConfig.cols;
          
          // Vérifier que c'est bien un voisin adjacent
          if (Math.abs(neighborRow - row) + Math.abs(neighborCol - col) === 1) {
            if (!visited.has(neighbor) && neighbor >= 0 && neighbor < 32) {
              queue.push({index: neighbor, delay: delay + 60});
            }
          }
        });
      }
    };
    
    const interval = setInterval(() => {
      const randomStart = Math.floor(Math.random() * 32);
      triggerRipple(randomStart);
    }, 4000); // Démarrer une nouvelle vague toutes les 4 secondes
    
    // Démarrer une première vague après un délai aléatoire
    setTimeout(() => {
      triggerRipple(Math.floor(Math.random() * 32));
    }, Math.random() * 2000);
    
    return () => clearInterval(interval);
  }, [gridConfig.cols]);

  // Technologies avec leurs couleurs officielles et noms
  // Organisées par ordre logique : du plus utilisé au plus niche
  const techList = [
    // Langages de base (très utilisés)
    { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
    { icon: SiCss3, color: '#1572B6', name: 'CSS3' },
    { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
    { icon: SiPhp, color: '#777BB4', name: 'PHP' },
    { icon: Database, color: '#336791', name: 'SQL' },
    { icon: JavaIcon, color: '#ED8B00', name: 'Java' },
    { icon: CSharpIcon, color: '#239120', name: 'C#' },
    // Frameworks frontend (très utilisés)
    { icon: SiReact, color: '#61DAFB', name: 'React' },
    { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
    { icon: AlpineIcon, color: '#8BC0D0', name: 'Alpine.js' },
    // Frameworks backend (utilisés)
    { icon: SiSymfony, color: '#000000', name: 'Symfony' },
    { icon: PhoenixIcon, color: '#FD4F00', name: 'Phoenix Framework' },
    { icon: Flame, color: '#FD4F00', name: 'Phoenix LiveView' },
    // Bases de données (utilisées)
    { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
    { icon: SiSqlite, color: '#003B57', name: 'SQLite' },
    { icon: SiClickhouse, color: '#FFCC02', name: 'ClickHouse' },
    // Outils de développement (très utilisés)
    { icon: SiGithub, color: '#181717', name: 'GitHub' },
    { icon: SiGitlab, color: '#FC6D26', name: 'GitLab' },
    { icon: SiNpm, color: '#CB3837', name: 'npm' },
    { icon: SiDocker, color: '#2496ED', name: 'Docker' },
    { icon: LandoIcon, color: '#3B82F6', name: 'Lando' },
    // CMS/Plateformes (utilisés)
    { icon: SiWordpress, color: '#21759B', name: 'WordPress' },
    { icon: SiDrupal, color: '#0678BE', name: 'Drupal' },
    { icon: SiWebflow, color: '#4353FF', name: 'Webflow' },
    { icon: FramerIcon, color: '#0055FF', name: 'Framer' },
    // Outils et services (utilisés)
    { icon: SiJson, color: '#000000', name: 'JSON' },
    { icon: SiVercel, color: '#000000', name: 'Vercel' },
    { icon: CursorIcon, color: '#000000', name: 'Cursor' },
    { icon: ClaudeIcon, color: '#000000', name: 'Sonnet' },
    { icon: GPTIcon, color: '#10A37F', name: 'GPT' },
    { icon: SiFigma, color: '#F24E1E', name: 'Figma' },
  ];

  const totalIcons = techList.length; // 32 icônes

  const gap = 10; // Écart fixe entre les carrés

  // Calculer les positions des icônes avec useMemo pour éviter les recalculs inutiles
  // et s'assurer que les valeurs sont toujours à jour
  const { icons, cellSize } = useMemo(() => {
    if (!isClient || gridConfig.cols === 0) {
      return { icons: [], cellSize: 0 };
    }

    // Calculer la largeur disponible exacte du container (même que section projets)
    const screenWidth = window.innerWidth;
    const containerMaxWidth = 1280;
    const containerPadding = screenWidth >= 1024 ? 40 : 20; // Même padding que .container
    
    const containerWidth = Math.min(screenWidth, containerMaxWidth) - (2 * containerPadding);
    const totalGapSpace = gap * (gridConfig.cols - 1);
    const availableSpace = containerWidth - totalGapSpace;
    const calculatedCellSize = availableSpace / gridConfig.cols;

    // Calculer la hauteur totale de la grille
    const totalGridHeight = gridConfig.rows * calculatedCellSize + (gridConfig.rows - 1) * gap;
    // Pas de centrage vertical - la grille commence directement en haut
    const startY = calculatedCellSize / 2;

    // Position de départ horizontale : aligner exactement avec le container
    // Le container a max-width: 1280px, margin: 0 auto, padding: 20px/40px
    // Le contenu du container commence à : (screenWidth - min(screenWidth, 1280)) / 2 + padding
    const gridTotalWidth = gridConfig.cols * calculatedCellSize + (gridConfig.cols - 1) * gap;
    const containerActualWidth = Math.min(screenWidth, containerMaxWidth);
    const containerLeftEdge = (screenWidth - containerActualWidth) / 2;
    const containerContentLeft = containerLeftEdge + containerPadding;
    const startX = containerContentLeft + gridTotalWidth / 2;

    // Calculer le nombre total de cases nécessaires pour un rectangle parfait
    const totalCells = gridConfig.cols * gridConfig.rows;
    const iconsArray: GridIcon[] = [];
    
    // Créer les cases avec icônes (32 au maximum)
    for (let i = 0; i < 32 && i < techList.length; i++) {
      const row = Math.floor(i / gridConfig.cols);
      const col = i % gridConfig.cols;
      
      // Vérifier si cette case est dans les limites de la grille
      if (row < gridConfig.rows && col < gridConfig.cols) {
        const tech = techList[i]; // Utiliser directement l'index i
        
        iconsArray.push({
          id: i,
          x: startX - gridTotalWidth / 2 + col * (calculatedCellSize + gap) + calculatedCellSize / 2,
          y: row * (calculatedCellSize + gap) + calculatedCellSize / 2 + startY,
          bg: tech.color,
          icon: tech.icon,
          color: '#ffffff',
          name: tech.name,
          isEmpty: false,
        });
      }
    }
    
    // Compléter avec des cases vides si nécessaire
    for (let i = 32; i < totalCells; i++) {
      const row = Math.floor(i / gridConfig.cols);
      const col = i % gridConfig.cols;
      
      iconsArray.push({
        id: i,
        x: startX - gridTotalWidth / 2 + col * (calculatedCellSize + gap) + calculatedCellSize / 2,
        y: row * (calculatedCellSize + gap) + calculatedCellSize / 2 + startY,
        bg: '#9ca3af', // Gris pour les cases vides
        icon: () => null, // Pas d'icône
        color: '#ffffff',
        isEmpty: true,
      });
    }

    return { icons: iconsArray, cellSize: calculatedCellSize };
  }, [isClient, gridConfig.cols, gridConfig.rows]);

  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Trouver le carré exactement sous le curseur (le plus proche de la souris)
  const activeIcons = icons.filter(icon => !icon.isEmpty);
  const iconsWithDistanceFromMouse = activeIcons.map(icon => ({
    ...icon,
    distance: getDistance(mousePos.x, mousePos.y, icon.x, icon.y)
  })).sort((a, b) => (a.distance || 0) - (b.distance || 0));

  // Le carré directement sous le curseur (le plus proche de la souris)
  const cursorIcon = iconsWithDistanceFromMouse[0];
  
  // Si on a trouvé un carré sous le curseur, trouver les 5 plus proches de ce carré
  let closestSix = new Set<number>();
  if (cursorIcon) {
    closestSix.add(cursorIcon.id);
    
    // Trouver les 5 autres carrés les plus proches du carré sous le curseur
    const iconsWithDistanceFromCursor = activeIcons
      .filter(icon => icon.id !== cursorIcon.id)
      .map(icon => ({
        ...icon,
        distance: getDistance(cursorIcon.x, cursorIcon.y, icon.x, icon.y)
      }))
      .sort((a, b) => (a.distance || 0) - (b.distance || 0));
    
    // Ajouter les 5 plus proches
    iconsWithDistanceFromCursor.slice(0, 5).forEach(icon => {
      closestSix.add(icon.id);
    });
  }

  const getOpacity = (iconId: number) => {
    return closestSix.has(iconId) ? 1 : 0;
  };

  const getScale = (iconId: number) => {
    return closestSix.has(iconId) ? 1 : 0.8;
  };

  // Ne pas rendre avant que le client soit monté pour éviter l'hydration mismatch
  if (!isClient) {
    return <div className="tech-stack-absolute-container" style={{ minHeight: '500px' }} />;
  }

  // Version mobile : carrousel qui défile en continu
  if (isMobile) {
    const mobileIconSize = 80; // Taille des icônes sur mobile (identique à cellSize approximatif)
    const mobileGap = 20; // Espacement entre les icônes
    
    // Dupliquer les icônes pour créer un défilement infini
    const duplicatedIcons = [...techList, ...techList, ...techList];
    
    return (
      <div className="tech-stack-mobile-container">
        <div className="tech-stack-mobile-scroll">
          {duplicatedIcons.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`mobile-${index}`}
                className="tech-stack-mobile-item"
                style={{
                  width: `${mobileIconSize}px`,
                  height: `${mobileIconSize}px`,
                  marginRight: `${mobileGap}px`,
                  backgroundColor: tech.color,
                }}
              >
                <IconComponent size={Math.floor(mobileIconSize * 0.4)} style={{ color: '#ffffff' }} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Version desktop : grille interactive
  return (
    <div className="tech-stack-absolute-container">
      {/* Carrés de fond gris qui clignotent */}
      {icons.map((icon) => {
        // Les cases vides sont toujours visibles et ne clignotent pas
        if (icon.isEmpty) {
          return (
            <div
              key={`bg-${icon.id}`}
              className="tech-stack-background-square"
              style={{
                left: `${icon.x}px`,
                top: `${icon.y}px`,
                width: `${cellSize}px`,
                height: `${cellSize}px`,
                transform: 'translate(-50%, -50%)',
                opacity: 0.18, // Opacité fixe pour les cases vides
                backgroundColor: '#9ca3af',
                boxShadow: 'none',
                pointerEvents: 'none', // Pas d'interaction
              }}
            />
          );
        }
        
        const isVisible = closestSix.has(icon.id);
        const isBlink = blinkStates[icon.id];
        
        return (
          <div
            key={`bg-${icon.id}`}
            className="tech-stack-background-square"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              transform: 'translate(-50%, -50%)',
              opacity: isVisible ? 0 : (isBlink ? 0.4 : 0.18),
              backgroundColor: '#9ca3af',
              boxShadow: isBlink ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
            }}
            onMouseEnter={() => setHoveredIconId(icon.id)}
            onMouseLeave={() => setHoveredIconId(null)}
          />
        );
      })}
      
      {/* Icônes colorées qui apparaissent au hover */}
      {icons.map((icon) => {
        // Les cases vides n'ont pas d'icône colorée
        if (icon.isEmpty) {
          return null;
        }
        
        const isVisible = closestSix.has(icon.id);
        const opacity = isVisible ? 1 : 0;
        const scale = isVisible ? 1 : 0.8;
        const IconComponent = icon.icon;
        
        return (
          <div
            key={icon.id}
            className="tech-stack-absolute-item"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              backgroundColor: icon.bg,
              pointerEvents: isVisible ? 'auto' : 'none',
            }}
            onMouseEnter={() => setHoveredIconId(icon.id)}
            onMouseLeave={() => setHoveredIconId(null)}
          >
            <IconComponent size={Math.floor(cellSize * 0.4)} style={{ color: icon.color }} />
          </div>
        );
      })}
      
      {/* Tooltip - affiché au-dessus de l'icône survolée */}
      {hoveredIconId !== null && icons[hoveredIconId] && !icons[hoveredIconId].isEmpty && icons[hoveredIconId].name && (
        <div
          className="tech-stack-tooltip"
          style={{
            left: `${icons[hoveredIconId].x}px`,
            top: `${icons[hoveredIconId].y - cellSize / 2 - 12}px`,
          }}
        >
          {icons[hoveredIconId].name}
        </div>
      )}
      
    </div>
  );
}
