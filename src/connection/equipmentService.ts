import { backend } from "@/config";
import { EquipmentType, ResponseAxios } from "@/types";

class EquipmentService {
  async get(): Promise<EquipmentType[]> {
    const response = await backend.get<ResponseAxios<EquipmentType[]>>(
      `/equipment`
    );
    return response.data.data;
  }

  async getById(id: string): Promise<EquipmentType[]> {
    const response = await backend.get<ResponseAxios<EquipmentType[]>>(
      `/equipment/${id}`
    );
    return response.data.data;
  }
}

export const equipmentService = new EquipmentService();
