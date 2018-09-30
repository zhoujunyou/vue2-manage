import fetch from '@/config/fetch'
export const loginOA = data => fetch('/mwee/checkLogin/' ,data);

export const findShopByAccount = data => fetch('/mwee/findAccount/' ,data);
export const findAccountLogs = data => fetch('/mwee/findAccountLogs/' ,data);

