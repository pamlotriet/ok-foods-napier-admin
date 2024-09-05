import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { SpecialsModel } from "../../shared/models/specials.model";
import { Guid } from "guid-typescript";

export const SpecialsActions = createActionGroup({
  source: "SpecialsDto",
  events: {
    getFoodSpecials: emptyProps(),
    getFoodSpecialsSuccess: props<{ foodSpecials: SpecialsModel[] }>(),
    deleteSpecialItemById: props<{ id: Guid }>(),
    deleteSpecialItemSuccess: emptyProps(),
    deleteAllFoodSpecials: emptyProps(),
    startUpload: props<{
      file: File;
      product: SpecialsModel;
      url: string;
      token: string;
    }>(),
    uploadSuccess: props<{
      file: File;
      product: SpecialsModel;
      url: string;
      token: string;
    }>(),
    uploadFailure: props<{ fileName: string; error: any }>(),
    uploadProduct: props<{
      file: File;
      product: SpecialsModel;
    }>(),
    uploadProductSuccess: emptyProps(),
    uploadProductFail: props<{ file: File; url: string; token: string }>(),
    deleteFile: props<{ fileName: string; url: string; token: string }>(),
  },
});
