import React from 'react';
import { Link } from 'react-router-dom';

import styles from './linkSettings.css';

import { Break } from '../../../shared/Break';
import { EColor, Text } from '../../../shared/Text';

export function LinkSettings() {
  return (
    <Link to={`/settings`} className={styles.linkSettings} title='Перейти на страницу настроек пользователя'>
      <svg width='24' height='24' viewBox='0 0 447.479 447.479' xmlns='http://www.w3.org/2000/svg'>
        <g fill='#DC3E22'>
          <path d='M411.426,75.746H36.053C16.173,75.746,0,91.92,0,111.799V335.68c0,19.879,16.173,36.052,36.053,36.052h375.374   c19.879,0,36.053-16.173,36.053-36.052V111.799C447.479,91.92,431.306,75.746,411.426,75.746z M427.479,335.68   c0,8.851-7.201,16.052-16.053,16.052H36.053c-8.852,0-16.053-7.201-16.053-16.052V111.799c0-8.852,7.201-16.053,16.053-16.053   h375.374c8.852,0,16.053,7.201,16.053,16.053V335.68z' />
          <path d='m82.747,127.494c-17.506,0-31.749,14.243-31.749,31.749 0,14.011 9.127,25.923 21.745,30.125v120.615c0,5.523 4.477,10 10,10s10-4.477 10-10v-120.613c12.622-4.199 21.753-16.113 21.753-30.127-1.42109e-14-17.506-14.243-31.749-31.749-31.749zm0,43.498c-6.479,0-11.749-5.271-11.749-11.749s5.271-11.749 11.749-11.749 11.749,5.271 11.749,11.749-5.271,11.749-11.749,11.749z' />
          <path d='m186.743,172.115v-34.623c0-5.523-4.477-10-10-10s-10,4.477-10,10v34.622c-12.62,4.2-21.75,16.113-21.75,30.126s9.129,25.927 21.75,30.126v77.616c0,5.523 4.477,10 10,10s10-4.477 10-10v-77.616c12.62-4.201 21.748-16.114 21.748-30.126s-9.129-25.925-21.748-30.125zm-10.001,41.875c-6.478,0-11.749-5.271-11.749-11.749 0-6.478 5.271-11.749 11.749-11.749 6.479,0 11.749,5.271 11.749,11.749 2.84217e-14,6.478-5.271,11.749-11.749,11.749z' />
          <path d='m280.733,215.111v-77.618c0-5.523-4.477-10-10-10s-10,4.477-10,10v77.621c-12.618,4.202-21.745,16.114-21.745,30.125s9.127,25.923 21.745,30.125v34.619c0,5.523 4.477,10 10,10s10-4.477 10-10v-34.616c12.622-4.199 21.753-16.114 21.753-30.128s-9.131-25.929-21.753-30.128zm-9.996,41.877c-6.479,0-11.749-5.271-11.749-11.749s5.271-11.749 11.749-11.749c6.478,0 11.749,5.271 11.749,11.749s-5.271,11.749-11.749,11.749z' />
          <path d='m374.733,258.111v-120.619c0-5.523-4.477-10-10-10s-10,4.477-10,10v120.618c-12.62,4.2-21.75,16.114-21.75,30.126 0,17.506 14.243,31.749 31.749,31.749s31.749-14.242 31.749-31.749c-5.68434e-14-14.012-9.128-25.925-21.748-30.125zm-10.001,41.874c-6.479,0-11.749-5.271-11.749-11.749 0-6.479 5.271-11.749 11.749-11.749s11.749,5.271 11.749,11.749c-5.68434e-14,6.479-5.27,11.749-11.749,11.749z' />
        </g>
      </svg>
      <Break step={5} />
      <Text font={{ size: 16, lineHeight: '19px' }} color={EColor.redDC}>
        Настройки
      </Text>
    </Link>
  );
}