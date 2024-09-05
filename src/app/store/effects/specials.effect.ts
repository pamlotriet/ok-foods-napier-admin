import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { SpecialsActions } from "../actions/specials.actions";
import { SpecialsService } from "../../shared/services/specials.service";
import { SpecialsModel } from "../../shared/models/specials.model";
import { AzureBlobService } from "../../shared/services/azure-blob.service";
import { UrlSegment } from "@angular/router";

@Injectable()
export class SpecialsEffects {
  getFoodSpecials = createEffect(
    (actions$ = inject(Actions), specialsService = inject(SpecialsService)) => {
      return actions$.pipe(
        ofType(SpecialsActions.getFoodSpecials),
        mergeMap(() =>
          specialsService
            .getFoodSpecials()
            .pipe(
              map((foodSpecials: SpecialsModel[]) =>
                SpecialsActions.getFoodSpecialsSuccess({ foodSpecials })
              )
            )
        )
      );
    }
  );

  deleteSpecialsItem = createEffect(
    (actions$ = inject(Actions), specialsService = inject(SpecialsService)) => {
      return actions$.pipe(
        ofType(SpecialsActions.deleteSpecialItemById),
        mergeMap((action) => {
          return specialsService
            .deleteFoodSpecialsItem(action.id)
            .pipe(map(() => SpecialsActions.deleteSpecialItemSuccess()));
        })
      );
    }
  );

  deleteAllFoodSpecials = createEffect(
    (actions$ = inject(Actions), specialsService = inject(SpecialsService)) => {
      return actions$.pipe(
        ofType(SpecialsActions.deleteAllFoodSpecials),
        mergeMap(() => {
          return specialsService
            .deleteAllFoodSpecials()
            .pipe(map(() => SpecialsActions.deleteSpecialItemSuccess()));
        })
      );
    }
  );

  uploadFiles = createEffect(
    (
      actions$ = inject(Actions),
      fieluploadService = inject(AzureBlobService)
    ) => {
      return actions$.pipe(
        ofType(SpecialsActions.startUpload),
        mergeMap(({ file, product, url, token }) => {
          return fieluploadService.uploadFile(file, url, token).pipe(
            map(() =>
              SpecialsActions.uploadSuccess({ file, product, url, token })
            ),
            catchError((error) =>
              of(SpecialsActions.uploadFailure({ fileName: file.name, error }))
            )
          );
        })
      );
    }
  );

  uploadProduct = createEffect(
    (actions$ = inject(Actions), specialsService = inject(SpecialsService)) => {
      return actions$.pipe(
        ofType(SpecialsActions.uploadSuccess),
        mergeMap(({ file, product, url, token }) => {
          return specialsService.uploadProduct(product).pipe(
            map(() => SpecialsActions.uploadProductSuccess()),
            catchError((error) =>
              of(
                SpecialsActions.uploadProductFail({
                  file: file,
                  url: url,
                  token: token,
                })
              )
            )
          );
        })
      );
    }
  );

  handleProductUploadFailure = createEffect(
    (
      actions$ = inject(Actions),
      fieluploadService = inject(AzureBlobService)
    ) => {
      return actions$.pipe(
        ofType(SpecialsActions.uploadProductFail),
        mergeMap(({ file, url, token }) => {
          return fieluploadService.deleteFile(file.name, url, token).pipe(
            map(() =>
              SpecialsActions.deleteFile({
                fileName: file.name,
                token: token,
                url: url,
              })
            ),
            catchError((error) =>
              of(SpecialsActions.uploadProductFail({ file, url, token }))
            )
          );
        })
      );
    }
  );
}
