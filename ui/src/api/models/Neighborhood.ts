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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Neighborhood
 */
export interface Neighborhood {
    /**
     * 
     * @type {string}
     * @memberof Neighborhood
     */
    neighborhoodName?: string;
    /**
     * 
     * @type {string}
     * @memberof Neighborhood
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Neighborhood
     */
    county?: string;
    /**
     * 
     * @type {string}
     * @memberof Neighborhood
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Neighborhood
     */
    metropolitan?: string;
}

export function NeighborhoodFromJSON(json: any): Neighborhood {
    return NeighborhoodFromJSONTyped(json, false);
}

export function NeighborhoodFromJSONTyped(json: any, ignoreDiscriminator: boolean): Neighborhood {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'neighborhoodName': !exists(json, 'neighborhoodName') ? undefined : json['neighborhoodName'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'county': !exists(json, 'county') ? undefined : json['county'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'metropolitan': !exists(json, 'metropolitan') ? undefined : json['metropolitan'],
    };
}

export function NeighborhoodToJSON(value?: Neighborhood | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'neighborhoodName': value.neighborhoodName,
        'city': value.city,
        'county': value.county,
        'state': value.state,
        'metropolitan': value.metropolitan,
    };
}


