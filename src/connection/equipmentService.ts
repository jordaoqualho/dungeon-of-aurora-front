import { backend } from "@/config";
import { Equipment, ResponseAxios } from "@/types";

class EquipmentService {
  async get(): Promise<Equipment[]> {
    const response = await backend.get<ResponseAxios<Equipment[]>>(
      `/equipment`
    );
    return response.data.data;
  }
}

export const equipmentService = new EquipmentService();
