import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'PCD',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44342/',
    redirectUri: baseUrl,
    clientId: 'PCD_App',
    responseType: 'code',
    scope: 'offline_access PCD',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44342',
      rootNamespace: 'PCD',
    },
  },
} as Environment;
