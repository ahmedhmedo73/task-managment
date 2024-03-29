import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let _token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im50dXNlciIsInJvbGUiOiJhZG1pbiIsIm5iZiI6MTcwNTExMjcwMiwiZXhwIjoxNzA1MTE1NzAyLCJpYXQiOjE3MDUxMTI3MDJ9.Z375fERRhzw9aEyzQ8uKw0N76IZ0gSQHv0sHfZ86Wjs';
  let request = req.clone({
    setHeaders: {
      Authorization: 'bearer ' + _token,
    },
  });
  return next(request);
};
