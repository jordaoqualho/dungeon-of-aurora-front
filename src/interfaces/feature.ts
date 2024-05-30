import { FeatureType } from "@/types";

export type FeatureFilters = {
  name?: string;
  level?: number;
  class: string;
  subClass?: string;
  originalName?: string;
};

export interface FeatureInterface {
  get(): Promise<FeatureType[]>;
  search(search: FeatureFilters): Promise<FeatureType[]>;
  post(data: Partial<FeatureType>): Promise<FeatureType>;
  put(data: FeatureType): Promise<FeatureType>;
  delete(anotationId: string): Promise<FeatureType>;
}
