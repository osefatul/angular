export interface Room {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
}

export interface hotelList {
    _id: number;
    hotelName: string;
    type: string;
    city: number;
    address: string;
    distance: string;
    photos: string[];
    title: string;
    desc: string;
    rooms: string[];
    cheapestPrice: number;
    featured: boolean;
    id: string
}