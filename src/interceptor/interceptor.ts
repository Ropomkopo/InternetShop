import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError((err: any) => {
          let isErrorCodeFromDto;
          let customErrorCode;

          // If Error from DTO
          if (err.message && err.message.message && err.message.message[0] && err.message.message[0].constraints) {
            isErrorCodeFromDto = Number(Object.values(err.message.message[0].constraints)[0]);
            throw this.throwExeption(err, isErrorCodeFromDto);
          } else {

            // Custom Error from controller
            if (err.response && err.response.errorCode) {
              customErrorCode = Number(err.response.errorCode);
              throw this.throwExeption(err, customErrorCode);
            } else {
              throw err;
            }
          }
        }),
      );
  }

  private throwExeption(err: any, errorCode): HttpException {
    return new HttpException({
      error: {
        target: err.response.target ? err.response.target : ' ',
        errorCode: errorCode,
      },
    }, HttpStatus.BAD_REQUEST);
  }
}
