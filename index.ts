/**
* @Method: Returns the list of customers for which the distance is <= 100kms.
* @Param {customer_records[](json),latitude(Dublin latitude in radians),longitude}
* @Return {customers_list}
*/
export function find_customers(customer_records: any, latitude: number, longitude: number): any {
    let customers_list = [];
    const radius_earth = 6371; // radius of earth
    for (var i = 0; i < customer_records.length; i++) {
        var lat1 = degrees_to_radians(latitude);
        var long1 = degrees_to_radians(longitude);
        var lat2 = degrees_to_radians(customer_records[i].latitude);
        var long2 = degrees_to_radians(customer_records[i].longitude);
        var distanceBetweenTwoPoints = getDistance(lat1, lat2, long1, long2, radius_earth);
        if (distanceBetweenTwoPoints <= 100) {
            customers_list.push({ 'name': customer_records[i].name, 'user_id': customer_records[i].user_id })
        }
    }
    const sortedCustomers = customers_list.sort(function(a, b){
        return a.user_id - b.user_id;
    });    
    return sortedCustomers;
}

/**
* @Method: Convert the Degrees to radian by taking degrees as input
* @Param {degrees:number}
* @Return {radian:number}
*/
export function degrees_to_radians(degrees: any) {
    const pi = Math.PI;
    return degrees * (pi / 180);
}

/**
* @Method: Returns the distance between two points from Dublin Area to customer point .
* @Param {lat1:number(Dublin Latitude),lat2:(Customer Latitude),long1(Dublin Longitude),long2(Customer Longitude)}
* @Return {distance:number}
*/
export function getDistance(lat1: number,lat2: number,long1: number,long2: number,radius: number) {
    const angle = Math.acos(Math.sin(lat1)*Math.sin(lat2) + Math.cos(lat1)*Math.cos(lat2)*Math.cos(Math.abs(long1-long2)));
    return radius*angle;
}

