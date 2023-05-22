import apiUrls from "@config/apiUrls";
import axios, { AxiosResponse } from "axios";
import { Entity, EntityResponse } from "types";

class EntityService {
  /**
   * Login
   * @param id
   */

  async getEntity(id: string): Promise<EntityResponse> {
    try {
      const response = await axios.get<EntityResponse>(
        `${apiUrls.ENTITY}/${id}`
      );
      const { data } = response;

      if (response.status === 200) {
        return data;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("Fetch Entity by ID failed.");
  }

  /**
   * Create Entity Function
   * @param entity
   */
  async createEntity(entity: Entity): Promise<EntityResponse> {
    try {
      const response = await axios.post<EntityResponse>(
        apiUrls.ENTITY,
        JSON.stringify(entity)
      );
      const { data } = response;

      if (response.status === 201) {
        return data;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("Creating entity failed.");
  }

  /**
   * Delete Entity Function
   * @param id
   */
  async deleteEntity(id: string): Promise<AxiosResponse> {
    try {
      const response = await axios.delete(`${apiUrls.ENTITY}/${id}`);
      const { data } = response;

      if (response.status === 200) {
        return data;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("deleting Entity failed.");
  }
  /**
   * Update Entity Function
   * @param id
   * @param entity
   */
  async updateEntity(id: string, entity: Entity): Promise<EntityResponse> {
    try {
      const response = await axios.patch<EntityResponse>(
        `${apiUrls.ENTITY}/${id}`,
        JSON.stringify(entity)
      );
      const { data } = response;

      if (response.status === 200) {
        return data;
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status || error.message);
      } else {
        console.log(error.message);
      }
    }
    throw new Error("Updating entity failed.");
  }
}

const entityService = new EntityService();

export default entityService;
