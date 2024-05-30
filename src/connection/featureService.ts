import { backend } from "@/config";
import { FeatureFilters, FeatureInterface } from "@/interfaces";
import { FeatureType, ResponseAxios } from "@/types";

class FeatureService implements FeatureInterface {
  async get(): Promise<FeatureType[]> {
    const response = await backend.get<ResponseAxios<FeatureType[]>>(
      `/feature`
    );
    return response.data.data;
  }

  async search(filters: FeatureFilters): Promise<FeatureType[]> {
    const queryString = Object.entries(filters)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`
      )
      .join("&");

    const response = await backend.get<ResponseAxios<FeatureType[]>>(
      `/feature/search/?${queryString}`
    );
    return response.data.data;
  }

  async post(feature: Partial<FeatureType>): Promise<FeatureType> {
    const response = await backend.post<ResponseAxios<FeatureType>>(
      `/feature`,
      feature
    );
    return response.data.data;
  }

  async put(feature: FeatureType): Promise<FeatureType> {
    if (!feature._id) throw new Error("No id for the feature");

    const response = await backend.put<ResponseAxios<FeatureType>>(
      `/feature/${feature._id}`,
      feature
    );
    return response.data.data;
  }

  async delete(featureId: string): Promise<FeatureType> {
    const response = await backend.delete<ResponseAxios<FeatureType>>(
      `/feature/${featureId}`
    );
    return response.data.data;
  }
}

export const featureService: FeatureInterface = new FeatureService();
