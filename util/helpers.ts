import { CovenAsset } from "../model/types";

export const capitalizeFirst = (val: string) => {
  return val.charAt(0).toUpperCase() + val.substr(1);
};

export const getTrait = (asset: CovenAsset, traitName: string) => {
  return asset.traits.filter((t) => t.trait_type === traitName)[0].value;
};
