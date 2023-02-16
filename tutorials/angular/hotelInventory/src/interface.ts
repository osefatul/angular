export interface Room {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomList {
    roomNumber: number | null;
    roomType: string;
    amenities: string;
    price?: number | null;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
}

export interface HotelList {
    _id: number;
    name: string;
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