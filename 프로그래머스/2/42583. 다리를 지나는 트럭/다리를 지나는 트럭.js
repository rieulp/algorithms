function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = []; 
    let limit = weight; 

    const trucks = truck_weights.map((truckWeight) => ({
        weight: truckWeight,
        end: 0
    }));

    while (trucks.length > 0 || bridge.length > 0) {
        if (bridge.length > 0 && bridge[0].end <= time) {
            const arrivedTruck = bridge.shift();
            limit += arrivedTruck.weight;  
        }

        if (trucks.length > 0 && trucks[0].weight <= limit) {
            const currentTruck = trucks.shift();
            currentTruck.end = time + bridge_length;  
            bridge.push(currentTruck);
            limit -= currentTruck.weight;  
        } else if (bridge.length > 0) {
            time = bridge[0].end - 1;  
        }

        time++;
    }

    return time;
}