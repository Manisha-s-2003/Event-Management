import { handleApiError } from '../../utils/handleError';
import EventApi from '../../api/eventApi';
import { ApiResponseModel } from 'src/models/apiResponseModel';

class EventService {
    static async getAllEvents(): Promise<ApiResponseModel> {
        try {
            const response = await EventApi.GetAllEvents();
            return response.data as ApiResponseModel;
        } catch (error: any) {
            return {
                success: false,
                message: 'Error fetching all events',
                data: null,
                error: handleApiError(error),
            };
        }
    }

    static async getEventById(eventId: string): Promise<ApiResponseModel> {
        try {
            const response = await EventApi.GetEventById(eventId);
            return response.data as ApiResponseModel;
        } catch (error: any) {
            return {
                success: false,
                message: `Error fetching event with ID ${eventId}`,
                data: null,
                error: handleApiError(error),
            };
        }
    }

    static async createEvent(eventData: any): Promise<ApiResponseModel> {
        try {
            const response = await EventApi.CreateEvent(eventData);
            return response.data as ApiResponseModel;
        } catch (error: any) {
            return {
                success: false,
                message: 'Error creating event',
                data: null,
                error: handleApiError(error),
            };
        }
    }

    static async updateEvent(eventId: string, eventData: any): Promise<ApiResponseModel> {
        try {
            const response = await EventApi.UpdateEvent(eventId, eventData);
            return response.data as ApiResponseModel;
        } catch (error: any) {
            return {
                success: false,
                message: `Error updating event with ID ${eventId}`,
                data: null,
                error: handleApiError(error),
            };
        }
    }

    static async deleteEvent(eventId: string): Promise<ApiResponseModel> {
        try {
            const response = await EventApi.DeleteEvent(eventId);
            return response.data as ApiResponseModel;
        } catch (error: any) {
            return {
                success: false,
                message: `Error deleting event with ID ${eventId}`,
                data: null,
                error: handleApiError(error),
            };
        }
    }
}

export default EventService;