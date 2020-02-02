/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InternshipInfo,
    InternshipInfoFromJSON,
    InternshipInfoToJSON,
    Neighborhood,
    NeighborhoodFromJSON,
    NeighborhoodToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface AddInternshipToUserRequest {
    locationCity?: string;
    locationState?: string;
    startDate?: number;
    endDate?: number;
    company?: string;
    username?: string;
}

export interface AddNeighborhoodToInternshipRequest {
    neighborhoodName?: string;
    city?: string;
    username?: string;
}

export interface AddUserPrefrencesRequest {
    username?: string;
    q1Response?: number;
    q2Response?: number;
    q3Response?: number;
    q4Response?: number;
    q5Response?: number;
    q6Response?: number;
    q7Response?: number;
    q8Response?: number;
    q9Response?: number;
    q10Response?: number;
}

export interface CreateFullUserRequest {
    username?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    age?: number;
    q1?: number;
    q2?: number;
    q3?: number;
    q4?: number;
    q5?: number;
    q6?: number;
    q7?: number;
    q8?: number;
    q9?: number;
    q10?: number;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    bio?: string;
}

export interface CreateUserRequest {
    username?: string;
    password?: string;
    email?: string;
}

export interface GetNeighborhoodsRequest {
    locationCity?: string;
}

export interface GetUserRequest {
    username?: string;
}

export interface UpdateFacebookRequest {
    username?: string;
    facebookLink?: string;
}

/**
 * no description
 */
export class InternioApi extends runtime.BaseAPI {

    /**
     * Adding an internship to a User
     */
    async addInternshipToUserRaw(requestParameters: AddInternshipToUserRequest): Promise<runtime.ApiResponse<InternshipInfo>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.locationCity !== undefined) {
            queryParameters['locationCity'] = requestParameters.locationCity;
        }

        if (requestParameters.locationState !== undefined) {
            queryParameters['locationState'] = requestParameters.locationState;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = requestParameters.startDate;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = requestParameters.endDate;
        }

        if (requestParameters.company !== undefined) {
            queryParameters['company'] = requestParameters.company;
        }

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/addInternship`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InternshipInfoFromJSON(jsonValue));
    }

    /**
     * Adding an internship to a User
     */
    async addInternshipToUser(requestParameters: AddInternshipToUserRequest): Promise<InternshipInfo> {
        const response = await this.addInternshipToUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Adding a Neighborhood to an Internship
     */
    async addNeighborhoodToInternshipRaw(requestParameters: AddNeighborhoodToInternshipRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.neighborhoodName !== undefined) {
            queryParameters['neighborhoodName'] = requestParameters.neighborhoodName;
        }

        if (requestParameters.city !== undefined) {
            queryParameters['city'] = requestParameters.city;
        }

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/addNeighborhoodToInternship`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adding a Neighborhood to an Internship
     */
    async addNeighborhoodToInternship(requestParameters: AddNeighborhoodToInternshipRequest): Promise<void> {
        await this.addNeighborhoodToInternshipRaw(requestParameters);
    }

    /**
     * Update preferences
     */
    async addUserPrefrencesRaw(requestParameters: AddUserPrefrencesRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.q1Response !== undefined) {
            queryParameters['Q1 Response'] = requestParameters.q1Response;
        }

        if (requestParameters.q2Response !== undefined) {
            queryParameters['Q2 Response'] = requestParameters.q2Response;
        }

        if (requestParameters.q3Response !== undefined) {
            queryParameters['Q3 Response'] = requestParameters.q3Response;
        }

        if (requestParameters.q4Response !== undefined) {
            queryParameters['Q4 Response'] = requestParameters.q4Response;
        }

        if (requestParameters.q5Response !== undefined) {
            queryParameters['Q5 Response'] = requestParameters.q5Response;
        }

        if (requestParameters.q6Response !== undefined) {
            queryParameters['Q6 Response'] = requestParameters.q6Response;
        }

        if (requestParameters.q7Response !== undefined) {
            queryParameters['Q7 Response'] = requestParameters.q7Response;
        }

        if (requestParameters.q8Response !== undefined) {
            queryParameters['Q8 Response'] = requestParameters.q8Response;
        }

        if (requestParameters.q9Response !== undefined) {
            queryParameters['Q9 Response'] = requestParameters.q9Response;
        }

        if (requestParameters.q10Response !== undefined) {
            queryParameters['Q10 Response'] = requestParameters.q10Response;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/updatepreferences`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update preferences
     */
    async addUserPrefrences(requestParameters: AddUserPrefrencesRequest): Promise<void> {
        await this.addUserPrefrencesRaw(requestParameters);
    }

    /**
     * Create Ultimate user
     */
    async createFullUserRaw(requestParameters: CreateFullUserRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.firstname !== undefined) {
            queryParameters['firstname'] = requestParameters.firstname;
        }

        if (requestParameters.lastname !== undefined) {
            queryParameters['lastname'] = requestParameters.lastname;
        }

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        if (requestParameters.age !== undefined) {
            queryParameters['age'] = requestParameters.age;
        }

        if (requestParameters.q1 !== undefined) {
            queryParameters['Q1'] = requestParameters.q1;
        }

        if (requestParameters.q2 !== undefined) {
            queryParameters['Q2'] = requestParameters.q2;
        }

        if (requestParameters.q3 !== undefined) {
            queryParameters['Q3'] = requestParameters.q3;
        }

        if (requestParameters.q4 !== undefined) {
            queryParameters['Q4'] = requestParameters.q4;
        }

        if (requestParameters.q5 !== undefined) {
            queryParameters['Q5'] = requestParameters.q5;
        }

        if (requestParameters.q6 !== undefined) {
            queryParameters['Q6'] = requestParameters.q6;
        }

        if (requestParameters.q7 !== undefined) {
            queryParameters['Q7'] = requestParameters.q7;
        }

        if (requestParameters.q8 !== undefined) {
            queryParameters['Q8'] = requestParameters.q8;
        }

        if (requestParameters.q9 !== undefined) {
            queryParameters['Q9'] = requestParameters.q9;
        }

        if (requestParameters.q10 !== undefined) {
            queryParameters['Q10'] = requestParameters.q10;
        }

        if (requestParameters.linkedin !== undefined) {
            queryParameters['linkedin'] = requestParameters.linkedin;
        }

        if (requestParameters.instagram !== undefined) {
            queryParameters['instagram'] = requestParameters.instagram;
        }

        if (requestParameters.facebook !== undefined) {
            queryParameters['facebook'] = requestParameters.facebook;
        }

        if (requestParameters.bio !== undefined) {
            queryParameters['bio'] = requestParameters.bio;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/createFullUser`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create Ultimate user
     */
    async createFullUser(requestParameters: CreateFullUserRequest): Promise<void> {
        await this.createFullUserRaw(requestParameters);
    }

    /**
     * Create user
     */
    async createUserRaw(requestParameters: CreateUserRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/createuser`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest): Promise<void> {
        await this.createUserRaw(requestParameters);
    }

    /**
     * getting list of neighborhoods in a city
     */
    async getNeighborhoodsRaw(requestParameters: GetNeighborhoodsRequest): Promise<runtime.ApiResponse<Array<Neighborhood>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.locationCity !== undefined) {
            queryParameters['locationCity'] = requestParameters.locationCity;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/getneighborhoods`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NeighborhoodFromJSON));
    }

    /**
     * getting list of neighborhoods in a city
     */
    async getNeighborhoods(requestParameters: GetNeighborhoodsRequest): Promise<Array<Neighborhood>> {
        const response = await this.getNeighborhoodsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Getting user info
     */
    async getUserRaw(requestParameters: GetUserRequest): Promise<runtime.ApiResponse<User>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Getting user info
     */
    async getUser(requestParameters: GetUserRequest): Promise<User> {
        const response = await this.getUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * load data
     */
    async loadDataRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/data`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * load data
     */
    async loadData(): Promise<void> {
        await this.loadDataRaw();
    }

    /**
     * Updating Facebook
     */
    async updateFacebookRaw(requestParameters: UpdateFacebookRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.facebookLink !== undefined) {
            queryParameters['facebook link'] = requestParameters.facebookLink;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/internio/UpdateFacebook`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updating Facebook
     */
    async updateFacebook(requestParameters: UpdateFacebookRequest): Promise<void> {
        await this.updateFacebookRaw(requestParameters);
    }

}
